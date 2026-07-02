import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { UsersClient } from '@/components/admin/UsersClient';

export const dynamic = 'force-dynamic';

export default async function AdminUsersPage() {
  const db = await getDb();
  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      plan: users.plan,
      createdAt: users.createdAt
    })
    .from(users)
    .orderBy(desc(users.createdAt));

  return (
    <UsersClient
      initialUsers={rows.map((u) => ({ ...u, createdAt: u.createdAt.getTime() }))}
    />
  );
}
