export function StatTile({
  label,
  value,
  delta,
  deltaLabel
}: {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
}) {
  const positive = (delta ?? 0) >= 0;
  return (
    <div className="card">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">{value}</p>
      {delta !== undefined && (
        <p className={`mt-1 text-xs font-semibold ${positive ? 'text-emerald-600' : 'text-red-600'}`}>
          {positive ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}% {deltaLabel}
        </p>
      )}
    </div>
  );
}
