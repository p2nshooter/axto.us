export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 font-black tracking-tight text-brand-700 dark:text-brand-300 ${className}`}>
      <span className="text-2xl">AXTO</span>
      <span aria-hidden className="text-lg">✨</span>
    </span>
  );
}
