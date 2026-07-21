import { getCurrentUser } from '@/lib/auth/session';
import { getCategories, getAllPublishedBooks } from '@/lib/data/books';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { CategoryShowcase } from '@/components/landing/CategoryShowcase';
import { AIFeatures } from '@/components/landing/AIFeatures';
import { TrustBadges } from '@/components/landing/TrustBadges';
import { PricingSection } from '@/components/landing/PricingSection';
import { CTABanner } from '@/components/landing/CTABanner';
import { Footer } from '@/components/landing/Footer';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Show the WHOLE library on the landing category browser — getFeaturedBooks(24)
  // only returned the 24 most-read books, so ~12 categories looked empty even
  // though all 44 books across every category are published. getAllPublishedBooks
  // returns them all (44 rows is trivial to render).
  const [user, categories, books] = await Promise.all([getCurrentUser(), getCategories(), getAllPublishedBooks()]);

  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <CategoryShowcase categories={categories} books={books} />
      <AIFeatures />
      <TrustBadges />
      <PricingSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
