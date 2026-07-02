import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ orderId: string }> }) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;
  const { orderId } = await params;

  const db = await getDb();
  const rows = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);
  const order = rows[0];
  if (!order || order.userId !== guard.user.id) {
    return NextResponse.json({ error: 'Pesanan tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json({ status: order.status });
}
