import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ml/term2/finance-interest-banking-inflation/diagram.webp", alt: "Finance: Interest, Banking and Inflation" },
    title: 'Calculate simple and compound interest',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Simple interest grows only on the original principal, while compound interest grows on the principal plus earlier interest. In Mathematical Literacy you must recognise which growth pattern the financial product uses.</p>
        <Formula block>{String.raw`I = P r n`}</Formula>
        <Formula block>{String.raw`A = P(1+i)^n`}</Formula>
        <Formula block>{String.raw`FV = PMT \\times \\frac{(1+i)^n - 1}{i}`}</Formula>
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
    title: 'Compare banking products using total cost',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Banking questions are not only about interest earned. Monthly fees, transaction charges and withdrawal costs can change which account is better, so compare the full package instead of only one headline value.</p>
        <Formula block>{String.raw`\\text{Total account cost} = \\text{monthly fees} + \\text{transaction fees} - \\text{interest earned}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Interpret inflation in everyday language',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Inflation means general prices rise over time. When inflation is about 6% per year, the same amount of money buys fewer goods and services next year unless savings grow fast enough to keep up.</p>
        <Formula block>{String.raw`\\text{New price after inflation} = \\text{current price} \\times (1 + \\text{inflation rate})`}</Formula>
        <DataChart
          type="line"
          xKey="year"
          data={[
            { year: 'Start', investment: 10000, basket: 10000 },
            { year: 'Year 1', investment: 11000, basket: 10600 },
            { year: 'Year 2', investment: 12100, basket: 11236 },
            { year: 'Year 3', investment: 13310, basket: 11910 },
            { year: 'Year 4', investment: 14641, basket: 12625 },
            { year: 'Year 5', investment: 16105, basket: 13382 },
          ]}
          series={[
            { key: 'investment', label: 'Savings at 10% (R)', color: '#2563eb' },
            { key: 'basket', label: 'Cost of basket at 6% (R)', color: '#f97316' },
          ]}
          yLabel="Value (R)"
          height={220}
        />
      </div>
    ),
  },
  {
    title: 'Make justified financial choices',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">CAPS expects learners to choose between savings and borrowing options using evidence. A lower fee, higher interest rate or better protection is only useful if it matches the customer’s real situation.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Compare effective growth after fees and inflation.</li>
          <li>Check whether the time period matches the goal.</li>
          <li>State why the chosen option is practical, not only cheaper.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "finance-interest-banking-inflation-1",
    "question": "What simple interest is earned on R4 000 at 8% per year for 2 years?",
    "options": [
      "R320",
      "R640",
      "R800",
      "R4 640"
    ],
    "answer": 1,
    "explanation": "Simple interest = P × r × t = 4 000 × 0.08 × 2 = R640."
  },
  {
    "id": "finance-interest-banking-inflation-2",
    "question": "R1 000 is invested at 10% compound interest for 2 years. What is the final amount?",
    "options": [
      "R1 100",
      "R1 200",
      "R1 210",
      "R1 300"
    ],
    "answer": 2,
    "explanation": "R1 000 × 1.10 × 1.10 = R1 210."
  },
  {
    "id": "finance-interest-banking-inflation-3",
    "question": "Account A and Account B both earn 6% interest on R2 000, but Account B also charges R12 per month. Which account gives the better result after one year?",
    "options": [
      "Account A",
      "Account B",
      "Both are equal",
      "Not enough information"
    ],
    "answer": 0,
    "explanation": "Both earn the same interest, but Account B loses R144 in fees, so A is better."
  },
  {
    "id": "finance-interest-banking-inflation-4",
    "question": "A basket of goods costs R500. After inflation of 6%, what is the new price?",
    "options": [
      "R506",
      "R530",
      "R560",
      "R600"
    ],
    "answer": 1,
    "explanation": "R500 × 1.06 = R530."
  },
  {
    "id": "finance-interest-banking-inflation-5",
    "question": "If a worker gets a 4% salary increase while inflation is 6%, purchasing power will most likely:",
    "options": [
      "increase strongly",
      "stay exactly the same",
      "decrease",
      "double"
    ],
    "answer": 2,
    "explanation": "Prices are rising faster than income, so purchasing power decreases."
  },
  {
    "id": "finance-interest-banking-inflation-6",
    "question": "What simple interest is charged on a loan of R8 000 at 12% per year for 18 months?",
    "options": [
      "R960",
      "R1 200",
      "R1 440",
      "R2 880"
    ],
    "answer": 2,
    "explanation": "18 months = 1.5 years, so interest = 8 000 × 0.12 × 1.5 = R1 440."
  },
  {
    "id": "finance-interest-banking-inflation-7",
    "question": "Plan X charges R35 per month plus R2 per withdrawal. Plan Y charges R15 per month plus R6 per withdrawal. For 5 withdrawals, what happens?",
    "options": [
      "Plan X is cheaper",
      "Plan Y is cheaper",
      "They cost the same",
      "Neither can be compared"
    ],
    "answer": 2,
    "explanation": "Plan X = 35 + 10 = R45 and Plan Y = 15 + 30 = R45."
  },
  {
    "id": "finance-interest-banking-inflation-8",
    "question": "If a savings account earns 8% interest while inflation is 5%, the real growth is about:",
    "options": [
      "3%",
      "5%",
      "8%",
      "13%"
    ],
    "answer": 0,
    "explanation": "A simple estimate of real growth is 8% − 5% = 3%."
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

const FinanceInterestBankingInflation = () => (
  <CapsSubjectTopic
    title="Finance: Interest, Banking and Inflation"
    subtitle="Interest, bank products and the impact of inflation"
    learnSteps={topicLearnSteps}
    task="gr12-finance-interest-banking-inflation-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default FinanceInterestBankingInflation;
