import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { GrowthBars } from '../../../../../components/diagrams/econ11/Econ11';
import { GROWTH_CONSTRAINTS, GROWTH_METHODS, growthRate, perCapita, perCapitaGrowth, realGdp } from '../../../../../components/diagrams/econ11/econ11Helpers';

// Every number comes from econ11Helpers.ts (tested in econ11Helpers.test.ts and g11EconGaps.test.ts). The GDP figures are imaginary teaching data; no real South African growth figures are quoted.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(Math.round(x * 100) / 100).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Wealth creation',
    content: slide(
      <>
        <Rule>Wealth is the value of everything that people own that can be used to produce income or to buy goods, such as land, buildings, machinery, savings and skills. The wealth creation process starts when factors of production are used to produce goods and services, so that income is earned. Income that is saved and invested builds up wealth in the form of capital, which creates more income in the future.</Rule>
        <FactCards
          cards={[
            { title: 'Produce', line1: 'factors of production make', line2: 'goods and services' },
            { title: 'Earn income', line1: 'wages, rent, interest', line2: 'and profit are paid' },
            { title: 'Save and invest', line1: 'savings buy capital goods', line2: 'and build wealth' },
            { title: 'Wealth grows', line1: 'more capital and skills', line2: 'raise future income' },
          ]}
          aria="The wealth creation process. Produce: factors of production make goods and services. Earn income: wages, rent, interest and profit are paid. Save and invest: savings buy capital goods and build wealth. Wealth grows: more capital and skills raise future income."
        />
        <Worked
          title="Follow a small business"
          steps={[
            'A baker uses land, labour, capital and her skills to produce bread and earns income.',
            'She saves part of the income and buys a bigger oven (capital).',
            'The bigger oven lets her produce more and earn more: her wealth has grown.',
          ]}
        />
        <Mistake>Mixing up income and wealth. Income is earned in a period; wealth is what has been built up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Economic growth: meaning and calculation',
    content: slide(
      <>
        <Rule>Economic growth is an increase in the real output of goods and services of an economy over time, usually measured as the growth rate of real GDP. Growth rate = (GDP in the later year − GDP in the earlier year) ÷ GDP in the earlier year × 100. Real GDP is nominal GDP corrected for price changes: real GDP = nominal GDP ÷ price index × 100.</Rule>
        <GrowthBars before={1200} after={1260} rate={growthRate(1200, 1260)} />
        <Worked
          title="Calculate growth (imaginary figures, R billion)"
          steps={[
            `GDP rises from R1 200 to R1 260: growth = (1 260 − 1 200) ÷ 1 200 × 100 = ${n(growthRate(1200, 1260))}%.`,
            `If the price index is 105, real GDP = 1 260 ÷ 105 × 100 = ${n(realGdp(1260, 105))}, so real growth = ${n(growthRate(1200, realGdp(1260, 105)))}%: the rise was only higher prices.`,
            `If the population is 63 million, GDP per capita = 1 260 ÷ 63 = R${n(perCapita(1260, 63))} thousand per person.`,
          ]}
        />
        <Mistake>Using nominal GDP to measure growth. Rising prices can make GDP look bigger without any increase in output.</Mistake>
      </>,
    ),
  },
  {
    title: 'Methods and constraints on growth',
    content: slide(
      <>
        <Rule>Growth can be increased by {GROWTH_METHODS.join(', ')}. Growth is held back by constraints such as {GROWTH_CONSTRAINTS.join(', ')}. Growth is important because it can create jobs, raise incomes and the standard of living and give government more revenue, but growth does not always reduce inequality.</Rule>
        <FactCards
          cards={[
            { title: 'Methods', line1: 'invest in capital and', line2: 'infrastructure; train workers' },
            { title: 'Methods', line1: 'new technology, trade and', line2: 'a stable policy environment' },
            { title: 'Constraints', line1: 'skills shortage, unreliable', line2: 'electricity, weak transport' },
            { title: 'Constraints', line1: 'low saving and investment,', line2: 'uncertainty, unemployment' },
          ]}
          aria="Methods and constraints on growth. Methods: invest in capital and infrastructure, train workers, use new technology, expand trade and keep a stable policy environment. Constraints: a shortage of skills, unreliable electricity, weak transport, low saving and investment, uncertainty and high unemployment."
        />
        <Worked
          title="Growth and the population"
          steps={[
            `GDP grows by 5% while the population grows by 2%: per-capita growth = (1,05 ÷ 1,02 − 1) × 100 = ${n(perCapitaGrowth(5, 2))}%.`,
            `GDP grows by 1% while the population grows by 3%: per-capita growth = ${n(perCapitaGrowth(1, 3))}%, so the average person is worse off.`,
            'Growth that is faster than the population growth raises the standard of living on average.',
          ]}
        />
        <Mistake>Assuming that any growth raises everyone's standard of living. If the population grows faster than output, output per person falls.</Mistake>
      </>,
    ),
  },
  {
    title: 'Standard of living and South Africa\'s experience',
    content: slide(
      <>
        <Rule>The standard of living is the quality and quantity of goods, services and opportunities available to the people. It is measured by indicators such as real GDP per capita, life expectancy, education, housing and access to services. South Africa's recent growth has been low and uneven, held back by constraints such as unreliable electricity, a shortage of skills and high unemployment, and the benefits of growth have not reached everyone.</Rule>
        <FactCards
          cards={[
            { title: 'Standard of living', line1: 'goods, services and', line2: 'opportunities for the people' },
            { title: 'Indicators', line1: 'GDP per capita, life expectancy,', line2: 'education, housing, services' },
            { title: 'South Africa', line1: 'low and uneven growth held', line2: 'back by several constraints' },
          ]}
          aria="Standard of living. The standard of living is the goods, services and opportunities available to the people. Indicators include GDP per capita, life expectancy, education, housing and services. South Africa has had low and uneven growth held back by several constraints."
        />
        <Worked
          title="Compare two countries (imaginary)"
          steps={[
            'Country A has real GDP per capita of R40 000 and Country B has R60 000.',
            'On this indicator Country B has the higher average standard of living.',
            'But life expectancy, education and equality also matter, so one indicator is not enough.',
          ]}
        />
        <Mistake>Using GDP per capita alone as the measure of a good standard of living. It is an average and does not show inequality.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>GDP rises from R1 200 to R1 260. What is the growth rate?</>,
          <>What is real GDP if nominal GDP is R1 260 and the price index is 105?</>,
          <>Name one constraint on economic growth.</>,
          <>What does per-capita GDP measure?</>,
        ]}
        answers={[
          <>{n(growthRate(1200, 1260))}%.</>,
          <>{n(realGdp(1260, 105))}.</>,
          <>For example unreliable electricity or a shortage of skills.</>,
          <>Output per person (GDP divided by the population).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is wealth?",
    options: ["The income earned in one month", "The price of the goods", "The assets people own", "The money paid as tax"],
    answer: "The assets people own",
    explanation: "Wealth is the stock of assets such as land, machinery, savings and skills.",
  },
  {
    prompt: "How does the wealth creation process begin?",
    options: ["Factors of production make goods", "The government prints more money", "All prices start to fall", "Imports begin to rise"],
    answer: "Factors of production make goods",
    explanation: "Production earns income, and saved income can be invested.",
  },
  {
    prompt: "What is economic growth?",
    options: ["A rise in the general prices", "A rise in the population", "An increase in imports only", "A rise in real output over time"],
    answer: "A rise in real output over time",
    explanation: "Growth is measured by the growth of real GDP.",
  },
  {
    prompt: "GDP rises from R1 200 billion to R1 260 billion. What is the growth rate?",
    options: ["6%", "5%", "60%", "1,05%"],
    answer: "5%",
    explanation: "(1 260 − 1 200) ÷ 1 200 × 100 = 5%.",
  },
  {
    prompt: "GDP falls from R1 200 billion to R1 140 billion. What is the growth rate?",
    options: ["5%", "−5%", "−60%", "−0,05%"],
    answer: "−5%",
    explanation: "(1 140 − 1 200) ÷ 1 200 × 100 = −5%.",
  },
  {
    prompt: "Nominal GDP is R1 260 billion and the price index is 105. What is real GDP?",
    options: ["R1 323 billion", "R1 365 billion", "R105 billion", "R1 200 billion"],
    answer: "R1 200 billion",
    explanation: "1 260 ÷ 105 × 100 = 1 200.",
  },
  {
    prompt: "Why is real GDP better than nominal GDP for measuring growth?",
    options: ["It removes price changes", "It includes only exports", "It ignores all services", "It is always bigger"],
    answer: "It removes price changes",
    explanation: "Nominal GDP can rise only because prices rose.",
  },
  {
    prompt: "GDP is R1 260 billion and the population is 63 million. What is GDP per capita in thousands of rand?",
    options: ["R2 thousand", "R200 thousand", "R20 thousand", "R79 thousand"],
    answer: "R20 thousand",
    explanation: "1 260 ÷ 63 = 20.",
  },
  {
    prompt: "Which is a method of raising economic growth?",
    options: ["Closing all the schools", "Reducing all saving", "Stopping all the trade", "Investing in capital and skills"],
    answer: "Investing in capital and skills",
    explanation: "Investment, education and technology raise growth.",
  },
  {
    prompt: "Which is a constraint on economic growth?",
    options: ["A skilled labour force", "A shortage of skills", "Reliable electricity", "A high rate of investment"],
    answer: "A shortage of skills",
    explanation: "A skills shortage holds growth back.",
  },
  {
    prompt: "GDP grows by 1% while the population grows by 3%. What happens to GDP per person?",
    options: ["It falls", "It rises", "It stays the same", "It doubles"],
    answer: "It falls",
    explanation: "Output grew slower than the population.",
  },
  {
    prompt: "GDP grows by 5% while the population grows by 2%. What happens to GDP per person?",
    options: ["It falls", "It stays the same", "It rises", "It becomes zero"],
    answer: "It rises",
    explanation: "Output grew faster than the population.",
  },
  {
    prompt: "Which of these measures the standard of living?",
    options: ["The price of one good", "The number of banks", "Real GDP per capita", "The size of the army"],
    answer: "Real GDP per capita",
    explanation: "Standard of living uses indicators such as GDP per capita, life expectancy and education.",
  },
  {
    prompt: "Why is GDP per capita not a complete measure of the standard of living?",
    options: ["It is an average of everyone", "It counts only the exports", "It ignores all production", "It measures only the prices"],
    answer: "It is an average of everyone",
    explanation: "Two countries with equal GDP per capita can have different inequality.",
  },
];

const EconomicGrowthWealth = () => (
  <CapsSubjectTopic
    title="Economic Growth and Wealth Creation"
    subtitle="Wealth creation, the growth rate, real GDP, methods and constraints, and the standard of living"
    learnSteps={learnSteps}
    task="gr11-economic-growth-wealth-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default EconomicGrowthWealth;
