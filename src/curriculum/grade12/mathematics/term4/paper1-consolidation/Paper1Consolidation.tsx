import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

  const learnSteps: LearnStep[] = [
  {
    title: 'Choosing efficient methods under time pressure',
    content: (
      <>
        <p>
          Under exam pressure, identify the structure of the question quickly so that you choose the right tool:
          a sequence formula such as <Formula>{String.raw`T_n = a + (n-1)d`}</Formula>, a finance model such as{' '}
          <Formula>{String.raw`A = P(1+i)^n`}</Formula>, or a derivative for a function question.
        </p>
      </>
    ),
  },
  {
    title: 'Checking algebra and calculator work',
    content: (
      <>
        <p>
          Most Paper 1 errors come from signs, brackets and calculator mode. Re-read each line, check that the
          calculator is doing what the algebra says, and make sure a final answer is sensible in the context.
        </p>
      </>
    ),
  },
  {
    title: 'Linking topics across one paper',
    content: (
      <>
        <p>
          A strong Paper 1 response blends algebraic fluency with interpretation, so move confidently between
          formulas such as <Formula>{String.raw`f'(x)`}</Formula>, <Formula>{String.raw`\log_a x`}</Formula> and{' '}
          <Formula>{String.raw`P(A \cup B)`}</Formula> while still explaining what the answer means.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "rev1-1",
  question: "What is the 12th term of the arithmetic sequence 7, 10, 13, ...?",
  options: ["37", "40", "43", "46"],
  answer: 1,
  explanation: "T₁₂ = 7 + 11(3) = 40.",
},
{
  id: "rev1-2",
  question: "Solve 2ˣ = 32.",
  options: ["3", "4", "5", "6"],
  answer: 2,
  explanation: "32 = 2⁵, so x = 5.",
},
{
  id: "rev1-3",
  question: "Differentiate y = x² + 3x.",
  options: ["2x + 3", "x + 3", "2x", "x² + 3"],
  answer: 0,
  explanation: "Use the power rule term by term: dy/dx = 2x + 3.",
},
{
  id: "rev1-4",
  question: "Find the x-coordinate of the stationary point of y = x² − 4x + 1.",
  options: ["1", "2", "3", "4"],
  answer: 1,
  explanation: "dy/dx = 2x − 4. Set it equal to 0 to get x = 2.",
},
{
  id: "rev1-5",
  question: "Find the infinite sum 18 + 6 + 2 + ...",
  options: ["24", "27", "30", "36"],
  answer: 1,
  explanation: "a = 18 and r = 1/3, so S∞ = 18/(1 − 1/3) = 18/(2/3) = 27.",
},
{
  id: "rev1-6",
  question: "R2 000 is invested at 5% per year, compounded annually, for 2 years. What is the future value?",
  options: ["R2 100", "R2 150", "R2 205", "R2 250"],
  answer: 2,
  explanation: "A = 2000(1.05)² = 2000(1.1025) = R2 205.",
},
{
  id: "rev1-7",
  question: "If f(x) = x + 4, then f⁻¹(x) = ...",
  options: ["x + 4", "x − 4", "4 − x", "1/(x + 4)"],
  answer: 1,
  explanation: "Swap x and y in y = x + 4 to get x = y + 4, so y = x − 4.",
},
{
  id: "rev1-8",
  question: "What is the probability of rolling a 6 on a fair die?",
  options: ["1/3", "1/4", "1/5", "1/6"],
  answer: 3,
  explanation: "There is 1 favourable outcome out of 6 equally likely outcomes.",
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

  const Paper1Consolidation = () => (
    <CapsSubjectTopic
      title="Paper 1 Consolidation"
      subtitle="Fast revision across sequences, functions, finance, calculus and probability"
      learnSteps={topicLearnSteps}
      task="gr12-paper1-consolidation-t4"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default Paper1Consolidation;
