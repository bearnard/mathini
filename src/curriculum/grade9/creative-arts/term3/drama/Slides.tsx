import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { rehearsalPlan, scriptStats } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { RehearsalBar, ScriptExcerpt, StoryArc, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';
import { DIALOGUE_PARTS, MOOD_MAKERS, WAITING_THREE, WAITING_TWO } from '../../../../../components/diagrams/arts/ca9-drama-helpers';

// The scripts and the rehearsal split come from ca8/ca9 drama helpers (tested).
const three = scriptStats(WAITING_THREE);
const two = scriptStats(WAITING_TWO);
const plan = rehearsalPlan(40);
const [warm, block, run, notes] = plan.map((p) => p.minutes);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Start with story, conflict and motives',
    content: slide(
      <>
        <Rule>Script writing begins with understanding your characters&apos; motives, the conflict and your story.</Rule>
        <StoryArc beats={7} climaxAt={4} aria="A line graph of tension over seven beats. It rises through the beginning and the middle to a climax at beat five, then falls through the ending." />
        <Worked
          title="Plan a short scene"
          steps={['Characters: Sipho and his friend Aya.', 'Motives: Sipho hides that he cannot afford the school trip; Aya wants to help.', 'Conflict: his pride against honesty.', 'Shape: show the problem, build tension to a climax, then resolve it.']}
        />
        <Mistake>Writing dialogue before you know what the characters want. Without motive and conflict the scene goes nowhere.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dialogue and stage directions',
    content: slide(
      <>
        <Rule>A script shows the speaker&apos;s name, a stage direction in brackets and the line. Stage directions tell performers where to move, what tone to use and what to do.</Rule>
        <TermGrid terms={DIALOGUE_PARTS} cols={3} aria="Three parts of a script line in boxes: name (who is speaking), direction (what they do) and line (what they say)." />
        <Worked
          title="Turn 'Sipho looks away and says he is fine' into script"
          steps={['Name in capitals: SIPHO.', 'Direction in brackets: (looking away, quietly).', 'Then the line: I’m fine.', 'Result: SIPHO (looking away, quietly): I’m fine.']}
        />
        <Mistake>Writing like a story: &quot;Sipho felt sad and said...&quot;. A script shows feeling through the lines and the directions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adapting a scene',
    content: slide(
      <>
        <Rule>Adapting means taking existing material and rewriting it for your aim or cast. Keep what matters and change what does not fit.</Rule>
        <ScriptExcerpt lines={WAITING_TWO} title="Adapted for two actors" aria={`A script excerpt adapted for ${two.speakers} actors: ${two.lines} lines, each with a stage direction.`} />
        <Worked
          title="Adapt a scene from three actors to two"
          steps={[`The original has ${three.speakers} speakers: Zandile, Mosa and Ayanda.`, `Our cast has ${two.speakers} actors, so Mosa takes Ayanda’s line.`, 'Keep the directions: Mosa shrugs, then runs in.', 'Check that the meaning and the conflict survive.']}
        />
        <Mistake>Copying the scene unchanged, or changing it so much that its meaning is lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mood and audience impact',
    content: slide(
      <>
        <Rule>Mood is built by dialogue, movement, pace and the performers&apos; choices working together. Audience impact is how viewers respond, in feeling and thought, to the show.</Rule>
        <TermGrid terms={MOOD_MAKERS} cols={2} aria="Four things that build mood in boxes: dialogue (the words spoken), movement (where and how they move), pace (the speed of the scene) and choices (what performers decide)." />
        <Worked
          title="Build suspense in the taxi scene"
          steps={['Dialogue: short, broken sentences.', 'Movement: Zandile checks her watch again and again.', 'Pace: slow down and pause before "Did I miss it?".', 'Ask the audience afterwards what they felt and thought.']}
        />
        <Mistake>Thinking dialogue alone sets the mood. Movement, pace and choices matter just as much.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rehearsal and collaboration',
    content: slide(
      <>
        <Rule>Rehearsal discipline means focus, punctuality, openness to direction and teamwork. Collaboration needs listening, compromise, support and new ideas. Peer review is fair, helpful feedback.</Rule>
        <RehearsalBar plan={plan} aria={`A 40-minute rehearsal shared into four parts: warm-up ${warm} minutes, blocking ${block}, run the scene ${run} and notes ${notes}.`} />
        <Worked
          title="Plan a 40-minute rehearsal"
          steps={[`Share the time: ${warm} + ${block} + ${run} + ${notes} = ${warm + block + run + notes} minutes.`, 'Start on time and warm up together.', 'Peer feedback: one thing that worked, one thing to try.']}
        />
        <Mistake>Giving feedback about the person (&quot;You are bad at this&quot;). Comment on the work and suggest a next step.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does script writing begin with?</li>
            <li>Write &quot;Mosa shrugs and says it is always late&quot; in script format.</li>
            <li>In the 40-minute plan, how long is blocking?</li>
            <li>Name two things collaboration requires.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Understanding the characters&apos; motives, the conflict and your story.</li>
            <li>MOSA (shrugging): It is always late.</li>
            <li>{block} minutes.</li>
            <li>Any two of: listening, compromising, supporting others, adding ideas.</li>
          </ol>
        }
      />,
    ),
  },
];
