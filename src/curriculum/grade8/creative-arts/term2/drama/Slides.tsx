import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { LOST_PHONE, blocking, scriptStats, tensionArc } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import type { StageSpot } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { ScriptExcerpt, StageGrid, StoryArc } from '../../../../../components/diagrams/arts/Ca8DramaPictures';

// The arc, the script and the stage route come from ca8-drama-helpers.ts (tested).
const arc = tensionArc(7, 4);
const climax = arc.reduce((best, p) => (p.value > best.value ? p : best));
const script = scriptStats(LOST_PHONE);
const ROUTE: StageSpot[] = [[0, 0], [1, 1], [2, 2]];
const route = blocking(ROUTE);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Story structure',
    content: slide(
      <>
        <Rule>A clear dramatic story is built from three parts: a beginning, a middle and an ending. Tension rises through the middle to a climax, then the ending settles the problem.</Rule>
        <StoryArc aria={`A tension curve over ${arc.length} moments. It starts low in the beginning, climbs through the middle to a climax at moment ${climax.beat}, then falls in the ending.`} />
        <Worked
          title="Shape the scene: The Lost Phone"
          steps={['Beginning: Naledi reaches school and cannot find her phone.', 'Middle: she searches, blames herself, and tension grows.', 'Ending: the problem is settled, so the audience is satisfied.']}
        />
        <Mistake>Starting at the ending or stopping before the problem is settled. The audience is left confused.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tension and focus',
    content: slide(
      <>
        <Rule>Tension is the feeling of expectation or suspense. It keeps the audience wondering what will happen next. Focus means staying committed to the scene so that feeling is believable.</Rule>
        <NumberedSteps
          label="Ways to build tension"
          heading="Building tension at a door"
          tone="amber"
          steps={[
            { lead: 'Slow', text: ' the pace and lower the volume.' },
            { lead: 'Pause', text: ' before the knock is answered.' },
            { lead: 'Stay still,', text: ' and look at the door.' },
          ]}
        />
        <Worked
          title="A knock at the door"
          steps={['Freeze when you hear the knock.', 'Look at the door and breathe slowly.', 'Wait, then walk to the door slowly.', 'Keep your focus on the door until the scene ends.']}
        />
        <Mistake>Rushing the tense moment or glancing at friends in the audience. Tension and focus both break.</Mistake>
      </>,
    ),
  },
  {
    title: 'Script excerpts and cue cards',
    content: slide(
      <>
        <Rule>A script excerpt is a short section of dialogue and action. Each speaker&apos;s name comes first and stage directions sit in brackets. Cue cards prompt key points during rehearsal.</Rule>
        <ScriptExcerpt lines={LOST_PHONE} title="The Lost Phone (excerpt)" aria={`A script excerpt with ${script.lines} lines spoken by ${script.speakers} characters, Naledi and Sipho. Each line has a stage direction in brackets.`} />
        <Worked
          title="Make a cue card for Naledi"
          steps={['List the key points: search bag, panic, taxi.', 'Write each as a few words, not the full lines.', 'Use the card to prompt yourself while rehearsing.']}
        />
        <Mistake>Copying the whole script onto a cue card. A cue card holds key points only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Blocking and audience awareness',
    content: slide(
      <>
        <Rule>Blocking is planned movement on stage. Audience awareness means using voice and body so the meaning reaches the viewers: face the audience, keep an open body and project.</Rule>
        <StageGrid
          route={ROUTE}
          marks={[{ at: ROUTE[0], label: 'A' }]}
          aria={`A stage seen from above, split into nine areas, with the audience at the front. Actor A starts ${route.names[0].toLowerCase()}, moves to ${route.names[1].toLowerCase()}, then to ${route.names[2].toLowerCase()}. Stage right is on the left of the picture.`}
        />
        <Worked
          title="Block three moves for actor A"
          steps={[<>Enter at {route.names[0]}.</>, <>Cross to {route.names[1]} on the first line: {route.legs[0].steps} area.</>, <>Exit at {route.names[2]}: {route.legs[1].steps} area. Total moves: {route.totalSteps}.</>]}
        />
        <Mistake>Turning your back on the audience while speaking. The words do not reach the viewers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Improvise, then reflect',
    content: slide(
      <>
        <Rule>Improvisation helps you try out ideas quickly before settling the scene. Reflective discussion afterwards should give specific examples of strengths and improvements.</Rule>
        <NumberedSteps
          label="From improvisation to a finished scene"
          heading="From idea to scene"
          tone="violet"
          steps={[
            { lead: 'Try', text: ' the scene a few different ways.' },
            { lead: 'Choose', text: ' the version that works best.' },
            { lead: 'Rehearse', text: ' it with blocking and cues.' },
            { lead: 'Reflect', text: ' with examples.' },
          ]}
        />
        <Worked
          title="Reflect on The Lost Phone"
          steps={['Strength: the pause before "Oh no" built tension.', 'Improvement: Naledi’s voice dropped at the end, so project the last line.']}
        />
        <Mistake>Saying only &quot;it was good&quot; or &quot;it was bad&quot;. Without an example, no one knows what to do next.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which three parts should every scene you perform be built from?</li>
            <li>What is tension in drama?</li>
            <li>What does blocking mean?</li>
            <li>What are cue cards used for?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A beginning, a middle and an ending.</li>
            <li>The feeling of expectation or suspense.</li>
            <li>Planned movement on stage.</li>
            <li>Prompting key points during rehearsal.</li>
          </ol>
        }
      />,
    ),
  },
];
