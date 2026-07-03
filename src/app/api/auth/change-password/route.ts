import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { changePasswordSchema } from '@/lib/validation';
import { hashPassword, verifyPassword } from '@/lib/auth/password';
import { requireUser } from '@/lib/auth/guards';
import { createSession, destroyAllSessionsForUser } from '@/lib/auth/session';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = changePasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { currentPassword, newPassword } = parsed.data;

  const db = await getDb();
  const rows = await db.select().from(users).where(eq(users.id, guard.user.id)).limit(1);
  const user = rows[0];
  if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: 'Password saat ini salah.' }, { status: 400 });
  }

  const passwordHash = await hashPassword(newPassword);
  await db.update(users).set({ passwordHash, updatedAt: new Date() }).where(eq(users.id, user.id));

  // Invalidate every session (all devices) then issue a fresh one for this device,
  // preserving whether this device was on an admin-door session.
  await destroyAllSessionsForUser(user.id);
  await createSession(user.id, guard.user.loginSource);

  return NextResponse.json({ ok: true });
});
