import Link from 'next/link';
import { ctaOutline, ctaPrimary } from '../../lib/seo/ctaStyles';
import { CompareBars } from '../diagrams/maths/FractionScenes';

/**
 * Landing section 1. One promise, one main button, a way in for parents and teachers, and a REAL lesson slide beside it: the first slide of the Grade 6
 * "Comparing Fractions" lesson (same words as the lesson), with its own hand-built, tested diagram (CompareBars), not stock art. Plain server HTML: no JS.
 */
export function LessonSlideCard({ className = '' }: { className?: string }) {
  return (
    <figure className={`rounded-3xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6 ${className}`}>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500">
        <span>Grade 6 · Mathematics · Fractions</span>
        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700">Slide 1 of 3</span>
      </figcaption>
      <div className="mt-3 space-y-4 text-left">
        <h2 className="text-xl font-black text-slate-900">Comparing Fractions</h2>
        <p className="text-slate-600">We can compare fractions to see which is bigger, smaller, or if they&apos;re equal.</p>
        <CompareBars a={2} b={4} />
        <p className="text-sm text-slate-500">Which shaded part is bigger?</p>
      </div>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16" aria-labelledby="hero-h">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#3285bc]">CAPS practice, Grades 5 to 12</p>
        <h1 id="hero-h" className="mt-2 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          CAPS exam practice that feels like a game
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Short visual lessons, real exam-style questions, and progress you can see. Free, with instant feedback on every question.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/app?start=register" className={`${ctaPrimary} text-lg px-8 py-3`}>Start practising free</Link>
          <Link href="/app?start=resume" className={`${ctaOutline} text-lg px-6 py-3`}>I have a login code</Link>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Not a learner? <Link href="/for-parents" className="font-bold text-[#3285bc] hover:underline">I&apos;m a parent</Link>
          {' '}·{' '}
          <Link href="/for-teachers" className="font-bold text-[#3285bc] hover:underline">I&apos;m a teacher</Link>
        </p>
      </div>
      <LessonSlideCard />
    </section>
  );
}
