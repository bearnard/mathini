import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AreaModel, OperationChain, PartWholeBar, TermTiles } from '../../../../../components/diagrams/maths/Grade9Pictures';
import {
  binomialProduct, collect, commonFactor, expandBracket, factorTrinomial, formatTerms, num, solveBracket, solveLinear, type Term,
} from '../../../../../components/diagrams/maths/grade9Helpers';

// Every number in the slides below comes from these tested helpers (grade9Helpers.test.ts, lessonsMaths8.test.ts).
const sq = <sup className="text-[0.75em] font-bold">2</sup>;
const s = (n: number) => num(n);
const plus = (n: number) => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);

// slide 1: like terms
const likeBefore: Term[] = [[2, 'x'], [3, 'y'], [-1, 'x'], [2, 'y']];
const likeAfter = collect(likeBefore);
const likeB: Term[] = [[3, 'x'], [5, 'x'], [-2, '']];
const likeBAfter = collect(likeB);

// slide 2: expand and take out a common factor
const ex = expandBracket(2, 1, 3); // 2(x + 3)
const cf = commonFactor(3, 6); // 3x + 6
const wrongEx = 3; // the mistake: 2(x + 3) = 2x + 3

// slide 3: two brackets
const bp = binomialProduct(2, 3); // (x + 2)(x + 3)
const ft = factorTrinomial(7, 12); // x² + 7x + 12
const sqr = binomialProduct(3, 3); // (x + 3)²

// slide 4: solving
const lin = solveLinear(2, -5, 9); // 2x − 5 = 9
const br = solveBracket(3, -2, 9); // 3(x − 2) = 9

// slide 5: words to equations
const word = solveLinear(1, 8, 15); // x + 8 = 15
const pies = solveLinear(3, 12, 57); // 3p + 12 = 57

// "Check yourself", answers from the same helpers
const c1 = collect([[4, 'a'], [3, 'b'], [-1, 'a'], [1, 'b']]);
const c2 = expandBracket(5, 1, -2);
const c2b = commonFactor(4, 12);
const c3 = solveLinear(3, 4, 19);
const c4 = factorTrinomial(8, 15);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Like terms: same letter, same exponent',
    content: slide(
      <>
        <Rule>You can only add or subtract like terms. Add their coefficients and keep the letter part the same.</Rule>
        <TermTiles
          before={likeBefore}
          after={likeAfter}
          aria={`Algebra tiles. Long tiles are x and short tiles are y. ${formatTerms(likeBefore)}: two x tiles, three y tiles, one negative x tile and two more y tiles. The negative x tile cancels one x tile, leaving ${formatTerms(likeAfter)}.`}
        />
        <Worked
          title={formatTerms(likeBefore)}
          steps={[
            <>Group the like terms: (2x − x) + (3y + 2y).</>,
            <>2x − x = x and 3y + 2y = 5y, so the answer is <strong>{formatTerms(likeAfter)}</strong>.</>,
            <>{formatTerms(likeB)}: 3x + 5x = 8x, and −2 has no x, so it stays: <strong>{formatTerms(likeBAfter)}</strong>.</>,
          ]}
        />
        <Mistake>3x + 2y is not 5xy. The x terms and the y terms are different kinds, so 3x + 2y cannot be simplified.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expand brackets and take out a common factor',
    content: slide(
      <>
        <Rule>To expand, multiply the number outside by every term inside. To factorise, take the HCF outside and divide each term by it.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '3', size: 3 }]}
          left={[{ label: '2', size: 2 }]}
          cells={[[`${ex.a}x`, String(ex.b)]]}
          topLabel="x + 3"
          leftLabel="2"
          aria={`An area model. A rectangle 2 high and x + 3 long is cut into two parts: 2 times x is ${ex.a}x and 2 times 3 is ${ex.b}. So 2(x + 3) = ${ex.a}x + ${ex.b}.`}
        />
        <Worked
          steps={[
            <>2(x + 3) = 2 × x + 2 × 3 = <strong>{ex.a}x + {ex.b}</strong>.</>,
            <>Factorise 3x + 6: the HCF of 3 and 6 is {cf.f}.</>,
            <>3x ÷ {cf.f} = x and 6 ÷ {cf.f} = {cf.q}, so 3x + 6 = <strong>{cf.f}(x + {cf.q})</strong>. Check: {cf.f}(x + {cf.q}) = 3x + 6.</>,
          ]}
        />
        <Mistake>2(x + 3) is not 2x + {wrongEx}. The 2 multiplies the 3 as well: 2 × 3 = {ex.b}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiply two brackets and factorise trinomials',
    content: slide(
      <>
        <Rule>Multiply each term in the first bracket by each term in the second. To factorise x{sq} + bx + c, find two numbers that multiply to c and add to b.</Rule>
        <AreaModel
          top={[{ label: 'x', size: 5 }, { label: '3', size: 3 }]}
          left={[{ label: 'x', size: 5 }, { label: '2', size: 2 }]}
          cells={[['x²', '3x'], ['2x', '6']]}
          topLabel="x + 3"
          leftLabel="x + 2"
          aria={`An area model for (x + 2)(x + 3). The four parts are x squared, 3x, 2x and ${bp.c}. Together: x squared + ${bp.b}x + ${bp.c}.`}
        />
        <Worked
          steps={[
            <>(x + 2)(x + 3) = x{sq} + 3x + 2x + 6 = <strong>x{sq} + {bp.b}x + {bp.c}</strong>.</>,
            <>Factorise x{sq} + 7x + 12: {ft?.p} × {ft?.q} = 12 and {ft?.p} + {ft?.q} = 7.</>,
            <>So x{sq} + 7x + 12 = <strong>(x + {ft?.p})(x + {ft?.q})</strong>.</>,
          ]}
        />
        <Mistake>(x + 3){sq} is not x{sq} + 9. Write (x + 3)(x + 3) and multiply out: x{sq} + {sqr.b}x + {sqr.c}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solve an equation by undoing each step',
    content: slide(
      <>
        <Rule>Do the same to both sides. Undo the operations in reverse order: first undo + or −, then × or ÷.</Rule>
        <OperationChain
          start="9"
          steps={[{ op: '+ 5', value: String(lin.rhs) }, { op: '÷ 2', value: String(lin.x) }]}
          caption="2x − 5 = 9: undo − 5, then undo × 2"
          aria={`Solving 2x − 5 = 9 backwards. Start with 9, add 5 to get ${lin.rhs}, then divide by 2 to get ${lin.x}.`}
        />
        <Worked
          steps={[
            <>2x − 5 = 9. Add 5 to both sides: 2x = {lin.rhs}.</>,
            <>Divide both sides by 2: <strong>x = {lin.x}</strong>. Check: 2 × {lin.x} − 5 = 9 ✓</>,
            <>3(x − 2) = 9. Divide both sides by 3: x − 2 = {br.inner}. Add 2: <strong>x = {br.x}</strong>.</>,
          ]}
        />
        <Mistake>Moving a term without changing its operation. From 2x − 5 = 9, the −5 is undone by adding 5, so 2x = {lin.rhs}, not 2x = 9 − 5 = 4.</Mistake>
      </>,
    ),
  },
  {
    title: 'Turn words into an equation',
    content: slide(
      <>
        <Rule>Let a letter stand for the unknown. Write the sentence as an equation, solve it, and answer in words.</Rule>
        <PartWholeBar
          total={{ label: '15', size: 15 }}
          parts={[{ label: `x = ${word.x}`, size: word.x, unknown: true }, { label: '8', size: 8 }]}
          aria={`A bar model. The whole bar is 15. It is made of the unknown number x and 8, so x = 15 − 8 = ${word.x}.`}
        />
        <Worked
          steps={[
            <>"A number increased by 8 equals 15": x + 8 = 15, so x = 15 − 8 = <strong>{word.x}</strong>.</>,
            <>Sipho buys 3 pies at p rand each and pays R12 delivery. He pays R57: 3p + 12 = 57.</>,
            <>3p = 57 − 12 = {pies.rhs}, so p = {pies.rhs} ÷ 3 = {pies.x}. <strong>One pie costs R{pies.x}.</strong></>,
          ]}
        />
        <Mistake>"Increased by 8" means + 8, not × 8. Writing 8x = 15 gives a fraction that does not fit the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Simplify 4a + 3b − a + b.</li>
            <li>Expand 5(x − 2). Factorise 4x + 12.</li>
            <li>Solve 3x + 4 = 19.</li>
            <li>Factorise x{sq} + 8x + 15.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{formatTerms(c1)}</li>
            <li>{c2.a}x {plus(c2.b)}; {c2b.f}(x + {c2b.q})</li>
            <li>3x = {c3.rhs}, so x = {s(c3.x)}.</li>
            <li>(x + {c4?.p})(x + {c4?.q}), because {c4?.p} × {c4?.q} = 15 and {c4?.p} + {c4?.q} = 8.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Simplify: 3x + 5x - 2',
    options: ['8x - 2', '8x + 3', '6x - 2', '5x + 3'],
    answer: '8x - 2',
    explanation: 'Combine like terms: 3x + 5x = 8x, so the expression is 8x - 2.',
  },
  {
    prompt: 'Solve: x + 7 = 12',
    options: ['x = 5', 'x = 19', 'x = -5', 'x = 12'],
    answer: 'x = 5',
    explanation: 'Subtract 7 from both sides: x = 12 - 7 = 5.',
  },
  {
    prompt: 'Expand: 2(x + 3)',
    options: ['2x + 3', '2x + 6', 'x + 6', '2x + 5'],
    answer: '2x + 6',
    explanation: 'Using the distributive property: 2(x + 3) = 2x + 6.',
  },
  {
    prompt: 'Solve: 2x - 5 = 9',
    options: ['x = 2', 'x = 7', 'x = 14', 'x = 4'],
    answer: 'x = 7',
    explanation: 'Add 5 to both sides: 2x = 14. Divide by 2: x = 7.',
  },
  {
    prompt: 'Factor: 3x + 6',
    options: ['3(x + 2)', '3(x + 3)', 'x + 2', '3x + 2'],
    answer: '3(x + 2)',
    explanation: 'The common factor of 3x and 6 is 3: 3x + 6 = 3(x + 2).',
  },
  {
    prompt: 'Simplify: 2x + 3y - x + 2y',
    options: ['x + 5y', '3x + 5y', 'x + y', '2x + 5y'],
    answer: 'x + 5y',
    explanation: 'Combine like terms: 2x - x = x, and 3y + 2y = 5y, giving x + 5y.',
  },
  {
    prompt: 'A number increased by 8 equals 15. What is the number?',
    options: ['7', '23', '8', '-7'],
    answer: '7',
    explanation: 'Let x be the number: x + 8 = 15, so x = 7.',
  },
  {
    prompt: 'Solve: 3(x - 2) = 9',
    options: ['x = 1', 'x = 3', 'x = 5', 'x = 6'],
    answer: 'x = 5',
    explanation: 'Divide by 3: x - 2 = 3. Add 2: x = 5.',
  },
];

const AlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions and Equations"
    subtitle="Simplifying, factorising and solving equations"
    learnSteps={learnSteps}
    task="gr9-algebraic-expressions-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressions;
