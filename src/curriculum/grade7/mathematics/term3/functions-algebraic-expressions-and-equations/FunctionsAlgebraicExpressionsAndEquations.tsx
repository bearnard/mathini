import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Translate between words, expressions, and equations',
    image: {
      src: '/curriculum/grade7/math/term3/functions-algebraic-expressions-and-equations/diagram.webp',
      alt: 'Grade 7 learners simplifying expressions and solving one-step equations from function tables',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Algebra uses symbols to represent numbers. Learners simplify expressions, substitute values, and solve simple
          equations using balanced steps.
        </p>
      </div>
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
