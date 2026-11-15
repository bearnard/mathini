import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { formMap, ostinatoRepeats, phraseBeats, pieceBars } from '../../../../../components/diagrams/arts/ca9-music-helpers';
import { FormBlocks, OstinatoRepeat } from '../../../../../components/diagrams/arts/Ca9MusicPictures';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';

// Every number below comes from ca9-music-helpers.ts (tested in ca9-music-helpers.test.ts).
const binary = formMap('AB');
const ternary = formMap('ABA');
const BARS_EACH = 4;
const aba = pieceBars('ABA', BARS_EACH);
const abaBeats = phraseBeats(aba, { beats: 4, unit: 4 });
const OST = { total: 8, bars: 2 };
const reps = ostinatoRepeats(OST.total, OST.bars);
const q2 = ostinatoRepeats(12, 4);
const q3 = pieceBars('AB', 8);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Binary and ternary form',
    content: slide(
      <>
        <Rule>Form is the plan of a piece. Binary form (AB) has two contrasting sections. Ternary form (ABA) returns to the opening material after a contrasting middle section.</Rule>
        <FormBlocks form={binary.sections.join('')} barsEach={8} aria={`Binary form: two blocks, A then B, which contrast. ${pieceBars('AB', 8)} bars in all.`} />
        <FormBlocks form={ternary.sections.join('')} barsEach={BARS_EACH} aria={`Ternary form: three blocks, A then B then A again. ${aba} bars in all.`} />
        <Worked
          title="Map a piece by listening"
          steps={['Label the first section A.', 'When new material starts, label it B.', 'If the opening comes back, label it A again: that is ternary.']}
        />
        <Mistake>Thinking ABA has three different sections. The first and last are the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'The ostinato',
    content: slide(
      <>
        <Rule>An ostinato is a short phrase that repeats steadily through a piece. It gives the music a foundation and unity.</Rule>
        <OstinatoRepeat total={OST.total} bars={OST.bars} aria={`A melody over ${OST.total} bars. Underneath, a ${OST.bars}-bar ostinato repeats ${reps} times.`} />
        <Worked
          title="A 2-bar ostinato under 8 bars of melody"
          steps={[<>One ostinato lasts {OST.bars} bars.</>, <>{OST.total} bars ÷ {OST.bars} bars = {reps} repeats.</>, 'It stays the same while the melody above changes.']}
        />
        <Mistake>Changing the pattern each time. An ostinato repeats; the melody is what moves.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composition',
    content: slide(
      <>
        <Rule>Composing is creating new music by combining melody, harmony and rhythm into a form. Plan the form first, then fill each section.</Rule>
        <Worked
          title="Plan a piece in ABA, 4/4"
          steps={[<>Each section is {BARS_EACH} bars, so ABA is {aba} bars.</>, <>In 4/4 that is {aba} × 4 = {abaBeats} beats.</>, 'Write a melody for A, a contrasting one for B, then repeat A.', 'Add chords or an ostinato, and a steady rhythm.']}
        />
        <Mistake>Writing only a tune. A composition also needs rhythm and harmony, and a plan.</Mistake>
      </>,
    ),
  },
  {
    title: 'Arrangement',
    content: slide(
      <>
        <Rule>Arrangement means adapting existing music for other instruments or voices. The tune stays; the setting changes.</Rule>
        <CompareCards
          left={{ title: 'Composing', lines: ['New music', 'You invent the tune'] }}
          right={{ title: 'Arranging', lines: ['Existing music', 'New instruments or voices'] }}
        />
        <Worked
          title="Arrange a song for a small group"
          steps={['Choose the song and keep its tune.', 'Decide who plays the melody.', 'Give others an ostinato or chords.', 'Check that the melody can still be heard.']}
        />
        <Mistake>Changing the tune until it is a new piece. That is composing, not arranging.</Mistake>
      </>,
    ),
  },
  {
    title: 'Music technology and independent rehearsal',
    content: slide(
      <>
        <Rule>Music technology includes recording equipment, DAWs (digital audio workstations), synthesizers and digital effects. Independent rehearsal means leading your own improvement.</Rule>
        <NumberedSteps
          label="How to rehearse a problem bar on your own"
          heading="Rehearse independently"
          tone="violet"
          steps={[{ lead: 'Record', text: ' yourself playing the section.' }, { lead: 'Listen', text: ' and find the problem.' }, { lead: 'Slow down', text: ' and fix it.' }, { lead: 'Play again', text: ' at full speed.' }]}
        />
        <Mistake>Waiting for the teacher to say what is wrong. Rehearsing independently means finding and solving it yourself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does ternary form return to?</li>
            <li>A 4-bar ostinato runs under 12 bars. How many times does it repeat?</li>
            <li>An AB piece has 8 bars in each section. How many bars in all?</li>
            <li>What is an arrangement?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The opening material, after a contrasting middle section.</li>
            <li>12 ÷ 4 = {q2} times.</li>
            <li>2 × 8 = {q3} bars.</li>
            <li>Existing music adapted for other instruments or voices.</li>
          </ol>
        }
      />,
    ),
  },
];
