import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { ColumnMethod, InversePair, WordTools } from '../../../../components/diagrams/maths/Grade6Maths';
import * as a from '../../../../components/diagrams/maths/grade6AddSub';

// Every number in the slides below comes from the tested helpers in grade6AddSub.ts (grade6AddSub.test.ts, g6MathsNewBank.test.ts).
const g = a.group;
const R = (n: number) => `R${g(n)}`;

// slide 1: estimating and adding
const est = { a: 489650, b: 312400, sum: a.estimate(489650, 312400, 10000, '+') };
const add = [345678, 123456];
const addRes = a.columnAdd(add);
const aligned = a.columnAdd([502340, 98765]);
// slide 2: subtracting across zeros
const sub = { a: 800000, b: 365478 };
const subRes = a.columnSubtract(sub.a, sub.b);
// slide 3: problem types
const dvd = 126789 + 341567 + 344532;
const pears = 866589 - 342345;
const sugar = 268231 - 43789;
const factory = 864328 - 367435;
const farm = 589544 + 10456;
// slide 4: properties and compensating
const million = a.columnSubtract(1000000, 345678).result;
const comp = a.compensateAdd(123456, 299999, 300000);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Adding 6-digit numbers',
    content: slide(
      <>
        <Rule>Estimate first by rounding to the nearest 10 000 or 100 000. Then line up the digits by place value and add from the ones column, carrying when a column makes 10 or more.</Rule>
        <ColumnMethod op="+" numbers={add} />
        <Worked
          title={`${g(add[0])} + ${g(add[1])}`}
          steps={[
            <>Estimate: {g(a.roundTo(add[0], 10000))} + {g(a.roundTo(add[1], 10000))} = {g(a.roundTo(add[0], 10000) + a.roundTo(add[1], 10000))}.</>,
            <>Ones: 8 + 6 = 14, write 4 and carry 1. Tens: 1 + 7 + 5 = 13, write 3 and carry 1.</>,
            <>Keep carrying through the hundreds, thousands and ten thousands.</>,
            <>The sum is <strong>{g(addRes.result)}</strong>, close to the estimate.</>,
            <>Different lengths: {g(502340)} + {g(98765)}: the 98 765 starts under the thousands. The sum is <strong>{g(aligned.result)}</strong>.</>,
          ]}
        />
        <Mistake>Lining the numbers up on the left. A 5-digit number must sit under the last five digits of a 6-digit number.</Mistake>
      </>,
    ),
  },
  {
    title: 'Subtracting across zeros',
    content: slide(
      <>
        <Rule>When the top digit is a zero you cannot borrow from it at once. Borrow from the next digit that is not zero, and let the borrowing pass along the zeros. Check by adding.</Rule>
        <ColumnMethod op="−" numbers={[sub.a, sub.b]} />
        <Worked
          title={`${g(sub.a)} − ${g(sub.b)}`}
          steps={[
            <>Estimate: {g(a.roundTo(sub.a, 100000))} − {g(a.roundTo(sub.b, 100000))} = {g(a.roundTo(sub.a, 100000) - a.roundTo(sub.b, 100000))}.</>,
            <>Borrow from the 8 hundred thousands: it becomes 7, and each zero becomes 9 as the borrowing passes along, until the last zero becomes 10.</>,
            <>Subtract each column, from the ones leftwards.</>,
            <>The difference is <strong>{g(subRes.result)}</strong>. Check: {g(subRes.result)} + {g(sub.b)} = {g(subRes.result + sub.b)}.</>,
          ]}
        />
        <Mistake>Writing 0 − 8 = 8, or leaving the borrowed zeros as zeros. Each zero in between becomes a 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solving problems',
    content: slide(
      <>
        <Rule>Read the problem and decide what it asks. Altogether means add. A missing part means subtract from the total. Increase or decrease means add or subtract. How much less means find the difference. The original amount is the bigger one after a decrease.</Rule>
        <WordTools pairs={[['altogether', 'add'], ['a missing part', 'subtract'], ['decreases by', 'subtract'], ['how much less', 'find the difference'], ['the original amount', 'add back']]} />
        <Worked
          title="Five kinds of problem"
          steps={[
            <>Summation: 126 789 black, 341 567 white and 344 532 silver DVD players: {g(126789)} + {g(341567)} + {g(344532)} = <strong>{g(dvd)}</strong>.</>,
            <>Missing part: 342 345 pears in the morning and 866 589 by the end of the day: {g(866589)} − {g(342345)} = <strong>{g(pears)}</strong>.</>,
            <>Decrease: a price of {R(268231)} decreases by {R(43789)}: {R(268231)} − {R(43789)} = <strong>{R(sugar)}</strong>.</>,
            <>Comparison: {R(864328)} in November and {R(367435)} in December: {R(864328)} − {R(367435)} = <strong>{R(factory)}</strong> less.</>,
            <>Original amount: a farm sold for {R(589544)} after a decrease of {R(10456)}: {R(589544)} + {R(10456)} = <strong>{R(farm)}</strong>.</>,
          ]}
        />
        <Mistake>Always subtracting when you see the word "decrease". If you know the amount after the decrease and you want the original, you must add.</Mistake>
      </>,
    ),
  },
  {
    title: 'Properties and clever methods',
    content: slide(
      <>
        <Rule>Addition is commutative and associative, and adding 0 changes nothing. Compensating makes a calculation easier: add a round number, then take away what you added too much. Always check with the inverse operation.</Rule>
        <InversePair top={`${g(million)} + ${g(345678)} = ${g(1000000)}`} bottom={`${g(1000000)} − ${g(345678)} = ${g(million)}`} />
        <Worked
          title="Clever and checked"
          steps={[
            <>Compensating: {g(123456)} + {g(299999)} = {g(123456)} + {g(300000)} − 1 = {g(comp.step1)} − 1 = <strong>{g(comp.step2)}</strong>.</>,
            <>Associative: ({g(245000)} + {g(100000)}) + {g(55000)} = {g(245000)} + ({g(100000)} + {g(55000)}) = {g(400000)}.</>,
            <>{g(1000000)} − {g(345678)} = <strong>{g(million)}</strong>.</>,
            <>Check: {g(million)} + {g(345678)} = {g(million + 345678)}.</>,
          ]}
        />
        <Mistake>Taking the compensation the wrong way. You added 1 too much (300 000 instead of 299 999), so subtract 1, do not add it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Calculate {g(345678)} + {g(123456)}.</>,
            <>Calculate {g(800000)} − {g(365478)}.</>,
            <>A shop sells {R(725604)} of goods in March and {R(389215)} in April. How much less does it sell in April?</>,
            <>Farm workers pick {g(342345)} pears in the morning and have {g(866589)} by the end of the day. How many do they pick after lunch?</>,
          ]}
          answers={[
            <><strong>{g(addRes.result)}</strong>.</>,
            <><strong>{g(subRes.result)}</strong>.</>,
            <>{R(725604)} − {R(389215)} = <strong>{R(725604 - 389215)}</strong>.</>,
            <>{g(866589)} − {g(342345)} = <strong>{g(pears)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Calculate 345 678 + 123 456.",
    options: ["468 134", "469 134", "469 124", "479 134"],
    answer: "469 134",
    explanation: "Add the columns from the ones: 8 + 6 = 14, 7 + 5 + 1 = 13, and so on. The sum is 469 134.",
  },
  {
    prompt: "Calculate 800 000 − 365 478.",
    options: ["434 522", "435 522", "434 622", "444 522"],
    answer: "434 522",
    explanation: "Borrow across the zeros: 800 000 − 365 478 = 434 522. Check: 434 522 + 365 478 = 800 000.",
  },
  {
    prompt: "Calculate 502 340 + 98 765.",
    options: ["600 105", "601 005", "591 105", "601 105"],
    answer: "601 105",
    explanation: "502 340 + 98 765 = 601 105. Line up the digits by place value, so the 98 765 starts under the thousands.",
  },
  {
    prompt: "Estimate 489 650 + 312 400 by rounding both numbers to the nearest 10 000.",
    options: ["790 000", "810 000", "800 000", "700 000"],
    answer: "800 000",
    explanation: "489 650 rounds to 490 000 and 312 400 rounds to 310 000. Then 490 000 + 310 000 = 800 000.",
  },
  {
    prompt: "Farm workers picked 342 345 pears in the morning. By the end of the day they had 866 589 pears. How many did they pick after lunch?",
    options: ["1 208 934", "524 244", "524 344", "523 244"],
    answer: "524 244",
    explanation: "This is a missing part: 342 345 + ? = 866 589. Subtract: 866 589 − 342 345 = 524 244.",
  },
  {
    prompt: "A man buys 126 789 black, 341 567 white and 344 532 silver DVD players. How many does he buy altogether?",
    options: ["812 888", "812 788", "813 888", "802 888"],
    answer: "812 888",
    explanation: "Altogether means add: 126 789 + 341 567 + 344 532 = 812 888.",
  },
  {
    prompt: "The price of sugar is R268 231. A leak decreases the price by R43 789. What is the decreased price?",
    options: ["R312 020", "R225 442", "R224 552", "R224 442"],
    answer: "R224 442",
    explanation: "Decrease means subtract: R268 231 − R43 789 = R224 442.",
  },
  {
    prompt: "A factory makes R864 328 in November and R367 435 in December. How much less does it make in December?",
    options: ["R1 231 763", "R497 893", "R496 893", "R496 993"],
    answer: "R496 893",
    explanation: "Comparison by difference: R864 328 − R367 435 = R496 893.",
  },
  {
    prompt: "A farmer decreased the price of his farm by R10 456 and sold it for R589 544. What was the original price?",
    options: ["R579 088", "R600 000", "R599 000", "R600 100"],
    answer: "R600 000",
    explanation: "The original price is bigger: R589 544 + R10 456 = R600 000.",
  },
  {
    prompt: "Calculate 1 000 000 − 345 678.",
    options: ["654 322", "654 332", "655 322", "754 322"],
    answer: "654 322",
    explanation: "1 000 000 − 345 678 = 654 322. Check: 654 322 + 345 678 = 1 000 000.",
  },
  {
    prompt: "Which number sentence shows the associative property of addition?",
    options: ["245 000 + 100 000 = 100 000 + 245 000 (the numbers swap places)", "245 000 + 0 = 245 000 (adding zero changes nothing)", "245 000 − 100 000 = 100 000 − 245 000 (the numbers swap places)", "(245 000 + 100 000) + 55 000 = 245 000 + (100 000 + 55 000)"],
    answer: "(245 000 + 100 000) + 55 000 = 245 000 + (100 000 + 55 000)",
    explanation: "The associative property says that you can group the numbers differently and get the same sum.",
  },
  {
    prompt: "654 322 + 345 678 = 1 000 000. Which subtraction checks this?",
    options: ["1 000 000 + 345 678 = 654 322", "345 678 − 654 322 = 1 000 000", "1 000 000 − 345 678 = 654 322", "654 322 − 345 678 = 1 000 000"],
    answer: "1 000 000 − 345 678 = 654 322",
    explanation: "Subtract one of the numbers from the total: 1 000 000 − 345 678 = 654 322.",
  },
  {
    prompt: "Use compensating: 299 999 + 123 456. Add 300 000 first. What is the answer?",
    options: ["423 465", "423 455", "424 455", "423 355"],
    answer: "423 455",
    explanation: "299 999 is 1 less than 300 000. 300 000 + 123 456 = 423 456, then subtract the extra 1: 423 455.",
  },
  {
    prompt: "Estimate 598 214 − 201 876 by rounding both numbers to the nearest 100 000.",
    options: ["400 000", "300 000", "500 000", "390 000"],
    answer: "400 000",
    explanation: "598 214 rounds to 600 000 and 201 876 rounds to 200 000. Then 600 000 − 200 000 = 400 000.",
  },
];
// BANK:END

const AddSubtract6Digit = () => (
  <CapsSubjectTopic
    title="Adding and Subtracting 6-digit Numbers"
    subtitle="6-digit sums and differences, and problems with money and quantities"
    learnSteps={learnSteps}
    task="gr6-add-subtract-6digit-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default AddSubtract6Digit;
