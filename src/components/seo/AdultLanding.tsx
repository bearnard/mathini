import Link from 'next/link';
import { ctaOutline, ctaPrimary } from '../../lib/seo/ctaStyles';
import type { AdultPage } from '../../lib/seo/adultPages';
import { adultPageLd, breadcrumbLd, homeCrumb } from '../../lib/seo/structuredData';
import { Breadcrumbs, PublicShell } from './PublicShell';

/** The shared layout of /for-parents and /for-teachers. All words come from src/lib/seo/adultPages.ts. */
export default function AdultLanding({ page, other }: { page: AdultPage; other: { href: string; label: string } }) {
  const crumbs = [homeCrumb, { name: page.h1, path: page.path }];
  return (
    <PublicShell jsonLd={[breadcrumbLd(crumbs), ...adultPageLd(page)]}>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="text-4xl font-black text-slate-900">{page.h1}</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">{page.intro}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={page.cta.href} className={`${ctaPrimary} text-lg px-8 py-3`}>{page.cta.label}</Link>
        <Link href="/privacy" className={ctaOutline}>Read the privacy notice</Link>
      </div>

      <section className="mt-12" aria-labelledby="gets">
        <h2 id="gets" className="text-2xl font-black text-slate-900">What you get</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {page.gets.map((g) => (
            <li key={g.heading} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-bold text-slate-800">{g.heading}</h3>
              <p className="mt-1 text-slate-600">{g.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="start">
        <h2 id="start" className="text-2xl font-black text-slate-900">How to start</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
          {page.steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="privacy">
        <h2 id="privacy" className="text-2xl font-black text-slate-900">Your privacy, and your learners’</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          {page.privacy.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <p className="mt-3 text-sm text-slate-500">
          PrepPals follows the Protection of Personal Information Act (POPIA). The full notice is on the <Link href="/privacy" className="underline">privacy page</Link>.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="faq">
        <h2 id="faq" className="text-2xl font-black text-slate-900">Questions</h2>
        <dl className="mt-4 space-y-5">
          {page.faq.map((f) => (
            <div key={f.q}>
              <dt className="font-bold text-slate-800">{f.q}</dt>
              <dd className="mt-1 text-slate-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <Link href={page.cta.href} className={ctaPrimary}>{page.cta.label}</Link>
        <p className="mt-4 text-sm text-slate-500">
          <Link href={other.href} className="hover:underline">{other.label}</Link> · <Link href="/" className="hover:underline">Back to PrepPals</Link>
        </p>
      </div>
    </PublicShell>
  );
}
