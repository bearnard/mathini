import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gradeAccent } from '../../../../lib/brand';
import { allSeoTopics, findSeoTopic, gradePath, practiseHref, subjectPath, topicPath } from '../../../../lib/seo/curriculumIndex';
import { fitDescription, topicMeta } from '../../../../lib/seo/pageMeta';
import { breadcrumbLd, learningResourceLd, topicCrumbs } from '../../../../lib/seo/structuredData';
import { ctaOutline, ctaPrimary } from '../../../../lib/seo/ctaStyles';
import { Breadcrumbs, PublicShell } from '../../../../components/seo/PublicShell';
import AdSlot from '../../../../components/analytics/AdSlot';

interface PageParams { grade: string; subject: string; topic: string }

export function generateStaticParams(): PageParams[] {
  return allSeoTopics().map(({ grade, subject, topic }) => ({ grade: grade.gradeSlug, subject: subject.slug, topic: topic.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const p = await params;
  const hit = findSeoTopic(p.grade, p.subject, p.topic);
  return hit ? topicMeta(hit.grade, hit.subject, hit.term, hit.topic) : {};
}

export default async function TopicPage({ params }: { params: Promise<PageParams> }) {
  const p = await params;
  const hit = findSeoTopic(p.grade, p.subject, p.topic);
  if (!hit) notFound();
  const { grade, subject, term, topic, siblings } = hit;
  const accent = gradeAccent(grade.gradeId);
  const summary = fitDescription(`${topic.description ?? `${topic.title} in ${grade.title} ${subject.title}.`} Practise it with instant feedback.`);

  return (
    <PublicShell jsonLd={[breadcrumbLd(topicCrumbs(grade, subject, topic)), learningResourceLd(grade, subject, term, topic, summary)]}>
      <Breadcrumbs crumbs={topicCrumbs(grade, subject, topic)} />
      <div className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${accent.soft} ${accent.text}`}>
        {grade.title} · {term.title}
      </div>
      <h1 className="mt-3 text-4xl font-black text-slate-900">{topic.title}</h1>
      <p className="mt-2 text-slate-500">
        <Link href={subjectPath(grade, subject)} className="hover:underline">{grade.title} {subject.title}</Link>
      </p>
      {topic.description && <p className="mt-4 max-w-2xl text-lg text-slate-700">{topic.description}</p>}

      <div className="mt-6">
        <Link href={practiseHref(grade, subject, term, topic)} className={`${ctaPrimary} text-lg px-8 py-3`}>Practise now</Link>
      </div>

      <AdSlot placement="topic" />

      <section className="mt-12" aria-labelledby="scope">
        <h2 id="scope" className="text-xl font-bold text-slate-900">Where this fits in CAPS</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          {topic.title} is part of {grade.title} {subject.title}, {term.title}, in the CAPS (Curriculum and Assessment Policy Statement) practice on PrepPals.
          Each practice session gives you questions on the topic with instant feedback, and you keep a streak as you go. It is free.
        </p>
      </section>

      {siblings.length > 0 && (
        <section className="mt-10" aria-labelledby="also">
          <h2 id="also" className="text-xl font-bold text-slate-900">Also in {term.title}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={topicPath(grade, subject, s)} className="text-[#3285bc] hover:underline">{s.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-slate-600">New to PrepPals? It is free to start.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={practiseHref(grade, subject, term, topic)} className={ctaPrimary}>I&apos;m new here</Link>
          <Link href="/app?start=resume" className={ctaOutline}>I have a login code</Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          <Link href={gradePath(grade)} className="hover:underline">All {grade.title} subjects</Link>
        </p>
      </div>
    </PublicShell>
  );
}
