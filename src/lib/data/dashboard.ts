import { eq, and, desc, ne, sql } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { books, categories, favorites, readingProgress } from '@/lib/db/schema';

export async function getContinueReading(userId: string, limit = 6) {
  const db = await getDb();
  const rows = await db
    .select({ progress: readingProgress, book: books })
    .from(readingProgress)
    .innerJoin(books, eq(readingProgress.bookId, books.id))
    .where(and(eq(readingProgress.userId, userId), sql`${readingProgress.completedAt} is null`))
    .orderBy(desc(readingProgress.updatedAt))
    .limit(limit);
  return rows;
}

export async function getFavoriteBooks(userId: string) {
  const db = await getDb();
  return db
    .select({ book: books })
    .from(favorites)
    .innerJoin(books, eq(favorites.bookId, books.id))
    .where(eq(favorites.userId, userId))
    .orderBy(desc(favorites.createdAt));
}

export async function getReadingHistory(userId: string) {
  const db = await getDb();
  return db
    .select({ progress: readingProgress, book: books })
    .from(readingProgress)
    .innerJoin(books, eq(readingProgress.bookId, books.id))
    .where(eq(readingProgress.userId, userId))
    .orderBy(desc(readingProgress.updatedAt));
}

export async function getRecommendedBooks(userId: string, limit = 8) {
  const db = await getDb();

  const readRows = await db
    .select({ categoryId: books.categoryId, bookId: books.id })
    .from(readingProgress)
    .innerJoin(books, eq(readingProgress.bookId, books.id))
    .where(eq(readingProgress.userId, userId));

  const readBookIds = new Set(readRows.map((r) => r.bookId));
  const categoryCounts = new Map<string, number>();
  for (const r of readRows) categoryCounts.set(r.categoryId, (categoryCounts.get(r.categoryId) ?? 0) + 1);

  const topCategoryId = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];

  const candidates = topCategoryId
    ? await db
        .select()
        .from(books)
        .where(and(eq(books.categoryId, topCategoryId), eq(books.status, 'published')))
        .orderBy(desc(books.readCount))
        .limit(limit + readBookIds.size)
    : await db.select().from(books).where(eq(books.status, 'published')).orderBy(desc(books.readCount)).limit(limit);

  const filtered = candidates.filter((b) => !readBookIds.has(b.id));
  if (filtered.length >= limit) return filtered.slice(0, limit);

  const fallback = await db.select().from(books).where(eq(books.status, 'published')).orderBy(desc(books.readCount)).limit(limit * 2);
  const merged = [...filtered];
  for (const b of fallback) {
    if (merged.length >= limit) break;
    if (!merged.some((m) => m.id === b.id) && !readBookIds.has(b.id)) merged.push(b);
  }
  return merged.slice(0, limit);
}

export async function getUserStats(userId: string) {
  const db = await getDb();

  const progress = await db.select().from(readingProgress).where(eq(readingProgress.userId, userId));
  const booksCompleted = progress.filter((p) => p.completedAt).length;
  const totalXp = progress.reduce((sum, p) => sum + p.xpEarned, 0);

  const categoryCount = new Map<string, number>();
  if (progress.length > 0) {
    const bookRows = await db.select({ id: books.id, categoryId: books.categoryId }).from(books);
    const catByBook = new Map(bookRows.map((b) => [b.id, b.categoryId]));
    for (const p of progress) {
      const catId = catByBook.get(p.bookId);
      if (catId) categoryCount.set(catId, (categoryCount.get(catId) ?? 0) + 1);
    }
  }
  const topCategoryId = [...categoryCount.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  let favoriteCategoryName: { en: string; id: string } | null = null;
  if (topCategoryId) {
    const rows = await db.select().from(categories).where(eq(categories.id, topCategoryId)).limit(1);
    if (rows[0]) favoriteCategoryName = { en: rows[0].nameEn, id: rows[0].nameId };
  }

  const days = new Set(
    progress.map((p) => new Date(p.updatedAt).toISOString().slice(0, 10))
  );
  let streak = 0;
  const cursor = new Date();
  for (;;) {
    const key = cursor.toISOString().slice(0, 10);
    if (days.has(key)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else break;
  }

  const level = Math.floor(totalXp / 100) + 1;

  return { booksCompleted, totalXp, favoriteCategoryName, streak, level };
}
