'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as g from '../../../../../components/diagrams/lifesci/gaps12';

// Numbers come from gaps12.ts (tested in gaps12.test.ts and g12LsGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const loss = g.FOREST.from - g.FOREST.to;
const lossPct = Math.abs(g.percentChange(g.FOREST.from, g.FOREST.to));

export const learnSteps: LearnStep[] = [
  {
    title: 'Causes and effects of human impact',
    content: slide(
      <>
        <Rule>Human activities change the environment. Burning fossil fuels and clearing forests add carbon dioxide to the air and raise global temperatures. Fertilisers and sewage that run into water cause eutrophication. Building, farming and mining destroy habitats, and many species lose their homes and die out. Rubbish and wasted food add to pollution and make food security worse. The Grade 11 work on human impact is also examined in the Grade 12 final examination.</Rule>
        <InfoTable
          cols={[{ title: 'Human activity', w: 34 }, { title: 'Effect on the environment', w: 66 }]}
          rows={[
            ['Burning fossil fuels', 'More CO₂, a stronger greenhouse effect,\nglobal warming'],
            ['Fertiliser and sewage run-off', 'Eutrophication in rivers and dams'],
            ['Clearing land', 'Habitat loss and loss of biodiversity'],
            ['Waste and wasted food', 'Pollution and less food for people'],
          ]}
          aria="A table of human activities and their effects. Burning fossil fuels: more carbon dioxide, a stronger greenhouse effect and global warming. Fertiliser and sewage run-off: eutrophication in rivers and dams. Clearing land: habitat loss and loss of biodiversity. Waste and wasted food: pollution and less food for people."
        />
        <Worked
          title="Build a cause-and-effect chain"
          steps={[
            'Cause: forests are cut down to make farmland.',
            'Effect 1: less carbon dioxide is taken up by trees, and carbon stored in the trees is released.',
            'Effect 2: animals lose their habitat, so biodiversity falls.',
          ]}
        />
        <Mistake>Mixing up the greenhouse effect with the hole in the ozone layer. The greenhouse effect traps heat and causes warming; the ozone layer filters ultraviolet light.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading data on environmental change',
    content: slide(
      <>
        <Rule>Exam questions give data, such as the area of forest in different years. To describe the change, subtract the earlier value from the later value. To find the percentage change, divide the change by the original value and multiply by 100. A negative answer means a decrease. Always include the units.</Rule>
        <InfoTable
          cols={[{ title: 'Year', w: 30 }, { title: 'Forest area (hectares)', w: 70 }]}
          rows={[
            ['Earlier', String(g.FOREST.from).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')],
            ['Later', String(g.FOREST.to).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')],
            ['Change', `−${String(loss).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`],
          ]}
          aria={`A table of forest area in an imaginary region: ${g.FOREST.from} hectares earlier and ${g.FOREST.to} hectares later, a change of minus ${loss} hectares.`}
        />
        <Worked
          title="Calculate the percentage loss (imaginary data)"
          steps={[
            `Change = ${g.FOREST.to} − ${g.FOREST.from} = −${loss} ha.`,
            `Percentage change = ${loss} ÷ ${g.FOREST.from} × 100 = ${g.dec(lossPct)}% decrease.`,
            'Check the direction: a smaller forest means a decrease, so the answer is a loss of one quarter.',
          ]}
        />
        <Mistake>Dividing by the later value. A percentage change is always calculated from the original (earlier) value.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solutions and responsibility',
    content: slide(
      <>
        <Rule>People can reduce their impact. Use less energy and switch to renewable energy, protect forests and plant trees, treat sewage and use less fertiliser, reduce, reuse and recycle waste, and plan land use so that habitats are protected. Laws, businesses and individuals all have a role, and each person can make choices at home and at school.</Rule>
        <InfoTable
          cols={[{ title: 'Problem', w: 32 }, { title: 'Solution', w: 68 }]}
          rows={[
            ['Climate change', 'Use renewable energy, save energy,\nprotect and plant trees'],
            ['Eutrophication', 'Treat sewage, use less fertiliser'],
            ['Habitat loss', 'Protected areas, careful land planning'],
            ['Waste', 'Reduce, reuse, recycle, compost'],
          ]}
          aria="A table of problems and solutions. Climate change: use renewable energy, save energy, protect and plant trees. Eutrophication: treat sewage and use less fertiliser. Habitat loss: protected areas and careful land planning. Waste: reduce, reuse, recycle and compost."
        />
        <Worked
          title="Match the solution to the cause"
          steps={[
            'A river is green with algae after fertiliser run-off: use less fertiliser and treat sewage.',
            'A wetland is drained for housing: protect the wetland and plan the land use.',
            'A school throws away much food: reduce waste and start a compost heap.',
          ]}
        />
        <Mistake>Giving a solution that does not match the cause. Read what the question says is causing the problem, then give a solution that stops that cause.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which gas builds up from burning fossil fuels?</>,
          <>What causes eutrophication?</>,
          <>A forest shrinks from 12 000 ha to 9 000 ha. What is the percentage decrease?</>,
          <>Give one way to reduce waste.</>,
        ]}
        answers={[
          <>Carbon dioxide.</>,
          <>Fertiliser or sewage running into water.</>,
          <>{g.dec(lossPct)}%.</>,
          <>Reduce, reuse, recycle or compost.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which gas builds up in the air from burning fossil fuels and strengthens the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    answer: "Carbon dioxide",
    explanation: "More CO2 traps more heat.",
  },
  {
    prompt: "What is the result of a stronger greenhouse effect?",
    options: ["Global warming", "More ozone", "Colder winters everywhere", "No change"],
    answer: "Global warming",
    explanation: "More heat is trapped.",
  },
  {
    prompt: "What process does fertiliser run-off into a dam cause?",
    options: ["Desertification", "Erosion", "Photosynthesis", "Eutrophication"],
    answer: "Eutrophication",
    explanation: "Nutrients cause algae to grow too fast and use up the oxygen.",
  },
  {
    prompt: "Which activity destroys habitats and lowers biodiversity?",
    options: ["Planting indigenous trees", "Clearing land for development", "Creating a nature reserve", "Recycling paper"],
    answer: "Clearing land for development",
    explanation: "Species lose their homes.",
  },
  {
    prompt: "Which statement distinguishes the greenhouse effect from ozone thinning?",
    options: ["They are in fact the same thing", "One traps heat, the other lets in ultraviolet light", "The ozone layer is what traps heat", "The greenhouse effect filters ultraviolet light"],
    answer: "One traps heat, the other lets in ultraviolet light",
    explanation: "The greenhouse effect traps heat; the ozone layer filters ultraviolet light.",
  },
  {
    prompt: "Forests shrink from 12 000 ha to 9 000 ha. What is the change in area?",
    options: ["+3 000 ha", "-21 000 ha", "-25 ha", "-3 000 ha"],
    answer: "-3 000 ha",
    explanation: "9 000 - 12 000 = -3 000.",
  },
  {
    prompt: "What is the percentage change when a forest shrinks from 12 000 ha to 9 000 ha?",
    options: ["25% decrease", "33% decrease", "25% increase", "3% decrease"],
    answer: "25% decrease",
    explanation: "3 000 / 12 000 x 100 = 25%.",
  },
  {
    prompt: "When calculating a percentage change, by which value do you divide the change?",
    options: ["The new value", "The average", "The original value", "The sum"],
    answer: "The original value",
    explanation: "Percentage change is calculated from the earlier value.",
  },
  {
    prompt: "A negative percentage change shows that the quantity has",
    options: ["increased", "stayed the same", "doubled", "decreased"],
    answer: "decreased",
    explanation: "A negative sign means a decrease.",
  },
  {
    prompt: "A river is green with algae after run-off. Which solution matches the cause?",
    options: ["Plant a garden of cactus plants", "Use less fertiliser and treat sewage", "Burn all of the algae on the bank", "Build a new road beside the river"],
    answer: "Use less fertiliser and treat sewage",
    explanation: "Stop the nutrients from entering the water.",
  },
  {
    prompt: "Which action cuts the amount of waste?",
    options: ["Reduce, reuse and recycle", "Burn rubbish in the open", "Bury it in a river", "Throw it in a veld"],
    answer: "Reduce, reuse and recycle",
    explanation: "Fewer materials reach the dump.",
  },
  {
    prompt: "How do forests help to limit global warming?",
    options: ["Trees make carbon dioxide", "Trees heat the air", "Trees take up carbon dioxide", "Trees remove oxygen"],
    answer: "Trees take up carbon dioxide",
    explanation: "Protecting forests keeps carbon locked in trees.",
  },
  {
    prompt: "Which energy source adds the least carbon dioxide to the air?",
    options: ["Coal from a mine", "Petrol in a car engine", "Wind or solar power", "Diesel in a truck engine"],
    answer: "Wind or solar power",
    explanation: "Renewable energy does not burn fossil fuels.",
  },
  {
    prompt: "Why is wasted food a problem for food security?",
    options: ["Food that could feed people is lost", "It makes food cheaper for everyone", "It gives the soil nutrients only", "It has no effect"],
    answer: "Food that could feed people is lost",
    explanation: "Wasted food also adds to pollution.",
  },
];

const HumanImpactEnvironment = () => (
  <CapsSubjectTopic
    title="Human Impact on the Environment: Paper 2 Revision"
    subtitle="Causes and effects of human impact, reading data on environmental change, solutions and responsibility"
    learnSteps={learnSteps}
    task="gr12-human-impact-environment-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default HumanImpactEnvironment;
