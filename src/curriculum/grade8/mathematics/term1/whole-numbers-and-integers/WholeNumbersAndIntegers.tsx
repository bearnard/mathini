import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberLine } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { DepthLine, RepeatedJumps } from '../../../../../components/diagrams/maths/Grade8Pictures';
import { absolute, ascending, divideExact, jump, productSign, signed } from '../../../../../components/diagrams/maths/grade7Helpers';
import { additiveInverse, subtractAsAdd } from '../../../../../components/diagrams/maths/grade8Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers, grade8Helpers) and
// lessonsMaths4.test.ts checks that the rendered slides show them.
const S = signed;
const I = '#818cf8';
const G = '#34d399';
const Y = '#fbbf24';
const P = '#fb7185';

const order = [7, -2, -12, 0];
const sorted = ascending(order);
const add = { a: -8, b: 13, r: -8 + 13, move: jump(-8, -8 + 13) };
const sub = { a: 2, b: 8, ...subtractAsAdd(2, 8) };
const inv = additiveInverse(15);
const abs = absolute(-17);
const subNeg = { a: 5, b: -3, ...subtractAsAdd(5, -3) };
const mul = { a: -4, b: 7, r: -4 * 7, sign: productSign(-4, 7) };
const mul2 = { a: -3, b: -5, r: -3 * -5, sign: productSign(-3, -5) };
const div = { a: -24, b: -6, r: divideExact(-24, -6), sign: productSign(-24, -6) };
const brackets = { inner: 6 - 2, r: 18 - (6 - 2), wrong: 18 - 6 - 2 };
const diver = { start: -9, rise: 4, end: -9 + 4 };
const wrongSum = -3 + -5; // the mistake slide: "two negatives make a positive" is a product rule

// "Check yourself", answers computed from the same helpers
const c1 = ascending([-3, 5, -10, 0]);
const c2 = -11 + 6;
const c3 = { m: -3 * -8, d: divideExact(-36, 4) };
const c4 = { inner: -2 - 3, r: 20 + 4 * (-2 - 3) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Ordering integers on the number line',
    content: slide(
      <>
        <Rule>On a number line, the number farther to the right is bigger. Every negative number is smaller than 0 and smaller than every positive number.</Rule>
        <NumberLine
          min={-14}
          max={8}
          marks={sorted.map((v, i) => ({ value: v, label: S(v), color: [P, I, Y, G][i] }))}
          aria={`A number line from minus 14 to 8 with ${sorted.map(S).join(', ')} marked from left to right.`}
        />
        <Worked
          title={`Order ${order.map(S).join(', ')} from smallest to biggest`}
          steps={[
            <>Place each number on the line.</>,
            <>Read from left to right: <strong>{sorted.map(S).join(', ')}</strong>.</>,
            <>So the smallest is {S(sorted[0])}: it lies farthest left.</>,
          ]}
        />
        <Mistake>Choosing {S(-2)} as the smallest because 2 is smaller than 12. On the line, {S(-12)} is 10 places to the left of {S(-2)}, so <span className="whitespace-nowrap">{S(-12)} &lt; {S(-2)}</span>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding and subtracting integers',
    content: slide(
      <>
        <Rule>Adding a positive number moves you right on the number line. Subtracting a positive number moves you left.</Rule>
        <NumberLine
          min={-10}
          max={7}
          marks={[{ value: add.a, label: S(add.a), color: I }, { value: add.r, label: S(add.r), color: G }]}
          jumps={[{ from: add.a, to: add.r, label: `+${add.move}`, color: I }]}
          aria={`A number line. Start at minus 8 and jump 13 to the right to land on ${add.r}.`}
        />
        <Worked
          title={`${S(add.a)} + ${add.b} and ${sub.a} − ${sub.b}`}
          steps={[
            <>Start at {S(add.a)} and move {add.b} places right: you land on <strong>{add.r}</strong>.</>,
            <>For {sub.a} − {sub.b}, start at {sub.a} and move {sub.b} places left.</>,
            <>You pass 0 after {sub.a} steps and go {sub.b - sub.a} more: {sub.a} − {sub.b} = <strong>{S(sub.result)}</strong>.</>,
          ]}
        />
        <Mistake>
          Writing {sub.a} − {sub.b} = {sub.b - sub.a}. Swapping the order changes the answer: {sub.b} − {sub.a} = {sub.b - sub.a}, but {sub.a} − {sub.b} = {S(sub.result)}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Additive inverses and absolute value',
    content: slide(
      <>
        <Rule>
          A number and its additive inverse add up to 0, for example 15 and {S(inv)}. The absolute value |n| is the distance from 0, so it is never negative.
        </Rule>
        <NumberLine
          min={-17}
          max={17}
          marks={[{ value: inv, label: S(inv), color: P }, { value: 15, label: '15', color: G }]}
          jumps={[{ from: 0, to: 15, label: '15 units', color: G }, { from: 0, to: inv, label: '15 units', color: P }]}
          aria={`A number line from minus 17 to 17. 15 and minus 15 are both 15 units from 0, on opposite sides.`}
        />
        <Worked
          steps={[
            <>The additive inverse of 15 is {S(inv)}, because 15 + ({S(inv)}) = {15 + inv}.</>,
            <>|{S(-17)}| = <strong>{abs}</strong>: {S(-17)} is {abs} units from 0.</>,
            <>Subtracting a number is adding its inverse: {subNeg.a} − ({S(subNeg.b)}) = {subNeg.a} + {subNeg.inverse} = <strong>{subNeg.result}</strong>.</>,
          ]}
        />
        <Mistake>Saying |{S(-17)}| = {S(-17)}. A distance cannot be negative: |{S(-17)}| = {abs}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiplying and dividing: the sign rules',
    content: slide(
      <>
        <Rule>Multiply or divide the numbers without signs first. Same signs give a positive answer; different signs give a negative answer.</Rule>
        <RepeatedJumps step={-4} times={7} aria={`A number line. Seven jumps of minus 4 from 0 land on ${S(mul.r)}, so 7 times minus 4 is ${S(mul.r)}.`} />
        <Worked
          steps={[
            <>({S(mul.a)}) × {mul.b}: 4 × 7 = 28, and the signs are different, so the answer is <strong>{S(mul.r)}</strong>.</>,
            <>({S(mul2.a)}) × ({S(mul2.b)}): 3 × 5 = 15, and the signs are the same, so the answer is <strong>{mul2.r}</strong>.</>,
            <>({S(div.a)}) ÷ ({S(div.b)}): 24 ÷ 6 = 4, same signs, so the answer is <strong>{div.r}</strong>.</>,
          ]}
        />
        <Mistake>
          Using the product rule for addition. ({S(-3)}) × ({S(-5)}) = {mul2.r}, but {S(-3)} + ({S(-5)}) = {S(wrongSum)}: adding two negatives moves you further left.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Brackets first, then integers in context',
    content: slide(
      <>
        <Rule>Work out brackets first, then × and ÷ from left to right, then + and − from left to right.</Rule>
        <DepthLine start={diver.start} change={diver.rise} deepest={-10} />
        <Worked
          steps={[
            <>18 − (6 − 2): brackets first, 6 − 2 = {brackets.inner}.</>,
            <>Then 18 − {brackets.inner} = <strong>{brackets.r}</strong>.</>,
            <>A diver at {S(diver.start)} m rises {diver.rise} m: {S(diver.start)} + {diver.rise} = <strong>{S(diver.end)} m</strong>.</>,
          ]}
        />
        <Mistake>
          Ignoring the brackets: 18 − 6 − 2 = {brackets.wrong}. The brackets say to subtract 2 from 6 first, so the answer is {brackets.r}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Order {[-3, 5, -10, 0].map(S).join(', ')} from smallest to biggest.</li>
            <li>Calculate {S(-11)} + 6.</li>
            <li>Calculate ({S(-3)}) × ({S(-8)}) and ({S(-36)}) ÷ 4.</li>
            <li>Calculate 20 + 4 × ({S(-2)} − 3).</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{c1.map(S).join(', ')}.</li>
            <li>{S(c2)}: start at {S(-11)} and move 6 right.</li>
            <li>{c3.m} (same signs) and {S(c3.d)} (different signs).</li>
            <li>Brackets: {S(-2)} − 3 = {S(c4.inner)}. Then 4 × ({S(c4.inner)}) = {S(4 * c4.inner)}, and 20 + ({S(4 * c4.inner)}) = {c4.r}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is -8 + 13?',
    options: ['5', '-5', '21', '-21'],
    answer: '5',
    explanation: 'Adding 13 to -8 moves 5 units above zero.',
  },
  {
    prompt: 'Which integer is the smallest?',
    options: ['-12', '-2', '0', '7'],
    answer: '-12',
    explanation: 'On a number line, -12 is farthest to the left.',
  },
  {
    prompt: 'Evaluate 18 - (6 - 2).',
    options: ['14', '10', '16', '22'],
    answer: '14',
    explanation: 'First calculate inside brackets: 6 - 2 = 4, then 18 - 4 = 14.',
  },
  {
    prompt: 'What is the absolute value of -17?',
    options: ['17', '-17', '0', '34'],
    answer: '17',
    explanation: 'Absolute value is distance from zero, so it is always non-negative.',
  },
  {
    prompt: 'A diver is at -9 m and rises 4 m. What is the new position?',
    options: ['-5 m', '-13 m', '5 m', '13 m'],
    answer: '-5 m',
    explanation: 'Start at -9 and add 4: -9 + 4 = -5.',
  },
  {
    prompt: 'What is (-4) × 7?',
    options: ['-28', '28', '-11', '11'],
    answer: '-28',
    explanation: 'A negative times a positive gives a negative result.',
  },
  {
    prompt: 'What is the additive inverse of 15?',
    options: ['-15', '15', '0', '1/15'],
    answer: '-15',
    explanation: 'A number and its additive inverse add to zero.',
  },
  {
    prompt: 'Which expression equals -6?',
    options: ['2 - 8', '-2 - 8', '8 - 2', '-2 + 8'],
    answer: '2 - 8',
    explanation: 'Start at 2 and subtract 8: 2 - 8 = -6, so this expression equals -6.',
  },
];

const WholeNumbersAndIntegers = () => (
  <CapsSubjectTopic
    title="Whole Numbers and Integers"
    subtitle="Operations, order, and contextual reasoning with positive and negative numbers"
    learnSteps={learnSteps}
    task="gr8-whole-numbers-and-integers-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default WholeNumbersAndIntegers;
