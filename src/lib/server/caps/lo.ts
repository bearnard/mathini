import type { SubjectConfig } from '../caps/types';
import loGr8Term1 from './tasks/lo-gr8-term1.json';
import loGr8Term2 from './tasks/lo-gr8-term2.json';
import loGr8Term3 from './tasks/lo-gr8-term3.json';
import loGr8Term4 from './tasks/lo-gr8-term4.json';
import loGr9Term1 from './tasks/lo-gr9-term1.json';
import loGr9Term2 from './tasks/lo-gr9-term2.json';
import loGr9Term3 from './tasks/lo-gr9-term3.json';
import loGr9Term4 from './tasks/lo-gr9-term4.json';
import loGr10Term1 from './tasks/lo-gr10-term1.json';
import loGr10Term2 from './tasks/lo-gr10-term2.json';
import loGr10Term3 from './tasks/lo-gr10-term3.json';
import loGr11Term1 from './tasks/lo-gr11-term1.json';
import loGr11Term2 from './tasks/lo-gr11-term2.json';
import loGr11Term3 from './tasks/lo-gr11-term3.json';
import loGr11Term4 from './tasks/lo-gr11-term4.json';
import loGr12Term1 from './tasks/lo-gr12-term1.json';
import loGr12Term2 from './tasks/lo-gr12-term2.json';
import loGr12Term3 from './tasks/lo-gr12-term3.json';
import loGr12Term4 from './tasks/lo-gr12-term4.json';

export const lo: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Life Orientation teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Keep language age-appropriate, values-based, and grounded in South African school and community contexts. Do not repeat items. '
    );
  },
  tasks: {
    ...loGr8Term1.tasks,
    ...loGr8Term2.tasks,
    ...loGr8Term3.tasks,
    ...loGr8Term4.tasks,
    ...loGr9Term1.tasks,
    ...loGr9Term2.tasks,
    ...loGr9Term3.tasks,
    ...loGr9Term4.tasks,
    ...loGr10Term1.tasks,
    ...loGr10Term2.tasks,
    ...loGr10Term3.tasks,
    ...loGr11Term1.tasks,
    ...loGr11Term2.tasks,
    ...loGr11Term3.tasks,
    ...loGr11Term4.tasks,
    ...loGr12Term1.tasks,
    ...loGr12Term2.tasks,
    ...loGr12Term3.tasks,
    ...loGr12Term4.tasks,
  },
};
