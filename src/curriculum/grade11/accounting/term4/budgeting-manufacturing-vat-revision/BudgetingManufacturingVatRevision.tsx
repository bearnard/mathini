import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Revising cash budgets',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>cash budget</strong> plans future cash receipts and payments. Key concepts to revise:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Receipts side:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Cash sales (immediate receipt)</li>
              <li>Debtor collections (using collection schedule)</li>
              <li>Loans and asset sale proceeds</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Payments side:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Creditor payments (using payment schedule)</li>
              <li>Cash purchases and expenses</li>
              <li>Loan repayments and capital expenditure</li>
            </ul>
          </div>
        </div>
        <FinancialStatement
          title="Cash Budget"
          period="October 2024"
          sections={[
            {
              heading: 'Budget summary',
              lines: [
                { label: 'Opening bank balance', amount: 12400 },
                { label: 'Total receipts', amount: 168500 },
                { label: 'Total payments', amount: -151300 },
                { label: 'Closing bank balance', amount: 29600, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">Remember: <strong>depreciation is NOT a cash item</strong> and does not appear in the cash budget.</p>
      </div>
    ),
  },
  {
    title: 'Revising manufacturing costs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Manufacturing costs are classified into three groups. Each must be correctly identified to calculate unit cost.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Direct materials</strong>
            <p className="text-slate-600 text-sm">Raw materials forming part of the product.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Direct labour</strong>
            <p className="text-slate-600 text-sm">Wages of production workers.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Factory overheads</strong>
            <p className="text-slate-600 text-sm">Indirect factory costs (rent, electricity, depreciation of machinery).</p>
          </div>
        </div>
        <FinancialStatement
          title="Production Cost Statement (extract)"
          period="Revision example"
          sections={[
            {
              heading: 'Manufacturing costs',
              lines: [
                { label: 'Direct materials used', amount: 210000 },
                { label: 'Direct labour', amount: 140000 },
                { label: 'Factory overheads', amount: 90000 },
                { label: 'Cost of production', amount: 440000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="font-mono text-blue-700 text-sm mt-2">Unit cost = Total production cost ÷ Units produced</p>
      </div>
    ),
  },
  {
    title: 'Revising inventory valuation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stock valuation affects cost of sales and gross profit. In a period of rising prices:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">FIFO</strong>
            <p className="text-slate-600">Older (cheaper) stock sold first → lower cost of sales → <strong>higher gross profit</strong>.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">WAC</strong>
            <p className="text-slate-600">Averaged cost per unit → moderate cost of sales → <strong>moderate gross profit</strong>.</p>
          </div>
        </div>
        <p className="font-mono text-slate-700 text-sm mt-2">WAC = Total cost of stock available ÷ Total units available</p>
      </div>
    ),
  },
  {
    title: 'Revising VAT',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Key VAT revision points for the final examination:
        </p>
        <TAccount
          title="VAT Control Account"
          debit={[
            { description: 'Input VAT on purchases', amount: 18300 },
          ]}
          credit={[
            { description: 'Output VAT on sales', amount: 24600 },
          ]}
        />
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <ul className="text-slate-600 list-disc list-inside space-y-2">
            <li><strong>Standard rate:</strong> 15%</li>
            <li><strong>Adding VAT:</strong> Price × 1.15</li>
            <li><strong>Extracting VAT:</strong> Inclusive price × 15/115</li>
            <li><strong>Net VAT payable:</strong> Output VAT − Input VAT</li>
            <li><strong>Registration threshold:</strong> R1 million taxable turnover</li>
            <li><strong>Ethics:</strong> charging VAT without registration = fraud; false invoices = criminal conduct</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Which of the following does NOT appear as a cash payment in a cash budget?',
    options: ['Wages', 'Rent', 'Depreciation', 'Loan repayment'],
    answer: 'Depreciation',
    explanation: 'Depreciation is a non-cash accounting entry — no money leaves the business, so it is excluded from the cash budget.',
  },
  {
    prompt: 'Break-even point in units = Fixed costs ÷ Contribution per unit. If fixed costs are R90 000 and contribution per unit is R45, the break-even point is:',
    options: ['2 000 units', '1 500 units', '3 000 units', '1 000 units'],
    answer: '2 000 units',
    explanation: 'R90 000 ÷ R45 = 2 000 units.',
  },
  {
    prompt: 'The VAT amount included in a VAT-inclusive price of R690 is:',
    options: ['R90', 'R103.50', 'R69', 'R95'],
    answer: 'R90',
    explanation: 'VAT = R690 × 15/115 = R90. The VAT-exclusive price is R600.',
  },
  {
    prompt: 'Under FIFO, in a period of rising prices, closing stock is valued at:',
    options: ['The oldest purchase price', 'The average price', 'The most recent purchase price', 'The selling price'],
    answer: 'The most recent purchase price',
    explanation: 'FIFO sells oldest stock first — closing stock is made up of the most recent purchases at the latest (higher) prices.',
  },
  {
    prompt: 'A factory produces 1 000 units. Direct materials = R20 000, direct labour = R15 000, factory overheads = R5 000. Unit cost is:',
    options: ['R35', 'R40', 'R45', 'R50'],
    answer: 'R40',
    explanation: 'Total production cost = R20 000 + R15 000 + R5 000 = R40 000. Unit cost = R40 000 ÷ 1 000 = R40.',
  },
  {
    prompt: 'Credit sales in April are R100 000. Collection: 80% in month of sale, 20% next month. How much is collected in May?',
    options: ['R80 000', 'R20 000', 'R100 000', 'R10 000'],
    answer: 'R20 000',
    explanation: '20% × R100 000 = R20 000 is collected in May (the month after the sale).',
  },
  {
    prompt: 'Net VAT payable to SARS = Output VAT R25 000 − Input VAT R18 000. The amount payable is:',
    options: ['R25 000', 'R18 000', 'R7 000', 'R43 000'],
    answer: 'R7 000',
    explanation: 'Net VAT = R25 000 − R18 000 = R7 000 to be paid to SARS.',
  },
  {
    prompt: 'Under the WAC method, total stock of 40 units costs R800. Closing stock of 10 units is valued at:',
    options: ['R240', 'R200', 'R160', 'R180'],
    answer: 'R200',
    explanation: 'WAC = R800 ÷ 40 = R20 per unit. Closing stock = 10 × R20 = R200.',
  },
  {
    prompt: 'An internal control that prevents a single employee from both approving and recording a payment is:',
    options: ['Physical safeguards', 'Segregation of duties', 'Staff rotation', 'Authorisation limits'],
    answer: 'Segregation of duties',
    explanation: 'Segregation of duties separates the authorisation, recording, and custody functions to reduce fraud risk.',
  },
  {
    prompt: 'A business\'s factory supervisor\'s salary is classified as:',
    options: ['Direct labour', 'Direct material', 'Factory overhead', 'Selling expense'],
    answer: 'Factory overhead',
    explanation: 'The factory supervisor does not work directly on the product — their salary is an indirect manufacturing cost (factory overhead).',
  },
];

const BudgetingManufacturingVatRevision = () => (
  <CapsSubjectTopic
    title="Budgeting, Manufacturing and VAT Revision"
    subtitle="Integrating Terms 3 and 4 content for final examination preparation"
    learnSteps={learnSteps}
    task="gr11-budgeting-manufacturing-vat-revision-t4"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default BudgetingManufacturingVatRevision;
