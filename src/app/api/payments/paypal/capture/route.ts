import { NextRequest, NextResponse } from 'next/server';
import { requireUser } from '@/lib/auth/guards';
import { capturePaypalOrder } from '@/lib/payments/paypal';
import { markOrderPaid } from '@/lib/payments/common';

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const paypalOrderId = body?.paypalOrderId;
  if (typeof paypalOrderId !== 'string') {
    return NextResponse.json({ error: 'paypalOrderId wajib diisi.' }, { status: 400 });
  }

  try {
    const { ok, referenceId } = await capturePaypalOrder(paypalOrderId);
    if (!ok || !referenceId) {
      return NextResponse.json({ error: 'Pembayaran belum berhasil.' }, { status: 400 });
    }

    await markOrderPaid(referenceId, paypalOrderId);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
