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
            <strong>Initial:</strong> E<sub>k</sub> = 0 (at rest), E<sub>p</sub> = 2 × 9,8 × 10 = 196 J
            <br /><strong>Final:</strong> E<sub>k</sub> = 0,5 × 2 × v², E<sub>p</sub> = 0 (ground level)
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
            A 5 kg object starts from rest and slides 20 m down a ramp that is 10 m high. Friction force = 20 N. Find velocity at bottom.
          </p>
          <p className="text-slate-700 mt-2">
            Initial PE = 5 × 9,8 × 10 = 490 J
            <br />Energy lost to friction = f × distance along the ramp = 20 × 20 = 400 J
            <br />Final KE = 490 − 400 = 90 J
            <br />0,5 × 5 × v² = 90 → v² = 36 → v = 6 m/s
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
    options: ['Energy can be made from nothing by a machine', 'Total mechanical energy stays constant without friction', 'Energy always increases in a closed system', 'All of the energy ends up as heat in the end'],
    answer: 'Total mechanical energy stays constant without friction',
    explanation: 'PE + KE = constant (when no non-conservative forces act)',
  },
  {
    prompt: 'An object with 200 J kinetic energy has 50 J converted to heat by friction. What is its final kinetic energy?',
    options: ['250 J', '200 J', '150 J', '50 J'],
    answer: '150 J',
    explanation: 'Final KE = Initial KE − Energy lost = 200 − 50 = 150 J',
  },
  {
    prompt: "A 3 kg stone is dropped from a height of 5 m. Ignoring air resistance, what is its gravitational potential energy at the start? Use g = 9,8 m/s².",
    options: ["147 J", "15 J", "29,4 J", "1,5 J"],
    answer: "147 J",
    explanation: "E_p = mgh = 3 × 9,8 × 5 = 147 J",
  },
  {
    prompt: "What happens to the energy of an object that falls freely, with no friction?",
    options: ["Potential energy becomes kinetic energy", "Kinetic energy becomes potential energy", "Both kinds of energy increase", "Both kinds of energy disappear"],
    answer: "Potential energy becomes kinetic energy",
    explanation: "As an object falls, PE changes to KE and the total stays constant.",
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
