import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LineOrCurve, OperationChain, TermBars, TermChain } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { differences, linearRule, nthTerm, num, ratios, solveLinear, termsOf } from '../../../../../components/diagrams/maths/grade9Helpers';

// Every number in the slides below comes from these tested helpers (grade9Helpers.test.ts, lessonsMaths8.test.ts).
const S = num;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;
const sub = (n: React.ReactNode) => <sub className="text-[0.75em]">{n}</sub>;
const ruleText = (r: { m: number; c: number }) => `${r.m}n ${r.c < 0 ? '−' : '+'} ${Math.abs(r.c)}`;

// slide 1: constant difference
const seqA = [3, 7, 11, 15];
const diffA = differences(seqA)[0];
const ruleA = linearRule(seqA[0], diffA);
const t8 = nthTerm(ruleA, 8);
const seqB = [2, 5, 8, 11];
const nextB = seqB[3] + differences(seqB)[0];

// slide 2: constant ratio, squares
const geo = [1, 2, 4, 8];
const ratio = ratios(geo)[0];
const geoNext = geo[3] * ratio;
const squares = termsOf((n) => n * n, 5);

// slide 3: input and output
const x3 = 3;
const y3 = 2 * x3 + 1;
const table = [1, 2, 3].map((x) => ({ x, y: 3 * x }));

// slide 4: backwards, linear
const back = solveLinear(1, 4, 10); // x + 4 = 10
const xs = [0, 1, 2, 3];
const lin = xs.map((x) => 3 * x + 2);
const quad = xs.map((x) => x * x);

// "Check yourself"
const c1rule = linearRule(5, 4);
const c1 = { next: 17 + 4, t10: nthTerm(c1rule, 10) };
const c2 = { r: ratios([3, 6, 12, 24])[0], next: 24 * ratios([3, 6, 12, 24])[0] };
const c3diff = differences([5, 7, 9])[0];
const c3 = { m: c3diff, c: 5 - c3diff };
const c4 = solveLinear(3, -2, 13);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Constant difference: the rule for the nth term',
    content: slide(
      <>
        <Rule>If the same number is added each time, the rule is T{sub('n')} = (difference) × n + c. Find c by making the rule fit the first term.</Rule>
        <TermChain terms={seqA.map(String)} caption={`+ ${diffA} each time`} aria={`The pattern ${seqA.join(', ')}. Each term is ${diffA} more than the one before.`} />
        <Worked
          title={seqA.join(', ') + ', …'}
          steps={[
            <>The difference is {diffA}, so T{sub('n')} = {diffA}n + c. For n = 1: {diffA} + c = {seqA[0]}, so c = {S(ruleA.c)}.</>,
            <>T{sub('n')} = <strong>{ruleText(ruleA)}</strong>. T{sub(8)} = {diffA} × 8 − 1 = <strong>{t8}</strong>.</>,
            <>Next term of {seqB.join(', ')}: add {differences(seqB)[0]}, so <strong>{nextB}</strong>.</>,
          ]}
        />
        <Mistake>T{sub(8)} is not {diffA} × 8 = {diffA * 8}. Test the rule on T{sub(1)}: {diffA} × 1 must give {seqA[0]}, so you need the − 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Constant ratio and square numbers',
    content: slide(
      <>
        <Rule>In a geometric pattern each term is multiplied by the same number, the constant ratio. Square numbers follow T{sub('n')} = n{sq}.</Rule>
        <TermBars terms={[...geo, geoNext]} caption={`× ${ratio} each time`} aria={`Bars for the pattern ${[...geo, geoNext].join(', ')}. Each bar is ${ratio} times as tall as the one before.`} />
        <Worked
          steps={[
            <>{geo.join(', ')}: {geo[1]} ÷ {geo[0]} = {ratio}, {geo[2]} ÷ {geo[1]} = {ratio}. The constant ratio is <strong>{ratio}</strong>; the next term is {geo[3]} × {ratio} = {geoNext}.</>,
            <>T{sub('n')} = n{sq} gives {squares.join(', ')}. The 5th term is 5{sq} = <strong>{squares[4]}</strong>.</>,
          ]}
        />
        <Mistake>{geo.join(', ')} does not go up by the same amount: the differences are {differences(geo).join(', ')}. It is × {ratio}, not + {ratio}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Input, rule, output: tables and flow diagrams',
    content: slide(
      <>
        <Rule>A rule turns each input x into one output y. Substitute x into the rule, and do × before +. Check a rule against every pair in the table.</Rule>
        <OperationChain
          start={`x = ${x3}`}
          steps={[{ op: '× 2', value: String(2 * x3) }, { op: '+ 1', value: `y = ${y3}` }]}
          aria={`A flow diagram for y = 2x + 1. The input 3 is multiplied by 2 to give ${2 * x3}, then 1 is added to give ${y3}.`}
        />
        <Worked
          steps={[
            <>y = 2x + 1 with x = {x3}: y = 2 × {x3} + 1 = {2 * x3} + 1 = <strong>{y3}</strong>.</>,
            <>Table: {table.map((p) => `x = ${p.x}, y = ${p.y}`).join('; ')}. Each y is 3 times x.</>,
            <>Check all three pairs: 3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9. The rule is <strong>y = 3x</strong>.</>,
          ]}
        />
        <Mistake>y = 2x + 1 at x = 3 is not 2 × (3 + 1) = 8. The rule multiplies first: 2 × 3 = 6, then adds 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Work backwards, and spot a linear relationship',
    content: slide(
      <>
        <Rule>To find the input, undo the rule. A relationship is linear when y grows by the same amount for each step in x; its rule looks like y = mx + c.</Rule>
        <LineOrCurve linear={{ fn: (x) => 3 * x + 2, label: 'y = 3x + 2' }} curve={{ fn: (x) => x * x, label: 'y = x²' }} xs={xs} />
        <Worked
          steps={[
            <>y = x + 4 and y = 10: x + 4 = 10, so x = 10 − 4 = <strong>{back.x}</strong>.</>,
            <>y = 3x + 2 for x = 0, 1, 2, 3: {lin.join(', ')}. Steps of {differences(lin)[0]} every time: <strong>linear</strong>, a straight line.</>,
            <>y = x{sq}: {quad.join(', ')}. The steps {differences(quad).join(', ')} grow, so it is not linear.</>,
          ]}
        />
        <Mistake>y = x{sq}, y = 2<sup className="text-[0.75em] font-bold">x</sup> and y = 1/x are not linear. In a linear rule x appears only to the power 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>5, 9, 13, 17, … Give the next term, the rule for T{sub('n')}, and T{sub(10)}.</>,
          <>3, 6, 12, 24, … Give the constant ratio and the next term.</>,
          <>x = 1, 2, 3 gives y = 5, 7, 9. Find the rule.</>,
          <>y = 3x − 2. Which x gives y = 13?</>,
        ]}
        answers={[
          <>{c1.next}; T{sub('n')} = {ruleText(c1rule)}; T{sub(10)} = {c1.t10}.</>,
          <>Ratio {c2.r}; next term {c2.next}.</>,
          <>y = {c3.m}x + {c3.c} (check: {c3.m} × 1 + {c3.c} = 5).</>,
          <>3x = {c4.rhs}, so x = {c4.x}.</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the next number in the sequence: 2, 5, 8, 11, ...',
    options: ['13', '14', '15', '16'],
    answer: '14',
    explanation: 'The pattern increases by 3 each time: 11 + 3 = 14.',
  },
  {
    prompt: 'The rule for a pattern is: y = 2x + 1. What is y when x = 3?',
    options: ['6', '7', '8', '9'],
    answer: '7',
    explanation: 'y = 2(3) + 1 = 6 + 1 = 7.',
  },
  {
    prompt: 'In a geometric pattern 1, 2, 4, 8, ..., what is the constant factor?',
    options: ['1', '2', '4', '8'],
    answer: '2',
    explanation: 'Each term is multiplied by 2 to get the next term.',
  },
  {
    prompt: 'What is the 5th term of the sequence defined by y = n², where n = 1, 2, 3, ...?',
    options: ['10', '20', '25', '30'],
    answer: '25',
    explanation: 'When n = 5, y = 5² = 25.',
  },
  {
    prompt: 'Identify the pattern in the table: x=1, y=3; x=2, y=6; x=3, y=9',
    options: ['y = x + 2', 'y = 3x', 'y = 2x + 1', 'y = x²'],
    answer: 'y = 3x',
    explanation: 'Each y-value is 3 times the corresponding x-value.',
  },
  {
    prompt: 'A pattern starts 3, 7, 11, 15. What is the 8th term?',
    options: ['30', '31', '32', '33'],
    answer: '31',
    explanation: 'The pattern increases by 4; the 8th term is 3 + 7×4 = 31.',
  },
  {
    prompt: 'Which relationship is linear?',
    options: ['y = x²', 'y = 2ˣ', 'y = 3x + 2', 'y = 1/x'],
    answer: 'y = 3x + 2',
    explanation: 'A linear relationship has the form y = mx + b, which is y = 3x + 2.',
  },
  {
    prompt: 'If the rule is y = x + 4, what value of x gives y = 10?',
    options: ['6', '5', '4', '14'],
    answer: '6',
    explanation: 'Solving x + 4 = 10 gives x = 6.',
  },
];

const PatternsAndFunctions = () => (
  <CapsSubjectTopic
    title="Numeric and Geometric Patterns; Functions and Relationships"
    subtitle="Pattern rules, tables, and input-output mapping"
    learnSteps={learnSteps}
    task="gr9-patterns-functions-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PatternsAndFunctions;
