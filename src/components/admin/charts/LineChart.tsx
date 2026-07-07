'use client';

import { useRef, useState } from 'react';
import { SEQUENTIAL_BLUE, GRID_LINE } from './palette';

export type LinePoint = { label: string; value: number };

// Single-series trend line — sequential blue, no legend needed (title names
// the series). 2px line, area fill, gridlines recessive, crosshair + tooltip
// on hover per the interaction spec for line/area charts.
export function LineChart({ data, unit = '', height = 180 }: { data: LinePoint[]; unit?: string; height?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  if (data.length === 0) return <p className="text-sm text-slate-400">Belum ada data.</p>;

  const width = 600;
  const padTop = 12;
  const padBottom = 24;
  const padX = 8;
  const max = Math.max(...data.map((d) => d.value), 1);
  const innerW = width - padX * 2;
  const innerH = height - padTop - padBottom;
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0;

  const points = data.map((d, i) => ({
    x: padX + i * stepX,
    y: padTop + innerH - (d.value / max) * innerH,
    ...d
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${points[points.length - 1].x.toFixed(1)},${padTop + innerH} L${points[0].x.toFixed(1)},${padTop + innerH} Z`;

  function handleMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * width;
    const idx = Math.round((relX - padX) / (stepX || 1));
    setHoverIdx(Math.max(0, Math.min(points.length - 1, idx)));
  }

  const gridYs = [0, 0.25, 0.5, 0.75, 1].map((f) => padTop + innerH * f);
  const labelEvery = Math.max(1, Math.ceil(data.length / 6));
  const hovered = hoverIdx !== null ? points[hoverIdx] : null;

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        onMouseMove={handleMove}
        onMouseLeave={() => setHoverIdx(null)}
        role="img"
        aria-label="Grafik tren"
      >
        {gridYs.map((y, i) => (
          <line key={i} x1={padX} y1={y} x2={width - padX} y2={y} stroke={GRID_LINE} strokeWidth={1} />
        ))}
        <path d={areaPath} fill={SEQUENTIAL_BLUE[100]} opacity={0.6} />
        <path d={linePath} fill="none" stroke={SEQUENTIAL_BLUE[500]} strokeWidth={2} strokeLinecap="round" />
        {points.map(
          (p, i) =>
            i % labelEvery === 0 && (
              <text key={i} x={p.x} y={height - 6} fontSize={9} textAnchor="middle" fill="#94a3b8">
                {p.label}
              </text>
            )
        )}
        {hovered && (
          <>
            <line x1={hovered.x} y1={padTop} x2={hovered.x} y2={padTop + innerH} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3,3" />
            <circle cx={hovered.x} cy={hovered.y} r={4} fill={SEQUENTIAL_BLUE[600]} stroke="white" strokeWidth={1.5} />
          </>
        )}
      </svg>
      {hovered && (
        <div
          className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white shadow-lg dark:bg-slate-700"
          style={{ left: `${(hovered.x / width) * 100}%` }}
        >
          {hovered.label}: {hovered.value.toLocaleString('id-ID')}
          {unit}
        </div>
      )}
    </div>
  );
}
