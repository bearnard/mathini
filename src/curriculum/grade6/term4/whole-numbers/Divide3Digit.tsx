import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { InversePair, LineList, LongDivision, WordTools } from '../../../../components/diagrams/maths/Grade6Maths';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as m from '../../../../components/diagrams/maths/grade6MulDiv';

// Every number in the slides below comes from the tested helpers in grade6MulDiv.ts (grade6MulDiv.test.ts, g6MathsNewBank.test.ts).
const R = (n: number) => `R${g(n)}`;
const clue = m.multiples(132, [10, 20, 2, 5, 6]);
const main = m.divide(3484, 132);
const big = m.divide(9876, 123);
const bigChk = m.checkDivision(9876, 123);
const exact = m.divide(6125, 125);
const share = 12600 / 105;
const pallets = m.divide(2000, 150);
const c = { a: m.divide(6780, 113), b: m.divide(5432, 217), c: m.divide(8000, 250), d: 9450 / 135 };
const wr = (r: { quotient: number; remainder: number }) => (r.remainder ? `${g(r.quotient)} remainder ${r.remainder}` : g(r.quotient));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Estimate and build a clue board',
    content: slide(
      <>
        <Rule>First estimate with easy numbers. Then build a clue board for the divisor: 10 times, 20 times, and doubles and halves of those. With a 3-digit divisor you will usually need 10 times and 100 times.</Rule>
        <LineList
          lines={clue.slice(0, 4).map((x) => ({ text: `${x.k} × 132 = ${g(x.product)}`, color: x.k >= 10 ? '#fbbf24' : '#86efac' }))}
          aria={`A clue board of multiples of 132: ${clue.slice(0, 4).map((x) => `${x.k} times 132 is ${g(x.product)}`).join(', ')}.`}
        />
        <Worked
          title="3 484 ÷ 132"
          steps={[
            <>Estimate: 3 500 ÷ 130 is about 27.</>,
            <>10 × 132 = <strong>{g(clue[0].product)}</strong>, so 20 × 132 = <strong>{g(clue[1].product)}</strong>.</>,
            <>2 × 132 = {g(clue[2].product)}, and 5 × 132 = <strong>{g(clue[3].product)}</strong>, so 6 × 132 = <strong>{g(clue[4].product)}</strong>.</>,
          ]}
        />
        <Mistake>Starting without an estimate. The estimate tells you how many digits the answer must have.</Mistake>
      </>,
    ),
  },
  {
    title: 'Long division',
    content: slide(
      <>
        <Rule>Take away the biggest multiple of the divisor that fits, write down how many times, subtract, and repeat. Stop when what is left is smaller than the divisor: that is the remainder.</Rule>
        <LongDivision n={3484} d={132} />
        <Worked
          title="3 484 ÷ 132"
          steps={[
            <>20 × 132 = {g(main.steps[0].product)}. {g(3484)} − {g(main.steps[0].product)} = <strong>{g(main.steps[0].left)}</strong>.</>,
            <>6 × 132 = {g(main.steps[1].product)}. {g(main.steps[0].left)} − {g(main.steps[1].product)} = <strong>{main.steps[1].left}</strong>, which is less than 132.</>,
            <>20 + 6 = {main.quotient}, with a remainder of {main.remainder}: <strong>{main.quotient} remainder {main.remainder}</strong>.</>,
          ]}
        />
        <Mistake>Stopping too soon, with a remainder bigger than the divisor. Always check that the remainder is smaller than the divisor.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bigger divisions and exact answers',
    content: slide(
      <>
        <Rule>Sometimes the division is exact and the remainder is 0. Sometimes the first multiple you take away is a big one, such as 80 or 100 times the divisor. The method is the same.</Rule>
        <LongDivision n={9876} d={123} />
        <Worked
          title="9 876 ÷ 123 and 6 125 ÷ 125"
          steps={[
            <>80 × 123 = {g(big.steps[0].product)}. {g(9876)} − {g(big.steps[0].product)} = <strong>{big.remainder}</strong>. So 9 876 ÷ 123 = <strong>{big.quotient} remainder {big.remainder}</strong>.</>,
            <>Check: {big.quotient} × 123 + {big.remainder} = {g(bigChk.product)} + {big.remainder} = {g(bigChk.withRemainder)}.</>,
            <>6 125 ÷ 125: 40 × 125 = 5 000 leaves 1 125, and 9 × 125 = 1 125 leaves 0. So <strong>{exact.quotient}</strong>, with no remainder.</>,
          ]}
        />
        <Mistake>Writing remainder 0 when the division is exact. If nothing is left over, just give the answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check and solve problems',
    content: slide(
      <>
        <Rule>Check by multiplying: quotient × divisor + remainder = the number you started with. In problems, think about what the remainder means: leftovers, or one more needed.</Rule>
        <InversePair top={`${g(9876)} ÷ 123 = ${big.quotient} r ${big.remainder}`} bottom={`${big.quotient} × 123 + ${big.remainder} = ${g(bigChk.withRemainder)}`} />
        <WordTools pairs={[['shared equally', 'divide'], ['how many full ones', 'the quotient'], ['left over', 'the remainder']]} />
        <Worked
          title="Money and pallets"
          steps={[
            <>{R(12600)} shared equally among 105 workers: 12 600 ÷ 105 = <strong>{R(share)}</strong> each. Check: 105 × 120 = {g(12600)}.</>,
            <>2 000 bricks on pallets of 150: 2 000 ÷ 150 = {pallets.quotient} remainder {pallets.remainder}. That is <strong>{pallets.quotient} full pallets</strong> and <strong>{pallets.remainder} bricks</strong> left over.</>,
          ]}
        />
        <Mistake>Forgetting to read the question again at the end. Check that your answer says what was asked: rand, pallets or bricks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Calculate {g(6780)} ÷ 113.</>,
            <>Calculate {g(5432)} ÷ 217.</>,
            <>Calculate {g(8000)} ÷ 250.</>,
            <>{R(9450)} is shared equally among 135 people. How much does each person get?</>,
          ]}
          answers={[
            <><strong>{wr(c.a)}</strong>.</>,
            <><strong>{wr(c.b)}</strong>. Check: {c.b.quotient} × 217 + {c.b.remainder} = {g(c.b.quotient * 217 + c.b.remainder)}.</>,
            <><strong>{wr(c.c)}</strong>.</>,
            <>9 450 ÷ 135 = <strong>{R(c.d)}</strong> each.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Calculate 3 484 ÷ 132.",
    options: ["26 remainder 25", "26 remainder 52", "27 remainder 52", "26 remainder 5"],
    answer: "26 remainder 52",
    explanation: "132 × 20 = 2 640 leaves 844. 132 × 6 = 792 leaves 52. So 26 remainder 52.",
  },
  {
    prompt: "In 3 484 ÷ 132, what is the first multiple you take away, 20 × 132?",
    options: ["2 640", "264", "26 400", "2 460"],
    answer: "2 640",
    explanation: "2 × 132 = 264, so 20 × 132 = 2 640.",
  },
  {
    prompt: "3 484 − 2 640 = ?",
    options: ["944", "1 844", "804", "844"],
    answer: "844",
    explanation: "3 484 − 2 640 = 844. This is what is still to be divided.",
  },
  {
    prompt: "Calculate 8 640 ÷ 120.",
    options: ["7", "720", "72", "82"],
    answer: "72",
    explanation: "120 × 70 = 8 400 leaves 240, and 120 × 2 = 240. So 72.",
  },
  {
    prompt: "Calculate 6 125 ÷ 125.",
    options: ["48", "49", "59", "39"],
    answer: "49",
    explanation: "125 × 40 = 5 000 leaves 1 125, and 125 × 9 = 1 125. So 49.",
  },
  {
    prompt: "Calculate 9 876 ÷ 123.",
    options: ["80 remainder 36", "80 remainder 63", "81 remainder 0", "79 remainder 36"],
    answer: "80 remainder 36",
    explanation: "123 × 80 = 9 840 leaves 36. So 80 remainder 36.",
  },
  {
    prompt: "Calculate 5 000 ÷ 150.",
    options: ["33 remainder 5", "34 remainder 0", "32 remainder 200", "33 remainder 50"],
    answer: "33 remainder 50",
    explanation: "150 × 33 = 4 950 and 5 000 − 4 950 = 50. So 33 remainder 50.",
  },
  {
    prompt: "Which calculation checks that 9 876 ÷ 123 = 80 remainder 36?",
    options: ["80 × 123 = 9 876", "80 + 123 + 36 = 9 876", "80 × 123 + 36 = 9 876", "123 × 36 + 80 = 9 876"],
    answer: "80 × 123 + 36 = 9 876",
    explanation: "80 × 123 = 9 840, and 9 840 + 36 = 9 876.",
  },
  {
    prompt: "Estimate 7 812 ÷ 205 by rounding to numbers that are easy to divide.",
    options: ["4", "40", "400", "38 remainder 22"],
    answer: "40",
    explanation: "7 812 is about 8 000 and 205 is about 200. Then 8 000 ÷ 200 = 40.",
  },
  {
    prompt: "R12 600 is shared equally among 105 workers. How much does each worker get?",
    options: ["R120", "R12", "R1 200", "R125"],
    answer: "R120",
    explanation: "105 × 120 = 12 600, so each worker gets R120.",
  },
  {
    prompt: "2 000 bricks are packed on pallets of 150 bricks. How many full pallets are packed, and how many bricks are left over?",
    options: ["14 full pallets and 0 bricks left over", "12 full pallets and 200 bricks left over", "13 full pallets and 5 bricks left over", "13 full pallets and 50 bricks left over"],
    answer: "13 full pallets and 50 bricks left over",
    explanation: "150 × 13 = 1 950 and 2 000 − 1 950 = 50. So 13 full pallets and 50 bricks are left over.",
  },
  {
    prompt: "Calculate 4 500 ÷ 100.",
    options: ["4 500", "4 050", "45", "450"],
    answer: "45",
    explanation: "Dividing by 100 moves every digit two places to the right: 45.",
  },
  {
    prompt: "How many packets of 125 g can be filled from 3 000 g of rice?",
    options: ["2 400", "24", "240", "22"],
    answer: "24",
    explanation: "125 × 24 = 3 000, so 24 packets can be filled.",
  },
  {
    prompt: "Calculate 7 245 ÷ 105.",
    options: ["69", "79", "59", "690"],
    answer: "69",
    explanation: "105 × 60 = 6 300 leaves 945, and 105 × 9 = 945. So 69.",
  },
];
// BANK:END

const Divide3Digit = () => (
  <CapsSubjectTopic
    title="Dividing by 3-digit Numbers"
    subtitle="Clue boards, long division, checking and remainders in problems"
    learnSteps={learnSteps}
    task="gr6-divide-3digit-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Divide3Digit;
