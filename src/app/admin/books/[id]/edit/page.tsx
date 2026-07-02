import { notFound } from 'next/navigation';
import { getBookById, getBookPages, getQuizQuestions, getCategories, getAllAuthors } from '@/lib/data/books';
import { BookForm } from '@/components/admin/BookForm';

export const dynamic = 'force-dynamic';

export default async function EditBookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBookById(id);
  if (!book) notFound();

  const [pages, quiz, categories, authors] = await Promise.all([
    getBookPages(book.id),
    getQuizQuestions(book.id),
    getCategories(),
    getAllAuthors()
  ]);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Ubah Buku</h1>
      <BookForm
        bookId={book.id}
        categories={categories.map((c) => ({ id: c.id, nameId: c.nameId }))}
        authors={authors.map((a) => ({ id: a.id, name: a.name }))}
        initial={{
          slug: book.slug,
          titleEn: book.titleEn,
          titleId: book.titleId,
          descriptionEn: book.descriptionEn,
          descriptionId: book.descriptionId,
          categoryId: book.categoryId,
          authorId: book.authorId,
          coverEmoji: book.coverEmoji,
          coverPalette: book.coverPalette,
          ageMin: book.ageMin,
          ageMax: book.ageMax,
          isPremium: book.isPremium,
          status: book.status,
          pages: pages.map((p) => ({ illustrationSeed: p.illustrationSeed, textEn: p.textEn, textId: p.textId })),
          quiz: quiz.map((q) => ({
            questionEn: q.questionEn,
            questionId: q.questionId,
            optionsEn: JSON.parse(q.optionsEnJson),
            optionsId: JSON.parse(q.optionsIdJson),
            correctIndex: q.correctIndex,
            xpReward: q.xpReward
          }))
        }}
      />
    </div>
  );
}
