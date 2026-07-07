import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { apiCredentials } from '@/lib/db/schema';
import { CredentialsClient } from '@/components/admin/CredentialsClient';

export const dynamic = 'force-dynamic';

export default async function AdminCredentialsPage() {
  const db = await getDb();
  const rows = await db
    .select({
      id: apiCredentials.id,
      provider: apiCredentials.provider,
      label: apiCredentials.label,
      maskedPreview: apiCredentials.maskedPreview,
      isActive: apiCredentials.isActive,
      createdAt: apiCredentials.createdAt
    })
    .from(apiCredentials)
    .orderBy(desc(apiCredentials.createdAt));

  return (
    <CredentialsClient
      initialCredentials={rows.map((r) => ({ ...r, createdAt: r.createdAt.getTime() }))}
    />
  );
}
