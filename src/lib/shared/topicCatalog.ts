// The topics a teacher can put in an exam scope, from the generated registry names (the same data the admin screens use). Pure lookups.
import { SUBJECT_TITLES, TOPIC_NAMES } from '../../components/admin/topicNames.generated';

export interface CatalogTopic { task: string; label: string }
export interface CatalogSubject { code: string; title: string }

/** The subject title for a grade and attempts.subject code, or null. */
export const subjectTitleOf = (grade: number, code: string): string | null => SUBJECT_TITLES[`${grade}|${code}`] ?? null;

/** Subjects of a grade that have at least one topic, one entry per title (the first code wins), in title order. */
export function subjectsForGrade(grade: number): CatalogSubject[] {
  const withTopics = new Set(Object.entries(TOPIC_NAMES).filter(([k]) => k.startsWith(`${grade}|`)).map(([, v]) => v[1]));
  const seen = new Set<string>();
  const out: CatalogSubject[] = [];
  for (const [k, title] of Object.entries(SUBJECT_TITLES)) {
    if (!k.startsWith(`${grade}|`) || !withTopics.has(title) || seen.has(title)) continue;
    seen.add(title);
    out.push({ code: k.slice(k.indexOf('|') + 1), title });
  }
  return out.sort((a, b) => a.title.localeCompare(b.title));
}

/** Topics of a grade and subject, in curriculum (registry) order. Empty for an unknown subject. */
export function topicsFor(grade: number, subjectCode: string): CatalogTopic[] {
  const title = subjectTitleOf(grade, subjectCode);
  if (!title) return [];
  const out: CatalogTopic[] = [];
  for (const [key, [label, subject]] of Object.entries(TOPIC_NAMES)) {
    if (subject !== title || !key.startsWith(`${grade}|`)) continue;
    out.push({ task: key.slice(key.indexOf('|') + 1), label });
  }
  return out;
}
