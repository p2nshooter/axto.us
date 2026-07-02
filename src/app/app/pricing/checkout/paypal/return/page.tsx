import { Suspense } from 'react';
import { PaypalReturnClient } from '@/components/portal/PaypalReturnClient';

export const dynamic = 'force-dynamic';

export default function PaypalReturnPage() {
  return (
    <Suspense>
      <PaypalReturnClient />
    </Suspense>
  );
}
