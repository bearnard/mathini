import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/math/term3/measurement/diagram.webp", alt: "Measurement" },
    title: 'Convert Units Before Calculating',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Unit consistency matters. Convert all lengths to the same unit before using any perimeter, area, or volume formula.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <Formula block>{String.raw`1\\,\\text{m} = 100\\,\\text{cm}`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <Formula block>{String.raw`1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2`}</Formula>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <Formula block>{String.raw`1\\,\\text{m}^3 = 1\\,000\\,000\\,\\text{cm}^3`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose the Correct Mensuration Formula',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Identify the solid or 2D shape first, then match it to the correct formula for area, surface area, or volume.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`V_{\\text{cylinder} = \\pi r^2 h`}</Formula>
          <Formula block>{String.raw`V_{\\text{cone} = \\frac{1}{3}\\pi r^2 h`}</Formula>
          <Formula block>{String.raw`SA_{\\text{sphere} = 4\\pi r^2`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (h: number) => 9 * Math.PI * h, label: 'V = 9πh for r = 3', color: '#14b8a6' },
          ]}
          xRange={[0, 10]}
          yRange={[0, 300]}
        />
      </div>
    ),
  },
  {
    title: 'Round Sensibly and Interpret Answers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">State the final answer with the correct unit and sensible accuracy. In practical questions, think about whether the result is realistic.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-700">Exact form</h4>
            <Formula block>{String.raw`V = 54\\pi\\,\\text{cm}^3`}</Formula>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <h4 className="font-semibold text-rose-700">Decimal form</h4>
            <Formula block>{String.raw`V \\approx 169.65\\,\\text{cm}^3`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: '1 m² is equal to how many cm²?',
    options: ['10 000', '1 000', '100', '100 000'],
    answer: '10 000',
    explanation: '1 m = 100 cm, so 1 m² = 100 × 100 = 10 000 cm².',
  },
  {
    prompt: 'The volume of a cylinder with radius 3 and height 5 is:',
    options: ['15π', '30π', '45π', '90π'],
    answer: '45π',
    explanation: 'V = πr²h = π(3²)(5) = 45π.',
  },
  {
    prompt: 'The surface area of a sphere with radius 4 is:',
    options: ['16π', '64π', '256π', '32π'],
    answer: '64π',
    explanation: 'SA = 4πr² = 4π(4²) = 4π(16) = 64π.',
  },
  {
    prompt: 'Convert 2.5 km² to m²:',
    options: ['25 000', '250 000', '2 500 000', '25 000 000'],
    answer: '2 500 000',
    explanation: '1 km² = (1 000)² m² = 1 000 000 m². So 2.5 km² = 2.5 × 1 000 000 = 2 500 000 m².',
  },
  {
    prompt: 'The area of a triangle with base 8 cm and height 6 cm is:',
    options: ['48 cm²', '14 cm²', '24 cm²', '96 cm²'],
    answer: '24 cm²',
    explanation: 'Area = ½ × base × height = ½ × 8 × 6 = 24 cm².',
  },
  {
    prompt: 'A cone has radius 3 cm and slant height 5 cm. Its lateral surface area is:',
    options: ['30π cm²', '15π cm²', '9π cm²', '45π cm²'],
    answer: '15π cm²',
    explanation: 'Lateral SA = πrl = π(3)(5) = 15π cm².',
  },
  {
    prompt: '1 litre is equal to how many cm³?',
    options: ['100', '1 000', '10 000', '10'],
    answer: '1 000',
    explanation: '1 litre = 1 000 mℓ = 1 000 cm³.',
  },
  {
    prompt: 'The perimeter of a semicircle with diameter 10 cm is:',
    options: ['10π', '10π + 10', '5π + 10', '5π'],
    answer: '5π + 10',
    explanation: 'Perimeter = πr + 2r = π(5) + 2(5) = 5π + 10 cm (curved arc + diameter).',
  },
];

const Measurement = () => (
  <CapsSubjectTopic
    title="Measurement"
    subtitle="Units, surface area, volume and problem solving"
    learnSteps={learnSteps}
    task="gr11-measurement-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Measurement;
