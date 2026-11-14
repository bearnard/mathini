import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  {
    title: 'Convert within the metric system',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Grade 12 Mathematical Literacy still expects fluent conversion between units of length, mass, capacity and distance. Move carefully between larger and smaller units and keep track of the decimal shift.</p>
        <Formula block>{String.raw`1 \\text{ km} = 1\\,000 \\text{ m}, \\quad 1 \\text{ m} = 100 \\text{ cm}, \\quad 1 \\text{ L} = 1\\,000 \\text{ mL}`}</Formula>
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
    title: 'Work with compound measures',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Some practical contexts combine units, such as km/h, rand per kWh or litres per minute. Convert one part at a time and keep units attached to every step.</p>
        <Formula block>{String.raw`72 \\text{ km/h} = 72 \\times \\frac{1\\,000}{3\\,600} = 20 \\text{ m/s}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Use time notation accurately',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Learners must read 12-hour and 24-hour time, interpret timetables and calculate elapsed time. A useful strategy is to bridge to the next full hour before finding the total time difference.</p>
        <Formula block>{String.raw`\\text{Elapsed time} = \\text{finish time} - \\text{start time}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">For example, <Formula>{String.raw`18{:}40 = 6{:}40 \\text{ PM}`}</Formula>. If a trip starts at 13:25 and ends at 15:10, the elapsed time is 1 hour 45 minutes.</p>
      </div>
    ),
  },
  {
    title: 'Judge whether an answer is reasonable',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Measurement questions often test estimation as well as calculation. A classroom door cannot be 20 m high and a bus trip across town cannot take 3 minutes, so use your everyday knowledge to test the result.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Check whether the unit is sensible for the object.</li>
          <li>Round only at the end when the question allows it.</li>
          <li>Explain why the final answer fits the context.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "measurement-conversions-time-1",
    "question": "How many metres are in 3.5 km?",
    "options": [
      "35 m",
      "350 m",
      "3 500 m",
      "35 000 m"
    ],
    "answer": 2,
    "explanation": "1 km = 1 000 m, so 3.5 km = 3 500 m."
  },
  {
    "id": "measurement-conversions-time-2",
    "question": "Convert 750 mL to litres.",
    "options": [
      "0.075 L",
      "0.75 L",
      "7.5 L",
      "75 L"
    ],
    "answer": 1,
    "explanation": "1 000 mL = 1 L, so 750 mL = 0.75 L."
  },
  {
    "id": "measurement-conversions-time-3",
    "question": "A train leaves at 07:45 and arrives at 10:05. How long is the journey?",
    "options": [
      "2 h 10 min",
      "2 h 20 min",
      "2 h 30 min",
      "3 h 20 min"
    ],
    "answer": 1,
    "explanation": "From 07:45 to 09:45 is 2 hours, then 20 more minutes to 10:05."
  },
  {
    "id": "measurement-conversions-time-4",
    "question": "What is 18:40 in 12-hour time?",
    "options": [
      "6:40 AM",
      "8:40 PM",
      "6:40 PM",
      "4:40 PM"
    ],
    "answer": 2,
    "explanation": "18:40 is 6:40 PM because 18 - 12 = 6."
  },
  {
    "id": "measurement-conversions-time-5",
    "question": "A bus departs at 11:35 and the trip takes 1 hour 50 minutes. What is the arrival time?",
    "options": [
      "12:25",
      "13:15",
      "13:25",
      "13:50"
    ],
    "answer": 2,
    "explanation": "11:35 + 1 hour = 12:35, then +50 minutes = 13:25."
  },
  {
    "id": "measurement-conversions-time-6",
    "question": "Convert 72 km/h to m/s.",
    "options": [
      "10 m/s",
      "18 m/s",
      "20 m/s",
      "24 m/s"
    ],
    "answer": 2,
    "explanation": "72 × 1 000 ÷ 3 600 = 20 m/s."
  },
  {
    "id": "measurement-conversions-time-7",
    "question": "How many litres are in 2.5 kL?",
    "options": [
      "25 L",
      "250 L",
      "2 500 L",
      "25 000 L"
    ],
    "answer": 2,
    "explanation": "1 kL = 1 000 L, so 2.5 kL = 2 500 L."
  },
  {
    "id": "measurement-conversions-time-8",
    "question": "Which is the most reasonable estimate for the height of a classroom door?",
    "options": [
      "2 mm",
      "20 cm",
      "2 m",
      "20 m"
    ],
    "answer": 2,
    "explanation": "A normal door is about 2 m high, not tiny or extremely tall."
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

const MeasurementConversionsTime = () => (
  <CapsSubjectTopic
    title="Measurement: Conversions and Time"
    subtitle="Metric conversions, elapsed time and practical estimates"
    learnSteps={topicLearnSteps}
    task="gr12-measurement-conversions-time-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default MeasurementConversionsTime;
