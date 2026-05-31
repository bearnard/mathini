import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Laws of Exponents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn the product rule, quotient rule, and power rule for exponents to simplify expressions.
        </p>
      </div>
    ),
  },
  {
    title: 'Special Cases',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understand zero exponents and negative exponents to rewrite and evaluate exponential forms.
        </p>
      </div>
    ),
  },
  {
    title: 'Simplifying Expressions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Apply laws of exponents to multi-step calculations and compare equivalent exponential representations.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Simplify: 2³ × 2²',
    options: ['2⁵', '2⁶', '2¹', '4⁵'],
    answer: '2⁵',
    explanation: 'Using the product rule: 2³ × 2² = 2^(3+2) = 2⁵ = 32.',
  },
  {
    prompt: 'What does 5⁰ equal?',
    options: ['0', '1', '5', 'Undefined'],
    answer: '1',
    explanation: 'Any non-zero number raised to the power of 0 equals 1.',
  },
  {
    prompt: 'Simplify: x⁵/x²',
    options: ['x³', 'x⁷', 'x²·⁵', '1/x³'],
    answer: 'x³',
    explanation: 'Using the quotient rule: x⁵/x² = x^(5-2) = x³.',
  },
  {
    prompt: 'What does 3⁻² equal?',
    options: ['-9', '-1/9', '1/9', '9'],
    answer: '1/9',
    explanation: '3⁻² = 1/(3²) = 1/9.',
  },
  {
    prompt: 'Simplify: (2³)²',
    options: ['2⁵', '2⁶', '2¹', '32'],
    answer: '2⁶',
    explanation: 'Using the power rule: (2³)² = 2^(3×2) = 2⁶ = 64.',
  },
  {
    prompt: 'Express 10⁻³ as a decimal.',
    options: ['1000', '100', '0.001', '0.01'],
    answer: '0.001',
    explanation: '10⁻³ = 1/10³ = 1/1000 = 0.001.',
  },
  {
    prompt: 'Simplify: (a²b³)²',
    options: ['a⁴b⁵', 'a⁴b⁶', 'a²b⁶', 'a⁶b⁹'],
    answer: 'a⁴b⁶',
    explanation: '(a²b³)² = a^(2×2) × b^(3×2) = a⁴b⁶.',
  },
  {
    prompt: 'Which is equivalent to 2⁴?',
    options: ['4²', '2 × 4', '16', 'All of the above'],
    answer: 'All of the above',
    explanation: '2⁴ = 16 = 4², confirming the equivalence.',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Laws of exponents and exponential forms"
    learnSteps={learnSteps}
    task="gr9-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
