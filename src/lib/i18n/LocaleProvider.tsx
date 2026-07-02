'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { getDictionary, type Dictionary } from './dictionary';
import { LOCALE_META, type Locale } from './locales';
import { LOCALE_COOKIE } from './cookie';

type Ctx = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<Ctx | null>(null);

function getByPath(obj: any, path: string): unknown {
  return path.split('.').reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), obj);
}

export function LocaleProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = next;
    document.documentElement.dir = LOCALE_META[next].dir;
    fetch('/api/locale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale: next })
    }).catch(() => {});
  }, []);

  const dict = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo(() => ({ locale, dict, setLocale }), [locale, dict, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}

export function useTranslation() {
  const { dict, locale, setLocale } = useLocale();
  const t = useCallback(
    (path: string): string => {
      const value = getByPath(dict, path);
      return typeof value === 'string' ? value : path;
    },
    [dict]
  );
  return { t, locale, setLocale, dict };
}
