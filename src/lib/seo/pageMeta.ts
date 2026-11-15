// Per-page metadata for the public pages: title, description, canonical URL, Open Graph and Twitter, built in one place so every
// public page has the same set (src/lib/seo/seo.test.ts checks them all).
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './site';
import { gradePath, subjectPath, topicPath, type SeoGrade, type SeoSubject, type SeoTerm, type SeoTopic } from './curriculumIndex';

export const MAX_DESCRIPTION = 160;

/** At most 160 characters, cut at a word end with an ellipsis when needed (search results cut longer text anyway). */
export function fitDescription(text: string, max = MAX_DESCRIPTION): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 20)).replace(/[\s,;:.-]+$/, '')}…`;
}

/** The site-wide card from src/app/opengraph-image.tsx. A page that sets its own openGraph or twitter replaces the inherited one, images included, so it is named here. */
const CARD = { url: '/opengraph-image', width: 1200, height: 630, alt: 'PrepPals: CAPS practice for Grades 5 to 12' };

export interface PageMetaInput { title: string; description: string; path: string }

/** `title` is the bare page title: the layout template adds " | PrepPals". */
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  const d = fitDescription(description);
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description: d,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: `${SITE_URL}${path}`, siteName: SITE_NAME, locale: 'en_ZA', title: full, description: d, images: [CARD] },
    twitter: { card: 'summary_large_image', title: full, description: d, images: [CARD.url] },
  };
}

export const gradeMeta = (g: SeoGrade): Metadata =>
  pageMeta({
    title: `${g.title} CAPS Practice`,
    description: `Free ${g.title} CAPS practice: ${g.subjects.map((s) => s.title).join(', ')}. Pick a subject to see every topic, with instant feedback on each question.`,
    path: gradePath(g),
  });

export const subjectMeta = (g: SeoGrade, s: SeoSubject): Metadata => {
  const topics = s.terms.reduce((n, t) => n + t.topics.length, 0);
  return pageMeta({
    title: `${g.title} ${s.title} Practice`,
    description: `Free ${g.title} ${s.title} practice covering ${s.terms.length} ${s.terms.length === 1 ? 'term' : 'terms'} and ${topics} ${topics === 1 ? 'topic' : 'topics'}, with instant feedback and progress tracking.`,
    path: subjectPath(g, s),
  });
};

/** "Topic: Grade 8 Subject" (plus the term when the title repeats), shortened to about 70 characters so a search result does not cut it. */
export function topicTitle(g: SeoGrade, s: SeoSubject, term: SeoTerm, t: SeoTopic, max = 70): string {
  const tail = t.repeatsInSubject ? `, ${term.title}` : '';
  for (const full of [`${t.title}: ${g.title} ${s.title}${tail}`, `${t.title}: ${g.title}${tail}`, `${t.title} (${g.title}${tail})`]) if (full.length <= max) return full;
  const suffix = ` (${g.title}${tail})`;
  return `${t.title.slice(0, Math.max(10, max - suffix.length - 1)).trimEnd()}…${suffix}`;
}

export const topicMeta = (g: SeoGrade, s: SeoSubject, term: SeoTerm, t: SeoTopic): Metadata =>
  pageMeta({
    title: topicTitle(g, s, term, t),
    description: `${t.description ? `${t.description} ` : ''}Practise ${t.title} (${g.title} ${s.title}, ${term.title}) with instant feedback. Free, CAPS-aligned.`,
    path: topicPath(g, s, t),
  });
