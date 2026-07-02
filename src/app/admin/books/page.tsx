import Link from 'next/link';
import { getAllBooksForAdmin, getCategories } from '@/lib/data/books';
import { BooksTable } from '@/components/admin/BooksTable';

export const dynamic = 'force-dynamic';

export default async function AdminBooksPage() {
  const [books, categories] = await Promise.all([getAllBooksForAdmin(), getCategories()]);
  const categoryNameById = new Map(categories.map((c) => [c.id, c.nameId]));

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Semua Buku</h1>
        <Link href="/admin/books/new" className="btn-primary">
          + Tambah Buku
        </Link>
      </div>
      <BooksTable
        books={books.map((b) => ({
          id: b.id,
          titleId: b.titleId,
          coverEmoji: b.coverEmoji,
          categoryName: categoryNameById.get(b.categoryId) ?? '—',
          isPremium: b.isPremium,
          status: b.status,
          pageCount: b.pageCount,
          readCount: b.readCount
        }))}
      />
    </div>
  );
}
