import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ExponentLadder, MiniGraph, RationalExponent } from '../../../../../components/diagrams/maths/Grade10Maths';
import { PowerGroups } from '../../../../../components/diagrams/maths/Grade7Pictures';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (grade10Helpers.test.ts, g10MathsLessons.test.ts).
const pw = (b: number | string, e: number | string) => (
  <>
    {b}
    <sup className="text-[0.75em] font-bold">{typeof e === 'number' ? h.int(e) : e}</sup>
  </>
);

// slide 1: the laws
const prod = h.expProduct(4, 6);
const quo = h.expQuotient(9, 3);
const pop = h.expPower(2, 5);
const cube3 = 3 ** 3; // (3x²)³ = 27x⁶

// slide 2: zero and negative exponents
const neg = h.intPower(4, -2); // 4⁻²
const negFrac = h.fracMul(h.frac(3, 2), h.frac(3, 2)); // (2/3)⁻² = 9/4

// slide 3: rational exponents
const r1 = h.rationalPower(27, 1, 3)!; // 27^(1/3)
const r2 = h.rationalPower(16, 3, 4)!; // 16^(3/4)
const r3 = h.rationalPower(25, -1, 2)!; // 25^(−1/2)

// slide 4: exponential equations
const e1 = h.solveExpEquation(3, [81, 1])!; // 3ˣ = 81
const e2 = h.solveExpEquation(2, [16, 1])! + 1; // 2^(x−1) = 16
const e3 = h.frac(3, 2); // 9ˣ = 27 -> 3^(2x) = 3³

// "Check yourself"
const c1 = h.expProduct(7, -3);
const c2 = h.intPower(5, -2);
const c3 = h.rationalPower(32, 2, 5)!;
const c4 = h.solveExpEquation(2, [64, 1])!;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The laws of exponents',
    content: slide(
      <>
        <Rule>Same base, multiply: add the exponents. Same base, divide: subtract. A power of a power: multiply. A power of a product: apply the exponent to every factor.</Rule>
        <PowerGroups base={2} groups={[4, 6]} />
        <Worked
          steps={[
            <>{pw('x', 4)} · {pw('x', 6)} = {pw('x', prod)} (4 + 6 = {prod}).</>,
            <>{pw('x', 9)} ÷ {pw('x', 3)} = {pw('x', quo)} (9 − 3 = {quo}).</>,
            <>({pw('x', 2)})<sup className="text-[0.75em] font-bold">5</sup> = {pw('x', pop)} (2 × 5 = {pop}).</>,
            <>(3{pw('x', 2)})<sup className="text-[0.75em] font-bold">3</sup> = {pw(3, 3)} · {pw('x', 6)} = <strong>{cube3}{pw('x', 6)}</strong>: the 3 is cubed too.</>,
          ]}
        />
        <Mistake>
          {pw('x', 4)} · {pw('x', 6)} is not {pw('x', 4 * 6)}. Multiplying powers with the same base adds the exponents. Also, (3{pw('x', 2)})³ is not 3{pw('x', 6)}: every factor inside the bracket gets the exponent.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Zero and negative exponents',
    content: slide(
      <>
        <Rule>a⁰ = 1 (for a ≠ 0). A negative exponent means the reciprocal: a⁻ⁿ = 1/aⁿ.</Rule>
        <ExponentLadder base={4} top={2} bottom={-2} />
        <Worked
          steps={[
            <>{pw(7, 0)} = 1, because 7³ ÷ 7³ = 7⁰ and any number divided by itself is 1.</>,
            <>{pw(4, -2)} = 1/{pw(4, 2)} = <strong>{h.fracStr(neg)}</strong>.</>,
            <>A fraction flips: (2/3)<sup className="text-[0.75em] font-bold">−2</sup> = (3/2)² = <strong>{h.fracStr(negFrac)}</strong>.</>,
            <>3{pw('x', -1)} = 3/x. Only the x has the exponent −1, not the 3.</>,
          ]}
        />
        <Mistake>
          A negative exponent does not make the answer negative. {pw(4, -2)} is the small positive number {h.fracStr(neg)}, not −16 or −8.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Rational exponents',
    content: slide(
      <>
        <Rule>a<sup className="text-[0.75em] font-bold">m/n</sup> = (ⁿ√a)<sup className="text-[0.75em] font-bold">m</sup>: the denominator is the root, the numerator is the power.</Rule>
        <RationalExponent base={16} m={3} n={4} />
        <Worked
          steps={[
            <>{pw(27, '1/3')} = ∛27 = <strong>{h.fracStr(r1)}</strong>.</>,
            <>{pw(16, '3/4')} = (⁴√16)³ = {h.exactRoot(16, 4)}³ = <strong>{h.fracStr(r2)}</strong>. Take the root first: the numbers stay small.</>,
            <>{pw(25, '−1/2')} = 1/{pw(25, '1/2')} = 1/√25 = <strong>{h.fracStr(r3)}</strong>.</>,
            <>With a letter: {pw('x', '2/3')} = ∛(x²), and √x = {pw('x', '1/2')}.</>,
          ]}
        />
        <Mistake>
          Multiplying the base by the fraction. {pw(16, '3/4')} is not 16 × 3/4 = 12: the exponent says root and power, so the answer is {h.fracStr(r2)}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Exponential equations',
    content: slide(
      <>
        <Rule>Write both sides as powers of the same base. If the bases are equal, the exponents are equal.</Rule>
        <MiniGraph
          x={[0, 4.2]}
          y={[0, 120]}
          yEvery={30}
          curves={[{ f: (x: number) => 3 ** x, label: 'y = 3ˣ', labelAt: 1.4, labelDy: -8 }]}
          points={[{ x: e1, y: 3 ** e1, label: `(${e1}; ${3 ** e1})`, anchor: 'end' }]}
          aria={`The graph of y = 3 to the power x. It passes through the point (${e1}; ${3 ** e1}), so 3 to the power x equals ${3 ** e1} when x is ${e1}.`}
        />
        <Worked
          steps={[
            <>{pw(3, 'x')} = 81. Since 81 = {pw(3, 4)}, x = <strong>{e1}</strong>.</>,
            <>{pw(2, 'x − 1')} = 16 = {pw(2, 4)}, so x − 1 = 4 and x = <strong>{e2}</strong>.</>,
            <>{pw(9, 'x')} = 27. Write 9 = 3² and 27 = 3³: {pw(3, '2x')} = {pw(3, 3)}, so 2x = 3 and x = <strong>{h.fracStr(e3)}</strong>.</>,
            <>Check in the original: 9<sup className="text-[0.75em] font-bold">3/2</sup> = (√9)³ = 3³ = 27.</>,
          ]}
        />
        <Mistake>
          2 · {pw(3, 'x')} is not {pw(6, 'x')}. You can only combine powers with the same base by the laws; here the 2 is just a multiplier.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Simplify {pw('t', 7)} · {pw('t', -3)}.</>,
          <>Write {pw(5, -2)} as a fraction.</>,
          <>Calculate {pw(32, '2/5')}.</>,
          <>Solve {pw(2, 'x')} = 64.</>,
        ]}
        answers={[
          <>Add the exponents: 7 + (−3) = 4, so <strong>{pw('t', c1)}</strong>.</>,
          <>1/{pw(5, 2)} = <strong>{h.fracStr(c2)}</strong>.</>,
          <>⁵√32 = 2, then 2² = <strong>{h.fracStr(c3)}</strong>.</>,
          <>64 = 2⁶, so x = <strong>{c4}</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "Simplify: x⁵ · x³",
    options: ["x¹⁵", "x⁸", "x²", "2x⁸"],
    answer: "x⁸",
    explanation: "Same base, multiply: add the exponents. 5 + 3 = 8, so x⁵ · x³ = x⁸.",
  },
  {
    prompt: "Simplify: (2x³)²",
    options: ["4x⁶", "2x⁶", "4x⁵", "2x⁵"],
    answer: "4x⁶",
    explanation: "Square everything inside the bracket: 2² = 4 and (x³)² = x⁶. So (2x³)² = 4x⁶.",
  },
  {
    prompt: "What is the value of 2⁻³?",
    options: ["−8", "1/6", "−1/8", "1/8"],
    answer: "1/8",
    explanation: "A negative exponent means the reciprocal: 2⁻³ = 1/2³ = 1/8.",
  },
  {
    prompt: "What is 5⁰ + 3⁰?",
    options: ["0", "1", "2", "8"],
    answer: "2",
    explanation: "Any non-zero number to the power 0 is 1, so 5⁰ + 3⁰ = 1 + 1 = 2.",
  },
  {
    prompt: "Simplify: (a⁶b⁴) ÷ (a²b)",
    options: ["a³b⁴", "a⁴b³", "a⁴b⁴", "a⁸b⁵"],
    answer: "a⁴b³",
    explanation: "Divide letter by letter and subtract the exponents. a: 6 − 2 = 4. For b, a lone b is b¹, so 4 − 1 = 3.",
  },
  {
    prompt: "What is the value of 8^(2/3)?",
    options: ["4", "16", "2", "16/3"],
    answer: "4",
    explanation: "The denominator 3 is the root, the numerator 2 is the power: 8^(2/3) = (∛8)² = 2² = 4.",
  },
  {
    prompt: "Solve for x: 2ˣ = 32",
    options: ["16", "4", "6", "5"],
    answer: "5",
    explanation: "32 = 2⁵. When the bases are the same, the exponents are equal, so x = 5.",
  },
  {
    prompt: "Solve for x: 3^(x + 1) = 27",
    options: ["3", "9", "2", "4"],
    answer: "2",
    explanation: "27 = 3³. So x + 1 = 3 and x = 2. Check: 3^(2+1) = 3³ = 27.",
  },
  {
    prompt: "Solve for x: 5ˣ = 1/25",
    options: ["2", "−2", "−5", "1/2"],
    answer: "−2",
    explanation: "1/25 = 5⁻². Same base, so x = −2.",
  },
  {
    prompt: "Simplify: x⁻² · x⁵",
    options: ["x³", "x⁻⁷", "x⁷", "x⁻³"],
    answer: "x³",
    explanation: "Add the exponents: −2 + 5 = 3.",
  },
  {
    prompt: "Simplify: 2^(n + 2) − 2ⁿ",
    options: ["2²", "2ⁿ⁺¹", "4 · 2ⁿ", "3 · 2ⁿ"],
    answer: "3 · 2ⁿ",
    explanation: "2^(n + 2) = 2ⁿ · 2² = 4 · 2ⁿ. Then 4 · 2ⁿ − 1 · 2ⁿ = 3 · 2ⁿ.",
  },
  {
    prompt: "Which expression is equal to √x?",
    options: ["x²", "x^(−1/2)", "x^(1/2)", "2x"],
    answer: "x^(1/2)",
    explanation: "A square root is the exponent 1/2: √x = x^(1/2).",
  },
  {
    prompt: "Simplify: (2^(x + 1) · 3ˣ) ÷ 6ˣ",
    options: ["6", "2", "1", "2ˣ"],
    answer: "2",
    explanation: "6ˣ = 2ˣ · 3ˣ. So the 3ˣ and 2ˣ cancel, leaving 2¹ = 2.",
  },
  {
    prompt: "What is the value of −3²?",
    options: ["−9", "9", "−6", "6"],
    answer: "−9",
    explanation: "The exponent applies only to the 3: −3² = −(3 × 3) = −9. It is (−3)² that equals 9.",
  },
];
// BANK:END

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Laws of exponents, negative and rational exponents, exponential equations"
    learnSteps={learnSteps}
    task="gr10-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
