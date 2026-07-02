import { cookies, headers } from 'next/headers';
import { DEFAULT_LOCALE, isLocale, type Locale } from './locales';
import { LOCALE_COOKIE } from './cookie';

export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  const fromCookie = store.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const hdrs = await headers();
  const acceptLanguage = hdrs.get('accept-language') ?? '';
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0];
  if (isLocale(preferred)) return preferred;

  return DEFAULT_LOCALE;
}
