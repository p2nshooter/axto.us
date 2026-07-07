'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AuthCard } from '@/components/auth/AuthCard';

function ConsentConfirmContent() {
  const params = useSearchParams();
  const token = params.get('token') ?? '';
  const [state, setState] = useState<'loading' | 'done' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setState('error');
      setError('Link tidak valid — token tidak ditemukan.');
      return;
    }
    fetch('/api/consent/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
      .then(async (res) => {
        const data = (await res.json()) as any;
        if (!res.ok) throw new Error(data.error || 'Gagal memproses persetujuan.');
        setState('done');
      })
      .catch((err: any) => {
        setState('error');
        setError(err.message);
      });
  }, [token]);

  return (
    <AuthCard title="Persetujuan Orang Tua/Wali">
      {state === 'loading' && <p className="text-sm text-slate-500 dark:text-slate-400">Memproses persetujuan Anda…</p>}
      {state === 'done' && (
        <p className="rounded-xl bg-brand-50 p-4 text-sm text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          Terima kasih — persetujuan Anda sudah kami terima. Akun akan aktif begitu sekolah juga menyetujui
          pendaftarannya (kalau belum).
        </p>
      )}
      {state === 'error' && (
        <div>
          <p className="text-sm text-red-600">{error}</p>
          <Link href="/" className="mt-4 inline-block text-sm font-semibold text-brand-600">
            Kembali ke beranda
          </Link>
        </div>
      )}
    </AuthCard>
  );
}

export default function ConsentConfirmPage() {
  return (
    <Suspense>
      <ConsentConfirmContent />
    </Suspense>
  );
}
