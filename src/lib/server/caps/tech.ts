import type { SubjectConfig } from '../caps/types';
import techGr8Term1 from './tasks/tech-gr8-term1.json';
import techGr8Term2 from './tasks/tech-gr8-term2.json';
import techGr8Term3 from './tasks/tech-gr8-term3.json';
import techGr8Term4 from './tasks/tech-gr8-term4.json';
import techGr9Term1 from './tasks/tech-gr9-term1.json';
import techGr9Term2 from './tasks/tech-gr9-term2.json';
import techGr9Term3 from './tasks/tech-gr9-term3.json';
import techGr9Term4 from './tasks/tech-gr9-term4.json';

export const tech: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Technology teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep the technology content accurate, practical, and age-appropriate with South African context. Do not repeat items. '
    );
  },
  tasks: {
    ...techGr8Term1.tasks,
    ...techGr8Term2.tasks,
    ...techGr8Term3.tasks,
    ...techGr8Term4.tasks,
    ...techGr9Term1.tasks,
    ...techGr9Term2.tasks,
    ...techGr9Term3.tasks,
    ...techGr9Term4.tasks,
  },
};
