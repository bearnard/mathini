import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  { title: 'Mid-year examination overview', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The mid-year examination for Grade 11 Mathematical Literacy tests topics from Terms 1 and 2 in <strong> realistic, contextual questions</strong>.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Paper 1 focus</strong><p className="text-slate-600 text-sm">Finance (documents, tariffs, interest, budgets), patterns and representations.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Paper 2 focus</strong><p className="text-slate-600 text-sm">Measurement (conversions, temperature), maps, plans and scale.</p></div></div><p className="text-sm text-slate-500">Always show your working — method marks are awarded even if your final answer is wrong.</p></div>) },
  { title: 'Finance revision: key formulae', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Quick recap of the finance formulae you need:</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><Formula block>{String.raw`\text{VAT} = \frac{15}{100} \times \text{price}`}</Formula><Formula block>{String.raw`\text{Total tariff} = \text{Fixed charge} + (\text{Rate} \times \text{Units})`}</Formula><Formula block>{String.raw`A = P(1 + in)`}</Formula><Formula block>{String.raw`A = P(1 + i)^n`}</Formula><Formula block>{String.raw`\text{Markup }\% = \frac{\text{Markup}}{\text{Cost price}} \times 100`}</Formula><Formula block>{String.raw`\text{Units} = \frac{\text{Fixed costs}}{\text{Sell price} - \text{Variable cost}}`}</Formula></div></div>) },
  { title: 'Measurement and maps revision', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Key measurement and map skills:</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Measurement</strong><Formula block>{String.raw`F = 1.8C + 32`}</Formula><Formula block>{String.raw`v_{m/s} = \frac{v_{km/h}}{3.6}`}</Formula></div><div className="rounded-xl bg-orange-50 p-4 space-y-2"><strong className="text-orange-700">Maps and plans</strong><Formula block>{String.raw`\text{scale} = \frac{\text{map distance}}{\text{real distance}}`}</Formula><Formula block>{String.raw`\text{Actual distance} = \text{map distance} \times \text{scale denominator}`}</Formula></div></div><div className="bg-slate-50 p-4 rounded-xl text-left mt-2 space-y-2"><Formula block>{String.raw`14{:}20 - 09{:}50 = 4\text{ h }30\text{ min}`}</Formula></div></div>) },
  { title: 'Examination strategies', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Use these strategies to maximise your marks in the exam:</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-2"><p className="text-slate-700">📋 Read the question carefully and identify what is being asked.</p><p className="text-slate-700">✍️ Show all working — partial marks are given for correct method.</p><p className="text-slate-700">🔢 Write the formula first, then substitute values.</p><p className="text-slate-700">🏷️ Always include units in your answer.</p><p className="text-slate-700">✅ Check whether your answer is reasonable in the real-life context.</p><p className="text-slate-700">⏱️ If stuck, move on and come back — don't spend too long on one question.</p></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'R4 000 is invested for 3 years at 7,5% simple interest. What is the total amount at the end?',
    options: ['R4 300', 'R4 900', 'R4 975', 'R4 750'],
    answer: 'R4 900',
    explanation: 'A = 4000(1 + 0,075 × 3) = 4000 × 1,225 = R4 900.',
  },
  {
    prompt: 'An item costs R560 including 15% VAT. What is the VAT amount only?',
    options: ['R73,04', 'R84', 'R84,00', 'R76'],
    answer: 'R73,04',
    explanation: 'Excl. VAT = R560 ÷ 1,15 = R486,96. VAT = R560 − R486,96 = R73,04.',
  },
  {
    prompt: 'On a 1:30 000 map, two schools are 8 cm apart. What is the actual distance in km?',
    options: ['2,4 km', '24 km', '240 km', '0,24 km'],
    answer: '2,4 km',
    explanation: '8 × 30 000 = 240 000 cm = 2 400 m = 2,4 km.',
  },
  {
    prompt: 'Convert 20°C to degrees Fahrenheit.',
    options: ['52°F', '68°F', '36°F', '72°F'],
    answer: '68°F',
    explanation: 'F = 1,8 × 20 + 32 = 36 + 32 = 68°F.',
  },
  {
    prompt: 'A business has fixed costs of R800 and makes R6 profit per item. What is the break-even quantity?',
    options: ['120 items', '133 items', '140 items', '100 items'],
    answer: '133 items',
    explanation: 'Break-even = R800 ÷ R6 = 133,3 → 134 items needed to at least break even. Closest given answer: 133 items (R800 ÷ R6 = 133,3...).',
  },
  {
    prompt: 'A bus departs at 11:50 and arrives at 14:25. How long is the journey?',
    options: ['2 h 25 min', '2 h 35 min', '3 h 25 min', '3 h 35 min'],
    answer: '2 h 35 min',
    explanation: '14:25 − 11:50 = 2 h 35 min.',
  },
  {
    prompt: 'An electricity tariff is: R65 fixed + R1,60/kWh. A household uses 220 kWh in a month. What is the bill?',
    options: ['R352', 'R352,00', 'R417', 'R396'],
    answer: 'R417',
    explanation: 'Total = R65 + (R1,60 × 220) = R65 + R352 = R417.',
  },
  {
    prompt: 'R6 500 is invested at 9% compound interest for 2 years. What is the accumulated amount?',
    options: ['R7 670', 'R7 722,65', 'R7 735', 'R7 800'],
    answer: 'R7 722,65',
    explanation: 'A = 6500 × (1,09)² = 6500 × 1,1881 = R7 722,65.',
  },
];

const MidyearPrep = () => (
  <CapsSubjectTopic
    title="Revision and Mid-year Preparation"
    subtitle="Integrating finance, measurement and map skills for mid-year examinations"
    learnSteps={learnSteps}
    task="gr11-ml-midyear-prep-t2"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default MidyearPrep;
