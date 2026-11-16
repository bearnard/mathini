import type { Q } from './bank';
import { algebraicExpressions, exponents, numberPatterns, equationsInequalities, trigonometry } from './specsT1';
import { functionsLinearQuadratic, functionsOther, euclideanGeometry, midYearExamPrep } from './specsT2';
import { analyticalGeometry, financeGrowth, statistics, measurement, trigGeometry } from './specsT3';

export interface TopicSpec { task: string; file: string; questions: Q[] }
const base = 'src/curriculum/grade10/mathematics';

export const ALL_SPECS: TopicSpec[] = [
  { task: 'gr10-algebraic-expressions-t1', file: `${base}/term1/algebraic-expressions/AlgebraicExpressions.tsx`, questions: algebraicExpressions },
  { task: 'gr10-exponents-t1', file: `${base}/term1/exponents/Exponents.tsx`, questions: exponents },
  { task: 'gr10-number-patterns-t1', file: `${base}/term1/number-patterns/NumberPatterns.tsx`, questions: numberPatterns },
  { task: 'gr10-equations-inequalities-t1', file: `${base}/term1/equations-inequalities/EquationsInequalities.tsx`, questions: equationsInequalities },
  { task: 'gr10-trigonometry-t1', file: `${base}/term1/trigonometry/Trigonometry.tsx`, questions: trigonometry },
  { task: 'gr10-functions-linear-quadratic-t2', file: `${base}/term2/functions-linear-quadratic/FunctionsLinearQuadratic.tsx`, questions: functionsLinearQuadratic },
  { task: 'gr10-functions-other-t2', file: `${base}/term2/functions-other/FunctionsOther.tsx`, questions: functionsOther },
  { task: 'gr10-euclidean-geometry-t2', file: `${base}/term2/euclidean-geometry/EuclideanGeometry.tsx`, questions: euclideanGeometry },
  { task: 'gr10-midyear-exam-prep-t2', file: `${base}/term2/midyear-exam-prep/MidYearExamPrep.tsx`, questions: midYearExamPrep },
  { task: 'gr10-analytical-geometry-t3', file: `${base}/term3/analytical-geometry/AnalyticalGeometry.tsx`, questions: analyticalGeometry },
  { task: 'gr10-finance-growth-t3', file: `${base}/term3/finance-growth/FinanceGrowth.tsx`, questions: financeGrowth },
  { task: 'gr10-statistics-t3', file: `${base}/term3/statistics/Statistics.tsx`, questions: statistics },
  { task: 'gr10-measurement-t3', file: `${base}/term3/measurement/Measurement.tsx`, questions: measurement },
  { task: 'gr10-trig-geometry-t3', file: `${base}/term3/trig-geometry/TrigGeometry.tsx`, questions: trigGeometry },
];
