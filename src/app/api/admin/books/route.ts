import { NextRequest, NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { books, bookPages, quizQuestions } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminBookSchema } from '@/lib/validation';
import { newId } from '@/lib/id';
import { logAdminAction } from '@/lib/audit';

export async function GET() {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const db = await getDb();
  const rows = await db.select().from(books).orderBy(desc(books.createdAt));
  return NextResponse.json({ books: rows });
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminBookSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  const data = parsed.data;

  const db = await getDb();
  const bookId = newId('bok');

  await db.insert(books).values({
    id: bookId,
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
    pageCount: data.pages.length
  });

  for (let i = 0; i < data.pages.length; i++) {
    const p = data.pages[i];
    await db.insert(bookPages).values({
      id: newId('pag'),
      bookId,
      pageNumber: i + 1,
      illustrationSeed: p.illustrationSeed,
      textEn: p.textEn,
      textId: p.textId
    });
  }

  for (let i = 0; i < data.quiz.length; i++) {
    const q = data.quiz[i];
    await db.insert(quizQuestions).values({
      id: newId('qz'),
      bookId,
      sortOrder: i + 1,
      questionEn: q.questionEn,
      questionId: q.questionId,
      optionsEnJson: JSON.stringify(q.optionsEn),
      optionsIdJson: JSON.stringify(q.optionsId),
      correctIndex: q.correctIndex,
      xpReward: q.xpReward
    });
  }

  await logAdminAction(guard.user.id, 'book.create', 'book', bookId, { slug: data.slug });

  return NextResponse.json({ ok: true, id: bookId });
}
