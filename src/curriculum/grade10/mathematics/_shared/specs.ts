import type { Q } from './bank';
import { algebraicExpressions, exponents, numberPatterns, equationsInequalities, trigonometry } from './specsT1';

export interface TopicSpec { task: string; file: string; questions: Q[] }
const base = 'src/curriculum/grade10/mathematics';

export const ALL_SPECS: TopicSpec[] = [
  { task: 'gr10-algebraic-expressions-t1', file: `${base}/term1/algebraic-expressions/AlgebraicExpressions.tsx`, questions: algebraicExpressions },
  { task: 'gr10-exponents-t1', file: `${base}/term1/exponents/Exponents.tsx`, questions: exponents },
  { task: 'gr10-number-patterns-t1', file: `${base}/term1/number-patterns/NumberPatterns.tsx`, questions: numberPatterns },
  { task: 'gr10-equations-inequalities-t1', file: `${base}/term1/equations-inequalities/EquationsInequalities.tsx`, questions: equationsInequalities },
  { task: 'gr10-trigonometry-t1', file: `${base}/term1/trigonometry/Trigonometry.tsx`, questions: trigonometry },
];
