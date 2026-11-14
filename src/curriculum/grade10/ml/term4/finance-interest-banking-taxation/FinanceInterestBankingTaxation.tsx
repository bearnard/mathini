import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    title: 'Simple Interest',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Simple interest is calculated only on the principal (original) amount. Used in short-term loans, some savings accounts, and basic financial calculations in South Africa.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Simple Interest Formula</h4>
          <Formula block>{String.raw`I = \frac{P \times R \times T}{100}`}</Formula>
          <ul className="space-y-2 text-sm mt-3">
            <li><strong>I</strong> = Interest amount (in Rand)</li>
            <li><strong>P</strong> = Principal (original amount)</li>
            <li><strong>R</strong> = Rate per annum (% per year)</li>
            <li><strong>T</strong> = Time (in years)</li>
          </ul>
          <div className="mt-3">
            <p className="text-sm font-medium">Total amount after interest:</p>
            <Formula block>{String.raw`A = P + I`}</Formula>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: You save R5000 at 6% simple interest for 3 years. How much interest do you earn?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`I = \frac{5000 \times 6 \times 3}{100} = \frac{90\,000}{100} = \text{R}900`}</Formula>
            <Formula block>{String.raw`\text{Total amount} = 5000 + 900 = \text{R}5900`}</Formula>
          </div>
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
    title: 'Compound Interest',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Compound interest is calculated on the principal PLUS accumulated interest. Banks use this for savings accounts and investments. It grows money faster than simple interest.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Compound Interest Formula</h4>
          <Formula block>{String.raw`A = P(1 + i)^n`}</Formula>
          <ul className="space-y-2 text-sm mt-3">
            <li><strong>A</strong> = Final amount</li>
            <li><strong>P</strong> = Principal</li>
            <li><strong>i</strong> = Interest rate per period (as decimal)</li>
            <li><strong>n</strong> = Number of periods</li>
          </ul>
          <Formula block>{String.raw`\text{Interest earned} = A - P`}</Formula>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Invest R10000 at 8% p.a. compound interest for 2 years</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`A = 10\,000(1 + 0.08)^2 = 10\,000(1.08)^2`}</Formula>
            <Formula block>{String.raw`= 10\,000 \times 1.1664 = \text{R}11\,664`}</Formula>
            <Formula block>{String.raw`\text{Interest} = 11\,664 - 10\,000 = \text{R}1664`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Banking Services in South Africa',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          South African banks (FNB, Standard Bank, ABSA, Nedbank, Capitec) offer various accounts and services. Understanding these helps you manage money wisely.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Account Types</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Savings Account:</strong> Earns interest, limited withdrawals</li>
            <li><strong>Current/Cheque Account:</strong> For daily transactions, no/low interest</li>
            <li><strong>Fixed Deposit:</strong> Lock money for period, higher interest</li>
            <li><strong>Credit Card:</strong> Borrow money, pay interest if not repaid in full</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Banking Fees & Charges</h4>
          <ul className="space-y-2 text-sm">
            <li>Monthly account fees</li>
            <li>ATM withdrawal fees</li>
            <li>Debit order fees</li>
            <li>Cash deposit fees</li>
            <li>Overdraft interest (expensive!)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Income Tax in South Africa',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          SARS (South African Revenue Service) collects income tax from workers and businesses. Understanding tax helps you know your take-home pay.
        </p>
        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Tax Deductions from Salary</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>PAYE:</strong> Pay As You Earn (income tax)</li>
            <li><strong>UIF:</strong> Unemployment Insurance Fund (1% of salary)</li>
            <li><strong>Pension/Provident Fund:</strong> Retirement savings</li>
            <li><strong>Medical Aid:</strong> Health insurance contributions</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Calculate net salary</p>
          <div className="space-y-1 text-sm">
            <p>Gross salary: R18 000</p>
            <p>PAYE (tax): R2 500</p>
            <p>UIF: R180 (1% of R18000)</p>
            <p>Pension: R1 800 (10%)</p>
            <Formula block>{String.raw`\text{Net salary} = 18\,000 - 2500 - 180 - 1800 = \text{R}13\,520`}</Formula>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-sm">
          <p className="font-medium mb-2">VAT (Value-Added Tax)</p>
          <p>15% added to most purchases in South Africa. Included in price at retail stores, but shown separately on invoices.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Tracking Growth of Savings',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Financial graphs make it easier to compare account balances over time. They are especially useful when discussing how compound interest grows faster than simple interest.
        </p>
        <DataChart
          data={[
            { year: 'Year 1', value: 10800 },
            { year: 'Year 2', value: 11664 },
            { year: 'Year 3', value: 12597 },
            { year: 'Year 4', value: 13605 },
          ]}
          series={[{ key: 'value', label: 'Savings balance (R)', color: '#22c55e' }]}
          xKey="year"
          type="line"
        />
        <p className="text-sm text-slate-600">
          A curved upward trend suggests compound growth, because interest is being earned on the previous interest as well as on the original amount.
        </p>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'What is simple interest earned on R5000 at 8% per annum for 2 years?',
    options: ['R400', 'R800', 'R1000', 'R1600'],
    answer: 'R800',
    explanation: 'Simple Interest = Principal × Rate × Time = 5000 × 0.08 × 2 = R800',
  },
  {
    prompt: 'If income tax is 18% on a salary of R30000, what is the tax amount?',
    options: ['R5400', 'R6000', 'R2400', 'R24600'],
    answer: 'R5400',
    explanation: 'Tax = 18% of R30000 = 0.18 × 30000 = R5400',
  },
  {
    prompt: 'R8000 is invested at 10% compound interest for 2 years. What is the final amount?',
    options: ['R9600', 'R9680', 'R10000', 'R8800'],
    answer: 'R9680',
    explanation: 'A = 8000(1.10)² = 8000 × 1.21 = R9680',
  },
  {
    prompt: 'Gross salary is R25000. Deductions: PAYE R3500, UIF R250, Pension R2500. What is net salary?',
    options: ['R18750', 'R21500', 'R19000', 'R20000'],
    answer: 'R18750',
    explanation: 'Net = 25000 - 3500 - 250 - 2500 = R18750',
  },
];

const FinanceInterestBankingTaxation = () => (
  <CapsSubjectTopic
    title="Finance: Interest, Banking and Taxation"
    subtitle="Advanced financial concepts"
    learnSteps={learnSteps}
    task="gr10-finance-interest-banking-taxation-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default FinanceInterestBankingTaxation;
