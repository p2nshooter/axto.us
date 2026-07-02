'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookCover } from '@/components/ui/BookCover';

export function PremiumLock({ book }: { book: { titleEn: string; titleId: string; coverEmoji: string; coverPalette: string } }) {
  const { t, locale } = useTranslation();
  const title = locale === 'id' ? book.titleId : book.titleEn;

  return (
    <div className="mx-auto max-w-sm text-center">
      <BookCover emoji={book.coverEmoji} palette={book.coverPalette} className="mx-auto max-w-[220px]" />
      <h1 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">{t('reader.premiumOnly')}</p>
      <Link href="/app/pricing" className="btn-primary mt-6 inline-flex">
        {t('pricing.goPremium')}
      </Link>
    </div>
  );
}
