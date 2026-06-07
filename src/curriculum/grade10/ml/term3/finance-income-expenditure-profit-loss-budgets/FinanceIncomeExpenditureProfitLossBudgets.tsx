import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ml/term3/finance-income-expenditure-profit-loss-budgets/diagram.webp", alt: "Finance: Income, Expenditure, Profit, Loss and Budgets" },
    title: 'Income and Sources',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Understanding income is the foundation of financial planning. In South Africa, income can come from salaries, wages, business profits, investments, or government grants.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Types of Income in South Africa</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Gross Income:</strong> Total earned before deductions (tax, UIF, pension)</li>
            <li><strong>Net Income:</strong> "Take-home pay" after deductions</li>
            <li><strong>Monthly Salary:</strong> Fixed amount per month</li>
            <li><strong>Hourly Wage:</strong> Payment per hour worked</li>
            <li><strong>Commission:</strong> Percentage of sales (common in retail)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A shop assistant earns R8000 salary + 5% commission on R20000 sales. What's the total income?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Commission} = 20\,000 \times 0.05 = \text{R}1000`}</Formula>
            <Formula block>{String.raw`\text{Total income} = 8000 + 1000 = \text{R}9000`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Expenditure and Budgeting',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Expenditure is money spent. A budget helps you plan spending, save money, and avoid debt. South African households face expenses like rent, groceries, transport, and utilities.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Categories of Expenditure</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Fixed expenses:</strong> Same amount monthly (rent, insurance, subscriptions)</li>
            <li><strong>Variable expenses:</strong> Change monthly (groceries, electricity, petrol)</li>
            <li><strong>Occasional expenses:</strong> Not every month (car service, clothing)</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Creating a Simple Budget</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Income:</strong> R15 000 (net salary)</p>
            <p><strong>Expenses:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>Rent: R5000</li>
              <li>Groceries: R3000</li>
              <li>Transport: R1200</li>
              <li>Electricity & Water: R800</li>
              <li>Cell phone: R300</li>
              <li>Other: R1500</li>
            </ul>
            <Formula block>{String.raw`\text{Total expenses} = 5000 + 3000 + 1200 + 800 + 300 + 1500 = \text{R}11\,800`}</Formula>
            <Formula block>{String.raw`\text{Surplus} = 15\,000 - 11\,800 = \text{R}3200 \text{ (available for savings)}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Profit and Loss',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Businesses and entrepreneurs need to understand profit and loss. This is essential for small businesses, informal traders, and street vendors throughout South Africa.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Key Formulas</h4>
          <div className="space-y-2 text-sm">
            <Formula block>{String.raw`\text{Profit} = \text{Selling price} - \text{Cost price}`}</Formula>
            <Formula block>{String.raw`\text{Loss} = \text{Cost price} - \text{Selling price}`}</Formula>
            <Formula block>{String.raw`\text{Profit \%} = \frac{\text{Profit}}{\text{Cost price}} \times 100\%`}</Formula>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A spaza shop buys cold drinks for R8 each and sells them for R12. What's the profit and profit percentage?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Profit per item} = 12 - 8 = \text{R}4`}</Formula>
            <Formula block>{String.raw`\text{Profit \%} = \frac{4}{8} \times 100\% = 50\%`}</Formula>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Loss Example: A phone bought for R3000 is sold for R2400</p>
          <Formula block>{String.raw`\text{Loss} = 3000 - 2400 = \text{R}600`}</Formula>
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
    title: 'Comparing Income and Expenses',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Budget charts make it easier to spot overspending. They also show whether a small business or household is likely to make a surplus, break even, or run at a loss.
        </p>
        <DataChart
          data={[
            { category: 'Income', value: 15000 },
            { category: 'Housing', value: 5000 },
            { category: 'Food', value: 3000 },
            { category: 'Transport', value: 1200 },
            { category: 'Savings', value: 2000 },
          ]}
          series={[{ key: 'value', label: 'Amount (R)', color: '#ef4444' }]}
          xKey="category"
          type="bar"
        />
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-sm text-rose-900">
          If expenses rise close to or above the income bar, the budget needs changes before long-term financial goals can be met.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'If someone earns R25000 per month and spends R18000, what is their monthly surplus?',
    options: ['R7000', 'R43000', 'R6000', 'R32000'],
    answer: 'R7000',
    explanation: 'Surplus = Income - Expenditure = R25000 - R18000 = R7000',
  },
  {
    prompt: 'A shop buys shirts for R150 each and sells them for R250. What is the profit per shirt?',
    options: ['R100', 'R150', 'R250', 'R50'],
    answer: 'R100',
    explanation: 'Profit = Selling price - Cost price = R250 - R150 = R100',
  },
  {
    prompt: 'An item costs R400 and is sold for R480. What is the profit percentage?',
    options: ['20%', '25%', '15%', '80%'],
    answer: '20%',
    explanation: 'Profit = R80. Profit % = (80/400) × 100% = 20%',
  },
  {
    prompt: 'If gross salary is R18000 and deductions total R3500, what is the net (take-home) salary?',
    options: ['R14500', 'R15000', 'R21500', 'R14000'],
    answer: 'R14500',
    explanation: 'Net salary = Gross salary - Deductions = R18000 - R3500 = R14500',
  },
];

const FinanceIncomeExpenditureProfitLossBudgets = () => (
  <CapsSubjectTopic
    title="Finance: Income, Expenditure, Profit, Loss and Budgets"
    subtitle="Financial planning and analysis"
    learnSteps={learnSteps}
    task="gr10-finance-income-expenditure-profit-loss-budgets-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default FinanceIncomeExpenditureProfitLossBudgets;
