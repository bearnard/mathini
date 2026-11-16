import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { LineList, LongMultiply } from '../../../../components/diagrams/maths/Grade6Maths';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as m from '../../../../components/diagrams/maths/grade6MulDiv';

// Every number in the slides below comes from the tested helpers in grade6MulDiv.ts (grade6MulDiv.test.ts, g6MathsNewBank.test.ts).
// slide 1: estimating
const est = { a: 3487, b: 42, product: m.estimateProduct(3487, 1000, 42, 10), exact: 3487 * 42 };
// slide 2: the distributive property
const dist = m.distribute(547, 45);
const down = m.distributeDown(547, 45);
// slide 3: factors
const fac = m.byFactors(547, [6, 7]);
// slide 4: long multiplication
const lm = { a: 2345, b: 67, parts: m.partialProducts(2345, 67), total: m.longMultiply(2345, 67), est: m.estimateProduct(2345, 1000, 67, 10) };
// check yourself
const c = { a: m.estimateProduct(6428, 1000, 31, 10), b: m.longMultiply(4125, 16), c: m.longMultiply(1862, 54), d: 48 * 250 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Estimate first',
    content: slide(
      <>
        <Rule>Before you multiply, round the numbers to easy ones and multiply those. The estimate tells you roughly how big the answer must be, so you can spot a mistake.</Rule>
        <LineList
          lines={[{ text: `${g(est.a)} × ${est.b}` }, { text: `≈ ${g(m.estimateProduct(est.a, 1000, 1, 1))} × ${m.estimateProduct(est.b, 10, 1, 1)}`, color: '#fbbf24' }, { text: `= ${g(est.product)}`, color: '#86efac' }]}
          aria={`The estimate of ${g(est.a)} times ${est.b}: round to ${g(3000)} times 40, which is ${g(est.product)}.`}
        />
        <Worked
          title={`Estimate ${g(est.a)} × ${est.b}`}
          steps={[
            <>Round {g(est.a)} to the nearest 1 000: <strong>{g(3000)}</strong>. Round {est.b} to the nearest 10: <strong>40</strong>.</>,
            <>Multiply the easy numbers: 3 × 4 = 12, and the zeros give {g(est.product)}.</>,
            <>The exact answer is {g(est.exact)}, which is close, so the calculation is sensible.</>,
          ]}
        />
        <Mistake>Giving the estimate as the final answer, or losing a zero. Count the zeros: 3 000 × 40 has three zeros and one zero, so the product has four zeros after the 12.</Mistake>
      </>,
    ),
  },
  {
    title: 'Break numbers up',
    content: slide(
      <>
        <Rule>Break the multiplier into tens and ones and multiply each part: this is the distributive property. You can also round up to a ten and subtract the difference.</Rule>
        <LineList
          lines={[{ text: `547 × 45 = 547 × 40 + 547 × 5` }, { text: `= ${g(dist.bigProduct)} + ${g(dist.smallProduct)}`, color: '#fbbf24' }, { text: `= ${g(dist.total)}`, color: '#86efac' }]}
          aria={`547 times 45 is 547 times 40 plus 547 times 5, which is ${g(dist.bigProduct)} plus ${g(dist.smallProduct)}, which is ${g(dist.total)}.`}
        />
        <Worked
          title="547 × 45"
          steps={[
            <>Break 45 into 40 + 5. 547 × 40 = <strong>{g(dist.bigProduct)}</strong> and 547 × 5 = <strong>{g(dist.smallProduct)}</strong>.</>,
            <>Add: {g(dist.bigProduct)} + {g(dist.smallProduct)} = <strong>{g(dist.total)}</strong>.</>,
            <>Or round 45 up to 50: 547 × 50 = {g(down.upProduct)}, and 547 × 5 = {g(down.diffProduct)}.</>,
            <>Subtract: {g(down.upProduct)} − {g(down.diffProduct)} = <strong>{g(down.total)}</strong>. Both ways give the same answer.</>,
          ]}
        />
        <Mistake>Multiplying only one of the parts. Both 547 × 40 and 547 × 5 are needed, and then you add them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Use factors',
    content: slide(
      <>
        <Rule>Break the multiplier into factors and multiply one factor at a time. 42 = 6 × 7, so multiply by 6 and then multiply the answer by 7. Each step is easier than the whole.</Rule>
        <LineList
          lines={[{ text: `547 × 42 = 547 × 6 × 7` }, { text: `547 × 6 = ${g(fac.running[0])}`, color: '#fbbf24' }, { text: `${g(fac.running[0])} × 7 = ${g(fac.total)}`, color: '#86efac' }]}
          aria={`547 times 42 is 547 times 6 times 7. 547 times 6 is ${g(fac.running[0])}, and ${g(fac.running[0])} times 7 is ${g(fac.total)}.`}
        />
        <Worked
          title="547 × 42"
          steps={[
            <>Break 42 into the factors 6 and 7.</>,
            <>547 × 6 = 6 × 500 + 6 × 40 + 6 × 7 = 3 000 + 240 + 42 = <strong>{g(fac.running[0])}</strong>.</>,
            <>{g(fac.running[0])} × 7 = 7 × 3 000 + 7 × 200 + 7 × 80 + 7 × 2 = 21 000 + 1 400 + 560 + 14 = <strong>{g(fac.total)}</strong>.</>,
          ]}
        />
        <Mistake>Choosing factors that do not multiply to the number. 6 × 7 = 42, but 5 × 8 = 40, so it would give the wrong answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Long multiplication',
    content: slide(
      <>
        <Rule>Multiply the number by each digit of the multiplier, keeping the place value of that digit, and add the partial products. The tens digit gives tens, so its partial product ends in a zero.</Rule>
        <LongMultiply a={lm.a} b={lm.b} />
        <Worked
          title={`${g(lm.a)} × ${lm.b}`}
          steps={[
            <>Estimate first: about {g(lm.est)}.</>,
            <>Ones: 7 × {g(lm.a)} = <strong>{g(lm.parts[0].product)}</strong>.</>,
            <>Tens: 60 × {g(lm.a)} = <strong>{g(lm.parts[1].product)}</strong>.</>,
            <>Add: {g(lm.parts[0].product)} + {g(lm.parts[1].product)} = <strong>{g(lm.total)}</strong>, close to the estimate.</>,
          ]}
        />
        <Mistake>Forgetting that the 6 in 67 means 60. If you write 6 × {g(lm.a)} you get a partial product that is ten times too small.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Estimate {g(6428)} × 31 by rounding 6 428 to the nearest 1 000 and 31 to the nearest 10.</>,
            <>Calculate {g(4125)} × 16.</>,
            <>Calculate {g(1862)} × 54 with long multiplication.</>,
            <>A hall has 48 rows of 250 chairs. How many chairs are there?</>,
          ]}
          answers={[
            <>{g(6000)} × 30 = <strong>{g(c.a)}</strong>.</>,
            <><strong>{g(c.b)}</strong>.</>,
            <><strong>{g(c.c)}</strong>.</>,
            <>48 × 250 = <strong>{g(c.d)}</strong> chairs.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Estimate 3 487 × 42 by rounding 3 487 to the nearest 1 000 and 42 to the nearest 10.",
    options: ["140 000", "120 000", "12 000", "150 000"],
    answer: "120 000",
    explanation: "3 487 rounds to 3 000 and 42 rounds to 40. Then 3 000 × 40 = 120 000.",
  },
  {
    prompt: "Calculate 547 × 45.",
    options: ["24 615", "24 515", "25 615", "21 880"],
    answer: "24 615",
    explanation: "547 × 45 = 547 × 40 + 547 × 5 = 21 880 + 2 735 = 24 615.",
  },
  {
    prompt: "547 × 45 = 547 × 40 + 547 × 5. What is 547 × 40?",
    options: ["2 188", "218 800", "20 880", "21 880"],
    answer: "21 880",
    explanation: "547 × 4 = 2 188, and multiplying by 10 gives 21 880.",
  },
  {
    prompt: "What is 547 × 50?",
    options: ["2 735", "273 500", "27 350", "26 350"],
    answer: "27 350",
    explanation: "547 × 5 = 2 735, and multiplying by 10 gives 27 350.",
  },
  {
    prompt: "To calculate 547 × 42 you break 42 into the factors 6 × 7. What is 547 × 6?",
    options: ["3 182", "3 282", "3 292", "3 252"],
    answer: "3 282",
    explanation: "547 × 6 = 3 282. Then 3 282 × 7 gives 547 × 42.",
  },
  {
    prompt: "Calculate 547 × 42.",
    options: ["22 974", "22 874", "23 974", "21 880"],
    answer: "22 974",
    explanation: "547 × 6 = 3 282 and 3 282 × 7 = 22 974.",
  },
  {
    prompt: "Calculate 2 345 × 67.",
    options: ["156 115", "157 215", "147 115", "157 115"],
    answer: "157 115",
    explanation: "60 × 2 345 = 140 700 and 7 × 2 345 = 16 415. The sum is 157 115.",
  },
  {
    prompt: "Estimate 2 345 × 67 by rounding 2 345 to the nearest 1 000 and 67 to the nearest 10.",
    options: ["14 000", "1 400 000", "140 000", "180 000"],
    answer: "140 000",
    explanation: "2 345 rounds to 2 000 and 67 rounds to 70. Then 2 000 × 70 = 140 000.",
  },
  {
    prompt: "Calculate 3 456 × 23 with long multiplication.",
    options: ["78 488", "79 488", "79 588", "69 120"],
    answer: "79 488",
    explanation: "Partial products: 3 × 3 456 = 10 368 and 20 × 3 456 = 69 120. Together: 79 488.",
  },
  {
    prompt: "In 3 456 × 23, what is the partial product for the 2 tens (20 × 3 456)?",
    options: ["69 120", "6 912", "691 200", "10 368"],
    answer: "69 120",
    explanation: "2 × 3 456 = 6 912, and the 2 is in the tens place, so the partial product is 69 120.",
  },
  {
    prompt: "A bus holds 65 learners. How many learners can 28 buses carry?",
    options: ["1 720", "1 920", "93", "1 820"],
    answer: "1 820",
    explanation: "28 buses × 65 learners = 1 820 learners.",
  },
  {
    prompt: "How does the distributive property help you to calculate 23 × 15?",
    options: ["Swap the numbers round to make 15 × 23 instead", "Multiply 23 by 1 so that the number stays the same", "Split 15 into 10 + 5 and multiply each part by 23", "Group three numbers in a different way"],
    answer: "Split 15 into 10 + 5 and multiply each part by 23",
    explanation: "Split one number into parts: 15 = 10 + 5, so 23 × 15 = 23 × 10 + 23 × 5 = 230 + 115 = 345.",
  },
  {
    prompt: "What is 4 506 × 100?",
    options: ["45 060", "450 600", "4 506 000", "450 060"],
    answer: "450 600",
    explanation: "Multiplying by 100 moves every digit two places to the left: 450 600.",
  },
  {
    prompt: "A machine makes 235 bottles an hour. How many bottles does it make in 24 hours?",
    options: ["5 640", "5 540", "5 740", "4 640"],
    answer: "5 640",
    explanation: "24 × 235 = 20 × 235 + 4 × 235 = 4 700 + 940 = 5 640.",
  },
];
// BANK:END

const Multiply2Digit = () => (
  <CapsSubjectTopic
    title="Multiplying by 2-digit Numbers"
    subtitle="Estimating, breaking numbers up, using factors and long multiplication"
    learnSteps={learnSteps}
    task="gr6-multiply-2digit-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Multiply2Digit;
