import { nanoid } from 'nanoid';
import { eq, and } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools, schoolStudents, parentalConsents, users } from '@/lib/db/schema';

/** Kode registrasi sekolah — dipakai di link/kode pendaftaran siswa dan sebagai prefix nomor registrasi. */
export function generateSchoolRegistrationCode(schoolName: string): string {
  const slug = schoolName.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) || 'SCHOOL';
  return `${slug}-${nanoid(5).toUpperCase()}`;
}

function generateStudentRegistrationNumber(schoolRegistrationCode: string): string {
  return `${schoolRegistrationCode}-${nanoid(6).toUpperCase()}`;
}

/**
 * Cek apakah kedua syarat aktivasi siswa sekolah sudah terpenuhi (approve
 * sekolah + consent ortu terkonfirmasi). Kalau ya: generate nomor registrasi,
 * tandai status 'active', dan upgrade plan user ke 'school' selama 1 tahun.
 *
 * Aman dipanggil berkali-kali (idempotent) — dipanggil dari DUA tempat
 * berbeda (approve sekolah, dan konfirmasi consent ortu) karena urutan mana
 * yang terjadi lebih dulu tidak ditentukan.
 *
 * CATATAN: perpanjangan otomatis setelah 1 tahun belum dibangun di v1 — itu
 * perlu terhubung ke alur pembayaran/webhook yang sudah ada, belum disentuh
 * di sini.
 */
export async function activateSchoolStudentIfReady(schoolStudentId: string): Promise<void> {
  const db = await getDb();

  const rows = await db.select().from(schoolStudents).where(eq(schoolStudents.id, schoolStudentId)).limit(1);
  const record = rows[0];
  if (!record || record.activatedAt) return;
  if (record.status === 'rejected' || record.status === 'inactive') return;
  if (!record.schoolApprovedAt) return;

  const consentRows = await db
    .select({ id: parentalConsents.id })
    .from(parentalConsents)
    .where(and(eq(parentalConsents.schoolStudentId, schoolStudentId), eq(parentalConsents.status, 'confirmed')))
    .limit(1);
  if (consentRows.length === 0) return;

  const schoolRows = await db.select().from(schools).where(eq(schools.id, record.schoolId)).limit(1);
  const school = schoolRows[0];
  if (!school) return;

  const registrationNumber = generateStudentRegistrationNumber(school.registrationCode);
  const now = new Date();
  const oneYearFromNow = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

  await db
    .update(schoolStudents)
    .set({ status: 'active', activatedAt: now, registrationNumber })
    .where(eq(schoolStudents.id, schoolStudentId));

  await db
    .update(users)
    .set({ plan: 'school', planExpiresAt: oneYearFromNow, updatedAt: now })
    .where(eq(users.id, record.userId));
}
