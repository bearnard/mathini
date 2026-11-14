import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';
import { moonLabelHotspots } from '../../_shared/diagrams/moonLabel';
import MoonPhases from '@/components/diagrams/MoonPhases';

const learnSteps: LearnStep[] = [
  {
    title: 'Earth rotates',
    image: { src: '/curriculum/grade6/nst/term4/earth-moon-movement/diagram.svg', alt: 'Earth rotating, revolving around the Sun, and the Moon orbiting Earth' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Earth <strong>rotates</strong> (spins) on its axis once every 24 hours. This gives us <strong>day and night</strong>.
        </p>
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Earth spins towards the east, so the Sun seems to <strong>rise in the east</strong> and <strong>set in the west</strong>.
        </p>
        <p className="text-slate-500">The Sun does not really move across the sky. Earth is turning.</p>
      </div>
    ),
  },
  {
    title: 'Earth revolves',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Earth <strong>revolves</strong> (orbits) around the Sun. One full orbit is one <strong>year</strong>.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          A year is about 365¼ days.
        </div>
        <p className="text-slate-500">The extra quarter days add up, so every fourth year is a <strong>leap year</strong> with 366 days (29 February).</p>
      </div>
    ),
  },
  {
    title: 'The Moon orbits Earth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Moon</strong> is Earth&apos;s natural satellite. It orbits Earth in about a <strong>month</strong>.
        </p>
        <p className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">
          The Moon does not make its own light. It <strong>reflects sunlight</strong>.
        </p>
        <p className="text-slate-500">The half of the Moon facing the Sun is always lit. The other half is dark.</p>
      </div>
    ),
  },
  {
    title: 'Why the Moon has phases',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          As the Moon orbits Earth, we see different amounts of its <strong>lit half</strong>. These changing shapes are the <strong>phases of the Moon</strong>.
        </p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">
          Phases are NOT caused by Earth&apos;s shadow. They happen because of where the Moon is in its orbit.
        </p>
        <p className="text-slate-500">The cycle takes about 29 days, so about one month.</p>
      </div>
    ),
  },
  {
    title: 'The 8 phases in order',
    content: (
      <div className="space-y-4 text-center">
        <MoonPhases />
        <p className="rounded-xl bg-indigo-50 p-4 font-semibold text-indigo-700">
          In South Africa the <strong>waxing</strong> Moon is lit on the <strong>left</strong>. The <strong>waning</strong> Moon is lit on the <strong>right</strong>.
        </p>
      </div>
    ),
  },
  {
    title: 'Waxing, waning, crescent, gibbous',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-5 text-emerald-800"><strong>Waxing</strong> = the lit part is growing</div>
          <div className="rounded-xl bg-orange-50 p-5 text-orange-800"><strong>Waning</strong> = the lit part is shrinking</div>
          <div className="rounded-xl bg-slate-50 p-5 text-slate-700"><strong>Crescent</strong> = less than half lit</div>
          <div className="rounded-xl bg-slate-50 p-5 text-slate-700"><strong>Gibbous</strong> = more than half lit</div>
        </div>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'Which movement of Earth gives us day and night?', options: ['Rotating on its axis', 'Revolving around the Sun', 'The Moon orbiting Earth', 'Tilting towards the Moon'], answer: 'Rotating on its axis', explanation: 'As Earth spins, different places face the Sun or face away from it.' },
  { prompt: 'In which direction does the Sun seem to rise?', options: ['East', 'West', 'North', 'South'], answer: 'East', explanation: 'Earth spins towards the east, so the Sun appears in the east and sets in the west.' },
  { prompt: 'Which statement about Earth\u2019s rotation is correct?', options: ['It makes the Sun seem to rise in the east', 'It takes a whole year to complete one turn', 'It is what makes the Moon change its shape', 'It is the main cause of the four seasons we have'], answer: 'It makes the Sun seem to rise in the east', explanation: 'Earth turns once a day, towards the east, so the Sun appears in the east. A year is one trip around the Sun, and the phases come from the Moon\u2019s orbit.' },
  { prompt: 'About how long does Earth take to revolve once around the Sun?', options: ['365\u00bc days', '24 hours', '30 days', '12 months of 28 days'], answer: '365\u00bc days', explanation: 'A year is about 365\u00bc days, which is why we have a leap year every four years.' },
  { prompt: 'Why do we have a leap year every four years?', options: ['The extra quarter days add up to one day', 'The Moon needs an extra day to catch up', 'Earth spins more slowly every fourth year', 'People simply decided to add a day'], answer: 'The extra quarter days add up to one day', explanation: 'Four quarters make one extra day, which is 29 February.' },
  { prompt: 'How many days are in a leap year?', options: ['366', '365', '364', '360'], answer: '366', explanation: 'A leap year has 366 days.' },
  { prompt: 'What does the Moon orbit?', options: ['Earth', 'The Sun only', 'Mars', 'Jupiter'], answer: 'Earth', explanation: 'The Moon is Earth\u2019s natural satellite.' },
  { prompt: 'Why can we see the Moon?', options: ['It reflects light from the Sun', 'It makes its own light like the Sun', 'It glows from heat inside it', 'It is lit by the light of Earth'], answer: 'It reflects light from the Sun', explanation: 'The Moon does not make light. It reflects sunlight.' },
  { prompt: 'What causes the phases of the Moon?', options: ['We see different amounts of the Moon\u2019s lit half', 'Earth\u2019s shadow covers part of the Moon each night', 'Clouds in our sky cover part of the Moon each night', 'The Moon itself changes its real size and shape'], answer: 'We see different amounts of the Moon\u2019s lit half', explanation: 'Half the Moon is always lit by the Sun. As it orbits, we see more or less of that lit half.' },
  { prompt: 'Which phase is the first one in the cycle?', options: ['New Moon', 'Full Moon', 'First Quarter', 'Waxing Crescent'], answer: 'New Moon', explanation: 'The cycle starts at New Moon, when we cannot see the Moon.' },
  { prompt: 'Which list shows the phases in the correct order?', options: ['New, Waxing Crescent, First Quarter, Waxing Gibbous, Full', 'New, Waxing Gibbous, First Quarter, Waxing Crescent, Full', 'New, First Quarter, Waxing Crescent, Full, Waxing Gibbous', 'New, Waxing Crescent, Waxing Gibbous, First Quarter, Full'], answer: 'New, Waxing Crescent, First Quarter, Waxing Gibbous, Full', explanation: 'The Moon grows from nothing to full: crescent, then half, then gibbous, then full.' },
  { prompt: 'Which phase comes straight after Full Moon?', options: ['Waning Gibbous', 'Waxing Gibbous', 'Last Quarter', 'Waning Crescent'], answer: 'Waning Gibbous', explanation: 'After Full Moon the lit part shrinks, starting with Waning Gibbous.' },
  { prompt: 'Which phase comes just before the next New Moon?', options: ['Waning Crescent', 'Waxing Crescent', 'Last Quarter', 'Waning Gibbous'], answer: 'Waning Crescent', explanation: 'The order is Full, Waning Gibbous, Last Quarter, Waning Crescent, then New Moon.' },
  { prompt: 'What does waning mean?', options: ['The lit part is getting smaller', 'The lit part is getting bigger', 'The Moon is moving faster', 'The Moon is getting closer to Earth'], answer: 'The lit part is getting smaller', explanation: 'Waxing means growing. Waning means shrinking.' },
  { prompt: 'What does a gibbous Moon look like?', options: ['More than half lit', 'Less than half lit', 'Exactly half lit', 'Not lit at all'], answer: 'More than half lit', explanation: 'Gibbous is between the quarter and the full moon. Crescent is less than half.' },
  { prompt: 'A learner says: \u201cThe Moon has phases because Earth\u2019s shadow covers it.\u201d What is wrong with this?', options: ['Where the Moon is in its orbit', 'Earth is too small to make any shadow in space', 'The shadow is made by the Sun, not by Earth itself', 'Shadows only ever fall on the Moon in summer'], answer: 'Where the Moon is in its orbit', explanation: 'Earth\u2019s shadow causes a lunar eclipse, which is rare. Phases happen every month.' },
  { kind: 'order', section: 'moon-phases', prompt: 'Put the eight phases of the Moon in order, starting at New Moon.', options: ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'], answer: 'New Moon|Waxing Crescent|First Quarter|Waxing Gibbous|Full Moon|Waning Gibbous|Last Quarter|Waning Crescent', explanation: 'The lit part grows (waxing) to Full Moon, then shrinks (waning) back to New Moon. The cycle takes about 29 days.' },
  { kind: 'order', section: 'day-night', prompt: 'Put these events of one day in order, as Earth turns.', options: ['The Sun appears in the east at sunrise', 'The Sun is highest in the sky at midday', 'The Sun disappears in the west at sunset', 'It is dark where you live'], answer: 'The Sun appears in the east at sunrise|The Sun is highest in the sky at midday|The Sun disappears in the west at sunset|It is dark where you live', explanation: 'Earth spins towards the east, so the Sun seems to rise in the east, cross the sky and set in the west.' },
  { kind: 'label', section: 'moon-phases', prompt: 'Label four of the Moon phases in this diagram, as seen from South Africa.', Diagram: MoonPhases, hotspots: moonLabelHotspots(['new-moon', 'first-quarter', 'full-moon', 'last-quarter']), options: ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter', 'Waxing Crescent', 'Waning Gibbous'], answer: 'new-moon=New Moon|first-quarter=First Quarter|full-moon=Full Moon|last-quarter=Last Quarter', explanation: 'At New Moon we see none of the lit side and at Full Moon all of it. From South Africa the left half is lit at First Quarter and the right half at Last Quarter.' },
];

const EarthMoonMovement = () => (
  <NstTopic title="Earth & Moon Movement" subtitle="Rotation, revolution and Moon phases" learnSteps={learnSteps} task="earth-moon-movement" bank={bank} />
);

export default EarthMoonMovement;
