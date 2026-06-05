import type { SubjectConfig } from '../caps/types';
import itGr10Term1 from './tasks/it-gr10-term1.json';
import itGr10Term2 from './tasks/it-gr10-term2.json';
import itGr10Term3 from './tasks/it-gr10-term3.json';
import itGr10Term4 from './tasks/it-gr10-term4.json';
import itGr11Term1 from './tasks/it-gr11-term1.json';
import itGr11Term2 from './tasks/it-gr11-term2.json';
import itGr11Term3 from './tasks/it-gr11-term3.json';
import itGr11Term4 from './tasks/it-gr11-term4.json';
import itGr12Term1 from './tasks/it-gr12-term1.json';
import itGr12Term2 from './tasks/it-gr12-term2.json';
import itGr12Term3 from './tasks/it-gr12-term3.json';
import itGr12Term4 from './tasks/it-gr12-term4.json';

export const it: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an Information Technology teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a clear question about IT concepts, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short friendly explanation. ' +
      'Cover programming (Delphi/Python), data handling, networks, and social implications. Use South African context. Do not repeat items.'
    );
  },
  tasks: {
    ...itGr10Term1.tasks,
    ...itGr10Term2.tasks,
    ...itGr10Term3.tasks,
    ...itGr10Term4.tasks,
    ...itGr11Term1.tasks,
    ...itGr11Term2.tasks,
    ...itGr11Term3.tasks,
    ...itGr11Term4.tasks,
    ...itGr12Term1.tasks,
    ...itGr12Term2.tasks,
    ...itGr12Term3.tasks,
    ...itGr12Term4.tasks,
  },
};
