import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Tools for exploring space',
    image: { src: '/curriculum/grade6/nst/term4/space-exploration/diagram.webp', alt: 'Friendly illustration of space exploration technology' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People use <strong>telescopes, satellites, space probes, rockets</strong> and <strong>space stations</strong> to learn about space.
        </p>
      </div>
    ),
  },
  {
    title: 'Why we explore',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Space exploration helps us answer questions about <strong>Earth, the Solar System</strong> and the wider universe.
        </p>
      </div>
    ),
  },
  {
    title: 'Space technology in daily life',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Space technology helps with <strong>weather forecasting, communication, GPS navigation</strong> and <strong>TV signals</strong>.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'Which tool helps us see far-away objects in space?', options: ['Telescope', 'Microscope', 'Thermometer', 'Compass'], answer: 'Telescope', explanation: 'Telescopes collect light from distant objects.' },
  { prompt: 'What is a satellite?', options: ['An object that orbits a planet or moon', 'A type of plant', 'A small volcano', 'A rock only found in rivers'], answer: 'An object that orbits a planet or moon', explanation: 'Artificial satellites can orbit Earth and send information.' },
  { prompt: 'What do rockets do in space exploration?', options: ['Launch people or equipment into space', 'Make rain fall', 'Clean ocean water', 'Measure earthquakes only'], answer: 'Launch people or equipment into space', explanation: 'Rockets provide the force needed to leave Earth.' },
  { prompt: 'What is a space probe?', options: ['An uncrewed spacecraft sent to collect information', 'A weather cloud', 'A Moon phase', 'A type of telescope lens'], answer: 'An uncrewed spacecraft sent to collect information', explanation: 'Probes can travel to places that are hard or dangerous for people.' },
  { prompt: 'What is a space station?', options: ['A place where astronauts can live and work in space', 'A train station on Earth', 'A crater on Mars', 'A ring around Earth'], answer: 'A place where astronauts can live and work in space', explanation: 'Space stations support astronauts and experiments.' },
  { prompt: 'Which daily-life service uses satellites to help us plan for rain or storms?', options: ['Weather forecasting', 'Baking bread', 'Growing hair', 'Making paper'], answer: 'Weather forecasting', explanation: 'Weather satellites observe clouds and storms.' },
  { prompt: 'Which technology helps phones and cars find their position?', options: ['GPS/navigation', 'A comet tail', 'A magnifying glass', 'A sundial only'], answer: 'GPS/navigation', explanation: 'GPS uses satellites to calculate location.' },
  { prompt: 'How do satellites help communication?', options: ['They send signals over long distances', 'They make planets brighter', 'They stop Earth rotating', 'They create Moon phases'], answer: 'They send signals over long distances', explanation: 'Communication satellites relay signals for phones, internet and TV.' },
  { prompt: 'Why do scientists explore space?', options: ['To learn more about Earth and the universe', 'To make the Sun orbit Earth', 'To remove all weather', 'To change the number of planets'], answer: 'To learn more about Earth and the universe', explanation: 'Exploration grows scientific knowledge and useful technology.' },
];

const SpaceExploration = () => (
  <NstTopic title="Space Exploration & Technology" subtitle="Tools and benefits of exploring space" learnSteps={learnSteps} task="space-exploration" bank={bank} />
);

export default SpaceExploration;
