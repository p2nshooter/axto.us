import { getCurrentUser } from '@/lib/auth/session';
import { SettingsClient } from '@/components/portal/SettingsClient';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return <SettingsClient user={user} />;
}
