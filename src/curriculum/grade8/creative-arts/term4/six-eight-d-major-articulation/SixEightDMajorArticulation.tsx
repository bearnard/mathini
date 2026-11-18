import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ScaleOnStaff, BarGroups, TempoLadder } from '../../../../../components/diagrams/arts/Ca8MusicGapsPictures';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ARTICULATION, countedBeats, fills, keySignature, majorScale, patternLetters, quaversPerBar, TEMPO_MEANING } from '../../../../../components/diagrams/arts/ca8-music-gaps';

// Every count, scale and meaning comes from ca8-music-gaps.ts (tested in ca8-music-gaps.test.ts and g8CaMusic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const dMajor = majorScale('D');

export const learnSteps: LearnStep[] = [
  {
    title: 'The time signature 6/8',
    content: slide(
      <>
        <Rule>In 6/8 there are {quaversPerBar('6/8')} quavers in every bar. They are usually felt in {countedBeats('6/8')} groups of three, so you count two beats in a bar, and each beat is a dotted crotchet. The strong beat is the first beat of each group.</Rule>
        <BarGroups metre="6/8" aria={`A bar of 6/8 drawn as ${quaversPerBar('6/8')} quavers in ${countedBeats('6/8')} groups of three. The first quaver of each group is numbered 1 and 2.`} />
        <Worked
          title="Fill a bar of 6/8"
          steps={[
            `A bar of 6/8 holds ${quaversPerBar('6/8')} quavers.`,
            `A dotted crotchet is three quavers long, so two dotted crotchets fill the bar: ${fills('6/8', ['dotted crotchet', 'dotted crotchet']) ? 'yes' : 'no'}.`,
            `Six quavers also fill the bar, and so does a dotted minim: ${fills('6/8', ['dotted minim']) ? 'yes' : 'no'}.`,
          ]}
        />
        <Mistake>Counting six slow beats in 6/8. Count two beats, each made of three quavers.</Mistake>
      </>,
    ),
  },
  {
    title: 'The D major scale',
    content: slide(
      <>
        <Rule>D major follows the major pattern {patternLetters()}. It is {dMajor.slice(0, 7).join(' ')} and has two sharps, {keySignature('D').notes.join(' and ')}. Both are written in the key signature at the start of the piece.</Rule>
        <ScaleOnStaff keyName="D" aria={`The D major scale on the treble staff: ${dMajor.join(', ')}. The third and seventh notes have sharp signs. Between the notes are tones and semitones in the pattern ${patternLetters()}.`} />
        <Worked
          title="Why D major has two sharps"
          steps={[
            `Start on D and use the pattern ${patternLetters()}: ${dMajor.join(' ')}.`,
            'The third note must be a tone above E, so F is raised to F♯.',
            `The seventh note must be a semitone below the top D, so C is raised to C♯. That makes ${keySignature('D').notes.length} sharps: ${keySignature('D').notes.join(' and ')}.`,
          ]}
        />
        <Mistake>Forgetting the second sharp. Every F and every C in D major is sharp.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tempo and articulation',
    content: slide(
      <>
        <Rule>Moderato means {TEMPO_MEANING.moderato} and presto means {TEMPO_MEANING.presto}. Ritardando means {TEMPO_MEANING.ritardando}, and a tempo means {TEMPO_MEANING['a tempo']}. Articulation is how notes are joined: legato is {ARTICULATION.legato} and staccato is {ARTICULATION.staccato}.</Rule>
        <TempoLadder aria="Four tempo words on a line from slower to faster: andante, moderato, allegro and presto. A note says that ritardando slows down and a tempo goes back to the first speed." />
        <FactCards
          cards={[
            { title: 'Legato', line1: 'smooth and joined together' },
            { title: 'Staccato', line1: 'short and detached' },
          ]}
          aria="Two ways of joining notes. Legato: smooth and joined together. Staccato: short and detached."
        />
        <Worked
          title="Read the markings"
          steps={[
            'A piece starts moderato and the notes are marked legato, so you play at a moderate speed and smoothly.',
            'Near the end it says ritardando, so you slow down gradually.',
            'The next bar says a tempo, so you go back to the speed you started with.',
          ]}
        />
        <Mistake>Mixing up ritardando and a tempo. Ritardando slows down, and a tempo returns to the first speed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing about what you hear',
    content: slide(
      <>
        <Rule>When you listen to a piece and write down your impression, describe what you heard and how it made you feel. Name the instruments, the tempo, the dynamics and the mood. Use the music words you have learnt, and give a reason for what you say.</Rule>
        <FactCards
          cards={[
            { title: 'Instruments', line1: 'Which family did you hear?' },
            { title: 'Tempo', line1: 'Allegro, andante, presto?' },
            { title: 'Dynamics', line1: 'Soft, loud, crescendo?' },
            { title: 'Mood', line1: 'How did it make you feel?' },
          ]}
          aria="Four things to write about. Instruments: which family did you hear. Tempo: allegro, andante or presto. Dynamics: soft, loud or a crescendo. Mood: how did it make you feel."
        />
        <Worked
          title="Write one sentence"
          steps={[
            'Listen and note what you hear: fast drums and shakers, getting louder.',
            'Use the words: membranophones and idiophones played allegro with a crescendo.',
            'Add your reaction: it felt exciting because the speed and the loudness kept growing.',
          ]}
        />
        <Mistake>Writing only that the music was good. Say what you heard and why you felt that way.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many beats do you count in a bar of 6/8?</>,
          <>Which notes are sharp in D major?</>,
          <>What does a tempo tell you to do?</>,
          <>How do you play notes marked staccato?</>,
        ]}
        answers={[
          <>{countedBeats('6/8')} beats, each made of three quavers.</>,
          <>F and C.</>,
          <>Go back to the first speed.</>,
          <>Short and detached.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "How many quavers are in one bar of 6/8?",
    options: ["3", "4", "6", "8"],
    answer: "6",
    explanation: "The top number of 6/8 is the number of quavers in the bar.",
  },
  {
    prompt: "In 6/8, how are the six quavers usually grouped?",
    options: ["In two groups of three", "In three groups of two", "In six groups of one", "In one group of six"],
    answer: "In two groups of three",
    explanation: "6/8 is felt as two beats, each made of three quavers.",
  },
  {
    prompt: "Which two notes fill one bar of 6/8?",
    options: ["Two crotchets", "Two minims", "Two dotted minims", "Two dotted crotchets"],
    answer: "Two dotted crotchets",
    explanation: "A dotted crotchet is three quavers long, so two of them make six quavers.",
  },
  {
    prompt: "How many sharps are in the key signature of D major?",
    options: ["One sharp", "Two sharps", "Two flats", "No sharps"],
    answer: "Two sharps",
    explanation: "D major has F♯ and C♯.",
  },
  {
    prompt: "Which notes are sharp in the D major scale?",
    options: ["F and G", "B and E", "F and C", "C and G"],
    answer: "F and C",
    explanation: "D major has F♯ and C♯.",
  },
  {
    prompt: "Which notes make up the D major scale?",
    options: ["D E F♯ G A B C♯ D", "D E F G A B C D", "D E F♯ G A B♭ C♯ D", "D E♭ F♯ G A B C♯ D"],
    answer: "D E F♯ G A B C♯ D",
    explanation: "D major follows the major pattern and needs F♯ and C♯.",
  },
  {
    prompt: "Which tempo word means very fast?",
    options: ["Moderato", "Andante", "Ritardando", "Presto"],
    answer: "Presto",
    explanation: "Presto is a very fast tempo.",
  },
  {
    prompt: "What speed does moderato ask for?",
    options: ["Gradually slowing down", "A moderate speed", "The original speed again", "A very fast speed"],
    answer: "A moderate speed",
    explanation: "Moderato is a speed that is neither slow nor fast.",
  },
  {
    prompt: "The music slows down gradually near its end. Which word is written above those bars?",
    options: ["Presto", "Crescendo", "Ritardando", "Legato"],
    answer: "Ritardando",
    explanation: "Ritardando means getting gradually slower.",
  },
  {
    prompt: "Which term takes the music back to its first speed after a ritardando?",
    options: ["A tempo", "Allegro", "Presto", "Crescendo"],
    answer: "A tempo",
    explanation: "A tempo means return to the original speed.",
  },
  {
    prompt: "Which word asks for notes that are smooth and joined together?",
    options: ["Staccato", "Presto", "Forte", "Legato"],
    answer: "Legato",
    explanation: "Legato means smooth and connected.",
  },
  {
    prompt: "How do you play notes that are marked staccato?",
    options: ["Smooth and joined", "Short and detached", "Gradually louder", "Very slowly"],
    answer: "Short and detached",
    explanation: "Staccato notes are played short and separated.",
  },
  {
    prompt: "You listen to a piece and write down your impression. Which detail belongs in it?",
    options: ["The price of the recording", "The shape of the cover", "The instruments and the mood", "The time you bought it"],
    answer: "The instruments and the mood",
    explanation: "An impression describes what you heard, such as instruments, tempo and mood, and how it made you feel.",
  },
  {
    prompt: "Which of these keys has two sharps?",
    options: ["D major", "G major", "C major", "F major"],
    answer: "D major",
    explanation: "D major has two sharps, G major has one, C has none and F has a flat.",
  },
];

const SixEightDMajorArticulation = () => (
  <CapsSubjectTopic
    title="6/8, D Major, Tempo and Articulation"
    subtitle="The time signature 6/8, the D major scale, tempo words, legato, staccato and listening"
    learnSteps={learnSteps}
    task="gr8-ca-six-eight-d-major-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default SixEightDMajorArticulation;
