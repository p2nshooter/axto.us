'use client';

import { useState } from 'react';
import { CATEGORICAL } from './palette';

export type StackSegment = { label: string; value: number };

// Part-to-whole as a single horizontal stacked bar — categorical hues in
// fixed slot order (never reassigned/cycled per render), 2px surface gap
// between segments, legend always present for >=2 series, hover tooltip.
export function StackedBarChart({ data, unit = '' }: { data: StackSegment[]; unit?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = data.reduce((s, d) => s + d.value, 0);

  if (data.length === 0 || total === 0) return <p className="text-sm text-slate-400">Belum ada data.</p>;

  return (
    <div>
      <div className="flex h-8 w-full overflow-hidden rounded-lg" role="img" aria-label="Grafik proporsi">
        {data.map((d, i) => {
          const pct = (d.value / total) * 100;
          const color = CATEGORICAL[i % CATEGORICAL.length].light;
          return (
            <div
              key={d.label}
              className="relative h-full first:rounded-l-lg last:rounded-r-lg"
              style={{ width: `${pct}%`, backgroundColor: color, marginLeft: i === 0 ? 0 : 2 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
            >
              {hovered === i && (
                <div className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white shadow-lg dark:bg-slate-700">
                  {d.label}: {d.value.toLocaleString('id-ID')}
                  {unit} ({pct.toFixed(1)}%)
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {data.map((d, i) => (
          <div key={d.label} className="flex items-center gap-1.5 text-xs">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: CATEGORICAL[i % CATEGORICAL.length].light }}
            />
            <span className="text-slate-600 dark:text-slate-300">{d.label}</span>
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              {d.value.toLocaleString('id-ID')}
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
