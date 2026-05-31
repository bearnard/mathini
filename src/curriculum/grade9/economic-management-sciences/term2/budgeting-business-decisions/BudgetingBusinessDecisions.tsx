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
    options: ['Realistic estimates based on historical data and market research', 'Guessing high numbers', 'Copying another business\'s budget exactly', 'Budgeting is pointless'],
    answer: 'Realistic estimates based on historical data and market research',
    explanation: 'Accurate budgets guide smart decisions and help businesses survive challenges.',
  },
  {
    prompt: 'How should a business handle unexpected expenses?',
    options: ['Review budget priorities, reduce discretionary spending or find alternative funding', 'Ignore the expense', 'Delay all other operations', 'Expect perfection always'],
    answer: 'Review budget priorities, reduce discretionary spending or find alternative funding',
    explanation: 'Flexibility and prioritization help businesses adapt to change.',
  },
  {
    prompt: 'What does budget variance mean?',
    options: ['The difference between budgeted and actual amounts', 'The total budget amount', 'A guarantee of profit', 'A type of tax'],
    answer: 'The difference between budgeted and actual amounts',
    explanation: 'Variance analysis shows where budget predictions were accurate or off.',
  },
  {
    prompt: 'How often should businesses review their budgets?',
    options: ['At least monthly, with quarterly detailed reviews', 'Once per year only', 'Never', 'Only when losing money'],
    answer: 'At least monthly, with quarterly detailed reviews',
    explanation: 'Regular review allows early detection of problems and quick adjustments.',
  },
  {
    prompt: 'What is a fixed expense?',
    options: ['A cost that stays the same each period, like rent', 'An expense that changes every month', 'An optional expense', 'An expense that is paid once only'],
    answer: 'A cost that stays the same each period, like rent',
    explanation: 'Understanding fixed costs helps in break-even and profit analysis.',
  },
  {
    prompt: 'Why should businesses prioritize their budget allocations?',
    options: ['Resources are limited; prioritization ensures funds go to highest-value activities', 'All expenses are equally important', 'Prioritization wastes time', 'Large expenses always matter most'],
    answer: 'Resources are limited; prioritization ensures funds go to highest-value activities',
    explanation: 'Strategic allocation maximizes business effectiveness.',
  },
  {
    prompt: 'How can a business improve its budget performance?',
    options: ['Track actual spending, identify variances, find root causes and adjust operations', 'Ignore variances', 'Blame external factors only', 'Create a new budget every week'],
    answer: 'Track actual spending, identify variances, find root causes and adjust operations',
    explanation: 'Active management turns budgets into continuous improvement tools.',
  },
  {
    prompt: 'What role does cash flow play in business decisions?',
    options: ['Cash flow ensures the business can pay bills and invest; poor flow leads to failure', 'Cash flow does not matter', 'Profit and cash flow are always the same', 'Cash flow is only for large companies'],
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
