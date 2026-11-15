import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BalanceScale } from '../../../../../components/diagrams/maths/PatternDiagrams';
import { AlgebraTiles, LessThanBar } from '../../../../../components/diagrams/maths/Grade7Functions';
import { collectLike, evalLinear, evaluate, solveLinear, termsText, type Term } from '../../../../../components/diagrams/maths/grade7Helpers2';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons2.test.ts).
const sub = { a: evaluate([{ coef: 2, letter: 'a' }, { coef: 3, letter: '' }], 4), wrong: 2 * (4 + 3), y: evalLinear(3, 0, 4) };
const like1: Term[] = [{ coef: 3, letter: 'x' }, { coef: 2, letter: 'x' }];
const like2: Term[] = [{ coef: 4, letter: 'y' }, { coef: 3, letter: '' }, { coef: -2, letter: 'y' }];
const add = solveLinear(1, 7, 15);
const times = solveLinear(3, 0, 21);
const check = {
  b: evaluate([{ coef: 3, letter: 'b' }, { coef: -2, letter: '' }], 5),
  simp: termsText(collectLike([{ coef: 5, letter: 'a' }, { coef: 2, letter: 'b' }, { coef: -1, letter: 'a' }])),
  eq: solveLinear(2, 5, 17),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Words into symbols',
    content: slide(
      <>
        <Rule>A letter stands for an unknown number. “More than” means add, “less than” means subtract from the number, “times” or “twice” means multiply.</Rule>
        <LessThanBar letter="n" less={5} />
        <Worked
          title="Write as expressions"
          steps={[
            <>“Five less than n”: start with n and take 5 away: <strong>n − 5</strong>.</>,
            <>“Three more than twice a number x”: twice x is 2x, then add 3: <strong>2x + 3</strong>.</>,
          ]}
        />
        <Mistake>Writing 5 − n for “five less than n”. The order matters: you start with n and take 5 away, so n − 5.</Mistake>
      </>,
    ),
  },
  {
    title: 'Substitution: replace the letter',
    content: slide(
      <>
        <Rule>To evaluate an expression, replace the letter with its value. Multiply before you add or subtract.</Rule>
        <AlgebraTiles terms={[{ coef: 2, letter: 'a' }, { coef: 3, letter: '' }]} value={4} />
        <Worked
          title="Evaluate 2a + 3 when a = 4"
          steps={[
            <>Replace a: 2 × 4 + 3.</>,
            <>Multiply first: 2 × 4 = 8.</>,
            <>Then add: 8 + 3 = <strong>{sub.a}</strong>.</>,
            <>In the same way, if y = 3x and x = 4, then y = 3 × 4 = <strong>{sub.y}</strong>.</>,
          ]}
        />
        <Mistake>Adding first: 2 × (4 + 3) = {sub.wrong}. In 2a + 3 only the a is multiplied by 2, so multiply first and then add 3.</Mistake>
      </>,
    ),
  },
  {
    title: 'Like terms: collect and simplify',
    content: slide(
      <>
        <Rule>Like terms have the same letter. Add or subtract their numbers (coefficients) and keep the letter. Numbers without a letter stay apart.</Rule>
        <AlgebraTiles terms={like2} />
        <Worked
          title="Simplify 3x + 2x and 4y + 3 − 2y"
          steps={[
            <>3x + 2x: 3 + 2 = 5, so <strong>{termsText(collectLike(like1))}</strong>.</>,
            <>4y − 2y = 2y. The 3 has no letter, so it stays: <strong>{termsText(collectLike(like2))}</strong>.</>,
          ]}
        />
        <Mistake>Joining unlike terms: 2y + 3 is not 5y. A y-bar and a unit square are different things, so they cannot be added into one term.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equations: keep the balance',
    content: slide(
      <>
        <Rule>An equation says both sides have equal value, like a balanced scale. Do the same to both sides to get the letter alone, then check.</Rule>
        <BalanceScale left={[add.x, 7]} right={[15]} unknown={0} />
        <Worked
          title="Solve x + 7 = 15, and 3x = 21"
          steps={[
            <>Take 7 from both sides: x = 15 − 7 = <strong>{add.x}</strong>. Check: {add.x} + 7 = 15 ✓</>,
            <>3x means 3 × x. Divide both sides by 3: x = 21 ÷ 3 = <strong>{times.x}</strong>. Check: 3 × {times.x} = 21 ✓</>,
          ]}
        />
        <Mistake>Changing one side only. If you take 7 from the left but not the right, the scale tips and the answer is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Write “seven more than k” as an expression.</>,
          <>Evaluate 3b − 2 when b = 5.</>,
          <>Simplify 5a + 2b − a.</>,
          <>Solve 2x + 5 = 17.</>,
        ]}
        answers={[
          <>k + 7.</>,
          <>3 × 5 = 15, then 15 − 2 = {check.b}.</>,
          <>5a − a = 4a, so {check.simp}.</>,
          <>17 − 5 = {check.eq.afterB}, then {check.eq.afterB} ÷ 2 = {check.eq.x}. Check: 2 × {check.eq.x} + 5 = 17 ✓</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Simplify 3x + 2x.',
    options: ['5x', '6x', 'x', '5x²'],
    answer: '5x',
    explanation: 'Like terms can be combined: 3x + 2x = 5x.',
  },
  {
    prompt: 'Evaluate 2a + 3 when a = 4.',
    options: ['11', '8', '14', '7'],
    answer: '11',
    explanation: 'Substitute a = 4: 2(4) + 3 = 11.',
  },
  {
    prompt: 'Solve x + 7 = 15.',
    options: ['8', '22', '7', '15'],
    answer: '8',
    explanation: 'Subtract 7 from both sides.',
  },
  {
    prompt: 'Solve 3x = 21.',
    options: ['7', '6', '24', '18'],
    answer: '7',
    explanation: 'Divide both sides by 3.',
  },
  {
    prompt: 'Which expression means “five less than n”?',
    options: ['n − 5', '5 − n', 'n + 5', '5n'],
    answer: 'n − 5',
    explanation: '“Less than” means subtract from n.',
  },
  {
    prompt: 'Simplify 4y + 3 − 2y.',
    options: ['2y + 3', '2y', '6y + 3', '4y + 1'],
    answer: '2y + 3',
    explanation: 'Combine like terms: 4y − 2y = 2y.',
  },
  {
    prompt: 'If y = 2x and x = 5, then y =',
    options: ['10', '7', '25', '3'],
    answer: '10',
    explanation: 'Substitute x = 5: y = 2(5).',
  },
  {
    prompt: 'An equation is balanced when...',
    options: [
      'both sides have equal value',
      'there are no variables',
      'all numbers are positive',
      'the left side is larger',
    ],
    answer: 'both sides have equal value',
    explanation: 'Equality means the two sides represent the same value.',
  },
];

const FunctionsAlgebraicExpressionsAndEquations = () => (
  <CapsSubjectTopic
    title="Functions, Algebraic Expressions and Equations"
    subtitle="Symbolic rules, simplifying like terms, and solving equations"
    learnSteps={learnSteps}
    task="gr7-functions-algebraic-expressions-and-equations-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsAlgebraicExpressionsAndEquations;
