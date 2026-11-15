import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is soil erosion?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Soil erosion</strong> is the removal and loss of the soil layer, usually through water or wind action, often accelerated by human activities.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Impact:</p>
          <p className="text-slate-600">Soil erosion reduces fertility, productivity, and leads to land degradation.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Types and causes of soil erosion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Soil erosion occurs through various processes:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Sheet erosion</strong>
            <p className="text-slate-600">Thin layer of soil removed evenly across slopes.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Gully erosion</strong>
            <p className="text-slate-600">Deep channels cut by running water; rapid, severe erosion.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Wind erosion</strong>
            <p className="text-slate-600">Fine soil particles blown away; common in dry areas.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl mt-4 text-left inline-block">
          <p className="font-bold text-slate-800">Human-induced causes:</p>
          <p className="text-slate-600">Overgrazing, deforestation, poor farming practices, construction.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Impacts of soil erosion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Soil erosion has serious consequences for agriculture, environment, and communities:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Agricultural impacts:</strong>
            <p className="text-slate-600">Reduced soil fertility, lower crop yields, loss of productive land.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Environmental impacts:</strong>
            <p className="text-slate-600">Sedimentation in rivers, water pollution, habitat loss.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Social impacts:</strong>
            <p className="text-slate-600">Food insecurity, poverty, displacement of communities.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Economic impacts:</strong>
            <p className="text-slate-600">Loss of productive land, rehabilitation costs.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Soil erosion management and conservation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective strategies can prevent and reverse soil erosion:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Vegetation cover</strong>
            <p className="text-slate-600">Trees, grasses, and mulch protect soil from rain and wind.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Soil conservation</strong>
            <p className="text-slate-600">Terracing, contour ploughing, check dams slow runoff.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Sustainable practices</strong>
            <p className="text-slate-600">Reduced overgrazing, agroforestry, cover crops.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Erosion Data — Soil Loss Under Different Land Uses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Soil erosion becomes easier to compare when it is measured. These values show how good land management can lower soil loss sharply.</p>
        <DataChart
          data={[
                        { landUse: 'Bare slope', soilLoss: 30 },
                        { landUse: 'Overgrazed veld', soilLoss: 22 },
                        { landUse: 'Contour ploughing', soilLoss: 8 },
                        { landUse: 'Mulched field', soilLoss: 4 },
                      ]}
          xKey="landUse"
          series={[
                        { key: 'soilLoss', label: 'Soil loss (t/ha/yr)', type: 'bar', color: '#b45309' },
                      ]}
          yLabel="t/ha/yr"
          height={220}
        />

        <p className="text-sm text-slate-500">Keeping vegetation cover and slowing runoff are key ways to manage soil erosion.</p>
      <div className="space-y-2">
  <p className="text-slate-600">{"When rain washes soil into a stream, the water turns muddy and cloudy. Fertiliser and other chemicals carried by the soil also pollute the water that people and animals use."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is soil erosion?',
    options: ['The forming of new soil from weathered rock', 'The loss of the top soil layer through water or wind', 'The packing down of soil by heavy machinery', 'The forming of rock from layers of soil'],
    answer: 'The loss of the top soil layer through water or wind',
    explanation: 'Soil erosion removes fertile topsoil, reducing agricultural productivity.',
  },
  {
    prompt: 'What is sheet erosion?',
    options: ['Removal of soil in deep channels down a slope', 'Even removal of a thin layer of soil across a slope', 'Removal of soil on flat land only, by wind', 'Soil that stays in place when it rains'],
    answer: 'Even removal of a thin layer of soil across a slope',
    explanation: 'Sheet erosion is widespread but less dramatic than gully erosion.',
  },
  {
    prompt: 'What is gully erosion?',
    options: ['A slow process that removes one thin layer', 'Deep channels cut by running water; fast, severe erosion', 'A small loss of soil that does little harm', 'Erosion caused only by wind on dry land'],
    answer: 'Deep channels cut by running water; fast, severe erosion',
    explanation: 'Gully erosion is destructive and creates permanent damage to the landscape.',
  },
  {
    prompt: 'Which human activity is a major cause of soil erosion?',
    options: ['Planting trees in rows to hold the soil in place', 'Overgrazing, which strips off the plants that protect the soil', 'Building dams to slow the flow of rivers and floods', 'Recycling waste to reduce rubbish dumping near farms'],
    answer: 'Overgrazing, which strips off the plants that protect the soil',
    explanation: 'Too many animals remove vegetation, exposing soil to erosion.',
  },
  {
    prompt: 'How does deforestation increase soil erosion?',
    options: ['It does not, since trees have no effect on soil', 'Trees are removed, so soil is exposed and roots no longer bind it', 'Trees cause the erosion through the growth of their roots', 'It affects soil in cities and has no effect on farms'],
    answer: 'Trees are removed, so soil is exposed and roots no longer bind it',
    explanation: 'Forests provide crucial protection against soil erosion.',
  },
  {
    prompt: 'What is a major agricultural impact of soil erosion?',
    options: ['More crops grow, since new soil is exposed', 'Less fertile soil, so crop yields fall', 'Better harvests, since the soil is looser', 'No effect, as farmers add fertiliser'],
    answer: 'Less fertile soil, so crop yields fall',
    explanation: 'Erosion removes nutrient-rich topsoil, reducing land productivity.',
  },
  {
    prompt: 'How does soil erosion affect water quality?',
    options: ['It improves water, as soil filters out dirt', 'Sediment and pollution from eroded soil cloud and foul water', 'It has no effect on the water in dams', 'It affects water in deserts and nowhere else'],
    answer: 'Sediment and pollution from eroded soil cloud and foul water',
    explanation: 'Eroded soil creates turbidity and carries agricultural chemicals into waterways.',
  },
  {
    prompt: 'What is terracing?',
    options: ['A way of building houses on steep ground', 'Steps built into a slope to slow runoff and soil loss', 'A kind of erosion that cuts steps in hills', 'Flat ground that has been cleared for crops'],
    answer: 'Steps built into a slope to slow runoff and soil loss',
    explanation: 'Terraces slow water movement and allow it to infiltrate, reducing erosion.',
  },
  {
    prompt: 'How does vegetation cover prevent soil erosion?',
    options: ['It does not, as rain washes soil away anyway', 'Roots bind soil; leaves and stems break rain and slow runoff', 'It works in cities and not on farmland', 'It has no effect on how much soil is lost'],
    answer: 'Roots bind soil; leaves and stems break rain and slow runoff',
    explanation: 'Vegetation is the most effective natural soil erosion control.',
  },
  {
    prompt: 'What is contour ploughing?',
    options: ['Ploughing in straight lines straight down a slope', 'Ploughing across a slope along the contours to slow runoff', 'Ploughing straight uphill to turn over the soil deeply', 'Ploughing in any direction, as it makes no difference'],
    answer: 'Ploughing across a slope along the contours to slow runoff',
    explanation: 'Contour ploughing follows the landscape\'s natural topography to reduce erosion.',
  },
];

const SoilErosionManagementT3 = () => (
  <CapsSubjectTopic
    title="Soil Erosion and Management"
    subtitle="Protecting and restoring soil resources"
    learnSteps={learnSteps}
    task="gr9-soil-erosion-management-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SoilErosionManagementT3;
