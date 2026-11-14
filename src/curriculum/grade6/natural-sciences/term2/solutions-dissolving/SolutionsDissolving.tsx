import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';
import { DissolvingSteps, SoluteSolvent } from '@/components/diagrams/Dissolving';
import FairTest from '@/components/diagrams/FairTest';

const learnSteps: LearnStep[] = [
  {
    title: 'Solutions are special mixtures',
    content: (
      <div className="space-y-4 text-center">
        <DissolvingSteps />
        <p className="text-lg text-slate-600">
          A <strong>solution</strong> is a special mixture where one substance dissolves evenly in another. Sugar water is a solution made from sugar and water.
        </p>
      </div>
    ),
  },
  {
    title: 'Solute and solvent',
    content: (
      <div className="space-y-4 text-center">
        <SoluteSolvent />
        <p className="text-lg text-slate-600">
          The <strong>solute</strong> is the substance that dissolves, such as sugar or salt. The <strong>solvent</strong> is the substance that does the dissolving, often water.
        </p>
      </div>
    ),
  },
  {
    title: 'Changing how fast solids dissolve',
    content: (
      <div className="space-y-4 text-center">
        <FairTest />
        <p className="text-lg text-slate-600">
          Stirring, heating the solvent, and using smaller pieces can make a solute <strong>dissolve</strong> faster. Evaporation can recover the solute from a solution.
        </p>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What is the solute in sugar water?', options: ['Sugar', 'Water', 'Glass', 'Spoon'], answer: 'Sugar', explanation: 'The solute is the substance that dissolves.' },
  { prompt: 'What is the solvent in salt water?', options: ['Water', 'Salt', 'Sand', 'Air'], answer: 'Water', explanation: 'Water is the solvent because it dissolves the salt.' },
  { prompt: 'What is a solution?', options: ['A mixture where a solute dissolves in a solvent', 'A mixture of only large stones', 'A solid that cannot change', 'A magnet and iron only'], answer: 'A mixture where a solute dissolves in a solvent', explanation: 'A solution forms when a substance dissolves evenly in another.' },
  { prompt: 'Which action usually makes sugar dissolve faster in water?', options: ['Stirring', 'Leaving it untouched', 'Using bigger lumps only', 'Adding sand'], answer: 'Stirring', explanation: 'Stirring helps fresh water touch the sugar, so it dissolves faster.' },
  { prompt: 'Which solvent is most common in Grade 6 examples?', options: ['Water', 'Oil only', 'Wood', 'Glass'], answer: 'Water', explanation: 'Water is a common solvent for substances like salt and sugar.' },
  { prompt: 'How can you recover salt from salt water?', options: ['Evaporate the water', 'Use a magnet', 'Pick it out by hand', 'Sieve it with large holes'], answer: 'Evaporate the water', explanation: 'Evaporation removes the water and leaves salt crystals behind.' },
  { prompt: 'Which form of sugar will usually dissolve fastest?', options: ['Fine sugar grains', 'One large sugar cube', 'A wrapped sweet', 'Dry sand'], answer: 'Fine sugar grains', explanation: 'Smaller pieces have more surface area touching the water.' },
  { prompt: 'What does dissolve mean?', options: ['To mix evenly into a solvent', 'To become magnetic', 'To turn into a large stone', 'To be filtered out as residue'], answer: 'To mix evenly into a solvent', explanation: 'A dissolved substance spreads through the solvent to form a solution.' },
  { prompt: 'Which change usually helps salt dissolve faster?', options: ['Using warmer water', 'Using colder oil', 'Not stirring at all', 'Making one large crystal'], answer: 'Using warmer water', explanation: 'Heating the solvent often speeds up dissolving.' },
];

const SolutionsDissolving = () => (
  <NstTopic title="Solutions & Dissolving" subtitle="Solutes, solvents, and solutions" learnSteps={learnSteps} task="solutions-dissolving" bank={bank} />
);

export default SolutionsDissolving;
