import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Work confidently with whole numbers',
    image: {
      src: '/curriculum/grade7/math/term1/whole-numbers/diagram.webp',
      alt: 'Grade 7 learners using factors, multiples, ratio, and rate in whole-number problems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Whole numbers are used in factorisation, HCF, LCM, ratio, and rate. These skills help learners solve
          financial and measurement problems accurately.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the prime factorisation of 84?',
    options: ['2 × 2 × 3 × 7', '2 × 3 × 14', '4 × 21', '2 × 42'],
    answer: '2 × 2 × 3 × 7',
    explanation: '84 = 2 × 2 × 3 × 7, and all factors are prime.',
  },
  {
    prompt: 'What is the highest common factor (HCF) of 18 and 24?',
    options: ['6', '3', '9', '12'],
    answer: '6',
    explanation: 'The greatest number dividing both 18 and 24 is 6.',
  },
  {
    prompt: 'What is the lowest common multiple (LCM) of 6 and 8?',
    options: ['24', '12', '18', '48'],
    answer: '24',
    explanation: '24 is the first multiple shared by 6 and 8.',
  },
  {
    prompt: 'Simplify the ratio 15:25.',
    options: ['3:5', '5:3', '15:5', '6:10'],
    answer: '3:5',
    explanation: 'Divide both terms by 5 to get 3:5.',
  },
  {
    prompt: 'A car travels 180 km in 3 hours. What is its average rate?',
    options: ['60 km/h', '90 km/h', '30 km/h', '540 km/h'],
    answer: '60 km/h',
    explanation: 'Rate = distance ÷ time = 180 ÷ 3 = 60 km/h.',
  },
  {
    prompt: 'Which number is divisible by 9?',
    options: ['4 572', '4 571', '4 575', '4 578'],
    answer: '4 572',
    explanation: '4 + 5 + 7 + 2 = 18, and 18 is divisible by 9.',
  },
  {
    prompt: 'Which is the largest 4-digit number that can be made from 7, 4, 2, and 9?',
    options: ['9 742', '9 472', '7 942', '9 724'],
    answer: '9 742',
    explanation: 'Arrange digits from largest to smallest: 9, 7, 4, 2.',
  },
  {
    prompt: 'What is the greatest common factor of 30 and 45?',
    options: ['15', '5', '10', '30'],
    answer: '15',
    explanation: '15 is the biggest factor shared by 30 and 45.',
  },
];

const WholeNumbers = () => (
  <CapsSubjectTopic
    title="Whole Numbers"
    subtitle="Factors, multiples, HCF, LCM, ratio, and rate"
    learnSteps={learnSteps}
    task="gr7-whole-numbers-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default WholeNumbers;
