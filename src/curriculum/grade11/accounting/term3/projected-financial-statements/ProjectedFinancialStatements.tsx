import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/acc/term3/projected-financial-statements/diagram.webp", alt: "Projected Statement of Comprehensive Income" },
    title: 'What is a projected income statement?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>projected statement of comprehensive income</strong> is a future-focused income statement that estimates expected revenue, cost of sales, and expenses for a coming period based on stated assumptions.
        </p>
        <div className="bg-blue-50 p-5 rounded-xl text-left">
          <p className="font-bold text-blue-700">Key purpose:</p>
          <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
            <li>Plan for profitability before the period begins</li>
            <li>Set targets and benchmarks for performance</li>
            <li>Identify the effect of pricing or cost changes in advance</li>
            <li>Support decision-making for the partnership</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Building the projected income statement',
    content: (
      <div className="space-y-4 text-center">
        <FinancialStatement
          title="Projected Statement of Comprehensive Income"
          period="Budget for year ending 28 February 2025"
          sections={[
            {
              heading: 'Revenue',
              lines: [
                { label: 'Projected sales', amount: 1320000 },
                { label: 'Projected cost of sales', amount: -726000 },
                { label: 'Projected gross profit', amount: 594000, isSubtotal: true },
              ],
            },
            {
              heading: 'Other income and expenses',
              lines: [
                { label: 'Other income', amount: 24000 },
                { label: 'Wages and salaries', amount: -180000, indent: 1 },
                { label: 'Rent expense', amount: -66000, indent: 1 },
                { label: 'Marketing expense', amount: -42000, indent: 1 },
                { label: 'Depreciation', amount: -36000, indent: 1 },
              ],
            },
            {
              heading: 'Result',
              lines: [
                { label: 'Projected net profit', amount: 294000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">Each line is calculated from given assumptions such as percentage changes or fixed-cost figures.</p>
      </div>
    ),
  },
  {
    title: 'Common assumptions used',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Projected statements are only as reliable as their underlying <strong>assumptions</strong>. CAPS exam questions will give you these assumptions explicitly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Revenue assumptions:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Sales expected to increase by X%</li>
              <li>Selling price per unit increases by X%</li>
              <li>Units sold remain constant</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Cost assumptions:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Cost of sales remains X% of sales</li>
              <li>Fixed expenses unchanged</li>
              <li>Variable costs increase in line with sales</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Budget variances and their impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>variance</strong> is the difference between the budgeted (projected) figure and the actual figure. Variances guide management to take corrective action.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <FinancialStatement
            title="Budgeted Results"
            period="Year ending 28 February 2025"
            sections={[
              {
                heading: 'Budget',
                lines: [
                  { label: 'Sales', amount: 1320000 },
                  { label: 'Cost of sales', amount: -726000 },
                  { label: 'Net profit', amount: 294000, isTotal: true },
                ],
              },
            ]}
          />
          <FinancialStatement
            title="Actual Results"
            period="Year ending 28 February 2025"
            sections={[
              {
                heading: 'Actual',
                lines: [
                  { label: 'Sales', amount: 1280000 },
                  { label: 'Cost of sales', amount: -742000 },
                  { label: 'Net profit', amount: 248000, isTotal: true },
                ],
              },
            ]}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Favourable variance:</strong>
            <p className="text-slate-600">Actual income exceeds budget, or actual costs are below budget — both result in higher-than-expected profit.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unfavourable variance:</strong>
            <p className="text-slate-600">Actual income is below budget, or actual costs exceed budget — both result in lower-than-expected profit.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'A projected statement of comprehensive income is used to:',
    options: [
      'Record actual transactions for the current year',
      'Estimate future revenue, costs, and profit based on stated assumptions',
      'Reconcile the bank statement',
      'Calculate depreciation on fixed assets',
    ],
    answer: 'Estimate future revenue, costs, and profit based on stated assumptions',
    explanation: 'A projected income statement is a planning tool that helps partners understand expected profitability before the period begins.',
  },
  {
    prompt: 'Current year sales are R500 000. Sales are projected to increase by 10% next year. Projected sales are:',
    options: ['R510 000', 'R550 000', 'R490 000', 'R600 000'],
    answer: 'R550 000',
    explanation: 'R500 000 × 110% = R550 000.',
  },
  {
    prompt: 'Cost of sales is always 40% of sales. If projected sales are R600 000, projected cost of sales is:',
    options: ['R250 000', 'R200 000', 'R240 000', 'R260 000'],
    answer: 'R240 000',
    explanation: '40% × R600 000 = R240 000.',
  },
  {
    prompt: 'Which of the following is a budget assumption?',
    options: [
      'Actual sales of R350 000 were achieved',
      'All expenses will increase by 5% compared to the current year',
      'The bank reconciliation has been completed',
      'Partner A received a salary of R20 000',
    ],
    answer: 'All expenses will increase by 5% compared to the current year',
    explanation: 'A budget assumption is a stated prediction about how a figure will behave in the future — used to calculate projected amounts.',
  },
  {
    prompt: 'Actual sales were R480 000. Budgeted sales were R500 000. The sales variance is:',
    options: ['Favourable by R20 000', 'Unfavourable by R20 000', 'Favourable by R480 000', 'Unfavourable by R500 000'],
    answer: 'Unfavourable by R20 000',
    explanation: 'Actual sales fell short of budget by R20 000 — this is unfavourable because it means less revenue than planned.',
  },
  {
    prompt: 'An unfavourable expense variance means:',
    options: [
      'Actual expenses were below the budgeted amount',
      'Actual expenses exceeded the budgeted amount',
      'Net profit was higher than expected',
      'The budget was not prepared',
    ],
    answer: 'Actual expenses exceeded the budgeted amount',
    explanation: 'If actual expenses exceed the budget, profit is lower than planned — this is an unfavourable (adverse) variance.',
  },
  {
    prompt: 'If selling price per unit increases by 15% and the number of units sold stays the same, projected sales will:',
    options: ['Stay the same', 'Decrease by 15%', 'Increase by 15%', 'Increase by 150%'],
    answer: 'Increase by 15%',
    explanation: 'Revenue = Selling price × Units sold. If price rises 15% and units are constant, revenue also rises 15%.',
  },
  {
    prompt: 'Which of the following will cause projected net profit to decrease, all else being equal?',
    options: [
      'An increase in selling price',
      'A decrease in cost of sales percentage',
      'An increase in fixed expenses',
      'An increase in units sold',
    ],
    answer: 'An increase in fixed expenses',
    explanation: 'Higher expenses reduce net profit — more cost is deducted from gross profit to arrive at net profit.',
  },
  {
    prompt: 'What happens to the projected gross profit percentage if selling price increases but cost of sales stays the same?',
    options: [
      'It decreases because more tax is due',
      'It increases because revenue rises while the cost base stays the same',
      'It stays the same',
      'It decreases because expenses increase',
    ],
    answer: 'It increases because revenue rises while the cost base stays the same',
    explanation: 'If the selling price rises with no change in cost of sales per unit, gross profit per unit increases — improving the gross profit %.',
  },
  {
    prompt: 'Why is it important to clearly state the assumptions used in a projected income statement?',
    options: [
      'To make the statement longer',
      'So that users can assess the reliability of the projections and understand what conditions they depend on',
      'Because assumptions are the same as actual results',
      'To comply with the bank reconciliation requirement',
    ],
    answer: 'So that users can assess the reliability of the projections and understand what conditions they depend on',
    explanation: 'Stating assumptions allows readers to evaluate how realistic the projections are and what would happen if conditions change.',
  },
];

const ProjectedFinancialStatements = () => (
  <CapsSubjectTopic
    title="Projected Financial Statements"
    subtitle="Forecasting profit using assumptions and identifying budget variances"
    learnSteps={learnSteps}
    task="gr11-projected-financial-statements-t3"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default ProjectedFinancialStatements;
