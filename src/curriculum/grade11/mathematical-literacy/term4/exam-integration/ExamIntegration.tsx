import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  { title: 'What the end-of-year exam covers', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The Grade 11 Mathematical Literacy end-of-year exam integrates all four terms of content across <strong>two papers</strong>.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Paper 1</strong><p className="text-slate-600 text-sm">Mainly knowing and routine procedures in familiar contexts. Questions can come from any topic: finance (tariffs, interest, budgets, exchange rates, taxation), measurement, maps and plans, data handling and probability.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Paper 2</strong><p className="text-slate-600 text-sm">Mainly multi-step procedures, reasoning and reflecting in less familiar contexts, on the same topics.</p></div></div><p className="text-sm text-slate-500">Questions are always placed in a real-life context. You must read contextual information carefully before calculating.</p></div>) },
  { title: 'Finance and measurement recap', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Essential formulae for the exam:</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3 text-sm"><Formula block>{String.raw`A = P(1 + in)`}</Formula><Formula block>{String.raw`A = P(1 + i)^n`}</Formula><Formula block>{String.raw`\text{VAT} = \frac{15}{100} \times \text{price}`}</Formula><Formula block>{String.raw`\text{Units} = \frac{\text{Fixed costs}}{\text{Sell price} - \text{Variable cost}}`}</Formula><Formula block>{String.raw`\text{Foreign currency} = \frac{\text{ZAR}}{\text{sell rate}}`}</Formula><Formula block>{String.raw`P = 2(\ell + w)`}</Formula><Formula block>{String.raw`A = \ell \times w`}</Formula><Formula block>{String.raw`A = \pi r^2`}</Formula><Formula block>{String.raw`V = \ell \times w \times h`}</Formula><Formula block>{String.raw`V = \pi r^2 h`}</Formula><Formula block>{String.raw`F = 1{,}8C + 32`}</Formula></div></div>) },
  { title: 'Data, maps and probability recap', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Key skills for both papers:</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Data handling</strong><Formula block>{String.raw`\text{Mean} = \frac{\text{sum}}{n}`}</Formula><Formula block>{String.raw`\text{Range} = \text{max} - \text{min}`}</Formula></div><div className="rounded-xl bg-orange-50 p-4 space-y-2"><strong className="text-orange-700">Maps and scale</strong><Formula block>{String.raw`\text{scale} = \frac{\text{map distance}}{\text{real distance}}`}</Formula><Formula block>{String.raw`\text{Actual distance} = \text{map distance} \times \text{scale denominator}`}</Formula></div><div className="rounded-xl bg-purple-50 p-4 space-y-2"><strong className="text-purple-700">Probability</strong><Formula block>{String.raw`P(\text{event}) = \frac{\text{favourable}}{\text{total}}`}</Formula></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Graphs</strong><p className="text-slate-600 text-sm">Bar graphs compare categories; line graphs show trends; pie charts show parts of a whole; histograms show frequency distributions.</p></div></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Practice interpreting a trend by reading the monthly sales values directly from the graph.</p><DataChart type="line" xKey="month" data={[{ month: 'Jan', sales: 45000 },{ month: 'Feb', sales: 38000 },{ month: 'Mar', sales: 52000 },{ month: 'Apr', sales: 49000 },{ month: 'May', sales: 56000 },{ month: 'Jun', sales: 41000 }]} series={[{ key: 'sales', label: 'Monthly sales (R)', color: '#10b981' }]} yLabel="Rand (R)" height={220} /></div></div>) },
  { title: 'Exam success strategies', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Use these strategies consistently to maximise your marks across both papers:</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-2"><p className="text-slate-700">📋 <strong>Read the context</strong> — all questions are set in real-life situations. Understand the scenario first.</p><p className="text-slate-700">📌 <strong>Highlight key information</strong> — identify numbers, units and what is being asked.</p><p className="text-slate-700">✍️ <strong>Show all working</strong> — partial marks are awarded for correct method steps.</p><p className="text-slate-700">🏷️ <strong>Include units</strong> — always state the unit (R, m², ℓ, %, etc.) in your final answer.</p><p className="text-slate-700">✅ <strong>Check reasonableness</strong> — does your answer make sense in the context?</p><p className="text-slate-700">⏱️ <strong>Manage time</strong> — spend approximately 1 minute per mark; skip and return to hard questions.</p></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'R8 000 is invested at 6% compound interest for 3 years. What is the total amount?',
    options: ['R9 440', 'R9 528,13', 'R9 550,08', 'R9 600'],
    answer: 'R9 528,13',
    explanation: 'A = 8000 × (1,06)³ = 8000 × 1,191016 = R9 528,13.',
  },
  {
    prompt: 'A room is 5,5 m × 4 m. Square tiles are 50 cm × 50 cm. How many tiles are needed with 10% extra for wastage?',
    options: ['88 tiles', '96 tiles', '97 tiles', '100 tiles'],
    answer: '97 tiles',
    explanation: 'Area = 5,5 × 4 = 22 m². Tile area = 0,5 × 0,5 = 0,25 m². Tiles = 22 ÷ 0,25 = 88 tiles. With 10% extra: 88 × 1,1 = 96,8, so round UP to 97 tiles (96 tiles would be too few).',
  },
  {
    prompt: 'On a 1:40 000 map, two towns are 5,5 cm apart. What is the actual distance in km?',
    options: ['2,2 km', '22 km', '220 km', '2,02 km'],
    answer: '2,2 km',
    explanation: '5,5 × 40 000 = 220 000 cm = 2 200 m = 2,2 km.',
  },
  {
    prompt: 'A spinner has 10 equal sectors: 3 green, 4 red, 2 blue, 1 yellow. What is P(red)?',
    options: ['0,3', '0,4', '0,2', '0,5'],
    answer: '0,4',
    explanation: 'P(red) = 4 ÷ 10 = 0,4.',
  },
  {
    prompt: 'A car is priced at $14 500 in the USA. At a selling rate of R18,90/USD, what is the rand price?',
    options: ['R274 050', 'R261 000', 'R290 050', 'R265 050'],
    answer: 'R274 050',
    explanation: 'R = $14 500 × R18,90 = R274 050.',
  },
  {
    prompt: 'A payslip shows: Gross R28 000, PAYE R5 600, UIF R280, Medical aid R1 400. What is the net pay?',
    options: ['R21 120', 'R20 720', 'R22 000', 'R20 400'],
    answer: 'R20 720',
    explanation: 'Total deductions = R5 600 + R280 + R1 400 = R7 280. Net = R28 000 − R7 280 = R20 720.',
  },
  {
    prompt: 'A data set has 6 values: 11, 15, 9, 20, 13, 16. What is the median?',
    options: ['13', '14', '14,5', '15'],
    answer: '14',
    explanation: 'Ordered: 9, 11, 13, 15, 16, 20. Median = (13 + 15) ÷ 2 = 28 ÷ 2 = 14.',
  },
  {
    prompt: 'A cylinder has radius 8 cm and height 15 cm. What is its volume? (π ≈ 3,14)',
    options: ['3 014,4 cm³', '3 100 cm³', '376,8 cm³', '3 216 cm³'],
    answer: '3 014,4 cm³',
    explanation: 'V = πr²h = 3,14 × 64 × 15 = 3,14 × 960 = 3 014,4 cm³.',
  },
  {
    prompt: 'Monthly sales data (in R000): Jan 45, Feb 38, Mar 52, Apr 49, May 56, Jun 41. What is the mean monthly sales?',
    options: ['R46 833', 'R47 500', 'R46 000', 'R47 000'],
    answer: 'R46 833',
    explanation: 'Sum = 45 + 38 + 52 + 49 + 56 + 41 = 281. Mean = 281 ÷ 6 = 46,833… thousand = R46 833.',
  },
];

const ExamIntegration = () => (
  <CapsSubjectTopic
    title="Revision and Exam Integration"
    subtitle="Integrating all Grade 11 ML topics for end-of-year examination preparation"
    learnSteps={learnSteps}
    task="gr11-ml-exam-integration-t4"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default ExamIntegration;
