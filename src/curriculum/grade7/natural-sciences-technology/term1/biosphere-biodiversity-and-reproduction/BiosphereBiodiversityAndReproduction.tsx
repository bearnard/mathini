import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Classify life and explain reproduction strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>biosphere</strong> includes all living things and their environments. Learners study
          <strong> biodiversity</strong>, classify organisms, and compare <strong>sexual</strong> and
          <strong> asexual reproduction</strong> with examples like pollination and seed dispersal.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does biodiversity mean?',
    options: [
      'The variety of living organisms in an area',
      'Only the number of predators in a habitat',
      'The temperature of a habitat each day',
      'The amount of rainfall in one week',
    ],
    answer: 'The variety of living organisms in an area',
    explanation: 'Biodiversity describes how many different kinds of living things are present.',
  },
  {
    prompt: 'Why do scientists classify living organisms?',
    options: [
      'To group them by shared features and relationships',
      'To decide which organisms are more important',
      'To remove organisms from their habitats',
      'To measure only the size of organisms',
    ],
    answer: 'To group them by shared features and relationships',
    explanation: 'Classification helps us organise and study living things systematically.',
  },
  {
    prompt: 'Sexual reproduction usually involves...',
    options: ['two parent organisms', 'no parent organisms', 'only spores in water', 'only one identical clone'],
    answer: 'two parent organisms',
    explanation: 'In sexual reproduction, genetic information comes from two parents.',
  },
  {
    prompt: 'Asexual reproduction usually produces offspring that are...',
    options: ['genetically identical to the parent', 'always larger than the parent', 'completely unrelated to the parent', 'always produced by pollination'],
    answer: 'genetically identical to the parent',
    explanation: 'Asexual reproduction commonly makes clones with very similar genetic information.',
  },
  {
    prompt: 'What is pollination?',
    options: [
      'The transfer of pollen from anther to stigma',
      'The growth of roots through dry soil',
      'The movement of seeds by flowing water',
      'The breakdown of dead matter by fungi',
    ],
    answer: 'The transfer of pollen from anther to stigma',
    explanation: 'Pollination is a key step in sexual reproduction for flowering plants.',
  },
  {
    prompt: 'Which seed adaptation best supports wind dispersal?',
    options: ['Lightweight seeds with wing-like structures', 'Large heavy seeds with thick shells', 'Seeds that must be buried by mammals', 'Sticky seeds that only travel in water'],
    answer: 'Lightweight seeds with wing-like structures',
    explanation: 'Light seeds with wings or hairs are carried more easily by wind.',
  },
];

const BiosphereBiodiversityAndReproduction = () => (
  <CapsSubjectTopic
    title="Biosphere, Biodiversity and Reproduction"
    subtitle="Classification, habitats, and survival through reproduction"
    learnSteps={learnSteps}
    task="gr7-biosphere-biodiversity-and-reproduction-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default BiosphereBiodiversityAndReproduction;
