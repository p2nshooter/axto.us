import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { loginSchema } from '@/lib/validation';
import { verifyPassword } from '@/lib/auth/password';
import { createSession } from '@/lib/auth/session';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const { email, password } = parsed.data;
  const portal = body?.portal === 'admin' ? 'admin' : body?.portal === 'school' ? 'school' : 'client';

  const db = await getDb();
  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  // Sama seperti admin: portal 'school' cuma menghasilkan session school_admin
  // kalau role user memang school_admin — email/password benar untuk akun
  // biasa tetap ditolak dengan pesan generik yang sama.
  if (portal === 'admin' && user.role !== 'admin') {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }
  if (portal === 'school' && user.role !== 'school_admin') {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  await createSession(user.id, portal);

  return NextResponse.json({ ok: true, role: user.role });
});
