const PALETTES: Record<string, string> = {
  sunrise: 'from-orange-300 via-amber-200 to-yellow-100',
  forest: 'from-emerald-300 via-teal-200 to-lime-100',
  ocean: 'from-sky-300 via-cyan-200 to-blue-100',
  dusk: 'from-purple-300 via-fuchsia-200 to-pink-100',
  night: 'from-indigo-400 via-violet-300 to-slate-200',
  candy: 'from-pink-300 via-rose-200 to-orange-100',
  meadow: 'from-lime-300 via-green-200 to-emerald-100',
  cosmic: 'from-violet-400 via-indigo-300 to-blue-100'
};

export function BookCover({
  emoji,
  palette,
  className = ''
}: {
  emoji: string;
  palette: string;
  className?: string;
}) {
  const gradient = PALETTES[palette] ?? PALETTES.sunrise;
  return (
    <div
      className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-inner ${className}`}
    >
      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/30 blur-sm" />
      <div className="absolute -right-6 bottom-6 h-20 w-20 rounded-full bg-white/20 blur-md" />
      <span className="text-5xl drop-shadow-sm">{emoji}</span>
    </div>
  );
}
