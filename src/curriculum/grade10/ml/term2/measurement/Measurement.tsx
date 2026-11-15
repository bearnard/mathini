import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Perimeter is the distance around a shape. In South Africa, you'll use this to calculate fencing for a property, edging for a garden, or skirting boards for a room.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Perimeter Formulas</h4>
          <div className="space-y-2 text-sm">
            <div>
              <p><strong>Rectangle:</strong></p>
              <Formula>{String.raw`P = 2(\text{length} + \text{width})`}</Formula>
            </div>
            <div>
              <p><strong>Square:</strong></p>
              <Formula>{String.raw`P = 4 \times \text{side}`}</Formula>
            </div>
            <div>
              <p><strong>Circle (Circumference):</strong></p>
              <Formula>{String.raw`C = 2\pi r \text{ or } C = \pi d`}</Formula>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: You need to fence a rectangular garden that is 12 m × 8 m. How much fencing?</p>
          <Formula>{String.raw`P = 2(12 + 8) = 2(20) = 40 \text{ m of fencing}`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Area Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Area measures the surface covered by a shape. Use this when buying tiles, carpet, paint, or calculating land size in South Africa.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Area Formulas</h4>
          <div className="space-y-2 text-sm">
            <div>
              <p><strong>Rectangle:</strong></p>
              <Formula>{String.raw`A = \text{length} \times \text{width}`}</Formula>
            </div>
            <div>
              <p><strong>Triangle:</strong></p>
              <Formula>{String.raw`A = \frac{1}{2} \times \text{base} \times \text{height}`}</Formula>
            </div>
            <div>
              <p><strong>Circle:</strong></p>
              <Formula>{String.raw`A = \pi r^2`}</Formula>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Example: Floor tiles cost R45 per m². A room is 5 m × 4 m. What's the total cost?</p>
          <div className="space-y-1 text-sm">
            <Formula>{String.raw`\text{Area} = 5 \times 4 = 20 \text{ m}^2`}</Formula>
            <Formula>{String.raw`\text{Cost} = 20 \times 45 = \text{R}900`}</Formula>
          </div>
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
        <MeasurementConverter defaultTab="mass" />
      </div>
    ),
  },
  {
    title: 'Surface Area and Volume',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Surface area is the total area of all faces of a 3D object. Volume is the space inside. These are used for packaging, water tanks, swimming pools, and containers.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">3D Shape Formulas</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Rectangular Prism (Box)</p>
              <Formula>{String.raw`\text{Volume} = l \times w \times h`}</Formula>
              <Formula>{String.raw`\text{Surface Area} = 2(lw + lh + wh)`}</Formula>
            </div>
            <div>
              <p className="font-medium">Cylinder (Water tank)</p>
              <Formula>{String.raw`\text{Volume} = \pi r^2 h`}</Formula>
              <Formula>{String.raw`\text{Surface Area} = 2\pi r^2 + 2\pi rh`}</Formula>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A water tank is cylindrical with radius 1,5 m and height 2 m. What's its capacity? (Use π ≈ 3,14)</p>
          <Formula>{String.raw`V = \pi r^2 h = 3{,}14 \times 1{,}5^2 \times 2 = 3{,}14 \times 2{,}25 \times 2 = 14{,}13 \text{ m}^3`}</Formula>
          <p className="text-sm mt-2">Since 1 m³ = 1000 ℓ, the tank holds about 14 130 litres</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Monitoring Measurement Data',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Measurement results often come from repeated observations. A chart helps you compare values such as classroom temperature, rainfall, or container capacity at a glance.
        </p>
        <DataChart
          data={[
            { item: 'Bucket', value: 10 },
            { item: 'Drum', value: 25 },
            { item: 'Tank', value: 120 },
            { item: 'Pool', value: 5000 },
          ]}
          series={[{ key: 'value', label: 'Capacity (litres)', color: '#14b8a6' }]}
          xKey="item"
          type="bar"
        />
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-sm text-teal-900">
          Comparing values visually makes it easier to notice when an answer is unreasonable, such as recording a swimming pool in millilitres.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'What is the area of a rectangle with length 8 m and width 5 m?',
    options: ['13 m²', '26 m²', '40 m²', '65 m²'],
    answer: '40 m²',
    explanation: 'Area = length × width = 8 × 5 = 40 m²',
  },
  {
    prompt: 'A circular garden has a radius of 7 m. What is its area? (Use π ≈ 3,14)',
    options: ['21,98 m²', '43,96 m²', '153,86 m²', '307,72 m²'],
    answer: '153,86 m²',
    explanation: 'Area = πr² = 3,14 × 7² = 3,14 × 49 ≈ 153,86 m²',
  },
  {
    prompt: 'What is the perimeter of a square with side 9 cm?',
    options: ['18 cm', '36 cm', '81 cm', '27 cm'],
    answer: '36 cm',
    explanation: 'Perimeter = 4 × side = 4 × 9 = 36 cm',
  },
  {
    prompt: 'A rectangular box has dimensions 4 cm × 3 cm × 2 cm. What is its volume?',
    options: ['9 cm³', '24 cm³', '26 cm³', '52 cm³'],
    answer: '24 cm³',
    explanation: 'Volume = length × width × height = 4 × 3 × 2 = 24 cm³',
  },
];

const Measurement = () => (
  <CapsSubjectTopic
    title="Measurement"
    subtitle="Distance, area, and volume calculations"
    learnSteps={learnSteps}
    task="gr10-measurement-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default Measurement;
