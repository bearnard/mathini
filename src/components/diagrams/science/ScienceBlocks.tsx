import type { ReactNode } from 'react';

/** A two-column comparison. Plain HTML so the words wrap on a phone. */
export interface CompareSide { title: string; tone: 'sky' | 'emerald' | 'amber' | 'violet'; rows: ReactNode[] }

const TONES = {
  sky: 'bg-sky-50 text-sky-800',
  emerald: 'bg-emerald-50 text-emerald-800',
  amber: 'bg-amber-50 text-amber-800',
  violet: 'bg-violet-50 text-violet-800',
} as const;

export const Compare = ({ left, right }: { left: CompareSide; right: CompareSide }) => (
  <div className="grid gap-3 text-left sm:grid-cols-2">
    {[left, right].map((side) => (
      <div key={side.title} className={`rounded-xl p-4 ${TONES[side.tone]}`}>
        <p className="font-extrabold">{side.title}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {side.rows.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

/** A short table: a term and what it means or an example. */
export const Terms = ({ rows }: { rows: [ReactNode, ReactNode][] }) => (
  <dl className="grid gap-x-3 gap-y-2 rounded-xl bg-slate-50 p-4 text-left text-sm sm:grid-cols-[auto_1fr]">
    {rows.map(([k, v], i) => (
      <div key={i} className="contents">
        <dt className="font-extrabold text-slate-800">{k}</dt>
        <dd className="text-slate-700">{v}</dd>
      </div>
    ))}
  </dl>
);
