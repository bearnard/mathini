import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    title: 'Use budgets to track surplus and shortfall',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A budget compares expected income with expected spending. When income is greater than expenses there is a surplus, and when expenses are greater than income there is a shortfall.</p>
        <Formula block>{String.raw`\text{Surplus or shortfall} = \text{income} - \text{expenses}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">Write down each income source and each expense clearly so that you can judge whether the plan is realistic before making a financial decision.</p>
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
    title: 'Distinguish cost price, selling price and markup',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Cost price is what the seller pays for an item. Selling price is what the customer pays. Markup is the amount or percentage added to cost price to cover expenses and profit.</p>
        <Formula block>{String.raw`\text{Markup} = \text{selling price} - \text{cost price}`}</Formula>
        <Formula block>{String.raw`\text{Markup \%} = \frac{\text{markup}}{\text{cost price}} \times 100`}</Formula>
      </div>
    ),
  },
  {
    title: 'Calculate profit, loss and break-even',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Profit happens when income from sales is more than total costs. Loss happens when costs are greater than income. The break-even point is where total revenue and total cost are equal.</p>
        <Formula block>{String.raw`\text{Profit} = \text{revenue} - \text{total cost}`}</Formula>
        <Formula block>{String.raw`\text{Break-even units} = \frac{\text{fixed costs}}{\text{selling price per item} - \text{variable cost per item}}`}</Formula>
        <DataChart
          type="line"
          xKey="units"
          data={[
            { units: 0, revenue: 0, cost: 900 },
            { units: 20, revenue: 600, cost: 1200 },
            { units: 40, revenue: 1200, cost: 1500 },
            { units: 60, revenue: 1800, cost: 1800 },
            { units: 80, revenue: 2400, cost: 2100 },
          ]}
          series={[
            { key: 'revenue', label: 'Revenue (R)', color: '#16a34a' },
            { key: 'cost', label: 'Total Cost (R)', color: '#dc2626' },
          ]}
          yLabel="Amount (R)"
          height={220}
        />
        <p className="text-lg leading-8 text-slate-600">In this example the business breaks even at 60 units because both lines meet at R1 800.</p>
      </div>
    ),
  },
  {
    title: 'Interpret financial decisions in context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Mathematical Literacy expects reasoned choices. If one option gives a higher profit but needs more sales, judge whether that target is realistic for the business, not just mathematically possible.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Check demand before choosing a higher markup.</li>
          <li>Compare fixed and variable costs across options.</li>
          <li>Explain whether the break-even target is achievable.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "finance-budgets-pricing-break-even-1",
    "question": "A monthly budget shows income of R4 200 and expenses of R3 650. What is the result?",
    "options": [
      "A surplus of R550",
      "A shortfall of R550",
      "A surplus of R8 550",
      "A shortfall of R8 550"
    ],
    "answer": 0,
    "explanation": "Income − expenses = R4 200 − R3 650 = R550 surplus."
  },
  {
    "id": "finance-budgets-pricing-break-even-2",
    "question": "An item costs R80 and is sold at a 25% markup on cost. What is the selling price?",
    "options": [
      "R90",
      "R95",
      "R100",
      "R105"
    ],
    "answer": 2,
    "explanation": "25% of R80 is R20, so the selling price is R80 + R20 = R100."
  },
  {
    "id": "finance-budgets-pricing-break-even-3",
    "question": "A fundraiser sells 50 tickets at R35 each. The total cost of the event is R1 200. What is the profit?",
    "options": [
      "R350",
      "R550",
      "R750",
      "R1 750"
    ],
    "answer": 1,
    "explanation": "Income = 50 × R35 = R1 750. Profit = R1 750 − R1 200 = R550."
  },
  {
    "id": "finance-budgets-pricing-break-even-4",
    "question": "Fixed costs are R900. Each item sells for R30 and costs R15 to make. How many items must be sold to break even?",
    "options": [
      "30 items",
      "45 items",
      "60 items",
      "75 items"
    ],
    "answer": 2,
    "explanation": "Contribution per item is R30 − R15 = R15. Break-even = R900 ÷ R15 = 60 items."
  },
  {
    "id": "finance-budgets-pricing-break-even-5",
    "question": "If actual spending is R180 more than the amount budgeted, the budget has a:",
    "options": [
      "profit",
      "surplus",
      "shortfall",
      "cash discount"
    ],
    "answer": 2,
    "explanation": "Spending more than planned creates a shortfall or overspend."
  },
  {
    "id": "finance-budgets-pricing-break-even-6",
    "question": "An item has a cost price of R240 and sells for R210. What is the financial result per item?",
    "options": [
      "Profit of R30",
      "Loss of R30",
      "Profit of R50",
      "Loss of R50"
    ],
    "answer": 1,
    "explanation": "Selling price is R30 less than cost price, so there is a loss of R30."
  },
  {
    "id": "finance-budgets-pricing-break-even-7",
    "question": "At the break-even point, total income is:",
    "options": [
      "greater than total cost",
      "less than total cost",
      "equal to total cost",
      "equal to fixed cost only"
    ],
    "answer": 2,
    "explanation": "Break-even means income and total cost are the same."
  },
  {
    "id": "finance-budgets-pricing-break-even-8",
    "question": "A family budgets R5 000 for monthly expenses. If transport takes 18% of the budget, how much is set aside for transport?",
    "options": [
      "R180",
      "R540",
      "R900",
      "R1 180"
    ],
    "answer": 2,
    "explanation": "18% of R5 000 = 0,18 × R5 000 = R900."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const FinanceBudgetsPricingBreakEven = () => (
  <CapsSubjectTopic
    title="Finance: Budgets, Pricing and Break-even"
    subtitle="Budgets, markup, profit and break-even decisions"
    learnSteps={topicLearnSteps}
    task="gr12-finance-budgets-pricing-break-even-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default FinanceBudgetsPricingBreakEven;
