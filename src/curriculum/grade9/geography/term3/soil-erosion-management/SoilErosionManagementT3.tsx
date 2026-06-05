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
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is soil erosion?',
    options: ['Soil formation', 'The removal and loss of the soil layer through water or wind action', 'Soil compaction', 'Rock formation'],
    answer: 'The removal and loss of the soil layer through water or wind action',
    explanation: 'Soil erosion removes fertile topsoil, reducing agricultural productivity.',
  },
  {
    prompt: 'What is sheet erosion?',
    options: ['Removal in deep channels', 'Even removal of a thin soil layer across a slope', 'Only on flat land', 'No movement'],
    answer: 'Even removal of a thin soil layer across a slope',
    explanation: 'Sheet erosion is widespread but less dramatic than gully erosion.',
  },
  {
    prompt: 'What is gully erosion?',
    options: ['Slow process only', 'Deep channels cut by running water; rapid, severe erosion', 'No erosion', 'Wind only'],
    answer: 'Deep channels cut by running water; rapid, severe erosion',
    explanation: 'Gully erosion is destructive and creates permanent damage to the landscape.',
  },
  {
    prompt: 'Which human activity is a major cause of soil erosion?',
    options: ['Planting trees', 'Overgrazing that removes vegetation protecting soil', 'Building dams', 'Recycling'],
    answer: 'Overgrazing that removes vegetation protecting soil',
    explanation: 'Too many animals remove vegetation, exposing soil to erosion.',
  },
  {
    prompt: 'How does deforestation increase soil erosion?',
    options: ['It doesn\'t', 'Removal of trees exposes soil to rain and wind; tree roots no longer bind soil', 'Trees cause erosion', 'Only in cities'],
    answer: 'Removal of trees exposes soil to rain and wind; tree roots no longer bind soil',
    explanation: 'Forests provide crucial protection against soil erosion.',
  },
  {
    prompt: 'What is a major agricultural impact of soil erosion?',
    options: ['More crops grow', 'Reduced soil fertility and lower crop yields', 'Better harvests', 'No impact'],
    answer: 'Reduced soil fertility and lower crop yields',
    explanation: 'Erosion removes nutrient-rich topsoil, reducing land productivity.',
  },
  {
    prompt: 'How does soil erosion affect water quality?',
    options: ['It improves water', 'Sediment and pollutants from eroded soil cloud and contaminate water', 'No effect', 'Only in deserts'],
    answer: 'Sediment and pollutants from eroded soil cloud and contaminate water',
    explanation: 'Eroded soil creates turbidity and carries agricultural chemicals into waterways.',
  },
  {
    prompt: 'What is terracing?',
    options: ['A building technique', 'Step-like formations on slopes that reduce runoff and soil erosion', 'A type of erosion', 'Flat ground only'],
    answer: 'Step-like formations on slopes that reduce runoff and soil erosion',
    explanation: 'Terraces slow water movement and allow it to infiltrate, reducing erosion.',
  },
  {
    prompt: 'How does vegetation cover prevent soil erosion?',
    options: ['It doesn\'t', 'Plant roots bind soil; leaves and stems break rainfall impact and slow runoff', 'Only in cities', 'No effect'],
    answer: 'Plant roots bind soil; leaves and stems break rainfall impact and slow runoff',
    explanation: 'Vegetation is the most effective natural soil erosion control.',
  },
  {
    prompt: 'What is contour ploughing?',
    options: ['Straight line ploughing', 'Ploughing along contour lines (across slopes) to slow runoff and trap soil', 'Ploughing downhill', 'No difference'],
    answer: 'Ploughing along contour lines (across slopes) to slow runoff and trap soil',
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
