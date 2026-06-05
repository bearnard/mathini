import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Natural resources and conservation in South Africa',
    image: {
      src: '/curriculum/grade7/geo/term4/natural-resources-and-conservation-in-south-africa/diagram.webp',
      alt: 'Grade 7 learners exploring water, soil, marine resources, and conservation areas in South Africa',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa depends on natural resources such as water, air, soil, and marine ecosystems. Conservation and
          responsible resource management protect biodiversity, livelihoods, and future sustainability.
        </p>
      </div>
    ),
  },
  {
    title: 'Conservation Data — South African Biodiversity Richness',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">South Africa protects natural resources because it has exceptional biodiversity. This simple chart compares the number of species in different groups.</p>
        <DataChart
          data={[
                        { group: 'Flowering plants', species: 24000 },
                        { group: 'Marine fish', species: 2200 },
                        { group: 'Birds', species: 870 },
                        { group: 'Mammals', species: 300 },
                      ]}
          xKey="group"
          series={[
                        { key: 'species', label: 'Approximate species count', type: 'bar', color: '#16a34a' },
                      ]}
          yLabel="Species"
          height={220}
        />

        <p className="text-sm text-slate-500">High biodiversity is one reason why conservation areas, national parks, and habitat protection are important.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is a natural resource?',
    options: ['Fresh water in rivers', 'Concrete pavement', 'Plastic packaging', 'Traffic lights'],
    answer: 'Fresh water in rivers',
    explanation: 'Natural resources occur in nature and support life and economic activity.',
  },
  {
    prompt: 'Why is soil conservation important?',
    options: [
      'Healthy soil supports food production and ecosystems',
      'It makes rainfall impossible',
      'It removes the need for farming',
      'It only affects city roads',
    ],
    answer: 'Healthy soil supports food production and ecosystems',
    explanation: 'Conserving soil protects fertility, reduces erosion, and supports farming.',
  },
  {
    prompt: 'A catchment area mainly relates to:',
    options: ['How water drains into rivers and dams', 'Road traffic speed', 'Population age groups', 'City zoning laws'],
    answer: 'How water drains into rivers and dams',
    explanation: 'Catchments collect and direct water into river systems.',
  },
  {
    prompt: 'What is a key aim of conservation areas?',
    options: [
      'Protect biodiversity and ecosystems',
      'Increase pollution levels',
      'Ban all tourism permanently',
      'Reduce all rainfall',
    ],
    answer: 'Protect biodiversity and ecosystems',
    explanation: 'Conservation areas help protect habitats, species, and ecological processes.',
  },
  {
    prompt: 'How can eco-tourism support conservation?',
    options: [
      'By funding protection while promoting responsible travel',
      'By encouraging littering',
      'By removing all local jobs',
      'By building in wetlands',
    ],
    answer: 'By funding protection while promoting responsible travel',
    explanation: 'Responsible eco-tourism can generate income for conservation and communities.',
  },
  {
    prompt: 'Which action improves water management?',
    options: ['Fixing leaks and reducing water waste', 'Leaving taps running', 'Dumping waste in rivers', 'Clearing all wetlands'],
    answer: 'Fixing leaks and reducing water waste',
    explanation: 'Saving water and reducing losses improves long-term water security.',
  },
  {
    prompt: 'Marine life is most directly threatened by:',
    options: ['Pollution and overfishing', 'Map symbols', 'Longitude lines', 'School uniforms'],
    answer: 'Pollution and overfishing',
    explanation: 'Pollution and unsustainable fishing damage marine ecosystems.',
  },
  {
    prompt: 'Conservation in South Africa is best described as:',
    options: [
      'Using resources responsibly so they remain available',
      'Never using resources at all',
      'Ignoring future needs',
      'Only protecting one species',
    ],
    answer: 'Using resources responsibly so they remain available',
    explanation: 'Sustainable use balances current needs with future protection.',
  },
];

const NaturalResourcesAndConservationInSouthAfrica = () => (
  <CapsSubjectTopic
    title="Natural Resources and Conservation in South Africa"
    subtitle="Water, soil, marine systems, catchments, and sustainability"
    learnSteps={learnSteps}
    task="gr7-natural-resources-and-conservation-in-south-africa-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default NaturalResourcesAndConservationInSouthAfrica;
