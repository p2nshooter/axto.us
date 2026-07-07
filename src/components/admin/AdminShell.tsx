'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { SessionUser } from '@/lib/auth/session';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/books', label: 'Buku', icon: '📚' },
  { href: '/admin/categories', label: 'Kategori', icon: '🗂️' },
  { href: '/admin/authors', label: 'Penulis', icon: '✍️' },
  { href: '/admin/users', label: 'Pengguna', icon: '👤' },
  { href: '/admin/orders', label: 'Pesanan & Langganan', icon: '💳' },
  { href: '/admin/promo', label: 'Promo & Kode', icon: '🏷️' },
  { href: '/admin/reports', label: 'Laporan', icon: '📈' },
  { href: '/admin/audit-log', label: 'Audit Log', icon: '🧾' },
  { href: '/admin/credentials', label: 'Kredensial API', icon: '🔑' },
  { href: '/admin/schools', label: 'Sekolah', icon: '🏫' },
  { href: '/admin/settings', label: 'Pengaturan', icon: '⚙️' }
];

export function AdminShell({ user, children }: { user: SessionUser; children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-slate-900 p-4 text-slate-200 md:flex">
        <div className="mb-6 px-2">
          <span className="text-xl font-black text-white">AXTO</span>
          <span className="ml-1 text-xs font-semibold text-brand-400">Admin</span>
        </div>
        <nav className="flex-1 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                pathname === item.href ? 'bg-brand-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 border-t border-slate-800 pt-4">
          <p className="px-2 text-xs text-slate-400">{user.email}</p>
          <button onClick={logout} className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-red-400 hover:bg-red-950/30">
            🚪 Keluar
          </button>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/app" className="text-sm text-slate-500 hover:text-brand-600">
            ← Kembali ke Portal Client
          </Link>
        </header>

        {mobileOpen && (
          <div className="border-b border-slate-100 bg-white p-3 md:hidden dark:border-slate-800 dark:bg-slate-900">
            <nav className="grid grid-cols-2 gap-1">
              {NAV.map((item) => (
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
                🚪 Keluar
              </button>
            </nav>
          </div>
        )}

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
