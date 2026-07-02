import { getCurrentUser } from '@/lib/auth/session';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import ForSchoolsContent from './ForSchoolsContent';

export const dynamic = 'force-dynamic';

export default async function ForSchoolsPage() {
  const user = await getCurrentUser();
  return (
    <div>
      <Navbar user={user} />
      <ForSchoolsContent />
      <Footer />
    </div>
  );
}
