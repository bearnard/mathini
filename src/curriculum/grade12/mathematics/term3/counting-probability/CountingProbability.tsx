import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import { CountingTree } from '@/components/diagrams/maths/CountingTree';
import ProbabilitySimulator from '@/components/subjects/ProbabilitySimulator';

  const learnSteps: LearnStep[] = [
  {
    title: 'Fundamental counting principle',
    content: (
      <>
        <p>
          If one choice can happen in <Formula>{String.raw`m`}</Formula> ways and a second choice can happen in{' '}
          <Formula>{String.raw`n`}</Formula> ways, then the combined process can happen in <Formula>{String.raw`m \times n`}</Formula>{' '}
          ways. When order matters, permutations are useful; when order does not matter, combinations are the
          better model.
        </p>
        <CountingTree />
        <Formula block>{String.raw`{}^nP_r = \frac{n!}{(n-r)!},\quad \binom{n}{r} = \frac{n!}{r!(n-r)!}`}</Formula>
      </>
    ),
  },
  {
    title: 'Probability with overlap and dependence',
    content: (
      <>
        <p>
          When events overlap, add the separate probabilities and subtract the overlap once. In dependent-event
          questions, let the second probability reflect what has already happened.
        </p>
        <Formula block>{String.raw`P(A \cup B) = P(A) + P(B) - P(A \cap B)`}</Formula>
      </>
    ),
  },
  {
    title: 'Probability Simulator',
    content: (
      <>
        <p>
          Run repeated experiments and compare theoretical probability with experimental results to test how spinner
          models connect counting ideas to long-run relative frequency.
        </p>
        <ProbabilitySimulator defaultMode="spinner" />
      </>
    ),
  },
  {
    title: 'Complement, independence and representation',
    content: (
      <>
        <p>
          The complement rule is often the fastest route when “at least one” or “not” appears. For independent
          events, the occurrence of one does not change the probability of the other.
        </p>
        <Formula block>{String.raw`P(A') = 1 - P(A),\quad P(A \cap B) = P(A) \times P(B) \text{ (independent events)}`}</Formula>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "prob-1",
  question: "A learner has 3 shirts and 4 ties. How many shirt-and-tie outfits are possible?",
  options: ["7", "12", "16", "24"],
  answer: 1,
  explanation: "Use the counting principle: 3 × 4 = 12 possible outfits.",
},
{
  id: "prob-2",
  question: "What is the probability of getting a head then a tail when a fair coin is tossed twice?",
  options: ["1/2", "1/4", "1/8", "3/4"],
  answer: 1,
  explanation: "The tosses are independent, so P(H then T) = 1/2 × 1/2 = 1/4.",
},
{
  id: "prob-3",
  question: "Which formula gives P(A ∪ B)?",
  options: ['P(A) + P(B) + P(A ∩ B)', 'P(A)P(B)', 'P(A) + P(B) − P(A ∩ B)', '1 − P(A)'],
  answer: 2,
  explanation: "Subtract the overlap once so it is not counted twice.",
},
{
  id: "prob-4",
  question: "In a class, 12 learners take Maths Club, 9 take Science Club and 5 take both. How many take at least one of the two clubs?",
  options: ["14", "16", "17", "26"],
  answer: 1,
  explanation: "At least one = 12 + 9 − 5 = 16.",
},
{
  id: "prob-5",
  question: "A bag has 3 red and 2 blue counters. What is the probability of drawing a red counter then a blue counter without replacement?",
  options: ["1/5", "3/10", "2/5", "3/5"],
  answer: 1,
  explanation: "P(red then blue) = 3/5 × 2/4 = 6/20 = 3/10.",
},
{
  id: "prob-6",
  question: "If P(A) = 0,72, then P(not A) = ...",
  options: ["0,18", "0,22", "0,28", "0,38"],
  answer: 2,
  explanation: "Use the complement rule: 1 − 0,72 = 0,28.",
},
{
  id: "prob-7",
  question: "Two events A and B are independent when ...",
  options: ["P(A ∪ B) = 1", "P(A ∩ B) = 0", "P(A ∩ B) = P(A)P(B)", "P(A) + P(B) = P(A ∪ B)"],
  answer: 2,
  explanation: "That is the defining condition for independence.",
},
{
  id: "prob-8",
  question: "A meal consists of 1 main, 1 drink and 1 dessert. If there are 2 mains, 3 drinks and 2 desserts, how many different meals are possible?",
  options: ["7", "10", "12", "18"],
  answer: 2,
  explanation: "Use the counting principle: 2 × 3 × 2 = 12.",
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

  const CountingProbability = () => (
    <CapsSubjectTopic
      title="Counting and Probability"
      subtitle="Counting principle, Venn diagrams, trees and compound events"
      learnSteps={topicLearnSteps}
      task="gr12-counting-probability-t3"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default CountingProbability;
