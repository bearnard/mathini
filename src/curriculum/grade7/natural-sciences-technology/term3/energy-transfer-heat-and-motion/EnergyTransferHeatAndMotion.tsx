import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Track energy transfer in heat and motion systems',
    image: {
      src: '/curriculum/grade7/nst/term3/energy-transfer-heat-and-motion/diagram.webp',
      alt: 'Grade 7 learners analysing heat transfer and motion in everyday energy systems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Energy can be stored as <strong>kinetic</strong> or <strong>potential</strong> and transferred by
          <strong> conduction, convection,</strong> and <strong>radiation</strong>. Learners evaluate insulation
          ideas and explain why efficiency matters in real systems.
        </p>
      </div>
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
