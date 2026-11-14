import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Food gives your body what it needs',
    image: {
      src: '/curriculum/grade6/nst/term1/nutrients/diagram.webp',
      alt: 'balanced plate with different healthy foods',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Nutrients</strong> are useful substances in food. They help your body get
          <strong> energy</strong>, grow, repair itself, and stay healthy.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4 font-bold text-amber-700">energy</div>
          <div className="rounded-xl bg-rose-50 p-4 font-bold text-rose-700">growth and repair</div>
          <div className="rounded-xl bg-emerald-50 p-4 font-bold text-emerald-700">healthy body</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Main nutrient groups',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Carbohydrates</strong> give energy. <strong>Proteins</strong> help growth and repair.
          <strong> Fats</strong> store energy and protect organs. <strong>Vitamins</strong> and
          <strong> minerals</strong> help your body work properly.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4"><strong>Carbohydrates:</strong> bread, rice, maize meal</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Proteins:</strong> beans, eggs, fish</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Fats:</strong> avocado, nuts, oil</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Vitamins and minerals:</strong> fruit and vegetables</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Balanced diets include fibre and water',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>balanced diet</strong> has different foods in the right amounts. <strong>Fibre</strong>
          helps food move through your gut, and <strong>water</strong> helps your body transport
          substances and stay cool.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>many food groups</span>
          <span className="text-slate-400">+</span>
          <span>fibre</span>
          <span className="text-slate-400">+</span>
          <span>water</span>
          <span className="text-slate-400">=</span>
          <span className="text-sky-700">balanced diet</span>
        </div>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'Which nutrient group is the main source of quick energy?', options: ['Carbohydrates', 'Proteins', 'Minerals', 'Water'], answer: 'Carbohydrates', explanation: 'Carbohydrates such as bread and maize meal give the body energy.' },
  { prompt: 'Which nutrients help your body grow and repair muscles?', options: ['Proteins', 'Fibre', 'Vitamins', 'Water'], answer: 'Proteins', explanation: 'Proteins are needed for growth and repair of body tissues.' },
  { prompt: 'Which nutrient can store energy and help protect organs?', options: ['Fats', 'Minerals', 'Fibre', 'Oxygen'], answer: 'Fats', explanation: 'Fats store energy and help protect the body, but should be eaten in healthy amounts.' },
  { prompt: 'Why do we need vitamins?', options: ['To help the body stay healthy', 'To make food taste salty', 'To replace all water', 'To stop digestion'], answer: 'To help the body stay healthy', explanation: 'Vitamins help many body processes work properly.' },
  { prompt: 'Which food is a good source of fibre?', options: ['Whole fruit', 'Plain sugar', 'Cooking oil', 'Salt'], answer: 'Whole fruit', explanation: 'Fruit, vegetables, and whole grains contain fibre.' },
  { prompt: 'What does water help the body do?', options: ['Transport substances and cool down', 'Build bones by itself', 'Replace all food', 'Create sunlight'], answer: 'Transport substances and cool down', explanation: 'Water helps move substances in the body and controls temperature.' },
  { prompt: 'What is a balanced diet?', options: ['Eating different foods in the right amounts', 'Eating only one favourite food', 'Avoiding all vegetables', 'Drinking only juice'], answer: 'Eating different foods in the right amounts', explanation: 'A balanced diet gives the body all the nutrients it needs.' },
  { prompt: 'Which food is rich in protein?', options: ['Beans', 'White sugar', 'Lettuce water', 'Salt crystals'], answer: 'Beans', explanation: 'Beans are a plant food that contains protein.' },
  { prompt: 'Which nutrient group includes calcium and iron?', options: ['Minerals', 'Carbohydrates', 'Fats', 'Fibre'], answer: 'Minerals', explanation: 'Calcium and iron are minerals needed by the body.' },
  { prompt: 'Which choice is the healthiest lunch?', options: ['Chicken, brown rice, vegetables, and water', 'Only sweets and cooldrink', 'Only fried chips', 'Only white bread'], answer: 'Chicken, brown rice, vegetables, and water', explanation: 'This meal includes protein, carbohydrates, vitamins, minerals, fibre, and water.' },
];

const Nutrients = () => (
  <NstTopic
    title="Nutrients in Food"
    subtitle="How food helps your body work"
    learnSteps={learnSteps}
    task="nutrients"
    bank={bank}
  />
);

export default Nutrients;
