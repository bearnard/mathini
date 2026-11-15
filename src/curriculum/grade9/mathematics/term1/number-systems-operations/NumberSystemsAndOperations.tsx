import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import FractionRows from '../../../../../components/diagrams/maths/FractionRows';
import { NumberLine } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { NumberSets, OperationOrder, SignRules } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { biggerFraction, divideExact, productSign } from '../../../../../components/diagrams/maths/grade7Helpers';
import { simplify } from '../../../../../components/diagrams/maths/mathsHelpers';
import { longDivision, num, numberSets } from '../../../../../components/diagrams/maths/grade9Helpers';

// Every number in the slides below comes from these tested helpers (grade7/9 helper tests, lessonsMaths8.test.ts).
const S = num;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;
const SET_NAME = { natural: 'natural', whole: 'whole', integer: 'integer', rational: 'rational' } as const;
const setsOf = (n: number, d = 1) => numberSets(n, d).map((k) => SET_NAME[k]).join(', ');

// slide 1: number sets
const quarter = simplify(25, 100); // 0,25 = 25/100 = 1/4

// slide 2: adding and subtracting
const addNeg = { a: -5, b: -3, r: -5 + -3 };
const subNeg = { a: -2, b: -6, r: -2 - -6 };

// slide 3: sign rules
const mul = { a: -6, b: -4, sign: productSign(-6, -4), r: -6 * -4 };
const div = { a: 12, b: -3, sign: productSign(12, -3), r: divideExact(12, -3) };
const cube = (-2) ** 3;

// slide 4: order of operations
const ord1 = { times: 3 * 4, r: 2 + 3 * 4, wrong: (2 + 3) * 4 };
const ord2 = { bracket: 1 - 4, power: (1 - 4) ** 2, times: 2 * (1 - 4) ** 2, r: 20 - 2 * (1 - 4) ** 2 };

// slide 5: fractions and decimals
const ld = longDivision(3, 8);
const cmp = biggerFraction(2, 3, 5, 8);

// "Check yourself"
const c1a = setsOf(0);
const c1b = setsOf(-3, 4);
const c2 = { times: 2 * -3, r: -9 - -4 + 2 * -3 };
const c3 = { first: -3 * 8, r: divideExact(-3 * 8, -6) };
const c4 = longDivision(5, 8);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Sort numbers into natural, whole, integer, rational and irrational',
    content: slide(
      <>
        <Rule>A rational number can be written as a fraction of two integers (the bottom not 0). Its decimal ends or repeats. An irrational number&apos;s decimal never ends and never repeats.</Rule>
        <NumberSets examples={{ rational: `0,25 = ${quarter.n}/${quarter.d}`, integer: '−7', whole: '0', natural: '1, 2, 3, …', irrational: '√2, π' }} />
        <Worked
          steps={[
            <>−7 is negative with no fraction part: it is an <strong>integer</strong> (and rational, −7/1), but not a whole number.</>,
            <>0,25 = 25/100 = <strong>{quarter.n}/{quarter.d}</strong>, so 0,25 is rational.</>,
            <>√2 = 1,41421… and π = 3,14159… never end or repeat: they are <strong>irrational</strong>.</>,
          ]}
        />
        <Mistake>A decimal is not automatically irrational. 0,25 ends, so it is rational. Only decimals that never end and never repeat are irrational.</Mistake>
      </>,
    ),
  },
  {
    title: 'Add and subtract integers',
    content: slide(
      <>
        <Rule>Adding a negative number moves left on the number line. Subtracting a negative number is the same as adding a positive.</Rule>
        <NumberLine
          min={-9}
          max={1}
          marks={[{ value: addNeg.a, label: S(addNeg.a), color: '#818cf8' }, { value: addNeg.r, label: S(addNeg.r), color: '#34d399' }]}
          jumps={[{ from: addNeg.a, to: addNeg.r, label: `+ (${S(addNeg.b)})`, color: '#fb7185' }]}
          aria={`A number line. Start at ${S(addNeg.a)} and jump 3 to the left to land on ${S(addNeg.r)}.`}
        />
        <Worked
          steps={[
            <>{S(addNeg.a)} + ({S(addNeg.b)}): start at {S(addNeg.a)} and move 3 left. You land on <strong>{S(addNeg.r)}</strong>.</>,
            <>{S(subNeg.a)} − ({S(subNeg.b)}) = {S(subNeg.a)} + 6 = <strong>{S(subNeg.r)}</strong>.</>,
          ]}
        />
        <Mistake>{S(addNeg.a)} + ({S(addNeg.b)}) is not 8 and not −2. Both numbers are negative, so you move further below zero: {S(addNeg.r)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiply and divide integers: the sign rules',
    content: slide(
      <>
        <Rule>Multiply or divide the numbers as usual. Same signs give a positive answer; different signs give a negative answer.</Rule>
        <SignRules />
        <Worked
          steps={[
            <>({S(mul.a)}) × ({S(mul.b)}): same signs, so {mul.sign === '+' ? 'positive' : 'negative'}. 6 × 4 = <strong>{S(mul.r)}</strong>.</>,
            <>{div.a} ÷ ({S(div.b)}): different signs, so {div.sign === '+' ? 'positive' : 'negative'}. 12 ÷ 3 = 4, so <strong>{S(div.r)}</strong>.</>,
            <>(−2)<sup className="text-[0.75em] font-bold">3</sup> = (−2) × (−2) × (−2) = 4 × (−2) = <strong>{S(cube)}</strong>.</>,
          ]}
        />
        <Mistake>({S(mul.a)}) × ({S(mul.b)}) is not {S(-mul.r)}. Two negatives multiply to a positive. Do not mix this up with adding: ({S(mul.a)}) + ({S(mul.b)}) = {S(mul.a + mul.b)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'The order of operations',
    content: slide(
      <>
        <Rule>Work out brackets first, then powers and roots, then × and ÷ from left to right, then + and − from left to right.</Rule>
        <OperationOrder />
        <Worked
          steps={[
            <>2 + 3 × 4: multiply first, 3 × 4 = {ord1.times}, then 2 + {ord1.times} = <strong>{ord1.r}</strong>.</>,
            <>20 − 2 × (1 − 4){sq}: bracket 1 − 4 = {S(ord2.bracket)}, power ({S(ord2.bracket)}){sq} = {ord2.power}.</>,
            <>Then 2 × {ord2.power} = {ord2.times}, and 20 − {ord2.times} = <strong>{S(ord2.r)}</strong>.</>,
          ]}
        />
        <Mistake>2 + 3 × 4 is not {ord1.wrong}. Working left to right adds first; × must be done before +.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fractions to decimals, and comparing fractions',
    content: slide(
      <>
        <Rule>To change a fraction to a decimal, divide the top by the bottom. To compare fractions, write them with a common denominator.</Rule>
        <FractionRows
          rows={[
            { n: 2, d: 3, parts: 3, shaded: [{ count: 2, color: '#818cf8' }] },
            { n: 5, d: 8, parts: 8, shaded: [{ count: 5, color: '#34d399' }] },
          ]}
          gaps={[{ text: '>', at: 'bar' }]}
          aria="Two bars of the same length. Two thirds is shaded on the first and five eighths on the second. The two thirds part is a little longer, so two thirds is greater than five eighths."
        />
        <Worked
          steps={[
            <>3 ÷ 8: {ld.steps.map((st) => `${st.into} ÷ 8 = ${st.q} rem ${st.r}`).join('; ')}. So 3/8 = <strong>{ld.decimal}</strong>.</>,
            <>2/3 or 5/8? Common denominator {cmp.d}: 2/3 = {cmp.a}/{cmp.d} and 5/8 = {cmp.b}/{cmp.d}.</>,
            <>{cmp.a} &gt; {cmp.b}, so <strong>2/3 is larger</strong>.</>,
          ]}
        />
        <Mistake>5/8 is not bigger because 5 and 8 are bigger numbers. Compare the fractions over the same denominator: {cmp.b}/{cmp.d} &lt; {cmp.a}/{cmp.d}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name every number set that 0 belongs to. Do the same for −3/4.</li>
            <li>Calculate −9 − (−4) + 2 × (−3).</li>
            <li>Calculate (−3) × 8 ÷ (−6).</li>
            <li>Write 5/8 as a decimal.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>0: {c1a}. −3/4: {c1b} only.</li>
            <li>2 × (−3) = {S(c2.times)} first; −9 + 4 − 6 = {S(c2.r)}.</li>
            <li>(−3) × 8 = {S(c3.first)}; {S(c3.first)} ÷ (−6) = {S(c3.r)}.</li>
            <li>{c4.decimal}</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Which number is rational?',
    options: ['√2', '0,25', 'π', 'e'],
    answer: '0,25',
    explanation: '0,25 = 1/4 can be expressed as a fraction of integers.',
  },
  {
    prompt: 'Simplify: -5 + (-3)',
    options: ['-8', '-2', '2', '8'],
    answer: '-8',
    explanation: 'Adding two negatives gives a negative sum: -5 + (-3) = -8.',
  },
  {
    prompt: 'Which operation should you perform first? 2 + 3 × 4',
    options: ['2 + 3', '3 × 4', 'Either order', 'None'],
    answer: '3 × 4',
    explanation: 'Multiplication comes before addition in the order of operations (BODMAS/PEMDAS).',
  },
  {
    prompt: 'Convert 3/8 to a decimal.',
    options: ['0,325', '0,375', '0,385', '0,425'],
    answer: '0,375',
    explanation: '3 ÷ 8 = 0,375, because dividing 3 by 8 gives 375 thousandths.',
  },
  {
    prompt: 'Which is the correct classification for -7?',
    options: ['Natural number', 'Whole number', 'Integer', 'Irrational'],
    answer: 'Integer',
    explanation: 'Integers include negative whole numbers, zero, and positive whole numbers.',
  },
  {
    prompt: 'Solve: (-6) × (-4)',
    options: ['-24', '-10', '24', '10'],
    answer: '24',
    explanation: 'Multiplying two negatives produces a positive result.',
  },
  {
    prompt: 'Which fraction is larger: 2/3 or 5/8?',
    options: ['2/3', '5/8', 'They are equal', 'Cannot compare'],
    answer: '2/3',
    explanation: '2/3 ≈ 0,667 and 5/8 = 0,625, so 2/3 > 5/8.',
  },
  {
    prompt: 'Solve: 12 ÷ (-3)',
    options: ['-4', '4', '-36', '36'],
    answer: '-4',
    explanation: 'A positive divided by a negative is negative: 12 ÷ (-3) = -4.',
  },
];

const NumberSystemsAndOperations = () => (
  <CapsSubjectTopic
    title="Number Systems and Operations"
    subtitle="Real numbers, integers, fractions, and decimals"
    learnSteps={learnSteps}
    task="gr9-number-systems-operations-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumberSystemsAndOperations;
