import { getRecentAuditLog } from '@/lib/data/admin';

export const dynamic = 'force-dynamic';

export default async function AdminAuditLogPage() {
  const logs = await getRecentAuditLog(100);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Audit Log</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="pb-2 font-medium">Waktu</th>
              <th className="pb-2 font-medium">Aksi</th>
              <th className="pb-2 font-medium">Target</th>
              <th className="pb-2 font-medium">Detail</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-t border-slate-100 dark:border-slate-800 align-top">
                <td className="py-2 whitespace-nowrap text-slate-400">{log.createdAt.toLocaleString('id-ID')}</td>
                <td className="py-2 font-medium">{log.action}</td>
                <td className="py-2 text-slate-500">
                  {log.targetType}
                  {log.targetId ? ` · ${log.targetId}` : ''}
                </td>
                <td className="py-2 max-w-xs truncate text-xs text-slate-400">{log.metaJson}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-center text-slate-400">
                  Belum ada aktivitas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
