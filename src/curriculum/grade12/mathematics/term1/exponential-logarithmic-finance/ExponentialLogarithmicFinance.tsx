import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    title: 'Reading exponential functions',
    content: (
      <>
        <p>
          Exponential functions have the variable in the exponent, for example <Formula>{String.raw`y = 2^x`}</Formula>.
          Their y-intercept is found by substituting <Formula>{String.raw`x = 0`}</Formula>, and many have the x-axis as a
          horizontal asymptote. Be ready to compare growth and decay by looking at the base and by interpreting
          graphs in context.
        </p>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 2 ** x, label: 'y = 2^x', color: '#6366f1' },
            { fn: (x: number) => (1 / 2) ** x, label: 'y = (1/2)^x', color: '#ef4444' },
          ]}
          xRange={[-4, 4]}
          yRange={[-1, 8]}
        />
      </>
    ),
  },
  {
    title: 'What a logarithm means',
    content: (
      <>
        <p>
          A logarithm answers the question: “to what power must the base be raised?” If{' '}
          <Formula>{String.raw`\log_b a = c`}</Formula>, then <Formula>{String.raw`b^c = a`}</Formula>. This link between log and exponent
          form is essential for solving equations and for understanding financial questions where time is the
          unknown.
        </p>
        <Formula block>{String.raw`\log_a x = \frac{\log x}{\log a}`}</Formula>
      </>
    ),
  },
  {
    title: 'Log laws and solving equations',
    content: (
      <>
        <p>
          Use the log laws when the bases match and the arguments are positive. When solving exponential
          equations such as <Formula>{String.raw`3^x = 81`}</Formula>, first rewrite with a common base if possible. If not,
          logarithms help isolate the exponent.
        </p>
        <Formula block>{String.raw`\log(ab)=\log a + \log b,\quad \log\left(\frac{a}{b}\right)=\log a - \log b,\quad \log(a^n)=n\log a`}</Formula>
      </>
    ),
  },
  {
    title: 'Finance, growth and decay',
    content: (
      <>
        <p>
          Compound growth and decay use repeated multiplication. CAPS also expects you to interpret present
          value, future value and long-term financial decisions sensibly. Always match the rate and time period
          before substituting.
        </p>
        <Formula block>{String.raw`A = P(1+i)^n,\quad A = P(1-i)^n`}</Formula>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "exp-1",
  question: "Which exponential statement is equivalent to log₂ 8 = 3?",
  options: ["2³ = 8", "3² = 8", "8² = 3", "2⁸ = 3"],
  answer: 0,
  explanation: "log₂ 8 = 3 means 2 raised to the power 3 gives 8.",
},
{
  id: "exp-2",
  question: "Evaluate log₁₀ 1000.",
  options: ["1", "2", "3", "10"],
  answer: 2,
  explanation: "10³ = 1000, so log₁₀ 1000 = 3.",
},
{
  id: "exp-3",
  question: "Solve 3ˣ = 81.",
  options: ["2", "3", "4", "5"],
  answer: 2,
  explanation: "81 = 3⁴, so x = 4.",
},
{
  id: "exp-4",
  question: "Solve log₅ x = 2.",
  options: ["7", "10", "20", "25"],
  answer: 3,
  explanation: "Rewrite in exponential form: x = 5² = 25.",
},
{
  id: "exp-5",
  question: "What is the y-intercept of y = 4ˣ?",
  options: ["0", "1", "4", "Cannot be determined"],
  answer: 1,
  explanation: "At x = 0, y = 4⁰ = 1.",
},
{
  id: "exp-6",
  question: "R5 000 is invested at 8% per year, compounded annually, for 2 years. What is the future value?",
  options: ["R5 400", "R5 800", "R5 832", "R5 900"],
  answer: 2,
  explanation: "A = 5000(1,08)² = 5000(1,1664) = R5 832.",
},
{
  id: "exp-7",
  question: "A population halves every hour. If it starts at 320, how many remain after 3 hours?",
  options: ["80", "60", "40", "20"],
  answer: 2,
  explanation: "320 × (1/2)³ = 320/8 = 40.",
},
{
  id: "exp-8",
  question: "Which log law is correct?",
  options: ["log a + log b = log(a + b)", "log a + log b = log(ab)", "log(a/b) = log a + log b", "log(aⁿ) = log aⁿ⁻¹"],
  answer: 1,
  explanation: "The product law says log a + log b = log(ab).",
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

  const ExponentialLogarithmicFinance = () => (
    <CapsSubjectTopic
      title="Exponential and Logarithmic Functions in Finance"
      subtitle="Log laws, growth and decay, and compound-interest reasoning"
      learnSteps={topicLearnSteps}
      task="gr12-exponential-logarithmic-finance-t1"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default ExponentialLogarithmicFinance;
