import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberLine } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { absolute, ascending, divideExact, jump, productSign, signed } from '../../../../../components/diagrams/maths/grade7Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers.test.ts).
const S = signed;
const I = '#818cf8';
const G = '#34d399';
const Y = '#fbbf24';
const P = '#fb7185';

const order = [-2, 0, -5, 3];
const sorted = ascending(order);
const add = { a: -5, b: 8, r: -5 + 8 };
const wrongAdd = add.a - add.b; // the mistake: -13
const sub = { a: 7, b: 12, r: 7 - 12 };
const temp = { from: -3, to: 4, up: jump(-3, 4) };
const mulA = { a: -4, b: -3, r: -4 * -3, sign: productSign(-4, -3) };
const divB = { a: 18, b: -6, r: divideExact(18, -6), sign: productSign(18, -6) };
const abs = absolute(-9);
if (add.r !== 3 || jump(add.a, add.r) !== add.b || jump(sub.a, sub.r) !== -sub.b || temp.up !== temp.to - temp.from || mulA.sign !== '+' || divB.sign !== '-') {
  throw new Error('lesson numbers out of step');
}

// "Check yourself", answers computed from the same helpers
const c1 = ascending([4, -7, 0, -1]);
const c2 = -6 + 10;
const c3 = 3 - 8;
const c4 = -5 * 4;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The number line: farther right is bigger',
    content: slide(
      <>
        <Rule>On the number line, a number to the right is bigger. Negative numbers are to the left of 0.</Rule>
        <NumberLine
          min={-6}
          max={4}
          marks={sorted.map((v, i) => ({ value: v, label: S(v), color: [P, I, Y, G][i] }))}
          aria={`A number line from minus 6 to 4 with ${sorted.map(S).join(', ')} marked from left to right.`}
        />
        <Worked
          title="Order from smallest to biggest"
          steps={[
            <>Put {order.map(S).join(', ')} on the line.</>,
            <>Read from left to right: <strong>{sorted.map(S).join(', ')}</strong>.</>,
          ]}
        />
        <Mistake>Thinking {S(-5)} is bigger than {S(-2)} because 5 is bigger than 2. At {S(-5)}°C it is colder than at {S(-2)}°C.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding integers: move along the line',
    content: slide(
      <>
        <Rule>Adding a positive number moves you right. Adding a negative number moves you left.</Rule>
        <NumberLine
          min={-6}
          max={4}
          marks={[{ value: add.a, label: S(add.a), color: I }, { value: add.r, label: S(add.r), color: G }]}
          jumps={[{ from: add.a, to: add.r, label: `+${add.b}`, color: I }]}
          aria={`A number line. Start at minus 5 and jump 8 to the right to land on 3.`}
        />
        <Worked
          title={`${S(add.a)} + ${add.b}`}
          steps={[<>Start at {S(add.a)}.</>, <>Adding {add.b}: move {add.b} places right.</>, <>You land on <strong>{add.r}</strong>.</>]}
        />
        <Mistake>
          Writing {S(add.a)} + {add.b} = {S(wrongAdd)}. The signs are different, so find the difference: {add.b} − 5 = {add.r}. The bigger number, {add.b}, decides the sign.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Subtracting integers',
    content: slide(
      <>
        <Rule>Subtracting a positive number moves you left. Subtracting a negative number is the same as adding the positive.</Rule>
        <NumberLine
          min={-6}
          max={8}
          marks={[{ value: sub.a, label: S(sub.a), color: I }, { value: sub.r, label: S(sub.r), color: G }]}
          jumps={[{ from: sub.a, to: sub.r, label: `−${sub.b}`, color: P }]}
          aria="A number line. Start at 7 and jump 12 to the left to land on minus 5."
        />
        <Worked
          title={`${sub.a} − ${sub.b}`}
          steps={[
            <>Start at {sub.a}, move {sub.b} places left: you land on <strong>{S(sub.r)}</strong>.</>,
            <>Temperature rises from {S(temp.from)}°C to {temp.to}°C: {temp.to} − ({S(temp.from)}) = {temp.to} + {Math.abs(temp.from)} = <strong>{temp.up}°C</strong>.</>,
          ]}
        />
        <Mistake>{sub.a} − {sub.b} is not {sub.b - sub.a}. You move left from {sub.a}, so you end below zero.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiply and divide: the sign rule',
    content: slide(
      <>
        <Rule>Same signs give a positive answer. Different signs give a negative answer.</Rule>
        <div className="mx-auto grid max-w-xs grid-cols-3 gap-1 text-center text-lg font-bold" role="table" aria-label="Sign rule table">
          <div className="rounded bg-slate-100 p-2 text-slate-500">×  ÷</div>
          <div className="rounded bg-slate-100 p-2 text-slate-700">+</div>
          <div className="rounded bg-slate-100 p-2 text-slate-700">−</div>
          <div className="rounded bg-slate-100 p-2 text-slate-700">+</div>
          <div className="rounded bg-emerald-100 p-2 text-emerald-700">+</div>
          <div className="rounded bg-rose-100 p-2 text-rose-700">−</div>
          <div className="rounded bg-slate-100 p-2 text-slate-700">−</div>
          <div className="rounded bg-rose-100 p-2 text-rose-700">−</div>
          <div className="rounded bg-emerald-100 p-2 text-emerald-700">+</div>
        </div>
        <p className="text-center text-sm text-slate-500">Row: first sign. Column: second sign. Cell: answer sign.</p>
        <Worked
          steps={[
            <>({S(mulA.a)}) × ({S(mulA.b)}): same signs, so positive. 4 × 3 = <strong>{mulA.r}</strong>.</>,
            <>{divB.a} ÷ ({S(divB.b)}): different signs, so negative. 18 ÷ 6 = 3, so <strong>{S(divB.r)}</strong>.</>,
          ]}
        />
        <Mistake>({S(-4)}) + ({S(-3)}) = {S(-7)}, but ({S(-4)}) × ({S(-3)}) = {mulA.r}. Check the operation first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Absolute value: distance from zero',
    content: slide(
      <>
        <Rule>The absolute value |n| is how far n is from 0. A distance is never negative.</Rule>
        <NumberLine
          min={-10}
          max={10}
          marks={[{ value: -9, label: S(-9), color: P }, { value: 9, label: '9', color: G }]}
          jumps={[
            { from: 0, to: -9, label: '9 steps', color: P },
            { from: 0, to: 9, label: '9 steps', color: G },
          ]}
          aria="A number line from minus 10 to 10. Minus 9 and 9 are both 9 steps away from zero."
        />
        <Worked
          title={`|${S(-9)}|`}
          steps={[<>{S(-9)} is {abs} steps from 0.</>, <>So |{S(-9)}| = <strong>{abs}</strong>, and |9| = {absolute(9)} too.</>]}
        />
        <Mistake>Writing |{S(-9)}| = {S(-9)}. The bars turn any number into its distance from 0, so the answer is never negative.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Order from smallest to biggest: 4, {S(-7)}, 0, {S(-1)}.</li>
            <li>Calculate {S(-6)} + 10.</li>
            <li>Calculate 3 − 8.</li>
            <li>Calculate ({S(-5)}) × 4.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{c1.map(S).join(', ')}</li>
            <li>{S(c2)}: start at {S(-6)} and move 10 right.</li>
            <li>{S(c3)}: start at 3 and move 8 left.</li>
            <li>{S(c4)}: different signs, so negative; 5 × 4 = 20.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which number is greater?',
    options: ['2', '−3', 'They are equal', 'Cannot compare'],
    answer: '2',
    explanation: 'Any positive number is greater than a negative number.',
  },
  {
    prompt: 'Calculate −5 + 8.',
    options: ['3', '−3', '13', '−13'],
    answer: '3',
    explanation: 'Moving 8 units right from −5 gives 3.',
  },
  {
    prompt: 'Calculate 7 − 12.',
    options: ['−5', '5', '−19', '19'],
    answer: '−5',
    explanation: 'Subtracting a larger number gives a negative result.',
  },
  {
    prompt: 'Calculate (−4) × (−3).',
    options: ['12', '−12', '7', '−7'],
    answer: '12',
    explanation: 'A negative times a negative is positive.',
  },
  {
    prompt: 'Calculate 18 ÷ (−6).',
    options: ['−3', '3', '−12', '12'],
    answer: '−3',
    explanation: 'A positive divided by a negative is negative.',
  },
  {
    prompt: 'Arrange in ascending order: −2, 0, −5, 3.',
    options: ['−5, −2, 0, 3', '3, 0, −2, −5', '−2, −5, 0, 3', '0, −2, −5, 3'],
    answer: '−5, −2, 0, 3',
    explanation: 'On a number line, farther left is smaller.',
  },
  {
    prompt: 'The temperature changes from −3°C to 4°C. What is the increase?',
    options: ['7°C', '1°C', '−7°C', '−1°C'],
    answer: '7°C',
    explanation: 'The increase is the final minus the start: 4 − (−3) = 4 + 3 = 7°C.',
  },
  {
    prompt: 'What is |−9|?',
    options: ['9', '−9', '0', '18'],
    answer: '9',
    explanation: 'Absolute value is the distance from 0.',
  },
];

const Integers = () => (
  <CapsSubjectTopic
    title="Integers"
    subtitle="Number line comparison and operations with signed numbers"
    learnSteps={learnSteps}
    task="gr7-integers-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Integers;
