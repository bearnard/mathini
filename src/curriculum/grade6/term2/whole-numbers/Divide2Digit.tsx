import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { InversePair, LineList, LongDivision, WordTools } from '../../../../components/diagrams/maths/Grade6Maths';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as m from '../../../../components/diagrams/maths/grade6MulDiv';

// Every number in the slides below comes from the tested helpers in grade6MulDiv.ts (grade6MulDiv.test.ts, g6MathsNewBank.test.ts).
const clue = m.multiples(17, [100, 200, 10, 20, 5, 2]);
const main = m.divide(3447, 17);
const chk = m.checkDivision(3447, 17);
const sweets = m.divide(500, 12);
const buses = m.divide(300, 24);
const c = { a: m.divide(2856, 24), b: m.divide(4305, 21), c: m.divide(1500, 16), d: m.divide(250, 12) };
const wr = (r: { quotient: number; remainder: number }) => (r.remainder ? `${g(r.quotient)} remainder ${r.remainder}` : g(r.quotient));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Build a clue board',
    content: slide(
      <>
        <Rule>You may not know the 17 times table, but you can build it. Use 10 × 17 and 100 × 17, then halve and double to get the other multiples. Write them on a clue board.</Rule>
        <LineList
          lines={clue.slice(0, 4).map((x) => ({ text: `${x.k} × 17 = ${g(x.product)}`, color: x.k >= 100 ? '#fbbf24' : '#86efac' }))}
          aria={`A clue board of multiples of 17: ${clue.slice(0, 4).map((x) => `${x.k} times 17 is ${g(x.product)}`).join(', ')}.`}
        />
        <Worked
          title="Multiples of 17"
          steps={[
            <>10 × 17 = <strong>{g(clue[2].product)}</strong>. Double it: 20 × 17 = <strong>{g(clue[3].product)}</strong>.</>,
            <>Half of 10 × 17 gives 5 × 17 = {g(clue[2].product)} ÷ 2 = <strong>{g(clue[4].product)}</strong>.</>,
            <>100 × 17 = <strong>{g(clue[0].product)}</strong>. Double it: 200 × 17 = <strong>{g(clue[1].product)}</strong>.</>,
            <>2 × 17 = <strong>{g(clue[5].product)}</strong>.</>,
          ]}
        />
        <Mistake>Trying to remember a long times table. Build the multiples you need from 10 times and 100 times, then double and halve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiply, then subtract',
    content: slide(
      <>
        <Rule>To divide, take away big multiples of the divisor. Take the biggest multiple that fits, subtract, and repeat with what is left. Add up the multiples you used to get the answer, and what is left at the end is the remainder.</Rule>
        <LongDivision n={3447} d={17} />
        <Worked
          title="3 447 ÷ 17"
          steps={[
            <>Estimate: 3 400 ÷ 17 is about 200.</>,
            <>200 × 17 = {g(main.steps[0].product)}. {g(3447)} − {g(main.steps[0].product)} = <strong>{g(main.steps[0].left)}</strong>.</>,
            <>2 × 17 = {g(main.steps[1].product)}. {g(main.steps[0].left)} − {g(main.steps[1].product)} = <strong>{g(main.steps[1].left)}</strong>, which is less than 17.</>,
            <>200 + 2 = {g(main.quotient)}, with {g(main.remainder)} left over: <strong>{g(main.quotient)} remainder {g(main.remainder)}</strong>.</>,
          ]}
        />
        <Mistake>Stopping while what is left is still 17 or more. The remainder must be smaller than the divisor: if it is 17 or more, take another 17 away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check by multiplying',
    content: slide(
      <>
        <Rule>Check a division by multiplying: quotient × divisor + remainder must give the number you started with. If it does not, find your mistake.</Rule>
        <InversePair top={`${g(3447)} ÷ 17 = ${g(main.quotient)} r ${main.remainder}`} bottom={`${g(main.quotient)} × 17 + ${main.remainder} = ${g(chk.withRemainder)}`} />
        <Worked
          title="Is 202 remainder 13 right?"
          steps={[
            <>{g(main.quotient)} × 17 = {g(main.quotient)} × 10 + {g(main.quotient)} × 7 = {g(2020)} + {g(1414)} = <strong>{g(chk.product)}</strong>.</>,
            <>Add the remainder: {g(chk.product)} + {main.remainder} = <strong>{g(chk.withRemainder)}</strong>.</>,
            <>This is the number we started with, so the division is correct.</>,
          ]}
        />
        <Mistake>Forgetting to add the remainder. Multiplying alone gives {g(chk.product)}, which is not {g(3447)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Remainders in problems',
    content: slide(
      <>
        <Rule>Read what the remainder means in the problem. When you share things, the remainder is what is left over. When you must fit everyone in, a remainder means one more is needed.</Rule>
        <WordTools pairs={[['shared equally', 'divide'], ['how many are left over', 'the remainder'], ['how many are needed for all', 'round up']]} />
        <Worked
          title="Two problems"
          steps={[
            <>500 sweets shared equally among 12 learners: 500 ÷ 12 = {g(sweets.quotient)} remainder {sweets.remainder}. Each gets <strong>{sweets.quotient}</strong> and <strong>{sweets.remainder}</strong> are left over.</>,
            <>300 learners and buses of 24 seats: 300 ÷ 24 = {buses.quotient} remainder {buses.remainder}.</>,
            <>The {buses.remainder} learners left over still need a seat, so we need {buses.quotient} + 1 = <strong>{buses.quotient + 1} buses</strong>.</>,
          ]}
        />
        <Mistake>Giving the remainder as the answer, or ignoring it. Ask yourself what the remainder means in the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Calculate {g(2856)} ÷ 24.</>,
            <>Calculate {g(4305)} ÷ 21.</>,
            <>Calculate {g(1500)} ÷ 16 and check your answer.</>,
            <>A teacher has 250 books. Each box holds 12 books. How many boxes are needed for all the books?</>,
          ]}
          answers={[
            <><strong>{wr(c.a)}</strong>.</>,
            <><strong>{wr(c.b)}</strong>.</>,
            <><strong>{wr(c.c)}</strong>. Check: {c.c.quotient} × 16 + {c.c.remainder} = {g(c.c.quotient * 16 + c.c.remainder)}.</>,
            <>250 ÷ 12 = {c.d.quotient} remainder {c.d.remainder}, so <strong>{c.d.quotient + 1} boxes</strong> are needed.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Calculate 3 447 ÷ 17.",
    options: ["202 remainder 31", "202 remainder 13", "203 remainder 13", "200 remainder 47"],
    answer: "202 remainder 13",
    explanation: "200 × 17 = 3 400 leaves 47. 2 × 17 = 34 leaves 13. So 202 remainder 13.",
  },
  {
    prompt: "What is 200 × 17?",
    options: ["3 400", "340", "34 000", "3 040"],
    answer: "3 400",
    explanation: "2 × 17 = 34, so 200 × 17 = 3 400.",
  },
  {
    prompt: "You know 10 × 17 = 170. How can you find 5 × 17?",
    options: ["Double 170 to get 340", "Add 5 to 170 to get 175", "Subtract 5 from 170 to get 165", "Halve 170 to get 85"],
    answer: "Halve 170 to get 85",
    explanation: "Five is half of ten, so 5 × 17 is half of 10 × 17: 170 ÷ 2 = 85.",
  },
  {
    prompt: "Calculate 1 440 ÷ 24.",
    options: ["6", "600", "60", "66"],
    answer: "60",
    explanation: "24 × 60 = 1 440, so 1 440 ÷ 24 = 60.",
  },
  {
    prompt: "Calculate 5 640 ÷ 24.",
    options: ["234", "235", "245", "225"],
    answer: "235",
    explanation: "24 × 200 = 4 800 leaves 840. 24 × 35 = 840. So 200 + 35 = 235.",
  },
  {
    prompt: "Calculate 4 536 ÷ 36.",
    options: ["126", "125", "136", "116"],
    answer: "126",
    explanation: "36 × 100 = 3 600 leaves 936. 36 × 26 = 936. So 126.",
  },
  {
    prompt: "Calculate 1 000 ÷ 12.",
    options: ["83 remainder 14", "84 remainder 8", "82 remainder 16", "83 remainder 4"],
    answer: "83 remainder 4",
    explanation: "12 × 83 = 996, and 1 000 − 996 = 4. So 83 remainder 4.",
  },
  {
    prompt: "500 sweets are shared equally among 12 learners. How many does each learner get, and how many are left over?",
    options: ["42 each and 4 left over", "41 each and 12 left over", "41 each and 8 left over", "40 each and 20 left over"],
    answer: "41 each and 8 left over",
    explanation: "12 × 41 = 492, and 500 − 492 = 8. Each learner gets 41 sweets and 8 are left over.",
  },
  {
    prompt: "Which calculation checks that 3 447 ÷ 17 = 202 remainder 13?",
    options: ["202 × 17 = 3 447", "202 × 17 + 13 = 3 447", "202 + 17 + 13 = 3 447", "17 × 13 + 202 = 3 447"],
    answer: "202 × 17 + 13 = 3 447",
    explanation: "Multiply the quotient by the divisor and add the remainder: 202 × 17 = 3 434, and 3 434 + 13 = 3 447.",
  },
  {
    prompt: "Estimate 4 217 ÷ 21 by rounding to numbers that are easy to divide.",
    options: ["210", "21", "2 100", "200 remainder 20"],
    answer: "210",
    explanation: "4 217 is about 4 200 and 21 is about 20. Then 4 200 ÷ 20 = 210.",
  },
  {
    prompt: "Calculate 7 200 ÷ 18.",
    options: ["40", "4 000", "360", "400"],
    answer: "400",
    explanation: "18 × 400 = 7 200, so 7 200 ÷ 18 = 400.",
  },
  {
    prompt: "Calculate 1 234 ÷ 15.",
    options: ["82 remainder 40", "83 remainder 4", "82 remainder 4", "81 remainder 19"],
    answer: "82 remainder 4",
    explanation: "15 × 80 = 1 200 leaves 34. 15 × 2 = 30 leaves 4. So 82 remainder 4.",
  },
  {
    prompt: "300 learners go on a trip. Each bus seats 24 learners. How many buses are needed?",
    options: ["12 buses", "13 buses", "12 remainder 12 buses", "11 buses"],
    answer: "13 buses",
    explanation: "300 ÷ 24 = 12 remainder 12. The 12 learners left over need another bus, so 13 buses are needed.",
  },
];
// BANK:END

const Divide2Digit = () => (
  <CapsSubjectTopic
    title="Dividing by 2-digit Numbers"
    subtitle="Clue boards, multiplying then subtracting, checking and remainders"
    learnSteps={learnSteps}
    task="gr6-divide-2digit-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Divide2Digit;
