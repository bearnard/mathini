import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { RhythmBars, TempoTicks } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { barSeconds, barsPracticed, barsSeconds, beatsPerBar, countIn, secondsPerBeat, sound, totalBeats } from '../../../../../components/diagrams/arts/ca8-music-helpers';

// Every count below comes from ca8-music-helpers.ts (tested in ca8-music-helpers.test.ts and ca8-music-lessons.test.ts).
const heard = [sound('crotchet'), sound('crotchet'), sound('minim')];
const practice = barsPracticed(5, 6, 4);
const BPM = 120;
const spb = secondsPerBeat(BPM);
const bar = barSeconds(BPM, '4/4');
const four = barsSeconds(BPM, '4/4', 4);
const q3 = barsSeconds(60, '3/4', 2);
const comma = (n: number) => String(n).replace('.', ',');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Aural recall',
    content: slide(
      <>
        <Rule>Aural recall means remembering and naming sounds by listening. You hear a pattern, keep it in your head and then name what you heard.</Rule>
        <RhythmBars rows={[{ sig: '4/4', bar: heard, total: totalBeats(heard) }]} aria={`A one-bar pattern drawn to scale: two crotchets and a minim, ${totalBeats(heard)} beats in 4/4.`} />
        <Worked
          title="Recall a clapped pattern"
          steps={['Listen to the whole pattern.', 'Keep the beat going: 1 2 3 4.', <>Name it: two short claps and one long sound, {totalBeats(heard)} beats in all.</>]}
        />
        <Mistake>Waiting to see the music. Aural recall works from what you hear, so listen carefully and listen again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Genre comparison',
    content: slide(
      <>
        <Rule>Genre comparison focuses on similarities and differences in style features, such as voices or instruments, tempo, dynamics and texture. Support your answer with specific musical features you heard.</Rule>
        <CompareCards
          left={{ title: 'Example piece A', lines: ['Voices only', 'Slow and soft'] }}
          right={{ title: 'Example piece B', lines: ['Marimba and drum', 'Fast and loud'] }}
        />
        <Worked
          title="Give genre clues"
          steps={['Name a feature: piece A has voices only, piece B has instruments.', 'Compare dynamics: A is soft, B is loud.', 'Say what you heard, not only that you liked it.']}
        />
        <Mistake>Naming a genre with no evidence. A good answer points at features heard in the music.</Mistake>
      </>,
    ),
  },
  {
    title: 'Performance revision and warm-up',
    content: slide(
      <>
        <Rule>Revise a performance by working on the difficult sections again and again. Warming up your voice or hands before you perform gets your technique ready and eases strain.</Rule>
        <NumberedSteps
          label="How to revise a prepared item"
          heading="Revise in order"
          tone="blue"
          steps={[
            { lead: 'Warm up', text: ' voice or hands first.' },
            { lead: 'Drill', text: ' the hard bars repeatedly.' },
            { lead: 'Run through', text: ' the whole item.' },
          ]}
        />
        <Worked
          title="Bars 5 to 6 are hard"
          steps={[<>Practise bars 5 to 6, that is 2 bars.</>, <>Do it 4 times: {practice} bars of practice on the hard part.</>, 'Then play the whole piece once.']}
        />
        <Mistake>Playing the whole piece from the start every time. Spend the time on the hard sections.</Mistake>
      </>,
    ),
  },
  {
    title: 'Steady tempo',
    content: slide(
      <>
        <Rule>To keep the tempo steady in rehearsal, count the beats or use a pulse cue. Tempo is measured in beats a minute. Adagio is slow, andante is walking pace and allegro is fast.</Rule>
        <TempoTicks bpm={BPM} sig="4/4" aria={`A time line with two bars of 4/4 at ${BPM} beats a minute. Each beat is ${comma(spb)} seconds apart and one bar lasts ${comma(bar)} seconds.`} />
        <Worked
          title={`${BPM} beats a minute in 4/4`}
          steps={[<>60 seconds ÷ {BPM} = {comma(spb)} seconds for each beat.</>, <>{beatsPerBar('4/4')} beats × {comma(spb)} = {comma(bar)} seconds a bar.</>, <>4 bars take {comma(four)} seconds.</>]}
        />
        <Mistake>Speeding up on the easy parts. Keep counting {countIn('4/4')} so the pulse stays the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stage etiquette and self-evaluation',
    content: slide(
      <>
        <Rule>Good stage etiquette means walking on and off respectfully. When you evaluate yourself afterwards, name one success and one improvement goal.</Rule>
        <NumberedSteps
          label="From stage entrance to self-evaluation"
          heading="A performance from start to finish"
          tone="amber"
          steps={[
            { lead: 'Enter', text: ' calmly and take your place.' },
            { lead: 'Start', text: ' together after the count-in.' },
            { lead: 'Exit', text: ' respectfully.' },
            { lead: 'Evaluate', text: ' one success, one goal.' },
          ]}
        />
        <Worked
          title="A self-evaluation"
          steps={['Success: "Our entry was together after the count-in."', 'Improvement goal: "Keep the tempo steady in the last four bars."']}
        />
        <Mistake>Listing only mistakes. Name something that went well as well as one thing to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does aural recall mean?</li>
            <li>Bars 3 to 4 are practised 5 times. How many bars of practice is that?</li>
            <li>How long do 2 bars of 3/4 last at 60 beats a minute?</li>
            <li>What should a self-evaluation include?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Remembering and naming sounds by listening.</li>
            <li>2 bars × 5 = {barsPracticed(3, 4, 5)} bars.</li>
            <li>1 second a beat, 3 beats a bar, so 2 bars last {q3} seconds.</li>
            <li>One success and one improvement goal.</li>
          </ol>
        }
      />,
    ),
  },
];
