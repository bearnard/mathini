import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { barCheck, majorScale, phraseBeats, pitchName, scaleNames, semitonesBetween, staffStep, totalBeats } from '../../../../../components/diagrams/arts/ca9-music-helpers';
import type { NoteName } from '../../../../../components/diagrams/arts/ca9-music-helpers';
import { PhraseArc, RhythmBars, Staff, TempoLadder } from '../../../../../components/diagrams/arts/Ca9MusicPictures';

// Every number and note name below comes from ca9-music-helpers.ts (tested in ca9-music-helpers.test.ts).
const FOUR_FOUR = { beats: 4, unit: 4 } as const;
const THREE_FOUR = { beats: 3, unit: 4 } as const;
const gMajor = majorScale('G', 4);
const names = scaleNames(gMajor);
const idea: NoteName[] = ['crotchet', 'quaver', 'quaver', 'minim'];
const ideaCheck = barCheck(idea, FOUR_FOUR);
const toneSteps = gMajor.slice(1).map((p, i) => ({ from: pitchName(gMajor[i]), to: pitchName(p), semis: semitonesBetween(gMajor[i], p) }));
const phrase = { bars: 4, beats: phraseBeats(4, FOUR_FOUR) };
const dictBar1: NoteName[] = ['minim', 'crotchet'];
const dictBar2: NoteName[] = ['crotchet', 'quaver', 'quaver', 'crotchet'];
const shortBar: NoteName[] = ['minim', 'quaver'];
const shortCheck = barCheck(shortBar, THREE_FOUR);
const q3 = barCheck(['crotchet', 'crotchet', 'minim'], FOUR_FOUR);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Improvising within a structure',
    content: slide(
      <>
        <Rule>Improvisation is making up music on the spot, inside limits you are given: a key, a bar length, a rhythm idea. The limits keep it musical.</Rule>
        <RhythmBars bars={[idea]} sig={FOUR_FOUR} aria={`One bar of 4/4 filled by a crotchet, two quavers and a minim: ${ideaCheck.total} of ${ideaCheck.need} beats.`} />
        <Worked
          title="Prompt: play freely in G major, one bar of 4/4"
          steps={[<>Choose notes from the key: {names.slice(0, 7).join(' ')}.</>, <>Fill the bar: 1 + ½ + ½ + 2 = {ideaCheck.total} beats.</>, 'Play it, then answer with a new idea of the same length.']}
        />
        <Mistake>Playing any notes at all. Free means free inside the key and the beat count.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scales and tonal patterns',
    content: slide(
      <>
        <Rule>A scale is an ordered sequence of notes. A major scale follows tone, tone, semitone, tone, tone, tone, semitone. A tonal pattern is a group of pitches built around one key.</Rule>
        <Staff columns={gMajor.map((p, i) => ({ steps: [staffStep(p)], accs: [p.acc], below: names[i] }))} aria={`The G major scale on a treble staff, from G up to the next G: ${names.join(', ')}.`} />
        <Worked
          title="Build G major"
          steps={[<>Start on {names[0]}. {toneSteps[0].from} to {toneSteps[0].to} is {toneSteps[0].semis} semitones: a tone.</>, <>{toneSteps[2].from} to {toneSteps[2].to} is {toneSteps[2].semis} semitone: the first semitone.</>, <>The seventh note must be {names[6]}, so the key has one sharp.</>]}
        />
        <Mistake>Using F natural in G major. The pattern forces {names[6]}, one semitone below the top G.</Mistake>
      </>,
    ),
  },
  {
    title: 'Phrasing',
    content: slide(
      <>
        <Rule>Phrasing is how a player shapes and interprets a line of melody, like a sentence: breath, articulation and dynamics rise to a high point and settle.</Rule>
        <PhraseArc bars={phrase.bars} beats={phrase.beats} aria={`A phrase of ${phrase.bars} bars, ${phrase.beats} beats, drawn as notes rising to a peak and falling, under one arc. The music gets gradually louder then gradually softer.`} />
        <Worked
          title={`A ${phrase.bars}-bar phrase in 4/4 (${phrase.beats} beats)`}
          steps={['Bars 1 and 2: start softly and grow.', 'The peak, the loudest and most expressive note, comes in the middle of the phrase.', 'Bars 3 and 4: ease off and breathe at the end, not in the middle.']}
        />
        <Mistake>Playing every note at the same loudness, or breathing mid-phrase. That breaks the sentence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ensemble accuracy and technical control',
    content: slide(
      <>
        <Rule>In an ensemble, listen to the others so you blend and balance. Technical control means accurate pitch, steady timing, clean tone and confidence.</Rule>
        <TempoLadder aria="Five tempo words from slowest to fastest: Adagio (slow), Andante (walking pace), Moderato (moderate), Allegro (fast), Presto (very fast). Accelerando means gradually getting faster." />
        <Worked
          title="The score says accelerando"
          steps={['Accelerando means gradually faster.', 'Watch the leader and listen to the pulse.', 'Speed up together, a little at a time, so no one rushes ahead.']}
        />
        <Mistake>Listening only to yourself, or rushing when nervous. The group, not one player, sets the pulse.</Mistake>
      </>,
    ),
  },
  {
    title: 'Notation review and rhythm dictation',
    content: slide(
      <>
        <Rule>In rhythm dictation you write what you hear. Every bar must add up to its time signature, so in 3/4 each bar holds 3 crotchet beats.</Rule>
        <RhythmBars bars={[dictBar1, dictBar2]} sig={THREE_FOUR} aria={`Two bars of 3/4. Bar 1 is a minim and a crotchet, ${totalBeats(dictBar1)} beats. Bar 2 is a crotchet, two quavers and a crotchet, ${totalBeats(dictBar2)} beats.`} />
        <Worked
          title="Check the bars you wrote"
          steps={[<>Bar 1: 2 + 1 = {totalBeats(dictBar1)}. Full.</>, <>Bar 2: 1 + ½ + ½ + 1 = {totalBeats(dictBar2)}. Full.</>]}
        />
        <Mistake>
          A bar that is too short: a minim and a quaver is {shortCheck.total} beats, not {shortCheck.need}. Add a rest or change a note.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does improvisation mean?</>,
          <>Which note is the seventh note of the G major scale?</>,
          <>A bar of 4/4 has a crotchet, a crotchet and a minim. Is it full?</>,
          <>Which marking asks the group to get gradually faster?</>,
        ]}
        answers={[
          <>Creating music on the spot within a set structure.</>,
          <>{names[6]} (F sharp).</>,
          <>1 + 1 + 2 = {q3.total}, so it is {q3.status}.</>,
          <>Accelerando.</>,
        ]}
      />,
    ),
  },
];
