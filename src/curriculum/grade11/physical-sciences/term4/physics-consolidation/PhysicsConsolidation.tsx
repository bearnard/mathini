import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Mechanics Review — Vectors, Forces and Motion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidate the key mechanics topics: vectors, Newton's laws, work/energy/power, and momentum.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Vectors and Newton's Laws</strong>
            <Formula block>{String.raw`F_{\text{net}} = ma`}</Formula>
            <p className="text-slate-600">Resolve forces into components, identify action-reaction pairs, and draw accurate FBDs with all forces labelled.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Energy and Momentum</strong>
            <Formula block>{String.raw`W = F\Delta x\cos\theta`}</Formula>
            <Formula block>{String.raw`W_{\text{net}} = \Delta E_k`}</Formula>
            <Formula block>{String.raw`\sum p_i = \sum p_f`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Projectile Motion and Graphs Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Vertical projectile motion uses the kinematic equations with gravity acting downward. On a velocity-time graph, the slope is acceleration and the area is displacement.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Key equations (upward positive, so <Formula>{String.raw`a = g = -9{,}8\text{ m·s}^{-2}`}</Formula>)</p>
          <Formula block>{String.raw`v_f = v_i + g\Delta t`}</Formula>
          <Formula block>{String.raw`\Delta y = v_i\Delta t + \frac{1}{2}g(\Delta t)^2`}</Formula>
          <Formula block>{String.raw`v_f^2 = v_i^2 + 2g\Delta y`}</Formula>
          <p className="text-slate-600 mt-2">At maximum height, <Formula>{String.raw`v_f = 0`}</Formula>, so the time to the top is <Formula>{String.raw`\Delta t = \frac{v_i}{9{,}8}`}</Formula> (in seconds, with <Formula>{String.raw`v_i`}</Formula> in m·s⁻¹).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Electricity and Circuits Review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review electrostatics and electric circuits together so that field, charge, current, and resistance rules stay connected.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Electrostatics</strong>
            <Formula block>{String.raw`F = k\frac{Q_1Q_2}{r^2}`}</Formula>
            <Formula block>{String.raw`E = \frac{F}{q} = k\frac{Q}{r^2}`}</Formula>
            <p className="text-slate-600">Field lines start on positive charges, end on negative charges, and never cross.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Circuits</strong>
            <Formula block>{String.raw`R_T = \sum R`}</Formula>
            <Formula block>{String.raw`\frac{1}{R_T} = \sum \frac{1}{R}`}</Formula>
            <Formula block>{String.raw`\varepsilon = V_{\text{terminal}} + Ir`}</Formula>
            <Formula block>{String.raw`P = VI = I^2R`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam Technique for Physics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Master exam technique to maximise marks in Paper 1 (Physics).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Calculation Steps</strong>
            <p className="text-slate-600">1. State the formula. 2. Substitute values with units. 3. Calculate. 4. State the final answer with correct units and direction for vectors.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Common Errors to Avoid</strong>
            <p className="text-slate-600">Watch direction, unit conversions, and sign conventions carefully, especially when using <Formula>{String.raw`g = -9.8\text{ m·s}^{-2}`}</Formula> for upward-positive motion.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'A 5 kg object accelerates from rest to 10 m/s in 2 s. What is the net force?',
    options: ['1 N', '10 N', '25 N', '100 N'],
    answer: '25 N',
    explanation: 'First find a: a = Δv/Δt = 10/2 = 5 m/s². Then F_net = ma = 5 × 5 = 25 N.',
  },
  {
    prompt: 'An object of mass 2 kg falls from rest and reaches a speed of 14.7 m/s. How far did it fall? (g = 9.8 m/s²)',
    options: ['11.025 m', '22.05 m', '44.1 m', '5.5 m'],
    answer: '11.025 m',
    explanation: 'v² = v_i² + 2gΔy → 14.7² = 0 + 2(9.8)(Δy) → 216.09 = 19.6 Δy → Δy = 11.025 m.',
  },
  {
    prompt: 'A 1 200 W motor lifts a 100 kg object. How fast can it raise the object? (g = 9.8 m/s²)',
    options: ['0.82 m/s', '1.22 m/s', '12.2 m/s', '120 m/s'],
    answer: '1.22 m/s',
    explanation: 'P = Fv = mgv → v = P/(mg) = 1200/(100 × 9.8) = 1200/980 ≈ 1.22 m/s.',
  },
  {
    prompt: 'A 6 kg ball moving at 4 m/s right collides with a 2 kg ball at rest. They stick together. What is the final velocity?',
    options: ['4 m/s right', '3 m/s right', '12 m/s right', '2 m/s right'],
    answer: '3 m/s right',
    explanation: 'Conservation of momentum: 6×4 + 2×0 = (6+2)v → 24 = 8v → v = 3 m/s right.',
  },
  {
    prompt: 'Two charges Q₁ = +4 μC and Q₂ = −2 μC are 0.2 m apart. What is the magnitude of the force? (k = 9×10⁹ N·m²/C²)',
    options: ['1.8 N', '0.18 N', '18 N', '0.018 N'],
    answer: '1.8 N',
    explanation: 'F = kQ₁Q₂/r² = 9×10⁹ × 4×10⁻⁶ × 2×10⁻⁶ / (0.2)² = 9×10⁹ × 8×10⁻¹² / 0.04 = 72×10⁻³ / 0.04 = 1.8 N.',
  },
  {
    prompt: 'A 6 Ω and a 3 Ω resistor are connected in parallel. A 12 V battery powers the circuit. What is the total current?',
    options: ['1 A', '2 A', '6 A', '0.5 A'],
    answer: '6 A',
    explanation: '1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → R_total = 2 Ω. I = V/R = 12/2 = 6 A.',
  },
  {
    prompt: 'A ball is thrown upward at 20 m/s. What is its velocity after 3 s? (g = 9.8 m/s², upward positive)',
    options: ['29.4 m/s upward', '−9.4 m/s (downward)', '−49.4 m/s', '9.4 m/s upward'],
    answer: '−9.4 m/s (downward)',
    explanation: 'v = v_i − gΔt = 20 − 9.8 × 3 = 20 − 29.4 = −9.4 m/s. The negative sign means the ball is now moving downward.',
  },
  {
    prompt: 'What is the terminal voltage of a 10 V EMF battery with internal resistance 0.5 Ω when 4 A flows?',
    options: ['12 V', '8 V', '10 V', '5 V'],
    answer: '8 V',
    explanation: 'V_terminal = ε − Ir = 10 − (4 × 0.5) = 10 − 2 = 8 V.',
  },
];

const PhysicsConsolidation = () => (
  <CapsSubjectTopic
    title="Physics Consolidation"
    subtitle="Integrated review of Grade 11 mechanics and electricity topics"
    learnSteps={learnSteps}
    task="gr11-physics-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default PhysicsConsolidation;
