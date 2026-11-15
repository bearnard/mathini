import Link from 'next/link';
import { ctaOutline, ctaPrimary } from '../../lib/seo/ctaStyles';

/**
 * Three ways in, for the home page: learners, parents and teachers. Only learners have accounts today (ADR 0003: a login code and a PIN), so the
 * parent and teacher cards say "coming soon" and point at what is real now. No sign-up for a feature that does not exist.
 */
export default function HomePaths() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16" aria-labelledby="paths-heading">
      <h2 id="paths-heading" className="text-center text-2xl font-black text-slate-900">Who is PrepPals for?</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article id="learners" className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">Learners</h3>
          <p className="mt-2 flex-1 text-slate-600">
            Practise any CAPS topic from Grade 5 to Grade 12, get instant feedback on every question, and keep a streak going. It is free, and you get a login code to come back with.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/app?start=register" className={ctaPrimary}>Start free</Link>
            <Link href="/app?start=resume" className={ctaOutline}>I have a login code</Link>
          </div>
        </article>

        <article id="parents" className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold text-slate-800">
            Parents
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">Coming soon</span>
          </h3>
          <p className="mt-2 flex-1 text-slate-600">
            Parent accounts are not live yet. They are planned to let you follow your child&apos;s progress and help if a PIN is forgotten. Today, your child sets up their own account and confirms that you agree to it.
          </p>
          <div className="mt-4">
            <Link href="/privacy" className="font-bold text-[#3285bc] hover:underline">What we collect and why</Link>
          </div>
        </article>

        <article id="teachers" className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold text-slate-800">
            Teachers
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">Coming soon</span>
          </h3>
          <p className="mt-2 flex-1 text-slate-600">
            Teacher accounts are not live yet. You can already see exactly what each grade and subject covers, topic by topic, and point learners to it.
          </p>
          <div className="mt-4">
            <Link href="#browse" className="font-bold text-[#3285bc] hover:underline">Browse every grade and subject</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
