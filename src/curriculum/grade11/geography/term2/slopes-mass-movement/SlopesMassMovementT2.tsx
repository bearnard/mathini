import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Slope components',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A typical hillslope has four distinct components from top to bottom, each with a characteristic angle and process.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">1. Crest (waxing slope)</strong>
            <p className="text-slate-600 text-sm">Convex top of the hill; gentle gradient increasing downward; mainly creep and soil wash.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">2. Free face (scarp)</strong>
            <p className="text-slate-600 text-sm">Near-vertical exposed rock face; too steep for soil; rockfall is the dominant process.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">3. Debris slope</strong>
            <p className="text-slate-600 text-sm">Straight slope accumulating angular rock fragments (scree/talus) from the free face above.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">4. Pediment (waning slope)</strong>
            <p className="text-slate-600 text-sm">Concave slope at the base; gradient decreases; dominated by deposition of fine sediments.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Factors affecting slope stability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Whether a slope remains stable or fails depends on the balance between <strong>driving forces</strong> (gravity, water) and <strong>resisting forces</strong> (friction, cohesion, vegetation roots).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Natural factors</strong>
            <p className="text-slate-600 text-sm">Rock type, joint density, slope angle, clay content, weathering state, vegetation cover, rainfall intensity.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Human factors</strong>
            <p className="text-slate-600 text-sm">Deforestation (removes root binding), construction on slopes, road cutting, mining, irrigation increasing pore-water pressure.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of mass movement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mass movement</strong> is the downslope movement of rock, soil, or debris under the influence of gravity. Types are classified by speed and water content.
        </p>
        <div className="grid gap-2 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-red-50 p-3">
            <strong className="text-red-700">Rockfall</strong>
            <p className="text-slate-600">Very fast; free-falling rock fragments from a steep cliff face. No water required.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-3">
            <strong className="text-orange-700">Landslide</strong>
            <p className="text-slate-600">Fast; a coherent mass of rock/soil slides along a well-defined slip plane.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-3">
            <strong className="text-yellow-700">Mudflow</strong>
            <p className="text-slate-600">Fast; water-saturated loose material flows rapidly like a liquid down a valley.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">Soil creep</strong>
            <p className="text-slate-600">Very slow; imperceptible downslope movement; curved tree trunks and displaced fences are clues.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Triggers and prevention',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mass movement events are often triggered by a single event that tips the balance between driving and resisting forces.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Common triggers</strong>
            <p className="text-slate-600 text-sm">Intense rainfall (saturates soil), earthquakes, deforestation, undercutting of slopes, volcanic activity.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Prevention measures</strong>
            <p className="text-slate-600 text-sm">Planting vegetation, retaining walls, drainage channels, slope re-grading, rockfall nets, restricting development on steep slopes.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">South Africa's Western Cape and KwaZulu-Natal experience significant mass movement events during extreme rainfall events.</p>
      </div>
    ),
  },
  {
    title: 'Slope Data — Example Mass Movement Frequency',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Mass movements happen in different ways. This chart compares the relative frequency of common slope failures in mountainous environments.</p>
        <DataChart
          data={[
                        { type: 'Rockfalls', frequency: 34 },
                        { type: 'Landslides', frequency: 26 },
                        { type: 'Soil creep', frequency: 22 },
                        { type: 'Mudflows', frequency: 18 },
                      ]}
          xKey="type"
          series={[
                        { key: 'frequency', label: 'Relative frequency index', type: 'bar', color: '#f97316' },
                      ]}
          yLabel="Index"
          height={220}
        />

        <p className="text-sm text-slate-500">Slope angle, water content, vegetation cover, and rock structure all affect how often these events occur.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is mass movement?',
    options: [
      'The movement of water through a river system',
      'The downslope movement of rock, soil, or debris under gravity',
      'Wind transporting sand across a desert',
      'The migration of people from rural to urban areas',
    ],
    answer: 'The downslope movement of rock, soil, or debris under gravity',
    explanation: 'Mass movement (or mass wasting) is any type of bulk downslope movement of earth material driven by gravity.',
  },
  {
    prompt: 'Which slope component is a near-vertical exposed rock face?',
    options: ['Pediment', 'Crest', 'Free face (scarp)', 'Debris slope'],
    answer: 'Free face (scarp)',
    explanation: 'The free face is too steep for soil to accumulate; rockfall is the dominant process here.',
  },
  {
    prompt: 'What type of mass movement is SLOWEST?',
    options: ['Mudflow', 'Landslide', 'Rockfall', 'Soil creep'],
    answer: 'Soil creep',
    explanation: 'Soil creep is almost imperceptibly slow — it takes years to show visible signs like tilted fence posts or curved tree trunks.',
  },
  {
    prompt: 'Which visible clue indicates that soil creep is occurring on a slope?',
    options: [
      'Gully channels cutting into the slope',
      'Curved tree trunks and displaced fence posts',
      'A sudden cliff collapse',
      'Circular scars on the hillside',
    ],
    answer: 'Curved tree trunks and displaced fence posts',
    explanation: 'Soil creep bends tree trunks upslope as the surface soil moves downslope around the roots, and tilts fence posts.',
  },
  {
    prompt: 'Why does deforestation increase the risk of mass movement?',
    options: [
      'Trees absorb too much water, making the soil dry',
      'Tree roots bind the soil; removal reduces cohesion, increasing instability',
      'Deforestation increases albedo',
      'Trees slow down wind erosion only',
    ],
    answer: 'Tree roots bind the soil; removal reduces cohesion, increasing instability',
    explanation: 'Tree roots hold soil particles together. Without them, slopes become more susceptible to water-induced mass movement.',
  },
  {
    prompt: 'A mudflow differs from a landslide because a mudflow:',
    options: [
      'Moves more slowly',
      'Involves dry rock only',
      'Is saturated with water and flows rapidly like a liquid',
      'Occurs only on gentle slopes',
    ],
    answer: 'Is saturated with water and flows rapidly like a liquid',
    explanation: 'Mudflows occur when loose, fine-grained material becomes saturated, losing its internal friction and flowing rapidly.',
  },
  {
    prompt: 'Which factor would MOST likely trigger a landslide on a slope that was previously stable?',
    options: [
      'A period of drought',
      'Prolonged heavy rainfall saturating the slope',
      'Gradual cooling of air temperature',
      'Increase in vegetation cover',
    ],
    answer: 'Prolonged heavy rainfall saturating the slope',
    explanation: 'Rainfall increases pore-water pressure in slope material, reducing internal friction and triggering sliding along a failure plane.',
  },
  {
    prompt: 'The pediment (waning slope) is found at which part of a hillslope?',
    options: ['At the very top', 'Just below the free face', 'At the base of the slope', 'On the vertical cliff face'],
    answer: 'At the base of the slope',
    explanation: 'The pediment is a concave slope at the base of a hill where the gradient decreases and fine sediments are deposited.',
  },
  {
    prompt: 'Which method is used to prevent mass movement on road cuttings?',
    options: [
      'Painting the slope surface',
      'Installing retaining walls and drainage channels',
      'Increasing the slope angle',
      'Removing all vegetation',
    ],
    answer: 'Installing retaining walls and drainage channels',
    explanation: 'Retaining walls support the slope material; drainage channels remove excess water that could saturate and destabilize the slope.',
  },
  {
    prompt: 'Scree (talus) accumulates on which slope component?',
    options: ['Crest', 'Free face', 'Debris slope', 'Pediment'],
    answer: 'Debris slope',
    explanation: 'Angular rock fragments falling from the free face accumulate on the debris slope below, forming a talus or scree apron.',
  },
];

const SlopesMassMovementT2 = () => (
  <CapsSubjectTopic
    title="Slopes and Mass Movement"
    subtitle="Slope components, stability factors and types of mass movement"
    learnSteps={learnSteps}
    task="gr11-slopes-mass-movement-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SlopesMassMovementT2;
