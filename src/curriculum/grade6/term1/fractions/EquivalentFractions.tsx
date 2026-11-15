import { ArrowRight } from 'lucide-react';
import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { EquivalentBars } from '../../../../components/diagrams/maths/FractionScenes';

const learnSteps: LearnStep[] = [
  {
    title: 'What are Equivalent Fractions?',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600">Equivalent fractions are fractions that look different but represent the <strong>same amount</strong>.</p>
        <EquivalentBars />
        <p className="text-slate-500">Notice how the shaded area is the same size!</p>
      </div>
    ),
  },
  {
    title: 'How to find them?',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600">You can find an equivalent fraction by <strong>multiplying</strong> (or dividing) both the top and bottom numbers by the <strong>same number</strong>.</p>
        <div className="bg-slate-50 p-6 rounded-xl flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-indigo-600">1</span>
            <span className="w-12 h-0.5 bg-slate-300 my-2"></span>
            <span className="text-4xl font-bold text-indigo-600">2</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <ArrowRight className="w-4 h-4" /> × 2
            </div>
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <ArrowRight className="w-4 h-4" /> × 2
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-emerald-600">2</span>
            <span className="w-12 h-0.5 bg-slate-300 my-2"></span>
            <span className="text-4xl font-bold text-emerald-600">4</span>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which fraction is equivalent to 1/2?',
    options: ['2/4', '3/5', '1/4', '2/3'],
    answer: '2/4',
    explanation: '1/2 × (2/2) = 2/4. Multiplying both numerator and denominator by 2 gives an equivalent fraction.',
  },
  {
    prompt: 'To find an equivalent fraction for 3/5, you multiply both top and bottom by 3. What do you get?',
    options: ['6/8', '9/15', '9/10', '3/15'],
    answer: '9/15',
    explanation: '3 × 3 = 9 and 5 × 3 = 15, so 3/5 = 9/15.',
  },
  {
    prompt: 'Which fraction is in its simplest form?',
    options: ['4/8', '6/9', '2/6', '3/7'],
    answer: '3/7',
    explanation: '3 and 7 share no common factors other than 1, so 3/7 is already in simplest form.',
  },
  {
    prompt: 'What is 6/8 simplified?',
    options: ['2/3', '3/4', '4/6', '1/2'],
    answer: '3/4',
    explanation: 'The HCF of 6 and 8 is 2. Dividing both by 2 gives 3/4.',
  },
  {
    prompt: 'What is the HCF of 4 and 6?',
    options: ['1', '2', '3', '4'],
    answer: '2',
    explanation: 'Factors of 4: 1, 2, 4. Factors of 6: 1, 2, 3, 6. The highest common factor is 2.',
  },
  {
    prompt: 'If 1/3 = ?/12, what is the missing number?',
    options: ['3', '4', '6', '9'],
    answer: '4',
    explanation: '3 × 4 = 12, so multiply the numerator by 4 as well: 1 × 4 = 4. The missing number is 4.',
  },
];

const EquivalentFractions = () => (
  <CapsSubjectTopic
    title="Equivalent Fractions"
    subtitle="Understand how different fractions can have the same value"
    learnSteps={learnSteps}
    task="gr6-equivalent-fractions-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default EquivalentFractions;
