import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EclipseLines, MoonOrbit, SeasonsTilt } from '../../../../../components/diagrams/science/SciencePictures2';
import { litFraction, phaseName, tideType } from '../../../../../components/diagrams/science/systemsHelpers';

// Phase and tide at the four main points of the Moon's orbit come from tested helpers (systemsHelpers.test.ts).
const points = [0, 90, 180, 270].map((deg) => ({ phase: phaseName(deg), lit: litFraction(deg), tide: tideType(deg) }));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Why we have seasons',
    content: slide(
      <>
        <Rule>
          Seasons are caused by Earth&apos;s axial tilt as it orbits the Sun. The tilt changes the angle and the length of sunlight in each part of the world over a year.
        </Rule>
        <SeasonsTilt />
        <Worked
          title="December and June in South Africa"
          steps={[
            <>In December the southern hemisphere leans towards the Sun: summer in South Africa, with higher Sun and longer days.</>,
            <>Half an orbit later, in June, the southern hemisphere leans away: winter, with a lower Sun and shorter days.</>,
            <>The axis keeps pointing the same way in space, so the north has the opposite season at the same time.</>,
          ]}
        />
        <Mistake>
          Thinking summer is when Earth is closest to the Sun. Earth is closest in early January, which is summer in the south but winter in the north. It is the tilt, not the distance, that gives us seasons.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Phases of the Moon',
    content: slide(
      <>
        <Rule>
          The Moon always has one half lit by the Sun. As it orbits Earth, we see different portions of the lit Moon from Earth. These are the phases.
        </Rule>
        <MoonOrbit show="phases" />
        <Worked
          title="Read the four main phases"
          steps={[
            <>{points[0].phase}: the lit half faces away from us, so we see none of it ({points[0].lit * 100}%).</>,
            <>{points[1].phase} and {points[3].phase}: we see half of the lit half ({points[1].lit * 100}% of the face).</>,
            <>{points[2].phase}: the whole lit face points at us ({points[2].lit * 100}%).</>,
          ]}
        />
        <Mistake>Saying the phases are Earth&apos;s shadow on the Moon. The shadow only falls on the Moon in a lunar eclipse. Phases come from our view of the lit half.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tides',
    content: slide(
      <>
        <Rule>
          The gravity of the Moon and the Sun pulls on the oceans. The biggest (spring) tides come when the Sun, Earth, and Moon are aligned. The smallest (neap) tides arrive when the Moon and the Sun pull at right angles relative to Earth.
        </Rule>
        <MoonOrbit show="tides" />
        <Worked
          title="Match the tide to the Moon"
          steps={[
            <>At {points[0].phase} and {points[2].phase} the three bodies are in a line: {points[0].tide} tides, with the largest tidal range.</>,
            <>At the quarters the Sun and Moon pull at right angles and partly cancel: {points[1].tide} tides, with the smallest range.</>,
          ]}
        />
        <Mistake>Thinking spring tides only happen in the season of spring. They happen about every two weeks, in every season.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gravity and eclipses',
    content: slide(
      <>
        <Rule>
          Gravity is the pull between objects. The Sun&apos;s gravitational pull keeps the planets in orbit, and Earth&apos;s keeps the Moon in orbit.
        </Rule>
        <EclipseLines />
        <Worked
          title="Which body is in the middle?"
          steps={[
            <>Lunar eclipse: Earth is between the Sun and the Moon, so Earth blocks sunlight from reaching the Moon.</>,
            <>Solar eclipse: the Moon is between the Sun and the Earth, so the Moon blocks sunlight from reaching part of the Earth.</>,
          ]}
        />
        <Mistake>Thinking planets stay in orbit because they are pushed round. Gravity keeps them in orbit, pulling them towards the Sun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why is it summer in one hemisphere while it is winter in the other?</li>
            <li>Why do we see a thin crescent one night and a bright circle two weeks later?</li>
            <li>When are the biggest tides, and when are the smallest?</li>
            <li>Which force keeps the planets moving around the Sun? During an eclipse of the Moon, which body casts the shadow?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Earth&apos;s axial tilt as it orbits the Sun.</li>
            <li>Different portions of the lit Moon are visible from Earth.</li>
            <li>The biggest are spring tides: the Sun, Earth and Moon line up. The smallest are neap tides: the Sun and Moon pull at right angles.</li>
            <li>Gravity. Earth.</li>
          </ol>
        }
      />,
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
