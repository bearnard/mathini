import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Decimal Numbers',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Decimals help us write numbers smaller than one.</p>
        <div className="flex justify-center gap-1 font-mono text-4xl font-bold">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-indigo-100 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">3</div>
            <span className="text-xs text-slate-400 font-sans font-normal">Ones</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-200 w-6 h-16 flex items-center justify-center rounded-lg text-slate-800">.</div>
            <span className="text-xs text-slate-400 font-sans font-normal">Point</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">5</div>
            <span className="text-xs text-slate-400 font-sans font-normal">Tenths</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">2</div>
            <span className="text-xs text-slate-400 font-sans font-normal">Hundredths</span>
          </div>
        </div>
        <p className="text-slate-500">3.52 = 3 + 0.5 + 0.02</p>
      </div>
    ),
  },
  {
    title: 'Place Value After the Decimal',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Each position after the decimal point has a special value.</p>
        <div className="bg-white p-6 rounded-xl border border-slate-200 inline-block">
          <div className="text-4xl font-bold text-slate-800 mb-4">12.34</div>
          <div className="grid grid-cols-2 gap-4 text-left text-sm text-slate-500">
            <div>
              <p><strong className="text-indigo-600">1</strong>0 (Tens)</p>
              <p><strong className="text-indigo-600">2</strong> (Ones)</p>
            </div>
            <div>
              <p><strong className="text-emerald-600">3</strong> (0.3 = Tenths)</p>
              <p><strong className="text-emerald-600">4</strong> (0.04 = Hundredths)</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In 3.52, the digit 5 represents...',
    options: ['5 ones', '5 tenths', '5 hundredths', '50'],
    answer: '5 tenths',
    explanation: 'The first digit after the decimal point is in the tenths place. 5 tenths = 0.5.',
  },
  {
    prompt: 'What is the value of the digit 4 in 12.47?',
    options: ['4 ones', '4 tenths', '4 hundredths', '40'],
    answer: '4 tenths',
    explanation: 'The digit 4 is the first digit after the decimal point, so it is in the tenths place. Its value is 0.4.',
  },
  {
    prompt: 'Which decimal is equal to 3/10?',
    options: ['0.03', '0.3', '3.0', '30'],
    answer: '0.3',
    explanation: '3/10 means 3 tenths. The tenths place is the first position after the decimal point, so 3/10 = 0.3.',
  },
  {
    prompt: 'Write 0.07 as a fraction.',
    options: ['7/10', '7/100', '70/100', '1/7'],
    answer: '7/100',
    explanation: '0.07 has a 7 in the hundredths place, so it equals 7/100.',
  },
  {
    prompt: 'In 5.62, which digit is in the hundredths place?',
    options: ['5', '6', '2', '62'],
    answer: '2',
    explanation: 'The hundredths place is the second position after the decimal point. In 5.62, that digit is 2.',
  },
  {
    prompt: 'Order from smallest to largest: 0.3, 0.13, 0.31',
    options: ['0.13, 0.3, 0.31', '0.3, 0.13, 0.31', '0.31, 0.3, 0.13', '0.13, 0.31, 0.3'],
    answer: '0.13, 0.3, 0.31',
    explanation: '0.13 = 13 hundredths, 0.30 = 30 hundredths, 0.31 = 31 hundredths. Smallest to largest: 0.13, 0.3, 0.31.',
  },
];

const DecimalPlaceValue = () => (
  <CapsSubjectTopic
    title="Decimal Place Value"
    subtitle="Understand the value of digits in decimal numbers"
    learnSteps={learnSteps}
    task="gr6-decimal-place-value-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default DecimalPlaceValue;
