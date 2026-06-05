import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/acc/term3/manufacturing-costs-break-even/diagram.webp", alt: "Cost of Production Summary" },
    title: 'Classifying manufacturing costs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Manufacturing costs are classified into three categories based on their relationship to the product being made.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Direct materials</strong>
            <p className="text-slate-600">Raw materials that become part of the finished product (e.g., wood for furniture, steel for car parts).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Direct labour</strong>
            <p className="text-slate-600">Wages paid to workers who are directly involved in making the product (e.g., machine operators, assembly workers).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Factory overheads</strong>
            <p className="text-slate-600">Indirect costs of running the factory (e.g., factory rent, factory electricity, factory supervisor salary, machine depreciation).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Calculating unit cost of production',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>unit cost</strong> is the total manufacturing cost divided by the number of units produced. It is used for pricing and for valuing finished goods inventory.
        </p>
        <FinancialStatement
          title="Cost of Production Summary"
          period="September 2024"
          sections={[
            {
              heading: 'Manufacturing costs',
              lines: [
                { label: 'Direct materials', amount: 185000 },
                { label: 'Direct labour', amount: 132000 },
                { label: 'Factory overheads', amount: 83000 },
                { label: 'Total manufacturing cost', amount: 400000, isSubtotal: true },
              ],
            },
            {
              heading: 'Output',
              lines: [
                { label: 'Units produced', amount: 8000 },
                { label: 'Unit cost of production', amount: 50, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Break-even point',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>break-even point</strong> is the number of units that must be sold for total revenue to exactly equal total costs — no profit, no loss.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700">Key terms:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li><strong>Fixed costs:</strong> costs that do not change with output (rent, depreciation)</li>
            <li><strong>Variable costs:</strong> costs that increase with each additional unit (direct materials, direct labour)</li>
            <li><strong>Contribution per unit:</strong> Selling price per unit − Variable cost per unit</li>
          </ul>
          <p className="font-mono text-blue-700 mt-2">Break-even units = Fixed costs ÷ Contribution per unit</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Production cost statement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>production cost statement</strong> summarises all manufacturing costs to determine the total cost of goods produced during the period.
        </p>
        <FinancialStatement
          title="Production Cost Statement"
          period="For the month ended 30 September 2024"
          sections={[
            {
              heading: 'Work in progress and costs',
              lines: [
                { label: 'Opening work-in-progress', amount: 28000 },
                { label: 'Direct materials used', amount: 185000 },
                { label: 'Direct labour', amount: 132000 },
                { label: 'Factory overheads', amount: 83000 },
                { label: 'Total cost before closing WIP', amount: 428000, isSubtotal: true },
                { label: 'Less: Closing work-in-progress', amount: -38000 },
                { label: 'Cost of production', amount: 390000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Which of the following is classified as a direct material cost in furniture manufacturing?',
    options: ['Factory manager\'s salary', 'Factory electricity', 'Wood used to make chairs', 'Depreciation of machinery'],
    answer: 'Wood used to make chairs',
    explanation: 'Direct materials are raw materials that physically become part of the finished product.',
  },
  {
    prompt: 'Factory rent is classified as:',
    options: ['Direct material', 'Direct labour', 'Factory overhead', 'Selling expense'],
    answer: 'Factory overhead',
    explanation: 'Factory rent is an indirect cost of running the factory — it is a factory overhead, not directly tied to a single unit of production.',
  },
  {
    prompt: 'A factory produces 500 units. Total direct materials = R15 000, direct labour = R10 000, factory overheads = R5 000. The unit cost of production is:',
    options: ['R50', 'R60', 'R45', 'R40'],
    answer: 'R60',
    explanation: 'Total cost = R15 000 + R10 000 + R5 000 = R30 000. Unit cost = R30 000 ÷ 500 = R60.',
  },
  {
    prompt: 'Fixed costs are R60 000. The selling price per unit is R80 and the variable cost per unit is R50. The break-even point in units is:',
    options: ['750 units', '1 200 units', '2 000 units', '600 units'],
    answer: '2 000 units',
    explanation: 'Contribution per unit = R80 − R50 = R30. Break-even = R60 000 ÷ R30 = 2 000 units.',
  },
  {
    prompt: 'Contribution per unit is calculated as:',
    options: [
      'Selling price − Fixed cost per unit',
      'Selling price − Variable cost per unit',
      'Gross profit ÷ Units sold',
      'Total revenue − Total cost',
    ],
    answer: 'Selling price − Variable cost per unit',
    explanation: 'Contribution per unit = Selling price per unit − Variable cost per unit. It represents how much each unit sold contributes toward covering fixed costs.',
  },
  {
    prompt: 'At the break-even point, a business:',
    options: [
      'Makes its maximum profit',
      'Earns a profit equal to its fixed costs',
      'Earns neither a profit nor a loss — total revenue equals total costs',
      'Has zero variable costs',
    ],
    answer: 'Earns neither a profit nor a loss — total revenue equals total costs',
    explanation: 'Break-even is the exact point where all costs are covered by revenue — the business makes zero profit.',
  },
  {
    prompt: 'Which cost increases directly with each additional unit produced?',
    options: ['Factory rent', 'Direct materials', 'Machine depreciation', 'Factory manager salary'],
    answer: 'Direct materials',
    explanation: 'Variable costs like direct materials increase in proportion to the number of units produced.',
  },
  {
    prompt: 'The production cost statement starts with:',
    options: [
      'Closing work-in-progress',
      'Opening work-in-progress',
      'Sales for the period',
      'Closing finished goods',
    ],
    answer: 'Opening work-in-progress',
    explanation: 'The production cost statement begins with opening work-in-progress, adds manufacturing costs, and deducts closing work-in-progress to find the cost of completed goods.',
  },
  {
    prompt: 'A business produces 400 units but only sells 350. Unsold units are valued at:',
    options: [
      'Selling price per unit',
      'Zero — unsold stock has no value',
      'Unit cost of production',
      'Variable cost per unit only',
    ],
    answer: 'Unit cost of production',
    explanation: 'Unsold finished goods are valued at their unit cost of production (manufacturing cost), not the selling price.',
  },
  {
    prompt: 'If fixed costs increase from R50 000 to R70 000 and contribution per unit stays the same at R25, the break-even point:',
    options: [
      'Decreases',
      'Stays the same',
      'Increases',
      'Becomes impossible to calculate',
    ],
    answer: 'Increases',
    explanation: 'Break-even = Fixed costs ÷ Contribution. Higher fixed costs mean more units must be sold to cover all costs — the break-even point rises.',
  },
];

const ManufacturingCostsBreakEven = () => (
  <CapsSubjectTopic
    title="Manufacturing Costs and Break-Even"
    subtitle="Classifying costs, calculating unit cost, and determining the break-even point"
    learnSteps={learnSteps}
    task="gr11-manufacturing-costs-break-even-t3"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default ManufacturingCostsBreakEven;
