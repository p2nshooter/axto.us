import { sql, desc, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users, books, orders, categories, auditLog, favorites } from '@/lib/db/schema';

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

// Daily revenue for the last N days (fills in zero-revenue days so the trend
// line doesn't silently skip gaps).
export async function getRevenueTrend(days = 30) {
  const db = await getDb();
  const since = Date.now() - days * 24 * 60 * 60 * 1000;
  const rows = await db
    .select({
      day: sql<string>`strftime('%Y-%m-%d', datetime(${orders.createdAt} / 1000, 'unixepoch'))`,
      total: sql<number>`coalesce(sum(${orders.amountUsd}), 0)`
    })
    .from(orders)
    .where(sql`${orders.status} = 'paid' and ${orders.createdAt} >= ${since}`)
    .groupBy(sql`strftime('%Y-%m-%d', datetime(${orders.createdAt} / 1000, 'unixepoch'))`);

  const byDay = new Map(rows.map((r) => [r.day, r.total]));
  const out: { label: string; value: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    const key = d.toISOString().slice(0, 10);
    out.push({ label: key.slice(5), value: byDay.get(key) ?? 0 });
  }
  return out;
}

export async function getTopBooksByReads(limit = 10) {
  const db = await getDb();
  const rows = await db
    .select({ title: books.titleId, reads: books.readCount })
    .from(books)
    .orderBy(desc(books.readCount))
    .limit(limit);
  return rows.map((r) => ({ label: r.title, value: r.reads }));
}

export async function getTopBooksByFavorites(limit = 10) {
  const db = await getDb();
  const rows = await db
    .select({ title: books.titleId, favCount: sql<number>`count(${favorites.id})` })
    .from(books)
    .innerJoin(favorites, eq(favorites.bookId, books.id))
    .groupBy(books.id)
    .orderBy(desc(sql`count(${favorites.id})`))
    .limit(limit);
  return rows.map((r) => ({ label: r.title, value: r.favCount }));
}

export async function getOrdersByStatus() {
  const db = await getDb();
  const rows = await db
    .select({ status: orders.status, count: sql<number>`count(*)` })
    .from(orders)
    .groupBy(orders.status);
  return rows.map((r) => ({ label: r.status, value: r.count }));
}
