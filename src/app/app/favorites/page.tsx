import { getCurrentUser } from '@/lib/auth/session';
import { getFavoriteBooks } from '@/lib/data/dashboard';
import { BookGrid } from '@/components/portal/BookGrid';

export const dynamic = 'force-dynamic';

export default async function FavoritesPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await getFavoriteBooks(user.id);

  return <BookGrid titleKey="portal.favorites" books={rows.map((r) => r.book)} />;
}
