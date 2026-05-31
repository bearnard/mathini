import type { SubjectConfig } from '../caps/types';
import mathGr7Term1 from './tasks/math-gr7-term1.json';
import mathGr7Term2 from './tasks/math-gr7-term2.json';
import mathGr7Term3 from './tasks/math-gr7-term3.json';
import mathGr7Term4 from './tasks/math-gr7-term4.json';
import mathGr8Term1 from './tasks/math-gr8-term1.json';
import mathGr8Term2 from './tasks/math-gr8-term2.json';
import mathGr8Term3 from './tasks/math-gr8-term3.json';
import mathGr8Term4 from './tasks/math-gr8-term4.json';
import mathGr9Term1 from './tasks/math-gr9-term1.json';
import mathGr9Term2 from './tasks/math-gr9-term2.json';
import mathGr9Term3 from './tasks/math-gr9-term3.json';
import mathGr9Term4 from './tasks/math-gr9-term4.json';

export const math: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Mathematics teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Keep language accurate, age-appropriate and South African in spelling and context. Do not repeat items. '
    );
  },
  tasks: {
    ...mathGr7Term1.tasks,
    ...mathGr7Term2.tasks,
    ...mathGr7Term3.tasks,
    ...mathGr7Term4.tasks,
    ...mathGr8Term1.tasks,
    ...mathGr8Term2.tasks,
    ...mathGr8Term3.tasks,
    ...mathGr8Term4.tasks,
    ...mathGr9Term1.tasks,
    ...mathGr9Term2.tasks,
    ...mathGr9Term3.tasks,
    ...mathGr9Term4.tasks,
  },
};
