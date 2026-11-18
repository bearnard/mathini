import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Factors that affect development',
    content: slide(
      <>
        <Rule>Development is how far the people of a country can meet their needs and improve their lives. Many factors help or hold back a country: its access to resources, its energy supply, its history, its trade, how fast its population grows, the education and training of its people, limits on its natural resources and damage to its environment.</Rule>
        <FactCards
          cards={[
            { title: 'Resources', line1: 'minerals, water, land', line2: 'and how they are used' },
            { title: 'Energy', line1: 'reliable power for', line2: 'factories and homes' },
            { title: 'History', line1: 'colonial rule and', line2: 'unequal laws' },
            { title: 'Skills', line1: 'education and training', line2: 'of the workforce' },
          ]}
          aria="Four factors that affect development. Resources: minerals, water and land and how they are used. Energy: reliable power for factories and homes. History: colonial rule and unequal laws. Skills: education and training of the workforce."
        />
        <Worked
          title="Match the factor"
          steps={[
            'Frequent power cuts stop a factory from working: energy.',
            'A country exports only raw cotton and cannot make cloth: skills and technology.',
            'Roads and railways built only to carry minerals to a port: history.',
          ]}
        />
        <Mistake>Thinking that one factor explains why a country is poor. The factors work together and each one can make the others better or worse.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trade imbalances and population growth',
    content: slide(
      <>
        <Rule>A trade imbalance exists when a country's imports are worth more than its exports, so it has a trade deficit and must borrow or sell assets to pay. Population growth also matters: when the population grows as fast as the economy, the income per person does not rise. The rule of 70 gives the years a population takes to double: 70 divided by the growth rate in percent.</Rule>
        <PairBars title="Trade in billions of rand" aLabel="exports" a={g.TRADE.exports} bLabel="imports" b={g.TRADE.imports} unit="billion rand" verdict={`deficit of R${-g.tradeBalance()} billion`} />
        <Worked
          title="Work out the effect"
          steps={[
            `Trade balance = exports − imports = ${g.TRADE.exports} − ${g.TRADE.imports} = R${g.tradeBalance()} billion, a deficit.`,
            `A population growing at 2% a year doubles in about 70 ÷ 2 = ${g.doublingYears(2)} years.`,
            `If the economy grows 3% and the population 2%, income per person grows by about ${g.perCapitaGrowthApprox(3, 2)}% a year.`,
          ]}
        />
        <Mistake>Reading a deficit of R12 billion as a profit because the number is large. Imports are greater than exports, so money flows out of the country.</Mistake>
      </>,
    ),
  },
  {
    title: 'Natural resource limits and environmental damage',
    content: slide(
      <>
        <Rule>A country with few natural resources, or whose resources are running out, has less to sell and to use. Damage such as soil erosion, pollution and the loss of forests makes development harder to keep going, because it lowers the future income of the land. The factors are linked: poor education lowers skills, which keeps incomes low, which leaves little money for schools or clean energy.</Rule>
        <FactCards
          cards={[
            { title: 'Limits', line1: 'a resource may run', line2: 'out or be too costly' },
            { title: 'Damage', line1: 'erosion and pollution', line2: 'lower future income' },
            { title: 'Link', line1: 'low skills keep', line2: 'incomes low' },
            { title: 'Result', line1: 'a cycle that is hard', line2: 'to break' },
          ]}
          aria="Natural resource limits and environmental damage. Limits: a resource may run out or be too costly. Damage: erosion and pollution lower future income. Link: low skills keep incomes low. Result: a cycle that is hard to break."
        />
        <Worked
          title="Follow the links"
          steps={[
            'Overused farmland loses its topsoil and yields fall.',
            'Farm income falls, so families cannot pay school fees.',
            'Fewer skilled workers means that the country stays poor, and the pressure on the land grows.',
          ]}
        />
        <Mistake>Treating each factor on its own. In an answer, show how one factor affects another.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A country exports goods worth R{g.TRADE.exports} billion and imports goods worth R{g.TRADE.imports} billion. What is its trade balance?</>,
          <>How long does a population growing at 2% a year take to double?</>,
          <>Name two factors that affect development.</>,
          <>Why is it a mistake to blame one factor only?</>,
        ]}
        answers={[
          <>A deficit of R{-g.tradeBalance()} billion.</>,
          <>About {g.doublingYears(2)} years.</>,
          <>For example energy and education.</>,
          <>The factors are linked and work together.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Frequent power cuts close a factory for days. Which factor affecting development is this?",
    options: ["Colonial history", "Population growth", "Energy supply", "Trade barriers"],
    answer: "Energy supply",
    explanation: "Without reliable power, industry cannot work.",
  },
  {
    prompt: "A country's roads and railways run only from its mines to the ports. Which factor explains this?",
    options: ["Its history", "Its climate", "Its population growth", "Its education system"],
    answer: "Its history",
    explanation: "Colonial rule built transport to carry out minerals.",
  },
  {
    prompt: "A country exports goods worth R84 billion and imports goods worth R96 billion. What is its trade balance?",
    options: ["A surplus of R12 billion", "A surplus of R180 billion", "A deficit of R180 billion", "A deficit of R12 billion"],
    answer: "A deficit of R12 billion",
    explanation: "84 − 96 = −12, so imports are greater than exports.",
  },
  {
    prompt: "What does a trade deficit mean for a country?",
    options: ["It sells more than it buys abroad", "It buys more than it sells abroad", "It has no foreign trade", "It has no imports"],
    answer: "It buys more than it sells abroad",
    explanation: "Imports exceed exports, so money flows out.",
  },
  {
    prompt: "Using the rule of 70, how long does a population growing at 2% a year take to double?",
    options: ["14 years", "35 years", "70 years", "140 years"],
    answer: "35 years",
    explanation: "The doubling time is 70 ÷ 2 = 35 years.",
  },
  {
    prompt: "Using the rule of 70, how long does a population growing at 3,5% a year take to double?",
    options: ["24 years", "35 years", "245 years", "20 years"],
    answer: "20 years",
    explanation: "The doubling time is 70 ÷ 3,5 = 20 years.",
  },
  {
    prompt: "The economy grows by 3% a year and the population by 2%. By about how much does income per person grow?",
    options: ["About 1% a year", "About 5% a year", "About 3% a year", "About 6% a year"],
    answer: "About 1% a year",
    explanation: "3 − 2 = 1, so income per person grows slowly.",
  },
  {
    prompt: "Why can fast population growth hold back development?",
    options: ["It always raises incomes", "It lowers the need for schools", "Income per person grows slowly", "It removes the need for energy"],
    answer: "Income per person grows slowly",
    explanation: "If people increase as fast as output, there is little gain per person.",
  },
  {
    prompt: "How does a poorly educated workforce hold back development?",
    options: ["It lowers the imports of a country", "It raises the supply of power", "It removes the need for trade", "It limits the skills for industry"],
    answer: "It limits the skills for industry",
    explanation: "Low skills keep production and incomes low.",
  },
  {
    prompt: "Which is a natural resource limitation?",
    options: ["A school with few teachers", "A mineral that is running out", "A road in poor repair", "A high rate of unemployment"],
    answer: "A mineral that is running out",
    explanation: "Resources that run out limit what a country can sell.",
  },
  {
    prompt: "How does soil erosion hold back development?",
    options: ["It lowers future farm income", "It raises farm yields", "It cuts the need for rain", "It improves the soil"],
    answer: "It lowers future farm income",
    explanation: "Lost topsoil means smaller harvests.",
  },
  {
    prompt: "Why should a geography answer show links between development factors?",
    options: ["Each factor stands alone", "Only one factor really matters", "The factors affect one another", "Links are not part of CAPS"],
    answer: "The factors affect one another",
    explanation: "Factors such as skills and income reinforce each other.",
  },
  {
    prompt: "Poor families cannot pay school fees, so skills stay low and incomes stay low. What does this show?",
    options: ["A trade surplus", "A fast-growing economy", "A cycle that is hard to break", "A fair trade deal"],
    answer: "A cycle that is hard to break",
    explanation: "Low income and low skills keep each other in place.",
  },
  {
    prompt: "A country sells only raw cotton and buys cloth from abroad. What is the most likely development problem?",
    options: ["Limited skills and technology", "Too much energy for its factories", "Too many schools for its pupils", "A large trade surplus every year"],
    answer: "Limited skills and technology",
    explanation: "It lacks the skills to make finished goods.",
  },
];

const DevelopmentFactors = () => (
  <CapsSubjectTopic
    title="Factors that Affect Development"
    subtitle="Resources, energy, history, trade, population growth, skills and the environment"
    learnSteps={learnSteps}
    task="gr11-development-factors-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DevelopmentFactors;
