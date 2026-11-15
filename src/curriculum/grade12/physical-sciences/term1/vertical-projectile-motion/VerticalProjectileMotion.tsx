import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import dynamic from 'next/dynamic';
import { VerticalVelocityGraph } from '@/components/diagrams/physics/VerticalVelocityGraph';

const ProjectileMotion = dynamic(() => import('@/components/subjects/PhysicsSim/ProjectileMotion'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Choose a sign convention before substituting values',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Vertical motion is just one-dimensional motion, but signs matter. If upward is positive, gravity is
          negative because it always acts downward near Earth.
        </p>
        <Formula block>{String.raw`g = -9.8\ \text{m·s}^{-2}`}</Formula>
        <VerticalVelocityGraph />
        <div className="rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-600">
          Use the same positive direction in every velocity, displacement and acceleration term. Most mistakes
          in projectile questions happen when the sign convention changes halfway through the solution.
        </div>
      </div>
    ),
  },
  {
    title: 'Use the kinematics equations systematically',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Choose the equation that matches the information given. In Grade 12, these three equations appear most
          often for free-fall and upward-thrown objects.
        </p>
        <Formula block>{String.raw`v_f = v_i + g\Delta t`}</Formula>
        <Formula block>{String.raw`\Delta y = v_i\Delta t + \frac{1}{2}g(\Delta t)^2`}</Formula>
        <Formula block>{String.raw`v_f^2 = v_i^2 + 2g\Delta y`}</Formula>
      </div>
    ),
  },
  {
    title: 'Maximum height and symmetry simplify problems',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          At the highest point the projectile is momentarily at rest, so the vertical velocity is zero even though
          the acceleration is still downward. If the object returns to the launch height and air resistance is ignored,
          the time up equals the time down and the speed on return matches the launch speed.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">At maximum height</strong>
            <p className="mt-2 text-slate-600">Use <span className="font-semibold text-slate-800">v = 0</span> to solve for time or height.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">At the launch height again</strong>
            <p className="mt-2 text-slate-600">Velocity has the same magnitude as at launch, but the opposite direction (downward).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Visualise the motion with a simulation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The simulation launches a ball at an angle (angled launches are beyond Grade 12 CAPS, so focus on the
          up-and-down part of the motion). Its vertical velocity decreases by 9,8 m·s⁻¹ every second, is zero at the
          top and then increases in the downward direction, exactly as the velocity-time graph in the first step shows.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4">
          <ProjectileMotion />
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "vertical-projectile-motion-1",
    "question": "What is the acceleration of an object thrown vertically upward while it is still in flight near Earth?",
    "options": [
      "0 m/s²",
      "9.8 m/s² upward",
      "9.8 m/s² downward",
      "it depends on the mass"
    ],
    "answer": 2,
    "explanation": "Gravity acts downward throughout the motion, so the acceleration is 9.8 m/s² downward."
  },
  {
    "id": "vertical-projectile-motion-2",
    "question": "At the maximum height of a vertical projectile, the velocity is:",
    "options": [
      "9.8 m/s upward",
      "0 m/s",
      "9.8 m/s downward",
      "equal to the launch velocity"
    ],
    "answer": 1,
    "explanation": "The projectile is momentarily at rest at the top, so v = 0 m/s."
  },
  {
    "id": "vertical-projectile-motion-3",
    "question": "A ball is projected upward at 19.6 m/s. Ignoring air resistance, how long does it take to reach maximum height?",
    "options": [
      "1 s",
      "2 s",
      "3 s",
      "4 s"
    ],
    "answer": 1,
    "explanation": "Using v = u + at with v = 0 gives 0 = 19.6 - 9.8t, so t = 2 s."
  },
  {
    "id": "vertical-projectile-motion-4",
    "question": "Taking upward as positive, what is the displacement of an object dropped from rest after 3 s?",
    "options": [
      "+44.1 m",
      "-44.1 m",
      "+29.4 m",
      "-29.4 m"
    ],
    "answer": 1,
    "explanation": "Δy = ut + 0.5at² = 0 + 0.5(-9.8)(3²) = -44.1 m."
  },
  {
    "id": "vertical-projectile-motion-5",
    "question": "Which equation is most directly used to find final velocity after a known time interval?",
    "options": [
      "v = u + at",
      "Δy = ut + 0.5at²",
      "v² = u² + 2aΔy",
      "P = Fv"
    ],
    "answer": 0,
    "explanation": "v = u + at links velocity, acceleration and time directly."
  },
  {
    "id": "vertical-projectile-motion-6",
    "question": "Ignoring air resistance, a ball returns to its launch point. Just before arriving, its speed is:",
    "options": [
      "zero",
      "less than the launch speed",
      "equal to the launch speed",
      "greater than the launch speed"
    ],
    "answer": 2,
    "explanation": "At the same height, the ball has the same speed magnitude as at launch, but in the opposite direction."
  },
  {
    "id": "vertical-projectile-motion-7",
    "question": "What does the area under a velocity-time graph represent?",
    "options": [
      "acceleration",
      "force",
      "displacement",
      "power"
    ],
    "answer": 2,
    "explanation": "The area under a v-t graph gives displacement."
  },
  {
    "id": "vertical-projectile-motion-8",
    "question": "If upward is chosen as the positive direction, the value of g is:",
    "options": [
      "+9.8 m/s²",
      "-9.8 m/s²",
      "0 m/s²",
      "depends on launch speed"
    ],
    "answer": 1,
    "explanation": "Gravity acts downward, so it is negative when upward is defined as positive."
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


    const VerticalProjectileMotion = () => (
      <CapsSubjectTopic
        title="Vertical Projectile Motion"
        subtitle="Free fall, kinematics, graph interpretation and sign conventions"
        learnSteps={topicLearnSteps}
        task="gr12-vertical-projectile-motion-t1"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default VerticalProjectileMotion;
