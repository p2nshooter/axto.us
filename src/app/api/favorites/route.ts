import { NextRequest, NextResponse } from 'next/server';
import { and, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { favorites } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';
import { newId } from '@/lib/id';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const bookId = body?.bookId;
  if (typeof bookId !== 'string' || !bookId) {
    return NextResponse.json({ error: 'bookId wajib diisi.' }, { status: 400 });
  }

  const db = await getDb();
  const existing = await db
    .select({ id: favorites.id })
    .from(favorites)
    .where(and(eq(favorites.userId, guard.user.id), eq(favorites.bookId, bookId)))
    .limit(1);

  if (existing.length > 0) {
    await db.delete(favorites).where(eq(favorites.id, existing[0].id));
    return NextResponse.json({ ok: true, favorited: false });
  }

  await db.insert(favorites).values({ id: newId('fav'), userId: guard.user.id, bookId });
  return NextResponse.json({ ok: true, favorited: true });
}
