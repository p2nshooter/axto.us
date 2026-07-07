import { NextRequest, NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schoolAdmins, schoolStudents } from '@/lib/db/schema';
import { requireSchoolAdmin } from '@/lib/auth/guards';
import { schoolStudentActionSchema } from '@/lib/validation';
import { activateSchoolStudentIfReady } from '@/lib/schools';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const auth = await requireSchoolAdmin();
  if ('error' in auth) return auth.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = schoolStudentActionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Aksi tidak valid.' }, { status: 400 });
  }
  const { action } = parsed.data;

  const db = await getDb();

  const adminRows = await db
    .select({ schoolId: schoolAdmins.schoolId })
    .from(schoolAdmins)
    .where(eq(schoolAdmins.userId, auth.user.id))
    .limit(1);
  const schoolId = adminRows[0]?.schoolId;
  if (!schoolId) {
    return NextResponse.json({ error: 'Akun ini tidak terhubung ke sekolah mana pun.' }, { status: 403 });
  }

  // Penting: pastikan siswa ini memang milik sekolah yang sedang login — tanpa
  // ini, satu sekolah bisa approve/reject/deactivate siswa sekolah lain.
  const rows = await db
    .select()
    .from(schoolStudents)
    .where(and(eq(schoolStudents.id, id), eq(schoolStudents.schoolId, schoolId)))
    .limit(1);
  const record = rows[0];
  if (!record) {
    return NextResponse.json({ error: 'Siswa tidak ditemukan.' }, { status: 404 });
  }

  if (action === 'approve') {
    if (record.status !== 'pending') {
      return NextResponse.json({ error: 'Siswa ini sudah diproses sebelumnya.' }, { status: 409 });
    }
    await db.update(schoolStudents).set({ schoolApprovedAt: new Date() }).where(eq(schoolStudents.id, id));
    await activateSchoolStudentIfReady(id);
  } else if (action === 'reject') {
    if (record.status !== 'pending') {
      return NextResponse.json({ error: 'Siswa ini sudah diproses sebelumnya.' }, { status: 409 });
    }
    await db.update(schoolStudents).set({ status: 'rejected' }).where(eq(schoolStudents.id, id));
  } else if (action === 'deactivate') {
    if (record.status !== 'active') {
      return NextResponse.json({ error: 'Hanya siswa aktif yang bisa dinonaktifkan.' }, { status: 409 });
    }
    // Nonaktifkan, BUKAN hapus — histori tetap tersimpan buat laporan alumni.
    // Kuota sekolah otomatis berkurang karena billing dihitung dari siswa aktif saja.
    await db.update(schoolStudents).set({ status: 'inactive', deactivatedAt: new Date() }).where(eq(schoolStudents.id, id));
  }

  return NextResponse.json({ ok: true });
});
