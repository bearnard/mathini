import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { ColumnMethod, InversePair, RoundLine } from '../../../../components/diagrams/maths/Grade6Maths';
import * as a from '../../../../components/diagrams/maths/grade6AddSub';

// Every number in the slides below comes from the tested helpers in grade6AddSub.ts (grade6AddSub.test.ts, g6MathsNewBank.test.ts).
const g = a.group;

// slide 1: estimating
const est = { a: 45678, b: 12345 };
const estSum = a.estimate(est.a, est.b, 1000, '+');
const exact = est.a + est.b;
// slide 2: adding in columns
const add = [56423, 7581, 21479];
const addRes = a.columnAdd(add);
const parts = add.map(a.placeValues);
// slide 3: subtracting in columns
const sub = { a: 98743, b: 45684 };
const subRes = a.columnSubtract(sub.a, sub.b);
// slide 4: checking and properties
const inv1 = a.inverseOfSum(45362, 32488);
const inv2 = a.inverseOfDifference(54687, 32134);
const change = 200 - 163;
const comp = a.compensateAdd(4567, 999, 1000);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Estimate first',
    content: slide(
      <>
        <Rule>Before you calculate, estimate. Round each number to the nearest 1 000 (or 10 000 for big 5-digit numbers), then add or subtract the rounded numbers. The estimate tells you what size the answer must be.</Rule>
        <RoundLine n={est.a} place={1000} />
        <Worked
          title={`Estimate ${g(est.a)} + ${g(est.b)}`}
          steps={[
            <>Round {g(est.a)} to the nearest 1 000: the hundreds digit is 6, so round up to <strong>{g(a.roundTo(est.a, 1000))}</strong>.</>,
            <>Round {g(est.b)} to the nearest 1 000: the hundreds digit is 3, so round down to <strong>{g(a.roundTo(est.b, 1000))}</strong>.</>,
            <>Add the rounded numbers: {g(a.roundTo(est.a, 1000))} + {g(a.roundTo(est.b, 1000))} = <strong>{g(estSum)}</strong>.</>,
            <>The exact answer, {g(exact)}, is close to the estimate, so it is sensible.</>,
          ]}
        />
        <Mistake>Using the estimate as the final answer, or rounding to the wrong place. An estimate is only a check: you still calculate the exact answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding in columns',
    content: slide(
      <>
        <Rule>Line up the digits by place value, so ones are under ones and tens under tens. Add from the ones column on the right. When a column makes 10 or more, write the ones digit and carry the tens digit to the next column.</Rule>
        <ColumnMethod op="+" numbers={add} />
        <Worked
          title={`${add.map(g).join(' + ')}`}
          steps={[
            <>Expanded: {parts.map((p) => p.map(g).join(' + ')).join(' | ')}.</>,
            <>Ones: 3 + 1 + 9 = 13, write 3 and carry 1. Tens: 1 + 2 + 8 + 7 = 18, write 8 and carry 1.</>,
            <>Hundreds: 1 + 4 + 5 + 4 = 14, write 4 and carry 1. Thousands: 1 + 6 + 7 + 1 = 15, write 5 and carry 1.</>,
            <>Ten thousands: 1 + 5 + 2 = 8. The sum is <strong>{g(addRes.result)}</strong>.</>,
          ]}
        />
        <Mistake>Forgetting to carry, or lining the digits up on the left. Always line up the ones column on the right.</Mistake>
      </>,
    ),
  },
  {
    title: 'Subtracting in columns',
    content: slide(
      <>
        <Rule>Subtract from the ones column on the right. If the top digit is smaller than the digit under it, borrow: take 1 from the next column on the left and add 10 to the top digit. Never swap the digits round.</Rule>
        <ColumnMethod op="−" numbers={[sub.a, sub.b]} />
        <Worked
          title={`${g(sub.a)} − ${g(sub.b)}`}
          steps={[
            <>Ones: 3 is smaller than 4, so borrow 1 ten. The 4 tens become 3 and the 3 ones become 13. 13 − 4 = 9.</>,
            <>Tens: 3 is smaller than 8, so borrow 1 hundred. The 7 hundreds become 6 and the 3 tens become 13. 13 − 8 = 5.</>,
            <>Hundreds: 6 − 6 = 0. Thousands: 8 − 5 = 3. Ten thousands: 9 − 4 = 5.</>,
            <>The difference is <strong>{g(subRes.result)}</strong>.</>,
          ]}
        />
        <Mistake>Taking the smaller digit away from the bigger digit in every column. In 3 − 4 you cannot do 4 − 3: you must borrow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check your answer',
    content: slide(
      <>
        <Rule>Check an addition by subtracting, and a subtraction by adding. Addition is commutative (the order does not matter), associative (the grouping does not matter), and adding 0 changes nothing.</Rule>
        <InversePair top={`${g(45362)} + ${g(32488)} = ${g(inv1.sum)}`} bottom={`${g(inv1.sum)} − ${g(32488)} = ${g(inv1.backToA)}`} />
        <Worked
          title="Inverse operations and properties"
          steps={[
            <>{g(45362)} + {g(32488)} = {g(inv1.sum)}. Check: {g(inv1.sum)} − {g(32488)} = <strong>{g(inv1.backToA)}</strong>.</>,
            <>{g(54687)} − {g(32134)} = {g(inv2.difference)}. Check: {g(inv2.difference)} + {g(32134)} = <strong>{g(inv2.back)}</strong>.</>,
            <>Veli&apos;s shopping costs R163 and he pays with R200. Add on: R163 + R7 = R170, R170 + R30 = R200. His change is R7 + R30 = <strong>R{change}</strong>.</>,
            <>Compensating: {g(4567)} + 999 = {g(4567)} + 1 000 − 1 = {g(comp.step1)} − 1 = <strong>{g(comp.step2)}</strong>.</>,
          ]}
        />
        <Mistake>Checking with the same calculation again. A check should use the inverse operation, so a mistake cannot be repeated.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Estimate {g(45678)} + {g(12345)} by rounding to the nearest 1 000.</>,
            <>Calculate {g(56423)} + {g(7581)} + {g(21479)}.</>,
            <>Calculate {g(98743)} − {g(45684)}, and check your answer.</>,
            <>A library has {g(12345)} books and buys {g(5678)} more. How many books does it have now?</>,
          ]}
          answers={[
            <>{g(a.roundTo(45678, 1000))} + {g(a.roundTo(12345, 1000))} = <strong>{g(estSum)}</strong>.</>,
            <><strong>{g(addRes.result)}</strong>.</>,
            <><strong>{g(subRes.result)}</strong>. Check: {g(subRes.result)} + {g(sub.b)} = {g(subRes.result + sub.b)}.</>,
            <>{g(12345)} + {g(5678)} = <strong>{g(12345 + 5678)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Estimate 45 678 + 12 345 by rounding both numbers to the nearest 1 000.",
    options: ["57 000", "58 000", "59 000", "50 000"],
    answer: "58 000",
    explanation: "Round 45 678 to 46 000 and 12 345 to 12 000. Then 46 000 + 12 000 = 58 000.",
  },
  {
    prompt: "What is 56 423 rounded to the nearest 1 000?",
    options: ["56 000", "57 000", "56 400", "60 000"],
    answer: "56 000",
    explanation: "The hundreds digit is 4, which is less than 5, so the 6 thousands stay the same: 56 000.",
  },
  {
    prompt: "What is 98 743 rounded to the nearest 10 000?",
    options: ["90 000", "980 000", "99 000", "100 000"],
    answer: "100 000",
    explanation: "The thousands digit is 8, so round up the ten thousands: 90 000 becomes 100 000.",
  },
  {
    prompt: "Calculate 56 423 + 7 581 + 21 479.",
    options: ["85 383", "84 483", "85 483", "86 483"],
    answer: "85 483",
    explanation: "Add the columns from the ones: 3 + 1 + 9 = 13 (write 3, carry 1). Continue with carries to get 85 483.",
  },
  {
    prompt: "Calculate 98 743 − 45 684.",
    options: ["53 159", "53 059", "54 059", "53 069"],
    answer: "53 059",
    explanation: "Borrow when the top digit is too small: 3 < 4 and 4 < 8. The answer is 53 059.",
  },
  {
    prompt: "Calculate 45 362 + 32 488.",
    options: ["77 850", "77 750", "78 850", "77 840"],
    answer: "77 850",
    explanation: "45 362 + 32 488: ones 2 + 8 = 10, tens 6 + 8 + 1 = 15, and so on to 77 850.",
  },
  {
    prompt: "54 687 − 32 134 = 22 553. Which calculation checks this answer?",
    options: ["22 553 − 32 134 = 54 687", "54 687 + 32 134 = 22 553", "32 134 − 22 553 = 54 687", "22 553 + 32 134 = 54 687"],
    answer: "22 553 + 32 134 = 54 687",
    explanation: "Check a subtraction by adding the answer and the number you took away: 22 553 + 32 134 = 54 687.",
  },
  {
    prompt: "45 362 + 32 488 = 77 850. Which subtraction checks this answer?",
    options: ["77 850 + 32 488 = 45 362", "45 362 − 32 488 = 77 850", "77 850 − 32 488 = 45 362", "32 488 − 77 850 = 45 362"],
    answer: "77 850 − 32 488 = 45 362",
    explanation: "Check an addition by subtracting one of the numbers from the total: 77 850 − 32 488 = 45 362.",
  },
  {
    prompt: "Veli's shopping costs R163. He pays with a R200 note. How much change does he get?",
    options: ["R47", "R37", "R27", "R363"],
    answer: "R37",
    explanation: "Add on from R163 to R200: R163 + R7 = R170, and R170 + R30 = R200. The change is R7 + R30 = R37.",
  },
  {
    prompt: "Which number sentence shows the commutative property of addition?",
    options: ["12 345 + 6 789 = 6 789 + 12 345", "12 345 + 0 = 12 345", "(1 + 2) + 3 = 1 + (2 + 3)", "12 345 − 6 789 = 6 789 − 12 345"],
    answer: "12 345 + 6 789 = 6 789 + 12 345",
    explanation: "The commutative property says that the order of the numbers does not change the sum: 12 345 + 6 789 = 6 789 + 12 345.",
  },
  {
    prompt: "What is 48 275 + 0?",
    options: ["0", "48 276", "48 270", "48 275"],
    answer: "48 275",
    explanation: "Adding 0 does not change a number. Zero is the additive identity.",
  },
  {
    prompt: "In 98 743 − 45 684, the ones digit 3 is smaller than 4. What do you do?",
    options: ["Swap the 3 and the 4 round to make 4 − 3", "Write 1 as the answer for the ones column", "Borrow 1 ten from the tens column", "Add the 3 and the 4 to get 7 ones"],
    answer: "Borrow 1 ten from the tens column",
    explanation: "Take 1 ten from the 4 tens, which leaves 3 tens, and add 10 ones to the 3 ones to make 13. Then 13 − 4 = 9.",
  },
  {
    prompt: "Use compensating: 4 999 + 3 245. Add 5 000 first. What is the answer?",
    options: ["8 245", "8 244", "8 254", "7 244"],
    answer: "8 244",
    explanation: "4 999 is 1 less than 5 000. 5 000 + 3 245 = 8 245, then subtract the extra 1: 8 244.",
  },
  {
    prompt: "A school library has 12 345 books. It buys 5 678 more. How many books does it have now?",
    options: ["18 023", "17 023", "18 013", "17 923"],
    answer: "18 023",
    explanation: "12 345 + 5 678 = 18 023. The words \"buys more\" tell you to add.",
  },
];
// BANK:END

const AddSubtract5Digit = () => (
  <CapsSubjectTopic
    title="Adding and Subtracting 5-digit Numbers"
    subtitle="Estimating, the column methods, checking with the inverse and using the properties"
    learnSteps={learnSteps}
    task="gr6-add-subtract-5digit-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default AddSubtract5Digit;
