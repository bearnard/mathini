import type { SubjectConfig } from '../caps/types';
import mlGr10Term1 from './tasks/ml-gr10-term1.json';
import mlGr10Term2 from './tasks/ml-gr10-term2.json';
import mlGr10Term3 from './tasks/ml-gr10-term3.json';
import mlGr10Term4 from './tasks/ml-gr10-term4.json';
import mlGr11Term1 from './tasks/ml-gr11-term1.json';
import mlGr11Term2 from './tasks/ml-gr11-term2.json';
import mlGr11Term3 from './tasks/ml-gr11-term3.json';
import mlGr11Term4 from './tasks/ml-gr11-term4.json';
import mlGr12Term1 from './tasks/ml-gr12-term1.json';
import mlGr12Term2 from './tasks/ml-gr12-term2.json';
import mlGr12Term3 from './tasks/ml-gr12-term3.json';
import mlGr12Term4 from './tasks/ml-gr12-term4.json';

export const ml: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Mathematical Literacy teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a practical real-world question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short friendly explanation. ' +
      'Focus on finance, measurement, maps, data handling and probability in South African contexts. Do not repeat items. ' +
      'IMPORTANT: Wrap every mathematical expression in single dollar signs, e.g. $A = P(1 + i)^n$, $\\frac{3}{4}$. This applies to prompts, options, answers and explanations.'
    );
  },
  tasks: {
    ...mlGr10Term1.tasks,
    ...mlGr10Term2.tasks,
    ...mlGr10Term3.tasks,
    ...mlGr10Term4.tasks,
    ...mlGr11Term1.tasks,
    ...mlGr11Term2.tasks,
    ...mlGr11Term3.tasks,
    ...mlGr11Term4.tasks,
    ...mlGr12Term1.tasks,
    ...mlGr12Term2.tasks,
    ...mlGr12Term3.tasks,
    ...mlGr12Term4.tasks,
  },
};
