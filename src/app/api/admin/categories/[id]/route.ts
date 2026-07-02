import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { categories, books } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminCategorySchema } from '@/lib/validation';
import { logAdminAction } from '@/lib/audit';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminCategorySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  await db.update(categories).set(parsed.data).where(eq(categories.id, id));
  await logAdminAction(guard.user.id, 'category.update', 'category', id, parsed.data);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const db = await getDb();
  const inUse = await db.select({ id: books.id }).from(books).where(eq(books.categoryId, id)).limit(1);
  if (inUse.length > 0) {
    return NextResponse.json({ error: 'Kategori masih digunakan oleh buku. Pindahkan buku terlebih dahulu.' }, { status: 409 });
  }

  await db.delete(categories).where(eq(categories.id, id));
  await logAdminAction(guard.user.id, 'category.delete', 'category', id);

  return NextResponse.json({ ok: true });
}
