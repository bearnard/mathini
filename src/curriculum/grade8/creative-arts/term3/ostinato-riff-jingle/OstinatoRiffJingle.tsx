import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LayersStack, OstinatoLoop, TempoTicks } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { barsIn, beatsIn, patternNotes } from '../../../../../components/diagrams/arts/ca8-music-gaps';

// Every count comes from ca8-music-gaps.ts (tested in ca8-music-gaps.test.ts and g8CaMusic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const cell = ['C', 'E', 'G', 'E'];
const jingleSeconds = 60;
const jingleBpm = 120;

export const learnSteps: LearnStep[] = [
  {
    title: 'Ostinato and riff',
    content: slide(
      <>
        <Rule>An ostinato is a short pattern that is repeated again and again. A rhythmic ostinato repeats a rhythm, for example on an African drum. A melodic ostinato repeats a pattern of pitches. A riff is a short, catchy melodic pattern that comes back during a song.</Rule>
        <OstinatoLoop cell={cell} times={3} aria={`A pattern of ${cell.length} notes, ${cell.join(' ')}, repeated 3 times. In all ${patternNotes(cell.length, 3)} notes are played.`} />
        <Worked
          title="Count an ostinato"
          steps={[
            `The pattern ${cell.join(' ')} has ${cell.length} notes.`,
            `Played 3 times it has ${cell.length} × 3 = ${patternNotes(cell.length, 3)} notes.`,
            `If each note is a crotchet in 4/4, ${patternNotes(cell.length, 3)} beats fill ${patternNotes(cell.length, 3) / 4} bars.`,
          ]}
        />
        <Mistake>Changing the pattern a little each time. An ostinato stays the same so that other parts can move over it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Four lines of lyrics',
    content: slide(
      <>
        <Rule>You can write four lines of lyrics about a personal or social issue, such as bullying or littering, and then give them a melody. Match each syllable to a note, and use the repeating pattern of an ostinato or riff to support the voice. A call and response between a leader and a group is one way to perform the lines.</Rule>
        <FactCards
          cards={[
            { title: 'Line 1', line1: 'Introduce the issue' },
            { title: 'Line 2', line1: 'Say how it affects people' },
            { title: 'Line 3', line1: 'Show what could change' },
            { title: 'Line 4', line1: 'End with a clear message' },
          ]}
          aria="A plan for four lines of lyrics. Line 1: introduce the issue. Line 2: say how it affects people. Line 3: show what could change. Line 4: end with a clear message."
        />
        <Worked
          title="Plan a song about littering"
          steps={[
            'Line 1 introduces the issue: rubbish is piling up in the street.',
            'Line 2 says how it affects people, and line 3 says what the community can do.',
            'Line 4 ends with the message, and the group answers each line with a short response.',
          ]}
        />
        <Mistake>Writing lines that are too long to sing. Say each line aloud with the beat before you put it to a melody.</Mistake>
      </>,
    ),
  },
  {
    title: 'The jingle',
    content: slide(
      <>
        <Rule>A jingle is a short, catchy piece of music that advertises a product or a service. It is often about a minute long. A jingle is easy to remember because it uses a simple melody, a repeating pattern and a few clear words.</Rule>
        <TempoTicks bpm={jingleBpm} sig="4/4" aria={`The beat at ${jingleBpm} beats a minute in 4/4. Each beat lasts half a second and one bar lasts 2 seconds.`} />
        <Worked
          title="Plan a one-minute jingle"
          steps={[
            `A jingle of ${jingleSeconds} seconds at ${jingleBpm} beats a minute has ${beatsIn(jingleSeconds, jingleBpm)} beats.`,
            `In 4/4 there are 4 beats in a bar, so the jingle has ${barsIn(jingleSeconds, jingleBpm, '4/4')} bars.`,
            'Plan the bars: a short riff to open, the words with a repeating pattern, and a clear ending.',
          ]}
        />
        <Mistake>Making a jingle long and complicated. A short pattern that repeats is what listeners remember.</Mistake>
      </>,
    ),
  },
  {
    title: 'Music technology',
    content: slide(
      <>
        <Rule>Music technology includes keyboards, recording and music software. With software you can record one layer of sound, such as a drum ostinato, and then record another layer over it. When you play the layers back together, you hear them all at once.</Rule>
        <LayersStack
          parts={[
            { name: 'Drum ostinato', playing: true },
            { name: 'Bass riff', playing: true },
            { name: 'Voice', playing: true },
            { name: 'Clapping', playing: false },
          ]}
          aria="A stack of layers. Three are playing: the drum ostinato, the bass riff and the voice. The clapping layer is not playing."
        />
        <Worked
          title="Build a track"
          steps={[
            'Record the drum ostinato first, so every other part has a steady beat to follow.',
            'Add a bass riff, then the voice singing your four lines.',
            'Three layers are playing, so you hear three parts together. You can switch the clapping on later.',
          ]}
        />
        <Mistake>Recording every layer at full volume. Balance the layers so that the voice can still be heard.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an ostinato?</>,
          <>A pattern of 3 notes is repeated 4 times. How many notes are played?</>,
          <>How many beats are in 30 seconds at 120 beats a minute?</>,
          <>What do you use music software for?</>,
        ]}
        answers={[
          <>A short pattern that repeats again and again.</>,
          <>{patternNotes(3, 4)} notes.</>,
          <>{beatsIn(30, 120)} beats.</>,
          <>To record layers of sound and play them back together.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "A pattern of 4 notes is repeated 3 times as an ostinato. How many notes are played?",
    options: ["7", "8", "12", "16"],
    answer: "12",
    explanation: "The pattern has 4 notes and is played 3 times, so 4 × 3 = 12 notes.",
  },
  {
    prompt: "What is an ostinato?",
    options: ["A short pattern that is repeated", "A very loud ending to a song", "A change of speed in a piece", "A song for one singer"],
    answer: "A short pattern that is repeated",
    explanation: "An ostinato repeats again and again while other parts move over it.",
  },
  {
    prompt: "How is a melodic ostinato different from a rhythmic ostinato?",
    options: ["It repeats a pattern of rests", "It repeats a pattern on one drum", "It is played at the end of a piece", "It repeats a short pattern of pitches"],
    answer: "It repeats a short pattern of pitches",
    explanation: "A rhythmic ostinato repeats a rhythm and a melodic ostinato repeats a pattern of pitches.",
  },
  {
    prompt: "What is a riff?",
    options: ["A long slow introduction", "A short catchy melody that repeats", "A piece sung without words", "A rest between two verses"],
    answer: "A short catchy melody that repeats",
    explanation: "A riff is a short, catchy pattern that comes back during a song.",
  },
  {
    prompt: "What is a jingle usually used for?",
    options: ["To teach a rhythm pattern", "To tune a group of instruments", "To advertise a product or service", "To write down a poem"],
    answer: "To advertise a product or service",
    explanation: "A jingle is a short, catchy piece that advertises a product or a service.",
  },
  {
    prompt: "A jingle lasts 1 minute at 120 beats a minute. How many beats is that?",
    options: ["120", "60", "240", "30"],
    answer: "120",
    explanation: "120 beats a minute for 1 minute is 120 beats.",
  },
  {
    prompt: "A 60-second jingle is in 4/4 at 120 beats a minute. How many bars does it have?",
    options: ["15", "60", "120", "30"],
    answer: "30",
    explanation: "It has 120 beats, and every bar holds 4 beats, so 120 ÷ 4 = 30 bars.",
  },
  {
    prompt: "Which topic fits four lines of lyrics about a social issue?",
    options: ["The tempo of a march", "Littering in your community", "The history of the piano", "How to tune a violin"],
    answer: "Littering in your community",
    explanation: "Littering is a social issue that affects a whole community.",
  },
  {
    prompt: "Which tool lets you record layers of sound and play them back together?",
    options: ["A metronome", "A baton", "Music software", "A music stand"],
    answer: "Music software",
    explanation: "Music software can record layers and play them together.",
  },
  {
    prompt: "You record four layers in music software and play them together. How many layers do you hear?",
    options: ["Four", "One", "Two", "Eight"],
    answer: "Four",
    explanation: "Each recorded layer is heard when all of them play together.",
  },
  {
    prompt: "A melodic ostinato C E G E is played 2 times. Which notes do you play?",
    options: ["C E G E G E C E", "C E G C E G E E", "E G E C E G E C", "C E G E C E G E"],
    answer: "C E G E C E G E",
    explanation: "An ostinato repeats exactly the same pattern each time.",
  },
  {
    prompt: "What helps to make a jingle easy to remember?",
    options: ["A long melody that never repeats", "A short pattern that repeats", "A new tempo in every bar", "Silence for most of the minute"],
    answer: "A short pattern that repeats",
    explanation: "Short, repeated patterns stay in the listener's mind.",
  },
  {
    prompt: "You play an ostinato on African drums while friends sing. What does the ostinato do?",
    options: ["It changes in every single bar", "It sings the words of the song", "It repeats as a background pattern", "It ends the piece for everyone"],
    answer: "It repeats as a background pattern",
    explanation: "An ostinato keeps repeating and supports the singers.",
  },
  {
    prompt: "At 120 beats a minute, how long does one beat last?",
    options: ["Half a second", "One second", "Two seconds", "A quarter of a second"],
    answer: "Half a second",
    explanation: "A minute has 60 seconds, so 60 ÷ 120 = 0,5 seconds for one beat.",
  },
];

const OstinatoRiffJingle = () => (
  <CapsSubjectTopic
    title="Melodic Ostinato, Riffs and the Jingle"
    subtitle="Repeating patterns, four lines of lyrics, a one-minute jingle and music technology"
    learnSteps={learnSteps}
    task="gr8-ca-ostinato-jingle-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default OstinatoRiffJingle;
