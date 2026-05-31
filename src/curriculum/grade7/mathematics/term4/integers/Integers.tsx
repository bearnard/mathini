import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Operate with positive and negative integers',
    image: {
      src: '/curriculum/grade7/math/term4/integers/diagram.webp',
      alt: 'Grade 7 learners using number lines to compare and calculate with integers',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Integers include positive and negative numbers. Learners use number lines and sign rules to compare values and
          solve contextual problems.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which number is greater?',
    options: ['2', '−3', 'They are equal', 'Cannot compare'],
    answer: '2',
    explanation: 'Any positive number is greater than a negative number.',
  },
  {
    prompt: 'Calculate −5 + 8.',
    options: ['3', '−3', '13', '−13'],
    answer: '3',
    explanation: 'Moving 8 units right from −5 gives 3.',
  },
  {
    prompt: 'Calculate 7 − 12.',
    options: ['−5', '5', '−19', '19'],
    answer: '−5',
    explanation: 'Subtracting a larger number gives a negative result.',
  },
  {
    prompt: 'Calculate (−4) × (−3).',
    options: ['12', '−12', '7', '−7'],
    answer: '12',
    explanation: 'A negative times a negative is positive.',
  },
  {
    prompt: 'Calculate 18 ÷ (−6).',
    options: ['−3', '3', '−12', '12'],
    answer: '−3',
    explanation: 'A positive divided by a negative is negative.',
  },
  {
    prompt: 'Arrange in ascending order: −2, 0, −5, 3.',
    options: ['−5, −2, 0, 3', '3, 0, −2, −5', '−2, −5, 0, 3', '0, −2, −5, 3'],
    answer: '−5, −2, 0, 3',
    explanation: 'On a number line, farther left is smaller.',
  },
  {
    prompt: 'The temperature changes from −3°C to 4°C. What is the increase?',
    options: ['7°C', '1°C', '−7°C', '−1°C'],
    answer: '7°C',
    explanation: '4 − (−3) = 7.',
  },
  {
    prompt: 'What is |−9|?',
    options: ['9', '−9', '0', '18'],
    answer: '9',
    explanation: 'Absolute value is the distance from 0.',
  },
];

const Integers = () => (
  <CapsSubjectTopic
    title="Integers"
    subtitle="Number line comparison and operations with signed numbers"
    learnSteps={learnSteps}
    task="gr7-integers-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Integers;
