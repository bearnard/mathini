import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Place Value',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Every digit in a number has a <strong>place</strong> and a <strong>value</strong>.</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <div className="flex justify-center gap-1 text-4xl font-mono font-bold mb-2">
            <span className="text-slate-400">3</span>
            <span className="text-slate-400">4</span>
            <span className="text-indigo-600">5</span>
            <span className="text-slate-400">2</span>
          </div>
          <p className="text-slate-500">The 5 is in the <strong>Tens</strong> place.</p>
          <p className="text-slate-500">Its value is <strong>50</strong>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Millions',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Large numbers are grouped by threes: Ones, Thousands, and Millions.</p>
        <div className="grid grid-cols-3 gap-2 text-center max-w-lg mx-auto">
          <div className="bg-indigo-100 p-2 rounded-t-lg text-indigo-800 font-bold text-xs uppercase">Millions</div>
          <div className="bg-emerald-100 p-2 rounded-t-lg text-emerald-800 font-bold text-xs uppercase">Thousands</div>
          <div className="bg-amber-100 p-2 rounded-t-lg text-amber-800 font-bold text-xs uppercase">Ones</div>

          <div className="bg-indigo-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-indigo-900">123</div>
          <div className="bg-emerald-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-emerald-900">456</div>
          <div className="bg-amber-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-amber-900">789</div>
        </div>
        <p className="text-slate-500 text-sm mt-4">123 Million, 456 Thousand, 789</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the value of the 5 in 345 678 912?',
    options: ['5 000 000', '50 000', '5 000', '500 000'],
    answer: '5 000 000',
    explanation: 'The digit 5 sits in the millions place, so its value is 5 000 000.',
  },
  {
    prompt: 'Which digit is in the millions place in 247 831 560?',
    options: ['2', '4', '7', '8'],
    answer: '7',
    explanation: 'Counting from the right: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions — the 7 is in the millions place.',
  },
  {
    prompt: 'Write 5 000 000 + 200 000 + 3 000 + 40 + 2 as a single number.',
    options: ['5 203 042', '5 230 042', '5 023 042', '5 203 420'],
    answer: '5 203 042',
    explanation: '5 million + 200 thousand + 3 thousand + 40 + 2 = 5 203 042.',
  },
  {
    prompt: 'How many digits does a 9-digit number have?',
    options: ['8', '9', '10', '7'],
    answer: '9',
    explanation: 'A 9-digit number has exactly 9 digits, ranging from 100 000 000 to 999 999 999.',
  },
  {
    prompt: 'In the number 123 456 789, what is the value of the digit 1?',
    options: ['1 000 000', '100 000', '10 000 000', '100 000 000'],
    answer: '100 000 000',
    explanation: 'The 1 is in the hundred-millions place, giving it a value of 100 000 000.',
  },
  {
    prompt: "Which number is written as 'forty-two million, six hundred thousand, eight'?",
    options: ['42 600 008', '42 006 008', '42 600 800', '4 260 008'],
    answer: '42 600 008',
    explanation: '42 million + 600 thousand + 8 = 42 600 008.',
  },
];

const LargeNumbers = () => (
  <CapsSubjectTopic
    title="Large Numbers"
    subtitle="Master place value up to 9 digits"
    learnSteps={learnSteps}
    task="gr6-large-numbers-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LargeNumbers;
