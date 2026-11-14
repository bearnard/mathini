import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Connect common fractions and decimals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Fractions and decimals represent the same quantities in different forms. Learners convert flexibly and apply
          operations accurately in measurement, money, and sharing contexts.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 3/4 as a decimal?',
    options: ['0.75', '0.34', '0.8', '0.7'],
    answer: '0.75',
    explanation: 'Divide the numerator by the denominator: 3 ÷ 4 = 0.75.',
  },
  {
    prompt: 'Write 0.6 as a simplified fraction.',
    options: ['3/5', '6/5', '6/10', '1/6'],
    answer: '3/5',
    explanation: '0.6 = 6/10, which simplifies to 3/5.',
  },
  {
    prompt: 'Calculate 1/2 + 1/4.',
    options: ['3/4', '2/6', '1/8', '1'],
    answer: '3/4',
    explanation: 'Use a common denominator: 2/4 + 1/4 = 3/4.',
  },
  {
    prompt: 'Calculate 2.5 + 0.37.',
    options: ['2.87', '2.77', '2.53', '2.13'],
    answer: '2.87',
    explanation: 'Align decimal places and add.',
  },
  {
    prompt: 'What is 5/8 of 40?',
    options: ['25', '20', '32', '15'],
    answer: '25',
    explanation: '(5/8) × 40 = 5 × 5 = 25.',
  },
  {
    prompt: 'What is 1.2 × 10?',
    options: ['12', '1.2', '0.12', '120'],
    answer: '12',
    explanation: 'Multiplying by 10 shifts the decimal one place right.',
  },
  {
    prompt: 'Calculate 3/5 - 1/10.',
    options: ['1/2', '2/5', '3/10', '4/10'],
    answer: '1/2',
    explanation: 'Convert 3/5 to 6/10, then 6/10 - 1/10 = 5/10 = 1/2.',
  },
  {
    prompt: 'In 0.04, the digit 4 represents...',
    options: ['4 hundredths', '4 tenths', '4 thousandths', '4 ones'],
    answer: '4 hundredths',
    explanation: '0.04 means four parts out of one hundred.',
  },
];

const CommonAndDecimalFractions = () => (
  <CapsSubjectTopic
    title="Common and Decimal Fractions"
    subtitle="Conversions and operations with fraction and decimal forms"
    learnSteps={learnSteps}
    task="gr8-common-and-decimal-fractions-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default CommonAndDecimalFractions;
