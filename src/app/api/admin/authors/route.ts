import { NextRequest, NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { authors } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminAuthorSchema } from '@/lib/validation';
import { newId } from '@/lib/id';
import { logAdminAction } from '@/lib/audit';

export async function GET() {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const db = await getDb();
  const rows = await db.select().from(authors).orderBy(desc(authors.createdAt));
  return NextResponse.json({ authors: rows });
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminAuthorSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  const id = newId('aut');
  await db.insert(authors).values({ id, ...parsed.data, isStaff: true });
  await logAdminAction(guard.user.id, 'author.create', 'author', id, parsed.data);

  return NextResponse.json({ ok: true, id });
}
