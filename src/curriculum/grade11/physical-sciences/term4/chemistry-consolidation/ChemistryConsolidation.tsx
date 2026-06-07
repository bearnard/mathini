import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ps/term4/chemistry-consolidation/diagram.webp", alt: "Chemistry Consolidation" },
    title: 'Organic Chemistry Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidate IUPAC naming, functional groups, and physical property trends in organic chemistry.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Naming Checklist</strong>
            <p className="text-slate-600">1. Longest carbon chain (stem). 2. Identify the functional group (suffix). 3. Number from the end nearest the principal group. 4. Name and locate substituents.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Key Suffixes</strong>
            <p className="text-slate-600">-ane, -ene, -ol, -al, -one, -oic acid, -oate, and -amine are the key suffixes to recognise quickly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Intermolecular Forces and Properties Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Link molecular structure to physical properties using IMF reasoning.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">IMF Strength Hierarchy</p>
          <Formula block>{String.raw`\text{London forces} < \text{Dipole-dipole} < \text{Hydrogen bonding}`}</Formula>
          <p className="text-slate-600 mt-2">To explain a higher boiling point, identify the IMF type and state that stronger forces require more energy to separate the molecules.</p>
          <p className="text-slate-600 mt-2">Polarity check: symmetrical molecules have cancelling dipoles, while asymmetrical molecules can be polar.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Redox and Electrochemistry Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Integrate oxidation number rules, OIL RIG, half-reactions, and cell analysis.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Redox Checklist</strong>
            <p className="text-slate-600">Assign oxidation numbers, identify what is oxidised and reduced, name the agents, then write balanced half-reactions.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Cell Checklist</strong>
            <Formula block>{String.raw`E^\circ_{\text{cell}} = E^\circ_{\text{cat}} - E^\circ_{\text{an}}`}</Formula>
            <p className="text-slate-600">Galvanic cells are spontaneous with a negative anode and positive cathode. Electrolytic cells are non-spontaneous and need external power.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam Response Strategies for Chemistry',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 2 (Chemistry) rewards clear, specific responses. Use key scientific language.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Explanation Questions</strong>
            <p className="text-slate-600">Always link structure → IMF type → property. For example, ethanol has an <Formula>{String.raw`-OH`}</Formula> group, so it can form hydrogen bonds and has a higher boiling point than dimethyl ether.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Structural Formula Questions</strong>
            <p className="text-slate-600">Show all bonds and atoms clearly. Check carbon valency carefully and make sure the functional group is correctly placed.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'What is the IUPAC name of CH₃CH₂CH₂COOH?',
    options: ['Propanoic acid', 'Butanoic acid', 'Pentanoic acid', 'Ethanoic acid'],
    answer: 'Butanoic acid',
    explanation: 'The compound has 4 carbons and a –COOH group. Parent chain: but-. Functional group: -oic acid. IUPAC name: butanoic acid.',
  },
  {
    prompt: 'Why does propan-1-ol (C₃H₇OH) have a higher boiling point than propane (C₃H₈)?',
    options: [
      'Propan-1-ol has a larger molar mass',
      'Propan-1-ol forms hydrogen bonds due to the –OH group; propane only has London forces',
      'Propane is non-polar',
      'Propan-1-ol has stronger covalent bonds',
    ],
    answer: 'Propan-1-ol forms hydrogen bonds due to the –OH group; propane only has London forces',
    explanation: 'The –OH group enables H-bonding in propan-1-ol, which is much stronger than the London forces in propane, resulting in a much higher boiling point.',
  },
  {
    prompt: 'In a reaction, substance X loses electrons. X is:',
    options: ['An oxidising agent', 'Reduced', 'A reducing agent', 'Neither oxidised nor reduced'],
    answer: 'A reducing agent',
    explanation: 'A substance that loses electrons is oxidised. A substance that is oxidised acts as the reducing agent (it reduces the other substance).',
  },
  {
    prompt: 'What is the oxidation number of chromium in Cr₂O₇²⁻?',
    options: ['+3', '+6', '+7', '+4'],
    answer: '+6',
    explanation: 'In Cr₂O₇²⁻: 2(Cr) + 7(−2) = −2 → 2Cr = −2 + 14 = +12 → Cr = +6.',
  },
  {
    prompt: 'In the half-reaction MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, manganese is:',
    options: ['Oxidised from +7 to +2', 'Reduced from +7 to +2', 'Unchanged', 'Oxidised from +2 to +7'],
    answer: 'Reduced from +7 to +2',
    explanation: 'In MnO₄⁻, Mn has oxidation number +7. In Mn²⁺, it is +2. The oxidation number decreases (gain of electrons = reduction).',
  },
  {
    prompt: 'A galvanic cell uses Cu (E° = +0.34 V) as cathode and Fe (E° = −0.44 V) as anode. What is E°_cell?',
    options: ['−0.78 V', '+0.78 V', '+0.10 V', '−0.10 V'],
    answer: '+0.78 V',
    explanation: 'E°_cell = E°_cathode − E°_anode = +0.34 − (−0.44) = +0.34 + 0.44 = +0.78 V.',
  },
  {
    prompt: 'Which functional group is characteristic of esters?',
    options: ['–OH', '–CHO', '–COO–', '–COOH'],
    answer: '–COO–',
    explanation: 'Esters contain the –COO– linkage (ester bond), formed from a carboxylic acid and an alcohol by a condensation reaction.',
  },
  {
    prompt: 'HF has a higher boiling point than HCl despite having a lower molar mass. This is because:',
    options: ['HF is ionic', 'HF has stronger London forces', 'HF forms hydrogen bonds; HCl only has dipole-dipole forces', 'HCl is non-polar'],
    answer: 'HF forms hydrogen bonds; HCl only has dipole-dipole forces',
    explanation: 'HF has H bonded to F, enabling H-bonding (the strongest IMF). HCl\'s H is bonded to Cl, which cannot form H-bonds, so it only has dipole-dipole forces.',
  },
];

const ChemistryConsolidation = () => (
  <CapsSubjectTopic
    title="Chemistry Consolidation"
    subtitle="Integrated review of Grade 11 organic chemistry and electrochemistry"
    learnSteps={learnSteps}
    task="gr11-chemistry-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ChemistryConsolidation;
