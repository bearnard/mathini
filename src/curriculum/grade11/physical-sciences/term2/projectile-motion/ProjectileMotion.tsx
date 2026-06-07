import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const ProjectileMotionSim = dynamic(() => import('@/components/subjects/PhysicsSim/ProjectileMotion'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ps/term2/projectile-motion/diagram.webp", alt: "Vertical Projectile Motion" },
    title: 'Free Fall and Gravitational Acceleration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>projectile</strong> is any object moving only under the influence of gravity (ignoring air resistance). The gravitational acceleration is directed downward.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Sign Convention</strong>
            <Formula block>{String.raw`g = -9.8\text{ m·s}^{-2}`}</Formula>
            <p className="text-slate-600">If upward is chosen as positive, gravity is negative because it acts downward.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">At Maximum Height</strong>
            <p className="text-slate-600">The vertical velocity becomes <Formula>{String.raw`v_y = 0`}</Formula>, but the acceleration is still <Formula>{String.raw`g`}</Formula> downward.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Equations of Motion for Projectiles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use the same kinematic equations as for uniform acceleration, applying them to the vertical motion of the projectile.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left">
          <p className="font-bold text-slate-800">Kinematic equations</p>
          <Formula block>{String.raw`v_y = v_{yi} + g\Delta t`}</Formula>
          <Formula block>{String.raw`\Delta y = v_{yi}\Delta t + \frac{1}{2}g(\Delta t)^2`}</Formula>
          <Formula block>{String.raw`v_y^2 = v_{yi}^2 + 2g\Delta y`}</Formula>
          <p className="text-slate-600 mt-2">Always define the positive direction first, then substitute the correct sign for <Formula>{String.raw`g`}</Formula>.</p>
        </div>
        <div className="rounded-xl bg-indigo-50 p-4 text-left">
          <strong className="text-indigo-700">Interactive projectile</strong>
          <p className="text-slate-600 mb-3">Change the launch speed and angle, then watch how the trajectory responds.</p>
          <ProjectileMotionSim />
        </div>
      </div>
    ),
  },
  {
    title: 'Upward Projectile Motion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          For an object thrown upward with initial vertical velocity <Formula>{String.raw`v_{yi}`}</Formula>:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Going Up</strong>
            <p className="text-slate-600">Speed decreases by 9.8 m/s every second as gravity acts opposite to the motion.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">At Top</strong>
            <p className="text-slate-600"><Formula>{String.raw`v_y = 0`}</Formula>, but <Formula>{String.raw`a = g`}</Formula> remains downward.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Coming Down</strong>
            <p className="text-slate-600">Speed increases on the way down. If it returns to launch height without air resistance, the speed matches the launch speed.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Velocity-Time Graphs for Projectiles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A velocity-time graph for a vertical projectile is a <strong>straight line</strong> with constant slope.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Upward throw (positive up)</strong>
            <p className="text-slate-600">The gradient is <Formula>{String.raw`g = -9.8\text{ m·s}^{-2}`}</Formula>. The line starts at +v_i, passes through zero, and continues to negative values while the projectile falls.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Area under graph</strong>
            <p className="text-slate-600">The signed area under the graph gives the displacement: <Formula>{String.raw`\text{area} = \Delta y`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'A ball is dropped from rest. What is its velocity after 3 s? (g = 9.8 m/s²)',
    options: ['3 m/s downward', '9.8 m/s downward', '29.4 m/s downward', '88.2 m/s downward'],
    answer: '29.4 m/s downward',
    explanation: 'v = v_i + gΔt = 0 + 9.8 × 3 = 29.4 m/s downward.',
  },
  {
    prompt: 'A ball is thrown upward at 19.6 m/s. What is the maximum height reached? (g = 9.8 m/s²)',
    options: ['9.8 m', '19.6 m', '39.2 m', '4 m'],
    answer: '19.6 m',
    explanation: 'At max height v = 0. Using v² = v_i² + 2gΔy: 0 = 19.6² − 2×9.8×Δy → Δy = 384.16/19.6 = 19.6 m.',
  },
  {
    prompt: 'What is the acceleration of a projectile at its maximum height (ignoring air resistance)?',
    options: ['0 m/s²', '9.8 m/s² upward', '9.8 m/s² downward', 'It depends on the initial speed'],
    answer: '9.8 m/s² downward',
    explanation: 'Gravitational acceleration is always 9.8 m/s² downward, even at the top of the trajectory where velocity = 0.',
  },
  {
    prompt: 'A ball is thrown upward at 14.7 m/s. How long does it take to reach maximum height? (g = 9.8 m/s²)',
    options: ['0.67 s', '1.5 s', '3 s', '2 s'],
    answer: '1.5 s',
    explanation: 'At max height, v = 0. v = v_i − gΔt → 0 = 14.7 − 9.8Δt → Δt = 14.7/9.8 = 1.5 s.',
  },
  {
    prompt: 'An object is dropped from a height of 44.1 m. How long does it take to reach the ground? (g = 9.8 m/s²)',
    options: ['4.5 s', '3 s', '4 s', '9 s'],
    answer: '3 s',
    explanation: 'Δy = ½gΔt² → 44.1 = ½ × 9.8 × Δt² → Δt² = 9 → Δt = 3 s.',
  },
  {
    prompt: 'On a velocity-time graph for a ball thrown upward (upward positive), the gradient of the line represents:',
    options: ['The displacement', 'The initial velocity', 'Gravitational acceleration (−9.8 m/s²)', 'The time of flight'],
    answer: 'Gravitational acceleration (−9.8 m/s²)',
    explanation: 'The slope of a v-t graph is acceleration. For a projectile, a = −g = −9.8 m/s² (negative because downward when upward is positive).',
  },
  {
    prompt: 'A ball thrown upward returns to its starting height. How does its final speed compare to its initial speed (ignoring air resistance)?',
    options: ['It is greater', 'It is smaller', 'It is the same', 'It cannot be determined'],
    answer: 'It is the same',
    explanation: 'By conservation of energy (or using v² = v_i² + 2gΔy with Δy = 0), the speed on return equals the launch speed.',
  },
  {
    prompt: 'A stone is thrown vertically downward at 5 m/s. What is its velocity after 2 s? (g = 9.8 m/s², downward positive)',
    options: ['14.6 m/s downward', '24.6 m/s downward', '19.6 m/s downward', '10 m/s downward'],
    answer: '24.6 m/s downward',
    explanation: 'v = v_i + gΔt = 5 + 9.8 × 2 = 5 + 19.6 = 24.6 m/s downward.',
  },
  {
    prompt: 'Which quantity remains constant throughout the entire flight of a vertical projectile (ignoring air resistance)?',
    options: ['Velocity', 'Speed', 'Displacement', 'Acceleration'],
    answer: 'Acceleration',
    explanation: 'Gravitational acceleration (g = 9.8 m/s² downward) is constant throughout the flight. Velocity and speed change continuously.',
  },
];

const ProjectileMotion = () => (
  <CapsSubjectTopic
    title="Vertical Projectile Motion"
    subtitle="Free fall, kinematic equations and motion graphs for vertical projectiles"
    learnSteps={learnSteps}
    task="gr11-projectile-motion-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ProjectileMotion;
