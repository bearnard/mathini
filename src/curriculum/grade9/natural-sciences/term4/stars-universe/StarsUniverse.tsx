import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'What are stars?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Stars</strong> are huge balls of hot gas that produce light and heat through nuclear
          fusion. Our Sun is the closest star to Earth. Stars exist in <strong>galaxies</strong>,
          which are groups of billions of stars.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800 mb-2">Key facts about stars:</p>
          <div className="space-y-1 text-slate-600">
            <p>• Stars produce their own light and heat</p>
            <p>• Stars are held together by gravity</p>
            <p>• Stars vary in size, temperature, and colour</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The life cycle of stars',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stars go through different stages during their life:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Birth (Nebula)</strong>
            <p className="text-slate-600">Star forms from gas and dust cloud.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Main Sequence</strong>
            <p className="text-slate-600">Star shines steadily, like the Sun now.</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <strong className="text-gray-700">Death</strong>
            <p className="text-slate-600">Red giant, then white dwarf or neutron star.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Galaxies and the scale of the universe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The universe is vast beyond imagination. Our <strong>Milky Way</strong> is one of billions of
          galaxies. The universe is expanding and mostly empty space.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Scale of organisation:</p>
          <p className="text-slate-600 text-sm">Solar System → Galaxy (Milky Way) → Local Group → Supercluster → Universe</p>
          <p className="text-xs text-slate-500 mt-2">Light takes years to travel between stars, even with the speed of 300,000 km/s.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a star?',
    options: ['A cold rock', 'A huge ball of hot gas that produces light and heat', 'A planet', 'A satellite'],
    answer: 'A huge ball of hot gas that produces light and heat',
    explanation: 'Stars generate light and heat through nuclear fusion in their cores.',
  },
  {
    prompt: 'What keeps a star together?',
    options: ['Magnetic fields', 'Gravity', 'Radiation only', 'Solar winds'],
    answer: 'Gravity',
    explanation: 'Gravity pulls the star\'s material inward, holding it together.',
  },
  {
    prompt: 'How does a star produce energy?',
    options: ['Burning like wood', 'Chemical reactions', 'Nuclear fusion', 'Friction'],
    answer: 'Nuclear fusion',
    explanation: 'Stars fuse hydrogen into helium in their cores, releasing enormous energy.',
  },
  {
    prompt: 'What is the first stage in a star\'s life cycle?',
    options: ['Main sequence', 'Birth from a nebula', 'Red giant', 'White dwarf'],
    answer: 'Birth from a nebula',
    explanation: 'Stars form when gas and dust clouds collapse under gravity.',
  },
  {
    prompt: 'In what stage is our Sun?',
    options: ['Birth', 'Main sequence (middle age)', 'Red giant', 'Dying'],
    answer: 'Main sequence (middle age)',
    explanation: 'The Sun is about halfway through its 10-billion-year main sequence stage.',
  },
  {
    prompt: 'What happens to a star after the main sequence?',
    options: ['It disappears', 'It becomes brighter', 'It expands (red giant), then contracts', 'It stays the same forever'],
    answer: 'It expands (red giant), then contracts',
    explanation: 'Stars eventually expand and cool (red giant), then collapse to white dwarf.',
  },
  {
    prompt: 'What is a galaxy?',
    options: ['A star', 'A planet', 'A group of billions of stars held by gravity', 'A comet'],
    answer: 'A group of billions of stars held by gravity',
    explanation: 'Galaxies are vast collections of stars, gas, and dust held together by gravity.',
  },
  {
    prompt: 'What is the name of our galaxy?',
    options: ['Andromeda', 'Milky Way', 'Triangulum', 'Sombrero'],
    answer: 'Milky Way',
    explanation: 'We live in the Milky Way galaxy with about 100-400 billion stars.',
  },
  {
    prompt: 'Why does light from distant stars take so long to reach Earth?',
    options: ['Stars are dim', 'Space is curved', 'Stars are extremely far away; light travels at a finite speed', 'Light is slow'],
    answer: 'Stars are extremely far away; light travels at a finite speed',
    explanation: 'Even at 300,000 km/s, light takes years to travel between stars.',
  },
  {
    prompt: 'How many galaxies are in the observable universe?',
    options: ['Thousands', 'Millions', 'Billions to trillions', 'Infinite and countable'],
    answer: 'Billions to trillions',
    explanation: 'Modern observations suggest 100-200 billion galaxies, possibly more.',
  },
];

const StarsUniverse = () => (
  <CapsSubjectTopic
    title="Stars and the Universe"
    subtitle="Stellar life cycles and the cosmos at vast scales"
    learnSteps={learnSteps}
    task="gr9-stars-universe-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default StarsUniverse;
