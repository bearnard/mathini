import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Rational Exponents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">A rational exponent links powers and roots, so <Formula>{String.raw`a^{\frac{m}{n}}`}</Formula> means “raise to the power <Formula>{String.raw`m`}</Formula> and take the <Formula>{String.raw`n`}</Formula>th root”.</p>
        <Formula block>{String.raw`a^{\frac{m}{n}} = \sqrt[n]{a^m}`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => (x < 0 ? Number.NaN : Math.sqrt(x)), label: 'y = √x = x^(1/2)', color: '#6366f1' },
          ]}
          xRange={[0, 9]}
          yRange={[0, 4]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">Convert neatly</h4>
            <Formula block>{String.raw`8^{\frac{2}{3}} = \sqrt[3]{8^2} = 4`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">Negative powers</h4>
            <Formula block>{String.raw`a^{-\frac{m}{n}} = \frac{1}{a^{m/n}}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Simplify Surds',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Keep like surds together and rewrite square roots using perfect-square factors before you add, subtract, multiply, or rationalise.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">Add like surds</h4>
            <Formula block>{String.raw`3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}`}</Formula>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Simplify first</h4>
            <Formula block>{String.raw`2\sqrt{18} = 2\sqrt{9 \cdot 2} = 6\sqrt{2}`}</Formula>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Use conjugates</h4>
            <Formula block>{String.raw`\frac{1}{\sqrt{3}-1} \cdot \frac{\sqrt{3}+1}{\sqrt{3}+1}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Solve Surd Equations Carefully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Isolate the radical first, square both sides, and then check for extraneous answers in the original equation.</p>
        <Formula block>{String.raw`\sqrt{x + 3} = 4 \Rightarrow x + 3 = 16 \Rightarrow x = 13`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => (x < -3 ? Number.NaN : Math.sqrt(x + 3)), label: 'y = √(x + 3)', color: '#14b8a6' },
            { fn: () => 4, label: 'y = 4', color: '#f59e0b' },
          ]}
          xRange={[-3, 16]}
          yRange={[0, 6]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4">
            <h4 className="font-semibold text-rose-700">Check the answer</h4>
            <p className="text-sm text-slate-600">Substituting <Formula>{String.raw`x = 13`}</Formula> gives <Formula>{String.raw`\sqrt{16} = 4`}</Formula>, so the solution is valid.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <h4 className="font-semibold text-slate-700">Watch for traps</h4>
            <p className="text-sm text-slate-600">Any answer that makes the radicand negative or breaks the original statement must be rejected.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Simplify: √75',
    options: ['3√5', '5√3', '15√3', '25√3'],
    answer: '5√3',
    explanation: '√75 = √(25 × 3) = √25 × √3 = 5√3.',
  },
  {
    prompt: 'Evaluate: 8^(2/3)',
    options: ['2', '3', '4', '6'],
    answer: '4',
    explanation: '8^(2/3) = (³√8)² = 2² = 4.',
  },
  {
    prompt: '√3 × √12 = ?',
    options: ['6', '4√3', '3√4', '√18'],
    answer: '6',
    explanation: '√3 × √12 = √(3 × 12) = √36 = 6.',
  },
  {
    prompt: 'Simplify: (√5 + √2)(√5 − √2)',
    options: ['7', '√10', '√3', '3'],
    answer: '3',
    explanation: 'Using the difference of squares: (√5)² − (√2)² = 5 − 2 = 3.',
  },
  {
    prompt: 'Solve: √(x + 3) = 4',
    options: ['x = 1', 'x = 13', 'x = 19', 'x = 7'],
    answer: 'x = 13',
    explanation: 'Square both sides: x + 3 = 16, so x = 13. Check: √(13+3) = √16 = 4 ✓.',
  },
  {
    prompt: 'Simplify: 2√18 − √8',
    options: ['2√10', '√10', '4√2', '6√2'],
    answer: '4√2',
    explanation: '2√18 = 2 × 3√2 = 6√2 and √8 = 2√2, so 6√2 − 2√2 = 4√2.',
  },
  {
    prompt: 'Evaluate: 27^(−1/3)',
    options: ['1/3', '−3', '1/9', '3'],
    answer: '1/3',
    explanation: '27^(−1/3) = 1/27^(1/3) = 1/³√27 = 1/3.',
  },
  {
    prompt: 'Simplify: √50 + √2',
    options: ['5√10', '6√2', '√52', '10√2'],
    answer: '6√2',
    explanation: '√50 = 5√2, so √50 + √2 = 5√2 + √2 = 6√2.',
  },
  {
    prompt: 'Simplify: √6 ÷ √2',
    options: ['√12', '√3', '√4', '3'],
    answer: '√3',
    explanation: '√6 ÷ √2 = √(6/2) = √3.',
  },
  {
    prompt: 'If √(2x − 1) = 3, then x = ?',
    options: ['x = 4', 'x = 3', 'x = 5', 'x = 7'],
    answer: 'x = 5',
    explanation: 'Square both sides: 2x − 1 = 9, so 2x = 10 and x = 5. Check: √(10−1) = √9 = 3 ✓.',
  },
];

const ExponentsAndSurds = () => (
  <CapsSubjectTopic
    title="Exponents and Surds"
    subtitle="Rational exponents, surd operations and surd equations"
    learnSteps={learnSteps}
    task="gr11-exponents-surds-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ExponentsAndSurds;
