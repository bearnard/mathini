import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Identifying Patterns',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Patterns are everywhere—in taxi fares, cell phone charges, and municipal billing. Recognizing patterns helps you predict future values and understand relationships.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Types of Number Patterns</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Arithmetic:</strong> Same difference between consecutive terms (e.g., 5, 10, 15, 20...)</li>
            <li><strong>Geometric:</strong> Same ratio between consecutive terms (e.g., 2, 6, 18, 54...)</li>
            <li><strong>Quadratic:</strong> Differences between terms change in a pattern</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A taxi charges R15 base fare plus R8 per km. Find the pattern:</p>
          <div className="space-y-1 text-sm">
            <p>0 km: R15, 1 km: R23, 2 km: R31, 3 km: R39...</p>
            <p>Common difference = R8</p>
            <Formula block>{String.raw`\text{Fare} = 15 + 8n \text{ where } n = \text{distance in km}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Linear Relationships',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Linear relationships show a constant rate of change. In South Africa, these appear in tariff systems, distance-time graphs, and pricing structures.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Linear Function Formula</h4>
          <Formula block>{String.raw`y = mx + c`}</Formula>
          <ul className="space-y-1 text-sm mt-2">
            <li><strong>m</strong> = gradient (rate of change)</li>
            <li><strong>c</strong> = y-intercept (starting value)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Eskom charges R150 monthly service fee + R2.50 per kWh</p>
          <Formula block>{String.raw`\text{Cost} = 2.50 \times \text{kWh} + 150`}</Formula>
          <p className="text-sm mt-2">If you use 200 kWh: Cost = 2.50(200) + 150 = R650</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Tables and Graphs',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Data can be represented in multiple ways. Tables organize information clearly, while graphs show trends visually.
        </p>
        <DataChart
          type="line"
          xKey="month"
          data={[
            { month: 'Jan', savings: 500 },
            { month: 'Feb', savings: 700 },
            { month: 'Mar', savings: 900 },
            { month: 'Apr', savings: 1100 },
            { month: 'May', savings: 1300 },
            { month: 'Jun', savings: 1500 },
          ]}
          series={[
            { key: 'savings', label: 'Savings (R)', color: '#3b82f6' },
          ]}
          yLabel="Savings (R)"
          height={220}
        />
        <div className="bg-purple-50 p-4 rounded-lg text-sm">
          <p className="font-medium mb-2">Analysis:</p>
          <p>• Consistent increase of R200 per month</p>
          <p>• Linear pattern: Savings = 300 + 200n (where n = month number)</p>
          <p>• Prediction for July: R1500 + R200 = R1700</p>
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'What is the next number in the sequence: 2, 5, 8, 11, ?',
    options: ['14', '15', '16', '13'],
    answer: '14',
    explanation: 'This is an arithmetic sequence with common difference 3. Next term: 11 + 3 = 14',
  },
  {
    prompt: 'If y = 2x + 1, what is y when x = 3?',
    options: ['5', '6', '7', '8'],
    answer: '7',
    explanation: 'y = 2(3) + 1 = 6 + 1 = 7',
  },
  {
    prompt: 'A parking garage charges R10 for the first hour and R5 for each additional hour. What is the cost for 4 hours?',
    options: ['R20', 'R25', 'R30', 'R25'],
    answer: 'R25',
    explanation: 'Cost = R10 + (3 additional hours × R5) = R10 + R15 = R25',
  },
  {
    prompt: 'In the sequence 80, 70, 60, 50..., what is the 7th term?',
    options: ['20', '30', '10', '40'],
    answer: '20',
    explanation: 'Common difference = -10. Continue: 40, 30, 20. The 7th term is 20',
  },
];

const PatternsRelationshipsRepresentations = () => (
  <CapsSubjectTopic
    title="Patterns, Relationships and Representations"
    subtitle="Sequences, functions, and data visualization"
    learnSteps={learnSteps}
    task="gr10-patterns-relationships-representations-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default PatternsRelationshipsRepresentations;
