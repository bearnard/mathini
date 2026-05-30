import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Ecosystems include living and non-living things',
    image: {
      src: '/curriculum/grade6/nst/term1/ecosystems/diagram.webp',
      alt: 'savanna ecosystem with plants animals water sunlight and soil',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>ecosystem</strong> is a place where living things interact with each other and
          with <strong>non-living things</strong> like sunlight, water, air, rocks, and soil.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Living:</strong> plants, animals, fungi, bacteria</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Non-living:</strong> water, sunlight, air, soil</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Habitats meet organisms needs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>habitat</strong> is the natural home of an organism. It must provide what the
          organism needs, such as <strong>food</strong>, <strong>water</strong>, shelter, space, and air.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>food</span>
          <span className="text-slate-400">+</span>
          <span>water</span>
          <span className="text-slate-400">+</span>
          <span>shelter</span>
          <span className="text-slate-400">+</span>
          <span>space</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Interdependence and adaptations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Living things are <strong>interdependent</strong>, which means they depend on one another.
          <strong> Adaptations</strong> are helpful features or behaviours that help organisms survive
          in their habitats.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-yellow-50 p-4"><strong>Pollination</strong><br />insects help plants</div>
          <div className="rounded-xl bg-green-50 p-4"><strong>Camouflage</strong><br />animals hide from danger</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Deep roots</strong><br />plants reach water</div>
        </div>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What is an ecosystem?', options: ['Living things interacting with each other and non-living things', 'Only animals living in cages', 'A list of human-made buildings', 'Only rocks and water'], answer: 'Living things interacting with each other and non-living things', explanation: 'An ecosystem includes organisms and the non-living parts around them.' },
  { prompt: 'Which is a non-living part of an ecosystem?', options: ['Sunlight', 'Grass', 'Fungus', 'Springbok'], answer: 'Sunlight', explanation: 'Sunlight is non-living but important for ecosystems.' },
  { prompt: 'What is a habitat?', options: ['The natural home of an organism', 'A type of nutrient', 'A chain of planets', 'A machine for measuring rain'], answer: 'The natural home of an organism', explanation: 'A habitat is where an organism lives and gets what it needs.' },
  { prompt: 'What does interdependence mean?', options: ['Living things depend on one another', 'Animals never need plants', 'Non-living things can eat', 'All habitats are the same'], answer: 'Living things depend on one another', explanation: 'Interdependence means organisms rely on each other for survival.' },
  { prompt: 'Which is an adaptation?', options: ['A camel storing fat in its hump', 'A rock lying in the sun', 'Water flowing downhill', 'A shadow moving during the day'], answer: 'A camel storing fat in its hump', explanation: 'This feature helps a camel survive when food is scarce.' },
  { prompt: 'Which habitat need is provided by a tree for many birds?', options: ['Shelter', 'Salt', 'Electricity', 'Plastic'], answer: 'Shelter', explanation: 'Trees can provide birds with safe places to nest and rest.' },
  { prompt: 'Why do plants need sunlight in an ecosystem?', options: ['To make food by photosynthesis', 'To hunt animals', 'To make soil disappear', 'To breathe in oxygen only'], answer: 'To make food by photosynthesis', explanation: 'Plants use sunlight energy to make food.' },
  { prompt: 'Which pair shows interdependence?', options: ['Bee and flowering plant', 'Stone and plastic bag', 'Cloud and metal spoon', 'Brick and glass bottle'], answer: 'Bee and flowering plant', explanation: 'Bees get nectar, and flowering plants can be pollinated.' },
  { prompt: 'What could happen if a water source dries up?', options: ['Plants and animals may struggle to survive', 'All animals will need less food', 'The ecosystem will get more water', 'Producers will stop needing sunlight'], answer: 'Plants and animals may struggle to survive', explanation: 'Water is a key non-living resource in habitats.' },
  { prompt: 'Which organism helps return nutrients to soil?', options: ['Fungus', 'Lion', 'Eagle', 'Springbok'], answer: 'Fungus', explanation: 'Fungi are decomposers that break down dead material.' },
];

const Ecosystems = () => (
  <NstTopic
    title="Ecosystems & Interdependence"
    subtitle="How organisms depend on their habitats"
    learnSteps={learnSteps}
    task="ecosystems"
    bank={bank}
  />
);

export default Ecosystems;
