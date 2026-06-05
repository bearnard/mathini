import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  { title: 'Perimeter of 2D shapes', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Perimeter</strong> is the total distance around the outside of a 2D shape. It is measured in units of length (mm, cm, m).</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Rectangle</strong><Formula block>{String.raw`P = 2(\ell + w)`}</Formula><Formula block>{String.raw`P = 2(8 + 5) = 26\text{ m}`}</Formula></div><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Square</strong><Formula block>{String.raw`P = 4 \times \text{side}`}</Formula><Formula block>{String.raw`P = 4 \times 6 = 24\text{ m}`}</Formula></div><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Circle (circumference)</strong><Formula block>{String.raw`C = 2\pi r`}</Formula><Formula block>{String.raw`C = 2\pi(7) \approx 43.98\text{ m}`}</Formula></div><div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Composite shape</strong><p className="text-slate-600 text-sm">Add up all the outer edges — only the outer boundary counts.</p></div></div></div>) },
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
  { title: 'Area of 2D shapes', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Area</strong> measures the surface covered by a shape. Units are squared (cm², m²).</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Rectangle</strong><Formula block>{String.raw`A = \ell \times w`}</Formula></div><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Triangle</strong><Formula block>{String.raw`A = \frac{1}{2}bh`}</Formula></div><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Circle</strong><Formula block>{String.raw`A = \pi r^2`}</Formula></div></div><div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 text-left mt-2"><strong>Composite shape:</strong> Break into simpler shapes. Add areas together (or subtract a cut-out area).</div></div>) },
  { title: 'Volume of 3D shapes', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Volume</strong> measures the space inside a 3D shape. Units are cubed (cm³, m³) or litres (1 ℓ = 1 000 cm³).</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-indigo-50 p-4 space-y-2"><strong className="text-indigo-700">Rectangular prism (box)</strong><Formula block>{String.raw`V = \ell \times w \times h`}</Formula><Formula block>{String.raw`V = 50 \times 30 \times 20 = 30\,000\text{ cm}^3 = 30\ell`}</Formula></div><div className="rounded-xl bg-red-50 p-4 space-y-2"><strong className="text-red-700">Cylinder</strong><Formula block>{String.raw`V = \pi r^2 h`}</Formula><Formula block>{String.raw`V = \pi(5)^2(10) \approx 785\text{ cm}^3`}</Formula></div></div></div>) },
  { title: 'Practical applications', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Measurement skills are applied in tiling, painting, fencing and packaging contexts.</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-green-800">Key applications:</p><p className="text-slate-700">🏠 <strong>Tiling a floor:</strong> Calculate floor area ÷ tile area = number of tiles needed.</p><p className="text-slate-700">🎨 <strong>Painting a wall:</strong> Calculate wall area, divide by coverage per litre → litres of paint.</p><p className="text-slate-700">📦 <strong>Filling a container:</strong> Calculate volume, convert to litres.</p><p className="text-slate-700">🌿 <strong>Fencing:</strong> Calculate perimeter → total fencing needed.</p><Formula block>{String.raw`\text{Tiles needed} = \frac{\text{floor area}}{\text{tile area}}`}</Formula></div><p className="text-sm text-slate-500">Always add a percentage for wastage (e.g., 10% extra for tiles) if the question asks for it.</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A rectangular room is 6 m × 4,5 m. What is the floor area?',
    options: ['21 m²', '27 m²', '10,5 m²', '26 m²'],
    answer: '27 m²',
    explanation: 'Area = 6 × 4,5 = 27 m².',
  },
  {
    prompt: 'A circular swimming pool has a radius of 3,5 m. What is its area? (Use π ≈ 3,14)',
    options: ['38,47 m²', '21,98 m²', '10,99 m²', '43,96 m²'],
    answer: '38,47 m²',
    explanation: 'A = πr² = 3,14 × (3,5)² = 3,14 × 12,25 = 38,465 ≈ 38,47 m².',
  },
  {
    prompt: 'A box is 40 cm × 25 cm × 15 cm. What is its volume in litres?',
    options: ['1,5 ℓ', '15 ℓ', '1 500 ℓ', '150 ℓ'],
    answer: '15 ℓ',
    explanation: 'V = 40 × 25 × 15 = 15 000 cm³. ÷ 1 000 = 15 ℓ.',
  },
  {
    prompt: 'A kitchen is 5 m × 4 m. Tiles are 50 cm × 50 cm. How many tiles are needed (no wastage)?',
    options: ['40 tiles', '80 tiles', '160 tiles', '200 tiles'],
    answer: '80 tiles',
    explanation: 'Floor area = 5 × 4 = 20 m². Tile area = 0,5 × 0,5 = 0,25 m². Tiles = 20 ÷ 0,25 = 80.',
  },
  {
    prompt: 'The perimeter of a rectangle is 36 m. Its width is 7 m. What is its length?',
    options: ['22 m', '11 m', '29 m', '15 m'],
    answer: '11 m',
    explanation: '2(l + 7) = 36 → l + 7 = 18 → l = 11 m.',
  },
  {
    prompt: 'A cylindrical water tank has a radius of 60 cm and a height of 1,2 m. What is its volume in litres? (π ≈ 3,14)',
    options: ['1 357 ℓ', '135,6 ℓ', '1 357,17 ℓ', '13 572 ℓ'],
    answer: '1 357,17 ℓ',
    explanation: 'Convert: r = 60 cm, h = 120 cm. V = 3,14 × 60² × 120 = 3,14 × 3 600 × 120 = 1 356 480 cm³ ÷ 1 000 = 1 356,48 ≈ 1 357 ℓ.',
  },
  {
    prompt: 'A triangular garden has a base of 8 m and a height of 5 m. What is its area?',
    options: ['40 m²', '13 m²', '20 m²', '80 m²'],
    answer: '20 m²',
    explanation: 'A = ½ × base × height = ½ × 8 × 5 = 20 m².',
  },
  {
    prompt: 'Paint covers 12 m² per litre. A wall is 8 m long and 2,5 m high. How many litres are needed for TWO coats?',
    options: ['1,67 ℓ', '3,33 ℓ', '2 ℓ', '4 ℓ'],
    answer: '3,33 ℓ',
    explanation: 'Wall area = 8 × 2,5 = 20 m². Two coats = 40 m². Litres = 40 ÷ 12 = 3,33 ℓ.',
  },
  {
    prompt: 'A garden needs fencing around its perimeter. The garden is 12 m × 9 m. What length of fencing is required?',
    options: ['21 m', '42 m', '108 m', '40 m'],
    answer: '42 m',
    explanation: 'P = 2(12 + 9) = 2 × 21 = 42 m.',
  },
];

const PerimeterAreaVolume = () => (
  <CapsSubjectTopic
    title="Measurement: Perimeter, Area and Volume"
    subtitle="Calculating size, capacity and material use in practical contexts"
    learnSteps={learnSteps}
    task="gr11-ml-perimeter-area-t3"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default PerimeterAreaVolume;
