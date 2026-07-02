'use client';

import { useState } from 'react';

type Category = { id: string; slug: string; icon: string; nameEn: string; nameId: string; sortOrder: number };

export function CategoriesClient({ initialCategories }: { initialCategories: Category[] }) {
  const [categories, setCategories] = useState(initialCategories);
  const [form, setForm] = useState({ slug: '', icon: '', nameEn: '', nameId: '', sortOrder: 0 });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function addCategory(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal menambah kategori.');
      setCategories((prev) => [...prev, { id: data.id, ...form }]);
      setForm({ slug: '', icon: '', nameEn: '', nameId: '', sortOrder: 0 });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm('Hapus kategori ini?')) return;
    const res = await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' });
    if (res.ok) setCategories((prev) => prev.filter((c) => c.id !== id));
    else {
      const data = (await res.json().catch(() => ({}))) as any;
      alert(data.error || 'Gagal menghapus kategori.');
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Kategori</h1>

      <form onSubmit={addCategory} className="card mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <input
          className="input"
          placeholder="slug"
          required
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <input
          className="input"
          placeholder="icon (emoji)"
          required
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
        />
        <input
          className="input"
          placeholder="Nama (EN)"
          required
          value={form.nameEn}
          onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
        />
        <input
          className="input"
          placeholder="Nama (ID)"
          required
          value={form.nameId}
          onChange={(e) => setForm({ ...form, nameId: e.target.value })}
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
              <th className="pb-2 font-medium">Icon</th>
              <th className="pb-2 font-medium">Slug</th>
              <th className="pb-2 font-medium">EN</th>
              <th className="pb-2 font-medium">ID</th>
              <th className="pb-2 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="py-2">{c.icon}</td>
                <td className="py-2">{c.slug}</td>
                <td className="py-2">{c.nameEn}</td>
                <td className="py-2">{c.nameId}</td>
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
