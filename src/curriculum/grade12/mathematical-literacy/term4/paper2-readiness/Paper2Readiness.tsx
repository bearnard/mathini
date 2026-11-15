import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Expect multi-step spatial and measurement tasks',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Paper 2 often requires learners to move through several steps, such as reading a plan, converting scale and then making a decision. The key is to slow down and keep each stage clearly organised.</p>
        <Formula block>{String.raw`\text{Actual distance} = \text{plan distance} \times \text{scale factor}`}</Formula>
        <Formula block>{String.raw`A = l \times w`}</Formula>
        <Formula block>{String.raw`V = l \times w \times h`}</Formula>
      </div>
    ),
  },
  {
    title: 'Use diagrams and plans actively',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">In extended questions, the source is part of the mathematics. Learners should read legends, scales, symbols, dimensions and labels directly from the diagram instead of relying on memory.</p>
        <Formula block>{String.raw`\text{Plan distance} = \frac{\text{actual distance}}{\text{scale factor}}`}</Formula>
        <Formula block>{String.raw`t = \frac{d}{v}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Combine probability, data and measurement',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Paper 2 is often integrated, which means a case study may ask for measurements, percentages and probability in the same setting. The best approach is to identify which formula belongs to each part before calculating.</p>
        <Formula block>{String.raw`P(A) = \frac{n(A)}{n(S)}`}</Formula>
        <Formula block>{String.raw`\text{Percentage change} = \frac{\text{new} - \text{old}}{\text{old}} \times 100`}</Formula>
      </div>
    ),
  },
  {
    title: 'Protect marks with units and final statements',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Extended questions reward clear communication. Write the unit with every answer, state conclusions in words when needed and check that the final answer responds to the decision or interpretation required.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Label each working step clearly.</li>
          <li>Round only at the end when the mark allocation allows it.</li>
          <li>Finish with a sentence that answers the question in context.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "paper2-readiness-1",
    "question": "On a plan with scale 1:100, a passage measures 2,8 cm. What is the actual length?",
    "options": [
      "0,28 m",
      "2,8 m",
      "28 m",
      "280 m"
    ],
    "answer": 1,
    "explanation": "2,8 cm × 100 = 280 cm = 2,8 m."
  },
  {
    "id": "paper2-readiness-2",
    "question": "What is the area of a rectangular patio that measures 6 m by 3,5 m?",
    "options": [
      "9,5 m²",
      "18 m²",
      "21 m²",
      "42 m²"
    ],
    "answer": 2,
    "explanation": "Area = 6 × 3,5 = 21 m²."
  },
  {
    "id": "paper2-readiness-3",
    "question": "A spinner has 4 equal sections numbered 1 to 4. What is the probability of landing on an even number?",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "answer": 1,
    "explanation": "Even numbers are 2 and 4, so 2 out of 4 outcomes are favourable."
  },
  {
    "id": "paper2-readiness-4",
    "question": "An event starts at 09:25 and ends at 12:10. How long does it last?",
    "options": [
      "2 h 35 min",
      "2 h 45 min",
      "3 h 10 min",
      "3 h 25 min"
    ],
    "answer": 1,
    "explanation": "From 09:25 to 11:25 is 2 hours, then 45 minutes to 12:10."
  },
  {
    "id": "paper2-readiness-5",
    "question": "A water tank is 1,2 m long, 1 m wide and 0,8 m high. What is its volume?",
    "options": [
      "0,96 m³",
      "1,20 m³",
      "2,00 m³",
      "3,00 m³"
    ],
    "answer": 0,
    "explanation": "Volume = 1,2 × 1 × 0,8 = 0,96 m³."
  },
  {
    "id": "paper2-readiness-6",
    "question": "A scale model uses 1 cm to represent 5 m. A road on the model is 7 cm long. What is the actual length?",
    "options": [
      "12 m",
      "25 m",
      "35 m",
      "350 m"
    ],
    "answer": 2,
    "explanation": "7 cm × 5 m per cm = 35 m."
  },
  {
    "id": "paper2-readiness-7",
    "question": "Which unit is most appropriate for the capacity of a municipal water tanker?",
    "options": [
      "mm",
      "m²",
      "L",
      "°C"
    ],
    "answer": 2,
    "explanation": "Capacity of liquid is measured in litres."
  },
  {
    "id": "paper2-readiness-8",
    "question": "Which habit best helps to avoid losing marks in a long Paper 2 application question?",
    "options": [
      "Skipping units to save time",
      "Writing one final number only",
      "Showing steps and labelling units clearly",
      "Guessing if the source looks complicated"
    ],
    "answer": 2,
    "explanation": "Clear steps and units help you track the method and secure method marks."
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

const Paper2Readiness = () => (
  <CapsSubjectTopic
    title="Paper 2 Readiness"
    subtitle="Paper 2 maps, measurement and extended application skills"
    learnSteps={topicLearnSteps}
    task="gr12-paper2-readiness-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default Paper2Readiness;
