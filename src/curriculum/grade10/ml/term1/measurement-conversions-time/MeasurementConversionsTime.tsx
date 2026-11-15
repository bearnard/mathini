import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  {
    title: 'Metric Unit Conversions',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          The metric system is based on powers of 10, making conversions straightforward. You multiply by powers of 10 to move between units.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Metric Conversions</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Length:</strong> 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm</li>
            <li><strong>Mass:</strong> 1 kg = 1000 g, 1 g = 1000 mg</li>
            <li><strong>Volume:</strong> 1 ℓ = 1000 mℓ, 1 kℓ = 1000 ℓ</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Convert 3,5 m to cm</p>
          <Formula block>{String.raw`3{,}5 \text{ m} = 3{,}5 \times 100 = 350 \text{ cm}`}</Formula>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg text-sm">
          <strong>Rule of thumb:</strong> Moving to a smaller unit → multiply. Moving to a larger unit → divide.
        </div>
      </div>
    ),
  },
  {
    title: 'Unit Converter',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          Convert between related units to check your calculations and build confidence with practical measurement problems.
        </p>
        <MeasurementConverter defaultTab="length" />
      </div>
    ),
  },
  {
    title: 'Time Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Time calculations are essential for scheduling, transport planning, and everyday life in South Africa.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Time Conversions</h4>
          <ul className="space-y-2 text-sm">
            <li>1 hour = 60 minutes</li>
            <li>1 minute = 60 seconds</li>
            <li>1 day = 24 hours</li>
            <li>1 week = 7 days</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A taxi leaves Cape Town at 08:45 and arrives in Stellenbosch at 10:20. How long was the journey?</p>
          <div className="space-y-2">
            <p className="text-sm">From 08:45 to 09:00 = 15 minutes</p>
            <p className="text-sm">From 09:00 to 10:00 = 1 hour</p>
            <p className="text-sm">From 10:00 to 10:20 = 20 minutes</p>
            <Formula block>{String.raw`\text{Total} = 15 + 60 + 20 = 95 \text{ minutes} = 1 \text{ hour } 35 \text{ minutes}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Practical Measurement Applications',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          In South Africa, measurement conversions are used daily—from buying petrol by the litre, to calculating distances for road trips, to timing cooking recipes.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Real-World Scenario</h4>
          <p className="text-sm mb-2">A recipe calls for 250 mℓ of milk, but you only have a 1-litre carton. How much is 250 mℓ as a fraction of 1 litre?</p>
          <Formula block>{String.raw`\frac{250 \text{ m}\ell}{1000 \text{ m}\ell} = \frac{1}{4} \text{ of the carton}`}</Formula>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Municipal Water Reading</h4>
          <p className="text-sm mb-2">A water meter reads 4567 kℓ at the start of the month and 4573 kℓ at the end. How many litres were used?</p>
          <Formula block>{String.raw`4573 - 4567 = 6 \text{ k}\ell = 6000 \text{ }\ell`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading Conversion Patterns',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Tables and charts help you see patterns quickly. In Mathematical Literacy, charts are useful when comparing unit sizes, travel times, or household usage over several days.
        </p>
        <DataChart
          data={[
            { unit: 'mm', value: 1 },
            { unit: 'cm', value: 10 },
            { unit: 'm', value: 1000 },
            { unit: 'km', value: 1000000 },
          ]}
          series={[{ key: 'value', label: 'Millimetres represented', color: '#6366f1' }]}
          xKey="unit"
          type="bar"
        />
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm text-indigo-900">
          A chart like this reminds you that every step to a larger metric unit changes by a factor of 10, 100, or 1000 depending on how many jumps you make.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'How many millimeters are in 2,5 meters?',
    options: ['25 mm', '250 mm', '2500 mm', '25000 mm'],
    answer: '2500 mm',
    explanation: '1 meter = 1000 mm, so 2,5 × 1000 = 2500 mm',
  },
  {
    prompt: 'If it is 14:30 (2:30 PM), how long until 17:45 (5:45 PM)?',
    options: ['2 hours 15 minutes', '3 hours', '3 hours 15 minutes', '2 hours 45 minutes'],
    answer: '3 hours 15 minutes',
    explanation: 'From 14:30 to 17:45 is 3 hours and 15 minutes.',
  },
  {
    prompt: 'A bottle contains 1,5 litres of juice. How many 250 mℓ glasses can be filled?',
    options: ['4 glasses', '5 glasses', '6 glasses', '7 glasses'],
    answer: '6 glasses',
    explanation: '1,5 ℓ = 1500 mℓ. Divide: 1500 ÷ 250 = 6 glasses',
  },
  {
    prompt: 'How many seconds are there in 3,5 minutes?',
    options: ['180 seconds', '210 seconds', '240 seconds', '350 seconds'],
    answer: '210 seconds',
    explanation: '3,5 minutes = 3,5 × 60 = 210 seconds',
  },
];

const MeasurementConversionsTime = () => (
  <CapsSubjectTopic
    title="Measurement: Conversions and Time"
    subtitle="Units and temporal calculations"
    learnSteps={learnSteps}
    task="gr10-measurement-conversions-time-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default MeasurementConversionsTime;
