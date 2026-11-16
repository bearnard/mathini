import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { addSub5, addSub6 } from './specsAddSub';
import { multiply2, divide2, multiply3, divide3 } from './specsMulDiv';
import { percentages, temperature } from './specsPercentTemp';

export interface TopicSpec { task: string; file: string; questions: Q[] }
const base = 'src/curriculum/grade6';

/** Every Grade 6 Mathematics topic whose bank is generated from computed specs (scripts/gen-g6-maths-bank.ts). */
export const ALL_SPECS: TopicSpec[] = [
  { task: 'gr6-add-subtract-5digit-t1', file: `${base}/term1/whole-numbers/AddSubtract5Digit.tsx`, questions: addSub5 },
  { task: 'gr6-add-subtract-6digit-t3', file: `${base}/term3/whole-numbers/AddSubtract6Digit.tsx`, questions: addSub6 },
  { task: 'gr6-multiply-2digit-t2', file: `${base}/term2/whole-numbers/Multiply2Digit.tsx`, questions: multiply2 },
  { task: 'gr6-divide-2digit-t2', file: `${base}/term2/whole-numbers/Divide2Digit.tsx`, questions: divide2 },
  { task: 'gr6-multiply-3digit-t4', file: `${base}/term4/whole-numbers/Multiply3Digit.tsx`, questions: multiply3 },
  { task: 'gr6-divide-3digit-t4', file: `${base}/term4/whole-numbers/Divide3Digit.tsx`, questions: divide3 },
  { task: 'gr6-percentages-t3', file: `${base}/term3/percentages/Percentages.tsx`, questions: percentages },
  { task: 'gr6-temperature-t3', file: `${base}/term3/temperature/Temperature.tsx`, questions: temperature },
];
