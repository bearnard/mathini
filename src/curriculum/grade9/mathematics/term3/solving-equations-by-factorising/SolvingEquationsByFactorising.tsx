import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AreaModel } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { ValueTable, ZeroProduct } from '../../../../../components/diagrams/maths/Grade9AlgebraT3Pictures';
import { evalPoly, factorQuadratic, factorText, orderedPairs, polyText, rectangleSide, rootsOfFactors, volumeOfPrism } from '../../../../../components/diagrams/maths/grade9AlgebraT3';

// Every root, table value and expansion below comes from grade9AlgebraT3 (tested in grade9AlgebraT3.test.ts); g9AlgebraT3.test.ts
// checks the rendered text and re-verifies each solution by substituting it back.
const minus = (n: number) => (n < 0 ? `−${Math.abs(n)}` : String(n));
const rootsText = (r: number[]) => r.map((v) => `x = ${minus(v)}`).join(' or ');

const r1 = rootsOfFactors(-2, 5); // (x − 2)(x + 5) = 0
const r2 = rootsOfFactors(0, -4); // x(x − 4) = 0
const r3 = rootsOfFactors(0, -3); // x² − 3x = 0
const r4 = rootsOfFactors(5, -5); // x² − 25 = 0
const f5 = factorQuadratic(1, 5, 6)!;
const r5 = rootsOfFactors(f5.p, f5.q);
const f6 = factorQuadratic(1, -1, -6)!;
const r6 = rootsOfFactors(f6.p, f6.q);
const f7 = factorQuadratic(1, -6, 9)!;
const r7 = rootsOfFactors(f7.p, f7.q);

const rect = rectangleSide(3, 28)!; // x(x + 3) = 28
const rectF = rect.factors!;
const prism = volumeOfPrism([0, 2], [1, 2], [3, 2]);
const ageS = 3; // Sophie now; Thandi is 6 years older
const tableRule = [-3, 0, 2];
const pairs = orderedPairs(tableRule, [-2, -1, 0, 1, 2]);
const y2 = evalPoly([3, 4, 2], -2); // y = 2x² + 4x + 3 at x = −2
const wrongSign = -(2 ** 2) * 2; // 2 × −2² done wrongly

const c1 = rootsOfFactors(-6, 2);
const c2f = factorQuadratic(1, 2, -8)!;
const c2 = rootsOfFactors(c2f.p, c2f.q);
const c3 = rootsOfFactors(0, -9);
const c4 = evalPoly([-1, 2, 1], -3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A product of factors equal to 0',
    content: slide(
      <>
        <Rule>If a product of factors equals 0, then at least one of the factors is 0. Set each factor equal to 0 and solve each small equation.</Rule>
        <ZeroProduct equation="(x − 2)(x + 5) = 0" factors={['x − 2', 'x + 5']} results={[`x = ${r1[1]}`, `x = ${minus(r1[0])}`]} />
        <Worked
          steps={[
            <>(x − 2)(x + 5) = 0: x − 2 = 0 or x + 5 = 0, so <strong>{rootsText([r1[1], r1[0]])}</strong>.</>,
            <>x(x − 4) = 0: x = 0 or x − 4 = 0, so <strong>{rootsText(r2)}</strong>.</>,
            <>Check x = {r1[1]} in the first equation: (2 − 2)(2 + 5) = 0 × 7 = 0.</>,
          ]}
        />
        <Mistake>Using this rule when the product is not 0: (x − 2)(x + 5) = 12 does not mean x − 2 = 12 or x + 5 = 12. The right side must be 0 first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Common factors and difference of two squares',
    content: slide(
      <>
        <Rule>Move everything to one side so the other side is 0. Factorise, then set each factor equal to 0.</Rule>
        <ZeroProduct equation="x(x − 3) = 0" factors={['x', 'x − 3']} results={[`x = ${r3[0]}`, `x = ${r3[1]}`]} />
        <Worked
          steps={[
            <>x² − 3x = 0: take out x to get x(x − 3) = 0, so <strong>{rootsText(r3)}</strong>.</>,
            <>x² − 25 = 0: a difference of squares, (x + 5)(x − 5) = 0, so <strong>{rootsText(r4)}</strong>.</>,
            <>Check x = −5: (−5)² − 25 = 25 − 25 = 0.</>,
          ]}
        />
        <Mistake>Dividing both sides by x: x² − 3x = 0 gives x − 3 = 0 and loses the solution x = 0. Factorise instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trinomial equations',
    content: slide(
      <>
        <Rule>Write the equation in the form ax² + bx + c = 0, factorise the trinomial, then solve. Read each solution from its factor: (x + 2) gives x = −2.</Rule>
        <ZeroProduct equation="x² + 5x + 6 = 0" factors={['x + 2', 'x + 3']} results={[`x = ${minus(-f5.p)}`, `x = ${minus(-f5.q)}`]} />
        <Worked
          steps={[
            <>{polyText([6, 5, 1])} = 0 becomes {factorText(f5.p)}{factorText(f5.q)} = 0, so <strong>{rootsText(r5)}</strong>.</>,
            <>{polyText([-6, -1, 1])} = 0 becomes {factorText(f6.p)}{factorText(f6.q)} = 0, so <strong>{rootsText(r6)}</strong>.</>,
            <>{polyText([9, -6, 1])} = 0 becomes {factorText(f7.p)}² = 0, so there is one solution: <strong>{rootsText(r7)}</strong>.</>,
          ]}
        />
        <Mistake>Reading the wrong sign: the factor (x + 2) gives x = −2, not x = 2. Set the factor to 0 and solve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Setting up equations',
    content: slide(
      <>
        <Rule>Draw a picture, give the unknown a letter, and write an equation from the facts. After solving, check that the answer makes sense in the problem.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '3', size: 3 }]}
          left={[{ label: 'x', size: 5 }]}
          cells={[['x²', '3x']]}
          topLabel="x + 3"
          leftLabel="x"
          aria={`A rectangle with width x and length x + 3. Its area is x squared + 3x and the area is 28 square centimetres.`}
        />
        <Worked
          title={<>A rectangle is (x + 3) cm long and x cm wide. Its area is 28 cm².</>}
          steps={[
            <>x(x + 3) = 28 gives {polyText(rect.equation)} = 0.</>,
            <>{factorText(rectF.p)}{factorText(rectF.q)} = 0, so x = {minus(-rectF.p)} or x = {minus(-rectF.q)}.</>,
            <>A width cannot be negative, so <strong>x = {rect.x}</strong>. Check: {rect.x} × {(rect.x ?? 0) + 3} = 28.</>,
            <>Ages: Thandi is 6 years older than Sophie. Let Sophie be s, so in 3 years s + 9 = 2(s + 3). Then s = <strong>{ageS}</strong> and Thandi is {ageS + 6}.</>,
          ]}
        />
        <Mistake>Keeping an answer that does not fit: x = −7 also solves the equation, but a width of −7 cm is impossible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Substitution and tables of ordered pairs',
    content: slide(
      <>
        <Rule>To find the value of an expression, replace each letter by its number and calculate in the right order. A table of ordered pairs lists the x values with the matching y values.</Rule>
        <ValueTable rule="y = 2x² − 3" pairs={pairs} />
        <Worked
          steps={[
            <>y = 2x² − 3 with x = −2: 2 × (−2)² − 3 = 2 × 4 − 3 = <strong>{pairs[0][1]}</strong>.</>,
            <>x = 0 gives 2 × 0 − 3 = <strong>{pairs[2][1]}</strong>, and x = 1 gives 2 × 1 − 3 = <strong>{minus(pairs[3][1])}</strong>.</>,
            <>y = 2x² + 4x + 3 with x = −2: 2 × 4 + 4 × (−2) + 3 = 8 − 8 + 3 = <strong>{y2}</strong>.</>,
            <>A prism 2x by (2x + 1) by (2x + 3) has volume 2x(2x + 1)(2x + 3) = {polyText(prism)}.</>,
          ]}
        />
        <Mistake>Squaring only the 2 and not the sign: (−2)² = 4, so 2 × (−2)² = 8, not {wrongSign}. Put the number in brackets.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Solve (x − 6)(x + 2) = 0.</>,
          <>Solve x² + 2x − 8 = 0.</>,
          <>Solve x² − 9x = 0.</>,
          <>Find the value of x² + 2x − 1 when x = −3.</>,
        ]}
        answers={[
          <>x − 6 = 0 or x + 2 = 0: {rootsText(c1)}.</>,
          <>{factorText(c2f.p)}{factorText(c2f.q)} = 0, so {rootsText(c2)}.</>,
          <>x(x − 9) = 0, so {rootsText(c3)}.</>,
          <>(−3)² + 2 × (−3) − 1 = 9 − 6 − 1 = {minus(c4)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: MathematicsItem[] = [
  {
    prompt: "Solve (x − 4)(x + 1) = 0.",
    options: ["x = −4 or x = 1", "x = 4 or x = 1", "x = 4 or x = −1", "x = −4 or x = −1"],
    answer: "x = 4 or x = −1",
    explanation: "x − 4 = 0 gives x = 4 and x + 1 = 0 gives x = −1, so x = 4 or x = −1.",
  },
  {
    prompt: "Solve x(x + 6) = 0.",
    options: ["x = 0 or x = −6", "x = 0 or x = 6", "x = −6", "x = 0 or x = −3"],
    answer: "x = 0 or x = −6",
    explanation: "x = 0 or x + 6 = 0, so x = 0 or x = −6.",
  },
  {
    prompt: "Solve x² − 7x = 0.",
    options: ["x = 7", "x = 0 or x = −7", "x = −7", "x = 0 or x = 7"],
    answer: "x = 0 or x = 7",
    explanation: "x(x − 7) = 0, so x = 0 or x = 7.",
  },
  {
    prompt: "Solve x² − 36 = 0.",
    options: ["x = 6", "x = 6 or x = −6", "x = 18 or x = −18", "x = 36 or x = −36"],
    answer: "x = 6 or x = −6",
    explanation: "(x − 6)(x + 6) = 0, so x = 6 or x = −6.",
  },
  {
    prompt: "Solve x² + 8x + 12 = 0.",
    options: ["x = 2 or x = 6", "x = −3 or x = −4", "x = −2 or x = −6", "x = −1 or x = −12"],
    answer: "x = −2 or x = −6",
    explanation: "(x + 2)(x + 6) = 0, so x = −2 or x = −6.",
  },
  {
    prompt: "Solve x² − 2x − 15 = 0.",
    options: ["x = 5 or x = −3", "x = −5 or x = 3", "x = 5 or x = 3", "x = −5 or x = −3"],
    answer: "x = 5 or x = −3",
    explanation: "(x − 5)(x + 3) = 0, so x = 5 or x = −3.",
  },
  {
    prompt: "Solve x² − 10x + 25 = 0.",
    options: ["x = 5 or x = −5", "x = −5", "x = 25", "x = 5"],
    answer: "x = 5",
    explanation: "(x − 5)² = 0, so x = 5.",
  },
  {
    prompt: "Solve 2x² − 8 = 0.",
    options: ["x = 4 or x = −4", "x = 2 or x = −2", "x = 2", "x = 8 or x = −8"],
    answer: "x = 2 or x = −2",
    explanation: "2(x − 2)(x + 2) = 0, so x = 2 or x = −2.",
  },
  {
    prompt: "A rectangle has length (x + 2) cm and width x cm. Its area is 24 cm². What is x?",
    options: ["x = −6", "x = 12", "x = 4", "x = 6"],
    answer: "x = 4",
    explanation: "x(x + 2) = 24 gives (x + 6)(x − 4) = 0. A width cannot be negative, so x = 4.",
  },
  {
    prompt: "Sipho is 6 years older than Lerato. In 2 years' time Sipho will be twice as old as Lerato. How old is Lerato now?",
    options: ["4 years", "6 years", "10 years", "8 years"],
    answer: "4 years",
    explanation: "Let Lerato be L: L + 8 = 2(L + 2), so L = 4 years.",
  },
  {
    prompt: "What is the value of 3x² − 2x when x = −2?",
    options: ["8", "−16", "−8", "16"],
    answer: "16",
    explanation: "3 × (−2)² − 2 × (−2) = 12 + 4 = 16.",
  },
  {
    prompt: "For the table of y = x² + 2x − 1, what is y when x = 3?",
    options: ["8", "14", "16", "−4"],
    answer: "14",
    explanation: "3² + 2 × 3 − 1 = 9 + 6 − 1 = 14.",
  },
  {
    prompt: "For y = 3x − x², what is y when x = −1?",
    options: ["2", "4", "−4", "−2"],
    answer: "−4",
    explanation: "3 × (−1) − (−1)² = −3 − 1 = −4.",
  },
  {
    prompt: "Which equation describes a prism with length x cm, width (x + 1) cm and height 3 cm whose volume is 36 cm³?",
    options: ["3x(x + 1) = 36", "3x + (x + 1) = 36", "x(x + 1) = 36", "3x² + 1 = 36"],
    answer: "3x(x + 1) = 36",
    explanation: "Volume = length × width × height, so x(x + 1) × 3 = 36, written 3x(x + 1) = 36.",
  },
];

const SolvingEquationsByFactorising = () => (
  <CapsSubjectTopic
    title="Solving Equations by Factorising"
    subtitle="Product of factors equal to 0, equations from words, and tables of ordered pairs"
    learnSteps={learnSteps}
    task="gr9-solving-equations-by-factorising-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default SolvingEquationsByFactorising;
