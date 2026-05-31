import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use exponent laws accurately',
    image: {
      src: '/curriculum/grade8/math/term1/exponents/diagram.webp',
      alt: 'Grade 8 learners simplifying powers and exponent expressions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exponents provide a compact way to represent repeated multiplication. Learners evaluate powers and use
          exponent laws to simplify expressions in a clear step-by-step way.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 2³?',
    options: ['8', '6', '9', '12'],
    answer: '8',
    explanation: '2³ means 2 × 2 × 2 = 8.',
  },
  {
    prompt: 'What is 5²?',
    options: ['25', '10', '15', '20'],
    answer: '25',
    explanation: '5² means 5 × 5 = 25.',
  },
  {
    prompt: 'Simplify 3² × 3⁴.',
    options: ['3⁶', '3⁸', '9⁶', '3²'],
    answer: '3⁶',
    explanation: 'When bases are equal, add exponents: 2 + 4 = 6.',
  },
  {
    prompt: 'What is 10⁰?',
    options: ['1', '0', '10', '100'],
    answer: '1',
    explanation: 'Any non-zero number to the power zero equals 1.',
  },
  {
    prompt: 'Simplify (2³)².',
    options: ['2⁶', '2⁵', '4⁵', '2⁹'],
    answer: '2⁶',
    explanation: 'Power of a power means multiply exponents: 3 × 2 = 6.',
  },
  {
    prompt: 'What is 4³?',
    options: ['64', '16', '12', '81'],
    answer: '64',
    explanation: '4 × 4 × 4 = 64.',
  },
  {
    prompt: 'Simplify 2⁵ ÷ 2².',
    options: ['2³', '2⁷', '4³', '2²'],
    answer: '2³',
    explanation: 'When dividing equal bases, subtract exponents: 5 - 2 = 3.',
  },
  {
    prompt: 'Which number is a perfect square?',
    options: ['49', '45', '52', '63'],
    answer: '49',
    explanation: '49 = 7².',
  },
];

const Exponents = () => (
  <CapsSubjectTopic
    title="Exponents"
    subtitle="Powers, squares, cubes, and simplifying exponential expressions"
    learnSteps={learnSteps}
    task="gr8-exponents-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Exponents;
