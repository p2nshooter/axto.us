'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';

type Row = {
  book: {
    id: string;
    slug: string;
    titleEn: string;
    titleId: string;
    coverEmoji: string;
    coverPalette: string;
    pageCount: number;
  };
  currentPage: number;
  completed: boolean;
  quizScore: number | null;
  updatedAt: number;
};

export function HistoryClient({ rows }: { rows: Row[] }) {
  const { t, locale } = useTranslation();
  const title = (b: Row['book']) => (locale === 'id' ? b.titleId : b.titleEn);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">{t('portal.history')}</h1>
      {rows.length === 0 ? (
        <p className="text-slate-400">—</p>
      ) : (
        <div className="space-y-3">
          {rows.map((r) => (
            <Link
              key={r.book.id}
              href={`/app/read/${r.book.slug}`}
              className="card flex items-center gap-4 transition hover:border-brand-300"
            >
              <BookCover emoji={r.book.coverEmoji} palette={r.book.coverPalette} className="w-16 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{title(r.book)}</p>
                <p className="text-xs text-slate-400">
                  {new Date(r.updatedAt).toLocaleDateString(locale)} · {t('reader.page')} {r.currentPage}/{r.book.pageCount}
                </p>
              </div>
              {r.completed ? (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  ✓ {r.quizScore !== null ? `${r.quizScore} pts` : ''}
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800">
                  …
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
