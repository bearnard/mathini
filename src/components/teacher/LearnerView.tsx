'use client';
// A teacher's page for ONE learner of their class (/teacher?class=<id>&learner=<studentId>): the same cards the parent sees (the learner's own cards in a
// third-person, read-only voice), by nickname only. Everything is decided on the server: it answers only for the teacher's own active class and a current member.
import { useEffect, useState } from 'react';
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { DashboardGrid, EmptyState, GridItem, PageHeader, SkeletonCard, SkeletonTiles, StatTileRow, numText, pctText } from '../dashboard';
import { ChildProgressCards } from '../parents/ChildProgress';

interface Detail { class: { id: string; name: string; grade: number }; nickname: string; progress: ProgressResponse }
type State = { kind: 'loading' } | { kind: 'ready'; d: Detail } | { kind: 'gone' } | { kind: 'busy' } | { kind: 'error' };

export default function LearnerView({ classId, studentId, onBack }: { classId: string; studentId: string; onBack: () => void }) {
  const [state, setState] = useState<State>({ kind: 'loading' });
  const [tries, setTries] = useState(0);
  useEffect(() => {
    let live = true;
    setState({ kind: 'loading' });
    fetch(`/api/teacher/classes/${encodeURIComponent(classId)}/learners/${encodeURIComponent(studentId)}/progress`, { cache: 'no-store', referrerPolicy: 'no-referrer' })
      .then(async (res) => {
        if (!live) return;
        if (res.status === 404) return setState({ kind: 'gone' });
        if (res.status === 429) return setState({ kind: 'busy' });
        if (!res.ok) throw new Error(String(res.status));
        setState({ kind: 'ready', d: (await res.json()) as Detail });
      })
      .catch(() => live && setState({ kind: 'error' }));
    return () => { live = false; };
  }, [classId, studentId, tries]);

  const back = <button onClick={onBack} className="min-h-11 text-sm font-semibold text-indigo-700 underline">← Back to {state.kind === 'ready' ? state.d.class.name : 'the class'}</button>;
  if (state.kind === 'loading') {
    return (
      <>
        <PageHeader back={back} eyebrow="PrepPals teacher" title="Loading…" />
        <div className="space-y-4"><SkeletonTiles /><DashboardGrid><GridItem><SkeletonCard label="Loading progress" /></GridItem><GridItem><SkeletonCard label="Loading progress" /></GridItem><GridItem><SkeletonCard label="Loading progress" /></GridItem></DashboardGrid></div>
      </>
    );
  }
  if (state.kind !== 'ready') {
    const text = state.kind === 'gone'
      ? ['This learner is not in the class any more', 'They may have left, or been removed, or the class may be archived. Go back to the class to see who is in it.']
      : state.kind === 'busy'
        ? ['Please wait a few minutes', 'You have opened a lot of learner pages. Try again shortly.']
        : ["We couldn't load this learner's progress right now", 'Try again in a moment.'];
    return (
      <>
        <PageHeader back={back} eyebrow="PrepPals teacher" title="Learner" />
        <EmptyState title={text[0]} action={state.kind === 'gone' ? undefined : <button type="button" className="min-h-11 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white" onClick={() => setTries((n) => n + 1)}>Try again</button>}>{text[1]}</EmptyState>
      </>
    );
  }
  const { d } = state;
  const p = d.progress;
  return (
    <div className="space-y-4">
      <PageHeader back={back} eyebrow={`${d.class.name} · Grade ${d.class.grade}`} title={d.nickname} subtitle="Nickname only. This is the same progress the learner and their parent see." />
      <StatTileRow
        label={`${d.nickname}: key numbers`}
        tiles={[
          { label: 'Exam readiness', value: pctText(p.exam?.readinessPct, 'Not yet'), note: p.exam?.label },
          { label: 'Days practised, of 14', value: numText(p.consistency.daysPractisedLast14) },
          { label: 'Day streak', value: numText(p.consistency.streakDays) },
          { label: 'Review cards due', value: numText(p.retention.dueCount) },
        ]}
      />
      {p.subjects.length === 0 && (p.recentSessions ?? []).length === 0
        ? <EmptyState title={`${d.nickname} has not practised yet`}>When they answer a few questions, their progress will appear here.</EmptyState>
        : <ChildProgressCards p={p} who={d.nickname} step={p.teacherNextStep} />}
    </div>
  );
}
