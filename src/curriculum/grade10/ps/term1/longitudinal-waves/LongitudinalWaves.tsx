import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SpringWave } from '../../../../../components/diagrams/atom10/Atom10';
import { compressionCentres, speedOfWave, wavelengthFromCompressions, wavelengthOf, periodOf } from '../../../../../components/diagrams/atom10/atom10Helpers';

// Every number comes from atom10Helpers.ts (tested in atom10Helpers.test.ts and g10PsW2T1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');
const LAMBDA = 8;
const comp = compressionCentres(LAMBDA, 2);

export const learnSteps: LearnStep[] = [
  {
    title: 'Longitudinal waves on a spring',
    content: slide(
      <>
        <Rule>In a longitudinal wave the particles of the medium move backwards and forwards along the same line as the direction in which the wave travels. On a spring we see regions where the coils are pushed together, called compressions, and regions where they are pulled apart, called rarefactions.</Rule>
        <SpringWave lambda={LAMBDA} a={0.9} />
        <Worked
          title="Read the picture"
          steps={[
            'The coils move left and right. The wave also travels left or right, along the spring.',
            'Where the coils are close together there is a compression. Where they are far apart there is a rarefaction.',
            'The wave carries energy along the spring, but the coils only move to and fro about their rest positions.',
          ]}
        />
        <Mistake>Thinking that the coils travel along with the wave. Each coil only vibrates about its rest position.</Mistake>
      </>,
    ),
  },
  {
    title: 'Wavelength, frequency and speed',
    content: slide(
      <>
        <Rule>The wavelength is the distance between two successive compressions (or two successive rarefactions). The frequency f is the number of waves per second, in hertz. The period is T = 1/f. The speed of the wave is v = fλ.</Rule>
        <FactCards
          cards={[
            { title: 'Wavelength λ', line1: 'compression to compression', line2: 'measured in metres' },
            { title: 'Frequency f', line1: 'waves per second', line2: 'measured in hertz (Hz)' },
            { title: 'Period T', line1: 'T = 1 ÷ f', line2: 'the time for one wave' },
            { title: 'Wave speed v', line1: 'v = f × λ', line2: 'measured in m·s⁻¹' },
          ]}
          aria="Quantities of a longitudinal wave. Wavelength: the distance from compression to compression, in metres. Frequency: waves per second, in hertz. Period: T equals 1 divided by f, the time for one wave. Wave speed: v equals f times lambda, in metres per second."
        />
        <Worked
          title="A wave on a spring"
          steps={[
            `Compressions are at ${comp[0]} cm and ${comp[1]} cm, so the wavelength is ${n(wavelengthFromCompressions(comp[0], comp[1]))} cm.`,
            `A spring wave has f = 5 Hz and λ = 0,4 m, so v = 5 × 0,4 = ${n(speedOfWave(5, 0.4))} m·s⁻¹.`,
            `The period is T = 1 ÷ 5 = ${n(periodOf(5))} s, and a wave at 4 m·s⁻¹ with f = 8 Hz has λ = ${n(wavelengthOf(4, 8))} m.`,
          ]}
        />
        <Mistake>Measuring the wavelength from a compression to the next rarefaction. That is only half a wavelength.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transverse and longitudinal waves',
    content: slide(
      <>
        <Rule>In a transverse wave the particles move at right angles to the direction of travel. In a longitudinal wave they move parallel to it. Both kinds have wavelength, frequency, amplitude and speed, and both carry energy without carrying matter.</Rule>
        <FactCards
          cards={[
            { title: 'Transverse', line1: 'particles move at right angles', line2: 'to the wave: crests and troughs' },
            { title: 'Longitudinal', line1: 'particles move along the wave:', line2: 'compressions and rarefactions' },
            { title: 'Both', line1: 'carry energy, not matter, and', line2: 'obey v = f × λ' },
          ]}
          aria="Comparing wave types. Transverse waves: the particles move at right angles to the direction of the wave, forming crests and troughs. Longitudinal waves: the particles move along the direction of the wave, forming compressions and rarefactions. Both carry energy but not matter, and both obey v equals f times lambda."
        />
        <Worked
          title="Which kind is it?"
          steps={[
            'A pulse sent along a rope by flicking it up and down is transverse.',
            'Pushing and pulling one end of a spring along its length gives a longitudinal wave.',
            'In both, the energy moves along the medium but the medium does not move away.',
          ]}
        />
        <Mistake>Saying that crests and troughs form in a longitudinal wave. Those belong to transverse waves.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do we call a region where the coils of a spring are pushed together?</>,
          <>What is the wavelength if two compressions are {comp[1] - comp[0]} cm apart?</>,
          <>What is the speed of a wave with f = 5 Hz and λ = 0,4 m?</>,
          <>What is the period of a wave with a frequency of 5 Hz?</>,
        ]}
        answers={[
          <>A compression.</>,
          <>{n(wavelengthFromCompressions(comp[0], comp[1]))} cm.</>,
          <>{n(speedOfWave(5, 0.4))} m·s⁻¹.</>,
          <>{n(periodOf(5))} s.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In a longitudinal wave, how do the particles of the medium move?",
    options: ["At right angles to the direction of the wave", "In circles around the source of the wave", "Parallel to the direction in which the wave travels", "Along with the wave to the far end"],
    answer: "Parallel to the direction in which the wave travels",
    explanation: "In a longitudinal wave the particles vibrate along the line of travel.",
  },
  {
    prompt: "What is a compression?",
    options: ["A region where the particles are close together", "A region where the particles are far apart", "The highest point of a wave", "The distance for one complete wave"],
    answer: "A region where the particles are close together",
    explanation: "In a compression the coils or particles are pushed together.",
  },
  {
    prompt: "What is a rarefaction?",
    options: ["A region where the particles are pushed together", "The lowest point of a wave", "The time for one wave to pass", "A region where the particles are far apart"],
    answer: "A region where the particles are far apart",
    explanation: "In a rarefaction the coils or particles are pulled apart.",
  },
  {
    prompt: "Which part of a transverse wave has no match in a longitudinal wave?",
    options: ["Wavelength", "Crests and troughs", "Frequency", "Speed"],
    answer: "Crests and troughs",
    explanation: "Crests and troughs belong to transverse waves; longitudinal waves have compressions and rarefactions.",
  },
  {
    prompt: "How is the wavelength of a longitudinal wave measured?",
    options: ["From a compression to the next rarefaction", "From one compression to the next compression", "From a compression to the rest position", "From a rarefaction to the coil"],
    answer: "From one compression to the next compression",
    explanation: "One wavelength is the distance between two successive compressions.",
  },
  {
    prompt: "Two successive compressions on a spring are 12 cm apart. What is the wavelength?",
    options: ["6 cm", "24 cm", "3 cm", "12 cm"],
    answer: "12 cm",
    explanation: "The distance between two successive compressions is one wavelength.",
  },
  {
    prompt: "A compression and the next rarefaction are 5 cm apart. What is the wavelength?",
    options: ["10 cm", "5 cm", "2,5 cm", "20 cm"],
    answer: "10 cm",
    explanation: "From a compression to the next rarefaction is half a wavelength, so λ = 10 cm.",
  },
  {
    prompt: "Which unit is used for the frequency of a wave?",
    options: ["Metre", "Second", "Hertz", "Metre per second"],
    answer: "Hertz",
    explanation: "Frequency is the number of waves per second, measured in hertz.",
  },
  {
    prompt: "A spring wave has a frequency of 4 Hz. What is its period?",
    options: ["4 s", "0,4 s", "2 s", "0,25 s"],
    answer: "0,25 s",
    explanation: "T = 1 ÷ f = 1 ÷ 4 = 0,25 s.",
  },
  {
    prompt: "A wave on a spring has a frequency of 5 Hz and a wavelength of 0,4 m. What is its speed?",
    options: ["0,08 m·s⁻¹", "2 m·s⁻¹", "12,5 m·s⁻¹", "9 m·s⁻¹"],
    answer: "2 m·s⁻¹",
    explanation: "v = fλ = 5 × 0,4 = 2 m·s⁻¹.",
  },
  {
    prompt: "A longitudinal wave travels at 12 m·s⁻¹ and has a frequency of 6 Hz. What is its wavelength?",
    options: ["2 m", "72 m", "0,5 m", "6 m"],
    answer: "2 m",
    explanation: "λ = v ÷ f = 12 ÷ 6 = 2 m.",
  },
  {
    prompt: "What does a longitudinal wave carry from one place to another?",
    options: ["Matter", "The coils themselves", "Energy", "Both matter and the medium"],
    answer: "Energy",
    explanation: "A wave carries energy without carrying the medium along.",
  },
  {
    prompt: "Which of these is a longitudinal wave?",
    options: ["A ripple on a pond surface", "A rope flicked up and down", "A push along a spring", "A beam of light from a lamp"],
    answer: "A push along a spring",
    explanation: "Pushing along a spring gives compressions and rarefactions.",
  },
  {
    prompt: "A rope is flicked up and down. Which kind of wave travels along it?",
    options: ["A transverse wave", "A longitudinal wave", "A wave of compressions", "A sound wave in air"],
    answer: "A transverse wave",
    explanation: "The rope moves at right angles to the direction of travel.",
  },
];

const LongitudinalWaves = () => (
  <CapsSubjectTopic
    title="Longitudinal Waves"
    subtitle="Compressions and rarefactions on a spring, wavelength, frequency and speed"
    learnSteps={learnSteps}
    task="gr10-longitudinal-waves-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default LongitudinalWaves;
