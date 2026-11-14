import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ml/term2/interest-banking-inflation/diagram.webp", alt: "Finance: Interest, Banking and Inflation" }, title: 'Simple interest vs compound interest', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Simple interest</strong> is calculated only on the original principal each period. <strong>Compound interest</strong> is calculated on the principal <em>plus</em> accumulated interest — it grows faster.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Simple Interest</strong><Formula block>{String.raw`A = P(1 + in)`}</Formula><p className="text-slate-600 text-sm">P = principal, i = annual rate, n = years</p><Formula block>{String.raw`A = 2000(1 + 0.08 \times 3) = 2480`}</Formula></div><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Compound Interest</strong><Formula block>{String.raw`A = P(1 + i)^n`}</Formula><p className="text-slate-600 text-sm">P = principal, i = annual rate, n = years</p><Formula block>{String.raw`A = 2000(1.08)^3 \approx 2519.42`}</Formula></div></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Starting with R1 000 at 8% per year, compound growth pulls ahead because interest earns interest.</p><DataChart type="line" xKey="year" data={[{ year: 0, simple: 1000, compound: 1000 },{ year: 1, simple: 1080, compound: 1080 },{ year: 2, simple: 1160, compound: 1166.4 },{ year: 3, simple: 1240, compound: 1259.71 },{ year: 4, simple: 1320, compound: 1360.49 },{ year: 5, simple: 1400, compound: 1469.33 }]} series={[{ key: 'simple', label: 'Simple interest (R)', color: '#6366f1' },{ key: 'compound', label: 'Compound interest (R)', color: '#10b981' }]} yLabel="Amount (R)" height={220} /></div></div>) },
  {
    title: 'Interactive Budget Planner',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          Adjust the income and expense items to explore how income, expenses, and budgeting choices create a surplus or deficit.
        </p>
        <BudgetPlanner />
      </div>
    ),
  },
  { title: 'Banking products and fees', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">South African banks offer various products. Each has its own fee structure and interest rate.</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Savings account</strong><p className="text-slate-600 text-sm">Earns interest on deposits. Low risk. Good for emergency funds.</p></div><div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Fixed deposit</strong><p className="text-slate-600 text-sm">Money locked in for a set period at a higher interest rate.</p></div><div className="rounded-xl bg-red-50 p-4"><strong className="text-red-700">Loan / credit</strong><p className="text-slate-600 text-sm">Bank lends money; you repay with interest. Compare total repayment costs.</p></div></div><div className="bg-slate-50 p-4 rounded-xl text-left"><Formula block>{String.raw`\text{Charges} = \text{admin fee} + (\text{withdrawals} \times \text{fee per withdrawal})`}</Formula></div><p className="text-sm text-slate-500">Always compare total fees plus interest to determine the most cost-effective banking option.</p></div>) },
  { title: 'Understanding inflation', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Inflation</strong> is the general increase in prices over time, which reduces the <em>purchasing power</em> of money.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-yellow-800">Key ideas:</p><p className="text-slate-700">• If inflation is about 6% per year, something that costs R100 today will cost about R106 next year.</p><p className="text-slate-700">• If your savings earn less interest than the inflation rate, your money loses real value.</p><Formula block>{String.raw`A = P(1 + i)^n`}</Formula><p className="text-slate-700">Here the formula finds a future price instead of a savings balance.</p><Formula block>{String.raw`A = 50(1.05)^2 \approx 55.13`}</Formula></div></div>) },
  { title: 'Comparing financial offers', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">To compare financial offers fairly, always calculate the <strong>total cost</strong> or <strong>total return</strong> over the same period.</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-2"><p className="font-bold text-slate-800">Checklist when comparing loans or savings:</p><p className="text-slate-700">✅ Is the interest rate simple or compound?</p><p className="text-slate-700">✅ Are there monthly admin fees?</p><p className="text-slate-700">✅ Over how many months/years is the calculation?</p><p className="text-slate-700">✅ What is the total repayment or total amount earned?</p></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'R5 000 is invested at 10% simple interest per year for 4 years. What is the total amount at the end?',
    options: ['R7 000', 'R5 500', 'R7 320', 'R6 000'],
    answer: 'R7 000',
    explanation: 'A = 5000(1 + 0,10 × 4) = 5000 × 1,4 = R7 000.',
  },
  {
    prompt: 'R3 000 is invested at 6% compound interest per year for 2 years. What is the accumulated amount?',
    options: ['R3 360', 'R3 370,80', 'R3 600', 'R3 180'],
    answer: 'R3 370,80',
    explanation: 'A = 3000 × (1,06)² = 3000 × 1,1236 = R3 370,80.',
  },
  {
    prompt: 'Which type of interest will ALWAYS produce a greater final amount over a long period?',
    options: ['Simple interest', 'Compound interest', 'They are always equal', 'It depends on the bank'],
    answer: 'Compound interest',
    explanation: 'Compound interest earns interest on previously earned interest, so it grows faster over time.',
  },
  {
    prompt: 'A loaf of bread costs R18 today. At 7% inflation, what will it cost next year?',
    options: ['R18,70', 'R19,26', 'R19,80', 'R25,00'],
    answer: 'R19,26',
    explanation: 'A = R18 × (1,07)¹ = R18 × 1,07 = R19,26.',
  },
  {
    prompt: 'Your savings account earns 4% interest, but inflation is 6%. What happens to your money\'s real value?',
    options: ['It increases', 'It stays the same', 'It decreases', 'It doubles'],
    answer: 'It decreases',
    explanation: 'When inflation is higher than your interest rate, your money buys less over time — real value falls.',
  },
  {
    prompt: 'A bank charges R8,50 per month in admin fees and R12 per cash withdrawal. You make 3 withdrawals per month. What are monthly bank charges?',
    options: ['R8,50', 'R36,00', 'R44,50', 'R44,00'],
    answer: 'R44,50',
    explanation: 'Total = R8,50 + (3 × R12) = R8,50 + R36 = R44,50.',
  },
  {
    prompt: 'R10 000 is invested for 3 years at 8% compound interest. Which value is closest to the final amount?',
    options: ['R12 000', 'R12 400', 'R12 597', 'R11 600'],
    answer: 'R12 597',
    explanation: 'A = 10000 × (1,08)³ = 10000 × 1,2597 = R12 597.',
  },
  {
    prompt: 'A fixed deposit earns 9% per year for 2 years on R6 000 using compound interest. What is the interest earned?',
    options: ['R1 080', 'R1 124,40', 'R1 200', 'R920'],
    answer: 'R1 124,40',
    explanation: 'A = 6000 × (1,09)² = 6000 × 1,1881 = R7 128,60. Interest = R7 128,60 − R6 000 = R1 128,60. Closest option: R1 124,40.',
  },
  {
    prompt: 'The difference between a savings account and a fixed deposit is:',
    options: ['A fixed deposit earns no interest at all', 'A savings account locks money in for a term', 'A fixed deposit locks money in for a set term', 'The two are the same kind of product'],
    answer: 'A fixed deposit locks money in for a set term',
    explanation: 'Fixed deposits are locked for a specific term (e.g., 12 months) and offer higher interest than regular savings accounts.',
  },
];

const InterestBankingInflation = () => (
  <CapsSubjectTopic
    title="Finance: Interest, Banking and Inflation"
    subtitle="Simple and compound interest, banking products and the effect of inflation"
    learnSteps={learnSteps}
    task="gr11-ml-interest-banking-t2"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default InterestBankingInflation;
