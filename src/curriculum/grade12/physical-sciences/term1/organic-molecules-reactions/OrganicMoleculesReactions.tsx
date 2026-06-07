import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ps/term1/organic-molecules-reactions/diagram.webp", alt: "Organic Molecules and Reactions" },
    title: 'Homologous series are organised by functional groups',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A homologous series is a family of organic compounds with the same functional group and similar
          chemical behaviour. Members usually differ from one another by a <span className="font-semibold text-slate-800">CH₂</span>
          {' '}unit, so physical properties such as boiling point change gradually as chain length increases.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Alkanes</strong>
            <p className="mt-2 text-slate-600">Single bonds only, relatively unreactive and often undergo substitution.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Alkenes</strong>
            <p className="mt-2 text-slate-600">Contain a C=C bond and commonly undergo addition reactions.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Alcohols / acids</strong>
            <p className="mt-2 text-slate-600">Recognised by -OH and -COOH functional groups.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'IUPAC naming follows a step-by-step method',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          First find the longest carbon chain, then number it so the main functional group or multiple bond
          gets the lowest possible number. The prefix shows the number of carbons and the suffix reveals the
          functional group.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Identify the parent chain.</li>
          <li>Locate and number substituents or multiple bonds.</li>
          <li>Choose the correct suffix such as -ane, -ene, -ol or -oic acid.</li>
        </ol>
        <div className="rounded-2xl bg-slate-50 p-4 font-mono text-sm text-slate-700">
          CH₃CH₂OH → ethanol &nbsp;|&nbsp; CH₃CH=CH₂ → prop-1-ene
        </div>
      </div>
    ),
  },
  {
    title: 'Isomers share a formula but not a structure',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Structural isomers have the same molecular formula but different arrangements of atoms. That change
          in structure affects shape, boiling point and sometimes the type of reaction the compound can undergo.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li><span className="font-semibold text-slate-800">Chain isomers:</span> different carbon skeletons.</li>
          <li><span className="font-semibold text-slate-800">Positional isomers:</span> same functional group, different position.</li>
          <li><span className="font-semibold text-slate-800">Functional isomers:</span> same formula, different functional groups.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Organic reactions follow recognisable patterns',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Grade 12 reaction questions become easier once you recognise the pattern first and then identify the
          product. Balanced molecular equations are usually written in words or condensed structural form.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-slate-700">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Addition</strong>
            <p className="mt-2 font-mono text-sm">CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <strong className="text-lime-700">Elimination</strong>
            <p className="mt-2 font-mono text-sm">CH₃CH₂Br → CH₂=CH₂ + HBr</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Substitution</strong>
            <p className="mt-2 font-mono text-sm">CH₄ + Cl₂ → CH₃Cl + HCl</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Esterification</strong>
            <p className="mt-2 font-mono text-sm">ethanoic acid + ethanol → ethyl ethanoate + water</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "organic-molecules-reactions-1",
    "question": "Which suffix is used for alcohols in IUPAC naming?",
    "options": [
      "-ane",
      "-ene",
      "-ol",
      "-al"
    ],
    "answer": 2,
    "explanation": "Alcohol names end in -ol, for example ethanol or propan-1-ol."
  },
  {
    "id": "organic-molecules-reactions-2",
    "question": "What is the functional group of a carboxylic acid?",
    "options": [
      "-OH",
      "-CHO",
      "-COOH",
      "-X"
    ],
    "answer": 2,
    "explanation": "Carboxylic acids contain the -COOH group."
  },
  {
    "id": "organic-molecules-reactions-3",
    "question": "Compounds with the same molecular formula but different structural formulae are called:",
    "options": [
      "homologues",
      "isomers",
      "polymers",
      "electrolytes"
    ],
    "answer": 1,
    "explanation": "Isomers share a molecular formula but differ in how atoms are arranged."
  },
  {
    "id": "organic-molecules-reactions-4",
    "question": "Successive members of the same homologous series usually differ by a:",
    "options": [
      "CH2 unit",
      "single hydrogen atom",
      "COOH group",
      "double bond"
    ],
    "answer": 0,
    "explanation": "Members of a homologous series typically differ by one CH2 group."
  },
  {
    "id": "organic-molecules-reactions-5",
    "question": "Ethene reacts with bromine in an example of a(n):",
    "options": [
      "substitution reaction",
      "addition reaction",
      "elimination reaction",
      "esterification reaction"
    ],
    "answer": 1,
    "explanation": "An alkene such as ethene undergoes addition because atoms add across the C=C double bond."
  },
  {
    "id": "organic-molecules-reactions-6",
    "question": "Which organic product forms when HBr is eliminated from bromoethane?",
    "options": [
      "ethane",
      "ethene",
      "ethanol",
      "ethanoic acid"
    ],
    "answer": 1,
    "explanation": "Elimination removes atoms and creates a double bond, producing ethene."
  },
  {
    "id": "organic-molecules-reactions-7",
    "question": "Why does ethanol have a higher boiling point than ethane?",
    "options": [
      "Ethanol is always a gas",
      "Ethanol forms hydrogen bonds",
      "Ethanol has fewer electrons",
      "Ethanol contains a double bond"
    ],
    "answer": 1,
    "explanation": "Alcohol molecules can form hydrogen bonds, which are stronger than the intermolecular forces in ethane."
  },
  {
    "id": "organic-molecules-reactions-8",
    "question": "Esterification between an alcohol and a carboxylic acid forms:",
    "options": [
      "an alkane and oxygen",
      "an alkene and hydrogen",
      "an ester and water",
      "a salt and chlorine"
    ],
    "answer": 2,
    "explanation": "Esterification produces an ester and water."
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


    const OrganicMoleculesReactions = () => (
      <CapsSubjectTopic
        title="Organic Molecules and Reactions"
        subtitle="Functional groups, naming, isomers and key organic reactions"
        learnSteps={topicLearnSteps}
        task="gr12-organic-molecules-reactions-t1"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default OrganicMoleculesReactions;
