import { getEnv } from '@/lib/db/client';

// Midtrans Snap processes in IDR. We keep our canonical prices in USD (see lib/pricing.ts)
// and convert with this fixed rate. Replace with a live FX rate if you need more precision.
export const USD_TO_IDR_RATE = 16_000;

export function usdToIdr(amountUsd: number): number {
  return Math.round(amountUsd * USD_TO_IDR_RATE);
}

export async function createMidtransTransaction(params: {
  orderId: string;
  amountUsd: number;
  customerName: string;
  customerEmail: string;
  itemName: string;
}) {
  const env = await getEnv();
  if (!env.MIDTRANS_SERVER_KEY) {
    throw new Error('Midtrans belum dikonfigurasi. Set MIDTRANS_SERVER_KEY.');
  }

  const isProduction = env.MIDTRANS_IS_PRODUCTION === 'true';
  const url = isProduction
    ? 'https://app.midtrans.com/snap/v1/transactions'
    : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

  const grossAmount = usdToIdr(params.amountUsd);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${env.MIDTRANS_SERVER_KEY}:`).toString('base64')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      transaction_details: { order_id: params.orderId, gross_amount: grossAmount },
      customer_details: { first_name: params.customerName, email: params.customerEmail },
      item_details: [{ id: params.orderId, price: grossAmount, quantity: 1, name: params.itemName }],
      callbacks: { finish: `${env.APP_URL}/app/pricing/checkout/midtrans/return?order_id=${params.orderId}` }
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gagal membuat transaksi Midtrans: ${text}`);
  }

  const data = (await res.json()) as any;
  return { token: data.token as string, redirectUrl: data.redirect_url as string };
}

export async function verifyMidtransSignature(params: {
  orderId: string;
  statusCode: string;
  grossAmount: string;
  signatureKey: string;
}): Promise<boolean> {
  const env = await getEnv();
  const input = `${params.orderId}${params.statusCode}${params.grossAmount}${env.MIDTRANS_SERVER_KEY}`;
  const digest = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(input));
  const hex = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hex === params.signatureKey;
}
