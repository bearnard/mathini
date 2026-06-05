import type { SubjectConfig } from '../caps/types';
import econGr10Term1 from './tasks/econ-gr10-term1.json';
import econGr10Term2 from './tasks/econ-gr10-term2.json';
import econGr10Term3 from './tasks/econ-gr10-term3.json';
import econGr10Term4 from './tasks/econ-gr10-term4.json';
import econGr11Term1 from './tasks/econ-gr11-term1.json';
import econGr11Term2 from './tasks/econ-gr11-term2.json';
import econGr11Term3 from './tasks/econ-gr11-term3.json';
import econGr11Term4 from './tasks/econ-gr11-term4.json';
import econGr12Term1 from './tasks/econ-gr12-term1.json';
import econGr12Term2 from './tasks/econ-gr12-term2.json';
import econGr12Term3 from './tasks/econ-gr12-term3.json';
import econGr12Term4 from './tasks/econ-gr12-term4.json';

export const econ: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an Economics teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      `Generate {count} varied, age-appropriate items. Each item must have: a clear, simply-worded question about Grade ${grade} Economics CAPS concepts, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ` +
      'Focus on macroeconomics, microeconomics, economic pursuits, policy and South African context. Keep language accurate and South African. Do not repeat items.'
    );
  },
  tasks: {
    ...econGr10Term1.tasks,
    ...econGr10Term2.tasks,
    ...econGr10Term3.tasks,
    ...econGr10Term4.tasks,
    ...econGr11Term1.tasks,
    ...econGr11Term2.tasks,
    ...econGr11Term3.tasks,
    ...econGr11Term4.tasks,
    ...econGr12Term1.tasks,
    ...econGr12Term2.tasks,
    ...econGr12Term3.tasks,
    ...econGr12Term4.tasks,
  },
};
