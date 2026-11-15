/** Loading placeholders: grey blocks that pulse (and stand still for people who ask for reduced motion). Marked busy for screen readers. */
export function Skeleton({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-lg bg-slate-200 motion-reduce:animate-none ${className}`} />;
}

export function SkeletonTiles({ count = 4 }: { count?: number }) {
  return (
    <div role="status" aria-busy="true" aria-label="Loading the key numbers" className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-3 h-8 w-16" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonCard({ lines = 4, label = 'Loading' }: { lines?: number; label?: string }) {
  return (
    <div role="status" aria-busy="true" aria-label={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <Skeleton className="h-5 w-40" />
      <div className="mt-4 space-y-3">
        {Array.from({ length: lines }, (_, i) => <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? 'w-2/3' : 'w-full'}`} />)}
      </div>
    </div>
  );
}
