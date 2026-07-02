import { getCategories, getAllAuthors } from '@/lib/data/books';
import { BookForm } from '@/components/admin/BookForm';

export const dynamic = 'force-dynamic';

export default async function NewBookPage() {
  const [categories, authors] = await Promise.all([getCategories(), getAllAuthors()]);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Tambah Buku</h1>
      <BookForm
        categories={categories.map((c) => ({ id: c.id, nameId: c.nameId }))}
        authors={authors.map((a) => ({ id: a.id, name: a.name }))}
      />
    </div>
  );
}
