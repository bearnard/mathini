import Link from 'next/link';
import { ctaOutline, ctaPrimary } from '../../lib/seo/ctaStyles';

/**
 * Three ways in, for the home page: learners (login code and PIN), parents (email sign-in, then link a child) and teachers (email sign-in, apply,
 * and we check the SACE registration before approving). Every button goes to something that works; the teacher card says approval is not instant.
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
          <h3 className="text-lg font-bold text-slate-800">Parents</h3>
          <p className="mt-2 flex-1 text-slate-600">
            See how your child is doing, give or withdraw consent, reset a forgotten PIN and get a short weekly summary. You sign in with your email, no password.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/sign-in" className={ctaPrimary}>Sign in as a parent</Link>
            <Link href="/for-parents" className="font-bold text-[#3285bc] hover:underline">How it works</Link>
          </div>
        </article>

        <article id="teachers" className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">Teachers</h3>
          <p className="mt-2 flex-1 text-slate-600">
            Create classes with a join code, set the exam scope and date, and see how your class is doing. We check every teacher&apos;s SACE registration before approving, so it is not instant.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/sign-in" className={ctaPrimary}>Apply as a teacher</Link>
            <Link href="/for-teachers" className="font-bold text-[#3285bc] hover:underline">How it works</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
