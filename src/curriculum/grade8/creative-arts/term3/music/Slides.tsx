import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { FormBlocks, OstinatoLoop, RhythmBars } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { beatsInBars, formName, loudness, ostinato, returnsToStart, sound, totalBeats } from '../../../../../components/diagrams/arts/ca8-music-helpers';

// Every count and label below comes from ca8-music-helpers.ts (tested in ca8-music-helpers.test.ts and ca8-music-lessons.test.ts).
const CELL = ['C4', 'E4', 'G4'];
const loop = ostinato(CELL, 4);
const motif = [sound('crotchet'), sound('crotchet'), sound('minim')];
const sectionA = beatsInBars('4/4', 2); // the motif played twice
const q3 = ostinato(['D4', 'F4'], 5);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Binary form (AB)',
    content: slide(
      <>
        <Rule>Binary form has two different sections. We write it as AB: section A, then a contrasting section B.</Rule>
        <FormBlocks sections="AB" aria={`Two blocks, A then B. This is ${formName('AB')} form, written AB.`} />
        <Worked
          title="Name the form"
          steps={['Listen: a tune is played, then a different tune.', 'Label the first A and the new one B.', <>Two sections that do not return: {formName('AB')} form, AB.</>]}
        />
        <Mistake>Giving a repeated section a new letter. If A is played twice in a row it is still A, so the piece is not three sections.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ternary form (ABA)',
    content: slide(
      <>
        <Rule>Ternary form has three sections and is written ABA. The piece returns to its opening section at the end.</Rule>
        <FormBlocks sections="ABA" aria={`Three blocks, A then B then A again. The music returns to its opening section, so this is ${formName('ABA')} form, written ABA.`} />
        <Worked
          title="Spot the return"
          steps={['The piece starts with tune A.', 'A new tune B follows.', <>Tune A comes back at the end, so it returns to the start: {returnsToStart('ABA') ? 'yes' : 'no'}. That is {formName('ABA')} form.</>]}
        />
        <Mistake>Calling ABA binary because only two letters appear. Count the sections: there are three, and the opening returns.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ostinato',
    content: slide(
      <>
        <Rule>An ostinato is a repeated rhythmic or melodic pattern. It stays the same while other music changes above it.</Rule>
        <OstinatoLoop cell={CELL} times={4} aria={`A pattern of three notes, C, E and G, written out four times in a row. The first pattern is highlighted. The pattern does not change when it repeats.`} />
        <Worked
          title="Build an ostinato"
          steps={[<>Choose a pattern of {CELL.length} notes.</>, <>Repeat it 4 times.</>, <>{CELL.length} × 4 = {loop.length} notes in all, the same pattern each time.</>]}
        />
        <Mistake>Changing the pattern each time it comes round. An ostinato repeats exactly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composing: motif and contrast',
    content: slide(
      <>
        <Rule>A useful first step in composition is to create a short motif. Then repeat it and change dynamics to shape expression and contrast.</Rule>
        <RhythmBars rows={[{ sig: '4/4', bar: motif, total: totalBeats(motif) }]} aria={`A one-bar motif drawn to scale: two crotchets and a minim, ${totalBeats(motif)} beats in 4/4.`} />
        <NumberedSteps
          label="Steps in composing a short piece"
          heading="Compose in four steps"
          tone="violet"
          steps={[
            { lead: 'Motif', text: ' make a short idea.' },
            { lead: 'Repeat', text: ' it to build section A.' },
            { lead: 'Contrast', text: ' add a different B.' },
            { lead: 'Check', text: ' against the checklist.' },
          ]}
        />
        <Worked
          title="Section A from the motif"
          steps={[<>The motif is {totalBeats(motif)} beats, one bar.</>, <>Play it twice: {sectionA} beats.</>, <>Play A at mf ({loudness('mf')}) and B at p ({loudness('p')}) for contrast.</>]}
        />
        <Mistake>Starting with a long piece. Begin with a short motif and build from it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening analysis and peer feedback',
    content: slide(
      <>
        <Rule>Listening analysis helps you identify form and structure in examples. Peer feedback is most useful when it is specific and linked to the music heard.</Rule>
        <NumberedSteps
          label="How to analyse a piece by listening"
          heading="Analyse by listening"
          tone="teal"
          steps={[
            { lead: 'Listen', text: ' all the way through.' },
            { lead: 'Label', text: ' each section A, B, A.' },
            { lead: 'Name', text: ' the form.' },
          ]}
        />
        <Worked
          title="Analyse and give feedback"
          steps={[<>Heard: opening tune, new tune, opening tune again = ABA, so {formName('ABA')} form.</>, 'Feedback: "Your soft B section made the return of A stand out."', 'It points at the music, so the composer knows what to keep.']}
        />
        <Mistake>Saying only &quot;it was nice&quot;. Name what you heard in the music so the feedback can be used.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How is binary form written, and how is ternary form written?</li>
            <li>A piece returns to its opening section at the end. Which form is it likely to be?</li>
            <li>An ostinato of 2 notes is repeated 5 times. How many notes are played?</li>
            <li>What is a useful first step in composing?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Binary: AB. Ternary: ABA.</li>
            <li>Ternary form, because A comes back.</li>
            <li>2 × 5 = {q3.length} notes, the same pattern each time.</li>
            <li>Create a short motif.</li>
          </ol>
        }
      />,
    ),
  },
];
