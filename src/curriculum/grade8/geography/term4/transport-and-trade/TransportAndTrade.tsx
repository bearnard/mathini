import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { EXPORT_STEPS } from '../../../../../components/diagrams/geography/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Why countries trade',
    content: slide(
      <>
        <Rule>
          Countries trade because no country can make everything it needs. An import is a product bought from another country. An export is a product sold to another country.
        </Rule>
        <FlowDiagram
          id="trade"
          title="Imports and exports"
          desc="Goods leave South Africa as exports and are bought by another country. Goods come into South Africa from abroad as imports."
          nodes={[
            { id: 'sa', label: 'South Africa', x: 34, y: 54, color: '#6ee7b7' },
            { id: 'other', label: 'another country', x: 126, y: 54, color: '#7dd3fc' },
          ]}
          edges={[
            { from: 'sa', to: 'other', label: 'exports: sold abroad', bend: -4, lx: 80, ly: 26 },
            { from: 'other', to: 'sa', label: 'imports: bought from abroad', bend: -4, lx: 80, ly: 88 },
          ]}
        />
        <Worked
          title="Name the trade"
          steps={[<>South African oranges sold in another country are exports for South Africa.</>, <>Oil that South Africa buys from abroad is an import.</>, <>Trade lets countries get goods they cannot produce efficiently themselves.</>]}
        />
        <Mistake>Mixing up imports and exports. Exports leave the country; imports enter it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transport modes',
    content: slide(
      <>
        <Rule>
          Different transport modes suit different goods. Rail usually suits heavy bulk goods that must travel far over land. Air transport is usually preferred when goods are high-value, light or urgently needed.
        </Rule>
        <Terms
          rows={[
            ['Rail', 'efficient for large, heavy loads over long inland distances'],
            ['Road', 'flexible: goes door to door and links places that have no railway'],
            ['Air', 'fast but costly, so it suits urgent or high-value cargo'],
            ['Sea', 'moves very large amounts between countries'],
          ]}
        />
        <Worked
          title="Choose a transport mode"
          steps={[<>Thousands of tonnes of coal from inland to a port: rail.</>, <>A small parcel of medicine that is needed tomorrow: air, because it is light, valuable and urgent.</>, <>A delivery to a shop with no railway: road.</>]}
        />
        <Mistake>Thinking air is always best because it is fastest. It is costly, so it only suits urgent or high-value cargo.</Mistake>
      </>,
    ),
  },
  {
    title: 'Harbours and networks',
    content: slide(
      <>
        <Rule>
          Transport networks link producers, markets and ports so goods move easily. Durban Harbour is one of the busiest container ports in South Africa.
        </Rule>
        <NumberedSteps steps={EXPORT_STEPS} tone="teal" label="From producer to foreign buyer" />
        <Worked
          title="Follow a container of fruit"
          steps={[<>Fruit is packed on the farm and trucked or railed to the harbour.</>, <>At a major port such as Durban, large container volumes are handled and loaded onto ships.</>, <>Roads, railways, ports and airports together enable reliable movement through supply chains.</>]}
        />
        <Mistake>Thinking a harbour works alone. It only works when roads and railways connect it to producers and markets.</Mistake>
      </>,
    ),
  },
  {
    title: 'Commuter transport',
    content: slide(
      <>
        <Rule>
          Urban commuter transport is the daily travel of people between home, school or work. Commuter transport supports regular movement within and around cities.
        </Rule>
        <Terms
          rows={[
            ['Commuter', 'a person who travels regularly between home and school or work'],
            ['Examples', 'buses, trains and minibus taxis'],
            ['Why it matters', 'it links where people live to where they study and work'],
          ]}
        />
        <Worked
          title="A learner's daily trip"
          steps={[<>She walks to a taxi rank, then takes a minibus taxi to school.</>, <>Her father catches a train to work.</>, <>These are daily trips between home, school and work, so they are commuter transport.</>]}
        />
        <Mistake>Mixing up commuter transport and freight. Commuter transport moves people, and freight moves goods.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why do countries buy and sell goods across borders? What is an import? What is an export?</li>
            <li>Which transport mode is best for hauling heavy bulk goods across the country by land?</li>
            <li>Name a busy South African container port. How do roads, rail and ports help trade?</li>
            <li>How would you describe commuter transport in a city? When would a business send goods by air?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Because no country can make everything it needs. A product bought from another country. A product sold to another country.</li>
            <li>Rail transport.</li>
            <li>Durban Harbour. They link producers, markets and ports so goods move easily.</li>
            <li>Daily travel by people between home, school or work. When goods are high-value, light or urgently needed.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do countries trade with one another?',
    options: ['Because no country can make everything it needs', 'Because trade removes all of the costs of transport', 'Because imports are always free of any charge', 'Because climate has no effect on what is produced'],
    answer: 'Because no country can make everything it needs',
    explanation: 'Trade allows countries to access goods they cannot produce efficiently themselves.',
  },
  {
    prompt: 'What is an import?',
    options: [
      'A product bought from another country',
      'A product sold to another country',
      'A local product sold in the same town',
      'A product moved from one classroom to another',
    ],
    answer: 'A product bought from another country',
    explanation: 'Imports enter a country from abroad.',
  },
  {
    prompt: 'What is an export?',
    options: [
      'A product sold to another country',
      'A product bought from another country',
      'A product used only by farmers',
      'A product that cannot be transported',
    ],
    answer: 'A product sold to another country',
    explanation: 'Exports leave a country to be sold in foreign markets.',
  },
  {
    prompt: 'Which transport mode is usually best for moving heavy bulk goods over long distances on land?',
    options: ['Rail transport', 'Air transport', 'Private car transport', 'Bicycle transport'],
    answer: 'Rail transport',
    explanation: 'Rail is efficient for large, heavy loads over long inland distances.',
  },
  {
    prompt: 'Which South African harbour is one of the busiest container ports?',
    options: ['Durban Harbour', 'Kimberley Harbour', 'Bloemfontein Harbour', 'Polokwane Harbour'],
    answer: 'Durban Harbour',
    explanation: 'Durban is a major South African port handling large container volumes.',
  },
  {
    prompt: 'Which option best describes urban commuter transport?',
    options: [
      'Daily travel by people between home, school, or work',
      'Shipping minerals between continents by cargo ship',
      'Only emergency rescue flights',
      'Transport used once a year for holidays',
    ],
    answer: 'Daily travel by people between home, school, or work',
    explanation: 'Commuter transport supports regular movement within and around cities.',
  },
  {
    prompt: 'When is air transport usually preferred for trade?',
    options: [
      'When goods are high-value, light, or urgently needed',
      'When transporting coal in very large volumes',
      'When no airports exist in either country',
      'When goods are not time-sensitive',
    ],
    answer: 'When goods are high-value, light, or urgently needed',
    explanation: 'Air freight is fast but costly, so it suits urgent or high-value cargo.',
  },
  {
    prompt: 'How do transport networks support trade?',
    options: ['They link producers, markets and ports so goods move easily', 'They stop goods from reaching the markets', 'They remove the need for imports and exports', 'They help movement within one suburb only'],
    answer: 'They link producers, markets and ports so goods move easily',
    explanation: 'Roads, railways, ports, and airports enable reliable movement through supply chains.',
  },
];

const TransportAndTrade = () => (
  <CapsSubjectTopic
    title="Transport and Trade"
    subtitle="Modes of transport, imports and exports, harbours, and commuter systems"
    learnSteps={learnSteps}
    task="gr8-transport-and-trade-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default TransportAndTrade;
