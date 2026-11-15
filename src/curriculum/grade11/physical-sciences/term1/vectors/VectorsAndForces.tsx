import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Scalars vs Vectors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>scalar</strong> has only magnitude (e.g., speed, mass). A <strong>vector</strong> has both magnitude and direction (e.g., force, velocity, displacement).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Scalars</strong>
            <p className="text-slate-600">Speed, mass, temperature, time, distance, energy.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Vectors</strong>
            <p className="text-slate-600">Displacement, velocity, acceleration, force, weight, momentum.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Vectors and Forces',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore vector components in motion. Adjust parameters and observe how the resultant path changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Resultant Vectors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>resultant</strong> is the single vector that has the same effect as all the given vectors combined. Use the <strong>head-to-tail method</strong>: draw vectors end-to-end; the resultant connects the first tail to the last head.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Perpendicular Vectors (Pythagoras)</strong>
            <Formula block>{String.raw`R = \sqrt{A^2 + B^2}`}</Formula>
            <p className="text-slate-600">E.g., 3 N east + 4 N north gives a resultant of 5 N.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Direction</strong>
            <Formula block>{String.raw`\tan \theta = \frac{\text{opposite}}{\text{adjacent}}`}</Formula>
            <p className="text-slate-600">For the above: <Formula>{String.raw`\tan \theta = \frac{4}{3}`}</Formula>, so <Formula>{String.raw`\theta \approx 53^\circ`}</Formula> N of E.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vector Resolution into Components',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Any vector can be split into a <strong>horizontal</strong> and a <strong>vertical</strong> component. For force F at angle θ to the horizontal:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Component Formulae:</p>
          <Formula block>{String.raw`F_x = F\cos\theta`}</Formula>
          <Formula block>{String.raw`F_y = F\sin\theta`}</Formula>
          <Formula block>{String.raw`R = \sqrt{F_x^2 + F_y^2}`}</Formula>
          <p className="text-slate-600 mt-2">To find the resultant of multiple forces: add all x-components and all y-components separately, then recombine with Pythagoras.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Free-Body Diagrams (FBDs)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>free-body diagram</strong> shows all forces acting on a single object as labelled arrows. The object is represented as a dot or box.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Common Forces</strong>
            <p className="text-slate-600">Weight is <Formula>{String.raw`w = mg`}</Formula> (downward), the normal force is perpendicular to the surface, friction is parallel to the surface and opposes motion, and an applied force acts in the push/pull direction.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Net Force</strong>
            <Formula block>{String.raw`F_{\text{net}} = \sum \vec{F}`}</Formula>
            <p className="text-slate-600">If <Formula>{String.raw`F_{\text{net}} \ne 0`}</Formula>, the object accelerates in the direction of the net force (Newton's 2nd Law).</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'Which of the following is a vector quantity?',
    options: ['Mass', 'Speed', 'Temperature', 'Displacement'],
    answer: 'Displacement',
    explanation: 'Displacement has both magnitude and direction, making it a vector. Mass, speed, and temperature are scalars.',
  },
  {
    prompt: 'Two forces of 3 N east and 4 N north act on an object. What is the magnitude of the resultant?',
    options: ['7 N', '1 N', '5 N', '12 N'],
    answer: '5 N',
    explanation: 'For perpendicular forces, use Pythagoras: R = √(3² + 4²) = √(9 + 16) = √25 = 5 N.',
  },
  {
    prompt: 'A force of 20 N acts at 30° to the horizontal. What is the horizontal component?',
    options: ['10 N', '17,3 N', '20 N', '34,6 N'],
    answer: '17,3 N',
    explanation: 'Horizontal component = F cos θ = 20 × cos 30° = 20 × 0,866 ≈ 17,3 N.',
  },
  {
    prompt: 'What is the purpose of a free-body diagram?',
    options: ['To show the path of motion', 'To show all forces acting on one object', 'To calculate velocity', 'To find the acceleration only'],
    answer: 'To show all forces acting on one object',
    explanation: 'An FBD isolates one object and represents all forces (as labelled arrows) acting on it to allow net force analysis.',
  },
  {
    prompt: 'The resultant of two vectors is maximum when they act in:',
    options: ['Opposite directions', 'Perpendicular directions', 'The same direction', 'At 120° to each other'],
    answer: 'The same direction',
    explanation: 'The maximum resultant occurs when vectors are in the same direction: R_max = A + B.',
  },
  {
    prompt: 'A force of 50 N acts at 60° to the horizontal. What is the vertical component?',
    options: ['25 N', '43,3 N', '50 N', '86,6 N'],
    answer: '43,3 N',
    explanation: 'Vertical component = F sin θ = 50 × sin 60° = 50 × 0,866 ≈ 43,3 N.',
  },
  {
    prompt: 'Three forces act on an object: 10 N right, 4 N left, and 6 N left. What is the net force?',
    options: ['20 N right', '0 N', '10 N left', '4 N right'],
    answer: '0 N',
    explanation: 'Net force = 10 N − 4 N − 6 N = 0 N. The forces are balanced and the object is in equilibrium.',
  },
  {
    prompt: 'Which method is used to find the resultant of vectors graphically?',
    options: ['Tail-to-tail method', 'Head-to-head method', 'Head-to-tail method', 'Midpoint method'],
    answer: 'Head-to-tail method',
    explanation: 'In the head-to-tail method, vectors are placed end-to-end; the resultant runs from the first tail to the last head.',
  },
  {
    prompt: 'What is the minimum resultant of two vectors with magnitudes 8 N and 6 N?',
    options: ['14 N', '10 N', '2 N', '4 N'],
    answer: '2 N',
    explanation: 'The minimum resultant occurs when vectors act in exactly opposite directions: R_min = |A − B| = |8 − 6| = 2 N.',
  },
];

const VectorsAndForces = () => (
  <CapsSubjectTopic
    title="Vectors and Forces"
    subtitle="Resultant vectors, component resolution and free-body diagrams"
    learnSteps={learnSteps}
    task="gr11-vectors-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default VectorsAndForces;
