import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

const learnSteps: LearnStep[] = [
  {
    title: 'Collision theory explains reaction rate',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A reaction happens only when particles collide with enough energy and the correct orientation. Temperature,
          concentration and surface area increase the frequency of effective collisions, while a catalyst lowers the
          activation energy.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Higher temperature</strong>
            <p className="mt-2 text-slate-600">More particles have energy greater than the activation energy.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Catalyst present</strong>
            <p className="mt-2 text-slate-600">An alternative pathway lowers activation energy.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Equilibrium is dynamic, not static',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In a closed system at equilibrium, the forward and reverse reactions continue at the same rate. The amounts
          of reactants and products stay constant because the rates balance, not because the reaction has stopped.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-600">
          Constant concentration at equilibrium means <span className="font-semibold text-slate-800">rate forward = rate reverse</span>.
        </div>
      </div>
    ),
  },
  {
    title: 'Le Chatelier helps you predict equilibrium shifts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          When an equilibrium system is disturbed, it responds in the direction that opposes the change. Add reactant
          and the system usually shifts right; remove product and it also shifts right; increase temperature and treat
          heat as either a reactant or a product.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Exothermic forward reaction: heat behaves like a product.</li>
          <li>Endothermic forward reaction: heat behaves like a reactant.</li>
          <li>A catalyst speeds up both directions equally and does not change the equilibrium position.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Acid-base models connect particles to pH',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Arrhenius acids produce H⁺ in water and Arrhenius bases produce OH⁻. In the Brønsted-Lowry model, an acid is
          a proton donor and a base is a proton acceptor.
        </p>
        <Formula block>{String.raw`\text{pH} = -\log[H^+]`}</Formula>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">pH &lt; 7</strong>
            <p className="mt-2 text-slate-600">Acidic solution at 25 °C.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">pH = 7</strong>
            <p className="mt-2 text-slate-600">Neutral solution at 25 °C.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">pH &gt; 7</strong>
            <p className="mt-2 text-slate-600">Basic solution at 25 °C.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "rates-equilibrium-acids-bases-1",
    "question": "What is the main effect of a catalyst on a reaction?",
    "options": [
      "It increases the activation energy",
      "It lowers the activation energy",
      "It changes the products formed",
      "It is used up completely"
    ],
    "answer": 1,
    "explanation": "A catalyst provides an alternative pathway with lower activation energy."
  },
  {
    "id": "rates-equilibrium-acids-bases-2",
    "question": "Increasing the temperature of a reaction mixture usually increases the rate because:",
    "options": [
      "particles have less kinetic energy",
      "there are fewer collisions",
      "more particles have enough energy to react",
      "the catalyst disappears"
    ],
    "answer": 2,
    "explanation": "At higher temperature, more particles have energy equal to or greater than the activation energy."
  },
  {
    "id": "rates-equilibrium-acids-bases-3",
    "question": "At dynamic equilibrium in a closed system, the forward and reverse reactions have:",
    "options": [
      "equal concentrations",
      "equal rates",
      "stopped completely",
      "zero activation energy"
    ],
    "answer": 1,
    "explanation": "Equilibrium means the forward and reverse rates are equal."
  },
  {
    "id": "rates-equilibrium-acids-bases-4",
    "question": "If more reactant is added to a system at equilibrium, the equilibrium position usually shifts:",
    "options": ['toward the products', 'toward the reactants', 'nowhere because equilibrium is fixed', 'toward the side with fewer particles'],
    "answer": 0,
    "explanation": "The system uses some of the added reactant, so it usually shifts toward the products."
  },
  {
    "id": "rates-equilibrium-acids-bases-5",
    "question": "For an exothermic forward reaction, increasing the temperature shifts equilibrium:",
    "options": [
      "to the right",
      "to the left",
      "nowhere",
      "only if a catalyst is added"
    ],
    "answer": 1,
    "explanation": "Heat behaves like a product in an exothermic reaction, so extra heat shifts equilibrium to the left."
  },
  {
    "id": "rates-equilibrium-acids-bases-6",
    "question": "What is the pH of a 1 × 10^-3 mol·dm^-3 HCl solution?",
    "options": [
      "1",
      "2",
      "3",
      "11"
    ],
    "answer": 2,
    "explanation": "HCl is a strong acid, so [H+] = 10^-3 mol·dm^-3 and pH = 3."
  },
  {
    "id": "rates-equilibrium-acids-bases-7",
    "question": "According to Brønsted-Lowry theory, a base is a proton:",
    "options": [
      "donor",
      "acceptor",
      "neutraliser only",
      "catalyst"
    ],
    "answer": 1,
    "explanation": "A Brønsted-Lowry base accepts a proton."
  },
  {
    "id": "rates-equilibrium-acids-bases-8",
    "question": "Which salt is most likely to form a basic solution in water?",
    "options": [
      "sodium chloride",
      "ammonium chloride",
      "sodium ethanoate",
      "potassium nitrate"
    ],
    "answer": 2,
    "explanation": "Sodium ethanoate comes from a weak acid and strong base, so its solution is basic."
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


    const RatesEquilibriumAcidsBases = () => (
      <CapsSubjectTopic
        title="Reaction Rates, Equilibrium and Acids-Bases"
        subtitle="Collision theory, Le Chatelier, pH and acid-base reasoning"
        learnSteps={topicLearnSteps}
        task="gr12-rates-equilibrium-acids-bases-t2"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default RatesEquilibriumAcidsBases;
