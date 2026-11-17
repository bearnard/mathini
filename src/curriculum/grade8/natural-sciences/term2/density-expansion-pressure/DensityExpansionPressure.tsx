import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { DensityLayers, ExpansionPair, PressurePair } from '../../../../../components/diagrams/ns8/Ns8';
import { collisionsPerSecond, floatsOn, massOfVolume } from '../../../../../components/diagrams/ns8/ns8Helpers';

// Every number comes from ns8Helpers.ts (tested in ns8Helpers.test.ts and g8NsT2.test.ts). The masses are rounded teaching values.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Density',
    content: slide(
      <>
        <Rule>The density of a material describes how much mass it has in a given volume. Equal volumes of different materials have different masses: a loaf of bread is less dense than a clay brick of the same size. Density depends on the kind of particles and on the size of the spaces between them.</Rule>
        <FactCards
          cards={[
            { title: 'Low density', line1: 'little mass in the volume:', line2: 'a sponge, polystyrene, air' },
            { title: 'High density', line1: 'a lot of mass in the volume:', line2: 'a metal block, a brick' },
            { title: 'Same volume', line1: 'the denser material has', line2: 'the greater mass' },
          ]}
          aria="Density. A material with low density has little mass in the volume, such as a sponge, polystyrene and air. A material with high density has a lot of mass in the volume, such as a metal block or a brick. For the same volume, the denser material has the greater mass."
        />
        <Worked
          title="Compare 50 cm³ of water and of cooking oil"
          steps={[
            `About 1 g per cm³ for water: ${n(massOfVolume('water', 50))} g in 50 cm³.`,
            `About 0,9 g per cm³ for cooking oil: ${n(massOfVolume('cooking oil', 50))} g in 50 cm³.`,
            'The volumes are equal but the water has more mass, so water is denser than oil.',
          ]}
        />
        <Mistake>Saying that heavy means dense. Density compares the mass of equal volumes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Density and floating',
    content: slide(
      <>        <Rule>A material that is less dense than a liquid floats on it, and one that is denser sinks. Oil is less dense than water, so oil floats on water. In general gases are less dense than liquids and liquids are less dense than solids. Water is an exception: ice is less dense than water, so ice floats.</Rule>
        <DensityLayers />
        <Worked
          title="Will it float on water?"
          steps={[
            `Cooking oil is less dense than water: it floats (${floatsOn('cooking oil', 'water') ? 'yes' : 'no'}).`,
            `Ice is less dense than liquid water: it floats (${floatsOn('ice', 'water') ? 'yes' : 'no'}).`,
            `A piece of iron is denser than water: it sinks (floats: ${floatsOn('iron', 'water') ? 'yes' : 'no'}).`,
          ]}
        />
        <Mistake>Believing that oil mixes into water. Oil spreads out on top, so an oil spill can pollute a large area of the surface.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expansion and contraction',
    content: slide(
      <>
        <Rule>Solids, liquids and gases expand when they are heated and contract when they are cooled. When heated, the particles move more and spread further apart. When cooled, they move less and come closer together. The size and the number of the particles do not change; only the spaces between them get bigger or smaller.</Rule>
        <ExpansionPair />
        <Worked
          title="The ball and ring"
          steps={[
            'A metal ball just passes through a ring when both are cool.',
            'When the ball is heated its particles move more and the ball expands, so it no longer fits.',
            'After cooling, the particles move closer again and the ball fits through the ring.',
          ]}
        />
        <Mistake>Saying that the particles grow bigger when a material is heated. They stay the same size.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gas pressure',
    content: slide(
      <>
        <Rule>A gas exerts pressure because its particles collide with each other and with the walls of the container. Pumping more gas into a container increases the number of particles, so there are more collisions and the pressure goes up.</Rule>
        <PressurePair few={8} many={20} />
        <Worked
          title="Pump up a bicycle tyre"
          steps={[
            'Each stroke of the pump adds more air particles to the tyre.',
            `If 10 particles cause ${collisionsPerSecond(10)} collisions and 20 particles cause ${collisionsPerSecond(20)} collisions, doubling the particles doubles the collisions.`,
            'The pressure rises, which is why the pump gets harder to push.',
          ]}
        />
        <Mistake>Saying that the particles in a gas are squashed together. The spaces between them just get smaller while the particles stay the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Explain what density means.</>,
          <>Why does cooking oil float on water?</>,
          <>Heating a material changes the gaps between its particles. How?</>,
          <>Why does the pressure rise when more air is pumped into a tyre?</>,
        ]}
        answers={[
          <>How much mass it has in a given volume.</>,
          <>It is less dense than water.</>,
          <>They get bigger.</>,
          <>There are more particles, so there are more collisions.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the density of a material tell us?",
    options: ["How big its particles are", "How hot it is", "How much mass it has in a given volume", "How fast its particles diffuse"],
    answer: "How much mass it has in a given volume",
    explanation: "Density is the amount of mass in a given volume.",
  },
  {
    prompt: "Block X and block Y have the same volume. X has a mass of 800 g and Y has a mass of 200 g. Which is denser?",
    options: ["Block X", "Block Y", "They are equally dense", "It cannot be known"],
    answer: "Block X",
    explanation: "For equal volumes, the denser material has the greater mass.",
  },
  {
    prompt: "A loaf of bread and a clay brick are the same size. Which statement is correct?",
    options: ["The bread is denser than the brick", "They have the same density", "The bread has more mass", "The bread is less dense than the brick"],
    answer: "The bread is less dense than the brick",
    explanation: "The brick has more mass in the same volume.",
  },
  {
    prompt: "Cooking oil is poured onto water. What happens?",
    options: ["The oil sinks to the bottom", "The oil floats on the water", "The oil mixes completely with the water", "The oil turns into water"],
    answer: "The oil floats on the water",
    explanation: "Oil is less dense than water, so it floats.",
  },
  {
    prompt: "Why does ice float on liquid water?",
    options: ["Ice is more dense than water", "Ice is less dense than water", "Ice has no particles", "Ice is a gas"],
    answer: "Ice is less dense than water",
    explanation: "Water is an exception: the solid is less dense than the liquid.",
  },
  {
    prompt: "In general, which is the correct order of density from lowest to highest?",
    options: ["Solid, liquid, gas", "Liquid, gas, solid", "Gas, solid, liquid", "Gas, liquid, solid"],
    answer: "Gas, liquid, solid",
    explanation: "Gases are less dense than liquids, and liquids are less dense than solids (except water).",
  },
  {
    prompt: "About 1 g of water fills 1 cm³ and about 0,9 g of cooking oil fills 1 cm³. What is the mass of 50 cm³ of oil?",
    options: ["45 g", "50 g", "0,9 g", "55,6 g"],
    answer: "45 g",
    explanation: "50 × 0,9 = 45 g, less than the 50 g of the same volume of water.",
  },
  {
    prompt: "Why do oil spills pollute a large area of water?",
    options: ["The oil sinks and spreads on the bottom", "The oil mixes evenly through the water", "The oil spreads out on the surface of the water", "The oil turns to gas"],
    answer: "The oil spreads out on the surface of the water",
    explanation: "Oil is less dense than water, so it floats and spreads out.",
  },
  {
    prompt: "What happens to the particles of a material when it is heated?",
    options: ["They get bigger and heavier", "They are slowly destroyed", "They move closer together", "They move more and spread out"],
    answer: "They move more and spread out",
    explanation: "Heated particles move more, so the spaces between them get bigger.",
  },
  {
    prompt: "What happens to the size and number of particles when a material expands?",
    options: ["Both increase", "They do not change", "The size increases and the number stays", "The number decreases"],
    answer: "They do not change",
    explanation: "Only the spaces between the particles change.",
  },
  {
    prompt: "A material is cooled. What happens to the gaps between its particles?",
    options: ["They get smaller", "They get bigger", "They fill with air", "They stay the same"],
    answer: "They get smaller",
    explanation: "The particles move less and come closer, so the material contracts.",
  },
  {
    prompt: "A metal ball just fits through a ring. After the ball is heated it will not fit. Why?",
    options: ["The ring has become denser", "The ball has lost particles", "The ball has expanded", "The ring has contracted"],
    answer: "The ball has expanded",
    explanation: "Heating spreads the particles further apart, so the ball expands.",
  },
  {
    prompt: "What causes the pressure of a gas in a container?",
    options: ["The weight of the container", "The particles being stuck to the wall", "Collisions of particles with the walls", "The particles getting much bigger"],
    answer: "Collisions of particles with the walls",
    explanation: "A gas exerts pressure because of particle collisions.",
  },
  {
    prompt: "More air is pumped into a bicycle tyre. Why does the pressure increase?",
    options: ["More particles give more collisions", "The particles become much bigger", "The particles stop moving at all", "The spaces between them disappear"],
    answer: "More particles give more collisions",
    explanation: "More gas particles in the same volume give more collisions.",
  },
];

const DensityExpansionPressure = () => (
  <CapsSubjectTopic
    title="Density, Expansion and Gas Pressure"
    subtitle="Density and floating, expansion and contraction, and the pressure of a gas"
    learnSteps={learnSteps}
    task="gr8-density-expansion-pressure-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default DensityExpansionPressure;
