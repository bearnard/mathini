import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CHARACTER, blocking, rehearsalPlan } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import type { StageSpot } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { ConflictPair, RehearsalBar, StageGrid, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';

// The character parts, stage places and rehearsal split come from ca8-drama-helpers.ts (tested).
const SIPHO: StageSpot = [2, 1];
const MAMA: StageSpot = [0, 0];
const staging = blocking([MAMA, SIPHO]);
const plan = rehearsalPlan(30);
const total = plan.reduce((t, p) => t + p.minutes, 0);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Characterisation',
    content: slide(
      <>
        <Rule>Characterisation is building a believable character through choices: how the character sounds, moves, what they want and how they react.</Rule>
        <TermGrid terms={CHARACTER} cols={2} aria="Four parts of a character in boxes: voice, movement, motivation and reaction, each with a short meaning." />
        <Worked
          title="Build Mrs Dlamini, a strict but kind shopkeeper"
          steps={['Voice: firm, clear and unhurried.', 'Movement: upright, small careful steps.', 'Motivation: she wants her shop kept tidy and fair.', 'Reaction: she frowns at mess, then smiles when helped.']}
        />
        <Mistake>Changing the character&apos;s choices from one moment to the next. A character that is not steady is not believable.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hot-seating',
    content: slide(
      <>
        <Rule>Hot-seating is an activity where a learner answers questions while in role as a character. It deepens understanding of the character&apos;s thoughts and motives.</Rule>
        <Worked
          title="Hot-seat Sipho, who forgot to collect his sister"
          steps={['Sit in the chair, take on Sipho’s voice and posture.', 'The class asks: "Why were you late?"', 'Answer in role, in the first person: "I was at practice and lost track of time."', 'Add a feeling: "I feel terrible."']}
        />
        <Mistake>Answering as yourself, or with just &quot;yes&quot; and &quot;no&quot;. Stay in role and explain why the character acts as they do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conflict drives the scene',
    content: slide(
      <>
        <Rule>Conflict, when characters want opposite things, drives the action of a scene. It gives characters a reason to speak, move and react.</Rule>
        <ConflictPair a={{ name: 'Sipho', wants: 'go to practice' }} b={{ name: 'Mama', wants: 'help at home' }} aria="Two boxes joined by a double arrow marked clash. Sipho wants to go to practice. Mama wants him to help at home." />
        <Worked
          title="Use the clash"
          steps={['Sipho wants to leave; Mama wants him to stay.', 'Each tries to win: asking, bargaining, refusing.', 'The scene ends when one gives in or they find a compromise.']}
        />
        <Mistake>Giving no one a goal. If neither character wants anything, nothing happens in the scene.</Mistake>
      </>,
    ),
  },
  {
    title: 'Staging and scripted dialogue',
    content: slide(
      <>
        <Rule>Staging is how actors and action are placed on stage. It affects what the audience can see, what it means and where it looks. Scripted dialogue lets you practise timing, cues and interpretation.</Rule>
        <StageGrid
          marks={[{ at: MAMA, label: 'M', color: '#fb7185' }, { at: SIPHO, label: 'S' }]}
          aria={`A stage seen from above with the audience at the front. Mama stands ${staging.names[0].toLowerCase()} and Sipho stands ${staging.names[1].toLowerCase()}, nearest the audience.`}
        />
        <Worked
          title="Stage the argument"
          steps={[<>Place Sipho at {staging.names[1]}, close to the audience.</>, <>Place Mama at {staging.names[0]}, {staging.legs[0].steps} areas away.</>, 'Both actors face partly to the front so the audience sees their faces.']}
        />
        <Mistake>Hiding one actor behind another. If the audience cannot see a character, the conflict is lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rehearsal discipline and reflection',
    content: slide(
      <>
        <Rule>Rehearsal discipline means arriving prepared and using time productively. Strong focus means staying committed to the aim of the scene. Reflect by asking: how did the staging choices support the conflict?</Rule>
        <RehearsalBar plan={plan} aria={`A ${total}-minute rehearsal shared out: ${plan.map((p) => `${p.name} ${p.minutes} minutes`).join(', ')}.`} />
        <Worked
          title={`Plan a ${total}-minute rehearsal`}
          steps={[<>{plan.map((p) => p.minutes).join(' + ')} = {total} minutes.</>, 'Arrive with lines learnt and your props ready.', 'Reflect: Sipho stood downstage, so the audience saw his refusal clearly.']}
        />
        <Mistake>Chatting through the session or running the scene only once. Reflection that does not name a technique does not help the next rehearsal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does characterisation mean?</li>
            <li>What is hot-seating?</li>
            <li>What does conflict do in a scene?</li>
            <li>What does staging refer to?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Building believable characters through choices.</li>
            <li>A learner answers questions while in role as a character.</li>
            <li>It drives the action of the scene.</li>
            <li>How actors and action are placed on stage.</li>
          </ol>
        }
      />,
    ),
  },
];
