import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { SchoolPortalShell } from '@/components/school/SchoolPortalShell';

export const dynamic = 'force-dynamic';

export default async function SchoolPortalLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/school-login');
  // Same defense-in-depth as /admin: role='school_admin' alone isn't enough,
  // the session must have been created via the /school-login door.
  if (user.role !== 'school_admin' || user.loginSource !== 'school') redirect('/app');

  return <SchoolPortalShell user={user}>{children}</SchoolPortalShell>;
}
