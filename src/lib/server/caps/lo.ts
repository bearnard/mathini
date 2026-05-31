import type { SubjectConfig } from '../caps/types';
import loGr8Term1 from './tasks/lo-gr8-term1.json';
import loGr8Term2 from './tasks/lo-gr8-term2.json';
import loGr8Term3 from './tasks/lo-gr8-term3.json';
import loGr8Term4 from './tasks/lo-gr8-term4.json';

export const lo: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Life Orientation teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Keep language age-appropriate, values-based, and grounded in South African school and community contexts. Do not repeat items. '
    );
  },
  tasks: {
    ...loGr8Term1.tasks,
    ...loGr8Term2.tasks,
    ...loGr8Term3.tasks,
    ...loGr8Term4.tasks,
  },
};
