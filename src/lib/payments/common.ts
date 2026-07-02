import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders, users, promoCodes } from '@/lib/db/schema';
import { PLANS, applyPromo, isPlanId, type PlanId } from '@/lib/pricing';
import { newId } from '@/lib/id';

export async function resolveAmount(planId: PlanId, promoCode?: string | null) {
  const plan = PLANS[planId];
  let amountUsd = plan.amountUsd;
  let appliedPromo: string | null = null;

  if (promoCode) {
    const db = await getDb();
    const rows = await db.select().from(promoCodes).where(eq(promoCodes.code, promoCode.toUpperCase())).limit(1);
    const promo = rows[0];
    if (promo && promo.active && (!promo.maxUses || promo.usedCount < promo.maxUses) && (!promo.expiresAt || promo.expiresAt.getTime() > Date.now())) {
      amountUsd = applyPromo(amountUsd, promo.discountPercent);
      appliedPromo = promo.code;
    }
  }

  return { amountUsd, appliedPromo };
}

export async function createPendingOrder(params: {
  userId: string;
  planId: PlanId;
  provider: 'paypal' | 'midtrans' | 'crypto';
  amountUsd: number;
  promoCode?: string | null;
}) {
  const db = await getDb();
  const id = newId('ord');
  await db.insert(orders).values({
    id,
    userId: params.userId,
    plan: params.planId,
    amountUsd: params.amountUsd,
    provider: params.provider,
    status: 'pending',
    promoCode: params.promoCode ?? null
  });
  return id;
}

export async function markOrderPaid(orderId: string, providerRef?: string) {
  const db = await getDb();
  const rows = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);
  const order = rows[0];
  if (!order) return null;
  if (order.status === 'paid') return order;

  await db
    .update(orders)
    .set({ status: 'paid', providerRef: providerRef ?? order.providerRef, updatedAt: new Date() })
    .where(eq(orders.id, orderId));

  if (order.promoCode) {
    const promoRows = await db.select().from(promoCodes).where(eq(promoCodes.code, order.promoCode)).limit(1);
    if (promoRows[0]) {
      await db.update(promoCodes).set({ usedCount: promoRows[0].usedCount + 1 }).where(eq(promoCodes.id, promoRows[0].id));
    }
  }

  await applyPlanToUser(order.userId, order.plan as PlanId);
  return order;
}

export async function markOrderFailed(orderId: string) {
  const db = await getDb();
  await db.update(orders).set({ status: 'failed', updatedAt: new Date() }).where(eq(orders.id, orderId));
}

export async function applyPlanToUser(userId: string, planId: PlanId) {
  if (!isPlanId(planId)) return;
  const plan = PLANS[planId];
  const db = await getDb();

  let planExpiresAt: Date | null = null;
  if (plan.interval === 'month') planExpiresAt = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);
  if (plan.interval === 'year') planExpiresAt = new Date(Date.now() + 366 * 24 * 60 * 60 * 1000);
  // 'once' (lifetime) and school → planExpiresAt stays null (never expires)

  await db.update(users).set({ plan: planId, planExpiresAt, updatedAt: new Date() }).where(eq(users.id, userId));
}
