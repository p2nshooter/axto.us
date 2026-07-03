import { NextResponse } from 'next/server';
import { getCurrentUser, type SessionUser } from './session';

export async function requireUser(): Promise<{ user: SessionUser } | { error: NextResponse }> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: NextResponse.json({ error: 'Belum masuk. Silakan login.' }, { status: 401 }) };
  }
  return { user };
}

export async function requireAdmin(): Promise<{ user: SessionUser } | { error: NextResponse }> {
  const result = await requireUser();
  if ('error' in result) return result;
  // Both conditions matter: role='admin' alone isn't enough — the session
  // must also have been created via the admin door (/admin-login). An admin
  // who logs in through the public /login form gets a perfectly normal
  // 'client' session and no admin access until they log in the other way.
  if (result.user.role !== 'admin' || result.user.loginSource !== 'admin') {
    return { error: NextResponse.json({ error: 'Akses admin diperlukan.' }, { status: 403 }) };
  }
  return result;
}
