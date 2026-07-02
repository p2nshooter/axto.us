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
  if (result.user.role !== 'admin') {
    return { error: NextResponse.json({ error: 'Akses admin diperlukan.' }, { status: 403 }) };
  }
  return result;
}
