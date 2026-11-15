import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gradeAccent } from '../../lib/brand';
import { SEO_GRADES, findSeoGrade, subjectPath, practiseHref } from '../../lib/seo/curriculumIndex';
import { gradeMeta } from '../../lib/seo/pageMeta';
import { breadcrumbLd, gradeCrumbs } from '../../lib/seo/structuredData';
import { ctaPrimary } from '../../lib/seo/ctaStyles';
import { Breadcrumbs, PublicShell } from '../../components/seo/PublicShell';

export function generateStaticParams() {
  return SEO_GRADES.map((g) => ({ grade: g.gradeSlug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }): Promise<Metadata> {
  const g = findSeoGrade((await params).grade);
  return g ? gradeMeta(g) : {};
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const grade = findSeoGrade((await params).grade);
  if (!grade) notFound();
  const accent = gradeAccent(grade.gradeId);
  const topics = (s: (typeof grade.subjects)[number]) => s.terms.reduce((n, t) => n + t.topics.length, 0);
  return (
    <PublicShell jsonLd={breadcrumbLd(gradeCrumbs(grade))}>
      <Breadcrumbs crumbs={gradeCrumbs(grade)} />
      <div className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${accent.soft} ${accent.text}`}>{grade.title}</div>
      <h1 className="mt-3 text-4xl font-black text-slate-900">{grade.title} CAPS practice</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        {grade.subjects.length} subjects of CAPS-aligned practice with instant feedback, streaks and a leaderboard. Choose a subject to see every topic.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {grade.subjects.map((s) => (
          <li key={s.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="font-bold text-slate-800">
              <Link href={subjectPath(grade, s)} className="hover:underline">{s.title}</Link>
            </h2>
            <p className="mt-1 text-sm text-slate-600">{s.terms.length} {s.terms.length === 1 ? 'term' : 'terms'} · {topics(s)} {topics(s) === 1 ? 'topic' : 'topics'}</p>
            <Link href={practiseHref(grade, s)} className="mt-3 inline-block text-sm font-bold text-[#3285bc] hover:underline">Practise now</Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href="/app?start=register" className={ctaPrimary}>Get started, it&apos;s free</Link>
      </div>
    </PublicShell>
  );
}
