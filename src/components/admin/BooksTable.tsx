'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Row = {
  id: string;
  titleId: string;
  coverEmoji: string;
  categoryName: string;
  isPremium: boolean;
  status: string;
  pageCount: number;
  readCount: number;
};

export function BooksTable({ books }: { books: Row[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function remove(id: string) {
    if (!confirm('Hapus buku ini? Tindakan ini tidak bisa dibatalkan.')) return;
    setDeleting(id);
    await fetch(`/api/admin/books/${id}`, { method: 'DELETE' });
    setDeleting(null);
    router.refresh();
  }

  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-slate-400">
            <th className="pb-2 font-medium">Judul</th>
            <th className="pb-2 font-medium">Kategori</th>
            <th className="pb-2 font-medium">Halaman</th>
            <th className="pb-2 font-medium">Dibaca</th>
            <th className="pb-2 font-medium">Premium</th>
            <th className="pb-2 font-medium">Status</th>
            <th className="pb-2 font-medium">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="py-2">
                {b.coverEmoji} {b.titleId}
              </td>
              <td className="py-2">{b.categoryName}</td>
              <td className="py-2">{b.pageCount}</td>
              <td className="py-2">{b.readCount.toLocaleString('id-ID')}</td>
              <td className="py-2">{b.isPremium ? '✓ PRO' : '—'}</td>
              <td className="py-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    b.status === 'published'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                  }`}
                >
                  {b.status === 'published' ? 'Aktif' : 'Draft'}
                </span>
              </td>
              <td className="py-2">
                <div className="flex gap-3">
                  <Link href={`/admin/books/${b.id}/edit`} className="text-brand-600 hover:underline">
                    Ubah
                  </Link>
                  <button
                    onClick={() => remove(b.id)}
                    disabled={deleting === b.id}
                    className="text-red-500 hover:underline disabled:opacity-50"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan={7} className="py-4 text-center text-slate-400">
                Belum ada buku.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
