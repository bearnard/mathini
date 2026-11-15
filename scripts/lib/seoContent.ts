// The plain-data snapshot of the curriculum tree that the public SEO pages read (see scripts/generate-seo-content.ts for why it is a snapshot).
// Shared by the generator and by src/lib/seo/seo.test.ts, which fails when the committed JSON is out of date.
import { grade5 } from '../../src/curriculum/grade5';
import { grade6 } from '../../src/curriculum/grade6';
import { grade7 } from '../../src/curriculum/grade7';
import { grade8 } from '../../src/curriculum/grade8';
import { grade9 } from '../../src/curriculum/grade9';
import { grade10 } from '../../src/curriculum/grade10';
import { grade11 } from '../../src/curriculum/grade11';
import { grade12 } from '../../src/curriculum/grade12';
import type { Grade } from '../../src/types/curriculum';

const ALL_GRADES: Grade[] = [grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12];

export const buildSeoContent = () =>
  ALL_GRADES.map((grade) => ({
    id: grade.id,
    title: grade.title,
    subjects: grade.subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      terms: subject.terms.map((term) => ({
        id: term.id,
        title: term.title,
        topics: term.topics.map((topic) => ({
          id: topic.id,
          title: topic.title,
          description: topic.description ?? null,
        })),
      })),
    })),
  }));
