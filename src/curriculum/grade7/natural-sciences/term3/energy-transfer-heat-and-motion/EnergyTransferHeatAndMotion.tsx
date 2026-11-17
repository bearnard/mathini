import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EnergyHill, HeatTransfer } from '../../../../../components/diagrams/science/SciencePictures';
import { efficiency, wasted } from '../../../../../components/diagrams/science/scienceHelpers';

// The kettle example: every number comes from tested helpers (scienceHelpers.test.ts).
const energyIn = 1000;
const energyUseful = 800;
const kettle = efficiency(energyUseful, energyIn);
const lost = wasted(energyUseful, energyIn);
// SA style: a space between groups of three digits (1 000).
const sa = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Kinetic and potential energy',
    content: slide(
      <>
        <Rule>
          <strong>Kinetic</strong> energy belongs to anything that is moving: the faster it moves, the more it has. <strong>Potential</strong> energy is energy stored, for example by raising an object.
        </Rule>
        <EnergyHill />
        <Worked
          title="A ball rolls down a slope"
          steps={[
            <>At the top the ball is high up and still: it has the most potential energy.</>,
            <>As it rolls down, it speeds up: its kinetic energy grows.</>,
            <>Kinetic energy increases when an object moves faster.</>,
          ]}
        />
        <Mistake>Saying a ball at rest has no energy. A raised ball stores potential energy that can turn into movement.</Mistake>
      </>,
    ),
  },
  {
    title: 'How heat travels',
    content: slide(
      <>
        <Rule>
          Heat moves in three ways: by <strong>conduction</strong> through touching particles in solids, by <strong>convection</strong> in moving liquids and gases, and by <strong>radiation</strong>.
        </Rule>
        <HeatTransfer />
        <Worked
          title="Name the way heat travels"
          steps={[
            <>A spoon gets hot in a pot of soup: conduction, heat moves through direct contact in the solid.</>,
            <>Warm air rises in a room: convection, because the air itself moves.</>,
            <>Sunlight warms the Earth: radiation. It can travel through empty space without particles.</>,
          ]}
        />
        <Mistake>Saying that heat rises. It is the warm air or water that rises, and that is convection.</Mistake>
      </>,
    ),
  },
  {
    title: 'Insulators and conductors',
    content: slide(
      <>
        <Rule>A thermal <strong>conductor</strong> lets heat pass easily. A thermal <strong>insulator</strong> slows heat transfer. Foam is commonly used as an insulator because it traps air.</Rule>
        <Worked
          title="Keeping a drink hot"
          steps={[
            <>Metal is a good conductor, so a metal cup loses heat quickly to your hand and the air.</>,
            <>A foam cup traps air, and trapped air slows the transfer of heat.</>,
            <>So the drink stays warm for longer in the foam cup.</>,
          ]}
        />
        <Mistake>Thinking insulators make things cold. An insulator only slows heat transfer, so it also keeps a cold drink cold.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why efficiency matters',
    content: slide(
      <>
        <Rule>
          Efficiency compares the useful energy out with the total energy put in. An efficient kettle uses less electrical energy to heat the same water.
        </Rule>
        <Worked
          title={`A kettle uses ${sa(energyIn)} J of electrical energy`}
          steps={[
            <>{energyUseful} J of it heats the water: that is the useful part.</>,
            <>The other {lost} J is wasted as heat in the kettle and the air.</>,
            <>{energyUseful} out of {sa(energyIn)} is <strong>{kettle}%</strong> efficient. A kettle that wastes less is more efficient.</>,
          ]}
        />
        <Mistake>Thinking an efficient machine is a powerful one. Efficient means little energy is wasted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A rolling ball has kinetic energy. What gives it that energy?</>,
          <>Name the three ways heat travels. Which one is warm air rising in a room?</>,
          <>By which way of heat transfer does a campfire warm your hands across the gap? Name a material used as an insulator.</>,
          <>What is an efficient kettle?</>,
        ]}
        answers={[
          <>Its motion.</>,
          <>Conduction, convection and radiation. Warm air rising is convection.</>,
          <>By radiation. Foam is an insulator.</>,
          <>One that uses less electrical energy to heat the same water.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Kinetic energy is the energy an object has because of its...',
    options: ['motion', 'colour', 'shape only', 'temperature label'],
    answer: 'motion',
    explanation: 'Kinetic energy increases when an object moves faster.',
  },
  {
    prompt: 'Heat transfer through direct contact in solids is called...',
    options: ['conduction', 'convection', 'radiation', 'reflection'],
    answer: 'conduction',
    explanation: 'Conduction moves heat through touching particles, common in solids.',
  },
  {
    prompt: 'Warm air rising in a room is an example of...',
    options: ['convection', 'conduction', 'radiation only', 'insulation'],
    answer: 'convection',
    explanation: 'Convection transfers heat by movement of fluids like air and water.',
  },
  {
    prompt: 'How does heat from the Sun reach Earth?',
    options: ['By radiation', 'By conduction through space', 'By convection in vacuum only', 'By magnets'],
    answer: 'By radiation',
    explanation: 'Radiation can travel through empty space without particles.',
  },
  {
    prompt: 'Which material is commonly used as a thermal insulator?',
    options: ['Foam', 'Copper', 'Aluminium foil only', 'Steel rod'],
    answer: 'Foam',
    explanation: 'Foam traps air and slows heat transfer.',
  },
  {
    prompt: 'An efficient kettle is one that...',
    options: ['uses less electrical energy to heat the same water', 'is heavier than all of the other kettles', 'takes longer to boil, by design', 'gives off more heat into the room'],
    answer: 'uses less electrical energy to heat the same water',
    explanation: 'Efficiency compares useful output with total energy input.',
  },
];

const EnergyTransferHeatAndMotion = () => (
  <CapsSubjectTopic
    title="Energy Transfer, Heat and Motion"
    subtitle="Energy stores, transfer pathways, and efficiency"
    learnSteps={learnSteps}
    task="gr7-energy-transfer-heat-and-motion-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default EnergyTransferHeatAndMotion;
