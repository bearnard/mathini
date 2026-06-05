import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

const learnSteps: LearnStep[] = [
  {
    title: 'Oxidation and reduction always occur together',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Redox reactions involve electron transfer. One species loses electrons and is oxidised, while another gains
          electrons and is reduced, so the two processes are inseparable.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Oxidation</strong>
            <p className="mt-2 text-slate-600">Loss of electrons occurs at the anode.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Reduction</strong>
            <p className="mt-2 text-slate-600">Gain of electrons occurs at the cathode.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Galvanic cells produce electricity from a spontaneous reaction',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A galvanic cell separates the oxidation and reduction half-reactions so that electrons flow through the
          external circuit. The salt bridge completes the circuit by allowing ions to move and keep both half-cells neutral.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-600">
          Electrons travel through the wire from the <span className="font-semibold text-slate-800">anode</span> to the
          <span className="font-semibold text-slate-800"> cathode</span>.
        </div>
      </div>
    ),
  },
  {
    title: 'Electrolytic cells force non-spontaneous reactions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Electrolysis needs an external energy source. The same electrode rules still apply: oxidation at the anode and
          reduction at the cathode. This is why electroplating deposits metal onto the cathode and electrorefining dissolves
          impure metal at the anode.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Electroplating: the object being coated is the cathode.</li>
          <li>Copper refining: impure copper is the anode and pure copper is the cathode.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Cell potential summarises the tendency for reaction',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          When standard reduction potentials are given, the cell emf is calculated by subtracting the anode value from
          the cathode value. A positive cell emf means the galvanic reaction is spontaneous under standard conditions.
        </p>
        <Formula block>{String.raw`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}`}</Formula>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "electrochemical-reactions-1",
    "question": "At which electrode does oxidation occur in an electrochemical cell?",
    "options": [
      "anode",
      "cathode",
      "salt bridge",
      "voltmeter"
    ],
    "answer": 0,
    "explanation": "Oxidation always occurs at the anode."
  },
  {
    "id": "electrochemical-reactions-2",
    "question": "Reduction takes place at the:",
    "options": [
      "anode",
      "cathode",
      "resistor",
      "electrolyte junction only"
    ],
    "answer": 1,
    "explanation": "Reduction always occurs at the cathode."
  },
  {
    "id": "electrochemical-reactions-3",
    "question": "What is the main role of the salt bridge in a galvanic cell?",
    "options": [
      "To supply electrons directly",
      "To complete the circuit by ion movement",
      "To increase the mass of the electrodes",
      "To stop all chemical reactions"
    ],
    "answer": 1,
    "explanation": "The salt bridge allows ions to move and keeps the half-cells electrically neutral."
  },
  {
    "id": "electrochemical-reactions-4",
    "question": "Which expression is used to calculate standard cell emf from reduction potentials?",
    "options": [
      "Ecell = Ecathode - Eanode",
      "Ecell = Eanode - Ecathode",
      "Ecell = Ir",
      "Ecell = qV"
    ],
    "answer": 0,
    "explanation": "For standard reduction potentials, Ecell = Ecathode - Eanode."
  },
  {
    "id": "electrochemical-reactions-5",
    "question": "A galvanic cell converts energy from chemical to:",
    "options": [
      "nuclear",
      "thermal only",
      "electrical",
      "light only"
    ],
    "answer": 2,
    "explanation": "A spontaneous redox reaction in a galvanic cell produces electrical energy."
  },
  {
    "id": "electrochemical-reactions-6",
    "question": "Electrolysis requires:",
    "options": [
      "a spontaneous reaction only",
      "an external electrical energy source",
      "no electrodes",
      "no ions in solution"
    ],
    "answer": 1,
    "explanation": "Electrolytic cells need electrical energy to force a non-spontaneous reaction."
  },
  {
    "id": "electrochemical-reactions-7",
    "question": "During electroplating, the object that is being plated is usually the:",
    "options": [
      "anode",
      "cathode",
      "salt bridge",
      "electrolyte"
    ],
    "answer": 1,
    "explanation": "Metal ions are reduced onto the object, so the object being plated is the cathode."
  },
  {
    "id": "electrochemical-reactions-8",
    "question": "In copper refining by electrolysis, the impure copper is used as the:",
    "options": [
      "cathode",
      "anode",
      "salt bridge",
      "voltmeter"
    ],
    "answer": 1,
    "explanation": "Impure copper is made the anode so that copper atoms can oxidise into solution."
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


    const ElectrochemicalReactions = () => (
      <CapsSubjectTopic
        title="Electrochemical Reactions"
        subtitle="Galvanic cells, electrolysis, half-reactions and industrial applications"
        learnSteps={topicLearnSteps}
        task="gr12-electrochemical-reactions-t3"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default ElectrochemicalReactions;
