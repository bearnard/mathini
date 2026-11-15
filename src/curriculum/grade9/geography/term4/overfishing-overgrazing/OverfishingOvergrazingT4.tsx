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
      <div className="space-y-2">
  <p className="text-slate-600">{"Rotational grazing divides a farm into camps, so that cattle are moved to a fresh camp while the grass in the last one has time to grow back."}</p>
  <p className="text-slate-600">{"People who rely on a fishing area or on rangeland for their daily food and income suffer first when these resources are used up, and poorer countries have fewer other options."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is overfishing?',
    options: ['Fishing in a way that does not harm the stocks', 'Catching fish faster than the stocks can recover', 'Fishing with nets rather than with a line', 'Fishing in rivers and dams but not at sea'],
    answer: 'Catching fish faster than the stocks can recover',
    explanation: 'Overfishing depletes fish stocks beyond sustainable recovery rates.',
  },
  {
    prompt: 'What is a consequence of overfishing?',
    options: ['More fish, as fish breed faster when caught', 'Fewer fish, damaged ecosystems and less food', 'No effect, since the sea refills itself', 'Better harvests, since fish are easier to find'],
    answer: 'Fewer fish, damaged ecosystems and less food',
    explanation: 'Overfishing causes stock collapses and threatens food security.',
  },
  {
    prompt: 'What enables large-scale overfishing?',
    options: ['Sustainable practices that follow quotas', 'Large fishing technology and weak regulations', 'Traditional fishing with hand lines', 'Small boats that fish close to the shore'],
    answer: 'Large fishing technology and weak regulations',
    explanation: 'Large, technologically advanced fishing vessels can deplete stocks quickly.',
  },
  {
    prompt: 'What is illegal fishing?',
    options: ['Fishing that follows all the rules of a country', 'Unregulated, unreported fishing that avoids conservation rules', 'Fishing in home waters with a licence', 'All fishing that is done to earn a living'],
    answer: 'Unregulated, unreported fishing that avoids conservation rules',
    explanation: 'Illegal fishing contributes significantly to stock depletion.',
  },
  {
    prompt: 'What is overgrazing?',
    options: ['Grazing that is kept within the limits of the land', 'Livestock numbers above what the land can carry, harming plants', 'Raising animals for meat, milk and wool', 'Moving animals to new grass in each season'],
    answer: 'Livestock numbers above what the land can carry, harming plants',
    explanation: 'Overgrazing strips vegetation and causes land degradation.',
  },
  {
    prompt: 'What is a consequence of overgrazing?',
    options: ['More grass growing, as grazing makes it thicker', 'Rangeland damage, desertification and soil erosion', 'Healthy pastures with a good plant cover', 'No effect on the land, as grass grows back fast'],
    answer: 'Rangeland damage, desertification and soil erosion',
    explanation: 'Overgrazing destroys rangeland ecosystems and leads to desertification.',
  },
  {
    prompt: 'Why does overgrazing occur?',
    options: ['To keep farming sustainable in the long run', 'Pressure to raise more animals; poverty and few other options', 'A plan to degrade land so that it can be sold', 'It never happens, as farmers know the limits'],
    answer: 'Pressure to raise more animals; poverty and few other options',
    explanation: 'Herders often lack alternatives for income and livelihoods.',
  },
  {
    prompt: 'What is a management solution for overfishing?',
    options: ['Fishing faster to catch the fish before others do', 'Fishing quotas and protected marine areas', 'There is no solution, as the sea is too large', 'Fishing all year round, with no closed seasons'],
    answer: 'Fishing quotas and protected marine areas',
    explanation: 'Quotas limit harvest; protected areas allow stock recovery.',
  },
  {
    prompt: 'What is rotational grazing?',
    options: ['Keeping animals on one pasture all year round', 'Moving livestock between pastures so plants can recover', 'Keeping animals in one place with no movement at all', 'Putting more animals on a pasture than it can feed'],
    answer: 'Moving livestock between pastures so plants can recover',
    explanation: 'Rotational grazing allows rangelands to regenerate.',
  },
  {
    prompt: 'Who is most affected by overfishing and overgrazing?',
    options: ['Rich countries, which fish and farm the most', 'Developing countries, with fishing and herding communities', 'No one, since both problems are far away', 'Governments, which lose taxes from fishing'],
    answer: 'Developing countries, with fishing and herding communities',
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
