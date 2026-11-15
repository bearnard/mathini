import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import SimpleCircuit from '@/components/subjects/PhysicsSim/SimpleCircuit';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Electrostatic Forces and Coulomb\'s Law',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Electric charge</strong> comes in two types: positive (+) and negative (−). Like charges repel, opposite charges attract.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Coulomb's Law</h4>
          <p className="text-slate-700 mb-3">
            The electrostatic force between two point charges is given by:
          </p>
          <Formula block>{String.raw`F = k \frac{Q_1 Q_2}{r^2}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            where <em>k</em> = 9 × 10⁹ N·m²/C², <em>Q₁</em> and <em>Q₂</em> are charges in coulombs, and <em>r</em> is distance in metres.
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> Two charges of 2 × 10⁻⁶ C and 3 × 10⁻⁶ C are separated by 0,5 m. 
          The force is F = (9 × 10⁹)(2 × 10⁻⁶)(3 × 10⁻⁶)/(0,5)² = 0,216 N.
        </p>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Electric Circuits',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore a simple circuit. Adjust parameters and observe how the current changes.</p>
        <SimpleCircuit />
      </div>
    ),
  },
  {
    title: 'Electric Circuits and Ohm\'s Law',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          An <strong>electric circuit</strong> is a closed conducting path through which charge flows. 
          Current (<em>I</em>) measures charge flow in amperes (A).
        </p>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Ohm's Law</h4>
          <Formula block>{String.raw`V = IR`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Voltage (<em>V</em>) in volts = Current (<em>I</em>) in amperes × Resistance (<em>R</em>) in ohms (Ω).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-1">Series Circuit</h5>
            <Formula block>{String.raw`R_{\text{total}} = R_1 + R_2 + R_3`}</Formula>
            <p className="text-sm text-slate-600 mt-1">Same current everywhere</p>
          </div>
          <div className="bg-orange-50 p-3 rounded border border-orange-200">
            <h5 className="font-semibold text-orange-900 mb-1">Parallel Circuit</h5>
            <Formula block>{String.raw`\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}`}</Formula>
            <p className="text-sm text-slate-600 mt-1">Same voltage across branches</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Electrical Power and Energy',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Electrical power</strong> is the rate at which electrical energy is converted to other forms.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Power Formulas</h4>
          <div className="space-y-2">
            <Formula block>{String.raw`P = VI`}</Formula>
            <Formula block>{String.raw`P = I^2 R`}</Formula>
            <Formula block>{String.raw`P = \frac{V^2}{R}`}</Formula>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Power (<em>P</em>) is measured in watts (W), where 1 W = 1 J/s.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Electrical Energy</h4>
          <Formula block>{String.raw`E = Pt = VIt`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Energy (<em>E</em>) in joules. For household use: 1 kWh = 3,6 × 10⁶ J.
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> A 100 W light bulb runs for 5 hours: E = 100 W × 5 h = 500 Wh = 0,5 kWh.
        </p>
      </div>
    ),
  },
  {
    title: 'Resistors and Circuit Analysis',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Resistance</strong> opposes current flow and depends on material properties, length, and cross-sectional area.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Resistance Formula</h4>
          <Formula block>{String.raw`R = \rho \frac{L}{A}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>ρ</em> is resistivity (Ω·m), <em>L</em> is length (m), <em>A</em> is cross-sectional area (m²).
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Kirchhoff's Laws:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
          <li><strong>Current Law (KCL):</strong> Sum of currents into a junction equals sum of currents out.</li>
          <li><strong>Voltage Law (KVL):</strong> Sum of voltages around a closed loop is zero.</li>
        </ul>
        <p className="text-slate-700">
          These laws are essential for analyzing complex circuits with multiple branches and loops.
        </p>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What does Ohm\'s law state?',
    options: ['V = IR', 'V = I/R', 'V = R/I', 'V = I + R'],
    answer: 'V = IR',
    explanation: 'Ohm\'s law: Voltage = Current × Resistance',
  },
  {
    prompt: 'In a series circuit, what happens to the total resistance?',
    options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'],
    answer: 'Increases',
    explanation: 'Total resistance in series = R1 + R2 + R3...',
  },
  {
    prompt: 'Two charges exert a force F on each other. If the distance between them is doubled, the new force is:',
    options: ['F/4', 'F/2', '2F', '4F'],
    answer: 'F/4',
    explanation: 'Coulomb\'s law: F ∝ 1/r². Doubling distance quarters the force.',
  },
  {
    prompt: 'What is the power dissipated by a 10 Ω resistor carrying 2 A?',
    options: ['5 W', '20 W', '40 W', '100 W'],
    answer: '40 W',
    explanation: 'P = I²R = (2)² × 10 = 4 × 10 = 40 W',
  },
];

const ElectrostaticsElectricCircuits = () => (
  <CapsSubjectTopic
    grade={10}
    title="Electrostatics and Electric Circuits"
    subtitle="Electric forces and current flow"
    learnSteps={learnSteps}
    task="gr10-electrostatics-electric-circuits-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ElectrostaticsElectricCircuits;
