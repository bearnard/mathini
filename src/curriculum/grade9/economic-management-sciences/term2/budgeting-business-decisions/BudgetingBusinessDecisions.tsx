import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create realistic budgets',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Budgets must reflect actual revenue expectations and all cost categories. Padding costs or underestimating 
          income leads to poor decisions. Realistic budgets become management tools, not wish lists.
        </p>
      </div>
    ),
  },
  {
    title: 'Monitor and adjust spending',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Regularly comparing actual spending to budgeted amounts reveals variances. Businesses adjust by reducing 
          expenses, increasing sales or redirecting resources to high-priority areas.
        </p>
      </div>
    ),
  },
  {
    title: 'Use budgets for strategic decisions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Whether to hire staff, expand, or buy equipment—these decisions require budget analysis. Sound financial 
          planning ensures decisions support long-term business goals.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the key to creating an effective budget?',
    options: ['Realistic estimates based on historical data and market research', 'Guessing high numbers to be safe, then spending the surplus', 'Copying the budget of a bigger business exactly as it is', 'Using one budget for years without any changes at all'],
    answer: 'Realistic estimates based on historical data and market research',
    explanation: 'Accurate budgets guide smart decisions and help businesses survive challenges.',
  },
  {
    prompt: 'How should a business handle unexpected expenses?',
    options: ['Review budget priorities, cut optional spending or find other funds', 'Pay the expense from savings meant for the wages of staff', 'Stop all other work until the expense has been paid back', 'Ignore it and hope it never comes up again next month'],
    answer: 'Review budget priorities, cut optional spending or find other funds',
    explanation: 'Flexibility and prioritization help businesses adapt to change.',
  },
  {
    prompt: 'What does budget variance mean?',
    options: ['The difference between budgeted and actual amounts', 'The total of all money the business plans to spend', 'The profit that the budget promises the owner at year end', 'The tax paid on the difference between income and costs'],
    answer: 'The difference between budgeted and actual amounts',
    explanation: 'Variance analysis shows where budget predictions were accurate or off.',
  },
  {
    prompt: 'How often should businesses review their budgets?',
    options: ['At least monthly, with quarterly detailed reviews', 'Once a year, at the end of the financial year only', 'Only after the business has already lost money', 'Every five years, when the owner plans a big change'],
    answer: 'At least monthly, with quarterly detailed reviews',
    explanation: 'Regular review allows early detection of problems and quick adjustments.',
  },
  {
    prompt: 'What is a fixed expense?',
    options: ['A cost that stays the same each period, like rent', 'A cost that goes up and down with the units made, like wood', 'A cost that is paid once only, like a deposit for a licence', 'A cost that is optional and is not needed for running a shop'],
    answer: 'A cost that stays the same each period, like rent',
    explanation: 'Understanding fixed costs helps in break-even and profit analysis.',
  },
  {
    prompt: 'Why should businesses prioritize their budget allocations?',
    options: ['Resources are limited; prioritization ensures funds go to highest-value activities', 'All expenses are equally important, so each gets the same', 'Prioritising wastes time that should be spent selling', 'The largest expenses should always be paid before all others'],
    answer: 'Resources are limited; prioritization ensures funds go to highest-value activities',
    explanation: 'Strategic allocation maximizes business effectiveness.',
  },
  {
    prompt: 'How can a business improve its budget performance?',
    options: ['Track actual spending, find the variances and causes, then adjust', 'Ignore variances and keep spending exactly as in the plan', 'Blame outside factors and leave the budget unchanged', 'Write a new budget every week and throw the old one away'],
    answer: 'Track actual spending, find the variances and causes, then adjust',
    explanation: 'Active management turns budgets into continuous improvement tools.',
  },
  {
    prompt: 'What role does cash flow play in business decisions?',
    options: ['Cash flow ensures the business can pay bills and invest; poor flow leads to failure', 'Cash flow is a measure of profit, so it needs no separate check', 'Profit and cash flow are always exactly the same number', 'Cash flow matters to large companies but never to small ones'],
    answer: 'Cash flow ensures the business can pay bills and invest; poor flow leads to failure',
    explanation: 'Many profitable businesses fail due to poor cash management.',
  },
];

const BudgetingBusinessDecisions = () => (
  <CapsSubjectTopic
    title="Budgeting and Business Decisions"
    subtitle="Creating budgets, monitoring variance, prioritizing spending and strategic decisions"
    learnSteps={learnSteps}
    task="gr9-budgeting-business-decisions-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default BudgetingBusinessDecisions;
