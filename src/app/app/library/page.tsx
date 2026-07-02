import { eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth/session';
import { getDb } from '@/lib/db/client';
import { favorites } from '@/lib/db/schema';
import { getCategories, getAllPublishedBooks } from '@/lib/data/books';
import { hasPremiumAccess } from '@/lib/access';
import { LibraryClient } from '@/components/portal/LibraryClient';

export const dynamic = 'force-dynamic';

export default async function LibraryPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [categories, books] = await Promise.all([getCategories(), getAllPublishedBooks()]);
  const db = await getDb();
  const favRows = await db.select({ bookId: favorites.bookId }).from(favorites).where(eq(favorites.userId, user.id));
  const favoriteIds = new Set(favRows.map((f) => f.bookId));

  return (
    <LibraryClient
      categories={categories}
      books={books}
      favoriteIds={[...favoriteIds]}
      canAccessPremium={hasPremiumAccess(user)}
    />
  );
}
