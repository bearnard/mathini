import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { addSub5, addSub6 } from './specsAddSub';

export interface TopicSpec { task: string; file: string; questions: Q[] }
const base = 'src/curriculum/grade6';

/** Every Grade 6 Mathematics topic whose bank is generated from computed specs (scripts/gen-g6-maths-bank.ts). */
export const ALL_SPECS: TopicSpec[] = [
  { task: 'gr6-add-subtract-5digit-t1', file: `${base}/term1/whole-numbers/AddSubtract5Digit.tsx`, questions: addSub5 },
  { task: 'gr6-add-subtract-6digit-t3', file: `${base}/term3/whole-numbers/AddSubtract6Digit.tsx`, questions: addSub6 },
];
