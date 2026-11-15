import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    title: 'Derivative from first principles',
    content: (
      <>
        <p>
          First principles shows where the derivative comes from and why it represents the gradient of a curve at
          a point. It remains the foundation before moving to quicker derivative rules.
        </p>
        <Formula block>{String.raw`f'(x) = \lim_{h \to 0}\frac{f(x+h)-f(x)}{h}`}</Formula>
      </>
    ),
  },
  {
    title: 'Derivative rules and tangent gradients',
    content: (
      <>
        <p>
          Once the basic rules are known, differentiate term by term and then interpret the result as a gradient
          function. When asked for a tangent, substitute the x-value into both <Formula>{String.raw`f(x)`}</Formula> and{' '}
          <Formula>{String.raw`f'(x)`}</Formula> before writing the tangent equation.
        </p>
        <Formula block>{String.raw`\frac{d}{dx}(x^n) = nx^{n-1},\quad y-y_1 = m(x-x_1)`}</Formula>
      </>
    ),
  },
  {
    title: 'Stationary points and graph analysis',
    content: (
      <>
        <p>
          Stationary points occur where <Formula>{String.raw`f'(x) = 0`}</Formula>. Solve that equation first, then use the
          sign of the derivative or the shape of the graph to classify turning points and sketch the curve.
        </p>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 3 - 3 * x, label: 'f(x) = x³ - 3x', color: '#6366f1' },
            { fn: (x: number) => 3 * x ** 2 - 3, label: "f'(x) = 3x² - 3", color: '#ef4444' },
          ]}
          xRange={[-3, 3]}
          yRange={[-7, 7]}
        />
      </>
    ),
  },
  {
    title: 'Optimisation and rate of change',
    content: (
      <>
        <p>
          In optimisation, build an expression for the quantity you want to maximise or minimise, differentiate,
          and test the critical points in context. For rate-of-change questions, explain what the derivative says
          about how one quantity changes as another changes.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "calc-1",
  question: "Using first principles, the derivative of x² is ...",
  options: ["x", "2x", "x²", "2"],
  answer: 1,
  explanation: "The limit from first principles simplifies to 2x.",
},
{
  id: "calc-2",
  question: "Differentiate y = x³ − 4x.",
  options: ["3x² − 4", "x² − 4", "3x²", "x³ − 4x"],
  answer: 0,
  explanation: "Differentiate term by term: d/dx(x³) = 3x² and d/dx(−4x) = −4.",
},
{
  id: "calc-3",
  question: "What is the gradient of y = 5x² at x = 3?",
  options: ["15", "30", "45", "90"],
  answer: 1,
  explanation: "dy/dx = 10x, so at x = 3 the gradient is 30.",
},
{
  id: "calc-4",
  question: "Find the tangent to y = x² + 1 at x = 2.",
  options: ["y = 4x + 5", "y = 4x − 3", "y = 2x + 1", "y = x² + 1"],
  answer: 1,
  explanation: "The point is (2, 5) and the gradient is 4, so y − 5 = 4(x − 2), which gives y = 4x − 3.",
},
{
  id: "calc-5",
  question: "At which x-values does y = x³ − 3x have stationary points?",
  options: ["x = 0 only", "x = ±1", "x = ±3", "x = 1 and 3"],
  answer: 1,
  explanation: "dy/dx = 3x² − 3 = 3(x² − 1), so x = −1 or x = 1.",
},
{
  id: "calc-6",
  question: "For y = x³ − 3x, where is the local maximum?",
  options: ["x = −1", "x = 0", "x = 1", "x = −3"],
  answer: 0,
  explanation: "y″ = 6x. At x = −1, y″ is negative, so the stationary point is a local maximum.",
},
{
  id: "calc-7",
  question: "A rectangle has perimeter 20. What is its maximum area?",
  options: ["20", "24", "25", "50"],
  answer: 2,
  explanation: "The rectangle of maximum area is a square with side 5, so the area is 25.",
},
{
  id: "calc-8",
  question: "The derivative of a function represents its ...",
  options: ['average value of the function', 'instantaneous rate of change', 'x-intercept of the graph', 'domain of the function'],
  answer: 1,
  explanation: "The derivative gives the instantaneous rate of change, or gradient, at a point.",
}
  ];

  const bank: CapsItem[] = items.map((item) => ({
    prompt: item.question,
    options: item.options,
    answer: item.options[item.answer],
    explanation: item.explanation,
  }));

const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: <div className="space-y-4 text-left text-lg leading-8 text-slate-600">{step.content}</div>,
}));

  const DifferentialCalculus = () => (
    <CapsSubjectTopic
      title="Differential Calculus"
      subtitle="Derivatives, tangents, stationary points and optimisation"
      learnSteps={topicLearnSteps}
      task="gr12-differential-calculus-t2"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default DifferentialCalculus;
