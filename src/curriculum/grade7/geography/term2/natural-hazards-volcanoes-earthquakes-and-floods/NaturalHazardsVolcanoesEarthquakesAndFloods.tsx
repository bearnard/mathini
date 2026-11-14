import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Natural hazards: volcanoes, earthquakes, and floods',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Natural hazards are linked to Earth systems. Plate movement causes earthquakes and volcanoes, while floods
          are shaped by rainfall, drainage, and land use. Disaster reduction lowers risk to people and places.
        </p>
      </div>
    ),
  },
  {
    title: 'Hazard Data — Typical Global Disaster Frequency',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Different natural hazards do not happen equally often. Floods and storms usually affect more places each year than volcanic eruptions.</p>
        <DataChart
          data={[
                        { hazard: 'Floods', events: 160 },
                        { hazard: 'Storms', events: 120 },
                        { hazard: 'Droughts', events: 35 },
                        { hazard: 'Earthquakes', events: 28 },
                        { hazard: 'Volcanic eruptions', events: 8 },
                      ]}
          xKey="hazard"
          series={[
                        { key: 'events', label: 'Average events per year', type: 'bar', color: '#ef4444' },
                      ]}
          yLabel="Events"
          height={220}
        />

        <p className="text-sm text-slate-500">Frequency is only one part of risk. A less common hazard can still be very dangerous if many people are exposed.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What causes most earthquakes and volcanoes?',
    options: ['Movement of tectonic plates', 'Moon phases', 'Daily wind patterns', 'Ocean tides only'],
    answer: 'Movement of tectonic plates',
    explanation: 'Most major earthquakes and volcanoes occur where tectonic plates interact.',
  },
  {
    prompt: 'Why are some places called volcanic zones?',
    options: [
      'They are areas where volcanoes are common',
      'They are always below sea level',
      'They never receive rainfall',
      'They have no settlement',
    ],
    answer: 'They are areas where volcanoes are common',
    explanation: 'Volcanic zones are regions with higher volcanic activity.',
  },
  {
    prompt: 'Which hazard is most directly linked to overflowing rivers after heavy rain?',
    options: ['Floods', 'Earthquakes', 'Drought', 'Volcanic ashfall'],
    answer: 'Floods',
    explanation: 'Flooding can happen when rain raises river levels beyond channel capacity.',
  },
  {
    prompt: 'What does disaster risk reduction aim to do?',
    options: ['Reduce damage and protect lives before hazards strike', 'Stop all natural processes from happening', 'Raise the cost of building and nothing more', 'Move every town up into the mountains'],
    answer: 'Reduce damage and protect lives before hazards strike',
    explanation: 'Preparedness and planning reduce vulnerability and losses.',
  },
  {
    prompt: 'Which item is most useful in an earthquake emergency kit?',
    options: ['Torch with batteries', 'Decorative posters', 'Glass ornaments', 'Extra shoes only'],
    answer: 'Torch with batteries',
    explanation: 'A torch helps when power cuts happen after a hazard event.',
  },
  {
    prompt: 'How can settlements reduce flood impact?',
    options: ['Keep drainage clear and avoid building on floodplains', 'Remove all of the plants from riverbanks', 'Build only at sea level near the coast', 'Ignore the weather warnings that are given'],
    answer: 'Keep drainage clear and avoid building on floodplains',
    explanation: 'Good planning and maintenance reduce flood exposure.',
  },
  {
    prompt: 'Which map would best show global earthquake-prone areas?',
    options: ['Tectonic plate map', 'Population age graph', 'Language map', 'Tourist brochure'],
    answer: 'Tectonic plate map',
    explanation: 'Earthquake patterns often align with plate boundaries.',
  },
  {
    prompt: 'A warning system is an example of:',
    options: ['Preparedness', 'Hazard creation', 'Soil erosion only', 'Plate formation'],
    answer: 'Preparedness',
    explanation: 'Warning systems help communities act early and safely.',
  },
];

const NaturalHazardsVolcanoesEarthquakesAndFloods = () => (
  <CapsSubjectTopic
    title="Natural Hazards: Volcanoes, Earthquakes and Floods"
    subtitle="Earth structure, hazard zones, and disaster reduction"
    learnSteps={learnSteps}
    task="gr7-natural-hazards-volcanoes-earthquakes-and-floods-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default NaturalHazardsVolcanoesEarthquakesAndFloods;
