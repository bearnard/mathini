import type { SubjectConfig } from '../caps/types';
import caGr8Term1 from './tasks/ca-gr8-term1.json';
import caGr8Term2 from './tasks/ca-gr8-term2.json';
import caGr8Term3 from './tasks/ca-gr8-term3.json';
import caGr8Term4 from './tasks/ca-gr8-term4.json';

export const ca: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Creative Arts teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Balance visual arts, music, drama, and dance concepts with practical classroom context. Do not repeat items. '
    );
  },
  tasks: {
    ...caGr8Term1.tasks,
    ...caGr8Term2.tasks,
    ...caGr8Term3.tasks,
    ...caGr8Term4.tasks,
  },
};
