import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What are contour lines?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Contour lines</strong> are lines on a map that connect points at the same height (elevation) above sea level.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Closely spaced contour lines</strong>
            <p className="text-slate-600">Indicate a steep slope (hill or mountain).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Widely spaced contour lines</strong>
            <p className="text-slate-600">Indicate a gentle slope (flat land).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading contour intervals and elevation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Each contour line represents a specific elevation. The difference between consecutive contour lines is the <strong>contour interval</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Example:</p>
          <p className="text-slate-600">If the contour interval is 100 m, lines are at 0 m, 100 m, 200 m, 300 m, etc.</p>
        </div>
        <p className="text-sm text-slate-600 mt-4">Contour intervals help you calculate slopes and determine the height of landmarks.</p>
      </div>
    ),
  },
  {
    title: 'Interpreting slopes and landforms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Different contour patterns show different landforms:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">V-shaped valley</strong>
            <p className="text-slate-600">Lines form a V pointing uphill (river valley).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Ridge</strong>
            <p className="text-slate-600">Lines form a U shape with high elevation in the middle.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Depression</strong>
            <p className="text-slate-600">Lines form a U shape with low elevation in the middle.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Calculating slope angle and gradient',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Slope</strong> measures how steep an area is. You can calculate it using contour lines and horizontal distance.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Formula:</p>
          <p className="text-slate-600">Slope (%) = (Vertical height difference ÷ Horizontal distance) × 100</p>
        </div>
        <p className="text-sm text-slate-600 mt-4">Steep slopes are important for agriculture, settlement, and infrastructure planning.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What do contour lines on a topographic map represent?',
    options: ['Lines that mark the boundaries between provinces', 'Points that lie at the same height above sea level', 'Lines that trace the paths of rivers and streams', 'Lines that join the roads and settlements of an area'],
    answer: 'Points that lie at the same height above sea level',
    explanation: 'Contour lines connect locations at equal elevation, showing the terrain\'s shape and relief.',
  },
  {
    prompt: 'What do closely spaced contour lines indicate?',
    options: ['Flat and level land, such as a wide plain', 'A steep slope, such as a hill or mountain', 'A large water body, such as a lake or a dam', 'A dry desert region with little relief at all'],
    answer: 'A steep slope, such as a hill or mountain',
    explanation: 'Close contour lines mean elevation changes rapidly over a short distance, indicating steepness.',
  },
  {
    prompt: 'What do widely spaced contour lines indicate?',
    options: ['A high mountain with a sharp peak', 'Very steep terrain, such as a cliff face', 'A gentle slope or nearly flat land', 'A deep water body, such as a lake or the sea'],
    answer: 'A gentle slope or nearly flat land',
    explanation: 'Wide spacing means elevation changes slowly, indicating gentle or flat terrain.',
  },
  {
    prompt: 'What is a contour interval?',
    options: ['The distance on the ground between two map locations', 'The difference in height between neighbouring contour lines', 'The width of a river measured across its channel', 'The length of a road shown between two towns'],
    answer: 'The difference in height between neighbouring contour lines',
    explanation: 'The contour interval (e.g. 50 m or 100 m) helps you read elevations from the map.',
  },
  {
    prompt: 'What landform does a V-shaped pattern of contour lines represent?',
    options: ['A plateau', 'A river valley', 'A depression', 'A ridge'],
    answer: 'A river valley',
    explanation: 'V-shaped contours point uphill and indicate a river valley carved by water erosion.',
  },
  {
    prompt: 'What formula is used to calculate slope percentage?',
    options: ['Horizontal distance ÷ Vertical height', '(Vertical height ÷ Horizontal distance) × 100', 'Elevation ÷ Map scale', 'Contour interval × Distance'],
    answer: '(Vertical height ÷ Horizontal distance) × 100',
    explanation: 'Slope percentage shows how steep terrain is, used in agriculture and engineering.',
  },
  {
    prompt: 'How would you identify a ridge on a contour map?',
    options: ['V-shaped lines that point uphill, along a stream', 'Closed circles, with the highest point at the middle', 'U-shaped lines pointing downhill, with height rising inwards', 'Straight parallel lines spaced evenly down a slope'],
    answer: 'U-shaped lines pointing downhill, with height rising inwards',
    explanation: 'Ridges appear as U-shaped contours with the highest elevation in the centre.',
  },
  {
    prompt: 'What is a depression on a topographic map?',
    options: ['A high mountain peak with steep sides all round', 'An area of low ground that is surrounded by higher ground', 'A flat plateau region with a high, level top', 'A flat river delta that lies close to the sea'],
    answer: 'An area of low ground that is surrounded by higher ground',
    explanation: 'Depressions are basins or hollow areas shown by concentric contour lines with the lowest point in the centre.',
  },
  {
    prompt: 'Why is reading contour lines important for planning settlements?',
    options: ['To find the places with the best views of the area', 'To judge how steep the slope is for safe building and drainage', 'To find the water sources that can be used by a town', 'To find the places where gold may lie underground'],
    answer: 'To judge how steep the slope is for safe building and drainage',
    explanation: 'Steep slopes are unsuitable for building; gentle slopes allow better drainage and safer construction.',
  },
  {
    prompt: 'If a contour interval is 50 m and you count 8 lines between two points, what is the elevation difference?',
    options: ['50 m', '100 m', '250 m', '400 m'],
    answer: '400 m',
    explanation: '8 lines × 50 m per interval = 400 m elevation difference.',
  },
];

const ContourLinesSlopesT1 = () => (
  <CapsSubjectTopic
    title="Contour Lines and Slopes"
    subtitle="Reading topographic maps to understand terrain"
    learnSteps={learnSteps}
    task="gr9-contour-lines-slopes-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ContourLinesSlopesT1;
