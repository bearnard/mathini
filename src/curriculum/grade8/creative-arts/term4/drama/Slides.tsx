import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BACKSTAGE, THE_LETTER, scriptStats } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { ScriptExcerpt, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';

// The script and the backstage roles come from ca8-drama-helpers.ts (tested).
const script = scriptStats(THE_LETTER);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Scripted performance',
    content: slide(
      <>
        <Rule>A scripted performance asks you to interpret written dialogue and stage directions, then turn them into voice, movement and expression.</Rule>
        <ScriptExcerpt lines={THE_LETTER} title="The Letter (excerpt)" aria={`A script excerpt with ${script.lines} lines spoken by ${script.speakers} characters, Thandi and Mama. Both lines have a stage direction in brackets.`} />
        <Worked
          title="Interpret Thandi's line"
          steps={['Read the direction: hands shaking, holding the letter.', 'Choose the voice: quiet, with a small tremble.', 'Choose the movement: hold the letter close, look at it, then away.', 'Say only the line: "I can’t open it."']}
        />
        <Mistake>Ignoring the stage directions or reading them aloud. They are instructions for the actor, not words to speak.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clear articulation and cue accuracy',
    content: slide(
      <>
        <Rule>Clear articulation makes spoken lines easier to understand. Cue accuracy means coming in or speaking at the right moment, so scenes flow smoothly.</Rule>
        <NumberedSteps
          label="Taking a cue"
          heading="Taking a cue"
          tone="blue"
          steps={[
            { lead: 'Listen', text: ' for the last words of the line before yours.' },
            { lead: 'Breathe', text: ' quietly, ready to speak.' },
            { lead: 'Speak', text: ' on the cue, with every word clear.' },
          ]}
        />
        <Worked
          title="Mama takes her cue from Thandi"
          steps={['Thandi ends: "I can’t open it."', 'Mama breathes in, steps closer, and waits for the end of the line.', 'She says "Then we open it together." with every consonant clear.']}
        />
        <Mistake>Mumbling, rushing, or speaking before your partner has finished. Words are lost and the cue is missed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rehearsal discipline and backstage teamwork',
    content: slide(
      <>
        <Rule>Actors show discipline in rehearsal by coming prepared and sticking to the rehearsal plan. Backstage teamwork supports smooth transitions and focus.</Rule>
        <TermGrid terms={BACKSTAGE} cols={2} aria="Four backstage roles in boxes: stage manager (calls the cues), props (move the objects), lights and sound (effects on cue) and costumes (quick changes)." />
        <Worked
          title="A scene change"
          steps={['The stage manager calls the cue for the change.', 'Lights fade, so the audience cannot see the stage.', 'The props team moves the chair quietly.', 'Actors take their places, and the lights come up.']}
        />
        <Mistake>Talking loudly backstage or leaving props where they are not needed. The audience hears it, and the next scene starts late.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience etiquette',
    content: slide(
      <>
        <Rule>Audience etiquette includes listening respectfully during performances. Respectful audiences help performers concentrate and communicate.</Rule>
        <NumberedSteps
          label="Being a good audience"
          heading="Being a good audience"
          tone="teal"
          steps={[
            { lead: 'Before:', text: ' switch your phone to silent and sit down quietly.' },
            { lead: 'During:', text: ' watch and listen, and do not talk.' },
            { lead: 'After:', text: ' applaud to thank the performers.' },
          ]}
        />
        <Worked
          title="A classmate forgets a line"
          steps={['Stay quiet and wait.', 'Do not laugh or call out.', 'When the scene ends, clap for the effort.']}
        />
        <Mistake>Whispering comments to a friend. It breaks the performers&apos; focus and spoils the scene for others.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evaluating a performance',
    content: slide(
      <>
        <Rule>When you evaluate a scene, discuss how the techniques affected the audience&apos;s understanding. A strong reflection gives evidence from specific moments.</Rule>
        <NumberedSteps
          label="Evaluating a moment"
          heading="Evaluate a moment"
          tone="amber"
          steps={[
            { lead: 'Moment:', text: ' name the exact part of the scene.' },
            { lead: 'Technique:', text: ' say what the actor did.' },
            { lead: 'Effect:', text: ' say what the audience understood or felt.' },
          ]}
        />
        <Worked
          title="Evaluate The Letter"
          steps={['Moment: Thandi pauses before saying "I can’t open it."', 'Technique: a long pause and a shaking voice.', 'Effect: the audience felt her fear and understood why the letter matters.']}
        />
        <Mistake>Giving an opinion with no evidence, such as &quot;I liked it&quot;. Name a moment, a technique and its effect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a scripted performance require?</>,
          <>Why does clear articulation help?</>,
          <>What does cue accuracy mean?</>,
          <>What should a post-performance reflection include?</>,
        ]}
        answers={[
          <>Interpreting written dialogue and stage directions.</>,
          <>It makes spoken lines easier to understand.</>,
          <>Coming in or speaking at the right moment.</>,
          <>Evidence from specific moments in the scene.</>,
        ]}
      />,
    ),
  },
];
