import { notFound } from 'next/navigation';
import { and, eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth/session';
import { getDb } from '@/lib/db/client';
import { favorites, readingProgress } from '@/lib/db/schema';
import { getBookBySlug, getBookPages, getQuizQuestions } from '@/lib/data/books';
import { hasPremiumAccess } from '@/lib/access';
import { Reader } from '@/components/reader/Reader';
import { PremiumLock } from '@/components/reader/PremiumLock';

export const dynamic = 'force-dynamic';

export default async function ReadBookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await getCurrentUser();
  if (!user) return null;

  const book = await getBookBySlug(slug);
  if (!book) notFound();

  if (book.isPremium && !hasPremiumAccess(user)) {
    return <PremiumLock book={book} />;
  }

  const [pages, quiz, db] = await Promise.all([getBookPages(book.id), getQuizQuestions(book.id), getDb()]);

  const [favRow] = await db
    .select({ id: favorites.id })
    .from(favorites)
    .where(and(eq(favorites.userId, user.id), eq(favorites.bookId, book.id)))
    .limit(1);

  const [progressRow] = await db
    .select()
    .from(readingProgress)
    .where(and(eq(readingProgress.userId, user.id), eq(readingProgress.bookId, book.id)))
    .limit(1);

  return (
    <Reader
      book={book}
      pages={pages}
      quiz={quiz}
      isFavorited={!!favRow}
      initialPage={progressRow?.currentPage ?? 1}
      alreadyCompleted={!!progressRow?.completedAt}
    />
  );
}
