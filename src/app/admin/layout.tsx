import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { AdminShell } from '@/components/admin/AdminShell';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/admin-login');
  // role='admin' isn't enough on its own — the session must have been
  // created via the admin door (/admin-login), never the public /login form.
  if (user.role !== 'admin' || user.loginSource !== 'admin') redirect('/app');

  return <AdminShell user={user}>{children}</AdminShell>;
}
