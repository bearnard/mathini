import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FiltrationSetup, ParticleStates, PhBar } from '../../../../../components/diagrams/science/SciencePictures';
import { litmus, phZone } from '../../../../../components/diagrams/science/scienceHelpers';

// What the litmus paper does in each zone comes from a tested helper (scienceHelpers.test.ts).
const inAcid = litmus('blue', phZone(2));
const inBase = litmus('red', phZone(12));
const inWater = litmus('blue', phZone(7));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Solids, liquids and gases: the particle model',
    content: slide(
      <>
        <Rule>
          Matter is made of tiny particles. The <strong>particle model</strong> says how they are arranged and how they move in a solid, a liquid and a gas.
        </Rule>
        <ParticleStates />
        <Worked
          title="A block of ice melts, then boils"
          steps={[
            <>In ice the particles sit tightly packed, each one jiggling in place without moving away.</>,
            <>Melted, it is a liquid: the particles are still close but can slide past each other.</>,
            <>Boiled, it is a gas: the particles are far apart and move freely.</>,
          ]}
        />
        <Mistake>Believing the particles in a solid do not move. They vibrate on the spot, but they do not change places.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixtures and solutions',
    content: slide(
      <>
        <Rule>
          A <strong>mixture</strong> is two or more substances mixed but not chemically joined. A <strong>solution</strong> is a mixture where a solute dissolves in a solvent.
        </Rule>
        <Worked
          title="Salt and sand in water"
          steps={[
            <>Stir salt into water. The salt (the solute) dissolves in the water (the solvent): a solution.</>,
            <>Stir sand into water. The sand does not dissolve and sinks: a mixture, but not a solution.</>,
            <>The dissolved salt has not gone. If the water evaporates, the salt is left behind.</>,
          ]}
        />
        <Mistake>Saying dissolved salt has disappeared. It is still there, spread out in the water as tiny particles.</Mistake>
      </>,
    ),
  },
  {
    title: 'Separating mixtures',
    content: slide(
      <>
        <Rule>Choose the method that uses a difference between the parts. Filtration separates an insoluble solid from a liquid.</Rule>
        <FiltrationSetup />
        <Worked
          title="Separate sand from water"
          steps={[
            <>Pour the mixture through a funnel lined with filter paper.</>,
            <>The sand is insoluble and too big to pass through, so the paper traps it.</>,
            <>The water passes through into the beaker. Filtration is the best method for sand and water.</>,
          ]}
        />
        <Mistake>Using a filter to remove dissolved salt. Dissolved particles pass through the paper. Evaporate the water instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acids, bases and indicators',
    content: slide(
      <>
        <Rule>
          Indicators show whether a substance is an acid or a base. Blue litmus turns red in an acid. Red litmus turns blue in a base.
        </Rule>
        <PhBar />
        <Worked
          title="Test three liquids with litmus paper"
          steps={[
            <>An acid (pH below 7): blue litmus turns {inAcid}.</>,
            <>A base (pH above 7): red litmus turns {inBase}.</>,
            <>Pure water (pH 7, neutral): blue litmus stays {inWater}, so neither colour changes.</>,
          ]}
        />
        <Mistake>Tasting or touching unknown liquids to test them. Use indicators, and wear safety goggles.</Mistake>
      </>,
    ),
  },
  {
    title: 'Chemical change',
    content: slide(
      <>
        <Rule>
          In a chemical change a new substance forms. A clue is a new gas forming during the reaction, or a change of colour or temperature.
        </Rule>
        <Worked
          title="Vinegar and baking soda"
          steps={[
            <>Mix vinegar with baking soda. It fizzes: bubbles of gas appear.</>,
            <>The gas is a new substance that was not there before: a chemical change.</>,
            <>Melting ice is different. It is still water, only in another state: a physical change.</>,
          ]}
        />
        <Mistake>Thinking every bubble means a chemical change. Boiling water makes bubbles of steam, which is still water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How are the particles arranged in a block of ice?</>,
          <>What is a solution?</>,
          <>What does blue litmus paper do in an acid? And red litmus in a base?</>,
          <>Which method separates sand from water? What observation suggests a chemical change?</>,
        ]}
        answers={[
          <>Close together and vibrating in fixed positions.</>,
          <>A mixture where a solute dissolves in a solvent.</>,
          <>Blue litmus turns red in an acid. Red litmus turns blue in a base.</>,
          <>Filtration. A new gas forms during the reaction.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In a solid, particles are usually...',
    options: ['close together and vibrating in fixed positions', 'far apart and moving freely', 'only moving in circles around magnets', 'not moving at all'],
    answer: 'close together and vibrating in fixed positions',
    explanation: 'Solid particles are tightly packed and mostly vibrate in place.',
  },
  {
    prompt: 'What is a solution?',
    options: ['A mixture where a solute dissolves in a solvent', 'Any pure metal', 'Only gas mixed with gas', 'A substance that cannot be separated'],
    answer: 'A mixture where a solute dissolves in a solvent',
    explanation: 'Solutions form when one substance dissolves evenly in another.',
  },
  {
    prompt: 'What usually happens to blue litmus paper in an acid?',
    options: ['It turns red', 'It turns green', 'It stays blue only in all cases', 'It becomes magnetic'],
    answer: 'It turns red',
    explanation: 'Blue litmus is a common indicator that changes red in acidic substances.',
  },
  {
    prompt: 'What usually happens to red litmus paper in a base?',
    options: ['It turns blue', 'It turns black', 'It always becomes yellow', 'It dissolves immediately'],
    answer: 'It turns blue',
    explanation: 'Bases cause red litmus paper to change to blue.',
  },
  {
    prompt: 'Which method is best for separating sand from water?',
    options: ['Filtration', 'Evaporation only', 'Magnetism', 'Freezing both substances'],
    answer: 'Filtration',
    explanation: 'A filter traps insoluble sand while water passes through.',
  },
  {
    prompt: 'Which observation suggests a chemical change may have happened?',
    options: ['A new gas forms during the reaction', 'Ice melts to water', 'Water evaporates and condenses', 'Salt dissolves and can be recovered'],
    answer: 'A new gas forms during the reaction',
    explanation: 'Gas production can indicate a new substance formed in a chemical change.',
  },
];

const MatterMixturesAcidsAndBases = () => (
  <CapsSubjectTopic
    title="Matter, Mixtures, Acids and Bases"
    subtitle="Particle model, indicators, and separation methods"
    learnSteps={learnSteps}
    task="gr7-matter-mixtures-acids-and-bases-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default MatterMixturesAcidsAndBases;
