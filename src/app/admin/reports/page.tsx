import { sql, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders } from '@/lib/db/schema';
import { getAdminStats } from '@/lib/data/admin';

export const dynamic = 'force-dynamic';

export default async function AdminReportsPage() {
  const [stats, db] = await Promise.all([getAdminStats(), getDb()]);

  const revenueByPlan = await db
    .select({ plan: orders.plan, total: sql<number>`coalesce(sum(${orders.amountUsd}), 0)`, count: sql<number>`count(*)` })
    .from(orders)
    .where(eq(orders.status, 'paid'))
    .groupBy(orders.plan);

  const revenueByProvider = await db
    .select({ provider: orders.provider, total: sql<number>`coalesce(sum(${orders.amountUsd}), 0)`, count: sql<number>`count(*)` })
    .from(orders)
    .where(eq(orders.status, 'paid'))
    .groupBy(orders.provider);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Laporan</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Pendapatan per Paket</h2>
          {revenueByPlan.length === 0 ? (
            <p className="text-slate-400">Belum ada transaksi.</p>
          ) : (
            <div className="space-y-2">
              {revenueByPlan.map((r) => (
                <div key={r.plan} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">
                    {r.plan} ({r.count})
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">${r.total.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Pendapatan per Metode Bayar</h2>
          {revenueByProvider.length === 0 ? (
            <p className="text-slate-400">Belum ada transaksi.</p>
          ) : (
            <div className="space-y-2">
              {revenueByProvider.map((r) => (
                <div key={r.provider} className="flex items-center justify-between text-sm">
                  <span className="uppercase text-slate-600 dark:text-slate-300">
                    {r.provider} ({r.count})
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">${r.total.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card lg:col-span-2">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Ringkasan</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ReportStat label="Total Pengguna" value={stats.totalUsers} />
            <ReportStat label="Pengguna Premium" value={stats.premiumUsers} />
            <ReportStat label="Total Buku" value={stats.totalBooks} />
            <ReportStat label="Total Pendapatan" value={`$${stats.revenueUsd}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportStat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-xl font-black text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
