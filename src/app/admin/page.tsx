import { getAdminStats } from '@/lib/data/admin';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const stats = await getAdminStats();

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">Dashboard</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard label="Total Pengguna" value={stats.totalUsers.toLocaleString('id-ID')} />
        <StatCard label="Buku Tersedia" value={stats.totalBooks.toLocaleString('id-ID')} />
        <StatCard label="Total Pembacaan" value={stats.totalReads.toLocaleString('id-ID')} />
        <StatCard label="Pendapatan (Total)" value={`$${stats.revenueUsd.toLocaleString('id-ID')}`} />
        <StatCard label="Pengguna Premium" value={stats.premiumUsers.toLocaleString('id-ID')} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Top Kategori</h2>
          <div className="space-y-2">
            {stats.categoryBreakdown.map((c) => (
              <div key={c.categoryId} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{c.nameId}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{c.bookCount} buku</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Buku Terbaru</h2>
          <div className="space-y-2">
            {stats.recentBooks.map((b) => (
              <div key={b.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">
                  {b.coverEmoji} {b.titleId}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    b.status === 'published'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                  }`}
                >
                  {b.status === 'published' ? 'Aktif' : 'Draft'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Langganan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400">
                <th className="pb-2 font-medium">Pengguna</th>
                <th className="pb-2 font-medium">Paket</th>
                <th className="pb-2 font-medium">Jumlah</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentOrders.map((row) => (
                <tr key={row.order.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="py-2">
                    {row.userName}
                    <div className="text-xs text-slate-400">{row.userEmail}</div>
                  </td>
                  <td className="py-2">{row.order.plan}</td>
                  <td className="py-2">${row.order.amountUsd}</td>
                  <td className="py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        row.order.status === 'paid'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                      }`}
                    >
                      {row.order.status}
                    </span>
                  </td>
                </tr>
              ))}
              {stats.recentOrders.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-slate-400">
                    Belum ada transaksi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <p className="text-xl font-black text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
