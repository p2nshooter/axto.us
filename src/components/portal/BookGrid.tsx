'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';

type Book = {
  id: string;
  slug: string;
  titleEn: string;
  titleId: string;
  coverEmoji: string;
  coverPalette: string;
  isPremium: boolean;
};

export function BookGrid({ titleKey, books }: { titleKey: string; books: Book[] }) {
  const { t, locale } = useTranslation();
  const title = (b: Book) => (locale === 'id' ? b.titleId : b.titleEn);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">{t(titleKey)}</h1>
      {books.length === 0 ? (
        <p className="text-slate-400">—</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {books.map((book) => (
            <Link key={book.id} href={`/app/read/${book.slug}`} className="group">
              <BookCover emoji={book.coverEmoji} palette={book.coverPalette} />
              <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
                {title(book)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
