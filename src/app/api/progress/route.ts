import { NextRequest, NextResponse } from 'next/server';
import { and, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { readingProgress } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';
import { newId } from '@/lib/id';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const bookId: string | undefined = body?.bookId;
  const currentPage: number | undefined = body?.currentPage;
  const completed: boolean = !!body?.completed;
  const quizScore: number | undefined = body?.quizScore;
  const xpEarned: number = Number.isFinite(body?.xpEarned) ? body.xpEarned : 0;

  if (!bookId || !Number.isFinite(currentPage)) {
    return NextResponse.json({ error: 'bookId dan currentPage wajib diisi.' }, { status: 400 });
  }

  const db = await getDb();
  const existing = await db
    .select()
    .from(readingProgress)
    .where(and(eq(readingProgress.userId, guard.user.id), eq(readingProgress.bookId, bookId)))
    .limit(1);

  const now = new Date();

  if (existing.length > 0) {
    await db
      .update(readingProgress)
      .set({
        currentPage,
        xpEarned: existing[0].xpEarned + xpEarned,
        quizScore: quizScore ?? existing[0].quizScore,
        completedAt: completed ? now : existing[0].completedAt,
        updatedAt: now
      })
      .where(eq(readingProgress.id, existing[0].id));
  } else {
    await db.insert(readingProgress).values({
      id: newId('prg'),
      userId: guard.user.id,
      bookId,
      currentPage,
      xpEarned,
      quizScore: quizScore ?? null,
      completedAt: completed ? now : null,
      updatedAt: now
    });
  }

  return NextResponse.json({ ok: true });
}
