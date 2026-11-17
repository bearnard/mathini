import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SlitPattern, SlitSpread, WavefrontPair } from '../../../../../components/diagrams/optics11/Optics11';
import { firstMinimum, sci, spreadRatio, wavelengthOf } from '../../../../../components/diagrams/optics11/optics11Helpers';

// Every number below comes from optics11Helpers.ts (tested in optics11Helpers.test.ts and g11PsOptics.test.ts).
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const lamSound = wavelengthOf(340, 340);
const lamSound2 = wavelengthOf(340, 680);
const door = 0.9;
const lamLight = 600e-9;
const rSound = spreadRatio(lamSound, door);
const rLight = spreadRatio(lamLight, door);
const slit = 3.0e-6;
const minAngle = firstMinimum(lamLight, slit)!;

export const learnSteps: LearnStep[] = [
  {
    title: "Wavefronts and Huygens' principle",
    content: slide(
      <>
        <Rule>A wavefront is an imaginary line that joins points on a wave that are in phase, for example all at the crest. Huygens&apos; principle: every point on a wavefront acts as a source of secondary wavelets, and the new wavefront is the line that touches all of these wavelets.</Rule>
        <WavefrontPair lambda={8} />
        <Worked
          title="How far apart are the wavefronts?"
          steps={[
            'Wavefronts that are one cycle apart are one wavelength (λ) apart.',
            `A sound wave with v = 340 m·s⁻¹ and f = 340 Hz has λ = v/f = 340 / 340 = ${dc(lamSound)} m.`,
            `If the frequency doubles to 680 Hz, λ = 340 / 680 = ${dc(lamSound2, 2)} m: the wavefronts are closer together.`,
          ]}
        />
        <Mistake>Thinking that a wavefront is the path of a particle. A wavefront joins points of equal phase and moves forward with the wave.</Mistake>
      </>,
    ),
  },
  {
    title: 'Diffraction at a narrow gap',
    content: slide(
      <>
        <Rule>Diffraction is the ability of a wave to spread out as it passes through a small aperture or around a sharp edge. By Huygens&apos; principle each point in the gap becomes a new source of wavelets, so the wave spreads into the region behind the barrier.</Rule>
        <SlitSpread ratio={1.5} label="gap about the same as λ" />
        <Worked
          title="Sound through a doorway"
          steps={[
            `A doorway is about ${dc(door)} m wide and a deep sound has λ = ${dc(lamSound)} m, so λ/a = ${dc(rSound, 2)}.`,
            'The gap is about the size of the wavelength, so the sound spreads out strongly and you can hear it around the corner.',
            'Diffraction is a wave behaviour: it is a test that something is a wave.',
          ]}
        />
        <Mistake>Saying that diffraction is the bending of light as it enters glass. That is refraction. Diffraction is spreading at a gap or an edge.</Mistake>
      </>,
    ),
  },
  {
    title: 'How much does a wave spread?',
    content: slide(
      <>
        <Rule>The degree of diffraction is greater when the wavelength is larger compared with the width of the gap: it depends on λ/a. A wide gap, with λ much smaller than the gap, gives very little diffraction.</Rule>
        <SlitSpread ratio={0.15} label="gap much wider than λ" />
        <Worked
          title="Sound and light through the same doorway"
          steps={[
            `Sound: λ/a = ${dc(lamSound)} / ${dc(door)} = ${dc(rSound, 2)}.`,
            `Light of 600 nm: λ/a = ${sci(lamLight, 1)} / ${dc(door)} = ${sci(rLight, 2)}, a tiny number.`,
            'So sound spreads around the doorway a lot, and light spreads so little that you cannot see round a corner.',
            'Red light (longer λ) diffracts more than blue light (shorter λ) through the same slit.',
          ]}
        />
        <Mistake>Thinking that a wider gap gives more spreading. A narrower gap, closer to the size of λ, gives more diffraction.</Mistake>
      </>,
    ),
  },
  {
    title: 'Light and dark bands',
    content: slide(
      <>
        <Rule>After a single slit, light and dark bands form. Where the secondary wavelets arrive in phase they interfere constructively and give bright bands, and where they arrive out of phase they interfere destructively and give dark places. The central bright band is the widest and brightest.</Rule>
        <SlitPattern lambda={lamLight} a={slit} />
        <Worked
          title="Red light of 600 nm through a slit of 3,0 µm"
          steps={[
            `λ/a = ${sci(lamLight, 1)} / ${sci(slit, 1)} = ${dc(spreadRatio(lamLight, slit), 2)}.`,
            `The first dark places are at about ±${dc(minAngle)}° from the centre (sin θ = λ/a).`,
            'The bands further out are much fainter than the central band.',
          ]}
        />
        <Mistake>Thinking that all the bands are equally bright. The central band is brightest and the others fade away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a wavefront?</>,
          <>A wave has v = 340 m·s⁻¹ and f = 680 Hz. What is the wavelength?</>,
          <>Which diffracts more through a doorway: sound of λ = 1,0 m or light of λ = 600 nm?</>,
          <>What causes the dark places in a diffraction pattern?</>,
        ]}
        answers={[
          <>An imaginary line that joins points on a wave that are in phase.</>,
          <>λ = v/f = 340 / 680 = {dc(lamSound2, 2)} m.</>,
          <>Sound, because its wavelength is about the size of the gap.</>,
          <>Destructive interference of the secondary wavelets.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a wavefront?",
    options: ["The path that one particle of the medium follows", "The highest point of one single wave", "An imaginary line that joins points on a wave that are in phase", "The line along which a wave is reflected"],
    answer: "An imaginary line that joins points on a wave that are in phase",
    explanation: "A wavefront joins points that are at the same stage of their cycle, for example all at the crest.",
  },
  {
    prompt: "What does Huygens' principle say?",
    options: ["Every point on a wavefront acts as a source of secondary wavelets", "Every wave is made of particles that travel in straight lines", "Every wavefront is perpendicular to the normal", "Every wave slows down when it enters a denser medium"],
    answer: "Every point on a wavefront acts as a source of secondary wavelets",
    explanation: "The new wavefront is the line that touches all the secondary wavelets.",
  },
  {
    prompt: "A wave travels at 340 m·s⁻¹ and has a frequency of 680 Hz. What is its wavelength?",
    options: ["231200 m", "2,00 m", "0,25 m", "0,50 m"],
    answer: "0,50 m",
    explanation: "λ = v/f = 340 / 680 = 0,50 m.",
  },
  {
    prompt: "Which statement describes diffraction?",
    options: ["A wave changes direction when it enters a different medium", "A wave spreads out as it passes through a small gap or round a sharp edge", "A wave bounces off a surface", "A wave changes its frequency when it passes a gap"],
    answer: "A wave spreads out as it passes through a small gap or round a sharp edge",
    explanation: "Diffraction is the spreading of a wave at an aperture or an edge. A change of direction on entering a new medium is refraction.",
  },
  {
    prompt: "Which of these gaps will cause the most diffraction of a wave of wavelength 1,0 m?",
    options: ["A gap 5,0 m wide", "A gap 0,5 m wide", "A gap 10 m wide", "A gap 50 m wide"],
    answer: "A gap 0,5 m wide",
    explanation: "Diffraction is greatest when the gap is about the size of the wavelength or smaller.",
  },
  {
    prompt: "What happens to the diffraction of a wave when the gap is made narrower?",
    options: ["The wave spreads out less", "The wave stops spreading", "The frequency of the wave changes", "The wave spreads out more"],
    answer: "The wave spreads out more",
    explanation: "The narrower the gap compared with the wavelength, the more the wave spreads.",
  },
  {
    prompt: "A sound wave has a wavelength of 0,50 m and a gap is 0,25 m wide. What is the ratio λ/a?",
    options: ["2,0", "0,125", "0,25", "1,0"],
    answer: "2,0",
    explanation: "λ/a = 0,50 / 0,25 = 2,0. A ratio bigger than 1 means strong diffraction.",
  },
  {
    prompt: "Why can you hear a person talking round a corner but you cannot see them?",
    options: ["Sound travels much faster than light does", "Light has a much longer wavelength than sound", "Sound has a much longer wavelength than light has", "Sound is not a wave and so can bend"],
    answer: "Sound has a much longer wavelength than light has",
    explanation: "λ/a is large for sound at a doorway and tiny for light.",
  },
  {
    prompt: "Red light (700 nm) and blue light (450 nm) pass through the same narrow slit. Which diffracts more?",
    options: ["Blue light, because it has the longer wavelength", "They diffract the same amount", "Neither, because light does not diffract", "Red light, because it has the longer wavelength"],
    answer: "Red light, because it has the longer wavelength",
    explanation: "The degree of diffraction increases with the wavelength, so red light spreads more.",
  },
  {
    prompt: "What causes the bright bands in the diffraction pattern of a single slit?",
    options: ["Destructive interference of the secondary wavelets", "Constructive interference of the secondary wavelets", "Reflection from the edges of the slit", "Refraction in the material of the slit"],
    answer: "Constructive interference of the secondary wavelets",
    explanation: "Where the wavelets arrive in phase they add up to give a bright band.",
  },
  {
    prompt: "What causes the dark places in the diffraction pattern of a single slit?",
    options: ["Destructive interference of the secondary wavelets", "Constructive interference of the secondary wavelets", "Absorption by the air", "Total internal reflection"],
    answer: "Destructive interference of the secondary wavelets",
    explanation: "Where wavelets arrive out of phase they cancel, which gives dark places.",
  },
  {
    prompt: "In the diffraction pattern of a single slit, which band is the widest and brightest?",
    options: ["The first band on the left", "The first band on the right", "The central band", "All the bands are equally bright"],
    answer: "The central band",
    explanation: "The central maximum is the widest and brightest, and the bands further out fade.",
  },
  {
    prompt: "According to Huygens' principle, what do the points in the gap of a barrier act as?",
    options: ["Mirrors for the wave", "Absorbers of the wave", "New sources of secondary wavelets", "Sources of a different frequency"],
    answer: "New sources of secondary wavelets",
    explanation: "Each point in the gap emits secondary wavelets, which is why the wave spreads out behind the barrier.",
  },
  {
    prompt: "A wave of wavelength 1,0 m meets a gap that is 20 m wide. How much does the wave spread out behind the gap?",
    options: ["Very little", "Almost in semicircles", "Exactly as much as at a gap of 0,5 m", "It cannot pass through the gap"],
    answer: "Very little",
    explanation: "The gap is much wider than the wavelength (λ/a = 0,05), so there is very little diffraction.",
  },
];

const Diffraction = () => (
  <CapsSubjectTopic
    title="Wavefronts and Diffraction"
    subtitle="Wavefronts, Huygens' principle, diffraction at a gap and the single-slit pattern"
    learnSteps={learnSteps}
    task="gr11-diffraction-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Diffraction;
