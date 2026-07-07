import { cookies } from 'next/headers';
import { eq, and, gt } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { sessions, users } from '@/lib/db/schema';
import { randomToken, sha256Hex } from './crypto-utils';

export const SESSION_COOKIE = 'axto_session';
const SESSION_DAYS = 30;

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'school_admin';
  locale: string;
  avatarSeed: string;
  plan: string;
  planExpiresAt: Date | null;
  loginSource: 'client' | 'admin' | 'school';
};

export async function createSession(userId: string, loginSource: 'client' | 'admin' | 'school' = 'client') {
  const db = await getDb();
  const raw = randomToken(32);
  const id = await sha256Hex(raw);
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  await db.insert(sessions).values({ id, userId, expiresAt, loginSource });

  const store = await cookies();
  store.set(SESSION_COOKIE, raw, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: expiresAt
  });
}

export async function destroyCurrentSession() {
  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;
  if (raw) {
    const id = await sha256Hex(raw);
    const db = await getDb();
    await db.delete(sessions).where(eq(sessions.id, id));
  }
  store.delete(SESSION_COOKIE);
}

export async function destroyAllSessionsForUser(userId: string) {
  const db = await getDb();
  await db.delete(sessions).where(eq(sessions.userId, userId));
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  const id = await sha256Hex(raw);
  const db = await getDb();

  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      locale: users.locale,
      avatarSeed: users.avatarSeed,
      plan: users.plan,
      planExpiresAt: users.planExpiresAt,
      loginSource: sessions.loginSource
    })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(and(eq(sessions.id, id), gt(sessions.expiresAt, new Date())))
    .limit(1);

  return rows[0] ?? null;
}
