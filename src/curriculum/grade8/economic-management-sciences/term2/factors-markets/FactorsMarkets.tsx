import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { FactorsOfProduction } from '../../../../../components/diagrams/ems/EmsPictures';
import { LabourLevels, MarketFlow } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { FAIR_EMPLOYMENT, LABOUR, MARKETS, rewardFor, wageBill } from '../../../../../components/diagrams/ems/ems8b-helpers';

// Every statement and amount comes from ems8b-helpers.ts (tested in ems8b-helpers.test.ts and g8EmsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Factors of production',
    content: slide(
      <>
        <Rule>The factors of production are what a business uses to make goods and services: natural resources, labour, capital and entrepreneurship. Capital can be borrowed capital (a loan) or own capital (the owner's money). The entrepreneur organises the other factors and takes the risk. Each factor earns a reward, called remuneration.</Rule>
        <FactorsOfProduction />
        <Worked
          title="Match the factor to its reward"
          steps={[
            `Natural resources (land) earn ${rewardFor('natural resources')}.`,
            `Labour earns ${rewardFor('labour')} and capital earns ${rewardFor('capital')}.`,
            `Entrepreneurship earns ${rewardFor('entrepreneurship')}, which is what is left after all the other rewards are paid.`,
          ]}
        />
        <Mistake>Calling money the only form of capital. Machines and equipment that a business uses are also capital.</Mistake>
      </>,
    ),
  },
  {
    title: 'Labour and fair employment',
    content: slide(
      <>
        <Rule>Labour is the work done by people. Unskilled labour needs no special training, semi-skilled labour needs some training and skilled labour needs a qualification, and the more training the higher the usual pay. Workers have an important role in a business. Fair employment practices include {FAIR_EMPLOYMENT.join(', ')}. The remuneration of labour is wages or salaries.</Rule>
        <LabourLevels />
        <Worked
          title="Work out a wage bill"
          steps={[
            `${LABOUR[0].type[0].toUpperCase() + LABOUR[0].type.slice(1)} labour, for example ${LABOUR[0].example}; skilled labour, for example ${LABOUR[2].example}.`,
            `5 workers paid R200 a day for 20 days cost 5 × 200 × 20 = ${randNb(wageBill(5, 200, 20))} in wages.`,
            'Paying at least the minimum wage and giving a contract are fair employment practices.',
          ]}
        />
        <Mistake>Thinking that fair employment is only about pay. A safe workplace and a contract also matter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Markets',
    content: slide(
      <>
        <Rule>A market is where buyers and sellers meet. In the goods and services market, {MARKETS.goodsServices}. In the factor market, {MARKETS.factor}. The labour market and the financial market are factor markets: in the labour market businesses hire workers, and in the financial market businesses borrow money.</Rule>
        <MarketFlow />
        <Worked
          title="Which market?"
          steps={[
            'A family buys groceries at a shop: the goods and services market.',
            'A factory hires workers: the labour market, which is a factor market.',
            'A small business borrows R50 000 from a bank: the financial market, which is also a factor market.',
          ]}
        />
        <Mistake>Saying that households only buy. They also sell their labour, so they take part in the factor market.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the four factors of production.</>,
          <>How is labour rewarded?</>,
          <>Name the market where workers are hired.</>,
          <>Which labour category requires a qualification?</>,
        ]}
        answers={[
          <>Natural resources, labour, capital and entrepreneurship.</>,
          <>Wages or salaries.</>,
          <>The labour market (a factor market).</>,
          <>Skilled labour.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a factor of production?",
    options: ["A budget", "A trial balance", "Labour", "A tax"],
    answer: "Labour",
    explanation: "The factors are natural resources, labour, capital and entrepreneurship.",
  },
  {
    prompt: "What does labour earn as its reward?",
    options: ["Wages or salaries", "Rent", "Interest", "Profit"],
    answer: "Wages or salaries",
    explanation: "Labour is paid wages or salaries.",
  },
  {
    prompt: "What does capital earn as its reward?",
    options: ["Wages", "Rent", "Profit", "Interest"],
    answer: "Interest",
    explanation: "Capital earns interest.",
  },
  {
    prompt: "What do natural resources such as land earn?",
    options: ["Interest", "Rent", "Wages", "Profit"],
    answer: "Rent",
    explanation: "Land earns rent.",
  },
  {
    prompt: "What does the entrepreneur earn?",
    options: ["Interest", "Profit", "Wages", "Rent"],
    answer: "Profit",
    explanation: "The entrepreneur keeps the profit.",
  },
  {
    prompt: "What is borrowed capital?",
    options: ["Money the owner puts in", "Money earned from fees", "Money paid as tax", "A loan, such as from a bank"],
    answer: "A loan, such as from a bank",
    explanation: "Own capital is the owner's money; borrowed capital is a loan.",
  },
  {
    prompt: "What does an entrepreneur do?",
    options: ["Organises and takes the risk", "Only works for wages", "Only collects the taxes", "Only owns the land"],
    answer: "Organises and takes the risk",
    explanation: "The entrepreneur organises production and takes the risk.",
  },
  {
    prompt: "A qualification is needed for which type of labour?",
    options: ["Unskilled labour", "Semi-skilled labour", "Skilled labour", "No labour"],
    answer: "Skilled labour",
    explanation: "Skilled labour needs a qualification.",
  },
  {
    prompt: "A cleaner who needs no special training is an example of...",
    options: ["Skilled labour", "Semi-skilled labour", "Capital", "Unskilled labour"],
    answer: "Unskilled labour",
    explanation: "Unskilled work needs no special training.",
  },
  {
    prompt: "Which is a fair employment practice?",
    options: ["Paying below the minimum wage", "Giving workers a written contract", "Hiding the pay from workers", "Refusing a safe workplace"],
    answer: "Giving workers a written contract",
    explanation: "Fair employment includes a contract, a safe workplace and at least the minimum wage.",
  },
  {
    prompt: "Five workers are paid R200 a day each for 20 days. What is the wage bill?",
    options: ["R20 000", "R1 000", "R4 000", "R200 000"],
    answer: "R20 000",
    explanation: "5 × 200 × 20 = 20 000.",
  },
  {
    prompt: "In which market do households buy groceries from businesses?",
    options: ["The labour market", "The financial market", "The goods and services market", "The factor market"],
    answer: "The goods and services market",
    explanation: "Households buy goods and services from businesses.",
  },
  {
    prompt: "Where do businesses go to hire workers?",
    options: ["The goods and services market", "The grocery market", "The labour market", "The tax market"],
    answer: "The labour market",
    explanation: "The labour market is a factor market.",
  },
  {
    prompt: "A business borrows money from a bank. Which market is this?",
    options: ["The financial market", "The goods and services market", "The labour market", "The market for land"],
    answer: "The financial market",
    explanation: "The financial market is a factor market for capital.",
  },
];

const FactorsMarkets = () => (
  <CapsSubjectTopic
    title="Factors of Production and Markets"
    subtitle="Factors of production, remuneration, labour, fair employment and the types of market"
    learnSteps={learnSteps}
    task="gr8-factors-markets-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FactorsMarkets;
