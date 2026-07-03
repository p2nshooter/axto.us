'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { Logo } from '@/components/ui/Logo';

const SECRET_CLICKS = 5;
const SECRET_WINDOW_MS = 3000;

export function Footer() {
  const { t } = useTranslation();
  const [adminRevealed, setAdminRevealed] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function onSecretClick() {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    if (clickCount.current >= SECRET_CLICKS) {
      setAdminRevealed(true);
      clickCount.current = 0;
      return;
    }
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, SECRET_WINDOW_MS);
  }

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
        <span onClick={onSecretClick} className="cursor-default select-none">
          © {new Date().getFullYear()} AXTO. {t('footer.rights')}
        </span>
        {adminRevealed && (
          <>
            {' '}
            ·{' '}
            <Link href="/admin-login" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              Admin
            </Link>
          </>
        )}
      </div>
    </footer>
  );
}
