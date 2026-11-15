import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PowerAnatomy, PowerGroups, SquareGrid } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { CancelPowers } from '../../../../../components/diagrams/maths/Grade8Pictures';
import { expand, power, powerOfPower, sameBaseProduct, sameBaseQuotient } from '../../../../../components/diagrams/maths/grade7Helpers';
import { cubeRoot, squareRoot, squaresAround } from '../../../../../components/diagrams/maths/grade8Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers, grade8Helpers) and
// lessonsMaths4.test.ts checks that the rendered slides show them.
const pw = (b: number | string, e: number | string) => (
  <>
    {b}
    <sup className="text-[0.75em] font-bold">{e}</sup>
  </>
);

const two3 = power(2, 3);
const four3 = power(4, 3);
const five2 = power(5, 2);
const wrongTwo3 = 2 * 3; // the mistake: 2 x 3 = 6
const root49 = squareRoot(49) ?? 0;
const near45 = squaresAround(45);
const root64 = cubeRoot(64) ?? 0;
const prod = sameBaseProduct(3, 2, 4);
const quot = sameBaseQuotient(2, 5, 2);
const zero = sameBaseQuotient(10, 3, 3);
const pop = powerOfPower(2, 3, 2);

// "Check yourself", answers computed from the same helpers
const c1 = { sq: power(9, 2), root: squareRoot(81) ?? 0 };
const c2 = sameBaseProduct(5, 3, 1);
const c3 = sameBaseQuotient(7, 6, 4);
const c4 = powerOfPower(3, 2, 3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A power is repeated multiplication',
    content: slide(
      <>
        <Rule>In {pw('a', 'n')} the base a is the number you multiply and the exponent n says how many times it is a factor.</Rule>
        <PowerAnatomy base={2} exp={3} />
        <Worked
          steps={[
            <>{pw(2, 3)} = {expand(2, 3)} = <strong>{two3}</strong>.</>,
            <>{pw(4, 3)} = {expand(4, 3)} = 16 × 4 = <strong>{four3}</strong>.</>,
            <>{pw(5, 2)} = {expand(5, 2)} = <strong>{five2}</strong>.</>,
          ]}
        />
        <Mistake>
          Multiplying the base by the exponent: {pw(2, 3)} is not 2 × 3 = {wrongTwo3}. It is {expand(2, 3)} = {two3}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Perfect squares and square roots',
    content: slide(
      <>
        <Rule>A perfect square is a whole number times itself. The square root √ undoes squaring; the cube root ∛ undoes cubing.</Rule>
        <SquareGrid n={7} />
        <Worked
          steps={[
            <>49 = 7 × 7 = {pw(7, 2)}, so 49 is a perfect square and √49 = <strong>{root49}</strong>.</>,
            <>45 lies between {near45.below} = {pw(near45.lowRoot, 2)} and {near45.above} = {pw(near45.lowRoot + 1, 2)}, so 45 is not a perfect square.</>,
            <>4 × 4 × 4 = 64, so ∛64 = <strong>{root64}</strong>.</>,
          ]}
        />
        <Mistake>Halving instead of finding the root: √49 is not 49 ÷ 2. Ask which number times itself gives 49: it is {root49}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiplying powers with the same base',
    content: slide(
      <>
        <Rule>{pw('a', 'm')} × {pw('a', 'n')} = {pw('a', 'm + n')}: keep the base and add the exponents.</Rule>
        <PowerGroups base={3} groups={[2, 4]} />
        <Worked
          title={<>{pw(3, 2)} × {pw(3, 4)}</>}
          steps={[
            <>Write it out: ({expand(3, 2)}) × ({expand(3, 4)}).</>,
            <>That is 2 + 4 = {prod.exp} threes multiplied together.</>,
            <>So {pw(3, 2)} × {pw(3, 4)} = <strong>{pw(3, prod.exp)}</strong> = {prod.value}.</>,
          ]}
        />
        <Mistake>
          Multiplying the bases as well: {pw(3, 2)} × {pw(3, 4)} is not {pw(9, 6)}. Only the exponents change; the base stays 3.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Dividing powers and the zero exponent',
    content: slide(
      <>
        <Rule>{pw('a', 'm')} ÷ {pw('a', 'n')} = {pw('a', 'm − n')}: keep the base and subtract the exponents. When the exponents are equal you get {pw('a', 0)} = 1.</Rule>
        <CancelPowers base={2} top={5} bottom={2} />
        <Worked
          steps={[
            <>{pw(2, 5)} ÷ {pw(2, 2)}: two 2s below cancel two 2s above.</>,
            <>5 − 2 = {quot.exp}, so {pw(2, 5)} ÷ {pw(2, 2)} = <strong>{pw(2, quot.exp)}</strong> = {quot.value}.</>,
            <>{pw(10, 3)} ÷ {pw(10, 3)} = {pw(10, zero.exp)}, and any number divided by itself is 1, so {pw(10, 0)} = <strong>{zero.value}</strong>.</>,
          ]}
        />
        <Mistake>{pw(10, 0)} is not 0 and not 10. Every copy of 10 cancels, which leaves 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'A power of a power',
    content: slide(
      <>
        <Rule>({pw('a', 'm')})<sup className="text-[0.75em] font-bold">n</sup> = {pw('a', 'm × n')}: keep the base and multiply the exponents.</Rule>
        <PowerGroups base={2} groups={[3, 3]} />
        <Worked
          title={<>({pw(2, 3)})<sup className="text-[0.75em] font-bold">2</sup></>}
          steps={[
            <>({pw(2, 3)})<sup className="text-[0.75em] font-bold">2</sup> = {pw(2, 3)} × {pw(2, 3)}: two groups of three 2s.</>,
            <>3 × 2 = {pop.exp}, so the answer is <strong>{pw(2, pop.exp)}</strong> = {pop.value}.</>,
          ]}
        />
        <Mistake>Adding the exponents: ({pw(2, 3)})<sup className="text-[0.75em] font-bold">2</sup> is not {pw(2, 5)}. There are 3 × 2 = {pop.exp} twos, not 3 + 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Find {pw(9, 2)} and √81.</>,
          <>Simplify {pw(5, 3)} × 5 and give the value.</>,
          <>Simplify {pw(7, 6)} ÷ {pw(7, 4)} and give the value.</>,
          <>Simplify ({pw(3, 2)})<sup className="text-[0.75em] font-bold">3</sup> and give the value.</>,
        ]}
        answers={[
          <>{pw(9, 2)} = {c1.sq} and √81 = {c1.root}.</>,
          <>5 = {pw(5, 1)}, so {pw(5, c2.exp)} = {c2.value}.</>,
          <>{pw(7, c3.exp)} = {c3.value}.</>,
          <>{pw(3, c4.exp)} = {c4.value}.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 2³?',
    options: ['8', '6', '9', '12'],
    answer: '8',
    explanation: '2³ means 2 × 2 × 2 = 8.',
  },
  {
    prompt: 'What is 5²?',
    options: ['25', '10', '15', '20'],
    answer: '25',
    explanation: '5² means 5 × 5 = 25.',
  },
  {
    prompt: 'Simplify 3² × 3⁴.',
    options: ['3⁶', '3⁸', '9⁶', '3²'],
    answer: '3⁶',
    explanation: 'When bases are equal, add exponents: 2 + 4 = 6.',
  },
  {
    prompt: 'What is 10⁰?',
    options: ['1', '0', '10', '100'],
    answer: '1',
    explanation: 'Any non-zero number to the power zero equals 1.',
  },
  {
    prompt: 'Simplify (2³)².',
    options: ['2⁶', '2⁵', '4⁵', '2⁹'],
    answer: '2⁶',
    explanation: 'Power of a power means multiply exponents: 3 × 2 = 6.',
  },
  {
    prompt: 'What is 4³?',
    options: ['64', '16', '12', '81'],
    answer: '64',
    explanation: '4 × 4 × 4 = 64.',
  },
  {
    prompt: 'Simplify 2⁵ ÷ 2².',
    options: ['2³', '2⁷', '4³', '2²'],
    answer: '2³',
    explanation: 'When dividing equal bases, subtract exponents: 5 - 2 = 3.',
  },
  {
    prompt: 'Which number is a perfect square?',
    options: ['49', '45', '52', '63'],
    answer: '49',
    explanation: '49 is a perfect square because 49 = 7 × 7 = 7².',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Powers, squares, cubes, and simplifying exponential expressions"
    learnSteps={learnSteps}
    task="gr8-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
