import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { PortalShell } from '@/components/portal/PortalShell';

export const dynamic = 'force-dynamic';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/login?next=/app');

  return <PortalShell user={user}>{children}</PortalShell>;
}
