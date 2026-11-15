import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import SimpleCircuit from '@/components/subjects/PhysicsSim/SimpleCircuit';

const learnSteps: LearnStep[] = [
  {
    title: 'Compare the energy conversions across devices',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Paper 1 often mixes generators, motors and photoelectric setups in one revision section. Start by asking what energy
          goes in and what useful form comes out.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Generator</strong>
            <p className="mt-2 text-slate-600">Mechanical → electrical energy.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Motor</strong>
            <p className="mt-2 text-slate-600">Electrical → mechanical energy.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Photoelectric setup</strong>
            <p className="mt-2 text-slate-600">Light energy → kinetic energy of emitted electrons.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use induction and RMS relationships precisely',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          When magnetic flux changes more quickly, the induced emf gets larger. For AC calculations, convert between peak and
          effective values with the RMS relationship.
        </p>
        <Formula block>{String.raw`V_{\text{rms}} = \frac{V_{\text{max}}}{\sqrt{2}}`}</Formula>
        <Formula block>{String.raw`I_{\text{rms}} = \frac{I_{\text{max}}}{\sqrt{2}}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Modern physics questions depend on threshold ideas',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In the photoelectric effect, no electrons are emitted below threshold frequency. Above threshold, intensity changes the
          number of electrons, while frequency changes their maximum kinetic energy.
        </p>
        <Formula block>{String.raw`E = hf`}</Formula>
        <Formula block>{String.raw`E_k = hf - W_0`}</Formula>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Electrodynamics Revision',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore revision-ready circuit behaviour. Adjust parameters and observe how the resistance effect changes.</p>
        <SimpleCircuit />
      </div>
    ),
  },
  {
    title: 'Read spectra and red-shift language carefully',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Emission spectra show bright lines and absorption spectra show dark lines. In astronomy, red shift means longer wavelength
          and lower observed frequency, so the source is moving away from the observer.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Bright lines → atoms emitted those wavelengths.</li>
          <li>Dark lines → those wavelengths were absorbed.</li>
          <li>Red shift → distant galaxies receding, supporting expansion of the universe.</li>
        </ul>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "paper1-electrodynamics-optics-skills-1",
    "question": "An AC generator produces:",
    "options": [
      "direct current only",
      "alternating current",
      "chemical energy",
      "light only"
    ],
    "answer": 1,
    "explanation": "An AC generator produces alternating current."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-2",
    "question": "If the peak current is 10 A, the RMS current is about:",
    "options": [
      "5.0 A",
      "7.1 A",
      "10 A",
      "14.1 A"
    ],
    "answer": 1,
    "explanation": "Irms = Imax/√2 = 10/√2 ≈ 7.1 A."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-3",
    "question": "An electric motor converts energy from electrical to:",
    "options": [
      "chemical",
      "mechanical",
      "nuclear",
      "gravitational only"
    ],
    "answer": 1,
    "explanation": "Motors use electrical energy to produce mechanical motion."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-4",
    "question": "No photoelectrons are emitted when the incident light frequency is:",
    "options": [
      "above the threshold frequency",
      "equal to the threshold frequency",
      "below the threshold frequency",
      "very intense"
    ],
    "answer": 2,
    "explanation": "Below threshold frequency, each photon has too little energy to release an electron."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-5",
    "question": "An emission spectrum is identified by:",
    "options": ['dark lines in a continuous spectrum of light', 'bright lines at specific wavelengths', 'all colours equally bright', 'a smooth continuous band of colours'],
    "answer": 1,
    "explanation": "Emission spectra show bright lines corresponding to allowed electron transitions."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-6",
    "question": "Increasing the rate of change of magnetic flux through a coil makes the induced emf:",
    "options": [
      "smaller",
      "unchanged",
      "larger",
      "always zero"
    ],
    "answer": 2,
    "explanation": "A faster change in magnetic flux induces a larger emf."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-7",
    "question": "Red shift in light from distant galaxies suggests that the universe is:",
    "options": [
      "collapsing",
      "expanding",
      "completely static",
      "made of only hydrogen"
    ],
    "answer": 1,
    "explanation": "Widespread red shift shows many galaxies are moving away from us."
  },
  {
    "id": "paper1-electrodynamics-optics-skills-8",
    "question": "The photoelectric effect shows that light can behave as:",
    "options": ['a liquid flowing in a tube', 'particles called photons', 'a resistor in a circuit', 'a neutral salt in solution'],
    "answer": 1,
    "explanation": "Photoelectric emission is explained by photons transferring discrete packets of energy."
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


    const Paper1ElectrodynamicsOpticsSkills = () => (
      <CapsSubjectTopic
        title="Paper 1 Electrodynamics and Optics Revision"
        subtitle="Generators, motors, modern physics and exam interpretation skills"
        learnSteps={topicLearnSteps}
        task="gr12-paper1-electrodynamics-optics-skills-t4"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default Paper1ElectrodynamicsOpticsSkills;
