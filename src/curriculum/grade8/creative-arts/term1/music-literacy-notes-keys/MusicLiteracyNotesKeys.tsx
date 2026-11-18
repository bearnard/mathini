import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BeatPulse, RhythmBars, StaffNotes } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { ScaleOnStaff } from '../../../../../components/diagrams/arts/Ca8MusicGapsPictures';
import { beatsInBars, beatsPerBar, countIn, sound, totalBeats } from '../../../../../components/diagrams/arts/ca8-music-helpers';
import { crotchetBeats, keySignature, majorScale, patternLetters } from '../../../../../components/diagrams/arts/ca8-music-gaps';

// Every count and note name comes from ca8-music-helpers.ts and ca8-music-gaps.ts (tested in their test files and g8CaMusic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const barA = [sound('minim'), sound('crotchet'), sound('crotchet')];
const barB = [sound('minim'), sound('crotchet')];
const cMajor = majorScale('C');
const gMajor = majorScale('G');

export const learnSteps: LearnStep[] = [
  {
    title: 'Note values and rests',
    content: slide(
      <>
        <Rule>A note value tells you how long to hold a sound. A semibreve lasts 4 beats, a dotted minim {crotchetBeats('dotted minim')} beats, a minim 2 beats, a crotchet 1 beat and a quaver half a beat. A dot makes a note half as long again. A rest is a silence of the same length as the note with the same name.</Rule>
        <RhythmBars
          rows={[
            { sig: '4/4', bar: barA, total: totalBeats(barA) },
            { sig: '3/4', bar: barB, total: totalBeats(barB) },
          ]}
          aria={`Two bars drawn to scale. The first, in 4/4, holds a minim, a crotchet and a crotchet and adds up to ${totalBeats(barA)} beats. The second, in 3/4, holds a minim and a crotchet and adds up to ${totalBeats(barB)} beats.`}
        />
        <Worked
          title="Fill a bar of 4/4"
          steps={[
            'A bar of 4/4 needs 4 beats.',
            `A minim is ${totalBeats([sound('minim')])} beats and a crotchet is 1 beat, so a minim and a crotchet make ${totalBeats(barB)} beats.`,
            `One more crotchet or crotchet rest makes ${totalBeats(barA)} beats, so the bar is full.`,
          ]}
        />
        <Mistake>Counting a rest as nothing. A rest still takes up its beats, so you stay silent and keep counting.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time signatures',
    content: slide(
      <>
        <Rule>A time signature is two numbers at the start of a piece. The top number tells you how many beats are in each bar, and the bottom number 4 means that each beat is a crotchet. You will read 2/4, 3/4 and 4/4. The first beat of every bar is the strong beat.</Rule>
        <BeatPulse sig="3/4" bars={3} aria={`Nine dots in three bars of three. The first beat of each bar is bigger because it is the strong beat. Counted: ${countIn('3/4')}, ${countIn('3/4')}, ${countIn('3/4')}.`} />
        <Worked
          title="Count the beats"
          steps={[
            `In 3/4 each bar has ${beatsPerBar('3/4')} beats.`,
            `Three bars of 3/4 have ${beatsInBars('3/4', 3)} beats.`,
            `Two bars of 2/4 have ${beatsInBars('2/4', 2)} beats and one bar of 4/4 has ${beatsPerBar('4/4')} beats.`,
          ]}
        />
        <Mistake>Reading the top number as how fast to play. The top number counts beats in a bar. Speed is a different marking.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clefs and letter names',
    content: slide(
      <>
        <Rule>A clef tells you which notes are on the lines and spaces of the staff. The treble clef is used for higher notes and the bass clef for lower notes. On the treble staff the lines are E G B D F from the bottom up and the spaces are F A C E. On the bass staff the lines are G B D F A and the spaces are A C E G.</Rule>
        <StaffNotes notes={['E4', 'G4', 'B4', 'D5', 'F5']} aria="Five notes on the five lines of the treble staff, from the bottom line up: E, G, B, D and F. Notes on lines are coloured amber." />
        <Worked
          title="Name the notes"
          steps={[
            'The notes on the four spaces of the treble staff spell a word: F, A, C, E.',
            'A note in the lowest space of the treble staff is F, just above the bottom line E.',
            'The same shape on the bass staff has a different letter name, because the bass clef gives different names to the lines and spaces.',
          ]}
        />
        <Mistake>Using the treble names on the bass staff. Always look at the clef before you name a note.</Mistake>
      </>,
    ),
  },
  {
    title: 'The C and G major scales',
    content: slide(
      <>
        <Rule>A major scale has eight notes and is built with the pattern {patternLetters()}, where T is a tone and S is a semitone. C major is {cMajor.slice(0, 7).join(' ')} and has no sharps or flats. G major has one sharp, {keySignature('G').notes[0]}, which is written once at the start as its key signature.</Rule>
        <ScaleOnStaff keyName="C" aria={`The C major scale on the treble staff: ${cMajor.join(', ')}. Between the notes are tones and semitones in the pattern ${patternLetters()}.`} />
        <ScaleOnStaff keyName="G" aria={`The G major scale on the treble staff: ${gMajor.join(', ')}. The seventh note has a sharp sign. Between the notes are tones and semitones in the pattern ${patternLetters()}.`} />
        <Worked
          title="Why G major has a sharp"
          steps={[
            `Start on G and use the pattern ${patternLetters()}: ${gMajor.join(' ')}.`,
            'The seventh note must be a semitone below the top G. F is a tone below G, so F is raised to F♯.',
            `The key signature of G major is therefore ${keySignature('G').notes.length} sharp: ${keySignature('G').notes[0]}.`,
          ]}
        />
        <Mistake>Playing F natural in G major. Every F in the piece is F♯ because of the key signature.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many beats are in two bars of 4/4?</>,
          <>What goes in a bar of 2/4 that already has a crotchet?</>,
          <>Which clef gives the lines G B D F A?</>,
          <>Which notes are the semitones in C major?</>,
        ]}
        answers={[
          <>{beatsInBars('4/4', 2)} beats.</>,
          <>One more crotchet, or a crotchet rest.</>,
          <>The bass clef.</>,
          <>E to F and B to C.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "How many crotchet beats does a dotted minim last?",
    options: ["2 beats", "4 beats", "3 beats", "1½ beats"],
    answer: "3 beats",
    explanation: "A minim lasts 2 beats and the dot adds half of that, 1 more beat, so a dotted minim lasts 3 beats.",
  },
  {
    prompt: "A bar of 3/4 holds one minim. Which note fills the rest of the bar?",
    options: ["A crotchet", "A quaver", "A minim", "A semibreve"],
    answer: "A crotchet",
    explanation: "A bar of 3/4 holds 3 beats. A minim is 2 beats, so a crotchet (1 beat) fills the bar.",
  },
  {
    prompt: "How many crotchet beats are in 4 bars of 3/4?",
    options: ["7", "9", "16", "12"],
    answer: "12",
    explanation: "Each bar has 3 beats, so 4 bars have 4 × 3 = 12 beats.",
  },
  {
    prompt: "Which rest is a silence of two beats?",
    options: ["A crotchet rest", "A minim rest", "A quaver rest", "A semibreve rest"],
    answer: "A minim rest",
    explanation: "A rest has the same length as the note with the same name, and a minim lasts 2 beats.",
  },
  {
    prompt: "What does the top number of a time signature tell you?",
    options: ["How fast the music is played", "How loud each bar must sound", "How many beats are in each bar", "How many bars are in the piece"],
    answer: "How many beats are in each bar",
    explanation: "The top number counts the beats in every bar. In 3/4 there are 3 beats.",
  },
  {
    prompt: "How many quavers fit into one crotchet?",
    options: ["2", "1", "3", "4"],
    answer: "2",
    explanation: "A quaver is half a beat, so two quavers add up to one crotchet beat.",
  },
  {
    prompt: "Which time signature has two crotchet beats in every bar?",
    options: ["3/4", "4/4", "3/2", "2/4"],
    answer: "2/4",
    explanation: "The top number is the number of beats in a bar, so 2/4 has 2 crotchet beats.",
  },
  {
    prompt: "Which letters name the four spaces of the treble staff, from the bottom up?",
    options: ["E G B D", "F A C E", "A C E G", "G B D F"],
    answer: "F A C E",
    explanation: "The spaces of the treble staff are F, A, C and E. The lines are E, G, B, D and F.",
  },
  {
    prompt: "A part is written for a deep, low voice. Which clef is it most likely to start with?",
    options: ["The treble clef", "The time signature", "The bass clef", "The key signature"],
    answer: "The bass clef",
    explanation: "The bass clef is used for low notes and the treble clef for higher notes.",
  },
  {
    prompt: "How many sharps are in the key signature of G major?",
    options: ["One sharp", "No sharps", "Two sharps", "One flat"],
    answer: "One sharp",
    explanation: "G major has one sharp, F♯, so its key signature has one sharp.",
  },
  {
    prompt: "Which note is sharpened in the G major scale?",
    options: ["C", "B", "E", "F"],
    answer: "F",
    explanation: "The seventh note of G major is F♯, which makes a semitone below the top G.",
  },
  {
    prompt: "Which of these major scales has no sharps or flats?",
    options: ["G major", "C major", "D major", "E major"],
    answer: "C major",
    explanation: "C major uses only the white notes of a keyboard, so it has no sharps or flats.",
  },
  {
    prompt: "Which pattern of tones (T) and semitones (S) builds every major scale?",
    options: ["T S T T S T T", "T T T S T T S", "T T S T T T S", "S S T T T T S"],
    answer: "T T S T T T S",
    explanation: "Every major scale follows tone, tone, semitone, tone, tone, tone, semitone.",
  },
  {
    prompt: "Between which pairs of notes in the C major scale are the semitones?",
    options: ["E to F and B to C", "C to D and G to A", "D to E and A to B", "F to G and C to D"],
    answer: "E to F and B to C",
    explanation: "In C major the semitones fall between the 3rd and 4th notes (E and F) and between the 7th and 8th notes (B and C).",
  },
];

const MusicLiteracyNotesKeys = () => (
  <CapsSubjectTopic
    title="Music Literacy: Note Values, Time Signatures and Keys"
    subtitle="Note values and rests, 2/4 3/4 4/4, clefs and the C and G major scales"
    learnSteps={learnSteps}
    task="gr8-ca-music-literacy-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default MusicLiteracyNotesKeys;
