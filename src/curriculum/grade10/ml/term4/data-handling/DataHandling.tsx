import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Collecting and Organizing Data',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Data handling involves collecting information, organizing it, and drawing conclusions. In South Africa, data is used by Stats SA, businesses, schools, and government for decision-making.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Data Collection Methods</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Surveys:</strong> Questionnaires (e.g., Census)</li>
            <li><strong>Observations:</strong> Recording what you see</li>
            <li><strong>Experiments:</strong> Controlled tests</li>
            <li><strong>Secondary sources:</strong> Using existing data (Stats SA, research)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Types of Data</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Categorical:</strong> Non-numerical (gender, province, favorite sport)</li>
            <li><strong>Numerical:</strong> Numbers (age, height, test scores)</li>
            <li><strong>Discrete (numerical):</strong> Counted; only separate, specific values (number of learners, shoe sizes)</li>
            <li><strong>Continuous (numerical):</strong> Measured; can take any value in a range (mass, height, temperature, time)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Measures of Central Tendency',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Central tendency measures help summarize data with a single representative value.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">The Three Measures</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Mean (Average)</p>
              <Formula block>{String.raw`\text{Mean} = \frac{\text{Sum of all values}}{\text{Number of values}}`}</Formula>
              <p className="text-xs mt-1">Use when: Data has no extreme outliers</p>
            </div>
            <div>
              <p className="font-medium">Median (Middle value)</p>
              <p>Arrange data in order; middle value is median</p>
              <p className="text-xs mt-1">Use when: Data has outliers or is skewed</p>
            </div>
            <div>
              <p className="font-medium">Mode (Most frequent)</p>
              <p>The value that appears most often</p>
              <p className="text-xs mt-1">Use when: Identifying most common category</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: Test scores: 65, 72, 68, 85, 70, 68, 90</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Mean} = \frac{65 + 72 + 68 + 85 + 70 + 68 + 90}{7} = \frac{518}{7} = 74`}</Formula>
            <p>Median: Arrange: 65, 68, 68, 70, 72, 85, 90 → Middle = 70</p>
            <p>Mode: 68 (appears twice)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Data Representation',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Visual representations make data easier to understand and compare. South African newspapers, Stats SA reports, and business presentations use these daily.
        </p>
        <div className="space-y-2">
          <p className="font-medium text-slate-700">Provincial Population (millions) - 2024 Estimate</p>
          <DataChart
            type="bar"
            data={[
              { province: 'Gauteng', population: 15.8 },
              { province: 'KZN', population: 11.5 },
              { province: 'Western Cape', population: 7.0 },
              { province: 'Eastern Cape', population: 6.7 },
              { province: 'Limpopo', population: 6.0 },
            ]}
            series={[{ key: 'population', label: 'Population', color: '#3b82f6' }]}
            xKey="province"
          />
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-sm mt-4">
          <h4 className="font-semibold mb-2">Types of Graphs</h4>
          <ul className="space-y-2">
            <li><strong>Bar graph:</strong> Compare categories (like above)</li>
            <li><strong>Line graph:</strong> Show trends over time (temperature, sales)</li>
            <li><strong>Pie chart:</strong> Show parts of a whole (budget breakdown)</li>
            <li><strong>Histogram:</strong> Show frequency distribution (test score ranges)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpreting Data',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Being able to read and interpret data critically is essential. Ask: What does this data show? Is it reliable? Are there patterns or trends?
        </p>
        <div className="space-y-2">
          <p className="font-medium text-slate-700">Monthly Electricity Usage (kWh)</p>
          <DataChart
            type="line"
            data={[
              { month: 'Jan', usage: 450 },
              { month: 'Feb', usage: 420 },
              { month: 'Mar', usage: 380 },
              { month: 'Apr', usage: 350 },
              { month: 'May', usage: 380 },
              { month: 'Jun', usage: 410 },
            ]}
            series={[{ key: 'usage', label: 'kWh Used', color: '#ef4444' }]}
            xKey="month"
          />
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-sm mt-4">
          <p className="font-medium mb-2">Analysis of graph above:</p>
          <ul className="space-y-1">
            <li>• Usage decreased from Jan to Apr (cooler months, less AC)</li>
            <li>• Lowest usage in April (350 kWh)</li>
            <li>• Usage increasing again May-Jun (winter, heaters used)</li>
            <li>• Trend: Seasonal variation in electricity consumption</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'What is the mean of the dataset: 10, 15, 20, 25?',
    options: ['17.5', '15', '20', '22.5'],
    answer: '17.5',
    explanation: 'Mean = (10 + 15 + 20 + 25) / 4 = 70 / 4 = 17.5',
  },
  {
    prompt: 'What is the median of: 3, 7, 5, 9, 1?',
    options: ['5', '6', '7', '9'],
    answer: '5',
    explanation: 'Arrange in order: 1, 3, 5, 7, 9. Median is middle value = 5',
  },
  {
    prompt: 'The mode of the dataset: 12, 15, 12, 18, 20, 12, 15 is:',
    options: ['12', '15', '18', '20'],
    answer: '12',
    explanation: 'Mode is the most frequent value. 12 appears 3 times (most common)',
  },
  {
    prompt: 'What type of graph is best for showing how sales changed over 12 months?',
    options: ['Pie chart', 'Line graph', 'Bar graph', 'Histogram'],
    answer: 'Line graph',
    explanation: 'Line graphs are best for showing trends and changes over time',
  },
];

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Statistics and data interpretation"
    learnSteps={learnSteps}
    task="gr10-data-handling-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default DataHandling;
