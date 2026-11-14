import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';
import UnitCircleExplorer from '@/components/subjects/UnitCircleExplorer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use Special Angles and Graphs Together',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Know the exact values for the special angles and connect them to the shapes of the sine and cosine graphs.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\sin 30^\circ = \frac{1}{2}, \quad \cos 60^\circ = \frac{1}{2}`}</Formula>
          <Formula block>{String.raw`\tan 45^\circ = 1`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin((x * Math.PI) / 180), label: 'y = sin x', color: '#14b8a6' },
            { fn: (x: number) => Math.cos((x * Math.PI) / 180), label: 'y = cos x', color: '#6366f1' },
          ]}
          xRange={[0, 360]}
          yRange={[-1.5, 1.5]}
        />
      </div>
    ),
  },
  {
    title: 'Simplify with Trig Identities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Use identities to rewrite an expression into a form you can evaluate or solve.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <Formula block>{String.raw`\sin^2\theta + \cos^2\theta = 1`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <Formula block>{String.raw`\tan\theta = \frac{\sin\theta}{\cos\theta}`}</Formula>
          </div>
        </div>
        <div className="rounded-xl bg-cyan-50 p-4">
          <p className="text-sm text-slate-600">For example, replace <Formula>{String.raw`1-\cos^2\theta`}</Formula> with <Formula>{String.raw`\sin^2\theta`}</Formula> before solving.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Unit Circle Explorer',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Explore sine, cosine, and tangent values in all four quadrants and use the CAST rule to track which ratios stay positive as the angle changes.</p>
        <UnitCircleExplorer initialAngle={30} showCastRule={true} />
      </div>
    ),
  },
  {
    title: 'Solve Trig Equations on the Interval',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Solve the basic equation first, then use CAST and the graph to find every solution in the required interval.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`2\sin x = 1 \Rightarrow \sin x = \frac{1}{2}`}</Formula>
          <Formula block>{String.raw`x = 30^\circ \text{ or } 150^\circ \quad \text{for } 0^\circ \le x < 360^\circ`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin((x * Math.PI) / 180), label: 'y = sin x', color: '#06b6d4' },
            { fn: () => 0.5, label: 'y = 1/2', color: '#f97316' },
          ]}
          xRange={[0, 360]}
          yRange={[-1.5, 1.5]}
        />
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'sin²x + cos²x = ?',
    options: ['1', '0', 'sin 2x', '2'],
    answer: '1',
    explanation: 'This is the fundamental Pythagorean identity: sin²x + cos²x = 1 for all x.',
  },
  {
    prompt: 'sin(180° − x) simplifies to:',
    options: ['−sin x', 'cos x', 'sin x', '−cos x'],
    answer: 'sin x',
    explanation: 'In quadrant 2, sin is positive and the reference angle is x, so sin(180°−x) = sin x.',
  },
  {
    prompt: 'cos(360° − x) simplifies to:',
    options: ['−cos x', 'cos x', 'sin x', '−sin x'],
    answer: 'cos x',
    explanation: 'In quadrant 4, cos is positive, so cos(360°−x) = cos x.',
  },
  {
    prompt: 'tan x can be written as:',
    options: ['cos x / sin x', 'sin x × cos x', '1 / sin x', 'sin x / cos x'],
    answer: 'sin x / cos x',
    explanation: 'This is the quotient identity: tan x = sin x / cos x.',
  },
  {
    prompt: 'The general solution of sin x = 1/2 includes:',
    options: ['x = 30° + 360°n', 'x = 60° + 360°n', 'x = 45° + 180°n', 'x = 150° + 180°n'],
    answer: 'x = 30° + 360°n',
    explanation: 'sin 30° = 1/2. General solution: x = 30° + 360°n or x = 150° + 360°n, n ∈ ℤ.',
  },
  {
    prompt: 'Simplify: (1 − cos²x) / sin x',
    options: ['cos x', 'tan x', 'sin x', '1/sin x'],
    answer: 'sin x',
    explanation: '1 − cos²x = sin²x (Pythagorean identity), so sin²x / sin x = sin x.',
  },
  {
    prompt: 'cos(180° + x) simplifies to:',
    options: ['cos x', '−cos x', 'sin x', '−sin x'],
    answer: '−cos x',
    explanation: 'In quadrant 3, cos is negative: cos(180°+x) = −cos x.',
  },
  {
    prompt: 'tan(360° + x) simplifies to:',
    options: ['−tan x', 'cot x', '0', 'tan x'],
    answer: 'tan x',
    explanation: 'tan has a period of 180°, and 360° = 2 × 180°, so tan(360°+x) = tan x.',
  },
  {
    prompt: 'Which of the following is NOT a valid trigonometric identity?',
    options: ['sin x + cos x = 1', 'sin²x + cos²x = 1', 'tan x = sin x / cos x', 'sin(180°−x) = sin x'],
    answer: 'sin x + cos x = 1',
    explanation: 'sin x + cos x = 1 is NOT an identity; it only holds for specific values. The Pythagorean identity uses squares: sin²x + cos²x = 1.',
  },
];

const Trigonometry = () => (
  <CapsSubjectTopic
    title="Trigonometry"
    subtitle="Identities, reduction formulae and general solutions"
    learnSteps={learnSteps}
    task="gr11-trigonometry-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Trigonometry;
