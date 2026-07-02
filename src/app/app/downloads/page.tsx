'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';
import { getOfflineBooks, removeBookOffline, type OfflineBook } from '@/lib/offline';

export default function DownloadsPage() {
  const { t, locale } = useTranslation();
  const [books, setBooks] = useState<OfflineBook[]>([]);

  useEffect(() => {
    setBooks(getOfflineBooks());
  }, []);

  function remove(bookId: string) {
    removeBookOffline(bookId);
    setBooks(getOfflineBooks());
  }

  return (
    <div>
      <h1 className="mb-2 text-2xl font-black text-slate-900 dark:text-white">{t('portal.downloads')}</h1>
      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        {locale === 'id'
          ? 'Cerita yang diunduh tersimpan di perangkat ini dan bisa dibaca tanpa koneksi internet.'
          : 'Downloaded stories are saved on this device and can be read without an internet connection.'}
      </p>
      {books.length === 0 ? (
        <p className="text-slate-400">—</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {books.map((b) => (
            <div key={b.bookId} className="relative">
              <Link href={`/app/read/${b.slug}`}>
                <BookCover emoji={b.coverEmoji} palette={b.coverPalette} />
                <p className="mt-2 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {locale === 'id' ? b.titleId : b.titleEn}
                </p>
              </Link>
              <button
                onClick={() => remove(b.bookId)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow"
                aria-label="remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
