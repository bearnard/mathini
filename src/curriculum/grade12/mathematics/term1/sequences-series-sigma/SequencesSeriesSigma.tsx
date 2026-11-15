import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

  const learnSteps: LearnStep[] = [
  {
    title: 'Arithmetic sequences and the nth term',
    content: (
      <>
        <p>
          In an arithmetic sequence the common difference stays constant, so identify the first term and the
          difference before substituting into the nth-term formula.
        </p>
        <Formula block>{String.raw`T_n = a + (n-1)d`}</Formula>
      </>
    ),
  },
  {
    title: 'Arithmetic series and contextual totals',
    content: (
      <>
        <p>
          A series adds terms together, so distinguish carefully between the term formula and the sum formula.
          In context questions, decide whether the problem asks for a single term or the total up to a given
          term.
        </p>
        <Formula block>{String.raw`S_n = \frac{n}{2}\bigl(2a + (n-1)d\bigr)`}</Formula>
      </>
    ),
  },
  {
    title: 'Geometric sequences and infinite sums',
    content: (
      <>
        <p>
          In a geometric sequence the ratio stays constant. Use the ratio to move from one term to the next, and
          remember that the infinite sum exists only when <Formula>{String.raw`|r| < 1`}</Formula>.
        </p>
        <Formula block>{String.raw`T_n = ar^{n-1},\quad S_n = \frac{a(1-r^n)}{1-r},\quad S_\infty = \frac{a}{1-r}`}</Formula>
      </>
    ),
  },
  {
    title: 'Sigma notation as a compact sum',
    content: (
      <>
        <p>
          Sigma notation writes a long sum compactly, but you still need to read the starting value, ending
          value and general term carefully before expanding or evaluating.
        </p>
        <Formula block>{String.raw`\sum_{k=1}^{5}(k+2)=3+4+5+6+7`}</Formula>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "seq-1",
  question: "What is the nth term of the arithmetic sequence 4, 9, 14, ...?",
  options: ["5n + 1", "5n − 1", "4n + 1", "4n − 1"],
  answer: 1,
  explanation: "Here a = 4 and d = 5, so Tₙ = 4 + (n − 1)5 = 5n − 1.",
},
{
  id: "seq-2",
  question: "What is the 15th term of the arithmetic sequence 7, 11, 15, ...?",
  options: ["59", "63", "67", "71"],
  answer: 1,
  explanation: "T₁₅ = 7 + 14(4) = 63.",
},
{
  id: "seq-3",
  question: "Find the sum of the first 20 terms of 3, 7, 11, ...",
  options: ["780", "800", "820", "840"],
  answer: 2,
  explanation: "a = 3, d = 4 and T₂₀ = 79. Then S₂₀ = 20/2(3 + 79) = 10 × 82 = 820.",
},
{
  id: "seq-4",
  question: "What is the common ratio of the geometric sequence 81, 27, 9, ...?",
  options: ["3", "1/3", "−3", "−1/3"],
  answer: 1,
  explanation: "Each term is divided by 3, so r = 27/81 = 1/3.",
},
{
  id: "seq-5",
  question: "What is the 6th term of the geometric sequence 2, 6, 18, ...?",
  options: ["162", "243", "324", "486"],
  answer: 3,
  explanation: "a = 2 and r = 3, so T₆ = 2 × 3⁵ = 486.",
},
{
  id: "seq-6",
  question: "Find the infinite sum 12 + 6 + 3 + ...",
  options: ["18", "21", "24", "27"],
  answer: 2,
  explanation: "a = 12 and r = 1/2, so S∞ = 12/(1 − 1/2) = 24.",
},
{
  id: "seq-7",
  question: "Which value of r allows an infinite geometric sum to exist?",
  options: ["r = 2", "r = 1", "r = −1,2", "r = 0,4"],
  answer: 3,
  explanation: "An infinite geometric sum exists only when |r| < 1. Only 0,4 satisfies that condition.",
},
{
  id: "seq-8",
  question: "Evaluate Σₖ₌₁⁵ (k + 2).",
  options: ["20", "25", "30", "35"],
  answer: 1,
  explanation: "Substitute k = 1 to 5: 3 + 4 + 5 + 6 + 7 = 25.",
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

  const SequencesSeriesSigma = () => (
    <CapsSubjectTopic
      title="Sequences, Series and Sigma Notation"
      subtitle="Arithmetic and geometric patterns, sums and sigma notation"
      learnSteps={topicLearnSteps}
      task="gr12-sequences-series-sigma-t1"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default SequencesSeriesSigma;
