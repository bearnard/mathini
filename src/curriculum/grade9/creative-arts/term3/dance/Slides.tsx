import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { attendance, averageOf, dec, routineTimeline, weakestOf } from '../../../../../components/diagrams/arts/ca9-dance-helpers';
import { RehearsalLog, RoutineTimeline, ScoreBars, TransitionPaths } from '../../../../../components/diagrams/arts/Ca9DancePictures';

// Every number below comes from ca9-dance-helpers.ts (tested in ca9-dance-helpers.test.ts and ca9-dance-lessons.test.ts).
export const SECTIONS = [
  { name: 'Intro', counts: 16 },
  { name: 'A', counts: 32 },
  { name: 'B', counts: 32 },
  { name: 'End', counts: 16 },
];
const routine = routineTimeline(SECTIONS, 8);
const withoutLinks = routineTimeline(SECTIONS, 0);
const here = attendance([true, true, false, true, true]);
export const SCORES = [
  { name: 'Technique', score: 4 },
  { name: 'Timing', score: 2 },
  { name: 'Expression', score: 3 },
];
const weakest = weakestOf(SCORES);
const average = averageOf(SCORES);
const q1 = routineTimeline([{ name: 'A', counts: 16 }, { name: 'B', counts: 16 }], 8);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Group choreography and its sections',
    content: slide(
      <>
        <Rule>Group choreography makes sequences that several dancers perform together. It is built from sections, such as an intro, two main parts and an ending, joined by links.</Rule>
        <RoutineTimeline blocks={routine.blocks} total={routine.total} aria={`A routine drawn as blocks: Intro 16 counts, A 32, B 32 and End 16, with an 8-count link between each pair. In total the routine is ${routine.total} counts.`} />
        <Worked
          title="Count the whole routine"
          steps={[<>Sections: {SECTIONS.map((s) => s.counts).join(' + ')} = {withoutLinks.total} counts.</>, <>Add {routine.links} links of 8: {routine.links} × 8 = {routine.links * 8}.</>, <>Total: {withoutLinks.total} + {routine.links * 8} = {routine.total} counts, or {routine.eights.full} eights.</>]}
        />
        <Mistake>Forgetting to count the links. The music must last for the sections and the links.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transitions: linking the sections',
    content: slide(
      <>
        <Rule>Transitions are links between sections that flow smoothly. Linking sections well makes the dance feel like one whole.</Rule>
        <TransitionPaths from="line" to="circle" n={6} aria="Two small stages seen from above, side by side. At the end of section A the six numbered dancers stand in a line. At the start of section B the same six dancers stand in a circle." />
        <Worked
          title="From a line to a circle"
          steps={['Section A ends with the dancers in a line.', 'Use an 8-count link of travelling steps so each dancer reaches a circle spot.', 'Section B starts as the last dancer arrives.']}
        />
        <Mistake>Stopping dead between sections. A break in the flow loses the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expressive intent',
    content: slide(
      <>
        <Rule>Expressive intent is the feeling or theme you want the movement to show. It gives your movement choices meaning and purpose.</Rule>
        <Worked
          title="Intent: joy"
          steps={['Choose big, light, quick movements.', 'Use high levels and open arms.', 'Let your face and eyes show the feeling.', 'Hold the feeling from the first count to the last.']}
        />
        <Mistake>Doing the steps correctly but showing no feeling. Intent is part of the performance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rehearsal discipline and logs',
    content: slide(
      <>
        <Rule>Ensemble discipline is consistency, focus, punctuality and commitment to the group&apos;s goals. A rehearsal log tracks progress, records what was learned and shows what to improve.</Rule>
        <RehearsalLog
          rows={[
            { date: '3 Mar', practised: 'Section A, counts 1 to 32', next: 'Keep the group in time' },
            { date: '10 Mar', practised: 'The link into B', next: 'Arrive in the circle on count 8' },
          ]}
          aria="A rehearsal log with two entries. Each row has the date, what the group practised and what to work on next."
        />
        <Worked
          title="Rehearsals attended"
          steps={[<>{here.attended} of {here.of} rehearsals attended.</>, <>{here.attended} ÷ {here.of} = {here.percent}%.</>]}
        />
        <Mistake>Only writing what went well. A useful log also records what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Self-evaluation and performance gaps',
    content: slide(
      <>
        <Rule>Self-evaluation is honestly judging your technical skill, expression and contribution. The gaps you find may be technical errors, timing problems or missing emotional involvement.</Rule>
        <ScoreBars scores={SCORES} max={5} weakest={weakest.name} aria={`Bars for three criteria out of 5: technique ${SCORES[0].score}, timing ${SCORES[1].score} and expression ${SCORES[2].score}. Timing is the lowest, so it is the gap to work on.`} />
        <Worked
          title="Score yourself out of 5"
          steps={[<>Scores: {SCORES.map((s) => `${s.name} ${s.score}`).join(', ')}. Average {dec(average)}.</>, <>The lowest is {weakest.name} ({weakest.score}), so that is the gap to work on first.</>]}
        />
        <Mistake>Giving yourself top marks every time. Honest scores show what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What are transitions in choreography?</li>
            <li>Two sections of {q1.blocks[0].counts} counts have an 8-count link. How many counts altogether?</li>
            <li>Name two things a rehearsal log helps you do.</li>
            <li>Technique {SCORES[0].score}, timing {SCORES[1].score}, expression {SCORES[2].score}. Which gap comes first?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Links between sections that flow smoothly.</li>
            <li>{q1.blocks[0].counts} + 8 + {q1.blocks[2].counts} = {q1.total} counts.</li>
            <li>Track progress and record what to improve (and what was learned).</li>
            <li>{weakest.name}, the lowest score.</li>
          </ol>
        }
      />,
    ),
  },
];
