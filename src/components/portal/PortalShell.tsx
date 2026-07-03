'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { SessionUser } from '@/lib/auth/session';

export function PortalShell({ user, children }: { user: SessionUser; children: React.ReactNode }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: '/app', label: t('nav.home'), icon: '🏠' },
    { href: '/app/library', label: t('portal.library'), icon: '📚' },
    { href: '/app/favorites', label: t('portal.favorites'), icon: '❤️' },
    { href: '/app/history', label: t('portal.history'), icon: '🕒' },
    { href: '/app/downloads', label: t('portal.downloads'), icon: '⬇️' },
    { href: '/app/achievements', label: t('portal.achievements'), icon: '🏆' },
    { href: '/app/create-story', label: t('portal.createStory'), icon: '🪄' },
    { href: '/app/parents', label: t('portal.forParents'), icon: '👨‍👩‍👧' },
    { href: '/app/settings', label: t('portal.settings'), icon: '⚙️' }
  ];

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <aside className="hidden w-64 shrink-0 border-r border-slate-100 bg-white p-4 md:flex md:flex-col dark:border-slate-800 dark:bg-slate-900">
        <Link href="/app" className="mb-6 px-2">
          <Logo />
        </Link>
        <nav className="flex-1 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                pathname === item.href
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          {user.role === 'admin' && user.loginSource === 'admin' && (
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <span>🛠️</span>
              {t('portal.admin')}
            </Link>
          )}
        </nav>
        <button
          onClick={logout}
          className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
        >
          <span>🚪</span>
          {t('portal.logout')}
        </button>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <div className="hidden text-sm text-slate-500 md:block">
            {t('portal.greeting')}, <span className="font-semibold text-slate-800 dark:text-slate-100">{user.name}</span> 👋
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              {user.name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        </header>

        {mobileOpen && (
          <div className="border-b border-slate-100 bg-white p-3 md:hidden dark:border-slate-800 dark:bg-slate-900">
            <nav className="grid grid-cols-2 gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <button onClick={logout} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-red-500">
                🚪 {t('portal.logout')}
              </button>
            </nav>
          </div>
        )}

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
