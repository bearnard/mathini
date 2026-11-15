import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LinePlot, SumBars, UndoFlow } from '../../../../../components/diagrams/maths/Grade8Graphs';
import { solve } from '../../../../../components/diagrams/maths/grade8NumberHelpers';

// Every number in the slides below comes from these tested helpers (grade8NumberHelpers) and
// lessonsMaths6.test.ts checks that the rendered slides show them.
const m = (n: number) => (n < 0 ? `−${Math.abs(n)}` : String(n));

const one = solve(1, -6, 11); // x − 6 = 11
const two = solve(4, 0, 28); // 4x = 28
const div = 3 * 5; // x ÷ 5 = 3: multiply both sides by 5
const wrongDiv = 3 / 5; // the mistake: dividing again
const step = solve(3, 5, 26); // 3x + 5 = 26
const wrongStep = 26 / 3 - 5; // the mistake: dividing first
const br = { half: 16 / 2, x: 16 / 2 - 3 }; // 2(x + 3) = 16
const neg = solve(-3, 10, -8); // 10 − 3x = −8
const both = solve(3 - 1, 4, 12); // 3x + 4 = x + 12 → 2x + 4 = 12
const meet = 3 * both.x + 4;
const ages = solve(2, 3, 27); // x + x + 3 = 27

// "Check yourself", answers computed from the same helpers
const c1 = 6 * 4; // x ÷ 4 = 6
const c2 = solve(-2, 7, -5);
const c3 = { third: 15 / 3, x: 15 / 3 + 2 }; // 3(x − 2) = 15
const c4 = { left: 4 * 3 - 1, right: 2 * 3 + 5 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Inverse operations: say what you do to both sides',
    content: slide(
      <>
        <Rule>Solve by undoing what was done to x, doing the same to both sides. Write the operation next to each step so every change can be checked.</Rule>
        <UndoFlow ops={[{ op: '÷', n: 5 }]} result={3} />
        <Worked
          steps={[
            <>x − 6 = 11. Add 6 to both sides: x = 11 + 6 = <strong>{one.x}</strong>.</>,
            <>4x = 28. Divide both sides by 4: x = <strong>{two.x}</strong>.</>,
            <>x ÷ 5 = 3. Multiply both sides by 5: x = 3 × 5 = <strong>{div}</strong>.</>,
          ]}
        />
        <Mistake>Using the same operation instead of its inverse: x ÷ 5 = 3 does not give x = 3 ÷ 5 = {String(wrongDiv).replace('.', ',')}. Dividing is undone by multiplying.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two steps: undo in reverse order, then check',
    content: slide(
      <>
        <Rule>x was multiplied first and the number added last, so undo the + or − first, then the × or ÷. Substitute the answer to check.</Rule>
        <UndoFlow ops={[{ op: '×', n: 3 }, { op: '+', n: 5 }]} result={26} />
        <Worked
          title="3x + 5 = 26"
          steps={[
            <>Subtract 5 from both sides: 3x = {step.rhs}.</>,
            <>Divide both sides by 3: x = <strong>{step.x}</strong>.</>,
            <>Check: 3 × {step.x} + 5 = {3 * step.x + 5} ✓. In the same way, x = 4 solves 3x + 1 = 13 because 3 × 4 + 1 = {3 * 4 + 1}.</>,
          ]}
        />
        <Mistake>Dividing first: 26 ÷ 3 − 5 ≈ {String(Math.round(wrongStep * 100) / 100).replace('.', ',')}, which does not check. The + 5 was done last, so undo it first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Brackets and negative terms',
    content: slide(
      <>
        <Rule>With brackets, divide by the number outside first (or expand). With a negative x-term such as −3x, divide both sides by that negative number: a negative divided by a negative is positive.</Rule>
        <UndoFlow ops={[{ op: '+', n: 3 }, { op: '×', n: 2 }]} result={16} />
        <Worked
          steps={[
            <>2(x + 3) = 16. Divide both sides by 2: x + 3 = {br.half}. Subtract 3: x = <strong>{br.x}</strong>.</>,
            <>10 − 3x = {m(-8)}. Subtract 10 from both sides: −3x = {m(neg.rhs)}.</>,
            <>Divide both sides by −3: x = <strong>{neg.x}</strong>. Check: 10 − 3 × {neg.x} = {m(10 - 3 * neg.x)} ✓.</>,
          ]}
        />
        <Mistake>Carrying the minus sign into the answer: −3x = {m(neg.rhs)} gives x = {neg.x}, not {m(-neg.x)}. {m(neg.rhs)} ÷ −3 is positive, and substituting x = {neg.x} checks it.</Mistake>
      </>,
    ),
  },
  {
    title: 'The unknown on both sides',
    content: slide(
      <>
        <Rule>Subtract the smaller x-term from both sides so x is on one side only. The solution is the x-value where both sides are equal.</Rule>
        <LinePlot
          lines={[{ m: 3, c: 4, color: '#818cf8', label: 'y = 3x + 4' }, { m: 1, c: 12, color: '#34d399', label: 'y = x + 12' }]}
          xMax={6}
          yMax={24}
          xStep={1}
          yStep={6}
          mark={{ x: both.x, y: meet, text: `(${both.x}; ${meet})` }}
          aria={`Two straight lines, y = 3x + 4 and y = x + 12, drawn from x = 0 to 6. They cross at x = ${both.x}, where both sides equal ${meet}.`}
        />
        <Worked
          title="3x + 4 = x + 12"
          steps={[
            <>Subtract x from both sides: 2x + 4 = 12.</>,
            <>Subtract 4: 2x = {both.rhs}. Divide by 2: x = <strong>{both.x}</strong>.</>,
            <>Check: 3 × {both.x} + 4 = {meet} and {both.x} + 12 = {both.x + 12} ✓. The graphs cross at x = {both.x}.</>,
          ]}
        />
        <Mistake>Adding x to both sides “to move it”: 4x + 4 = 2x + 12 still has x on both sides. Subtract the x-term you want to remove.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing an equation from words',
    content: slide(
      <>
        <Rule>Let x be the unknown you are asked for, write every other amount in terms of x, form the equation, solve it, and answer in words.</Rule>
        <SumBars names={['Lerato', 'Thabo']} extra={3} total={27} />
        <Worked
          title="Thabo is 3 years older than Lerato. Their ages add up to 27. How old is each?"
          steps={[
            <>Let Lerato be x years old; Thabo is x + 3.</>,
            <>x + x + 3 = 27, so 2x + 3 = 27 and 2x = {ages.rhs}, so x = {ages.x}.</>,
            <>Lerato is <strong>{ages.x}</strong> and Thabo is <strong>{ages.x + 3}</strong>. Check: {ages.x} + {ages.x + 3} = {ages.x + ages.x + 3} ✓.</>,
          ]}
        />
        <Mistake>Stopping at x = {ages.x}. The question asks for both ages, so finish with Thabo: {ages.x} + 3 = {ages.x + 3}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Solve x ÷ 4 = 6.</>,
          <>Solve 7 − 2x = {m(-5)}.</>,
          <>Solve 3(x − 2) = 15.</>,
          <>Is x = 3 a solution of 4x − 1 = 2x + 5?</>,
        ]}
        answers={[
          <>Multiply both sides by 4: x = {c1}.</>,
          <>−2x = {m(c2.rhs)}, so x = {c2.x}.</>,
          <>x − 2 = {c3.third}, so x = {c3.x}.</>,
          <>Yes: 4 × 3 − 1 = {c4.left} and 2 × 3 + 5 = {c4.right}.</>,
        ]}
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
    subtitle="Balancing steps, inverse operations, and checking solutions"
    learnSteps={learnSteps}
    task="gr8-algebraic-equations-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicEquations;
