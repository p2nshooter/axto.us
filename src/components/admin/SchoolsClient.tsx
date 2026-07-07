'use client';

import { useState } from 'react';

type School = {
  id: string;
  name: string;
  country: string;
  city: string | null;
  registrationCode: string;
  status: 'pending' | 'approved' | 'suspended';
  payoutEmail: string | null;
  createdAt: number;
};

const STATUS_LABEL: Record<School['status'], string> = {
  pending: 'Menunggu',
  approved: 'Disetujui',
  suspended: 'Ditangguhkan'
};

export function SchoolsClient({ initialSchools }: { initialSchools: School[] }) {
  const [schools, setSchools] = useState(initialSchools);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function updateStatus(id: string, status: School['status']) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/schools/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setSchools((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
      }
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold">Sekolah</h1>
        <p className="text-sm text-slate-500">
          Sekolah yang mendaftar lewat halaman Daftar Sekolah muncul di sini dengan status &quot;Menunggu&quot; —
          harus disetujui dulu sebelum bisa tampil di direktori pendaftaran siswa dan menerima siswa baru.
        </p>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-700">
            <th className="py-2">Sekolah</th>
            <th>Lokasi</th>
            <th>Kode Registrasi</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {schools.map((s) => (
            <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-2">{s.name}</td>
              <td>
                {s.city ? `${s.city}, ` : ''}
                {s.country}
              </td>
              <td className="font-mono text-xs">{s.registrationCode}</td>
              <td>
                <span
                  className={
                    s.status === 'approved'
                      ? 'text-green-600'
                      : s.status === 'suspended'
                        ? 'text-red-600'
                        : 'text-amber-600'
                  }
                >
                  {STATUS_LABEL[s.status]}
                </span>
              </td>
              <td className="space-x-3 py-2 text-right">
                {s.status !== 'approved' && (
                  <button
                    disabled={busyId === s.id}
                    onClick={() => updateStatus(s.id, 'approved')}
                    className="text-xs text-green-600 hover:underline"
                  >
                    Setujui
                  </button>
                )}
                {s.status !== 'suspended' && (
                  <button
                    disabled={busyId === s.id}
                    onClick={() => updateStatus(s.id, 'suspended')}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Tangguhkan
                  </button>
                )}
              </td>
            </tr>
          ))}
          {schools.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-slate-400">
                Belum ada sekolah yang mendaftar.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
