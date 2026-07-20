'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';
import { AGE_BANDS } from '@/content/categories';

type Category = { id: string; slug: string; icon: string; nameEn: string; nameId: string };
type Book = {
  id: string;
  slug: string;
  titleEn: string;
  titleId: string;
  categoryId: string;
  coverEmoji: string;
  coverPalette: string;
  ageMin: number;
  ageMax: number;
};

/**
 * Public, register-free library browse (owner: "bebasin siapapun yg membaca
 * tanpa perlu register"). Same look as the signed-in library, but every cover
 * links straight to the public reader and there are no favorite/premium
 * controls — everything is free to read and listen to.
 */
export function PublicLibrary({ categories, books }: { categories: Category[]; books: Book[] }) {
  const { t, locale, dict } = useTranslation();
  const [active, setActive] = useState('all');
  const [activeAge, setActiveAge] = useState('all');
  const [query, setQuery] = useState('');

  const title = (b: Book) => (locale === 'id' ? b.titleId : b.titleEn);
  const catName = (c: Category) =>
    (dict.categoryNames as Record<string, string>)[c.slug] ?? (locale === 'id' ? c.nameId : c.nameEn);

  const filtered = useMemo(() => {
    let list = books;
    if (active !== 'all') {
      const cat = categories.find((c) => c.slug === active);
      if (cat) list = list.filter((b) => b.categoryId === cat.id);
    }
    if (activeAge !== 'all') {
      const band = AGE_BANDS.find((a) => a.slug === activeAge);
      if (band) list = list.filter((b) => b.ageMin <= band.max && b.ageMax >= band.min);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((b) => title(b).toLowerCase().includes(q));
    }
    return list;
  }, [active, activeAge, query, books, categories, locale]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('portal.library')}</h1>
        <input
          className="input sm:max-w-xs"
          placeholder={t('common.search')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveAge('all')}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            activeAge === 'all' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          {locale === 'id' ? 'Semua Usia' : 'All Ages'}
        </button>
        {AGE_BANDS.map((band) => (
          <button
            key={band.slug}
            onClick={() => setActiveAge(band.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              activeAge === band.slug ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {band.icon} {locale === 'id' ? band.nameId : band.nameEn}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActive('all')}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            active === 'all' ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          {t('categories.all')}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              active === c.slug ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {c.icon} {catName(c)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {filtered.map((book) => (
          <div key={book.id} className="group relative">
            <Link href={`/read/${book.slug}`}>
              <BookCover emoji={book.coverEmoji} palette={book.coverPalette} />
              <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
                {title(book)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
