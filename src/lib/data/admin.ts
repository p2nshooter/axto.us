import { sql, desc, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users, books, orders, categories, auditLog } from '@/lib/db/schema';

export async function getAdminStats() {
  const db = await getDb();

  const [userCount] = await db.select({ count: sql<number>`count(*)` }).from(users);
  const [bookCount] = await db.select({ count: sql<number>`count(*)` }).from(books);
  const [readSum] = await db.select({ sum: sql<number>`coalesce(sum(${books.readCount}), 0)` }).from(books);
  const [revenue] = await db
    .select({ sum: sql<number>`coalesce(sum(${orders.amountUsd}), 0)` })
    .from(orders)
    .where(eq(orders.status, 'paid'));
  const [premiumUsers] = await db
    .select({ count: sql<number>`count(*)` })
    .from(users)
    .where(sql`${users.plan} != 'free'`);

  const recentBooks = await db.select().from(books).orderBy(desc(books.createdAt)).limit(5);
  const recentOrders = await db
    .select({ order: orders, userName: users.name, userEmail: users.email })
    .from(orders)
    .innerJoin(users, eq(orders.userId, users.id))
    .orderBy(desc(orders.createdAt))
    .limit(5);

  const categoryBreakdown = await db
    .select({
      categoryId: categories.id,
      nameId: categories.nameId,
      nameEn: categories.nameEn,
      bookCount: sql<number>`count(${books.id})`
    })
    .from(categories)
    .leftJoin(books, eq(books.categoryId, categories.id))
    .groupBy(categories.id)
    .orderBy(desc(sql`count(${books.id})`));

  return {
    totalUsers: userCount?.count ?? 0,
    totalBooks: bookCount?.count ?? 0,
    totalReads: readSum?.sum ?? 0,
    revenueUsd: revenue?.sum ?? 0,
    premiumUsers: premiumUsers?.count ?? 0,
    recentBooks,
    recentOrders,
    categoryBreakdown
  };
}

export async function getRecentAuditLog(limit = 20) {
  const db = await getDb();
  return db.select().from(auditLog).orderBy(desc(auditLog.createdAt)).limit(limit);
}
