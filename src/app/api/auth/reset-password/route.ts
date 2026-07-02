import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users, passwordResetTokens } from '@/lib/db/schema';
import { resetPasswordSchema } from '@/lib/validation';
import { sha256Hex } from '@/lib/auth/crypto-utils';
import { hashPassword } from '@/lib/auth/password';
import { destroyAllSessionsForUser } from '@/lib/auth/session';

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = resetPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { token, password } = parsed.data;

  const tokenHash = await sha256Hex(token);
  const db = await getDb();
  const rows = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.tokenHash, tokenHash)).limit(1);
  const record = rows[0];

  if (!record || record.usedAt || record.expiresAt.getTime() < Date.now()) {
    return NextResponse.json({ error: 'Link reset tidak valid atau sudah kedaluwarsa.' }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  await db.update(users).set({ passwordHash, updatedAt: new Date() }).where(eq(users.id, record.userId));
  await db.update(passwordResetTokens).set({ usedAt: new Date() }).where(eq(passwordResetTokens.id, record.id));
  await destroyAllSessionsForUser(record.userId);

  return NextResponse.json({ ok: true });
}
