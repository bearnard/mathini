import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PowerGroups } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { FractionLadder, LetterCopies } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { power, powerOfPower, sameBaseProduct, sameBaseQuotient } from '../../../../../components/diagrams/maths/grade7Helpers';
import { negativePower, num, powerLadder, productToPower, tenToMinus } from '../../../../../components/diagrams/maths/grade9Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers.test.ts, grade9Helpers.test.ts, lessonsMaths8.test.ts).
const S = ({ children }: { children: React.ReactNode }) => <sup className="text-[0.75em] font-bold">{children}</sup>;
const pw = (b: React.ReactNode, e: React.ReactNode) => (
  <>
    {b}
    <S>{e}</S>
  </>
);

// slide 1: same base
const prod = sameBaseProduct(2, 3, 2); // 2³ × 2²
const quotExp = sameBaseQuotient(10, 5, 2).exp; // x⁵ ÷ x²: 5 − 2 (checked with base 10)

// slide 2: power of a power, power of a product
const pop = powerOfPower(2, 3, 2); // (2³)²
const ab = productToPower([2, 3], 2); // (a²b³)²

// slide 3: zero and negative exponents
const five0 = power(5, 0);
const ladder = powerLadder(3, 2, -2);
const neg3 = negativePower(3, 2); // 3⁻²
const ten3 = negativePower(10, 3); // 10⁻³

// slide 4: a different base
const twoFour = power(2, 4);
const fourTwo = power(4, 2);
const mixed = { exp: 5 + 2 - 3 }; // 2⁵ × 2² ÷ 2³
const mixedValue = power(2, mixed.exp);

// "Check yourself"
const c1 = sameBaseQuotient(10, 6, 2).exp; // y⁶ ÷ y²
const c2 = productToPower([2, 1], 3); // (x²y)³
const c3 = negativePower(2, 3); // 2⁻³
const c4 = powerOfPower(3, 2, 2); // 9² = (3²)²

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Multiply or divide powers with the same base',
    content: slide(
      <>
        <Rule>Same base, multiply: add the exponents. Same base, divide: subtract the exponents. The base stays the same.</Rule>
        <PowerGroups base={2} groups={[3, 2]} />
        <Worked
          steps={[
            <>{pw(2, 3)} × {pw(2, 2)} = (2 × 2 × 2) × (2 × 2) = {pw(2, `3+2`)} = {pw(2, prod.exp)} = <strong>{prod.value}</strong>.</>,
            <>{pw('x', 5)} ÷ {pw('x', 2)}: two x's cancel, so {pw('x', '5−2')} = <strong>{pw('x', quotExp)}</strong>.</>,
          ]}
        />
        <Mistake>{pw(2, 3)} × {pw(2, 2)} is not {pw(4, 5)} and not {pw(2, 6)}. Keep the base 2 and add the exponents: 3 + 2 = {prod.exp}.</Mistake>
      </>,
    ),
  },
  {
    title: 'A power of a power, and a power of a product',
    content: slide(
      <>
        <Rule>(a<S>m</S>)<S>n</S> = a<S>mn</S>: multiply the exponents. With a product in the bracket, every factor gets the power: (ab)<S>n</S> = a<S>n</S>b<S>n</S>.</Rule>
        <LetterCopies letters={[{ ch: 'a', count: 2 }, { ch: 'b', count: 3 }]} copies={2} />
        <Worked
          steps={[
            <>({pw(2, 3)}){<S>2</S>} = {pw(2, 3)} × {pw(2, 3)} = {pw(2, '3×2')} = {pw(2, pop.exp)} = <strong>{pop.value}</strong>.</>,
            <>({pw('a', 2)}{pw('b', 3)}){<S>2</S>}: a gets 2 × 2 = {ab[0]} and b gets 3 × 2 = {ab[1]}.</>,
            <>So ({pw('a', 2)}{pw('b', 3)}){<S>2</S>} = <strong>{pw('a', ab[0])}{pw('b', ab[1])}</strong>.</>,
          ]}
        />
        <Mistake>({pw('a', 2)}{pw('b', 3)}){<S>2</S>} is not {pw('a', ab[0])}{pw('b', 3)}. The power outside the bracket applies to b as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Zero and negative exponents',
    content: slide(
      <>
        <Rule>a<S>0</S> = 1 for any a that is not 0. A negative exponent means &quot;1 over&quot;: a<S>−n</S> = 1 ÷ a<S>n</S>.</Rule>
        <FractionLadder rows={ladder} base={3} />
        <Worked
          steps={[
            <>{pw(5, 0)} = <strong>{five0}</strong>, the same as {pw(3, 0)} = 1 on the ladder.</>,
            <>{pw(3, '−2')} = 1 ÷ {pw(3, 2)} = <strong>1/{neg3.den}</strong>.</>,
            <>{pw(10, '−3')} = 1 ÷ {pw(10, 3)} = 1/{num(ten3.den)} = <strong>{tenToMinus(3)}</strong>.</>,
          ]}
        />
        <Mistake>{pw(3, '−2')} is not −9 and not −6. A negative exponent gives a small positive fraction: 1/{neg3.den}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Write a number in another exponential form',
    content: slide(
      <>
        <Rule>Write every number as a power of the same prime base. Then the laws can combine them, and powers are easy to compare.</Rule>
        <PowerGroups base={2} groups={[2, 2]} />
        <Worked
          steps={[
            <>{pw(2, 4)} = (2 × 2) × (2 × 2) = 4 × 4 = {pw(4, 2)}, and both equal <strong>{twoFour}</strong>.</>,
            <>{pw(2, 5)} × 4 ÷ 8 = {pw(2, 5)} × {pw(2, 2)} ÷ {pw(2, 3)}.</>,
            <>Add and subtract the exponents: 5 + 2 − 3 = {mixed.exp}, so the answer is {pw(2, mixed.exp)} = <strong>{mixedValue}</strong>.</>,
          ]}
        />
        <Mistake>{pw(2, 4)} is not 2 × 4 = 8. It is four 2s multiplied: {twoFour}, which is also {pw(4, 2)} = {fourTwo}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Simplify {pw('y', 6)} ÷ {pw('y', 2)}.</li>
            <li>Simplify ({pw('x', 2)}y){<S>3</S>}.</li>
            <li>Write {pw(2, '−3')} as a fraction.</li>
            <li>Write {pw(9, 2)} as a power of 3, and give its value.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{pw('y', c1)}</li>
            <li>{pw('x', c2[0])}{pw('y', c2[1])}</li>
            <li>1/{c3.den}</li>
            <li>{pw(9, 2)} = ({pw(3, 2)}){<S>2</S>} = {pw(3, c4.exp)} = {c4.value}</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Simplify: 2³ × 2²',
    options: ['2⁵', '2⁶', '2¹', '4⁵'],
    answer: '2⁵',
    explanation: 'Using the product rule: 2³ × 2² = 2^(3+2) = 2⁵ = 32.',
  },
  {
    prompt: 'What does 5⁰ equal?',
    options: ['0', '1', '5', 'Undefined'],
    answer: '1',
    explanation: 'Any non-zero number raised to the power of 0 equals 1.',
  },
  {
    prompt: 'Simplify: x⁵/x²',
    options: ['x³', 'x⁷', 'x²·⁵', '1/x³'],
    answer: 'x³',
    explanation: 'Using the quotient rule: x⁵/x² = x^(5-2) = x³.',
  },
  {
    prompt: 'What does 3⁻² equal?',
    options: ['-9', '-1/9', '1/9', '9'],
    answer: '1/9',
    explanation: '3⁻² = 1/(3²) = 1/9.',
  },
  {
    prompt: 'Simplify: (2³)²',
    options: ['2⁵', '2⁶', '2¹', '32'],
    answer: '2⁶',
    explanation: 'Using the power rule: (2³)² = 2^(3×2) = 2⁶ = 64.',
  },
  {
    prompt: 'Express 10⁻³ as a decimal.',
    options: ['1000', '100', '0,001', '0,01'],
    answer: '0,001',
    explanation: '10⁻³ = 1/10³ = 1/1000 = 0,001.',
  },
  {
    prompt: 'Simplify: (a²b³)²',
    options: ['a⁴b⁵', 'a⁴b⁶', 'a²b⁶', 'a⁶b⁹'],
    answer: 'a⁴b⁶',
    explanation: '(a²b³)² = a^(2×2) × b^(3×2) = a⁴b⁶.',
  },
  {
    prompt: 'Which is equivalent to 2⁴?',
    options: ['8', '6', '32', '16'],
    answer: '16',
    explanation: '2⁴ = 16 = 4², confirming the equivalence.',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Laws of exponents and exponential forms"
    learnSteps={learnSteps}
    task="gr9-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
