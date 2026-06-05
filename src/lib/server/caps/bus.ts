import type { SubjectConfig } from '../caps/types';
import busGr10Term1 from './tasks/bus-gr10-term1.json';
import busGr10Term2 from './tasks/bus-gr10-term2.json';
import busGr10Term3 from './tasks/bus-gr10-term3.json';
import busGr10Term4 from './tasks/bus-gr10-term4.json';
import busGr11Term1 from './tasks/bus-gr11-term1.json';
import busGr11Term2 from './tasks/bus-gr11-term2.json';
import busGr11Term3 from './tasks/bus-gr11-term3.json';
import busGr11Term4 from './tasks/bus-gr11-term4.json';
import busGr12Term1 from './tasks/bus-gr12-term1.json';
import busGr12Term2 from './tasks/bus-gr12-term2.json';
import busGr12Term3 from './tasks/bus-gr12-term3.json';
import busGr12Term4 from './tasks/bus-gr12-term4.json';

export const bus: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Business Studies teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      `Generate {count} varied, age-appropriate items. Each item must have: a clear, simply-worded question about Grade ${grade} Business Studies concepts, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ` +
      'Focus on the requested CAPS topic and keep language accurate and South African. Topics may include business environments, operations, legislation, human resources, leadership, quality, investment, social responsibility, ownership and exam technique. Do not repeat items.'
    );
  },
  tasks: {
    ...busGr10Term1.tasks,
    ...busGr10Term2.tasks,
    ...busGr10Term3.tasks,
    ...busGr10Term4.tasks,
    ...busGr11Term1.tasks,
    ...busGr11Term2.tasks,
    ...busGr11Term3.tasks,
    ...busGr11Term4.tasks,
    ...busGr12Term1.tasks,
    ...busGr12Term2.tasks,
    ...busGr12Term3.tasks,
    ...busGr12Term4.tasks,
  },
};
