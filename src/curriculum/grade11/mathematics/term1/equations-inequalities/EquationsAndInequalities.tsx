import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/math/term1/equations-inequalities/diagram.webp", alt: "Equations and Inequalities" },
    title: 'Solve Quadratic Equations Systematically',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Factorise when possible, otherwise complete the square or use the quadratic formula.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`x^2 - 4x - 5 = 0 \\Rightarrow (x-5)(x+1)=0`}</Formula>
          <Formula block>{String.raw`x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}{2a}`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 - 4 * x - 5, label: 'y = x² - 4x - 5', color: '#6366f1' },
            { fn: () => 0, label: 'x-axis', color: '#ef4444' },
          ]}
          xRange={[-4, 7]}
          yRange={[-12, 20]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">Completed square form</h4>
            <Formula block>{String.raw`x^2 - 4x + 1 = (x-2)^2 - 3`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">Roots from factors</h4>
            <Formula block>{String.raw`x = 5 \\text{ or } x = -1`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpret Inequalities with a Sign Diagram',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Find the critical values first, then test intervals or read the graph above and below the <Formula>{String.raw`x`}</Formula>-axis.</p>
        <Formula block>{String.raw`x^2 - x - 6 > 0 \\Rightarrow (x-3)(x+2) > 0`}</Formula>
        <Formula block>{String.raw`x < -2 \\text{ or } x > 3`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 - x - 6, label: 'y = x² - x - 6', color: '#14b8a6' },
            { fn: () => 0, label: 'x-axis', color: '#f59e0b' },
          ]}
          xRange={[-5, 5]}
          yRange={[-8, 15]}
        />
        <div className="rounded-xl bg-cyan-50 p-4">
          <p className="text-sm text-slate-600">Use open circles for strict inequalities like <Formula>{String.raw`&gt;`}</Formula> or <Formula>{String.raw`&lt;`}</Formula>, and closed circles for <Formula>{String.raw`\\ge`}</Formula> or <Formula>{String.raw`\\le`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Use the Discriminant to Predict Roots',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">The discriminant tells you how many real roots a quadratic has before you solve it.</p>
        <Formula block>{String.raw`\\Delta = b^2 - 4ac`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 - 1, label: 'Δ > 0', color: '#22c55e' },
            { fn: (x: number) => x ** 2, label: 'Δ = 0', color: '#3b82f6' },
            { fn: (x: number) => x ** 2 + 1, label: 'Δ < 0', color: '#f97316' },
            { fn: () => 0, label: 'x-axis', color: '#64748b' },
          ]}
          xRange={[-3, 3]}
          yRange={[-2, 6]}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <Formula block>{String.raw`\\Delta > 0`}</Formula>
            <p className="text-sm text-slate-600">Two distinct real roots</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <Formula block>{String.raw`\\Delta = 0`}</Formula>
            <p className="text-sm text-slate-600">One repeated real root</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <Formula block>{String.raw`\\Delta < 0`}</Formula>
            <p className="text-sm text-slate-600">No real roots</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the discriminant of x² − 5x + 6 = 0?',
    options: ['1', '−1', '49', '25'],
    answer: '1',
    explanation: 'Δ = b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1.',
  },
  {
    prompt: 'Complete the square: x² + 6x = ?',
    options: ['(x+6)² − 36', '(x+3)² + 9', '(x+3)² − 9', '(x+6)² − 6'],
    answer: '(x+3)² − 9',
    explanation: 'Add (6/2)² = 9: x² + 6x + 9 − 9 = (x+3)² − 9.',
  },
  {
    prompt: 'Solve: x² − x − 6 > 0',
    options: ['−2 < x < 3', 'x < −2 or x > 3', 'x > 3 only', 'x < −2 only'],
    answer: 'x < −2 or x > 3',
    explanation: '(x−3)(x+2) > 0; parabola is above x-axis outside the roots x = −2 and x = 3.',
  },
  {
    prompt: 'The roots of x² + 2x + 5 = 0 are best described as:',
    options: ['Real and unequal', 'Real and equal', 'Irrational', 'Non-real'],
    answer: 'Non-real',
    explanation: 'Δ = 4 − 20 = −16 < 0, so the roots are non-real (complex).',
  },
  {
    prompt: 'If the discriminant equals 0, the roots of the quadratic are:',
    options: ['Equal', 'Non-real', 'Irrational', 'Undefined'],
    answer: 'Equal',
    explanation: 'Δ = 0 means one repeated root: x = −b/2a.',
  },
  {
    prompt: 'Solve: x² − 4 ≤ 0',
    options: ['x ≤ −2 or x ≥ 2', 'x < −2 or x > 2', '−2 ≤ x ≤ 2', 'x ≥ 2'],
    answer: '−2 ≤ x ≤ 2',
    explanation: '(x−2)(x+2) ≤ 0; the parabola is at or below the x-axis between x = −2 and x = 2.',
  },
  {
    prompt: 'The best method for solving x² + 4x − 21 = 0 is:',
    options: ['Completing the square', 'Factorisation', 'Quadratic formula', 'Graphing'],
    answer: 'Factorisation',
    explanation: 'x² + 4x − 21 = (x + 7)(x − 3) = 0, so factorisation is the quickest method.',
  },
  {
    prompt: 'If x² − 6x + k = 0 has equal roots, what is k?',
    options: ['3', '6', '12', '9'],
    answer: '9',
    explanation: 'Equal roots when Δ = 0: 36 − 4k = 0 → k = 9.',
  },
  {
    prompt: 'Solve simultaneously: x + y = 5 and xy = 6. The solutions are:',
    options: ['(2, 3) or (3, 2)', '(1, 4) or (4, 1)', '(2, 3) only', '(1, 6) or (6, 1)'],
    answer: '(2, 3) or (3, 2)',
    explanation: 'Substitute y = 5−x: x(5−x) = 6 → x²−5x+6 = 0 → (x−2)(x−3) = 0 → x = 2 or 3.',
  },
];

const EquationsAndInequalities = () => (
  <CapsSubjectTopic
    title="Equations and Inequalities"
    subtitle="Quadratic equations, inequalities, discriminant and nature of roots"
    learnSteps={learnSteps}
    task="gr11-equations-inequalities-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default EquationsAndInequalities;
