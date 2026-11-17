import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
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
    title: 'Redox Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Integrate oxidation number rules, OIL RIG, oxidising and reducing agents, and half-reactions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Redox Checklist</strong>
            <p className="text-slate-600">Assign oxidation numbers, identify what is oxidised and reduced, name the agents, then write balanced half-reactions.</p>
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
    prompt: 'Why does propan-1-ol (C₃H₇OH) have a higher boiling point than propane (C₃H₈)?',
    options: ['Propan-1-ol has a larger molar mass than propane', 'Propan-1-ol has hydrogen bonds; propane has London forces only', 'Propane is a polar molecule, and the alcohol is not', 'Propan-1-ol has stronger covalent bonds in it'],
    answer: 'Propan-1-ol has hydrogen bonds; propane has London forces only',
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
    prompt: 'HF has a higher boiling point than HCl despite having a lower molar mass. This is because:',
    options: ['HF is an ionic compound, and HCl is not', 'HF has stronger London forces than HCl has', 'HF has hydrogen bonds; HCl has dipole-dipole forces', 'HCl is a non-polar molecule, and HF is polar'],
    answer: 'HF has hydrogen bonds; HCl has dipole-dipole forces',
    explanation: 'HF has H bonded to F, enabling H-bonding (the strongest IMF). HCl\'s H is bonded to Cl, which cannot form H-bonds, so it only has dipole-dipole forces.',
  },
  {
    prompt: "Which type of intermolecular force acts between non-polar molecules such as CH₄?",
    options: ["London (dispersion) forces", "Hydrogen bonds", "Dipole-dipole forces", "Ionic bonds"],
    answer: "London (dispersion) forces",
    explanation: "Non-polar molecules have only London forces, caused by temporary dipoles.",
  },
  {
    prompt: "What is the oxidation number of sulfur in SO₄²⁻?",
    options: ["+6", "+4", "+2", "−2"],
    answer: "+6",
    explanation: "S + 4(−2) = −2, so S = +6.",
  },
  {
    prompt: "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which substance is the reducing agent?",
    options: ["Zn", "Cu²⁺", "Zn²⁺", "Cu"],
    answer: "Zn",
    explanation: "Zn loses electrons (is oxidised), so it is the reducing agent.",
  },
];

const ChemistryConsolidation = () => (
  <CapsSubjectTopic
    title="Chemistry Consolidation"
    subtitle="Integrated review of Grade 11 intermolecular forces and redox reactions"
    learnSteps={learnSteps}
    task="gr11-chemistry-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ChemistryConsolidation;
