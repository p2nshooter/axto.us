import { NextRequest, NextResponse } from 'next/server';
import { requireUser } from '@/lib/auth/guards';
import { isPlanId } from '@/lib/pricing';
import { resolveAmount, createPendingOrder } from '@/lib/payments/common';
import { createPaypalOrder } from '@/lib/payments/paypal';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const plan = body?.plan;
  const promoCode = body?.promoCode;
  if (typeof plan !== 'string' || !isPlanId(plan) || plan === 'school') {
    return NextResponse.json({ error: 'Paket tidak valid.' }, { status: 400 });
  }

  try {
    const { amountUsd, appliedPromo } = await resolveAmount(plan, promoCode);
    const localOrderId = await createPendingOrder({ userId: guard.user.id, planId: plan, provider: 'paypal', amountUsd, promoCode: appliedPromo });
    const { paypalOrderId, approveLink } = await createPaypalOrder(localOrderId, amountUsd, `AXTO ${plan}`);

    return NextResponse.json({ ok: true, localOrderId, paypalOrderId, approveLink, amountUsd });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
