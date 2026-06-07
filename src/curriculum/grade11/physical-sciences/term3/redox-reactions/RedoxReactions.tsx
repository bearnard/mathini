import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ps/term3/redox-reactions/diagram.webp", alt: "Redox Reactions" },
    title: 'Oxidation and Reduction — OIL RIG',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Redox reactions</strong> involve the transfer of electrons from one substance to another. Use the mnemonic <strong>OIL RIG</strong> to remember the definitions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">OIL — Oxidation Is Loss</strong>
            <Formula block>{String.raw`Fe \rightarrow Fe^{2+} + 2e^-`}</Formula>
            <p className="text-slate-600">Oxidation is loss of electrons, so the oxidation number increases.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">RIG — Reduction Is Gain</strong>
            <Formula block>{String.raw`Cu^{2+} + 2e^- \rightarrow Cu`}</Formula>
            <p className="text-slate-600">Reduction is gain of electrons, so the oxidation number decreases.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Assigning Oxidation Numbers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Oxidation numbers</strong> (oxidation states) track electron transfer in reactions. Use these rules:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Key Rules:</p>
          <p className="text-slate-600">1. Free elements (uncombined): oxidation number = 0.</p>
          <p className="text-slate-600">2. Monatomic ions: oxidation number = ionic charge.</p>
          <p className="text-slate-600">3. Oxygen in compounds: usually −2, except in peroxides where it is −1.</p>
          <p className="text-slate-600">4. Hydrogen in compounds: usually +1, except in metal hydrides where it is −1.</p>
          <p className="text-slate-600">5. The sum of oxidation numbers equals the overall charge of the species: <Formula>{String.raw`\sum \text{oxidation numbers} = \text{charge}`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Oxidising and Reducing Agents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In every redox reaction, one substance is oxidised and another is reduced. The agents responsible are:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Oxidising Agent</strong>
            <p className="text-slate-600">Causes another substance to be oxidised. It gains electrons and is itself reduced.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Reducing Agent</strong>
            <p className="text-slate-600">Causes another substance to be reduced. It loses electrons and is itself oxidised.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Balancing Redox Half-Reactions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the <strong>half-reaction method</strong>, the overall redox equation is split into an oxidation half-reaction and a reduction half-reaction.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Steps:</p>
          <p className="text-slate-600">1. Write separate half-reactions for oxidation and reduction.</p>
          <p className="text-slate-600">2. Balance atoms, using <Formula>{String.raw`H_2O`}</Formula> for oxygen and <Formula>{String.raw`H^+`}</Formula> for hydrogen in acidic solutions.</p>
          <p className="text-slate-600">3. Balance charge by adding electrons, <Formula>{String.raw`e^-`}</Formula>.</p>
          <p className="text-slate-600">4. Multiply half-reactions so the electrons cancel.</p>
          <p className="text-slate-600">5. Add the half-reactions and simplify.</p>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'In the reaction Zn → Zn²⁺ + 2e⁻, what has happened to zinc?',
    options: ['Zinc has been reduced', 'Zinc has gained electrons', 'Zinc has been oxidised', 'Zinc has been precipitated'],
    answer: 'Zinc has been oxidised',
    explanation: 'Zinc loses 2 electrons (OIL: Oxidation Is Loss of electrons). Its oxidation number increases from 0 to +2.',
  },
  {
    prompt: 'In the reaction Cu²⁺ + 2e⁻ → Cu, what is happening to copper ions?',
    options: ['Copper ions are oxidised', 'Copper ions lose electrons', 'Copper ions are reduced', 'Copper ions become negative'],
    answer: 'Copper ions are reduced',
    explanation: 'Copper ions gain 2 electrons (RIG: Reduction Is Gain of electrons). Oxidation number decreases from +2 to 0.',
  },
  {
    prompt: 'What is the oxidation number of sulfur in H₂SO₄?',
    options: ['+2', '+4', '+6', '−2'],
    answer: '+6',
    explanation: 'H₂SO₄: 2(+1) + S + 4(−2) = 0 → 2 + S − 8 = 0 → S = +6.',
  },
  {
    prompt: 'An oxidising agent in a redox reaction:',
    options: ['Loses electrons and is oxidised', 'Gains electrons and is reduced', 'Gains protons and is reduced', 'Donates electrons to another substance'],
    answer: 'Gains electrons and is reduced',
    explanation: 'The oxidising agent causes oxidation of another substance. In doing so, it gains electrons and is itself reduced.',
  },
  {
    prompt: 'What is the oxidation number of nitrogen in NO₃⁻?',
    options: ['+3', '+5', '−3', '0'],
    answer: '+5',
    explanation: 'NO₃⁻: N + 3(−2) = −1 → N − 6 = −1 → N = +5.',
  },
  {
    prompt: 'In the reaction 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺, which species is oxidised?',
    options: ['Fe³⁺', 'Fe²⁺', 'Sn²⁺', 'Sn⁴⁺'],
    answer: 'Sn²⁺',
    explanation: 'Sn²⁺ loses 2 electrons to become Sn⁴⁺ (oxidation number increases from +2 to +4). Loss of electrons = oxidation.',
  },
  {
    prompt: 'What is the oxidation number of oxygen in H₂O₂ (hydrogen peroxide)?',
    options: ['−2', '−1', '0', '+1'],
    answer: '−1',
    explanation: 'In peroxides (like H₂O₂), the O-O single bond exists. Each H is +1: 2(+1) + 2(O) = 0 → O = −1 (not the usual −2).',
  },
  {
    prompt: 'Which substance acts as the reducing agent in: Zn + CuSO₄ → ZnSO₄ + Cu?',
    options: ['CuSO₄', 'Cu', 'ZnSO₄', 'Zn'],
    answer: 'Zn',
    explanation: 'Zn loses electrons (oxidised from 0 to +2), so Zn is the reducing agent. It causes Cu²⁺ to be reduced to Cu.',
  },
  {
    prompt: 'What does OIL RIG stand for?',
    options: [
      'Oxygen In Liquid, Reaction Is Gas',
      'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)',
      'Oxidation Increases Level, Reduction Increases Grade',
      'Only In Liquid, Reactions Involve Gas',
    ],
    answer: 'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)',
    explanation: 'OIL RIG is a mnemonic: Oxidation Is Loss of electrons; Reduction Is Gain of electrons.',
  },
];

const RedoxReactions = () => (
  <CapsSubjectTopic
    title="Redox Reactions"
    subtitle="Oxidation, reduction, oxidation numbers and identifying redox agents"
    learnSteps={learnSteps}
    task="gr11-redox-reactions-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default RedoxReactions;
