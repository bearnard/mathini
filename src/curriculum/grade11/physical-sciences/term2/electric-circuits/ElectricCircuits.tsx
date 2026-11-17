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
];

const bank: PSItem[] = [
  {
    prompt: 'A 12 V battery drives a current of 3 A through a resistor. What is the resistance?',
    options: ['0,25 Ω', '4 Ω', '36 Ω', '9 Ω'],
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
    options: ['Divided equally between the branches', 'Zero in all of the branches', 'The same as the source voltage', 'Added together from branch to branch'],
    answer: 'The same as the source voltage',
    explanation: 'In a parallel circuit, all branches are connected between the same two nodes, so each branch has the same potential difference as the source.',
  },
  {
    prompt: 'What is the power dissipated by a 4 Ω resistor carrying a current of 3 A?',
    options: ['12 W', '36 W', '48 W', '0,75 W'],
    answer: '36 W',
    explanation: 'P = I²R = 3² × 4 = 9 × 4 = 36 W.',
  },
  {
    prompt: 'A 24 V source drives current through a 3 Ω and a 5 Ω resistor in series. What is the current?',
    options: ['8 A', '3 A', '5 A', '0,125 A'],
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
  {
    prompt: "A 6 V source drives current through a 2 Ω and a 4 Ω resistor in series. What is the potential difference across the 4 Ω resistor?",
    options: ["4 V", "2 V", "6 V", "1 V"],
    answer: "4 V",
    explanation: "R_total = 2 + 4 = 6 Ω, so I = 6/6 = 1 A. V = IR = 1 × 4 = 4 V.",
  },
];

const ElectricCircuits = () => (
  <CapsSubjectTopic
    title="Electric Circuits"
    subtitle="Ohm's law, and series and parallel circuits"
    learnSteps={learnSteps}
    task="gr11-electric-circuits-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ElectricCircuits;
