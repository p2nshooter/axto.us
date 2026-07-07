'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthCard } from '@/components/auth/AuthCard';

export default function SchoolRegisterPage() {
  const router = useRouter();
  const [schoolName, setSchoolName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ registrationCode: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/schools/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schoolName, country, city: city || undefined, adminName, adminEmail, password })
      });
      const data = (await res.json().catch(() => ({}))) as any;
      if (!res.ok) throw new Error(data.error || `Pendaftaran gagal (HTTP ${res.status}).`);
      setDone({ registrationCode: data.school.registrationCode });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <AuthCard title="Sekolah Terdaftar">
        <div className="space-y-3 text-sm">
          <p className="rounded-xl bg-brand-50 p-4 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
            Sekolah Anda sudah terdaftar dengan kode <strong>{done.registrationCode}</strong> dan sedang menunggu
            persetujuan tim AXTO. Anda sudah masuk sebagai admin sekolah.
          </p>
          <button onClick={() => router.push('/school-portal')} className="btn-primary w-full">
            Ke Portal Sekolah
          </button>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Daftarkan Sekolah"
      subtitle="Buat akun admin sekolah untuk mengelola pendaftaran siswa dan komisi afiliasi."
      footer={
        <span>
          Sudah punya akun sekolah?{' '}
          <Link href="/school-login" className="font-semibold text-brand-600">
            Masuk
          </Link>
        </span>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="label">Nama Sekolah</label>
          <input className="input" required value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">Negara</label>
            <input className="input" required value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div>
            <label className="label">Kota</label>
            <input className="input" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="label">Nama Admin</label>
          <input className="input" required value={adminName} onChange={(e) => setAdminName(e.target.value)} />
        </div>
        <div>
          <label className="label">Email Admin</label>
          <input
            type="email"
            className="input"
            required
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? '…' : 'Daftarkan Sekolah'}
        </button>
      </form>
    </AuthCard>
  );
}
