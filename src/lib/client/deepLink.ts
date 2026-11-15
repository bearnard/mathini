// "Practise now" links from the public pages open the app on a grade, subject and (optionally) topic: /app?start=register&grade=6&subject=math&term=1&topic=g6-large-numbers.
// The public pages are written from the same curriculum ids (src/lib/seo/curriculumIndex.ts), so a link resolves to exactly that topic.
import type { Curriculum, Grade, Subject, Term, Topic } from '../../types/curriculum';

export interface DeepLink { grade: Grade; subject: Subject; term: Term | null; topic: Topic | null }

export function resolveDeepLink(curriculum: Curriculum, params: URLSearchParams): DeepLink | null {
  const gradeId = Number(params.get('grade'));
  const subjectId = params.get('subject');
  if (!Number.isInteger(gradeId) || !subjectId) return null;
  const grade = curriculum.grades.find((g) => g.id === gradeId);
  const subject = grade?.subjects.find((s) => s.id === subjectId);
  if (!grade || !subject) return null;
  const topicId = params.get('topic');
  const termId = params.get('term');
  if (topicId) {
    for (const term of subject.terms) {
      if (termId !== null && String(term.id) !== termId) continue;
      const topic = term.topics.find((t) => t.id === topicId);
      if (topic) return { grade, subject, term, topic };
    }
  }
  return { grade, subject, term: null, topic: null };
}
