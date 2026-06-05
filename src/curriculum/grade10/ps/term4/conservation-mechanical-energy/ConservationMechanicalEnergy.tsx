import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Law of Conservation of Mechanical Energy',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          The <strong>law of conservation of mechanical energy</strong> states that in the absence of non-conservative forces (like friction), total mechanical energy remains constant.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Energy Conservation Equation</h4>
          <Formula block>{String.raw`E_{\text{mech, initial}} = E_{\text{mech, final}}`}</Formula>
          <Formula block>{String.raw`E_{k_i} + E_{p_i} = E_{k_f} + E_{p_f}`}</Formula>
          <Formula block>{String.raw`\frac{1}{2}mv_i^2 + mgh_i = \frac{1}{2}mv_f^2 + mgh_f`}</Formula>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Example: Free-Falling Object</h4>
          <p className="text-slate-700">
            A 2 kg ball is dropped from 10 m. Find velocity just before hitting the ground (ignore air resistance).
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Initial:</strong> E<sub>k</sub> = 0 (at rest), E<sub>p</sub> = 2 × 9.8 × 10 = 196 J
            <br /><strong>Final:</strong> E<sub>k</sub> = 0.5 × 2 × v², E<sub>p</sub> = 0 (ground level)
            <br />196 = v² → v = 14 m/s
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Energy Transformation</h4>
          <p className="text-slate-700">
            As an object falls: PE → KE. As it rises: KE → PE. Total stays constant (no friction).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Conservation of Mechanical Energy',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore energy conservation in motion. Adjust parameters and observe how the energy transfer changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Work and the Work-Energy Theorem',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Work</strong> is energy transferred by a force. It changes an object's kinetic energy.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Work Formula</h4>
          <Formula block>{String.raw`W = F \Delta x \cos \theta`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>W</em> = work (J), <em>F</em> = force (N), Δx = displacement (m), θ = angle between force and displacement.
          </p>
          <p className="text-slate-700 mt-2">
            • If θ = 0° (force in direction of motion): W = FΔx (positive work)
            <br />• If θ = 90° (force perpendicular): W = 0 (no work)
            <br />• If θ = 180° (force opposite): W = −FΔx (negative work)
          </p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Work-Energy Theorem</h4>
          <Formula block>{String.raw`W_{\text{net}} = \Delta E_k = E_{k_f} - E_{k_i}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Net work done on an object equals its change in kinetic energy.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Example</h4>
          <p className="text-slate-700">
            A 50 N force pushes a 5 kg box 4 m. Find work and final velocity (starts from rest).
          </p>
          <p className="text-slate-700 mt-2">
            W = FΔx = 50 × 4 = 200 J
            <br />W = ΔE<sub>k</sub> = 0.5 × 5 × v² − 0 = 200
            <br />v² = 80 → v = 8.9 m/s
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Power: Rate of Energy Transfer',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Power</strong> is the rate at which work is done or energy is transferred.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Power Formulas</h4>
          <div className="space-y-2">
            <Formula block>{String.raw`P = \frac{W}{t}`}</Formula>
            <Formula block>{String.raw`P = \frac{E}{t}`}</Formula>
            <Formula block>{String.raw`P = Fv`}</Formula>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            <em>P</em> = power (W = watts), <em>W</em> = work (J), <em>E</em> = energy (J), <em>t</em> = time (s), <em>F</em> = force (N), <em>v</em> = velocity (m/s).
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Example Calculations</h4>
          <p className="text-slate-700">
            <strong>1.</strong> Lift 20 kg to 5 m height in 4 seconds. Find power.
            <br />W = mgh = 20 × 9.8 × 5 = 980 J
            <br />P = W/t = 980/4 = 245 W
          </p>
          <p className="text-slate-700 mt-3">
            <strong>2.</strong> A car engine produces 100 N force at 30 m/s.
            <br />P = Fv = 100 × 30 = 3000 W = 3 kW
          </p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <h4 className="font-semibold text-pink-900 mb-2">Efficiency</h4>
          <Formula block>{String.raw`\text{Efficiency} = \frac{E_{\text{useful}}}{E_{\text{input}}} \times 100\%`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            No machine is 100% efficient due to energy losses (friction, heat, sound).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Non-Conservative Forces and Energy Loss',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Non-conservative forces</strong> (friction, air resistance) convert mechanical energy to thermal energy, reducing total mechanical energy.
        </p>
        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-2">Energy with Friction</h4>
          <Formula block>{String.raw`E_{\text{mech, initial}} = E_{\text{mech, final}} + E_{\text{lost}}`}</Formula>
          <Formula block>{String.raw`E_{\text{lost}} = f_k \times d`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            f<sub>k</sub> = kinetic friction force (N), d = distance (m).
          </p>
        </div>
        <div className="bg-lime-50 p-4 rounded-lg border border-lime-200">
          <h4 className="font-semibold text-lime-900 mb-2">Example with Friction</h4>
          <p className="text-slate-700">
            A 5 kg object slides down a 10 m high ramp. Friction force = 20 N. Find velocity at bottom.
          </p>
          <p className="text-slate-700 mt-2">
            Initial PE = 5 × 9.8 × 10 = 490 J
            <br />Energy lost to friction = 20 × 10 = 200 J
            <br />Final KE = 490 − 200 = 290 J
            <br />0.5 × 5 × v² = 290 → v = 10.8 m/s
          </p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-2">Real-World Applications</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Roller coasters: PE at top → KE at bottom (with some energy lost to friction)</li>
            <li>Pendulums: Energy oscillates between KE and PE</li>
            <li>Brakes: Convert KE to thermal energy through friction</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What does the law of conservation of mechanical energy state?',
    options: ['Energy can be created', 'Total mechanical energy remains constant in absence of friction', 'Energy always increases', 'All energy becomes heat'],
    answer: 'Total mechanical energy remains constant in absence of friction',
    explanation: 'PE + KE = constant (when no non-conservative forces act)',
  },
  {
    prompt: 'If work done is 100 J and time is 4 seconds, what is the power?',
    options: ['25 W', '100 W', '400 W', '25 J'],
    answer: '25 W',
    explanation: 'Power = Work / Time = 100 / 4 = 25 W',
  },
  {
    prompt: 'A 50 N force pushes a box 3 m. How much work is done?',
    options: ['50 J', '150 J', '3 J', '53 J'],
    answer: '150 J',
    explanation: 'W = FΔx = 50 × 3 = 150 J',
  },
  {
    prompt: 'An object with 200 J kinetic energy has 50 J converted to heat by friction. What is its final kinetic energy?',
    options: ['250 J', '200 J', '150 J', '50 J'],
    answer: '150 J',
    explanation: 'Final KE = Initial KE − Energy lost = 200 − 50 = 150 J',
  },
];

const ConservationMechanicalEnergy = () => (
  <CapsSubjectTopic
    grade={10}
    title="Conservation of Mechanical Energy"
    subtitle="Energy conservation and transformation"
    learnSteps={learnSteps}
    task="gr10-conservation-mechanical-energy-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ConservationMechanicalEnergy;
