// Plain-data view of the curriculum tree for server-rendered SEO pages
// (sitemap, subject landing pages). Reads from a generated JSON snapshot
// rather than the live curriculum modules — see
// scripts/generate-seo-content.ts for why (the real modules transitively
// import client-only `next/dynamic(..., { ssr: false })` components, which
// Next's Server Component bundler refuses to trace).
import curriculumContent from './curriculum-content.generated.json';

interface RawTopic {
  title: string;
  description: string | null;
}
interface RawTerm {
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
  title: string;
  description?: string;
}

export interface SeoTerm {
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

export const SEO_GRADES: SeoGrade[] = RAW_GRADES.map((grade) => ({
  gradeId: grade.id,
  gradeSlug: `grade-${grade.id}`,
  title: grade.title,
  subjects: grade.subjects.map((subject) => ({
    subjectId: subject.id,
    title: subject.title,
    slug: slugify(subject.title),
    terms: subject.terms.map((term) => ({
      title: term.title,
      topics: term.topics.map((topic) => ({
        title: topic.title,
        description: topic.description ?? undefined,
      })),
    })),
  })),
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
