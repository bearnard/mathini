import type { SubjectConfig } from '../caps/types';
import psGr10Term1 from './tasks/ps-gr10-term1.json';
import psGr10Term2 from './tasks/ps-gr10-term2.json';
import psGr10Term3 from './tasks/ps-gr10-term3.json';
import psGr10Term4 from './tasks/ps-gr10-term4.json';
import psGr11Term1 from './tasks/ps-gr11-term1.json';
import psGr11Term2 from './tasks/ps-gr11-term2.json';
import psGr11Term3 from './tasks/ps-gr11-term3.json';
import psGr11Term4 from './tasks/ps-gr11-term4.json';
import psGr12Term1 from './tasks/ps-gr12-term1.json';
import psGr12Term2 from './tasks/ps-gr12-term2.json';
import psGr12Term3 from './tasks/ps-gr12-term3.json';
import psGr12Term4 from './tasks/ps-gr12-term4.json';

export const ps: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Physical Sciences teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a clear question covering physics or chemistry concepts, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short friendly explanation. ' +
      'Cover mechanics, waves, electricity, matter, chemical change and stoichiometry. Use South African context. Do not repeat items. ' +
      'IMPORTANT: Wrap every mathematical or scientific expression in single dollar signs, e.g. $v = u + at$, $F = ma$, $E_k = \\frac{1}{2}mv^2$. This applies to prompts, options, answers and explanations.'
    );
  },
  tasks: {
    ...psGr10Term1.tasks,
    ...psGr10Term2.tasks,
    ...psGr10Term3.tasks,
    ...psGr10Term4.tasks,
    ...psGr11Term1.tasks,
    ...psGr11Term2.tasks,
    ...psGr11Term3.tasks,
    ...psGr11Term4.tasks,
    ...psGr12Term1.tasks,
    ...psGr12Term2.tasks,
    ...psGr12Term3.tasks,
    ...psGr12Term4.tasks,
  },
};
