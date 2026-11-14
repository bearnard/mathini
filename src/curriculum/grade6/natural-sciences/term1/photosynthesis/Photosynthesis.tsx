import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';
import PhotosynthesisDiagram from '@/components/diagrams/Photosynthesis';

const learnSteps: LearnStep[] = [
  {
    title: 'Plants make their own food',
    content: (
      <div className="space-y-4 text-center">
        <PhotosynthesisDiagram />
        <p className="text-lg text-slate-600">
          <strong>Photosynthesis</strong> is how green plants make their own food. A plant uses
          <strong> sunlight</strong>, <strong>water</strong> from the soil, and <strong>carbon dioxide</strong> from the air.
        </p>
      </div>
    ),
  },
  {
    title: 'Leaves are food factories',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Most photosynthesis happens in the <strong>leaves</strong>. Leaves contain green
          <strong> chlorophyll</strong>, which traps energy from sunlight so the plant can make
          <strong> glucose</strong>, a type of sugar food.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-bold text-emerald-700">Roots</p>
            <p className="text-slate-600">take in water</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-bold text-emerald-700">Leaves</p>
            <p className="text-slate-600">take in carbon dioxide</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-bold text-emerald-700">Chlorophyll</p>
            <p className="text-slate-600">traps light energy</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Food for the plant, oxygen for us',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The plant uses glucose for <strong>energy</strong> and growth. Photosynthesis also releases
          <strong> oxygen</strong> into the air, which animals and people need for breathing.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold">
          <span className="text-emerald-700">plant food</span>
          <span className="text-slate-400">+</span>
          <span className="text-sky-700">oxygen released</span>
        </div>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What is photosynthesis?', options: ['Plants making their own food', 'Animals finding shelter', 'Water freezing into ice', 'Soil turning into rock'], answer: 'Plants making their own food', explanation: 'Photosynthesis is the process plants use to make food.' },
  { prompt: 'Which three things does a plant need for photosynthesis?', options: ['Sunlight, water, and carbon dioxide', 'Moonlight, sand, and oxygen', 'Sugar, salt, and air', 'Meat, water, and sunlight'], answer: 'Sunlight, water, and carbon dioxide', explanation: 'Plants use sunlight, water, and carbon dioxide to make glucose.' },
  { prompt: 'What green substance in leaves traps light energy?', options: ['Chlorophyll', 'Glucose', 'Oxygen', 'Fibre'], answer: 'Chlorophyll', explanation: 'Chlorophyll is the green substance that absorbs light.' },
  { prompt: 'What gas do leaves take in from the air for photosynthesis?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], answer: 'Carbon dioxide', explanation: 'Carbon dioxide enters leaves and is used to make food.' },
  { prompt: 'What food does a plant make during photosynthesis?', options: ['Glucose', 'Protein', 'Minerals', 'Fibre'], answer: 'Glucose', explanation: 'Glucose is a sugar that stores food energy for the plant.' },
  { prompt: 'What gas is released during photosynthesis?', options: ['Oxygen', 'Carbon dioxide', 'Smoke', 'Steam'], answer: 'Oxygen', explanation: 'Plants release oxygen as a useful product of photosynthesis.' },
  { prompt: 'Where does most photosynthesis happen in a plant?', options: ['Leaves', 'Flowers', 'Roots', 'Seeds'], answer: 'Leaves', explanation: 'Leaves are adapted to trap light and take in carbon dioxide.' },
  { prompt: 'Why is photosynthesis important to animals?', options: ['It makes food and oxygen', 'It makes rocks softer', 'It stops all weather', 'It removes all soil'], answer: 'It makes food and oxygen', explanation: 'Animals depend on plants for food and oxygen in ecosystems.' },
  { prompt: 'Which part of a plant takes in water from the soil?', options: ['Roots', 'Petals', 'Fruit', 'Pollen'], answer: 'Roots', explanation: 'Roots absorb water, which travels to the leaves.' },
  { prompt: 'What is the main energy source for photosynthesis?', options: ['The Sun', 'The Moon', 'The soil', 'The wind'], answer: 'The Sun', explanation: 'Sunlight provides the energy for photosynthesis.' },
];

const Photosynthesis = () => (
  <NstTopic
    title="Photosynthesis"
    subtitle="How green plants make food"
    learnSteps={learnSteps}
    task="photosynthesis"
    bank={bank}
  />
);

export default Photosynthesis;
