import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Formula from '../../../../../components/subjects/Formula';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CoinGrid, CounterBag, ExperimentBar, ProbScale } from '../../../../../components/diagrams/maths/Grade8Space';
import { coinOutcomes, probability } from '../../../../../components/diagrams/maths/grade8SpaceHelpers';

// Every number in the slides below comes from these tested helpers (grade8SpaceHelpers) and
// lessonsMaths7.test.ts checks that the rendered slides show them. The 50 coin tosses are a made-up class experiment.
const F = ({ n, d }: { n: number; d: number }) => <Formula>{String.raw`\frac{${n}}{${d}}`}</Formula>;
const dc = (v: number) => String(v).replace('.', ',');

const heads = probability(1, 2);
const six = probability(1, 6);
const blue = probability(1, 4);
const red = probability(3, 4);
const coins = coinOutcomes(2);
const mixed = coins.filter((o) => o === 'HT' || o === 'TH');
const pMixed = probability(mixed.length, coins.length);
const green = probability(8, 10);
const yellow = probability(2, 10);
const threeQ = probability(75, 100);
const toss = { trials: 50, heads: 23, rel: probability(23, 50), expected: 50 * heads.decimal };

// "Check yourself", answers computed from the same helpers
const c1 = probability(2, 6); // a die shows 5 or 6
const c2 = probability(4, 4 + 6); // 4 red, 6 white
const c3 = coinOutcomes(3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The probability scale from 0 to 1',
    content: slide(
      <>
        <Rule>A probability is a number from 0 to 1. An impossible event has probability 0, a certain event has probability 1, and an even chance is <F n={1} d={2} />.</Rule>
        <ProbScale
          marks={[
            { value: 0, text: '0', color: '#fb7185' },
            { value: six.decimal, text: '1/6', color: '#818cf8' },
            { value: heads.decimal, text: '1/2', color: '#34d399' },
            { value: 1, text: '1', color: '#fbbf24' },
          ]}
        />
        <Worked
          steps={[
            <>Rolling a 7 on an ordinary die: impossible, P = <strong>0</strong>.</>,
            <>Taking a red marble from a bag that holds only red marbles: certain, P = <strong>1</strong>.</>,
            <>Heads on a fair coin: 1 of 2 equally likely outcomes, P = <F n={heads.n} d={heads.d} />. A 6 on a fair die: P = <F n={six.n} d={six.d} />, less likely.</>,
          ]}
        />
        <Mistake>Giving a probability bigger than 1 or less than 0, such as 2. No event is more than certain, so every probability lies from 0 to 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equally likely outcomes',
    content: slide(
      <>
        <Rule>When all outcomes are equally likely, P(event) = number of favourable outcomes ÷ total number of outcomes.</Rule>
        <CounterBag groups={[{ count: 3, color: '#fb7185', name: 'red' }, { count: 1, color: '#818cf8', name: 'blue' }]} caption={`P(blue) = 1 out of 4 = ${blue.n}/${blue.d}`} />
        <Worked
          title="A bag holds 3 red marbles and 1 blue marble"
          steps={[
            <>Total outcomes: 3 + 1 = 4 marbles.</>,
            <>Favourable for blue: 1. P(blue) = <strong><F n={blue.n} d={blue.d} /></strong>.</>,
            <>Favourable for red: 3. P(red) = <F n={red.n} d={red.d} />. Together <F n={blue.n} d={blue.d} /> + <F n={red.n} d={red.d} /> = 1.</>,
          ]}
        />
        <Mistake>Comparing blue with red instead of with all the marbles: 1 blue to 3 red gives <F n={1} d={3} />, but the total is 4, so P(blue) = <F n={1} d={4} />.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listing the sample space',
    content: slide(
      <>
        <Rule>The sample space is the list of all possible outcomes. Use a table or a list so that no outcome is missed or counted twice.</Rule>
        <CoinGrid highlight={mixed} />
        <Worked
          title="Toss two coins"
          steps={[
            <>Each coin can land H or T, so the outcomes are {coins.join(', ')}: <strong>{coins.length} outcomes</strong>.</>,
            <>One head and one tail: {mixed.join(' and ')}, so {mixed.length} favourable outcomes.</>,
            <>P(one head and one tail) = <F n={mixed.length} d={coins.length} /> = <strong><F n={pMixed.n} d={pMixed.d} /></strong>.</>,
          ]}
        />
        <Mistake>Listing only 3 outcomes (two heads, two tails, one of each). HT and TH are different outcomes: the first coin and the second coin are different coins.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing and converting probabilities',
    content: slide(
      <>
        <Rule>A probability can be written as a fraction, a decimal or a percentage. The event with the bigger probability is more likely.</Rule>
        <CounterBag groups={[{ count: 8, color: '#34d399', name: 'green' }, { count: 2, color: '#fbbf24', name: 'yellow' }]} caption={`P(green) = ${dc(green.decimal)}, P(yellow) = ${dc(yellow.decimal)}`} />
        <Worked
          title="8 green and 2 yellow counters"
          steps={[
            <>P(green) = <F n={8} d={10} /> = <F n={green.n} d={green.d} /> = {dc(green.decimal)} = {green.percent}%.</>,
            <>P(yellow) = <F n={2} d={10} /> = {dc(yellow.decimal)} = {yellow.percent}%. Green is <strong>more likely</strong>.</>,
            <>A probability of 0,75 = <F n={75} d={100} /> = <strong><F n={threeQ.n} d={threeQ.d} /></strong> (divide top and bottom by 25).</>,
          ]}
        />
        <Mistake>Thinking yellow is just as likely because there are two colours. The colours are not equally likely: there are 8 green counters and only 2 yellow ones.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relative frequency: probability from experiments',
    content: slide(
      <>
        <Rule>Relative frequency = number of times an event happened ÷ number of trials. With more trials, it usually gets closer to the theoretical probability.</Rule>
        <ExperimentBar trials={toss.trials} hits={toss.heads} expected={toss.expected} hitName="heads" missName="tails" />
        <Worked
          title={`A class tosses a coin ${toss.trials} times and gets ${toss.heads} heads`}
          steps={[
            <>Relative frequency of heads = <F n={toss.heads} d={toss.trials} /> = {dc(toss.rel.decimal)} ({toss.rel.percent}%).</>,
            <>Theory: P(heads) = <F n={1} d={2} /> = 0,5, so about {toss.expected} heads were expected.</>,
            <>{dc(toss.rel.decimal)} is close to 0,5. With 500 or 1 000 tosses the relative frequency would usually be closer still.</>,
          ]}
        />
        <Mistake>Thinking the coin is unfair because 23 is not exactly 25. Small experiments vary; only over many trials does the relative frequency settle near <F n={1} d={2} />.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A fair die is rolled. What is the probability of a 5 or a 6?</li>
            <li>A bag has 4 red and 6 white beads. Find P(red) as a decimal and a percentage.</li>
            <li>How many outcomes are there when three coins are tossed?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li><F n={2} d={6} /> = <F n={c1.n} d={c1.d} />.</li>
            <li><F n={4} d={10} /> = {dc(c2.decimal)} = {c2.percent}%.</li>
            <li>{c3.length}: {c3.join(', ')}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the probability of heads on a fair coin?',
    options: ['1/2', '1/3', '1/4', '2/3'],
    answer: '1/2',
    explanation: 'There are 2 equally likely outcomes and 1 favourable one.',
  },
  {
    prompt: 'What is the probability of rolling a 6 on a fair die?',
    options: ['1/6', '1/3', '1/2', '1/12'],
    answer: '1/6',
    explanation: 'One favourable outcome out of six total outcomes.',
  },
  {
    prompt: 'An impossible event has probability...',
    options: ['0', '1', '1/2', '2'],
    answer: '0',
    explanation: 'Impossible means it cannot occur.',
  },
  {
    prompt: 'A certain event has probability...',
    options: ['1', '0', '1/4', '1/2'],
    answer: '1',
    explanation: 'Certain means it must happen.',
  },
  {
    prompt: 'A bag has 3 red and 1 blue marble. P(blue) = ?',
    options: ['1/4', '3/4', '1/3', '1/2'],
    answer: '1/4',
    explanation: '1 favourable blue out of 4 total marbles.',
  },
  {
    prompt: 'How many outcomes are in the sample space for two coin tosses?',
    options: ['4', '2', '3', '8'],
    answer: '4',
    explanation: 'HH, HT, TH, TT.',
  },
  {
    prompt: '0.75 as a probability fraction is...',
    options: ['3/4', '1/4', '3/5', '7/10'],
    answer: '3/4',
    explanation: '0.75 = 75/100 = 3/4.',
  },
  {
    prompt: 'If a bag has 8 green and 2 yellow counters, which is more likely?',
    options: ['picking a green counter', 'picking a yellow counter', 'both equally likely', 'neither possible'],
    answer: 'picking a green counter',
    explanation: 'Green outcomes are more numerous.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Sample space, equally likely outcomes, and relative frequency"
    learnSteps={learnSteps}
    task="gr8-probability-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
