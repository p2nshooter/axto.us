import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { books, bookPages, quizQuestions, favorites, readingProgress } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminBookSchema } from '@/lib/validation';
import { newId } from '@/lib/id';
import { logAdminAction } from '@/lib/audit';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminBookSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const data = parsed.data;

  const db = await getDb();
  const existing = await db.select({ id: books.id }).from(books).where(eq(books.id, id)).limit(1);
  if (existing.length === 0) return NextResponse.json({ error: 'Buku tidak ditemukan.' }, { status: 404 });

  await db
    .update(books)
    .set({
      slug: data.slug,
      titleEn: data.titleEn,
      titleId: data.titleId,
      descriptionEn: data.descriptionEn,
      descriptionId: data.descriptionId,
      categoryId: data.categoryId,
      authorId: data.authorId ?? null,
      coverEmoji: data.coverEmoji,
      coverPalette: data.coverPalette,
      ageMin: data.ageMin,
      ageMax: data.ageMax,
      isPremium: data.isPremium,
      status: data.status,
      pageCount: data.pages.length,
      updatedAt: new Date()
    })
    .where(eq(books.id, id));

  await db.delete(bookPages).where(eq(bookPages.bookId, id));
  for (let i = 0; i < data.pages.length; i++) {
    const p = data.pages[i];
    await db.insert(bookPages).values({
      id: newId('pag'),
      bookId: id,
      pageNumber: i + 1,
      illustrationSeed: p.illustrationSeed,
      textEn: p.textEn,
      textId: p.textId
    });
  }

  await db.delete(quizQuestions).where(eq(quizQuestions.bookId, id));
  for (let i = 0; i < data.quiz.length; i++) {
    const q = data.quiz[i];
    await db.insert(quizQuestions).values({
      id: newId('qz'),
      bookId: id,
      sortOrder: i + 1,
      questionEn: q.questionEn,
      questionId: q.questionId,
      optionsEnJson: JSON.stringify(q.optionsEn),
      optionsIdJson: JSON.stringify(q.optionsId),
      correctIndex: q.correctIndex,
      xpReward: q.xpReward
    });
  }

  await logAdminAction(guard.user.id, 'book.update', 'book', id, { slug: data.slug });

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const db = await getDb();
  await db.delete(favorites).where(eq(favorites.bookId, id));
  await db.delete(readingProgress).where(eq(readingProgress.bookId, id));
  await db.delete(quizQuestions).where(eq(quizQuestions.bookId, id));
  await db.delete(bookPages).where(eq(bookPages.bookId, id));
  await db.delete(books).where(eq(books.id, id));
  await logAdminAction(guard.user.id, 'book.delete', 'book', id);

  return NextResponse.json({ ok: true });
}
