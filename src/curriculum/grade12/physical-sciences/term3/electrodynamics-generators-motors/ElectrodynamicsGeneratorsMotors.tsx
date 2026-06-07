import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import SimpleCircuit from '@/components/subjects/PhysicsSim/SimpleCircuit';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ps/term3/electrodynamics-generators-motors/diagram.webp", alt: "Electrodynamics: Generators and Motors" },
    title: 'Generators rely on electromagnetic induction',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A generator converts mechanical energy into electrical energy by changing the magnetic flux through a coil.
          Faster rotation or a stronger magnetic field increases the rate of change of flux and therefore the induced emf.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-600">
          Changing flux → induced emf → current in the external circuit.
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Electrodynamics',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore core circuit relationships. Adjust parameters and observe how the power output changes.</p>
        <SimpleCircuit />
      </div>
    ),
  },
  {
    title: 'AC and DC generators differ mainly in their contacts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Both devices use rotating coils, magnets and brushes, but the contact system changes the output. Slip rings
          allow the current to reverse naturally for AC output, while a split-ring commutator flips connections each half turn
          so the current in the external circuit stays in one direction.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">AC generator</strong>
            <p className="mt-2 text-slate-600">Uses slip rings and produces alternating current.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">DC generator</strong>
            <p className="mt-2 text-slate-600">Uses a split-ring commutator and produces one-way current.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Motors use the force on a current-carrying conductor',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A motor works because a current-carrying conductor in a magnetic field experiences a force. Forces on opposite sides
          of the coil form a turning effect, and the split-ring commutator reverses the current every half turn so the torque stays
          in the same rotational direction.
        </p>
      </div>
    ),
  },
  {
    title: 'RMS values compare AC to an equivalent DC effect',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Alternating current changes continuously, so RMS values are used for practical comparisons with direct current.
          For a sinusoidal supply, the RMS value is the peak value divided by the square root of two.
        </p>
        <Formula block>{String.raw`V_{\text{rms}} = \frac{V_{\text{max}}}{\sqrt{2}}`}</Formula>
        <Formula block>{String.raw`I_{\text{rms}} = \frac{I_{\text{max}}}{\sqrt{2}}`}</Formula>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "electrodynamics-generators-motors-1",
    "question": "A generator converts energy from mechanical to:",
    "options": [
      "chemical",
      "electrical",
      "nuclear",
      "sound only"
    ],
    "answer": 1,
    "explanation": "Generators use motion to produce electrical energy."
  },
  {
    "id": "electrodynamics-generators-motors-2",
    "question": "Which component is characteristic of an AC generator?",
    "options": [
      "split-ring commutator",
      "slip rings",
      "salt bridge",
      "diaphragm"
    ],
    "answer": 1,
    "explanation": "AC generators use slip rings to maintain alternating output."
  },
  {
    "id": "electrodynamics-generators-motors-3",
    "question": "A DC motor commonly uses a:",
    "options": [
      "slip ring",
      "split-ring commutator",
      "salt bridge",
      "lens"
    ],
    "answer": 1,
    "explanation": "The split-ring commutator reverses current every half turn in a DC motor."
  },
  {
    "id": "electrodynamics-generators-motors-4",
    "question": "An induced emf is greatest when the rate of change of magnetic flux is:",
    "options": [
      "smallest",
      "zero",
      "greatest",
      "negative only"
    ],
    "answer": 2,
    "explanation": "The faster the magnetic flux changes, the larger the induced emf."
  },
  {
    "id": "electrodynamics-generators-motors-5",
    "question": "If the peak AC voltage is 311 V, the RMS voltage is approximately:",
    "options": [
      "110 V",
      "155 V",
      "220 V",
      "311 V"
    ],
    "answer": 2,
    "explanation": "Vrms = Vmax/√2 = 311/√2 ≈ 220 V."
  },
  {
    "id": "electrodynamics-generators-motors-6",
    "question": "The turning effect in a motor is caused by the force on a:",
    "options": [
      "charged nucleus",
      "current-carrying conductor in a magnetic field",
      "stationary resistor",
      "light ray in a vacuum"
    ],
    "answer": 1,
    "explanation": "A motor works because a current-carrying conductor experiences a force in a magnetic field."
  },
  {
    "id": "electrodynamics-generators-motors-7",
    "question": "In an AC generator, the current direction changes every:",
    "options": [
      "quarter turn only",
      "half turn",
      "full turn only",
      "ten turns"
    ],
    "answer": 1,
    "explanation": "The alternating output reverses direction every half turn."
  },
  {
    "id": "electrodynamics-generators-motors-8",
    "question": "What is the function of brushes in generators and motors?",
    "options": [
      "To increase resistance deliberately",
      "To provide electrical contact with rotating parts",
      "To create magnetic flux only",
      "To store charge chemically"
    ],
    "answer": 1,
    "explanation": "Brushes maintain electrical contact between the rotating coil and the external circuit."
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


    const ElectrodynamicsGeneratorsMotors = () => (
      <CapsSubjectTopic
        title="Electrodynamics: Generators and Motors"
        subtitle="Electromagnetic induction, machine comparison and RMS values"
        learnSteps={topicLearnSteps}
        task="gr12-electrodynamics-generators-motors-t3"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default ElectrodynamicsGeneratorsMotors;
