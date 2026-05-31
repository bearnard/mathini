import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explain climate regions and controls',
    image: {
      src: '/curriculum/grade8/geo/term2/climate-regions-in-south-africa-and-the-world/diagram.webp',
      alt: 'Grade 8 learners interpreting a climate graph and world climate map for South Africa and global regions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Climate patterns depend on latitude, altitude, ocean currents, and relief. Learners compare climate graphs,
          identify world climate regions, and connect South African regional climates to physical controls.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the difference between weather and climate?',
    options: [
      'Weather is short-term conditions; climate is long-term average patterns',
      'Weather is measured yearly; climate is measured daily',
      'Weather only happens in cities; climate only happens in rural areas',
      'Weather and climate mean exactly the same thing',
    ],
    answer: 'Weather is short-term conditions; climate is long-term average patterns',
    explanation: 'Weather changes day to day, while climate describes typical conditions over many years.',
  },
  {
    prompt: 'How does altitude usually affect temperature?',
    options: [
      'Temperature decreases as altitude increases',
      'Temperature increases as altitude increases',
      'Altitude has no effect on temperature',
      'Temperature changes only at sea level',
    ],
    answer: 'Temperature decreases as altitude increases',
    explanation: 'Higher places are generally cooler because the air is thinner and holds less heat.',
  },
  {
    prompt: 'Which ocean current contributes to cool, drier conditions on South Africa’s west coast?',
    options: ['Benguela Current', 'Agulhas Current', 'Mozambique Current', 'Brazil Current'],
    answer: 'Benguela Current',
    explanation: 'The cold Benguela Current cools the west coast and reduces evaporation and rainfall.',
  },
  {
    prompt: 'What does a climate graph usually show?',
    options: [
      'Average monthly temperature and rainfall',
      'Only wind direction and cloud type',
      'Daily soil moisture only',
      'Only sea depth and tides',
    ],
    answer: 'Average monthly temperature and rainfall',
    explanation: 'Climate graphs combine temperature and rainfall to summarise yearly patterns.',
  },
  {
    prompt: 'Which pattern matches a Mediterranean climate?',
    options: [
      'Hot, dry summers and mild, wet winters',
      'Hot, wet summers and freezing winters',
      'Heavy rain in every month',
      'Very cold and dry all year',
    ],
    answer: 'Hot, dry summers and mild, wet winters',
    explanation: 'Mediterranean regions, like parts of the Western Cape, have dry summers and wetter winters.',
  },
  {
    prompt: 'Which world climate region is typically hot and very wet throughout the year near the Equator?',
    options: ['Tropical rainforest climate', 'Polar climate', 'Mediterranean climate', 'Steppe climate'],
    answer: 'Tropical rainforest climate',
    explanation: 'Equatorial regions receive strong heating and frequent rainfall all year.',
  },
  {
    prompt: 'What is a key feature of hot desert climates?',
    options: ['Very low annual rainfall', 'Heavy snowfall every winter', 'High humidity all year', 'Dense forest cover'],
    answer: 'Very low annual rainfall',
    explanation: 'Desert climates are defined by very limited rainfall and sparse vegetation.',
  },
  {
    prompt: 'How can mountains affect rainfall on opposite slopes?',
    options: [
      'Windward slopes are wetter, and leeward slopes are drier',
      'Both slopes always receive exactly the same rainfall',
      'Leeward slopes are always wetter than windward slopes',
      'Mountains stop all rainfall in a region',
    ],
    answer: 'Windward slopes are wetter, and leeward slopes are drier',
    explanation: 'Moist air rises and cools on windward slopes, while descending air on leeward slopes is drier.',
  },
];

const ClimateRegionsInSouthAfricaAndTheWorld = () => (
  <CapsSubjectTopic
    title="Climate Regions in South Africa and the World"
    subtitle="Climate controls, climate graphs, and regional patterns"
    learnSteps={learnSteps}
    task="gr8-climate-regions-in-south-africa-and-the-world-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ClimateRegionsInSouthAfricaAndTheWorld;
