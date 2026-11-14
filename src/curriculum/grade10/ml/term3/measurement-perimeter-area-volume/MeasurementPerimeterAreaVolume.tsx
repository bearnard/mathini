import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter of 2D Shapes',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Perimeter is the total distance around the outside of a shape. In South Africa, you use this when fencing yards, framing pictures, or calculating borders.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Perimeter Formulas</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Rectangle</p>
              <Formula block>{String.raw`P = 2(l + w) \text{ or } P = 2l + 2w`}</Formula>
            </div>
            <div>
              <p className="font-medium">Square</p>
              <Formula block>{String.raw`P = 4s`}</Formula>
            </div>
            <div>
              <p className="font-medium">Triangle</p>
              <Formula block>{String.raw`P = a + b + c`}</Formula>
            </div>
            <div>
              <p className="font-medium">Circle (Circumference)</p>
              <Formula block>{String.raw`C = 2\pi r = \pi d`}</Formula>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A rectangular vegetable garden is 15 m by 8 m. How much fencing is needed?</p>
          <Formula block>{String.raw`P = 2(15 + 8) = 2(23) = 46 \text{ m}`}</Formula>
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
        <MeasurementConverter defaultTab="volume" />
      </div>
    ),
  },
  {
    title: 'Area of 2D Shapes',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Area measures the space inside a shape. Use this to calculate flooring, painting walls, land size, or paving.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Area Formulas</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Rectangle</p>
              <Formula block>{String.raw`A = l \times w`}</Formula>
            </div>
            <div>
              <p className="font-medium">Square</p>
              <Formula block>{String.raw`A = s^2`}</Formula>
            </div>
            <div>
              <p className="font-medium">Triangle</p>
              <Formula block>{String.raw`A = \frac{1}{2} \times b \times h`}</Formula>
            </div>
            <div>
              <p className="font-medium">Circle</p>
              <Formula block>{String.raw`A = \pi r^2`}</Formula>
            </div>
            <div>
              <p className="font-medium">Trapezium</p>
              <Formula block>{String.raw`A = \frac{1}{2}(a + b) \times h`}</Formula>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: Paint costs R80 per litre, covering 10 m² per litre. A wall is 6 m × 3 m. How much will it cost?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Area} = 6 \times 3 = 18 \text{ m}^2`}</Formula>
            <Formula block>{String.raw`\text{Paint needed} = 18 \div 10 = 1.8 \text{ litres} \approx 2 \text{ litres}`}</Formula>
            <Formula block>{String.raw`\text{Cost} = 2 \times 80 = \text{R}160`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Volume of 3D Shapes',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Volume measures the space inside a 3D object. Essential for water tanks, swimming pools, packaging, and construction in South Africa.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Volume Formulas</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Rectangular Prism (Box)</p>
              <Formula block>{String.raw`V = l \times w \times h`}</Formula>
            </div>
            <div>
              <p className="font-medium">Cube</p>
              <Formula block>{String.raw`V = s^3`}</Formula>
            </div>
            <div>
              <p className="font-medium">Cylinder (Tank, Drum)</p>
              <Formula block>{String.raw`V = \pi r^2 h`}</Formula>
            </div>
            <div>
              <p className="font-medium">Triangular Prism</p>
              <Formula block>{String.raw`V = \frac{1}{2} \times b \times h \times l`}</Formula>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A swimming pool is 10 m × 5 m × 1.5 m deep. How many litres does it hold?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`V = 10 \times 5 \times 1.5 = 75 \text{ m}^3`}</Formula>
            <p>Since 1 m³ = 1000 ℓ:</p>
            <Formula block>{String.raw`75 \times 1000 = 75\,000 \text{ litres}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Surface Area of 3D Shapes',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Surface area is the total area of all outer faces. Used for packaging materials, painting, and material costs.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Surface Area Formulas</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Rectangular Prism</p>
              <Formula block>{String.raw`SA = 2(lw + lh + wh)`}</Formula>
            </div>
            <div>
              <p className="font-medium">Cube</p>
              <Formula block>{String.raw`SA = 6s^2`}</Formula>
            </div>
            <div>
              <p className="font-medium">Cylinder</p>
              <Formula block>{String.raw`SA = 2\pi r^2 + 2\pi rh`}</Formula>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A box is 20 cm × 15 cm × 10 cm. How much cardboard is needed to make it?</p>
          <Formula block>{String.raw`SA = 2(20 \times 15 + 20 \times 10 + 15 \times 10)`}</Formula>
          <Formula block>{String.raw`= 2(300 + 200 + 150) = 2(650) = 1300 \text{ cm}^2`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpreting Building Measurements',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Construction and packaging problems often combine perimeter, area, and volume. A graph can compare which measure is changing the fastest as an object gets bigger.
        </p>
        <DataChart
          data={[
            { size: 'Small box', area: 24 },
            { size: 'Medium box', area: 54 },
            { size: 'Large box', area: 96 },
            { size: 'XL box', area: 150 },
          ]}
          series={[{ key: 'area', label: 'Surface area (m²)', color: '#f97316' }]}
          xKey="size"
          type="bar"
        />
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-sm text-orange-900">
          Use the graph together with formulas so that you do not confuse a two-dimensional measure like area with a three-dimensional measure like volume.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'What is the perimeter of a rectangle with length 12 cm and width 8 cm?',
    options: ['20 cm', '40 cm', '96 cm', '30 cm'],
    answer: '40 cm',
    explanation: 'Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40 cm',
  },
  {
    prompt: 'What is the volume of a cube with side 5 cm?',
    options: ['15 cm³', '25 cm³', '125 cm³', '50 cm³'],
    answer: '125 cm³',
    explanation: 'Volume = side³ = 5³ = 125 cm³',
  },
  {
    prompt: 'A circular pizza has diameter 30 cm. What is its area? (Use π ≈ 3.14)',
    options: ['706.5 cm²', '94.2 cm²', '2826 cm²', '353.25 cm²'],
    answer: '706.5 cm²',
    explanation: 'Radius = 15 cm. Area = πr² = 3.14 × 15² = 3.14 × 225 = 706.5 cm²',
  },
  {
    prompt: 'A rectangular water tank is 2 m × 1.5 m × 1 m. How many litres does it hold?',
    options: ['3000 ℓ', '300 ℓ', '30 ℓ', '4.5 ℓ'],
    answer: '3000 ℓ',
    explanation: 'Volume = 2 × 1.5 × 1 = 3 m³. Since 1 m³ = 1000 ℓ, capacity = 3000 ℓ',
  },
];

const MeasurementPerimeterAreaVolume = () => (
  <CapsSubjectTopic
    title="Measurement: Perimeter, Area and Volume"
    subtitle="Spatial measurements of 2D and 3D shapes"
    learnSteps={learnSteps}
    task="gr10-measurement-perimeter-area-volume-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default MeasurementPerimeterAreaVolume;
