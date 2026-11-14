import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Calculate confidently with common fractions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Common fractions include equivalent forms, ordering, and operations with fractions and mixed numbers.
          Understanding denominator relationships helps avoid common errors.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which fraction is equivalent to 3/4?',
    options: ['9/12', '6/12', '12/16', '15/24'],
    answer: '9/12',
    explanation: 'Multiply numerator and denominator by 3: 3/4 = 9/12.',
  },
  {
    prompt: 'Which fraction is greater?',
    options: ['3/4', '5/8', 'They are equal', 'Cannot compare'],
    answer: '3/4',
    explanation: '3/4 = 0.75 and 5/8 = 0.625, so 3/4 is greater.',
  },
  {
    prompt: 'Calculate 2/3 + 1/6.',
    options: ['5/6', '3/9', '1/2', '4/6'],
    answer: '5/6',
    explanation: 'Use denominator 6: 2/3 = 4/6, then 4/6 + 1/6 = 5/6.',
  },
  {
    prompt: 'Calculate 7/10 − 2/5.',
    options: ['3/10', '5/10', '1/2', '1/5'],
    answer: '3/10',
    explanation: '2/5 = 4/10, so 7/10 − 4/10 = 3/10.',
  },
  {
    prompt: 'Calculate 3/4 of 8.',
    options: ['6', '4', '8/4', '12'],
    answer: '6',
    explanation: 'One quarter of 8 is 2, so 3/4 of 8 is 3 × 2 = 6.',
  },
  {
    prompt: 'Calculate 1 1/2 + 2 1/4.',
    options: ['3 3/4', '3 1/2', '4', '2 3/4'],
    answer: '3 3/4',
    explanation: '1.5 + 2.25 = 3.75 = 3 3/4.',
  },
  {
    prompt: 'Simplify 18/24.',
    options: ['3/4', '6/8', '9/12', '2/3'],
    answer: '3/4',
    explanation: 'Divide top and bottom by 6.',
  },
  {
    prompt: 'What is 3/5 of 35?',
    options: ['21', '7', '15', '28'],
    answer: '21',
    explanation: '35 ÷ 5 = 7, and 7 × 3 = 21.',
  },
];

const CommonFractions = () => (
  <CapsSubjectTopic
    title="Common Fractions"
    subtitle="Equivalent fractions, ordering, and operations with mixed numbers"
    learnSteps={learnSteps}
    task="gr7-common-fractions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default CommonFractions;
