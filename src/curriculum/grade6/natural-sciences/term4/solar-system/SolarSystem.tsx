import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Meet the Solar System',
    image: { src: '/curriculum/grade6/nst/term4/solar-system/diagram.svg', alt: 'The Sun and eight planets in order' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Sun</strong> is the central star of our Solar System. Eight <strong>planets</strong> move around it in paths called orbits.
        </p>
      </div>
    ),
  },
  {
    title: 'Planets in order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          From the Sun outwards the planets are <strong>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus</strong> and <strong>Neptune</strong>.
        </p>
      </div>
    ),
  },
  {
    title: 'Other objects in space',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Solar System also has <strong>dwarf planets</strong> such as Pluto, plus <strong>asteroids, meteors</strong> and <strong>comets</strong>.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What is at the centre of our Solar System?', options: ['The Sun', 'Earth', 'The Moon', 'Jupiter'], answer: 'The Sun', explanation: 'The Sun is the central star that the planets orbit.' },
  { prompt: 'How many planets are in our Solar System?', options: ['8', '7', '9', '10'], answer: '8', explanation: 'There are eight recognised planets.' },
  { prompt: 'Which planet is closest to the Sun?', options: ['Mercury', 'Venus', 'Earth', 'Mars'], answer: 'Mercury', explanation: 'Mercury is first in order from the Sun.' },
  { prompt: 'Which list shows the first four planets in the correct order?', options: ['Mercury, Venus, Earth, Mars', 'Earth, Venus, Mercury, Mars', 'Mars, Earth, Venus, Mercury', 'Venus, Mercury, Earth, Mars'], answer: 'Mercury, Venus, Earth, Mars', explanation: 'The inner planets begin Mercury, Venus, Earth and Mars.' },
  { prompt: 'Which planet comes after Saturn when moving away from the Sun?', options: ['Uranus', 'Jupiter', 'Neptune', 'Mars'], answer: 'Uranus', explanation: 'The order is Jupiter, Saturn, Uranus, Neptune.' },
  { prompt: 'What path does a planet follow around the Sun?', options: ['An orbit', 'A crater', 'A comet tail', 'An axis'], answer: 'An orbit', explanation: 'An orbit is the path of one object around another.' },
  { prompt: 'Pluto is best described as a...', options: ['dwarf planet', 'star', 'moon of Earth', 'meteor'], answer: 'dwarf planet', explanation: 'Pluto is classified as a dwarf planet.' },
  { prompt: 'Which object is made of ice, dust and rock and may have a tail near the Sun?', options: ['A comet', 'An asteroid', 'A planet', 'A star'], answer: 'A comet', explanation: 'Comets can form bright tails when heated by the Sun.' },
  { prompt: 'What are asteroids mostly made of?', options: ['Rock and metal', 'Fresh water', 'Clouds', 'Plants'], answer: 'Rock and metal', explanation: 'Asteroids are small rocky or metallic objects in space.' },
];

const SolarSystem = () => (
  <NstTopic title="The Solar System" subtitle="The Sun and its planets" learnSteps={learnSteps} task="solar-system" bank={bank} />
);

export default SolarSystem;
