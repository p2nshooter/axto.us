import { sql, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders } from '@/lib/db/schema';
import {
  getAdminStats,
  getRevenueTrend,
  getTopBooksByReads,
  getTopBooksByFavorites,
  getOrdersByStatus
} from '@/lib/data/admin';
import { StatTile } from '@/components/admin/charts/StatTile';
import { LineChart } from '@/components/admin/charts/LineChart';
import { RankBarChart } from '@/components/admin/charts/RankBarChart';
import { StackedBarChart } from '@/components/admin/charts/StackedBarChart';

export const dynamic = 'force-dynamic';

const STATUS_LABEL: Record<string, string> = {
  paid: 'Lunas',
  pending: 'Menunggu',
  failed: 'Gagal',
  expired: 'Kedaluwarsa',
  refunded: 'Dikembalikan'
};

export default async function AdminReportsPage() {
  const [stats, db, revenueTrend, topReads, topFavorites, ordersByStatus] = await Promise.all([
    getAdminStats(),
    getDb(),
    getRevenueTrend(30),
    getTopBooksByReads(10),
    getTopBooksByFavorites(10),
    getOrdersByStatus()
  ]);

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

  const last7 = revenueTrend.slice(-7).reduce((s, d) => s + d.value, 0);
  const prior7 = revenueTrend.slice(-14, -7).reduce((s, d) => s + d.value, 0);
  const trendDelta = prior7 > 0 ? ((last7 - prior7) / prior7) * 100 : last7 > 0 ? 100 : 0;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Laporan</h1>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatTile label="Total Pengguna" value={stats.totalUsers} />
        <StatTile label="Pengguna Premium" value={stats.premiumUsers} />
        <StatTile label="Total Buku" value={stats.totalBooks} />
        <StatTile label="Total Pendapatan" value={`$${stats.revenueUsd.toLocaleString('id-ID')}`} />
        <StatTile
          label="Pendapatan 7 Hari"
          value={`$${last7.toLocaleString('id-ID')}`}
          delta={trendDelta}
          deltaLabel="vs 7 hari sebelumnya"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card lg:col-span-2">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Tren Pendapatan (30 Hari Terakhir)</h2>
          <LineChart data={revenueTrend} unit=" USD" />
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Pendapatan per Paket</h2>
          <StackedBarChart
            data={revenueByPlan.map((r) => ({ label: `${r.plan} (${r.count})`, value: r.total }))}
            unit=" USD"
          />
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Pendapatan per Metode Bayar</h2>
          <StackedBarChart
            data={revenueByProvider.map((r) => ({ label: `${r.provider.toUpperCase()} (${r.count})`, value: r.total }))}
            unit=" USD"
          />
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Buku Paling Sering Dibaca</h2>
          <RankBarChart data={topReads} unit=" baca" />
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Buku Paling Disukai</h2>
          <RankBarChart data={topFavorites} unit=" suka" emptyLabel="Belum ada buku yang difavoritkan." />
        </div>

        <div className="card lg:col-span-2">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Status Transaksi</h2>
          <StackedBarChart
            data={ordersByStatus.map((r) => ({ label: STATUS_LABEL[r.label] ?? r.label, value: r.value }))}
            unit=" transaksi"
          />
        </div>
      </div>
    </div>
  );
}
