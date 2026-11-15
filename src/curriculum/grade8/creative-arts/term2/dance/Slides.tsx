import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { CountStrip, FloorPlan } from '../../../../../components/diagrams/arts/Ca8DancePictures';
import { accentFlags, blockShape, formation, motifVariations, phraseCounts, timeline } from '../../../../../components/diagrams/arts/ca8-dance-helpers';

// Every count below comes from ca8-dance-helpers.ts (tested in ca8-dance-helpers.test.ts and ca8-dance-lessons.test.ts).
export const MOTIF = [
  { name: 'Reach', counts: 2 },
  { name: 'Turn', counts: 1 },
  { name: 'Step', counts: 1 },
] as const;
const motif = timeline(MOTIF);
const motifTotal = phraseCounts(MOTIF);
const v = motifVariations(MOTIF);
const repeated = timeline(v.repeated.moves);

export const ACCENT_PHRASE = [
  { name: 'Clap', counts: 1 },
  { name: 'Walk', counts: 3 },
  { name: 'Clap', counts: 1 },
  { name: 'Walk', counts: 3 },
] as const;
const accentPhrase = timeline(ACCENT_PHRASE);
const ACCENTED = [1, 5];
const accents = accentFlags(phraseCounts(ACCENT_PHRASE), ACCENTED);

const DANCERS = 8;
const COLS = 4;
const block = blockShape(DANCERS, COLS);
const blockPts = formation('block', DANCERS, COLS);
const range = (s: { start: number; end: number }) => (s.start === s.end ? `count ${s.start}` : `counts ${s.start} to ${s.end}`);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What a motif is',
    content: slide(
      <>
        <Rule>A motif is a short movement idea that a dance is built from. It is only a few counts long, and it can be repeated and changed.</Rule>
        <CountStrip segments={motif} total={motifTotal} aria={`Four counts in a row. ${motif.map((s) => `${s.name} on ${range(s)}`).join(', ')}.`} />
        <Worked
          title={`Make a ${motifTotal}-count motif`}
          steps={[...motif.map((s) => `${s.name}: ${range(s)}.`), `${motif.map((s) => s.counts).join(' + ')} = ${motifTotal} counts, one bar of 4.`]}
        />
        <Mistake>Thinking a motif is the whole routine. It is the small seed that the routine grows from.</Mistake>
      </>,
    ),
  },
  {
    title: 'Developing a motif',
    content: slide(
      <>
        <Rule>Motif development repeats and varies the original movement. The dance grows, but the motif is still recognisable.</Rule>
        <CountStrip segments={repeated} total={v.repeated.counts} aria={`The motif repeated: ${v.repeated.counts} counts. ${repeated.map((s) => s.name).join(', ')}.`} />
        <Worked
          title={`Three ways to develop the ${motifTotal}-count motif`}
          steps={[
            `Repeat it: ${v.repeated.counts} counts.`,
            `Reverse the order (${v.reversed.moves.map((m) => m.name).join(', ')}): still ${v.reversed.counts} counts.`,
            `Slow it down, so each move takes twice as long: ${v.slowed.counts} counts.`,
          ]}
        />
        <Mistake>Changing every part at once. Then it is a new motif. Keep something of the original, such as the shape or the rhythm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Group patterns and folk dance',
    content: slide(
      <>
        <Rule>A group pattern is how dancers are arranged in space, such as a line, circle, block or diagonal. Folk and social dances show the style and history of a community.</Rule>
        <FloorPlan points={blockPts} aria={`A stage seen from above with ${DANCERS} dancers in a block of ${block.rows} rows of ${block.cols}.`} />
        <Worked
          title={`Arrange ${DANCERS} dancers`}
          steps={[`Put ${block.cols} dancers in each row.`, `${DANCERS} ÷ ${block.cols} = ${block.rows} rows: a block of ${block.rows} rows of ${block.cols}.`, 'Change the pattern, to a circle for example, to make a new picture.']}
        />
        <Mistake>Mixing up a group pattern with hand gestures. The pattern is where the dancers stand and travel. Gumboot dance, for example, comes from the culture of South African mine workers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rhythm accents and coordination',
    content: slide(
      <>
        <Rule>An accent stresses a count or a movement. Coordination means moving in time with the others, on shared counts.</Rule>
        <CountStrip
          segments={accentPhrase}
          total={phraseCounts(ACCENT_PHRASE)}
          accents={accents}
          aria={`Eight counts. Counts ${ACCENTED.join(' and ')} are accented: a clap on each, with three walking counts between.`}
        />
        <Worked
          title={`Accent counts ${ACCENTED.join(' and ')}`}
          steps={[`Clap firmly on count ${ACCENTED[0]} and count ${ACCENTED[1]}.`, 'Walk lightly on the other counts.', 'Everyone counts out loud together so the accents land at once.']}
        />
        <Mistake>Accenting every count. When everything is stressed, nothing stands out. Accents need contrast.</Mistake>
      </>,
    ),
  },
  {
    title: 'Partner work and the journal',
    content: slide(
      <>
        <Rule>Safe partner work needs clear communication, controlled movement and shared timing. A choreography journal records your ideas, changes and reflections.</Rule>
        <NumberedSteps
          label="Working safely with a partner"
          heading="Before a partner move"
          tone="teal"
          steps={[
            { lead: 'Agree', text: ' the move and a signal.' },
            { lead: 'Count', text: ' it together.' },
            { lead: 'Try', text: ' it slowly and with control.' },
            { lead: 'Record', text: ' how it went in your journal.' },
          ]}
        />
        <Worked
          title="A journal entry"
          steps={['Idea: a reach, a turn and a step as the motif.', 'Change: made it slower, 8 counts.', 'Reflection: next time, cue the turn on count 3.']}
        />
        <Mistake>Surprising a partner with a lift, or rushing the change between moves. Agree first and keep eye contact.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a motif?</li>
            <li>A {motifTotal}-count motif is repeated once. How many counts is that?</li>
            <li>{DANCERS} dancers stand in rows of {COLS}. How many rows?</li>
            <li>Why are partner moves agreed and counted together?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A short movement idea that a dance is built from.</li>
            <li>{motifTotal} × 2 = {v.repeated.counts} counts.</li>
            <li>{DANCERS} ÷ {COLS} = {block.rows} rows.</li>
            <li>It keeps the movement safe: clear communication, control and shared timing.</li>
          </ol>
        }
      />,
    ),
  },
];
