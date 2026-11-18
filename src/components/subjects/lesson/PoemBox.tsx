import type { ReactNode } from 'react';

/**
 * A poem shown on its own, with its label and a provenance line ("written for this lesson" or "public domain: author, title, year").
 * Lines keep their line breaks; an empty string starts a new stanza. Line numbers help the learner refer to a line in an answer.
 */
export const PoemBox = ({ label, provenance, lines, children }: { label: string; provenance: string; lines: string[]; children?: ReactNode }) => {
  let n = 0;
  return (
    <figure className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-left">
      <figcaption className="text-xs font-bold uppercase tracking-wide text-amber-800">{label}</figcaption>
      <p className="mt-0.5 text-xs italic text-slate-600">{provenance}</p>
      <div className="mt-2 font-serif text-slate-900">
        {lines.map((l, i) =>
          l === '' ? (
            <div key={i} className="h-3" aria-hidden="true" />
          ) : (
            <p key={i} className="flex gap-3 leading-snug">
              <span className="w-4 shrink-0 select-none text-right text-xs text-slate-400">{++n}</span>
              <span>{l}</span>
            </p>
          ),
        )}
      </div>
      {children}
    </figure>
  );
};
