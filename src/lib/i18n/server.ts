import { cookies, headers } from 'next/headers';
import { DEFAULT_LOCALE, isLocale, type Locale } from './locales';
import { LOCALE_COOKIE } from './cookie';

// Map a visitor's country (Cloudflare's cf-ipcountry header) to the closest
// supported reading language, so a first-time visitor sees the site — text AND
// read-aloud voice — in their own language automatically (owner: "auto bahasa
// mengikuti IP pengunjung"). Only the six supported locales are used; anything
// else falls through to Accept-Language, then the default.
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  ID: 'id', MY: 'id', BN: 'id',
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', KW: 'ar', BH: 'ar', OM: 'ar',
  JO: 'ar', IQ: 'ar', SY: 'ar', LB: 'ar', LY: 'ar', DZ: 'ar', MA: 'ar',
  TN: 'ar', YE: 'ar', SD: 'ar', PS: 'ar',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es',
  SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr',
  JP: 'ja',
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en', IN: 'en',
  PH: 'en', SG: 'en', NG: 'en', ZA: 'en',
};

export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  const fromCookie = store.get(LOCALE_COOKIE)?.value;
  // An explicit choice (cookie) always wins over auto-detection.
  if (isLocale(fromCookie)) return fromCookie;

  const hdrs = await headers();

  // Auto by visitor IP country (Cloudflare sets cf-ipcountry on every request).
  const country = (hdrs.get('cf-ipcountry') ?? '').toUpperCase();
  const byCountry = COUNTRY_TO_LOCALE[country];
  if (byCountry) return byCountry;

  // Then the browser's own language preference.
  const acceptLanguage = hdrs.get('accept-language') ?? '';
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0];
  if (isLocale(preferred)) return preferred;

  return DEFAULT_LOCALE;
}
