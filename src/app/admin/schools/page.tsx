import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools } from '@/lib/db/schema';
import { SchoolsClient } from '@/components/admin/SchoolsClient';

export const dynamic = 'force-dynamic';

export default async function AdminSchoolsPage() {
  const db = await getDb();
  const rows = await db.select().from(schools).orderBy(desc(schools.createdAt));

  return (
    <SchoolsClient
      initialSchools={rows.map((r) => ({
        id: r.id,
        name: r.name,
        country: r.country,
        city: r.city,
        registrationCode: r.registrationCode,
        status: r.status,
        payoutEmail: r.payoutEmail,
        createdAt: r.createdAt.getTime()
      }))}
    />
  );
}
