import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ml/term2/maps-plans-scale/diagram.webp", alt: "Maps, Plans and Scale" }, title: 'Understanding map scale', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>scale</strong> shows the relationship between a distance on a map and the corresponding actual distance on the ground.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-indigo-800">Scale formats:</p><p className="text-slate-700">• <strong>Ratio scale:</strong> 1:50 000 means 1 cm on the map = 50 000 cm (500 m) in reality.</p><p className="text-slate-700">• <strong>Bar scale:</strong> A drawn line on the map showing a set real distance.</p><Formula block>{String.raw`\text{scale} = \frac{\text{map distance}}{\text{real distance}}`}</Formula><Formula block>{String.raw`\text{Actual distance} = \text{map distance} \times \text{scale denominator}`}</Formula><Formula block>{String.raw`4 \times 50\,000 = 200\,000\text{ cm} = 2\text{ km}`}</Formula></div></div>) },
  { title: 'Measuring distances on a map', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Use a ruler to measure the straight-line or route distance on the map, then apply the scale.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Straight-line distance</strong><p className="text-slate-600 text-sm">Measure directly between two points with a ruler. Multiply by the scale.</p></div><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Route distance</strong><p className="text-slate-600 text-sm">Use string along the route, then measure the string length. Multiply by the scale.</p></div></div><div className="bg-slate-50 p-4 rounded-xl text-left"><Formula block>{String.raw`\text{Map distance} = \frac{\text{Actual distance}}{\text{scale denominator}}`}</Formula></div><p className="text-sm text-slate-500">Remember to convert the final answer to a sensible unit (cm → m → km).</p></div>) },
  { title: 'Comparing routes and making decisions', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">When choosing between routes, consider <strong>distance</strong>, <strong>travel time</strong> and any other relevant factors.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-yellow-800">Route comparison example:</p><Formula block>{String.raw`3.5\text{ cm} \times 200\,000 = 7\text{ km}`}</Formula><Formula block>{String.raw`4.2\text{ cm} \times 200\,000 = 8.4\text{ km}`}</Formula><Formula block>{String.raw`\text{time} = \frac{\text{distance}}{\text{speed}}`}</Formula><p className="text-slate-700 text-sm">Route A is shorter by 1,4 km. At 60 km/h, Route A saves about 1,4 minutes.</p><p className="text-slate-700 text-sm">However, if Route B is a highway and Route A is a dirt road, Route B may still be faster.</p></div></div>) },
  { title: 'Reading floor plans', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>floor plan</strong> is a top-view (bird's eye) drawing of a building, showing rooms, doors, windows and dimensions.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Reading a floor plan</strong><p className="text-slate-600 text-sm">Identify scale, read room dimensions, calculate actual sizes.</p></div><div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Plan view</strong><p className="text-slate-600 text-sm">Shows the layout as seen from directly above — walls appear as thick lines, openings as gaps.</p></div></div><div className="bg-slate-50 p-4 rounded-xl text-left"><Formula block>{String.raw`\text{Actual room size} = \text{plan size} \times \text{scale denominator}`}</Formula></div><p className="text-sm text-slate-500">Use the floor plan scale to convert plan dimensions to actual room sizes.</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A map has a scale of 1:25 000. Two towns are 6 cm apart on the map. What is the actual distance?',
    options: ['1,5 km', '150 km', '15 km', '1,5 m'],
    answer: '1,5 km',
    explanation: 'Actual = 6 × 25 000 = 150 000 cm = 1 500 m = 1,5 km.',
  },
  {
    prompt: 'On a 1:50 000 map, two places are 150 000 cm apart in reality. How far apart are they on the map?',
    options: ['3 cm', '30 cm', '0,3 cm', '300 cm'],
    answer: '3 cm',
    explanation: 'Map distance = actual distance ÷ scale = 150 000 ÷ 50 000 = 3 cm.',
  },
  {
    prompt: 'A floor plan shows a bedroom as 4 cm × 3 cm. The scale is 1:100. What are the actual room dimensions?',
    options: ['400 m × 300 m', '4 m × 3 m', '40 m × 30 m', '0,4 m × 0,3 m'],
    answer: '4 m × 3 m',
    explanation: 'Actual = 4 cm × 100 = 400 cm = 4 m; 3 cm × 100 = 300 cm = 3 m.',
  },
  {
    prompt: 'Which scale represents the LARGEST scale (most detail)?',
    options: ['1:250 000', '1:50 000', '1:1 000', '1:100 000'],
    answer: '1:1 000',
    explanation: 'A smaller scale denominator means more detail — 1:1 000 shows more detail than 1:250 000.',
  },
  {
    prompt: 'A map scale reads: "1 cm = 500 m". Write this as a ratio scale.',
    options: ['1:500', '1:5 000', '1:50 000', '1:500 000'],
    answer: '1:50 000',
    explanation: '500 m = 50 000 cm. So the ratio scale is 1:50 000.',
  },
  {
    prompt: 'Two routes between cities are measured on a 1:200 000 map. Route A = 4,5 cm, Route B = 3,8 cm. Which is shorter and by how much?',
    options: ['Route A is shorter by 1,4 km', 'Route B is shorter by 1,4 km', 'Route B is shorter by 14 km', 'Route A is shorter by 14 km'],
    answer: 'Route B is shorter by 1,4 km',
    explanation: 'Route A = 4,5 × 200 000 = 900 000 cm = 9 km. Route B = 3,8 × 200 000 = 760 000 cm = 7,6 km. Difference = 9 − 7,6 = 1,4 km.',
  },
  {
    prompt: 'A floor plan uses a scale of 1:50. A wall shown as 8 cm on the plan has an actual length of:',
    options: ['4 m', '400 m', '0,4 m', '40 m'],
    answer: '4 m',
    explanation: '8 cm × 50 = 400 cm = 4 m.',
  },
  {
    prompt: 'What does a floor plan show?',
    options: ['The side view of a whole building', 'A top view of room layout and sizes', 'The front elevation of a house', 'A 3D model of the building'],
    answer: 'A top view of room layout and sizes',
    explanation: 'A floor plan is a top-down (plan) view showing rooms, doors, windows and dimensions.',
  },
  {
    prompt: 'A map distance of 7,5 cm on a 1:40 000 map represents an actual distance of:',
    options: ['30 km', '3 km', '300 km', '0,3 km'],
    answer: '3 km',
    explanation: '7,5 × 40 000 = 300 000 cm = 3 000 m = 3 km.',
  },
];

const MapsPlansScale = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Scale"
    subtitle="Interpreting scales, calculating real distances and reading floor plans"
    learnSteps={learnSteps}
    task="gr11-ml-maps-plans-t2"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default MapsPlansScale;
