import { getEnv } from '@/lib/db/client';

function baseUrl(mode?: string) {
  return mode === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';
}

async function getAccessToken(): Promise<string> {
  const env = await getEnv();
  if (!env.PAYPAL_CLIENT_ID || !env.PAYPAL_CLIENT_SECRET) {
    throw new Error('PayPal belum dikonfigurasi. Set PAYPAL_CLIENT_ID dan PAYPAL_CLIENT_SECRET.');
  }

  const res = await fetch(`${baseUrl(env.PAYPAL_MODE)}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  if (!res.ok) throw new Error('Gagal mengautentikasi ke PayPal.');
  const data = (await res.json()) as any;
  return data.access_token;
}

export async function createPaypalOrder(orderId: string, amountUsd: number, description: string) {
  const env = await getEnv();
  const token = await getAccessToken();

  const res = await fetch(`${baseUrl(env.PAYPAL_MODE)}/v2/checkout/orders`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: orderId,
          description,
          amount: { currency_code: 'USD', value: amountUsd.toFixed(2) }
        }
      ],
      application_context: {
        brand_name: 'AXTO',
        return_url: `${env.APP_URL}/app/pricing/checkout/paypal/return`,
        cancel_url: `${env.APP_URL}/app/pricing/checkout`
      }
    })
  });

  if (!res.ok) throw new Error('Gagal membuat order PayPal.');
  const data = (await res.json()) as any;
  const approveLink: string | undefined = data.links?.find((l: any) => l.rel === 'approve')?.href;
  return { paypalOrderId: data.id as string, approveLink };
}

export async function capturePaypalOrder(paypalOrderId: string) {
  const env = await getEnv();
  const token = await getAccessToken();

  const res = await fetch(`${baseUrl(env.PAYPAL_MODE)}/v2/checkout/orders/${paypalOrderId}/capture`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  });

  const data = (await res.json()) as any;
  const status = data.status as string;
  const referenceId = data.purchase_units?.[0]?.reference_id as string | undefined;
  return { ok: res.ok && status === 'COMPLETED', referenceId, raw: data };
}
