import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Find the Equation of a Line',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">A line is controlled by its gradient and intercept. Use <Formula>{String.raw`m = \tan\theta`}</Formula> for inclination and write the equation in a form that matches the information you are given.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`y = mx + c`}</Formula>
          <Formula block>{String.raw`y - y_1 = m(x - x_1)`}</Formula>
        </div>
        <FunctionGraph equalAxes
          curves={[
            { fn: (x: number) => 0.75 * x + 1, label: 'y = 0.75x + 1', color: '#6366f1' },
          ]}
          xRange={[-4, 4]}
          yRange={[-3, 5]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">From two points</h4>
            <Formula block>{String.raw`m = \frac{y_2 - y_1}{x_2 - x_1}`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">From a point and slope</h4>
            <p className="text-sm text-slate-600">Substitute the known point into <Formula>{String.raw`y - y_1 = m(x - x_1)`}</Formula> and simplify.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Compare Parallel and Perpendicular Lines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Parallel lines share the same gradient, while perpendicular lines have gradients whose product is <Formula>{String.raw`-1`}</Formula>.</p>
        <Formula block>{String.raw`m_1 = m_2 \quad \text{or} \quad m_1m_2 = -1`}</Formula>
        <FunctionGraph equalAxes
          curves={[
            { fn: (x: number) => 0.5 * x + 1, label: 'parallel 1', color: '#06b6d4' },
            { fn: (x: number) => 0.5 * x - 2, label: 'parallel 2', color: '#14b8a6' },
            { fn: (x: number) => -2 * x + 1, label: 'perpendicular', color: '#f59e0b' },
          ]}
          xRange={[-4, 4]}
          yRange={[-6, 6]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Parallel check</h4>
            <p className="text-sm text-slate-600">If both lines have <Formula>{String.raw`m = 2`}</Formula>, they never meet.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Perpendicular check</h4>
            <p className="text-sm text-slate-600">If one slope is <Formula>{String.raw`\frac{1}{2}`}</Formula>, the perpendicular slope is <Formula>{String.raw`-2`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use Midpoint and Distance Formulae',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Coordinate geometry often asks you to find the midpoint of a segment or the distance between two points before solving a larger problem.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`M\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)`}</Formula>
          <Formula block>{String.raw`d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`}</Formula>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">Midpoint example</h4>
            <Formula block>{String.raw`M = \left(\frac{2 + 8}{2}, \frac{-1 + 5}{2}\right) = (5, 2)`}</Formula>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <h4 className="font-semibold text-rose-700">Distance example</h4>
            <Formula block>{String.raw`d = \sqrt{(8-2)^2 + (5-(-1))^2} = 6\sqrt{2}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'A line has gradient m = tan 60°. Its inclination angle is:',
    options: ['30°', '60°', '45°', '120°'],
    answer: '60°',
    explanation: 'm = tan θ, so if m = tan 60°, then θ = 60°.',
  },
  {
    prompt: 'Two lines are perpendicular when:',
    options: ['m₁ = m₂', 'm₁ + m₂ = 0', 'm₁ × m₂ = −1', 'm₁ − m₂ = 1'],
    answer: 'm₁ × m₂ = −1',
    explanation: 'Perpendicular lines satisfy m₁ × m₂ = −1. This is the perpendicularity condition.',
  },
  {
    prompt: 'What is the gradient of the line through (2, 3) and (6, 11)?',
    options: ['2', '3', '4', '1/2'],
    answer: '2',
    explanation: 'm = (11−3)/(6−2) = 8/4 = 2.',
  },
  {
    prompt: 'A line parallel to y = 3x + 1 has gradient:',
    options: ['1/3', '−1/3', '−3', '3'],
    answer: '3',
    explanation: 'Parallel lines have equal gradients. The gradient of y = 3x + 1 is 3.',
  },
  {
    prompt: 'If the inclination of a line is 135°, its gradient is:',
    options: ['√3', '−1', '1', '−√3'],
    answer: '−1',
    explanation: 'm = tan 135° = tan(180°−45°) = −tan 45° = −1.',
  },
  {
    prompt: 'The midpoint of (1, 2) and (5, 8) is:',
    options: ['(3, 5)', '(4, 5)', '(2, 4)', '(3, 4)'],
    answer: '(3, 5)',
    explanation: 'Midpoint = ((1+5)/2, (2+8)/2) = (6/2, 10/2) = (3, 5).',
  },
  {
    prompt: 'A line through (0, 4) with gradient −2 has equation:',
    options: ['y = −2x − 4', 'y = 2x + 4', 'y = −2x + 4', 'y = −4x + 2'],
    answer: 'y = −2x + 4',
    explanation: 'y = mx + c with m = −2 and c = 4 (y-intercept): y = −2x + 4.',
  },
  {
    prompt: 'If m₁ = 2/3, the gradient of a perpendicular line is:',
    options: ['3/2', '2/3', '−2/3', '−3/2'],
    answer: '−3/2',
    explanation: 'm₂ = −1/m₁ = −1/(2/3) = −3/2.',
  },
  {
    prompt: 'The inclination angle of a horizontal line is:',
    options: ['90°', '0°', '180°', '45°'],
    answer: '0°',
    explanation: 'A horizontal line has m = 0 = tan 0°, so inclination θ = 0°.',
  },
];

const AnalyticalGeometry = () => (
  <CapsSubjectTopic
    title="Analytical Geometry"
    subtitle="Line equations, inclination, parallel and perpendicular lines"
    learnSteps={learnSteps}
    task="gr11-analytical-geometry-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AnalyticalGeometry;
