import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use exponent rules and powers',
    image: {
      src: '/curriculum/grade7/math/term1/exponents/diagram.webp',
      alt: 'Grade 7 learners simplifying powers, squares, cubes, and exponent expressions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exponents show repeated multiplication. Learners use square and cube numbers and apply basic exponent laws to
          simplify expressions.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 2⁵?',
    options: ['32', '16', '25', '64'],
    answer: '32',
    explanation: '2 × 2 × 2 × 2 × 2 = 32.',
  },
  {
    prompt: 'Simplify 5² × 5³.',
    options: ['5⁵', '5⁶', '10⁵', '25⁶'],
    answer: '5⁵',
    explanation: 'When bases are the same, add exponents: 2 + 3 = 5.',
  },
  {
    prompt: 'What is 10⁰?',
    options: ['1', '0', '10', '100'],
    answer: '1',
    explanation: 'Any non-zero number to the power 0 equals 1.',
  },
  {
    prompt: 'Simplify 3⁴ ÷ 3².',
    options: ['3²', '3⁶', '1', '9³'],
    answer: '3²',
    explanation: 'When dividing same bases, subtract exponents: 4 − 2 = 2.',
  },
  {
    prompt: 'Which number is a perfect cube?',
    options: ['64', '48', '50', '72'],
    answer: '64',
    explanation: '64 = 4³.',
  },
  {
    prompt: 'What is 7²?',
    options: ['49', '14', '21', '64'],
    answer: '49',
    explanation: '7 × 7 = 49.',
  },
  {
    prompt: 'Which expression is equivalent to 2³ × 2?',
    options: ['2⁴', '2⁶', '4³', '2²'],
    answer: '2⁴',
    explanation: '2 = 2¹, so 2³ × 2¹ = 2⁴.',
  },
  {
    prompt: 'Simplify (4²)³.',
    options: ['4⁶', '4⁵', '16⁵', '12⁶'],
    answer: '4⁶',
    explanation: 'Power of a power: multiply exponents, 2 × 3 = 6.',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Powers, squares, cubes, and basic exponent laws"
    learnSteps={learnSteps}
    task="gr7-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
