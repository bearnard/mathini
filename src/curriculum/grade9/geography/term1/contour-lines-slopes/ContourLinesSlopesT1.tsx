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
    options: ['Political boundaries', 'Points at the same elevation above sea level', 'Rivers and water bodies', 'Roads and settlements'],
    answer: 'Points at the same elevation above sea level',
    explanation: 'Contour lines connect locations at equal elevation, showing the terrain\'s shape and relief.',
  },
  {
    prompt: 'What do closely spaced contour lines indicate?',
    options: ['Flat, level land', 'A steep slope (hill or mountain)', 'Water bodies', 'Desert regions'],
    answer: 'A steep slope (hill or mountain)',
    explanation: 'Close contour lines mean elevation changes rapidly over a short distance, indicating steepness.',
  },
  {
    prompt: 'What do widely spaced contour lines indicate?',
    options: ['High mountains', 'Steep terrain', 'A gentle slope or nearly flat land', 'Water bodies'],
    answer: 'A gentle slope or nearly flat land',
    explanation: 'Wide spacing means elevation changes slowly, indicating gentle or flat terrain.',
  },
  {
    prompt: 'What is a contour interval?',
    options: ['The distance between map locations', 'The difference in elevation between consecutive contour lines', 'The width of a river', 'The length of a road'],
    answer: 'The difference in elevation between consecutive contour lines',
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
    options: ['V-shaped lines pointing uphill', 'Concentric circles', 'U-shaped lines with elevation rising toward the middle', 'Parallel lines'],
    answer: 'U-shaped lines with elevation rising toward the middle',
    explanation: 'Ridges appear as U-shaped contours with the highest elevation in the centre.',
  },
  {
    prompt: 'What is a depression on a topographic map?',
    options: ['A high mountain peak', 'An area of low elevation surrounded by higher ground', 'A plateau region', 'A flat river delta'],
    answer: 'An area of low elevation surrounded by higher ground',
    explanation: 'Depressions are basins or hollow areas shown by concentric contour lines with the lowest point in the centre.',
  },
  {
    prompt: 'Why is reading contour lines important for planning settlements?',
    options: ['To identify beautiful views', 'To determine slope steepness for building safety and drainage', 'To find water sources only', 'To locate gold deposits'],
    answer: 'To determine slope steepness for building safety and drainage',
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
