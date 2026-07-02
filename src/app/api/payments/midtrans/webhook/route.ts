import { NextRequest, NextResponse } from 'next/server';
import { verifyMidtransSignature } from '@/lib/payments/midtrans';
import { markOrderPaid, markOrderFailed } from '@/lib/payments/common';

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;
  if (!body?.order_id || !body?.status_code || !body?.gross_amount || !body?.signature_key) {
    return NextResponse.json({ error: 'Payload tidak lengkap.' }, { status: 400 });
  }

  const valid = await verifyMidtransSignature({
    orderId: body.order_id,
    statusCode: body.status_code,
    grossAmount: body.gross_amount,
    signatureKey: body.signature_key
  });

  if (!valid) {
    return NextResponse.json({ error: 'Signature tidak valid.' }, { status: 401 });
  }

  const status = body.transaction_status as string;

  if (status === 'capture' || status === 'settlement') {
    await markOrderPaid(body.order_id, body.transaction_id);
  } else if (status === 'deny' || status === 'cancel' || status === 'expire' || status === 'failure') {
    await markOrderFailed(body.order_id);
  }

  return NextResponse.json({ ok: true });
}
