import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AreaModel } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { CancelFactors, RootNumberLine } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (grade10Helpers.test.ts, g10MathsLessons.test.ts).
const P = h.fmtPoly;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;

// slide 1: expand
const ex = h.expandBinomials(1, 2, 1, 7); // (x + 2)(x + 7)
const exSq = h.expandSquare(1, 5); // (x + 5)²
const exMix = h.expandBinomials(3, -1, 1, 4); // (3x − 1)(x + 4)

// slide 2: common factor and grouping
const cfA = h.coefHcf([8, 12]); // 8x² + 12x
const cfWrong = 2; // stopping at 2(4x² + 6x)

// slide 3: trinomials, difference of squares, cubes
const tri = h.factorQuadratic(1, 9, 20)!; // x² + 9x + 20
const tri2 = h.factorQuadratic(2, 7, 3)!; // 2x² + 7x + 3
const dsq = h.expandBinomials(1, -8, 1, 8); // (x − 8)(x + 8)
const wrongSq = h.expandSquare(1, -8); // (x − 8)²
const cube = h.cubeFactors(1, 2, 1); // x³ + 8
const cube2 = h.cubeFactors(2, 1, -1); // 8x³ − 1
const wrongCube = h.polyMul(h.lin(1, 2), [4, 2, 1]); // (x + 2)(x² + 2x + 4)

// slide 4: algebraic fractions
const fr = h.factorQuadratic(1, -1, -20)!; // x² − x − 20 = (x − 5)(x + 4)
const add = h.addFractions(5, 2, 1, 3); // 5/(2x) + 1/(3x)

// slide 5: rational / irrational
const root = 29;
const [rootLo, rootHi] = h.sqrtBetween(root);

// "Check yourself", answers from the same helpers
const c1 = h.expandBinomials(1, 6, 1, -2);
const c2 = h.factorQuadratic(1, -9, 14)!;
const c3 = h.factorQuadratic(1, -6, -27)!;
const c4 = h.cubeFactors(1, 4, -1);
const c5 = h.sqrtBetween(70);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Expanding brackets',
    content: slide(
      <>
        <Rule>Multiply every term in the first bracket by every term in the second, then add the like terms.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '7', size: 4 }]}
          left={[{ label: 'x', size: 5 }, { label: '2', size: 2 }]}
          cells={[['x²', '7x'], ['2x', '14']]}
          topLabel="x + 7"
          leftLabel="x + 2"
          aria={`An area model for (x + 2)(x + 7). The four parts are x squared, 7x, 2x and ${ex[0]}. Together: ${P(ex)}.`}
        />
        <Worked
          title="(x + 2)(x + 7)"
          steps={[
            <>x · x = x{sq}, x · 7 = 7x, 2 · x = 2x and 2 · 7 = {ex[0]}.</>,
            <>Add the like terms: 7x + 2x = {ex[1]}x.</>,
            <>(x + 2)(x + 7) = <strong>{P(ex)}</strong>.</>,
            <>A bracket with a number in front works the same way: (3x − 1)(x + 4) = <strong>{P(exMix)}</strong>.</>,
          ]}
        />
        <Mistake>
          (x + 5){sq} is not x{sq} + {exSq[0]}. A square means the bracket times itself, so the middle term is there: <strong>{P(exSq)}</strong>.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Common factors and grouping',
    content: slide(
      <>
        <Rule>Factorising is expanding backwards. Take out the highest common factor first. If there are four terms, group them in pairs.</Rule>
        <AreaModel
          top={[{ label: '2x', size: 6 }, { label: '3', size: 4 }]}
          left={[{ label: `${cfA}x`, size: 4 }]}
          cells={[[`8x²`, `12x`]]}
          topLabel="2x + 3"
          leftLabel={`${cfA}x`}
          aria={`An area model. A rectangle ${cfA}x high and 2x + 3 long is cut into 8x squared and 12x. So 8x squared + 12x = ${cfA}x(2x + 3).`}
        />
        <Worked
          title={<>8x{sq} + 12x</>}
          steps={[
            <>The HCF of 8 and 12 is {cfA}, and both terms have an x, so the HCF is {cfA}x.</>,
            <>Divide each term by {cfA}x: 8x{sq} ÷ {cfA}x = 2x and 12x ÷ {cfA}x = 3.</>,
            <>8x{sq} + 12x = <strong>{cfA}x(2x + 3)</strong>.</>,
            <>Four terms: 5m + 5n + km + kn = 5(m + n) + k(m + n) = <strong>(m + n)(5 + k)</strong>.</>,
          ]}
        />
        <Mistake>
          Stopping too soon. {cfWrong}(4x{sq} + 6x) is not finished, because 4x{sq} and 6x still share {cfWrong}x. Check the bracket: it must have no common factor left.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Trinomials, squares and cubes',
    content: slide(
      <>
        <Rule>x{sq} + bx + c: find two numbers that multiply to c and add to b. a{sq} − b{sq} = (a − b)(a + b). a³ ± b³ = (a ± b)(a{sq} ∓ ab + b{sq}).</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: String(tri.s), size: tri.s }]}
          left={[{ label: 'x', size: 5 }, { label: String(tri.q), size: tri.q }]}
          cells={[['x²', `${tri.s}x`], [`${tri.q}x`, String(tri.q * tri.s)]]}
          topLabel={`x + ${tri.s}`}
          leftLabel={`x + ${tri.q}`}
          aria={`An area model for the factors (x + ${tri.q}) and (x + ${tri.s}). The four parts are x squared, ${tri.s}x, ${tri.q}x and ${tri.q * tri.s}, which add to ${P([tri.q * tri.s, tri.q + tri.s, 1])}.`}
        />
        <Worked
          steps={[
            <>x{sq} + 9x + 20: the numbers are {tri.q} and {tri.s} (product {tri.q * tri.s}, sum {tri.q + tri.s}), so <strong>{h.bracket(1, tri.q)}{h.bracket(1, tri.s)}</strong>.</>,
            <>2x{sq} + 7x + 3 = <strong>{h.bracket(tri2.p, tri2.q)}{h.bracket(tri2.r, tri2.s)}</strong>. Check the middle term: {tri2.p}·{tri2.s}x + {tri2.q}·{tri2.r}x = {tri2.p * tri2.s + tri2.q * tri2.r}x.</>,
            <>x{sq} − 64 = x{sq} − 8{sq} = <strong>(x − 8)(x + 8)</strong>.</>,
            <>x³ + 8 = x³ + 2³ = <strong>(x + 2)({P(cube.second)})</strong>. And 8x³ − 1 = <strong>{h.bracket(cube2.first[1], cube2.first[0])}({P(cube2.second)})</strong>.</>,
          ]}
        />
        <Mistake>
          x{sq} − 64 is not (x − 8){sq}, because (x − 8){sq} = {P(wrongSq)}. The brackets must have opposite signs. In the cubes, the signs go + then − (sum) or − then + (difference): (x + 2)(x{sq} + 2x + 4) expands to {P(wrongCube)}, not x³ + 8.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Algebraic fractions',
    content: slide(
      <>
        <Rule>Factorise the top and the bottom, then cancel common brackets. To add, write both fractions over the lowest common denominator.</Rule>
        <CancelFactors top={['(x − 4)', '(x + 4)']} bottom={[h.bracket(1, fr.q), h.bracket(1, fr.s)]} cancelled={h.bracket(1, fr.s)} />
        <Worked
          steps={[
            <>(x{sq} − 16) ÷ (x{sq} − x − 20): the top is (x − 4)(x + 4) and the bottom is {h.bracket(1, fr.q)}{h.bracket(1, fr.s)}.</>,
            <>Cancel the common bracket (x + 4): the answer is <strong>(x − 4)/(x − 5)</strong>, with x ≠ −4 and x ≠ 5.</>,
            <>5/(2x) + 1/(3x): the lowest common denominator is {add.lcm}x.</>,
            <>5/(2x) = {add.n - 2}/({add.lcm}x) and 1/(3x) = 2/({add.lcm}x), so the sum is <strong>{add.n}/({add.d}x)</strong>.</>,
          ]}
        />
        <Mistake>
          Cancelling terms instead of factors. In (x + 4)/(x + 6) you cannot cancel the x or divide 4 by 6: cancelling works only on whole brackets or factors that multiply the whole top and bottom.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Rational and irrational numbers',
    content: slide(
      <>
        <Rule>A rational number can be written as a fraction of two integers; its decimal ends or repeats. An irrational number cannot, and its decimal never ends or repeats.</Rule>
        <RootNumberLine n={root} />
        <Worked
          steps={[
            <>0,25 = 1/4 and √16 = 4: both rational. 3/7 = 0,428571… repeats, so it is rational too.</>,
            <>√{root} is not a perfect square, so it is irrational.</>,
            <>To estimate it, find the squares around {root}: {rootLo}{sq} = {rootLo ** 2} and {rootHi}{sq} = {rootHi ** 2}.</>,
            <>So {rootLo} &lt; √{root} &lt; {rootHi}. A calculator gives √{root} ≈ <strong>{h.dec(h.sqrtRounded(root, 2), 2)}</strong>.</>,
          ]}
        />
        <Mistake>
          Thinking 22/7 is π. It is a fraction, so it is rational. It is only a close estimate: 22/7 = 3,142857… and π = 3,141592… (the digits of π never end).
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Expand and simplify (x + 6)(x − 2).</>,
          <>Factorise x{sq} − 9x + 14.</>,
          <>Factorise x{sq} − 6x − 27.</>,
          <>Factorise x³ − 64.</>,
          <>Between which two consecutive integers does √70 lie?</>,
        ]}
        answers={[
          <>x{sq} − 2x + 6x − 12 = <strong>{P(c1)}</strong>.</>,
          <>Two numbers with product 14 and sum −9: −2 and −7. <strong>{h.bracket(1, c2.q)}{h.bracket(1, c2.s)}</strong>.</>,
          <>Product −27 and sum −6: −9 and +3. <strong>{h.bracket(1, c3.q)}{h.bracket(1, c3.s)}</strong>.</>,
          <>x³ − 4³ = <strong>(x − 4)({P(c4.second)})</strong>.</>,
          <>{c5[0]}{sq} = {c5[0] ** 2} and {c5[1]}{sq} = {c5[1] ** 2}, so between <strong>{c5[0]} and {c5[1]}</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "Expand and simplify: (x + 3)(x + 5)",
    options: ["x² + 15", "x² + 8x + 15", "x² + 15x + 8", "x² + 8x + 8"],
    answer: "x² + 8x + 15",
    explanation: "Multiply every term in the first bracket by every term in the second: x² + 5x + 3x + 15. Then add the like terms 5x and 3x to get 8x.",
  },
  {
    prompt: "Expand: (x − 4)²",
    options: ["x² − 8x + 16", "x² − 16", "x² + 16", "x² − 8x − 16"],
    answer: "x² − 8x + 16",
    explanation: "A square means the bracket times itself: (x − 4)(x − 4) = x² − 4x − 4x + 16. The middle term is −8x and the last term is +16.",
  },
  {
    prompt: "Expand and simplify: (2x + 1)(x − 3)",
    options: ["2x² + 5x − 3", "2x² − 7x − 3", "2x² − 5x + 3", "2x² − 5x − 3"],
    answer: "2x² − 5x − 3",
    explanation: "2x · x = 2x², 2x · (−3) = −6x, 1 · x = x, 1 · (−3) = −3. Then −6x + x = −5x.",
  },
  {
    prompt: "Factorise completely: 6x² + 9x",
    options: ["3(2x² + 3x)", "3x(2x + 9)", "3x(2x + 3)", "6x(x + 9)"],
    answer: "3x(2x + 3)",
    explanation: "The highest common factor of 6x² and 9x is 3x. Dividing each term by 3x gives 2x and 3. Taking out only 3 leaves a common factor of x inside the bracket.",
  },
  {
    prompt: "Factorise: x² − 49",
    options: ["(x − 7)²", "(x − 7)(x + 7)", "(x + 7)²", "x(x − 49)"],
    answer: "(x − 7)(x + 7)",
    explanation: "x² and 49 are both perfect squares with a minus between them: a difference of two squares. a² − b² = (a − b)(a + b) with a = x and b = 7.",
  },
  {
    prompt: "Factorise: x² + x − 12",
    options: ["(x − 3)(x + 4)", "(x − 4)(x + 3)", "(x + 6)(x − 2)", "(x + 12)(x − 1)"],
    answer: "(x − 3)(x + 4)",
    explanation: "Find two numbers that multiply to −12 and add to +1: +4 and −3. So x² + x − 12 = (x + 4)(x − 3).",
  },
  {
    prompt: "Factorise by grouping: 2a + 2b + ca + cb",
    options: ["(a + b)(2c)", "(2 + a)(b + c)", "(a + c)(b + 2)", "(a + b)(2 + c)"],
    answer: "(a + b)(2 + c)",
    explanation: "Group the terms in pairs: 2(a + b) + c(a + b). Now (a + b) is a common factor, so the answer is (a + b)(2 + c).",
  },
  {
    prompt: "Factorise: x³ − 27",
    options: ["(x − 3)(x² − 3x + 9)", "(x + 3)(x² − 3x + 9)", "(x − 3)(x² + 3x + 9)", "(x − 3)(x² + 9)"],
    answer: "(x − 3)(x² + 3x + 9)",
    explanation: "x³ − 27 = x³ − 3³ is a difference of cubes: a³ − b³ = (a − b)(a² + ab + b²). With a = x and b = 3 the second bracket is x² + 3x + 9.",
  },
  {
    prompt: "Simplify: (x² − 9) ÷ (x² + x − 6)",
    options: ["(x − 3)/(x + 2)", "(x − 3)/(x − 2)", "(x + 3)/(x − 2)", "3/2"],
    answer: "(x − 3)/(x − 2)",
    explanation: "Factorise first: (x − 3)(x + 3) over (x + 3)(x − 2). Cancel the common factor (x + 3). Never cancel x² or single terms across + or −.",
  },
  {
    prompt: "Simplify: 2/x + 3/(2x)",
    options: ["7/(2x)", "5/(3x)", "5/(2x)", "6/(2x²)"],
    answer: "7/(2x)",
    explanation: "The lowest common denominator is 2x. 2/x = 4/(2x). Add: 4/(2x) + 3/(2x) = 7/(2x).",
  },
  {
    prompt: "Which of these numbers is irrational?",
    options: ["√25", "22/7", "0,75", "√2"],
    answer: "√2",
    explanation: "A rational number can be written as a fraction of two integers. √25 = 5, 22/7 is a fraction and 0,75 = 3/4. The decimal of √2 never ends and never repeats, so it is irrational.",
  },
  {
    prompt: "Between which two consecutive integers does √45 lie?",
    options: ["5 and 6", "7 and 8", "6 and 7", "22 and 23"],
    answer: "6 and 7",
    explanation: "36 < 45 < 49, so 6 < √45 < 7.",
  },
  {
    prompt: "√45 correct to one decimal place is",
    options: ["6,5", "6,7", "7,0", "6,0"],
    answer: "6,7",
    explanation: "A calculator gives √45 = 6,7082... so to one decimal place it is 6,7.",
  },
  {
    prompt: "Factorise completely: 2x² − 8",
    options: ["2(x − 2)(x + 2)", "2(x² − 4)", "2(x − 2)²", "(x − 2)(x + 4)"],
    answer: "2(x − 2)(x + 2)",
    explanation: "Take out the common factor 2 first: 2(x² − 4). Then x² − 4 is a difference of squares: (x − 2)(x + 2).",
  },
];
// BANK:END

const AlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions"
    subtitle="Expanding, factorising, algebraic fractions and real numbers"
    learnSteps={learnSteps}
    task="gr10-algebraic-expressions-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressions;
