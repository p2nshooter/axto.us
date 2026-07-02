import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { promoCodes } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { logAdminAction } from '@/lib/audit';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const active = body?.active;
  if (typeof active !== 'boolean') {
    return NextResponse.json({ error: 'Field active wajib berupa boolean.' }, { status: 400 });
  }

  const db = await getDb();
  await db.update(promoCodes).set({ active }).where(eq(promoCodes.id, id));
  await logAdminAction(guard.user.id, 'promo.update', 'promo_code', id, { active });

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const db = await getDb();
  await db.delete(promoCodes).where(eq(promoCodes.id, id));
  await logAdminAction(guard.user.id, 'promo.delete', 'promo_code', id);

  return NextResponse.json({ ok: true });
}
