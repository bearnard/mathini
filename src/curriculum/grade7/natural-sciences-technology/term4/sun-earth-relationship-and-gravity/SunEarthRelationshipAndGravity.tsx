import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Model seasons, phases, tides, and gravity',
    image: {
      src: '/curriculum/grade7/nst/term4/sun-earth-relationship-and-gravity/diagram.webp',
      alt: 'Grade 7 learners modelling Earth, Moon, and Sun positions to explain seasons and tides',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The relative positions of the <strong>Sun, Earth, and Moon</strong> explain seasons, Moon phases, and
          tides. Learners connect these patterns to <strong>gravity</strong>, which keeps celestial objects in
          predictable orbits.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What mainly causes seasons on Earth?',
    options: ['Earth’s axial tilt as it orbits the Sun', 'The Moon moving closer every month', 'Daily cloud cover changes only', 'Earth moving in a perfect circle with no tilt'],
    answer: 'Earth’s axial tilt as it orbits the Sun',
    explanation: 'Tilt changes the angle and duration of sunlight over a year.',
  },
  {
    prompt: 'What causes the phases of the Moon?',
    options: ['Different portions of the lit Moon are visible from Earth', 'Earth’s shadow always covers half the Moon', 'The Moon produces and loses its own light', 'Clouds permanently hide part of the Moon'],
    answer: 'Different portions of the lit Moon are visible from Earth',
    explanation: 'As the Moon orbits Earth, we see changing illuminated portions.',
  },
  {
    prompt: 'Spring tides are strongest when...',
    options: ['the Sun, Earth, and Moon are aligned', 'the Moon is farthest from Earth and unseen', 'winds are calm at the coast', 'it is always winter'],
    answer: 'the Sun, Earth, and Moon are aligned',
    explanation: 'Alignment combines gravitational effects to produce larger tidal ranges.',
  },
  {
    prompt: 'What keeps planets in orbit around the Sun?',
    options: ['Gravity', 'Friction in empty space', 'Magnetic poles only', 'Ocean tides'],
    answer: 'Gravity',
    explanation: 'The Sun’s gravitational pull keeps planets in orbital motion.',
  },
  {
    prompt: 'Neap tides happen when the Sun and Moon are...',
    options: ['at right angles relative to Earth', 'perfectly aligned with Earth', 'both below the horizon', 'closest to Earth at perigee only'],
    answer: 'at right angles relative to Earth',
    explanation: 'At right angles, the pulls partly cancel, reducing tidal range.',
  },
  {
    prompt: 'During a lunar eclipse, which body is between the Sun and the Moon?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Earth',
    explanation: 'Earth blocks sunlight from reaching the Moon directly.',
  },
];

const SunEarthRelationshipAndGravity = () => (
  <CapsSubjectTopic
    title="Sun-Earth Relationship and Gravity"
    subtitle="Seasons, Moon phases, tides, and gravitational effects"
    learnSteps={learnSteps}
    task="gr7-sun-earth-relationship-and-gravity-t4"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default SunEarthRelationshipAndGravity;
