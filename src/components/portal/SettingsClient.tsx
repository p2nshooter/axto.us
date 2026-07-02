'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import type { SessionUser } from '@/lib/auth/session';

export function SettingsClient({ user }: { user: SessionUser }) {
  const { t } = useTranslation();
  const router = useRouter();

  const [name, setName] = useState(user.name);
  const [profileMsg, setProfileMsg] = useState<string | null>(null);
  const [profileSaving, setProfileSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [pwError, setPwError] = useState<string | null>(null);
  const [pwSuccess, setPwSuccess] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileSaving(true);
    setProfileMsg(null);
    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      if (!res.ok) throw new Error('Failed');
      setProfileMsg('✓');
      router.refresh();
    } finally {
      setProfileSaving(false);
    }
  }

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwError(null);
    setPwSuccess(false);
    setPwSaving(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Failed');
      setPwSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
    } catch (err: any) {
      setPwError(err.message);
    } finally {
      setPwSaving(false);
    }
  }

  return (
    <div className="max-w-xl space-y-8">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('portal.settings')}</h1>

      <form onSubmit={saveProfile} className="card space-y-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">{t('auth.name')}</h2>
        <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="flex items-center gap-3">
          <button type="submit" disabled={profileSaving} className="btn-primary">
            {t('common.save')}
          </button>
          {profileMsg && <span className="text-sm text-emerald-600">{profileMsg}</span>}
        </div>
      </form>

      <form onSubmit={changePassword} className="card space-y-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">{t('auth.changePasswordTitle')}</h2>
        <div>
          <label className="label">{t('auth.currentPassword')}</label>
          <input
            type="password"
            className="input"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="label">{t('auth.newPassword')}</label>
          <input
            type="password"
            className="input"
            required
            minLength={8}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {pwError && <p className="text-sm text-red-600">{pwError}</p>}
        {pwSuccess && <p className="text-sm text-emerald-600">✓</p>}
        <button type="submit" disabled={pwSaving} className="btn-primary">
          {t('auth.changePasswordTitle')}
        </button>
      </form>
    </div>
  );
}
