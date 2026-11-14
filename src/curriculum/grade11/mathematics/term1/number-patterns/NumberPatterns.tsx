import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';
import { QuadraticDots } from '../../../../../components/diagrams/maths/QuadraticDots';

const learnSteps: LearnStep[] = [
  {
    title: 'Recognise the Pattern Type',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">First differences suggest a linear pattern, while constant second differences point to a quadratic rule.</p>
        <QuadraticDots />
        <div className="space-y-2">
          <Formula block>{String.raw`T_n = an^2 + bn + c`}</Formula>
          <Formula block>{String.raw`\text{second difference} = 2a`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => x ** 2 + x + 1, label: 'T(n) = n² + n + 1', color: '#6366f1' },
          ]}
          xRange={[0, 8]}
          yRange={[0, 80]}
        />
        <div className="rounded-xl bg-indigo-50 p-4">
          <p className="text-sm text-slate-600">If the second difference is <Formula>{String.raw`4`}</Formula>, then <Formula>{String.raw`2a = 4`}</Formula> and <Formula>{String.raw`a = 2`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Build a Formula for the nth Term',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Substitute known term numbers into <Formula>{String.raw`T_n = an^2 + bn + c`}</Formula> and solve for the constants.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-violet-50 p-4">
            <Formula block>{String.raw`T_1 = a + b + c`}</Formula>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <Formula block>{String.raw`T_2 = 4a + 2b + c`}</Formula>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <Formula block>{String.raw`T_3 = 9a + 3b + c`}</Formula>
          </div>
        </div>
        <p className="text-slate-600">Once you know <Formula>{String.raw`a`}</Formula>, <Formula>{String.raw`b`}</Formula>, and <Formula>{String.raw`c`}</Formula>, you can predict any term directly.</p>
      </div>
    ),
  },
  {
    title: 'Use the Formula to Solve Problems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Substitute a term number to find its value, or set the expression equal to a target value and solve for <Formula>{String.raw`n`}</Formula>.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Find a term</h4>
            <Formula block>{String.raw`T_n = n^2 + 3 \Rightarrow T_7 = 7^2 + 3 = 52`}</Formula>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <h4 className="font-semibold text-rose-700">Find the term number</h4>
            <Formula block>{String.raw`n^2 + 3 = 12 \Rightarrow n^2 = 9 \Rightarrow n = 3`}</Formula>
          </div>
        </div>
        <p className="text-sm text-slate-600">Remember that in sequence questions, <Formula>{String.raw`n`}</Formula> usually belongs to the positive integers <Formula>{String.raw`\mathbb{Z}^+`}</Formula>.</p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The sequence 2, 5, 10, 17, … has a constant second difference of:',
    options: ['3', '2', '5', '1'],
    answer: '2',
    explanation: 'First differences: 3, 5, 7. Second differences: 5−3 = 2, 7−5 = 2. Constant second difference = 2.',
  },
  {
    prompt: 'If T_n = 2n² − n + 1, what is T_4?',
    options: ['25', '28', '29', '31'],
    answer: '29',
    explanation: 'T_4 = 2(16) − 4 + 1 = 32 − 3 = 29.',
  },
  {
    prompt: 'A quadratic sequence has a constant second difference of 6. The coefficient a in T_n = an² + … is:',
    options: ['6', '12', '3', '2'],
    answer: '3',
    explanation: '2a = second difference, so 2a = 6 → a = 3.',
  },
  {
    prompt: 'Find the general term for the sequence: 3, 7, 13, 21, …',
    options: ['T_n = 2n² + 1', 'T_n = n² + 2n', 'T_n = n² + n + 2', 'T_n = n² + n + 1'],
    answer: 'T_n = n² + n + 1',
    explanation: 'Second diff = 2 → a = 1. T_1: 1+b+c = 3. T_2: 4+2b+c = 7. Solving gives b = 1, c = 1.',
  },
  {
    prompt: 'For the sequence 1, 4, 9, 16, …, T_10 = ?',
    options: ['81', '100', '121', '64'],
    answer: '100',
    explanation: 'This is the sequence T_n = n², so T_10 = 10² = 100.',
  },
  {
    prompt: 'What are the first differences of the sequence 1, 4, 9, 16?',
    options: ['2, 4, 6', '3, 5, 7', '2, 3, 4', '4, 8, 12'],
    answer: '3, 5, 7',
    explanation: '4−1 = 3, 9−4 = 5, 16−9 = 7. First differences are 3, 5, 7.',
  },
  {
    prompt: 'The second difference of a sequence is constant at 4. The value of a in T_n = an² + bn + c is:',
    options: ['4', '1', '2', '8'],
    answer: '2',
    explanation: '2a = 4 → a = 2.',
  },
  {
    prompt: 'For T_n = n² + 3, which term has the value 12?',
    options: ['T_2', 'T_4', 'T_5', 'T_3'],
    answer: 'T_3',
    explanation: 'T_3 = 3² + 3 = 9 + 3 = 12. ✓',
  },
];

const NumberPatterns = () => (
  <CapsSubjectTopic
    title="Number Patterns"
    subtitle="Quadratic sequences, second differences and general terms"
    learnSteps={learnSteps}
    task="gr11-number-patterns-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumberPatterns;
