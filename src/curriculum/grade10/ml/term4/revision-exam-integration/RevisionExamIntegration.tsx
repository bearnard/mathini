import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ml/term4/revision-exam-integration/diagram.webp", alt: "Revision and Exam Integration" },
    title: 'Integration of Topics',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Mathematical Literacy connects many topics. Real-world problems often require combining skills from finance, measurement, data handling, and calculations.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Key Topics Covered in Grade 10</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Numbers & Calculations:</strong> Percentages, VAT, discounts, rounding</li>
            <li><strong>Patterns & Functions:</strong> Linear relationships, tariffs</li>
            <li><strong>Finance:</strong> Income, budgets, profit/loss, interest, tax</li>
            <li><strong>Measurement:</strong> Conversions, perimeter, area, volume</li>
            <li><strong>Maps & Plans:</strong> Scale, models, floor plans</li>
            <li><strong>Data:</strong> Mean, median, mode, graphs, interpretation</li>
            <li><strong>Probability:</strong> Likelihood, events, outcomes</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Integrated Example: Planning a School Event</p>
          <div className="space-y-2 text-sm">
            <p><strong>Budget:</strong> Calculate income (ticket sales) and expenses (venue, food)</p>
            <p><strong>Space:</strong> Use venue dimensions to calculate capacity</p>
            <p><strong>Data:</strong> Survey learners about preferences</p>
            <p><strong>Finance:</strong> Calculate profit/loss, price per ticket with VAT</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Problem-Solving Strategies',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Effective problem-solving is the heart of Mathematical Literacy. Use these strategies for complex multi-step problems.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Step-by-Step Problem Solving</h4>
          <ol className="space-y-2 text-sm list-decimal ml-5">
            <li><strong>Read carefully:</strong> Understand what the question asks</li>
            <li><strong>Identify given information:</strong> What numbers and facts do you have?</li>
            <li><strong>Identify what you need to find:</strong> What's the question asking for?</li>
            <li><strong>Choose appropriate methods:</strong> Which formulas or approaches apply?</li>
            <li><strong>Calculate:</strong> Show all working clearly</li>
            <li><strong>Check your answer:</strong> Does it make sense in context?</li>
          </ol>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Multi-Step Example:</p>
          <p className="text-sm mb-2">A shop sells shirts for R350 each. They order 80 shirts at R200 each. After selling 65 shirts, they offer 25% off the remaining stock. What's the total profit?</p>
          <div className="space-y-1 text-sm">
            <p><strong>Step 1:</strong> Cost = 80 × R200 = R16 000</p>
            <p><strong>Step 2:</strong> Income from 65 shirts = 65 × R350 = R22 750</p>
            <p><strong>Step 3:</strong> Remaining = 80 - 65 = 15 shirts</p>
            <p><strong>Step 4:</strong> Discounted price = R350 × 0.75 = R262.50</p>
            <p><strong>Step 5:</strong> Income from remaining = 15 × R262.50 = R3 937.50</p>
            <Formula block>{String.raw`\text{Total income} = 22\,750 + 3937.50 = \text{R}26\,687.50`}</Formula>
            <Formula block>{String.raw`\text{Profit} = 26\,687.50 - 16\,000 = \text{R}10\,687.50`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam Preparation Tips',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Success in Mathematical Literacy exams comes from understanding concepts, practicing calculations, and managing time effectively.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Before the Exam</h4>
          <ul className="space-y-2 text-sm">
            <li>✓ Review all formulas (area, volume, interest, etc.)</li>
            <li>✓ Practice past papers under timed conditions</li>
            <li>✓ Focus on topics you find challenging</li>
            <li>✓ Learn to use your calculator efficiently</li>
            <li>✓ Get enough sleep the night before</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">During the Exam</h4>
          <ul className="space-y-2 text-sm">
            <li>✓ Read all questions carefully</li>
            <li>✓ Answer easy questions first to build confidence</li>
            <li>✓ Show all working—partial marks are awarded</li>
            <li>✓ Check units (cm vs m, R vs c, % vs decimal)</li>
            <li>✓ Leave time to review answers at the end</li>
            <li>✓ If stuck, move on and return later</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Mistakes to Avoid</h4>
          <ul className="space-y-2 text-sm">
            <li>✗ Forgetting to add VAT (15%)</li>
            <li>✗ Mixing up formulas (perimeter vs area)</li>
            <li>✗ Not converting units (cm to m)</li>
            <li>✗ Rounding too early in multi-step calculations</li>
            <li>✗ Not reading graph/table labels carefully</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Real-World Mathematical Literacy',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Mathematical Literacy isn't just for exams—it's a life skill. These concepts help you make informed decisions about money, health, consumer rights, and daily challenges in South Africa.
        </p>
        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Practical Applications</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Shopping:</strong> Compare unit prices, calculate discounts, understand VAT</li>
            <li><strong>Banking:</strong> Choose accounts, understand interest rates, manage debt</li>
            <li><strong>Budgeting:</strong> Track income and expenses, save for goals</li>
            <li><strong>Housing:</strong> Read municipal bills, calculate area for flooring/paint</li>
            <li><strong>Travel:</strong> Use maps and scales, calculate distances and costs</li>
            <li><strong>Health:</strong> Interpret medical statistics, understand risk percentages</li>
            <li><strong>Employment:</strong> Understand payslips, tax, and deductions</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-sm">
          <p className="font-medium mb-2">Remember:</p>
          <p>Mathematical Literacy empowers you to be an informed, capable citizen who can critically analyze information, solve practical problems, and make sound decisions in everyday South African life.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Reviewing Mixed Data Sets',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Revision is stronger when you compare data from several topics together. A chart can help you connect finance, measurement, and data-handling ideas in one problem-solving session.
        </p>
        <DataChart
          data={[
            { task: 'Budget', value: 82 },
            { task: 'Scale drawing', value: 74 },
            { task: 'Probability', value: 68 },
            { task: 'Tariffs', value: 79 },
          ]}
          series={[{ key: 'value', label: 'Practice score (%)', color: '#6366f1' }]}
          xKey="task"
          type="bar"
        />
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm text-indigo-900">
          Use the lowest-scoring topic on the chart to decide where to spend extra revision time before the examination.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'A project costs R12000 and uses 30 square meters. What is the cost per square meter?',
    options: ['R300', 'R400', 'R360', 'R350'],
    answer: 'R400',
    explanation: 'Cost per m² = R12000 ÷ 30 = R400',
  },
  {
    prompt: 'A shop offers a 25% discount on items marked R800. After discount, a customer pays:',
    options: ['R600', 'R700', 'R775', 'R200'],
    answer: 'R600',
    explanation: '25% discount = R800 × 0.25 = R200. Price = R800 - R200 = R600',
  },
  {
    prompt: 'Income is R18000, expenses are R12500, savings are R3000. What is left over?',
    options: ['R2500', 'R5500', 'R15500', 'R3000'],
    answer: 'R2500',
    explanation: 'Left over = 18000 - 12500 - 3000 = R2500',
  },
  {
    prompt: 'A rectangular pool is 8 m × 4 m × 1.5 m deep. What is its volume in litres?',
    options: ['48 ℓ', '480 ℓ', '4800 ℓ', '48000 ℓ'],
    answer: '48000 ℓ',
    explanation: 'Volume = 8 × 4 × 1.5 = 48 m³. Since 1 m³ = 1000 ℓ, capacity = 48000 ℓ',
  },
  {
    prompt: 'An item costs R500 before VAT. With 15% VAT included, the total price is:',
    options: ['R515', 'R575', 'R425', 'R650'],
    answer: 'R575',
    explanation: 'VAT = R500 × 0.15 = R75. Total = R500 + R75 = R575. Or: R500 × 1.15 = R575',
  },
];

const RevisionExamIntegration = () => (
  <CapsSubjectTopic
    title="Revision and Exam Integration"
    subtitle="Comprehensive final assessment preparation"
    learnSteps={learnSteps}
    task="gr10-revision-exam-integration-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default RevisionExamIntegration;
