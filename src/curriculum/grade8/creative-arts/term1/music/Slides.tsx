import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BeatPulse, DynamicsScale, RhythmBars, StaffNotes } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { beatsInBars, beatsMissing, beatsPerBar, countIn, loudness, NOTE_BEATS, noteStep, sound, totalBeats } from '../../../../../components/diagrams/arts/ca8-music-helpers';

// Every count below comes from ca8-music-helpers.ts (tested in ca8-music-helpers.test.ts and ca8-music-lessons.test.ts).
const bars2 = beatsInBars('4/4', 2);
const bar1 = [sound('crotchet'), sound('crotchet'), sound('minim')];
const bar2 = [sound('minim'), sound('crotchet'), sound('quaver'), sound('quaver')];
const bar3 = [sound('crotchet'), sound('crotchet', true), sound('minim')];
const e4 = noteStep('E4');
const b4 = noteStep('B4');
const q1 = beatsInBars('4/4', 3);
const q2 = beatsMissing('4/4', [sound('minim'), sound('crotchet')]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Beat and metre',
    content: slide(
      <>
        <Rule>The beat is the steady pulse you can count. Metre groups the beats into regular sets called bars, such as 4 beats in every bar of 4/4 time.</Rule>
        <BeatPulse sig="4/4" bars={2} aria={`Eight dots in two bars of four. In each bar the first beat is bigger because it is the strong beat. The beats are counted ${countIn('4/4')}, then ${countIn('4/4')} again.`} />
        <Worked
          title="Count two bars of 4/4"
          steps={[<>Say {countIn('4/4')} for the first bar.</>, <>Say {countIn('4/4')} again for the second bar.</>, <>Two bars of {beatsPerBar('4/4')} beats = {bars2} beats.</>]}
        />
        <Mistake>Mixing up beat and rhythm. The beat stays steady like a heartbeat; the rhythm is the pattern of long and short sounds played over it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rhythm, note values and rests',
    content: slide(
      <>
        <Rule>Rhythm is a pattern of long and short sounds. A crotchet lasts {NOTE_BEATS.crotchet} beat, a minim {NOTE_BEATS.minim}, a quaver half a beat. A rest is a silence of a set length.</Rule>
        <RhythmBars
          rows={[
            { sig: '4/4', bar: bar1, total: totalBeats(bar1) },
            { sig: '4/4', bar: bar3, total: totalBeats(bar3) },
          ]}
          aria={`Two bars of 4/4 drawn to scale. The first has two crotchets and a minim, which add up to ${totalBeats(bar1)} beats. The second has a crotchet, a crotchet rest shown as a dashed box, and a minim, which also add up to ${totalBeats(bar3)} beats.`}
        />
        <Worked
          title="Add up a bar of 4/4"
          steps={[<>Crotchet {NOTE_BEATS.crotchet} + crotchet {NOTE_BEATS.crotchet} + minim {NOTE_BEATS.minim} = {totalBeats(bar1)} beats.</>, <>Swap the second note for a rest: {NOTE_BEATS.crotchet} + {NOTE_BEATS.crotchet} (silent) + {NOTE_BEATS.minim} = {totalBeats(bar3)} beats.</>, <>A bar of {bar2.length} sounds can also fill 4/4: {totalBeats(bar2)} beats.</>]}
        />
        <Mistake>Skipping the rest. You must still count its beats; the silence takes up time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pitch on the staff',
    content: slide(
      <>
        <Rule>A sound can be high, like a whistle, or low, like a drum: that is its pitch. On the staff, the higher a note sits, the higher its pitch.</Rule>
        <StaffNotes notes={['E4', 'G4', 'B4']} aria="A five-line staff with three notes rising from the bottom line to the middle line. The notes are named E, G and B, and each is higher on the staff and higher in pitch than the one before." />
        <Worked
          title="Which is higher, E or B?"
          steps={[<>With the treble clef, E is on the bottom line: step {e4}.</>, <>B is on the middle line: step {b4}.</>, <>B is {b4 - e4} steps higher on the staff, so B is the higher pitch.</>]}
        />
        <Mistake>Thinking a long note is a high note. Length (rhythm) and pitch are separate: a note can be long and low, or short and high.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dynamics',
    content: slide(
      <>
        <Rule>Dynamics tell us how loud or soft the sounds are. They run from pp (very soft) through p, mp, mf and f up to ff (very loud).</Rule>
        <DynamicsScale aria="Six bars that grow taller from left to right, labelled pp, p, mp, mf, f and ff, from very soft to very loud." />
        <Worked
          title="Compare mp and f"
          steps={[<>mp is number {loudness('mp')} on the scale from soft to loud.</>, <>f is number {loudness('f')}.</>, <>{loudness('f')} is bigger than {loudness('mp')}, so f is louder.</>]}
        />
        <Mistake>Confusing dynamics with speed or pitch. Dynamics are only about how loud or soft, not how fast or how high.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clap-back and keeping time',
    content: slide(
      <>
        <Rule>In a clap-back, listen and repeat the rhythm accurately. To stay in time in an ensemble, count the beat inside your head and do not speed up when nervous.</Rule>
        <NumberedSteps
          label="How to answer a clap-back"
          heading="A clap-back"
          tone="amber"
          steps={[
            { lead: 'Listen', text: ' to the whole pattern first.' },
            { lead: 'Count', text: ' the steady beat silently.' },
            { lead: 'Clap', text: ' it back with the same lengths.' },
          ]}
        />
        <Worked
          title="Clap-back of two crotchets and a minim"
          steps={[<>Count {countIn('4/4')}.</>, <>Clap on 1, clap on 2, clap on 3 and hold through 4.</>, <>That is {totalBeats(bar1)} beats, one full bar.</>]}
        />
        <Mistake>Watching only your own hands. Count with the beat so you stay together with the group.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many beats are in 3 bars of 4/4?</>,
          <>A bar of 4/4 has a minim and a crotchet. What fills the last beat?</>,
          <>Which is higher in pitch, E on the bottom line or B on the middle line?</>,
          <>Which is louder, mp or f?</>,
        ]}
        answers={[
          <>3 × {beatsPerBar('4/4')} = {q1} beats.</>,
          <>{q2} more beat: a crotchet or a crotchet rest.</>,
          <>B (step {b4}, against step {e4} for E).</>,
          <>f, number {loudness('f')} against {loudness('mp')}.</>,
        ]}
      />,
    ),
  },
];
