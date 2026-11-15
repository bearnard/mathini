import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    title: 'Reading scatter plots and correlation',
    content: (
      <>
        <p>
          Correlation describes the direction and strength of a relationship between two variables. A positive
          value of <Formula>{String.raw`r`}</Formula> suggests an upward trend, a negative value suggests a downward trend, and
          values close to zero suggest little linear relationship.
        </p>
        <Formula block>{String.raw`-1 \le r \le 1`}</Formula>
      </>
    ),
  },
  {
    title: 'Regression lines and prediction',
    content: (
      <>
        <p>
          A regression line models the trend in the data and can be used for prediction when the input value is
          sensible. Substitute the given value carefully into the regression equation and interpret the answer in
          the context of the question.
        </p>
        <Formula block>{String.raw`\hat{y} = a + bx`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 1.5 * x + 2, label: 'ŷ = 2 + 1,5x', color: '#6366f1' },
          ]}
          xRange={[0, 10]}
          yRange={[0, 18]}
        />
      </>
    ),
  },
  {
    title: 'Interpolation, extrapolation and caution',
    content: (
      <>
        <p>
          Interpolation uses values inside the observed data range, while extrapolation goes beyond it and is
          less reliable. Also remember that correlation does not prove causation, even if the trend looks strong.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "stat-1",
  question: "What does positive correlation mean?",
  options: ["As x increases, y tends to decrease", "As x increases, y tends to increase", "There is no relationship between x and y", "The graph must pass through the origin"],
  answer: 1,
  explanation: "Positive correlation means the variables tend to increase together.",
},
{
  id: "stat-2",
  question: "A correlation coefficient of r = −0.92 indicates ...",
  options: ["strong positive correlation", "weak negative correlation", "strong negative correlation", "no correlation"],
  answer: 2,
  explanation: "Because r is close to −1, the negative linear relationship is strong.",
},
{
  id: "stat-3",
  question: "Predicting a value within the range of the observed data is called ...",
  options: ["extrapolation", "interpolation", "standardisation", "stratification"],
  answer: 1,
  explanation: "Interpolation uses values within the data range.",
},
{
  id: "stat-4",
  question: "Predicting a value beyond the range of the observed data is called ...",
  options: ["correlation", "interpolation", "extrapolation", "sampling"],
  answer: 2,
  explanation: "Extrapolation is prediction outside the data range.",
},
{
  id: "stat-5",
  question: "Use the regression line y = 2x + 5 to estimate y when x = 4.",
  options: ["9", "11", "13", "15"],
  answer: 2,
  explanation: "Substitute x = 4: y = 2(4) + 5 = 13.",
},
{
  id: "stat-6",
  question: "If the scatter plot points lie very close to a straight line, the correlation is ...",
  options: ["strong", "weak", "zero", "cyclic"],
  answer: 0,
  explanation: "Points close to a straight line indicate strong linear correlation.",
},
{
  id: "stat-7",
  question: "Which statement is correct?",
  options: ["Correlation proves causation", "Causation always gives r = 1", "Correlation does not by itself prove causation", "Only positive correlation matters"],
  answer: 2,
  explanation: "Two variables may be correlated without one causing the other.",
},
{
  id: "stat-8",
  question: "If a scatter plot slopes downward from left to right, the correlation is ...",
  options: ["positive", "negative", "zero", "non-linear only"],
  answer: 1,
  explanation: "A downward trend from left to right shows negative correlation.",
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

  const StatisticsRegressionCorrelation = () => (
    <CapsSubjectTopic
      title="Statistics: Regression and Correlation"
      subtitle="Scatter plots, least-squares lines and sensible prediction"
      learnSteps={topicLearnSteps}
      task="gr12-statistics-regression-correlation-t3"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default StatisticsRegressionCorrelation;
