import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb, getEnv } from '@/lib/db/client';
import { users, schools, schoolStudents, parentalConsents } from '@/lib/db/schema';
import { registerSchema } from '@/lib/validation';
import { hashPassword } from '@/lib/auth/password';
import { createSession } from '@/lib/auth/session';
import { randomToken, sha256Hex } from '@/lib/auth/crypto-utils';
import { newId } from '@/lib/id';
import { sendWelcomeEmail, sendParentConsentEmail } from '@/lib/email';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { name, email, password, locale, schoolId, parentEmail } = parsed.data;

  const db = await getDb();
  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) {
    return NextResponse.json({ error: 'Email sudah terdaftar. Silakan masuk.' }, { status: 409 });
  }

  // Kalau daftar lewat sekolah, sekolahnya harus benar-benar ada & sudah di-approve axto
  // — sekolah 'pending'/'suspended' tidak boleh menerima siswa baru.
  let school: { id: string; name: string; registrationCode: string } | null = null;
  if (schoolId) {
    const rows = await db
      .select({ id: schools.id, name: schools.name, registrationCode: schools.registrationCode, status: schools.status })
      .from(schools)
      .where(eq(schools.id, schoolId))
      .limit(1);
    if (rows.length === 0 || rows[0].status !== 'approved') {
      return NextResponse.json({ error: 'Sekolah tidak ditemukan atau belum aktif.' }, { status: 400 });
    }
    school = rows[0];
  }

  const id = newId('usr');
  const passwordHash = await hashPassword(password);

  // Plan tetap 'free' dulu meskipun daftar lewat sekolah — baru di-upgrade ke
  // 'school' setelah DUA syarat terpenuhi (approve sekolah + consent ortu),
  // lihat activateSchoolStudentIfReady() di lib/schools.ts.
  await db.insert(users).values({
    id,
    name,
    email,
    passwordHash,
    locale: locale ?? 'id',
    avatarSeed: id,
    role: 'user',
    plan: 'free'
  });

  if (school && parentEmail) {
    const schoolStudentId = newId('schs');
    await db.insert(schoolStudents).values({
      id: schoolStudentId,
      schoolId: school.id,
      userId: id,
      status: 'pending'
    });

    const rawToken = randomToken(32);
    const tokenHash = await sha256Hex(rawToken);
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 hari

    await db.insert(parentalConsents).values({
      id: newId('cons'),
      schoolStudentId,
      parentEmail,
      tokenHash,
      expiresAt
    });

    const env = await getEnv();
    const confirmUrl = `${env.APP_URL}/consent?token=${rawToken}`;
    await sendParentConsentEmail(parentEmail, name, school.name, confirmUrl).catch((err) =>
      console.error('parent consent email failed', err)
    );
  }

  await createSession(id);
  await sendWelcomeEmail(email, name).catch((err) => console.error('welcome email failed', err));

  return NextResponse.json({
    ok: true,
    pendingSchoolApproval: Boolean(school)
  });
});
