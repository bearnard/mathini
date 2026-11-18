import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as b from '../../../../../components/diagrams/business10/bus10';

// Numbers come from bus10.ts (tested in bus10.test.ts and g10BsGaps.test.ts). All data are imaginary teaching data; Acts are named only as areas of law.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const totals = b.SITES.map((s) => b.siteTotal(s.scores));

export const learnSteps: LearnStep[] = [
  {
    title: 'Why location matters',
    content: slide(
      <>
        <Rule>A business location decision is the choice of the place where the business will operate. A good location lowers costs and makes it easy to reach customers, workers and suppliers, and a poor location can cause a business to fail. The decision is expensive to change, so it needs careful investigation and debate.</Rule>
        <FactCards
          cards={[
            { title: 'Costs', line1: 'rent, transport and', line2: 'services' },
            { title: 'Customers', line1: 'can they reach', line2: 'the business?' },
            { title: 'Supply', line1: 'raw materials and', line2: 'workers nearby' },
            { title: 'Long term', line1: 'hard and costly', line2: 'to move later' },
          ]}
          aria="Why location matters. Costs: rent, transport and services. Customers: can they reach the business. Supply: raw materials and workers nearby. Long term: hard and costly to move later."
        />
        <Worked
          title="Spot the problem"
          steps={[
            'A bakery opens far from any homes or roads and has few customers.',
            'Its delivery costs are high and its workers need transport.',
            'A better location would have saved the owner money and brought more customers.',
          ]}
        />
        <Mistake>Choosing a location only because it is cheap. The cheapest site may have high transport costs or few customers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Factors that affect the location',
    content: slide(
      <>
        <Rule>Factors that affect location include labour regulations and the labour market, transport and infrastructure, the availability and cost of electricity and water, the potential market, raw materials, climate, government and local regulations, taxes, environmental factors and crime. Which factors matter most depends on the kind of business.</Rule>
        <InfoTable
          cols={[{ title: 'Factor', w: 34 }, { title: 'What to ask', w: 66 }]}
          rows={[
            ['Transport, infrastructure', 'Are there roads, rail, a port or an airport?'],
            ['Electricity and water', 'Is the supply reliable and affordable?'],
            ['Market and raw materials', 'Are customers and suppliers close?'],
            ['Labour and regulations', 'Are skilled workers and permits available?'],
            ['Crime and taxes', 'Is the area safe, and what taxes apply?'],
          ]}
          aria="A table of location factors. Transport and infrastructure: are there roads, rail, a port or an airport. Electricity and water: is the supply reliable and affordable. Market and raw materials: are customers and suppliers close. Labour and regulations: are skilled workers and permits available. Crime and taxes: is the area safe and what taxes apply."
        />
        <Worked
          title="Match the business to the factor"
          steps={[
            'A factory that makes heavy goods: transport and infrastructure matter most.',
            'A bakery or a hair salon: a nearby market of customers matters most.',
            'A farm: climate, water and the soil matter most.',
          ]}
        />
        <Mistake>Using the same list of factors for every business. A factory, a shop and a farm have different priorities.</Mistake>
      </>,
    ),
  },
  {
    title: 'Weighing up the sites',
    content: slide(
      <>
        <Rule>To compare sites fairly, give each factor a weight for its importance and score each site out of 5 on each factor. Multiply each score by the weight and add the results. The site with the highest total is the best choice on these factors, and the result should still be checked with other information.</Rule>
        <InfoTable
          cols={[{ title: 'Site', w: 24 }, { title: 'Trans.', w: 15 }, { title: 'Labour', w: 16 }, { title: 'Power', w: 16 }, { title: 'Crime', w: 15 }, { title: 'Total', w: 14 }]}
          rows={[['Weight', ...b.FACTORS.map((f) => `×${f.weight}`), ''], ...b.SITES.map((s, i) => [s.name.split(' ')[0] + ' ' + s.name.split(' ')[1], ...s.scores.map(String), String(totals[i])])]}
          aria={`A weighted scoring table for four factors with weights ${b.FACTORS.map((f) => `${f.name} ${f.weight}`).join(', ')}. Totals out of ${b.maxScore()}: ${b.SITES.map((s, i) => `${s.name} ${totals[i]}`).join(', ')}.`}
        />
        <Worked
          title="Calculate the totals"
          steps={[
            `Site A: ${b.SITES[0].scores.map((s, i) => `${s}×${b.FACTORS[i].weight}`).join(' + ')} = ${totals[0]}.`,
            `Site B: ${b.SITES[1].scores.map((s, i) => `${s}×${b.FACTORS[i].weight}`).join(' + ')} = ${totals[1]}.`,
            `Site C: ${b.SITES[2].scores.map((s, i) => `${s}×${b.FACTORS[i].weight}`).join(' + ')} = ${totals[2]}. The highest total, ${Math.max(...totals)} out of ${b.maxScore()}, is ${b.bestSite().name}.`,
          ]}
        />
        <Mistake>Adding the scores without the weights. A factor that matters more must count more in the total.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name three factors that affect the location of a business.</>,
          <>Which factor matters most for a factory that makes heavy goods?</>,
          <>Why do you give each factor a weight?</>,
          <>A site scores 3, 4 on two factors with weights 2 and 3. What is the weighted total?</>,
        ]}
        answers={[
          <>For example transport, electricity and water, and the market.</>,
          <>Transport and infrastructure.</>,
          <>Because some factors matter more than others.</>,
          <>3 × 2 + 4 × 3 = {3 * 2 + 4 * 3}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a business location decision?",
    options: ["The choice of a business name", "The choice of a single owner", "The choice of where it will operate", "The choice of a new logo"],
    answer: "The choice of where it will operate",
    explanation: "It is costly to change later.",
  },
  {
    prompt: "Why is the location of a business important?",
    options: ["It affects costs and access to customers", "It has no effect on profits", "It decides the colour of a logo", "It decides the tax number"],
    answer: "It affects costs and access to customers",
    explanation: "A poor location can make a business fail.",
  },
  {
    prompt: "Which factor matters most for a factory that makes heavy goods?",
    options: ["A nearby cinema or theatre", "A scenic view of mountains", "A sports field for the staff", "Transport and infrastructure"],
    answer: "Transport and infrastructure",
    explanation: "Heavy goods need roads and rail.",
  },
  {
    prompt: "Which factor matters most for a hair salon?",
    options: ["Raw materials from a farm", "Customers living close by", "A harbour for large ships", "Cheap farmland for sheep"],
    answer: "Customers living close by",
    explanation: "A salon needs people close by.",
  },
  {
    prompt: "Which is a factor that affects location?",
    options: ["The colour of the walls inside", "Cost and supply of power and water", "The age of the business owner", "The name of the street outside"],
    answer: "Cost and supply of power and water",
    explanation: "Reliable services reduce costs.",
  },
  {
    prompt: "Which two factors are linked to safety and law?",
    options: ["Colours and fonts used", "Music and films shown", "Holidays and school sport", "Crime and regulations"],
    answer: "Crime and regulations",
    explanation: "Both can affect where a business may operate.",
  },
  {
    prompt: "What does \"potential market\" mean for a location?",
    options: ["How many customers could buy there", "The cost of the rent per month", "The length of the nearest road", "The age of the business owner"],
    answer: "How many customers could buy there",
    explanation: "A bigger market means more possible sales.",
  },
  {
    prompt: "Why is the cheapest site not always the best?",
    options: ["It always has the very best workers", "It never has any taxes to pay", "It may have costly transport and few buyers", "It is always close to the port"],
    answer: "It may have costly transport and few buyers",
    explanation: "Weigh up all the factors.",
  },
  {
    prompt: "Why do you give each factor a weight when comparing sites?",
    options: ["All of the factors are equal", "Weights are always just 1", "Weights lower all the scores", "Some factors matter more"],
    answer: "Some factors matter more",
    explanation: "A more important factor must count more.",
  },
  {
    prompt: "A site scores 4 on transport (weight 3) and 3 on labour (weight 2). What is the weighted total?",
    options: ["7", "18", "14", "24"],
    answer: "18",
    explanation: "4 x 3 + 3 x 2 = 18.",
  },
  {
    prompt: "Four factors have weights 3, 2, 3 and 2. What is the highest possible total if each is scored out of 5?",
    options: ["50", "10", "25", "20"],
    answer: "50",
    explanation: "5 x (3 + 2 + 3 + 2) = 50.",
  },
  {
    prompt: "Site A scores 34, Site B 46 and Site C 29 out of 50. Which is the best choice on these factors?",
    options: ["Site A", "Site C", "Site B", "They are equal"],
    answer: "Site B",
    explanation: "The highest weighted total is best.",
  },
  {
    prompt: "A bakery opens far from homes and roads. Which problem is likely?",
    options: ["Too many customers to serve", "Extremely low running costs", "Few customers, high delivery costs", "Free transport for the stock"],
    answer: "Few customers, high delivery costs",
    explanation: "The location suits neither buyers nor suppliers.",
  },
  {
    prompt: "Which factor is mostly about a farm's location?",
    options: ["Climate, water and soil", "A taxi rank", "A shopping centre", "A cinema"],
    answer: "Climate, water and soil",
    explanation: "Different businesses have different priorities.",
  },
];

const BusinessLocation = () => (
  <CapsSubjectTopic
    title="Business Location Decision"
    subtitle="Why location matters, the factors that affect it and weighing up the sites"
    learnSteps={learnSteps}
    task="gr10-business-location-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default BusinessLocation;
