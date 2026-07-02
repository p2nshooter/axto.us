import { Suspense } from 'react';
import { CheckoutClient } from '@/components/portal/CheckoutClient';

export const dynamic = 'force-dynamic';

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutClient />
    </Suspense>
  );
}
