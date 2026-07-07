'use client';

import { useEffect, useState } from 'react';

type Student = {
  id: string;
  status: 'pending' | 'active' | 'inactive' | 'rejected';
  registrationNumber: string | null;
  appliedAt: string;
  schoolApprovedAt: string | null;
  activatedAt: string | null;
  deactivatedAt: string | null;
  studentName: string;
  studentEmail: string;
};

const STATUS_LABEL: Record<Student['status'], string> = {
  pending: 'Menunggu Persetujuan',
  active: 'Aktif',
  inactive: 'Nonaktif',
  rejected: 'Ditolak'
};

export function SchoolStudentsClient() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/schools/students')
      .then((res) => res.json())
      .then((data: any) => setStudents(data.students ?? []))
      .catch(() => setError('Gagal memuat data siswa.'))
      .finally(() => setLoading(false));
  }, []);

  async function act(id: string, action: 'approve' | 'reject' | 'deactivate') {
    setBusyId(id);
    try {
      const res = await fetch(`/api/schools/students/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      if (res.ok) {
        setStudents((prev) =>
          prev.map((s) =>
            s.id === id
              ? { ...s, status: action === 'approve' ? 'active' : action === 'reject' ? 'rejected' : 'inactive' }
              : s
          )
        );
      }
    } finally {
      setBusyId(null);
    }
  }

  if (loading) return <p className="text-sm text-slate-500">Memuat…</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;

  return (
    <div className="card">
      <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Siswa</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-700">
            <th className="py-2">Nama</th>
            <th>Email</th>
            <th>No. Registrasi</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-2">{s.studentName}</td>
              <td>{s.studentEmail}</td>
              <td className="font-mono text-xs">{s.registrationNumber ?? '—'}</td>
              <td>
                <span
                  className={
                    s.status === 'active'
                      ? 'text-green-600'
                      : s.status === 'rejected' || s.status === 'inactive'
                        ? 'text-red-600'
                        : 'text-amber-600'
                  }
                >
                  {STATUS_LABEL[s.status]}
                </span>
              </td>
              <td className="space-x-3 py-2 text-right">
                {s.status === 'pending' && (
                  <>
                    <button
                      disabled={busyId === s.id}
                      onClick={() => act(s.id, 'approve')}
                      className="text-xs text-green-600 hover:underline"
                    >
                      Setujui
                    </button>
                    <button
                      disabled={busyId === s.id}
                      onClick={() => act(s.id, 'reject')}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Tolak
                    </button>
                  </>
                )}
                {s.status === 'active' && (
                  <button
                    disabled={busyId === s.id}
                    onClick={() => act(s.id, 'deactivate')}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Nonaktifkan
                  </button>
                )}
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-slate-400">
                Belum ada siswa yang mendaftar lewat sekolah ini.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
