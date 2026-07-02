'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Category = { id: string; nameId: string };
type Author = { id: string; name: string };

type PageForm = { illustrationSeed: string; textEn: string; textId: string };
type QuizForm = { questionEn: string; questionId: string; optionsEn: string[]; optionsId: string[]; correctIndex: number; xpReward: number };

export type BookFormInitial = {
  slug: string;
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  categoryId: string;
  authorId: string | null;
  coverEmoji: string;
  coverPalette: string;
  ageMin: number;
  ageMax: number;
  isPremium: boolean;
  status: 'draft' | 'published';
  pages: PageForm[];
  quiz: QuizForm[];
};

const PALETTES = ['sunrise', 'forest', 'ocean', 'dusk', 'night', 'candy', 'meadow', 'cosmic'];

const emptyPage = (): PageForm => ({ illustrationSeed: '', textEn: '', textId: '' });
const emptyQuiz = (): QuizForm => ({
  questionEn: '',
  questionId: '',
  optionsEn: ['', ''],
  optionsId: ['', ''],
  correctIndex: 0,
  xpReward: 10
});

export function BookForm({
  categories,
  authors,
  initial,
  bookId
}: {
  categories: Category[];
  authors: Author[];
  initial?: BookFormInitial;
  bookId?: string;
}) {
  const router = useRouter();
  const [form, setForm] = useState<BookFormInitial>(
    initial ?? {
      slug: '',
      titleEn: '',
      titleId: '',
      descriptionEn: '',
      descriptionId: '',
      categoryId: categories[0]?.id ?? '',
      authorId: null,
      coverEmoji: '📖',
      coverPalette: 'sunrise',
      ageMin: 3,
      ageMax: 8,
      isPremium: false,
      status: 'published',
      pages: [emptyPage()],
      quiz: []
    }
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof BookFormInitial>(key: K, value: BookFormInitial[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function updatePage(i: number, patch: Partial<PageForm>) {
    setForm((f) => ({ ...f, pages: f.pages.map((p, idx) => (idx === i ? { ...p, ...patch } : p)) }));
  }
  function addPage() {
    setForm((f) => ({ ...f, pages: [...f.pages, emptyPage()] }));
  }
  function removePage(i: number) {
    setForm((f) => ({ ...f, pages: f.pages.filter((_, idx) => idx !== i) }));
  }

  function updateQuiz(i: number, patch: Partial<QuizForm>) {
    setForm((f) => ({ ...f, quiz: f.quiz.map((q, idx) => (idx === i ? { ...q, ...patch } : q)) }));
  }
  function addQuiz() {
    setForm((f) => ({ ...f, quiz: [...f.quiz, emptyQuiz()] }));
  }
  function removeQuiz(i: number) {
    setForm((f) => ({ ...f, quiz: f.quiz.filter((_, idx) => idx !== i) }));
  }
  function updateQuizOption(qi: number, lang: 'optionsEn' | 'optionsId', oi: number, value: string) {
    setForm((f) => ({
      ...f,
      quiz: f.quiz.map((q, idx) => (idx === qi ? { ...q, [lang]: q[lang].map((o, oidx) => (oidx === oi ? value : o)) } : q))
    }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const payload = {
        ...form,
        quiz: form.quiz.map((q) => ({
          ...q,
          optionsEn: q.optionsEn.filter((o) => o.trim().length > 0),
          optionsId: q.optionsId.filter((o) => o.trim().length > 0)
        }))
      };
      const res = await fetch(bookId ? `/api/admin/books/${bookId}` : '/api/admin/books', {
        method: bookId ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal menyimpan.');
      router.push('/admin/books');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      <div className="card grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Slug (URL)</label>
          <input className="input" required value={form.slug} onChange={(e) => set('slug', e.target.value)} placeholder="the-little-fox" />
        </div>
        <div>
          <label className="label">Kategori</label>
          <select className="input" value={form.categoryId} onChange={(e) => set('categoryId', e.target.value)}>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nameId}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Judul (Inggris)</label>
          <input className="input" required value={form.titleEn} onChange={(e) => set('titleEn', e.target.value)} />
        </div>
        <div>
          <label className="label">Judul (Indonesia)</label>
          <input className="input" required value={form.titleId} onChange={(e) => set('titleId', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Deskripsi (Inggris)</label>
          <textarea className="input" rows={2} required value={form.descriptionEn} onChange={(e) => set('descriptionEn', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Deskripsi (Indonesia)</label>
          <textarea className="input" rows={2} required value={form.descriptionId} onChange={(e) => set('descriptionId', e.target.value)} />
        </div>
        <div>
          <label className="label">Penulis</label>
          <select className="input" value={form.authorId ?? ''} onChange={(e) => set('authorId', e.target.value || null)}>
            <option value="">—</option>
            {authors.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Emoji Sampul</label>
            <input className="input" required value={form.coverEmoji} onChange={(e) => set('coverEmoji', e.target.value)} />
          </div>
          <div>
            <label className="label">Palet Warna</label>
            <select className="input" value={form.coverPalette} onChange={(e) => set('coverPalette', e.target.value)}>
              {PALETTES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Usia Min</label>
            <input
              type="number"
              className="input"
              value={form.ageMin}
              onChange={(e) => set('ageMin', Number(e.target.value))}
            />
          </div>
          <div>
            <label className="label">Usia Maks</label>
            <input
              type="number"
              className="input"
              value={form.ageMax}
              onChange={(e) => set('ageMax', Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isPremium"
            checked={form.isPremium}
            onChange={(e) => set('isPremium', e.target.checked)}
          />
          <label htmlFor="isPremium" className="text-sm text-slate-600 dark:text-slate-300">
            Konten Premium
          </label>
        </div>
        <div>
          <label className="label">Status</label>
          <select className="input" value={form.status} onChange={(e) => set('status', e.target.value as 'draft' | 'published')}>
            <option value="published">Aktif (Published)</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      <div className="card">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Halaman Cerita</h2>
          <button type="button" onClick={addPage} className="btn-secondary !px-3 !py-1.5 text-sm">
            + Tambah Halaman
          </button>
        </div>
        <div className="space-y-4">
          {form.pages.map((p, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Halaman {i + 1}</span>
                {form.pages.length > 1 && (
                  <button type="button" onClick={() => removePage(i)} className="text-xs text-red-500">
                    Hapus
                  </button>
                )}
              </div>
              <input
                className="input mb-2"
                placeholder="Illustration seed (contoh: fox-1)"
                value={p.illustrationSeed}
                onChange={(e) => updatePage(i, { illustrationSeed: e.target.value })}
              />
              <textarea
                className="input mb-2"
                rows={2}
                placeholder="Teks (Inggris)"
                required
                value={p.textEn}
                onChange={(e) => updatePage(i, { textEn: e.target.value })}
              />
              <textarea
                className="input"
                rows={2}
                placeholder="Teks (Indonesia)"
                required
                value={p.textId}
                onChange={(e) => updatePage(i, { textId: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Kuis</h2>
          <button type="button" onClick={addQuiz} className="btn-secondary !px-3 !py-1.5 text-sm">
            + Tambah Soal
          </button>
        </div>
        <div className="space-y-4">
          {form.quiz.map((q, qi) => (
            <div key={qi} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Soal {qi + 1}</span>
                <button type="button" onClick={() => removeQuiz(qi)} className="text-xs text-red-500">
                  Hapus
                </button>
              </div>
              <input
                className="input mb-2"
                placeholder="Pertanyaan (Inggris)"
                value={q.questionEn}
                onChange={(e) => updateQuiz(qi, { questionEn: e.target.value })}
              />
              <input
                className="input mb-2"
                placeholder="Pertanyaan (Indonesia)"
                value={q.questionId}
                onChange={(e) => updateQuiz(qi, { questionId: e.target.value })}
              />
              {q.optionsEn.map((_, oi) => (
                <div key={oi} className="mb-1 grid grid-cols-2 gap-2">
                  <input
                    className="input"
                    placeholder={`Opsi ${oi + 1} (EN)`}
                    value={q.optionsEn[oi]}
                    onChange={(e) => updateQuizOption(qi, 'optionsEn', oi, e.target.value)}
                  />
                  <input
                    className="input"
                    placeholder={`Opsi ${oi + 1} (ID)`}
                    value={q.optionsId[oi] ?? ''}
                    onChange={(e) => updateQuizOption(qi, 'optionsId', oi, e.target.value)}
                  />
                </div>
              ))}
              <button
                type="button"
                className="mt-1 text-xs text-brand-600"
                onClick={() =>
                  updateQuiz(qi, { optionsEn: [...q.optionsEn, ''], optionsId: [...q.optionsId, ''] })
                }
              >
                + Tambah opsi
              </button>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="label !mb-1 text-xs">Indeks jawaban benar (0-based)</label>
                  <input
                    type="number"
                    className="input"
                    min={0}
                    value={q.correctIndex}
                    onChange={(e) => updateQuiz(qi, { correctIndex: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="label !mb-1 text-xs">XP Reward</label>
                  <input
                    type="number"
                    className="input"
                    value={q.xpReward}
                    onChange={(e) => updateQuiz(qi, { xpReward: Number(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={saving} className="btn-primary">
        {saving ? 'Menyimpan…' : 'Simpan Buku'}
      </button>
    </form>
  );
}
