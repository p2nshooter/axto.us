import { getCurrentUser } from '@/lib/auth/session';
import { getUserStats } from '@/lib/data/dashboard';
import { AchievementsClient } from '@/components/portal/AchievementsClient';

export const dynamic = 'force-dynamic';

export default async function AchievementsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const stats = await getUserStats(user.id);

  return <AchievementsClient stats={stats} />;
}
