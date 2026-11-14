import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import dynamic from 'next/dynamic';

const SimpleCircuit = dynamic(() => import('@/components/subjects/PhysicsSim/SimpleCircuit'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'EMF and terminal voltage describe different energy transfers',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The emf of a cell is the total energy supplied per coulomb, while the terminal voltage is the energy per
          coulomb delivered to the external circuit. As soon as current flows, some energy is lost inside the cell.
        </p>
        <Formula block>{String.raw`\varepsilon = I(R + r)`}</Formula>
        <Formula block>{String.raw`V_{\text{terminal}} = \varepsilon - Ir`}</Formula>
      </div>
    ),
  },
  {
    title: 'Internal resistance causes the lost volts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A real battery has internal resistance <Formula>{String.raw`r`}</Formula>, so part of the emf is used inside the source itself.
          If the current increases, the internal drop <Formula>{String.raw`Ir`}</Formula> gets larger and the terminal voltage becomes smaller.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">No current drawn</strong>
            <p className="mt-2 text-slate-600">Terminal voltage equals the emf.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Current drawn</strong>
            <p className="mt-2 text-slate-600">Terminal voltage is less than emf because of the internal voltage drop.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Series and parallel analysis still matters',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Internal resistance is added to the rest of the circuit analysis, not treated as a separate chapter. In series,
          the current stays the same through each component; in parallel, the potential difference is the same across branches.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4">
          <SimpleCircuit />
        </div>
      </div>
    ),
  },
  {
    title: 'Power can be written in three equivalent forms',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          After finding the correct current or voltage for the component you care about, choose the most direct power formula.
        </p>
        <Formula block>{String.raw`P = VI = I^2R = \frac{V^2}{R}`}</Formula>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Use <Formula>{String.raw`P = VI`}</Formula> when both current and voltage are known.</li>
          <li>Use <Formula>{String.raw`P = I^2R`}</Formula> when the current through a resistor is known.</li>
          <li>Use <Formula>{String.raw`P = \frac{V^2}{R}`}</Formula> when the potential difference across a resistor is known.</li>
        </ul>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "electric-circuits-internal-resistance-1",
    "question": "The emf of a cell is the energy supplied per:",
    "options": [
      "second",
      "ampere",
      "coulomb",
      "ohm"
    ],
    "answer": 2,
    "explanation": "Emf is measured in joules per coulomb."
  },
  {
    "id": "electric-circuits-internal-resistance-2",
    "question": "Which equation correctly links emf, terminal potential difference and internal resistance?",
    "options": [
      "ε = V - Ir",
      "ε = V + Ir",
      "V = ε + I/r",
      "P = VIr"
    ],
    "answer": 1,
    "explanation": "For a discharging cell, ε = V + Ir."
  },
  {
    "id": "electric-circuits-internal-resistance-3",
    "question": "A cell has emf 12 V, internal resistance 0.5 Ω and current 2 A. What is the terminal potential difference?",
    "options": [
      "10 V",
      "11 V",
      "12 V",
      "13 V"
    ],
    "answer": 1,
    "explanation": "V = ε - Ir = 12 - (2 × 0.5) = 11 V."
  },
  {
    "id": "electric-circuits-internal-resistance-4",
    "question": "When a current is drawn from a real cell, the terminal potential difference is usually:",
    "options": [
      "greater than the emf",
      "equal to the emf",
      "less than the emf",
      "always zero"
    ],
    "answer": 2,
    "explanation": "Internal resistance causes a voltage drop, so the terminal voltage becomes smaller than the emf."
  },
  {
    "id": "electric-circuits-internal-resistance-5",
    "question": "What is the equivalent resistance of 2 Ω and 3 Ω resistors connected in series?",
    "options": [
      "1.2 Ω",
      "5 Ω",
      "6 Ω",
      "8 Ω"
    ],
    "answer": 1,
    "explanation": "Series resistances add directly: 2 + 3 = 5 Ω."
  },
  {
    "id": "electric-circuits-internal-resistance-6",
    "question": "What is the equivalent resistance of two 6 Ω resistors connected in parallel?",
    "options": [
      "12 Ω",
      "6 Ω",
      "3 Ω",
      "1.5 Ω"
    ],
    "answer": 2,
    "explanation": "For two equal resistors in parallel, Req is half of one resistor, so 3 Ω."
  },
  {
    "id": "electric-circuits-internal-resistance-7",
    "question": "In a series circuit, the current through each resistor is:",
    "options": [
      "different",
      "the same",
      "always zero",
      "equal to the resistance"
    ],
    "answer": 1,
    "explanation": "There is only one path, so the current is the same through all series components."
  },
  {
    "id": "electric-circuits-internal-resistance-8",
    "question": "A 4 Ω resistor carries a current of 3 A. What power is dissipated?",
    "options": [
      "12 W",
      "24 W",
      "36 W",
      "48 W"
    ],
    "answer": 2,
    "explanation": "P = I²R = 3² × 4 = 36 W."
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


    const ElectricCircuitsInternalResistance = () => (
      <CapsSubjectTopic
        title="Electric Circuits and Internal Resistance"
        subtitle="EMF, terminal potential difference and complex circuit analysis"
        learnSteps={topicLearnSteps}
        task="gr12-electric-circuits-internal-resistance-t3"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default ElectricCircuitsInternalResistance;
