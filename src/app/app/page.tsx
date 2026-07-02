import { getCurrentUser } from '@/lib/auth/session';
import { getContinueReading, getRecommendedBooks, getUserStats } from '@/lib/data/dashboard';
import { DashboardClient } from '@/components/portal/DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [continueReading, recommended, stats] = await Promise.all([
    getContinueReading(user.id),
    getRecommendedBooks(user.id),
    getUserStats(user.id)
  ]);

  return (
    <DashboardClient
      continueReading={continueReading.map((r) => ({
        book: r.book,
        currentPage: r.progress.currentPage
      }))}
      recommended={recommended}
      stats={stats}
    />
  );
}
