import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Work Done by a Force',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Work</strong> is done when a force causes displacement in the direction of the force. Work is a scalar and is measured in joules (J).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Work equation</p>
          <Formula block>{String.raw`W = F\Delta x\cos\theta`}</Formula>
          <p className="text-slate-600">where F is the applied force, Δx is displacement, and θ is the angle between force and displacement.</p>
          <p className="text-slate-600 mt-2">If <Formula>{String.raw`\theta = 0^\circ`}</Formula>, then <Formula>{String.raw`W = F\Delta x`}</Formula> (maximum work).</p>
          <p className="text-slate-600">If <Formula>{String.raw`\theta = 90^\circ`}</Formula>, then <Formula>{String.raw`W = 0`}</Formula> (no work done).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Work, Energy and Power',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore how energy affects motion. Adjust parameters and observe how the mechanical energy changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Kinetic and Potential Energy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mechanical energy</strong> has two forms: kinetic energy (energy of motion) and gravitational potential energy (energy of position).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Kinetic Energy</strong>
            <Formula block>{String.raw`E_k = \frac{1}{2}mv^2`}</Formula>
            <p className="text-slate-600">m in kg, v in m/s, and energy in J. Kinetic energy depends on mass and the square of speed.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Gravitational PE</strong>
            <Formula block>{String.raw`E_p = mgh`}</Formula>
            <p className="text-slate-600">m in kg, <Formula>{String.raw`g = 9{,}8\text{ m·s}^{-2}`}</Formula>, h in m, and energy in J.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Work-Energy Theorem and Conservation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>work-energy theorem</strong> states that the net work done on an object equals its change in kinetic energy.
        </p>
        <div className="rounded-xl bg-yellow-50 p-4 text-left">
          <strong className="text-yellow-700">Conservation of Mechanical Energy</strong>
          <Formula block>{String.raw`W_{\text{net}} = \Delta E_k`}</Formula>
          <Formula block>{String.raw`E_{k_i} + E_{p_i} = E_{k_f} + E_{p_f}`}</Formula>
          <p className="text-slate-600">When only conservative forces act (no friction), total mechanical energy stays constant while energy transforms between kinetic and potential forms.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Power',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Power</strong> is the rate at which work is done (or energy is transferred). It is measured in watts (W) where 1 W = 1 J/s.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Power Formulae</strong>
            <Formula block>{String.raw`P = \frac{W}{\Delta t}`}</Formula>
            <Formula block>{String.raw`P = Fv`}</Formula>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Example</strong>
            <p className="text-slate-600">A motor does 600 J of work in 30 s, so <Formula>{String.raw`P = \frac{600}{30} = 20\text{ W}`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'A 10 N force moves an object 5 m in the direction of the force. How much work is done?',
    options: ['2 J', '15 J', '50 J', '500 J'],
    answer: '50 J',
    explanation: 'W = F · Δx · cos 0° = 10 × 5 × 1 = 50 J.',
  },
  {
    prompt: 'A normal force acts perpendicular to an object\'s displacement. How much work does it do?',
    options: ['Equal to the object\'s weight × distance', 'Maximum work', '0 J', 'Equal to the kinetic energy'],
    answer: '0 J',
    explanation: 'W = F · Δx · cos 90° = 0 J. A force perpendicular to displacement does no work.',
  },
  {
    prompt: 'What is the kinetic energy of a 2 kg object moving at 6 m/s?',
    options: ['12 J', '6 J', '36 J', '72 J'],
    answer: '36 J',
    explanation: 'KE = ½mv² = ½ × 2 × 6² = ½ × 2 × 36 = 36 J.',
  },
  {
    prompt: 'What is the gravitational PE of a 5 kg object held 4 m above the ground? (g = 9,8 m/s²)',
    options: ['20 J', '49 J', '196 J', '200 J'],
    answer: '196 J',
    explanation: 'PE = mgh = 5 × 9,8 × 4 = 196 J.',
  },
  {
    prompt: 'The work-energy theorem states that net work done on an object equals:',
    options: ['Its total energy', 'Its change in potential energy', 'Its change in kinetic energy', 'Its weight multiplied by height'],
    answer: 'Its change in kinetic energy',
    explanation: 'W_net = ΔKE = KE_final − KE_initial. Net work either increases or decreases the object\'s kinetic energy.',
  },
  {
    prompt: 'A ball of mass 0,5 kg is at rest at 10 m height. It falls to 2 m height. What is its KE at 2 m? (g = 9,8 m/s²)',
    options: ['39,2 J', '49 J', '9,8 J', '4,9 J'],
    answer: '39,2 J',
    explanation: 'Using conservation of energy: KE = ΔPE = mg(h_i − h_f) = 0,5 × 9,8 × (10 − 2) = 0,5 × 9,8 × 8 = 39,2 J.',
  },
  {
    prompt: 'What is the SI unit of power?',
    options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
    answer: 'Watt (W)',
    explanation: 'Power is measured in watts (W), where 1 W = 1 J/s (one joule per second).',
  },
  {
    prompt: 'A motor does 900 J of work in 45 s. What is its power output?',
    options: ['2 W', '20 W', '200 W', '40 500 W'],
    answer: '20 W',
    explanation: 'P = W/Δt = 900 ÷ 45 = 20 W.',
  },
  {
    prompt: 'A 1 200 W engine moves a car at a constant speed of 20 m/s. What is the driving force?',
    options: ['24 000 N', '1 200 N', '60 N', '240 N'],
    answer: '60 N',
    explanation: 'P = F·v → F = P/v = 1 200 ÷ 20 = 60 N.',
  },
];

const WorkEnergyPower = () => (
  <CapsSubjectTopic
    title="Work, Energy and Power"
    subtitle="Work done, kinetic and potential energy, conservation and power"
    learnSteps={learnSteps}
    task="gr11-work-energy-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default WorkEnergyPower;
