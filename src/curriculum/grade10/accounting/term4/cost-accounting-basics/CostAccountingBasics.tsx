import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding a manufacturing environment',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Cost accounting is used mainly in manufacturing businesses where raw materials are changed into finished goods. The focus is on measuring the cost of making each unit.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Direct materials</h3>
            <p className="mt-2 text-slate-600">Materials that become part of the product, such as fabric for school uniforms.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-700">Direct labour</h3>
            <p className="mt-2 text-slate-600">Wages of workers who cut, sew, assemble or directly manufacture the product.</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-700">Factory overheads</h3>
            <p className="mt-2 text-slate-600">Indirect factory costs such as rent, indirect materials, insurance and machinery depreciation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Recording factory overheads',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Factory overhead control accounts help the business collect indirect factory costs before these costs are absorbed into production.
        </p>
        <TAccount
          title="Factory Overhead Control"
          debit={[
            { description: 'Indirect materials', amount: 6500 },
            { description: 'Factory rent', amount: 18000 },
            { description: 'Factory electricity', amount: 7200 },
          ]}
          credit={[
            { description: 'Transferred to production', amount: 31700 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Preparing the cost of production statement',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The cost of production statement summarises all manufacturing costs to show the total cost of finished goods produced during the period.
        </p>
        <FinancialStatement
          title="Cost of Production Statement"
          period="Month ended 31 October 2025"
          sections={[
            {
              heading: 'Work in progress and manufacturing costs',
              lines: [
                { label: 'Opening work in progress', amount: 18000 },
                { label: 'Direct materials used', amount: 92500 },
                { label: 'Direct labour', amount: 68400 },
                { label: 'Factory overheads', amount: 31700 },
                { label: 'Total cost before closing WIP', amount: 210600, isSubtotal: true },
                { label: 'Less: Closing work in progress', amount: -14600 },
                { label: 'Cost of production', amount: 196000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Unit cost, pricing and ethical control',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          If 4 000 units were completed, the unit cost would be <strong>R49.00</strong> (R196 000 ÷ 4 000). Managers use this information for pricing and cost control.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Using the unit cost</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Set a selling price that covers cost and adds profit.</li>
              <li>Compare actual cost per unit to the budget.</li>
              <li>Investigate waste or poor use of materials.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Ethical cost control</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Do not hide spoilage or wastage to make results look better.</li>
              <li>Separate factory costs from office or selling costs accurately.</li>
              <li>Safeguard raw materials against theft and misuse.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Which of the following is a direct material in a bakery?',
    options: ['Flour used in bread production', 'Office stationery', 'Shop assistant salary', 'Advertising flyers'],
    answer: 'Flour used in bread production',
    explanation: 'Direct materials physically form part of the finished product.',
  },
  {
    prompt: 'Factory rent is classified as a:',
    options: ['Direct labour cost', 'Factory overhead', 'Selling expense', 'Current asset'],
    answer: 'Factory overhead',
    explanation: 'Factory rent is an indirect manufacturing cost and therefore a factory overhead.',
  },
  {
    prompt: 'The cost of production statement is used to calculate the:',
    options: ['Owner’s drawings', 'Cost of finished goods produced', 'Bank reconciliation balance', 'Trade receivables balance'],
    answer: 'Cost of finished goods produced',
    explanation: 'It totals production costs and adjusts for work in progress to find the cost of completed goods.',
  },
  {
    prompt: 'If cost of production is R196 000 and 4 000 units are produced, the unit cost is:',
    options: ['R49.00', 'R39.20', 'R4.90', 'R196.00'],
    answer: 'R49.00',
    explanation: 'Unit cost = R196 000 ÷ 4 000 = R49.00 per unit.',
  },
  {
    prompt: 'Closing work in progress is deducted in the cost of production statement because it:',
    options: ['Belongs to the next period’s incomplete production', 'Is a cash receipt', 'Represents drawings', 'Is a liability'],
    answer: 'Belongs to the next period’s incomplete production',
    explanation: 'Only the cost of goods completed this period should remain in cost of production.',
  },
  {
    prompt: 'Which item is most likely to be direct labour?',
    options: ['Factory supervisor salary', 'Salary of the machinist sewing school shirts', 'Office cleaner wages', 'Marketing manager salary'],
    answer: 'Salary of the machinist sewing school shirts',
    explanation: 'Direct labour is paid to workers directly involved in making the product.',
  },
  {
    prompt: 'One reason to calculate unit cost is to:',
    options: ['Prepare a debtors reconciliation', 'Set an informed selling price', 'Record bank charges', 'Calculate PAYE'],
    answer: 'Set an informed selling price',
    explanation: 'A business needs to know its cost per unit before adding a profit mark-up.',
  },
  {
    prompt: 'Ethical cost accounting requires a business to:',
    options: ['Hide material wastage', 'Classify factory and non-factory costs honestly', 'Ignore indirect costs', 'Record all costs as direct materials'],
    answer: 'Classify factory and non-factory costs honestly',
    explanation: 'Accurate and honest classification leads to trustworthy production cost information.',
  },
];

const CostAccountingBasics = () => (
  <CapsSubjectTopic
    title="Cost Accounting Basics"
    subtitle="Classifying manufacturing costs, recording factory overheads and calculating the cost per unit"
    learnSteps={learnSteps}
    task="gr10-cost-accounting-basics"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default CostAccountingBasics;
