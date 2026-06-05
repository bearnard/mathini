import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    title: 'Income and expenditure statements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>income and expenditure statement</strong> lists all money coming in (income) and all money going out (expenditure) over a period.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Income (Revenue)</strong>
            <p className="text-slate-600 text-sm">Money received from sales, services or other sources.</p>
            <p className="text-slate-600 text-sm mt-1">Also called: turnover or gross income.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4 space-y-2">
            <strong className="text-red-700">Expenditure (Costs)</strong>
            <p className="text-slate-600 text-sm">Money spent on goods, salaries, rent, materials, etc.</p>
            <p className="text-slate-600 text-sm mt-1">
              Use <Formula>{String.raw`\\text{Profit} = \\text{Income} - \\text{Expenditure}`}</Formula> to decide whether there is a surplus or a loss.
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-slate-700 text-sm">If expenditure exceeds income, the result is a loss. If income exceeds expenditure, the result is a surplus or profit.</p>
          <Formula block>{String.raw`\\text{Profit} = \\text{Income} - \\text{Expenditure}`}</Formula>
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
    title: 'Cost price, selling price and markup',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A business buys goods at the <strong>cost price</strong> and sells them at a higher <strong>selling price</strong>.
          The difference is the <strong>markup</strong>.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3">
          <Formula block>{String.raw`\\text{Markup} = \\text{Selling price} - \\text{Cost price}`}</Formula>
          <Formula block>{String.raw`\\text{Markup }\\% = \\frac{\\text{Markup}}{\\text{Cost price}} \\times 100`}</Formula>
          <p className="text-slate-700 mt-2">Example: Cost price = R60, Selling price = R90</p>
          <Formula block>{String.raw`\\text{Markup} = 90 - 60 = 30`}</Formula>
          <Formula block>{String.raw`\\text{Markup }\\% = \\frac{30}{60} \\times 100 = 50\\%`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Break-even analysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>break-even point</strong> is where total income equals total expenditure — no profit, no loss.
        </p>
        <div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3">
          <p className="font-bold text-yellow-800">Break-even formulae:</p>
          <Formula block>{String.raw`\\text{Revenue} = \\text{Costs}`}</Formula>
          <Formula block>{String.raw`\\text{Units} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost}}`}</Formula>
          <p className="text-slate-700 mt-2">Example: Fixed costs = R500, Sell price = R25, Cost per item = R15</p>
          <Formula block>{String.raw`\\text{Units} = \\frac{500}{25 - 15} = \\frac{500}{10} = 50`}</Formula>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
          <p className="text-sm text-slate-500 mb-3">On a graph, break-even is where the revenue line crosses the total cost line.</p>
          <DataChart
            type="line"
            xKey="units"
            data={[
              { units: 0, revenue: 0, totalCost: 500 },
              { units: 20, revenue: 500, totalCost: 800 },
              { units: 40, revenue: 1000, totalCost: 1100 },
              { units: 50, revenue: 1250, totalCost: 1250 },
              { units: 80, revenue: 2000, totalCost: 1700 },
              { units: 100, revenue: 2500, totalCost: 2000 },
            ]}
            series={[
              { key: 'revenue', label: 'Revenue (R)', color: '#10b981' },
              { key: 'totalCost', label: 'Total Cost (R)', color: '#f59e0b' },
            ]}
            yLabel="Rand (R)"
            height={220}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Budget decision-making',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>budget</strong> is a plan for income and expenditure. Decisions based on a budget require you to compare options and justify your choice.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="font-bold text-slate-800">Steps for budget decision-making:</p>
          <p className="text-slate-700">1. Calculate the total income and total expenditure for each option.</p>
          <p className="text-slate-700">2. Determine which option is most profitable or affordable.</p>
          <p className="text-slate-700">3. Justify your choice with calculated evidence.</p>
          <Formula block>{String.raw`\\text{Surplus} = \\text{Income} - \\text{Expenditure}`}</Formula>
        </div>
        <p className="text-sm text-slate-500">Always check whether a surplus (profit) or deficit (loss) exists and explain its implications.</p>
      </div>
    ),
  },
];
const bank: MLItem[] = [
  {
    prompt: 'A cake costs R45 to make and is sold for R72. What is the markup percentage?',
    options: ['37,5%', '60%', '37%', '62,5%'],
    answer: '60%',
    explanation: 'Markup = R72 − R45 = R27. Markup % = (27 ÷ 45) × 100 = 60%.',
  },
  {
    prompt: 'A school tuck shop has fixed costs of R600 per month and earns R8 profit per item sold. How many items must be sold to break even?',
    options: ['60', '75', '80', '100'],
    answer: '75',
    explanation: 'Break-even = R600 ÷ R8 = 75 items.',
  },
  {
    prompt: 'A business earns R15 000 in a month and spends R17 500. What is the result?',
    options: ['A profit of R2 500', 'A loss of R2 500', 'A surplus of R17 500', 'Break-even'],
    answer: 'A loss of R2 500',
    explanation: 'Expenditure exceeds income: R15 000 − R17 500 = −R2 500 (a loss).',
  },
  {
    prompt: 'A product has a cost price of R120. It is marked up by 25%. What is the selling price?',
    options: ['R125', 'R145', 'R150', 'R144'],
    answer: 'R150',
    explanation: 'Markup = 25% of R120 = R30. Selling price = R120 + R30 = R150.',
  },
  {
    prompt: 'On a break-even graph, what does the point where the income line crosses the total cost line represent?',
    options: ['The maximum profit point', 'The point of no profit and no loss', 'The point of maximum loss', 'The fixed cost level'],
    answer: 'The point of no profit and no loss',
    explanation: 'At break-even, total income equals total cost — no profit or loss is made.',
  },
  {
    prompt: 'A budget shows income of R8 200 and expenditure of R7 950. What is the surplus?',
    options: ['R250', 'R350', 'R200', 'R450'],
    answer: 'R250',
    explanation: 'Surplus = Income − Expenditure = R8 200 − R7 950 = R250.',
  },
  {
    prompt: 'Fixed costs are R1 200. Each item costs R18 to produce and sells for R30. What is the break-even quantity?',
    options: ['67 items', '100 items', '40 items', '80 items'],
    answer: '100 items',
    explanation: 'Profit per item = R30 − R18 = R12. Break-even = R1 200 ÷ R12 = 100 items.',
  },
  {
    prompt: 'Which term describes the difference between income and expenditure when income is GREATER?',
    options: ['Deficit', 'Loss', 'Surplus', 'Markup'],
    answer: 'Surplus',
    explanation: 'When income exceeds expenditure, the difference is called a surplus (or profit).',
  },
  {
    prompt: 'An item is sold for R260 which includes a 30% markup on cost price. What was the cost price?',
    options: ['R182', 'R200', 'R230', '78'],
    answer: 'R200',
    explanation: 'Selling price = cost × 1,30. Cost = R260 ÷ 1,30 = R200.',
  },
];

const FinanceBreakEven = () => (
  <CapsSubjectTopic
    title="Finance: Budgets and Break-even"
    subtitle="Income, expenditure, markup, profit and break-even analysis"
    learnSteps={learnSteps}
    task="gr11-ml-break-even-t1"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default FinanceBreakEven;
