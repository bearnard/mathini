'use client';
// The cards on /teacher: one real link per class. The list is normalised first, so a missing or odd field in an API answer (an empty school name, subjects that
// arrive as text, a member count as a string) can never make a class vanish; the tiles and the cards are built from the SAME normalised list, so they cannot
// disagree; and if a card ever fails to draw, the boundary below still shows a plain link for every class. A class with an id is always openable.
import { Component, type ReactNode } from 'react';
import { EmptyState, StatTileRow, plural } from '../dashboard';

export interface ClassCard { id: string; name: string; grade: number | null; joinCode: string; active: boolean; members: number; schoolName: string }
export interface NoticeRow { classId: string; count: number }

/** Anything the API sent -> a card we can always draw, or null when there is no usable id. */
export function normaliseClasses(raw: unknown): ClassCard[] {
  if (!Array.isArray(raw)) return [];
  const out: ClassCard[] = [];
  for (const r of raw) {
    if (!r || typeof r !== 'object') continue;
    const c = r as Record<string, unknown>;
    if (typeof c.id !== 'string' || c.id.length === 0) continue;
    const grade = Number(c.grade);
    const members = Number(c.members);
    out.push({
      id: c.id,
      name: typeof c.name === 'string' && c.name.trim() ? c.name.trim() : 'Untitled class',
      grade: Number.isFinite(grade) ? grade : null,
      joinCode: typeof c.joinCode === 'string' ? c.joinCode : '',
      active: c.status !== 'archived',
      members: Number.isFinite(members) && members > 0 ? members : 0,
      schoolName: typeof c.schoolName === 'string' ? c.schoolName : '',
    });
  }
  return out;
}

/** The code in two groups of four, easy to read out. */
export const showCode = (code: string): string => (code.length > 4 ? `${code.slice(0, 4)} ${code.slice(4)}` : code);
export const classHref = (id: string): string => `/teacher?class=${encodeURIComponent(id)}`;

export function ClassTiles({ cards, newLearners }: { cards: ClassCard[]; newLearners: number }) {
  return (
    <StatTileRow label="Your classes at a glance" tiles={[
      { label: 'Classes', value: String(cards.length), note: `${cards.filter((c) => c.active).length} active` },
      { label: 'Learners', value: String(cards.reduce((n, c) => n + c.members, 0)), note: 'across your classes' },
      { label: 'New this visit', value: String(newLearners), note: newLearners === 0 ? 'no new learners' : 'learners joined', tone: newLearners > 0 ? 'good' : 'neutral' },
    ]} />
  );
}

function Card({ c, fresh, onOpen }: { c: ClassCard; fresh: number; onOpen: (id: string) => void }) {
  // An archived class is listed but not opened: its learners and progress are closed to the teacher.
  if (!c.active) {
    return (
      <div className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left">
        <strong className="block break-words text-lg font-extrabold text-slate-700">{c.name}</strong>
        <span className="mt-0.5 block text-sm text-slate-600">{c.grade === null ? '' : `Grade ${c.grade} · `}Archived</span>
        <span className="mt-3 text-sm text-slate-600">This class is archived. Its code no longer works and its learners are no longer shown.</span>
      </div>
    );
  }
  return (
    <a
      href={classHref(c.id)}
      onClick={(e) => { if (!e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) { e.preventDefault(); onOpen(c.id); } }}
      className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-indigo-600"
    >
      <span className="min-w-0">
        <strong className="block break-words text-lg font-extrabold text-indigo-700 underline decoration-indigo-300 decoration-2 underline-offset-4 group-hover:decoration-indigo-600">{c.name}</strong>
        <span className="mt-0.5 block text-sm text-slate-600">{c.grade === null ? '' : `Grade ${c.grade} · `}{plural(c.members, 'learner')}</span>
      </span>
      <span className="mt-3 flex items-center justify-between gap-2">
        {c.active && c.joinCode ? <span className="rounded-lg bg-indigo-50 px-2 py-1 text-sm font-bold tracking-widest text-indigo-900">{showCode(c.joinCode)}</span> : <span />}
        {fresh > 0 && <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">{fresh} new</span>}
      </span>
      <span className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white shadow-sm group-hover:bg-indigo-700">Open class dashboard</span>
    </a>
  );
}

/** If drawing a card ever throws, this still lists every class as a plain link. */
class CardsBoundary extends Component<{ cards: ClassCard[]; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <ul className="md:col-span-2 xl:col-span-3 space-y-2" aria-label="Your classes">
        {this.props.cards.filter((c) => c.active).map((c) => <li key={c.id}><a className="font-bold text-indigo-700 underline" href={classHref(c.id)}>{c.name}: open class</a></li>)}
      </ul>
    );
  }
}

export default function ClassList({ cards, notices, onOpen, extra }: { cards: ClassCard[]; notices: NoticeRow[]; onOpen: (id: string) => void; extra?: ReactNode }) {
  return (
    <section aria-labelledby="classes-h">
      <h2 id="classes-h" className="mb-3 text-lg font-extrabold text-slate-800">Classes ({cards.length})</h2>
      {cards.length === 1 && cards[0].active && (
        <p className="mb-3 text-slate-700">
          Open <a href={classHref(cards[0].id)} onClick={(e) => { if (!e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) { e.preventDefault(); onOpen(cards[0].id); } }} className="font-bold text-indigo-700 underline">{cards[0].name}</a> to see how your learners are doing.
        </p>
      )}
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.length === 0 ? (
          <div className="md:col-span-2 xl:col-span-2"><EmptyState title="You have no classes yet">Make one and share its code with your learners.</EmptyState></div>
        ) : (
          <CardsBoundary cards={cards}>
            {cards.map((c) => <Card key={c.id} c={c} fresh={notices.find((n) => n.classId === c.id)?.count ?? 0} onOpen={onOpen} />)}
          </CardsBoundary>
        )}
        {extra}
      </div>
    </section>
  );
}
