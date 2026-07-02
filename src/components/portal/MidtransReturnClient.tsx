'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LocaleProvider';

export function MidtransReturnClient() {
  const { t } = useTranslation();
  const params = useSearchParams();
  const router = useRouter();
  const orderId = params.get('order_id');
  const [status, setStatus] = useState<'pending' | 'paid' | 'failed'>('pending');
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!orderId) return;

    pollRef.current = setInterval(async () => {
      const res = await fetch(`/api/payments/status/${orderId}`);
      if (!res.ok) return;
      const data = (await res.json()) as any;
      if (data.status === 'paid') {
        setStatus('paid');
        clearInterval(pollRef.current!);
        setTimeout(() => {
          router.push('/app');
          router.refresh();
        }, 1500);
      } else if (data.status === 'failed') {
        setStatus('failed');
        clearInterval(pollRef.current!);
      }
    }, 3000);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  return (
    <div className="mx-auto max-w-md text-center">
      {status === 'pending' && <p>{t('paymentMethods.waitingPayment')}</p>}
      {status === 'paid' && <p className="text-emerald-600">{t('paymentMethods.paymentSuccess')}</p>}
      {status === 'failed' && <p className="text-red-600">{t('paymentMethods.paymentFailed')}</p>}
    </div>
  );
}
