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
    title: "Rostow's model of the stages of growth",
    content: slide(
      <>
        <Rule>Rostow's model is a free-market model that says every country passes through five stages: traditional society, the preconditions for take-off, take-off, the drive to maturity and the age of high mass consumption. In the take-off stage, investment rises to more than about 10% of national income and a few leading industries grow fast.</Rule>
        <RostowSteps />
        <Worked
          title="Place a country on the steps"
          steps={[
            'Most people farm for their own needs and there are few factories: stage 1.',
            `A country invests R${g.TAKE_OFF.investment} billion out of a GDP of R${g.TAKE_OFF.gdp} billion, which is ${g.investmentShare(g.TAKE_OFF.investment, g.TAKE_OFF.gdp)}% of GDP, and its textile industry grows fast: stage 3, take-off.`,
            'Most people can buy cars and household goods beyond basic needs: stage 5.',
          ]}
        />
        <Mistake>Thinking that a country can skip stages or that all countries move at the same speed. Rostow's model assumes the same order for all.</Mistake>
      </>,
    ),
  },
  {
    title: "Limitations and criticisms of Rostow's model",
    content: slide(
      <>
        <Rule>Critics say that Rostow's model is based on the history of rich Western countries and does not fit every country. It leaves out colonial history, unfair trade and debt, it ignores damage to the environment, and it is hard to say exactly when a country moves from one stage to the next. It also assumes that growth alone brings development to everyone.</Rule>
        <FactCards
          cards={[
            { title: 'One path', line1: 'assumes all countries', line2: 'follow the West' },
            { title: 'Left out', line1: 'colonial history, debt', line2: 'and unfair trade' },
            { title: 'Growth only', line1: 'ignores who gains and', line2: 'the environment' },
            { title: 'Unclear', line1: 'stage boundaries are', line2: 'hard to fix' },
          ]}
          aria="Criticisms of Rostow's model. One path: assumes that all countries follow the West. Left out: colonial history, debt and unfair trade. Growth only: ignores who gains and the environment. Unclear: stage boundaries are hard to fix."
        />
        <Worked
          title="Write a criticism"
          steps={[
            'State the criticism: the model ignores colonial history.',
            'Give evidence: some countries had their railways built only to carry minerals to ports.',
            'Link: so these countries did not start from the same place as Europe did.',
          ]}
        />
        <Mistake>Saying only that the model is wrong. Name the criticism and support it with an example.</Mistake>
      </>,
    ),
  },
  {
    title: 'Core and periphery models',
    content: slide(
      <>
        <Rule>A core and periphery model shows that a few places, the core, are rich and busy, with industry, services and decision makers, while the periphery is poorer and depends on selling raw materials and sending workers to the core. Spread effects move benefits outwards, and backwash effects draw skills and money into the core. The model applies at global, national and local scales.</Rule>
        <CoreRings scale="global, national and local scales" />
        <Worked
          title="One model, three scales"
          steps={[
            'Global scale: rich industrial countries are the core and poor primary producers are the periphery.',
            'National scale: in South Africa, Gauteng is the core and rural areas such as parts of the Eastern Cape are the periphery.',
            'Local scale: the central business district is the core and the outer informal settlements are the periphery.',
          ]}
        />
        <Mistake>Believing that the periphery always benefits from the core. Backwash effects can draw young, skilled people away from the periphery.</Mistake>
      </>,
    ),
  },
  {
    title: 'The sustainability model',
    content: slide(
      <>
        <Rule>A sustainability model says that development must meet the needs of the present without making it harder for future generations to meet theirs. It has three elements: economic, social and environmental. Development is sustainable only where all three overlap.</Rule>
        <SustainCircles />
        <Worked
          title="Test a project against the three elements"
          steps={[
            'A solar farm creates jobs and lower electricity costs: economic gain.',
            'It supplies a rural clinic and school: social gain.',
            'It replaces coal power and uses little water: environmental gain, so the project is sustainable.',
          ]}
        />
        <Mistake>Judging a project on its profit only. A project that harms people or the environment is not sustainable, however profitable it is.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many stages are there in Rostow's model, and which comes after take-off?</>,
          <>Give one criticism of Rostow's model.</>,
          <>In a core and periphery model, which area has the industry and services?</>,
          <>What three elements does a sustainability model use?</>,
        ]}
        answers={[
          <>Five. The drive to maturity.</>,
          <>It is based on the Western path and leaves out colonial history.</>,
          <>The core.</>,
          <>Economic, social and environmental.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many stages are there in Rostow's model?",
    options: ["Three", "Four", "Five", "Seven"],
    answer: "Five",
    explanation: "Rostow described five stages of growth.",
  },
  {
    prompt: "Which is the first stage in Rostow's model?",
    options: ["Traditional society", "Take-off", "Drive to maturity", "High mass consumption"],
    answer: "Traditional society",
    explanation: "Countries start as traditional, mostly farming societies.",
  },
  {
    prompt: "Which stage comes immediately after take-off in Rostow's model?",
    options: ["Traditional society", "The preconditions for take-off", "The age of mass consumption", "The drive to maturity"],
    answer: "The drive to maturity",
    explanation: "The order is traditional, preconditions, take-off, maturity, mass consumption.",
  },
  {
    prompt: "A country invests R12 billion out of a GDP of R100 billion. What share of GDP is investment?",
    options: ["8%", "12%", "88%", "1,2%"],
    answer: "12%",
    explanation: "12 ÷ 100 × 100 = 12%.",
  },
  {
    prompt: "Investment rises above about 10% of GDP and a few industries boom. Which stage is this?",
    options: ["Traditional society", "Take-off", "Drive to maturity", "Preconditions"],
    answer: "Take-off",
    explanation: "A rise in investment and fast-growing leading industries mark the take-off.",
  },
  {
    prompt: "Most people can buy goods beyond their basic needs. Which stage is this?",
    options: ["Traditional society", "Take-off", "The preconditions stage", "The age of high mass consumption"],
    answer: "The age of high mass consumption",
    explanation: "Mass consumption is the last stage.",
  },
  {
    prompt: "Which is a criticism of Rostow's model?",
    options: ["It assumes all follow the West", "It has too many stages to teach", "It was based on poor countries", "It ignores the richest countries"],
    answer: "It assumes all follow the West",
    explanation: "It is based on the history of rich countries.",
  },
  {
    prompt: "Which of these does Rostow's model leave out?",
    options: ["Growth in investment", "Farming in early societies", "Colonial history and unfair trade", "The role of industry"],
    answer: "Colonial history and unfair trade",
    explanation: "Critics say it ignores colonial history, debt and unfair trade.",
  },
  {
    prompt: "In a core and periphery model, which area has the industry and services?",
    options: ["The periphery", "The border", "The rural area", "The core"],
    answer: "The core",
    explanation: "The core is rich and busy.",
  },
  {
    prompt: "In a core and periphery model, which area sells raw materials?",
    options: ["The core", "The periphery", "The financial centre", "The capital"],
    answer: "The periphery",
    explanation: "The periphery depends on primary products.",
  },
  {
    prompt: "Gauteng and the rural Eastern Cape are an example of a core and periphery at which scale?",
    options: ["National", "Global", "Local", "Street"],
    answer: "National",
    explanation: "Both are in one country.",
  },
  {
    prompt: "What are backwash effects?",
    options: ["Benefits spread to the periphery", "Taxes paid by the core", "Skills and money drawn into the core", "Trade between two cores"],
    answer: "Skills and money drawn into the core",
    explanation: "Backwash effects draw resources into the core.",
  },
  {
    prompt: "Which three elements does a sustainability model use?",
    options: ["Political, legal and military", "Energy, trade and aid", "Economic, social and environmental", "Urban, rural and coastal"],
    answer: "Economic, social and environmental",
    explanation: "Sustainable development needs all three.",
  },
  {
    prompt: "A project earns profit but pollutes a river that the town uses. What does the sustainability model say?",
    options: ["It is not sustainable", "It is sustainable", "It is sustainable if profits are high", "It is social development"],
    answer: "It is not sustainable",
    explanation: "Environmental harm means the three elements do not overlap.",
  },
];

const DevelopmentModels = () => (
  <CapsSubjectTopic
    title="Development Models: Rostow, Core and Periphery, Sustainability"
    subtitle="Rostow's stages and criticisms, core and periphery at different scales, and sustainability"
    learnSteps={learnSteps}
    task="gr11-development-models-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DevelopmentModels;
