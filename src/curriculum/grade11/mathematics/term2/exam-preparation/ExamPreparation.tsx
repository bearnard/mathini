import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise Core Paper 1 Skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Paper 1 usually blends algebra, functions, and finance, so revise the standard forms and the methods that go with them.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">Quadratics</h4>
            <Formula block>{String.raw`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">Turning point form</h4>
            <Formula block>{String.raw`y = a(x-p)^2 + q`}</Formula>
          </div>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 - 4 * x + 3, label: 'y = x² - 4x + 3', color: '#6366f1' },
            { fn: () => 0, label: 'x-axis', color: '#ef4444' },
          ]}
          xRange={[-1, 5]}
          yRange={[-2, 10]}
        />
      </div>
    ),
  },
  {
    title: 'Practise Trig and Graph Questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Solve trig equations from identities, special angles, and graph intersections. Always work in the correct interval.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\sin^2\theta + \cos^2\theta = 1`}</Formula>
          <Formula block>{String.raw`2\sin\theta = 1 \Rightarrow \sin\theta = \frac{1}{2}`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin((x * Math.PI) / 180), label: 'y = sin θ', color: '#14b8a6' },
            { fn: () => 0.5, label: 'y = 1/2', color: '#f59e0b' },
          ]}
          xRange={[0, 360]}
          yRange={[-1.5, 1.5]}
        />
        <p className="text-sm text-slate-600">Reading the intersections quickly helps you check whether your algebraic solutions make sense.</p>
      </div>
    ),
  },
  {
    title: 'Prepare an Exam Routine',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Use a routine that keeps you accurate under pressure: identify the topic, choose the formula, show all substitutions, and then estimate whether the answer is reasonable.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">1. Identify</h4>
            <p className="text-sm text-slate-600">Spot whether the question needs <Formula>{String.raw`\Delta`}</Formula>, a graph, a trig identity, or a finance formula.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">2. Substitute</h4>
            <p className="text-sm text-slate-600">Write values clearly into the formula before simplifying.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">3. Check</h4>
            <p className="text-sm text-slate-600">Use units, signs, and graph behaviour to decide if the final answer is sensible.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Solve: x² − 5x + 4 = 0',
    options: ['x = 2 or x = 3', 'x = 1 or x = 4', 'x = −1 or x = −4', 'x = 4 or x = −1'],
    answer: 'x = 1 or x = 4',
    explanation: '(x−1)(x−4) = 0, so x = 1 or x = 4.',
  },
  {
    prompt: 'The gradient of the line y = −3x + 7 is:',
    options: ['7', '3', '−3', '−7'],
    answer: '−3',
    explanation: 'In y = mx + c, the gradient is the coefficient of x: m = −3.',
  },
  {
    prompt: 'Solve 2 sin x = 1 for x ∈ [0°, 360°]:',
    options: ['x = 30° or x = 150°', 'x = 60° or x = 120°', 'x = 30° only', 'x = 45° or x = 135°'],
    answer: 'x = 30° or x = 150°',
    explanation: 'sin x = 1/2. Reference angle: 30°. sin is positive in Q1 and Q2: x = 30° or x = 150°.',
  },
  {
    prompt: 'The turning point of f(x) = x² − 4x + 7 is:',
    options: ['(2, 7)', '(−2, 3)', '(4, 7)', '(2, 3)'],
    answer: '(2, 3)',
    explanation: 'x = −b/2a = 4/2 = 2. f(2) = 4 − 8 + 7 = 3. Turning point: (2, 3).',
  },
  {
    prompt: 'If the discriminant of a quadratic is negative, the roots are:',
    options: ['Real and equal', 'Non-real', 'Real and unequal', 'Zero'],
    answer: 'Non-real',
    explanation: 'Δ < 0 means the square root in the quadratic formula gives a negative under the root — no real solutions.',
  },
  {
    prompt: 'sin 210° equals:',
    options: ['1/2', '√3/2', '−1/2', '−√3/2'],
    answer: '−1/2',
    explanation: 'sin 210° = sin(180°+30°) = −sin 30° = −1/2.',
  },
  {
    prompt: 'The distance from (0, 0) to (3, 4) is:',
    options: ['7', '5', '√7', '√25'],
    answer: '5',
    explanation: 'd = √(3² + 4²) = √(9+16) = √25 = 5.',
  },
  {
    prompt: 'Simplify: (1/tan x) × sin x',
    options: ['sin²x', 'tan x', '1/cos x', 'cos x'],
    answer: 'cos x',
    explanation: '1/tan x = cos x/sin x. Multiplied by sin x: (cos x/sin x) × sin x = cos x.',
  },
];

const ExamPreparation = () => (
  <CapsSubjectTopic
    title="Examination Preparation"
    subtitle="Integrated revision of Terms 1 and 2 for mid-year exams"
    learnSteps={learnSteps}
    task="gr11-exam-preparation-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ExamPreparation;
