'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import type { Locale } from '@/lib/i18n/locales';

type DefState = { word: string; loading: boolean; definition?: string; error?: string } | null;

export function WordHelperText({
  sentences,
  activeIndex,
  locale
}: {
  sentences: string[];
  activeIndex: number | null;
  locale: Locale;
}) {
  const { t } = useTranslation();
  const [def, setDef] = useState<DefState>(null);
  const activeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (activeIndex !== null && activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeIndex]);

  async function onWordClick(rawWord: string) {
    const word = rawWord.replace(/[^\p{L}\p{N}'-]/gu, '');
    if (!word) return;

    if (locale !== 'en') {
      setDef({ word, loading: false, error: t('reader.wordHelperHint') });
      return;
    }

    setDef({ word, loading: true });
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`);
      if (!res.ok) throw new Error('not found');
      const data = (await res.json()) as any;
      const meaning = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition as string | undefined;
      setDef({ word, loading: false, definition: meaning || 'No definition found.' });
    } catch {
      setDef({ word, loading: false, error: 'No definition found for this word.' });
    }
  }

  return (
    <div>
      <p>
        {sentences.map((sentence, si) => (
          <span
            key={si}
            ref={si === activeIndex ? activeRef : undefined}
            className={`rounded transition-colors ${si === activeIndex ? 'bg-yellow-100 dark:bg-yellow-500/20' : ''}`}
          >
            {sentence.split(/(\s+)/).map((w, wi) =>
              /\s+/.test(w) ? (
                <span key={wi}>{w}</span>
              ) : (
                <button
                  key={wi}
                  type="button"
                  onClick={() => onWordClick(w)}
                  className="rounded px-0.5 transition hover:bg-brand-100 dark:hover:bg-brand-500/20"
                >
                  {w}
                </button>
              )
            )}{' '}
          </span>
        ))}
      </p>

      {def && (
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 p-3 text-sm dark:border-brand-900/40 dark:bg-brand-900/20">
          <p className="font-semibold text-brand-700 dark:text-brand-300">{def.word}</p>
          {def.loading && <p className="text-slate-500">{t('common.loading')}</p>}
          {def.definition && <p className="mt-0.5 text-slate-600 dark:text-slate-300">{def.definition}</p>}
          {def.error && <p className="mt-0.5 text-slate-500">{def.error}</p>}
        </div>
      )}
    </div>
  );
}
