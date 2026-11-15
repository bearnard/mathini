import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BackshiftTable, SentenceRows, VoiceSwap } from '../../../../../components/diagrams/english/Grade9Pictures';
import type { Part } from '../../../../../components/diagrams/english/grammar';
import { CHEF, PLAYER, TEACHER, active, direct, passive, reported } from '../../../../../components/diagrams/english/grade9';

// Sentences are built by the tested helpers in grade9.ts (grade9.test.ts).
const chefA = active(CHEF);
const chefP = passive(CHEF);
const teacherA = active(TEACHER);
const playerP = passive(PLAYER, false, false);
const tired = reported('He', 'he', 'am', 'tired');
export const cause: Part[] = [
  { kind: 'dependent', text: 'Because it rained,', lead: 'Because' },
  { kind: 'independent', text: 'the match was postponed' },
];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Active and passive voice',
    content: slide(
      <>
        <Rule>In the active voice the subject does the action. In the passive voice the subject receives the action.</Rule>
        <VoiceSwap clause={CHEF} />
        <Worked
          title="Which voice? The teacher marked the papers."
          steps={[
            <>Find the verb: <strong>marked</strong>. Who does it? The teacher.</>,
            <>The subject (the teacher) is the doer, so the sentence is <strong>active</strong>.</>,
            <>&ldquo;The papers were marked by the teacher&rdquo; puts the receiver first, so it is passive.</>,
          ]}
        />
        <Mistake>Calling a sentence passive just because it is long or formal. Ask who comes first: the doer (active) or the receiver (passive).</Mistake>
      </>,
    ),
  },
  {
    title: 'Changing to the passive',
    content: slide(
      <>
        <Rule>To make a sentence passive, move the object to the front, add &ldquo;was&rdquo; or &ldquo;were&rdquo; plus the past participle, and put the doer after &ldquo;by&rdquo;. Writers choose passive to stress the action rather than who does it.</Rule>
        <Worked
          title={`Change to passive: ${chefA}`}
          steps={[
            <>Object to the front: <strong>The meal</strong>.</>,
            <>Add was and the verb: <strong>was prepared</strong>.</>,
            <>Add the doer: <strong>by the chef</strong>. Result: {chefP}</>,
            <>You may drop the doer when it is unknown or unimportant: &ldquo;{playerP}&rdquo;</>,
          ]}
        />
        <Mistake>Writing &ldquo;The meal prepared the chef.&rdquo; Swapping only the nouns reverses the meaning. The verb must change to &ldquo;was prepared&rdquo;.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reported speech',
    content: slide(
      <>
        <Rule>Reported speech tells what someone said without their exact words. The pronoun changes to fit the new speaker, and the verb often shifts back in time.</Rule>
        <BackshiftTable />
        <Worked
          title={`Report: ${direct('He', 'am', 'tired')}`}
          steps={[
            <>Drop the speech marks. Keep &ldquo;He said&rdquo;.</>,
            <>&ldquo;I&rdquo; was he speaking, so use <strong>he</strong>.</>,
            <>&ldquo;Am&rdquo; steps back to <strong>was</strong>. Result: <strong>{tired}</strong></>,
            <>The same idea: &ldquo;I will come&rdquo; becomes &ldquo;She said she would come.&rdquo;</>,
          ]}
        />
        <Mistake>Leaving the verb unchanged: &ldquo;He said he is tired.&rdquo; In the reported speech taught here, the verb after &ldquo;said&rdquo; steps back in time: &ldquo;He said he was tired.&rdquo;</Mistake>
      </>,
    ),
  },
  {
    title: 'Figurative language',
    content: slide(
      <>
        <Rule>Figurative language says one thing to suggest another. A metaphor says one thing IS another. A simile says it is LIKE another. Hyperbole is extreme exaggeration for emphasis or humour.</Rule>
        <Worked
          title="Name each figure"
          steps={[
            <>&ldquo;Her heart is a stone.&rdquo; No &ldquo;like&rdquo; or &ldquo;as&rdquo;: a <strong>metaphor</strong> (she is cold or unfeeling).</>,
            <>&ldquo;Her heart is like a stone.&rdquo; Uses &ldquo;like&rdquo;: a <strong>simile</strong>.</>,
            <>&ldquo;I have told you a million times!&rdquo; Not meant literally: <strong>hyperbole</strong>.</>,
            <>&ldquo;The wind whispered&rdquo; gives a human action to wind: personification.</>,
          ]}
        />
        <Mistake>Calling any comparison a metaphor. If the words &ldquo;like&rdquo; or &ldquo;as&rdquo; appear, it is a simile.</Mistake>
      </>,
    ),
  },
  {
    title: 'Complex sentences: cause and effect',
    content: slide(
      <>
        <Rule>A complex sentence can show cause and effect. A dependent clause starting with &ldquo;because&rdquo; explains why the main action happened.</Rule>
        <SentenceRows rows={[{ label: 'Complex: cause then effect', parts: cause }]} />
        <Worked
          title="Join: It rained. The match was postponed."
          steps={[
            <>Find the cause: it rained. The effect: the match was postponed.</>,
            <>Turn the cause into a dependent clause with <strong>Because</strong>.</>,
            <>&ldquo;Because it rained, the match was postponed.&rdquo; The comma follows the dependent clause.</>,
          ]}
        />
        <Mistake>Writing &ldquo;The match was postponed and it rained.&rdquo; The word &ldquo;and&rdquo; only adds an idea. It does not say that the rain caused the delay.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Is &ldquo;{teacherA}&rdquo; active or passive?</>} answer={<>Active: the teacher, who does the action, is the subject.</>} />
        <Check question={<>Change to passive: &ldquo;{chefA}&rdquo;</>} answer={<>{chefP}</>} />
        <Check question={<>Report: &ldquo;I will come,&rdquo; she said.</>} answer={<>She said she would come.</>} />
        <Check question={<>Which is a simile: &ldquo;Her heart is a stone&rdquo; or &ldquo;Her heart is like a stone&rdquo;?</>} answer={<>&ldquo;Her heart is like a stone&rdquo;, because it uses &ldquo;like&rdquo;.</>} />
      </>,
    ),
  },
];

