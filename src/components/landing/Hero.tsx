'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookIcon, HeadphoneIcon, GlobeIcon, DownloadIcon, SparkleIcon } from '@/components/ui/Icons';

export function Hero() {
  const { t } = useTranslation();

  const features = [
    { icon: BookIcon, label: t('features.read.title') },
    { icon: HeadphoneIcon, label: t('features.listen.title') },
    { icon: GlobeIcon, label: t('features.learn.title') },
    { icon: DownloadIcon, label: t('features.download.title') },
    { icon: SparkleIcon, label: t('features.personalize.title') }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <SparkleIcon className="h-3.5 w-3.5" /> {t('hero.eyebrow')}
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl dark:text-white">
            {t('hero.title1')}
            <br />
            <span className="text-brand-600">{t('hero.title2')}</span>
            <br />
            {t('hero.title3')}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-300">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn-primary">
              {t('hero.ctaStart')}
            </Link>
            <a href="#categories" className="btn-secondary">
              {t('hero.ctaBrowse')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex -space-x-2">
              {['🦊', '🐻', '🐰', '🐼'].map((e, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-base dark:border-slate-950"
                >
                  {e}
                </span>
              ))}
            </div>
            {t('hero.usedBy')}
          </div>

          <div className="mt-10 grid grid-cols-5 gap-2 sm:gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm dark:bg-slate-800">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-medium text-slate-600 sm:text-xs dark:text-slate-400">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-yellow-200 blur-2xl dark:bg-yellow-500/20" />
          <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-brand-200 blur-2xl dark:bg-brand-500/20" />
          <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">The Little Fox</span>
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                5 / 12
              </span>
            </div>
            <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-200 via-amber-100 to-lime-100 text-7xl">
              🦊
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="rounded bg-yellow-100 px-1 dark:bg-yellow-500/20">Once upon a time</span>, in a beautiful forest, there
              lived a little fox who loved adventures.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </button>
              <div className="h-1.5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-1.5 w-2/3 rounded-full bg-brand-500" />
              </div>
              <span className="text-xs text-slate-400">🔊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
