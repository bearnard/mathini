import type { ReactNode } from 'react';

/** A titled white card: the unit every dashboard is built from. `id` makes the heading a link target and labels the region. */
export function SectionCard({ title, subtitle, actions, children, id, className = '' }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode; children: ReactNode; id?: string; className?: string }) {
  const hid = id ? `${id}-h` : undefined;
  return (
    <section id={id} aria-labelledby={hid} className={`flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 ${className}`}>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <h2 id={hid} className="text-lg font-extrabold text-slate-800">{title}</h2>
          {subtitle ? <p className="mt-0.5 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </section>
  );
}
