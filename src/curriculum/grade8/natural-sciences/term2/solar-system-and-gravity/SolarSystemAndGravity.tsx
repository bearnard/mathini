import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Describe the solar system and the role of gravity',
    image: {
      src: '/curriculum/grade8/ns/term2/solar-system-and-gravity/diagram.webp',
      alt: 'Grade 8 learners ordering planets and explaining gravity in the solar system',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Sun is the central star of our solar system. Planets, moons, comets, and asteroids are held in
          orbit by <strong>gravity</strong>, a force of attraction between masses. Gravity helps explain motion and
          planetary systems at different scales.
        </p>
      </div>
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
    options: ['have icy material and highly elliptical orbits', 'are always larger and hotter', 'do not orbit the Sun', 'are made only of metal'],
    answer: 'have icy material and highly elliptical orbits',
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
