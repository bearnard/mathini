import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Chemical Reactions and Balanced Equations',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          A <strong>chemical reaction</strong> transforms reactants into products. A <strong>chemical equation</strong> represents this symbolically.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Balanced Equation</h4>
          <p className="text-slate-700 mb-2">
            Same number of each type of atom on both sides (law of conservation of mass):
          </p>
          <Formula block>{String.raw`2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            4 H atoms and 2 O atoms on both sides.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Balancing Steps</h4>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>Write the unbalanced equation</li>
            <li>Count atoms of each element on both sides</li>
            <li>Add coefficients (whole numbers) to balance</li>
            <li>Check that all atoms balance</li>
          </ol>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> Balance CH₄ + O₂ → CO₂ + H₂O
          <br />Answer: CH₄ + 2O₂ → CO₂ + 2H₂O
        </p>
      </div>
    ),
  },
  {
    title: 'The Mole Concept and Molar Mass',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          A <strong>mole</strong> is 6.022 × 10²³ particles (Avogadro's number). It connects atomic scale to measurable quantities.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Number of Particles</h4>
          <Formula block>{String.raw`N = n \times N_A`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>N</em> = number of particles, <em>n</em> = moles, N<sub>A</sub> = 6.022 × 10²³ mol⁻¹.
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Molar Mass</h4>
          <Formula block>{String.raw`n = \frac{m}{M}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>n</em> = moles, <em>m</em> = mass (g), <em>M</em> = molar mass (g/mol).
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> Water (H₂O): M = 2(1) + 16 = 18 g/mol.
            <br />36 g of water = 36/18 = 2 moles.
          </p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Gas Volume (at STP)</h4>
          <Formula block>{String.raw`V = n \times 22.4 \text{ L}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            At STP (0°C, 1 atm), 1 mole of any gas occupies 22.4 L.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Stoichiometric Calculations',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Stoichiometry</strong> uses balanced equations to calculate quantities of reactants and products.
        </p>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Mole Ratios</h4>
          <p className="text-slate-700 mb-2">
            Coefficients in balanced equation give mole ratios:
          </p>
          <Formula block>{String.raw`\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            1 mole N₂ : 3 moles H₂ : 2 moles NH₃
          </p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Calculation Steps</h4>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>Write balanced equation</li>
            <li>Convert given quantity to moles</li>
            <li>Use mole ratio to find moles of desired substance</li>
            <li>Convert moles to desired units (mass, volume, particles)</li>
          </ol>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Example</h4>
          <p className="text-slate-700">
            How many grams of NH₃ form from 14 g of N₂?
            <br /><strong>Solution:</strong>
            <br />M(N₂) = 28 g/mol, M(NH₃) = 17 g/mol
            <br />n(N₂) = 14/28 = 0.5 mol
            <br />From ratio: n(NH₃) = 0.5 × 2 = 1 mol
            <br />m(NH₃) = 1 × 17 = 17 g
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of Chemical Reactions',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          Chemical reactions can be classified into main types based on reactant and product patterns.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-pink-50 p-3 rounded border border-pink-200">
            <h5 className="font-semibold text-pink-900 mb-2">Synthesis</h5>
            <p className="text-sm text-slate-700 mb-1">A + B → AB</p>
            <p className="text-xs text-slate-600">2Mg + O₂ → 2MgO</p>
          </div>
          <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
            <h5 className="font-semibold text-cyan-900 mb-2">Decomposition</h5>
            <p className="text-sm text-slate-700 mb-1">AB → A + B</p>
            <p className="text-xs text-slate-600">2H₂O → 2H₂ + O₂</p>
          </div>
          <div className="bg-lime-50 p-3 rounded border border-lime-200">
            <h5 className="font-semibold text-lime-900 mb-2">Single Replacement</h5>
            <p className="text-sm text-slate-700 mb-1">A + BC → AC + B</p>
            <p className="text-xs text-slate-600">Zn + 2HCl → ZnCl₂ + H₂</p>
          </div>
          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <h5 className="font-semibold text-amber-900 mb-2">Double Replacement</h5>
            <p className="text-sm text-slate-700 mb-1">AB + CD → AD + CB</p>
            <p className="text-xs text-slate-600">NaCl + AgNO₃ → NaNO₃ + AgCl</p>
          </div>
        </div>
        <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
          <h4 className="font-semibold text-violet-900 mb-2">Combustion Reactions</h4>
          <p className="text-slate-700 mb-2">
            Hydrocarbon + oxygen → carbon dioxide + water + energy
          </p>
          <Formula block>{String.raw`\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O}`}</Formula>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What is a balanced chemical equation?',
    options: ['Equation with equal reactants', 'Equation with equal atoms on both sides', 'Any chemical equation', 'Equation with heat'],
    answer: 'Equation with equal atoms on both sides',
    explanation: 'A balanced equation has the same number of atoms of each element on both sides.',
  },
  {
    prompt: 'What is stoichiometry?',
    options: ['Study of the shapes of molecules', 'Study of the motion of objects', 'Quantitative study of reactants and products', 'Study of the energy in a system'],
    answer: 'Quantitative study of reactants and products',
    explanation: 'Stoichiometry deals with mole ratios and mass calculations in reactions.',
  },
  {
    prompt: 'How many moles are in 36 g of water (H₂O)? (M = 18 g/mol)',
    options: ['1 mol', '2 mol', '18 mol', '36 mol'],
    answer: '2 mol',
    explanation: 'n = m/M = 36/18 = 2 mol',
  },
  {
    prompt: 'What volume does 0.5 moles of gas occupy at STP?',
    options: ['11.2 L', '22.4 L', '44.8 L', '5.6 L'],
    answer: '11.2 L',
    explanation: 'V = n × 22.4 = 0.5 × 22.4 = 11.2 L',
  },
];

const ChemicalChangeStoichiometry = () => (
  <CapsSubjectTopic
    grade={10}
    title="Chemical Change and Stoichiometry"
    subtitle="Reactions and quantitative analysis"
    learnSteps={learnSteps}
    task="gr10-chemical-change-stoichiometry-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ChemicalChangeStoichiometry;
