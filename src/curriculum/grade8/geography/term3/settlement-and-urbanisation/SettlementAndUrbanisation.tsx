import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Investigate settlement and urbanisation',
    image: {
      src: '/curriculum/grade8/geo/term3/settlement-and-urbanisation/diagram.webp',
      alt: 'Grade 8 learners comparing rural and urban settlement patterns using aerial photos and maps',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Settlement geography studies where people live, how land is used, and why places grow. Urbanisation links
          migration, services, jobs, and historical processes that shaped South African towns and cities.
        </p>
      </div>
    ),
  },
  {
    title: 'Urbanisation Data — South Africa Over Time',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Urbanisation means the growth of towns and cities as a share of the total population. South Africa has become steadily more urban over the last few decades.</p>
        <DataChart
          data={[
                        { year: 1990, urbanRate: 52 },
                        { year: 2000, urbanRate: 57 },
                        { year: 2010, urbanRate: 62 },
                        { year: 2023, urbanRate: 68 },
                      ]}
          xKey="year"
          series={[
                        { key: 'urbanRate', label: 'Urban population (%)', type: 'line', color: '#06b6d4' },
                      ]}
          type="line"
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Urban growth changes land use, increases transport demand, and creates both opportunities and planning challenges.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an urban settlement?',
    options: [
      'A town or city with high population density and many services',
      'A remote area with mainly subsistence farming',
      'A temporary campsite used for holidays only',
      'A protected natural area with no residents',
    ],
    answer: 'A town or city with high population density and many services',
    explanation: 'Urban settlements are built-up places with many people, jobs, and facilities.',
  },
  {
    prompt: 'Which feature is most typical of a rural settlement?',
    options: ['Low population density and larger areas of open land', 'Many high-rise office blocks in a small area', 'Heavy daily traffic jams on the main roads', 'Large CBD shopping districts with many stores'],
    answer: 'Low population density and larger areas of open land',
    explanation: 'Rural areas generally have fewer people and more open space.',
  },
  {
    prompt: 'What is the CBD in a city?',
    options: ['The central business district, where services and firms cluster', 'The farming zone of the city where livestock graze', 'The mountain catchment area above the city', 'The outer belt of low-density housing only'],
    answer: 'The central business district, where services and firms cluster',
    explanation: 'The CBD is the commercial core of most cities.',
  },
  {
    prompt: 'What is an aerial photograph?',
    options: [
      'An image of Earth’s surface taken from above',
      'A drawing of tectonic plates underground',
      'A weather report written by hand',
      'A cross-section of soil horizons',
    ],
    answer: 'An image of Earth’s surface taken from above',
    explanation: 'Aerial photos help geographers identify land use and settlement patterns.',
  },
  {
    prompt: 'Which is a common push factor for moving from rural to urban areas?',
    options: ['Lack of local job opportunities', 'More urban parks', 'Better public transport', 'Higher number of universities'],
    answer: 'Lack of local job opportunities',
    explanation: 'People are often pushed to leave when livelihoods are limited in rural areas.',
  },
  {
    prompt: 'Which is a pull factor attracting people to cities?',
    options: ['More jobs and service opportunities', 'Less access to healthcare services', 'Reduced access to schools in the area', 'Fewer transport links to other places'],
    answer: 'More jobs and service opportunities',
    explanation: 'Cities often attract migrants because they offer jobs and broader services.',
  },
  {
    prompt: 'What is one effect of rapid urbanisation when planning does not keep pace?',
    options: ['Growth of informal settlements', 'Decrease in population size', 'Loss of all transport routes', 'Immediate elimination of housing demand'],
    answer: 'Growth of informal settlements',
    explanation: 'When housing and services lag behind migration, informal settlements can expand.',
  },
  {
    prompt: 'How did apartheid-era planning affect South African urban areas?',
    options: [
      'It created unequal and separated residential spaces',
      'It removed all travel restrictions immediately',
      'It made all services equally available in every area',
      'It stopped migration completely',
    ],
    answer: 'It created unequal and separated residential spaces',
    explanation: 'Apartheid policies enforced spatial separation and long-term inequality in cities.',
  },
];

const SettlementAndUrbanisation = () => (
  <CapsSubjectTopic
    title="Settlement and Urbanisation"
    subtitle="Settlement patterns, land use, migration, and urban change"
    learnSteps={learnSteps}
    task="gr8-settlement-and-urbanisation-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SettlementAndUrbanisation;
