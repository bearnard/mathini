import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import CubeStack from '../../../../../components/diagrams/maths/CubeStack';
import { PowerAnatomy, PowerGroups, PowerLadder, SquareGrid } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { expand, perfectCubes, power, powerOfPower, sameBaseProduct, sameBaseQuotient } from '../../../../../components/diagrams/maths/grade7Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers.test.ts).
const pw = (b: number, e: number) => (
  <>
    {b}
    <sup className="text-[0.75em] font-bold">{e}</sup>
  </>
);
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const anatomy = { base: 2, exp: 5, value: power(2, 5) };
const seven = power(7, 2);
const wrongPower = anatomy.base * anatomy.exp; // the mistake: 2 x 5 = 10
const four = power(4, 2);
const three = power(3, 3);
const cubes = perfectCubes(130);
const prod = sameBaseProduct(5, 2, 3);
const quot = sameBaseQuotient(3, 4, 2);
const alone = sameBaseProduct(2, 3, 1);
const pop = powerOfPower(4, 2, 3);
if (anatomy.value !== 32 || seven !== 49 || four !== 16 || three !== 27 || !cubes.includes(64) || power(10, 0) !== 1) throw new Error('lesson numbers out of step');

// "Check yourself", answers computed from the same helpers
const c1 = power(6, 4);
const c2 = sameBaseProduct(2, 4, 3);
const c3 = sameBaseQuotient(5, 6, 4);
const c4 = powerOfPower(3, 2, 2);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'A power is repeated multiplication',
    content: slide(
      <>
        <Rule>The base is the number you multiply. The exponent tells you how many times the base is written.</Rule>
        <PowerAnatomy base={anatomy.base} exp={anatomy.exp} />
        <Worked
          title={pw(7, 2)}
          steps={[<>The base is 7 and the exponent is 2.</>, <>Write 7 two times: {expand(7, 2)}.</>, <>{pw(7, 2)} = <strong>{seven}</strong>.</>]}
        />
        <Mistake>
          Multiplying the base by the exponent. {pw(anatomy.base, anatomy.exp)} is {expand(anatomy.base, anatomy.exp)} = {anatomy.value}, not {anatomy.base} × {anatomy.exp} = {wrongPower}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Squares and cubes',
    content: slide(
      <>
        <Rule>n<sup>2</sup> = n × n is a square. n<sup>3</sup> = n × n × n is a cube.</Rule>
        <div className="grid gap-3 sm:grid-cols-2">
          <SquareGrid n={4} />
          <CubeStack length={3} breadth={3} height={3} showCount />
        </div>
        <Worked
          steps={[
            <>{pw(4, 2)} = 4 × 4 = <strong>{four}</strong>.</>,
            <>{pw(3, 3)} = 3 × 3 × 3 = <strong>{three}</strong>.</>,
            <>Perfect cubes: {cubes.map(nb).join(', ')} (64 = {pw(4, 3)}).</>,
          ]}
        />
        <Mistake>{pw(3, 3)} is not 9. It needs three 3s: {three}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Powers of 10 and the zero power',
    content: slide(
      <>
        <Rule>Any number (except 0) to the power 0 is 1.</Rule>
        <PowerLadder top={3} />
        <Worked
          title={pw(10, 0)}
          steps={[
            <>{pw(10, 3)} = {nb(power(10, 3))}, {pw(10, 2)} = {power(10, 2)}, {pw(10, 1)} = {power(10, 1)}: each step down is ÷ 10.</>,
            <>The next step: {power(10, 1)} ÷ 10 = <strong>1</strong>, so {pw(10, 0)} = 1.</>,
          ]}
        />
        <Mistake>{pw(10, 0)} is not 0 and not 10. The pattern gives 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Same base: multiply and divide',
    content: slide(
      <>
        <Rule>Same base, multiply: add the exponents. Same base, divide: subtract the exponents.</Rule>
        <PowerGroups base={5} groups={[2, 3]} />
        <Worked
          steps={[
            <>{pw(5, 2)} × {pw(5, 3)} = ({expand(5, 2)}) × ({expand(5, 3)}) = {pw(5, prod.exp)}.</>,
            <>{pw(3, 4)} ÷ {pw(3, 2)}: cancel two 3s, leaving {pw(3, quot.exp)} = {quot.value}.</>,
            <>A lone 2 is {pw(2, 1)}: {pw(2, 3)} × 2 = {pw(2, 3)} × {pw(2, 1)} = {pw(2, alone.exp)}.</>,
          ]}
        />
        <Mistake>
          {pw(5, 2)} × {pw(5, 3)} is not 25<sup className="text-[0.75em] font-bold">5</sup> or {pw(5, 6)}. Keep the base and add: 2 + 3 = {prod.exp}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'A power of a power',
    content: slide(
      <>
        <Rule>(a<sup>m</sup>)<sup>n</sup>: keep the base and multiply the exponents.</Rule>
        <PowerGroups base={4} groups={[2, 2, 2]} />
        <Worked
          title={<>({pw(4, 2)})<sup className="text-[0.75em] font-bold">3</sup></>}
          steps={[
            <>({pw(4, 2)})<sup className="text-[0.75em] font-bold">3</sup> means {pw(4, 2)} × {pw(4, 2)} × {pw(4, 2)}.</>,
            <>Three groups of two 4s: 2 + 2 + 2 = {pop.exp}, so {pw(4, pop.exp)} = {nb(pop.value)}. Shortcut: 2 × 3 = {pop.exp}.</>,
          ]}
        />
        <Mistake>Not {pw(4, 5)}: multiply the exponents (2 × 3), do not add.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Write 6 × 6 × 6 × 6 as a power, and find its value.</li>
            <li>Simplify {pw(2, 4)} × {pw(2, 3)} and give the value.</li>
            <li>Simplify {pw(5, 6)} ÷ {pw(5, 4)} and give the value.</li>
            <li>Simplify ({pw(3, 2)})<sup className="text-[0.75em] font-bold">2</sup> and give the value.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{pw(6, 4)} = {nb(c1)}.</li>
            <li>{pw(2, c2.exp)} = {c2.value}.</li>
            <li>{pw(5, c3.exp)} = {c3.value}.</li>
            <li>{pw(3, c4.exp)} = {c4.value}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 2⁵?',
    options: ['32', '16', '25', '64'],
    answer: '32',
    explanation: '2 × 2 × 2 × 2 × 2 = 32.',
  },
  {
    prompt: 'Simplify 5² × 5³.',
    options: ['5⁵', '5⁶', '10⁵', '25⁶'],
    answer: '5⁵',
    explanation: 'When bases are the same, add exponents: 2 + 3 = 5.',
  },
  {
    prompt: 'What is 10⁰?',
    options: ['1', '0', '10', '100'],
    answer: '1',
    explanation: 'Any non-zero number to the power 0 equals 1.',
  },
  {
    prompt: 'Simplify 3⁴ ÷ 3².',
    options: ['3²', '3⁶', '1', '9³'],
    answer: '3²',
    explanation: 'When dividing same bases, subtract exponents: 4 − 2 = 2.',
  },
  {
    prompt: 'Which number is a perfect cube?',
    options: ['64', '48', '50', '72'],
    answer: '64',
    explanation: '64 is a perfect cube because 4 × 4 × 4 = 64, so 64 = 4³.',
  },
  {
    prompt: 'What is 7²?',
    options: ['49', '14', '21', '64'],
    answer: '49',
    explanation: '7² means 7 × 7, which is 49.',
  },
  {
    prompt: 'Which expression is equivalent to 2³ × 2?',
    options: ['2⁴', '2⁶', '4³', '2²'],
    answer: '2⁴',
    explanation: '2 = 2¹, so 2³ × 2¹ = 2⁴.',
  },
  {
    prompt: 'Simplify (4²)³.',
    options: ['4⁶', '4⁵', '16⁵', '12⁶'],
    answer: '4⁶',
    explanation: 'Power of a power: multiply exponents, 2 × 3 = 6.',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Powers, squares, cubes, and basic exponent laws"
    learnSteps={learnSteps}
    task="gr7-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
