import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gradeAccent } from '../../../lib/brand';
import { SEO_GRADES, findSeoSubject } from '../../../lib/seo/curriculumIndex';
import { ctaOutline, ctaPrimary, ctaPrimarySmall } from '../../../lib/seo/ctaStyles';

interface PageParams {
  grade: string;
  subject: string;
}

export function generateStaticParams(): PageParams[] {
  return SEO_GRADES.flatMap((grade) =>
    grade.subjects.map((subject) => ({ grade: grade.gradeSlug, subject: subject.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const found = findSeoSubject(gradeSlug, subjectSlug);
  if (!found) return {};

  const { grade, subject } = found;
  const topicCount = subject.terms.reduce((n, t) => n + t.topics.length, 0);

  return {
    title: `${grade.title} ${subject.title} Practice`,
    description: `Free ${grade.title} ${subject.title} practice covering ${subject.terms.length} terms and ${topicCount} topics, with instant feedback and progress tracking.`,
  };
}

export default async function SubjectLandingPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { grade: gradeSlug, subject: subjectSlug } = await params;
  const found = findSeoSubject(gradeSlug, subjectSlug);
  if (!found) notFound();

  const { grade, subject } = found;
  const accent = gradeAccent(grade.gradeId);
  const topicCount = subject.terms.reduce((n, t) => n + t.topics.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-black text-slate-800">
            PrepPals
          </Link>
          <Link href="/app?start=register" className={ctaPrimarySmall}>
            Start free
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{grade.title}</span>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{subject.title}</span>
        </nav>

        <div className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${accent.soft} ${accent.text}`}>
          {grade.title}
        </div>
        <h1 className="mt-3 text-4xl font-black text-slate-900">{subject.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          CAPS-aligned {subject.title} practice for {grade.title} — {subject.terms.length} terms,{' '}
          {topicCount} topics, with instant feedback, streaks and a leaderboard.
        </p>

        <div className="mt-6">
          <Link href="/app?start=register" className={`${ctaPrimary} text-lg px-8 py-3`}>
            Start practicing {subject.title}
          </Link>
        </div>

        <div className="mt-12 space-y-10">
          {subject.terms.map((term) => (
            <section key={term.title}>
              <h2 className={`text-xl font-bold ${accent.text}`}>{term.title}</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {term.topics.map((topic) => (
                  <li
                    key={topic.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <h3 className="font-bold text-slate-800">{topic.title}</h3>
                    {topic.description && (
                      <p className="mt-1 text-sm text-slate-600">{topic.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-slate-600">Ready to start practicing {subject.title}?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/app?start=register" className={ctaPrimary}>
              I&apos;m new here
            </Link>
            <Link href="/app?start=resume" className={ctaOutline}>
              I have a login code
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
