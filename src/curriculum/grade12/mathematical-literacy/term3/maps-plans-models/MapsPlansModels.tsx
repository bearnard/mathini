import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Connect plans and models to real dimensions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Plans and models are reduced versions of real objects. A scale such as 1:50 or 1:200 means every measurement on the drawing or model must be matched to the same unit in reality.</p>
        <Formula block>{String.raw`\text{Actual size} = \text{plan or model size} \times \text{scale factor}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Know what different views show',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A top view helps with layout, a front view shows height and width, and a side view gives another perspective on depth. In Mathematical Literacy, reading the correct view is as important as using the correct scale.</p>
        <p className="text-lg leading-8 text-slate-600">Always identify which measurement belongs to which face before calculating lengths, areas or comparisons.</p>
      </div>
    ),
  },
  {
    title: 'Extract measurements from plans accurately',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Floor plans include walls, doors, windows and room labels. Measure carefully, use the scale correctly and keep units consistent, because small errors on the plan can become large errors in reality.</p>
        <Formula block>{String.raw`\text{Plan size} = \frac{\text{actual size}}{\text{scale factor}}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Compare designs using the same scale',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Two plans or models can only be compared fairly if the scale is understood. A larger-looking picture is not necessarily a larger object in reality, so convert both designs to actual measurements first.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Check that both drawings use the same ratio.</li>
          <li>Convert measurements to actual size before comparing.</li>
          <li>Explain which design is better and why.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "maps-plans-models-1",
    "question": "A desk is 3 cm long on a plan drawn at scale 1:50. What is the actual length?",
    "options": [
      "0,6 m",
      "1,5 m",
      "15 m",
      "150 m"
    ],
    "answer": 1,
    "explanation": "3 cm × 50 = 150 cm = 1,5 m."
  },
  {
    "id": "maps-plans-models-2",
    "question": "A model car is 22 cm long at a scale of 1:20. What is the actual length of the car?",
    "options": [
      "1,1 m",
      "2,2 m",
      "4,4 m",
      "44 m"
    ],
    "answer": 2,
    "explanation": "22 cm × 20 = 440 cm = 4,4 m."
  },
  {
    "id": "maps-plans-models-3",
    "question": "Which view is usually most useful for showing the layout of furniture in a room?",
    "options": [
      "Top view",
      "Front view",
      "Side view",
      "Back view"
    ],
    "answer": 0,
    "explanation": "A top view shows where items are placed relative to each other on the floor."
  },
  {
    "id": "maps-plans-models-4",
    "question": "Which view best shows the height and width of a cupboard?",
    "options": [
      "Top view from above",
      "Front view",
      "Map key",
      "Pie chart"
    ],
    "answer": 1,
    "explanation": "The front view shows height and width directly."
  },
  {
    "id": "maps-plans-models-5",
    "question": "A model building is 15 cm high at a scale of 1:200. What is the actual height?",
    "options": [
      "3 m",
      "15 m",
      "30 m",
      "300 m"
    ],
    "answer": 2,
    "explanation": "15 cm × 200 = 3 000 cm = 30 m."
  },
  {
    "id": "maps-plans-models-6",
    "question": "A room is 6 m by 4 m. On a 1:100 model, what will its area be?",
    "options": [
      "10 cm²",
      "24 cm²",
      "60 cm²",
      "240 cm²"
    ],
    "answer": 1,
    "explanation": "The model dimensions are 6 cm by 4 cm, so model area = 24 cm²."
  },
  {
    "id": "maps-plans-models-7",
    "question": "To compare two apartment layouts fairly, you should first check that they are drawn:",
    "options": [
      "with the same colour",
      "with the same scale",
      "on the same paper size",
      "with the same furniture"
    ],
    "answer": 1,
    "explanation": "Comparisons are only meaningful if the scale is known and consistent."
  },
  {
    "id": "maps-plans-models-8",
    "question": "A wall thickness is 0,2 cm on a plan with scale 1:100. What is the actual wall thickness?",
    "options": [
      "2 cm",
      "20 cm",
      "2 m",
      "20 m"
    ],
    "answer": 1,
    "explanation": "0,2 cm × 100 = 20 cm."
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

const MapsPlansModels = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Models"
    subtitle="Scale drawings, plans, models and view interpretation"
    learnSteps={topicLearnSteps}
    task="gr12-maps-plans-models-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default MapsPlansModels;
