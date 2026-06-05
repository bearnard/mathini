import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is an orthophoto map?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>orthophoto map</strong> (or orthophotograph) is an aerial or satellite photograph that has been corrected to show the true position of features from directly above.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key difference:</p>
          <p className="text-slate-600">Unlike regular aerial photos, orthophotos are geometrically accurate and can be used for measuring distances.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading map symbols and the map legend',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every map has a <strong>legend</strong> (or key) that explains the symbols and colours used.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Common symbols:</strong>
            <p className="text-slate-600">Roads, railways, buildings, water, vegetation, contours.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Colour coding:</strong>
            <p className="text-slate-600">Different colours represent land-use types (e.g. brown for urban, green for vegetation).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Identifying features on maps and orthophotos',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On orthophotos, you can identify real-world features directly from their appearance.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Built-up areas</strong>
            <p className="text-slate-600">Buildings and roads appear as grey/black shapes.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Vegetation</strong>
            <p className="text-slate-600">Trees and fields appear green or dark.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Water bodies</strong>
            <p className="text-slate-600">Rivers and dams appear bright blue.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advantages of orthophotos and map symbols',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Orthophotos and symbol maps each have unique benefits for geographical study.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Orthophotos:</strong>
            <p className="text-slate-600">Show actual landscape appearance; easy to identify features; accurate for measurement.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Symbol maps:</strong>
            <p className="text-slate-600">Show specific information clearly; less crowded; easier to highlight particular data.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an orthophoto?',
    options: ['A hand-drawn map', 'An aerial photo corrected to show true positions from directly above', 'A satellite image without correction', 'A 3D model of terrain'],
    answer: 'An aerial photo corrected to show true positions from directly above',
    explanation: 'Orthophotos are geometrically accurate aerial/satellite photos used for precise mapping and measurement.',
  },
  {
    prompt: 'Why can orthophotos be used for measuring distances?',
    options: ['They use special colours', 'They are geometrically corrected to show true positions', 'They include a scale bar only', 'They are drawn by hand'],
    answer: 'They are geometrically corrected to show true positions',
    explanation: 'Unlike regular aerial photos that have distortion, orthophotos are corrected to maintain accurate distances and positions.',
  },
  {
    prompt: 'What is a map legend (key)?',
    options: ['The title of the map', 'A story about the map area', 'An explanation of symbols and colours used on the map', 'The compass rose'],
    answer: 'An explanation of symbols and colours used on the map',
    explanation: 'The legend allows you to interpret the symbols, colours, and lines shown on the map.',
  },
  {
    prompt: 'What colour typically represents vegetation on a map or orthophoto?',
    options: ['Blue', 'Red', 'Green or dark colours', 'Yellow'],
    answer: 'Green or dark colours',
    explanation: 'Vegetation appears green on maps and dark on orthophotos due to natural colour or satellite imaging.',
  },
  {
    prompt: 'What do grey or black shapes on an orthophoto usually represent?',
    options: ['Water bodies', 'Built-up areas with buildings and roads', 'Agricultural fields', 'Mountains'],
    answer: 'Built-up areas with buildings and roads',
    explanation: 'Urban areas appear grey or black on orthophotos due to concrete, asphalt, and building materials.',
  },
  {
    prompt: 'How do rivers typically appear on an orthophoto?',
    options: ['As green lines', 'As grey areas', 'As bright blue curved lines', 'As brown roads'],
    answer: 'As bright blue curved lines',
    explanation: 'Water bodies, including rivers, appear bright blue on orthophotos.',
  },
  {
    prompt: 'What is an advantage of using symbol maps instead of orthophotos?',
    options: ['They show actual landscape appearance', 'They highlight specific information clearly and are less cluttered', 'They are easier to take', 'They cover larger areas'],
    answer: 'They highlight specific information clearly and are less cluttered',
    explanation: 'Symbol maps emphasize specific data (roads, settlements, land use) without the visual complexity of orthophotos.',
  },
  {
    prompt: 'What advantage do orthophotos have for identifying landscape features?',
    options: ['They use many symbols', 'They show the actual appearance of the landscape directly', 'They have a legend only', 'They are always in black and white'],
    answer: 'They show the actual appearance of the landscape directly',
    explanation: 'You can recognize real features on orthophotos by their visual appearance without needing to decode symbols.',
  },
  {
    prompt: 'On a topographic map, what would a green shaded area typically represent?',
    options: ['Urban settlement', 'Vegetation or forest', 'Water body', 'Desert'],
    answer: 'Vegetation or forest',
    explanation: 'Green shading on topographic maps conventionally indicates vegetation coverage.',
  },
  {
    prompt: 'How would you find the meaning of an unfamiliar symbol on a map?',
    options: ['Ask someone', 'Consult the map legend or key', 'Guess based on appearance', 'Look at other maps'],
    answer: 'Consult the map legend or key',
    explanation: 'The legend provides a guide to all symbols and colours used on a specific map.',
  },
];

const OrthophotoMapsSymbolsT1 = () => (
  <CapsSubjectTopic
    title="Orthophoto Maps and Map Symbols"
    subtitle="Reading aerial photographs and map legends"
    learnSteps={learnSteps}
    task="gr9-orthophoto-maps-symbols-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default OrthophotoMapsSymbolsT1;
