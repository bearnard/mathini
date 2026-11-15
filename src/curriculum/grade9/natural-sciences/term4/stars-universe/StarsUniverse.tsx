import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { ScaleBoxes, StarBalance } from '../../../../../components/diagrams/science/SciencePictures10';
import { SUN_DISTANCE_KM, SUN_AGE_BY, SUN_MAIN_SEQUENCE_BY, lightSeconds, lightYearKm, minutesAndSeconds, sunFractionOfMainSequence } from '../../../../../components/diagrams/science/science9bHelpers';

// Light travel and the Sun's age come from tested helpers (science9b.test.ts).
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const sa = (n: number) => String(n).replace('.', ',');
const sunLight = minutesAndSeconds(lightSeconds(SUN_DISTANCE_KM));
const ly = Math.round(lightYearKm() / 1e11) / 10; // in trillions of km
const half = Math.round(sunFractionOfMainSequence() * 100);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'What is a star?',
    content: slide(
      <>
        <Rule>
          A star is a huge ball of hot gas that gives off light and heat. Gravity holds a star together, and a star produces energy by nuclear fusion.
        </Rule>
        <StarBalance />
        <Worked
          title="How does a star shine?"
          steps={[<>In the core, nuclear fusion joins hydrogen into helium and releases enormous energy.</>, <>The energy streams out as light and heat.</>, <>Gravity pulls the star&apos;s material inwards and holds it together. The Sun is the closest star to Earth.</>]}
        />
        <Mistake>Thinking a star is burning like a fire. A star is powered by nuclear fusion in its core, not by burning.</Mistake>
      </>,
    ),
  },
  {
    title: 'The life cycle of a star',
    content: slide(
      <>
        <Rule>
          A star is born from a nebula, a cloud of gas and dust that collapses under gravity. After the main sequence, a star like the Sun swells into a red giant, then shrinks to a white dwarf.
        </Rule>
        <FlowDiagram
          id="life"
          title="The life of a star like the Sun"
          desc="A nebula collapses to form a star. The star spends most of its life on the main sequence, then swells into a red giant and finally shrinks to a white dwarf."
          nodes={[
            { id: 'neb', label: 'nebula', x: 32, y: 24, color: '#a5b4fc' },
            { id: 'ms', label: 'main sequence', x: 118, y: 24, color: '#fde047' },
            { id: 'rg', label: 'red giant', x: 118, y: 72, color: '#fb923c' },
            { id: 'wd', label: 'white dwarf', x: 38, y: 72, color: '#e2e8f0' },
          ]}
          edges={[
            { from: 'neb', to: 'ms', label: '', bend: 0 },
            { from: 'ms', to: 'rg', label: '', bend: 0 },
            { from: 'rg', to: 'wd', label: '', bend: 0 },
          ]}
        />
        <Worked
          title={`Where is the Sun now? About ${sa(SUN_AGE_BY)} billion years old`}
          steps={[<>The Sun will spend about {SUN_MAIN_SEQUENCE_BY} billion years on the main sequence.</>, <>{sa(SUN_AGE_BY)} ÷ {SUN_MAIN_SEQUENCE_BY} is about {half}%, so the Sun is in the main sequence (middle age), about halfway.</>, <>Much bigger stars end differently: they explode as a supernova and leave a neutron star or a black hole.</>]}
        />
        <Mistake>Thinking every star ends as a white dwarf. Only stars like the Sun do; much bigger stars explode.</Mistake>
      </>,
    ),
  },
  {
    title: 'Galaxies and the scale of the universe',
    content: slide(
      <>
        <Rule>
          A galaxy is a huge group of billions of stars, with gas and dust, held together by gravity. Our galaxy is the Milky Way, with about 100 to 400 billion stars.
        </Rule>
        <ScaleBoxes />
        <Terms
          rows={[
            ['Galaxy', 'a huge group of billions of stars held together by gravity'],
            ['Milky Way', 'our galaxy, with about 100 to 400 billion stars'],
            ['Number of galaxies', 'billions to trillions: estimates for the observable universe range from about 100 to 200 billion up to around 2 trillion, and keep changing'],
          ]}
        />
        <Worked
          title="Place Earth in the universe"
          steps={[<>Earth is a planet in the Solar System.</>, <>The Solar System is in the Milky Way, which is in the Local Group of galaxies.</>, <>The Local Group is part of a supercluster, and superclusters make up the universe, which is expanding and mostly empty space.</>]}
        />
        <Mistake>Mixing up a galaxy and the solar system. The Solar System is one star with its planets. A galaxy holds billions of stars.</Mistake>
      </>,
    ),
  },
  {
    title: 'Light and distance',
    content: slide(
      <>
        <Rule>
          Light from distant stars takes a long time to reach Earth because the stars are very far away and light has a set speed, about 300 000 km per second.
        </Rule>
        <Worked
          title="How long does light take?"
          steps={[
            <>The Sun is about {nb(SUN_DISTANCE_KM)} km from Earth. Time = distance ÷ speed = {nb(SUN_DISTANCE_KM)} ÷ 300 000, about 500 s.</>,
            <>That is about {sunLight.m} minutes: sunlight is {sunLight.m} minutes old when it reaches us.</>,
            <>Even the nearest star is hundreds of thousands of times further away than the Sun. In one year light travels about {sa(ly)} trillion km, a light year, so light takes years to travel between stars.</>,
          ]}
        />
        <Mistake>Thinking light arrives instantly. Light is very fast, but distances in space are so big that it takes minutes from the Sun and years from other stars.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a star? What force holds a star together? What process gives a star its energy?</>,
          <>Where does a star begin its life? Which stage is the Sun in now? What does a star turn into once it leaves the main sequence?</>,
          <>What is a galaxy? Which galaxy do we live in? Roughly how many galaxies can we observe in the universe?</>,
          <>Why do we see distant stars as they were long ago?</>,
        ]}
        answers={[
          <>A huge ball of hot gas that gives off light and heat. Gravity. Nuclear fusion.</>,
          <>Birth from a nebula. Main sequence (middle age). It swells into a red giant, then shrinks.</>,
          <>A huge group of billions of stars held by gravity. The Milky Way. Billions to trillions (estimates differ).</>,
          <>The stars are very far away and light has a set speed.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a star?',
    options: ['A cold ball of rock that circles the Sun', 'A huge ball of hot gas that gives off light and heat', 'A large planet that gives off light from the Sun', 'A small moon that circles a planet and reflects light'],
    answer: 'A huge ball of hot gas that gives off light and heat',
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
    options: ['Birth, as a new star in a cloud of gas', 'Main sequence (middle age)', 'Red giant, as the hydrogen is about to run out', 'Dying, as a white dwarf that is slowly cooling'],
    answer: 'Main sequence (middle age)',
    explanation: 'The Sun is about halfway through its 10-billion-year main sequence stage.',
  },
  {
    prompt: 'What happens to a star after the main sequence?',
    options: ['It disappears at once with no remains left behind', 'It gets much brighter and then explodes', 'It swells into a red giant, then shrinks', 'It stays the same size for all of time'],
    answer: 'It swells into a red giant, then shrinks',
    explanation: 'Stars eventually expand and cool (red giant), then collapse to white dwarf.',
  },
  {
    prompt: 'What is a galaxy?',
    options: ['A single star with planets that circle it', 'A large planet with many moons that circle it', 'A huge group of billions of stars held by gravity', 'A ball of ice and dust that circles the Sun'],
    answer: 'A huge group of billions of stars held by gravity',
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
    options: ['The stars are dim and their light is very weak', 'Space is curved, so the light has to go round', 'The stars are very far away and light has a set speed', 'Light is slow, as it moves slower than sound'],
    answer: 'The stars are very far away and light has a set speed',
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
