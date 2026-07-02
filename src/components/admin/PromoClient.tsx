'use client';

import { useState } from 'react';

type Promo = { id: string; code: string; discountPercent: number; maxUses: number | null; usedCount: number; active: boolean };

export function PromoClient({ initialCodes }: { initialCodes: Promo[] }) {
  const [codes, setCodes] = useState(initialCodes);
  const [form, setForm] = useState({ code: '', discountPercent: 10, maxUses: '' });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function addCode(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/promo-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: form.code.toUpperCase(),
          discountPercent: Number(form.discountPercent),
          maxUses: form.maxUses ? Number(form.maxUses) : null,
          active: true
        })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal menambah kode promo.');
      setCodes((prev) => [
        { id: data.id, code: form.code.toUpperCase(), discountPercent: Number(form.discountPercent), maxUses: form.maxUses ? Number(form.maxUses) : null, usedCount: 0, active: true },
        ...prev
      ]);
      setForm({ code: '', discountPercent: 10, maxUses: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(id: string, active: boolean) {
    const res = await fetch(`/api/admin/promo-codes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active })
    });
    if (res.ok) setCodes((prev) => prev.map((c) => (c.id === id ? { ...c, active } : c)));
  }

  async function remove(id: string) {
    if (!confirm('Hapus kode promo ini?')) return;
    const res = await fetch(`/api/admin/promo-codes/${id}`, { method: 'DELETE' });
    if (res.ok) setCodes((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Promo & Kode</h1>

      <form onSubmit={addCode} className="card mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <input
          className="input uppercase"
          placeholder="KODE10"
          required
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />
        <input
          type="number"
          className="input"
          placeholder="Diskon %"
          required
          min={1}
          max={100}
          value={form.discountPercent}
          onChange={(e) => setForm({ ...form, discountPercent: Number(e.target.value) })}
        />
        <input
          type="number"
          className="input"
          placeholder="Maks. pemakaian (opsional)"
          value={form.maxUses}
          onChange={(e) => setForm({ ...form, maxUses: e.target.value })}
        />
        <button type="submit" disabled={saving} className="btn-primary">
          + Tambah
        </button>
      </form>
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="pb-2 font-medium">Kode</th>
              <th className="pb-2 font-medium">Diskon</th>
              <th className="pb-2 font-medium">Terpakai</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => (
              <tr key={c.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="py-2 font-mono">{c.code}</td>
                <td className="py-2">{c.discountPercent}%</td>
                <td className="py-2">
                  {c.usedCount}
                  {c.maxUses ? ` / ${c.maxUses}` : ''}
                </td>
                <td className="py-2">
                  <button
                    onClick={() => toggleActive(c.id, !c.active)}
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      c.active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                    }`}
                  >
                    {c.active ? 'Aktif' : 'Nonaktif'}
                  </button>
                </td>
                <td className="py-2">
                  <button onClick={() => remove(c.id)} className="text-red-500 hover:underline">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
