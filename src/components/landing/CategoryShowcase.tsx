'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';

type Category = { id: string; slug: string; icon: string; nameEn: string; nameId: string };
type Book = {
  id: string;
  slug: string;
  titleEn: string;
  titleId: string;
  categoryId: string;
  coverEmoji: string;
  coverPalette: string;
  isPremium: boolean;
};

export function CategoryShowcase({ categories, books }: { categories: Category[]; books: Book[] }) {
  const { t, locale, dict } = useTranslation();
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return books;
    const cat = categories.find((c) => c.slug === active);
    if (!cat) return books;
    return books.filter((b) => b.categoryId === cat.id);
  }, [active, books, categories]);

  // Prefer the localized category name from the dictionary (all 6 languages);
  // fall back to the DB's EN/ID name only if a slug isn't mapped yet.
  const catName = (c: Category) =>
    (dict.categoryNames as Record<string, string>)[c.slug] ?? (locale === 'id' ? c.nameId : c.nameEn);
  const bookTitle = (b: Book) => (locale === 'id' ? b.titleId : b.titleEn);

  return (
    <section id="categories" className="container-page py-16 md:py-24">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t('categories.title')}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{t('categories.subtitle')}</p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive('all')}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            active === 'all' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          {t('categories.all')}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === c.slug ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {c.icon} {catName(c)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {filtered.map((book) => (
          <Link key={book.id} href={`/read/${book.slug}`} className="group">
            <div className="relative">
              <BookCover emoji={book.coverEmoji} palette={book.coverPalette} />
            </div>
            <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
              {bookTitle(book)}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-slate-400">—</p>
      )}
    </section>
  );
}
