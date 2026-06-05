import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Read Transformations from the Equation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Every constant in a function changes the graph in a predictable way, so link the equation to its translation, reflection, or stretch.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`y = a(x-p)^2 + q`}</Formula>
          <Formula block>{String.raw`y = \\frac{a}{x-p} + q`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2, label: 'y = x²', color: '#94a3b8' },
            { fn: (x: number) => (x - 2) ** 2 + 1, label: 'y = (x - 2)² + 1', color: '#6366f1' },
          ]}
          xRange={[-4, 6]}
          yRange={[-1, 12]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="text-sm text-slate-600">In <Formula>{String.raw`y = (x-2)^2 + 1`}</Formula>, the parabola moves <Formula>{String.raw`2`}</Formula> units right and <Formula>{String.raw`1`}</Formula> unit up.</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <p className="text-sm text-slate-600">For hyperbolas, <Formula>{String.raw`p`}</Formula> and <Formula>{String.raw`q`}</Formula> shift the asymptotes to <Formula>{String.raw`x = p`}</Formula> and <Formula>{String.raw`y = q`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Analyse Different Function Families',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Grade 11 focuses on quadratic, hyperbolic, exponential, and trigonometric functions. Each family has a signature shape and set of features.</p>
        <FunctionGraph
          curves={[
            { fn: (x: number) => (Math.abs(x) < 0.08 ? Number.NaN : 2 / x + 1), label: 'y = 2/x + 1', color: '#14b8a6' },
            { fn: (x: number) => 2 ** x, label: 'y = 2^x', color: '#f59e0b' },
          ]}
          xRange={[-4, 4]}
          yRange={[-4, 10]}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Parabola</h4>
            <p className="text-sm text-slate-600">Look for the turning point, axis of symmetry, and <Formula>{String.raw`x`}</Formula>-intercepts.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Hyperbola</h4>
            <p className="text-sm text-slate-600">Use the shifted asymptotes <Formula>{String.raw`x = p`}</Formula> and <Formula>{String.raw`y = q`}</Formula>.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <h4 className="font-semibold text-rose-700">Exponential</h4>
            <p className="text-sm text-slate-600">The graph never touches the horizontal asymptote and changes rapidly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Connect Tables, Graphs, and Features',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Move comfortably between an equation, a table of values, and a sketch. Average gradient, period, intercepts, and asymptotes all come from the same representation.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`m_{AB} = \\frac{y_2 - y_1}{x_2 - x_1}`}</Formula>
          <Formula block>{String.raw`y = a\\sin(bx + c) + d`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin((x * Math.PI) / 180), label: 'y = sin x', color: '#06b6d4' },
            { fn: (x: number) => Math.sin((2 * x * Math.PI) / 180), label: 'y = sin 2x', color: '#8b5cf6' },
          ]}
          xRange={[0, 360]}
          yRange={[-1.5, 1.5]}
        />
        <p className="text-sm text-slate-600">Doubling the coefficient of <Formula>{String.raw`x`}</Formula> halves the period, so the second graph completes more cycles over the same interval.</p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'For f(x) = (x − 3)² + 2, the turning point is:',
    options: ['(−3, 2)', '(3, −2)', '(3, 2)', '(−3, −2)'],
    answer: '(3, 2)',
    explanation: 'In y = a(x−p)²+q, the turning point is (p, q) = (3, 2).',
  },
  {
    prompt: 'The axis of symmetry of y = −x² + 4x − 1 is:',
    options: ['x = 2', 'x = −2', 'x = 4', 'x = −4'],
    answer: 'x = 2',
    explanation: 'x = −b/2a = −4/(2×(−1)) = −4/(−2) = 2.',
  },
  {
    prompt: 'For y = a/(x) + q (hyperbola), the horizontal asymptote is:',
    options: ['x = 0', 'x = q', 'y = 0', 'y = q'],
    answer: 'y = q',
    explanation: 'As x → ±∞, a/x → 0, so y → q. The horizontal asymptote is y = q.',
  },
  {
    prompt: 'For f(x) = 2^(x+1) + 3, the horizontal asymptote is:',
    options: ['y = 1', 'y = 3', 'y = 2', 'y = 0'],
    answer: 'y = 3',
    explanation: 'As x → −∞, 2^(x+1) → 0, so f(x) → 3. The asymptote is y = 3.',
  },
  {
    prompt: 'The period of y = sin(2x) is:',
    options: ['360°', '90°', '180°', '720°'],
    answer: '180°',
    explanation: 'Period = 360°/b = 360°/2 = 180°.',
  },
  {
    prompt: 'How does the graph of f(x) = cos(x) − 1 differ from cos(x)?',
    options: ['Shifted 1 unit right', '1 unit down', '1 unit up', 'Reflected in x-axis'],
    answer: '1 unit down',
    explanation: 'Subtracting 1 shifts the entire graph 1 unit downward.',
  },
  {
    prompt: 'The average gradient of f(x) = x² between x = 1 and x = 3 is:',
    options: ['2', '3', '6', '4'],
    answer: '4',
    explanation: '(f(3) − f(1))/(3−1) = (9−1)/2 = 8/2 = 4.',
  },
  {
    prompt: 'For y = −2(x + 1)² − 3, the range is:',
    options: ['y ≥ −3', 'y ≤ 3', 'y ≤ −3', 'y ≥ 3'],
    answer: 'y ≤ −3',
    explanation: 'Since a = −2 < 0, the parabola opens downward with maximum value −3. Range: y ≤ −3.',
  },
  {
    prompt: 'Which graph has no x-intercepts?',
    options: ['y = x² − 1', 'y = (x−1)²', 'y = x² + 1', 'y = −x² + 4'],
    answer: 'y = x² + 1',
    explanation: 'Δ = 0 − 4(1)(1) = −4 < 0, so y = x² + 1 has no real roots and never crosses the x-axis.',
  },
];

const Functions = () => (
  <CapsSubjectTopic
    title="Functions"
    subtitle="Parameters, graph transformations and average gradient"
    learnSteps={learnSteps}
    task="gr11-functions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Functions;
