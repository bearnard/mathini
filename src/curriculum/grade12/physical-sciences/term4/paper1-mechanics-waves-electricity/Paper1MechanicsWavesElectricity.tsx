import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import WaveInterference from '@/components/subjects/PhysicsSim/WaveInterference';

const learnSteps: LearnStep[] = [
  {
    title: 'Start by identifying the big Paper 1 idea',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Mixed revision works best when you first recognise the principle being tested. A collision usually points to momentum,
          a free-fall question points to kinematics, a force-displacement question points to work-energy and a battery question
          often requires internal resistance.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Mechanics</strong>
            <p className="mt-2 text-slate-600">Momentum, projectile motion and work-energy reasoning.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Waves and electricity</strong>
            <p className="mt-2 text-slate-600">Doppler shifts, circuit rules and power calculations.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose formulas from physical meaning',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Revision is faster when you connect each formula to the physical story instead of memorising it in isolation.
        </p>
        <Formula block>{String.raw`\sum p_i = \sum p_f`}</Formula>
        <Formula block>{String.raw`v_f = v_i + g\Delta t`}</Formula>
        <Formula block>{String.raw`W_{\text{net}} = \Delta E_k`}</Formula>
      </div>
    ),
  },
  {
    title: 'Watch signs, units and graph interpretation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Many exam errors come from careless signs or vague graph language. State the positive direction, keep units with every
          answer and explain whether the question is asking for a slope or an area.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Area under a force-time graph gives impulse.</li>
          <li>Area under a velocity-time graph gives displacement.</li>
          <li>With upward positive, use <Formula>{String.raw`a = -9{,}8\ \text{m·s}^{-2}`}</Formula> (g = 9,8 m·s⁻² downward).</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Waves Revision',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore revision-ready wave behaviour. Adjust parameters and observe how the interference pattern changes.</p>
        <WaveInterference />
      </div>
    ),
  },
  {
    title: 'Finish by linking circuits to power and lost volts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          In electricity revision, remember that terminal voltage falls when current increases because the internal drop grows.
          After finding the correct current or voltage, calculate power with the form that matches the data you have.
        </p>
        <Formula block>{String.raw`V_{\text{terminal}} = \varepsilon - Ir`}</Formula>
        <Formula block>{String.raw`P = VI = I^2R = \frac{V^2}{R}`}</Formula>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "paper1-mechanics-waves-electricity-1",
    "question": "In an isolated collision, which quantity is conserved?",
    "options": [
      "temperature",
      "momentum",
      "power",
      "force"
    ],
    "answer": 1,
    "explanation": "Total linear momentum is conserved in an isolated system."
  },
  {
    "id": "paper1-mechanics-waves-electricity-2",
    "question": "At the highest point of a vertical projectile, its acceleration is:",
    "options": [
      "0 m/s²",
      "9,8 m/s² upward",
      "9,8 m/s² downward",
      "equal to its velocity"
    ],
    "answer": 2,
    "explanation": "Gravity still acts downward at 9,8 m/s² at the highest point."
  },
  {
    "id": "paper1-mechanics-waves-electricity-3",
    "question": "The net work done on an object equals the change in its:",
    "options": [
      "mass",
      "kinetic energy",
      "wavelength",
      "resistance"
    ],
    "answer": 1,
    "explanation": "This is the work-energy theorem."
  },
  {
    "id": "paper1-mechanics-waves-electricity-4",
    "question": "When a sound source approaches an observer, the observed pitch becomes:",
    "options": [
      "lower",
      "higher",
      "zero",
      "unchanged"
    ],
    "answer": 1,
    "explanation": "Approaching motion increases the observed frequency, so the pitch sounds higher."
  },
  {
    "id": "paper1-mechanics-waves-electricity-5",
    "question": "Two resistors connected in series have a combined resistance equal to:",
    "options": [
      "their sum",
      "their difference",
      "half the smaller resistance",
      "the reciprocal sum"
    ],
    "answer": 0,
    "explanation": "Series resistances add directly."
  },
  {
    "id": "paper1-mechanics-waves-electricity-6",
    "question": "As current drawn from a cell increases, the terminal potential difference usually:",
    "options": [
      "increases above the emf",
      "decreases",
      "becomes equal to twice the emf",
      "stays fixed regardless of internal resistance"
    ],
    "answer": 1,
    "explanation": "A larger current causes a larger internal voltage drop, so terminal voltage decreases."
  },
  {
    "id": "paper1-mechanics-waves-electricity-7",
    "question": "The area under a force-time graph gives the:",
    "options": [
      "displacement",
      "impulse",
      "velocity",
      "power"
    ],
    "answer": 1,
    "explanation": "Area under an F-t graph is impulse."
  },
  {
    "id": "paper1-mechanics-waves-electricity-8",
    "question": "The SI unit of power is the:",
    "options": [
      "joule",
      "newton",
      "watt",
      "coulomb"
    ],
    "answer": 2,
    "explanation": "Power is measured in watts."
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


    const Paper1MechanicsWavesElectricity = () => (
      <CapsSubjectTopic
        title="Paper 1 Mechanics, Waves and Electricity Revision"
        subtitle="Integrated NSC revision across mechanics, Doppler effect and circuits"
        learnSteps={topicLearnSteps}
        task="gr12-paper1-mechanics-waves-electricity-t4"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default Paper1MechanicsWavesElectricity;
