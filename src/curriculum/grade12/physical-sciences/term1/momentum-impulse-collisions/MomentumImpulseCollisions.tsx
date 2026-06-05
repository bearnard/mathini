import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';

const learnSteps: LearnStep[] = [
  {
    title: 'Momentum is a vector quantity',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Momentum combines mass and velocity, so it tells you both how difficult an object is to stop
          and which direction it is moving. Choose a positive direction first so that every velocity and
          momentum value keeps the same sign convention.
        </p>
        <Formula block>{String.raw`p = mv`}</Formula>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">p (kg·m·s⁻¹)</strong>
            <p className="mt-2 text-slate-600">Momentum points in the same direction as the velocity.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">m (kg)</strong>
            <p className="mt-2 text-slate-600">Mass is a scalar and is always positive.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">v (m·s⁻¹)</strong>
            <p className="mt-2 text-slate-600">Velocity carries the sign that determines the momentum direction.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Momentum and Impulse',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore motion before impacts. Adjust parameters and observe how the momentum changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Impulse changes momentum',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Impulse measures how strongly and how long a net force acts. A larger force or a longer contact
          time produces a larger change in momentum, which is why safety devices aim to increase the time
          of impact.
        </p>
        <Formula block>{String.raw`J = F\Delta t = \Delta p`}</Formula>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>The area under a force-time graph gives the impulse.</li>
          <li>For the same <Formula>{String.raw`\Delta p`}</Formula>, increasing <Formula>{String.raw`\Delta t`}</Formula> lowers the average force.</li>
          <li>Airbags and crumple zones protect passengers by stretching the collision time.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Momentum is conserved in isolated systems',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          When the net external force on a system is zero, the total linear momentum before the interaction
          equals the total linear momentum after it. This works for explosions, rebounds and stick-together
          collisions.
        </p>
        <Formula block>{String.raw`\sum p_i = \sum p_f`}</Formula>
        <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">
          <p className="font-semibold text-slate-800">Typical method</p>
          <ol className="mt-2 list-decimal space-y-2 pl-6 text-lg leading-8">
            <li>Define left/right or east/west as positive.</li>
            <li>Calculate total initial momentum.</li>
            <li>Set it equal to total final momentum.</li>
            <li>Solve for the unknown velocity with its correct sign.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Collision type determines what else is conserved',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Momentum is conserved in every isolated collision, but kinetic energy is conserved only in elastic
          collisions. In a perfectly inelastic collision the objects move off together with one common final
          velocity.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Elastic collision</strong>
            <p className="mt-2 text-slate-600">Momentum and kinetic energy are both conserved.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Inelastic collision</strong>
            <p className="mt-2 text-slate-600">Momentum is conserved, but some kinetic energy becomes heat, sound or deformation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "momentum-impulse-collisions-1",
    "question": "What is the momentum of a 1200 kg car moving at 20 m/s east?",
    "options": [
      "6000 kg·m/s east",
      "12000 kg·m/s east",
      "24000 kg·m/s east",
      "48000 kg·m/s east"
    ],
    "answer": 2,
    "explanation": "p = mv = 1200 × 20 = 24000 kg·m/s east."
  },
  {
    "id": "momentum-impulse-collisions-2",
    "question": "A 0.5 kg ball changes velocity from 10 m/s east to 6 m/s west. Taking east as positive, what is the change in momentum?",
    "options": [
      "-8 kg·m/s",
      "-2 kg·m/s",
      "2 kg·m/s",
      "8 kg·m/s"
    ],
    "answer": 0,
    "explanation": "Δp = m(vf - vi) = 0.5(-6 - 10) = -8 kg·m/s."
  },
  {
    "id": "momentum-impulse-collisions-3",
    "question": "A net force of 15 N acts on an object for 0.4 s. What impulse is delivered?",
    "options": [
      "3 N·s",
      "6 N·s",
      "15 N·s",
      "37.5 N·s"
    ],
    "answer": 1,
    "explanation": "J = FΔt = 15 × 0.4 = 6 N·s."
  },
  {
    "id": "momentum-impulse-collisions-4",
    "question": "The law of conservation of momentum applies directly when:",
    "options": [
      "the system is isolated",
      "there is a large friction force",
      "kinetic energy is always lost",
      "the objects have equal masses"
    ],
    "answer": 0,
    "explanation": "Momentum is conserved when the net external force on the system is zero."
  },
  {
    "id": "momentum-impulse-collisions-5",
    "question": "A 2 kg trolley moving at 4 m/s east collides with a stationary 2 kg trolley and they stick together. What is their common final velocity?",
    "options": [
      "1 m/s east",
      "2 m/s east",
      "4 m/s east",
      "8 m/s east"
    ],
    "answer": 1,
    "explanation": "Total momentum before = 2 × 4 = 8 kg·m/s east. Combined mass is 4 kg, so vf = 8/4 = 2 m/s east."
  },
  {
    "id": "momentum-impulse-collisions-6",
    "question": "In which type of collision is kinetic energy conserved?",
    "options": [
      "perfectly inelastic",
      "inelastic",
      "elastic",
      "all collisions"
    ],
    "answer": 2,
    "explanation": "Elastic collisions conserve both momentum and kinetic energy."
  },
  {
    "id": "momentum-impulse-collisions-7",
    "question": "The area under a force-time graph represents the:",
    "options": [
      "momentum",
      "impulse",
      "acceleration",
      "power"
    ],
    "answer": 1,
    "explanation": "The area under an F-t graph equals FΔt, which is impulse."
  },
  {
    "id": "momentum-impulse-collisions-8",
    "question": "Why do airbags reduce the force on passengers during a crash?",
    "options": [
      "They increase the change in momentum",
      "They make the car heavier",
      "They increase the collision time",
      "They remove all momentum"
    ],
    "answer": 2,
    "explanation": "For the same change in momentum, increasing Δt reduces the average force because F = Δp/Δt."
  }
];

    const bank: CapsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));
const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title!,
  content: step.content,
}));


    const MomentumImpulseCollisions = () => (
      <CapsSubjectTopic
        title="Momentum, Impulse and Collisions"
        subtitle="Momentum as a vector, impulse, conservation and collision analysis"
        learnSteps={topicLearnSteps}
        task="gr12-momentum-impulse-collisions-t1"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default MomentumImpulseCollisions;
