import type { ReactNode } from 'react';

export type Tone = 'neutral' | 'good' | 'attention';
export interface StatTileProps {
  label: string;
  /** Already formatted (decimal comma): use pctText / numText from ./format. */
  value: ReactNode;
  /** A short line under the label, for example "of 24 learners". */
  note?: ReactNode;
  /** A change as the server sent it, in points. null or undefined shows nothing; 0 reads "no change". */
  change?: number | null;
  /** What the change is measured against, for example "since 1 Oct". */
  changeNote?: string;
  tone?: Tone;
}

const TONE: Record<Tone, string> = { neutral: 'text-slate-900', good: 'text-emerald-700', attention: 'text-amber-700' };

/** An arrow and the size of the change, with words as well, so it never relies on colour alone. A fall is worded gently. */
export function ChangeText({ points, note }: { points: number; note?: string }) {
  const n = String(Math.abs(points)).replace('.', ',');
  const [arrow, words, cls] = points > 0 ? ['↑', `up ${n} points`, 'text-emerald-700'] : points < 0 ? ['↓', `down ${n} points`, 'text-slate-600'] : ['→', 'no change', 'text-slate-500'];
  return (
    <span className={`text-xs font-bold ${cls}`}>
      <span aria-hidden="true">{arrow} </span>
      {words}
      {note ? <span className="font-medium text-slate-500"> {note}</span> : null}
    </span>
  );
}

export function StatTile({ label, value, note, change, changeNote, tone = 'neutral' }: StatTileProps) {
  return (
    <div className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <dt className="text-sm font-semibold text-slate-600">{label}</dt>
      <dd className={`mt-1 break-words text-3xl font-black leading-tight ${TONE[tone]}`}>{value}</dd>
      {note ? <dd className="mt-0.5 text-xs text-slate-600">{note}</dd> : null}
      {typeof change === 'number' ? <dd className="mt-1"><ChangeText points={change} note={changeNote} /></dd> : null}
    </div>
  );
}

/** A row of tiles: two across on a phone, four from md (or the number you give, up to 4). */
export function StatTileRow({ tiles, label = 'Key numbers' }: { tiles: StatTileProps[]; label?: string }) {
  const cols = tiles.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';
  return (
    <dl aria-label={label} className={`grid grid-cols-2 gap-3 ${cols}`}>
      {tiles.map((t) => <StatTile key={t.label} {...t} />)}
    </dl>
  );
}
