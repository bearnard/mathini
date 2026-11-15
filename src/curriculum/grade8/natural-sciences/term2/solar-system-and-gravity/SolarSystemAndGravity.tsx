import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { OrbitShapes, PlanetOrder, WeightBars } from '../../../../../components/diagrams/science/SciencePictures4';
import { G_EARTH, G_MOON, PLANETS, weight } from '../../../../../components/diagrams/science/motionHelpers';

// The planet order and the weights come from tested helpers (motionMatter.test.ts).
const inner = PLANETS.slice(0, 4).join(', ');
const mass = 60;
const onEarth = weight(mass, G_EARTH);
const onMoon = weight(mass, G_MOON);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The Sun and the planets',
    content: slide(
      <>
        <Rule>
          The Sun is at the centre of our solar system, and the planets orbit it. Starting from the Sun outward, the order is {inner}, then Jupiter, Saturn, Uranus and Neptune.
        </Rule>
        <PlanetOrder />
        <Worked
          title="Order and describe"
          steps={[
            <>Mercury, Venus, Earth and Mars are the first four planets: {inner}.</>,
            <>Saturn is known for its prominent rings.</>,
            <>The first four planets are small and rocky. The last four are much larger.</>,
          ]}
        />
        <Mistake>Thinking the planets orbit the Earth, or that the pictures are to scale. The Sun is in the centre, and the real distances are far bigger than any picture can show.</Mistake>
      </>,
    ),
  },
  {
    title: 'Moons, comets and asteroids',
    content: slide(
      <>
        <Rule>
          A moon orbits a planet: the Moon is the natural satellite of Earth. Comets have icy material and very elliptical orbits. Asteroids are rocky objects, many in a belt between Mars and Jupiter.
        </Rule>
        <OrbitShapes />
        <Worked
          title="Compare a comet with a planet"
          steps={[
            <>A planet moves on an orbit that is nearly a circle, so it stays about the same distance from the Sun.</>,
            <>A comet is made of ice and dust. Its elliptical orbit is long and stretched, so it passes close to the Sun and then travels far away.</>,
            <>Near the Sun, some of the ice warms up and forms a tail.</>,
          ]}
        />
        <Mistake>Thinking a comet is a planet that has caught fire. A comet is an icy body with an elongated path, not a planet.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gravity',
    content: slide(
      <>
        <Rule>
          Gravity is an attractive force between masses. Any two masses attract each other, and the larger the mass, the stronger the pull. The Sun&apos;s gravitational pull keeps the planets in orbit.
        </Rule>
        <Worked
          title="Why do planets keep orbiting?"
          steps={[
            <>The Sun has a huge mass, so its gravitational pull is very strong.</>,
            <>The pull bends each planet&apos;s path into a curve round the Sun, instead of letting it fly off in a straight line.</>,
            <>In the same way, Earth&apos;s gravity keeps the Moon in orbit around Earth.</>,
          ]}
        />
        <Mistake>Believing gravity only works on Earth. Any two masses attract each other, even though the pull is tiny for small masses.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gravity on the Moon',
    content: slide(
      <>
        <Rule>
          The Moon has a weaker gravitational pull than Earth, because its mass is smaller. So an astronaut feels lighter on the Moon. Weight is mass × gravity, and mass does not change.
        </Rule>
        <WeightBars mass={mass} />
        <Worked
          title={`An astronaut of mass ${mass} kg`}
          steps={[
            <>On Earth, g is {String(G_EARTH).replace('.', ',')} N/kg: weight = {mass} × {String(G_EARTH).replace('.', ',')} = {onEarth} N.</>,
            <>On the Moon, g is about {String(G_MOON).replace('.', ',')} N/kg: weight = {mass} × {String(G_MOON).replace('.', ',')} = {onMoon} N.</>,
            <>The mass is still {mass} kg. Only the weight is smaller.</>,
          ]}
        />
        <Mistake>Saying the astronaut has less mass on the Moon. The amount of matter stays the same; the pull on it is weaker.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What sits at the centre of our solar system? Which planet has the most famous rings?</>,
          <>Which force keeps the planets circling the Sun? What is gravity?</>,
          <>Name Earth’s natural satellite. How are comets different from planets?</>,
          <>Why can an astronaut jump higher on the Moon? List the four inner planets in order, starting nearest the Sun.</>,
        ]}
        answers={[
          <>The Sun. Saturn.</>,
          <>Gravity. Gravity is an attractive force between masses.</>,
          <>The Moon. Comets have icy material and very elliptical orbits.</>,
          <>The Moon has a weaker gravitational pull than Earth. Mercury, Venus, Earth, Mars.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which object is at the center of our solar system?',
    options: ['The Sun', 'Earth', 'Jupiter', 'The Moon'],
    answer: 'The Sun',
    explanation: 'The planets orbit the Sun.',
  },
  {
    prompt: 'Which planet is known for prominent rings?',
    options: ['Saturn', 'Mercury', 'Mars', 'Venus'],
    answer: 'Saturn',
    explanation: 'Saturn has the most visible ring system.',
  },
  {
    prompt: 'What keeps planets in orbit around the Sun?',
    options: ['Gravity', 'Magnetism only', 'Wind in space', 'Ocean currents'],
    answer: 'Gravity',
    explanation: 'The Sun’s gravitational pull keeps planets moving in orbit.',
  },
  {
    prompt: 'Which statement about gravity is correct?',
    options: ['Gravity is an attractive force between masses', 'Gravity only acts on moving objects', 'Gravity is strongest where there is no mass', 'Gravity pushes objects away from Earth'],
    answer: 'Gravity is an attractive force between masses',
    explanation: 'Any two masses attract each other gravitationally.',
  },
  {
    prompt: 'Which is a natural satellite of Earth?',
    options: ['The Moon', 'The Sun', 'Halley’s Comet', 'The Milky Way'],
    answer: 'The Moon',
    explanation: 'Earth’s moon orbits Earth naturally.',
  },
  {
    prompt: 'Compared with planets, comets usually...',
    options: ['have icy material and very elliptical orbits', 'are always larger and hotter than the planets', 'do not orbit the Sun at all', 'are made only of metal and rock'],
    answer: 'have icy material and very elliptical orbits',
    explanation: 'Comets are icy bodies with elongated paths around the Sun.',
  },
  {
    prompt: 'Why does an astronaut feel lighter on the Moon than on Earth?',
    options: ['The Moon has weaker gravitational pull than Earth', 'The Moon has more atmosphere than Earth', 'The Moon spins faster than light', 'There is no mass on the Moon'],
    answer: 'The Moon has weaker gravitational pull than Earth',
    explanation: 'The Moon’s smaller mass gives it weaker gravity.',
  },
  {
    prompt: 'Which order starts correctly from the Sun outward?',
    options: ['Mercury, Venus, Earth, Mars', 'Earth, Venus, Mercury, Mars', 'Mars, Earth, Venus, Mercury', 'Jupiter, Mars, Earth, Venus'],
    answer: 'Mercury, Venus, Earth, Mars',
    explanation: 'The first four planets are Mercury, Venus, Earth, then Mars.',
  },
];

const SolarSystemAndGravity = () => (
  <CapsSubjectTopic
    title="Solar System and Gravity"
    subtitle="Planets, other solar-system bodies, and gravitational attraction"
    learnSteps={learnSteps}
    task="gr8-solar-system-and-gravity-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default SolarSystemAndGravity;
