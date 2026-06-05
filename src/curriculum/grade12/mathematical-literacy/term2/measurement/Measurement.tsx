import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  {
    title: 'Select the correct measure for the task',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Practical problems may involve perimeter, area, volume, mass, capacity or temperature. Before calculating, decide what the question is really asking for so that you choose the correct measurement tool.</p>
        <Formula block>{String.raw`P = 2(l + w)`}</Formula>
        <Formula block>{String.raw`A = l \\times w`}</Formula>
        <Formula block>{String.raw`V = l \\times w \\times h`}</Formula>
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
    title: 'Keep units consistent in multi-step calculations',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Real-life measurement questions often mix units, such as centimetres with metres or litres with millilitres. Convert to one unit system before substituting values into a formula.</p>
        <Formula block>{String.raw`1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2, \\quad 1 \\text{ m}^3 = 1\\,000 \\text{ L}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Use formulas in practical contexts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Perimeter, area and volume formulas are tools for solving everyday problems rather than abstract exercises. A rectangular garden, tiled floor or water tank all require the same mathematics in a practical setting.</p>
        <Formula block>{String.raw`\\text{Paint needed} = \\frac{\\text{area to cover}{\\text{coverage per litre}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Check reasonableness and rounding',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">In Grade 12, answers should be sensible for the situation. If a container holds 0.0003 L or a room has an area of 4 000 m², stop and review the method, the formula and the units.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Round at the final step unless the question says otherwise.</li>
          <li>Include the correct unit with every final answer.</li>
          <li>Explain why the result is realistic for the object described.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "measurement-1",
    "question": "What is the perimeter of a rectangle that is 8 m long and 5 m wide?",
    "options": [
      "13 m",
      "26 m",
      "40 m",
      "80 m"
    ],
    "answer": 1,
    "explanation": "Perimeter = 2(8 + 5) = 26 m."
  },
  {
    "id": "measurement-2",
    "question": "What is the area of a rectangular floor that is 12 m by 4.5 m?",
    "options": [
      "16.5 m²",
      "33 m²",
      "54 m²",
      "108 m²"
    ],
    "answer": 2,
    "explanation": "Area = 12 × 4.5 = 54 m²."
  },
  {
    "id": "measurement-3",
    "question": "A box is 2 m long, 1.5 m wide and 0.5 m high. What is its volume?",
    "options": [
      "1 m³",
      "1.5 m³",
      "2 m³",
      "4 m³"
    ],
    "answer": 1,
    "explanation": "Volume = 2 × 1.5 × 0.5 = 1.5 m³."
  },
  {
    "id": "measurement-4",
    "question": "One litre of paint covers 8 m². How many litres are needed for a wall area of 24 m²?",
    "options": [
      "2 L",
      "3 L",
      "4 L",
      "8 L"
    ],
    "answer": 1,
    "explanation": "24 ÷ 8 = 3 L."
  },
  {
    "id": "measurement-5",
    "question": "Convert 2.4 kg to grams.",
    "options": [
      "24 g",
      "240 g",
      "2 400 g",
      "24 000 g"
    ],
    "answer": 2,
    "explanation": "1 kg = 1 000 g, so 2.4 kg = 2 400 g."
  },
  {
    "id": "measurement-6",
    "question": "The temperature rises from 18 °C to 31 °C. By how many degrees did it rise?",
    "options": [
      "11 °C",
      "12 °C",
      "13 °C",
      "49 °C"
    ],
    "answer": 2,
    "explanation": "31 − 18 = 13 °C."
  },
  {
    "id": "measurement-7",
    "question": "Which unit is most suitable for the volume of cough syrup in a small bottle?",
    "options": [
      "km",
      "kg",
      "mL",
      "m²"
    ],
    "answer": 2,
    "explanation": "Small liquid volumes are usually measured in millilitres."
  },
  {
    "id": "measurement-8",
    "question": "A 3 m by 4 m floor is tiled with square tiles of side 0.5 m. How many tiles are needed if there is no waste?",
    "options": [
      "24",
      "36",
      "48",
      "96"
    ],
    "answer": 2,
    "explanation": "Floor area = 12 m². Each tile area = 0.25 m². Tiles needed = 12 ÷ 0.25 = 48."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const Measurement = () => (
  <CapsSubjectTopic
    title="Measurement"
    subtitle="Perimeter, area, volume and mixed-unit measurement"
    learnSteps={topicLearnSteps}
    task="gr12-measurement-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default Measurement;
