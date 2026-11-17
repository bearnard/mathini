import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { Waveforms } from '../../../../../components/diagrams/atom10/Atom10';
import { AUDIBLE_HIGH, AUDIBLE_LOW, SPEED_IN_AIR, echoDistance, soundKind, timeToHear, wavelengthOf } from '../../../../../components/diagrams/atom10/atom10Helpers';

// Every number comes from atom10Helpers.ts (tested in atom10Helpers.test.ts and g10PsW2T1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const learnSteps: LearnStep[] = [
  {
    title: 'What sound is',
    content: slide(
      <>
        <Rule>Sound is a longitudinal wave made by a vibrating object. It needs a medium (a solid, liquid or gas) to travel through, so it cannot travel through a vacuum. Sound travels fastest in solids, slower in liquids and slowest in gases.</Rule>
        <FactCards
          cards={[
            { title: 'Solids', line1: 'sound is fastest here:', line2: 'the particles are very close' },
            { title: 'Liquids', line1: 'slower than in solids', line2: 'but faster than in gases' },
            { title: 'Gases', line1: 'sound is slowest here:', line2: `in air about ${SPEED_IN_AIR} m·s⁻¹` },
            { title: 'Vacuum', line1: 'no particles, so', line2: 'no sound at all' },
          ]}
          aria={`Sound in different media. Solids: sound is fastest, because the particles are very close. Liquids: slower than in solids but faster than in gases. Gases: sound is slowest, in air about ${SPEED_IN_AIR} metres per second. Vacuum: no particles, so there is no sound.`}
        />
        <Worked
          title="Sound from a loudspeaker"
          steps={[
            'The cone of the loudspeaker vibrates and pushes the air particles.',
            'This makes compressions and rarefactions that travel through the air.',
            'The wave reaches your ear and makes the eardrum vibrate.',
          ]}
        />
        <Mistake>Saying that sound travels in space. There is no air in space, so there is no medium.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pitch, loudness and tone',
    content: slide(
      <>
        <Rule>Pitch depends on the frequency: a higher frequency gives a higher pitch. Loudness depends on the amplitude: a larger amplitude gives a louder sound. Tone (quality) depends on the shape of the wave, which is why a guitar and a flute playing the same note sound different.</Rule>
        <Waveforms
          rows={[
            { label: 'low pitch, soft', amp: 0.5, f: 2 },
            { label: 'high pitch (2× the frequency)', amp: 0.5, f: 4 },
            { label: 'louder (2× the amplitude)', amp: 1, f: 2 },
          ]}
        />
        <Worked
          title="Compare two sounds"
          steps={[
            'Sound A has a frequency of 200 Hz and sound B has 400 Hz. B has the higher pitch.',
            'Sound C has twice the amplitude of sound A at the same frequency. C is louder, but the pitch is the same.',
            'A tuning fork and a violin playing the same note and loudness differ in tone.',
          ]}
        />
        <Mistake>Saying that a louder sound has a higher frequency. Loudness is amplitude and pitch is frequency.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hearing range, ultrasound and echoes',
    content: slide(
      <>
        <Rule>{`Humans hear sounds from ${AUDIBLE_LOW} Hz to ${big(AUDIBLE_HIGH)} Hz. Sound below this range is infrasound and sound above it is ultrasound. An echo is sound reflected from an obstacle, and it can be used to measure distance.`}</Rule>
        <FactCards
          cards={[
            { title: `Below ${AUDIBLE_LOW} Hz`, line1: 'infrasound: too low', line2: 'for people to hear' },
            { title: `${AUDIBLE_LOW} Hz to ${big(AUDIBLE_HIGH)} Hz`, line1: 'audible sound for', line2: 'a healthy human ear' },
            { title: `Above ${big(AUDIBLE_HIGH)} Hz`, line1: 'ultrasound: sonar, images of an', line2: 'unborn baby, and cleaning' },
          ]}
          aria={`Sound ranges. Below ${AUDIBLE_LOW} hertz is infrasound, too low for people to hear. From ${AUDIBLE_LOW} hertz to ${AUDIBLE_HIGH} hertz is audible sound for a healthy human ear. Above ${AUDIBLE_HIGH} hertz is ultrasound, used in sonar, to make images of an unborn baby, and for cleaning.`}
        />
        <Worked
          title="Use an echo (speed of sound in air: 340 m·s⁻¹)"
          steps={[
            `A shout is heard again after 2 s. The sound travelled 340 × 2 = ${big(SPEED_IN_AIR * 2)} m to the cliff and back.`,
            `The cliff is half of that away: ${echoDistance(SPEED_IN_AIR, 2)} m.`,
            `A 680 Hz note in air has λ = 340 ÷ 680 = ${n(wavelengthOf(SPEED_IN_AIR, 680))} m, and a sound from ${big(1700)} m away takes ${timeToHear(SPEED_IN_AIR, 1700)} s to arrive. A frequency of 30 000 Hz is ${soundKind(30000)}.`,
          ]}
        />
        <Mistake>Using the full distance as the distance to the wall. The sound travels there and back, so halve it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which property of a sound wave decides its pitch?</>,
          <>An echo returns after 2 s. How far away is the obstacle? Use 340 m·s⁻¹.</>,
          <>What is a sound of 30 000 Hz called?</>,
          <>Does sound travel faster in a solid or in a gas?</>,
        ]}
        answers={[
          <>Its frequency.</>,
          <>{echoDistance(SPEED_IN_AIR, 2)} m.</>,
          <>Ultrasound.</>,
          <>In a solid.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why can sound not travel through a vacuum?",
    options: ["Sound waves are too weak out in space", "A vacuum is always too cold for sound", "There are no particles to vibrate", "Sound travels only the way that light does"],
    answer: "There are no particles to vibrate",
    explanation: "Sound is a vibration of particles, so it needs a medium.",
  },
  {
    prompt: "In which medium does sound normally travel fastest?",
    options: ["A solid", "A gas", "A liquid", "A vacuum"],
    answer: "A solid",
    explanation: "The particles are closest together in solids, so vibrations pass quickly.",
  },
  {
    prompt: "In which medium does sound normally travel slowest?",
    options: ["A solid", "A liquid", "A metal", "A gas"],
    answer: "A gas",
    explanation: "In a gas the particles are far apart, so sound is slowest.",
  },
  {
    prompt: "Which property of a sound wave decides its pitch?",
    options: ["Amplitude", "Frequency", "Speed", "Wavelength only"],
    answer: "Frequency",
    explanation: "A higher frequency gives a higher pitch.",
  },
  {
    prompt: "Which property of a sound wave decides its loudness?",
    options: ["Frequency", "Amplitude", "Period", "Speed"],
    answer: "Amplitude",
    explanation: "A larger amplitude gives a louder sound.",
  },
  {
    prompt: "Sound A has a frequency of 200 Hz and sound B has 400 Hz. What can be said?",
    options: ["A has the higher pitch", "B is the louder sound", "A and B have the same pitch", "B has the higher pitch"],
    answer: "B has the higher pitch",
    explanation: "A higher frequency gives a higher pitch; loudness is a different property.",
  },
  {
    prompt: "Two sounds have the same frequency but the second has twice the amplitude. What is true?",
    options: ["The second is louder with the same pitch", "The second has a higher pitch", "The second is quieter", "The second has a different tone only"],
    answer: "The second is louder with the same pitch",
    explanation: "Amplitude controls loudness and frequency controls pitch.",
  },
  {
    prompt: "A guitar and a flute play the same note at the same loudness. Why do they sound different?",
    options: ["Their pitch differs", "Their frequency differs", "Their tone (quality) differs", "Their amplitude differs"],
    answer: "Their tone (quality) differs",
    explanation: "Tone depends on the shape of the wave.",
  },
  {
    prompt: "A healthy human ear hears sounds from about 20 Hz to what frequency?",
    options: ["2 000 Hz", "200 Hz", "200 000 Hz", "20 000 Hz"],
    answer: "20 000 Hz",
    explanation: "The audible range is about 20 Hz to 20 000 Hz.",
  },
  {
    prompt: "What is a sound with a frequency of 30 000 Hz called?",
    options: ["Infrasound", "Ultrasound", "Audible sound", "A radio wave"],
    answer: "Ultrasound",
    explanation: "Above 20 000 Hz sound is ultrasound.",
  },
  {
    prompt: "Which is a use of ultrasound?",
    options: ["Making images of an unborn baby", "Heating food quickly", "Sending messages through space", "Seeing in the dark"],
    answer: "Making images of an unborn baby",
    explanation: "Ultrasound scans use reflected high-frequency sound to form images.",
  },
  {
    prompt: "Using 340 m·s⁻¹ as the speed of sound in air, what is the wavelength of a 680 Hz sound?",
    options: ["2 m", "231 200 m", "0,5 m", "0,05 m"],
    answer: "0,5 m",
    explanation: "λ = v ÷ f = 340 ÷ 680 = 0,5 m.",
  },
  {
    prompt: "A boy shouts and hears an echo from a cliff after 2 s. The speed of sound in air is 340 m·s⁻¹. How far away is the cliff?",
    options: ["680 m", "170 m", "340 m", "1 360 m"],
    answer: "340 m",
    explanation: "The sound travels there and back: 340 × 2 = 680 m, so the cliff is 340 m away.",
  },
  {
    prompt: "Lightning is 1 700 m away. Using 340 m·s⁻¹ for sound in air, how long does the thunder take to reach you?",
    options: ["5 s", "0,2 s", "50 s", "578 s"],
    answer: "5 s",
    explanation: "t = d ÷ v = 1 700 ÷ 340 = 5 s.",
  },
];

const Sound = () => (
  <CapsSubjectTopic
    title="Sound"
    subtitle="What sound is, pitch, loudness and tone, ultrasound and echoes"
    learnSteps={learnSteps}
    task="gr10-sound-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Sound;
