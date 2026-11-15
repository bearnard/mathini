import type { ReactNode } from 'react';

/** Title, subtitle and actions. The actions sit beside the title from sm up and wrap under it on a phone. */
export function PageHeader({ title, subtitle, eyebrow, actions, back }: { title: ReactNode; subtitle?: ReactNode; eyebrow?: ReactNode; actions?: ReactNode; back?: ReactNode }) {
  return (
    <header className="mb-6">
      {back ? <div className="mb-2">{back}</div> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">{eyebrow}</p> : null}
          <h1 className="mt-0.5 break-words text-2xl font-black text-slate-900 sm:text-3xl">{title}</h1>
          {subtitle ? <p className="mt-1 text-slate-600">{subtitle}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2 sm:justify-end">{actions}</div> : null}
      </div>
    </header>
  );
}
