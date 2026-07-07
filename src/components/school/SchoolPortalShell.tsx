'use client';

import { useRouter } from 'next/navigation';
import type { SessionUser } from '@/lib/auth/session';

export function SchoolPortalShell({ user, children }: { user: SessionUser; children: React.ReactNode }) {
  const router = useRouter();

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 md:px-8 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <span className="text-lg font-black text-slate-900 dark:text-white">AXTO</span>
          <span className="ml-1 text-xs font-semibold text-brand-600">Portal Sekolah</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-slate-500 sm:inline dark:text-slate-400">{user.email}</span>
          <button onClick={logout} className="text-sm font-medium text-red-500 hover:underline">
            🚪 Keluar
          </button>
        </div>
      </header>
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
