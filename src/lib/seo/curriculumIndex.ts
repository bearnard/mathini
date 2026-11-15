// Plain-data view of the curriculum tree for server-rendered SEO pages
// (sitemap, subject landing pages). Reads from a generated JSON snapshot
// rather than the live curriculum modules — see
// scripts/generate-seo-content.ts for why (the real modules transitively
// import client-only `next/dynamic(..., { ssr: false })` components, which
// Next's Server Component bundler refuses to trace).
import curriculumContent from './curriculum-content.generated.json';

interface RawTopic {
  id: string;
  title: string;
  description: string | null;
}
interface RawTerm {
  id: number;
  title: string;
  topics: RawTopic[];
}
interface RawSubject {
  id: string;
  title: string;
  terms: RawTerm[];
}
interface RawGrade {
  id: number;
  title: string;
  subjects: RawSubject[];
}

export interface SeoTopic {
  /** The app's topic id (what /app?topic= opens). */
  topicId: string;
  title: string;
  /** Unique within its subject; the last part of the public URL. */
  slug: string;
  /** True when another topic of the same subject has this title (another term): the page title then names the term. */
  repeatsInSubject: boolean;
  description?: string;
}

export interface SeoTerm {
  termId: number;
  title: string;
  topics: SeoTopic[];
}

export interface SeoSubject {
  subjectId: string;
  title: string;
  slug: string;
  terms: SeoTerm[];
}

export interface SeoGrade {
  gradeId: number;
  gradeSlug: string;
  title: string;
  subjects: SeoSubject[];
}

// Public URL slugs are derived from the human-readable subject title rather
// than `Subject.id`, since existing ids are inconsistent/abbreviated across
// grades (e.g. grade10's "it"/"ls"/"ml"/"ps" vs grade11/12's full slugs).
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const RAW_GRADES = curriculumContent as RawGrade[];

/**
 * Topic slugs are unique within a subject. A title that appears in more than one term (the language subjects repeat "Reading and Viewing" every
 * term) gets the term in its slug: "reading-and-viewing-term-2". A title repeated inside one term gets -2, -3.
 */
function topicSlugs(terms: RawTerm[]): Map<RawTopic, string> {
  const count = new Map<string, number>();
  for (const t of terms) for (const p of t.topics) count.set(slugify(p.title), (count.get(slugify(p.title)) ?? 0) + 1);
  const used = new Set<string>();
  const out = new Map<RawTopic, string>();
  for (const t of terms) {
    for (const p of t.topics) {
      const base = slugify(p.title) || 'topic';
      let slug = (count.get(base) ?? 0) > 1 ? `${base}-${slugify(t.title)}` : base;
      for (let n = 2; used.has(slug); n++) slug = `${base}-${slugify(t.title)}-${n}`;
      used.add(slug);
      out.set(p, slug);
    }
  }
  return out;
}

export const SEO_GRADES: SeoGrade[] = RAW_GRADES.map((grade) => ({
  gradeId: grade.id,
  gradeSlug: `grade-${grade.id}`,
  title: grade.title,
  subjects: grade.subjects.map((subject) => {
    const slugs = topicSlugs(subject.terms);
    const titleCount = new Map<string, number>();
    for (const t of subject.terms) for (const p of t.topics) titleCount.set(p.title, (titleCount.get(p.title) ?? 0) + 1);
    return {
      subjectId: subject.id,
      title: subject.title,
      slug: slugify(subject.title),
      terms: subject.terms.map((term) => ({
        termId: term.id,
        title: term.title,
        topics: term.topics.map((topic) => ({
          topicId: topic.id,
          title: topic.title,
          slug: slugs.get(topic)!,
          repeatsInSubject: (titleCount.get(topic.title) ?? 0) > 1,
          description: topic.description ?? undefined,
        })),
      })),
    };
  }),
}));

export function findSeoSubject(
  gradeSlug: string,
  subjectSlug: string,
): { grade: SeoGrade; subject: SeoSubject } | null {
  const grade = SEO_GRADES.find((g) => g.gradeSlug === gradeSlug);
  if (!grade) return null;
  const subject = grade.subjects.find((s) => s.slug === subjectSlug);
  if (!subject) return null;
  return { grade, subject };
}

export function findSeoGrade(gradeSlug: string): SeoGrade | null {
  return SEO_GRADES.find((g) => g.gradeSlug === gradeSlug) ?? null;
}

export interface SeoTopicHit {
  grade: SeoGrade;
  subject: SeoSubject;
  term: SeoTerm;
  topic: SeoTopic;
  /** The other topics of the same term, for "also in this term" links. */
  siblings: SeoTopic[];
}

export function findSeoTopic(gradeSlug: string, subjectSlug: string, topicSlug: string): SeoTopicHit | null {
  const found = findSeoSubject(gradeSlug, subjectSlug);
  if (!found) return null;
  for (const term of found.subject.terms) {
    const topic = term.topics.find((t) => t.slug === topicSlug);
    if (topic) return { ...found, term, topic, siblings: term.topics.filter((t) => t !== topic) };
  }
  return null;
}

/** Every public topic, flattened (for the sitemap and static generation). */
export function allSeoTopics(): { grade: SeoGrade; subject: SeoSubject; term: SeoTerm; topic: SeoTopic }[] {
  return SEO_GRADES.flatMap((grade) => grade.subjects.flatMap((subject) => subject.terms.flatMap((term) => term.topics.map((topic) => ({ grade, subject, term, topic })))));
}

export const gradePath = (g: SeoGrade) => `/${g.gradeSlug}`;
export const subjectPath = (g: SeoGrade, s: SeoSubject) => `/${g.gradeSlug}/${s.slug}`;
export const topicPath = (g: SeoGrade, s: SeoSubject, t: SeoTopic) => `/${g.gradeSlug}/${s.slug}/${t.slug}`;

/**
 * The "Practise now" link: the app opens this subject, or this topic in this term, once the learner is in (after sign-up, or at once for a
 * returning learner). A topic id can repeat across terms (the same Creative Arts topic sits in all four), so the term is part of the link.
 */
export const practiseHref = (g: SeoGrade, s: SeoSubject, term?: SeoTerm, t?: SeoTopic) =>
  `/app?start=register&grade=${g.gradeId}&subject=${encodeURIComponent(s.subjectId)}${term && t ? `&term=${term.termId}&topic=${encodeURIComponent(t.topicId)}` : ''}`;
