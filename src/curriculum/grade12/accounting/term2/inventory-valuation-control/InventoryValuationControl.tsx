'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Inventory systems and records',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inventory systems determine when stock records are updated and how cost of sales is recognised. The perpetual system updates stock continuously, while the periodic system calculates cost of sales only after a physical stock count.
        </p>
        <TAccount
          title="Trading Stock"
          debit={[
            { description: 'Opening inventory', amount: 185000 },
            { description: 'Purchases', amount: 642000 },
            { description: 'Carriage on purchases', amount: 18000 },
          ]}
          credit={[
            { description: 'Cost of sales', amount: 598000 },
            { description: 'Stock deficit', amount: 12000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Under a perpetual system, movements like stock deficits are recorded as they are identified. Under a periodic system, many of these adjustments are made only after the final stock count.
        </p>
      </div>
    ),
  },
  {
    title: 'Valuation principles',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inventory must be valued at the lower of cost and net realisable value. This protects users from overstatement and reflects the conservative principle in financial reporting.
        </p>
        <FinancialStatement
          title="Inventory Valuation Schedule"
          period="28 February 2025"
          sections={[
            {
              heading: 'Selected stock items',
              lines: [
                { label: 'School calculators: cost R96 000, NRV R102 000', amount: 96000 },
                { label: 'Office chairs: cost R58 000, NRV R49 500', amount: 49500 },
                { label: 'Textbook sets: cost R124 000, NRV R124 000', amount: 124000 },
                { label: 'Closing inventory value', amount: 269500, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          The chairs are written down because their NRV is below cost. In an exam, always explain the reason for the write-down, such as damage, obsolescence or falling selling prices.
        </p>
      </div>
    ),
  },
  {
    title: 'FIFO, weighted average and profit',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          FIFO assumes the oldest costs are sold first, so during periods of rising prices the newest, more expensive units remain in closing stock. That usually increases the closing inventory value and lowers cost of sales compared with some other methods.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Weighted average smooths price fluctuations by spreading total cost across all units available. When learners compare methods, they should focus on the effect on closing stock, cost of sales and gross profit.
        </p>
      </div>
    ),
  },
  {
    title: 'Internal control and ethics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good stock control uses pre-numbered stock sheets, restricted storerooms, independent stock counts and prompt investigation of deficits. One person should not order, receive and record the same stock without supervision.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Ethical practice means reporting deficits honestly and valuing damaged stock realistically. Inflating stock figures to improve profit is misleading and can damage the credibility of the business.
        </p>
      </div>
    ),
  },
  {
    title: "When the count is lower than the records",
    content: (
      <div className="space-y-4">
        <GapRule>{"If a physical count finds fewer units than the books show, the gap may come from theft, damaged goods, wastage or a mistake in the records. Find the cause before writing the difference off."}</GapRule>
        <GapWorked title={"Investigate a shortfall"} steps={["Books: 500 units. Count: 480 units. Missing: 20.", "Check the paperwork, the damaged-goods shelf and the security records.", "Tighten control by separating duties and counting regularly."]} />
        <GapMistake>{"Writing the loss off without asking why."}</GapMistake>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "ivc-1",
    "question": "Inventory should be valued at the lower of:",
    "options": [
      "cost and net realisable value",
      "selling price and cost price per unit",
      "cost and trade discount",
      "VAT and selling price"
    ],
    "answer": 0,
    "explanation": "The conservative rule is to value inventory at the lower of cost and NRV."
  },
  {
    "id": "ivc-2",
    "question": "During a period of rising prices, FIFO will usually result in:",
    "options": [
      "a lower closing stock value",
      "a higher closing stock value",
      "no closing stock",
      "a lower sales value for the year"
    ],
    "answer": 1,
    "explanation": "FIFO leaves the latest, more expensive units in ending inventory, so closing stock is usually higher."
  },
  {
    "id": "ivc-3",
    "question": "The perpetual inventory system updates inventory records:",
    "options": [
      "once, at the end of the financial year",
      "when the bank statement arrives",
      "continuously as transactions occur",
      "only for damaged stock"
    ],
    "answer": 2,
    "explanation": "Perpetual systems keep stock records up to date throughout the period."
  },
  {
    "id": "ivc-4",
    "question": "Under the periodic system, cost of sales is normally determined:",
    "options": [
      "after a stock count at period-end",
      "each time a sale is recorded in the journal",
      "from the cash flow statement",
      "by adding VAT only"
    ],
    "answer": 0,
    "explanation": "Periodic inventory uses the opening stock, purchases and closing stock count to calculate cost of sales at the end."
  },
  {
    "id": "ivc-5",
    "question": "Damaged inventory that can only be sold below cost should be:",
    "options": [
      "kept at original cost",
      "written down to NRV",
      "ignored in the stock count",
      "recorded as a fixed asset"
    ],
    "answer": 1,
    "explanation": "If inventory cannot recover its cost through sale, it must be written down to net realisable value."
  },
  {
    "id": "ivc-6",
    "question": "When calculating the cost of inventory purchased, a trade discount should be:",
    "options": [
      "added to the list price",
      "ignored completely",
      "deducted from the list price",
      "transferred to ordinary share capital"
    ],
    "answer": 2,
    "explanation": "Trade discounts reduce the actual purchase cost and therefore are deducted."
  },
  {
    "id": "ivc-7",
    "question": "A stock deficit identified during a stock count usually suggests:",
    "options": [
      "the business issued more shares during the year to raise capital",
      "shrinkage, theft, damage or recording errors",
      "the company paid too much income tax",
      "the cash budget is balanced"
    ],
    "answer": 1,
    "explanation": "A stock deficit means the physical count is less than the records, often due to losses or errors."
  },
  {
    "id": "ivc-8",
    "question": "Which control measure helps strengthen inventory control?",
    "options": [
      "Allowing the same person to order, receive and record the stock",
      "Using pre-numbered stock sheets and independent stock counts",
      "Leaving storerooms unlocked at all times",
      "Recording damaged stock at full selling price"
    ],
    "answer": 1,
    "explanation": "Pre-numbered documents and independent counts improve accountability and reduce fraud risk."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const InventoryValuationControl = () => (
  <CapsSubjectTopic
    title="Inventory Valuation and Control"
    subtitle="Valuing stock correctly and protecting it through sound internal control"
    learnSteps={learnSteps}
    task="gr12-inventory-valuation-control-t2"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default InventoryValuationControl;
