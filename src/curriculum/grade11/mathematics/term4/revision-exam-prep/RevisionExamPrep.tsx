import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Group Revision by Concept',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Do not revise chapter by chapter only. Group similar skills so you can see the links between formulas, graphs, and methods.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">Algebra cluster</h4>
            <Formula block>{String.raw`\\Delta = b^2 - 4ac`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">Functions cluster</h4>
            <Formula block>{String.raw`y = a(x-p)^2 + q`}</Formula>
          </div>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 - 2, label: 'quadratic', color: '#6366f1' },
            { fn: (x: number) => 2 ** x - 1, label: 'exponential', color: '#14b8a6' },
          ]}
          xRange={[-3, 4]}
          yRange={[-4, 10]}
        />
      </div>
    ),
  },
  {
    title: 'Practise Mixed Questions Under Time Pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Timed practice helps you switch quickly between topics and spot which formula or theorem is needed first.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\\sin^2\\theta + \\cos^2\\theta = 1`}</Formula>
          <Formula block>{String.raw`A = P(1+i)^n`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin((x * Math.PI) / 180), label: 'y = sin θ', color: '#f59e0b' },
            { fn: () => 0.5, label: 'y = 1/2', color: '#ef4444' },
          ]}
          xRange={[0, 360]}
          yRange={[-1.5, 1.5]}
        />
      </div>
    ),
  },
  {
    title: 'Finish with an Error-Checking Routine',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Before you move on, check signs, units, interval restrictions, and graph behaviour. Small checks save many marks.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">Check domain</h4>
            <p className="text-sm text-slate-600">Values inside <Formula>{String.raw`\\sqrt{\\;}`}</Formula> must stay non-negative.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Check interval</h4>
            <p className="text-sm text-slate-600">Trig answers must match the given interval, such as <Formula>{String.raw`0^\\circ \\le x < 360^\\circ`}</Formula>.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Check reasonableness</h4>
            <p className="text-sm text-slate-600">A probability must be between <Formula>{String.raw`0`}</Formula> and <Formula>{String.raw`1`}</Formula>, and a graph sketch should support the answer.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The tangent-chord theorem states that the angle between a tangent and chord equals:',
    options: ['Double the angle in the alternate segment', 'The central angle on the same chord', 'The inscribed angle in the alternate segment', 'The angle in the same segment'],
    answer: 'The inscribed angle in the alternate segment',
    explanation: 'This is the Tangent-Chord (Alternate Segment) Theorem — a key circle theorem.',
  },
  {
    prompt: 'Simplify: √12',
    options: ['2√3', '3√2', '4√3', '6√2'],
    answer: '2√3',
    explanation: '√12 = √(4 × 3) = 2√3.',
  },
  {
    prompt: 'The effective annual rate from a nominal rate compounded m times per year is:',
    options: ['i_nom / m', '(1 + i_nom × m) − 1', '(1 + i_nom/m)^m − 1', 'i_nom × m'],
    answer: '(1 + i_nom/m)^m − 1',
    explanation: 'EAR = (1 + i_nom/m)^m − 1, where m is the number of compounding periods per year.',
  },
  {
    prompt: 'For the function y = 3^x, the range is:',
    options: ['y ∈ ℝ', 'y ≥ 0', 'y > 0', 'y ≥ 1'],
    answer: 'y > 0',
    explanation: 'An exponential function y = b^x (b > 0, b ≠ 1) is always positive: y > 0 for all x ∈ ℝ.',
  },
  {
    prompt: 'The second difference in a quadratic sequence is always:',
    options: ['Zero', 'Increasing', 'Constant', 'Equal to a'],
    answer: 'Constant',
    explanation: 'By definition, a quadratic sequence has a constant (non-zero) second difference.',
  },
  {
    prompt: 'sin²x + cos²x = ?',
    options: ['2', 'sin 2x', '1', '0'],
    answer: '1',
    explanation: 'The Pythagorean identity: sin²x + cos²x = 1 for all values of x.',
  },
  {
    prompt: 'In a positively skewed data set, the outliers are typically:',
    options: ['On the left (low end)', 'Symmetrically distributed', 'On the right (high end)', 'At the median'],
    answer: 'On the right (high end)',
    explanation: 'Positive skew is caused by high outliers pulling the distribution\'s tail to the right.',
  },
  {
    prompt: 'If the discriminant Δ = b² − 4ac < 0, the roots of the quadratic are:',
    options: ['Two distinct real roots', 'Equal real roots', 'Non-real', 'Rational'],
    answer: 'Non-real',
    explanation: 'Δ < 0 means the square root in the quadratic formula is of a negative number — no real solutions exist.',
  },
];

const RevisionExamPrep = () => (
  <CapsSubjectTopic
    title="Revision and Final Examination Preparation"
    subtitle="Consolidating all Grade 11 topics for Papers 1 and 2"
    learnSteps={learnSteps}
    task="gr11-revision-exam-prep-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default RevisionExamPrep;
