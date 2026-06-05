import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding map scale',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Map scale</strong> shows the relationship between distances on a map and distances in the real world.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Large-scale maps</strong>
            <p className="text-slate-600">Show small areas in detail (e.g. 1:10,000 — 1 cm = 100 m).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Small-scale maps</strong>
            <p className="text-slate-600">Show large areas with less detail (e.g. 1:1,000,000 — 1 cm = 10 km).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of map scale',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Map scales can be expressed in three ways:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Representative fraction</strong>
            <p className="text-slate-600">1:50,000 means 1 unit on map = 50,000 units in reality.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Linear/bar scale</strong>
            <p className="text-slate-600">A line marked with distances (0—1—2 km).</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Verbal scale</strong>
            <p className="text-slate-600">"1 cm represents 1 km" or similar description.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Calculating distances using map scale',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          You can measure real-world distances by measuring the map and using the scale.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Steps:</p>
          <p className="text-slate-600">1. Measure the distance on the map (e.g. 4 cm)</p>
          <p className="text-slate-600">2. Check the scale (e.g. 1 cm = 5 km)</p>
          <p className="text-slate-600">3. Calculate: 4 cm × 5 km = 20 km</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Map coordinates: Latitude and longitude',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Coordinates</strong> are used to pinpoint exact locations on a map using latitude and longitude lines.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Latitude lines (horizontal)</strong>
            <p className="text-slate-600">Run east-west; measured from 0° at the Equator to 90° at the poles.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Longitude lines (vertical)</strong>
            <p className="text-slate-600">Run north-south; measured from 0° at the Prime Meridian to 180° east/west.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Using grid references and coordinates',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many topographic maps use <strong>grid references</strong> for locating features precisely.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Grid reference example:</p>
          <p className="text-slate-600">A location at 25°30'S, 28°15'E identifies a place in South Africa.</p>
        </div>
        <p className="text-sm text-slate-600 mt-4">Grid references and coordinates are essential for navigation and locating specific places.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does map scale show?',
    options: ['The height of mountains', 'The relationship between distances on the map and real-world distances', 'The age of the map', 'The number of settlements'],
    answer: 'The relationship between distances on the map and real-world distances',
    explanation: 'Map scale converts map measurements into real-world distances.',
  },
  {
    prompt: 'What does 1:50,000 mean in map scale?',
    options: ['1 cm = 50 km', '1 mm = 50 m', '1 cm = 500 m', '50 km = 1 cm'],
    answer: '1 cm = 500 m',
    explanation: '1:50,000 means 1 unit on the map represents 50,000 units in reality. So 1 cm on the map = 500 m in the real world.',
  },
  {
    prompt: 'Which type of map is considered large-scale?',
    options: ['1:1,000,000', '1:100,000', '1:10,000', '1:50,000,000'],
    answer: '1:10,000',
    explanation: 'Large-scale maps show smaller areas in more detail. 1:10,000 is large-scale; 1:1,000,000 is small-scale.',
  },
  {
    prompt: 'What is a linear or bar scale?',
    options: ['A fraction like 1:50,000', 'A line marked with actual distances (e.g. 0—1—2 km)', 'A description in words', 'The compass rose on a map'],
    answer: 'A line marked with actual distances (e.g. 0—1—2 km)',
    explanation: 'A bar scale allows you to measure distances directly by comparing distances on the map to the marked scale.',
  },
  {
    prompt: 'How would you calculate the real-world distance if you measure 3 cm on a map with a scale of 1:100,000?',
    options: ['30 km', '3 km', '0.03 km', '300 km'],
    answer: '3 km',
    explanation: '1:100,000 means 1 cm = 1 km. So 3 cm = 3 km.',
  },
  {
    prompt: 'What are latitude lines?',
    options: ['Lines running north-south', 'Lines running east-west and measured from the Equator', 'Contour lines on a topographic map', 'Roads on a road map'],
    answer: 'Lines running east-west and measured from the Equator',
    explanation: 'Latitude lines are horizontal; the Equator is 0°, and lines extend to 90° north and south at the poles.',
  },
  {
    prompt: 'What are longitude lines?',
    options: ['Horizontal lines', 'Vertical lines running north-south, measured from the Prime Meridian', 'Contour lines', 'River systems'],
    answer: 'Vertical lines running north-south, measured from the Prime Meridian',
    explanation: 'Longitude lines run north-south; the Prime Meridian (0°) passes through Greenwich, UK.',
  },
  {
    prompt: 'What do grid references do on a topographic map?',
    options: ['Show elevation only', 'Provide a way to locate places precisely', 'Indicate water bodies', 'Display settlements only'],
    answer: 'Provide a way to locate places precisely',
    explanation: 'Grid references use the intersection of grid lines to pinpoint exact locations on maps.',
  },
  {
    prompt: 'In which direction do latitude lines run?',
    options: ['North-south', 'East-west', 'Diagonally', 'Vertically only'],
    answer: 'East-west',
    explanation: 'Latitude lines are horizontal and parallel to the Equator.',
  },
  {
    prompt: 'Which is an example of a coordinate for a location in South Africa?',
    options: ['35°N, 140°E', '25°S, 28°E', '10°N, 50°W', '60°S, 180°'],
    answer: '25°S, 28°E',
    explanation: 'South Africa is located south of the Equator (S latitude) and east of the Prime Meridian (E longitude).',
  },
];

const MapScaleCoordinatesT1 = () => (
  <CapsSubjectTopic
    title="Map Scale and Coordinates"
    subtitle="Measuring distances and locating places on maps"
    learnSteps={learnSteps}
    task="gr9-map-scale-coordinates-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default MapScaleCoordinatesT1;
