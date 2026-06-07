import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ps/term3/vectors-motion-mechanical-energy/diagram.webp", alt: "Vectors, Motion and Mechanical Energy" },
    title: 'Vectors and Scalars',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Scalars</strong> have only magnitude. <strong>Vectors</strong> have both magnitude and direction.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">Scalar Examples</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Distance (10 m)</li>
              <li>Speed (5 m/s)</li>
              <li>Time (3 s)</li>
              <li>Mass (2 kg)</li>
              <li>Temperature (20°C)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Vector Examples</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Displacement (10 m east)</li>
              <li>Velocity (5 m/s north)</li>
              <li>Acceleration (2 m/s² down)</li>
              <li>Force (50 N upward)</li>
              <li>Momentum (kg·m/s)</li>
            </ul>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Vector Addition</h4>
          <p className="text-slate-700 mb-2">
            Use <strong>tip-to-tail method</strong> or <strong>component method</strong>. For perpendicular vectors:
          </p>
          <Formula block>{String.raw`R = \sqrt{A^2 + B^2}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>R</em> is resultant magnitude. Direction: θ = tan⁻¹(B/A).
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> Walk 3 m east, then 4 m north. Displacement = √(3² + 4²) = 5 m at 53° north of east.
        </p>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Vectors and Motion',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore vector-based motion. Adjust parameters and observe how the trajectory changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Motion and Kinematics Equations',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Kinematics</strong> describes motion using displacement, velocity, and acceleration.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Key Definitions</h4>
          <div className="space-y-2">
            <div>
              <Formula block>{String.raw`v = \frac{\Delta x}{\Delta t}`}</Formula>
              <p className="text-sm text-slate-600">Velocity = displacement / time (m/s)</p>
            </div>
            <div>
              <Formula block>{String.raw`a = \frac{\Delta v}{\Delta t}`}</Formula>
              <p className="text-sm text-slate-600">Acceleration = change in velocity / time (m/s²)</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Equations of Motion (constant acceleration)</h4>
          <div className="space-y-2">
            <Formula block>{String.raw`v_f = v_i + at`}</Formula>
            <Formula block>{String.raw`\Delta x = v_i t + \frac{1}{2}at^2`}</Formula>
            <Formula block>{String.raw`v_f^2 = v_i^2 + 2a\Delta x`}</Formula>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            v<sub>i</sub> = initial velocity, v<sub>f</sub> = final velocity, a = acceleration, t = time, Δx = displacement.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Free Fall</h4>
          <p className="text-slate-700">
            Objects falling under gravity: a = g = 9.8 m/s² (downward). Use same equations with a = ±9.8 m/s².
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Mechanical Energy: Kinetic and Potential',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Mechanical energy</strong> is the sum of kinetic and potential energy.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Kinetic Energy (KE)</h4>
          <Formula block>{String.raw`E_k = \frac{1}{2}mv^2`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Energy of motion. <em>m</em> = mass (kg), <em>v</em> = velocity (m/s), E<sub>k</sub> in joules (J).
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> A 4 kg object moving at 3 m/s: E<sub>k</sub> = 0.5 × 4 × 3² = 18 J.
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Gravitational Potential Energy (PE)</h4>
          <Formula block>{String.raw`E_p = mgh`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Energy due to position. <em>m</em> = mass (kg), <em>g</em> = 9.8 m/s², <em>h</em> = height (m), E<sub>p</sub> in joules.
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> A 5 kg object at 10 m height: E<sub>p</sub> = 5 × 9.8 × 10 = 490 J.
          </p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <h4 className="font-semibold text-pink-900 mb-2">Total Mechanical Energy</h4>
          <Formula block>{String.raw`E_{\text{mech}} = E_k + E_p`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            In absence of friction, total mechanical energy is conserved.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Graphs of Motion',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Motion graphs</strong> visualize relationships between position, velocity, acceleration, and time.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-cyan-50 p-3 rounded border border-cyan-200">
            <h5 className="font-semibold text-cyan-900 mb-2">Position-Time Graph</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Slope = velocity</li>
              <li>Horizontal line = at rest</li>
              <li>Straight line = constant velocity</li>
              <li>Curve = accelerating</li>
            </ul>
          </div>
          <div className="bg-lime-50 p-3 rounded border border-lime-200">
            <h5 className="font-semibold text-lime-900 mb-2">Velocity-Time Graph</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Slope = acceleration</li>
              <li>Area under curve = displacement</li>
              <li>Horizontal line = constant velocity</li>
              <li>Straight line = constant acceleration</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-2">Interpreting Graphs</h4>
          <p className="text-slate-700">
            <strong>Example:</strong> A v-t graph shows a straight line from 0 to 20 m/s over 5 s.
            <br />Acceleration = slope = 20/5 = 4 m/s².
            <br />Displacement = area = 0.5 × 5 × 20 = 50 m.
          </p>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What is the difference between a scalar and a vector?',
    options: ['Scalars have direction', 'Vectors have no direction', 'Scalars have only magnitude, vectors have magnitude and direction', 'They are the same'],
    answer: 'Scalars have only magnitude, vectors have magnitude and direction',
    explanation: 'Speed is scalar, velocity is vector. Temperature is scalar, force is vector.',
  },
  {
    prompt: 'What is the kinetic energy of a 2 kg object moving at 5 m/s? (Use KE = 0.5mv²)',
    options: ['5 J', '10 J', '25 J', '50 J'],
    answer: '25 J',
    explanation: 'KE = 0.5 × 2 × 5² = 0.5 × 2 × 25 = 25 J',
  },
  {
    prompt: 'A car accelerates from rest to 20 m/s in 4 seconds. What is the acceleration?',
    options: ['5 m/s²', '10 m/s²', '20 m/s²', '80 m/s²'],
    answer: '5 m/s²',
    explanation: 'a = Δv/Δt = (20 − 0)/4 = 5 m/s²',
  },
  {
    prompt: 'What is the potential energy of a 3 kg object at a height of 5 m? (g = 10 m/s²)',
    options: ['15 J', '30 J', '50 J', '150 J'],
    answer: '150 J',
    explanation: 'PE = mgh = 3 × 10 × 5 = 150 J',
  },
];

const VectorsMotionMechanicalEnergy = () => (
  <CapsSubjectTopic
    grade={10}
    title="Vectors, Motion and Mechanical Energy"
    subtitle="Kinematics and energy analysis"
    learnSteps={learnSteps}
    task="gr10-vectors-motion-mechanical-energy-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default VectorsMotionMechanicalEnergy;
