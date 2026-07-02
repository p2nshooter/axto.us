'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';
import { TrophyIcon, ChartIcon, StarIcon } from '@/components/ui/Icons';

type Book = {
  id: string;
  slug: string;
  titleEn: string;
  titleId: string;
  coverEmoji: string;
  coverPalette: string;
  isPremium: boolean;
  pageCount: number;
};

export function DashboardClient({
  continueReading,
  recommended,
  stats
}: {
  continueReading: { book: Book; currentPage: number }[];
  recommended: Book[];
  stats: {
    booksCompleted: number;
    totalXp: number;
    favoriteCategoryName: { en: string; id: string } | null;
    streak: number;
    level: number;
  };
}) {
  const { t, locale } = useTranslation();
  const title = (b: Book) => (locale === 'id' ? b.titleId : b.titleEn);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard icon={<TrophyIcon className="h-5 w-5" />} label={t('parents.booksCompleted')} value={stats.booksCompleted} />
        <StatCard icon={<StarIcon className="h-5 w-5" />} label="XP" value={stats.totalXp} />
        <StatCard icon={<ChartIcon className="h-5 w-5" />} label={t('parents.currentStreak')} value={stats.streak} />
        <StatCard icon={<span>🎖️</span>} label={t('parents.level')} value={stats.level} />
      </div>

      {continueReading.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">{t('portal.continueReading')}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {continueReading.map(({ book, currentPage }) => (
              <Link key={book.id} href={`/app/read/${book.slug}`} className="group">
                <BookCover emoji={book.coverEmoji} palette={book.coverPalette} />
                <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
                  {title(book)}
                </p>
                <p className="text-xs text-slate-400">
                  {t('reader.page')} {currentPage}/{book.pageCount}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">{t('portal.recommendedForYou')}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {recommended.map((book) => (
            <Link key={book.id} href={`/app/read/${book.slug}`} className="group">
              <div className="relative">
                <BookCover emoji={book.coverEmoji} palette={book.coverPalette} />
                {book.isPremium && (
                  <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-brand-700 shadow">
                    PRO
                  </span>
                )}
              </div>
              <p className="mt-2 truncate text-sm font-semibold text-slate-800 group-hover:text-brand-600 dark:text-slate-200">
                {title(book)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="card flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
        {icon}
      </div>
      <div>
        <p className="text-xl font-black text-slate-900 dark:text-white">{value}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </div>
  );
}
