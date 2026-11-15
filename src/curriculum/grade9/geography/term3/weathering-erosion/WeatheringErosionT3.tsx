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
    options: ['The moving of rock from one place to another', 'The breaking down of rock in place by exposure to weather', 'Erosion by running water and nothing else', 'The climate of a place measured over many years'],
    answer: 'The breaking down of rock in place by exposure to weather',
    explanation: 'Weathering is the in-place disintegration of rocks; it does not involve transport.',
  },
  {
    prompt: 'What is the main difference between weathering and erosion?',
    options: ['They are the same process under two names', 'Weathering breaks rock down; erosion carries the pieces away', 'Erosion takes place only in deserts and weathering elsewhere', 'Weathering moves rock away; erosion breaks it down'],
    answer: 'Weathering breaks rock down; erosion carries the pieces away',
    explanation: 'Weathering is disintegration in place; erosion involves transport of broken material.',
  },
  {
    prompt: 'What is an example of physical weathering?',
    options: ['Acid rain that eats into limestone', 'Lichen that releases acids onto rock', 'Frost-shattering by freezing and thawing cycles', 'A chemical change that turns iron into rust'],
    answer: 'Frost-shattering by freezing and thawing cycles',
    explanation: 'Water entering rock cracks freezes, expands, and splits rocks apart without chemical change.',
  },
  {
    prompt: 'What causes chemical weathering?',
    options: ['Changes in temperature and nothing more', 'Reaction with water, oxygen or acids that breaks rock down', 'Wind that blows sand against the rock surface', 'Nothing, since rock cannot change chemically'],
    answer: 'Reaction with water, oxygen or acids that breaks rock down',
    explanation: 'Rainwater is slightly acidic and reacts with rock minerals, breaking them down.',
  },
  {
    prompt: 'What is biological weathering?',
    options: ['Breakdown caused only by changes in temperature', 'The breakdown of rock by plant roots, animals and microbes', 'Breakdown caused only by flowing water', 'Breakdown caused only by strong winds'],
    answer: 'The breakdown of rock by plant roots, animals and microbes',
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
    options: ['Erosion that carries material away from a slope', 'The settling of eroded material in a new place', 'Weathering that breaks rocks down where they are', 'A process that never takes place in nature'],
    answer: 'The settling of eroded material in a new place',
    explanation: 'Deposition creates new landforms like deltas and alluvial fans.',
  },
  {
    prompt: 'What landform results from river deposition?',
    options: ['A steep valley cut high in the mountains', 'A delta, where a river meets the ocean', 'A mountain that forms from deposited sand', 'A cirque that forms at the head of a river'],
    answer: 'A delta, where a river meets the ocean',
    explanation: 'Sediment dropped at river mouths builds deltas.',
  },
  {
    prompt: 'How do the three processes (weathering, erosion, deposition) work together?',
    options: ['They are unrelated and always take place on their own', 'Weathering breaks rock; erosion carries it; deposition drops it', 'Only one of them takes place at any one time', 'All three happen at once, in a single place'],
    answer: 'Weathering breaks rock; erosion carries it; deposition drops it',
    explanation: 'These processes form a continuous cycle that shapes landscapes.',
  },
  {
    prompt: 'What is an example of a depositional landform?',
    options: ['A steep cliff cut by waves', 'Sand dunes, deltas, alluvial fans and beaches', 'Mountains and the tall peaks that rise from them', 'A V-shaped valley that is cut by a river'],
    answer: 'Sand dunes, deltas, alluvial fans and beaches',
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
