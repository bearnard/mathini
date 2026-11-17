import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { DiffusionPair, ParticleStates } from '../../../../../components/diagrams/ns8/Ns8';
import { STATES, changeOfState } from '../../../../../components/diagrams/ns8/ns8Helpers';

// Every statement comes from ns8Helpers.ts (tested in ns8Helpers.test.ts and g8NsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const melt = changeOfState('solid', 'heat')!;
const boil = changeOfState('liquid', 'heat')!;
const cond = changeOfState('gas', 'cool')!;
const freeze = changeOfState('liquid', 'cool')!;

export const learnSteps: LearnStep[] = [
  {
    title: 'The particle model of matter',
    content: slide(
      <>
        <Rule>The particle model is a scientific theory that explains that all matter (solids, liquids and gases) is made of tiny particles, which are atoms and molecules. The particles are too small to see, and the spaces between them are empty: they contain nothing, not even air.</Rule>
        <ParticleStates />
        <Worked
          title="Compare the three states"
          steps={[
            `Solid: particles are ${STATES.solid.arrangement}, they ${STATES.solid.movement} and the forces between them are ${STATES.solid.forces}.`,
            `Liquid: particles are ${STATES.liquid.arrangement}, they ${STATES.liquid.movement} and the forces are ${STATES.liquid.forces}.`,
            `Gas: particles have ${STATES.gas.arrangement}, they ${STATES.gas.movement}, the forces are ${STATES.gas.forces} and the spaces are ${STATES.gas.spacing}.`,
          ]}
        />
        <Mistake>Thinking that the spaces between particles are filled with air. The spaces are empty.</Mistake>
      </>,
    ),
  },
  {
    title: 'Change of state',
    content: slide(
      <>
        <Rule>Heating and cooling can change the state of a material. When a solid is heated its particles move more and slide past each other, so it melts to a liquid. On further heating the particles move much further apart and the liquid evaporates or boils to form a gas. Cooling reverses the changes.</Rule>
        <FactCards
          cards={[
            { title: 'Heating a solid', line1: `${melt.name} gives a liquid`, line2: 'particles move more' },
            { title: 'Heating a liquid', line1: `${boil.name}`, line2: 'gives a gas' },
            { title: 'Cooling a gas', line1: `${cond.name} gives a liquid`, line2: 'particles slow down' },
            { title: 'Cooling a liquid', line1: `${freeze.name} gives a solid`, line2: 'particles slow down' },
          ]}
          aria="Changes of state. Heating a solid: melting gives a liquid. Heating a liquid: evaporating or boiling gives a gas. Cooling a gas: condensing gives a liquid. Cooling a liquid: freezing gives a solid."
        />
        <Worked
          title="Heat some ice"
          steps={[
            'The ice (solid water) is heated and the particles vibrate more strongly.',
            'The ice melts to liquid water, and the particles can now slide past each other.',
            'On further heating the water boils and the particles move far apart as a gas.',
          ]}
        />
        <Mistake>Saying that the particles themselves melt or get bigger. The particles stay the same; only their movement and spacing change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Diffusion',
    content: slide(
      <>
        <Rule>Diffusion is the process in which particles in liquids and gases move and spread from an area of high concentration to an area of lower concentration. Diffusion is faster in gases than in liquids because the gas particles move faster.</Rule>
        <DiffusionPair />
        <Worked
          title="Smells and dyes"
          steps={[
            'A perfume particle spreads from the bottle through the air of the room: diffusion in a gas.',
            'A drop of dye in water spreads out slowly: diffusion in a liquid, which is slower.',
            'In both the particles move from where there are many to where there are few.',
          ]}
        />
        <Mistake>Saying that diffusion needs wind or stirring. The moving particles spread out by themselves.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How do the particles of a solid move?</>,
          <>What change of state happens when a gas is cooled?</>,
          <>What fills the spaces between particles?</>,
          <>Is diffusion faster in a gas or in a liquid?</>,
        ]}
        answers={[
          <>They vibrate in place.</>,
          <>{cond.name[0].toUpperCase() + cond.name.slice(1)}.</>,
          <>Nothing: the spaces are empty.</>,
          <>In a gas.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the particle model of matter?",
    options: ["A rule that matter cannot change state", "A list of the known elements", "A theory that all matter is made of tiny particles", "A way to measure the mass of a solid"],
    answer: "A theory that all matter is made of tiny particles",
    explanation: "The particle model explains that solids, liquids and gases are all made of particles.",
  },
  {
    prompt: "What do the empty spaces between particles of matter contain?",
    options: ["Nothing: the spaces are empty", "Air", "Water vapour", "Smaller particles of dust"],
    answer: "Nothing: the spaces are empty",
    explanation: "The spaces between particles contain nothing, not even air.",
  },
  {
    prompt: "How do the particles in a solid behave?",
    options: ["They slide past each other in a loose arrangement", "They move very fast with no arrangement", "They stay still and never move at all", "They vibrate in place, closely packed in a regular pattern"],
    answer: "They vibrate in place, closely packed in a regular pattern",
    explanation: "In a solid the particles are closely packed and vibrate against each other.",
  },
  {
    prompt: "How do the particles in a liquid behave?",
    options: ["They are far apart and fixed in place", "They are close together and slide past each other", "They are in a regular pattern and only vibrate", "They are far apart with no forces between them"],
    answer: "They are close together and slide past each other",
    explanation: "Liquid particles are loosely arranged but still quite close together, and they slide past each other.",
  },
  {
    prompt: "Which state of matter has very big spaces between its particles?",
    options: ["Solid", "Gas", "Liquid", "Ice"],
    answer: "Gas",
    explanation: "Gas particles have very big spaces between them and extremely weak forces.",
  },
  {
    prompt: "What is the name for a solid turning into a liquid when it is heated?",
    options: ["Condensing", "Freezing", "Evaporating", "Melting"],
    answer: "Melting",
    explanation: "A solid melts to a liquid when heated.",
  },
  {
    prompt: "What change of state happens when a gas is cooled and becomes a liquid?",
    options: ["Condensing", "Melting", "Freezing", "Boiling"],
    answer: "Condensing",
    explanation: "Cooling a gas makes it condense to a liquid.",
  },
  {
    prompt: "Water in an ice tray is put in a freezer and turns into ice. What is this change?",
    options: ["Melting", "Condensing", "Freezing", "Evaporating"],
    answer: "Freezing",
    explanation: "A liquid freezes (solidifies) when it is cooled further.",
  },
  {
    prompt: "What happens to the particles when a solid is heated and melts?",
    options: ["They get bigger and begin to melt", "They disappear into the air above", "They stop moving altogether", "They move more and slide past each other"],
    answer: "They move more and slide past each other",
    explanation: "Heating makes the particles move more so they can slide past each other.",
  },
  {
    prompt: "What is diffusion?",
    options: ["Particles being pressed into a smaller volume", "Particles spreading from high to low concentration", "Particles changing into other particles", "Particles sinking to the bottom of a liquid"],
    answer: "Particles spreading from high to low concentration",
    explanation: "In diffusion the particles of a liquid or gas spread from where they are highly concentrated to where they are less concentrated.",
  },
  {
    prompt: "Where is diffusion faster?",
    options: ["In a gas", "In a liquid", "In a solid", "It is the same everywhere"],
    answer: "In a gas",
    explanation: "Gas particles move faster, so diffusion is faster in gases than in liquids.",
  },
  {
    prompt: "A drop of dye is put into a glass of water and slowly spreads out. What is this an example of?",
    options: ["Diffusion in a gas", "Melting", "Diffusion in a liquid", "Condensing"],
    answer: "Diffusion in a liquid",
    explanation: "The dye particles spread from a high concentration to a low concentration in the liquid.",
  },
  {
    prompt: "Perfume is sprayed in one corner of a room and is soon smelled across the room. Why?",
    options: ["The particles melt in the air", "The air particles are destroyed", "Its particles diffuse through the air", "The room becomes denser"],
    answer: "Its particles diffuse through the air",
    explanation: "Particles in a gas move quickly and spread by diffusion.",
  },
  {
    prompt: "Which force between particles is strongest?",
    options: ["In a solid", "In a gas", "In a liquid", "It is the same in all three"],
    answer: "In a solid",
    explanation: "A solid has strong forces holding its particles together.",
  },
];

const ParticleModelAndStates = () => (
  <CapsSubjectTopic
    title="Particle Model of Matter and States"
    subtitle="Arrangement and movement of particles, change of state and diffusion"
    learnSteps={learnSteps}
    task="gr8-particle-model-and-states-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ParticleModelAndStates;
