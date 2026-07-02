import { NextRequest, NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { promoCodes } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminPromoSchema } from '@/lib/validation';
import { newId } from '@/lib/id';
import { logAdminAction } from '@/lib/audit';

export async function GET() {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const db = await getDb();
  const rows = await db.select().from(promoCodes).orderBy(desc(promoCodes.createdAt));
  return NextResponse.json({ promoCodes: rows });
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminPromoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  const id = newId('promo');
  await db.insert(promoCodes).values({
    id,
    code: parsed.data.code,
    discountPercent: parsed.data.discountPercent,
    maxUses: parsed.data.maxUses ?? null,
    active: parsed.data.active
  });
  await logAdminAction(guard.user.id, 'promo.create', 'promo_code', id, parsed.data);

  return NextResponse.json({ ok: true, id });
}
