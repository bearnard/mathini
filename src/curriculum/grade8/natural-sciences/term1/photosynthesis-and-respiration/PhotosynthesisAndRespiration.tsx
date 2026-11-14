import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Compare photosynthesis and respiration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Photosynthesis</strong> stores energy by making glucose from carbon dioxide and water using
          sunlight. <strong>Respiration</strong> releases energy from glucose, using oxygen and producing carbon
          dioxide and water. The two processes are linked in ecosystems.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which set gives the main inputs for photosynthesis?',
    options: ['Carbon dioxide, water, and sunlight', 'Glucose, oxygen, and sunlight', 'Water, oxygen, and heat', 'Glucose, carbon dioxide, and heat'],
    answer: 'Carbon dioxide, water, and sunlight',
    explanation: 'Plants use carbon dioxide and water, with light energy, to make glucose.',
  },
  {
    prompt: 'Which gas is released during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    answer: 'Oxygen',
    explanation: 'Oxygen is a product of photosynthesis and is released into the air.',
  },
  {
    prompt: 'What is the main purpose of respiration in cells?',
    options: ['To release usable energy from food', 'To trap sunlight in chlorophyll', 'To make mineral salts in roots', 'To produce chlorophyll in soil'],
    answer: 'To release usable energy from food',
    explanation: 'Respiration breaks down glucose to release energy for life processes.',
  },
  {
    prompt: 'Which statement correctly compares photosynthesis and respiration?',
    options: ['Photosynthesis stores energy; respiration releases energy', 'Photosynthesis and respiration both only release energy', 'Respiration only happens in plants and photosynthesis in animals', 'Both processes happen only at night'],
    answer: 'Photosynthesis stores energy; respiration releases energy',
    explanation: 'Photosynthesis captures and stores energy, while respiration makes that energy available.',
  },
  {
    prompt: 'Chlorophyll is important because it...',
    options: ['absorbs light energy', 'stores oxygen in roots', 'makes carbon dioxide', 'breaks down minerals'],
    answer: 'absorbs light energy',
    explanation: 'Chlorophyll in chloroplasts captures sunlight for photosynthesis.',
  },
  {
    prompt: 'Where does respiration happen?',
    options: ['In all living cells', 'Only in green leaves', 'Only in animal lungs', 'Only in roots at night'],
    answer: 'In all living cells',
    explanation: 'Both plants and animals respire continuously in their cells.',
  },
  {
    prompt: 'If a plant is kept in complete darkness for many days, photosynthesis will mostly...',
    options: ['decrease because no light is available', 'increase because darkness helps chlorophyll', 'stay exactly the same', 'stop respiration immediately'],
    answer: 'decrease because no light is available',
    explanation: 'Without light, the plant cannot carry out normal photosynthesis.',
  },
  {
    prompt: 'Which pair shows products of respiration?',
    options: ['Carbon dioxide and water', 'Glucose and oxygen', 'Nitrogen and glucose', 'Water and chlorophyll'],
    answer: 'Carbon dioxide and water',
    explanation: 'Respiration uses glucose and oxygen and produces carbon dioxide, water, and energy.',
  },
];

const PhotosynthesisAndRespiration = () => (
  <CapsSubjectTopic
    title="Photosynthesis and Respiration"
    subtitle="Inputs, outputs, stored food, and energy release in living systems"
    learnSteps={learnSteps}
    task="gr8-photosynthesis-and-respiration-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default PhotosynthesisAndRespiration;
