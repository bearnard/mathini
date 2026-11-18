import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AreaModel } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { SquareDifference, ValueTable } from '../../../../../components/diagrams/maths/Grade9AlgebraT3Pictures';
import { commonNumber, differenceOfSquares, expandProduct, factorQuadratic, factorText, polyText } from '../../../../../components/diagrams/maths/grade9AlgebraT3';

// Every expanded form and factor below comes from grade9AlgebraT3 (tested in grade9AlgebraT3.test.ts); g9AlgebraT3.test.ts checks the
// rendered text and re-verifies every factorisation by evaluating both sides.
const hcf = commonNumber([6, -4]); // 6a⁴ − 4a²
const dsq = differenceOfSquares(5, 1); // 25a² − 1
const dsq27 = differenceOfSquares(1, 3); // x² − 9 inside 3x² − 27
const t1 = factorQuadratic(1, 5, 6)!;
const t2 = factorQuadratic(1, -5, 6)!;
const t3 = factorQuadratic(1, -1, -6)!;
const t4 = factorQuadratic(1, -6, 9)!;
const t5 = factorQuadratic(2, 10, 12)!;
const wrongPair = expandProduct(1, 1, 6); // (x + 1)(x + 6) = x² + 7x + 6
const c1 = factorQuadratic(1, 8, 12)!;
const c2 = differenceOfSquares(4, 3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Common factors',
    content: slide(
      <>
        <Rule>Factorising is expanding in reverse. Take out the highest common factor of every term, number and letter, and write what is left in a bracket. The common factor can also be a whole bracket.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '3', size: 3 }]}
          left={[{ label: '2x', size: 4 }]}
          cells={[['2x²', '6x']]}
          topLabel="x + 3"
          leftLabel="2x"
          aria="An area model. A rectangle 2x high and x + 3 long is cut into two parts: 2x times x is 2x squared and 2x times 3 is 6x. So 2x(x + 3) = 2x² + 6x, and factorising 2x² + 6x goes back to 2x(x + 3)."
        />
        <Worked
          steps={[
            <>Expand 2x(x + 3) = <strong>2x² + 6x</strong>. Factorise it back: 2x² + 6x = <strong>2x(x + 3)</strong>.</>,
            <>6a⁴ − 4a²: the number {hcf} and the letter part a² are common, so 6a⁴ − 4a² = <strong>2a²(3a² − 2)</strong>.</>,
            <>2x(a − b) − 3(a − b): the bracket (a − b) is common, so it equals <strong>(a − b)(2x − 3)</strong>.</>,
          ]}
        />
        <Mistake>Taking out only part of the factor: 6a⁴ − 4a² = 2(3a⁴ − 2a²) is right but not finished. Take out 2a² as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Grouping and opposite brackets',
    content: slide(
      <>
        <Rule>With four terms, factorise two at a time so that the same bracket appears twice, then take that bracket out. Note that (b − a) = −(a − b).</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '2', size: 3 }]}
          left={[{ label: 'a−b', size: 3 }]}
          cells={[['x(a−b)', '2(a−b)']]}
          topLabel="x + 2"
          leftLabel="a − b"
          aria="An area model. A rectangle a minus b high and x + 2 long is cut into two parts, x times (a minus b) and 2 times (a minus b). So ax − bx + 2a − 2b = (a − b)(x + 2)."
        />
        <Worked
          steps={[
            <>ax − bx + 2a − 2b = x(a − b) + 2(a − b).</>,
            <>The bracket (a − b) is common: <strong>(a − b)(x + 2)</strong>.</>,
            <>2x(a − b) − 3(b − a): write −3(b − a) as +3(a − b), so it equals <strong>(a − b)(2x + 3)</strong>.</>,
          ]}
        />
        <Mistake>Forgetting the sign when the brackets are opposite: −3(b − a) is +3(a − b), not −3(a − b).</Mistake>
      </>,
    ),
  },
  {
    title: 'Difference of two squares',
    content: slide(
      <>
        <Rule>A difference of two squares factorises as a² − b² = (a + b)(a − b). It needs two perfect squares with a minus between them. First take out any common factor.</Rule>
        <SquareDifference a={7} b={3} />
        <Worked
          steps={[
            <>25a² − 1 = (5a)² − 1²: <strong>({polyText(dsq.minus, 'a')})({polyText(dsq.plus, 'a')})</strong>.</>,
            <>3x² − 27 = 3(x² − 9) = 3{factorText(-3)}{factorText(3)}, because {polyText(dsq27.expanded)} is a difference of squares.</>,
            <>a⁴ − b⁴ = (a² − b²)(a² + b²) = <strong>(a − b)(a + b)(a² + b²)</strong>.</>,
          ]}
        />
        <Mistake>A sum of squares does not factorise this way: x² + 9 is not (x + 3)(x + 3), because (x + 3)(x + 3) = x² + 6x + 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trinomials',
    content: slide(
      <>
        <Rule>To factorise x² + bx + c, find two numbers that multiply to c and add to b. If a number is common to all three terms, take it out first.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '3', size: 3 }]}
          left={[{ label: 'x', size: 5 }, { label: '2', size: 2 }]}
          cells={[['x²', '3x'], ['2x', '6']]}
          topLabel="x + 3"
          leftLabel="x + 2"
          aria="An area model for (x + 2)(x + 3). The four parts are x squared, 3x, 2x and 6. Together they make x squared + 5x + 6."
        />
        <Worked
          steps={[
            <>{polyText([6, 5, 1])}: {t1.p} × {t1.q} = 6 and {t1.p} + {t1.q} = 5, so <strong>{factorText(t1.p)}{factorText(t1.q)}</strong>.</>,
            <>{polyText([6, -5, 1])} = <strong>{factorText(t2.p)}{factorText(t2.q)}</strong>. {polyText([-6, -1, 1])} = <strong>{factorText(t3.p)}{factorText(t3.q)}</strong>.</>,
            <>{polyText([9, -6, 1])} = <strong>{factorText(t4.p)}²</strong>, a perfect square.</>,
            <>{polyText([12, 10, 2])}: take out {t5.k} first: {t5.k}({polyText([6, 5, 1])}) = <strong>{t5.k}{factorText(t5.p)}{factorText(t5.q)}</strong>.</>,
          ]}
        />
        <Mistake>Using numbers with the right product but the wrong sum: (x + 1)(x + 6) = {polyText(wrongPair)}, not {polyText([6, 5, 1])}. Check the sum as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Algebraic fractions',
    content: slide(
      <>
        <Rule>To simplify an algebraic fraction, factorise the top and the bottom, then cancel factors that are common to both. You can only cancel factors, not terms.</Rule>
        <ValueTable rule="(9a² − 1) ÷ (3a + 1) = 3a − 1" names={['a', 'value']} pairs={[[2, 5], [3, 8], [4, 11]]} />
        <Worked
          steps={[
            <>(2x + 6y) ÷ (x + 3y) = 2(x + 3y) ÷ (x + 3y) = <strong>2</strong>.</>,
            <>(3x − 3y) ÷ (6x − 6y) = 3(x − y) ÷ 6(x − y) = <strong>1/2</strong>.</>,
            <>(9a² − 1) ÷ (3a + 1) = (3a − 1)(3a + 1) ÷ (3a + 1) = <strong>3a − 1</strong>. The table checks it for a = 2, 3 and 4.</>,
          ]}
        />
        <Mistake>Cancelling a term instead of a factor: (x + 3) ÷ 3 is not x + 1. Only a factor of the whole top can cancel with the bottom.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Factorise x² + 8x + 12.</>,
          <>Factorise 16a² − 9.</>,
          <>Factorise 4x² − 12x.</>,
          <>Simplify (x² − 25) ÷ (x − 5).</>,
        ]}
        answers={[
          <>{factorText(c1.p)}{factorText(c1.q)}, because {c1.p} × {c1.q} = 12 and {c1.p} + {c1.q} = 8.</>,
          <>({polyText(c2.minus, 'a')})({polyText(c2.plus, 'a')}), with a² replaced by (4a)²: 16a² − 9 = (4a)² − 3².</>,
          <>4x(x − 3): the common factor is 4x.</>,
          <>(x − 5)(x + 5) ÷ (x − 5) = x + 5.</>,
        ]}
      />,
    ),
  },
];

export const bank: MathematicsItem[] = [
  {
    prompt: "Factorise 6x + 9.",
    options: ["3(2x + 9)", "6(x + 3)", "3(2x + 3)", "3(3x + 2)"],
    answer: "3(2x + 3)",
    explanation: "The common factor is 3: 6x ÷ 3 = 2x and 9 ÷ 3 = 3, so 3(2x + 3).",
  },
  {
    prompt: "Factorise 8a² − 12a completely.",
    options: ["4a(2a − 3)", "4(2a² − 3a)", "4a(2a + 3)", "4a(2a − 12)"],
    answer: "4a(2a − 3)",
    explanation: "The highest common factor is 4a, so 4a(2a − 3). The bracket 4(2a² − 3a) still has a common factor a.",
  },
  {
    prompt: "Factorise 5x(a + b) + 2(a + b).",
    options: ["(a + b)(5x − 2)", "5x + 2(a + b)", "(a + b)(7x)", "(a + b)(5x + 2)"],
    answer: "(a + b)(5x + 2)",
    explanation: "The bracket (a + b) is common to both parts, so (a + b)(5x + 2).",
  },
  {
    prompt: "Factorise ax + ay + 3x + 3y.",
    options: ["(x + y)(a − 3)", "(x + y)(a + 3)", "(a + x)(y + 3)", "(a + 3)(x − y)"],
    answer: "(x + y)(a + 3)",
    explanation: "Group ax + ay = a(x + y) and 3x + 3y = 3(x + y), so (x + y)(a + 3).",
  },
  {
    prompt: "Write 4y(m − n) + 5(n − m) as a product.",
    options: ["(m − n)(4y + 5)", "(m − n)(9y)", "(m − n)(4y − 5)", "(n − m)(4y − 5)"],
    answer: "(m − n)(4y − 5)",
    explanation: "5(n − m) = −5(m − n), so the common bracket gives (m − n)(4y − 5).",
  },
  {
    prompt: "Factorise x² − 49.",
    options: ["(x − 7)(x + 7)", "(x − 7)²", "(x + 7)²", "(x − 49)(x + 1)"],
    answer: "(x − 7)(x + 7)",
    explanation: "x² − 49 = x² − 7², a difference of two squares, so (x − 7)(x + 7).",
  },
  {
    prompt: "Factorise 16a² − 25.",
    options: ["(4a − 5)²", "(8a − 5)(2a + 5)", "(16a − 5)(a + 5)", "(4a − 5)(4a + 5)"],
    answer: "(4a − 5)(4a + 5)",
    explanation: "16a² = (4a)² and 25 = 5², so (4a − 5)(4a + 5).",
  },
  {
    prompt: "Factorise 2x² − 18 completely.",
    options: ["2(x − 9)(x + 9)", "2(x − 3)(x + 3)", "(2x − 3)(x + 3)", "2(x − 3)²"],
    answer: "2(x − 3)(x + 3)",
    explanation: "Take out 2: 2(x² − 9), then x² − 9 = (x − 3)(x + 3), so 2(x − 3)(x + 3).",
  },
  {
    prompt: "Factorise x² + 7x + 10.",
    options: ["(x + 1)(x + 10)", "(x − 2)(x − 5)", "(x + 2)(x + 5)", "(x + 3)(x + 4)"],
    answer: "(x + 2)(x + 5)",
    explanation: "2 × 5 = 10 and 2 + 5 = 7, so (x + 2)(x + 5).",
  },
  {
    prompt: "Factorise x² − 8x + 15.",
    options: ["(x − 3)(x − 5)", "(x + 3)(x + 5)", "(x − 1)(x − 15)", "(x − 3)(x + 5)"],
    answer: "(x − 3)(x − 5)",
    explanation: "(−3) × (−5) = 15 and (−3) + (−5) = −8, so (x − 3)(x − 5).",
  },
  {
    prompt: "Factorise x² + 2x − 15.",
    options: ["(x − 5)(x + 3)", "(x + 5)(x + 3)", "(x + 15)(x − 1)", "(x + 5)(x − 3)"],
    answer: "(x + 5)(x − 3)",
    explanation: "5 × (−3) = −15 and 5 + (−3) = 2, so (x + 5)(x − 3).",
  },
  {
    prompt: "Factorise 3x² + 15x + 18.",
    options: ["3(x + 3)(x + 6)", "3(x + 2)(x + 3)", "3(x − 2)(x − 3)", "3(x + 1)(x + 6)"],
    answer: "3(x + 2)(x + 3)",
    explanation: "Take out 3: 3(x² + 5x + 6) = 3(x + 2)(x + 3).",
  },
  {
    prompt: "Simplify (6x − 6y) ÷ (2x − 2y).",
    options: ["3(x − y)", "4", "3", "x − y"],
    answer: "3",
    explanation: "6(x − y) ÷ 2(x − y) = 3.",
  },
  {
    prompt: "Simplify (x² − 16) ÷ (x + 4).",
    options: ["x − 4", "x + 4", "x − 16", "(x − 4)(x + 4)"],
    answer: "x − 4",
    explanation: "x² − 16 = (x − 4)(x + 4), and cancelling (x + 4) leaves x − 4.",
  },
];

const FactorisingAlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Factorising Algebraic Expressions"
    subtitle="Common factors, difference of two squares, trinomials and algebraic fractions"
    learnSteps={learnSteps}
    task="gr9-factorising-algebraic-expressions-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FactorisingAlgebraicExpressions;
