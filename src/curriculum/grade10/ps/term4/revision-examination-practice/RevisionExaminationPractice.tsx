import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Review: Electricity and Circuits',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Key Formulas</h4>
          <div className="space-y-2">
            <div>
              <Formula block>{String.raw`F = k \frac{Q_1 Q_2}{r^2}`}</Formula>
              <p className="text-sm text-slate-600">Coulomb's Law (k = 9 × 10⁹ N·m²/C²)</p>
            </div>
            <div>
              <Formula block>{String.raw`V = IR`}</Formula>
              <p className="text-sm text-slate-600">Ohm's Law</p>
            </div>
            <div>
              <Formula block>{String.raw`P = VI = I^2R = \frac{V^2}{R}`}</Formula>
              <p className="text-sm text-slate-600">Electrical Power</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Circuit Rules</h4>
          <p className="text-slate-700"><strong>Series:</strong> R<sub>total</sub> = R₁ + R₂ + R₃, Same current</p>
          <p className="text-slate-700"><strong>Parallel:</strong> 1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃, Same voltage</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Review: Waves, Chemistry and Matter',
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Waves and Light</h4>
          <div className="space-y-2">
            <div>
              <Formula block>{String.raw`v = f \lambda`}</Formula>
              <p className="text-sm text-slate-600">Wave equation</p>
            </div>
            <div>
              <Formula block>{String.raw`n_1 \sin \theta_1 = n_2 \sin \theta_2`}</Formula>
              <p className="text-sm text-slate-600">Snell's Law</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Chemistry Review</h4>
          <p className="text-slate-700"><strong>Mole:</strong> n = m/M, N = n × N<sub>A</sub> (N<sub>A</sub> = 6,022 × 10²³)</p>
          <p className="text-slate-700"><strong>Bonding:</strong> Ionic (transfer), Covalent (sharing), Metallic (delocalized e⁻)</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Phase Changes</h4>
          <div className="space-y-1">
            <Formula block>{String.raw`Q = mc\Delta T`}</Formula>
            <p className="text-sm text-slate-600">Specific heat (c = 4180 J/kg·°C for water)</p>
            <Formula block>{String.raw`Q = mL`}</Formula>
            <p className="text-sm text-slate-600">Latent heat</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Review: Mechanics and Energy',
    content: (
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Kinematics (constant acceleration)</h4>
          <div className="space-y-1">
            <Formula block>{String.raw`v_f = v_i + at`}</Formula>
            <Formula block>{String.raw`\Delta x = v_i t + \frac{1}{2}at^2`}</Formula>
            <Formula block>{String.raw`v_f^2 = v_i^2 + 2a\Delta x`}</Formula>
          </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Energy and Work</h4>
          <div className="space-y-2">
            <div>
              <Formula block>{String.raw`E_k = \frac{1}{2}mv^2`}</Formula>
              <p className="text-sm text-slate-600">Kinetic energy</p>
            </div>
            <div>
              <Formula block>{String.raw`E_p = mgh`}</Formula>
              <p className="text-sm text-slate-600">Potential energy (g = 9,8 m/s²)</p>
            </div>
            <div>
              <Formula block>{String.raw`W = F\Delta x \cos\theta`}</Formula>
              <p className="text-sm text-slate-600">Work</p>
            </div>
            <div>
              <Formula block>{String.raw`P = \frac{W}{t}`}</Formula>
              <p className="text-sm text-slate-600">Power</p>
            </div>
          </div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Conservation Laws</h4>
          <Formula block>{String.raw`E_{k_i} + E_{p_i} = E_{k_f} + E_{p_f} + E_{\text{lost}}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">Total mechanical energy (with/without friction)</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Problem-Solving Strategies',
    content: (
      <div className="space-y-6">
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <h4 className="font-semibold text-pink-900 mb-2">General Strategy</h4>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li><strong>Read carefully:</strong> Identify what is given and what is asked.</li>
            <li><strong>Draw diagrams:</strong> Sketch circuits, free-body diagrams, or motion scenarios.</li>
            <li><strong>List knowns and unknowns:</strong> Write down given values and required quantities.</li>
            <li><strong>Choose equations:</strong> Select appropriate formulas based on the problem type.</li>
            <li><strong>Solve systematically:</strong> Show all steps, include units, check reasonableness.</li>
          </ol>
        </div>
        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-2">Common Exam Topics</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Circuit calculations (series, parallel, mixed)</li>
            <li>Energy transformations (pendulum, free fall, ramps)</li>
            <li>Stoichiometry and mole calculations</li>
            <li>Kinematics with graphs and equations</li>
            <li>Wave properties and refraction</li>
            <li>Chemical bonding and periodic table trends</li>
          </ul>
        </div>
        <div className="bg-lime-50 p-4 rounded-lg border border-lime-200">
          <h4 className="font-semibold text-lime-900 mb-2">Exam Tips</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Always write formulas before substituting values</li>
            <li>Include units in every calculation</li>
            <li>Check significant figures and rounding</li>
            <li>Read multi-part questions carefully – each part may build on the previous</li>
            <li>Allocate time wisely – don't spend too long on one question</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What is Newton\'s second law of motion?',
    options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'],
    answer: 'F = ma',
    explanation: 'Force equals mass times acceleration: F = ma',
  },
  {
    prompt: 'What is the SI unit of force?',
    options: ['Watt', 'Newton', 'Joule', 'Pascal'],
    answer: 'Newton',
    explanation: 'The Newton (N) is the SI unit of force.',
  },
  {
    prompt: 'A 3 kg object at 4 m height has what potential energy? (g = 10 m/s²)',
    options: ['12 J', '40 J', '120 J', '7 J'],
    answer: '120 J',
    explanation: 'PE = mgh = 3 × 10 × 4 = 120 J',
  },
  {
    prompt: 'Which formula represents the wave equation?',
    options: ['v = f × λ', 'v = f / λ', 'v = λ / f', 'v = f + λ'],
    answer: 'v = f × λ',
    explanation: 'Wave speed = frequency × wavelength',
  },
  {
    prompt: 'In a series circuit with resistors 10 Ω and 20 Ω, what is total resistance?',
    options: ['10 Ω', '20 Ω', '30 Ω', '6,67 Ω'],
    answer: '30 Ω',
    explanation: 'Series: R_total = R₁ + R₂ = 10 + 20 = 30 Ω',
  },
];

const RevisionExaminationPractice = () => (
  <CapsSubjectTopic
    grade={10}
    title="Revision and Examination Practice"
    subtitle="Comprehensive physics review and assessment"
    learnSteps={learnSteps}
    task="gr10-ps-revision-examination-practice-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default RevisionExaminationPractice;
