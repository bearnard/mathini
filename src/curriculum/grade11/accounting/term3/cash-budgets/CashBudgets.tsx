import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a cash budget?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>cash budget</strong> is a forward-looking plan that shows expected cash <em>receipts</em> and cash <em>payments</em> for a future period, resulting in a projected closing bank balance.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Cash receipts include:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Cash sales</li>
              <li>Collections from debtors</li>
              <li>Loans received</li>
              <li>Proceeds from asset sales</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cash payments include:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Payments to creditors</li>
              <li>Cash purchases</li>
              <li>Operating expenses (rent, salaries)</li>
              <li>Loan repayments</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cash budget format',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The cash budget is typically presented month by month:
        </p>
        <FinancialStatement
          title="Cash Budget"
          period="July 2024"
          sections={[
            {
              heading: 'Opening balance',
              lines: [
                { label: 'Opening bank balance', amount: 18500 },
              ],
            },
            {
              heading: 'Receipts',
              lines: [
                { label: 'Cash sales', amount: 42000 },
                { label: 'Collections from debtors', amount: 68500 },
                { label: 'Loan received', amount: 30000 },
                { label: 'Total receipts', amount: 140500, isSubtotal: true },
              ],
            },
            {
              heading: 'Payments',
              lines: [
                { label: 'Payments to creditors', amount: -55700 },
                { label: 'Rent paid', amount: -12000 },
                { label: 'Salaries', amount: -26500 },
                { label: 'Vehicle deposit', amount: -35000 },
                { label: 'Total payments', amount: -129200, isSubtotal: true },
              ],
            },
            {
              heading: 'Result',
              lines: [
                { label: 'Closing bank balance', amount: 29800, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">A negative closing balance means a projected <strong>cash shortfall</strong> (overdraft). This is an early warning that allows management to act.</p>
      </div>
    ),
  },
  {
    title: 'Debtors collection schedule',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Not all credit sales are collected immediately. A <strong>debtors collection schedule</strong> spreads expected cash collections across months based on the agreed payment terms.
        </p>
        <FinancialStatement
          title="Debtors Collection Schedule"
          period="April 2024"
          sections={[
            {
              heading: 'Collections expected',
              lines: [
                { label: '40% of March credit sales (R50 000)', amount: 20000 },
                { label: '60% of April credit sales (R50 000)', amount: 30000 },
                { label: 'Total debtors collections for April', amount: 50000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">If the business collects 60% in the month of sale and 40% in the following month, April receipts include part of March's sales and part of April's sales.</p>
      </div>
    ),
  },
  {
    title: 'Analysing a cash shortfall',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>cash shortfall</strong> (projected overdraft) does not mean the business is unprofitable — it means cash timing is a problem. Management must respond proactively.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Possible causes:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Slow debtor collections</li>
              <li>Large once-off payments</li>
              <li>High inventory purchases</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Possible solutions:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Negotiate a short-term bank overdraft</li>
              <li>Offer debtors a discount for early payment</li>
              <li>Delay non-urgent capital expenditure</li>
              <li>Reduce partner drawings temporarily</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The primary purpose of a cash budget is to:',
    options: ['Calculate the net profit for the year', 'Forecast cash receipts and payments to manage liquidity', 'Work out the tax that is payable to SARS', 'Prepare the statement of financial position'],
    answer: 'Forecast cash receipts and payments to manage liquidity',
    explanation: 'A cash budget helps management anticipate cash shortfalls or surpluses so they can take action before problems arise.',
  },
  {
    prompt: 'In a cash budget, the closing bank balance for one month becomes the:',
    options: [
      'Total receipts for the next month',
      'Opening bank balance for the next month',
      'Total payments for the next month',
      'Net profit for the next month',
    ],
    answer: 'Opening bank balance for the next month',
    explanation: 'The closing balance flows directly into the next month as the opening balance — keeping the budget continuous.',
  },
  {
    prompt: 'Credit sales of R80 000 are made in June. Collection terms are 70% in the month of sale and 30% the following month. How much is collected in June?',
    options: ['R24 000', 'R56 000', 'R80 000', 'R30 000'],
    answer: 'R56 000',
    explanation: '70% × R80 000 = R56 000 collected in June; R24 000 is collected in July.',
  },
  {
    prompt: 'Which of the following is a cash RECEIPT in a cash budget?',
    options: ['Payment of rent', 'Repayment of a bank loan', 'Collections from debtors', 'Purchase of inventory on credit'],
    answer: 'Collections from debtors',
    explanation: 'Collections from debtors represent actual cash flowing into the business — a cash receipt in the budget.',
  },
  {
    prompt: 'Which of the following is NOT included as a cash payment in a cash budget?',
    options: ['Wages paid in cash', 'Depreciation', 'Rent paid to landlord', 'Cash purchases of inventory'],
    answer: 'Depreciation',
    explanation: 'Depreciation is a non-cash expense — no cash leaves the business when depreciation is recorded, so it does not appear in the cash budget.',
  },
  {
    prompt: 'A projected closing bank balance of −R15 000 in the cash budget means:',
    options: ['The business will earn a profit of R15 000', 'The business will have a cash surplus of R15 000', 'A projected cash shortfall (overdraft) of R15 000', 'The business has paid all of its creditors'],
    answer: 'A projected cash shortfall (overdraft) of R15 000',
    explanation: 'A negative closing balance means projected payments exceed projected receipts — the business will need external funding or cost cuts.',
  },
  {
    prompt: 'A business can solve a projected cash shortfall by:',
    options: [
      'Increasing non-cash expenses like depreciation',
      'Negotiating a short-term overdraft facility with the bank',
      'Ignoring the shortfall until the end of the year',
      'Reducing sales to lower costs',
    ],
    answer: 'Negotiating a short-term overdraft facility with the bank',
    explanation: 'A bank overdraft provides temporary funding to bridge cash flow gaps — it is a practical response to a projected cash shortfall.',
  },
  {
    prompt: 'Creditors of R40 000 are paid in two equal instalments: 50% in the month of purchase and 50% in the following month. Purchases in May = R40 000. How much cash is paid in June?',
    options: ['R40 000', 'R10 000', 'R20 000', 'R0'],
    answer: 'R20 000',
    explanation: '50% × R40 000 = R20 000 is paid in the following month (June).',
  },
  {
    prompt: 'A cash budget shows a large surplus in November. Management should:',
    options: ['Ignore it, as it will be used up automatically', 'Consider investing the surplus or paying off costly debt', 'Raise the expenses at once to use it up', 'Close the business for the rest of the month'],
    answer: 'Consider investing the surplus or paying off costly debt',
    explanation: 'Idle cash earns nothing — management should plan to invest surplus funds productively or pay off high-interest debt.',
  },
  {
    prompt: 'Why is it important to distinguish between cash sales and credit sales in a cash budget?',
    options: ['Credit sales are never collected from debtors', 'Cash sales bring cash at once; credit sales are collected later', 'Cash sales are left out of the income statement', 'The two are the same for a cash budget'],
    answer: 'Cash sales bring cash at once; credit sales are collected later',
    explanation: 'Timing of cash inflows differs — cash sales enter the budget in the month of sale, while credit sales appear based on the debtors collection schedule.',
  },
];

const CashBudgets = () => (
  <CapsSubjectTopic
    title="Cash Budgets"
    subtitle="Planning future cash flows and managing projected shortfalls"
    learnSteps={learnSteps}
    task="gr11-cash-budgets-t3"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default CashBudgets;
