import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Day and night',
    image: { src: '/curriculum/grade6/nst/term4/day-night-seasons/diagram.svg', alt: 'Sun rays lighting one side of tilted Earth' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Day and night</strong> happen because Earth spins on its axis. The side facing the Sun has day, and the side turned away has night.
        </p>
      </div>
    ),
  },
  {
    title: 'The Sun does not move around Earth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Sun seems to move across the sky because <strong>Earth rotates</strong>. The Sun does not travel around Earth each day.
        </p>
      </div>
    ),
  },
  {
    title: 'Why seasons change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Seasons</strong> are caused by the <strong>tilt of Earth&apos;s axis</strong> as Earth orbits the Sun during the year.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What causes day and night on Earth?', options: ['Earth spins on its axis', 'The Sun moves around Earth', 'The Moon blocks the Sun every night', 'Earth stops moving'], answer: 'Earth spins on its axis', explanation: 'Earth\'s rotation makes different places face the Sun.' },
  { prompt: 'Which side of Earth has day?', options: ['The side facing the Sun', 'The side facing away from the Sun', 'The side under the Moon', 'The whole Earth at once'], answer: 'The side facing the Sun', explanation: 'Sunlight reaches the side facing the Sun.' },
  { prompt: 'Which side of Earth has night?', options: ['The side facing away from the Sun', 'The side closest to the Sun', 'Only the North Pole', 'Only the oceans'], answer: 'The side facing away from the Sun', explanation: 'The turned-away side is in darkness.' },
  { prompt: 'Does the Sun move around Earth each day?', options: ['No, Earth rotates', 'Yes, the Sun orbits Earth', 'Yes, the Moon pushes it', 'No, Earth never moves'], answer: 'No, Earth rotates', explanation: 'The Sun appears to move because Earth spins.' },
  { prompt: 'What causes seasons on Earth?', options: ['The tilt of Earth\'s axis as it orbits the Sun', 'Earth moving closer to the Moon', 'The Sun turning off in winter', 'Day and night alone'], answer: 'The tilt of Earth\'s axis as it orbits the Sun', explanation: 'Axis tilt changes how directly sunlight reaches each hemisphere.' },
  { prompt: 'What is Earth\'s axis?', options: ['An imaginary line Earth spins around', 'A real metal pole through Earth', 'The path of the Moon', 'A ring around Saturn'], answer: 'An imaginary line Earth spins around', explanation: 'The axis is an imaginary line from pole to pole.' },
  { prompt: 'Which movement is linked to a year?', options: ['Earth revolving around the Sun', 'Earth rotating once', 'The Sun orbiting Earth', 'A cloud moving'], answer: 'Earth revolving around the Sun', explanation: 'One orbit around the Sun takes about one year.' },
  { prompt: 'Why is one half of Earth dark in a day-night diagram?', options: ['It is turned away from the Sun', 'It has no atmosphere', 'It is always winter there', 'It is covered by oceans'], answer: 'It is turned away from the Sun', explanation: 'Sunlight cannot reach the side facing away at that time.' },
  { prompt: 'Which statement is correct?', options: ['Earth is tilted as it orbits the Sun', 'Earth is not tilted at all', 'Seasons are caused by the Moon only', 'The Sun orbits Earth once a year'], answer: 'Earth is tilted as it orbits the Sun', explanation: 'Earth\'s tilted axis is important for seasons.' },
];

const DayNightSeasons = () => (
  <NstTopic title="Day, Night & Seasons" subtitle="Earth&apos;s spin, sunlight and seasons" learnSteps={learnSteps} task="day-night-seasons" bank={bank} />
);

export default DayNightSeasons;
