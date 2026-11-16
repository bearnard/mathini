'use client';
// ADR 0005 section 4 and ADR 0003 section 6, as a desktop-friendly dashboard for a teacher: one header strip of numbers, then cards in a grid (the topic
// heatmap, practice test scores, who needs a nudge, improvement since a date, the learners table). It is built on the dashboard kit. The rules
// of the old panel all stand: learners appear by NICKNAME only, no learner is ranked or shamed, every number comes from the server (classDashboard.ts
// only counts its lists), decimal comma, at most 6 labels per chart. `extras` is where the teacher area puts its own cards (code, roster, exams).
import { useEffect, useRef, useState, type ReactNode } from 'react';
import DataChart from '../subjects/DataChart';
import { DashboardGrid, EmptyState, GridItem, SectionCard, SkeletonCard, SkeletonTiles, SortableTable, StatTileRow, pctText, plural, signedText, type Column } from '../dashboard';
import { LEVEL_COLOUR, LEVEL_HINT, LEVEL_TEXT } from '../progress/format';
import type { ClassLearner, ClassProgress, ClassTopicProgress } from '../../lib/shared/classProgressTypes';
import { LEVELS, activeThisWeek, attentionCount, averageAccuracy, cellShare, countdownText, visibleTopics } from '../../lib/shared/classDashboard';

const shortDate = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-ZA', { timeZone: 'UTC', day: 'numeric', month: 'short' });
const today = () => new Date().toISOString().slice(0, 10);
/** The tint of a level, as an rgb triple, so a cell can fade with the share of the class at that level. */
const TINT = { not_started: '100,116,139', learning: '245,158,11', getting_there: '14,165,233', mastered: '16,185,129' } as const;

/** Sent (on window) after something changes what the class dashboard shows, for example an exam saved or removed. */
export const CLASS_CHANGED = 'preppals:class-changed';
export const announceClassChanged = (classId: string) => window.dispatchEvent(new CustomEvent(CLASS_CHANGED, { detail: { classId } }));

export function useClassProgress(classId: string, endpoint?: string) {
  const [p, setP] = useState<ClassProgress | null | 'error'>(null);
  const [since, setSince] = useState('');
  const [err, setErr] = useState('');
  const load = (s: string) => {
    setErr('');
    const base = endpoint ?? `/api/teacher/classes/${classId}/progress`;
    fetch(`${base}${s ? `${base.includes('?') ? '&' : '?'}since=${encodeURIComponent(s)}` : ''}`, { cache: 'no-store' })
      .then(async (r) => {
        const j = (await r.json().catch(() => ({}))) as ClassProgress & { error?: string };
        if (r.ok) { setP(j); if (!s) setSince(j.improvement.since); } else if (r.status === 400) setErr(j.error ?? 'Choose another date.'); else setP('error');
      })
      .catch(() => setP('error'));
  };
  useEffect(() => { setP(null); load(''); }, [classId]); // eslint-disable-line react-hooks/exhaustive-deps
  // The exam tile (and the topics an exam picks) come from this one read, so a saved or removed exam asks for it again, keeping the chosen date.
  const sinceNow = useRef(since);
  sinceNow.current = since;
  useEffect(() => {
    const again = (e: Event) => { if ((e as CustomEvent<{ classId?: string }>).detail?.classId === classId) load(sinceNow.current); };
    window.addEventListener(CLASS_CHANGED, again);
    return () => window.removeEventListener(CLASS_CHANGED, again);
  }, [classId]); // eslint-disable-line react-hooks/exhaustive-deps
  return { p, since, setSince, err, load };
}

export function ClassTiles({ p }: { p: ClassProgress }) {
  const active = activeThisWeek(p);
  const imp = p.improvement;
  return (
    <StatTileRow
      label="Class at a glance"
      tiles={[
        { label: 'Learners', value: String(p.memberCount), note: p.memberCount === 0 ? 'Share the class code' : `Grade ${p.grade}` },
        { label: 'Active this week', value: String(active), note: `of ${plural(p.memberCount, 'learner')}`, tone: p.memberCount > 0 && active === p.memberCount ? 'good' : 'neutral' },
        { label: 'Average accuracy', value: pctText(averageAccuracy(p)), note: 'learners’ own averages', change: imp.avgChangePoints, changeNote: `since ${shortDate(imp.since)}` },
        p.exam
          ? { label: p.exam.title, value: p.exam.daysLeft >= 0 ? String(p.exam.daysLeft) : '–', note: p.exam.daysLeft >= 0 ? `${p.exam.daysLeft === 1 ? 'day' : 'days'} to go · ${shortDate(p.exam.examDate)}` : `${countdownText(p.exam.daysLeft)} · ${shortDate(p.exam.examDate)}` }
          : { label: 'Exam', value: 'None set', note: 'Set an exam scope to give learners a countdown' },
      ]}
    />
  );
}

/** Topics down the side, the four levels across: how many learners are at each level, tinted by their share of the class. Weakest topics first. */
export function TopicHeatmap({ p }: { p: ClassProgress }) {
  const [all, setAll] = useState(false);
  const topics = visibleTopics(p.topics, all);
  return (
    <SectionCard id="heatmap" title={p.exam ? 'Exam topics' : 'Topics'} subtitle="Where the class needs most practice comes first. Each cell is how many learners are at that level.">
      {p.topics.length === 0 ? (
        <EmptyState title="No one has practised yet">Progress appears here as your learners practise.</EmptyState>
      ) : (
        <>
          {/* On a phone each topic is a small card: the name and average on top, all four levels in a row underneath (no column is hidden). */}
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 sm:hidden" aria-label="Learners at each level, by topic">
            {topics.map((t: ClassTopicProgress) => (
              <li key={t.task} className="px-3 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="min-w-0 break-words text-sm font-semibold text-slate-900">{t.label}</p>
                  <p className="shrink-0 text-sm font-bold tabular-nums text-slate-900"><span className="sr-only">Class average </span>{pctText(t.avgAccuracyPct, '–')}</p>
                </div>
                <p className="text-xs text-slate-600">{t.practised} of {p.memberCount} practised</p>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {LEVELS.map((lv) => (
                    <div key={lv} className="min-w-0 text-center">
                      <span className="flex h-9 items-center justify-center rounded-lg font-bold tabular-nums text-slate-900" style={{ background: `rgba(${TINT[lv]},${(0.12 + 0.6 * cellShare(t.levels[lv], p.memberCount)).toFixed(2)})`, opacity: t.levels[lv] === 0 ? 0.45 : 1 }}>{t.levels[lv]}</span>
                      <span className="mt-0.5 block text-[0.7rem] leading-tight text-slate-600">{LEVEL_TEXT[lv]}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto rounded-xl border border-slate-200 sm:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Learners at each level, by topic</caption>
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
                <tr>
                  <th scope="col" className="px-3 py-3">Topic</th>
                  <th scope="col" className="px-3 py-3 text-right">Class average</th>
                  {LEVELS.map((lv) => <th key={lv} scope="col" className="px-2 py-3 text-center">{LEVEL_TEXT[lv]}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topics.map((t: ClassTopicProgress) => (
                  <tr key={t.task}>
                    <th scope="row" className="max-w-[16rem] break-words px-3 py-2 font-semibold text-slate-900">
                      {t.label}
                      <span className="block text-xs font-normal text-slate-600">{t.practised} of {p.memberCount} practised</span>
                    </th>
                    <td className="px-3 py-2 text-right font-bold tabular-nums text-slate-900">{pctText(t.avgAccuracyPct, '–')}</td>
                    {LEVELS.map((lv) => (
                      <td key={lv} className="px-1 py-1.5 text-center">
                        <span className="inline-flex h-9 min-w-[2.75rem] items-center justify-center rounded-lg px-2 font-bold tabular-nums text-slate-900" style={{ background: `rgba(${TINT[lv]},${(0.12 + 0.6 * cellShare(t.levels[lv], p.memberCount)).toFixed(2)})`, opacity: t.levels[lv] === 0 ? 0.45 : 1 }}>
                          {t.levels[lv]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600" aria-hidden="true">
              {LEVELS.map((lv) => <span key={lv} className="inline-flex items-center gap-1"><span className={`inline-block h-2.5 w-2.5 rounded-full ${LEVEL_COLOUR[lv].bar}`} />{LEVEL_TEXT[lv]}: {LEVEL_HINT[lv].toLowerCase()}</span>)}
            </p>
            {p.topics.length > 8 && <button type="button" className="min-h-11 text-sm font-semibold text-indigo-700 underline" onClick={() => setAll(!all)}>{all ? 'Show fewer topics' : `Show all ${p.topics.length} topics`}</button>}
          </div>
        </>
      )}
    </SectionCard>
  );
}

export function ScoreCard({ p }: { p: ClassProgress }) {
  const d = p.mockDistribution;
  return (
    <SectionCard id="scores" title="Practice test scores" subtitle="Each learner's latest practice test or exam practice.">
      {d.scored === 0 ? (
        <EmptyState title="No practice test taken yet">Scores appear here after the first test.</EmptyState>
      ) : (
        <>
          <DataChart data={d.buckets.map((b) => ({ range: b.label, learners: b.count }))} series={[{ key: 'learners', label: 'Learners', color: '#10b981' }]} xKey="range" type="bar" height={220} />
          <p className="mt-2 text-sm text-slate-700">Class average <strong>{pctText(d.averagePct, '–')}</strong>{d.notTaken > 0 ? ` · ${d.notTaken} not taken yet` : ''}</p>
        </>
      )}
    </SectionCard>
  );
}

export function AttentionCard({ p }: { p: ClassProgress }) {
  const n = attentionCount(p);
  return (
    <SectionCard id="attention" title="Who could use a nudge" subtitle={n === 0 ? undefined : `${plural(n, 'learner')}. A friendly word usually helps.`}>
      {p.memberCount === 0 ? (
        <EmptyState title="No learners yet">Share the class code. Learners who need a nudge will show here once they have joined and started practising.</EmptyState>
      ) : n === 0 ? (
        <EmptyState title="Everyone is on track">All review cards are up to date and everyone practised this week. Well done, class!</EmptyState>
      ) : (
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-bold text-slate-800">Review cards waiting 2 days or more</h3>
            {p.behindOnReviews.length === 0 ? <p className="mt-1 text-sm text-slate-600">Everyone is up to date.</p> : (
              <ul className="mt-1 divide-y divide-slate-100">
                {p.behindOnReviews.map((b) => (
                  <li key={b.nickname} className="flex items-center justify-between gap-3 py-2 text-sm">
                    <span className="min-w-0 break-words font-semibold text-slate-900">{b.nickname}</span>
                    <span className="shrink-0 text-slate-600">{plural(b.dueCount, 'card')} · {b.overdueDays} days</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Not practised in the last 7 days</h3>
            {p.notPractisedLast7.length === 0 ? <p className="mt-1 text-sm text-slate-600">Everyone has practised this week.</p> : (
              <ul className="mt-1 divide-y divide-slate-100">
                {p.notPractisedLast7.map((l) => (
                  <li key={l.nickname} className="flex items-center justify-between gap-3 py-2 text-sm">
                    <span className="min-w-0 break-words font-semibold text-slate-900">{l.nickname}</span>
                    <span className="shrink-0 text-slate-600">{l.lastPractisedDay ? `last on ${shortDate(l.lastPractisedDay)}` : 'not started yet'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </SectionCard>
  );
}

export function ImprovementCard({ p, since, onSince, err }: { p: ClassProgress; since: string; onSince: (d: string) => void; err: string }) {
  const imp = p.improvement;
  return (
    <SectionCard id="improvement" title="Improvement since" subtitle="How accuracy now compares with how it stood on that date.">
      <label className="block text-sm font-medium text-slate-700">Since
        <input type="date" value={since} max={today()} onChange={(e) => { if (e.target.value) onSince(e.target.value); }} className="mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900" />
      </label>
      {err && <p className="mt-2 text-sm text-red-700" role="alert">{err}</p>}
      {imp.learnersCompared === 0 ? (
        <p className="mt-3 text-slate-600">Not enough practice on both sides of {shortDate(imp.since)} to compare yet.</p>
      ) : (
        <div className="mt-3">
          <p className="text-3xl font-black text-slate-900">{signedText(imp.avgChangePoints)} <span className="text-base font-semibold text-slate-600">points on average</span></p>
          <p className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-900">{imp.improved} up</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">{imp.steady} steady</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-900">{imp.declined} need a look</span>
          </p>
          <p className="mt-2 text-xs text-slate-600">{plural(imp.learnersCompared, 'learner')} compared.</p>
        </div>
      )}
    </SectionCard>
  );
}

/** The nickname as a link-looking button with a chevron: the keyboard route into the learner's page (the whole row is clickable with the mouse). */
export const OpenLearnerLink = ({ nickname, onOpen }: { nickname: string; onOpen: () => void }) => (
  <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(); }} className="inline-flex min-h-11 items-center gap-1 break-words text-left font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-indigo-600" aria-label={`Open ${nickname}'s progress`}>
    {nickname}<span aria-hidden="true" className="text-indigo-400">›</span>
  </button>
);

const learnerColumns = (onOpen?: (studentId: string) => void): Column<ClassLearner>[] => [
  { key: 'nickname', label: 'Nickname', sortValue: (l) => l.nickname, render: onOpen ? (l) => <OpenLearnerLink nickname={l.nickname} onOpen={() => onOpen(l.studentId)} /> : undefined },
  { key: 'topics', label: 'Topics', align: 'right', sortValue: (l) => l.topicsPractised },
  { key: 'avg', label: 'Average', align: 'right', sortValue: (l) => l.avgAccuracyPct, render: (l) => pctText(l.avgAccuracyPct, '–') },
  { key: 'change', label: 'Change', align: 'right', sortValue: (l) => l.changePoints, render: (l) => signedText(l.changePoints) },
  { key: 'due', label: 'Cards due', align: 'right', sortValue: (l) => l.dueCount },
  { key: 'last', label: 'Last practised', align: 'right', sortValue: (l) => l.lastPractisedDay, render: (l) => (l.lastPractisedDay ? shortDate(l.lastPractisedDay) : 'Not yet') },
];

/** Alphabetical to start with (the server's order); a teacher can sort any column, but no rank or position is ever shown. */
export function LearnersCard({ p, onOpenLearner }: { p: ClassProgress; onOpenLearner?: (studentId: string) => void }) {
  return (
    <SectionCard id="learners" title="Learners" subtitle={onOpenLearner ? 'Nicknames only. Click a learner to see their progress, or a heading to sort.' : 'Nicknames only. Click a heading to sort.'}>
      <SortableTable caption="Learners in the class" columns={learnerColumns(onOpenLearner)} onRowClick={onOpenLearner ? (l) => onOpenLearner(l.studentId) : undefined} rows={p.learners} rowKey={(l) => l.studentId} defaultSort={{ key: 'nickname', dir: 'asc' }} empty={<EmptyState title="No learners yet">Share the class code and they will appear here.</EmptyState>} />
    </SectionCard>
  );
}

export function ClassDashboardSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonTiles />
      <DashboardGrid>
        <GridItem span="wide"><SkeletonCard lines={6} label="Loading the topic heatmap" /></GridItem>
        <GridItem><SkeletonCard label="Loading" /></GridItem>
        <GridItem><SkeletonCard label="Loading" /></GridItem>
        <GridItem><SkeletonCard label="Loading" /></GridItem>
        <GridItem><SkeletonCard label="Loading" /></GridItem>
      </DashboardGrid>
    </div>
  );
}

export interface ClassDashboardProps {
  classId: string;
  endpoint?: string;
  /** The teacher area's own cards, placed in the grid. */
  extras?: { actions?: ReactNode; roster?: ReactNode; exams?: ReactNode };
  /** Opens one learner's page (teacher area only). */
  onOpenLearner?: (studentId: string) => void;
}

export default function ClassDashboard({ classId, endpoint, extras, onOpenLearner }: ClassDashboardProps) {
  const { p, since, load, err } = useClassProgress(classId, endpoint);
  if (p === null) return <ClassDashboardSkeleton />;
  if (p === 'error') return <p className="text-red-700" role="alert">Could not load the class progress.</p>;
  return (
    <div className="space-y-4">
      <ClassTiles p={p} />
      <DashboardGrid>
        <GridItem span="wide" className={p.topics.length === 0 ? 'self-start' : ''}><TopicHeatmap p={p} /></GridItem>
        <GridItem className="flex flex-col gap-4 [&>section]:h-auto">
          {extras?.actions ?? null}
          <ImprovementCard p={p} since={since} onSince={load} err={err} />
        </GridItem>
        <GridItem><ScoreCard p={p} /></GridItem>
        <GridItem><AttentionCard p={p} /></GridItem>
        {extras?.exams ? <GridItem>{extras.exams}</GridItem> : null}
        <GridItem span="wide"><LearnersCard p={p} onOpenLearner={onOpenLearner} /></GridItem>
        {extras?.roster ? <GridItem>{extras.roster}</GridItem> : null}
      </DashboardGrid>
    </div>
  );
}
