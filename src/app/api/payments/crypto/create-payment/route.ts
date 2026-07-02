import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';
import { isPlanId } from '@/lib/pricing';
import { resolveAmount, createPendingOrder } from '@/lib/payments/common';
import { createCryptoPayment, isCryptoCurrency } from '@/lib/payments/nowpayments';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const plan = body?.plan;
  const currency = body?.currency;
  const promoCode = body?.promoCode;

  if (typeof plan !== 'string' || !isPlanId(plan) || plan === 'school') {
    return NextResponse.json({ error: 'Paket tidak valid.' }, { status: 400 });
  }
  if (typeof currency !== 'string' || !isCryptoCurrency(currency)) {
    return NextResponse.json({ error: 'Mata uang crypto tidak didukung.' }, { status: 400 });
  }

  try {
    const { amountUsd, appliedPromo } = await resolveAmount(plan, promoCode);
    const localOrderId = await createPendingOrder({ userId: guard.user.id, planId: plan, provider: 'crypto', amountUsd, promoCode: appliedPromo });
    const payment = await createCryptoPayment({ orderId: localOrderId, amountUsd, payCurrency: currency });

    const db = await getDb();
    await db
      .update(orders)
      .set({
        providerRef: payment.paymentId,
        cryptoCurrency: payment.payCurrency,
        cryptoPayAddress: payment.payAddress,
        cryptoPayAmount: String(payment.payAmount)
      })
      .where(eq(orders.id, localOrderId));

    return NextResponse.json({
      ok: true,
      localOrderId,
      paymentId: payment.paymentId,
      payAddress: payment.payAddress,
      payAmount: payment.payAmount,
      payCurrency: payment.payCurrency,
      amountUsd
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
