import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explain ecosystem balance and micro-organisms',
    image: {
      src: '/curriculum/grade8/ns/term1/ecosystems-and-micro-organisms/diagram.webp',
      alt: 'Grade 8 learners identifying biotic and abiotic factors and different micro-organisms in an ecosystem',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ecosystems include <strong>biotic</strong> and <strong>abiotic</strong> factors linked by food webs.
          Micro-organisms such as bacteria, fungi, and viruses can be useful or harmful. Conservation helps keep
          ecosystems stable when human activities cause change.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is an abiotic factor in an ecosystem?',
    options: ['Sunlight', 'Grass', 'Bird', 'Fungus'],
    answer: 'Sunlight',
    explanation: 'Abiotic factors are non-living parts of the environment, such as sunlight and water.',
  },
  {
    prompt: 'What is the role of decomposers in an ecosystem?',
    options: ['They break down dead material and recycle nutrients', 'They produce food from sunlight', 'They only hunt herbivores', 'They remove all oxygen from soil'],
    answer: 'They break down dead material and recycle nutrients',
    explanation: 'Decomposers return nutrients to the soil and support nutrient cycles.',
  },
  {
    prompt: 'Which group includes organisms often used to make yoghurt?',
    options: ['Bacteria', 'Viruses', 'Mammals', 'Insects'],
    answer: 'Bacteria',
    explanation: 'Useful bacteria are used in food production such as yoghurt fermentation.',
  },
  {
    prompt: 'Why are viruses usually not classified as living cells?',
    options: ['They cannot reproduce independently without a host cell', 'They make their own food using chlorophyll', 'They are made only of water', 'They have roots and stems'],
    answer: 'They cannot reproduce independently without a host cell',
    explanation: 'Viruses need a host cell to copy themselves.',
  },
  {
    prompt: 'If a top predator is removed from a food web, one likely result is...',
    options: ['Some prey populations may increase too much', 'All plants stop photosynthesis', 'Sunlight in the ecosystem disappears', 'All decomposers die immediately'],
    answer: 'Some prey populations may increase too much',
    explanation: 'Predators help control prey numbers and maintain ecosystem balance.',
  },
  {
    prompt: 'Which is the best example of conservation?',
    options: ['Protecting wetlands and limiting pollution', 'Cutting down all trees for farming', 'Removing all insects from an area', 'Burning grasslands every month'],
    answer: 'Protecting wetlands and limiting pollution',
    explanation: 'Conservation actions protect habitats and biodiversity.',
  },
  {
    prompt: 'Which statement about fungi is correct?',
    options: ['Many fungi are decomposers in ecosystems', 'All fungi make food by photosynthesis', 'Fungi are all harmful to humans', 'Fungi are a type of virus'],
    answer: 'Many fungi are decomposers in ecosystems',
    explanation: 'Fungi often break down dead matter and help nutrient recycling.',
  },
  {
    prompt: 'Biotic factors are...',
    options: ['living components of an ecosystem', 'temperature and rainfall only', 'non-living factors such as rocks', 'chemical formulas used in labs'],
    answer: 'living components of an ecosystem',
    explanation: 'Biotic factors include plants, animals, fungi, and micro-organisms.',
  },
];

const EcosystemsAndMicroOrganisms = () => (
  <CapsSubjectTopic
    title="Ecosystems and Micro-organisms"
    subtitle="Biotic and abiotic factors, food webs, microbes, and conservation"
    learnSteps={learnSteps}
    task="gr8-ecosystems-and-micro-organisms-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default EcosystemsAndMicroOrganisms;
