import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is overfishing?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Overfishing</strong> occurs when fish are caught faster than populations can regenerate, depleting fish stocks.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Consequence:</p>
          <p className="text-slate-600">Fish populations collapse; marine ecosystems are damaged; food security is threatened.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Causes of overfishing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Multiple factors drive overfishing:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Industrial fishing</strong>
            <p className="text-slate-600">Large boats with sophisticated technology harvest massive quantities.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Economic pressure</strong>
            <p className="text-slate-600">Fishers compete to catch more; weak regulations allow unsustainable practices.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Global demand</strong>
            <p className="text-slate-600">Growing world population creates pressure for more fish.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Illegal fishing</strong>
            <p className="text-slate-600">Unregulated and unreported fishing bypasses conservation measures.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'What is overgrazing?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Overgrazing</strong> occurs when livestock populations exceed the land's carrying capacity, degrading vegetation and soil.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Result:</p>
          <p className="text-slate-600">Rangeland degradation, desertification, reduced vegetation, and soil erosion.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Impacts and management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Overfishing and overgrazing create cascading environmental and social impacts:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Environmental:</strong>
            <p className="text-slate-600">Ecosystem collapse, biodiversity loss, habitat degradation.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Social:</strong>
            <p className="text-slate-600">Food insecurity, livelihood loss for fishing/pastoral communities.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Management solutions:</strong>
            <p className="text-slate-600">Fishing quotas, rotational grazing, protected areas, alternative livelihoods.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Recovery:</strong>
            <p className="text-slate-600">Allow fish stocks and rangelands to regenerate through reduced harvest/grazing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fishing Data — Share of Overfished Marine Stocks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A growing share of the worlds fish stocks are being pushed beyond sustainable levels. This trend helps explain why careful resource management matters.</p>
        <DataChart
          data={[
                        { year: 1990, share: 18 },
                        { year: 2000, share: 27 },
                        { year: 2010, share: 32 },
                        { year: 2021, share: 37 },
                      ]}
          xKey="year"
          series={[
                        { key: 'share', label: 'Overfished stocks (%)', type: 'line', color: '#0ea5e9' },
                      ]}
          type="line"
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">When too many fish are caught, breeding populations fall and future catches become less secure.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is overfishing?',
    options: ['Sustainable fishing', 'Catching fish faster than populations can regenerate', 'Fishing with nets', 'Fishing in rivers only'],
    answer: 'Catching fish faster than populations can regenerate',
    explanation: 'Overfishing depletes fish stocks beyond sustainable recovery rates.',
  },
  {
    prompt: 'What is a consequence of overfishing?',
    options: ['More fish', 'Depleted fish populations, ecosystem damage, and food insecurity', 'No effect', 'Better harvests'],
    answer: 'Depleted fish populations, ecosystem damage, and food insecurity',
    explanation: 'Overfishing causes stock collapses and threatens food security.',
  },
  {
    prompt: 'What enables large-scale overfishing?',
    options: ['Sustainable practices', 'Industrial fishing technology and weak regulations', 'Traditional fishing', 'Small boats'],
    answer: 'Industrial fishing technology and weak regulations',
    explanation: 'Large, technologically advanced fishing vessels can deplete stocks quickly.',
  },
  {
    prompt: 'What is illegal fishing?',
    options: ['Legal fishing', 'Unregulated and unreported fishing that bypasses conservation', 'Fishing in home waters', 'All fishing'],
    answer: 'Unregulated and unreported fishing that bypasses conservation',
    explanation: 'Illegal fishing contributes significantly to stock depletion.',
  },
  {
    prompt: 'What is overgrazing?',
    options: ['Sustainable grazing', 'When livestock numbers exceed the land\'s carrying capacity, degrading vegetation', 'Raising animals', 'Seasonal grazing'],
    answer: 'When livestock numbers exceed the land\'s carrying capacity, degrading vegetation',
    explanation: 'Overgrazing strips vegetation and causes land degradation.',
  },
  {
    prompt: 'What is a consequence of overgrazing?',
    options: ['More grass', 'Rangeland degradation, desertification, and soil erosion', 'Healthy pastures', 'No effect'],
    answer: 'Rangeland degradation, desertification, and soil erosion',
    explanation: 'Overgrazing destroys rangeland ecosystems and leads to desertification.',
  },
  {
    prompt: 'Why does overgrazing occur?',
    options: ['For sustainability', 'Economic pressure to raise more livestock; poverty and lack of alternatives', 'Planned degradation', 'Never happens'],
    answer: 'Economic pressure to raise more livestock; poverty and lack of alternatives',
    explanation: 'Herders often lack alternatives for income and livelihoods.',
  },
  {
    prompt: 'What is a management solution for overfishing?',
    options: ['Fish faster', 'Fishing quotas and protected marine areas', 'No solution', 'Fishing year-round'],
    answer: 'Fishing quotas and protected marine areas',
    explanation: 'Quotas limit harvest; protected areas allow stock recovery.',
  },
  {
    prompt: 'What is rotational grazing?',
    options: ['Continuous grazing', 'Moving livestock between different pastures to allow vegetation recovery', 'No movement', 'Overgrazing'],
    answer: 'Moving livestock between different pastures to allow vegetation recovery',
    explanation: 'Rotational grazing allows rangelands to regenerate.',
  },
  {
    prompt: 'Who is most affected by overfishing and overgrazing?',
    options: ['Rich countries only', 'Developing countries; fishing and pastoral communities', 'No one', 'Governments only'],
    answer: 'Developing countries; fishing and pastoral communities',
    explanation: 'Poor fishers and herders depend on these resources and suffer most from depletion.',
  },
];

const OverfishingOvergrazingT4 = () => (
  <CapsSubjectTopic
    title="Overfishing and Overgrazing"
    subtitle="Resource depletion and unsustainable practices"
    learnSteps={learnSteps}
    task="gr9-overfishing-overgrazing-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default OverfishingOvergrazingT4;
