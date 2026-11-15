import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import ClimateGraph from '@/components/subjects/ClimateGraph';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { ClimatePatterns, MountainRain } from '../../../../../components/diagrams/geography/GeoPictures';
import { tempAtHeight } from '../../../../../components/diagrams/geography/geoHelpers';

// The temperature example comes from a tested helper (geoHelpers.test.ts).
const sa = (n: number) => String(n).replace('.', ',');
const t1000 = tempAtHeight(25, 1000);
const t2000 = tempAtHeight(25, 2000);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Weather, climate and climate graphs',
    content: slide(
      <>
        <Rule>
          Weather is short-term conditions; climate is long-term average patterns. A climate graph usually shows average monthly temperature and rainfall.
        </Rule>
        <ClimatePatterns />
        <Worked
          title="Read a climate graph"
          steps={[<>The bars show the average rainfall for each month and the line shows the average temperature.</>, <>A month-by-month pattern tells you the climate, because climate is the typical pattern over many years.</>, <>Today&apos;s rain or heat is weather, and it changes from day to day.</>]}
        />
        <Mistake>Calling a hot day or a rainy week the climate. Weather changes day to day. Climate describes typical conditions over many years.</Mistake>
      </>,
    ),
  },
  {
    title: 'Altitude and relief',
    content: slide(
      <>
        <Rule>
          Temperature decreases as altitude increases. Mountains also affect rainfall on opposite slopes: windward slopes are wetter and leeward slopes are drier.
        </Rule>
        <MountainRain seaTemp={25} height={2000} />
        <Worked
          title="A 2 000 m mountain near the sea"
          steps={[
            <>Temperature falls by about 6,5 °C for every 1 000 m. Starting at 25 °C at sea level, it is about {sa(t1000)} °C at 1 000 m and {sa(t2000)} °C at 2 000 m.</>,
            <>Moist air from the sea rises up the windward slope and cools, so it drops rain there.</>,
            <>The air that descends the leeward slope is drier, so that side gets less rain.</>,
          ]}
        />
        <Mistake>Believing higher places are warmer because they are closer to the Sun. Higher places are generally cooler: the air is thinner and holds less heat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Latitude and ocean currents',
    content: slide(
      <>
        <Rule>
          Climate patterns depend on latitude, altitude, ocean currents and relief. The cold Benguela Current cools the west coast of South Africa and reduces evaporation and rainfall.
        </Rule>
        <Terms
          rows={[
            ['Latitude', 'places near the Equator are heated strongly; places far from it are cooler'],
            ['Altitude', 'higher places are cooler'],
            ['Ocean current', 'the cold Benguela Current runs along the west coast; the west coast is cool and drier'],
            ['Relief', 'mountains make windward slopes wetter and leeward slopes drier'],
          ]}
        />
        <Worked
          title="Why is the west coast cool and dry?"
          steps={[<>A cold current, the Benguela, flows along the west coast.</>, <>Air over cold water is cooled, and less water evaporates from it.</>, <>So there is less moisture for rain: a cool, drier coast.</>]}
        />
        <Mistake>Thinking all of South Africa&apos;s coasts have the same climate. Ocean currents make the west coast cooler and drier than the east.</Mistake>
      </>,
    ),
  },
  {
    title: 'Three world climate regions',
    content: slide(
      <>
        <Rule>
          A tropical rainforest climate is hot and very wet throughout the year near the Equator. A hot desert has very low annual rainfall. A Mediterranean climate has hot, dry summers and mild, wet winters.
        </Rule>
        <Terms
          rows={[
            ['Tropical rainforest', 'near the Equator: strong heating and frequent rainfall all year'],
            ['Hot desert', 'very limited rainfall and sparse vegetation'],
            ['Mediterranean', 'hot, dry summers and mild, wet winters, as in parts of the Western Cape'],
          ]}
        />
        <Worked
          title="Match the pattern to the region"
          steps={[<>Hot and very wet in every month: tropical rainforest.</>, <>Very little rain in any month, with sparse plants: hot desert.</>, <>Dry summers with wetter winters: Mediterranean. In the Western Cape, the wet season is the winter.</>]}
        />
        <Mistake>Thinking a desert is always hot in every season and always sand. The key feature is very low annual rainfall.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the difference between weather and climate? What does a climate graph usually show?</li>
            <li>How does altitude usually affect temperature? How can mountains affect rainfall on opposite slopes?</li>
            <li>Which ocean current contributes to cool, drier conditions on South Africa&apos;s west coast?</li>
            <li>Which pattern matches a Mediterranean climate? Which region is hot and very wet throughout the year near the Equator? What is a key feature of hot deserts?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Weather is short-term conditions; climate is long-term average patterns. Average monthly temperature and rainfall.</li>
            <li>Temperature decreases as altitude increases. Windward slopes are wetter, and leeward slopes are drier.</li>
            <li>The Benguela Current.</li>
            <li>Hot, dry summers and mild, wet winters. Tropical rainforest climate. Very low annual rainfall.</li>
          </ol>
        }
      />,
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
