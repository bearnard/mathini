import type { SubjectConfig } from './types';
import emsGr8Term1 from './tasks/ems-gr8-term1.json';
import emsGr8Term2 from './tasks/ems-gr8-term2.json';
import emsGr8Term3 from './tasks/ems-gr8-term3.json';
import emsGr8Term4 from './tasks/ems-gr8-term4.json';

export const ems: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an Economic Management Sciences (EMS) teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Keep language accurate, age-appropriate and South African in spelling and context. Cover government, accounting, business, entrepreneurship, and banking concepts. Do not repeat items. '
    );
  },
  tasks: {
    ...emsGr8Term1.tasks,
    ...emsGr8Term2.tasks,
    ...emsGr8Term3.tasks,
    ...emsGr8Term4.tasks,
  },
};
