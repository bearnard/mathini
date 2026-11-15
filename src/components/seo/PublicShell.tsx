import Link from 'next/link';
import type { ReactNode } from 'react';
import { ctaPrimarySmall } from '../../lib/seo/ctaStyles';
import { jsonLdText, type Crumb } from '../../lib/seo/structuredData';
import PublicAnalytics from '../analytics/PublicAnalytics';

/** Structured data for a public page: one <script type="application/ld+json"> per object. */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  return (
    <>
      {(Array.isArray(data) ? data : [data]).map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(d) }} />
      ))}
    </>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-x-2">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === crumbs.length - 1 ? <span aria-current="page" className="text-slate-700">{c.name}</span> : <Link href={c.path} className="hover:underline">{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The frame every public landing page shares: header, main column, footer. No learner data, nothing client-side. */
export function PublicShell({ children, jsonLd }: { children: ReactNode; jsonLd?: unknown | unknown[] }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <PublicAnalytics />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-black text-slate-800">PrepPals</Link>
          <Link href="/app?start=register" className={ctaPrimarySmall}>Start free</Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-500">
          PrepPals — interactive CAPS practice. ·{' '}
          <Link href="/for-parents" className="underline hover:text-slate-700">For parents</Link> ·{' '}
          <Link href="/for-teachers" className="underline hover:text-slate-700">For teachers</Link> ·{' '}
          <Link href="/privacy" className="underline hover:text-slate-700">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
