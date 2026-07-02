import { getCurrentUser } from '@/lib/auth/session';
import { getCategories, getFeaturedBooks } from '@/lib/data/books';
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
  const [user, categories, books] = await Promise.all([getCurrentUser(), getCategories(), getFeaturedBooks(24)]);

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
