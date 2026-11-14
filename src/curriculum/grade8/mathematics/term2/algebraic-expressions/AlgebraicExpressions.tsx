import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Manipulate algebraic expressions accurately',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Expression work builds fluency in simplifying, expanding, and factorising. Learners organise like terms and
          explain each symbolic step to avoid sign and bracket errors.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Simplify 7a - 3a.',
    options: ['4a', '10a', '4', 'a'],
    answer: '4a',
    explanation: 'Subtract coefficients of like terms: 7 - 3 = 4.',
  },
  {
    prompt: 'Expand 5(x - 2).',
    options: ['5x - 10', '5x - 2', 'x - 10', '10x - 2'],
    answer: '5x - 10',
    explanation: 'Distribute 5 to both terms in the bracket.',
  },
  {
    prompt: 'Factorise 6x + 12.',
    options: ['6(x + 2)', '3(2x + 4)', '12(x + 1)', '6(x + 12)'],
    answer: '6(x + 2)',
    explanation: 'The greatest common factor is 6.',
  },
  {
    prompt: 'If p = 4, what is 3p + 2?',
    options: ['14', '10', '18', '12'],
    answer: '14',
    explanation: 'Substitute p = 4: 3(4) + 2 = 14.',
  },
  {
    prompt: 'Simplify 2m + 5 + 3m - 1.',
    options: ['5m + 4', '5m + 6', '6m + 4', '5m - 4'],
    answer: '5m + 4',
    explanation: 'Combine like terms and constants separately.',
  },
  {
    prompt: 'Which expression means “twice a number n minus 7”?',
    options: ['2n - 7', 'n - 7', '2(n - 7)', '7 - 2n'],
    answer: '2n - 7',
    explanation: 'Twice a number is 2n, then subtract 7.',
  },
  {
    prompt: 'Simplify 4(2k + 1) - 3k.',
    options: ['5k + 4', '8k + 1', '5k + 1', '8k - 3k + 1'],
    answer: '5k + 4',
    explanation: 'Expand first: 8k + 4, then subtract 3k.',
  },
  {
    prompt: 'Which term is like 8x?',
    options: ['-3x', '8y', 'x²', '8'],
    answer: '-3x',
    explanation: 'Like terms must have the same variable and power.',
  },
];

const AlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions"
    subtitle="Expanding, factorising, and simplifying symbolic forms"
    learnSteps={learnSteps}
    task="gr8-algebraic-expressions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressions;
