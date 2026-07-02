'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';
import { HeartIcon } from '@/components/ui/Icons';

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

export function LibraryClient({
  categories,
  books,
  favoriteIds,
  canAccessPremium
}: {
  categories: Category[];
  books: Book[];
  favoriteIds: string[];
  canAccessPremium: boolean;
}) {
  const { t, locale } = useTranslation();
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set(favoriteIds));

  const title = (b: Book) => (locale === 'id' ? b.titleId : b.titleEn);
  const catName = (c: Category) => (locale === 'id' ? c.nameId : c.nameEn);

  const filtered = useMemo(() => {
    let list = books;
    if (active !== 'all') {
      const cat = categories.find((c) => c.slug === active);
      if (cat) list = list.filter((b) => b.categoryId === cat.id);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((b) => title(b).toLowerCase().includes(q));
    }
    return list;
  }, [active, query, books, categories, locale]);

  async function toggleFavorite(bookId: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(bookId) ? next.delete(bookId) : next.add(bookId);
      return next;
    });
    await fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId })
    }).catch(() => {});
  }

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
        {filtered.map((book) => {
          const locked = book.isPremium && !canAccessPremium;
          return (
            <div key={book.id} className="group relative">
              <Link href={`/app/read/${book.slug}`}>
                <div className="relative">
                  <BookCover emoji={book.coverEmoji} palette={book.coverPalette} className={locked ? 'opacity-60' : ''} />
                  {locked && (
                    <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 text-2xl">🔒</span>
                  )}
                  {book.isPremium && !locked && (
                    <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-brand-700 shadow">
                      PRO
                    </span>
                  )}
                </div>
                <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
                  {title(book)}
                </p>
              </Link>
              <button
                onClick={() => toggleFavorite(book.id)}
                className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-red-500 shadow"
                aria-label="favorite"
              >
                <HeartIcon className="h-3.5 w-3.5" filled={favorites.has(book.id)} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
