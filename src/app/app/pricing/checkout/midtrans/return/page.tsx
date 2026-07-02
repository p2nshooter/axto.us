import { Suspense } from 'react';
import { MidtransReturnClient } from '@/components/portal/MidtransReturnClient';

export const dynamic = 'force-dynamic';

export default function MidtransReturnPage() {
  return (
    <Suspense>
      <MidtransReturnClient />
    </Suspense>
  );
}
