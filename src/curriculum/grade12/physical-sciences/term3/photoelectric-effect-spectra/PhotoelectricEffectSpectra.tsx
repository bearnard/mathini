import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import WaveInterference from '@/components/subjects/PhysicsSim/WaveInterference';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ps/term3/photoelectric-effect-spectra/diagram.webp", alt: "Photoelectric Effect and Atomic Spectra" },
    title: 'Light can behave as packets of energy',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In the photoelectric effect, light transfers energy in discrete packets called photons. One photon interacts with
          one electron, which explains why frequency matters more than brightness when deciding whether electrons are emitted.
        </p>
        <Formula block>{String.raw`E = hf`}</Formula>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Light Waves',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore light as a wave. Adjust parameters and observe how the interference pattern changes.</p>
        <WaveInterference />
      </div>
    ),
  },
  {
    title: 'Threshold frequency is the minimum requirement',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Each metal has a work function, which is the minimum energy needed to free an electron. If the photon frequency is
          below the threshold frequency, no electrons are emitted even if the light intensity is increased.
        </p>
        <Formula block>{String.raw`W_0 = hf_0`}</Formula>
        <Formula block>{String.raw`E_k = hf - W_0`}</Formula>
      </div>
    ),
  },
  {
    title: 'Frequency and intensity change different outcomes',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Above threshold frequency, increasing the intensity sends more photons each second, so more electrons can be emitted.
          Increasing the frequency gives each photon more energy, so the maximum kinetic energy of the emitted electrons increases.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Increase intensity</strong>
            <p className="mt-2 text-slate-600">More emitted electrons, but not more energy per photon.</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <strong className="text-violet-700">Increase frequency</strong>
            <p className="mt-2 text-slate-600">Higher maximum kinetic energy of the photoelectrons.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Line spectra reveal quantised atomic energy levels',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Emission spectra contain bright lines produced when electrons drop to lower energy levels and emit photons.
          Absorption spectra show dark lines where specific wavelengths are removed. These patterns are evidence that atoms
          have fixed, quantised energy levels.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Emission spectrum</strong>
            <p className="mt-2 text-slate-600">Bright lines at specific wavelengths.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Absorption spectrum</strong>
            <p className="mt-2 text-slate-600">Dark lines in a continuous spectrum.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "photoelectric-effect-spectra-1",
    "question": "If the frequency of incident light is below the threshold frequency for a metal, photoelectrons will:",
    "options": [
      "always be emitted",
      "not be emitted",
      "move faster but not leave the metal",
      "emit only at low intensity"
    ],
    "answer": 1,
    "explanation": "Below threshold frequency, each photon has too little energy to free an electron."
  },
  {
    "id": "photoelectric-effect-spectra-2",
    "question": "For light above threshold frequency, increasing the intensity mainly increases the:",
    "options": [
      "work function",
      "number of emitted electrons",
      "speed of light",
      "threshold frequency"
    ],
    "answer": 1,
    "explanation": "Higher intensity means more photons per second, so more electrons can be emitted."
  },
  {
    "id": "photoelectric-effect-spectra-3",
    "question": "For light above threshold frequency, increasing the frequency increases the emitted electrons' maximum:",
    "options": [
      "mass",
      "charge",
      "kinetic energy",
      "number only"
    ],
    "answer": 2,
    "explanation": "Higher frequency means photons carry more energy, so emitted electrons can leave with greater kinetic energy."
  },
  {
    "id": "photoelectric-effect-spectra-4",
    "question": "The threshold frequency of photoelectric emission depends on the metal's:",
    "options": [
      "colour only",
      "work function",
      "shape only",
      "temperature only"
    ],
    "answer": 1,
    "explanation": "Different metals have different work functions, so each has its own threshold frequency."
  },
  {
    "id": "photoelectric-effect-spectra-5",
    "question": "An emission spectrum consists of:",
    "options": [
      "dark lines on a continuous background",
      "bright lines at specific wavelengths",
      "all wavelengths equally",
      "only radio waves"
    ],
    "answer": 1,
    "explanation": "Emission spectra show bright lines at specific wavelengths emitted by excited atoms."
  },
  {
    "id": "photoelectric-effect-spectra-6",
    "question": "An absorption spectrum is recognised by:",
    "options": [
      "bright lines only",
      "dark lines in a continuous spectrum",
      "a single wavelength only",
      "no visible pattern"
    ],
    "answer": 1,
    "explanation": "Specific wavelengths are absorbed, leaving dark lines in the continuous spectrum."
  },
  {
    "id": "photoelectric-effect-spectra-7",
    "question": "The photoelectric effect supports the particle model of light because light transfers energy in:",
    "options": [
      "continuous waves only",
      "packets called photons",
      "magnetic poles",
      "electric circuits"
    ],
    "answer": 1,
    "explanation": "The effect is explained by photons transferring discrete energy packets."
  },
  {
    "id": "photoelectric-effect-spectra-8",
    "question": "Line spectra provide evidence that atomic electrons occupy:",
    "options": [
      "any energy at all",
      "random positions only",
      "quantised energy levels",
      "only the nucleus"
    ],
    "answer": 2,
    "explanation": "Only specific electron transitions occur, so atoms have quantised energy levels."
  }
];

    const bank: CapsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));
const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title!,
  content: step.content,
}));


    const PhotoelectricEffectSpectra = () => (
      <CapsSubjectTopic
        title="Photoelectric Effect and Atomic Spectra"
        subtitle="Photons, threshold frequency and line spectra evidence"
        learnSteps={topicLearnSteps}
        task="gr12-photoelectric-effect-spectra-t3"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default PhotoelectricEffectSpectra;
