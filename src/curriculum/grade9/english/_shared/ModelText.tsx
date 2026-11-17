import type { ReactNode } from 'react';

/** A model text shown as a page, with a label and a one-line note that it is an ORIGINAL model written for the lesson (invented names, places and organisations). */
export const ModelText = ({ label, note, children }: { label: string; note: string; children: ReactNode }) => (
  <figure className="rounded-xl border border-slate-300 bg-white p-4 text-left shadow-sm">
    <figcaption className="text-xs font-bold uppercase tracking-wide text-slate-600">{label}</figcaption>
    <p className="mt-0.5 text-xs italic text-slate-600">{note}</p>
    <div className="mt-2 space-y-2 text-sm text-slate-800">{children}</div>
  </figure>
);

/** A numbered list of the labelled parts of a model text ("1. Date: ..."), so a learner can match each part to the model. */
export const PartsList = ({ parts }: { parts: { name: string; what: string }[] }) => (
  <ol className="space-y-1.5 text-left text-slate-700">
    {parts.map((p, i) => (
      <li key={p.name}><strong>{i + 1}. {p.name}:</strong> {p.what}</li>
    ))}
  </ol>
);
