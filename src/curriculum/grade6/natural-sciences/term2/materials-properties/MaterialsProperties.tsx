import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Materials have different properties',
    image: { src: '/curriculum/grade6/nst/term2/materials-properties/diagram.webp', alt: 'objects made from different materials' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>material</strong> is what an object is made from. Materials can be strong, hard, flexible, waterproof, transparent, or good at conducting heat and electricity.
        </p>
      </div>
    ),
  },
  {
    title: 'Choose materials for a job',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          We choose materials because their <strong>properties</strong> make them useful. Glass is transparent for windows, and rubber is flexible and grips the road for tyres.
        </p>
      </div>
    ),
  },
  {
    title: 'Conductors and insulators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Metals usually <strong>conduct</strong> heat and electricity, so they are useful in pots and wires. Plastic and wood are often insulators, so they help keep hands safe from heat.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'Which property means a material does not let water pass through easily?', options: ['Waterproof', 'Transparent', 'Flexible', 'Magnetic'], answer: 'Waterproof', explanation: 'Waterproof materials resist water passing through them.' },
  { prompt: 'Why is glass useful for windows?', options: ['It is transparent', 'It is soft', 'It dissolves in water', 'It is magnetic'], answer: 'It is transparent', explanation: 'Transparent materials let light pass through so we can see through them.' },
  { prompt: 'Which material is usually best for the outside of a tyre?', options: ['Rubber', 'Glass', 'Paper', 'Clay'], answer: 'Rubber', explanation: 'Rubber is flexible and gives good grip on the road.' },
  { prompt: 'Which property is most important for a bridge material?', options: ['Strength', 'Sweet taste', 'Smell', 'Colour only'], answer: 'Strength', explanation: 'A bridge must be strong enough to carry loads safely.' },
  { prompt: 'Why are many cooking pots made from metal?', options: ['Metal conducts heat well', 'Metal is transparent', 'Metal is always soft', 'Metal dissolves quickly'], answer: 'Metal conducts heat well', explanation: 'Metal transfers heat from the stove to the food.' },
  { prompt: 'Which object should be made from an electrical insulator?', options: ['Plastic plug cover', 'Copper wire inside a cable', 'Metal spoon', 'Iron nail'], answer: 'Plastic plug cover', explanation: 'An insulator helps protect people from electric shock.' },
  { prompt: 'What does flexible mean?', options: ['Can bend without breaking easily', 'Lets you see through it', 'Attracts iron', 'Cannot get wet'], answer: 'Can bend without breaking easily', explanation: 'Flexible materials can bend and change shape.' },
  { prompt: 'Which material is hard and often used for cutting tools?', options: ['Steel', 'Sponge', 'Cotton wool', 'Rubber band'], answer: 'Steel', explanation: 'Steel is a hard, strong metal that can keep a sharp edge.' },
  { prompt: 'Why might a raincoat be made from plastic-coated fabric?', options: ['It is waterproof', 'It is a good food', 'It is transparent like glass', 'It is magnetic'], answer: 'It is waterproof', explanation: 'A raincoat needs to stop water reaching your clothes.' },
];

const MaterialsProperties = () => (
  <NstTopic title="Properties of Materials" subtitle="Why we choose certain materials" learnSteps={learnSteps} task="materials-properties" bank={bank} />
);

export default MaterialsProperties;
