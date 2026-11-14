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
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span><strong>Satellite:</strong> an object that orbits Earth (or another body)</span>
          <span><strong>Probe:</strong> a spacecraft with no people on it that sends back information</span>
          <span><strong>Space station:</strong> a home in orbit where astronauts live and work</span>
        </div>
        <p className="text-slate-500">Satellites also help us with <strong>weather forecasts, TV and phone signals</strong> and <strong>GPS</strong>.</p>
      </div>
    ),
  },
  {
    title: 'Telescopes: optical and radio',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-5 text-amber-800">
            <strong>Optical telescope</strong>
            <br />Collects <strong>visible light</strong> with mirrors or lenses
            <br />Works best on clear, dark nights
          </div>
          <div className="rounded-xl bg-indigo-50 p-5 text-indigo-800">
            <strong>Radio telescope</strong>
            <br />Collects <strong>radio waves</strong> from space with big dishes
            <br />Works day and night, even through cloud
          </div>
        </div>
        <p className="text-slate-500">Telescopes are built in dry, dark, remote places, far from city lights.</p>
      </div>
    ),
  },
  {
    title: 'South Africa and the stars',
    content: (
      <div className="space-y-4 text-center">
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span><strong>SALT</strong> (Southern African Large Telescope) is near <strong>Sutherland</strong> in the Northern Cape. It is the largest single optical telescope in the southern hemisphere.</span>
          <span><strong>MeerKAT</strong> is a radio telescope made of 64 dishes in the <strong>Karoo</strong>.</span>
          <span><strong>SKA</strong> (Square Kilometre Array) will be the biggest radio telescope in the world. MeerKAT is part of it.</span>
        </div>
        <p className="text-slate-500">The Karoo is chosen because it is dry, dark and has very little radio noise.</p>
      </div>
    ),
  },
  {
    title: 'Rockets',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>rocket</strong> burns fuel and shoots hot gas downwards. This pushes the rocket <strong>upwards</strong>, fast enough to escape Earth&apos;s gravity.
        </p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">
          There is no air in space, so a rocket carries its own oxygen to burn its fuel.
        </p>
        <p className="text-slate-500">Rockets carry satellites, probes and astronauts into space.</p>
      </div>
    ),
  },
  {
    title: 'Exploring the Moon and Mars',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People first walked on the <strong>Moon</strong> in 1969. Since then, probes and robots have visited the Moon and Mars.
        </p>
        <p className="rounded-xl bg-orange-50 p-5 font-semibold text-orange-800">
          A <strong>rover</strong> is a robot vehicle that drives over the surface. <strong>Curiosity</strong> and <strong>Perseverance</strong> are rovers on Mars.
        </p>
        <p className="text-slate-500">Rovers are controlled from Earth. They look for rocks, soil and signs that Mars once had water.</p>
      </div>
    ),
  },
  {
    title: 'Spacesuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Space has no air, no pressure and extreme temperatures. A <strong>spacesuit</strong> keeps an astronaut alive.</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span>• Supplies <strong>oxygen</strong> to breathe</span>
          <span>• Keeps air <strong>pressure</strong> around the body</span>
          <span>• Protects against very <strong>hot and cold</strong> temperatures</span>
          <span>• Has a radio so astronauts can talk to each other</span>
        </div>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What does an optical telescope collect?', options: ['Visible light', 'Radio waves', 'Sound waves', 'Heat from the ground'], answer: 'Visible light', explanation: 'Optical telescopes use mirrors or lenses to collect visible light.' },
  { prompt: 'What does a radio telescope collect?', options: ['Radio waves from space', 'Radio programmes from stations', 'Visible light from stars', 'Sound from space'], answer: 'Radio waves from space', explanation: 'Radio telescopes use big dishes to collect radio waves given off by objects in space.' },
  { prompt: 'Which telescope can still work in the daytime or through cloud?', options: ['A radio telescope', 'An optical telescope', 'Both, but only in summer', 'Neither of them can'], answer: 'A radio telescope', explanation: 'Radio waves pass through clouds and are not blocked by daylight.' },
  { prompt: 'Why are optical telescopes built far from cities?', options: ['City lights make the sky too bright', 'Cities do not have enough electricity for telescopes', 'The air in cities is always too cold for mirrors', 'Telescopes only work properly near the sea'], answer: 'City lights make the sky too bright', explanation: 'Light pollution hides faint objects. Dark, dry, high places are best.' },
  { prompt: 'Where is SALT, the Southern African Large Telescope?', options: ['Near Sutherland in the Northern Cape', 'Near Durban in KwaZulu-Natal', 'On Table Mountain in the Western Cape', 'Near Mahikeng in the North West'], answer: 'Near Sutherland in the Northern Cape', explanation: 'SALT is near Sutherland, where the sky is dark and clear.' },
  { prompt: 'What type of telescope is SALT?', options: ['An optical telescope', 'A radio telescope', 'A space probe', 'A satellite in orbit'], answer: 'An optical telescope', explanation: 'SALT collects visible light. It is the largest single optical telescope in the southern hemisphere.' },
  { prompt: 'What is MeerKAT?', options: ['A radio telescope in the Karoo', 'An optical telescope in the Karoo', 'A rover on Mars', 'A satellite above South Africa'], answer: 'A radio telescope in the Karoo', explanation: 'MeerKAT has 64 dishes and is part of the SKA.' },
  { prompt: 'What is the SKA?', options: ['A huge radio telescope in South Africa and Australia', 'A huge optical telescope being built in the Karoo only', 'A rocket that is being built to carry people to Mars', 'A satellite that is being built for weather forecasts'], answer: 'A huge radio telescope in South Africa and Australia', explanation: 'The Square Kilometre Array will be the biggest radio telescope in the world.' },
  { prompt: 'Why was the Karoo chosen for radio telescopes?', options: ['It is dry, remote and quiet', 'It is close to the equator and the weather is always hot', 'It is near the sea, so there is never any wind', 'It has lots of cities that send out radio signals'], answer: 'It is dry, remote and quiet', explanation: 'Few people and little radio interference make it ideal.' },
  { prompt: 'How does a rocket lift off from Earth?', options: ['It shoots hot gas downwards', 'It pulls on the air above it', 'It floats up like a balloon', 'It spins until gravity stops'], answer: 'It shoots hot gas downwards', explanation: 'Gas pushed down pushes the rocket up.' },
  { prompt: 'Why must a rocket carry oxygen with it?', options: ['There is no air in space to burn fuel', 'Only the astronauts need it, not the engines', 'Oxygen makes the whole rocket much lighter', 'Space is too cold for any fuel to burn at all'], answer: 'There is no air in space to burn fuel', explanation: 'Fuel needs oxygen to burn, and space has none.' },
  { prompt: 'What is a rover?', options: ['A robot that drives over a planet or moon', 'A rocket that carries astronauts into orbit', 'A telescope that circles around Earth', 'A special suit that astronauts have to wear'], answer: 'A robot that drives over a planet or moon', explanation: 'Curiosity and Perseverance are rovers on Mars.' },
  { prompt: 'Why do scientists send rovers to Mars instead of people?', options: ['Rovers are cheaper and safer for long studies', 'Rovers can travel much faster than any rocket can', 'People are far too heavy to be sent to Mars at all', 'Mars has no gravity, so people could not stand on it'], answer: 'Rovers are cheaper and safer for long studies', explanation: 'Sending people to Mars is very difficult and dangerous. Robots go first.' },
  { prompt: 'Which of these has people walked on?', options: ['The Moon', 'The planet Mars', 'The planet Venus', 'The planet Jupiter'], answer: 'The Moon', explanation: 'People have walked on the Moon. No person has yet walked on Mars.' },
  { prompt: 'Why do astronauts need spacesuits?', options: ['Space has no air and is very hot or cold', 'Space has far too much oxygen in it', 'Space is full of strong wind and heavy rain', 'Space makes people shrink if they have no suit'], answer: 'Space has no air and is very hot or cold', explanation: 'A spacesuit gives oxygen, pressure and protection from heat and cold.' },
  { prompt: 'Which is NOT something a spacesuit does?', options: ['Makes the astronaut weigh less', 'Supplies oxygen', 'Protects from extreme temperatures', 'Keeps air pressure around the body'], answer: 'Makes the astronaut weigh less', explanation: 'Weight depends on gravity, not the suit. The suit supplies oxygen, pressure and protection.' },
  { prompt: 'Which service uses satellites to help us see storms and clouds from above?', options: ['Weather forecasting', 'Earthquake prediction', 'Tide timetables for the coast', 'Mapping rivers and mountains'], answer: 'Weather forecasting', explanation: 'Weather satellites photograph clouds so forecasters can predict rain and storms.' },
  { prompt: 'How does GPS work?', options: ['Satellites send signals to find a position', 'A telescope looks for your phone from space', 'A rocket carries your phone around the world', 'Radio dishes on the ground draw a map of you'], answer: 'Satellites send signals to find a position', explanation: 'GPS uses signals from satellites to work out where you are.' },
];

const SpaceExploration = () => (
  <NstTopic title="Space Exploration & Technology" subtitle="Tools and benefits of exploring space" learnSteps={learnSteps} task="space-exploration" bank={bank} />
);

export default SpaceExploration;
