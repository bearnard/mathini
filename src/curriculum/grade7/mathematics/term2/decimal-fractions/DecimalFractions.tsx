import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Compute accurately with decimal fractions',
    image: {
      src: '/curriculum/grade7/math/term2/decimal-fractions/diagram.webp',
      alt: 'Grade 7 learners using decimal place value and calculations in money and measurement contexts',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Decimal fractions are used in money, length, and mass. Learners compare decimal values and perform all four
          operations with correct place-value alignment.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In 7.43, the digit 4 is in the...',
    options: ['tenths place', 'hundredths place', 'ones place', 'thousands place'],
    answer: 'tenths place',
    explanation: 'The first digit after the decimal point is tenths.',
  },
  {
    prompt: 'Which number is greater?',
    options: ['0.8', '0.75', 'They are equal', 'Cannot compare'],
    answer: '0.8',
    explanation: '0.8 = 0.80, which is greater than 0.75.',
  },
  {
    prompt: 'Calculate 3.6 + 2.45.',
    options: ['6.05', '5.95', '6.5', '5.05'],
    answer: '6.05',
    explanation: 'Line up decimal points before adding.',
  },
  {
    prompt: 'Calculate 9.2 − 3.78.',
    options: ['5.42', '6.58', '5.12', '4.42'],
    answer: '5.42',
    explanation: 'Write 9.2 as 9.20, then subtract.',
  },
  {
    prompt: 'Calculate 0.4 × 0.5.',
    options: ['0.2', '0.02', '2', '0.9'],
    answer: '0.2',
    explanation: '4 × 5 = 20, then place two decimal places: 0.20.',
  },
  {
    prompt: 'Calculate 6.3 ÷ 0.9.',
    options: ['7', '0.7', '70', '6'],
    answer: '7',
    explanation: '63 ÷ 9 = 7, so 6.3 ÷ 0.9 = 7.',
  },
  {
    prompt: 'R12.50 + R7.75 =',
    options: ['R20.25', 'R19.25', 'R20.75', 'R21.25'],
    answer: 'R20.25',
    explanation: 'Add rand and cents carefully using place value.',
  },
  {
    prompt: 'Round 4.678 to the nearest tenth.',
    options: ['4.7', '4.6', '4.68', '5.0'],
    answer: '4.7',
    explanation: 'The hundredths digit is 7, so round the tenths digit up.',
  },
];

const DecimalFractions = () => (
  <CapsSubjectTopic
    title="Decimal Fractions"
    subtitle="Place value, ordering, and decimal operations in context"
    learnSteps={learnSteps}
    task="gr7-decimal-fractions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default DecimalFractions;
