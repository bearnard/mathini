// "Practise now" links from the public pages open the app on a grade, subject and (optionally) topic: /app?start=register&grade=6&subject=math&term=1&topic=g6-large-numbers.
// The public pages are written from the same curriculum ids (src/lib/seo/curriculumIndex.ts), so a link resolves to exactly that topic.
import type { Curriculum, Grade, Subject, Term, Topic } from '../../types/curriculum';

export interface DeepLink { grade: Grade; subject: Subject; term: Term | null; topic: Topic | null }

/** Grade 7 subject ids retired in the Wave B restructure -> the subject that took over most of their lessons. */
const LEGACY_G7_SUBJECTS: Record<string, string> = { nst: 'ns', lsk: 'lo' };

export function resolveDeepLink(curriculum: Curriculum, params: URLSearchParams): DeepLink | null {
  const gradeId = Number(params.get('grade'));
  const subjectId = params.get('subject');
  if (!Number.isInteger(gradeId) || !subjectId) return null;
  const grade = curriculum.grades.find((g) => g.id === gradeId);
  const topicId = params.get('topic');
  const termId = params.get('term');
  let subject = grade?.subjects.find((s) => s.id === subjectId);
  // Grade 7 "nst" and "lsk" were split into several subjects: an old link finds the subject that now holds its topic, else the first half.
  if (grade && !subject && gradeId === 7 && LEGACY_G7_SUBJECTS[subjectId]) {
    const now = topicId ? grade.subjects.find((s) => s.terms.some((t) => t.topics.some((p) => p.id === topicId))) : undefined;
    subject = now ?? grade.subjects.find((s) => s.id === LEGACY_G7_SUBJECTS[subjectId]);
  }
  if (!grade || !subject) return null;
  if (topicId) {
    for (const term of subject.terms) {
      if (termId !== null && String(term.id) !== termId) continue;
      const topic = term.topics.find((t) => t.id === topicId);
      if (topic) return { grade, subject, term, topic };
    }
  }
  return { grade, subject, term: null, topic: null };
}
