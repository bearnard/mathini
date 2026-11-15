import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { majorScale, pitchName, staffStep, triad } from '../../../../../components/diagrams/arts/ca9-music-helpers';
import { CallResponse, Staff, TextureLayers } from '../../../../../components/diagrams/arts/Ca9MusicPictures';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';

// Every number and note name below comes from ca9-music-helpers.ts (tested in ca9-music-helpers.test.ts).
const SLOTS = 4;
const calls = Math.ceil(SLOTS / 2);
const answers = Math.floor(SLOTS / 2);
const gMajor = majorScale('G', 4);
const chord = triad(gMajor, 1);
const chordNames = chord.map(pitchName);
const SPARSE = 1;
const DENSE = 4;
const q2 = triad(majorScale('C', 4), 1).map(pitchName);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'African music: polyrhythm and call-and-response',
    content: slide(
      <>
        <Rule>African traditions often use polyrhythm (several rhythms at once), call-and-response and percussion. Call-and-response also shapes jazz and blues.</Rule>
        <CallResponse slots={SLOTS} aria={`A leader and a group take turns over ${SLOTS} slots: the leader calls, the group answers, and so on. That is ${calls} calls and ${answers} answers.`} />
        <Worked
          title="Listen to a call-and-response song"
          steps={['The leader sings a short phrase: the call.', 'The group echoes or answers it.', <>Over {SLOTS} turns you hear {calls} calls and {answers} answers.</>]}
        />
        <Mistake>Thinking polyrhythm is one fast rhythm. It is different rhythms played together.</Mistake>
      </>,
    ),
  },
  {
    title: 'World music styles',
    content: slide(
      <>
        <Rule>World music means the music traditions of many regions, such as African, Latin, Indian, Asian and Middle Eastern music. Each has its own instruments and sound.</Rule>
        <CompareCards
          left={{ title: 'West African drumming', lines: ['Drums such as the djembe', 'Layered rhythms'] }}
          right={{ title: 'Indian classical', lines: ['Sitar and tabla', 'Melody over a steady drone'] }}
        />
        <Worked
          title="Compare two styles"
          steps={['Name each style.', 'List its main instruments.', 'Describe rhythm and melody.', 'Say how it makes you feel.']}
        />
        <Mistake>Treating world music as one style. It covers many different traditions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Harmony: notes sounding together',
    content: slide(
      <>
        <Rule>Harmony is several notes sounding together to form chords. A basic chord, a triad, uses every second note of a scale: the 1st, 3rd and 5th.</Rule>
        <Staff columns={[{ steps: chord.map(staffStep), below: chordNames.join(' ') }]} caption="a G major triad" aria={`A chord on a treble staff made of three notes stacked: ${chordNames.join(', ')}.`} />
        <Worked
          title="Build the chord on G in G major"
          steps={[<>G major notes: {gMajor.slice(0, 5).map(pitchName).join(' ')}.</>, <>Take the 1st, 3rd and 5th: {chordNames.join(', ')}.</>, 'Play them together: that is harmony.']}
        />
        <Mistake>Calling a single melody line harmony. Notes played one after another make melody.</Mistake>
      </>,
    ),
  },
  {
    title: 'Texture: how many layers',
    content: slide(
      <>
        <Rule>Texture describes how many sounds or layers you hear at one time. Few layers sound thin; many layers sound thick.</Rule>
        <TextureLayers sparse={SPARSE} dense={DENSE} aria={`Two patterns. One layer on the left is a thin texture. ${DENSE} layers on the right are a thick texture.`} />
        <Worked
          title="Name the texture"
          steps={[<>One singer alone: {SPARSE} layer, thin.</>, <>Voices, guitar, bass and drums: {DENSE} layers, thick.</>]}
        />
        <Mistake>Mixing texture up with volume. A loud solo is still a thin texture.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening analysis and ensemble balance',
    content: slide(
      <>
        <Rule>Listening analysis names the elements, the style and your response. Ensemble balance means every part is heard at the right volume. To know instruments by ear, listen often and learn their tone colours.</Rule>
        <NumberedSteps
          label="How to analyse a piece by ear"
          heading="Listening analysis"
          tone="teal"
          steps={[{ lead: 'Instruments', text: ' you can name.' }, { lead: 'Tempo and dynamics', text: ' you hear.' }, { lead: 'Texture and style', text: ' of the piece.' }, { lead: 'Your response', text: ' and why.' }]}
        />
        <Mistake>Letting the accompaniment cover the melody. In a balanced ensemble the lead can still be heard.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What happens in call-and-response?</>,
          <>Which three notes make the chord on C in C major?</>,
          <>What does texture describe?</>,
          <>What does ensemble balance mean?</>,
        ]}
        answers={[
          <>A phrase is answered or echoed by another part.</>,
          <>{q2.join(', ')}.</>,
          <>How many sounds or layers are heard at one time.</>,
          <>All parts are heard at the right volume.</>,
        ]}
      />,
    ),
  },
];
