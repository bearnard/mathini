import type { SubjectConfig } from './types';
import nsGr8Term1 from './tasks/ns-gr8-term1.json';
import nsGr8Term2 from './tasks/ns-gr8-term2.json';
import nsGr8Term3 from './tasks/ns-gr8-term3.json';
import nsGr8Term4 from './tasks/ns-gr8-term4.json';

export const ns: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Natural Sciences teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep the science factually correct and age-appropriate. Use South African / SI units and spelling. Do not repeat items. '
    );
  },
  tasks: {
    ...nsGr8Term1.tasks,
    ...nsGr8Term2.tasks,
    ...nsGr8Term3.tasks,
    ...nsGr8Term4.tasks,
  },
};
