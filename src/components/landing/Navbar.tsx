'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { SessionUser } from '@/lib/auth/session';

export function Navbar({ user }: { user: SessionUser | null }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/#features', label: t('nav.features') },
    { href: '/#categories', label: t('nav.categories') },
    { href: '/#pricing', label: t('nav.pricing') },
    { href: '/for-schools', label: t('nav.forSchools') }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          {user ? (
            <Link href="/app" className="btn-primary !px-5 !py-2 text-sm">
              {t('portal.library')}
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300">
                {t('nav.login')}
              </Link>
              <Link href="/register" className="btn-primary !px-5 !py-2 text-sm">
                {t('nav.getStarted')}
              </Link>
            </>
          )}
        </div>

        <button className="p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 px-4 pb-4 pt-2 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              {user ? (
                <Link href="/app" className="btn-primary !px-5 !py-2 text-sm">
                  {t('portal.library')}
                </Link>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login" className="btn-secondary !px-4 !py-2 text-sm">
                    {t('nav.login')}
                  </Link>
                  <Link href="/register" className="btn-primary !px-4 !py-2 text-sm">
                    {t('nav.getStarted')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
