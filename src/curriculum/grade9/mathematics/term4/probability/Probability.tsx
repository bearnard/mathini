import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import ProbabilitySimulator from '@/components/subjects/ProbabilitySimulator';

const learnSteps: LearnStep[] = [
  {
    title: 'Simple Probability Events',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Calculate probabilities of simple events using counting principles and theoretical reasoning.
        </p>
      </div>
    ),
  },
  {
    title: 'Compound Probability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use tree diagrams and tables to find probabilities of compound events and independent events.
        </p>
      </div>
    ),
  },
  {
    title: 'Probability Simulator',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Run repeated experiments and compare theoretical probability with experimental results to see how dice data
          approaches expected values.
        </p>
        <ProbabilitySimulator defaultMode="dice" />
      </div>
    ),
  },
  {
    title: 'Interpreting Probability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Explain likelihood in context, compare outcomes, and understand relative frequency.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the probability of rolling a 3 on a fair six-sided die?',
    options: ['1/6', '1/3', '1/2', '1'],
    answer: '1/6',
    explanation: 'There is one favorable outcome (rolling a 3) out of 6 possible outcomes.',
  },
  {
    prompt: 'If you flip a coin twice, what is the probability of getting two heads?',
    options: ['1/2', '1/3', '1/4', '2/4'],
    answer: '1/4',
    explanation: 'P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4.',
  },
  {
    prompt: 'A bag contains 3 red balls and 2 blue balls. The probability of drawing a red ball is:',
    options: ['2/5', '3/5', '1/3', '1/2'],
    answer: '3/5',
    explanation: 'Probability = favorable outcomes / total outcomes = 3 / (3 + 2) = 3/5.',
  },
  {
    prompt: 'If two events are mutually exclusive, what is P(A and B)?',
    options: ['P(A) + P(B)', 'P(A) × P(B)', '0', 'Cannot determine'],
    answer: '0',
    explanation: 'Mutually exclusive events cannot both occur, so P(A and B) = 0.',
  },
  {
    prompt: 'A tree diagram shows first flip and second flip of a coin. How many outcomes are possible?',
    options: ['2', '3', '4', '8'],
    answer: '4',
    explanation: 'Possible outcomes: HH, HT, TH, TT = 4 outcomes.',
  },
  {
    prompt: 'The probability of an impossible event is:',
    options: ['0', '0.5', '1', 'Undefined'],
    answer: '0',
    explanation: 'An impossible event has a probability of 0.',
  },
  {
    prompt: 'If P(A) = 0.3, what is P(not A)?',
    options: ['0.3', '0.5', '0.7', 'Cannot determine'],
    answer: '0.7',
    explanation: 'P(not A) = 1 - P(A) = 1 - 0.3 = 0.7.',
  },
  {
    prompt: 'In a deck of 52 playing cards, the probability of drawing a heart is:',
    options: ['1/52', '1/13', '1/4', '1/2'],
    answer: '1/4',
    explanation: 'There are 13 hearts in 52 cards: 13/52 = 1/4.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Simple and compound events, tree diagrams and relative frequency"
    learnSteps={learnSteps}
    task="gr9-probability-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
