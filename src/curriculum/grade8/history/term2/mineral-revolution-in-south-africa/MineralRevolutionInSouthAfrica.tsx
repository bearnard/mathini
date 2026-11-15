import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1867", "title": "Diamonds discovered", "description": "Diamonds were discovered near Kimberley, beginning large-scale mining in South Africa. This marked the start of the Mineral Revolution."},
            {"date": "1871", "title": "Kimberley mining boom", "description": "A diamond rush turned Kimberley into a fast-growing mining town. Mining capital and labour control became increasingly important."},
            {"date": "1885", "title": "Closed compounds spread", "description": "Mining companies developed closed compounds to house and control African workers near the mines. These systems restricted movement and strengthened labour discipline."},
            {"date": "1886", "title": "Witwatersrand gold discovered", "description": "Gold was discovered on the Witwatersrand, triggering a massive new mining industry. The find reshaped the South African economy and politics."},
            {"date": "1887", "title": "Johannesburg rapidly grows", "description": "Johannesburg was founded after the gold discovery and expanded with remarkable speed. It became the centre of the gold-mining industry."},
            {"date": "1910", "title": "Union of South Africa", "description": "The Union of South Africa united four colonies under one government. Mining wealth strongly influenced the new state's priorities and labour policies."},
            {"date": "1913", "title": "Natives Land Act", "description": "The Natives Land Act restricted African land ownership to limited areas. It reinforced dispossession and supported the migrant labour system used by the mines."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Mining transformed South African society',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Mineral Revolution changed South Africa through large-scale diamond and gold mining. It reshaped labour
          systems, expanded Johannesburg, intensified land dispossession, and helped lay foundations for segregation in
          the early twentieth century.
        </p>
      <div className="space-y-2">
  <p className="text-slate-600">{"Historians use numbers such as population counts or workforce tables as evidence. By comparing the figures from year to year you can see trends, such as growth or decline, and then ask what caused them."}</p>
  <p className="text-slate-600">{"Dispossession means that people lose the land they lived on and farmed, because it is taken by force or by laws that give them no fair choice, and they are left without land to farm."}</p>
  <p className="text-slate-600">{"Migrant workers leave their homes in the countryside for a period, live in compounds or hostels near the mines, and send money home. They often return home for a time and then go back to work again."}</p>
</div>
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
    options: ['Workers moving, often temporarily, to mining centres for jobs', 'Workers who permanently owned all of the mines', 'Foreign diplomats who worked in the cities only', 'Children who travelled for school exchanges'],
    answer: 'Workers moving, often temporarily, to mining centres for jobs',
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
