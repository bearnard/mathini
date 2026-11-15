// Every public, indexable page of the site, with its sitemap priority. The sitemap and the seo test both read this one list, so a new kind
// of page cannot be added to one and forgotten in the other.
import { SEO_GRADES, allSeoTopics, gradePath, subjectPath, topicPath } from './curriculumIndex';

export interface PublicPath { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }

export function publicPaths(): PublicPath[] {
  return [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.2 },
    ...SEO_GRADES.map((g) => ({ path: gradePath(g), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...SEO_GRADES.flatMap((g) => g.subjects.map((s) => ({ path: subjectPath(g, s), changeFrequency: 'monthly' as const, priority: 0.7 }))),
    ...allSeoTopics().map(({ grade, subject, topic }) => ({ path: topicPath(grade, subject, topic), changeFrequency: 'monthly' as const, priority: 0.5 })),
  ];
}

/** Prefixes that must never be crawled or listed: the app itself, the APIs, the admin console and the private reviewer pages. */
export const PRIVATE_PREFIXES = ['/api/', '/app', '/admin', '/teacher-review'] as const;
