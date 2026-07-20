import type { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth/session';
import { getCategories, getAllPublishedBooks } from '@/lib/data/books';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { PublicLibrary } from '@/components/library/PublicLibrary';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Library — AXTO',
  description: 'Baca dan dengarkan semua cerita anak AXTO secara gratis, tanpa perlu mendaftar.'
};

/**
 * Public, register-free library (owner: "bebasin siapapun yg membaca tanpa
 * perlu register"). Lists every published story; each links to the public
 * reader. No login, no paywall, no download — free to read and listen.
 */
export default async function PublicLibraryPage() {
  const [user, categories, books] = await Promise.all([
    getCurrentUser(),
    getCategories(),
    getAllPublishedBooks()
  ]);

  return (
    <div>
      <Navbar user={user} />
      <main className="container-page py-8">
        <PublicLibrary categories={categories} books={books} />
      </main>
      <Footer />
    </div>
  );
}
