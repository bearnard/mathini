import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand economic systems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Economies operate through different systems: planned (centrally controlled), market (supply and demand), 
          and mixed (combination). Each shapes how resources are produced, distributed and consumed.
        </p>
      </div>
    ),
  },
  {
    title: 'Explore the circular flow model',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The circular flow shows how households, businesses and government interact. Money flows from consumers to 
          producers; goods and services flow back. Government taxes fund public services and regulations.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply factors of production',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Land, labour, capital and entrepreneurship are the foundation of all economic activity. Understanding these 
          factors helps explain how goods are made and why economies grow or decline.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a planned economy?',
    options: ['Government controls production and distribution', 'Supply and demand determine prices', 'Individuals decide what to produce', 'Markets operate freely without rules'],
    answer: 'Government controls production and distribution',
    explanation: 'In planned economies, the state makes economic decisions centrally.',
  },
  {
    prompt: 'In a market economy, what determines prices?',
    options: ['Supply and demand', 'Government decree', 'Historical tradition', 'Random selection'],
    answer: 'Supply and demand',
    explanation: 'Market economies rely on the interaction of buyers and sellers to set prices.',
  },
  {
    prompt: 'What does the circular flow model show?',
    options: ['Money and goods flowing between households, businesses and government', 'Only the flow of money between banks and government', 'Only how goods are made, stored and sold in shops', 'How a country moves its imports and exports across borders'],
    answer: 'Money and goods flowing between households, businesses and government',
    explanation: 'The circular flow illustrates economic interdependence and resource exchange.',
  },
  {
    prompt: 'Which is a factor of production?',
    options: ['Land, labour, capital and entrepreneurship', 'Profit, interest, rent and wages paid out', 'Taxes, subsidies, grants and levies set by government', 'Savings, loans, shares and bonds held by households'],
    answer: 'Land, labour, capital and entrepreneurship',
    explanation: 'These four factors are essential inputs for all production.',
  },
  {
    prompt: 'Why do mixed economies combine planned and market elements?',
    options: ['To balance efficiency with social welfare and stability', 'To give government full control of prices and wages', 'To let private firms decide everything with no rules', 'To make sure every person earns exactly the same pay'],
    answer: 'To balance efficiency with social welfare and stability',
    explanation: 'Mixed economies use market forces while government provides oversight and services.',
  },
  {
    prompt: 'What role does the global economy play for South Africa?',
    options: ['Provides trading partners, investment opportunities and commodity markets', 'Sets the price of local goods and fixes the wages of workers', 'Only trades with the countries that border South Africa', 'Gives all of its trade to one large foreign partner'],
    answer: 'Provides trading partners, investment opportunities and commodity markets',
    explanation: 'South Africa participates in global trade networks affecting prices and employment.',
  },
  {
    prompt: 'Which statement shows understanding of the circular flow?',
    options: ['Workers earn wages that they spend on goods, supporting businesses and jobs', 'Households save all their income so that firms get none', 'Businesses sell goods without paying for any workers', 'Government spends tax money without any effect on firms'],
    answer: 'Workers earn wages that they spend on goods, supporting businesses and jobs',
    explanation: 'The circular flow demonstrates continuous economic interdependence.',
  },
  {
    prompt: 'How do factors of production relate to economic growth?',
    options: ['Better use of land, labour, capital and entrepreneurship increases productivity', 'Growth depends on luck and the weather more than on inputs', 'Using more resources always cuts the growth of an economy', 'Only the owners of land help an economy to grow'],
    answer: 'Better use of land, labour, capital and entrepreneurship increases productivity',
    explanation: 'Efficient use of resources drives economic development.',
  },
];

const EconomicSystemsCircularFlow = () => (
  <CapsSubjectTopic
    title="Economic Systems and Circular Flow"
    subtitle="Planned, market and mixed economies; circular flow; factors of production"
    learnSteps={learnSteps}
    task="gr9-economic-systems-circular-flow-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default EconomicSystemsCircularFlow;
