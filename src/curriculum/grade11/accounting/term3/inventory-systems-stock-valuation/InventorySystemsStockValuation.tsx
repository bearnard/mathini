import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Inventory systems: periodic vs perpetual',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>inventory system</strong> determines how and when stock records are updated. The two main systems are <em>periodic</em> and <em>perpetual</em>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Periodic system</strong>
            <p className="text-slate-600 mt-1">Inventory is counted and valued at the end of each period. Cost of sales is calculated after the physical count. Stock records are not updated continuously.</p>
            <p className="text-slate-500 text-sm mt-2">Simpler but less control — shortages may go undetected.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Perpetual system</strong>
            <p className="text-slate-600 mt-1">Every purchase and sale updates the stock record immediately. The inventory balance is always current. Easier to detect theft or errors.</p>
            <p className="text-slate-500 text-sm mt-2">Better control but requires more record-keeping resources.</p>
          </div>
        </div>
        <TAccount
          title="Trading Stock Account (Perpetual system)"
          debit={[
            { description: 'Balance b/d', amount: 12000 },
            { description: 'Purchases', amount: 37500 },
          ]}
          credit={[
            { description: 'Cost of sales', amount: 31800 },
            { description: 'Balance c/d', amount: 17700 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'FIFO stock valuation method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Under <strong>FIFO (First-In, First-Out)</strong>, the oldest stock is assumed to be sold first. Closing stock is valued at the most recent purchase prices.
        </p>
        <FinancialStatement
          title="FIFO Valuation Example"
          period="20 January"
          sections={[
            {
              heading: 'Stock available for sale',
              lines: [
                { label: '1 Jan: 10 units @ R20', amount: 200 },
                { label: '10 Jan: 15 units @ R25', amount: 375 },
                { label: 'Goods available', amount: 575, isSubtotal: true },
              ],
            },
            {
              heading: 'FIFO cost of sales',
              lines: [
                { label: '10 units from Jan batch', amount: -200 },
                { label: '2 units from latest batch', amount: -50 },
                { label: 'Cost of sales', amount: -250, isTotal: true },
              ],
            },
            {
              heading: 'Closing stock',
              lines: [
                { label: '13 units @ R25', amount: 325, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Weighted average cost (WAC) method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Under <strong>WAC</strong>, all units are valued at an average cost, recalculated after each purchase.
        </p>
        <FinancialStatement
          title="Weighted Average Cost Example"
          period="Same stock data"
          sections={[
            {
              heading: 'Average cost',
              lines: [
                { label: 'Total units available', amount: 25 },
                { label: 'Total cost of stock available', amount: 575 },
                { label: 'Average cost per unit', amount: 23, isSubtotal: true },
              ],
            },
            {
              heading: 'Valuation',
              lines: [
                { label: 'Cost of sales: 12 units @ R23', amount: -276 },
                { label: 'Closing stock: 13 units @ R23', amount: 299 },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Effect of stock valuation on profit',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The choice of inventory method affects <strong>cost of sales</strong>, <strong>closing stock</strong>, and therefore <strong>gross profit</strong>.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <FinancialStatement
            title="Statement of Comprehensive Income (FIFO)"
            period="Extract"
            sections={[
              {
                heading: 'Trading result',
                lines: [
                  { label: 'Sales', amount: 520 },
                  { label: 'Cost of sales', amount: -250 },
                  { label: 'Gross profit', amount: 270, isTotal: true },
                ],
              },
            ]}
          />
          <FinancialStatement
            title="Statement of Comprehensive Income (WAC)"
            period="Extract"
            sections={[
              {
                heading: 'Trading result',
                lines: [
                  { label: 'Sales', amount: 520 },
                  { label: 'Cost of sales', amount: -276 },
                  { label: 'Gross profit', amount: 244, isTotal: true },
                ],
              },
            ]}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">In a period of rising prices:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>FIFO: lower cost of sales → higher gross profit</li>
              <li>WAC: middle ground between FIFO and LIFO</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Implication:</strong>
            <p className="text-slate-600 mt-1">The same business can report different profits depending solely on the valuation method chosen — this is why disclosing accounting policies is important.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Under the perpetual inventory system, stock records are updated:',
    options: [
      'Only at the end of the financial year',
      'After every purchase and sale transaction',
      'Once per quarter after a physical count',
      'Only when stock is received from a supplier',
    ],
    answer: 'After every purchase and sale transaction',
    explanation: 'The perpetual system maintains a continuous running balance of inventory, updating after every movement.',
  },
  {
    prompt: 'Which inventory system makes it easier to detect theft or shortages promptly?',
    options: ['Periodic system', 'Perpetual system', 'Both systems equally', 'Neither system'],
    answer: 'Perpetual system',
    explanation: 'Because perpetual records are always up to date, any discrepancy between records and physical stock is quickly visible.',
  },
  {
    prompt: 'Under FIFO, closing stock is valued at:',
    options: [
      'The oldest purchase prices',
      'The average of all purchase prices',
      'The most recent (latest) purchase prices',
      'The selling price of the goods',
    ],
    answer: 'The most recent (latest) purchase prices',
    explanation: 'FIFO assumes the oldest items are sold first, so closing stock consists of the most recently purchased items.',
  },
  {
    prompt: 'A business had: Opening stock 5 units @ R10; Purchases 10 units @ R15; Sold 8 units. Using FIFO, what is the cost of sales?',
    options: ['R80', 'R95', 'R75', 'R120'],
    answer: 'R95',
    explanation: 'FIFO: First sell 5 units @ R10 = R50, then 3 units @ R15 = R45. Total cost of sales = R50 + R45 = R95.',
  },
  {
    prompt: 'Using the same data (Opening stock 5 × R10, Purchases 10 × R15, Sold 8 units), what is the weighted average cost per unit?',
    options: ['R12', 'R12.50', 'R13.33', 'R15'],
    answer: 'R13.33',
    explanation: 'Total cost: (5 × R10) + (10 × R15) = R50 + R150 = R200. Total units: 15. WAC = R200 ÷ 15 = R13.33.',
  },
  {
    prompt: 'In a period of rising prices, which method produces a higher gross profit?',
    options: [
      'Weighted average cost',
      'LIFO',
      'FIFO',
      'All methods produce the same gross profit',
    ],
    answer: 'FIFO',
    explanation: 'With rising prices, FIFO uses older (cheaper) costs for cost of sales, resulting in a lower cost of sales and higher gross profit.',
  },
  {
    prompt: 'The periodic inventory system calculates cost of sales using the formula:',
    options: [
      'Closing stock + Purchases − Opening stock',
      'Opening stock + Purchases − Closing stock',
      'Sales − Gross profit',
      'Total stock available ÷ Number of units sold',
    ],
    answer: 'Opening stock + Purchases − Closing stock',
    explanation: 'Under the periodic system: Cost of sales = Opening stock + Purchases − Closing stock (where closing stock is determined by a physical count).',
  },
  {
    prompt: 'Why is it important for a business to disclose its inventory valuation method in the notes?',
    options: ['It is required by law in every case', 'Different methods give different profits, so users need to know', 'It is needed to work out the VAT', 'It decides the outcome of the bank reconciliation'],
    answer: 'Different methods give different profits, so users need to know',
    explanation: 'Transparency about the chosen method allows comparisons between periods and between businesses to be meaningful.',
  },
  {
    prompt: 'Under the perpetual system, cost of sales is recorded:',
    options: ['Only at the year end after a physical count', 'At the time of each sale, at the cost of the units sold', 'Only when the suppliers have been paid', 'At the time of the purchase of the goods'],
    answer: 'At the time of each sale, at the cost of the units sold',
    explanation: 'The perpetual system records cost of sales with each sale, keeping the inventory account and cost of sales current at all times.',
  },
  {
    prompt: 'A business uses WAC. Total stock available = 20 units at a total cost of R300. If 12 units are sold, the closing stock value is:',
    options: ['R120', 'R180', 'R160', 'R140'],
    answer: 'R120',
    explanation: 'WAC = R300 ÷ 20 = R15 per unit. Closing stock = 8 units × R15 = R120.',
  },
];

const InventorySystemsStockValuation = () => (
  <CapsSubjectTopic
    title="Inventory Systems and Stock Valuation"
    subtitle="Comparing periodic and perpetual systems and FIFO vs weighted average cost"
    learnSteps={learnSteps}
    task="gr11-inventory-systems-stock-valuation-t3"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default InventorySystemsStockValuation;
