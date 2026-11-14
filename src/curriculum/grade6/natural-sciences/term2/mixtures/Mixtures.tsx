import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a mixture?',
    image: { src: '/curriculum/grade6/nst/term2/mixtures/diagram.webp', alt: 'different examples of mixtures' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>mixture</strong> is made when two or more materials are mixed together. The materials are not chemically joined and can often be separated again.
        </p>
      </div>
    ),
  },
  {
    title: 'Mixtures around us',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Breakfast cereal, fruit salad, muddy water, and air are all <strong>mixtures</strong>. Some are easy to see, while others look the same throughout.
        </p>
      </div>
    ),
  },
  {
    title: 'Parts keep their properties',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a mixture, each material keeps many of its own <strong>properties</strong>. This is why raisins can be picked from cereal and sand can settle out of muddy water.
        </p>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What is a mixture?', options: ['Two or more materials mixed together', 'A single pure material only', 'A material that cannot be separated', 'Only a liquid'], answer: 'Two or more materials mixed together', explanation: 'A mixture has two or more materials together.' },
  { prompt: 'Which is an example of a mixture?', options: ['Fruit salad', 'Pure copper only', 'One grain of salt', 'A single glass bead'], answer: 'Fruit salad', explanation: 'Fruit salad has different fruits mixed together.' },
  { prompt: 'In a mixture, the materials are usually...', options: ['not chemically joined', 'changed into new atoms', 'always impossible to see', 'always melted'], answer: 'not chemically joined', explanation: 'The parts of a mixture are together but not chemically joined.' },
  { prompt: 'Which mixture contains a solid and a liquid?', options: ['Muddy water', 'Dry sugar only', 'Clean oxygen gas', 'A steel nail'], answer: 'Muddy water', explanation: 'Muddy water contains soil particles mixed with water.' },
  { prompt: 'Why can cereal with raisins be separated by hand?', options: ['The pieces are different and visible', 'The raisins dissolve', 'The cereal becomes a gas', 'The pieces are chemically joined'], answer: 'The pieces are different and visible', explanation: 'Visible solid pieces can often be picked apart.' },
  { prompt: 'Which statement about air is correct?', options: ['Air is a mixture of gases', 'Air is only water', 'Air is a single solid', 'Air is not matter'], answer: 'Air is a mixture of gases', explanation: 'Air contains gases such as nitrogen, oxygen, and carbon dioxide.' },
  { prompt: 'Which is NOT a good example of a mixture?', options: ['Pure distilled water', 'Trail mix', 'Muddy water', 'Breakfast cereal'], answer: 'Pure distilled water', explanation: 'Pure distilled water has only one substance.' },
  { prompt: 'What happens to the sand in sand mixed with sugar?', options: ['It keeps its properties', 'It becomes sugar', 'It disappears forever', 'It becomes a gas'], answer: 'It keeps its properties', explanation: 'Materials in a mixture keep many of their own properties.' },
  { prompt: 'Why are mixtures often separable?', options: ['The materials are not chemically joined', 'The materials change into new substances', 'The materials are different colours', 'The materials weigh exactly the same'], answer: 'The materials are not chemically joined', explanation: 'Because the parts are not joined chemically, physical methods can separate them.' },
];

const Mixtures = () => (
  <NstTopic title="Mixtures" subtitle="Materials mixed together" learnSteps={learnSteps} task="mixtures" bank={bank} />
);

export default Mixtures;
