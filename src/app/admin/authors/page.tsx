import { getAllAuthors } from '@/lib/data/books';
import { AuthorsClient } from '@/components/admin/AuthorsClient';

export const dynamic = 'force-dynamic';

export default async function AdminAuthorsPage() {
  const authors = await getAllAuthors();
  return <AuthorsClient initialAuthors={authors.map((a) => ({ id: a.id, name: a.name, bio: a.bio ?? '', avatarSeed: a.avatarSeed }))} />;
}
