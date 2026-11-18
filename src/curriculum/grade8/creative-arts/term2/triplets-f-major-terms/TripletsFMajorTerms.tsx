import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DynamicsScale } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { ScaleOnStaff, TempoLadder, TripletBeat } from '../../../../../components/diagrams/arts/Ca8MusicGapsPictures';
import { barTotal, keySignature, majorScale, missingUnits, patternLetters, quaversPerCrotchet, tripletsPerCrotchet, TEMPO_MEANING, DYNAMIC_WORDS } from '../../../../../components/diagrams/arts/ca8-music-gaps';

// Every count, scale and meaning comes from ca8-music-gaps.ts (tested in ca8-music-gaps.test.ts and g8CaMusic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const fMajor = majorScale('F');
const bar = ['crotchet', 'triplet quaver', 'triplet quaver', 'triplet quaver'] as const;

export const learnSteps: LearnStep[] = [
  {
    title: 'The triplet',
    content: slide(
      <>
        <Rule>A triplet puts {tripletsPerCrotchet()} notes in the time of one beat. Two quavers normally fill a crotchet beat, but three triplet quavers are squeezed into the same beat, so each one is shorter. Triplets are marked with a small 3.</Rule>
        <TripletBeat aria={`Three rows that each fill one beat. A crotchet is one long block. Two quavers are ${quaversPerCrotchet()} blocks. A triplet is ${tripletsPerCrotchet()} shorter blocks in the same space.`} />
        <Worked
          title="Count a bar of 2/4"
          steps={[
            'A bar of 2/4 needs 2 beats.',
            `A crotchet takes 1 beat and three triplet quavers take 1 more beat, so the bar holds ${barTotal(bar) / 6} beats.`,
            `Nothing is missing from the bar: ${missingUnits('2/4', bar)} beats are left over.`,
          ]}
        />
        <Mistake>Playing a triplet as three ordinary quavers. That would take one and a half beats. Squeeze the three notes into one beat.</Mistake>
      </>,
    ),
  },
  {
    title: 'The F major scale',
    content: slide(
      <>
        <Rule>The F major scale follows the same pattern as every major scale, {patternLetters()}. It is {fMajor.slice(0, 7).join(' ')} and has one flat, {keySignature('F').notes[0]}. You can now read music in three keys: C major, G major and F major.</Rule>
        <ScaleOnStaff keyName="F" aria={`The F major scale on the treble staff: ${fMajor.join(', ')}. The fourth note has a flat sign. Between the notes are tones and semitones in the pattern ${patternLetters()}.`} />
        <Worked
          title="Why F major has a flat"
          steps={[
            `Start on F and use the pattern ${patternLetters()}.`,
            'F to G is a tone and G to A is a tone. The next step must be a semitone, so the fourth note is a semitone above A.',
            `That note is ${keySignature('F').notes[0]}, so the key signature of F major has ${keySignature('F').notes.length} flat.`,
          ]}
        />
        <Mistake>Playing B natural in F major. Every B in the piece is B♭ because of the key signature.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dynamics',
    content: slide(
      <>
        <Rule>Dynamics tell you how loud or soft to play. Piano means {DYNAMIC_WORDS.piano} and forte means {DYNAMIC_WORDS.forte}. Crescendo means {DYNAMIC_WORDS.crescendo} and diminuendo means {DYNAMIC_WORDS.diminuendo}.</Rule>
        <DynamicsScale aria="Six bars that grow taller from pp, the softest, through p, mp, mf and f to ff, the loudest." />
        <Worked
          title="Follow the markings"
          steps={[
            'A piece starts with p, so you begin softly.',
            'A crescendo follows, so each bar gets a little louder.',
            'It reaches f, which is loud, and a diminuendo then brings you down again.',
          ]}
        />
        <Mistake>Mixing up crescendo and diminuendo. Crescendo grows louder and diminuendo dies away, so the second one gets softer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tempo words',
    content: slide(
      <>
        <Rule>Tempo is the speed of the beat. Andante means {TEMPO_MEANING.andante} and allegro means {TEMPO_MEANING.allegro}. A piece marked allegro goes faster than a piece marked andante.</Rule>
        <TempoLadder aria="Four tempo words on a line from slower to faster: andante, moderato, allegro and presto. A note says that ritardando slows down and a tempo goes back to the first speed." />
        <Worked
          title="Choose a tempo"
          steps={[
            'A lullaby is calm, so it suits a gentle tempo such as andante.',
            'A lively dance needs energy, so it suits allegro.',
            'Allegro is faster than andante, so the dancers take more steps in the same time.',
          ]}
        />
        <Mistake>Thinking that a faster tempo means a louder piece. Tempo is about speed and dynamics are about loudness.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many triplet quavers fill one crotchet beat?</>,
          <>How many flats does F major have?</>,
          <>Which word means gradually softer?</>,
          <>Which is faster, andante or allegro?</>,
        ]}
        answers={[
          <>{tripletsPerCrotchet()}.</>,
          <>One flat, B♭.</>,
          <>Diminuendo.</>,
          <>Allegro.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "How many triplet quavers are played in the time of one crotchet?",
    options: ["2", "4", "3", "6"],
    answer: "3",
    explanation: "A triplet fits three notes into one beat.",
  },
  {
    prompt: "A bar of 2/4 has a crotchet followed by three triplet quavers. How many beats does the bar hold?",
    options: ["2 beats", "3 beats", "1 beat", "2½ beats"],
    answer: "2 beats",
    explanation: "The crotchet is 1 beat and the three triplet quavers fill 1 more beat, which makes 2 beats.",
  },
  {
    prompt: "Which note of the F major scale is flattened?",
    options: ["A", "E", "C", "B"],
    answer: "B",
    explanation: "F major has one flat, B♭, so that the step from A up is a semitone.",
  },
  {
    prompt: "How many flats are in the key signature of F major?",
    options: ["Two flats", "One flat", "One sharp", "No flats"],
    answer: "One flat",
    explanation: "The only flat in F major is B♭.",
  },
  {
    prompt: "Which notes make up the F major scale?",
    options: ["F G A B C D E F", "F G A♭ B♭ C D E F", "F G A B♭ C D E F", "F G♭ A B♭ C D E F"],
    answer: "F G A B♭ C D E F",
    explanation: "F major follows the major pattern and needs one flat, B♭.",
  },
  {
    prompt: "What does the word piano mean in music?",
    options: ["Play softly", "Play loudly", "Get gradually louder", "Get gradually softer"],
    answer: "Play softly",
    explanation: "Piano is the dynamic marking for soft playing.",
  },
  {
    prompt: "Which word tells you to get gradually louder?",
    options: ["Diminuendo", "Piano", "Forte", "Crescendo"],
    answer: "Crescendo",
    explanation: "Crescendo means gradually getting louder.",
  },
  {
    prompt: "Which word tells you to get gradually softer?",
    options: ["Crescendo", "Diminuendo", "Forte", "Allegro"],
    answer: "Diminuendo",
    explanation: "Diminuendo means gradually getting softer.",
  },
  {
    prompt: "Which tempo word means fast and lively?",
    options: ["Andante", "Forte", "Allegro", "Piano"],
    answer: "Allegro",
    explanation: "Allegro is a fast, lively tempo.",
  },
  {
    prompt: "What speed does the word andante ask for?",
    options: ["A walking pace", "A very fast speed", "A very loud volume", "A gradual slowing down"],
    answer: "A walking pace",
    explanation: "Andante is a steady walking pace.",
  },
  {
    prompt: "Which tempo word is slower than allegro?",
    options: ["Presto", "Forte", "Crescendo", "Andante"],
    answer: "Andante",
    explanation: "Andante is slower than allegro, and presto is faster.",
  },
  {
    prompt: "Which three major keys have you now met?",
    options: ["C, G and D major", "C, G and F major", "C, F and A major", "G, F and B major"],
    answer: "C, G and F major",
    explanation: "C major has no sharps or flats, G major has F♯ and F major has B♭.",
  },
  {
    prompt: "Why does the fourth note of F major need a flat?",
    options: ["To make the scale louder", "To make the scale start on B", "To make a semitone after the third note", "To remove every tone"],
    answer: "To make a semitone after the third note",
    explanation: "The major pattern needs a semitone between the 3rd and 4th notes, so B becomes B♭.",
  },
  {
    prompt: "Three triplet quavers last as long as which note?",
    options: ["One crotchet", "Two crotchets", "One minim", "Three crotchets"],
    answer: "One crotchet",
    explanation: "Three triplet quavers fill the time of a single crotchet beat.",
  },
];

const TripletsFMajorTerms = () => (
  <CapsSubjectTopic
    title="Triplets, F Major, Dynamics and Tempo Words"
    subtitle="The triplet, the F major scale, piano, forte, crescendo, diminuendo, allegro and andante"
    learnSteps={learnSteps}
    task="gr8-ca-triplets-f-major-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default TripletsFMajorTerms;
