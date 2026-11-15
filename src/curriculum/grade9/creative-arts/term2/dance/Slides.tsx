import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { canonEnd, canonStarts, patternCounts, unisonGap } from '../../../../../components/diagrams/arts/ca9-dance-helpers';
import { CanonBars, FormationStage, PatternStrip } from '../../../../../components/diagrams/arts/Ca9DancePictures';

// Every number below comes from ca9-dance-helpers.ts (tested in ca9-dance-helpers.test.ts and ca9-dance-lessons.test.ts).
export const PATTERN = 'AABA';
const pc = patternCounts(PATTERN);
const LENGTH = 8;
const starts = canonStarts(4, 2);
const end = canonEnd(LENGTH, 4, 2);
const unison = canonStarts(4, 0);
const lateStarts = [0, 0, 1];
const q2 = canonStarts(3, 4);
const q2End = canonEnd(LENGTH, 3, 4);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Choreographic intent and repetition',
    content: slide(
      <>
        <Rule>Choreographic intent is the purpose or message the choreographer wants to share. Repetition stresses the theme and gives the dance unity.</Rule>
        <PatternStrip pattern={PATTERN} aria={`A pattern of four motifs: A, A, B, A. The motif A appears ${pc.A} times and the contrasting motif B once.`} />
        <Worked
          title="Intent: friendship"
          steps={['Choose a motif that shows it, such as linking arms.', <>Repeat it: A appears {pc.A} times in the pattern {PATTERN}.</>, <>Place a contrasting motif B ({pc.B} time) so the repeats stand out.</>]}
        />
        <Mistake>Repeating steps with no purpose. Every repeat should help to show the intent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Canon',
    content: slide(
      <>
        <Rule>In a canon the same movement is done by dancers one after another, not together. It creates layers and visual interest.</Rule>
        <CanonBars starts={starts} length={LENGTH} end={end} aria={`Four dancers do the same ${LENGTH}-count phrase, each starting 2 counts after the one before, at counts ${starts.join(', ')}. The last dancer finishes at count ${end}.`} />
        <Worked
          title="4 dancers, an 8-count phrase, 2 counts apart"
          steps={[<>Starts: {starts.join(', ')}.</>, <>The last dancer starts at count {starts[3]} and finishes at {starts[3]} + {LENGTH} = {end}.</>]}
        />
        <Mistake>Confusing canon with unison. In unison every start is {unison[3]} counts apart: all dancers move together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Formations',
    content: slide(
      <>
        <Rule>A formation is how the dancers are arranged and placed on the stage. Lines, circles, diagonals and blocks each create a different group picture.</Rule>
        <FormationStage kind="circle" n={6} aria="A stage seen from above with six numbered dancers in a circle. The audience is at the bottom." />
        <Worked
          title="Six dancers in a circle"
          steps={['Space the dancers evenly around a centre point.', 'Every dancer is the same distance from the centre.', 'To change to a line, each dancer walks to a new spot.']}
        />
        <Mistake>Thinking formation means the steps. A formation is where the dancers stand, not what they do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social and cultural dance',
    content: slide(
      <>
        <Rule>Social dances such as hip-hop, ballroom and partner dance reflect community and celebration. Studying a cultural dance means learning its history, context and true movement.</Rule>
        <NumberedSteps
          label="Respectful cultural dance study"
          heading="Studying a dance tradition"
          tone="violet"
          steps={[
            { lead: 'Ask', text: ' where the dance comes from and who it belongs to.' },
            { lead: 'Learn', text: ' its history and what the movements mean.' },
            { lead: 'Practise', text: ' the true movement from someone who knows it.' },
            { lead: 'Credit', text: ' the tradition when you perform.' },
          ]}
        />
        <Mistake>Copying moves without learning their meaning. Respect means understanding the context.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ensemble coordination and pattern work',
    content: slide(
      <>
        <Rule>Ensemble coordination needs communication, trust and timing kept together. Pattern work makes recognisable sequences that repeat and develop.</Rule>
        <CanonBars starts={lateStarts} length={LENGTH} end={LENGTH + unisonGap(lateStarts)} aria={`Three dancers do an ${LENGTH}-count phrase in unison, but the third starts ${unisonGap(lateStarts)} count late. Their start counts are ${lateStarts.join(', ')}.`} />
        <Worked
          title="Spot the late dancer"
          steps={[<>Starts: {lateStarts.join(', ')}.</>, <>The gap between earliest and latest is {unisonGap(lateStarts)} count, so dancer 3 is late.</>, 'Watch the group and breathe together on the count before.']}
        />
        <Mistake>Watching only your own feet. Ensemble work means listening and watching the whole group.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is choreographic intent?</>,
          <>In the pattern {PATTERN}, how many times does motif A appear?</>,
          <>Three dancers do a canon of an {LENGTH}-count phrase, 4 counts apart. On which count does the last one finish?</>,
          <>What does a formation describe?</>,
        ]}
        answers={[
          <>The purpose or message the choreographer wants to share.</>,
          <>{pc.A} times.</>,
          <>Starts {q2.join(', ')}; the last starts at {q2[2]} and finishes at {q2[2]} + {LENGTH} = {q2End}.</>,
          <>How the dancers are arranged and placed on the stage.</>,
        ]}
      />,
    ),
  },
];
