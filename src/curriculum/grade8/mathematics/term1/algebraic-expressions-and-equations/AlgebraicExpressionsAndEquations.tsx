import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowRows } from '../../../../../components/diagrams/maths/PatternDiagrams';
import { EquationBalance, ExpandArea, LikeTermTiles, WordBar } from '../../../../../components/diagrams/maths/Grade8Pictures';
import { checkSolution, collect, expandBracket, linearText, linearValue, solveLinear } from '../../../../../components/diagrams/maths/grade8Helpers';

// Every number in the slides below comes from these tested helpers (grade8Helpers) and
// lessonsMaths4.test.ts checks that the rendered slides show them.
const like1 = collect([3, 2]);
const like2 = collect([6, 1]);
const sub = linearValue(2, 5, 3);
const exp = expandBracket(4, 1, 2);
const eq1 = solveLinear(1, 7, 15);
const eq2 = solveLinear(3, 0, 21);
const eq3 = solveLinear(2, -4, 10);
const chk3 = checkSolution(2, -4, 10, eq3.x);
const wrongEq3 = solveLinear(2, 4, 10); // the mistake: taking 4 away instead of adding it

// "Check yourself", answers computed from the same helpers
const c1 = { x: collect([5, -2]), c: collect([3, 4]) };
const c2 = expandBracket(3, 1, -4);
const c3 = linearValue(3, -2, 4);
const c4 = solveLinear(5, 3, 23);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Writing words as algebra',
    content: slide(
      <>
        <Rule>A letter stands for an unknown number. Turn each phrase into an operation: increased by is +, less than or decreased by is −, times or product is ×.</Rule>
        <WordBar unknown="n" known={9} total="n + 9" />
        <Worked
          steps={[
            <>A number n increased by 9: <strong>n + 9</strong>.</>,
            <>Three times a number x: <strong>3x</strong> (we leave out the × sign).</>,
            <>5 less than a number y: start with y and take 5 away, <strong>y − 5</strong>.</>,
          ]}
        />
        <Mistake>Writing 5 less than y as 5 − y. You start with y and take 5 away, so it is y − 5. Test with y = 12: 12 − 5 = 7 is 5 less than 12.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collecting like terms',
    content: slide(
      <>
        <Rule>Like terms have exactly the same letter part. Add or subtract their coefficients; constants are collected separately.</Rule>
        <LikeTermTiles terms={[{ n: 6, letter: 'y' }, { n: -2 }, { n: 1, letter: 'y' }]} />
        <Worked
          steps={[
            <>3x + 2x: 3 + 2 = {like1}, so 3x + 2x = <strong>{like1}x</strong>.</>,
            <>6y − 2 + y: the y-terms are 6y and y (y means 1y).</>,
            <>6 + 1 = {like2}, so 6y − 2 + y = <strong>{linearText(like2, -2, 'y')}</strong>. The −2 is not a like term, so it stays.</>,
          ]}
        />
        <Mistake>Writing 3x + 2x = 5x². Adding like terms counts how many x&apos;s there are; it does not multiply x by x.</Mistake>
      </>,
    ),
  },
  {
    title: 'Substituting a value',
    content: slide(
      <>
        <Rule>To substitute, replace the letter with its value in brackets, then follow the order of operations: × before +.</Rule>
        <FlowRows rules={[{ op: '×', n: 2 }, { op: '+', n: 5 }]} inputs={[3]} />
        <Worked
          title="2x + 5 when x = 3"
          steps={[
            <>Replace x: 2 × (3) + 5.</>,
            <>Multiply first: 2 × 3 = 6.</>,
            <>Then add: 6 + 5 = <strong>{sub}</strong>.</>,
          ]}
        />
        <Mistake>Reading 2x with x = 3 as 23. 2x means 2 × x, so it is 2 × 3 = 6.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expanding brackets: the distributive law',
    content: slide(
      <>
        <Rule>The number outside the brackets multiplies every term inside: a(b + c) = ab + ac.</Rule>
        <ExpandArea k={4} letter="a" b={2} />
        <Worked
          title="4(a + 2)"
          steps={[
            <>4 × a = {exp.a}a.</>,
            <>4 × 2 = {exp.b}.</>,
            <>So 4(a + 2) = <strong>{linearText(exp.a, exp.b, 'a')}</strong>.</>,
          ]}
        />
        <Mistake>Multiplying only the first term: 4(a + 2) is not 4a + 2. The rectangle shows that the 2 part is also 4 high, so it adds {exp.b}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solving an equation with inverse operations',
    content: slide(
      <>
        <Rule>Keep the equation balanced: do the same to both sides. Undo + with −, − with +, × with ÷. Then check by substituting.</Rule>
        <EquationBalance
          left={[{ text: 'x', kind: 'x' }, { text: 'x', kind: 'x' }, { text: '−4', kind: 'neg' }]}
          right={[{ text: '10', kind: 'num' }]}
          caption="add 4 to both sides, then divide by 2"
          aria={`A level balance. The left pan holds two x tiles and minus 4. The right pan holds 10. Adding 4 to both sides and dividing by 2 gives x = ${eq3.x}.`}
        />
        <Worked
          steps={[
            <>x + 7 = 15: subtract 7 from both sides, x = <strong>{eq1.x}</strong>. 3x = 21: divide both sides by 3, x = <strong>{eq2.x}</strong>.</>,
            <>2x − 4 = 10: add 4 to both sides, 2x = {eq3.rhs}.</>,
            <>Divide both sides by 2: x = <strong>{eq3.x}</strong>. Check: 2 × {eq3.x} − 4 = {chk3.left} ✓.</>,
          ]}
        />
        <Mistake>
          Subtracting 4 in 2x − 4 = 10. That gives 2x = {wrongEq3.rhs} and x = {wrongEq3.x}, and the check fails: 2 × {wrongEq3.x} − 4 = {checkSolution(2, -4, 10, wrongEq3.x).left}, not 10.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Simplify 5x + 3 − 2x + 4.</li>
            <li>Expand 3(m − 4).</li>
            <li>Find the value of 3k − 2 when k = 4.</li>
            <li>Solve 5x + 3 = 23 and check your answer.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{linearText(c1.x, c1.c, 'x')}.</li>
            <li>{linearText(c2.a, c2.b, 'm')}.</li>
            <li>3 × 4 − 2 = {c3}.</li>
            <li>5x = {c4.rhs}, so x = {c4.x}. Check: 5 × {c4.x} + 3 = {linearValue(5, 3, c4.x)} ✓.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Simplify 3x + 2x.',
    options: ['5x', '6x', '5x²', 'x'],
    answer: '5x',
    explanation: 'Like terms add: 3x + 2x = 5x.',
  },
  {
    prompt: 'Expand 4(a + 2).',
    options: ['4a + 8', '4a + 2', 'a + 8', '8a + 2'],
    answer: '4a + 8',
    explanation: 'Multiply 4 by each term in the bracket.',
  },
  {
    prompt: 'If x = 3, what is 2x + 5?',
    options: ['11', '10', '8', '13'],
    answer: '11',
    explanation: 'Substitute x = 3: 2(3) + 5 = 11.',
  },
  {
    prompt: 'Solve x + 7 = 15.',
    options: ['8', '22', '7', '6'],
    answer: '8',
    explanation: 'Subtract 7 from both sides.',
  },
  {
    prompt: 'Solve 3x = 21.',
    options: ['7', '18', '24', '6'],
    answer: '7',
    explanation: 'Divide both sides by 3.',
  },
  {
    prompt: 'Solve 2x - 4 = 10.',
    options: ['7', '3', '14', '6'],
    answer: '7',
    explanation: 'Add 4 then divide by 2.',
  },
  {
    prompt: 'Simplify 6y - 2 + y.',
    options: ['7y - 2', '7y + 2', '6y - 2y', '12y - 2'],
    answer: '7y - 2',
    explanation: 'Combine like terms 6y and y.',
  },
  {
    prompt: 'Which expression means “a number n increased by 9”?',
    options: ['n + 9', '9 - n', '9n', 'n - 9'],
    answer: 'n + 9',
    explanation: '“Increased by” means add.',
  },
];

const AlgebraicExpressionsAndEquations = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions and Equations"
    subtitle="Like terms, substitution, expansion, and linear equation solving"
    learnSteps={learnSteps}
    task="gr8-algebraic-expressions-and-equations-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressionsAndEquations;
