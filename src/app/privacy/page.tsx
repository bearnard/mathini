import type { Metadata } from 'next';
import Link from 'next/link';
import { PRIVACY_SECTIONS } from '../../lib/privacyNotice';
import { pageMeta } from '../../lib/seo/pageMeta';
import { breadcrumbLd, homeCrumb } from '../../lib/seo/structuredData';
import { JsonLd } from '../../components/seo/PublicShell';

export const metadata: Metadata = pageMeta({ title: 'Privacy', description: 'What PrepPals collects, why, and who can see it.', path: '/privacy' });

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <JsonLd data={breadcrumbLd([homeCrumb, { name: 'Privacy', path: '/privacy' }])} />
      <Link href="/" className="text-sm font-bold text-[#3285bc] hover:underline">
        ← Back to PrepPals
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-800">Privacy</h1>
      <p className="mt-2 text-slate-600">A short, plain-language summary of how PrepPals uses information.</p>
      {PRIVACY_SECTIONS.map((s) => (
        <section key={s.heading} className="mt-8">
          <h2 className="text-xl font-bold text-slate-800">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-2 text-slate-700">
              {p}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
