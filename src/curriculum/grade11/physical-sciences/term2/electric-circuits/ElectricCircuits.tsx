import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const SimpleCircuit = dynamic(() => import('@/components/subjects/PhysicsSim/SimpleCircuit'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Current, Voltage and Ohm\'s Law',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Current (I)</strong> is the rate of flow of charge: <Formula>{String.raw`I = \frac{Q}{\Delta t}`}</Formula> (amperes, A). <strong>Potential difference (V)</strong> drives the current (volts, V). <strong>Resistance (R)</strong> opposes current (ohms, Ω).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left">
          <p className="font-bold text-slate-800">Ohm's law and power</p>
          <Formula block>{String.raw`V = IR`}</Formula>
          <Formula block>{String.raw`P = VI = I^2R`}</Formula>
          <p className="text-slate-600">A resistor obeys Ohm's law if R is constant regardless of V and I. On a V-I graph, an ohmic conductor gives a straight line through the origin.</p>
        </div>
        <div className="rounded-xl bg-cyan-50 p-4 text-left">
          <strong className="text-cyan-700">Interactive circuit</strong>
          <p className="text-slate-600 mb-3">Adjust the voltage and resistance to see how <Formula>{String.raw`I = \frac{V}{R}`}</Formula> changes in a simple DC circuit.</p>
          <SimpleCircuit voltage={12} resistance={4} />
        </div>
      </div>
    ),
  },
  {
    title: 'Series Circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a <strong>series circuit</strong>, components are connected end-to-end. There is only one path for current.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Current</strong>
            <Formula block>{String.raw`I_T = I_1 = I_2 = I_3`}</Formula>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Voltage</strong>
            <Formula block>{String.raw`V_T = V_1 + V_2 + V_3`}</Formula>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Resistance</strong>
            <Formula block>{String.raw`R_T = R_1 + R_2 + R_3`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Parallel Circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a <strong>parallel circuit</strong>, components are connected across the same two nodes. There are multiple paths for current.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Voltage</strong>
            <Formula block>{String.raw`V_T = V_1 = V_2 = V_3`}</Formula>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Current</strong>
            <Formula block>{String.raw`I_T = I_1 + I_2 + I_3`}</Formula>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Resistance</strong>
            <Formula block>{String.raw`\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots`}</Formula>
            <p className="text-slate-600">The total resistance is always less than any individual branch resistance.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'EMF and Internal Resistance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A real battery has an <strong>internal resistance (r)</strong> that reduces the terminal voltage when current flows. The <strong>EMF (ε)</strong> is the maximum energy the battery can supply per coulomb.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <Formula block>{String.raw`\varepsilon = V_{\text{terminal}} + Ir`}</Formula>
          <p className="text-slate-600">ε = EMF (V), V_terminal = terminal voltage across the external circuit, I = current (A), r = internal resistance (Ω).</p>
          <p className="text-slate-600 mt-2">As current increases (greater load), the “lost volts” <Formula>{String.raw`Ir`}</Formula> increase, reducing the terminal voltage.</p>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'A 12 V battery drives a current of 3 A through a resistor. What is the resistance?',
    options: ['0.25 Ω', '4 Ω', '36 Ω', '9 Ω'],
    answer: '4 Ω',
    explanation: 'From Ohm\'s law: R = V/I = 12/3 = 4 Ω.',
  },
  {
    prompt: 'Two 6 Ω resistors are connected in series. What is the total resistance?',
    options: ['3 Ω', '6 Ω', '12 Ω', '36 Ω'],
    answer: '12 Ω',
    explanation: 'In series: R_total = R₁ + R₂ = 6 + 6 = 12 Ω.',
  },
  {
    prompt: 'Two 6 Ω resistors are connected in parallel. What is the total resistance?',
    options: ['12 Ω', '6 Ω', '3 Ω', '1 Ω'],
    answer: '3 Ω',
    explanation: '1/R_total = 1/6 + 1/6 = 2/6 = 1/3 → R_total = 3 Ω.',
  },
  {
    prompt: 'In a series circuit, if one bulb burns out, what happens to the other bulbs?',
    options: ['They burn brighter', 'They are unaffected', 'They all go out', 'They flicker'],
    answer: 'They all go out',
    explanation: 'In a series circuit there is only one current path. If one component breaks, the circuit is open and no current flows anywhere.',
  },
  {
    prompt: 'In a parallel circuit, the voltage across each branch is:',
    options: ['Divided equally', 'Zero in all branches', 'The same as the source voltage', 'Added together'],
    answer: 'The same as the source voltage',
    explanation: 'In a parallel circuit, all branches are connected between the same two nodes, so each branch has the same potential difference as the source.',
  },
  {
    prompt: 'A battery has an EMF of 9 V and an internal resistance of 1 Ω. When a current of 2 A flows, what is the terminal voltage?',
    options: ['11 V', '9 V', '7 V', '18 V'],
    answer: '7 V',
    explanation: 'V_terminal = ε − Ir = 9 − (2 × 1) = 9 − 2 = 7 V.',
  },
  {
    prompt: 'What is the power dissipated by a 4 Ω resistor carrying a current of 3 A?',
    options: ['12 W', '36 W', '48 W', '0.75 W'],
    answer: '36 W',
    explanation: 'P = I²R = 3² × 4 = 9 × 4 = 36 W.',
  },
  {
    prompt: 'A 24 V source drives current through a 3 Ω and a 5 Ω resistor in series. What is the current?',
    options: ['8 A', '3 A', '5 A', '0.125 A'],
    answer: '3 A',
    explanation: 'R_total = 3 + 5 = 8 Ω. I = V/R = 24/8 = 3 A.',
  },
  {
    prompt: 'Which statement about a parallel circuit is correct?',
    options: [
      'Total resistance is greater than any individual resistance',
      'Current is the same in all branches',
      'Total resistance is less than the smallest individual resistance',
      'Voltage divides between the branches',
    ],
    answer: 'Total resistance is less than the smallest individual resistance',
    explanation: 'Adding parallel paths provides more routes for current, reducing overall resistance below the smallest branch resistance.',
  },
];

const ElectricCircuits = () => (
  <CapsSubjectTopic
    title="Electric Circuits"
    subtitle="Ohm's law, series and parallel circuits, EMF and internal resistance"
    learnSteps={learnSteps}
    task="gr11-electric-circuits-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ElectricCircuits;
