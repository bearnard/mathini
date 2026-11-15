// A linked child's progress for a PARENT, from the same ProgressResponse the learner's own page gets (ADR 0005). Every number is the server's;
// this only formats it (the learner's page is written to the learner, so a parent gets a third-person summary instead of that view).
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { KIND_TEXT, LEVEL_COLOUR, LEVEL_TEXT, numText, pctText, shortDate } from '../progress/format';

export const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl bg-slate-50 p-2 text-center">
    <dt className="text-xs text-slate-600">{label}</dt>
    <dd className="text-xl font-bold text-slate-900">{value}</dd>
  </div>
);

/** The three numbers a parent looks at first. */
export function ProgressStats({ p }: { p: ProgressResponse }) {
  return (
    <dl className="mt-3 grid grid-cols-3 gap-2">
      <Stat label="Exam readiness" value={pctText(p.exam?.readinessPct, 'not yet')} />
      <Stat label="Days practised, of 14" value={numText(p.consistency.daysPractisedLast14)} />
      <Stat label="Day streak" value={numText(p.consistency.streakDays)} />
    </dl>
  );
}

/** Subjects with their weakest topics, recent tests and review cards. */
export function ProgressDetails({ p }: { p: ProgressResponse }) {
  return (
    <div className="mt-3 space-y-4 border-t border-slate-200 pt-3">
      <p className="text-sm text-slate-800"><strong>Next step:</strong> {p.nextStep.title}. {p.nextStep.reason}</p>
      {p.exam && (
        <p className="text-sm text-slate-800">
          <strong>{p.exam.label}:</strong> {numText(p.exam.topicsPractised)} of {numText(p.exam.topicsTotal)} topics practised
          {p.exam.latestMock ? `, latest mock ${pctText(p.exam.latestMock.scorePct)} (${shortDate(p.exam.latestMock.finishedAt)})` : ''}.
        </p>
      )}
      {p.subjects.length === 0 && <p className="text-sm text-slate-700">No topics have been practised yet.</p>}
      {p.subjects.map((s) => (
        <section key={s.subject} aria-label={s.label}>
          <h3 className="flex items-center justify-between text-sm font-bold text-slate-900">
            <span>{s.label}</span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${LEVEL_COLOUR[s.level].chip}`}>{LEVEL_TEXT[s.level]} {s.masteryPct == null ? '' : pctText(s.masteryPct)}</span>
          </h3>
          <ul className="mt-1 space-y-1">
            {s.topics.slice(0, 3).map((t) => (
              <li key={t.task} className="flex items-center justify-between text-sm text-slate-700">
                <span>{t.label}</span>
                <span>{t.attempts === 0 ? 'not started' : `${pctText(t.accuracyPct)} · ${numText(t.attempts)} answers`}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {p.tests.length > 0 && (
        <section aria-label="Tests">
          <h3 className="text-sm font-bold text-slate-900">Recent tests</h3>
          <ul className="mt-1 space-y-1">
            {p.tests.slice(0, 3).map((t) => (
              <li key={t.runId} className="flex items-center justify-between text-sm text-slate-700">
                <span>{KIND_TEXT[t.kind]}: {t.scopeLabel}</span>
                <span>{pctText(t.scorePct)} · {shortDate(t.finishedAt)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      <p className="text-sm text-slate-700">
        Review cards: {numText(p.retention.retiredCount)} remembered for good, {numText(p.retention.dueCount)} due now
        {p.retention.weekPct == null ? '.' : `, ${pctText(p.retention.weekPct)} right this week.`}
      </p>
    </div>
  );
}
