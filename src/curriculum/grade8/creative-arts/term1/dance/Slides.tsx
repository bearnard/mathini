import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { AlignmentFigure, CountStrip, FloorPlan, LevelsFigure } from '../../../../../components/diagrams/arts/Ca8DancePictures';
import { barsOf, formation, phraseCounts, splitPlan, timeline } from '../../../../../components/diagrams/arts/ca8-dance-helpers';

// Every count below comes from ca8-dance-helpers.ts (tested in ca8-dance-helpers.test.ts and ca8-dance-lessons.test.ts).
export const PHRASE = [
  { name: 'Step', counts: 2 },
  { name: 'Turn', counts: 2 },
  { name: 'Reach', counts: 2 },
  { name: 'Close', counts: 2 },
] as const;
const phrase = timeline(PHRASE);
const phraseTotal = phraseCounts(PHRASE);

export const LEVEL_PLAN = [
  { name: 'High', counts: 2 },
  { name: 'Medium', counts: 2 },
  { name: 'Low', counts: 2 },
  { name: 'High', counts: 2 },
] as const;
const levels = timeline(LEVEL_PLAN);

const circle = formation('circle', 6);
const session = splitPlan([
  { name: 'Warm-up', size: 10 },
  { name: 'Rehearse', size: 25 },
  { name: 'Cool-down', size: 5 },
]);
const range = (s: { start: number; end: number }) => (s.start === s.end ? `count ${s.start}` : `counts ${s.start} to ${s.end}`);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Locomotor and non-locomotor movement',
    content: slide(
      <>
        <Rule>Locomotor movements travel from one place to another. Non-locomotor movements stay mostly in one place.</Rule>
        <CompareCards
          left={{ title: 'Locomotor', lines: ['Travels across the floor', 'Walk, skip, gallop, slide'] }}
          right={{ title: 'Non-locomotor', lines: ['Stays on one spot', 'Bend, twist, stretch, swing'] }}
        />
        <Worked
          title="Sort three movements"
          steps={['Ask one question: does the dancer travel across the floor?', 'Skipping across the room: yes, so it is locomotor.', 'Twisting on one spot, or reaching upward while standing: no, so they are non-locomotor.']}
        />
        <Mistake>Judging by size or speed. A big, fast twist on one spot is still non-locomotor.</Mistake>
      </>,
    ),
  },
  {
    title: 'Counting the beat',
    content: slide(
      <>
        <Rule>Dancers count the beat so that they start, change and finish together. Counts are usually grouped in eights: {phraseTotal} counts fill {barsOf(phraseTotal)} bars of 4.</Rule>
        <CountStrip
          segments={phrase}
          total={phraseTotal}
          aria={`Eight counts in a row. ${phrase.map((s) => `${s.name} on ${range(s)}`).join(', ')}.`}
        />
        <Worked
          title="Build an 8-count phrase"
          steps={phrase.map((s) => `${s.name}: ${range(s)} (${s.counts} counts).`).concat([`${phrase.map((s) => s.counts).join(' + ')} = ${phraseTotal} counts.`])}
        />
        <Mistake>Rushing the counts when you feel nervous. Keep the count steady and fit each movement to it.</Mistake>
      </>,
    ),
  },
  {
    title: 'High, medium and low levels',
    content: slide(
      <>
        <Rule>Dancers move at a high, a medium or a low level. Changing level changes how the space is used and makes a phrase more interesting to watch.</Rule>
        <LevelsFigure />
        <Worked
          title="Plan a level change for 8 counts"
          steps={levels.map((s, i) => `${s.name} level on ${range(s)}${i === levels.length - 1 ? ' (rise back up)' : ''}.`)}
        />
        <Mistake>Staying at one level for the whole phrase. Moving between levels gives variety.</Mistake>
      </>,
    ),
  },
  {
    title: 'Spatial awareness in a group',
    content: slide(
      <>
        <Rule>Spatial awareness means knowing where you and the other dancers are. In group dance it avoids collisions and keeps the formation clear.</Rule>
        <FloorPlan
          points={circle}
          aria={`A stage seen from above with ${circle.length} dancers spaced evenly in a circle, the audience at the front.`}
        />
        <Worked
          title={`${circle.length} dancers in a circle`}
          steps={['Space the dancers evenly so each has the same gap on both sides.', 'Before you travel, look to see where your neighbours are.', 'Adjust your path so nobody is crowded or bumped.']}
        />
        <Mistake>Watching only the mirror or dancing at your own pace. A group stays safe when everyone watches the space around them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safe technique',
    content: slide(
      <>
        <Rule>Good posture keeps your balance and protects your body. Warm up first, stretch in a controlled way without forcing, and cool down afterwards so the body recovers gradually.</Rule>
        <AlignmentFigure />
        <Worked
          title={`A ${session.total}-minute rehearsal`}
          steps={[...session.parts.map((p) => `${p.name}: ${p.size} minutes.`), `${session.parts.map((p) => p.size).join(' + ')} = ${session.total} minutes.`]}
        />
        <Mistake>Skipping the warm-up or forcing a stretch until it hurts. Pain is a warning, not progress.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which is locomotor: skipping across the room or twisting on one spot?</>,
          <>{phraseTotal} counts are how many bars of 4?</>,
          <>Why do dancers change level?</>,
          <>Name two parts of a safe rehearsal.</>,
        ]}
        answers={[
          <>Skipping across the room, because the dancer travels.</>,
          <>{phraseTotal} ÷ 4 = {barsOf(phraseTotal)} bars.</>,
          <>It uses the space in a new way and adds visual interest.</>,
          <>Any two of: warm-up, good posture, controlled stretching, cool-down.</>,
        ]}
      />,
    ),
  },
];
