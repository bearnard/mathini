import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import SimpleCircuit from '@/components/subjects/PhysicsSim/SimpleCircuit';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Electric Charge and Coulomb\'s Law',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          There are two types of electric charge: <strong>positive</strong> (+) and <strong>negative</strong> (−). Like charges repel; unlike charges attract. Charge is conserved and measured in coulombs (C).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Coulomb's Law</p>
          <Formula block>{String.raw`F = k\frac{Q_1Q_2}{r^2}`}</Formula>
          <p className="text-slate-600"><Formula>{String.raw`k = 9 \times 10^9\text{ N·m}^2\text{/C}^2`}</Formula> (Coulomb's constant)</p>
          <p className="text-slate-600">Q₁ and Q₂ are the charges, and r is the distance between them.</p>
          <p className="text-slate-600 mt-2">The force acts along the line joining the charges. Double the distance and the force decreases by a factor of 4.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Potential Difference and Charge Flow',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore how potential difference drives charge flow. Adjust parameters and observe how the circuit response changes.</p>
        <SimpleCircuit />
      </div>
    ),
  },
  {
    title: 'Electric Fields',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>electric field</strong> exists around any charged object. It represents the force per unit positive charge that a test charge would experience at that point.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Electric Field Formula</strong>
            <Formula block>{String.raw`E = \frac{F}{q}`}</Formula>
            <Formula block>{String.raw`E = k\frac{Q}{r^2}`}</Formula>
            <p className="text-slate-600">E is measured in N/C or V/m. Q is the source charge; q is the test charge.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Direction and Potential</strong>
            <p className="text-slate-600">The field points in the direction of the force on a positive test charge: away from + charges and toward − charges.</p>
            <p className="text-slate-600 mt-2">Potential difference links work and charge through <Formula>{String.raw`V = \frac{W}{q}`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Electric Field Lines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Electric field lines</strong> are drawn to represent the field. They are a visual tool, not physical objects.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Rules for Drawing</strong>
            <p className="text-slate-600">• Begin on positive charges, end on negative charges.</p>
            <p className="text-slate-600">• Lines never cross each other.</p>
            <p className="text-slate-600">• Closer lines = stronger field.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Patterns</strong>
            <p className="text-slate-600">Isolated + charge: lines radiate outward. Isolated − charge: lines point inward. Two opposite charges: arching lines from + to −.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Superposition of Electric Forces',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When multiple charges are present, the <strong>net force</strong> on a charge is the vector sum of the individual forces from each other charge.
        </p>
        <div className="rounded-xl bg-purple-50 p-4 text-left">
          <strong className="text-purple-700">Superposition Principle</strong>
          <p className="text-slate-600 mt-1">Calculate each force separately using Coulomb's law, then add them as vectors.</p>
          <p className="text-slate-600 mt-2">Example: a 4 N pull right and a 2 N push right combine to give <Formula>{String.raw`F_{\text{net}} = 6\text{ N}`}</Formula> to the right.</p>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'Two charges of +2 μC and +3 μC are 0,1 m apart. What is the electrostatic force between them? (k = 9 × 10⁹ N·m²/C²)',
    options: ['54 N', '5,4 N', '0,54 N', '540 N'],
    answer: '5,4 N',
    explanation: 'F = kQ₁Q₂/r² = 9×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / (0,1)² = 9×10⁹ × 6×10⁻¹² / 0,01 = 54×10⁻³ / 0,01 = 5,4 N.',
  },
  {
    prompt: 'If the distance between two charges is doubled, the electrostatic force becomes:',
    options: ['Twice as large', 'Four times as large', 'Half as large', 'One quarter as large'],
    answer: 'One quarter as large',
    explanation: 'Coulomb\'s law is an inverse-square law: F ∝ 1/r². Doubling r gives F_new = F/2² = F/4.',
  },
  {
    prompt: 'An electric field of 500 N/C acts on a charge of 4 × 10⁻³ C. What is the force on the charge?',
    options: ['0,125 N', '2 N', '125 N', '504 N'],
    answer: '2 N',
    explanation: 'F = qE = 4×10⁻³ × 500 = 2 N.',
  },
  {
    prompt: 'In which direction do electric field lines point around a positive point charge?',
    options: ['Toward the charge', 'Around the charge in closed circles', 'Away from the charge', 'Parallel to the line that joins two charges'],
    answer: 'Away from the charge',
    explanation: 'Electric field lines around a positive charge radiate outward (away), in the direction a positive test charge would move.',
  },
  {
    prompt: 'What does a region of closely spaced electric field lines indicate?',
    options: ['Weak electric field', 'No electric force', 'Strong electric field', 'Zero potential'],
    answer: 'Strong electric field',
    explanation: 'The density of field lines indicates field strength. Closely spaced (dense) lines represent a strong electric field.',
  },
  {
    prompt: 'Two like charges are placed near each other. They will:',
    options: ['Attract each other', 'Repel each other', 'Have no effect on each other', 'Attract at first then repel'],
    answer: 'Repel each other',
    explanation: 'Like charges (both positive or both negative) repel each other; unlike charges attract.',
  },
  {
    prompt: 'What is the SI unit of electric field strength?',
    options: ['Coulomb (C), the unit of charge', 'Newton per coulomb (N/C)', 'Volt (V), the unit of potential difference', 'Ampere (A), the unit of current'],
    answer: 'Newton per coulomb (N/C)',
    explanation: 'E = F/q, so the unit is N/C. This is equivalent to V/m (volts per metre).',
  },
  {
    prompt: 'A point charge Q creates a field of 100 N/C at a distance r. What is the field at distance 2r?',
    options: ['200 N/C', '50 N/C', '25 N/C', '400 N/C'],
    answer: '25 N/C',
    explanation: 'E = kQ/r². Doubling r: E_new = kQ/(2r)² = kQ/4r² = E/4 = 100/4 = 25 N/C.',
  },
  {
    prompt: 'What principle states that the net force on a charge is the vector sum of all individual forces acting on it?',
    options: ['Coulomb\'s Principle', 'Superposition Principle', 'Conservation of Charge', 'Faraday\'s Law'],
    answer: 'Superposition Principle',
    explanation: 'The superposition principle states that the net electric force (or field) is the vector sum of the contributions from all individual charges.',
  },
];

const Electrostatics = () => (
  <CapsSubjectTopic
    title="Electrostatics"
    subtitle="Electric charge, Coulomb's law, electric fields and field lines"
    learnSteps={learnSteps}
    task="gr11-electrostatics-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Electrostatics;
