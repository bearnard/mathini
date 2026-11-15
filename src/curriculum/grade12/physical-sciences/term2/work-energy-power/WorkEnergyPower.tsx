import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import ProjectileMotion from '@/components/subjects/PhysicsSim/ProjectileMotion';

const learnSteps: LearnStep[] = [
  {
    title: 'Work depends on force, displacement and direction',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A force does work only when it causes displacement. The angle between the force and the motion matters,
          because only the component parallel to the displacement transfers energy.
        </p>
        <Formula block>{String.raw`W = F\Delta x\cos\theta`}</Formula>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Positive work</strong>
            <p className="mt-2 text-slate-600">Force helps the motion.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Negative work</strong>
            <p className="mt-2 text-slate-600">Force opposes the motion, like friction.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Zero work</strong>
            <p className="mt-2 text-slate-600">Force is perpendicular to the displacement.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Energy Transfer in Motion',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore work and energy in motion. Adjust parameters and observe how the speed-height trade-off changes.</p>
        <ProjectileMotion />
      </div>
    ),
  },
  {
    title: 'Net work changes kinetic energy',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Instead of tracking every force separately, the work-energy theorem lets you compare the total work done on
          the object with the change in kinetic energy.
        </p>
        <Formula block>{String.raw`W_{\text{net}} = \Delta E_k`}</Formula>
        <Formula block>{String.raw`E_k = \frac{1}{2}mv^2`}</Formula>
      </div>
    ),
  },
  {
    title: 'Mechanical energy is conserved when non-conservative work is absent',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In frictionless situations, energy changes form but the total mechanical energy stays constant. Gravitational
          potential energy is greatest at the highest point and kinetic energy is greatest where speed is largest.
        </p>
        <Formula block>{String.raw`E_p = mgh`}</Formula>
        <div className="rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-600">
          If friction is present, some mechanical energy is transformed to heat and the total mechanical energy decreases.
        </div>
      </div>
    ),
  },
  {
    title: 'Power measures how quickly energy is transferred',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Two machines may do the same amount of work, but the one that does it faster has the greater power output.
        </p>
        <Formula block>{String.raw`P = \frac{W}{\Delta t}`}</Formula>
        <div className="rounded-2xl bg-amber-50 p-4 text-lg leading-8 text-slate-600">
          When a constant force acts along the direction of motion at constant speed, you can also use
          <span className="font-semibold text-amber-700"> P = Fv</span>.
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "work-energy-power-1",
    "question": "Which expression gives the work done by a constant force on an object?",
    "options": [
      "W = FΔx cosθ",
      "W = ma",
      "W = mv",
      "W = F/Δx"
    ],
    "answer": 0,
    "explanation": "Work done by a constant force is W = FΔx cosθ."
  },
  {
    "id": "work-energy-power-2",
    "question": "When does a force do zero work on a moving object?",
    "options": [
      "When the force is parallel to the displacement",
      "When the force is perpendicular to the displacement",
      "When the object has mass",
      "When the object moves at constant speed"
    ],
    "answer": 1,
    "explanation": "If the force is perpendicular to the displacement, cos 90° = 0 and the work done is zero."
  },
  {
    "id": "work-energy-power-3",
    "question": "The work-energy theorem states that net work done on an object equals the change in its:",
    "options": [
      "momentum",
      "kinetic energy",
      "power",
      "mass"
    ],
    "answer": 1,
    "explanation": "Net work done equals ΔK, the change in kinetic energy."
  },
  {
    "id": "work-energy-power-4",
    "question": "A 2 kg object speeds up from 3 m/s to 7 m/s. What is its change in kinetic energy?",
    "options": [
      "20 J",
      "28 J",
      "40 J",
      "49 J"
    ],
    "answer": 2,
    "explanation": "ΔK = 0,5m(v² - u²) = 0,5(2)(49 - 9) = 40 J."
  },
  {
    "id": "work-energy-power-5",
    "question": "In the absence of friction, the total mechanical energy of a system is:",
    "options": [
      "always zero",
      "always increasing",
      "conserved",
      "equal to the power"
    ],
    "answer": 2,
    "explanation": "Without non-conservative forces, kinetic plus potential energy remains constant."
  },
  {
    "id": "work-energy-power-6",
    "question": "Average power is calculated using:",
    "options": [
      "P = W/Δt",
      "P = FΔx",
      "P = mv",
      "P = Ir"
    ],
    "answer": 0,
    "explanation": "Power is the rate of doing work, so P = W/Δt."
  },
  {
    "id": "work-energy-power-7",
    "question": "When a constant force moves an object at constant velocity, power can be found from:",
    "options": [
      "P = Fv",
      "P = ma",
      "P = mv",
      "P = v/t"
    ],
    "answer": 0,
    "explanation": "For motion along the force, power is P = Fv."
  },
  {
    "id": "work-energy-power-8",
    "question": "The work done by friction on a sliding object is usually:",
    "options": [
      "positive",
      "negative",
      "zero",
      "equal to its mass"
    ],
    "answer": 1,
    "explanation": "Friction opposes motion, so it does negative work and removes mechanical energy."
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


    const WorkEnergyPower = () => (
      <CapsSubjectTopic
        title="Work, Energy and Power"
        subtitle="Work done, energy transfer, conservation and power relationships"
        learnSteps={topicLearnSteps}
        task="gr12-work-energy-power-t2"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default WorkEnergyPower;
