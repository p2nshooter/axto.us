import { NextRequest, NextResponse } from 'next/server';
import { getCategories } from '@/lib/data/books';
import { getDb } from '@/lib/db/client';
import { categories } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminCategorySchema } from '@/lib/validation';
import { newId } from '@/lib/id';
import { logAdminAction } from '@/lib/audit';

export async function GET() {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  return NextResponse.json({ categories: await getCategories() });
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminCategorySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  const id = newId('cat');
  await db.insert(categories).values({ id, ...parsed.data });
  await logAdminAction(guard.user.id, 'category.create', 'category', id, parsed.data);

  return NextResponse.json({ ok: true, id });
}
