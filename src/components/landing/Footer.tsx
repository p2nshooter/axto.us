'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">{t('footer.tagline')}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t('footer.product')}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="/#features">{t('nav.features')}</a></li>
            <li><a href="/#categories">{t('nav.categories')}</a></li>
            <li><a href="/#pricing">{t('nav.pricing')}</a></li>
            <li><Link href="/for-schools">{t('nav.forSchools')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t('footer.company')}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/login">{t('nav.login')}</Link></li>
            <li><Link href="/register">{t('nav.getStarted')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t('footer.contact')}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>hello@axto.us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400 dark:border-slate-800">
        © {new Date().getFullYear()} AXTO. {t('footer.rights')}
      </div>
    </footer>
  );
}
