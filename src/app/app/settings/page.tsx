import { getCurrentUser } from '@/lib/auth/session';
import { SettingsClient } from '@/components/portal/SettingsClient';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return <SettingsClient user={user} />;
}
