import { NextRequest, NextResponse } from 'next/server';
import { verifyNowPaymentsSignature } from '@/lib/payments/nowpayments';
import { markOrderPaid, markOrderFailed } from '@/lib/payments/common';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-nowpayments-sig');

  const valid = await verifyNowPaymentsSignature(rawBody, signature);
  if (!valid) {
    return NextResponse.json({ error: 'Signature tidak valid.' }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const orderId = payload.order_id as string;
  const status = payload.payment_status as string;

  if (status === 'finished' || status === 'confirmed') {
    await markOrderPaid(orderId, String(payload.payment_id));
  } else if (status === 'failed' || status === 'expired' || status === 'refunded') {
    await markOrderFailed(orderId);
  }

  return NextResponse.json({ ok: true });
}
