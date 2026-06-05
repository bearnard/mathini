import type { SubjectConfig } from '../caps/types';
import lsGr10Term1 from './tasks/ls-gr10-term1.json';
import lsGr10Term2 from './tasks/ls-gr10-term2.json';
import lsGr10Term3 from './tasks/ls-gr10-term3.json';
import lsGr10Term4 from './tasks/ls-gr10-term4.json';
import lsGr11Term1 from './tasks/ls-gr11-term1.json';
import lsGr11Term2 from './tasks/ls-gr11-term2.json';
import lsGr11Term3 from './tasks/ls-gr11-term3.json';
import lsGr11Term4 from './tasks/ls-gr11-term4.json';
import lsGr12Term1 from './tasks/ls-gr12-term1.json';
import lsGr12Term2 from './tasks/ls-gr12-term2.json';
import lsGr12Term3 from './tasks/ls-gr12-term3.json';
import lsGr12Term4 from './tasks/ls-gr12-term4.json';

export const ls: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Life Sciences teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a clear question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short friendly explanation. ' +
      'Cover cells, tissues, biodiversity, ecosystems, and evolution. Keep language scientifically accurate and South African. Do not repeat items.'
    );
  },
  tasks: {
    ...lsGr10Term1.tasks,
    ...lsGr10Term2.tasks,
    ...lsGr10Term3.tasks,
    ...lsGr10Term4.tasks,
    ...lsGr11Term1.tasks,
    ...lsGr11Term2.tasks,
    ...lsGr11Term3.tasks,
    ...lsGr11Term4.tasks,
    ...lsGr12Term1.tasks,
    ...lsGr12Term2.tasks,
    ...lsGr12Term3.tasks,
    ...lsGr12Term4.tasks,
  },
};
