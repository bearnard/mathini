import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ml/term2/maps-plans-scale/diagram.webp", alt: "Maps, Plans and Scale" },
    title: 'Understanding Map Scales',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Maps use scales to represent large distances on a small sheet. In South Africa, you'll use maps for road trips (N1 from Cape Town to Johannesburg), hiking trails (Table Mountain), and urban navigation.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Scale Formats</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Ratio scale:</strong> 1:50 000 (1 cm on map = 50 000 cm in reality)</li>
            <li><strong>Statement scale:</strong> 1 cm = 5 km</li>
            <li><strong>Bar scale:</strong> Visual ruler showing distances</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A road map has scale 1:250 000. Two towns are 8 cm apart on the map. What is the actual distance?</p>
          <div className="space-y-1 text-sm">
            <Formula>{String.raw`\text{Actual distance} = 8 \text{ cm} \times 250\,000 = 2\,000\,000 \text{ cm}`}</Formula>
            <Formula>{String.raw`= 20\,000 \text{ m} = 20 \text{ km}`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Scale Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Scale calculations are essential when planning trips, reading municipal plans, or interpreting property surveys.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Scale Calculation Formula</h4>
          <Formula>{String.raw`\text{Scale} = \frac{\text{Map distance}}{\text{Actual distance}}`}</Formula>
          <div className="mt-3 space-y-2 text-sm">
            <p><strong>To find actual distance:</strong></p>
            <Formula>{String.raw`\text{Actual} = \text{Map distance} \times \text{Scale factor}`}</Formula>
            <p><strong>To find map distance:</strong></p>
            <Formula>{String.raw`\text{Map} = \frac{\text{Actual distance}}{\text{Scale factor}}`}</Formula>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A soccer field is 100 m long. On a plan with scale 1:500, how long is it on paper?</p>
          <Formula>{String.raw`\text{Map length} = \frac{100 \text{ m}}{500} = \frac{10\,000 \text{ cm}}{500} = 20 \text{ cm}`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading Architectural Plans',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Architectural plans (floor plans, blueprints) are essential when building, renovating, or buying property in South Africa. They use standardized symbols and scales.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Common Plan Elements</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Walls:</strong> Thick solid lines</li>
            <li><strong>Doors:</strong> Arc showing swing direction</li>
            <li><strong>Windows:</strong> Thin lines in walls</li>
            <li><strong>Dimensions:</strong> Measurements in meters or millimeters</li>
            <li><strong>Scale:</strong> Usually 1:50 or 1:100 for house plans</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example: A house plan shows a bedroom as 8 cm × 6 cm. If the scale is 1:50, what are the actual dimensions?</p>
          <div className="space-y-1 text-sm">
            <Formula>{String.raw`\text{Length: } 8 \text{ cm} \times 50 = 400 \text{ cm} = 4 \text{ m}`}</Formula>
            <Formula>{String.raw`\text{Width: } 6 \text{ cm} \times 50 = 300 \text{ cm} = 3 \text{ m}`}</Formula>
            <p className="mt-2">Bedroom is 4 m × 3 m in real life.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing Distances on a Route',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Charts can compare actual journey distances between towns or landmarks after you have converted the scale measurement into real kilometres.
        </p>
        <DataChart
          data={[
            { route: 'School to clinic', value: 1.2 },
            { route: 'Clinic to library', value: 0.8 },
            { route: 'Library to taxi rank', value: 1.5 },
            { route: 'Taxi rank to home', value: 2.1 },
          ]}
          series={[{ key: 'value', label: 'Distance (km)', color: '#3b82f6' }]}
          xKey="route"
          type="bar"
        />
        <p className="text-sm text-slate-600">
          In map questions, always convert every segment to the same unit before you compare or add the distances shown on a graph.
        </p>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'A map has a scale of 1:50000. If the distance on the map is 4 cm, what is the actual distance?',
    options: ['200 m', '2 km', '20 km', '200 km'],
    answer: '2 km',
    explanation: '1 cm on map = 50000 cm actual. 4 cm = 4 × 50000 = 200000 cm = 2 km',
  },
  {
    prompt: 'If a room is 6 m × 4 m and a scale plan shows it as 12 cm × 8 cm, what is the scale?',
    options: ['1:5', '1:50', '1:500', '1:100'],
    answer: '1:50',
    explanation: '6 m = 600 cm. 600 ÷ 12 = 50, so scale is 1:50',
  },
  {
    prompt: 'On a plan with scale 1:100, a wall measures 15 cm. What is the actual wall length?',
    options: ['1.5 m', '15 m', '150 m', '1500 m'],
    answer: '15 m',
    explanation: '15 cm × 100 = 1500 cm = 15 m',
  },
  {
    prompt: 'A hiking trail is 12 km long. On a map with scale 1:200 000, how long will it appear?',
    options: ['6 cm', '60 cm', '0.6 cm', '600 cm'],
    answer: '6 cm',
    explanation: '12 km = 1 200 000 cm. Map distance = 1 200 000 ÷ 200 000 = 6 cm',
  },
];

const MapsPlansScale = () => (
  <CapsSubjectTopic
    title="Maps, Plans and Scale"
    subtitle="Spatial representation and scaling"
    learnSteps={learnSteps}
    task="gr10-maps-plans-scale-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default MapsPlansScale;
