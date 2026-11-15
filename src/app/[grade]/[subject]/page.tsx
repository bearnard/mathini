import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gradeAccent } from '../../../lib/brand';
import { SEO_GRADES, findSeoSubject, topicPath, practiseHref } from '../../../lib/seo/curriculumIndex';
import { subjectMeta } from '../../../lib/seo/pageMeta';
import { breadcrumbLd, courseLd, subjectCrumbs } from '../../../lib/seo/structuredData';
import { ctaOutline, ctaPrimary } from '../../../lib/seo/ctaStyles';
import { Breadcrumbs, PublicShell } from '../../../components/seo/PublicShell';

interface PageParams {
  grade: string;
  subject: string;
}

export function generateStaticParams(): PageParams[] {
  return SEO_GRADES.flatMap((grade) => grade.subjects.map((subject) => ({ grade: grade.gradeSlug, subject: subject.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const found = findSeoSubject(gradeSlug, subjectSlug);
  return found ? subjectMeta(found.grade, found.subject) : {};
}

export default async function SubjectLandingPage({ params }: { params: Promise<PageParams> }) {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const found = findSeoSubject(gradeSlug, subjectSlug);
  if (!found) notFound();

  const { grade, subject } = found;
  const accent = gradeAccent(grade.gradeId);
  const topicCount = subject.terms.reduce((n, t) => n + t.topics.length, 0);
  const intro = `CAPS-aligned ${subject.title} practice for ${grade.title}: ${subject.terms.length} ${subject.terms.length === 1 ? 'term' : 'terms'}, ${topicCount} ${topicCount === 1 ? 'topic' : 'topics'}, with instant feedback, streaks and a leaderboard.`;

  return (
    <PublicShell jsonLd={[breadcrumbLd(subjectCrumbs(grade, subject)), courseLd(grade, subject, intro)]}>
      <Breadcrumbs crumbs={subjectCrumbs(grade, subject)} />
      <div className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${accent.soft} ${accent.text}`}>{grade.title}</div>
      <h1 className="mt-3 text-4xl font-black text-slate-900">{subject.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">{intro}</p>

      <div className="mt-6">
        <Link href={practiseHref(grade, subject)} className={`${ctaPrimary} text-lg px-8 py-3`}>
          Start practising {subject.title}
        </Link>
      </div>

      <div className="mt-12 space-y-10">
        {subject.terms.map((term) => (
          <section key={term.termId + term.title}>
            <h2 className={`text-xl font-bold ${accent.text}`}>{term.title}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {term.topics.map((topic) => (
                <li key={topic.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="font-bold text-slate-800">
                    <Link href={topicPath(grade, subject, topic)} className="hover:underline">{topic.title}</Link>
                  </h3>
                  {topic.description && <p className="mt-1 text-sm text-slate-600">{topic.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-slate-600">Ready to start practising {subject.title}?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={practiseHref(grade, subject)} className={ctaPrimary}>I&apos;m new here</Link>
          <Link href="/app?start=resume" className={ctaOutline}>I have a login code</Link>
        </div>
      </div>
    </PublicShell>
  );
}
