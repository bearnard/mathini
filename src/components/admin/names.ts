// Readable names for the dashboard: topic and subject titles come from the curriculum registry
// (via the generated lookup), and fall back to a prettified slug only when a slug is not found.

import { SUBJECT_TITLES, TOPIC_NAMES } from './topicNames.generated';

/** "gr7-whole-numbers-t1" -> "Whole numbers" (fallback only). */
export function prettifySlug(slug: string | null | undefined): string {
  if (!slug) return 'Unknown topic';
  const base = slug.replace(/^gr\d+-/, '').replace(/-t\d+$/, '').replace(/-/g, ' ').trim();
  return base ? base[0].toUpperCase() + base.slice(1) : slug;
}

export interface TopicInfo {
  /** e.g. "Earth & Moon Movement" */
  title: string;
  /** e.g. "Natural Sciences & Technology"; null when the topic is not in the registry */
  subject: string | null;
  /** true when the name came from the registry, false when it is a prettified slug */
  known: boolean;
}

/** Looks a task slug up for a grade; without a grade, the first grade that has it. */
export function topicInfo(grade: number | null | undefined, slug: string | null | undefined): TopicInfo {
  if (slug) {
    let hit: [string, string] | undefined;
    if (grade) hit = TOPIC_NAMES[`${grade}|${slug}`];
    if (!hit && !grade) hit = Object.entries(TOPIC_NAMES).find(([k]) => k.endsWith(`|${slug}`))?.[1];
    if (hit) return { title: hit[0], subject: hit[1], known: true };
  }
  return { title: prettifySlug(slug), subject: null, known: false };
}

/** Event/attempt subject code -> subject title, using the grade when known. "grade6" is Grade 6 Mathematics. */
export function subjectTitle(code: string | null | undefined, grade?: number | null): string {
  if (!code) return 'Unknown subject';
  if (grade && SUBJECT_TITLES[`${grade}|${code}`]) return SUBJECT_TITLES[`${grade}|${code}`];
  const any = Object.entries(SUBJECT_TITLES).find(([k]) => k.endsWith(`|${code}`));
  return any ? any[1] : code;
}

/**
 * Label for the subject filter. A code that only exists for one grade ("grade6") says so, because
 * the filter has no grade context and two codes can share a title ("grade6" and "math" are both Mathematics).
 */
export function subjectFilterLabel(code: string): string {
  if (code === 'grade6') return 'Mathematics (Grade 6)';
  return subjectTitle(code);
}

/** One line for a topic row: "<subject> · Grade N", using the registry subject when the topic is known. */
export function topicSubline(grade: number | null | undefined, slug: string | null | undefined, subjectCode: string | null | undefined): string {
  const info = topicInfo(grade, slug);
  const subject = info.subject ?? subjectTitle(subjectCode, grade);
  return `${subject}${grade ? ` · Grade ${grade}` : ''}`;
}

/** "1 learner", "2 learners". Pass the plural form for irregular words. */
export function plural(n: number, singular: string, pluralForm: string = `${singular}s`): string {
  return `${new Intl.NumberFormat('en-ZA').format(Math.round(n))} ${n === 1 ? singular : pluralForm}`;
}
