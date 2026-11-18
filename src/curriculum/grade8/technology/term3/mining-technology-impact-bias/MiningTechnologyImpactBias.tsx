import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { MINERALS, MINING_ISSUES, whereMined } from '../../../../../components/diagrams/tech8/tech8cHelpers';

// Every statement comes from tech8cHelpers.ts (tested in tech8cHelpers.test.ts and g8TechT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Mining in South Africa',
    content: slide(
      <>
        <Rule>South Africa is rich in mineral resources, and mining happens to some extent in every province. Mining is the source of much of the nation's wealth, but it is a dangerous, labour-intensive activity that has negative impacts on the environment.</Rule>
        <FactCards
          cards={MINERALS.map((m) => ({ title: m.mineral[0].toUpperCase() + m.mineral.slice(1), line1: 'mined mainly in', line2: m.where }))}
          aria="Where some minerals are mined. Gold: Gauteng and the Free State. Coal: Mpumalanga and KwaZulu-Natal. Platinum: Limpopo and North West. Iron and copper: the Northern Cape and Limpopo."
        />
        <Worked
          title="Match the mineral to the place"
          steps={[
            `Coal is mined mainly in ${whereMined('coal')}.`,
            `Gold is mined mainly in ${whereMined('gold')}.`,
            `Platinum is mined mainly in ${whereMined('platinum')}.`,
          ]}
        />
        <Mistake>Thinking that mining happens in only one province. It happens to some extent in every province.</Mistake>
      </>,
    ),
  },
  {
    title: 'Impact on the environment',
    content: slide(
      <>
        <Rule>Two impacts of mining on the environment are acid mine drainage and dust pollution. In acid mine drainage, {MINING_ISSUES.acidMineDrainage}. Dust pollution from mine dumps: {MINING_ISSUES.dust}. We investigate an impact by finding the cause, the effect and possible solutions.</Rule>
        <FactCards
          cards={[
            { title: 'Acid mine drainage', line1: 'acidic water carries metals', line2: 'from mines into rivers' },
            { title: 'Dust pollution', line1: 'dust from mine dumps blows', line2: 'onto nearby homes' },
            { title: 'Solutions', line1: 'treat the water, cover or', line2: 'plant the dumps' },
          ]}
          aria="Impacts of mining. Acid mine drainage: acidic water carries metals from mines into rivers. Dust pollution: dust from mine dumps blows onto nearby homes. Solutions: treat the water, and cover or plant the dumps."
        />
        <Worked
          title="Investigate dust from a mine dump"
          steps={[
            'Cause: the dump is bare, dry and exposed to the wind.',
            'Effect: dust blows over houses and harms the health of the people who live there.',
            'Solution: cover the dump with soil and plants so that the wind cannot lift the dust.',
          ]}
        />
        <Mistake>Saying that acid mine drainage is caused by acid rain. It comes from water flowing through mine rock and waste.</Mistake>
      </>,
    ),
  },
  {
    title: 'Iron Age technology and bias',
    content: slide(
      <>
        <Rule>Indigenous technology is technology developed by people in a place using the knowledge of that place. In South Africa, {MINING_ISSUES.ironAge}. Bias in technology is an unfair preference for one group of people: {MINING_ISSUES.genderBias}.</Rule>
        <FactCards
          cards={[
            { title: 'Iron Age mining', line1: 'smelting iron in clay furnaces', line2: 'with charcoal before modern times' },
            { title: 'Indigenous knowledge', line1: 'skills and knowledge developed', line2: 'by people for their own needs' },
            { title: 'Gender bias', line1: 'treating men and women unfairly', line2: 'in career choices in mining' },
          ]}
          aria="Indigenous technology and bias. Iron Age mining: smelting iron in clay furnaces with charcoal before modern times. Indigenous knowledge: skills and knowledge developed by people for their own needs. Gender bias: treating men and women unfairly in career choices in mining."
        />
        <Worked
          title="Spot the bias"
          steps={[
            'A mine only advertises jobs to men: this is gender bias.',
            'Women are equally able to learn the skills, and the law now supports equal opportunities.',
            'A fair technology and career system gives everyone the same chances.',
          ]}
        />
        <Mistake>Saying that Iron Age people had no technology. They made iron and tools with skill, using furnaces, charcoal and clay.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name one environmental impact of mining.</>,
          <>Where is coal mined mainly?</>,
          <>What did Iron Age people use to make iron?</>,
          <>What is bias?</>,
        ]}
        answers={[
          <>Acid mine drainage (or dust pollution).</>,
          <>{whereMined('coal')}.</>,
          <>Furnaces, charcoal and air blown through clay pipes.</>,
          <>An unfair preference for one group.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In how many provinces does mining happen to some extent?",
    options: ["Only Gauteng", "Three provinces", "Every province", "Only the Northern Cape"],
    answer: "Every province",
    explanation: "Mining occurs to some extent in every province.",
  },
  {
    prompt: "In which provinces is coal mined mainly?",
    options: ["Mpumalanga and KwaZulu-Natal", "Gauteng and the Free State", "Limpopo and North West", "The Western Cape"],
    answer: "Mpumalanga and KwaZulu-Natal",
    explanation: "Coal comes mainly from Mpumalanga and KwaZulu-Natal.",
  },
  {
    prompt: "In which provinces is gold mined mainly?",
    options: ["Mpumalanga and KwaZulu-Natal", "Limpopo and North West", "The Northern Cape", "Gauteng and the Free State"],
    answer: "Gauteng and the Free State",
    explanation: "Gold is mined mainly in Gauteng and the Free State.",
  },
  {
    prompt: "Why is mining called a dangerous activity?",
    options: ["It uses no machines", "It is labour-intensive work", "It happens only in cities", "It is done by one person"],
    answer: "It is labour-intensive work",
    explanation: "Mining is dangerous and labour-intensive.",
  },
  {
    prompt: "What is acid mine drainage?",
    options: ["Rain that falls on a mine", "Acidic water from mine rock", "A way of draining a mine", "A kind of mining machine"],
    answer: "Acidic water from mine rock",
    explanation: "Water running through mine rock and waste becomes acidic and carries dissolved metals.",
  },
  {
    prompt: "What can acid mine drainage do to a river?",
    options: ["It cleans the river", "It makes the river warmer only", "It has no effect", "It pollutes it with acid and metals"],
    answer: "It pollutes it with acid and metals",
    explanation: "The acidic water carries dissolved metals into rivers.",
  },
  {
    prompt: "What is dust pollution from mine dumps?",
    options: ["Dust blown from the dump onto nearby homes", "Smoke from a power station", "Sand in a river", "Soil that is washed away by rain"],
    answer: "Dust blown from the dump onto nearby homes",
    explanation: "Dust from mine dumps harms people living nearby.",
  },
  {
    prompt: "Which is a possible solution for dust from a mine dump?",
    options: ["Leave it bare and dry", "Make the dump taller", "Cover it with soil and plants", "Remove the fences"],
    answer: "Cover it with soil and plants",
    explanation: "Covering the dump stops the wind from lifting the dust.",
  },
  {
    prompt: "What is indigenous technology?",
    options: ["Technology imported from abroad", "Technology that uses only computers", "Technology that is not yet invented", "Technology from local knowledge"],
    answer: "Technology from local knowledge",
    explanation: "Indigenous technology comes from local knowledge.",
  },
  {
    prompt: "Which material did Iron Age people in South Africa use in furnaces to smelt iron?",
    options: ["Plastic", "Charcoal", "Petrol", "Coal gas"],
    answer: "Charcoal",
    explanation: "They smelted iron in furnaces using charcoal and air blown in through clay pipes.",
  },
  {
    prompt: "What does the Iron Age technology of South Africa show?",
    options: ["People made iron before the modern era", "Iron was first made in a factory", "Iron was never used in Africa", "Iron was made only by machines"],
    answer: "People made iron before the modern era",
    explanation: "Indigenous mining and smelting of iron took place before modern times.",
  },
  {
    prompt: "What is bias in technology?",
    options: ["A fair test of a product", "A kind of gear wheel", "An unfair preference for a group", "A measure of strength"],
    answer: "An unfair preference for a group",
    explanation: "Bias is an unfair preference.",
  },
  {
    prompt: "A mine advertises jobs only for men. What kind of bias is this?",
    options: ["Age bias", "Weight bias", "Gender bias", "Language bias"],
    answer: "Gender bias",
    explanation: "Treating people unfairly because of their gender is gender bias.",
  },
  {
    prompt: "Why is it important to investigate an environmental impact of mining?",
    options: ["To find the cause, effect and solutions", "To prove mining must stop everywhere", "To avoid ever using minerals", "To find ways to hide the impact"],
    answer: "To find the cause, effect and solutions",
    explanation: "An investigation finds the cause, the effect and possible solutions.",
  },
];

const MiningTechnologyImpactBias = () => (
  <CapsSubjectTopic
    title="Mining Technology, Impact and Bias"
    subtitle="Mining in South Africa, acid mine drainage, dust, Iron Age technology and gender bias"
    learnSteps={learnSteps}
    task="gr8-mining-technology-impact-bias-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default MiningTechnologyImpactBias;
