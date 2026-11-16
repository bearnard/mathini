import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Flow, Venn } from '../../../../../components/diagrams/maths/Grade10Maths';
import { dec, fracStr } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as p from '../../../../../components/diagrams/maths/grade10Helpers4';

// Every number in the slides below comes from the tested helpers in grade10Helpers4.ts (grade10Helpers4.test.ts, g10MathsBankT4.test.ts).
const f = fracStr;
const d2 = (n: number) => dec(n, 2).replace(/0$/, '').replace(/,$/, '');

// slide 1: sample space and probability
const prime = p.probability(3, 6);
const twoHeads = p.probability(1, p.coinOutcomes(2));
const sevens = p.diceSumWays(7);
// slide 2: complement and relative frequency
const notBlue = p.complement(p.probability(3, 10));
const rel = p.relativeFrequency(124, 200);
const rain = p.expectedCount(0.2, 30);
// slide 3: Venn diagram and the union rule
const venn = { total: 40, soccer: 25, netball: 18, both: 8 };
const onlySoccer = venn.soccer - venn.both;
const onlyNetball = venn.netball - venn.both;
const either = p.unionCount(venn.soccer, venn.netball, venn.both);
const none = p.neitherCount(venn.total, venn.soccer, venn.netball, venn.both);
// slide 4: mutually exclusive events
const unionDec = p.unionProbability(0.6, 0.5, 0.3);
const exclusive = p.unionProbability(0.5, 0.3, 0);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Sample space and probability',
    content: slide(
      <>
        <Rule>The sample space S lists all the possible outcomes. If the outcomes are equally likely, P(A) = n(A) ÷ n(S). A probability is always between 0 (impossible) and 1 (certain).</Rule>
        <Flow steps={['HH', 'HT', 'TH', 'TT'].map((o) => ({ label: o, value: f(twoHeads) }))} />
        <Worked
          title="Dice and coins"
          steps={[
            <>Fair die, a prime number: the primes are 2, 3 and 5, so P = 3/6 = <strong>{f(prime)}</strong>.</>,
            <>Two coins: HH, HT, TH, TT. The sample space has {p.coinOutcomes(2)} outcomes and P(two heads) = <strong>{f(twoHeads)}</strong>.</>,
            <>Two dice added: the sum 7 can happen in {sevens} ways out of 36, so P = {sevens}/36 = <strong>{f(p.probability(sevens, 36))}</strong>.</>,
            <>A value such as 1,2 can never be a probability, because it is greater than 1.</>,
          ]}
        />
        <Mistake>Counting outcomes that are not equally likely, or forgetting an outcome such as TH. List the whole sample space before you count.</Mistake>
      </>,
    ),
  },
  {
    title: 'Complement and relative frequency',
    content: slide(
      <>
        <Rule>The complement of A is "not A". P(A) + P(not A) = 1, so P(not A) = 1 − P(A). Relative frequency = the number of times it happened ÷ the number of trials. It estimates the probability.</Rule>
        <Flow steps={[{ label: 'P(blue)', value: f(p.probability(3, 10)) }, { label: 'P(not blue)', value: f(notBlue) }, { label: 'Total', value: '1' }]} />
        <Worked
          title="Three examples"
          steps={[
            <>A bag has 5 red, 3 blue and 2 green balls. P(blue) = 3/10, so P(not blue) = 1 − 3/10 = <strong>{f(notBlue)}</strong>.</>,
            <>A coin lands on heads 124 times in 200 tosses: relative frequency = 124 ÷ 200 = <strong>{d2(rel)}</strong>.</>,
            <>P(rain) = 0,2 on a March day: in 30 days you expect 0,2 × 30 = <strong>{rain}</strong> rainy days.</>,
            <>P(A) = 0,35 gives P(not A) = 1 − 0,35 = {d2(1 - 0.35)}.</>,
          ]}
        />
        <Mistake>Saying that a coin must land on heads exactly half of the time in a few tosses. Relative frequency only gets close to the probability over many trials.</Mistake>
      </>,
    ),
  },
  {
    title: 'Venn diagrams and the union rule',
    content: slide(
      <>
        <Rule>In a Venn diagram, start with the overlap (A and B), then fill in the rest. n(A or B) = n(A) + n(B) − n(A and B). We subtract the overlap, because it was counted twice.</Rule>
        <Venn a="Soccer" b="Netball" onlyA={onlySoccer} both={venn.both} onlyB={onlyNetball} neither={none} />
        <Worked
          title="40 learners: 25 play soccer, 18 play netball, 8 play both"
          steps={[
            <>Both: {venn.both}. Soccer only: {venn.soccer} − {venn.both} = {onlySoccer}. Netball only: {venn.netball} − {venn.both} = {onlyNetball}.</>,
            <>Soccer or netball: {venn.soccer} + {venn.netball} − {venn.both} = <strong>{either}</strong>.</>,
            <>Neither: {venn.total} − {either} = <strong>{none}</strong>.</>,
            <>P(soccer or netball) = {either}/{venn.total} = {f(p.probability(either, venn.total))}.</>,
          ]}
        />
        <Mistake>Adding n(A) and n(B) without subtracting the overlap. The 8 learners who play both would be counted twice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mutually exclusive events',
    content: slide(
      <>
        <Rule>Events are mutually exclusive when they cannot happen at the same time, so P(A and B) = 0. Then P(A or B) = P(A) + P(B). If they can overlap, use P(A or B) = P(A) + P(B) − P(A and B).</Rule>
        <Venn a="Hearts" b="Spades" onlyA={13} both={0} onlyB={13} neither={26} />
        <Worked
          title="Exclusive or not?"
          steps={[
            <>Drawing a heart and drawing a spade from a pack of cards cannot happen together: mutually exclusive.</>,
            <>Drawing a heart and drawing a king can happen together (the king of hearts): not mutually exclusive.</>,
            <>Exclusive, P(A) = 0,5 and P(B) = 0,3: P(A or B) = 0,5 + 0,3 = <strong>{d2(exclusive)}</strong>.</>,
            <>Overlapping, P(A) = 0,6, P(B) = 0,5 and P(A and B) = 0,3: P(A or B) = 0,6 + 0,5 − 0,3 = <strong>{d2(unionDec)}</strong>.</>,
          ]}
        />
        <Mistake>Using the exclusive rule when the events overlap. If P(A) + P(B) is more than 1, the events must overlap.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A fair die is rolled. What is the probability of rolling a prime number?</>,
            <>P(A) = 0,35. What is the probability that A does not happen?</>,
            <>Of 40 learners, 25 play soccer, 18 play netball and 8 play both. How many play neither?</>,
            <>P(A) = 0,6, P(B) = 0,5 and P(A and B) = 0,3. What is P(A or B)?</>,
          ]}
          answers={[
            <><strong>{f(prime)}</strong>.</>,
            <>1 − 0,35 = <strong>{d2(1 - 0.35)}</strong>.</>,
            <>40 − (25 + 18 − 8) = <strong>{none}</strong>.</>,
            <>0,6 + 0,5 − 0,3 = <strong>{d2(unionDec)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "A fair die is rolled once. What is the probability of rolling a prime number?",
    options: ["1/3", "1/2", "2/3", "5/6"],
    answer: "1/2",
    explanation: "The prime numbers on a die are 2, 3 and 5, so 3 of the 6 equally likely outcomes are favourable: 3/6 = 1/2.",
  },
  {
    prompt: "Two coins are tossed together. How many outcomes are in the sample space?",
    options: ["4", "2", "3", "6"],
    answer: "4",
    explanation: "List them: HH, HT, TH, TT. Each coin has 2 outcomes, so 2 × 2 = 4.",
  },
  {
    prompt: "Two coins are tossed together. What is the probability of getting two heads?",
    options: ["1/2", "1/3", "1/8", "1/4"],
    answer: "1/4",
    explanation: "Only HH is favourable out of the 4 outcomes: 1/4.",
  },
  {
    prompt: "P(A) = 0,35. What is the probability that A does NOT happen?",
    options: ["0,35", "0,53", "0,65", "1,35"],
    answer: "0,65",
    explanation: "The probabilities of an event and its complement add up to 1: 1 − 0,35 = 0,65.",
  },
  {
    prompt: "A bag has 5 red, 3 blue and 2 green balls. One ball is drawn. What is the probability that it is not blue?",
    options: ["3/10", "7/10", "1/2", "3/7"],
    answer: "7/10",
    explanation: "P(blue) = 3/10, so P(not blue) = 1 − 3/10 = 7/10. Check: 5 + 2 = 7 balls are not blue out of 10.",
  },
  {
    prompt: "Events A and B are mutually exclusive, with P(A) = 0,5 and P(B) = 0,3. What is P(A or B)?",
    options: ["0,8", "0,15", "0,2", "1"],
    answer: "0,8",
    explanation: "Mutually exclusive events cannot happen together, so P(A and B) = 0 and P(A or B) = 0,5 + 0,3 = 0,8.",
  },
  {
    prompt: "P(A) = 0,6, P(B) = 0,5 and P(A and B) = 0,3. What is P(A or B)?",
    options: ["1,1", "0,3", "0,9", "0,8"],
    answer: "0,8",
    explanation: "P(A or B) = P(A) + P(B) − P(A and B) = 0,6 + 0,5 − 0,3 = 0,8.",
  },
  {
    prompt: "Of 40 learners, 25 play soccer, 18 play netball and 8 play both. How many play neither sport?",
    options: ["0", "8", "5", "15"],
    answer: "5",
    explanation: "n(soccer or netball) = 25 + 18 − 8 = 35, so 40 − 35 = 5 learners play neither.",
  },
  {
    prompt: "In a Venn diagram n(S) = 30, n(A) = 12, n(B) = 15 and n(A and B) = 5. What is P(A or B)?",
    options: ["9/10", "11/15", "3/5", "27/30"],
    answer: "11/15",
    explanation: "n(A or B) = 12 + 15 − 5 = 22, so P(A or B) = 22/30 = 11/15.",
  },
  {
    prompt: "A coin is tossed 200 times and lands on heads 124 times. What is the relative frequency of heads?",
    options: ["0,62", "0,5", "0,38", "1,24"],
    answer: "0,62",
    explanation: "Relative frequency = number of heads ÷ number of tosses = 124 ÷ 200 = 0,62.",
  },
  {
    prompt: "Two dice are rolled and the numbers are added. What is the probability that the sum is 7?",
    options: ["1/12", "7/36", "1/7", "1/6"],
    answer: "1/6",
    explanation: "The sum 7 can happen in 6 ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 outcomes: 6/36 = 1/6.",
  },
  {
    prompt: "A card is drawn from a pack. Which two events are mutually exclusive?",
    options: ["Drawing a heart and drawing a king", "Drawing a red card and drawing a queen", "Drawing a heart and drawing a spade", "Drawing a spade and drawing an ace"],
    answer: "Drawing a heart and drawing a spade",
    explanation: "A card cannot be a heart and a spade at the same time. A king can be a heart, a queen can be red, and an ace can be a spade.",
  },
  {
    prompt: "The probability of rain on a day in March is 0,2. On about how many of the 30 days do you expect rain?",
    options: ["2", "6", "10", "20"],
    answer: "6",
    explanation: "Expected number = probability × number of days = 0,2 × 30 = 6.",
  },
  {
    prompt: "Which value cannot be the probability of an event?",
    options: ["1,2", "0", "0,5", "1"],
    answer: "1,2",
    explanation: "A probability is always between 0 and 1 (inclusive). 1,2 is greater than 1, so it is impossible.",
  },
];
// BANK:END

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Sample spaces, Venn diagrams, mutually exclusive and complementary events, and relative frequency"
    learnSteps={learnSteps}
    task="gr10-probability-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
