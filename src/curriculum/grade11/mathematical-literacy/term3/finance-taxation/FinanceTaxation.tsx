import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ml/term3/finance-taxation/diagram.webp", alt: "Finance: Taxation" }, title: 'VAT and indirect taxes', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Tax</strong> is money collected by government to fund public services. There are two main types:</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Direct tax</strong><p className="text-slate-600 text-sm">Paid directly to SARS on income earned. Example: Income Tax (PAYE).</p></div><div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Indirect tax</strong><p className="text-slate-600 text-sm">Added to the price of goods and services. Example: VAT at 15%.</p></div></div><div className="bg-indigo-50 p-4 rounded-xl text-left mt-2 space-y-3"><Formula block>{String.raw`\text{VAT} = \frac{15}{100} \times \text{price}`}</Formula><Formula block>{String.raw`\text{Price incl. VAT} = \text{Price excl. VAT} \times 1.15`}</Formula><Formula block>{String.raw`\text{VAT amount} = \text{Price incl. VAT} \times \frac{15}{115}`}</Formula></div></div>) },
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
  { title: 'Reading a payslip and deductions', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>payslip</strong> (salary advice slip) shows how your gross pay is reduced to net pay through deductions.</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-slate-800">Typical payslip deductions:</p><p className="text-slate-700">• <strong>PAYE</strong> (Pay As You Earn) — income tax deducted monthly.</p><p className="text-slate-700">• <strong>UIF</strong> (Unemployment Insurance Fund) — 1% of gross salary (max R177,12/month).</p><p className="text-slate-700">• <strong>Medical aid</strong> — contribution to health insurance.</p><p className="text-slate-700">• <strong>Pension fund</strong> — retirement savings deduction.</p><Formula block>{String.raw`\text{UIF} = \frac{1}{100} \times \text{gross salary}`}</Formula><Formula block>{String.raw`\text{Net pay} = \text{Gross salary} - \text{Total deductions}`}</Formula></div></div>) },
  { title: 'Income tax and SARS tax tables', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">SARS uses a <strong>tax table</strong> to determine how much income tax a person owes based on their annual taxable income.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3 overflow-x-auto"><p className="font-bold text-yellow-800">Simplified 2024/25 tax brackets (for learners):</p><table className="text-sm border-collapse w-full"><thead><tr className="bg-yellow-100"><th className="border border-yellow-200 px-2 py-1 text-left">Taxable income</th><th className="border border-yellow-200 px-2 py-1 text-left">Tax rate</th></tr></thead><tbody><tr><td className="border border-yellow-200 px-2 py-1">R0 – R237 100</td><td className="border border-yellow-200 px-2 py-1">18%</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R237 101 – R370 500</td><td className="border border-yellow-200 px-2 py-1">R42 678 + 26% over R237 100</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R370 501 – R512 800</td><td className="border border-yellow-200 px-2 py-1">R77 362 + 31% over R370 500</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R512 801 – R673 000</td><td className="border border-yellow-200 px-2 py-1">R121 475 + 36% over R512 800</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R673 001 – R857 900</td><td className="border border-yellow-200 px-2 py-1">R179 147 + 39% over R673 000</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R857 901 – R1 817 000</td><td className="border border-yellow-200 px-2 py-1">R251 258 + 41% over R857 900</td></tr><tr><td className="border border-yellow-200 px-2 py-1">Above R1 817 000</td><td className="border border-yellow-200 px-2 py-1">R644 489 + 45% over R1 817 000</td></tr></tbody></table><Formula block>{String.raw`\text{Tax payable} = \text{Tax from bracket} - \text{rebate}`}</Formula><p className="text-slate-600 text-sm">Primary rebate: R17 235. This is subtracted from calculated tax.</p></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Higher income brackets are taxed at higher marginal rates.</p><DataChart type="bar" xKey="bracket" data={[{ bracket: '0–237k', rate: 18 },{ bracket: '237–370k', rate: 26 },{ bracket: '370–513k', rate: 31 },{ bracket: '513–673k', rate: 36 },{ bracket: '673–858k', rate: 39 },{ bracket: '858k–1.817m', rate: 41 },{ bracket: '1.817m+', rate: 45 }]} series={[{ key: 'rate', label: 'Tax rate (%)', color: '#f59e0b' }]} yLabel="Tax rate (%)" height={240} /></div></div>) },
  { title: 'Tax-inclusive vs tax-exclusive prices', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Prices can be quoted either <strong>including VAT</strong> (tax-inclusive) or <strong>excluding VAT</strong> (tax-exclusive).</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Tax-inclusive (incl. VAT)</strong><p className="text-slate-600 text-sm">The price already includes 15% VAT. This is what you pay.</p><Formula block>{String.raw`\text{Excl. price} = \frac{\text{Incl. price}}{1.15}`}</Formula></div><div className="rounded-xl bg-red-50 p-4 space-y-2"><strong className="text-red-700">Tax-exclusive (excl. VAT)</strong><p className="text-slate-600 text-sm">VAT must still be added. You will pay more than the listed price.</p><Formula block>{String.raw`\text{Incl. price} = \text{Excl. price} \times 1.15`}</Formula></div></div><p className="text-sm text-slate-500">Zero-rated items (basic foods like brown bread and milk) have 0% VAT in South Africa.</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A monthly salary is R22 000. UIF is deducted at 1%. How much UIF is deducted?',
    options: ['R22', 'R220', 'R2 200', 'R22 000'],
    answer: 'R220',
    explanation: 'UIF = 1% of R22 000 = 0,01 × R22 000 = R220.',
  },
  {
    prompt: 'Gross monthly salary: R35 500. Total deductions: R8 420. What is the net pay?',
    options: ['R43 920', 'R27 080', 'R26 080', 'R27 180'],
    answer: 'R27 080',
    explanation: 'Net pay = R35 500 − R8 420 = R27 080.',
  },
  {
    prompt: 'A TV is advertised at R4 600 excluding VAT. What is the VAT-inclusive price?',
    options: ['R5 290', 'R4 690', 'R5 060', 'R5 175'],
    answer: 'R5 290',
    explanation: 'R4 600 × 1,15 = R5 290.',
  },
  {
    prompt: 'A receipt shows a total of R345 including 15% VAT. How much VAT is included?',
    options: ['R45,00', 'R51,75', 'R45,07', 'R52,00'],
    answer: 'R45,00',
    explanation: 'VAT = R345 × (15/115) = R345 × 0,1304... = R45,00. Alternatively: R345 ÷ 1,15 = R300 excl. VAT; VAT = R345 − R300 = R45.',
  },
  {
    prompt: 'Which of the following is a DIRECT tax in South Africa?',
    options: ['VAT', 'Fuel levy', 'Income tax (PAYE)', 'Customs duty'],
    answer: 'Income tax (PAYE)',
    explanation: 'PAYE (Pay As You Earn) is income tax — a direct tax deducted from earnings and paid directly to SARS.',
  },
  {
    prompt: 'A person earns R180 000 per year. Using the tax bracket R0–R237 100 at 18%, what is the annual tax before rebate?',
    options: ['R18 000', 'R32 400', 'R42 678', 'R21 600'],
    answer: 'R32 400',
    explanation: 'Tax = 18% × R180 000 = 0,18 × 180 000 = R32 400.',
  },
  {
    prompt: 'After calculating R32 400 in tax, a primary rebate of R17 235 is subtracted. What is the tax payable?',
    options: ['R49 635', 'R15 165', 'R32 400', 'R17 235'],
    answer: 'R15 165',
    explanation: 'Tax payable = R32 400 − R17 235 = R15 165.',
  },
  {
    prompt: 'Which food item would be zero-rated for VAT in South Africa?',
    options: ['Chocolates', 'Brown bread', 'Chips and crisps', 'Soft drinks'],
    answer: 'Brown bread',
    explanation: 'Basic food items including brown bread, rice and fresh vegetables are zero-rated (0% VAT) in South Africa.',
  },
  {
    prompt: 'PAYE is deducted monthly from an employee\'s salary so that they:',
    options: ['Do not have to pay any tax at all', 'Pay yearly income tax in monthly instalments', 'Pay into the UIF fund and nothing else', 'Receive a tax rebate straight away'],
    answer: 'Pay yearly income tax in monthly instalments',
    explanation: 'PAYE allows tax to be collected throughout the year rather than in one lump sum at year-end.',
  },
];

const FinanceTaxation = () => (
  <CapsSubjectTopic
    title="Finance: Taxation"
    subtitle="VAT, payslip deductions, income tax and SARS tax tables"
    learnSteps={learnSteps}
    task="gr11-ml-taxation-t3"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default FinanceTaxation;
