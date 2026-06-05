import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is weathering?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Weathering</strong> is the breaking down of rocks in place at or near the Earth's surface by exposure to weather.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key point:</p>
          <p className="text-slate-600">Unlike erosion, weathering doesn't move rocks; it breaks them down where they are.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of weathering',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Weathering occurs through different processes:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Physical weathering</strong>
            <p className="text-slate-600">Rocks break apart by frost, temperature change, or abrasion (no chemical change).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Chemical weathering</strong>
            <p className="text-slate-600">Rocks decompose through reaction with water, oxygen, or acids.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Biological weathering</strong>
            <p className="text-slate-600">Plant roots, animal burrowing, and decomposition break rocks.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'What is erosion?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Erosion</strong> is the removal and transport of weathered material by water, wind, or ice.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Water erosion</strong>
            <p className="text-slate-600">Rivers, streams, and rainwater carve valleys and gullies.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Wind erosion</strong>
            <p className="text-slate-600">Wind removes soil, particularly in arid regions.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Ice erosion</strong>
            <p className="text-slate-600">Glaciers carve deep valleys and transport boulders.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Deposition and landscape formation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Deposition</strong> is when eroded material is dropped and settles in a new location.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Cycle:</p>
          <p className="text-slate-600">Weathering → Erosion → Transport → Deposition creates new landforms (deltas, alluvial fans, sand dunes).</p>
        </div>
        <p className="text-sm text-slate-600 mt-4">This continuous cycle over millions of years creates and reshapes Earth's landscapes.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is weathering?',
    options: ['The movement of rocks', 'The breaking down of rocks in place by weather exposure', 'Only erosion', 'Climate only'],
    answer: 'The breaking down of rocks in place by weather exposure',
    explanation: 'Weathering is the in-place disintegration of rocks; it does not involve transport.',
  },
  {
    prompt: 'What is the main difference between weathering and erosion?',
    options: ['They are the same', 'Weathering breaks rocks down; erosion moves the material away', 'Erosion only happens in deserts', 'No difference at all'],
    answer: 'Weathering breaks rocks down; erosion moves the material away',
    explanation: 'Weathering is disintegration in place; erosion involves transport of broken material.',
  },
  {
    prompt: 'What is an example of physical weathering?',
    options: ['Acid rain', 'Plant root growth', 'Frost-shattering (freeze-thaw cycles)', 'Chemical decomposition'],
    answer: 'Frost-shattering (freeze-thaw cycles)',
    explanation: 'Water entering rock cracks freezes, expands, and splits rocks apart without chemical change.',
  },
  {
    prompt: 'What causes chemical weathering?',
    options: ['Temperature only', 'Reaction with water, oxygen, or acids that chemically break down rocks', 'Wind alone', 'No cause'],
    answer: 'Reaction with water, oxygen, or acids that chemically break down rocks',
    explanation: 'Rainwater is slightly acidic and reacts with rock minerals, breaking them down.',
  },
  {
    prompt: 'What is biological weathering?',
    options: ['Only temperature', 'Breakdown of rocks by plant roots, animals, and microorganisms', 'Water only', 'Wind only'],
    answer: 'Breakdown of rocks by plant roots, animals, and microorganisms',
    explanation: 'Living organisms contribute to both physical and chemical rock breakdown.',
  },
  {
    prompt: 'Which agent of erosion carves deep valleys?',
    options: ['Only wind', 'Rivers and streams', 'Only temperature', 'Only animals'],
    answer: 'Rivers and streams',
    explanation: 'Flowing water is a powerful erosive agent that creates valleys and canyons.',
  },
  {
    prompt: 'What is deposition?',
    options: ['Erosion only', 'The settling and dropping of eroded material in a new location', 'Weathering only', 'No process'],
    answer: 'The settling and dropping of eroded material in a new location',
    explanation: 'Deposition creates new landforms like deltas and alluvial fans.',
  },
  {
    prompt: 'What landform results from river deposition?',
    options: ['A valley', 'A delta (where rivers meet the ocean)', 'A mountain', 'Nothing forms'],
    answer: 'A delta (where rivers meet the ocean)',
    explanation: 'Sediment dropped at river mouths builds deltas.',
  },
  {
    prompt: 'How do the three processes (weathering, erosion, deposition) work together?',
    options: ['They don\'t', 'Weathering breaks rocks; erosion transports them; deposition deposits them in new locations', 'Only one happens', 'All at once in one place'],
    answer: 'Weathering breaks rocks; erosion transports them; deposition deposits them in new locations',
    explanation: 'These processes form a continuous cycle that shapes landscapes.',
  },
  {
    prompt: 'What is an example of a depositional landform?',
    options: ['A steep cliff', 'Sand dunes, deltas, alluvial fans, beaches', 'Only mountains', 'Nothing forms'],
    answer: 'Sand dunes, deltas, alluvial fans, beaches',
    explanation: 'These landforms are built up by accumulation of deposited sediment.',
  },
];

const WeatheringErosionT3 = () => (
  <CapsSubjectTopic
    title="Weathering and Erosion"
    subtitle="How surface forces break down and reshape rocks"
    learnSteps={learnSteps}
    task="gr9-weathering-erosion-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default WeatheringErosionT3;
