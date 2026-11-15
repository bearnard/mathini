import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { ALIGNED_OFFSETS, SLOUCHED_OFFSETS, alignmentDeviation, contrastOf, phraseOf, sessionMinutes } from '../../../../../components/diagrams/arts/ca9-dance-helpers';
import { AlignmentFigures, DynamicsLine, FloorPaths, PhraseBars } from '../../../../../components/diagrams/arts/Ca9DancePictures';

// Every number below comes from ca9-dance-helpers.ts (tested in ca9-dance-helpers.test.ts and ca9-dance-lessons.test.ts).
const slouch = alignmentDeviation(SLOUCHED_OFFSETS);
const phrase = phraseOf([
  { name: 'walk', counts: 8 },
  { name: 'twist', counts: 4 },
  { name: 'skip', counts: 8 },
  { name: 'hold', counts: 4 },
]);
const levels = [
  { name: 'melt', energy: 1 },
  { name: 'sway', energy: 2 },
  { name: 'stamp', energy: 5 },
  { name: 'glide', energy: 3 },
];
const contrast = contrastOf(levels);
const session = [
  { name: 'Raise the pulse', minutes: 5 },
  { name: 'Mobilise the joints', minutes: 5 },
  { name: 'Stretch', minutes: 6 },
  { name: 'Strengthen', minutes: 4 },
];
const sessionTotal = sessionMinutes(session);
const q3 = phraseOf([{ name: 'slide', counts: 8 }, { name: 'bend', counts: 4 }, { name: 'turn', counts: 4 }]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Alignment and posture',
    content: slide(
      <>
        <Rule>Alignment is holding the body correctly so it moves well and stays safe. Good posture prevents injury, looks polished and keeps movement clean.</Rule>
        <AlignmentFigures
          aligned={ALIGNED_OFFSETS}
          slouched={SLOUCHED_OFFSETS}
          aria={`Two stick figures with a vertical plumb line. The aligned figure has its ear, shoulder, hip, knee and ankle all on the line. The other figure's head is ${slouch} units in front of the line and its shoulders are in front of it too.`}
        />
        <Worked
          title="Check your alignment"
          steps={['Stand tall with weight even on both feet.', 'Line up ear, shoulder, hip, knee and ankle in one vertical line.', 'Keep the shoulders down and the knees soft, not locked.']}
        />
        <Mistake>Thinking straight means stiff. Locked knees and a pushed-out chest are not good alignment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Travelling and non-locomotor movement',
    content: slide(
      <>
        <Rule>Travelling steps carry you across the floor, such as walks, runs, skips, slides and hops. Non-locomotor movement stays in one place, such as bending or twisting.</Rule>
        <FloorPaths legs={4} aria="Two floor patterns. On the left a dancer stays in one spot, which is non-locomotor movement. On the right a zigzag line crosses the floor, which is travelling." />
        <Worked
          title="Sort the moves"
          steps={['Skip, slide and run all cover floor space: travelling.', 'Bend, twist and stretch stay on the spot: non-locomotor.', 'A phrase can mix both kinds.']}
        />
        <Mistake>Calling a turn on the spot travelling. If you do not move across the floor, it is non-locomotor.</Mistake>
      </>,
    ),
  },
  {
    title: 'Building a longer phrase',
    content: slide(
      <>
        <Rule>A phrase is several steps and positions linked and done in order. Phrases are the building blocks of choreography. Count each move.</Rule>
        <PhraseBars
          moves={phrase.moves}
          total={phrase.total}
          aria={`A phrase of four linked moves: walk for 8 counts, twist for 4, skip for 8 and hold for 4. In total it is ${phrase.total} counts, which is ${phrase.eights.full} eights.`}
        />
        <Worked
          title="Add up the counts"
          steps={[<>{phrase.moves.map((m) => m.counts).join(' + ')} = {phrase.total} counts.</>, <>{phrase.total} ÷ 8 = {phrase.eights.full} eights.</>]}
        />
        <Mistake>Calling one step a phrase. A phrase links several moves, each with its own counts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dynamics and contrast',
    content: slide(
      <>
        <Rule>Dynamics are changes in speed, weight and energy. Contrast places different movements, speeds or energy side by side to keep the dance interesting.</Rule>
        <DynamicsLine
          levels={levels}
          biggest={contrast.biggest}
          aria={`A line of energy across four moves: melt is level 1, sway 2, stamp 5 and glide 3. The biggest jump, ${contrast.biggest.diff} levels, is from ${levels[contrast.biggest.from].name} to ${levels[contrast.biggest.to].name}.`}
        />
        <Worked
          title="Find the strongest contrast"
          steps={[<>Jumps in energy: {contrast.jumps.map((j) => j.diff).join(', ')}.</>, <>The biggest is {contrast.biggest.diff}, from {levels[contrast.biggest.from].name} to {levels[contrast.biggest.to].name}.</>]}
        />
        <Mistake>Dancing everything at the same energy. With no change in speed or weight, there is no contrast.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safe conditioning',
    content: slide(
      <>
        <Rule>Safe conditioning means a gradual warm-up, stretching and strengthening exercises. This prevents injury and improves the quality of your dancing.</Rule>
        <NumberedSteps
          label="A safe conditioning session"
          heading={`A ${sessionTotal}-minute session`}
          tone="teal"
          steps={session.map((s) => ({ lead: s.name, text: `, ${s.minutes} minutes.` }))}
        />
        <Worked
          title="Plan the time"
          steps={[<>{session.map((s) => s.minutes).join(' + ')} = {sessionTotal} minutes.</>, 'Start gently and build up, then stretch warm muscles.']}
        />
        <Mistake>Stretching cold muscles first, or skipping the warm-up when short of time. Warm up gradually every time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does alignment mean in dance?</li>
            <li>Is a skip travelling or non-locomotor? What about a twist on the spot?</li>
            <li>A phrase has slide for {q3.moves[0].counts} counts, bend for {q3.moves[1].counts} and turn for {q3.moves[2].counts}. How many counts is that?</li>
            <li>What is contrast in a dance piece?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Holding the body correctly to prevent injury and move well.</li>
            <li>A skip is travelling; a twist on the spot is non-locomotor.</li>
            <li>{q3.moves.map((m) => m.counts).join(' + ')} = {q3.total} counts, or {q3.eights.full} eights.</li>
            <li>Different movements, speeds or energy placed side by side.</li>
          </ol>
        }
      />,
    ),
  },
];
