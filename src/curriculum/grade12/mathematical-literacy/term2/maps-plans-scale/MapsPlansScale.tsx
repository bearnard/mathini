import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret ratio and line scales',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A scale such as 1:50 000 means 1 unit on the map represents 50 000 of the same units in reality. Line scales work in the same way but show the equivalent distances visually.</p>
        <Formula block>{String.raw`\\text{Actual distance} = \\text{map distance} \\times \\text{scale factor}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Move between plan distance and actual distance',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Some questions ask you to convert a measured map distance to a real distance, while others ask for the size on a plan from a real measurement. Decide which value must be multiplied and which must be divided.</p>
        <Formula block>{String.raw`\\text{Plan distance} = \\frac{\\text{actual distance}{\\text{scale factor}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Read routes and layouts carefully',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Maps and floor plans often include direction, legends, room labels and route information. Learners should not focus only on scale; they must also interpret the symbols and the path shown.</p>
        <Formula block>{String.raw`t = \\frac{d}{v}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">After finding an actual distance, you can often connect it to travel time by using distance, speed and time together.</p>
      </div>
    ),
  },
  {
    title: 'Choose the most suitable representation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A street map, topographic map and floor plan serve different purposes. The best representation depends on whether you need building layout, route planning or broad geographic information.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Use a floor plan for room sizes and layouts.</li>
          <li>Use a map for routes, direction and distance.</li>
          <li>Use the given scale every time before drawing a conclusion.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "maps-plans-scale-1",
    "question": "On a map with scale 1:50 000, two towns are 3 cm apart. What is the actual distance?",
    "options": [
      "150 m",
      "1.5 km",
      "15 km",
      "150 km"
    ],
    "answer": 1,
    "explanation": "3 cm × 50 000 = 150 000 cm = 1.5 km."
  },
  {
    "id": "maps-plans-scale-2",
    "question": "A room measures 4 cm on a plan with scale 1:100. What is the actual length?",
    "options": [
      "0.4 m",
      "4 m",
      "40 m",
      "400 m"
    ],
    "answer": 1,
    "explanation": "4 cm × 100 = 400 cm = 4 m."
  },
  {
    "id": "maps-plans-scale-3",
    "question": "A wall is 12 m long in reality. How long should it be on a plan with scale 1:200?",
    "options": [
      "3 cm",
      "6 cm",
      "12 cm",
      "24 cm"
    ],
    "answer": 1,
    "explanation": "12 m = 1 200 cm, then 1 200 ÷ 200 = 6 cm."
  },
  {
    "id": "maps-plans-scale-4",
    "question": "Which scale will show the greatest detail?",
    "options": [
      "1:5 000",
      "1:50 000",
      "1:500 000",
      "1:5 000 000"
    ],
    "answer": 0,
    "explanation": "The smaller the second number, the larger the scale and the more detail shown."
  },
  {
    "id": "maps-plans-scale-5",
    "question": "A route is 18 km long and the average speed is 60 km/h. About how long will the trip take?",
    "options": [
      "12 min",
      "18 min",
      "30 min",
      "60 min"
    ],
    "answer": 1,
    "explanation": "Time = distance ÷ speed = 18 ÷ 60 h = 0.3 h = 18 minutes."
  },
  {
    "id": "maps-plans-scale-6",
    "question": "If the north arrow points upward on a map, which direction is to the right?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 2,
    "explanation": "With north at the top, east is to the right."
  },
  {
    "id": "maps-plans-scale-7",
    "question": "A line scale shows that 2 cm represents 500 m. What actual distance does 7 cm represent?",
    "options": [
      "1.25 km",
      "1.75 km",
      "2.5 km",
      "3.5 km"
    ],
    "answer": 1,
    "explanation": "7 cm is 3.5 times 2 cm, so the real distance is 3.5 × 500 m = 1 750 m = 1.75 km."
  },
  {
    "id": "maps-plans-scale-8",
    "question": "Which source would be most useful for finding the location of shops inside a mall?",
    "options": [
      "A world map",
      "A topographic map",
      "A floor plan",
      "A pie chart"
    ],
    "answer": 2,
    "explanation": "A floor plan shows the layout of spaces inside the building."
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

const MapsPlansScale = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Scale"
    subtitle="Scale, actual distance and plan interpretation"
    learnSteps={topicLearnSteps}
    task="gr12-maps-plans-scale-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default MapsPlansScale;
