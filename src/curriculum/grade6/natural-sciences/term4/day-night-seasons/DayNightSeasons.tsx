import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Day and night',
    image: { src: '/curriculum/grade6/nst/term4/day-night-seasons/diagram.svg', alt: 'Sun rays lighting one side of tilted Earth' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Day and night</strong> happen because Earth <strong>rotates</strong> (spins) on its axis. The side facing the Sun has day. The side turned away has night.
        </p>
        <p className="rounded-xl bg-slate-50 p-5 text-slate-700">
          One full spin takes <strong>24 hours</strong>. At any moment, half of Earth is in daylight and half is in darkness.
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
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Earth spins towards the east, so the Sun appears to <strong>rise in the east</strong>, be highest at midday, and <strong>set in the west</strong>.
        </p>
        <p className="text-slate-500">The Moon does not cause night. Night happens even when the Moon is not in the sky.</p>
      </div>
    ),
  },
  {
    title: 'Shadows during the day',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A shadow is made when an object blocks sunlight. Its length and direction change as the Sun seems to move.</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span><strong>Morning:</strong> the Sun is low in the east, so shadows are long and point west</span>
          <span><strong>Midday:</strong> the Sun is high, so shadows are shortest</span>
          <span><strong>Afternoon:</strong> the Sun is low in the west, so shadows are long and point east</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Rotation and revolution',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-5 text-indigo-800"><strong>Rotation</strong><br />Earth spins on its axis<br />Takes 1 day<br />Gives day and night</div>
          <div className="rounded-xl bg-emerald-50 p-5 text-emerald-800"><strong>Revolution</strong><br />Earth orbits the Sun<br />Takes 1 year<br />Helps give the seasons</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Extension: why we have seasons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Earth&apos;s axis is <strong>tilted</strong>. As Earth orbits the Sun, the tilt means different parts of Earth lean towards the Sun at different times of the year.
        </p>
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          The part leaning towards the Sun gets more direct sunlight and longer days. That is <strong>summer</strong>.
        </p>
        <p className="text-slate-500">The part leaning away gets weaker sunlight and shorter days. That is <strong>winter</strong>.</p>
      </div>
    ),
  },
  {
    title: 'Extension: seasons in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When it is summer in South Africa, it is winter in countries like Canada and the United Kingdom, because they are in the <strong>other half</strong> of Earth.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          South Africa: summer is about December to February. Winter is about June to August.
        </div>
        <p className="text-slate-500">Seasons are NOT caused by Earth being closer to or farther from the Sun.</p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What causes day and night on Earth?', options: ['Earth rotating on its axis', 'The Sun moving around Earth', 'The Moon covering the Sun each night', 'Earth moving closer to and away from the Sun'], answer: 'Earth rotating on its axis', explanation: 'As Earth spins, each place turns towards the Sun and then away from it.' },
  { prompt: 'Which side of Earth has night?', options: ['The side facing away from the Sun', 'The side that is closest to the Moon', 'The side that has the most oceans on it', 'The side that is tilted upwards in space'], answer: 'The side facing away from the Sun', explanation: 'The side turned away from the Sun does not receive sunlight.' },
  { prompt: 'How long does Earth take to rotate once?', options: ['24 hours', '12 hours', '7 days', '365 days'], answer: '24 hours', explanation: 'One full rotation takes 24 hours, which is one day.' },
  { prompt: 'Why does the Sun seem to move across the sky?', options: ['Earth is rotating', 'The Sun is orbiting Earth', 'The Sun is falling slowly', 'Earth is revolving around the Moon'], answer: 'Earth is rotating', explanation: 'The Sun looks like it moves, but it is Earth that turns.' },
  { prompt: 'In which direction does the Sun rise?', options: ['East', 'West', 'North', 'South'], answer: 'East', explanation: 'Earth spins towards the east, so the Sun first appears in the east.' },
  { prompt: 'At which time of day are shadows usually the shortest?', options: ['At midday', 'At sunrise', 'At sunset', 'At midnight'], answer: 'At midday', explanation: 'At midday the Sun is highest, so shadows are shortest.' },
  { prompt: 'In the morning, a tree\u2019s shadow points towards the:', options: ['West', 'East', 'North', 'Sun'], answer: 'West', explanation: 'The morning Sun is in the east, so the shadow falls on the opposite side, the west.' },
  { prompt: 'Why are shadows long in the late afternoon?', options: ['The Sun is low in the sky', 'The Sun is closer to Earth', 'The Moon is behind the object', 'Earth is spinning faster'], answer: 'The Sun is low in the sky', explanation: 'A low Sun makes long shadows.' },
  { prompt: 'A learner says: \u201cNight happens when the Moon blocks the Sun.\u201d What is wrong with this?', options: ['Our side of Earth has turned away from the Sun', 'The Moon is much too far away to block anything at all', 'The Moon only ever blocks the Sun during winter nights', 'The Sun is only ever blocked by thick clouds at night'], answer: 'Our side of Earth has turned away from the Sun', explanation: 'Night is caused by Earth\u2019s rotation. The Moon is not involved.' },
  { prompt: 'Which movement of Earth takes about one year?', options: ['Revolving around the Sun', 'Rotating on its own axis', 'Wobbling slowly on its axis', 'The Moon orbiting around Earth'], answer: 'Revolving around the Sun', explanation: 'One orbit of the Sun takes about 365\u00bc days.' },
  { prompt: 'It is 12 noon in South Africa. What is happening on the opposite side of Earth?', options: ['It is night there', 'It is midday there too', 'It is sunrise there', 'It is evening there'], answer: 'It is night there', explanation: 'Half of Earth is always in darkness. The opposite side is turned away from the Sun.' },
  { prompt: 'What causes the seasons?', options: ['Earth\u2019s tilted axis as it orbits the Sun', 'Earth being much closer to the Sun in summer', 'The Sun getting hotter and then cooler again', 'Earth spinning a lot faster in the winter months'], answer: 'Earth\u2019s tilted axis as it orbits the Sun', explanation: 'The tilt changes how directly sunlight reaches each part of Earth during the year.' },
  { prompt: 'A learner says: \u201cIt is summer because Earth is closest to the Sun.\u201d Is this correct?', options: ['No, Earth\u2019s tilt causes the seasons', 'Yes, summer is when Earth is nearest to the Sun', 'Yes, but only in the northern half of the world', 'No, it is the Moon\u2019s pull that causes the seasons'], answer: 'No, Earth\u2019s tilt causes the seasons', explanation: 'Earth\u2019s distance from the Sun does not cause the seasons.' },
  { prompt: 'When it is summer in South Africa, what season is it in the United Kingdom?', options: ['Winter', 'Summer', 'Spring', 'Autumn'], answer: 'Winter', explanation: 'The two countries are in opposite halves of Earth, so their seasons are opposite.' },
  { prompt: 'Why are summer days longer than winter days?', options: ['Our part of Earth leans to the Sun', 'Earth spins a lot more slowly in summer', 'The Sun moves much faster across the sky in winter', 'The Moon stays in the sky for much longer in summer'], answer: 'Our part of Earth leans to the Sun', explanation: 'When a place leans towards the Sun it has longer days and more direct sunlight.' },
  { prompt: 'Which months are winter in South Africa?', options: ['June to August', 'December to February', 'March to May', 'September to November'], answer: 'June to August', explanation: 'In the southern hemisphere, winter is about June to August.' },
];

const DayNightSeasons = () => (
  <NstTopic title="Day, Night & Seasons" subtitle="Earth&apos;s spin, sunlight and seasons" learnSteps={learnSteps} task="day-night-seasons" bank={bank} />
);

export default DayNightSeasons;
