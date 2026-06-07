import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ml/term1/numbers-calculations-context/diagram.webp", alt: "Numbers and Calculations in Context" },
    title: 'Working with Numbers in Context',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Mathematical literacy involves using numbers to solve real-world problems—shopping, budgeting, cooking, and understanding bills.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Key Number Operations</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Addition/Subtraction:</strong> Budgets, shopping totals, change calculations</li>
            <li><strong>Multiplication/Division:</strong> Unit prices, bulk purchases, sharing costs</li>
            <li><strong>Order of Operations:</strong> BODMAS (Brackets, Orders, Division/Multiplication, Addition/Subtraction)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: At Pick n Pay, apples cost R12.50 per kg. How much for 3.5 kg?</p>
          <Formula block>{String.raw`\text{Cost} = 12.50 \times 3.5 = \text{R}43.75`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Fractions and Percentages',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Fractions and percentages are everywhere in South African life—from VAT on purchases to discounts at Checkers, to understanding loan interest rates.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Converting Between Forms</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Fraction to Decimal:</strong> Divide numerator by denominator</p>
            <Formula block>{String.raw`\frac{3}{4} = 3 \div 4 = 0.75`}</Formula>
            <p><strong>Decimal to Percentage:</strong> Multiply by 100</p>
            <Formula block>{String.raw`0.75 \times 100 = 75\%`}</Formula>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A shop offers 15% off a R400 item. What's the discount amount and new price?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Discount} = 400 \times 0.15 = \text{R}60`}</Formula>
            <Formula block>{String.raw`\text{New price} = 400 - 60 = \text{R}340`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Estimation and Rounding',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Estimation helps you quickly check if an answer is reasonable—crucial when shopping or managing money.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Rounding Rules</h4>
          <ul className="space-y-2 text-sm">
            <li>If digit is 5 or more → round up</li>
            <li>If digit is 4 or less → round down</li>
            <li>For money: usually round to nearest cent (2 decimals)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Estimate the cost of 4 items priced R18.90, R32.50, R45.20, and R11.80</p>
          <div className="space-y-1 text-sm">
            <p>Round each: R19 + R33 + R45 + R12</p>
            <Formula block>{String.raw`\text{Estimate} = 19 + 33 + 45 + 12 = \text{R}109`}</Formula>
            <p className="text-xs italic">(Actual = R108.40, very close!)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'VAT Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          In South Africa, VAT (Value-Added Tax) is 15%. This is added to most purchases. Understanding VAT helps you know the true cost of items.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">VAT Calculations</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Finding VAT-inclusive price:</strong></p>
            <Formula block>{String.raw`\text{Total} = \text{Price} \times 1.15`}</Formula>
            <p><strong>Finding VAT amount only:</strong></p>
            <Formula block>{String.raw`\text{VAT} = \text{Price} \times 0.15`}</Formula>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A laptop costs R8000 before VAT. What's the total price?</p>
          <Formula block>{String.raw`\text{Total} = 8000 \times 1.15 = \text{R}9200`}</Formula>
          <p className="text-sm">Or: VAT = R8000 × 0.15 = R1200, so Total = R8000 + R1200 = R9200</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing Spending Patterns',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Data displays help you decide where money is going. A quick bar chart can show which household expense needs the most attention before you finalise a budget.
        </p>
        <DataChart
          data={[
            { category: 'Transport', value: 1200 },
            { category: 'Food', value: 1850 },
            { category: 'Airtime', value: 350 },
            { category: 'Savings', value: 900 },
          ]}
          series={[{ key: 'value', label: 'Rand amount', color: '#10b981' }]}
          xKey="category"
          type="bar"
        />
        <p className="text-sm text-slate-600">
          Before calculating percentages or discounts, first identify the largest amounts. That helps you check whether your arithmetic answer is realistic in context.
        </p>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'If a shirt costs R299.99 and is marked 20% off, what is the new price?',
    options: ['R59.99', 'R239.99', 'R240.00', 'R359.99'],
    answer: 'R239.99',
    explanation: '20% of R299.99 ≈ R60. New price = R299.99 - R60 = R239.99',
  },
  {
    prompt: 'Convert 3/5 to a percentage:',
    options: ['30%', '50%', '60%', '75%'],
    answer: '60%',
    explanation: '3/5 = 0.6 = 60%',
  },
  {
    prompt: 'A jacket costs R560 before VAT (15%). What is the VAT-inclusive price?',
    options: ['R575', 'R644', 'R560', 'R476'],
    answer: 'R644',
    explanation: 'VAT = R560 × 0.15 = R84. Total = R560 + R84 = R644. Or: R560 × 1.15 = R644',
  },
  {
    prompt: 'Round R487.63 to the nearest R10:',
    options: ['R480', 'R490', 'R500', 'R487'],
    answer: 'R490',
    explanation: 'R487.63 is closer to R490 than R480',
  },
];

const NumbersCalculationsContext = () => (
  <CapsSubjectTopic
    title="Numbers and Calculations in Context"
    subtitle="Real-world arithmetic applications"
    learnSteps={learnSteps}
    task="gr10-numbers-calculations-context-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default NumbersCalculationsContext;
