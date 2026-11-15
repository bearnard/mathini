import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberLine } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { EquationBalance, GroupBars } from '../../../../../components/diagrams/maths/Grade8Pictures';
import { jump, signed } from '../../../../../components/diagrams/maths/grade7Helpers';
import { checkSolution, solveBothSides, solveLinear } from '../../../../../components/diagrams/maths/grade8Helpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers, grade8Helpers) and
// lessonsMaths4.test.ts checks that the rendered slides show them.
const S = signed;
const one = solveLinear(1, -9, 4); // x − 9 = 4
const wrongOne = 4 - 9; // the mistake: subtracting 9 again
const two = solveLinear(2, 0, 18); // 2x = 18
const third = 5 * 3; // x/3 = 5: multiply both sides by 3
const step2 = solveLinear(4, 2, 18); // 4x + 2 = 18
const chk2 = checkSolution(4, 2, 18, step2.x);
const chk4 = checkSolution(3, 1, 13, 4); // is x = 4 a solution of 3x + 1 = 13?
const wrongStep2 = 18 / 4 - 2; // the mistake: dividing before taking away 2
const negJump = jump(5, -7); // 5 − 2x = −7: from 5 to −7 is a jump of −12
const neg = solveLinear(-2, 5, -7);
const chkNeg = checkSolution(-2, 5, -7, neg.x);
const br = { each: 12 / 3, x: 12 / 3 + 1 }; // 3(x − 1) = 12
const brExpand = solveLinear(3, -3, 12);
const both = solveBothSides(2, 7, 1, 15);
const chkBoth = { left: 2 * both.x + 7, right: both.x + 15 };

// "Check yourself", answers computed from the same helpers
const c1 = solveLinear(3, -5, 16);
const c2 = solveLinear(-3, 10, 1);
const c3 = { each: 20 / 4, x: 20 / 4 - 2 }; // 4(x + 2) = 20
const c4 = solveBothSides(5, -3, 2, 9);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'One-step equations: undo the operation',
    content: slide(
      <>
        <Rule>An equation is a balance. To find x, do the inverse operation to both sides: + undoes −, ÷ undoes ×, × undoes ÷.</Rule>
        <EquationBalance
          left={[{ text: 'x', kind: 'x' }, { text: '−9', kind: 'neg' }]}
          right={[{ text: '4', kind: 'num' }]}
          caption="add 9 to both sides"
          aria={`A level balance. The left pan holds x and minus 9, the right pan holds 4. Adding 9 to both sides gives x = ${one.x}.`}
        />
        <Worked
          steps={[
            <>x − 9 = 4: add 9 to both sides, x = 4 + 9 = <strong>{one.x}</strong>.</>,
            <>2x = 18: divide both sides by 2, x = <strong>{two.x}</strong>.</>,
            <>x ÷ 3 = 5: multiply both sides by 3, x = 5 × 3 = <strong>{third}</strong>.</>,
          ]}
        />
        <Mistake>Writing x − 9 = 4 as x = 4 − 9 = {S(wrongOne)}. The 9 is taken away from x, so undo it by adding 9: x = {one.x}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two-step equations and checking',
    content: slide(
      <>
        <Rule>Undo the operations in reverse order: first the + or −, then the × or ÷. Substitute your answer to check it.</Rule>
        <EquationBalance
          left={[{ text: 'x', kind: 'x' }, { text: 'x', kind: 'x' }, { text: 'x', kind: 'x' }, { text: 'x', kind: 'x' }, { text: '2', kind: 'num' }]}
          right={[{ text: '18', kind: 'num' }]}
          caption="take 2 off both sides, then divide by 4"
          aria={`A level balance. The left pan holds four x tiles and 2, the right pan holds 18. Taking 2 off both sides and dividing by 4 gives x = ${step2.x}.`}
        />
        <Worked
          title="4x + 2 = 18"
          steps={[
            <>Subtract 2 from both sides: 4x = {step2.rhs}.</>,
            <>Divide both sides by 4: x = <strong>{step2.x}</strong>.</>,
            <>Check: 4 × {step2.x} + 2 = {chk2.left} ✓. In the same way x = 4 solves 3x + 1 = 13, because 3 × 4 + 1 = {chk4.left}.</>,
          ]}
        />
        <Mistake>Dividing first: 18 ÷ 4 − 2 = {String(wrongStep2).replace('.', ',')}. The 2 was added last, so it must be undone first.</Mistake>
      </>,
    ),
  },
  {
    title: 'When x has a negative coefficient',
    content: slide(
      <>
        <Rule>A negative coefficient stays attached to x. When you divide by it, divide by the negative number, sign and all.</Rule>
        <NumberLine
          min={-9}
          max={7}
          marks={[{ value: 5, label: '5', color: '#818cf8' }, { value: -7, label: S(-7), color: '#34d399' }]}
          jumps={[{ from: 5, to: -7, label: S(negJump), color: '#fb7185' }]}
          aria={`A number line. From 5 to minus 7 is a jump of minus 12, so minus 2x must be minus 12.`}
        />
        <Worked
          title={`5 − 2x = ${S(-7)}`}
          steps={[
            <>Subtract 5 from both sides: −2x = {S(-7)} − 5 = {S(neg.rhs)}.</>,
            <>Divide both sides by −2: x = {S(neg.rhs)} ÷ (−2) = <strong>{neg.x}</strong>.</>,
            <>Check: 5 − 2 × {neg.x} = {S(chkNeg.left)} ✓.</>,
          ]}
        />
        <Mistake>Dropping the minus sign: −2x = {S(neg.rhs)} does not give x = {S(-neg.x)}. A negative divided by a negative is positive, so x = {neg.x}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equations with brackets',
    content: slide(
      <>
        <Rule>Either divide both sides by the number outside the brackets, or expand the brackets first. Both give the same answer.</Rule>
        <GroupBars groups={3} label="x − 1" total={12} />
        <Worked
          title="3(x − 1) = 12"
          steps={[
            <>Divide both sides by 3: x − 1 = {br.each}, so x = <strong>{br.x}</strong>.</>,
            <>Or expand: 3x − 3 = 12, so 3x = {brExpand.rhs} and x = {brExpand.x}.</>,
            <>Check: 3({br.x} − 1) = 3 × {br.each} = 12 ✓.</>,
          ]}
        />
        <Mistake>Expanding 3(x − 1) as 3x − 1. The 3 multiplies the 1 as well: 3(x − 1) = 3x − 3.</Mistake>
      </>,
    ),
  },
  {
    title: 'The unknown on both sides',
    content: slide(
      <>
        <Rule>Take the smaller x-term away from both sides, so that x appears on one side only. Then solve as before.</Rule>
        <EquationBalance
          left={[{ text: 'x', kind: 'x', struck: true }, { text: 'x', kind: 'x' }, { text: '7', kind: 'num' }]}
          right={[{ text: 'x', kind: 'x', struck: true }, { text: '15', kind: 'num' }]}
          caption="take one x off both sides"
          aria={`A level balance. The left pan holds two x tiles and 7, the right pan holds one x tile and 15. One x tile is crossed out on each side, leaving x and 7 against 15, so x = ${both.x}.`}
        />
        <Worked
          title="2x + 7 = x + 15"
          steps={[
            <>Subtract x from both sides: x + 7 = 15.</>,
            <>Subtract 7 from both sides: x = <strong>{both.x}</strong>.</>,
            <>Check: left 2 × {both.x} + 7 = {chkBoth.left}, right {both.x} + 15 = {chkBoth.right} ✓.</>,
          ]}
        />
        <Mistake>Moving x across without changing the operation, for example 2x + x + 7 = 15. Subtracting x from both sides gives 2x − x = x on the left.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Solve 3x − 5 = 16.</li>
            <li>Solve 10 − 3x = 1.</li>
            <li>Solve 4(x + 2) = 20.</li>
            <li>Solve 5x − 3 = 2x + 9 and check your answer.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>3x = {c1.rhs}, so x = {c1.x}.</li>
            <li>−3x = {S(c2.rhs)}, so x = {c2.x}.</li>
            <li>x + 2 = {c3.each}, so x = {c3.x}.</li>
            <li>{c4.coef}x − 3 = 9, {c4.coef}x = {c4.rhs}, x = {c4.x}. Check: 5 × {c4.x} − 3 = {5 * c4.x - 3} and 2 × {c4.x} + 9 = {2 * c4.x + 9} ✓.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Solve x - 9 = 4.',
    options: ['13', '5', '-13', '36'],
    answer: '13',
    explanation: 'Add 9 to both sides.',
  },
  {
    prompt: 'Solve 2x = 18.',
    options: ['9', '16', '8', '36'],
    answer: '9',
    explanation: 'Divide both sides by 2.',
  },
  {
    prompt: 'Solve x/3 = 5.',
    options: ['15', '8', '2', '5/3'],
    answer: '15',
    explanation: 'Multiply both sides by 3.',
  },
  {
    prompt: 'Solve 4x + 2 = 18.',
    options: ['4', '5', '3', '16'],
    answer: '4',
    explanation: 'Subtract 2, then divide by 4.',
  },
  {
    prompt: 'Solve 5 - 2x = -7.',
    options: ['6', '-6', '1', '12'],
    answer: '6',
    explanation: 'Subtract 5: -2x = -12, then divide by -2.',
  },
  {
    prompt: 'Solve 3(x - 1) = 12.',
    options: ['5', '4', '3', '15'],
    answer: '5',
    explanation: 'Divide by 3 to get x - 1 = 4, then add 1.',
  },
  {
    prompt: 'Solve 2x + 7 = x + 15.',
    options: ['8', '22', '7', '15'],
    answer: '8',
    explanation: 'Subtract x from both sides and then subtract 7.',
  },
  {
    prompt: 'Is x = 4 a solution to 3x + 1 = 13?',
    options: ['Yes', 'No', 'Only for x = -4', 'Cannot be determined'],
    answer: 'Yes',
    explanation: 'Substitute x = 4: 3(4) + 1 = 13.',
  },
];

const AlgebraicEquations = () => (
  <CapsSubjectTopic
    title="Algebraic Equations"
    subtitle="Balancing equations, inverse operations, and substitution checks"
    learnSteps={learnSteps}
    task="gr8-algebraic-equations-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicEquations;
