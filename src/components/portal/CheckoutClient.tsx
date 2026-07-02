'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import QRCode from 'qrcode';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { PLANS, isPlanId, type PlanId } from '@/lib/pricing';
import { SUPPORTED_CRYPTO, CRYPTO_LABELS, type CryptoCurrency } from '@/lib/payments/constants';

type Method = 'paypal' | 'midtrans' | 'crypto';

export function CheckoutClient() {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const planParam = params.get('plan');
  const plan: PlanId = planParam && isPlanId(planParam) && planParam !== 'school' ? planParam : 'premium_monthly';

  const [method, setMethod] = useState<Method>('paypal');
  const [promoCode, setPromoCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency>('usdt');
  const [cryptoPayment, setCryptoPayment] = useState<{
    localOrderId: string;
    payAddress: string;
    payAmount: number;
    payCurrency: string;
  } | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<'pending' | 'paid' | 'failed' | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const planInfo = PLANS[plan];

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  function startPolling(orderId: string) {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      const res = await fetch(`/api/payments/status/${orderId}`);
      if (!res.ok) return;
      const data = (await res.json()) as any;
      setOrderStatus(data.status);
      if (data.status === 'paid') {
        clearInterval(pollRef.current!);
        setTimeout(() => {
          router.push('/app');
          router.refresh();
        }, 1500);
      } else if (data.status === 'failed') {
        clearInterval(pollRef.current!);
      }
    }, 4000);
  }

  async function payWithPaypal() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/payments/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, promoCode: promoCode || undefined })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal membuat pesanan PayPal.');
      if (data.approveLink) window.location.href = data.approveLink;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function payWithMidtrans() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/payments/midtrans/create-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, promoCode: promoCode || undefined })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal membuat transaksi Midtrans.');
      if (data.redirectUrl) window.location.href = data.redirectUrl;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function payWithCrypto() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/payments/crypto/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, currency: cryptoCurrency, promoCode: promoCode || undefined })
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || 'Gagal membuat pembayaran crypto.');
      setCryptoPayment(data);
      setOrderStatus('pending');
      const dataUrl = await QRCode.toDataURL(data.payAddress, { width: 220, margin: 1 });
      setQrDataUrl(dataUrl);
      startPolling(data.localOrderId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('paymentMethods.title')}</h1>

      <div className="card mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">{plan.replace('_', ' ')}</span>
        <span className="text-xl font-black text-slate-900 dark:text-white">
          ${planInfo.amountUsd}
          {planInfo.interval === 'month' && <span className="text-sm text-slate-400">{t('common.perMonth')}</span>}
          {planInfo.interval === 'year' && <span className="text-sm text-slate-400">{t('common.perYear')}</span>}
        </span>
      </div>

      <div className="mt-4">
        <input
          className="input"
          placeholder={locale === 'id' ? 'Kode promo (opsional)' : 'Promo code (optional)'}
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {(['paypal', 'midtrans', 'crypto'] as Method[]).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={`rounded-xl border px-3 py-2 text-sm font-semibold ${
              method === m ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300' : 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300'
            }`}
          >
            {m === 'paypal' ? t('paymentMethods.paypal') : m === 'midtrans' ? 'Midtrans' : 'Crypto'}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {method === 'paypal' && (
        <button onClick={payWithPaypal} disabled={loading} className="btn-primary mt-6 w-full">
          {loading ? t('paymentMethods.processing') : `${t('paymentMethods.pay')} — PayPal`}
        </button>
      )}

      {method === 'midtrans' && (
        <button onClick={payWithMidtrans} disabled={loading} className="btn-primary mt-6 w-full">
          {loading ? t('paymentMethods.processing') : `${t('paymentMethods.pay')} — Midtrans`}
        </button>
      )}

      {method === 'crypto' && (
        <div className="mt-6">
          {!cryptoPayment ? (
            <>
              <label className="label">{locale === 'id' ? 'Pilih koin' : 'Choose coin'}</label>
              <select
                className="input"
                value={cryptoCurrency}
                onChange={(e) => setCryptoCurrency(e.target.value as CryptoCurrency)}
              >
                {SUPPORTED_CRYPTO.map((c) => (
                  <option key={c} value={c}>
                    {CRYPTO_LABELS[c]}
                  </option>
                ))}
              </select>
              <button onClick={payWithCrypto} disabled={loading} className="btn-primary mt-4 w-full">
                {loading ? t('paymentMethods.processing') : t('paymentMethods.pay')}
              </button>
            </>
          ) : (
            <div className="card text-center">
              {qrDataUrl && <img src={qrDataUrl} alt="QR code" className="mx-auto rounded-xl" />}
              <p className="mt-3 text-sm text-slate-500">
                {t('paymentMethods.sendExactly')} <span className="font-mono font-bold text-slate-800 dark:text-slate-100">{cryptoPayment.payAmount}</span>{' '}
                {cryptoPayment.payCurrency.toUpperCase()} {t('paymentMethods.to')}:
              </p>
              <p className="mt-1 break-all rounded-lg bg-slate-100 p-2 font-mono text-xs dark:bg-slate-800">
                {cryptoPayment.payAddress}
              </p>
              <p className="mt-4 text-sm font-medium text-brand-600">
                {orderStatus === 'paid'
                  ? t('paymentMethods.paymentSuccess')
                  : orderStatus === 'failed'
                    ? t('paymentMethods.paymentFailed')
                    : t('paymentMethods.waitingPayment')}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
