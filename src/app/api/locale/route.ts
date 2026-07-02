import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { getCurrentUser } from '@/lib/auth/session';
import { isLocale } from '@/lib/i18n/locales';
import { LOCALE_COOKIE } from '@/lib/i18n/cookie';

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;
  const locale = body?.locale;
  if (!isLocale(locale)) {
    return NextResponse.json({ error: 'Locale tidak valid.' }, { status: 400 });
  }

  const store = await cookies();
  store.set(LOCALE_COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });

  const user = await getCurrentUser();
  if (user) {
    const db = await getDb();
    await db.update(users).set({ locale, updatedAt: new Date() }).where(eq(users.id, user.id));
  }

  return NextResponse.json({ ok: true });
}
