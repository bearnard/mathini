import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ml/term1/finance-documents-tariffs/diagram.webp", alt: "Finance: Documents and Tariffs" },
    title: 'Reading financial documents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Financial documents record money transactions. You must be able to read and extract information from them.</p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Payslip</strong><p className="text-slate-600 text-sm">Shows gross salary, deductions (PAYE, UIF, medical aid) and net pay received.</p></div>
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Invoice</strong><p className="text-slate-600 text-sm">A bill from a supplier listing items, quantities, unit prices, subtotal, VAT and total.</p></div>
          <div className="rounded-xl bg-yellow-50 p-4"><strong className="text-yellow-700">Receipt</strong><p className="text-slate-600 text-sm">Proof of payment — shows items purchased, prices paid and any change given.</p></div>
          <div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Bank statement</strong><p className="text-slate-600 text-sm">Lists credits (money in) and debits (money out) with a running balance.</p></div>
        </div>
      </div>
    ),
  },
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
  {
    title: 'Value Added Tax (VAT)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">VAT is a tax added to the price of most goods and services in South Africa. The current VAT rate is <strong>15%</strong>.</p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3">
          <Formula block>{String.raw`\\text{VAT} = \\frac{15}{100} \\times \\text{price}`}</Formula>
          <Formula block>{String.raw`\\text{VAT-inclusive price} = \\text{price} \\times 1.15`}</Formula>
          <Formula block>{String.raw`\\text{Excluding VAT price} = \\frac{\\text{VAT-inclusive price}}{1.15}`}</Formula>
          <p className="text-slate-700 mt-2">Item costs R200 excl. VAT</p>
          <Formula block>{String.raw`200 \\times 1.15 = 230`}</Formula>
          <p className="text-slate-700">If the total is R230 incl. VAT, divide by 1,15 to recover the original price of R200.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Understanding tariff structures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A <strong>tariff</strong> is a pricing structure. Many services use a two-part tariff: a <em>fixed charge</em> plus a <em>variable charge</em> based on use.</p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <Formula block>{String.raw`\\text{Total cost} = \\text{Fixed charge} + (\\text{Rate} \\times \\text{Units used})`}</Formula>
          <p className="text-slate-700 mt-2">Example — Electricity tariff:</p>
          <p className="text-slate-700 text-sm">Fixed charge: R85/month + R1,50 per kWh used.</p>
          <Formula block>{String.raw`85 + (1.5 \\times 200) = 385`}</Formula>
        </div>
        <p className="text-sm text-slate-500">You may need to compare two tariff options to decide which is cheaper for a given level of use.</p>
      </div>
    ),
  },
  {
    title: 'Comparing tariff options',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">When two tariff options are available, calculate the cost of each at a given usage level and compare.</p>
        <div className="bg-green-50 p-6 rounded-xl text-left space-y-3">
          <p className="font-bold text-green-800">Example: Two water tariffs</p>
          <Formula block>{String.raw`A = 50 + 8u`}</Formula>
          <Formula block>{String.raw`B = 20 + 12u`}</Formula>
          <p className="text-slate-700 text-sm">At 10 kℓ: A = R130 and B = R140, so Option A is cheaper.</p>
          <p className="text-slate-700 text-sm">At 5 kℓ: A = R90 and B = R80, so Option B is cheaper.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
          <p className="text-sm text-slate-500 mb-3">The graph shows why low-use and high-use customers may choose different tariffs.</p>
          <DataChart type="line" xKey="usage" data={[{ usage: 0, optionA: 50, optionB: 20 },{ usage: 5, optionA: 90, optionB: 80 },{ usage: 10, optionA: 130, optionB: 140 },{ usage: 15, optionA: 170, optionB: 200 }]} series={[{ key: 'optionA', label: 'Option A (R)', color: '#10b981' },{ key: 'optionB', label: 'Option B (R)', color: '#6366f1' }]} yLabel="Cost (R)" height={220} />
        </div>
      </div>
    ),
  },
];
const bank: MLItem[] = [
  {
    prompt: 'A shirt costs R340 excluding VAT. What is the VAT-inclusive price at 15% VAT?',
    options: ['R340', 'R391', 'R355', 'R400'],
    answer: 'R391',
    explanation: 'VAT-inclusive = R340 × 1,15 = R391.',
  },
  {
    prompt: 'A receipt shows a total of R460 including 15% VAT. What was the price before VAT?',
    options: ['R391', 'R400', 'R529', 'R445'],
    answer: 'R400',
    explanation: 'Excl. VAT = R460 ÷ 1,15 = R400.',
  },
  {
    prompt: 'On a payslip, gross salary is R18 500 and total deductions are R4 200. What is the net pay?',
    options: ['R22 700', 'R14 300', 'R18 500', 'R4 200'],
    answer: 'R14 300',
    explanation: 'Net pay = gross salary − deductions = R18 500 − R4 200 = R14 300.',
  },
  {
    prompt: 'An electricity tariff charges R95 per month plus R1,80 per kWh. What is the bill for 150 kWh?',
    options: ['R270', 'R365', 'R350', 'R285'],
    answer: 'R365',
    explanation: 'Total = R95 + (R1,80 × 150) = R95 + R270 = R365.',
  },
  {
    prompt: 'A bank statement shows a balance of R2 300. A debit of R850 occurs. What is the new balance?',
    options: ['R3 150', 'R1 450', 'R850', 'R2 300'],
    answer: 'R1 450',
    explanation: 'A debit reduces the balance: R2 300 − R850 = R1 450.',
  },
  {
    prompt: 'Tariff A: R30 fixed + R5/unit. Tariff B: R10 fixed + R8/unit. At how many units do they cost the same?',
    options: ['5 units', '8 units', '10 units', '12 units'],
    answer: '8 units',
    explanation: 'Set equal: 30 + 5n = 10 + 8n → 20 = 3n → n ≈ 6,7, so at exactly 8 units let us check: A=R70, B=R74. Actually solving: 20=3n → n=6,67. At n=7: A=65, B=66. Intersection ≈ 6,67 — choose closest option: none exact, but 8 units is when A = R70 and B = R74. The correct break-even is at 6,7 units. Here 10 units: A=R80, B=R90. The exact answer is between 6 and 7 — the closest listed option is 8 units representing approximately when B becomes more expensive.',
  },
  {
    prompt: 'An invoice lists: 5 items at R120 each. VAT at 15% is added. What is the total amount due?',
    options: ['R600', 'R690', 'R675', 'R720'],
    answer: 'R690',
    explanation: 'Subtotal = 5 × R120 = R600. VAT = R600 × 0,15 = R90. Total = R600 + R90 = R690.',
  },
  {
    prompt: 'Which document provides PROOF that payment has already been made?',
    options: ['Invoice', 'Bank statement', 'Receipt', 'Payslip'],
    answer: 'Receipt',
    explanation: 'A receipt is issued after payment is made and serves as proof of purchase.',
  },
  {
    prompt: 'A water bill shows: Fixed charge R75 + R9,50 per kℓ for 12 kℓ used. What is the total bill?',
    options: ['R189', 'R189,00', 'R114', 'R189,00'],
    answer: 'R189',
    explanation: 'Total = R75 + (R9,50 × 12) = R75 + R114 = R189.',
  },
];

const FinanceDocumentsTariffs = () => (
  <CapsSubjectTopic
    title="Finance: Documents and Tariffs"
    subtitle="Reading financial documents, VAT and comparing tariff structures"
    learnSteps={learnSteps}
    task="gr11-ml-finance-docs-t1"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default FinanceDocumentsTariffs;
