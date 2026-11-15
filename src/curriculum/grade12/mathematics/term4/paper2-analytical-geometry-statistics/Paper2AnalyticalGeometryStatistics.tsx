import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    title: 'Coordinate methods you must recall quickly',
    content: (
      <>
        <p>
          Paper 2 often rewards fast recall of core coordinate formulas. Know when to use midpoint, distance and
          gradient so that you can start the algebra immediately.
        </p>
        <Formula block>{String.raw`\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right),\quad \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2},\quad m = \frac{y_2-y_1}{x_2-x_1}`}</Formula>
      </>
    ),
  },
  {
    title: 'Circle and line relationships',
    content: (
      <>
        <p>
          Link line equations, gradients and circle facts in one flow of reasoning. If a tangent is involved,
          use the radius-perpendicular fact and the standard circle equation to keep the coordinate proof under
          control.
        </p>
        <Formula block>{String.raw`(x-a)^2 + (y-b)^2 = r^2,\quad m_1m_2 = -1`}</Formula>
        <FunctionGraph equalAxes
          curves={[
            {
              fn: (x: number) => (Math.abs(x) <= 4 ? Math.sqrt(16 - x ** 2) : NaN),
              label: 'upper semicircle',
              color: '#6366f1',
            },
            {
              fn: (x: number) => (Math.abs(x) <= 4 ? -Math.sqrt(16 - x ** 2) : NaN),
              label: 'lower semicircle',
              color: '#6366f1',
            },
            { fn: (x: number) => -0.57735 * x + 4.6188, label: 'tangent line', color: '#ef4444' },
          ]}
          xRange={[-5, 5]}
          yRange={[-5, 6]}
        />
      </>
    ),
  },
  {
    title: 'Statistics with sensible interpretation',
    content: (
      <>
        <p>
          In statistics questions, do more than calculate. Explain whether the regression direction is positive
          or negative, identify when you are interpolating or extrapolating, and interpret the result in the
          context of the data.
        </p>
        <Formula block>{String.raw`\hat{y} = a + bx`}</Formula>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "rev3-1",
  question: "What is the midpoint of the line segment joining (2, 1) and (6, 5)?",
  options: ["(3, 2)", "(4, 3)", "(4, 6)", "(8, 6)"],
  answer: 1,
  explanation: "Use the midpoint formula: ((2 + 6)/2, (1 + 5)/2) = (4, 3).",
},
{
  id: "rev3-2",
  question: "Find the gradient of the line through (1, 2) and (4, 8).",
  options: ["1", "2", "3", "6"],
  answer: 1,
  explanation: "m = (8 − 2)/(4 − 1) = 6/3 = 2.",
},
{
  id: "rev3-3",
  question: "Which equation represents a circle with centre (0, 0) and radius 6?",
  options: ["x² + y² = 6", "x² + y² = 12", "x² + y² = 36", "(x − 6)² + y² = 36"],
  answer: 2,
  explanation: "A circle centred at the origin has equation x² + y² = r² = 36.",
},
{
  id: "rev3-4",
  question: "A strong negative correlation means ...",
  options: ['the variables increase together closely, so a rise in one means a rise in the other', 'the variables decrease together closely', 'as one variable increases, the other tends to decrease closely', 'there is no clear trend between them'],
  answer: 2,
  explanation: "Negative correlation means one increases while the other tends to decrease; “strong” means the pattern is close to a line.",
},
{
  id: "rev3-5",
  question: "Estimating a value inside the data range is called ...",
  options: ["interpolation", "extrapolation", "reflection", "translation"],
  answer: 0,
  explanation: "Interpolation uses values within the observed data range.",
},
{
  id: "rev3-6",
  question: "What is the distance between (1, 2) and (4, 6)?",
  options: ["4", "5", "6", "7"],
  answer: 1,
  explanation: "Distance = √[(4 − 1)² + (6 − 2)²] = √(9 + 16) = √25 = 5.",
},
{
  id: "rev3-7",
  question: "A line perpendicular to a line with gradient 2 has gradient ...",
  options: ["2", "1/2", "−2", "−1/2"],
  answer: 3,
  explanation: "Perpendicular gradients multiply to −1, so the new gradient is −1/2.",
},
{
  id: "rev3-8",
  question: "Use y = 3x − 2 to estimate y when x = 5.",
  options: ["11", "12", "13", "15"],
  answer: 2,
  explanation: "Substitute x = 5: y = 3(5) − 2 = 13.",
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

  const Paper2AnalyticalGeometryStatistics = () => (
    <CapsSubjectTopic
      title="Paper 2 Analytical Geometry and Statistics Revision"
      subtitle="Coordinate geometry, circle facts, regression and data interpretation"
      learnSteps={topicLearnSteps}
      task="gr12-paper2-analytical-geometry-statistics-t4"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default Paper2AnalyticalGeometryStatistics;
