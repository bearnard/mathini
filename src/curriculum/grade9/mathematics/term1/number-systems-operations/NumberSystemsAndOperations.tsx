import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Real Numbers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn to classify numbers as natural, whole, integers, rational, and irrational. Apply the order of operations correctly.
        </p>
      </div>
    ),
  },
  {
    title: 'Operations with Integers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Master addition, subtraction, multiplication, and division using signed-number rules in real-world contexts.
        </p>
      </div>
    ),
  },
  {
    title: 'Working with Fractions and Decimals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Convert between fractions and decimals; solve problems with precision using equivalent representations.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Which number is rational?',
    options: ['√2', '0.25', 'π', 'e'],
    answer: '0.25',
    explanation: '0.25 = 1/4 can be expressed as a fraction of integers.',
  },
  {
    prompt: 'Simplify: -5 + (-3)',
    options: ['-8', '-2', '2', '8'],
    answer: '-8',
    explanation: 'Adding two negatives gives a negative sum: -5 + (-3) = -8.',
  },
  {
    prompt: 'Which operation should you perform first? 2 + 3 × 4',
    options: ['2 + 3', '3 × 4', 'Either order', 'None'],
    answer: '3 × 4',
    explanation: 'Multiplication comes before addition in the order of operations (BODMAS/PEMDAS).',
  },
  {
    prompt: 'Convert 3/8 to a decimal.',
    options: ['0.325', '0.375', '0.385', '0.425'],
    answer: '0.375',
    explanation: '3 ÷ 8 = 0.375.',
  },
  {
    prompt: 'Which is the correct classification for -7?',
    options: ['Natural number', 'Whole number', 'Integer', 'Irrational'],
    answer: 'Integer',
    explanation: 'Integers include negative whole numbers, zero, and positive whole numbers.',
  },
  {
    prompt: 'Solve: (-6) × (-4)',
    options: ['-24', '-10', '24', '10'],
    answer: '24',
    explanation: 'Multiplying two negatives produces a positive result.',
  },
  {
    prompt: 'Which fraction is larger: 2/3 or 5/8?',
    options: ['2/3', '5/8', 'They are equal', 'Cannot compare'],
    answer: '2/3',
    explanation: '2/3 ≈ 0.667 and 5/8 = 0.625, so 2/3 > 5/8.',
  },
  {
    prompt: 'Solve: 12 ÷ (-3)',
    options: ['-4', '4', '-36', '36'],
    answer: '-4',
    explanation: 'A positive divided by a negative is negative: 12 ÷ (-3) = -4.',
  },
];

const NumberSystemsAndOperations = () => (
  <CapsSubjectTopic
    title="Number Systems and Operations"
    subtitle="Real numbers, integers, fractions, and decimals"
    learnSteps={learnSteps}
    task="gr9-number-systems-operations-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumberSystemsAndOperations;
