import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Identify energy forms and transfer pathways',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Energy appears as heat, light, sound, chemical, electrical, and mechanical forms. Energy can transfer by
          <strong> conduction</strong>, <strong>convection</strong>, and <strong>radiation</strong>, but total
          energy is conserved in a closed system.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which option is an example of chemical energy?',
    options: ['Energy stored in a battery', 'Sound from a speaker', 'Light from the Sun', 'Heat from a stove plate'],
    answer: 'Energy stored in a battery',
    explanation: 'Batteries store energy chemically before converting it to electrical energy.',
  },
  {
    prompt: 'How is heat mostly transferred through a metal spoon in hot soup?',
    options: ['Conduction', 'Convection', 'Radiation only', 'Evaporation'],
    answer: 'Conduction',
    explanation: 'Conduction transfers heat through direct particle collisions in solids.',
  },
  {
    prompt: 'Which process mainly transfers heat in liquids and gases by movement of particles?',
    options: ['Convection', 'Conduction', 'Reflection', 'Diffusion'],
    answer: 'Convection',
    explanation: 'Convection involves warmer, less dense fluid rising and cooler fluid sinking.',
  },
  {
    prompt: 'The Sun warms Earth mainly through...',
    options: ['Radiation', 'Conduction through space', 'Convection in vacuum', 'Direct contact transfer'],
    answer: 'Radiation',
    explanation: 'Radiation transfers energy by electromagnetic waves and does not need a medium.',
  },
  {
    prompt: 'Which sequence shows an energy transfer in a torch?',
    options: ['Chemical to electrical to light', 'Light to chemical to sound', 'Mechanical to nuclear to light', 'Heat to gravitational to chemical'],
    answer: 'Chemical to electrical to light',
    explanation: 'A torch battery converts chemical energy to electrical, then to light.',
  },
  {
    prompt: 'What does conservation of energy mean?',
    options: ['Energy cannot be made or destroyed, only changed or moved', 'Energy is always lost completely in any process', 'Only electrical energy can be conserved', 'Conserved energy never changes from one form'],
    answer: 'Energy cannot be made or destroyed, only changed or moved',
    explanation: 'Total energy remains constant, though forms can change.',
  },
  {
    prompt: 'Which material is generally a good thermal insulator?',
    options: ['Plastic foam', 'Copper', 'Aluminium', 'Steel'],
    answer: 'Plastic foam',
    explanation: 'Foam traps air and reduces heat transfer.',
  },
  {
    prompt: 'Why does a black surface usually heat up faster in sunlight than a white surface?',
    options: ['It absorbs more radiant energy', 'It creates more gravity', 'It blocks all conduction', 'It has no particles'],
    answer: 'It absorbs more radiant energy',
    explanation: 'Dark surfaces absorb more radiation and usually warm faster.',
  },
];

const FormsAndTransferOfEnergy = () => (
  <CapsSubjectTopic
    title="Forms and Transfer of Energy"
    subtitle="Energy forms, transfers, and conservation in everyday systems"
    learnSteps={learnSteps}
    task="gr8-forms-and-transfer-of-energy-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default FormsAndTransferOfEnergy;
