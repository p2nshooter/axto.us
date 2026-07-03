import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb, getEnv } from '@/lib/db/client';
import { users, passwordResetTokens } from '@/lib/db/schema';
import { forgotPasswordSchema } from '@/lib/validation';
import { randomToken, sha256Hex } from '@/lib/auth/crypto-utils';
import { newId } from '@/lib/id';
import { sendPasswordResetEmail } from '@/lib/email';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = forgotPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Email tidak valid.' }, { status: 400 });
  }
  const { email } = parsed.data;

  const db = await getDb();
  const env = await getEnv();
  const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];

  // Always respond ok — don't reveal whether an email is registered.
  if (user) {
    const raw = randomToken(32);
    const tokenHash = await sha256Hex(raw);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await db.insert(passwordResetTokens).values({
      id: newId('prt'),
      userId: user.id,
      tokenHash,
      expiresAt
    });

    const resetUrl = `${env.APP_URL}/reset-password?token=${raw}`;
    await sendPasswordResetEmail(email, resetUrl).catch((err) => console.error('reset email failed', err));
  }

  return NextResponse.json({ ok: true });
});
