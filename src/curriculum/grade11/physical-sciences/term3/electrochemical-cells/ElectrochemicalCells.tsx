import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import SimpleCircuit from '@/components/subjects/PhysicsSim/SimpleCircuit';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ps/term3/electrochemical-cells/diagram.webp", alt: "Electrochemical Cells" },
    title: 'Galvanic Cells',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>galvanic (voltaic) cell</strong> converts chemical energy into electrical energy through a spontaneous redox reaction. It consists of two half-cells connected by a salt bridge.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Anode (−)</strong>
            <Formula block>{String.raw`M \rightarrow M^{n+} + ne^-`}</Formula>
            <p className="text-slate-600">Oxidation occurs at the anode. Metal atoms lose electrons and dissolve into solution.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Cathode (+)</strong>
            <Formula block>{String.raw`X^{n+} + ne^- \rightarrow X`}</Formula>
            <p className="text-slate-600">Reduction occurs at the cathode. Cations gain electrons and are deposited as metal.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Electrochemical Cells',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore how a cell powers a circuit. Adjust parameters and observe how the voltage-current relationship changes.</p>
        <SimpleCircuit />
      </div>
    ),
  },
  {
    title: 'Salt Bridge and Cell EMF',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>salt bridge</strong> maintains electrical neutrality in both half-cells by allowing ion migration without mixing the solutions. Without it, the reaction would stop.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Cell EMF Calculation</p>
          <Formula block>{String.raw`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}`}</Formula>
          <p className="text-slate-600">Use the standard electrode potentials from the EMF series table. A positive cell EMF means the redox reaction is spontaneous.</p>
          <p className="text-slate-600 mt-2">Standard conditions: 1 mol/L solutions, 25°C, 1 atm.</p>
          <p className="text-slate-600">Cell notation is written as <Formula>{String.raw`\text{anode} \mid \text{anode solution} \parallel \text{cathode solution} \mid \text{cathode}`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Standard Electrode Potentials',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>standard EMF series</strong> (reduction potential table) lists half-reactions with their standard electrode potentials (E°). The standard hydrogen electrode (SHE) has <Formula>{String.raw`E^\circ = 0.00\text{ V}`}</Formula>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">More Positive E°</strong>
            <p className="text-slate-600">Better oxidising agent (more easily reduced). Example: <Formula>{String.raw`F_2/F^-`}</Formula> has <Formula>{String.raw`E^\circ = +2.87\text{ V}`}</Formula>.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">More Negative E°</strong>
            <p className="text-slate-600">Better reducing agent (more easily oxidised). Example: <Formula>{String.raw`Li/Li^+`}</Formula> has <Formula>{String.raw`E^\circ = -3.04\text{ V}`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Electrolytic Cells vs Galvanic Cells',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>electrolytic cell</strong> uses electrical energy to drive a non-spontaneous redox reaction. It is the opposite of a galvanic cell.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Galvanic Cell</strong>
            <p className="text-slate-600">Spontaneous reaction, produces electrical energy, and has a negative anode.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Electrolytic Cell</strong>
            <p className="text-slate-600">Non-spontaneous, needs external power, and has a positive anode connected to the power supply.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'At which electrode does oxidation occur in a galvanic cell?',
    options: ['Cathode', 'Both electrodes', 'Anode', 'Neither electrode'],
    answer: 'Anode',
    explanation: 'In a galvanic cell: Oxidation At Anode (OAA), Reduction At Cathode (RAC). The anode is the negative electrode.',
  },
  {
    prompt: 'What is the purpose of the salt bridge in a galvanic cell?',
    options: [
      'To allow electrons to flow between half-cells',
      'To maintain electrical neutrality by allowing ion migration',
      'To speed up the chemical reaction',
      'To act as an electrode',
    ],
    answer: 'To maintain electrical neutrality by allowing ion migration',
    explanation: 'The salt bridge allows ions to migrate between solutions to balance charge, preventing build-up that would stop the reaction.',
  },
  {
    prompt: 'Using E° values: Zn²⁺/Zn E° = −0.76 V; Cu²⁺/Cu E° = +0.34 V. What is the cell EMF for a Zn-Cu galvanic cell?',
    options: ['−1.10 V', '+0.42 V', '+1.10 V', '−0.42 V'],
    answer: '+1.10 V',
    explanation: 'E°_cell = E°_cathode − E°_anode = +0.34 − (−0.76) = +0.34 + 0.76 = 1.10 V. Cu²⁺ is reduced (cathode), Zn is oxidised (anode).',
  },
  {
    prompt: 'In cell notation "Zn | Zn²⁺ ‖ Cu²⁺ | Cu", which is the cathode?',
    options: ['Zn', 'Zn²⁺', 'Cu²⁺', 'Cu'],
    answer: 'Cu',
    explanation: 'In cell notation, the cathode is on the right. Cu is deposited at the cathode (right side) where reduction (Cu²⁺ + 2e⁻ → Cu) occurs.',
  },
  {
    prompt: 'In an electrolytic cell, what is connected to the anode?',
    options: ['The negative terminal of the power source', 'The positive terminal of the power source', 'The salt bridge', 'Nothing'],
    answer: 'The positive terminal of the power source',
    explanation: 'In an electrolytic cell, the anode is connected to the positive (+) terminal. Oxidation still occurs at the anode in both cell types.',
  },
  {
    prompt: 'Which process occurs at the cathode of a galvanic cell?',
    options: ['Oxidation', 'Dissolution of the electrode', 'Reduction', 'Loss of electrons'],
    answer: 'Reduction',
    explanation: 'The cathode is where reduction (gain of electrons) occurs. Cations from solution are deposited as atoms at the cathode.',
  },
  {
    prompt: 'A positive E°_cell value indicates:',
    options: ['A non-spontaneous reaction', 'The reaction requires external power', 'A spontaneous redox reaction', 'Equal electrode potentials'],
    answer: 'A spontaneous redox reaction',
    explanation: 'A positive E°_cell means the cell reaction is thermodynamically spontaneous and will produce electrical energy (galvanic cell).',
  },
  {
    prompt: 'Which of the following is an example of electrolysis being used practically?',
    options: ['A car battery producing electricity', 'Electroplating a metal with copper', 'A zinc-copper galvanic cell', 'Burning hydrogen in oxygen'],
    answer: 'Electroplating a metal with copper',
    explanation: 'Electroplating uses electrolysis (non-spontaneous, powered by external source) to deposit a metal layer onto a surface.',
  },
  {
    prompt: 'What is the standard hydrogen electrode (SHE) E° value?',
    options: ['+1.00 V', '−1.00 V', '+0.34 V', '0.00 V'],
    answer: '0.00 V',
    explanation: 'The SHE (H⁺/H₂ half-cell under standard conditions) is the reference electrode with E° = 0.00 V. All other potentials are measured relative to it.',
  },
];

const ElectrochemicalCells = () => (
  <CapsSubjectTopic
    title="Electrochemical Cells"
    subtitle="Galvanic cells, electrode potentials, EMF and electrolytic cells"
    learnSteps={learnSteps}
    task="gr11-electrochemical-cells-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ElectrochemicalCells;
