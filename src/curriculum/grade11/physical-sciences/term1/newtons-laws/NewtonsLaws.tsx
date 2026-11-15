import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Newton\'s First Law — Inertia',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Newton's First Law:</strong> An object will remain at rest, or continue moving at constant velocity, unless acted on by a net (resultant) force.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Inertia</strong>
            <p className="text-slate-600">Inertia is the tendency of an object to resist changes in its state of motion. Greater mass = greater inertia.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Equilibrium</strong>
            <p className="text-slate-600">
              If <Formula>{String.raw`F_{\text{net}} = 0`}</Formula>, the object is in equilibrium (either at rest or moving at constant velocity in a straight line).
            </p>
            <p className="text-slate-600 mt-2">
              The weight of an object is <Formula>{String.raw`w = mg`}</Formula>. On a horizontal surface with no vertical acceleration, the normal force balances the weight.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Newtonian Motion',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore motion under gravity. Adjust parameters and observe how the acceleration pattern changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Newton\'s Second Law — F = ma',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Newton's Second Law:</strong> When a net (resultant) force acts on an object, the object accelerates in the direction of the net force. The acceleration is directly proportional to the net force and inversely proportional to the mass of the object.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Net-force equation</p>
          <Formula block>{String.raw`F_{\text{net}} = ma`}</Formula>
          <p className="text-slate-600">F_net = net force (N), m = mass (kg), a = acceleration (m/s²)</p>
          <p className="text-slate-600 mt-2">This is a vector equation: the net force and acceleration are always in the same direction. Use consistent sign conventions (e.g., right = positive).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Newton\'s Third Law — Action and Reaction',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Newton's Third Law:</strong> For every force (action) exerted by object A on object B, there is an equal and opposite force (reaction) exerted by object B on object A.
        </p>
        <div className="rounded-xl bg-yellow-50 p-4 text-left">
          <strong className="text-yellow-700">Key Points</strong>
          <p className="text-slate-600 mt-1">• Action and reaction forces are equal in magnitude and opposite in direction.</p>
          <p className="text-slate-600">• They act on <em>different</em> objects — they never cancel each other out.</p>
          <p className="text-slate-600">• Example: You push a wall (action). The wall pushes you back (reaction).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Friction',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Friction</strong> is a force that opposes the relative motion (or tendency of motion) between surfaces in contact.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Static Friction (f_s)</strong>
            <Formula block>{String.raw`f_s \le \mu_s N`}</Formula>
            <p className="text-slate-600">Acts on a stationary object. Maximum static friction is reached just before the object starts to move.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Kinetic Friction (f_k)</strong>
            <Formula block>{String.raw`f_k = \mu_k N`}</Formula>
            <p className="text-slate-600">Acts on a moving object. For given surfaces it stays constant, and usually <Formula>{String.raw`\mu_k < \mu_s`}</Formula>.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'Newton\'s First Law states that an object will remain in its state of rest or constant velocity unless:',
    options: ['It has large inertia', 'Acted on by a net force', 'It is very heavy', 'It is in contact with a surface'],
    answer: 'Acted on by a net force',
    explanation: 'Newton\'s First Law (law of inertia): a net external force is required to change an object\'s state of motion.',
  },
  {
    prompt: 'A net force of 24 N acts on a 6 kg object. What is the acceleration?',
    options: ['144 m/s²', '0.25 m/s²', '4 m/s²', '18 m/s²'],
    answer: '4 m/s²',
    explanation: 'F_net = ma → a = F_net ÷ m = 24 ÷ 6 = 4 m/s².',
  },
  {
    prompt: 'What is the SI unit of force?',
    options: ['Joule (J)', 'Pascal (Pa)', 'Newton (N)', 'Watt (W)'],
    answer: 'Newton (N)',
    explanation: '1 Newton = 1 kg·m/s². Force is measured in newtons (N).',
  },
  {
    prompt: 'Newton\'s Third Law says that action and reaction forces are equal and opposite. Where do they act?',
    options: ['On the same object', 'On different objects', 'Only when the object accelerates', 'Only when friction is present'],
    answer: 'On different objects',
    explanation: 'Action-reaction pairs always act on two different objects. This is why they do NOT cancel each other.',
  },
  {
    prompt: 'What is inertia?',
    options: ['The force of gravity that acts on an object', 'The tendency of an object to resist changes in its motion', 'The net force that acts on a moving object', 'The acceleration of a falling object due to gravity'],
    answer: 'The tendency of an object to resist changes in its motion',
    explanation: 'Inertia is the property of matter that causes objects to resist changes in their velocity. It is directly proportional to mass.',
  },
  {
    prompt: 'An object is on a horizontal surface with a coefficient of kinetic friction μ_k = 0.3. If the normal force is 40 N, what is the kinetic friction force?',
    options: ['12 N', '40 N', '133 N', '0.3 N'],
    answer: '12 N',
    explanation: 'f_k = μ_k × N = 0.3 × 40 = 12 N.',
  },
  {
    prompt: 'Which is typically greater: the coefficient of static friction or kinetic friction?',
    options: ['Kinetic friction coefficient', 'Static friction coefficient', 'They are always equal', 'It depends on the speed'],
    answer: 'Static friction coefficient',
    explanation: 'μ_s > μ_k for the same surfaces. More force is needed to start an object moving than to keep it moving.',
  },
  {
    prompt: 'A 10 kg object rests on a flat surface (g = 9.8 m/s²). What is the normal force on it?',
    options: ['10 N', '9.8 N', '98 N', '4.9 N'],
    answer: '98 N',
    explanation: 'On a horizontal surface, N = mg = 10 × 9.8 = 98 N. The normal force balances the object\'s weight.',
  },
  {
    prompt: 'A 3 kg object accelerates at 2 m/s² to the right. What is the net force?',
    options: ['1.5 N right', '6 N right', '0.67 N right', '5 N right'],
    answer: '6 N right',
    explanation: 'F_net = ma = 3 × 2 = 6 N, in the direction of acceleration (right).',
  },
];

const NewtonsLaws = () => (
  <CapsSubjectTopic
    title="Newton's Laws and Friction"
    subtitle="Inertia, F = ma, action-reaction pairs and friction forces"
    learnSteps={learnSteps}
    task="gr11-newtons-laws-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default NewtonsLaws;
