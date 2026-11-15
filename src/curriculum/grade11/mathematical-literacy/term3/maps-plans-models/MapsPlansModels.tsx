import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import { ThreeViews } from '@/components/diagrams/mathlit/ThreeViews';

const learnSteps: LearnStep[] = [
  { title: 'Types of views: top, front and side', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A 3D object can be represented by different <strong>views</strong>. In ML you need to identify and interpret these views.</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Top view (plan view)</strong><p className="text-slate-600 text-sm">Looking directly down from above. Shows the layout — used for floor plans.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Front view (elevation)</strong><p className="text-slate-600 text-sm">Looking at the object from the front. Shows height and width.</p></div><div className="rounded-xl bg-yellow-50 p-4"><strong className="text-yellow-700">Side view</strong><p className="text-slate-600 text-sm">Looking from the left or right. Shows height and depth.</p></div></div><p className="text-sm text-slate-500">Floor plans are always top views. Front and side elevations show the appearance of a building from outside.</p><ThreeViews /></div>) },
  { title: 'Reading floor plans and annotations', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>floor plan</strong> uses symbols, annotations and a scale to describe the layout of a building or room.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2"><p className="font-bold text-indigo-800">Common floor plan features:</p><p className="text-slate-700">• Thick lines = walls; gaps in walls = doors or windows.</p><p className="text-slate-700">• Numbers written alongside walls = wall dimensions.</p><p className="text-slate-700">• Room labels (Bedroom 1, Kitchen, etc.) identify each space.</p><p className="text-slate-700">• A North arrow shows orientation.</p></div><p className="text-sm text-slate-500">Always check the scale before answering any dimension or area question.</p></div>) },
  { title: 'Scale models', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>scale model</strong> is a physical or drawn replica of a real object, proportionally reduced or enlarged.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-yellow-800">Using the scale:</p><Formula block>{String.raw`\text{Actual dimension} = \text{model dimension} \times \text{scale factor}`}</Formula><Formula block>{String.raw`\text{Model dimension} = \frac{\text{actual dimension}}{\text{scale factor}}`}</Formula><p className="text-slate-700 mt-2">Example: A model car is built at 1:24 scale. The model is 18 cm long.</p><Formula block>{String.raw`18 \times 24 = 432\text{ cm} = 4{,}32\text{ m}`}</Formula></div></div>) },
  { title: 'Applying spatial reasoning to plans', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">You must be able to move between a plan or model and the real object to answer questions about dimensions, areas and layout.</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-slate-800">Steps:</p><p className="text-slate-700">1. Read the scale and identify units (cm on plan, m in reality).</p><p className="text-slate-700">2. Measure or read the plan dimension.</p><p className="text-slate-700">3. Multiply by the scale factor to get the real dimension.</p><p className="text-slate-700">4. Calculate area or volume from the real dimensions.</p><Formula block>{String.raw`A = \ell \times w`}</Formula></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'Which view of a house shows the layout of rooms as if seen from directly above?',
    options: ['Front elevation', 'Side view', 'Top view (floor plan)', '3D perspective'],
    answer: 'Top view (floor plan)',
    explanation: 'A floor plan is a top view — it shows room layout from directly above.',
  },
  {
    prompt: 'A floor plan scale is 1:100. A bedroom is shown as 4,5 cm × 3 cm on the plan. What are the actual dimensions?',
    options: ['4,5 m × 3 m', '45 m × 30 m', '0,45 m × 0,3 m', '450 m × 300 m'],
    answer: '4,5 m × 3 m',
    explanation: '4,5 cm × 100 = 450 cm = 4,5 m; 3 cm × 100 = 300 cm = 3 m.',
  },
  {
    prompt: 'A scale model of a building is made at 1:50. The model is 35 cm tall. How tall is the real building?',
    options: ['17,5 m', '1 750 m', '175 m', '0,7 m'],
    answer: '17,5 m',
    explanation: 'Actual height = 35 cm × 50 = 1 750 cm = 17,5 m.',
  },
  {
    prompt: 'On a floor plan (scale 1:200), a wall appears 2,5 cm long. What is the actual wall length?',
    options: ['5 m', '50 m', '500 m', '0,5 m'],
    answer: '5 m',
    explanation: '2,5 cm × 200 = 500 cm = 5 m.',
  },
  {
    prompt: 'A living room on a floor plan measures 6 cm × 4 cm (scale 1:100). What is the actual floor area?',
    options: ['24 m²', '240 m²', '2,4 m²', '2 400 m²'],
    answer: '24 m²',
    explanation: 'Actual: 6 m × 4 m = 24 m².',
  },
  {
    prompt: 'Which view of a house would show the front door, windows and roof shape?',
    options: ['Top view', 'Front elevation', 'Floor plan', 'Side view only'],
    answer: 'Front elevation',
    explanation: 'A front elevation shows how the front of the building looks — including the door, windows and roof.',
  },
  {
    prompt: 'A model airplane is 1:72 scale. Its wingspan on the model is 25 cm. What is the actual wingspan?',
    options: ['18 m', '1,8 m', '3,6 m', '360 m'],
    answer: '18 m',
    explanation: '25 cm × 72 = 1 800 cm = 18 m.',
  },
  {
    prompt: 'On a floor plan, gaps in wall lines typically represent:',
    options: ['Structural pillars', 'Doors or windows', 'The garden', 'Pipes'],
    answer: 'Doors or windows',
    explanation: 'In standard floor plan notation, openings (gaps) in walls show where doors or windows are located.',
  },
  {
    prompt: 'A real room is 5 m × 3 m. On a scale drawing it measures 10 cm × 6 cm. What is the scale?',
    options: ['1:50', '1:100', '1:500', '1:5'],
    answer: '1:50',
    explanation: '5 m = 500 cm. 500 cm ÷ 10 cm = 50. Scale = 1:50.',
  },
];

const MapsPlansModels = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Models"
    subtitle="Interpreting views, floor plans, scale models and spatial reasoning"
    learnSteps={learnSteps}
    task="gr11-ml-maps-models-t3"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default MapsPlansModels;
