'use client';

import { useState } from 'react';

type Author = { id: string; name: string; bio: string; avatarSeed: string };

export function AuthorsClient({ initialAuthors }: { initialAuthors: Author[] }) {
  const [authors, setAuthors] = useState(initialAuthors);
  const [form, setForm] = useState({ name: '', bio: '', avatarSeed: '' });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function addAuthor(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, avatarSeed: form.avatarSeed || form.name })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal menambah penulis.');
      setAuthors((prev) => [{ id: data.id, ...form, avatarSeed: form.avatarSeed || form.name }, ...prev]);
      setForm({ name: '', bio: '', avatarSeed: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Penulis</h1>

      <form onSubmit={addAuthor} className="card mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          className="input"
          placeholder="Nama penulis"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="input sm:col-span-1"
          placeholder="Bio singkat (opsional)"
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />
        <button type="submit" disabled={saving} className="btn-primary">
          + Tambah Penulis
        </button>
      </form>
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((a) => (
          <div key={a.id} className="card">
            <p className="font-semibold text-slate-800 dark:text-slate-100">{a.name}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{a.bio || '—'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
