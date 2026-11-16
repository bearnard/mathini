import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { LineList, LongMultiply, WordTools } from '../../../../components/diagrams/maths/Grade6Maths';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as m from '../../../../components/diagrams/maths/grade6MulDiv';

// Every number in the slides below comes from the tested helpers in grade6MulDiv.ts (grade6MulDiv.test.ts, g6MathsNewBank.test.ts).
const R = (n: number) => `R${g(n)}`;
const est = [m.estimateProduct(4362, 1000, 108, 100), 4400 * 108, 4362 * 100, 4000 * 108];
const lm = { parts: m.partialProducts(4362, 108), total: m.longMultiply(4362, 108) };
const lm2 = { parts: m.partialProducts(3245, 126), total: m.longMultiply(3245, 126) };
const tickets = 1250 * 180;
const bottles = 3125 * 168;
const c = { a: m.estimateProduct(5238, 1000, 297, 100), b: m.longMultiply(3218, 105), c: m.longMultiply(2150, 240), d: 1450 * 125 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Estimate: how you round matters',
    content: slide(
      <>
        <Rule>Different roundings give different estimates. Rounding both numbers is quick but less close. Rounding only one number gives a closer estimate. Choose the rounding that suits how accurate you need to be.</Rule>
        <LineList
          lines={[
            { text: `4 000 × 100 = ${g(est[0])}` },
            { text: `4 000 × 108 = ${g(est[3])}`, color: '#fbbf24' },
            { text: `4 362 × 100 = ${g(est[2])}`, color: '#fbbf24' },
            { text: `4 400 × 108 = ${g(est[1])}`, color: '#86efac' },
          ]}
          aria={`Four estimates of 4 362 times 108: ${g(est[0])}, ${g(est[3])}, ${g(est[2])} and ${g(est[1])}. The exact answer is ${g(lm.total)}.`}
        />
        <Worked
          title="Estimates of 4 362 × 108"
          steps={[
            <>Round both numbers: 4 000 × 100 = <strong>{g(est[0])}</strong>.</>,
            <>Round only 4 362: 4 000 × 108 = <strong>{g(est[3])}</strong>. Round only 108: 4 362 × 100 = <strong>{g(est[2])}</strong>.</>,
            <>Round 4 362 up to 4 400: 4 400 × 108 = <strong>{g(est[1])}</strong>.</>,
            <>The exact answer, {g(lm.total)}, lies in the same region as every estimate.</>,
          ]}
        />
        <Mistake>Thinking that there is only one correct estimate. What matters is that the estimate is easy to work out and tells you the size of the answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Long multiplication by 3 digits',
    content: slide(
      <>
        <Rule>Multiply by each digit of the multiplier and keep its place value: ones, tens and hundreds. A zero digit gives no partial product. Add the partial products.</Rule>
        <LongMultiply a={4362} b={108} />
        <Worked
          title="4 362 × 108"
          steps={[
            <>Ones: 8 × 4 362 = <strong>{g(lm.parts[0].product)}</strong>.</>,
            <>Tens: the digit is 0, so there is no partial product.</>,
            <>Hundreds: 100 × 4 362 = <strong>{g(lm.parts[1].product)}</strong>.</>,
            <>Add: {g(lm.parts[0].product)} + {g(lm.parts[1].product)} = <strong>{g(lm.total)}</strong>.</>,
          ]}
        />
        <Mistake>Writing the zero as a digit to multiply by 10. The 0 in 108 means no tens, so skip that line.</Mistake>
      </>,
    ),
  },
  {
    title: 'All three digits',
    content: slide(
      <>
        <Rule>When all three digits are used, there are three partial products: the hundreds, the tens and the ones. Write each one with its place value, and then add them carefully.</Rule>
        <LongMultiply a={3245} b={126} />
        <Worked
          title="3 245 × 126"
          steps={[
            <>Hundreds: 100 × 3 245 = <strong>{g(lm2.parts[2].product)}</strong>.</>,
            <>Tens: 20 × 3 245 = <strong>{g(lm2.parts[1].product)}</strong>.</>,
            <>Ones: 6 × 3 245 = <strong>{g(lm2.parts[0].product)}</strong>.</>,
            <>Add: {g(lm2.parts[2].product)} + {g(lm2.parts[1].product)} + {g(lm2.parts[0].product)} = <strong>{g(lm2.total)}</strong>.</>,
          ]}
        />
        <Mistake>Adding the partial products in the wrong columns. Line up the digits by place value before you add.</Mistake>
      </>,
    ),
  },
  {
    title: 'Problems with money and rates',
    content: slide(
      <>
        <Rule>Many problems are groups of the same size: the number of groups times the size of each group. Work out which number is the group and which is how many groups, and then multiply.</Rule>
        <WordTools pairs={[['each', 'multiply'], ['per hour, per day', 'multiply by the time'], ['all together', 'add up the groups']]} />
        <Worked
          title="Tickets and bottles"
          steps={[
            <>1 250 tickets at R180 each: 1 250 × 180 = <strong>{R(tickets)}</strong>.</>,
            <>A factory fills 3 125 bottles an hour for 168 hours: 3 125 × 168 = <strong>{g(bottles)}</strong> bottles.</>,
            <>Estimate to check: 3 000 × 170 = {g(3000 * 170)}, which is close to {g(bottles)}.</>,
          ]}
        />
        <Mistake>Adding when you should multiply. Equal groups (each, per) mean multiplication, not addition.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Estimate {g(5238)} × 297 by rounding 5 238 to the nearest 1 000 and 297 to the nearest 100.</>,
            <>Calculate {g(3218)} × 105.</>,
            <>Calculate {g(2150)} × 240.</>,
            <>A farm picks 1 450 oranges a day for 125 days. How many oranges is that?</>,
          ]}
          answers={[
            <>{g(5000)} × 300 = <strong>{g(c.a)}</strong>.</>,
            <><strong>{g(c.b)}</strong>.</>,
            <><strong>{g(c.c)}</strong>.</>,
            <>1 450 × 125 = <strong>{g(c.d)}</strong> oranges.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Calculate 4 362 × 108.",
    options: ["470 096", "471 096", "471 906", "472 096"],
    answer: "471 096",
    explanation: "8 × 4 362 = 34 896 and 100 × 4 362 = 436 200. The sum is 471 096.",
  },
  {
    prompt: "Estimate 4 362 × 108 by rounding 4 362 to the nearest 1 000 and 108 to the nearest 100.",
    options: ["400 000", "40 000", "4 000 000", "436 200"],
    answer: "400 000",
    explanation: "4 362 rounds to 4 000 and 108 rounds to 100. Then 4 000 × 100 = 400 000.",
  },
  {
    prompt: "In 4 362 × 108, what is the partial product 8 × 4 362?",
    options: ["34 596", "35 896", "3 489", "34 896"],
    answer: "34 896",
    explanation: "8 × 4 000 = 32 000, 8 × 300 = 2 400, 8 × 60 = 480 and 8 × 2 = 16. The total is 34 896.",
  },
  {
    prompt: "In 4 362 × 108, what is the partial product 100 × 4 362?",
    options: ["43 620", "4 362 000", "436 200", "435 200"],
    answer: "436 200",
    explanation: "Multiplying by 100 moves every digit two places to the left: 436 200.",
  },
  {
    prompt: "Calculate 3 245 × 126.",
    options: ["408 770", "408 870", "409 870", "398 870"],
    answer: "408 870",
    explanation: "100 × 3 245 = 324 500, 20 × 3 245 = 64 900 and 6 × 3 245 = 19 470. The sum is 408 870.",
  },
  {
    prompt: "Calculate 2 457 × 312.",
    options: ["766 584", "765 584", "766 484", "756 584"],
    answer: "766 584",
    explanation: "300 × 2 457 = 737 100, 10 × 2 457 = 24 570 and 2 × 2 457 = 4 914. The sum is 766 584.",
  },
  {
    prompt: "Calculate 1 205 × 204.",
    options: ["245 220", "244 820", "246 820", "245 820"],
    answer: "245 820",
    explanation: "200 × 1 205 = 241 000 and 4 × 1 205 = 4 820. The sum is 245 820.",
  },
  {
    prompt: "Calculate 5 400 × 120.",
    options: ["64 800", "6 480 000", "648 000", "658 000"],
    answer: "648 000",
    explanation: "54 × 12 = 648, and the zeros give 648 000.",
  },
  {
    prompt: "A concert has 1 250 tickets at R180 each. How much money do all the tickets bring in?",
    options: ["R22 500", "R225 000", "R225 500", "R2 250 000"],
    answer: "R225 000",
    explanation: "1 250 × 180 = 225 000, so all the tickets bring in R225 000.",
  },
  {
    prompt: "A factory fills 3 125 bottles an hour. How many bottles does it fill in 168 hours?",
    options: ["525 000", "515 000", "525 600", "52 500"],
    answer: "525 000",
    explanation: "3 125 × 168 = 3 125 × 100 + 3 125 × 60 + 3 125 × 8 = 312 500 + 187 500 + 25 000 = 525 000.",
  },
  {
    prompt: "You multiply a number by 326 in long multiplication. Which partial product comes from the digit 3?",
    options: ["3 × the number", "30 × the number", "326 × the number", "300 × the number"],
    answer: "300 × the number",
    explanation: "The 3 in 326 is in the hundreds place, so it stands for 300.",
  },
  {
    prompt: "Estimate 6 812 × 395 by rounding 6 812 to the nearest 1 000 and 395 to the nearest 100.",
    options: ["280 000", "2 400 000", "2 800 000", "28 000 000"],
    answer: "2 800 000",
    explanation: "6 812 rounds to 7 000 and 395 rounds to 400. Then 7 000 × 400 = 2 800 000.",
  },
  {
    prompt: "Which is the correct way to use the distributive property for 12 × 105?",
    options: ["12 × 100 × 5 = 6 000 (multiplied the parts)", "12 × 100 + 12 × 5 = 1 260", "12 + 100 + 5 = 117 (added all the numbers)", "12 × 105 = 105 × 120 (changed a number)"],
    answer: "12 × 100 + 12 × 5 = 1 260",
    explanation: "105 = 100 + 5, so 12 × 105 = 1 200 + 60 = 1 260.",
  },
  {
    prompt: "What is 3 456 × 0?",
    options: ["0", "3 456", "3 450", "1"],
    answer: "0",
    explanation: "Any number multiplied by 0 is 0.",
  },
];
// BANK:END

const Multiply3Digit = () => (
  <CapsSubjectTopic
    title="Multiplying by 3-digit Numbers"
    subtitle="Estimating, long multiplication by three digits and problems"
    learnSteps={learnSteps}
    task="gr6-multiply-3digit-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Multiply3Digit;
