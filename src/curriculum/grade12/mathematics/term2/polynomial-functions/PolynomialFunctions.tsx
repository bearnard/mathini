import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    title: 'Remainder theorem and factor theorem',
    content: (
      <>
        <p>
          The remainder theorem connects substitution to division, so evaluating <Formula>{String.raw`f(a)`}</Formula> tells
          you the remainder when dividing by <Formula>{String.raw`x-a`}</Formula>. If <Formula>{String.raw`f(a)=0`}</Formula>, then{' '}
          <Formula>{String.raw`x-a`}</Formula> is a factor.
        </p>
        <Formula block>{String.raw`f(a)=0 \iff (x-a) \text{ is a factor of } f(x)`}</Formula>
      </>
    ),
  },
  {
    title: 'Factorising cubic polynomials',
    content: (
      <>
        <p>
          For cubics, find one factor first and then divide to reduce the expression to a quadratic. From there,
          solve for the remaining roots and rewrite the polynomial in factorised form.
        </p>
        <Formula block>{String.raw`f(x) = (x-a)(x^2+bx+c)`}</Formula>
      </>
    ),
  },
  {
    title: 'Roots, multiplicity and graph shape',
    content: (
      <>
        <p>
          The multiplicity of a root affects the graph: simple roots usually cross the x-axis, while even
          multiplicity roots touch and turn. Always connect the algebraic factors to the sketch of the graph.
        </p>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 3 - 3 * x + 1, label: 'f(x) = x³ - 3x + 1', color: '#6366f1' },
          ]}
          xRange={[-3, 3]}
          yRange={[-5, 5]}
        />
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "poly-1",
  question: "If (x − 2) is a factor of f(x), what must be true?",
  options: ["f(−2) = 0", "f(2) = 0", "f(2) = 2", "f(0) = 2"],
  answer: 1,
  explanation: "By the factor theorem, (x − 2) is a factor exactly when f(2) = 0.",
},
{
  id: "poly-2",
  question: "What is the remainder when x³ + 2x² − 5 is divided by x + 1?",
  options: ["−6", "−5", "−4", "4"],
  answer: 2,
  explanation: "Use f(−1): (−1)³ + 2(−1)² − 5 = −1 + 2 − 5 = −4.",
},
{
  id: "poly-3",
  question: "Factorise x³ − x² − 4x + 4 completely.",
  options: ["(x − 1)(x² + 4)", "(x − 1)(x − 2)(x + 2)", "(x + 1)(x − 2)²", "(x − 4)(x² − 1)"],
  answer: 1,
  explanation: "Group terms: x²(x − 1) − 4(x − 1) = (x − 1)(x² − 4) = (x − 1)(x − 2)(x + 2).",
},
{
  id: "poly-4",
  question: "Which number is a zero of x³ − 6x² + 11x − 6?",
  options: ["0", "1", "4", "6"],
  answer: 1,
  explanation: "Substituting x = 1 gives 1 − 6 + 11 − 6 = 0, so x = 1 is a root.",
},
{
  id: "poly-5",
  question: "In y = (x − 3)²(x + 1), what kind of root is x = 3?",
  options: ["No root", "Simple root", "Double root", "Triple root"],
  answer: 2,
  explanation: "The factor (x − 3)² shows that x = 3 has multiplicity 2, so it is a double root.",
},
{
  id: "poly-6",
  question: "What is the maximum number of turning points a cubic graph can have?",
  options: ["1", "2", "3", "4"],
  answer: 1,
  explanation: "A cubic function can have at most 2 turning points.",
},
{
  id: "poly-7",
  question: "What is the y-intercept of y = x³ − 2x + 5?",
  options: ["−2", "0", "3", "5"],
  answer: 3,
  explanation: "Set x = 0 to get y = 5.",
},
{
  id: "poly-8",
  question: "Which monic polynomial has roots 1, −2 and 4?",
  options: ["(x + 1)(x − 2)(x − 4)", "(x − 1)(x + 2)(x − 4)", "(x − 1)(x − 2)(x + 4)", "(x + 1)(x + 2)(x − 4)"],
  answer: 1,
  explanation: "A monic polynomial with roots r uses factors (x − r), so the factors are (x − 1)(x + 2)(x − 4).",
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

  const PolynomialFunctions = () => (
    <CapsSubjectTopic
      title="Polynomial Functions"
      subtitle="Factor theorem, remainder theorem and cubic behaviour"
      learnSteps={topicLearnSteps}
      task="gr12-polynomial-functions-t2"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default PolynomialFunctions;
