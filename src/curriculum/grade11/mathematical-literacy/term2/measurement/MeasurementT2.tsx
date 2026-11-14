import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  { title: 'Measuring length, mass and volume', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Practical measurement involves choosing the right instrument and unit for the situation.</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Length</strong><p className="text-slate-600 text-sm">Ruler, tape measure, trundle wheel. Units: mm, cm, m, km.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Mass</strong><p className="text-slate-600 text-sm">Kitchen scale, bathroom scale, balance. Units: g, kg, t.</p></div><div className="rounded-xl bg-yellow-50 p-4"><strong className="text-yellow-700">Volume / capacity</strong><p className="text-slate-600 text-sm">Measuring jug, graduated cylinder. Units: ml, ℓ, kℓ.</p></div></div><p className="text-sm text-slate-500">Always read the measuring instrument from eye level to avoid parallax error.</p></div>) },
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
  { title: 'Temperature scales', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Temperature is measured in <strong>degrees Celsius (°C)</strong> in South Africa, but you may need to convert to or from Fahrenheit (°F).</p><div className="bg-orange-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-orange-800">Conversion formulae:</p><Formula block>{String.raw`F = 1.8C + 32`}</Formula><Formula block>{String.raw`C = \frac{F - 32}{1.8}`}</Formula><p className="text-slate-700 mt-2">Example: Convert 25°C to °F</p><Formula block>{String.raw`F = 1.8(25) + 32 = 77`}</Formula><p className="text-slate-700 text-sm mt-1">Water freezes at 0°C (32°F) and boils at 100°C (212°F).</p></div></div>) },
  { title: 'Reading measuring instruments', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">You must be able to read values from <strong>analogue</strong> and <strong>digital</strong> measuring instruments accurately.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Analogue instrument</strong><p className="text-slate-600 text-sm">Has a dial or scale with markings. Determine the value of each small division first, then read the pointer position.</p></div><div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Digital instrument</strong><p className="text-slate-600 text-sm">Displays a number directly. Note the unit shown on the display and any decimal places.</p></div></div><p className="text-sm text-slate-500">When reading a scale, always check the smallest division (e.g. each small mark = 0,5 kg or 10 ml).</p></div>) },
  { title: 'Mixed-unit conversions in context', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Practical problems often mix units. Always convert to a common unit before calculating.</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-green-800">Example — Recipe scaling:</p><p className="text-slate-700">A recipe for 4 people uses 500 g flour. Scale it up for 10 people.</p><Formula block>{String.raw`\text{new amount} = \frac{10}{4} \times 500 = 1250\text{ g} = 1.25\text{ kg}`}</Formula><p className="font-bold text-green-800 mt-3">Example — Building materials:</p><p className="text-slate-700">A wall is 3,5 m wide and 2,4 m tall. If tiles are 20 cm × 20 cm, how many are needed?</p><Formula block>{String.raw`A = \ell \times w = 350 \times 240 = 84\,000\text{ cm}^2`}</Formula><Formula block>{String.raw`\text{Tiles} = \frac{84\,000}{20 \times 20} = 210`}</Formula></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'Convert 37°C to degrees Fahrenheit.',
    options: ['98,4°F', '99,6°F', '98,6°F', '100°F'],
    answer: '98,6°F',
    explanation: 'F = 1,8 × 37 + 32 = 66,6 + 32 = 98,6°F (normal body temperature).',
  },
  {
    prompt: 'A thermometer reads 104°F. Convert this to Celsius.',
    options: ['40°C', '38°C', '42°C', '36°C'],
    answer: '40°C',
    explanation: 'C = (104 − 32) ÷ 1,8 = 72 ÷ 1,8 = 40°C.',
  },
  {
    prompt: 'An analogue kitchen scale has 10 equal divisions between 0 kg and 1 kg. A pointer sits at the 7th mark. What does the scale read?',
    options: ['0,6 kg', '0,7 kg', '7 kg', '0,07 kg'],
    answer: '0,7 kg',
    explanation: 'Each division = 1 kg ÷ 10 = 0,1 kg. 7th mark = 7 × 0,1 = 0,7 kg.',
  },
  {
    prompt: 'A measuring jug is marked in 50 ml intervals. It is filled to the 7th mark. How much liquid is in the jug?',
    options: ['35 ml', '350 ml', '700 ml', '3 500 ml'],
    answer: '350 ml',
    explanation: 'Each interval = 50 ml. 7 × 50 = 350 ml.',
  },
  {
    prompt: 'A recipe for 6 people needs 750 ml of milk. How much milk is needed for 10 people?',
    options: ['1 000 ml', '1 250 ml', '1 500 ml', '900 ml'],
    answer: '1 250 ml',
    explanation: 'Per person = 750 ÷ 6 = 125 ml. For 10: 125 × 10 = 1 250 ml.',
  },
  {
    prompt: 'Water boils at what temperature in degrees Fahrenheit?',
    options: ['100°F', '180°F', '212°F', '32°F'],
    answer: '212°F',
    explanation: 'Water boils at 100°C. F = 1,8 × 100 + 32 = 212°F.',
  },
  {
    prompt: 'What is the most appropriate unit for measuring the mass of a truck?',
    options: ['Milligrams (mg)', 'Grams (g)', 'Kilograms (kg)', 'Tonnes (t)'],
    answer: 'Tonnes (t)',
    explanation: 'Heavy vehicles are measured in tonnes (t), where 1 t = 1 000 kg.',
  },
  {
    prompt: 'A fish tank has dimensions 60 cm × 30 cm × 40 cm. What is its volume in litres? (1 ℓ = 1 000 cm³)',
    options: ['72 ℓ', '720 ℓ', '7 200 ℓ', '7,2 ℓ'],
    answer: '72 ℓ',
    explanation: 'Volume = 60 × 30 × 40 = 72 000 cm³. ÷ 1 000 = 72 ℓ.',
  },
  {
    prompt: 'A bathroom scale reads 0 to 150 kg with 30 intervals. What is the value of each small division?',
    options: ['3 kg', '5 kg', '10 kg', '2 kg'],
    answer: '5 kg',
    explanation: '150 kg ÷ 30 intervals = 5 kg per interval.',
  },
];

const MeasurementT2 = () => (
  <CapsSubjectTopic
    title="Measurement"
    subtitle="Length, mass, volume, temperature and reading measuring instruments"
    learnSteps={learnSteps}
    task="gr11-ml-measurement-t2"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default MeasurementT2;
