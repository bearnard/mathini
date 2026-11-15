import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Scale Models',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Scale models are three-dimensional representations of real objects. In South Africa, these are used in architecture, engineering, urban planning, and even museum displays.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Uses of Scale Models</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Architecture:</strong> Building models for clients and planning approvals</li>
            <li><strong>Urban Planning:</strong> City development layouts</li>
            <li><strong>Engineering:</strong> Bridge and infrastructure designs</li>
            <li><strong>Education:</strong> Teaching aids (e.g., solar system models)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A model of Cape Town Stadium has scale 1:200. If the model is 45 cm tall, how tall is the real stadium?</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Real height} = 45 \text{ cm} \times 200 = 9000 \text{ cm} = 90 \text{ m}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Working with Floor Plans',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Floor plans are 2D representations showing the layout of buildings from above. Essential when buying property, renovating, or planning furniture placement in South African homes.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Reading Floor Plans</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Walls:</strong> Shown as thick black lines</li>
            <li><strong>Doors:</strong> Curved lines showing swing direction</li>
            <li><strong>Windows:</strong> Gaps in walls with thin lines</li>
            <li><strong>Dimensions:</strong> Usually in millimeters or meters</li>
            <li><strong>Compass:</strong> Shows north direction for orientation</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A bedroom on a 1:50 plan measures 9 cm × 7 cm. Calculate actual room area.</p>
          <div className="space-y-1 text-sm">
            <Formula block>{String.raw`\text{Length: } 9 \times 50 = 450 \text{ cm} = 4{,}5 \text{ m}`}</Formula>
            <Formula block>{String.raw`\text{Width: } 7 \times 50 = 350 \text{ cm} = 3{,}5 \text{ m}`}</Formula>
            <Formula block>{String.raw`\text{Area: } 4{,}5 \times 3{,}5 = 15{,}75 \text{ m}^2`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '3D Visualization from 2D Plans',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Being able to visualize 3D structures from 2D plans is a valuable skill. This helps you understand how buildings, roads, and structures will look in reality.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Types of Architectural Views</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Floor Plan:</strong> View from above (bird's eye)</li>
            <li><strong>Elevation:</strong> Side view of building (front, back, or sides)</li>
            <li><strong>Section:</strong> "Slice" through building showing interior heights</li>
            <li><strong>3D Perspective:</strong> Realistic angled view</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Practical Tip:</p>
          <p className="text-sm">When reading plans, always check:</p>
          <ul className="text-sm ml-4 space-y-1">
            <li>• The scale being used</li>
            <li>• Units of measurement (mm, cm, or m)</li>
            <li>• The north direction</li>
            <li>• Room labels and dimensions</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing Model Dimensions',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Models reduce very large objects to manageable sizes. Graphs help you compare scaled lengths once every measurement has been converted into the same unit.
        </p>
        <DataChart
          data={[
            { structure: 'Door height', value: 2.1 },
            { structure: 'Window width', value: 1.2 },
            { structure: 'Roof span', value: 6.4 },
            { structure: 'Wall length', value: 8.0 },
          ]}
          series={[{ key: 'value', label: 'Actual length (m)', color: '#0ea5e9' }]}
          xKey="structure"
          type="bar"
        />
        <p className="text-sm text-slate-600">
          A chart can quickly show whether the dimensions on a model remain proportional to the real object after scaling.
        </p>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'If a scale model has a scale of 1:100, and the model is 15 cm tall, how tall is the real object?',
    options: ['150 m', '15 m', '1,5 m', '150 cm'],
    answer: '15 m',
    explanation: '15 cm × 100 = 1500 cm = 15 m',
  },
  {
    prompt: 'Looking at a building plan, a corridor is 8 cm long. If the scale is 1:50, what is the actual length?',
    options: ['4 m', '40 m', '400 m', '0,4 m'],
    answer: '4 m',
    explanation: '8 cm × 50 = 400 cm = 4 m',
  },
  {
    prompt: 'A model car has scale 1:24. If the model is 18 cm long, what is the real car length?',
    options: ['4,8 m', '43,2 cm', '432 cm', '75 cm'],
    answer: '432 cm',
    explanation: '18 cm × 24 = 432 cm.',
  },
  {
    prompt: 'On a floor plan (scale 1:100), a kitchen measures 5 cm × 4 cm. What is the actual kitchen area?',
    options: ['20 m²', '2000 m²', '20 cm²', '200 m²'],
    answer: '20 m²',
    explanation: 'Length: 5 × 100 = 500 cm = 5 m. Width: 4 × 100 = 400 cm = 4 m. Area = 5 × 4 = 20 m²',
  },
];

const MapsPlansModels = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Models"
    subtitle="Spatial visualization and representation"
    learnSteps={learnSteps}
    task="gr10-maps-plans-models-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default MapsPlansModels;
