'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LocaleProvider';

export function PaypalReturnClient() {
  const { t } = useTranslation();
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const paypalOrderId = params.get('token');
    if (!paypalOrderId) {
      setStatus('error');
      setMessage('Missing PayPal order token.');
      return;
    }

    fetch('/api/payments/paypal/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paypalOrderId })
    })
      .then(async (res) => {
        const data = (await res.json()) as any;
        if (!res.ok) throw new Error(data.error || 'Capture failed');
        setStatus('success');
        setTimeout(() => {
          router.push('/app');
          router.refresh();
        }, 1500);
      })
      .catch((err) => {
        setStatus('error');
        setMessage(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-md text-center">
      {status === 'processing' && <p>{t('paymentMethods.processing')}</p>}
      {status === 'success' && <p className="text-emerald-600">{t('paymentMethods.paymentSuccess')}</p>}
      {status === 'error' && (
        <div>
          <p className="text-red-600">{t('paymentMethods.paymentFailed')}</p>
          <p className="mt-2 text-xs text-slate-400">{message}</p>
        </div>
      )}
    </div>
  );
}
