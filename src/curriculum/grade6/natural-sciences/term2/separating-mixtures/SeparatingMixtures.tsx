import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';
import SeparatingMixturesDiagram from '@/components/diagrams/SeparatingMixtures';

const learnSteps: LearnStep[] = [
  {
    title: 'Choosing a separation method',
    content: (
      <div className="space-y-4 text-center">
        <SeparatingMixturesDiagram />
        <p className="text-lg text-slate-600">
          We separate mixtures by using differences in their <strong>properties</strong>, such as particle size, magnetism, or whether a material dissolves in water.
        </p>
      </div>
    ),
  },
  {
    title: 'Sorting, sieving, and filtering',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Hand-sorting</strong> separates large visible pieces. <strong>Sieving</strong> separates different-sized solids. <strong>Filtration</strong> separates an insoluble solid from a liquid.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaporation and magnets',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Evaporation</strong> recovers a dissolved solid like salt from salt water. A <strong>magnet</strong> can remove magnetic materials such as iron filings.
        </p>
      <div className="space-y-2">
  <p className="text-slate-600">{"When a mixture of mud and water is poured through filter paper, the clear liquid that passes through is the filtrate and the solid that stays behind on the paper is the residue."}</p>
</div>
</div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'Which method separates sand from water best?', options: ['Filtration', 'Evaporation', 'Magnetism', 'Hand-sorting'], answer: 'Filtration', explanation: 'Filter paper traps the insoluble sand while water passes through.' },
  { prompt: 'Which method can recover salt from salt water?', options: ['Evaporation', 'Sieving', 'Magnetism', 'Hand-sorting'], answer: 'Evaporation', explanation: 'Water evaporates and leaves the dissolved salt behind.' },
  { prompt: 'Which method removes iron filings from sand?', options: ['Using a magnet', 'Evaporation', 'Filtration only', 'Freezing'], answer: 'Using a magnet', explanation: 'Iron filings are magnetic and are attracted to a magnet.' },
  { prompt: 'Which method is best for separating stones from rice?', options: ['Hand-sorting', 'Evaporation', 'Melting', 'Dissolving'], answer: 'Hand-sorting', explanation: 'Large visible pieces can be picked out by hand.' },
  { prompt: 'What does a sieve separate by?', options: ['Particle size', 'Colour only', 'Smell', 'Temperature'], answer: 'Particle size', explanation: 'Small particles pass through sieve holes while larger particles stay behind.' },
  { prompt: 'In filtration, the solid left in the filter paper is called the...', options: ['Residue', 'Filtrate', 'Solution', 'Solvent'], answer: 'Residue', explanation: 'Residue is the solid trapped by the filter paper.' },
  { prompt: 'In filtration, the liquid that passes through is called the...', options: ['Filtrate', 'Residue', 'Magnet', 'Sieve'], answer: 'Filtrate', explanation: 'The filtrate is the liquid collected after passing through the filter.' },
  { prompt: 'Which mixture would be separated well by sieving?', options: ['Gravel and sand', 'Salt dissolved in water', 'Sugar dissolved in tea', 'Air'], answer: 'Gravel and sand', explanation: 'Gravel and sand have different particle sizes.' },
  { prompt: 'Why can we choose different separation methods?', options: ['Mixture parts have different properties', 'All mixtures are the same', 'Materials vanish when mixed', 'Only liquids can be separated'], answer: 'Mixture parts have different properties', explanation: 'Separation methods use property differences like size, magnetism, or solubility.' },
];

const SeparatingMixtures = () => (
  <NstTopic title="Separating Mixtures" subtitle="Using properties to separate materials" learnSteps={learnSteps} task="separating-mixtures" bank={bank} />
);

export default SeparatingMixtures;
