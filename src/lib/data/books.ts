import { eq, desc, and } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { books, categories, bookPages, quizQuestions, authors } from '@/lib/db/schema';

export async function getCategories() {
  const db = await getDb();
  return db.select().from(categories).orderBy(categories.sortOrder);
}

export async function getFeaturedBooks(limit = 8) {
  const db = await getDb();
  return db
    .select()
    .from(books)
    .where(eq(books.status, 'published'))
    .orderBy(desc(books.readCount))
    .limit(limit);
}

export async function getBooksByCategorySlug(categorySlug: string, limit = 20) {
  const db = await getDb();
  const cat = await db.select().from(categories).where(eq(categories.slug, categorySlug)).limit(1);
  if (!cat[0]) return [];
  return db
    .select()
    .from(books)
    .where(and(eq(books.categoryId, cat[0].id), eq(books.status, 'published')))
    .orderBy(desc(books.readCount))
    .limit(limit);
}

export async function getAllPublishedBooks() {
  const db = await getDb();
  return db.select().from(books).where(eq(books.status, 'published')).orderBy(desc(books.createdAt));
}

export async function getAllBooksForAdmin() {
  const db = await getDb();
  return db.select().from(books).orderBy(desc(books.createdAt));
}

export async function getAllAuthors() {
  const db = await getDb();
  return db.select().from(authors);
}

export async function getBookBySlug(slug: string) {
  const db = await getDb();
  const rows = await db.select().from(books).where(eq(books.slug, slug)).limit(1);
  return rows[0] ?? null;
}

export async function getBookById(id: string) {
  const db = await getDb();
  const rows = await db.select().from(books).where(eq(books.id, id)).limit(1);
  return rows[0] ?? null;
}

export async function getBookPages(bookId: string) {
  const db = await getDb();
  return db.select().from(bookPages).where(eq(bookPages.bookId, bookId)).orderBy(bookPages.pageNumber);
}

export async function getQuizQuestions(bookId: string) {
  const db = await getDb();
  return db.select().from(quizQuestions).where(eq(quizQuestions.bookId, bookId)).orderBy(quizQuestions.sortOrder);
}

export async function getAuthorById(id: string | null) {
  if (!id) return null;
  const db = await getDb();
  const rows = await db.select().from(authors).where(eq(authors.id, id)).limit(1);
  return rows[0] ?? null;
}
