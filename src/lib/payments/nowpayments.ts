import { getEnv } from '@/lib/db/client';
import { isCryptoCurrency, type CryptoCurrency } from './constants';

export { isCryptoCurrency };
export type { CryptoCurrency };

export async function createCryptoPayment(params: {
  orderId: string;
  amountUsd: number;
  payCurrency: CryptoCurrency;
}) {
  const env = await getEnv();
  if (!env.NOWPAYMENTS_API_KEY) {
    throw new Error('Pembayaran crypto belum dikonfigurasi. Set NOWPAYMENTS_API_KEY.');
  }

  const res = await fetch('https://api.nowpayments.io/v1/payment', {
    method: 'POST',
    headers: { 'x-api-key': env.NOWPAYMENTS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      price_amount: params.amountUsd,
      price_currency: 'usd',
      pay_currency: params.payCurrency,
      order_id: params.orderId,
      order_description: `AXTO subscription (${params.orderId})`,
      ipn_callback_url: `${env.APP_URL}/api/payments/crypto/webhook`
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gagal membuat pembayaran crypto: ${text}`);
  }

  const data = (await res.json()) as any;
  return {
    paymentId: String(data.payment_id),
    payAddress: data.pay_address as string,
    payAmount: data.pay_amount as number,
    payCurrency: data.pay_currency as string
  };
}

export async function getCryptoPaymentStatus(paymentId: string) {
  const env = await getEnv();
  const res = await fetch(`https://api.nowpayments.io/v1/payment/${paymentId}`, {
    headers: { 'x-api-key': env.NOWPAYMENTS_API_KEY! }
  });
  if (!res.ok) throw new Error('Gagal mengambil status pembayaran crypto.');
  return (await res.json()) as any;
}

// NOWPayments signs the IPN body by sorting keys, JSON-stringifying, and HMAC-SHA512
// with NOWPAYMENTS_IPN_SECRET. Verify before trusting any webhook payload.
export async function verifyNowPaymentsSignature(rawBody: string, signatureHeader: string | null): Promise<boolean> {
  const env = await getEnv();
  if (!env.NOWPAYMENTS_IPN_SECRET || !signatureHeader) return false;

  const parsed = JSON.parse(rawBody);
  const sorted = Object.keys(parsed)
    .sort()
    .reduce((acc: Record<string, unknown>, key) => {
      acc[key] = parsed[key];
      return acc;
    }, {});
  const sortedJson = JSON.stringify(sorted);

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(env.NOWPAYMENTS_IPN_SECRET),
    { name: 'HMAC', hash: 'SHA-512' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(sortedJson));
  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return hex === signatureHeader;
}
