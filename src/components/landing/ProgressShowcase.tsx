import Link from 'next/link';
import { ExamCard, NextStepCard, RetentionCard, SubjectCard } from '../progress/ProgressCards';
import { MOCK_PROGRESS } from '../../lib/shared/progressMock';
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { ctaPrimary } from '../../lib/seo/ctaStyles';

/**
 * Landing section 4: the REAL "My progress" cards, rendered with the typed-in sample learner (progressMock.ts) and labelled SAMPLE. The cards are
 * the light ones (ProgressCards.tsx): no chart library and no script, so this costs HTML only. Every link inside the sample goes to sign-up,
 * because the sample learner's own pages do not exist for a visitor.
 */
const REGISTER = '/app?start=register';

export function sampleProgress(): ProgressResponse {
  return {
    ...MOCK_PROGRESS,
    nextStep: { ...MOCK_PROGRESS.nextStep, href: REGISTER },
    subjects: MOCK_PROGRESS.subjects.map((s) => ({ ...s, topics: s.topics.map((t) => ({ ...t, practiseHref: REGISTER })) })),
  };
}

export default function ProgressShowcase() {
  const p = sampleProgress();
  const maths = p.subjects.find((s) => s.subject === 'mathematics') ?? p.subjects[0];
  return (
    <section className="bg-white py-16" aria-labelledby="progress-h">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="progress-h" className="text-center text-2xl font-black text-slate-900">See exactly how you are doing</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Every answer counts. PrepPals shows how ready you are for the exam, which topics to grow first, and what to do next. It is built to encourage, and you are never compared with other learners.
        </p>
        <p className="mt-4 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-800">Sample data</span>
          <span className="ml-2 text-sm text-slate-500">This is what a learner sees. The numbers are an example.</span>
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2" role="group" aria-label="Sample progress page">
          <div className="space-y-4">
            <NextStepCard step={p.nextStep} />
            <ExamCard exam={p.exam} />
          </div>
          <div className="space-y-4">
            <SubjectCard s={maths} />
            <RetentionCard r={p.retention} days={p.consistency.daysPractisedLast14} streak={p.consistency.streakDays} />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href={REGISTER} className={ctaPrimary}>Start practising free</Link>
        </div>
      </div>
    </section>
  );
}
