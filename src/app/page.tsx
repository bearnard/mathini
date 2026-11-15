import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE_NAME } from '../lib/server/session';
import { SITE_DESCRIPTION } from '../lib/seo/site';
import { ctaOutline, ctaPrimary } from '../lib/seo/ctaStyles';
import { pageMeta } from '../lib/seo/pageMeta';
import { faqLd, homeLd } from '../lib/seo/structuredData';
import { HOME_FAQ } from '../lib/seo/homeFaq';
import { JsonLd } from '../components/seo/PublicShell';
import PublicAnalytics from '../components/analytics/PublicAnalytics';
import HomePaths from '../components/seo/HomePaths';
import Hero from '../components/landing/Hero';
import TryItDemo from '../components/landing/TryItDemo';
import HowItWorks from '../components/landing/HowItWorks';
import ProgressShowcase from '../components/landing/ProgressShowcase';
import GradeExplorer from '../components/landing/GradeExplorer';
import AudienceSamples from '../components/landing/AudienceSamples';
import Trust from '../components/landing/Trust';
import HomeFaq from '../components/landing/HomeFaq';

export const metadata: Metadata = {
  ...pageMeta({ title: 'PrepPals — CAPS Practice for Grades 5–12', description: SITE_DESCRIPTION, path: '/' }),
  title: { absolute: 'PrepPals — CAPS Practice for Grades 5–12' },
};

/**
 * The landing page (brief: audit/landing-brief.md). Server-rendered sections, in the order a visitor reads them: the promise, a try-it demo,
 * how it works, the progress a learner sees, the explorer of every grade and subject, who it is for, why to trust it, the questions people ask.
 * Sections 2 (TryItDemo), 5 (GradeExplorer) and the numbers in 7 (SiteStats, inside Trust) are separate components with their own owners.
 */
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
      <JsonLd data={[...homeLd(), faqLd(HOME_FAQ)]} />
      <PublicAnalytics />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
          <span className="text-lg font-black text-slate-800">PrepPals</span>
          <nav aria-label="Sign in" className="flex items-center gap-4 text-sm font-bold">
            <Link href="/for-parents" className="hidden text-slate-600 hover:underline sm:inline">Parents</Link>
            <Link href="/for-teachers" className="hidden text-slate-600 hover:underline sm:inline">Teachers</Link>
            <Link href="/app?start=resume" className="text-[#3285bc] hover:underline">I have a login code</Link>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TryItDemo />
        <HowItWorks />
        <ProgressShowcase />
        <div className="mx-auto max-w-5xl px-4 pt-16"><GradeExplorer /></div>
        <HomePaths />
        <AudienceSamples />
        <Trust />
        <HomeFaq />

        <section className="bg-[#3285bc] py-14 text-center text-white" aria-labelledby="final-h">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="final-h" className="text-3xl font-black">Ready to start?</h2>
            <p className="mt-2 text-lg text-white/90">Pick a topic and answer your first question in a minute. It is free.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/app?start=register" className={`${ctaPrimary} text-lg px-8 py-3`}>Start practising free</Link>
              <Link href="/app?start=resume" className={`${ctaOutline} text-lg px-8 py-3`}>I have a login code</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
          PrepPals — interactive CAPS practice. ·{' '}
          <Link href="/for-parents" className="underline hover:text-slate-700">For parents</Link> ·{' '}
          <Link href="/for-teachers" className="underline hover:text-slate-700">For teachers</Link> ·{' '}
          <Link href="/privacy" className="underline hover:text-slate-700">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
