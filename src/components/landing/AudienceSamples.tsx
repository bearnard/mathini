import Link from 'next/link';
import { Bar } from '../progress/ProgressCards';
import { LEVEL_COLOUR, LEVEL_TEXT } from '../progress/format';
import type { MasteryLevel } from '../../lib/shared/progressTypes';

/**
 * Landing section 6: what a parent and what a teacher actually see, with SAMPLE data. Static markup built from the same bars and level colours as
 * the real pages. The parent sample shows one child's numbers; the class sample shows how many learners are at each level of a topic, never a
 * learner's name beyond a nickname and never a ranking.
 */
const LEVELS: MasteryLevel[] = ['mastered', 'getting_there', 'learning', 'not_started'];
const CLASS_TOPICS: { label: string; levels: Record<MasteryLevel, number> }[] = [
  { label: 'Common fractions', levels: { mastered: 9, getting_there: 8, learning: 5, not_started: 2 } },
  { label: 'Area and perimeter', levels: { mastered: 4, getting_there: 9, learning: 8, not_started: 3 } },
  { label: 'Decimal place value', levels: { mastered: 3, getting_there: 6, learning: 10, not_started: 5 } },
];

const SampleBadge = () => <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-800">Sample</span>;

function ParentSample() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" role="group" aria-label="Sample parent page">
      <p className="flex items-center justify-between gap-2"><strong className="text-slate-900">Lerato · Grade 6</strong><SampleBadge /></p>
      <p className="mt-3 text-sm font-semibold text-slate-600">Exam readiness</p>
      <p className="text-3xl font-extrabold text-slate-900">69%</p>
      <div className="mt-1"><Bar pct={69} colour="bg-indigo-500" label="Exam readiness, sample" /></div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-50 p-3"><dt className="text-slate-600">Practised in the last 14 days</dt><dd className="text-lg font-extrabold text-slate-900">9 days</dd></div>
        <div className="rounded-xl bg-slate-50 p-3"><dt className="text-slate-600">Streak</dt><dd className="text-lg font-extrabold text-slate-900">3 days</dd></div>
      </dl>
      <p className="mt-4 text-sm text-slate-700"><strong>Topic to grow first:</strong> Electric circuits</p>
      <p className="mt-1 text-sm text-slate-700"><strong>Consent:</strong> given by you, you can withdraw it any time</p>
    </div>
  );
}

function ClassSample() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" role="group" aria-label="Sample class view">
      <p className="flex items-center justify-between gap-2"><strong className="text-slate-900">Grade 6 Mathematics · 24 learners</strong><SampleBadge /></p>
      <p className="mt-1 text-sm text-slate-600">Exam in 12 days · Term 3 and 4 topics</p>
      <ul className="mt-4 space-y-4">
        {CLASS_TOPICS.map((t) => {
          const total = LEVELS.reduce((n, l) => n + t.levels[l], 0);
          return (
            <li key={t.label}>
              <p className="text-sm font-bold text-slate-800">{t.label}</p>
              <div className="mt-1 flex h-3 w-full overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${t.label}: ${LEVELS.map((l) => `${t.levels[l]} ${LEVEL_TEXT[l].toLowerCase()}`).join(', ')}`}>
                {LEVELS.map((l) => (t.levels[l] > 0 ? <div key={l} className={LEVEL_COLOUR[l].bar} style={{ width: `${(t.levels[l] / total) * 100}%` }} /> : null))}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600" aria-hidden="true">
        {LEVELS.map((l) => <span key={l} className="inline-flex items-center gap-1"><span className={`inline-block h-2.5 w-2.5 rounded-full ${LEVEL_COLOUR[l].bar}`} />{LEVEL_TEXT[l]}</span>)}
      </p>
    </div>
  );
}

export default function AudienceSamples() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16" aria-labelledby="audiences-h">
      <h2 id="audiences-h" className="sr-only">What parents and teachers see</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-black text-slate-900">Parents: see how your child is doing</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Exam readiness, practice days and streak at a glance</li>
            <li>The topics that need work, so you know where to help</li>
            <li>A short weekly summary by email, if you want it</li>
            <li>You decide on consent, and you can reset a forgotten PIN</li>
          </ul>
          <div className="mt-4"><ParentSample /></div>
          <p className="mt-3"><Link href="/for-parents" className="font-bold text-[#3285bc] hover:underline">How it works for parents</Link></p>
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900">Teachers: see how your class is doing</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Classes with a join code, learners shown by nickname</li>
            <li>Which topics your class finds easy or hard, with no ranking</li>
            <li>Set the exam scope and date: learners get a countdown</li>
            <li>We check every teacher&apos;s SACE registration before approving</li>
          </ul>
          <div className="mt-4"><ClassSample /></div>
          <p className="mt-3"><Link href="/for-teachers" className="font-bold text-[#3285bc] hover:underline">How it works for teachers</Link></p>
        </div>
      </div>
    </section>
  );
}
