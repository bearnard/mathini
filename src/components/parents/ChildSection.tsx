'use client';
// One linked child on the parent's page: a header with the child's name and the consent, PIN reset and unlink actions, a strip of the four numbers a
// parent looks at first, then the progress cards. Every state is shown: loading, a failure with a retry, no practice yet, ready. The numbers in the
// strip come from the answers themselves, so they show even when the full progress cannot be built.
import { useEffect, useState } from 'react';
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { EmptyState, SkeletonCard, StatTileRow, signedText, numText, pctText } from '../dashboard';
import { ago, call, CONSENT_TEXT, type ChildSummary } from './api';
import { ChildProgressCards } from './ChildProgress';

const btn = 'min-h-11 rounded-xl px-4 text-base font-semibold disabled:opacity-60';

export default function ChildSection({ child, now, onChanged }: { child: ChildSummary; now: number; onChanged: () => void }) {
  const [progress, setProgress] = useState<ProgressResponse | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [tries, setTries] = useState(0);
  const [note, setNote] = useState('');
  const [pin, setPin] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    setState('loading');
    void call<{ progress: ProgressResponse }>(`/api/parent/children/${child.id}/progress`).then((r) => {
      if (!live) return;
      if (r.ok && r.data.progress) { setProgress(r.data.progress); setState('ready'); } else setState('error');
    });
    return () => { live = false; };
  }, [child.id, tries]);

  const act = async (path: string, action: string, body: unknown, done: (d: Record<string, unknown>) => void) => {
    setBusy(true); setNote('');
    const r = await call<Record<string, unknown>>(`/api/parent/children/${child.id}/${path}`, action, body);
    setBusy(false);
    if (r.ok) done(r.data); else setNote(r.data.error ?? 'That did not work.');
  };

  const a = child.activity;
  const practised = (a?.lastPractisedAt ?? null) !== null || (progress?.subjects.length ?? 0) > 0;
  const week = a?.changeSinceLastWeek;

  return (
    <section aria-label={child.displayName} className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <h2 className="break-words text-xl font-black text-slate-900">{child.displayName} <span className="text-sm font-semibold text-slate-600">Grade {child.grade}</span></h2>
            <p className="mt-1 text-sm text-slate-600">Last on PrepPals: {ago(child.lastSeenAt, now)}</p>
            <p className="mt-1 text-sm text-slate-700">{CONSENT_TEXT[child.consent]}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {child.consent === 'parent' ? (
              <button disabled={busy} className={`${btn} border border-slate-300 bg-white text-slate-800`} onClick={() => void act('consent', 'parent-consent', { give: false }, onChanged)}>Withdraw consent</button>
            ) : (
              <button disabled={busy} className={`${btn} bg-emerald-600 text-white`} onClick={() => void act('consent', 'parent-consent', { give: true }, onChanged)}>I give consent</button>
            )}
            <button disabled={busy} className={`${btn} border border-slate-300 bg-white text-slate-800`} onClick={() => { if (window.confirm(`Make a new PIN for ${child.displayName}? The old PIN stops working.`)) void act('reset-pin', 'parent-reset-pin', {}, (d) => setPin(String(d.pin))); }}>Reset PIN</button>
            <button disabled={busy} className={`${btn} text-red-700 underline`} onClick={() => { if (window.confirm(`Stop being linked to ${child.displayName}?`)) void act('unlink', 'parent-unlink', {}, onChanged); }}>Unlink</button>
          </div>
        </div>
        {pin && (
          <div className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-3" role="status">
            <p className="text-sm text-amber-900">New PIN for {child.displayName}. Write it down and tell your child: it is shown only once.</p>
            <p className="mt-1 text-3xl font-bold tracking-widest text-amber-950">{pin}</p>
            <button className="mt-2 text-sm font-semibold text-slate-700 underline" onClick={() => setPin(null)}>I have written it down</button>
          </div>
        )}
        {note && <p className="mt-2 text-sm text-red-700" role="alert">{note}</p>}
      </div>

      <StatTileRow
        label={`${child.displayName}: key numbers`}
        tiles={[
          { label: 'Exam readiness', value: pctText(progress?.exam?.readinessPct, state === 'ready' ? 'Not yet' : '–'), note: progress?.exam?.label },
          { label: 'Days practised, of 14', value: a ? numText(a.daysPractisedLast14) : '–' },
          { label: 'Answers this week', value: a ? numText(a.answersThisWeek) : '–', note: a?.weekAccuracyPct == null ? undefined : `${pctText(a.weekAccuracyPct)} right` },
          { label: 'Change since last week', value: typeof week === 'number' ? signedText(week, ' pts') : 'Not yet', note: typeof week === 'number' ? 'accuracy against the week before' : 'needs 5 answers in each week', tone: typeof week === 'number' && week > 0 ? 'good' : 'neutral' },
        ]}
      />

      {state === 'loading' && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"><SkeletonCard label="Loading progress…" /><SkeletonCard lines={3} label="Loading progress…" /><SkeletonCard lines={3} label="Loading progress…" /></div>
      )}
      {state === 'error' && (
        <EmptyState title="We couldn't load progress right now." action={<button type="button" className={`${btn} bg-indigo-600 text-white`} onClick={() => setTries((n) => n + 1)}>Try again</button>}>
          The numbers above still show {child.displayName}&apos;s practice.
        </EmptyState>
      )}
      {state === 'ready' && !practised && (
        <EmptyState title={`${child.displayName} has not practised yet`}>
          Ask {child.displayName} to open PrepPals, pick a topic and answer a few questions. Their progress will appear here.
        </EmptyState>
      )}
      {state === 'ready' && progress && practised && <ChildProgressCards p={progress} who={child.displayName} />}
    </section>
  );
}
