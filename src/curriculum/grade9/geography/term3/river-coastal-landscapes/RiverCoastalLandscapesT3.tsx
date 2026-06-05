import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'River landscapes and valley formation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rivers shape landscapes through <strong>fluvial erosion</strong> (river-caused erosion), creating distinctive valley forms.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Young rivers (upper course)</strong>
            <p className="text-slate-600">Fast-flowing, steep; cut V-shaped valleys; lots of vertical erosion.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Mature rivers (middle course)</strong>
            <p className="text-slate-600">Meandering; gentle gradient; more lateral erosion creates wider valleys.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Old rivers (lower course)</strong>
            <p className="text-slate-600">Slow-moving; wide, flat floodplain; mainly deposition of sediment.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">River mouth</strong>
            <p className="text-slate-600">Delta or estuary forms where river meets ocean.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Coastal landscapes and erosion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Waves, currents, and tides create and modify coastal landscapes through erosion and deposition.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Coastal erosion</strong>
            <p className="text-slate-600">Waves wear away cliffs, creating steep rocky coasts and sea stacks.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Beaches</strong>
            <p className="text-slate-600">Sand and pebbles deposited by waves; form depositional coasts.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Spits and bars</strong>
            <p className="text-slate-600">Long ridges of sediment extending from shore; formed by longshore drift.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Coastal threats and changes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Coastal areas face significant natural and human-made challenges:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Erosion threats</strong>
            <p className="text-slate-600">Cliff erosion threatens homes; loss of habitat; changes to sediment supply.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Climate impacts</strong>
            <p className="text-slate-600">Rising sea levels and stronger storms increase coastal hazards.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fluvial and coastal examples in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa has diverse river and coastal landscapes shaped by these processes.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Examples:</p>
          <p className="text-slate-600">The Limpopo, Orange, and Vaal rivers; rocky Cape coasts; Durban beaches; and lagoons along the south coast show river and coastal processes.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What shape does a young river valley typically form?',
    options: ['U-shaped', 'V-shaped', 'Flat', 'Square'],
    answer: 'V-shaped',
    explanation: 'Steep, fast-flowing rivers cut downward, creating narrow V-shaped valleys.',
  },
  {
    prompt: 'What does "fluvial erosion" mean?',
    options: ['Wind erosion', 'Coastal erosion', 'Erosion caused by rivers', 'Glacial erosion'],
    answer: 'Erosion caused by rivers',
    explanation: 'Fluvial refers to rivers and streams.',
  },
  {
    prompt: 'What happens during the mature stage of a river?',
    options: ['Most deposition', 'The river meanders and widens its valley through lateral erosion', 'Very steep flow', 'No change'],
    answer: 'The river meanders and widens its valley through lateral erosion',
    explanation: 'Mature rivers have reduced gradient and erode sideways, creating wider valleys.',
  },
  {
    prompt: 'What is a floodplain?',
    options: ['A steep valley', 'A flat area beside a river that floods during high water periods', 'A mountain', 'A desert'],
    answer: 'A flat area beside a river that floods during high water periods',
    explanation: 'Floodplains form in lower river courses; they are very fertile due to deposited sediment.',
  },
  {
    prompt: 'What landform forms where a river meets the ocean?',
    options: ['A valley', 'A delta or estuary with deposited sediment', 'A mountain', 'A lake'],
    answer: 'A delta or estuary with deposited sediment',
    explanation: 'Sediment slows and drops at river mouths, building deltas and estuaries.',
  },
  {
    prompt: 'What is longshore drift?',
    options: ['River current', 'Movement of sediment along the coast by wave action', 'Mountain building', 'Rainfall'],
    answer: 'Movement of sediment along the coast by wave action',
    explanation: 'Waves approaching at an angle move sediment along the coastline.',
  },
  {
    prompt: 'What is a spit?',
    options: ['A valley', 'A long ridge of sediment extending from shore, built by longshore drift', 'An erosion cliff', 'A beach only'],
    answer: 'A long ridge of sediment extending from shore, built by longshore drift',
    explanation: 'Spits form where coastlines change direction and sediment accumulates.',
  },
  {
    prompt: 'How do waves erode coastal cliffs?',
    options: ['Very slowly only', 'Through repeated impact, wearing away rock; hydraulic pressure in cracks', 'They don\'t', 'Only in summer'],
    answer: 'Through repeated impact, wearing away rock; hydraulic pressure in cracks',
    explanation: 'Wave energy is concentrated at cliff bases, causing rapid erosion.',
  },
  {
    prompt: 'What is a threat to many coastal areas?',
    options: ['Too much rain only', 'Rising sea levels, increased storms, and erosion threatening homes and habitats', 'Desertification only', 'No threats'],
    answer: 'Rising sea levels, increased storms, and erosion threatening homes and habitats',
    explanation: 'Climate change intensifies coastal hazards.',
  },
  {
    prompt: 'Name a major river in South Africa shaped by fluvial processes.',
    options: ['The Thames', 'The Orange, Limpopo, or Vaal rivers', 'The Nile', 'No rivers'],
    answer: 'The Orange, Limpopo, or Vaal rivers',
    explanation: 'These South African rivers have carved major valleys and shaped the landscape.',
  },
];

const RiverCoastalLandscapesT3 = () => (
  <CapsSubjectTopic
    title="River and Coastal Landscapes"
    subtitle="How water shapes valleys, coasts, and deltas"
    learnSteps={learnSteps}
    task="gr9-river-coastal-landscapes-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default RiverCoastalLandscapesT3;
