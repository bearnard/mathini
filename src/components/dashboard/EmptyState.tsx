import type { ReactNode } from 'react';

/** Shown instead of a chart or table that has nothing in it yet. Says what will appear and what to do; never blames the user. */
export function EmptyState({ title, children, action, icon }: { title: string; children?: ReactNode; action?: ReactNode; icon?: ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center" role="status">
      {icon ? <div className="mb-2 text-slate-400" aria-hidden="true">{icon}</div> : null}
      <p className="text-base font-bold text-slate-800">{title}</p>
      {children ? <p className="mt-1 max-w-md text-sm text-slate-600">{children}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
