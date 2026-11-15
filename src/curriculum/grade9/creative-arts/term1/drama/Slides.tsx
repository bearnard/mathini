import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { VOICE, blocking, markedPause, markedText } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { ConflictPair, StageGrid, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';
import { BULLY_SCENE, DEVISED_LINE, DEVISED_ROUTE, DEVISING_STEPS, MOOD_TOOLS, SOCIAL_THEMES } from '../../../../../components/diagrams/arts/ca9-drama-helpers';

// The devising steps, the roles, the stage route and the marked-up line come from ca9-drama-helpers.ts (tested).
const route = blocking(DEVISED_ROUTE);
const pause = markedPause(DEVISED_LINE);
const spoken = markedText(DEVISED_LINE);
const [first, second] = DEVISED_LINE.filter((p) => p.text);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Devised drama from a social theme',
    content: slide(
      <>
        <Rule>Devised drama is theatre the performers make from ideas, without a written script. Start from a social theme such as {SOCIAL_THEMES.join(', ')}.</Rule>
        <NumberedSteps label="How a group devises a scene" heading="How a group devises a scene" tone="violet" steps={DEVISING_STEPS} />
        <Worked
          title={`Theme: ${SOCIAL_THEMES[0]}`}
          steps={['Brainstorm: a new learner is teased at break.', 'Improvise it with two different endings.', 'Keep the clearest moments and shape the scene.']}
        />
        <Mistake>Waiting for a script. Devised scenes start from the group&apos;s own ideas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Role and conflict',
    content: slide(
      <>
        <Rule>A role is the character a performer plays. Conflict is a clash between characters or forces. It drives the plot.</Rule>
        <ConflictPair a={BULLY_SCENE.a} b={BULLY_SCENE.b} aria={`Two roles in a devised scene. ${BULLY_SCENE.a.name} wants ${BULLY_SCENE.a.wants}. ${BULLY_SCENE.b.name} wants ${BULLY_SCENE.b.wants}. Their wants clash.`} />
        <Worked
          title="Build the bullying scene"
          steps={[`Give each role a name and a want: ${BULLY_SCENE.a.name} wants ${BULLY_SCENE.a.wants}; ${BULLY_SCENE.b.name} wants ${BULLY_SCENE.b.wants}.`, 'The wants clash. That is the conflict.', 'Show it through voice, movement and choices.']}
        />
        <Mistake>Thinking conflict must be a fight. It can be an argument, a silence or a character against a rule.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mood and atmosphere',
    content: slide(
      <>
        <Rule>Mood is the emotional feeling a scene creates. Tone, pace, tension and the performers&apos; choices build it.</Rule>
        <TermGrid terms={MOOD_TOOLS} cols={2} aria="Four mood tools in boxes: tone (how the voice sounds), pace (how fast or slow), tension (waiting for what comes) and choices (what performers decide)." />
        <Worked
          title="Make the playground scene tense"
          steps={['Tone: quiet and low.', 'Pace: slow, with pauses.', 'Tension: Kabelo moves closer before he speaks.', 'Choices: Lerato looks away.']}
        />
        <Mistake>Playing every moment at one speed and volume. The same delivery cannot make fear in one moment and relief in the next.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stage space and physical theatre',
    content: slide(
      <>
        <Rule>Stage space awareness means knowing where you are and using the whole stage on purpose. Physical theatre tells the story mainly with movement, gesture and body expression, not dialogue.</Rule>
        <StageGrid
          marks={[{ at: DEVISED_ROUTE[0], label: 'L' }]}
          route={DEVISED_ROUTE}
          aria="The stage seen from above with nine areas. A dashed route runs from upstage right through centre stage to downstage left, and the actor L stands at the start."
        />
        <Worked
          title="Plan Lerato's journey"
          steps={[`She enters at ${route.names[0]}.`, `She crosses to ${route.names[1]} when Kabelo blocks her.`, `She ends at ${route.names[2]}. Total moves: ${route.totalSteps}.`, 'A physical moment: she shrinks her body and turns away without a word.']}
        />
        <Mistake>Staying clumped in one area. Use the whole stage so every part of the audience sees the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Voice control',
    content: slide(
      <>
        <Rule>Voice control lets performers project, vary pace and tone and show emotion.</Rule>
        <TermGrid terms={VOICE} cols={2} aria="Six voice tools in boxes: volume (how loud or soft), pitch (how high or low), pace (how fast or slow), pause (a planned silence), projection (reaching the back row) and articulation (forming words clearly)." />
        <Worked
          title={`Mark up Lerato's line: "${spoken}"`}
          steps={[`Say "${first.text}" ${first.volume} and ${first.pace}.`, `Pause for ${pause} beats.`, `Say "${second.text}" ${second.volume} and ${second.pace}.`, 'Aim every word at the back wall.']}
        />
        <Mistake>Shouting to show anger. Control means choosing when to get louder. A quiet line can be stronger.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is devised drama?</li>
            <li>Name two things performers use to build mood.</li>
            <li>A route goes from {route.names[0]} to {route.names[1]} to {route.names[2]}. How many moves is that?</li>
            <li>What does physical theatre emphasise?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Theatre made by the performers from ideas, without a written script.</li>
            <li>Any two of: tone, pace, tension, the performers&apos; choices.</li>
            <li>{route.totalSteps} moves.</li>
            <li>Movement, gesture and body expression more than dialogue.</li>
          </ol>
        }
      />,
    ),
  },
];
