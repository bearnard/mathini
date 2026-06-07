import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/math/term1/functions-inverse-functions/diagram.webp", alt: "Functions and Inverse Functions" },
    title: 'What makes a relation a function?',
    content: (
      <>
        <p>
          A function assigns exactly one output to each input, so the vertical-line test helps you decide
          whether a graph represents a function. Domain and range remain important because they describe the set
          of allowed inputs and outputs.
        </p>
        <Formula block>{String.raw`y = f(x)`}</Formula>
      </>
    ),
  },
  {
    title: 'One-to-one functions and the horizontal-line test',
    content: (
      <>
        <p>
          An inverse exists only when the original function is one-to-one. Use the horizontal-line test to check
          whether each output value is produced once, and remember that many quadratics need a restricted domain
          before they can have an inverse.
        </p>
        <Formula block>{String.raw`x \ge 0 \text{ for } f(x)=x^2`}</Formula>
      </>
    ),
  },
  {
    title: 'Finding inverse functions algebraically',
    content: (
      <>
        <p>
          Start with <Formula>{String.raw`y = f(x)`}</Formula>, swap <Formula>{String.raw`x`}</Formula> and <Formula>{String.raw`y`}</Formula>, solve for{' '}
          <Formula>{String.raw`y`}</Formula>, and then rewrite the answer as <Formula>{String.raw`f^{-1}(x)`}</Formula>. State any
          restrictions clearly because the domain of the original becomes the range of the inverse.
        </p>
      </>
    ),
  },
  {
    title: 'Graph features of a function and its inverse',
    content: (
      <>
        <p>
          The graph of <Formula>{String.raw`f^{-1}(x)`}</Formula> is the reflection of <Formula>{String.raw`f(x)`}</Formula> in the line{' '}
          <Formula>{String.raw`y = x`}</Formula>. That reflection swaps the domain and range, so intercepts and turning points
          should be interpreted carefully.
        </p>
        <FunctionGraph
          curves={[
            { fn: (x: number) => (x >= 0 ? x ** 2 : NaN), label: 'f(x) = x^2, x ≥ 0', color: '#6366f1' },
            { fn: (x: number) => (x >= 0 ? Math.sqrt(x) : NaN), label: 'f⁻¹(x) = √x', color: '#ef4444' },
            { fn: (x: number) => x, label: 'y = x', color: '#10b981' },
          ]}
          xRange={[-1, 5]}
          yRange={[-1, 5]}
        />
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "func-1",
  question: "Which statement is always true for a function?",
  options: ["Each output has exactly one input", "Each input has exactly one output", "The graph must be a straight line", "The domain and range must be the same"],
  answer: 1,
  explanation: "A function is defined by each input having exactly one output.",
},
{
  id: "func-2",
  question: "Why is f(x) = x² not one-to-one on all real numbers?",
  options: ["It has no inverse relation", "Different x-values can give the same y-value", "Its graph is not continuous", "Its gradient is always positive"],
  answer: 1,
  explanation: "For example, 2² = 4 and (−2)² = 4, so different inputs produce the same output.",
},
{
  id: "func-3",
  question: "Find f⁻¹(x) if f(x) = 2x − 7.",
  options: ["(x − 7)/2", "(x + 7)/2", "2x + 7", "7 − 2x"],
  answer: 1,
  explanation: "Swap x and y in y = 2x − 7, then solve: x = 2y − 7 so y = (x + 7)/2.",
},
{
  id: "func-4",
  question: "If f(x) = 3x + 4, what is f⁻¹(19)?",
  options: ["3", "4", "5", "19/3"],
  answer: 2,
  explanation: "f⁻¹(x) = (x − 4)/3, so f⁻¹(19) = 15/3 = 5.",
},
{
  id: "func-5",
  question: "Find the inverse of f(x) = (x − 1)³.",
  options: ["∛x − 1", "∛(x − 1)", "∛x + 1", "(x + 1)³"],
  answer: 2,
  explanation: "Swap x and y: x = (y − 1)³, so y = ∛x + 1.",
},
{
  id: "func-6",
  question: "A function and its inverse are reflections in which line?",
  options: ["x = 0", "y = 0", "y = x", "y = −x"],
  answer: 2,
  explanation: "Inverse graphs are reflections in the line y = x.",
},
{
  id: "func-7",
  question: "Which test helps you decide whether a function has an inverse that is also a function?",
  options: ["Vertical-line test", "Gradient test", "Horizontal-line test", "Midpoint test"],
  answer: 2,
  explanation: "The horizontal-line test checks whether the function is one-to-one.",
},
{
  id: "func-8",
  question: "If f(x) = x² with domain x ≥ 0, what is f⁻¹(9)?",
  options: ["−3", "0", "3", "9"],
  answer: 2,
  explanation: "On x ≥ 0 the inverse is √x, so f⁻¹(9) = 3.",
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

  const FunctionsInverseFunctions = () => (
    <CapsSubjectTopic
      title="Functions and Inverse Functions"
      subtitle="One-to-one relations, domain restrictions and inverse graphs"
      learnSteps={topicLearnSteps}
      task="gr12-functions-inverse-functions-t1"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default FunctionsInverseFunctions;
