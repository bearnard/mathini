import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Momentum',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Momentum</strong> (p) is the product of an object's mass and velocity. It is a vector quantity in the same direction as velocity.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Momentum equation</p>
          <Formula block>{String.raw`p = mv`}</Formula>
          <p className="text-slate-600">p = momentum (kg·m/s), m = mass (kg), v = velocity (m/s)</p>
          <p className="text-slate-600 mt-2">The SI unit of momentum is kg·m/s (equivalent to N·s). A heavier or faster-moving object has more momentum.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Momentum in Motion',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore moving objects in flight. Adjust parameters and observe how the momentum changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Impulse and the Impulse-Momentum Theorem',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Impulse</strong> is the product of force and the time for which it acts. Impulse equals the change in momentum.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Impulse-Momentum Theorem</strong>
            <Formula block>{String.raw`J = F\Delta t = \Delta p`}</Formula>
            <p className="text-slate-600 mt-1">A larger force or longer contact time produces a greater change in momentum.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Practical Application</strong>
            <p className="text-slate-600">Airbags and crumple zones increase <Formula>{String.raw`\Delta t`}</Formula>, reducing the force because <Formula>{String.raw`F = \frac{\Delta p}{\Delta t}`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Conservation of Momentum',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>law of conservation of momentum</strong>: in an isolated system (no external forces), the total momentum before a collision equals the total momentum after.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <Formula block>{String.raw`\sum p_i = \sum p_f`}</Formula>
          <Formula block>{String.raw`m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}`}</Formula>
          <p className="text-slate-600 mt-2">Remember: momentum is a vector. Choose a positive direction and apply consistent signs.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Elastic and Inelastic Collisions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Momentum is always conserved in collisions, but kinetic energy may or may not be conserved.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Elastic Collision</strong>
            <p className="text-slate-600">Both momentum and kinetic energy are conserved, so <Formula>{String.raw`E_{k,\text{before}} = E_{k,\text{after}}`}</Formula>.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Inelastic Collision</strong>
            <p className="text-slate-600">Momentum is conserved, but kinetic energy is not. Some energy changes to heat or sound, and objects may stick together.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'What is the momentum of a 4 kg object moving at 5 m/s east?',
    options: ['1.25 kg·m/s east', '9 kg·m/s east', '20 kg·m/s east', '0.8 kg·m/s east'],
    answer: '20 kg·m/s east',
    explanation: 'p = mv = 4 × 5 = 20 kg·m/s east (same direction as velocity).',
  },
  {
    prompt: 'A 2 kg ball changes velocity from 3 m/s east to 7 m/s east. What is the change in momentum?',
    options: ['2 kg·m/s east', '8 kg·m/s east', '20 kg·m/s east', '5 kg·m/s east'],
    answer: '8 kg·m/s east',
    explanation: 'Δp = mΔv = 2 × (7 − 3) = 2 × 4 = 8 kg·m/s east.',
  },
  {
    prompt: 'A force of 10 N acts on an object for 3 s. What is the impulse?',
    options: ['0.33 N·s', '3.33 N·s', '30 N·s', '13 N·s'],
    answer: '30 N·s',
    explanation: 'Impulse J = FΔt = 10 × 3 = 30 N·s.',
  },
  {
    prompt: 'In which type of collision is kinetic energy conserved?',
    options: ['All collisions', 'Perfectly inelastic collision', 'Elastic collision', 'Inelastic collision'],
    answer: 'Elastic collision',
    explanation: 'In an elastic collision, both momentum AND kinetic energy are conserved. In inelastic collisions, only momentum is conserved.',
  },
  {
    prompt: 'A 3 kg trolley moving at 4 m/s collides with and sticks to a stationary 1 kg trolley. What is the velocity after collision?',
    options: ['12 m/s', '4 m/s', '3 m/s', '1 m/s'],
    answer: '3 m/s',
    explanation: 'Conservation of momentum: m₁v₁ = (m₁ + m₂)v_f → 3 × 4 = 4 × v_f → v_f = 12/4 = 3 m/s.',
  },
  {
    prompt: 'Why do airbags reduce injury in a car crash?',
    options: ['They increase the force of the impact', 'They lengthen the impact time, so the force is less', 'They lower the change in momentum', 'They remove the change in momentum entirely'],
    answer: 'They lengthen the impact time, so the force is less',
    explanation: 'Since J = FΔt = Δp (constant), increasing Δt reduces F. Airbags spread the stopping force over a longer time.',
  },
  {
    prompt: 'The law of conservation of momentum applies when:',
    options: ['There is friction between objects', 'No net external force acts on the system', 'Objects are moving at constant speed', 'Only elastic collisions occur'],
    answer: 'No net external force acts on the system',
    explanation: 'Conservation of momentum holds for isolated systems where the net external force is zero.',
  },
  {
    prompt: 'A 5 kg object moving at 6 m/s east collides head-on with a 5 kg object moving at 2 m/s west. What is the total momentum?',
    options: ['40 kg·m/s east', '0 kg·m/s', '20 kg·m/s east', '20 kg·m/s west'],
    answer: '20 kg·m/s east',
    explanation: 'Taking east as positive: p_total = 5×6 + 5×(−2) = 30 − 10 = 20 kg·m/s east.',
  },
  {
    prompt: 'What are the units of impulse?',
    options: ['kg·m/s² (which is the same as N)', 'N·s (equivalent to kg·m/s)', "J·s, the unit of Planck's constant", 'kg/m·s, the unit of viscosity'],
    answer: 'N·s (equivalent to kg·m/s)',
    explanation: 'Impulse = FΔt has units of N·s. Since 1 N = 1 kg·m/s², we get N·s = kg·m/s, the same as momentum.',
  },
];

const Momentum = () => (
  <CapsSubjectTopic
    title="Momentum and Impulse"
    subtitle="Momentum, impulse-momentum theorem and conservation of momentum"
    learnSteps={learnSteps}
    task="gr11-momentum-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Momentum;
