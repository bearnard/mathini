import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { CityZones, SettlementPatterns } from '../../../../../components/diagrams/geography/GeoPictures';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { URBANISATION_STEPS } from '../../../../../components/diagrams/geography/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Urban and rural settlements',
    content: slide(
      <>
        <Rule>
          An urban settlement is a town or city with high population density and many services. A rural settlement typically has low population density and larger areas of open land.
        </Rule>
        <SettlementPatterns />
        <Compare
          left={{ title: 'Urban', tone: 'sky', rows: ['many people close together', 'many jobs and services', 'built-up land'] }}
          right={{ title: 'Rural', tone: 'emerald', rows: ['few people', 'more open space', 'farms, villages and open land'] }}
        />
        <Worked
          title="Classify two places"
          steps={[<>A place with thousands of people, shops, schools and clinics close together is urban.</>, <>A few homesteads spread across farmland is rural.</>, <>Settlement patterns can be clustered, in a line, or spread out.</>]}
        />
        <Mistake>Judging by the name. A &quot;town&quot; with a few houses is small, but what makes a place urban is the high density and many services.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inside a city and aerial photographs',
    content: slide(
      <>
        <Rule>
          The CBD is the central business district, where services and firms cluster. An aerial photograph is an image of Earth&apos;s surface taken from above. Aerial photos help geographers identify land use and settlement patterns.
        </Rule>
        <CityZones />
        <Worked
          title="Read an aerial photograph"
          steps={[<>Find the CBD: the commercial core, with big buildings close together.</>, <>Look for the residential areas around it.</>, <>Look for open land at the edge: land use changes from the centre outward.</>]}
        />
        <Mistake>Thinking the CBD is the biggest suburb. The CBD is the commercial core, where services and firms cluster.</Mistake>
      </>,
    ),
  },
  {
    title: 'Push and pull factors',
    content: slide(
      <>
        <Rule>
          People are pushed to leave when livelihoods are limited in rural areas, for example by a lack of local job opportunities. Cities pull people with more jobs and service opportunities.
        </Rule>
        <FlowDiagram
          id="pp"
          title="Push and pull factors"
          desc="Push factors, such as a lack of local jobs, push people out of rural areas. Pull factors, such as more jobs and services, pull them to cities."
          nodes={[
            { id: 'rural', label: 'rural area', x: 34, y: 54, color: '#6ee7b7' },
            { id: 'city', label: 'city', x: 126, y: 54, color: '#7dd3fc' },
          ]}
          edges={[
            { from: 'rural', to: 'city', label: 'push: few jobs here', bend: -4, lx: 80, ly: 40 },
            { from: 'rural', to: 'city', label: 'pull: more jobs, more services', bend: 4, lx: 80, ly: 74 },
          ]}
        />
        <Worked
          title="Sort the reasons for moving"
          steps={[<>Lack of local job opportunities: a push factor.</>, <>More jobs and service opportunities in the city: a pull factor.</>, <>Often both work together: a push from home and a pull to the city.</>]}
        />
        <Mistake>Mixing up push and pull. A push is about what is wrong at home; a pull is what attracts people to the new place.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rapid urbanisation and planning',
    content: slide(
      <>
        <Rule>
          When rapid urbanisation is not matched by planning, informal settlements can grow. Apartheid-era planning created unequal and separated residential spaces in South African cities.
        </Rule>
        <NumberedSteps steps={URBANISATION_STEPS} tone="amber" label="When growth outpaces planning" />
        <Worked
          title="Explain two causes of city patterns"
          steps={[<>Migration brought many people to the city, but housing and services lagged behind. Informal settlements expanded.</>, <>Apartheid policies enforced spatial separation, which left long-term inequality in cities.</>, <>Both explain patterns we still see in the layout of South African cities.</>]}
        />
        <Mistake>Blaming people for living in informal settlements. They are the result of housing and services lagging behind migration.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is an urban settlement? Which feature is most typical of a rural settlement?</li>
            <li>What is the CBD in a city? What is an aerial photograph?</li>
            <li>Give a push factor for moving from rural to urban areas and a pull factor attracting people to cities.</li>
            <li>What is one effect of rapid urbanisation when planning does not keep pace? How did apartheid-era planning affect South African urban areas?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A town or city with high population density and many services. Low population density and larger areas of open land.</li>
            <li>The central business district, where services and firms cluster. An image of Earth&apos;s surface taken from above.</li>
            <li>Push: lack of local job opportunities. Pull: more jobs and service opportunities.</li>
            <li>Growth of informal settlements. It created unequal and separated residential spaces.</li>
          </ol>
        }
      />,
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
