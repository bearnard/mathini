import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import ProbabilityExperiment from '../../../../../components/diagrams/maths/ProbabilityExperiment';
import { BallBag, DieFaces, ProbabilityScale, SPACE_COLORS, TwoStageTree } from '../../../../../components/diagrams/maths/Grade9SpaceData';
import { complement, outcomePairs, probability, sa } from '../../../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Every number in the slides below comes from these tested helpers (grade9SpaceDataHelpers.test.ts, lessonsMaths10.test.ts).
const { indigo: I, green: E, amber: A, rose: R } = SPACE_COLORS;
const frac = (p: { n: number; d: number }) => `${p.n}/${p.d}`;

// slide 1: one event
const die3 = probability(1, 6);
const red = probability(3, 5);
const hearts = probability(13, 52);

// slide 2: the scale and the complement
const pA = 0.3;
const notA = complement(pA);
const notRed = probability(5 - 3, 5);

// slide 3: two coins
const coins = outcomePairs(['H', 'T'], ['H', 'T']);
const hh = probability(1, coins.length);
const oneEach = probability(coins.filter((o) => o === 'HT' || o === 'TH').length, coins.length);

// slide 4: mutually exclusive, relative frequency
const even = probability(3, 6);
const five = probability(1, 6);
const evenOrFive = probability(3 + 1, 6);
const rf = probability(23, 50);

// "Check yourself"
const q1 = probability(4, 10);
const q2 = complement(0.85);
const q3 = outcomePairs(['H', 'T'], ['1', '2', '3', '4', '5', '6']);
const q3p = probability(1, q3.length);
const q4 = probability(4, 52);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Probability = favourable outcomes ÷ possible outcomes',
    content: slide(
      <>
        <Rule>When all outcomes are equally likely, P(event) = number of favourable outcomes ÷ total number of possible outcomes. Simplify the fraction.</Rule>
        <BallBag groups={[{ count: 3, color: R, label: 'red' }, { count: 2, color: I, label: 'blue' }]} />
        <Worked
          steps={[
            <>A fair die, P(3): one favourable outcome out of 6. P = <strong>{frac(die3.simplest)}</strong>.</>,
            <>3 red and 2 blue balls, P(red) = 3 ÷ 5 = <strong>{frac(red.simplest)}</strong>.</>,
            <>A deck of 52 cards has 13 hearts: P(heart) = 13/52 = <strong>{frac(hearts.simplest)}</strong>.</>,
          ]}
        />
        <Mistake>Comparing red with blue: 3/2 is not a probability. Divide by the total number of balls, {red.d}, so the answer is between 0 and 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'The probability scale and the complement',
    content: slide(
      <>
        <Rule>Every probability lies from 0 (impossible) to 1 (certain). An event either happens or it does not, so P(not A) = 1 − P(A).</Rule>
        <ProbabilityScale marks={[{ p: pA, label: `P(A) = ${sa(pA)}`, color: I }, { p: notA, label: `P(not A) = ${sa(notA)}`, color: E }]} />
        <Worked
          steps={[
            <>P(A) = {sa(pA)}, so P(not A) = 1 − {sa(pA)} = <strong>{sa(notA)}</strong>.</>,
            <>From the bag: P(not red) = 1 − {frac(red)} = <strong>{frac(notRed)}</strong>, the same as P(blue).</>,
            <>Rolling a 7 on a normal die is impossible: P = <strong>0</strong>.</>,
          ]}
        />
        <Mistake>A probability cannot be more than 1 or less than 0. If your answer is 1,2 or −0,3, check the working.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two events: tree diagrams',
    content: slide(
      <>
        <Rule>For two events, list every outcome with a tree diagram or a table. Each path through the tree is one outcome; count the paths that you want.</Rule>
        <TwoStageTree first={['H', 'T']} second={['H', 'T']} />
        <Worked
          title="A coin is tossed twice"
          steps={[
            <>The tree has {coins.length} outcomes: {coins.join(', ')}.</>,
            <>Two heads is one of them: P(HH) = <strong>{frac(hh.simplest)}</strong>.</>,
            <>One head and one tail: HT and TH, so P = {frac(oneEach)} = <strong>{frac(oneEach.simplest)}</strong>.</>,
          ]}
        />
        <Mistake>Saying there are 3 outcomes (two heads, two tails, one of each). HT and TH are different outcomes, so there are {coins.length}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mutually exclusive events and relative frequency',
    content: slide(
      <>
        <Rule>Mutually exclusive events cannot happen at the same time: P(A and B) = 0, and P(A or B) = P(A) + P(B). Relative frequency = times an event happened ÷ number of trials.</Rule>
        <DieFaces groups={[{ values: [2, 4, 6], color: E, name: 'even' }, { values: [5], color: A, name: 'a 5' }]} />
        <Worked
          steps={[
            <>On one roll, &quot;even&quot; and &quot;a 5&quot; cannot both happen: P(even and 5) = <strong>0</strong>.</>,
            <>P(even or 5) = {frac(even)} + {frac(five)} = {frac(evenOrFive)} = <strong>{frac(evenOrFive.simplest)}</strong>.</>,
            <>Lerato tosses a coin 50 times and gets 23 heads: relative frequency = 23/50 = <strong>{sa(rf.decimal)}</strong>, close to 0,5.</>,
          ]}
        />
        <Mistake>Adding probabilities of events that can happen together. &quot;Even&quot; and &quot;more than 3&quot; share 4 and 6, so their probabilities cannot simply be added.</Mistake>
      </>,
    ),
  },
  {
    title: 'Try it yourself: roll a die (optional)',
    content: slide(
      <>
        <p className="text-slate-700">Roll the die 10 times, then 50 more, and watch the relative frequency of each face. The theoretical probability of every face is 1/6, about 0,17. With few rolls the bars are uneven. With more rolls they usually even out.</p>
        <ProbabilityExperiment kind="die" />
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A box has 4 green and 6 yellow counters. Find P(green).</li>
            <li>The probability of rain tomorrow is 0,85. What is the probability of no rain?</li>
            <li>A coin is tossed and a die is rolled. How many outcomes are there, and what is P(H and 6)?</li>
            <li>What is the probability of drawing an ace from a deck of 52 cards?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>4/10 = {frac(q1.simplest)}</li>
            <li>1 − 0,85 = {sa(q2)}</li>
            <li>2 × 6 = {q3.length} outcomes; P(H6) = {frac(q3p.simplest)}</li>
            <li>4/52 = {frac(q4.simplest)}</li>
          </ol>
        }
      />,
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
    options: ['0', '0,5', '1', 'Undefined'],
    answer: '0',
    explanation: 'An impossible event has a probability of 0.',
  },
  {
    prompt: 'If P(A) = 0,3, what is P(not A)?',
    options: ['0,3', '0,5', '0,7', 'Cannot determine'],
    answer: '0,7',
    explanation: 'P(not A) = 1 - P(A) = 1 - 0,3 = 0,7.',
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
