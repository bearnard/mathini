'use client';

// The learner's "My progress" page body (ADR 0005 section 3). Pure view: it gets the GET /api/progress response and shows it.
// Every number comes from that response; the only work done here is formatting (format.ts). The lists arrive in display order
// (topics weakest first, tests newest first) and are shown as they come. No comparison with other learners anywhere.
import Link from 'next/link';
import DataChart from '../subjects/DataChart';
import { Card, Change, ExamCard, NextStepCard, RetentionCard, SubjectCard } from './ProgressCards';
import type { ProgressResponse, TestResult, TestSeries } from '../../lib/shared/progressTypes';
import { KIND_TEXT, numText, pctText, shortDate } from './format';

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

export { ExamCard, NextStepCard, RetentionCard, SubjectCard };

export default function ProgressView({ data }: { data: ProgressResponse }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
      <header>
        <Link href="/app" className="inline-flex min-h-11 items-center text-sm font-bold text-indigo-700">← Back to your topics</Link>
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
