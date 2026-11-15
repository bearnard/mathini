import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  { title: 'VAT and indirect taxes', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Tax</strong> is money collected by government to fund public services. There are two main types:</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Direct tax</strong><p className="text-slate-600 text-sm">Paid directly to SARS on income earned. Example: Income Tax (PAYE).</p></div><div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Indirect tax</strong><p className="text-slate-600 text-sm">Added to the price of goods and services. Example: VAT at 15%.</p></div></div><div className="bg-indigo-50 p-4 rounded-xl text-left mt-2 space-y-3"><Formula block>{String.raw`\text{VAT} = \frac{15}{100} \times \text{price}`}</Formula><Formula block>{String.raw`\text{Price incl. VAT} = \text{Price excl. VAT} \times 1{,}15`}</Formula><Formula block>{String.raw`\text{VAT amount} = \text{Price incl. VAT} \times \frac{15}{115}`}</Formula></div></div>) },
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
  { title: 'Reading a payslip and deductions', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>payslip</strong> (salary advice slip) shows how your gross pay is reduced to net pay through deductions.</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-slate-800">Typical payslip deductions:</p><p className="text-slate-700">• <strong>PAYE</strong> (Pay As You Earn) — income tax deducted monthly.</p><p className="text-slate-700">• <strong>UIF</strong> (Unemployment Insurance Fund) — 1% of gross salary, up to a ceiling of R17 712 a month (so at most R177,12).</p><p className="text-slate-700">• <strong>Medical aid</strong> — contribution to health insurance.</p><p className="text-slate-700">• <strong>Pension fund</strong> — retirement savings deduction.</p><Formula block>{String.raw`\text{UIF} = \frac{1}{100} \times \text{gross salary (up to the R17\,712 ceiling)}`}</Formula><Formula block>{String.raw`\text{Net pay} = \text{Gross salary} - \text{Total deductions}`}</Formula></div></div>) },
  { title: 'Income tax and SARS tax tables', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">SARS uses a <strong>tax table</strong> to determine how much income tax a person owes based on their annual taxable income.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3 overflow-x-auto"><p className="font-bold text-yellow-800">2026/27 tax brackets (SARS, 1 March 2026 to 28 February 2027):</p><table className="text-sm border-collapse w-full"><thead><tr className="bg-yellow-100"><th className="border border-yellow-200 px-2 py-1 text-left">Taxable income</th><th className="border border-yellow-200 px-2 py-1 text-left">Tax rate</th></tr></thead><tbody><tr><td className="border border-yellow-200 px-2 py-1">R0 – R245 100</td><td className="border border-yellow-200 px-2 py-1">18%</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R245 101 – R383 100</td><td className="border border-yellow-200 px-2 py-1">R44 118 + 26% over R245 100</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R383 101 – R530 200</td><td className="border border-yellow-200 px-2 py-1">R79 998 + 31% over R383 100</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R530 201 – R695 800</td><td className="border border-yellow-200 px-2 py-1">R125 599 + 36% over R530 200</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R695 801 – R887 000</td><td className="border border-yellow-200 px-2 py-1">R185 215 + 39% over R695 800</td></tr><tr><td className="border border-yellow-200 px-2 py-1">R887 001 – R1 878 600</td><td className="border border-yellow-200 px-2 py-1">R259 783 + 41% over R887 000</td></tr><tr><td className="border border-yellow-200 px-2 py-1">Above R1 878 600</td><td className="border border-yellow-200 px-2 py-1">R666 339 + 45% over R1 878 600</td></tr></tbody></table><Formula block>{String.raw`\text{Tax payable} = \text{Tax from bracket} - \text{rebate}`}</Formula><p className="text-slate-600 text-sm">Primary rebate (2026/27): R17 820. This is subtracted from calculated tax. Tax tables change with each Budget, so in an exam use the table in the question.</p></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Higher income brackets are taxed at higher marginal rates.</p><DataChart type="bar" xKey="bracket" data={[{ bracket: '0–245k', rate: 18 },{ bracket: '245–383k', rate: 26 },{ bracket: '383–530k', rate: 31 },{ bracket: '530–696k', rate: 36 },{ bracket: '696–887k', rate: 39 },{ bracket: '887k–1,879m', rate: 41 },{ bracket: '1,879m+', rate: 45 }]} series={[{ key: 'rate', label: 'Tax rate (%)', color: '#f59e0b' }]} yLabel="Tax rate (%)" height={240} /></div></div>) },
  { title: 'Tax-inclusive vs tax-exclusive prices', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Prices can be quoted either <strong>including VAT</strong> (tax-inclusive) or <strong>excluding VAT</strong> (tax-exclusive).</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Tax-inclusive (incl. VAT)</strong><p className="text-slate-600 text-sm">The price already includes 15% VAT. This is what you pay.</p><Formula block>{String.raw`\text{Excl. price} = \frac{\text{Incl. price}}{1{,}15}`}</Formula></div><div className="rounded-xl bg-red-50 p-4 space-y-2"><strong className="text-red-700">Tax-exclusive (excl. VAT)</strong><p className="text-slate-600 text-sm">VAT must still be added. You will pay more than the listed price.</p><Formula block>{String.raw`\text{Incl. price} = \text{Excl. price} \times 1{,}15`}</Formula></div></div><p className="text-sm text-slate-500">Zero-rated items (basic foods like brown bread and milk) have 0% VAT in South Africa.</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A monthly salary is R22 000. UIF is 1% of salary, up to a ceiling of R17 712 a month. How much UIF is deducted?',
    options: ['R22', 'R177,12', 'R220', 'R2 200'],
    answer: 'R177,12',
    explanation: 'The salary is above the ceiling, so UIF = 1% of R17 712 = 0,01 × R17 712 = R177,12 (not 1% of R22 000, which would be R220).',
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
    prompt: 'A person earns R180 000 per year. Using the 2026/27 tax bracket R0–R245 100 at 18%, what is the annual tax before rebate?',
    options: ['R18 000', 'R32 400', 'R44 118', 'R21 600'],
    answer: 'R32 400',
    explanation: 'Tax = 18% × R180 000 = 0,18 × 180 000 = R32 400.',
  },
  {
    prompt: 'After calculating R32 400 in tax, the 2026/27 primary rebate of R17 820 is subtracted. What is the tax payable?',
    options: ['R50 220', 'R14 580', 'R32 400', 'R17 820'],
    answer: 'R14 580',
    explanation: 'Tax payable = R32 400 − R17 820 = R14 580.',
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
