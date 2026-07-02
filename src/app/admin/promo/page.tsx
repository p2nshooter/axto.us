import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { promoCodes } from '@/lib/db/schema';
import { PromoClient } from '@/components/admin/PromoClient';

export const dynamic = 'force-dynamic';

export default async function AdminPromoPage() {
  const db = await getDb();
  const rows = await db.select().from(promoCodes).orderBy(desc(promoCodes.createdAt));

  return (
    <PromoClient
      initialCodes={rows.map((r) => ({
        id: r.id,
        code: r.code,
        discountPercent: r.discountPercent,
        maxUses: r.maxUses,
        usedCount: r.usedCount,
        active: r.active
      }))}
    />
  );
}
