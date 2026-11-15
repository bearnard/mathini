import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE_NAME } from '../lib/server/session';
import { gradeAccent } from '../lib/brand';
import { SEO_GRADES } from '../lib/seo/curriculumIndex';
import { SITE_DESCRIPTION } from '../lib/seo/site';
import { ctaOutline, ctaPrimary } from '../lib/seo/ctaStyles';
import { pageMeta } from '../lib/seo/pageMeta';
import { homeLd } from '../lib/seo/structuredData';
import { JsonLd } from '../components/seo/PublicShell';

export const metadata: Metadata = {
  ...pageMeta({ title: 'PrepPals — CAPS Practice for Grades 5–12', description: SITE_DESCRIPTION, path: '/' }),
  title: { absolute: 'PrepPals — CAPS Practice for Grades 5–12' },
};

export default async function HomePage() {
  // Returning students with a session cookie skip the marketing page and
  // go straight back into the app — same as today's behaviour at "/". This
  // only checks cookie *presence*; an invalid/expired cookie still lands on
  // /app, where the existing client-side session check falls back to the
  // anonymous onboarding gate.
  const cookieStore = await cookies();
  if (cookieStore.get(SESSION_COOKIE_NAME)) {
    redirect('/app');
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <JsonLd data={homeLd()} />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-black text-slate-800">PrepPals</span>
          <Link href="/app?start=resume" className="text-sm font-bold text-[#3285bc] hover:underline">
            I have a login code
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
            CAPS practice that feels like a game
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{SITE_DESCRIPTION}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/app?start=register" className={`${ctaPrimary} text-lg px-8 py-3`}>
              Get started — it&apos;s free
            </Link>
            <Link href="/app?start=resume" className={`${ctaOutline} text-lg px-8 py-3`}>
              I have a login code
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <h2 className="text-center text-2xl font-black text-slate-900">
            Every subject, every grade from 5 to 12
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Pick a grade and subject to see what&apos;s covered, or jump straight in.
          </p>

          <div className="mt-10 space-y-10">
            {SEO_GRADES.map((grade) => {
              const accent = gradeAccent(grade.gradeId);
              return (
                <div key={grade.gradeSlug}>
                  <h3 className={`text-lg font-bold ${accent.text}`}>{grade.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {grade.subjects.map((subject) => (
                      <Link
                        key={subject.slug}
                        href={`/${grade.gradeSlug}/${subject.slug}`}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium ${accent.border} ${accent.soft} ${accent.text} hover:opacity-80`}
                      >
                        {subject.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
          PrepPals — interactive CAPS practice. ·{' '}
          <Link href="/privacy" className="underline hover:text-slate-700">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
