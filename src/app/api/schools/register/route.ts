import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools, schoolAdmins, users } from '@/lib/db/schema';
import { schoolRegisterSchema } from '@/lib/validation';
import { hashPassword } from '@/lib/auth/password';
import { createSession } from '@/lib/auth/session';
import { generateSchoolRegistrationCode } from '@/lib/schools';
import { newId } from '@/lib/id';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = schoolRegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { schoolName, country, city, adminName, adminEmail, password } = parsed.data;

  const db = await getDb();
  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, adminEmail)).limit(1);
  if (existing.length > 0) {
    return NextResponse.json({ error: 'Email sudah terdaftar. Silakan masuk.' }, { status: 409 });
  }

  // registrationCode harus unik — sangat kecil kemungkinan tabrakan (nanoid 5 char),
  // tapi tetap coba beberapa kali biar aman daripada gagal total.
  let registrationCode = '';
  for (let attempt = 0; attempt < 5; attempt++) {
    const candidate = generateSchoolRegistrationCode(schoolName);
    const clash = await db
      .select({ id: schools.id })
      .from(schools)
      .where(eq(schools.registrationCode, candidate))
      .limit(1);
    if (clash.length === 0) {
      registrationCode = candidate;
      break;
    }
  }
  if (!registrationCode) {
    return NextResponse.json({ error: 'Gagal membuat kode sekolah, coba lagi.' }, { status: 500 });
  }

  const schoolId = newId('sch');
  const userId = newId('usr');
  const passwordHash = await hashPassword(password);

  await db.insert(schools).values({
    id: schoolId,
    name: schoolName,
    country,
    city: city || null,
    registrationCode,
    status: 'pending'
  });

  await db.insert(users).values({
    id: userId,
    name: adminName,
    email: adminEmail,
    passwordHash,
    role: 'school_admin',
    avatarSeed: userId,
    plan: 'free'
  });

  await db.insert(schoolAdmins).values({
    id: newId('scha'),
    schoolId,
    userId,
    role: 'owner'
  });

  await createSession(userId, 'school');

  return NextResponse.json({
    ok: true,
    school: { id: schoolId, name: schoolName, registrationCode, status: 'pending' }
  });
});
