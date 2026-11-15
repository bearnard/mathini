import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    title: 'Read financial documents for key values',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Financial literacy questions often begin with a document such as a payslip, invoice, receipt or bank statement. Identify headings such as gross pay, deductions, opening balance and closing balance before you calculate.</p>
        <p className="text-lg leading-8 text-slate-600">Underline amounts, dates, account names and any note that explains a fee or deduction so that you do not miss a value hidden in the document layout.</p>
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
    title: 'Add or remove VAT correctly',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">VAT is currently 15% in South Africa. To add VAT, multiply the VAT-exclusive amount by 1,15. To remove VAT from an inclusive price, divide by 1,15.</p>
        <Formula block>{String.raw`\text{VAT inclusive price} = \text{VAT exclusive price} \times 1{,}15`}</Formula>
        <Formula block>{String.raw`\text{VAT exclusive price} = \frac{\text{VAT inclusive price}}{1{,}15}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">If an item costs R460 excluding VAT, then the inclusive price is <Formula>{String.raw`460 \times 1{,}15 = 529`}</Formula>, so the customer pays R529.</p>
      </div>
    ),
  },
  {
    title: 'Understand fixed and variable tariff charges',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Many real bills use a two-part tariff: a fixed fee plus a charge based on units used. Treat each part separately and then combine them into one total.</p>
        <Formula block>{String.raw`\text{Total tariff cost} = \text{fixed charge} + (\text{rate per unit} \times \text{quantity used})`}</Formula>
        <p className="text-lg leading-8 text-slate-600">This structure appears in cellphone contracts, electricity accounts, delivery fees and parking tariffs.</p>
      </div>
    ),
  },
  {
    title: 'Compare tariff options in context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">The cheapest option depends on the amount used. Calculate both tariffs for the same usage level, compare totals and then explain which plan is better for that pattern of use.</p>
        <Formula block>{String.raw`\text{Difference in cost} = \text{option A} - \text{option B}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">If usage changes, the better option can change too, so always connect your answer to the customer's actual habits.</p>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "finance-documents-tariffs-1",
    "question": "A payslip shows a gross salary of R18 600 and total deductions of R3 450. What is the net salary?",
    "options": [
      "R15 150",
      "R18 600",
      "R22 050",
      "R3 450"
    ],
    "answer": 0,
    "explanation": "Net salary = gross salary − deductions = R18 600 − R3 450 = R15 150."
  },
  {
    "id": "finance-documents-tariffs-2",
    "question": "An invoice shows goods worth R800 excluding VAT. What is the total including 15% VAT?",
    "options": [
      "R880",
      "R900",
      "R920",
      "R1 000"
    ],
    "answer": 2,
    "explanation": "R800 × 1,15 = R920."
  },
  {
    "id": "finance-documents-tariffs-3",
    "question": "An electricity tariff charges a fixed fee of R60 plus R7,50 per unit for 12 units. What is the total bill?",
    "options": [
      "R90",
      "R120",
      "R150",
      "R210"
    ],
    "answer": 2,
    "explanation": "R60 + (R7,50 × 12) = R60 + R90 = R150."
  },
  {
    "id": "finance-documents-tariffs-4",
    "question": "Cellphone Tariff A costs R120 plus R1,20 per minute. Tariff B costs R45 plus R2,00 per minute. For 100 minutes, which tariff is cheaper?",
    "options": [
      "Tariff A",
      "Tariff B",
      "They cost the same",
      "Neither can be calculated"
    ],
    "answer": 0,
    "explanation": "Tariff A = R120 + R120 = R240. Tariff B = R45 + R200 = R245, so A is cheaper."
  },
  {
    "id": "finance-documents-tariffs-5",
    "question": "Which document is usually proof that payment has already been made?",
    "options": [
      "Invoice",
      "Receipt",
      "Quotation",
      "Payslip"
    ],
    "answer": 1,
    "explanation": "A receipt is issued after payment and proves that the amount was paid."
  },
  {
    "id": "finance-documents-tariffs-6",
    "question": "A bank balance is R2 430. A deposit of R700 is made and then a debit of R950 follows. What is the new balance?",
    "options": [
      "R1 480",
      "R2 180",
      "R3 130",
      "R3 380"
    ],
    "answer": 1,
    "explanation": "R2 430 + R700 − R950 = R2 180."
  },
  {
    "id": "finance-documents-tariffs-7",
    "question": "A price of R575 includes VAT. What was the VAT-exclusive price?",
    "options": [
      "R460",
      "R500",
      "R525",
      "R560"
    ],
    "answer": 1,
    "explanation": "R575 ÷ 1,15 = R500."
  },
  {
    "id": "finance-documents-tariffs-8",
    "question": "A water bill charges a fixed fee of R25 and R9 per kilolitre for 18 kL. What is the total cost?",
    "options": [
      "R162",
      "R187",
      "R207",
      "R243"
    ],
    "answer": 1,
    "explanation": "R25 + (R9 × 18) = R25 + R162 = R187."
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

const FinanceDocumentsTariffs = () => (
  <CapsSubjectTopic
    title="Finance: Documents and Tariffs"
    subtitle="Financial documents, VAT and tariff comparisons"
    learnSteps={topicLearnSteps}
    task="gr12-finance-documents-tariffs-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default FinanceDocumentsTariffs;
