import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { CompareBars } from '../../../../components/diagrams/maths/FractionScenes';

const learnSteps: LearnStep[] = [
  {
    title: 'Comparing Fractions',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">We can compare fractions to see which is bigger, smaller, or if they're equal.</p>
        <CompareBars a={2} b={4} />
        <p className="text-slate-500">Which shaded part is bigger?</p>
      </div>
    ),
  },
  {
    title: 'Same Numerator',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">When the tops (numerators) are the same, the one with the smaller bottom (denominator) is bigger!</p>
        <CompareBars a={3} b={4} />
        <p className="text-sm text-slate-500">Thirds are bigger than quarters!</p>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which fraction is greater: 3/5 or 3/8?',
    options: ['3/5', '3/8', 'They are equal', 'Cannot tell'],
    answer: '3/5',
    explanation: 'Same numerator: the smaller the denominator, the larger the fraction. 5 < 8, so 3/5 > 3/8.',
  },
  {
    prompt: 'Which fraction is smallest?',
    options: ['1/2', '1/4', '1/3', '1/6'],
    answer: '1/6',
    explanation: 'All numerators are 1. The largest denominator gives the smallest fraction: 1/6 is smallest.',
  },
  {
    prompt: '2/3 compared to 3/5: which is correct?',
    options: ['2/3 > 3/5', '2/3 < 3/5', '2/3 = 3/5', 'Cannot compare'],
    answer: '2/3 > 3/5',
    explanation: 'Cross-multiply: 2 × 5 = 10 and 3 × 3 = 9. Since 10 > 9, we have 2/3 > 3/5.',
  },
  {
    prompt: 'When two fractions have the same numerator, the one with the larger denominator is...',
    options: ['larger', 'smaller', 'equal', 'impossible to say'],
    answer: 'smaller',
    explanation: 'A larger denominator means the whole is split into more parts, so each part is smaller.',
  },
  {
    prompt: 'Order from smallest to largest: 1/2, 1/4, 3/4',
    options: ['1/4, 1/2, 3/4', '3/4, 1/2, 1/4', '1/2, 1/4, 3/4', '1/4, 3/4, 1/2'],
    answer: '1/4, 1/2, 3/4',
    explanation: '1/4 = 0.25, 1/2 = 0.5, 3/4 = 0.75, so the correct order smallest to largest is 1/4, 1/2, 3/4.',
  },
  {
    prompt: 'Which sign makes this true? 4/5 ___ 3/4',
    options: ['>', '<', '=', '÷'],
    answer: '>',
    explanation: 'Convert to a common denominator: 4/5 = 16/20 and 3/4 = 15/20. Since 16 > 15, we have 4/5 > 3/4.',
  },
];

const ComparingFractions = () => (
  <CapsSubjectTopic
    title="Comparing Fractions"
    subtitle="Compare fractions to find which is bigger or smaller"
    learnSteps={learnSteps}
    task="gr6-comparing-fractions-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ComparingFractions;
