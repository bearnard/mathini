import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { CellsLayout } from '../../../../../components/diagrams/tech8/Tech8d';
import { CELL_VOLTS, SERIES_PARALLEL, SOLAR, SOURCES, parallelLifetime, parallelVolts, seriesVolts } from '../../../../../components/diagrams/tech8/tech8dHelpers';

// Every number comes from tech8dHelpers.ts (tested in tech8dHelpers.test.ts and g8TechT4.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Sources of electrical energy',
    content: slide(
      <>
        <Rule>An electrical system has input devices, output devices and control devices. Input devices that supply the energy include an electrochemical cell, a generator and a solar panel. In an electrochemical cell, chemicals react and change chemical energy into electrical energy. You can make your own cells from fruit, vegetables or salt water.</Rule>
        <FactCards
          cards={[
            { title: 'Electrochemical cell', line1: 'chemical energy to', line2: 'electrical energy' },
            { title: 'Fruit or salt-water cell', line1: 'chemical energy to electrical', line2: 'energy: a small voltage' },
            { title: 'Solar (photovoltaic) cell', line1: 'light energy to', line2: 'electrical energy' },
            { title: 'Generator', line1: 'movement (kinetic energy) to', line2: 'electrical energy' },
          ]}
          aria={`Sources of electrical energy. ${SOURCES.map((s) => `${s.name}: ${s.energy}`).join('. ')}.`}
        />
        <Worked
          title="Make a fruit battery"
          steps={[
            'Push a copper strip and a zinc strip into a lemon, not touching each other.',
            'The acid in the lemon reacts with the metals and makes a small voltage between the two strips.',
            'One lemon is not enough to light a bulb, but several lemons joined in series can power a small device.',
          ]}
        />
        <Mistake>Thinking that a fruit stores electricity. It supplies chemicals that react with the metals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cells in series and in parallel',
    content: slide(
      <>
        <Rule>Cells can be joined in series or in parallel to make a battery. In series, the voltages of identical cells add up, so the voltage is higher. In parallel, the voltage stays the same as for one cell but the battery can supply the current for longer. Each way has advantages and disadvantages.</Rule>
        <CellsLayout kind="series" cells={3} />
        <Worked
          title={`Three ${n(CELL_VOLTS)} V cells`}
          steps={[
            `In series: 3 × ${n(CELL_VOLTS)} = ${n(seriesVolts(3))} V, which makes a lamp brighter, but if one cell goes flat the circuit stops.`,
            `In parallel: the voltage is still ${n(parallelVolts(3))} V, but if one cell lasts 10 hours, three last about ${parallelLifetime(3, 10)} hours.`,
            `So series gives a ${SERIES_PARALLEL.series} and parallel gives a ${SERIES_PARALLEL.parallel}.`,
          ]}
        />
        <Mistake>Thinking that cells in parallel make a higher voltage. The voltage stays the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solar cells',
    content: slide(
      <>
        <Rule>A photovoltaic (solar) cell changes light energy directly into electrical energy. We can weigh up its advantages and disadvantages. Advantages: it {SOLAR.advantages[0]} and {SOLAR.advantages[1]}. Disadvantages: it {SOLAR.disadvantages[0]} and {SOLAR.disadvantages[1]}.</Rule>
        <FactCards
          cards={[
            { title: 'Advantage', line1: 'uses sunlight, a renewable', line2: 'source: no fuel is burned' },
            { title: 'Disadvantage', line1: 'works only when the sun', line2: 'shines' },
            { title: 'Disadvantage', line1: 'the panels cost a lot', line2: 'to buy' },
          ]}
          aria="Solar cells. An advantage: they use sunlight, a renewable source, and no fuel is burned. A disadvantage: they work only when the sun shines. Another disadvantage: the panels cost a lot to buy."
        />
        <Worked
          title="Should a rural clinic use solar cells?"
          steps={[
            'Advantage: no fuel has to be delivered, and the sun shines on most days.',
            'Disadvantage: at night or in cloud a battery is needed, which adds cost.',
            'A balanced answer weighs both and gives a recommendation with a reason.',
          ]}
        />
        <Mistake>Saying that solar cells work at night. They need light, so a storage battery is needed for the dark.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Describe the energy change in a cell.</>,
          <>Find the voltage of a series battery of three 1,5 V cells.</>,
          <>What is the advantage of cells in parallel?</>,
          <>Give one disadvantage of solar cells.</>,
        ]}
        answers={[
          <>Chemical energy to electrical energy.</>,
          <>{n(seriesVolts(3))} V.</>,
          <>The battery lasts longer at the same voltage.</>,
          <>They work only when the sun shines (or the panels cost a lot).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is an input device in an electrical system?",
    options: ["A lamp", "A buzzer", "A cell", "A switch"],
    answer: "A cell",
    explanation: "Input devices supply the energy: a cell, a generator or a solar panel.",
  },
  {
    prompt: "An electrochemical cell changes one form of energy into another. Which?",
    options: ["Chemical to electrical", "Light to electrical", "Electrical to chemical", "Heat to light"],
    answer: "Chemical to electrical",
    explanation: "The chemicals react and give electrical energy.",
  },
  {
    prompt: "What is needed to make a simple fruit battery?",
    options: ["Two identical plastic strips", "A bulb and a switch only", "A magnet", "Two different metals in the fruit"],
    answer: "Two different metals in the fruit",
    explanation: "Two different metals react with the acid in the fruit and make a small voltage.",
  },
  {
    prompt: "A fruit battery gives a voltage that is...",
    options: ["Very large", "Small", "Always zero", "Equal to the national grid"],
    answer: "Small",
    explanation: "A single fruit cell gives only a small voltage.",
  },
  {
    prompt: "A battery has three 1,5 V cells in series. What is its voltage?",
    options: ["1,5 V", "4,5 V", "0,5 V", "3 V"],
    answer: "4,5 V",
    explanation: "The voltages add: 3 × 1,5 = 4,5 V.",
  },
  {
    prompt: "Two cells of 1,5 V each are joined in series. What voltage do they give?",
    options: ["1,5 V", "0,75 V", "4,5 V", "3 V"],
    answer: "3 V",
    explanation: "Identical cells in series add their voltages, so 2 × 1,5 V = 3 V.",
  },
  {
    prompt: "A battery has three 1,5 V cells in parallel. What voltage does it give?",
    options: ["1,5 V", "4,5 V", "0,5 V", "3 V"],
    answer: "1,5 V",
    explanation: "In parallel the voltage stays the same as for one cell.",
  },
  {
    prompt: "What is an advantage of connecting cells in series?",
    options: ["A longer life at the same voltage", "No chemicals are needed", "A higher voltage", "The cells never go flat"],
    answer: "A higher voltage",
    explanation: "Series cells add their voltages.",
  },
  {
    prompt: "What is an advantage of connecting cells in parallel?",
    options: ["The voltage is added up", "The cells need no wires", "The current stops", "The battery lasts longer"],
    answer: "The battery lasts longer",
    explanation: "In parallel the voltage stays the same but the supply lasts longer.",
  },
  {
    prompt: "If one cell lasts 10 hours, about how long do three identical cells in parallel last with the same load?",
    options: ["10 hours", "30 hours", "3 hours", "13 hours"],
    answer: "30 hours",
    explanation: "Three cells share the work, so they last about 3 × 10 = 30 hours.",
  },
  {
    prompt: "What does a photovoltaic cell change into electrical energy?",
    options: ["Light energy", "Chemical energy", "Heat energy only", "Sound energy"],
    answer: "Light energy",
    explanation: "Solar cells change light directly into electricity.",
  },
  {
    prompt: "Which is an advantage of solar cells?",
    options: ["They work at night", "They are very cheap to buy", "They use renewable sunlight", "They burn coal cleanly"],
    answer: "They use renewable sunlight",
    explanation: "Sunlight is a renewable source and no fuel is burned.",
  },
  {
    prompt: "Which is a disadvantage of solar cells?",
    options: ["They pollute the air", "They need coal to run", "They need the sun to shine", "They make a lot of noise"],
    answer: "They need the sun to shine",
    explanation: "At night or in cloud they give little or no electricity.",
  },
  {
    prompt: "A clinic uses solar cells and needs electricity at night. What does it also need?",
    options: ["A storage battery", "More windows", "A bigger switch", "A resistor in series"],
    answer: "A storage battery",
    explanation: "A battery stores the energy for the dark.",
  },
];

const CellsBatteriesSolar = () => (
  <CapsSubjectTopic
    title="Electrochemical and Solar Cells"
    subtitle="Cells and batteries, series and parallel cells and solar cells"
    learnSteps={learnSteps}
    task="gr8-cells-batteries-solar-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default CellsBatteriesSolar;
