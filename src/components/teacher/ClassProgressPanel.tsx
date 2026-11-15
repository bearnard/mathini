'use client';
// ADR 0005 section 4: how a class is doing, for its teacher. Visual first (bars, at most 6 labels per chart), decimal comma, encouraging wording:
// no ranking of learners and nothing that shames one. Learners appear by nickname only. All numbers come from the server.
import { useEffect, useState } from 'react';
import type { ClassProgress } from '../../lib/shared/classProgressTypes';

const num = (n: number | null, suffix = '') => (n === null ? '–' : `${String(n).replace('.', ',')}${suffix}`);
const signed = (n: number | null) => (n === null ? '–' : `${n > 0 ? '+' : n < 0 ? '−' : ''}${String(Math.abs(n)).replace('.', ',')}`);
const shortDate = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-ZA', { timeZone: 'UTC', day: 'numeric', month: 'short' });
const LEVEL_COLOUR = { not_started: 'bg-slate-200', learning: 'bg-amber-400', getting_there: 'bg-sky-500', mastered: 'bg-emerald-500' } as const;
const LEVEL_LABEL = { not_started: 'Not started', learning: 'Learning', getting_there: 'Getting there', mastered: 'Mastered' } as const;

function Section({ title, children, hint }: { title: string; children: React.ReactNode; hint?: string }) {
  return (
    <section className="mt-5" aria-label={title}>
      <h4 className="text-base font-bold text-slate-900">{title}</h4>
      {hint && <p className="text-sm text-slate-600">{hint}</p>}
      <div className="mt-2">{children}</div>
    </section>
  );
}

export default function ClassProgressPanel({ classId }: { classId: string }) {
  const [p, setP] = useState<ClassProgress | null | 'error'>(null);
  const [since, setSince] = useState('');
  const [err, setErr] = useState('');
  const [all, setAll] = useState(false);

  const load = (s: string) => {
    setErr('');
    fetch(`/api/teacher/classes/${classId}/progress${s ? `?since=${encodeURIComponent(s)}` : ''}`, { cache: 'no-store' })
      .then(async (r) => {
        const j = (await r.json().catch(() => ({}))) as ClassProgress & { error?: string };
        if (r.ok) { setP(j); if (!s) setSince(j.improvement.since); } else if (r.status === 400) setErr(j.error ?? 'Choose another date.'); else setP('error');
      })
      .catch(() => setP('error'));
  };
  useEffect(() => load(''), [classId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (p === null) return <p className="mt-5 text-slate-600" role="status">Loading how the class is doing…</p>;
  if (p === 'error') return <p className="mt-5 text-red-700" role="alert">Could not load the class progress.</p>;
  if (p.memberCount === 0) return null;

  const topics = all ? p.topics : p.topics.slice(0, 6);
  const maxBucket = Math.max(1, ...p.mockDistribution.buckets.map((b) => b.count));
  const imp = p.improvement;

  return (
    <div className="mt-6 border-t border-slate-200 pt-4">
      <h3 className="text-lg font-bold text-slate-900">How the class is doing</h3>
      {p.exam && (
        <p className="mt-1 rounded-xl bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-900">
          {p.exam.title}: {p.exam.daysLeft === 0 ? 'today' : p.exam.daysLeft === 1 ? '1 day to go' : `${p.exam.daysLeft} days to go`} ({shortDate(p.exam.examDate)})
        </p>
      )}

      <Section title={p.exam ? 'Exam topics, where the class needs most practice first' : 'Topics, where the class needs most practice first'} hint="The bar is the class average. The strip shows how many learners are at each level.">
        {p.topics.length === 0 ? (
          <p className="text-slate-600">No one has practised yet. Progress appears here as your learners practise.</p>
        ) : (
          <ul className="space-y-3">
            {topics.map((t) => (
              <li key={t.task}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0 break-words text-sm font-semibold text-slate-900">{t.label}</span>
                  <span className="shrink-0 text-sm font-bold text-slate-900">{num(t.avgAccuracyPct, '%')}</span>
                </div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${t.label}: class average ${num(t.avgAccuracyPct, '%')}, practised by ${t.practised} of ${p.memberCount}`}>
                  <div className="h-full rounded-full bg-indigo-500" style={{ width: `${t.avgAccuracyPct ?? 0}%` }} />
                </div>
                <div className="mt-1 flex h-2 overflow-hidden rounded-full" aria-hidden="true">
                  {(['mastered', 'getting_there', 'learning', 'not_started'] as const).map((lv) => t.levels[lv] > 0 && <div key={lv} className={LEVEL_COLOUR[lv]} style={{ width: `${(100 * t.levels[lv]) / p.memberCount}%` }} />)}
                </div>
                <p className="mt-0.5 text-xs text-slate-600">{t.practised} of {p.memberCount} practised · {t.levels.mastered} mastered, {t.levels.getting_there} getting there, {t.levels.learning} learning</p>
              </li>
            ))}
          </ul>
        )}
        {p.topics.length > 6 && <button className="mt-2 min-h-11 text-sm font-semibold text-indigo-700 underline" onClick={() => setAll(!all)}>{all ? 'Show fewer topics' : `Show all ${p.topics.length} topics`}</button>}
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
          {(['mastered', 'getting_there', 'learning', 'not_started'] as const).map((lv) => <span key={lv} className="inline-flex items-center gap-1"><span className={`inline-block h-2.5 w-2.5 rounded-full ${LEVEL_COLOUR[lv]}`} />{LEVEL_LABEL[lv]}</span>)}
        </p>
      </Section>

      <Section title="Practice test scores" hint="Each learner's latest practice test or exam practice.">
        {p.mockDistribution.scored === 0 ? (
          <p className="text-slate-600">No practice test taken yet.</p>
        ) : (
          <>
            <ul className="space-y-1.5">
              {p.mockDistribution.buckets.map((b) => (
                <li key={b.label} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-sm text-slate-800">{b.label}</span>
                  <span className="h-4 flex-1 overflow-hidden rounded bg-slate-100"><span className="block h-full rounded bg-emerald-500" style={{ width: `${(100 * b.count) / maxBucket}%` }} /></span>
                  <span className="w-6 shrink-0 text-right text-sm font-bold text-slate-900">{b.count}</span>
                </li>
              ))}
            </ul>
            <p className="mt-1 text-sm text-slate-600">Class average {num(p.mockDistribution.averagePct, '%')}{p.mockDistribution.notTaken > 0 ? ` · ${p.mockDistribution.notTaken} not taken yet` : ''}</p>
          </>
        )}
      </Section>

      <Section title="Review cards waiting" hint="Learners whose review cards have waited 2 days or more. A friendly nudge usually helps.">
        {p.behindOnReviews.length === 0 ? (
          <p className="text-slate-700">Everyone is up to date with their review cards.</p>
        ) : (
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {p.behindOnReviews.map((b) => (
              <li key={b.nickname} className="flex items-center justify-between gap-3 px-4 py-2 text-sm">
                <span className="min-w-0 break-words font-medium text-slate-900">{b.nickname}</span>
                <span className="shrink-0 text-slate-600">{b.dueCount} {b.dueCount === 1 ? 'card' : 'cards'} · waiting {b.overdueDays} days</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Improvement since" hint="How accuracy now compares with how it stood on that date.">
        <label className="block text-sm font-medium text-slate-700">Since
          <input type="date" value={since} max={new Date().toISOString().slice(0, 10)} onChange={(e) => { setSince(e.target.value); if (e.target.value) load(e.target.value); }} className="mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900" />
        </label>
        {err && <p className="mt-2 text-sm text-red-700" role="alert">{err}</p>}
        {imp.learnersCompared === 0 ? (
          <p className="mt-2 text-slate-600">Not enough practice on both sides of {shortDate(imp.since)} to compare yet.</p>
        ) : (
          <div className="mt-2">
            <p className="text-2xl font-black text-slate-900">{signed(imp.avgChangePoints)} <span className="text-base font-semibold text-slate-600">points on average</span></p>
            <p className="mt-1 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-900">{imp.improved} up</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">{imp.steady} steady</span>
              <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-900">{imp.declined} need a look</span>
            </p>
            <p className="mt-1 text-xs text-slate-600">{imp.learnersCompared} learners compared.</p>
          </div>
        )}
      </Section>

      <Section title="Learners">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[20rem] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
              <tr><th className="px-3 py-2">Nickname</th><th className="px-3 py-2 text-right">Topics</th><th className="px-3 py-2 text-right">Average</th><th className="px-3 py-2 text-right">Change</th><th className="px-3 py-2 text-right">Cards due</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {p.learners.map((l) => (
                <tr key={l.nickname}>
                  <td className="max-w-[9rem] break-words px-3 py-2 font-medium text-slate-900">{l.nickname}</td>
                  <td className="px-3 py-2 text-right text-slate-800">{l.topicsPractised}</td>
                  <td className="px-3 py-2 text-right text-slate-800">{num(l.avgAccuracyPct, '%')}</td>
                  <td className="px-3 py-2 text-right text-slate-800">{signed(l.changePoints)}</td>
                  <td className="px-3 py-2 text-right text-slate-800">{l.dueCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-1 text-xs text-slate-600">Last practised: {p.learners.filter((l) => l.lastPractisedDay).length} of {p.memberCount} learners have practised.</p>
      </Section>
    </div>
  );
}
