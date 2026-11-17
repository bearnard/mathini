import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AbundanceBars, FactCards, Steps } from '../../../../../components/diagrams/mine11/Mine11';
import { CRUST, EQUATIONS, balanced, crustShare, mostAbundant, otherElements } from '../../../../../components/diagrams/mine11/mine11Helpers';

// Every number and equation below comes from mine11Helpers.ts (tested in mine11Helpers.test.ts and g11PsT4.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const pretty = (s: string) => s.replace(/([A-Za-z\]\)])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const chk = (eq: string) => (balanced(eq) ? 'balanced' : 'NOT balanced');

export const learnSteps: LearnStep[] = [
  {
    title: 'The lithosphere and its resources',
    content: slide(
      <>
        <Rule>The lithosphere is the Earth&apos;s crust and upper mantle. The crust holds non-renewable fossil fuels, which formed from ancient fossils buried under intense pressure and heat, and minerals. It also holds the soil chemicals (nutrients) that plants need, which can be renewed. A mineral that contains a useful metal is called an ore.</Rule>
        <FactCards
          cards={[
            { title: 'Fossil fuels', line1: 'coal, oil and gas:', line2: 'non-renewable' },
            { title: 'Minerals and ores', line1: 'metals such as gold, iron', line2: 'and copper come from ores' },
            { title: 'Soil nutrients', line1: 'for plants: can be', line2: 'renewed with care' },
          ]}
          aria="Resources of the lithosphere. Fossil fuels, such as coal, oil and gas, are non-renewable. Minerals and ores give metals such as gold, iron and copper. Soil nutrients are needed by plants and can be renewed with care."
        />
        <Worked
          title="Some words that mining uses"
          steps={[
            'A resource is the amount of a mineral that is believed to exist in the ground.',
            'A reserve is the part of it that can be mined at a profit with the methods we have.',
            'An ore body is a large deposit of ore, a rock that has enough of a mineral to be worth mining.',
          ]}
        />
        <Mistake>Thinking that fossil fuels and metal ores will last for ever. They formed over millions of years and are non-renewable, so we should use them wisely.</Mistake>
      </>,
    ),
  },
  {
    title: 'What is in the crust, and where',
    content: slide(
      <>
        <Rule>Elements are not spread evenly over the Earth. In the crust most elements are found in minerals, seldom as free elements. Oxygen and silicon are by far the most abundant, followed by aluminium and iron.</Rule>
        <AbundanceBars items={[...CRUST]} other={otherElements()} />
        <Worked
          title="Read the bars (percent by mass, rounded)"
          steps={[
            `The most abundant element in the crust is ${mostAbundant()}.`,
            `Oxygen and silicon together make up ${crustShare(['O', 'Si'])}% of the crust, which is more than half.`,
            `All the metals that we mine, such as gold, are part of the ${otherElements()}% of other elements and may be very rare: they need to be found, mined and separated from their surroundings.`,
          ]}
        />
        <Mistake>Thinking that useful metals are the most abundant elements. Aluminium and iron are common, but gold and platinum are very rare, which is why they are valuable.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting a metal out of its ore',
    content: slide(
      <>
        <Rule>Metals are recovered from their ores by different methods. A physical method separates the metal from the rock. Heating alone breaks down the ores of some unreactive metals. Heating with carbon removes the oxygen from the ores of metals such as iron and copper. This is a reduction.</Rule>
        <FactCards
          cards={[
            { title: 'Physical', line1: 'separate the metal from', line2: 'the rock: gold' },
            { title: 'Heating alone', line1: `${pretty(EQUATIONS.mercury)}:`, line2: 'unreactive metals' },
            { title: 'Heating with carbon', line1: `${pretty(EQUATIONS.ironOre)}:`, line2: 'iron, copper' },
          ]}
          aria="Three methods of getting a metal from its ore. A physical method separates the metal from the rock, for example gold. Heating alone breaks down the ore, for example mercury oxide gives mercury and oxygen. Heating with carbon removes the oxygen, for example iron oxide and carbon give iron and carbon dioxide."
        />
        <Worked
          title="Check the equations"
          steps={[
            `${pretty(EQUATIONS.ironOre)} is ${chk(EQUATIONS.ironOre)}: carbon takes the oxygen from the iron oxide, so the iron oxide is reduced.`,
            `${pretty(EQUATIONS.copper)} is ${chk(EQUATIONS.copper)}: the copper oxide is reduced to copper.`,
            `${pretty(EQUATIONS.mercury)} is ${chk(EQUATIONS.mercury)}: heat alone is enough to break the mercury oxide down.`,
          ]}
        />
        <Mistake>Using the wrong method for a metal. The more reactive the metal, the harder it is to get out of its ore, so unreactive metals need only simple methods.</Mistake>
      </>,
    ),
  },
  {
    title: 'The recovery of gold in South Africa',
    content: slide(
      <>
        <Rule>Gold is worth mining because it is rare, valuable and does not corrode. The major gold-mining area in South Africa is the Witwatersrand around Johannesburg, with mines also in the Free State. The gold is recovered in four steps.</Rule>
        <Steps
          steps={[
            { title: 'Mine and crush', note: 'deep-level mining, separate and crush the rock' },
            { title: 'Dissolve the gold', note: 'cyanide and oxygen: oxidation' },
            { title: 'Precipitate', note: 'zinc recovers the gold: reduction' },
            { title: 'Smelt', note: 'melt the gold into bars' },
          ]}
          aria="The steps in recovering gold. Mine the ore deep underground and crush the rock. Dissolve the gold with sodium cyanide and oxygen, which is oxidation. Recover the gold by precipitating it with zinc, which is reduction. Smelt it to melt the gold into bars."
        />
        <Worked
          title="The two reactions"
          steps={[
            `${pretty(EQUATIONS.goldLeach)} (${chk(EQUATIONS.goldLeach)}): the gold is oxidised and dissolves.`,
            `${pretty(EQUATIONS.goldZinc)} (${chk(EQUATIONS.goldZinc)}): the gold ion is reduced and gold metal precipitates.`,
            'The zinc method is old. Many mines now use activated carbon to recover the gold, and smelting melts the gold into bars.',
          ]}
        />
        <Mistake>Mixing up oxidation and reduction. In the first step the gold loses electrons (oxidation), and in the second the gold gains electrons (reduction).</Mistake>
      </>,
    ),
  },
  {
    title: 'The environment and old mining',
    content: slide(
      <>
        <Rule>Mining changes the environment. Old mines, such as the gold and ivory trade at Mapungubwe about a thousand years ago, left scars, and modern mining must take care of the land, water and air, and of the people who live nearby.</Rule>
        <FactCards
          cards={[
            { title: 'Land', line1: 'big holes and waste heaps', line2: 'need to be made safe' },
            { title: 'Water', line1: 'mine water can become acid', line2: 'and carry metals' },
            { title: 'Air and people', line1: 'dust, noise and the safety', line2: 'of mine workers' },
          ]}
          aria="Effects of mining on the environment. On the land, big holes and waste heaps need to be made safe. For water, mine water can become acid and carry metals. For air and people, there is dust and noise, and mine workers must be kept safe."
        />
        <Worked
          title="Weigh the costs and the benefits"
          steps={[
            'Benefits: jobs, income, and the materials that industry needs.',
            'Costs: damage to land and water, and the loss of a resource that cannot be replaced.',
            'We can reduce the harm by planning, by cleaning up the waste and by recycling metals.',
          ]}
        />
        <Mistake>Thinking that the harm from mining ends when the mine closes. Waste heaps and polluted water can cause problems for many years.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the most abundant element in the Earth&apos;s crust?</>,
          <>Which method gets iron from iron ore?</>,
          <>Which two substances dissolve gold in the cyanide process?</>,
          <>Name one effect of mining on the environment.</>,
        ]}
        answers={[
          <>Oxygen.</>,
          <>Heating the ore with carbon.</>,
          <>Sodium cyanide and oxygen.</>,
          <>For example damage to the land, acid mine water or dust.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the lithosphere?",
    options: ["The layer of air around the Earth", "All the water on the Earth", "The Earth's crust and upper mantle", "The Earth's inner core"],
    answer: "The Earth's crust and upper mantle",
    explanation: "The lithosphere is the crust and the upper part of the mantle.",
  },
  {
    prompt: "Which of these resources of the Earth's crust is non-renewable?",
    options: ["Coal", "Sunlight", "Wind", "Rainwater"],
    answer: "Coal",
    explanation: "Fossil fuels such as coal formed over millions of years and cannot be replaced in our lifetime.",
  },
  {
    prompt: "What is an ore?",
    options: ["A metal in its pure form, ready to use", "A kind of fossil fuel formed from old plants", "Any rock that is found in the Earth's crust", "A rock with enough mineral to be worth mining"],
    answer: "A rock with enough mineral to be worth mining",
    explanation: "An ore is mined because it has a useful mineral, from which a metal can be recovered.",
  },
  {
    prompt: "What is a reserve of a mineral?",
    options: ["All the mineral that is believed to exist", "The part of the resource that can be mined at a profit", "The mineral that has already been mined", "The waste rock around the mineral"],
    answer: "The part of the resource that can be mined at a profit",
    explanation: "A resource is everything that is believed to exist. A reserve is the part that can be mined at a profit.",
  },
  {
    prompt: "Which element is the most abundant in the Earth's crust?",
    options: ["Iron", "Oxygen", "Gold", "Carbon"],
    answer: "Oxygen",
    explanation: "Oxygen makes up about 46% of the crust by mass, followed by silicon.",
  },
  {
    prompt: "Oxygen makes up about 46% and silicon about 28% of the Earth's crust. What percentage do the two together make up?",
    options: ["18%", "13%", "26%", "74%"],
    answer: "74%",
    explanation: "46 + 28 = 74%, which is more than half of the crust.",
  },
  {
    prompt: "Why is gold worth mining although it is very rare?",
    options: ["It is valuable and does not corrode", "It is the most common metal", "It is a fossil fuel", "It is easy to find as a free element in every rock"],
    answer: "It is valuable and does not corrode",
    explanation: "Gold is rare and valuable, and it does not corrode, so it is worth the cost of mining it.",
  },
  {
    prompt: "Which method is used to get iron from iron ore?",
    options: ["Heating the ore with no other substance", "Separating the iron from the rock by hand", "Heating the ore with carbon", "Dissolving the ore in water"],
    answer: "Heating the ore with carbon",
    explanation: "Carbon removes the oxygen from iron oxide and so reduces it to iron.",
  },
  {
    prompt: "2Fe₂O₃ + 3C → 4Fe + 3CO₂. How many moles of iron form from 2 mol of Fe₂O₃?",
    options: ["2 mol", "3 mol", "6 mol", "4 mol"],
    answer: "4 mol",
    explanation: "The ratio Fe₂O₃ : Fe is 2 : 4, so 2 mol of Fe₂O₃ gives 4 mol of iron.",
  },
  {
    prompt: "Where is the major gold-mining area of South Africa?",
    options: ["The Karoo near Beaufort West", "The Witwatersrand around Johannesburg", "The Western Cape coast", "The Kruger National Park"],
    answer: "The Witwatersrand around Johannesburg",
    explanation: "The Witwatersrand is the major gold-mining area, with mines also in the Free State.",
  },
  {
    prompt: "Which two substances are used to dissolve gold in the cyanide process?",
    options: ["Sodium cyanide and oxygen", "Sodium chloride and nitrogen", "Carbon and oxygen", "Zinc and hydrogen"],
    answer: "Sodium cyanide and oxygen",
    explanation: "Gold dissolves in a mixture of sodium cyanide and oxygen. The gold is oxidised.",
  },
  {
    prompt: "In the recovery of gold with zinc, what happens to the gold ions?",
    options: ["They are oxidised to gold metal", "They are burnt in oxygen", "They are reduced to gold metal", "They are filtered out as a gas"],
    answer: "They are reduced to gold metal",
    explanation: "Zinc gives electrons to the gold ion, so the gold is reduced and precipitates as the metal.",
  },
  {
    prompt: "What is smelting?",
    options: ["Crushing the ore into a very fine powder", "Dissolving the ore in a strong acid", "Heating to melt a metal and free it of impurities", "Digging the ore out of the ground by machine"],
    answer: "Heating to melt a metal and free it of impurities",
    explanation: "In smelting the metal is melted, for example gold is melted and poured into bars.",
  },
  {
    prompt: "Which effect of mining on water is correct?",
    options: ["Mine water can become acid and carry metals", "Mine water always becomes cleaner", "Mine water cannot reach rivers", "Mining has no effect on water"],
    answer: "Mine water can become acid and carry metals",
    explanation: "Waste rock and mine water can cause acid water that carries dissolved metals into rivers.",
  },
];

const MiningMinerals = () => (
  <CapsSubjectTopic
    title="Mining and Mineral Processing"
    subtitle="The lithosphere, ores, getting metals out of ores, gold in South Africa and the environment"
    learnSteps={learnSteps}
    task="gr11-mining-minerals-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default MiningMinerals;
