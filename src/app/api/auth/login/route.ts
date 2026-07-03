import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { loginSchema } from '@/lib/validation';
import { verifyPassword } from '@/lib/auth/password';
import { createSession } from '@/lib/auth/session';

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { email, password } = parsed.data;
  const portal = body?.portal === 'admin' ? 'admin' : 'client';

  const db = await getDb();
  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  // The admin door only ever creates a session for accounts that are already
  // admins — correct credentials for a non-admin account are rejected here,
  // same generic message, so this endpoint never reveals which emails exist
  // or which are admins.
  if (portal === 'admin' && user.role !== 'admin') {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  await createSession(user.id, portal);

  return NextResponse.json({ ok: true, role: user.role });
}
