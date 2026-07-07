'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { AuthCard } from '@/components/auth/AuthCard';

type SchoolOption = { id: string; name: string; country: string; city: string | null };

export default function RegisterPage() {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const [mode, setMode] = useState<'individual' | 'school'>('individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [schools, setSchools] = useState<SchoolOption[]>([]);
  const [schoolId, setSchoolId] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pendingApproval, setPendingApproval] = useState(false);

  useEffect(() => {
    if (mode !== 'school') return;
    fetch('/api/schools')
      .then((res) => res.json())
      .then((data: any) => setSchools(data.schools ?? []))
      .catch(() => setSchools([]));
  }, [mode]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === 'school' && !schoolId) {
        throw new Error('Pilih sekolah terlebih dahulu.');
      }
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          locale,
          ...(mode === 'school' ? { schoolId, parentEmail } : {})
        })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Failed to register');

      if (data.pendingSchoolApproval) {
        setPendingApproval(true);
        return;
      }

      const plan = params.get('plan');
      const next = params.get('next');
      if (plan) router.push(`/app/pricing/checkout?plan=${plan}`);
      else if (next) router.push(next);
      else router.push('/app');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (pendingApproval) {
    return (
      <AuthCard title={t('auth.registerTitle')}>
        <p className="rounded-xl bg-brand-50 p-4 text-sm text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          Pendaftaran diterima. Akun akan aktif setelah <strong>orang tua/wali</strong> mengonfirmasi lewat email yang
          baru saja dikirim, dan setelah <strong>sekolah</strong> menyetujui pendaftaranmu.
        </p>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title={t('auth.registerTitle')}
      subtitle={t('auth.registerSubtitle')}
      footer={
        <>
          {t('auth.alreadyHaveAccount')}{' '}
          <Link href="/login" className="font-semibold text-brand-600">
            {t('auth.login')}
          </Link>
        </>
      }
    >
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold dark:bg-slate-800">
        <button
          type="button"
          onClick={() => setMode('individual')}
          className={`rounded-lg py-2 ${mode === 'individual' ? 'bg-white shadow dark:bg-slate-700' : 'text-slate-500'}`}
        >
          Daftar mandiri
        </button>
        <button
          type="button"
          onClick={() => setMode('school')}
          className={`rounded-lg py-2 ${mode === 'school' ? 'bg-white shadow dark:bg-slate-700' : 'text-slate-500'}`}
        >
          Daftar lewat sekolah
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="label">{t('auth.name')}</label>
          <input className="input" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="label">{t('auth.email')}</label>
          <input type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="label">{t('auth.password')}</label>
          <input
            type="password"
            className="input"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {mode === 'school' && (
          <>
            <div>
              <label className="label">Sekolah</label>
              <select className="input" required value={schoolId} onChange={(e) => setSchoolId(e.target.value)}>
                <option value="" disabled>
                  Pilih sekolah…
                </option>
                {schools.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {s.city ? `${s.city}, ` : ''}
                    {s.country}
                  </option>
                ))}
              </select>
              {schools.length === 0 && (
                <p className="mt-1 text-xs text-slate-500">Belum ada sekolah terdaftar di negaramu.</p>
              )}
            </div>
            <div>
              <label className="label">Email Orang Tua/Wali</label>
              <input
                type="email"
                className="input"
                required
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
              />
              <p className="mt-1 text-xs text-slate-500">
                Akun baru aktif setelah orang tua/wali menyetujui lewat email ini.
              </p>
            </div>
          </>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? t('common.loading') : t('auth.register')}
        </button>
      </form>
    </AuthCard>
  );
}
