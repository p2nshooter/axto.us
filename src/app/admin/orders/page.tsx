import { eq, desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { orders, users } from '@/lib/db/schema';

export const dynamic = 'force-dynamic';

export default async function AdminOrdersPage() {
  const db = await getDb();
  const rows = await db
    .select({ order: orders, userName: users.name, userEmail: users.email })
    .from(orders)
    .innerJoin(users, eq(orders.userId, users.id))
    .orderBy(desc(orders.createdAt))
    .limit(200);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Pesanan & Langganan</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="pb-2 font-medium">Pengguna</th>
              <th className="pb-2 font-medium">Paket</th>
              <th className="pb-2 font-medium">Metode</th>
              <th className="pb-2 font-medium">Jumlah</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.order.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="py-2">
                  {row.userName}
                  <div className="text-xs text-slate-400">{row.userEmail}</div>
                </td>
                <td className="py-2">{row.order.plan}</td>
                <td className="py-2 uppercase">{row.order.provider}</td>
                <td className="py-2">${row.order.amountUsd}</td>
                <td className="py-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      row.order.status === 'paid'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                        : row.order.status === 'pending'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                    }`}
                  >
                    {row.order.status}
                  </span>
                </td>
                <td className="py-2 text-slate-400">{row.order.createdAt.toLocaleDateString('id-ID')}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="py-4 text-center text-slate-400">
                  Belum ada transaksi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
