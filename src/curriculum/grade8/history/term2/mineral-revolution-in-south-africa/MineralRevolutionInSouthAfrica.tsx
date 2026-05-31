import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Mining transformed South African society',
    image: {
      src: '/curriculum/grade8/his/term2/mineral-revolution-in-south-africa/diagram.webp',
      alt: 'Grade 8 learners exploring gold mines, migrant labour hostels, and the growth of Johannesburg',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Mineral Revolution changed South Africa through large-scale diamond and gold mining. It reshaped labour
          systems, expanded Johannesburg, intensified land dispossession, and helped lay foundations for segregation in
          the early twentieth century.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'The Mineral Revolution in South Africa is most closely linked to which discoveries?',
    options: [
      'Diamonds and gold',
      'Oil and natural gas only',
      'Uranium and platinum only',
      'Salt and copper only',
    ],
    answer: 'Diamonds and gold',
    explanation: 'The term mainly refers to the major economic impact of diamond and gold mining.',
  },
  {
    prompt: 'Gold discovered on the Witwatersrand led directly to the rapid growth of which city?',
    options: ['Johannesburg', 'Kimberley', 'Cape Town', 'Mthatha'],
    answer: 'Johannesburg',
    explanation: 'Johannesburg grew quickly because of the Witwatersrand goldfields.',
  },
  {
    prompt: 'What is migrant labour in this historical context?',
    options: [
      'Workers moving, often temporarily, from rural areas to mining centres for jobs',
      'Workers permanently owning all mines',
      'Only foreign diplomats working in cities',
      'Children travelling for school exchanges',
    ],
    answer: 'Workers moving, often temporarily, from rural areas to mining centres for jobs',
    explanation: 'Many men travelled for mine work and later returned home periodically.',
  },
  {
    prompt: 'Why did mining companies use compounds?',
    options: [
      'To house and control workers near mines',
      'To provide free family farms to workers',
      'To train workers as school teachers',
      'To move workers to coastal ports',
    ],
    answer: 'To house and control workers near mines',
    explanation: 'Compounds were controlled living areas that managed labour and movement.',
  },
  {
    prompt: 'What does land dispossession mean?',
    options: [
      'Communities losing land through force or unfair laws',
      'Communities receiving extra land grants',
      'The voluntary exchange of sports fields',
      'The natural erosion of riverbanks only',
    ],
    answer: 'Communities losing land through force or unfair laws',
    explanation: 'Dispossession refers to losing land rights and access.',
  },
  {
    prompt: 'How did the Mineral Revolution help lay foundations for segregation?',
    options: [
      'Labour controls and unequal policies separated people by race',
      'All racial laws were removed in mining towns',
      'Mines stopped using any labour rules',
      'People were separated only by language groups',
    ],
    answer: 'Labour controls and unequal policies separated people by race',
    explanation: 'Mining-era controls influenced later segregation structures.',
  },
  {
    prompt: 'Which event happened in 1910 and shaped the political system of South Africa?',
    options: [
      'The Union of South Africa was formed',
      'The first democratic election was held',
      'The Berlin Conference began',
      'World War I ended',
    ],
    answer: 'The Union of South Africa was formed',
    explanation: 'In 1910, four colonies united to form the Union of South Africa.',
  },
  {
    prompt: 'Which statement best explains cause and consequence in this topic?',
    options: [
      'Demand for mine labour increased migrant labour systems',
      'Gold mining ended urban growth completely',
      'Compounds removed all social controls',
      'Land dispossession reduced conflict everywhere',
    ],
    answer: 'Demand for mine labour increased migrant labour systems',
    explanation: 'Mine labour demand was a major cause of expanding migrant labour.',
  },
  {
    prompt: 'A table showing mine worker numbers from 1886 to 1900 is most useful for which skill?',
    options: ['Analysing historical evidence', 'Identifying climate zones', 'Solving algebra equations', 'Classifying animal species'],
    answer: 'Analysing historical evidence',
    explanation: 'Numerical records are sources that help learners interpret historical change over time.',
  },
];

const MineralRevolutionInSouthAfrica = () => (
  <CapsSubjectTopic
    title="The Mineral Revolution in South Africa"
    subtitle="Gold mining, migrant labour, urban growth, and segregation foundations"
    learnSteps={learnSteps}
    task="gr8-mineral-revolution-in-south-africa-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default MineralRevolutionInSouthAfrica;
