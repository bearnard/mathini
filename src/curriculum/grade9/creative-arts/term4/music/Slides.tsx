import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { intervalNumber, keySignature, majorScale, pitchName, staffStep, triad } from '../../../../../components/diagrams/arts/ca9-music-helpers';
import { KeyChips, Staff } from '../../../../../components/diagrams/arts/Ca9MusicPictures';

// Every number and note name below comes from ca9-music-helpers.ts (tested in ca9-music-helpers.test.ts).
const g = majorScale('G', 4);
const second = intervalNumber(g[0], g[1]);
const third = intervalNumber(g[0], g[2]);
const fifth = intervalNumber(g[0], g[4]);
const keyOf = (root: 'C' | 'G' | 'D' | 'F') => {
  const k = keySignature(root);
  return { key: `${root} major`, text: k.count === 0 ? 'no sharps or flats' : k.count > 0 ? `${k.count} sharp${k.count > 1 ? 's' : ''}: ${k.sharps.join(', ')}` : `${-k.count} flat${-k.count > 1 ? 's' : ''}: ${k.flats.join(', ')}` };
};
const KEYS = (['C', 'G', 'D', 'F'] as const).map(keyOf);
const gSig = keySignature('G');
const chords = [1, 4, 5].map((d) => triad(g, d));
const ROMAN = ['I', 'IV', 'V'];
const q1 = intervalNumber(g[1], g[4]); // A up to D
const dSig = keySignature('D');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Aural skills: intervals, rhythms and chords',
    content: slide(
      <>
        <Rule>Aural skills train your ear to name intervals, rhythms and chords. An interval is the distance between two notes, counted by letter names including the first.</Rule>
        <Staff
          columns={[
            { steps: [staffStep(g[0]), staffStep(g[1])], above: `${second}nd` },
            { steps: [staffStep(g[0]), staffStep(g[2])], above: `${third}rd` },
            { steps: [staffStep(g[0]), staffStep(g[4])], above: `${fifth}th` },
          ]}
          aria={`Three intervals above the note G: a ${second}nd up to A, a ${third}rd up to B and a ${fifth}th up to D.`}
        />
        <Worked
          title="Name the interval G up to B"
          steps={[`Count the letters: G, A, B.`, <>That is {third} letters, so it is a {third}rd.</>, 'Check by ear: a 3rd sounds like a small skip.']}
        />
        <Mistake>Not counting the first note. G up to B is a {third}rd, not a {second}nd.</Mistake>
      </>,
    ),
  },
  {
    title: 'Score reading and key signatures',
    content: slide(
      <>
        <Rule>A key signature at the start of a line shows which notes are sharp or flat in the whole piece. Fluent score reading means reading notation quickly and correctly.</Rule>
        <KeyChips keys={KEYS} aria={`Key signatures: ${KEYS.map((k) => `${k.key} has ${k.text}`).join('; ')}.`} />
        <Worked
          title="One sharp in the key signature"
          steps={[<>One sharp is {gSig.sharps.join('')}.</>, 'Of these keys, that is G major.', <>So every F in the piece is played as {gSig.sharps.join('')}.</>]}
        />
        <Mistake>Ignoring the key signature and playing F natural in G major.</Mistake>
      </>,
    ),
  },
  {
    title: 'Theory revision: scales, chords and form',
    content: slide(
      <>
        <Rule>Revise key signatures, scales, chord functions and form analysis. Chord I is built on the 1st note of the scale, chord IV on the 4th and chord V on the 5th.</Rule>
        <Staff
          columns={chords.map((c, i) => ({ steps: c.map(staffStep), accs: c.map((p) => p.acc), above: ROMAN[i], below: c.map(pitchName).join(' ') }))}
          aria={`Three chords in G major: I is ${chords[0].map(pitchName).join(' ')}, IV is ${chords[1].map(pitchName).join(' ')}, V is ${chords[2].map(pitchName).join(' ')}.`}
        />
        <Worked
          title="Chords in G major"
          steps={[<>I: {chords[0].map(pitchName).join(', ')}.</>, <>IV: {chords[1].map(pitchName).join(', ')}.</>, <>V: {chords[2].map(pitchName).join(', ')}.</>]}
        />
        <Mistake>Using F natural in chord V. In G major that chord has {chords[2].map(pitchName)[1]}.</Mistake>
      </>,
    ),
  },
  {
    title: 'The final performance and stage etiquette',
    content: slide(
      <>
        <Rule>Final performance preparation means polishing rehearsals, the technical finish and building confidence. Stage etiquette is smart dress, respectful conduct and thanking the audience. Musical maturity is playing with control, expression and confidence.</Rule>
        <NumberedSteps
          label="Steps before a showcase performance"
          heading="Showcase checklist"
          tone="amber"
          steps={[{ lead: 'Run through', text: ' the piece from start to end.' }, { lead: 'Fix', text: ' the weakest bar.' }, { lead: 'Check', text: ' instruments and the stage set-up.' }, { lead: 'Perform', text: ' and thank the audience.' }]}
        />
        <Mistake>Practising only the parts you already play well. Spend the time on the weakest bar.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening analysis and music careers',
    content: slide(
      <>
        <Rule>Listening analysis for a final assessment names the style, form, instruments and your emotional response. Music careers include performer, composer, teacher, sound engineer or therapist.</Rule>
        <Worked
          title="Which career?"
          steps={['Balancing the microphones at a live show: sound engineer.', 'Writing new pieces for others to play: composer.', 'Helping people feel better through music: music therapist.']}
        />
        <Mistake>Thinking only performers have music careers. Many jobs work behind the scenes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What interval is A up to D in the G major scale?</li>
            <li>Which sharps are in the key signature of D major?</li>
            <li>Which notes make chord IV in G major?</li>
            <li>Name a good way to be a confident performer on stage.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A, B, C, D: a {q1}th.</li>
            <li>{dSig.sharps.join(' and ')}.</li>
            <li>{chords[1].map(pitchName).join(', ')}.</li>
            <li>Polish your rehearsals and finish with a confident, respectful performance.</li>
          </ol>
        }
      />,
    ),
  },
];
