'use client';

import { useState } from 'react';
import { SEQUENTIAL_BLUE } from './palette';

export type RankBarDatum = { label: string; value: number };

// Horizontal ranked bars, sequential single hue (magnitude, not identity) —
// darker = higher rank. 4px rounded bar ends anchored to the left baseline,
// per-bar hover tooltip, and a visually-hidden table for accessibility.
export function RankBarChart({
  data,
  unit = '',
  emptyLabel = 'Belum ada data.'
}: {
  data: RankBarDatum[];
  unit?: string;
  emptyLabel?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  if (data.length === 0) return <p className="text-sm text-slate-400">{emptyLabel}</p>;

  const max = Math.max(...data.map((d) => d.value), 1);
  const shades = [600, 500, 400, 300, 200, 100] as const;

  return (
    <div>
      <div className="space-y-2.5" role="img" aria-label="Grafik peringkat">
        {data.map((d, i) => {
          const pct = Math.max((d.value / max) * 100, 2);
          const shade = shades[Math.min(i, shades.length - 1)];
          return (
            <div
              key={d.label + i}
              className="relative"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
            >
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="truncate pr-2 font-medium text-slate-700 dark:text-slate-200">
                  {i + 1}. {d.label}
                </span>
                <span className="shrink-0 font-semibold text-slate-500 dark:text-slate-400">
                  {d.value.toLocaleString('id-ID')}
                  {unit}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: SEQUENTIAL_BLUE[shade] }}
                />
              </div>
              {hovered === i && (
                <div className="absolute -top-7 left-0 z-10 rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white shadow-lg dark:bg-slate-700">
                  {d.label}: {d.value.toLocaleString('id-ID')}
                  {unit}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <table className="sr-only">
        <caption>Data grafik peringkat</caption>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.label}</td>
              <td>
                {d.value}
                {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
