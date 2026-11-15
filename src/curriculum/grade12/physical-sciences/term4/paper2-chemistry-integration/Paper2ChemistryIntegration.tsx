import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

const learnSteps: LearnStep[] = [
  {
    title: 'Link organic structure to likely reaction type',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In Paper 2, the functional group is usually the fastest clue. Alkenes suggest addition, haloalkanes suggest substitution
          or elimination, and an alcohol plus a carboxylic acid suggests esterification.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4 font-mono text-sm text-slate-700">
          alcohol + carboxylic acid → ester + water
        </div>
      </div>
    ),
  },
  {
    title: 'Explain rates and equilibrium in words before symbols',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Chemistry answers earn marks for reasoning as well as calculation. Explain whether the disturbance changes collision
          frequency, activation energy or the equilibrium position before you give the final shift.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Higher concentration → more frequent collisions.</li>
          <li>Higher temperature → more particles exceed activation energy.</li>
          <li>Le Chatelier: the system shifts to oppose the disturbance.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Use acid-base ideas to interpret pH correctly',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Strong acids produce a high concentration of H⁺, while bases increase the OH⁻ concentration. Salt hydrolysis questions
          depend on whether the salt comes from strong or weak acids and bases.
        </p>
        <Formula block>{String.raw`\text{pH} = -\log[H^+]`}</Formula>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Acidic</strong>
            <p className="mt-2 text-slate-600">pH below 7 at 25 °C.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Neutral</strong>
            <p className="mt-2 text-slate-600">pH equal to 7 at 25 °C.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Basic</strong>
            <p className="mt-2 text-slate-600">pH above 7 at 25 °C.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'End with the fixed electrochemistry rules',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Electrochemistry questions become manageable when you keep the non-negotiable rules in mind: oxidation at the anode,
          reduction at the cathode, and a positive cell emf for a spontaneous galvanic cell.
        </p>
        <Formula block>{String.raw`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}`}</Formula>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "paper2-chemistry-integration-1",
    "question": "Esterification between an alcohol and a carboxylic acid produces:",
    "options": [
      "an ester and water",
      "an alkane and oxygen",
      "a salt and hydrogen",
      "an alkene and bromine"
    ],
    "answer": 0,
    "explanation": "Esterification forms an ester and water."
  },
  {
    "id": "paper2-chemistry-integration-2",
    "question": "A catalyst speeds up a reaction mainly by:",
    "options": [
      "increasing activation energy",
      "lowering activation energy",
      "shifting equilibrium permanently",
      "raising the pH"
    ],
    "answer": 1,
    "explanation": "Catalysts lower the activation energy so more collisions are effective."
  },
  {
    "id": "paper2-chemistry-integration-3",
    "question": "Increasing reactant concentration usually makes a reaction faster because there are:",
    "options": [
      "fewer collisions",
      "more frequent collisions",
      "less kinetic energy",
      "fewer particles"
    ],
    "answer": 1,
    "explanation": "Higher concentration means more particles in a given volume and more collisions per second."
  },
  {
    "id": "paper2-chemistry-integration-4",
    "question": "If product is removed from a system at equilibrium, the equilibrium position tends to shift:",
    "options": ['toward more product', 'toward more reactant', 'nowhere because equilibrium is fixed', 'toward the side with fewer particles'],
    "answer": 0,
    "explanation": "The system responds by producing more of the removed product."
  },
  {
    "id": "paper2-chemistry-integration-5",
    "question": "A solution with pH 4 is:",
    "options": [
      "acidic",
      "neutral",
      "basic",
      "always concentrated"
    ],
    "answer": 0,
    "explanation": "Any solution with pH below 7 is acidic at 25 °C."
  },
  {
    "id": "paper2-chemistry-integration-6",
    "question": "According to Brønsted-Lowry theory, an acid is a proton:",
    "options": [
      "acceptor",
      "donor",
      "neutraliser only",
      "catalyst"
    ],
    "answer": 1,
    "explanation": "A Brønsted-Lowry acid donates a proton."
  },
  {
    "id": "paper2-chemistry-integration-7",
    "question": "In an electrochemical cell, oxidation occurs at the:",
    "options": [
      "anode",
      "cathode",
      "salt bridge",
      "load resistor only"
    ],
    "answer": 0,
    "explanation": "Oxidation always occurs at the anode."
  },
  {
    "id": "paper2-chemistry-integration-8",
    "question": "A galvanic cell converts energy from chemical to:",
    "options": [
      "electrical",
      "mechanical",
      "nuclear",
      "elastic"
    ],
    "answer": 0,
    "explanation": "A spontaneous redox reaction in a galvanic cell produces electrical energy."
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


    const Paper2ChemistryIntegration = () => (
      <CapsSubjectTopic
        title="Paper 2 Chemistry Integration"
        subtitle="Organic chemistry, equilibrium, acids-bases and electrochemistry revision"
        learnSteps={topicLearnSteps}
        task="gr12-paper2-chemistry-integration-t4"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default Paper2ChemistryIntegration;
