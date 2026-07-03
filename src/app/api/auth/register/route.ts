import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { registerSchema } from '@/lib/validation';
import { hashPassword } from '@/lib/auth/password';
import { createSession } from '@/lib/auth/session';
import { newId } from '@/lib/id';
import { sendWelcomeEmail } from '@/lib/email';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { name, email, password, locale } = parsed.data;

  const db = await getDb();
  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) {
    return NextResponse.json({ error: 'Email sudah terdaftar. Silakan masuk.' }, { status: 409 });
  }

  const id = newId('usr');
  const passwordHash = await hashPassword(password);

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

  await createSession(id);
  await sendWelcomeEmail(email, name).catch((err) => console.error('welcome email failed', err));

  return NextResponse.json({ ok: true });
});
