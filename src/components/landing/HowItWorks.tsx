import { Rule, Worked } from '../subjects/lesson/LessonBlocks';
import { Bar } from '../progress/ProgressCards';
import { LEVEL_COLOUR, LEVEL_TEXT } from '../progress/format';
import type { MasteryLevel } from '../../lib/shared/progressTypes';

/**
 * Landing section 3: Learn, Practise, See progress, each with a small preview made from the real components. Everything here is static HTML:
 * the question is a real Grade 6 bank question with its real explanation, shown as already answered.
 */
const SAMPLE_TOPICS: { label: string; pct: number; level: MasteryLevel }[] = [
  { label: 'Equivalent fractions', pct: 88, level: 'mastered' },
  { label: 'Comparing fractions', pct: 64, level: 'getting_there' },
  { label: 'Decimal place value', pct: 38, level: 'learning' },
];

function Step({ n, title, text, children }: { n: number; title: string; text: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="flex items-center gap-2 text-sm font-black text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f68535] text-white">{n}</span>
        <span className="text-lg text-slate-900">{title}</span>
      </p>
      <p className="mt-2 text-slate-600">{text}</p>
      <div className="mt-4 flex-1 space-y-3" aria-label={`${title}: a small example`}>{children}</div>
    </li>
  );
}

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16" aria-labelledby="how-h">
      <h2 id="how-h" className="text-center text-2xl font-black text-slate-900">How it works</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">Learn one idea, practise it, and watch yourself get better.</p>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        <Step n={1} title="Learn" text="Each topic starts with short slides: the rule, a worked example and a common mistake.">
          <Rule>Multiply the top and the bottom by the same number.</Rule>
          <Worked title="Find a fraction equal to 1/2" steps={['1 × 2 = 2 on the top', '2 × 2 = 4 on the bottom', 'So 1/2 = 2/4']} />
        </Step>
        <Step n={2} title="Practise" text="Exam-style questions with instant feedback and a clear explanation, right or wrong.">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-bold text-slate-800">Which fraction is equivalent to 1/2?</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-center font-semibold">
              <li className="rounded-lg border-2 border-emerald-500 bg-emerald-50 p-2 text-emerald-800">2/4</li>
              <li className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600">3/5</li>
              <li className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600">1/4</li>
              <li className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600">2/3</li>
            </ul>
          </div>
          <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900"><strong>Correct!</strong> 1/2 × (2/2) = 2/4. Multiplying both numerator and denominator by 2 gives an equivalent fraction.</p>
        </Step>
        <Step n={3} title="See progress" text="Every topic shows how well you know it, and your exam readiness grows as you practise.">
          <ul className="space-y-3">
            {SAMPLE_TOPICS.map((t) => (
              <li key={t.label}>
                <p className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-bold text-slate-800">{t.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${LEVEL_COLOUR[t.level].chip}`}>{LEVEL_TEXT[t.level]}</span>
                </p>
                <div className="mt-1"><Bar pct={t.pct} colour={LEVEL_COLOUR[t.level].bar} label={`${t.label}: ${LEVEL_TEXT[t.level]}`} /></div>
              </li>
            ))}
          </ul>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Sample</p>
        </Step>
      </ol>
    </section>
  );
}
