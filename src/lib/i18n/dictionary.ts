import en, { type Dictionary } from './dictionaries/en';
import id from './dictionaries/id';
import es from './dictionaries/es';
import fr from './dictionaries/fr';
import ar from './dictionaries/ar';
import ja from './dictionaries/ja';
import { deepMerge, type DeepPartial } from './merge';
import type { Locale } from './locales';

const partials: Record<Exclude<Locale, 'en' | 'id'>, DeepPartial<Dictionary>> = { es, fr, ar, ja };

const cache = new Map<Locale, Dictionary>();

export function getDictionary(locale: Locale): Dictionary {
  const cached = cache.get(locale);
  if (cached) return cached;

  let dict: Dictionary;
  if (locale === 'en') dict = en;
  else if (locale === 'id') dict = id;
  else dict = deepMerge(en, partials[locale]);

  cache.set(locale, dict);
  return dict;
}

export type { Dictionary };
