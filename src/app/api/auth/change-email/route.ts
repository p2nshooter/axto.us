import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { changeEmailSchema } from '@/lib/validation';
import { verifyPassword } from '@/lib/auth/password';
import { requireUser } from '@/lib/auth/guards';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = changeEmailSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { currentPassword, newEmail } = parsed.data;

  const db = await getDb();
  const rows = await db.select().from(users).where(eq(users.id, guard.user.id)).limit(1);
  const user = rows[0];
  if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: 'Password saat ini salah.' }, { status: 400 });
  }

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, newEmail)).limit(1);
  if (existing[0] && existing[0].id !== user.id) {
    return NextResponse.json({ error: 'Email sudah digunakan.' }, { status: 409 });
  }

  await db.update(users).set({ email: newEmail, updatedAt: new Date() }).where(eq(users.id, user.id));

  return NextResponse.json({ ok: true, email: newEmail });
}
