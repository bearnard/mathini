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
            <p className="text-slate-600">Watch direction, unit conversions, and sign conventions carefully, especially when using <Formula>{String.raw`g = -9{,}8\text{ m·s}^{-2}`}</Formula> for upward-positive motion.</p>
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
    prompt: 'An object of mass 2 kg falls from rest and reaches a speed of 14,7 m/s. How far did it fall? (g = 9,8 m/s²)',
    options: ['11,025 m', '22,05 m', '44,1 m', '5,5 m'],
    answer: '11,025 m',
    explanation: 'v² = v_i² + 2gΔy → 14,7² = 0 + 2(9,8)(Δy) → 216,09 = 19,6 Δy → Δy = 11,025 m.',
  },
  {
    prompt: 'Two charges Q₁ = +4 μC and Q₂ = −2 μC are 0,2 m apart. What is the magnitude of the force? (k = 9×10⁹ N·m²/C²)',
    options: ['1,8 N', '0,18 N', '18 N', '0,018 N'],
    answer: '1,8 N',
    explanation: 'F = kQ₁Q₂/r² = 9×10⁹ × 4×10⁻⁶ × 2×10⁻⁶ / (0,2)² = 9×10⁹ × 8×10⁻¹² / 0,04 = 72×10⁻³ / 0,04 = 1,8 N.',
  },
  {
    prompt: 'A 6 Ω and a 3 Ω resistor are connected in parallel. A 12 V battery powers the circuit. What is the total current?',
    options: ['1 A', '2 A', '6 A', '0,5 A'],
    answer: '6 A',
    explanation: '1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → R_total = 2 Ω. I = V/R = 12/2 = 6 A.',
  },
  {
    prompt: "A 4 kg trolley is pushed with a net force of 12 N. What is its acceleration?",
    options: ["3 m/s²", "48 m/s²", "0,33 m/s²", "8 m/s²"],
    answer: "3 m/s²",
    explanation: "a = F/m = 12/4 = 3 m/s².",
  },
  {
    prompt: "A 6 N force acts east and a 2 N force acts west on the same object. What is the resultant force?",
    options: ["4 N east", "8 N east", "4 N west", "12 N east"],
    answer: "4 N east",
    explanation: "Take east as positive: 6 − 2 = +4 N, so 4 N east.",
  },
  {
    prompt: "A 12 V source is connected across two 4 Ω resistors in series. What is the current?",
    options: ["1,5 A", "3 A", "0,67 A", "6 A"],
    answer: "1,5 A",
    explanation: "R_total = 4 + 4 = 8 Ω, so I = V/R = 12/8 = 1,5 A.",
  },
  {
    prompt: "Two forces of 8 N and 5 N act in the same direction on one object. What is the resultant force?",
    options: ["13 N", "3 N", "40 N", "1,6 N"],
    answer: "13 N",
    explanation: "Forces in the same direction add: 8 + 5 = 13 N.",
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
