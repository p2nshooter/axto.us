'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { AuthCard } from '@/components/auth/AuthCard';

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = (await res.json().catch(() => ({}))) as any;
      if (!res.ok) throw new Error(data.detail || data.error || `Failed to login (HTTP ${res.status})`);

      // This form only ever creates a 'client' session — admin panel access
      // requires logging in through /admin-login, regardless of role.
      const next = params.get('next');
      router.push(next || '/app');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title={t('auth.loginTitle')}
      subtitle={t('auth.loginSubtitle')}
      footer={
        <>
          {t('auth.dontHaveAccount')}{' '}
          <Link href="/register" className="font-semibold text-brand-600">
            {t('auth.register')}
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="label">{t('auth.email')}</label>
          <input type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="label !mb-0">{t('auth.password')}</label>
            <Link href="/forgot-password" className="text-xs font-medium text-brand-600">
              {t('auth.forgotPassword')}
            </Link>
          </div>
          <input
            type="password"
            className="input mt-1.5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? t('common.loading') : t('auth.login')}
        </button>
      </form>
    </AuthCard>
  );
}
