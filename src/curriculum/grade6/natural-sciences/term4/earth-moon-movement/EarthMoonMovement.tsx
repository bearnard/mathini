import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Earth rotates and revolves',
    image: { src: '/curriculum/grade6/nst/term4/earth-moon-movement/diagram.svg', alt: 'Earth rotating, revolving around the Sun, and the Moon orbiting Earth' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Earth <strong>rotates</strong> on its axis once each day and <strong>revolves</strong> around the Sun once each year.
        </p>
      </div>
    ),
  },
  {
    title: 'The Moon orbits Earth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Moon</strong> is Earth&apos;s natural satellite. It moves in an <strong>orbit</strong> around Earth about once a month.
        </p>
      </div>
    ),
  },
  {
    title: 'Phases of the Moon',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          As the Moon orbits Earth, we see different lit parts. These changing shapes are called <strong>phases of the Moon</strong>.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What does Earth rotate on?', options: ['Its axis', 'The Moon', 'A comet', 'Saturn'], answer: 'Its axis', explanation: 'Earth spins around an imaginary line called its axis.' },
  { prompt: 'About how long does one Earth rotation take?', options: ['One day', 'One year', 'One month', 'One hour'], answer: 'One day', explanation: 'One full spin takes about 24 hours.' },
  { prompt: 'What does Earth revolve around?', options: ['The Sun', 'The Moon', 'Mars', 'A telescope'], answer: 'The Sun', explanation: 'Earth orbits, or revolves around, the Sun.' },
  { prompt: 'About how long does one Earth revolution around the Sun take?', options: ['One year', 'One day', 'One week', 'One month'], answer: 'One year', explanation: 'A full orbit around the Sun takes about a year.' },
  { prompt: 'What does the Moon orbit?', options: ['Earth', 'The Sun only', 'Jupiter', 'Pluto'], answer: 'Earth', explanation: 'The Moon is Earth\'s natural satellite.' },
  { prompt: 'About how long does the Moon take to orbit Earth?', options: ['About a month', 'About a day', 'About a year', 'About an hour'], answer: 'About a month', explanation: 'The Moon completes an orbit in roughly one month.' },
  { prompt: 'What are Moon phases?', options: ['The changing shapes of the lit Moon we see', 'Different moons around Earth', 'Clouds covering the Moon', 'The Moon changing size'], answer: 'The changing shapes of the lit Moon we see', explanation: 'Phases happen because we see different lit parts as the Moon orbits.' },
  { prompt: 'Which word means to spin?', options: ['Rotate', 'Revolve', 'Melt', 'Reflect'], answer: 'Rotate', explanation: 'Rotate means to spin around an axis.' },
  { prompt: 'Which word means to move in an orbit around another object?', options: ['Revolve', 'Freeze', 'Condense', 'Rotate in place only'], answer: 'Revolve', explanation: 'Revolve means to travel around another object.' },
];

const EarthMoonMovement = () => (
  <NstTopic title="Earth & Moon Movement" subtitle="Rotation, revolution and Moon phases" learnSteps={learnSteps} task="earth-moon-movement" bank={bank} />
);

export default EarthMoonMovement;
