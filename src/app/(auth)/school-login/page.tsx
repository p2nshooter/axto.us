'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthCard } from '@/components/auth/AuthCard';

// Beda dari /admin-login (sengaja disembunyikan), halaman ini memang dibuat
// untuk ditemukan sekolah — tapi tetap mengirim portal:'school' supaya session
// yang dihasilkan bertipe loginSource:'school'. Lihat requireSchoolAdmin().
export default function SchoolLoginPage() {
  const router = useRouter();
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
        body: JSON.stringify({ email, password, portal: 'school' })
      });
      const data = (await res.json().catch(() => ({}))) as any;
      if (!res.ok) throw new Error(data.detail || data.error || `Login gagal (HTTP ${res.status}).`);

      router.push('/school-portal');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Portal Sekolah"
      subtitle="Masuk untuk mengelola siswa dan melihat komisi sekolah Anda."
      footer={
        <span>
          Sekolah Anda belum terdaftar?{' '}
          <Link href="/school-register" className="font-semibold text-brand-600">
            Daftarkan sekolah
          </Link>
        </span>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="label">Email</label>
          <input type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? '…' : 'Masuk'}
        </button>
      </form>
    </AuthCard>
  );
}
