import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use particle ideas and indicators to classify substances',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners use the <strong>particle model</strong> to describe solids, liquids, and gases. They classify
          <strong> mixtures</strong> and <strong>solutions</strong>, then use indicators safely to tell
          <strong> acids</strong> and <strong>bases</strong> apart.
        </p>
      </div>
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
