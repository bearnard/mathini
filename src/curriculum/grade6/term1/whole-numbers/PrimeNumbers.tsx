import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a Prime Number?',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A prime number has exactly <strong>two factors</strong>: 1 and itself.</p>
        <div className="flex justify-center gap-8">
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5</div>
            <p className="text-sm text-emerald-700">Factors: 1, 5</p>
            <p className="text-xs text-emerald-500 font-bold mt-2">PRIME</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <div className="text-4xl font-bold text-red-600 mb-2">6</div>
            <p className="text-sm text-red-700">Factors: 1, 2, 3, 6</p>
            <p className="text-xs text-red-500 font-bold mt-2">COMPOSITE</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Composite Numbers',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Composite numbers have <strong>more than two</strong> factors.</p>
        <div className="bg-white p-6 rounded-xl border border-slate-200 max-w-sm mx-auto">
          <div className="text-4xl font-bold text-slate-700 mb-4">12</div>
          <div className="grid grid-cols-3 gap-2 text-sm font-mono text-slate-500">
            <div>1 × 12</div>
            <div>2 × 6</div>
            <div>3 × 4</div>
          </div>
          <p className="mt-4 text-slate-600">12 can be divided by many numbers!</p>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which of these numbers is prime?',
    options: ['7', '9', '15', '21'],
    answer: '7',
    explanation: '7 has exactly two factors (1 and 7). The others have more than two factors.',
  },
  {
    prompt: 'How many factors does a prime number have?',
    options: ['Exactly 1', 'Exactly 2', 'Exactly 3', 'More than 3'],
    answer: 'Exactly 2',
    explanation: 'By definition, a prime number has exactly two factors: 1 and itself.',
  },
  {
    prompt: 'Is 17 prime or composite?',
    options: ['Prime', 'Composite', 'Neither', 'Both'],
    answer: 'Prime',
    explanation: '17 can only be divided evenly by 1 and 17, so it is prime.',
  },
  {
    prompt: 'Which of these is composite?',
    options: ['11', '13', '15', '17'],
    answer: '15',
    explanation: '15 = 3 × 5, so it has more than two factors and is composite.',
  },
  {
    prompt: 'What are the only factors of 7?',
    options: ['1 and 7', '1, 7 and 14', '7 and 49', '2 and 7'],
    answer: '1 and 7',
    explanation: '7 is prime, so its only factors are 1 and 7 itself.',
  },
  {
    prompt: 'Which is the smallest prime number?',
    options: ['1', '2', '3', '0'],
    answer: '2',
    explanation: '2 is the smallest prime number — it has exactly two factors: 1 and 2. Note that 1 is not prime.',
  },
];

const PrimeNumbers = () => (
  <CapsSubjectTopic
    title="Prime Numbers"
    subtitle="Discover the building blocks of math"
    learnSteps={learnSteps}
    task="gr6-prime-numbers-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PrimeNumbers;
