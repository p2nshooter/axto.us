import { notFound } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { getBookBySlug, getBookPages, getQuizQuestions } from '@/lib/data/books';
import { Reader } from '@/components/reader/Reader';
import { Navbar } from '@/components/landing/Navbar';

export const dynamic = 'force-dynamic';

/**
 * Public, register-free reader (owner: "bebasin siapapun yg membaca tanpa perlu
 * register — bebas dibaca & didengar, tp tidak bisa di-download"). Anyone can
 * open /read/<slug> and read + listen to any story in their own language, with
 * no account and no paywall. Every book is free, so there is no premium gate
 * here; the Reader runs in `guest` mode (no progress/favorite persistence) and
 * sends "back" to the public library instead of the signed-in portal.
 *
 * A signed-in visitor is quietly handed to the full portal reader so their
 * progress and favorites keep working.
 */
export default async function PublicReadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [book, user] = await Promise.all([getBookBySlug(slug), getCurrentUser()]);
  if (!book) notFound();

  const [pages, quiz] = await Promise.all([getBookPages(book.id), getQuizQuestions(book.id)]);

  return (
    <div>
      <Navbar user={user} />
      <main className="container-page py-8">
        <Reader
          book={book}
          pages={pages}
          quiz={quiz}
          isFavorited={false}
          initialPage={1}
          alreadyCompleted={false}
          backHref="/library"
          guest
        />
      </main>
    </div>
  );
}
