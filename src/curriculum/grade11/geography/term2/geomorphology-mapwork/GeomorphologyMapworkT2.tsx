import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term2/geomorphology-mapwork/diagram.webp", alt: "Geomorphology and Topographic Mapwork" },
    title: 'Reading topographic maps for geomorphology',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South African 1:50 000 topographic maps are essential for identifying landforms and geological structures.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Scale meaning</strong>
            <p className="text-slate-600 text-sm">1:50 000 means 1 cm on the map = 50 000 cm (500 m) in reality. Used for detailed local studies.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Contour interval</strong>
            <p className="text-slate-600 text-sm">Usually 20 m on South African 1:50 000 maps. Every fifth contour (100 m interval) is darker (index contour).</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Key colours</strong>
            <p className="text-slate-600 text-sm">Blue = water; black = buildings and roads; brown = contours; green = vegetation; red = main roads and boundaries.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Identifying landforms</strong>
            <p className="text-slate-600 text-sm">V-shapes = valleys; closed circles = hills or hollows; parallel lines = ridges; concentric ovals = isolated hills (koppies).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Slope types from contour patterns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The spacing of contour lines reveals the gradient and shape of a slope.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Uniform slope</strong>
            <p className="text-slate-600 text-sm">Equally spaced contours — constant gradient. Relatively straight hillside.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Concave slope</strong>
            <p className="text-slate-600 text-sm">Contours become more widely spaced toward the base — gradient decreases downslope. Typical pediment.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Convex slope</strong>
            <p className="text-slate-600 text-sm">Contours become more widely spaced toward the top — gradient decreases near the crest. Typical hill summit.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Closely spaced contours = steep; widely spaced contours = gentle.</p>
      </div>
    ),
  },
  {
    title: 'Drawing a topographic cross-section',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A cross-section shows the vertical profile of the land between two points on a map.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Step 1:</strong> Draw a straight line (A–B) between the two points on the map.</p>
          <p><strong>Step 2:</strong> Mark where each contour crosses the line A–B.</p>
          <p><strong>Step 3:</strong> Set up a vertical scale on graph paper (vertical exaggeration should be stated).</p>
          <p><strong>Step 4:</strong> Plot each contour height at its horizontal position; join the points with a smooth curve.</p>
          <p><strong>Step 5:</strong> Label all features (hills, valleys, rivers) and state the vertical exaggeration.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Geomorphological features on maps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Different geomorphological processes leave characteristic patterns on topographic maps that can be identified with practice.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">River erosion</strong>
            <p className="text-slate-600 text-sm">V-shaped valleys; contours forming Vs pointing upstream; gorges shown as very closely spaced contours.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Escarpment</strong>
            <p className="text-slate-600 text-sm">Closely spaced contours over a short horizontal distance showing a sudden steep drop in elevation.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Karoo koppie</strong>
            <p className="text-slate-600 text-sm">Small, isolated, concentric closed contours on a flat plain — typically a dolerite-capped hill.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Cuesta</strong>
            <p className="text-slate-600 text-sm">Ridge with closely spaced contours on one side (scarp) and widely spaced on the other (dip slope).</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'On a South African 1:50 000 topographic map, what does 1 cm on the map represent in reality?',
    options: ['100 m', '500 m', '1 km', '5 km'],
    answer: '500 m',
    explanation: 'At 1:50 000, 1 cm on the map equals 50 000 cm (500 m) on the ground.',
  },
  {
    prompt: 'What does the contour interval on a topographic map represent?',
    options: [
      'The horizontal distance between two contour lines',
      'The vertical difference in elevation between adjacent contour lines',
      'The scale of the map',
      'The distance between spot heights',
    ],
    answer: 'The vertical difference in elevation between adjacent contour lines',
    explanation: 'The contour interval is the consistent vertical distance between consecutive contour lines; on most SA 1:50 000 maps this is 20 m.',
  },
  {
    prompt: 'Closely spaced contours on a topographic map indicate:',
    options: ['A gentle, flat slope', 'A steep slope', 'A river floodplain', 'A plateau'],
    answer: 'A steep slope',
    explanation: 'When contours are close together, a small horizontal distance spans a large vertical change — indicating a steep slope.',
  },
  {
    prompt: 'Contour lines that form a V-shape pointing upstream indicate:',
    options: ['A mountain peak', 'A ridge line', 'A river valley', 'A cliff face'],
    answer: 'A river valley',
    explanation: 'Contours bend into V-shapes that point upstream (uphill) where rivers cut valleys into the landscape.',
  },
  {
    prompt: 'A concave slope is identified on a topographic map because:',
    options: [
      'Contours are equally spaced',
      'Contours become more widely spaced toward the base of the slope',
      'Contours become more closely spaced toward the base',
      'There are no contours in a concave area',
    ],
    answer: 'Contours become more widely spaced toward the base of the slope',
    explanation: 'A concave slope decreases in gradient toward the base, so contours spread apart downslope.',
  },
  {
    prompt: 'What colour are contour lines on a South African topographic map?',
    options: ['Blue', 'Black', 'Brown', 'Green'],
    answer: 'Brown',
    explanation: 'Contour lines are printed in brown on South African topographic maps. Index contours (every 5th line) are darker brown.',
  },
  {
    prompt: 'When drawing a topographic cross-section, what determines the shape of the profile?',
    options: [
      'The colour of the map',
      'The horizontal positions and elevations of contour lines crossed by the section line',
      'The scale of the graph paper',
      'The direction the section line faces',
    ],
    answer: 'The horizontal positions and elevations of contour lines crossed by the section line',
    explanation: 'Each contour crossing provides a data point (horizontal distance, elevation) that is plotted to build the profile.',
  },
  {
    prompt: 'Isolated, small circular contours on a flat plain most likely represent:',
    options: ['A depression in the ground', 'An isolated hill such as a koppie', 'A river meander', 'A man-made reservoir'],
    answer: 'An isolated hill such as a koppie',
    explanation: 'Small concentric closed contours rising above flat plains are characteristic of isolated hills like dolerite koppies in the Karoo.',
  },
  {
    prompt: 'On a topographic map, blue lines represent:',
    options: ['Main tar roads', 'Rivers and water bodies', 'Provincial boundaries', 'Forest areas'],
    answer: 'Rivers and water bodies',
    explanation: 'Blue is conventionally used for all water features — rivers, streams, dams, and lakes — on South African topographic maps.',
  },
  {
    prompt: 'Vertical exaggeration on a cross-section means:',
    options: [
      'The horizontal scale is made larger than in reality',
      'The vertical scale is exaggerated relative to the horizontal scale to make relief features visible',
      'The map is drawn larger than reality',
      'The section covers a greater area than shown',
    ],
    answer: 'The vertical scale is exaggerated relative to the horizontal scale to make relief features visible',
    explanation: 'Without vertical exaggeration, subtle height differences would be invisible. Stating the VE (e.g., ×5) is required when drawing cross-sections.',
  },
];

const GeomorphologyMapworkT2 = () => (
  <CapsSubjectTopic
    title="Geomorphology and Topographic Mapwork"
    subtitle="Reading 1:50 000 maps, slope types, cross-sections and landform identification"
    learnSteps={learnSteps}
    task="gr11-geomorphology-mapwork-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default GeomorphologyMapworkT2;
