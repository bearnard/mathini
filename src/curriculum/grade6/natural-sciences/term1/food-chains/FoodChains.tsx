import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';
import { FoodChain, FoodWeb } from '@/components/diagrams/FoodChains';

const learnSteps: LearnStep[] = [
  {
    title: 'Energy moves through food chains',
    content: (
      <div className="space-y-4 text-center">
        <FoodChain />
        <p className="text-lg text-slate-600">
          A <strong>food chain</strong> shows how energy moves from one living thing to another.
          The <strong>arrows point to the eater</strong>, because energy moves into the animal that eats.
        </p>
      </div>
    ),
  },
  {
    title: 'Producers, consumers, and decomposers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Producers</strong>, like plants, make their own food. <strong>Consumers</strong>
          eat plants or animals. <strong>Decomposers</strong>, like fungi and bacteria, break down dead
          material and return nutrients to the soil.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Producer</strong><br />grass</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Consumer</strong><br />springbok or lion</div>
          <div className="rounded-xl bg-stone-100 p-4"><strong>Decomposer</strong><br />fungus or bacteria</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Food webs are many connected chains',
    content: (
      <div className="space-y-4 text-center">
        <FoodWeb />
        <p className="text-lg text-slate-600">
          A <strong>food web</strong> is made of many linked food chains. Animals can be
          <strong> herbivores</strong> that eat plants, <strong>carnivores</strong> that eat animals, or
          <strong> omnivores</strong> that eat both plants and animals.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Herbivore</strong><br />springbok</div>
          <div className="rounded-xl bg-red-50 p-4"><strong>Carnivore</strong><br />lion</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Omnivore</strong><br />baboon</div>
        </div>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What does a food chain show?', options: ['How energy moves between living things', 'How water moves between clouds and rivers', 'How nutrients are mixed into the soil', 'How animals move from place to place'], answer: 'How energy moves between living things', explanation: 'Food chains show feeding relationships and energy flow.' },
  { prompt: 'In a food chain, what does the arrow point to?', options: ['The eater', 'The Sun only', 'The smallest organism', 'The oldest animal'], answer: 'The eater', explanation: 'Arrows point in the direction energy moves, toward the eater.' },
  { prompt: 'Which living thing is a producer?', options: ['Grass', 'Lion', 'Hyena', 'Eagle'], answer: 'Grass', explanation: 'Grass is a plant that makes its own food by photosynthesis.' },
  { prompt: 'Which animal is a herbivore?', options: ['Springbok', 'Lion', 'Leopard', 'Wild dog'], answer: 'Springbok', explanation: 'Springbok eat plants, so they are herbivores.' },
  { prompt: 'Which animal is a carnivore?', options: ['Lion', 'Grasshopper', 'Cow', 'Zebra'], answer: 'Lion', explanation: 'Lions eat other animals, so they are carnivores.' },
  { prompt: 'What is an omnivore?', options: ['An animal that eats plants and animals', 'A plant that makes food', 'An animal that eats only grass', 'A fungus that breaks down leaves'], answer: 'An animal that eats plants and animals', explanation: 'Omnivores have a mixed diet of plant and animal food.' },
  { prompt: 'Which organisms break down dead plants and animals?', options: ['Decomposers', 'Producers', 'Predators', 'Herbivores'], answer: 'Decomposers', explanation: 'Decomposers such as fungi and bacteria recycle nutrients.' },
  { prompt: 'Which food chain is written correctly?', options: ['Grass → springbok → lion', 'Lion → springbok → grass', 'Springbok → grass → lion', 'Grass → lion → springbok'], answer: 'Grass → springbok → lion', explanation: 'Energy moves from producer to herbivore to carnivore.' },
  { prompt: 'What is a food web?', options: ['Many connected food chains', 'One animal eating one plant', 'A list of minerals in soil', 'A map of rivers'], answer: 'Many connected food chains', explanation: 'A food web shows several feeding relationships in an ecosystem.' },
  { prompt: 'What may happen if a producer disappears from a food chain?', options: ['Consumers may have less food', 'Energy will increase for all animals', 'Decomposers will stop existing', 'The Sun will stop shining'], answer: 'Consumers may have less food', explanation: 'Consumers depend directly or indirectly on producers for food energy.' },
];

const FoodChains = () => (
  <NstTopic
    title="Food Chains & Webs"
    subtitle="How feeding relationships move energy"
    learnSteps={learnSteps}
    task="food-chains"
    bank={bank}
  />
);

export default FoodChains;
