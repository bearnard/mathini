'use client';

// The learner's "My progress" page body (ADR 0005 section 3). Pure view: it gets the GET /api/progress response and shows it.
// Every number comes from that response; the only work done here is formatting (format.ts). The lists arrive in display order
// (topics weakest first, tests newest first) and are shown as they come. No comparison with other learners anywhere.
import Link from 'next/link';
import DataChart from '../subjects/DataChart';
import type { ExamReadiness, ProgressResponse, RetentionProgress, SubjectProgress, TestResult, TestSeries, TopicProgress } from '../../lib/shared/progressTypes';
import { KIND_TEXT, LEVEL_COLOUR, LEVEL_HINT, LEVEL_TEXT, changeText, changeTone, numText, pctText, remembered, shortDate } from './format';
import { SPARK, sparkPoints } from './sparkline';

/** A bar whose fill is the percentage the server sent (null shows an empty bar). */
const Bar = ({ pct, colour, label }: { pct: number | null; colour: string; label: string }) => (
  <div
    role="progressbar"
    aria-label={label}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={pct ?? undefined}
    aria-valuetext={pctText(pct)}
    className="h-3 w-full overflow-hidden rounded-full bg-slate-100"
  >
    <div className={`h-full rounded-full ${colour}`} style={{ width: `${pct ?? 0}%` }} />
  </div>
);

const Card = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <section id={id} aria-labelledby={`${id ?? title}-h`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
    <h2 id={`${id ?? title}-h`} className="mb-3 text-lg font-extrabold text-slate-800">{title}</h2>
    {children}
  </section>
);

const toneClass = { up: 'text-emerald-700', flat: 'text-slate-500', down: 'text-slate-600' } as const;

const Change = ({ points }: { points: number | null | undefined }) => <span className={`text-xs font-bold ${toneClass[changeTone(points)]}`}>{changeText(points)}</span>;

const Spark = ({ values, label }: { values: number[]; label: string }) =>
  values.length === 0 ? (
    <span aria-hidden className="inline-block" style={{ width: SPARK.w, height: SPARK.h }} />
  ) : (
    <svg role="img" aria-label={label} viewBox={`0 0 ${SPARK.w} ${SPARK.h}`} width={SPARK.w} height={SPARK.h} className="shrink-0">
      <line x1={SPARK.pad} y1={SPARK.h - SPARK.pad} x2={SPARK.w - SPARK.pad} y2={SPARK.h - SPARK.pad} stroke="#e2e8f0" strokeWidth={1} />
      <polyline points={sparkPoints(values)} fill="none" stroke="#6366f1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

export const NextStepCard = ({ step }: { step: ProgressResponse['nextStep'] }) => (
  <section aria-labelledby="next-h" className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4 sm:p-6">
    <p className="text-xs font-extrabold uppercase tracking-wide text-indigo-700">Your next best step</p>
    <h2 id="next-h" className="mt-1 text-xl font-extrabold text-slate-900">{step.title}</h2>
    <p className="mt-1 text-slate-700">{step.reason}</p>
    {step.href ? (
      <Link href={step.href} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-orange px-5 py-2 font-extrabold text-white shadow-sm">
        {step.cta}
      </Link>
    ) : null}
  </section>
);

export const ExamCard = ({ exam }: { exam: ExamReadiness | null }) => (
  <Card title="Exam readiness" id="exam">
    {exam === null ? (
      <p className="text-slate-700">Practise a few topics and your exam readiness will show up here. Every question you answer counts.</p>
    ) : (
      <>
        <p className="text-sm font-semibold text-slate-600">{exam.label}</p>
        <p className="mt-1 text-4xl font-extrabold text-slate-900">{pctText(exam.readinessPct)}</p>
        <div className="mt-2"><Bar pct={exam.readinessPct} colour="bg-indigo-500" label="Exam readiness" /></div>
        <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-3">
            <dt className="font-semibold text-slate-600">Topics mastered so far</dt>
            <dd className="text-lg font-extrabold text-slate-900">{pctText(exam.masteryPct)}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <dt className="font-semibold text-slate-600">Topics practised</dt>
            <dd className="text-lg font-extrabold text-slate-900">{numText(exam.topicsPractised)} of {numText(exam.topicsTotal)}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <dt className="font-semibold text-slate-600">Latest mock test</dt>
            <dd className="text-lg font-extrabold text-slate-900">{exam.latestMock ? `${pctText(exam.latestMock.scorePct)} on ${shortDate(exam.latestMock.finishedAt)}` : 'Not yet'}</dd>
          </div>
        </dl>
      </>
    )}
  </Card>
);

const TopicRow = ({ t }: { t: TopicProgress }) => (
  <li className="flex flex-col gap-2 border-t border-slate-100 py-3 first:border-t-0 sm:flex-row sm:items-center sm:justify-between">
    <div className="min-w-0">
      <p className="font-bold text-slate-800">{t.label}</p>
      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${LEVEL_COLOUR[t.level].chip}`}>{LEVEL_TEXT[t.level]}</span>
        <span className="text-slate-600">{t.accuracyPct === null ? LEVEL_HINT[t.level] : `${pctText(t.accuracyPct)} · ${LEVEL_HINT[t.level]}`}</span>
      </p>
      {t.changePoints !== null ? <p className="mt-0.5"><Change points={t.changePoints} /></p> : null}
    </div>
    <div className="flex items-center justify-between gap-3 sm:justify-end">
      <Spark values={t.trend} label={t.trend.length === 0 ? '' : `Trend for ${t.label}: ${t.trend.map((v) => pctText(v)).join(', ')}`} />
      <Link href={t.practiseHref} className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-indigo-200 px-4 py-2 text-sm font-extrabold text-indigo-700">
        Practise this
      </Link>
    </div>
  </li>
);

export const SubjectCard = ({ s }: { s: SubjectProgress }) => (
  <Card title={s.label} id={`subject-${s.subject}`}>
    <div className="mb-1 flex items-baseline justify-between gap-3">
      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${LEVEL_COLOUR[s.level].chip}`}>{LEVEL_TEXT[s.level]}</span>
      <span className="text-lg font-extrabold text-slate-900">{pctText(s.masteryPct)}</span>
    </div>
    <Bar pct={s.masteryPct} colour={LEVEL_COLOUR[s.level].bar} label={`${s.label} mastery`} />
    <p className="mt-3 text-sm font-semibold text-slate-600">Topics to grow first are at the top</p>
    <ul>{s.topics.map((t) => <TopicRow key={t.task} t={t} />)}</ul>
  </Card>
);

/** A line chart of one repeated test: the latest 5 attempts, so the chart has at most 6 labels (5 dates and the series name). */
const SeriesChart = ({ series }: { series: TestSeries }) => (
  <div className="mt-4">
    <p className="text-sm font-bold text-slate-700">{series.scopeLabel}</p>
    <DataChart
      data={series.points.slice(-5).map((p) => ({ date: shortDate(p.finishedAt), score: p.scorePct }))}
      series={[{ key: 'score', label: 'Score (%)', color: '#6366f1' }]}
      xKey="date"
      type="line"
      height={200}
    />
  </div>
);

const TestRow = ({ t }: { t: TestResult }) => (
  <li className="flex items-center justify-between gap-3 border-t border-slate-100 py-3 first:border-t-0">
    <div className="min-w-0">
      <p className="font-bold text-slate-800">{t.scopeLabel}</p>
      <p className="text-sm text-slate-600">{KIND_TEXT[t.kind]} · {shortDate(t.finishedAt)} · {numText(t.nCorrect)} of {numText(t.nItems)} right</p>
    </div>
    <div className="shrink-0 text-right">
      <p className="text-lg font-extrabold text-slate-900">{pctText(t.scorePct)}</p>
      <Change points={t.changeSinceLast} />
    </div>
  </li>
);

export const TestsCard = ({ tests, series }: { tests: TestResult[]; series: TestSeries[] }) => (
  <Card title="Test history" id="tests">
    {tests.length === 0 ? (
      <p className="text-slate-700">When you finish a quiz, mock test or exam practice, it will be listed here, and you can watch your scores climb.</p>
    ) : (
      <>
        <ul>{tests.map((t) => <TestRow key={t.runId} t={t} />)}</ul>
        {series.map((s) => <SeriesChart key={s.scopeKey} series={s} />)}
      </>
    )}
  </Card>
);

export const RetentionCard = ({ r, days, streak }: { r: RetentionProgress; days: number; streak: number }) => (
  <Card title="What you remember" id="retention">
    {r.weekAnswered === 0 && r.retiredCount === 0 ? (
      <p className="text-slate-700">Review cards help you remember what you learn. Do a few and they will show up here.</p>
    ) : (
      <>
        <p className="text-slate-800">{remembered(r.weekCorrect, r.weekAnswered)}</p>
        <div className="mt-2"><Bar pct={r.weekPct} colour="bg-emerald-500" label="Review cards remembered this week" /></div>
        <p className="mt-3 text-sm text-slate-700">{numText(r.retiredCount)} cards remembered for good</p>
        <p className="text-sm text-slate-700">{r.dueCount === 0 ? 'No cards due right now' : `${numText(r.dueCount)} cards ready for you`}</p>
      </>
    )}
    <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-700">
      You practised on {numText(days)} of the last 14 days{streak > 0 ? `. Your streak: ${numText(streak)} ${streak === 1 ? 'day' : 'days'}` : ''}.
    </p>
  </Card>
);

export default function ProgressView({ data }: { data: ProgressResponse }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
      <header>
        <h1 className="text-2xl font-extrabold text-slate-900">My progress</h1>
        <p className="mt-1 text-slate-700">{data.displayName ? `${data.displayName}, here` : 'Here'} is how you are growing. Every try counts.</p>
      </header>
      <NextStepCard step={data.nextStep} />
      <ExamCard exam={data.exam} />
      {data.subjects.length === 0 ? (
        <Card title="Subjects" id="subjects">
          <p className="text-slate-700">Pick a topic and answer a few questions. Your subjects and topics will appear here as you go.</p>
        </Card>
      ) : (
        data.subjects.map((s) => <SubjectCard key={s.subject} s={s} />)
      )}
      <TestsCard tests={data.tests} series={data.testSeries} />
      <RetentionCard r={data.retention} days={data.consistency.daysPractisedLast14} streak={data.consistency.streakDays} />
    </div>
  );
}
