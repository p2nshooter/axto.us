import { getCurrentUser } from '@/lib/auth/session';
import { PricingPortalClient } from '@/components/portal/PricingPortalClient';

export const dynamic = 'force-dynamic';

export default async function PortalPricingPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return <PricingPortalClient currentPlan={user.plan} />;
}
