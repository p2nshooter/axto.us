'use client';

import { useState } from 'react';

type Credential = {
  id: string;
  provider: string;
  label: string;
  maskedPreview: string;
  isActive: boolean;
  createdAt: number;
};

// Provider yang benar-benar dibaca kode sekarang (lib/ai/credentials.ts) —
// nambah provider baru di sini kalau nambah integrasi baru, biar dropdown-nya
// gak nyasar ke nama yang gak dicek kode manapun.
const KNOWN_PROVIDERS = [
  { value: 'nvidia', label: 'NVIDIA NIM (teks + narasi)' },
  { value: 'runpod_api_key', label: 'RunPod — API Key' },
  { value: 'runpod_endpoint_id', label: 'RunPod — Endpoint ID' },
  { value: 'external_engine_ws_url', label: 'Engine Eksternal — WebSocket URL' },
  { value: 'external_engine_ws_token', label: 'Engine Eksternal — Token' }
];

export function CredentialsClient({ initialCredentials }: { initialCredentials: Credential[] }) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [form, setForm] = useState({ provider: KNOWN_PROVIDERS[0].value, label: '', value: '' });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function addCredential(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal menyimpan credential.');
      setCredentials((prev) => [{ ...data, createdAt: Date.now() }, ...prev]);
      setForm({ provider: KNOWN_PROVIDERS[0].value, label: '', value: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function deactivate(id: string) {
    if (!confirm('Nonaktifkan credential ini? Fitur yang bergantung padanya akan fallback ke env var (kalau ada) atau berhenti berfungsi.')) return;
    const res = await fetch(`/api/admin/credentials/${id}`, { method: 'DELETE' });
    if (res.ok) setCredentials((prev) => prev.map((c) => (c.id === id ? { ...c, isActive: false } : c)));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold">Kredensial API</h1>
        <p className="text-sm text-slate-500">
          Dikelola dari sini, bukan hardcode di kode — nilai asli dienkripsi sebelum disimpan dan tidak
          pernah ditampilkan lagi setelah disimpan (cuma preview 4 karakter terakhir).
        </p>
      </div>

      <form onSubmit={addCredential} className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 p-4 sm:grid-cols-4 dark:border-slate-700">
        <select
          className="input"
          value={form.provider}
          onChange={(e) => setForm({ ...form, provider: e.target.value })}
        >
          {KNOWN_PROVIDERS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        <input
          className="input"
          placeholder="Label (mis. NVIDIA - Production)"
          value={form.label}
          onChange={(e) => setForm({ ...form, label: e.target.value })}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Nilai credential"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
          required
        />
        <button type="submit" disabled={saving} className="btn-primary">
          {saving ? 'Menyimpan…' : 'Simpan'}
        </button>
        {error && <p className="col-span-full text-sm text-red-600">{error}</p>}
      </form>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-700">
            <th className="py-2">Provider</th>
            <th>Label</th>
            <th>Nilai</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {credentials.map((c) => (
            <tr key={c.id} className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-2 font-mono text-xs">{c.provider}</td>
              <td>{c.label}</td>
              <td className="font-mono text-xs">{c.maskedPreview}</td>
              <td>
                <span className={c.isActive ? 'text-green-600' : 'text-slate-400'}>
                  {c.isActive ? 'Aktif' : 'Nonaktif'}
                </span>
              </td>
              <td>
                {c.isActive && (
                  <button onClick={() => deactivate(c.id)} className="text-xs text-red-600 hover:underline">
                    Nonaktifkan
                  </button>
                )}
              </td>
            </tr>
          ))}
          {credentials.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-slate-400">
                Belum ada credential tersimpan — fitur AI masih pakai env var langsung (kalau di-set).
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
