import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { averageOf, canonStarts, dec, countsToSeconds, routineTimeline, unisonGap, weakestOf } from '../../../../../components/diagrams/arts/ca9-dance-helpers';
import { CanonBars, RoutineTimeline, ScoreBars } from '../../../../../components/diagrams/arts/Ca9DancePictures';

// Every number below comes from ca9-dance-helpers.ts (tested in ca9-dance-helpers.test.ts and ca9-dance-lessons.test.ts).
const BPM = 120;
const routine = routineTimeline([{ name: 'Intro', counts: 16 }, { name: 'A', counts: 32 }, { name: 'B', counts: 32 }, { name: 'End', counts: 16 }], 8);
const routineSeconds = countsToSeconds(routine.total, BPM);
const phraseSeconds = countsToSeconds(32, BPM);
const lateStarts = [0, 0, 1];
const lateSeconds = countsToSeconds(unisonGap(lateStarts), BPM);
export const SCORES = [
  { name: 'Technique', score: 4 },
  { name: 'Expression', score: 5 },
  { name: 'Presence', score: 3 },
];
const weakest = weakestOf(SCORES);
const average = averageOf(SCORES);
const together = canonStarts(3, 0);
const q2 = countsToSeconds(64, BPM);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Refining the final choreography',
    content: slide(
      <>
        <Rule>Refinement means perfecting timing, clarity, transitions and steady quality. You improve what is there before adding anything new.</Rule>
        <RoutineTimeline blocks={routine.blocks} total={routine.total} aria={`The final routine as blocks: Intro, A, B and End joined by links, ${routine.total} counts in all. At ${BPM} beats a minute it lasts ${dec(routineSeconds)} seconds.`} />
        <Worked
          title="Check the whole routine"
          steps={[<>Length: {routine.total} counts at {BPM} beats a minute.</>, <>{routine.total} × 60 ÷ {BPM} = {dec(routineSeconds)} seconds.</>, 'Run each link on its own, then the whole routine, and fix the weakest part.']}
        />
        <Mistake>Adding more steps to improve a dance. Cleaner timing and clearer transitions improve it more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Timing with the music and each other',
    content: slide(
      <>
        <Rule>Good timing means exact timing with the music and the other dancers throughout. One count at {BPM} beats a minute lasts only {dec(countsToSeconds(1, BPM))} seconds.</Rule>
        <CanonBars starts={lateStarts} length={8} end={8 + unisonGap(lateStarts)} aria={`Three dancers do the same 8-count phrase, but the third starts ${unisonGap(lateStarts)} count late. At ${BPM} beats a minute that is ${dec(lateSeconds)} seconds.`} />
        <Worked
          title="How late is one count?"
          steps={[<>Gap: {unisonGap(lateStarts)} count.</>, <>{unisonGap(lateStarts)} × 60 ÷ {BPM} = {dec(lateSeconds)} seconds.</>, <>A {32}-count section lasts {dec(phraseSeconds)} seconds, so small errors are easy to see.</>]}
        />
        <Mistake>Speeding up when nervous. Keep counting the beat so that you stay with the music and the group.</Mistake>
      </>,
    ),
  },
  {
    title: 'A polished performance',
    content: slide(
      <>
        <Rule>A polished performance has technical accuracy, expressive delivery and a confident presence. Artistic maturity shows in control, expression, confidence, respect and audience awareness.</Rule>
        <ScoreBars scores={SCORES} max={5} weakest={weakest.name} aria={`Bars for three criteria out of 5: technique ${SCORES[0].score}, expression ${SCORES[1].score} and presence ${SCORES[2].score}. Presence is lowest.`} />
        <Worked
          title="Score one performance out of 5"
          steps={[<>{SCORES.map((s) => `${s.name} ${s.score}`).join(', ')}. Average {dec(average)}.</>, <>{weakest.name} is lowest ({weakest.score}): practise facing the audience and holding focus.</>]}
        />
        <Mistake>Thinking polish is only perfect steps. Expression and a confident presence count as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dance communicates ideas',
    content: slide(
      <>
        <Rule>Dance communication means using movement to show emotion, story or theme to viewers. Appreciation means understanding styles and respecting traditions and artistic choices.</Rule>
        <NumberedSteps
          label="Talking about a dance"
          heading="Read a dance in three steps"
          tone="amber"
          steps={[
            { lead: 'Describe', text: ' the movements, formations and energy you saw.' },
            { lead: 'Interpret', text: ' the emotion, story or theme they show.' },
            { lead: 'Respond', text: ' with your reasons, respecting the style and tradition.' },
          ]}
        />
        <Mistake>Judging only by &quot;I liked it&quot;. Give reasons from what you saw.</Mistake>
      </>,
    ),
  },
  {
    title: 'Feedback and community performance',
    content: slide(
      <>
        <Rule>Peer feedback should focus on technical skill, expression and how the dance affected you. Community chances to perform include school events, cultural celebrations and public showcases.</Rule>
        <Worked
          title="Useful feedback"
          steps={['Say what was strong: "Your timing stayed with the group."', 'Say what to improve: "The link into B was late."', 'Say how it affected you: "The ending made me smile."']}
        />
        <Mistake>Saying only &quot;it was good&quot;. Specific feedback helps the dancers grow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name two things that refinement perfects.</li>
            <li>A routine is 64 counts at {BPM} beats a minute. How many seconds is that?</li>
            <li>Three dancers start at counts {together.join(', ')}. Is that unison or a canon?</li>
            <li>Name two places where dancers can perform for the community.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Timing, clarity, transitions and steady quality.</li>
            <li>64 × 60 ÷ {BPM} = {dec(q2)} seconds.</li>
            <li>Unison: every start is the same ({unisonGap(together)} counts apart).</li>
            <li>School events, cultural celebrations or public showcases.</li>
          </ol>
        }
      />,
    ),
  },
];
