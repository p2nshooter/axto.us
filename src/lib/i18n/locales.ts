export const LOCALES = ['id', 'en', 'es', 'fr', 'ar', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl' }> = {
  id: { label: 'Indonesia', flag: '🇮🇩', dir: 'ltr' },
  en: { label: 'English', flag: '🇺🇸', dir: 'ltr' },
  es: { label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  ja: { label: '日本語', flag: '🇯🇵', dir: 'ltr' }
};

export const DEFAULT_LOCALE: Locale = 'id';

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
