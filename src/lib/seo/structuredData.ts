// JSON-LD (schema.org) for the public pages: BreadcrumbList on every page, Course on a subject page, LearningResource on a topic page,
// Organization + WebSite on the home page. Plain objects, so a test can check their shape. No learner data goes in any of it.
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site';
import { gradePath, subjectPath, topicPath, type SeoGrade, type SeoSubject, type SeoTerm, type SeoTopic } from './curriculumIndex';

const abs = (path: string) => `${SITE_URL}${path}`;
const CONTEXT = 'https://schema.org';

const provider = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL };

export interface Crumb { name: string; path: string }

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export const homeCrumb: Crumb = { name: 'Home', path: '/' };
export const gradeCrumbs = (g: SeoGrade): Crumb[] => [homeCrumb, { name: g.title, path: gradePath(g) }];
export const subjectCrumbs = (g: SeoGrade, s: SeoSubject): Crumb[] => [...gradeCrumbs(g), { name: s.title, path: subjectPath(g, s) }];
export const topicCrumbs = (g: SeoGrade, s: SeoSubject, t: SeoTopic): Crumb[] => [...subjectCrumbs(g, s), { name: t.title, path: topicPath(g, s, t) }];

const capsAlignment = (g: SeoGrade, s: SeoSubject) => ({
  '@type': 'AlignmentObject',
  alignmentType: 'educationalSubject',
  educationalFramework: 'CAPS (South African Curriculum and Assessment Policy Statement)',
  targetName: `${g.title} ${s.title}`,
});

export function courseLd(g: SeoGrade, s: SeoSubject, description: string) {
  return {
    '@context': CONTEXT,
    '@type': 'Course',
    '@id': `${abs(subjectPath(g, s))}#course`,
    name: `${g.title} ${s.title} practice`,
    description,
    url: abs(subjectPath(g, s)),
    provider,
    educationalLevel: g.title,
    educationalAlignment: capsAlignment(g, s),
    isAccessibleForFree: true,
    hasPart: s.terms.flatMap((t) => t.topics.map((p) => ({ '@type': 'LearningResource', name: p.title, url: abs(topicPath(g, s, p)) }))),
  };
}

export function learningResourceLd(g: SeoGrade, s: SeoSubject, term: SeoTerm, t: SeoTopic, description: string) {
  return {
    '@context': CONTEXT,
    '@type': 'LearningResource',
    '@id': `${abs(topicPath(g, s, t))}#practice`,
    name: `${t.title}: ${g.title} ${s.title} practice`,
    description,
    url: abs(topicPath(g, s, t)),
    learningResourceType: 'practice exercise',
    interactivityType: 'active',
    teaches: t.title,
    educationalLevel: g.title,
    educationalAlignment: capsAlignment(g, s),
    isPartOf: { '@type': 'Course', '@id': `${abs(subjectPath(g, s))}#course`, name: `${g.title} ${s.title} practice`, url: abs(subjectPath(g, s)) },
    provider,
    isAccessibleForFree: true,
    keywords: [g.title, s.title, term.title, t.title, 'CAPS'].join(', '),
  };
}

export function homeLd() {
  return [
    { '@context': CONTEXT, '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: abs('/icon.png'), description: SITE_DESCRIPTION },
    { '@context': CONTEXT, '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, description: SITE_DESCRIPTION, inLanguage: 'en-ZA' },
  ];
}

/** The text of a <script type="application/ld+json">. "<" is escaped so no field can close the script tag. */
export const jsonLdText = (data: unknown): string => JSON.stringify(data).replace(/</g, '\\u003c');
