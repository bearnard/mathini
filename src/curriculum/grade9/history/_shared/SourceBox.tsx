import type { ReactNode } from 'react';

/** A source shown the way a history paper shows it: a label, a one-line provenance, and the text. Every source in these lessons is a short ORIGINAL or paraphrased description, and says so. */
export const SourceBox = ({ label, provenance, children }: { label: string; provenance: string; children: ReactNode }) => (
  <figure className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-left">
    <figcaption className="text-xs font-bold uppercase tracking-wide text-slate-600">{label}</figcaption>
    <p className="mt-0.5 text-xs italic text-slate-600">{provenance}</p>
    <div className="mt-2 text-slate-800">{children}</div>
  </figure>
);
