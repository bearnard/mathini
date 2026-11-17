import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import WaveInterference from '@/components/subjects/PhysicsSim/WaveInterference';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Wave Properties and the Wave Equation',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Waves</strong> transfer energy without transferring matter. Key properties include amplitude, wavelength (λ), frequency (<em>f</em>), and wave speed (<em>v</em>).
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Wave Equation</h4>
          <Formula block>{String.raw`v = f \lambda`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Wave speed (<em>v</em>) in m/s = frequency (<em>f</em>) in Hz × wavelength (λ) in metres.
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> A wave with frequency 50 Hz and wavelength 2 m has speed v = 50 × 2 = 100 m/s.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-1">Transverse Waves</h5>
            <p className="text-sm text-slate-700">Oscillation perpendicular to direction of travel (e.g., light, water waves).</p>
          </div>
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-1">Longitudinal Waves</h5>
            <p className="text-sm text-slate-700">Oscillation parallel to direction of travel (e.g., sound waves).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Simulation: Waves and Interference',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Use the simulation to explore wave behaviour. Adjust parameters and observe how the interference pattern changes.</p>
        <WaveInterference />
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What is the relationship between wave speed, frequency, and wavelength?',
    options: ['v = f × λ', 'v = f / λ', 'v = λ / f', 'v = f + λ'],
    answer: 'v = f × λ',
    explanation: 'Wave speed = frequency × wavelength',
  },
  {
    prompt: "A wave has a frequency of 40 Hz and a wavelength of 3 m. What is its speed?",
    options: ["120 m/s", "13,3 m/s", "43 m/s", "0,075 m/s"],
    answer: "120 m/s",
    explanation: "v = f × λ = 40 × 3 = 120 m/s",
  },
  {
    prompt: "In a transverse wave, how do the particles move compared with the direction in which the wave travels?",
    options: ["Perpendicular to it", "Parallel to it", "In the same direction only", "They do not move at all"],
    answer: "Perpendicular to it",
    explanation: "In a transverse wave the oscillation is perpendicular to the direction of travel.",
  },
  {
    prompt: "Which kind of wave is a sound wave?",
    options: ["Longitudinal", "Transverse", "Neither kind", "Only electromagnetic"],
    answer: "Longitudinal",
    explanation: "In a longitudinal wave the oscillation is parallel to the direction of travel, as in sound.",
  },
];

const WavesSoundLight = () => (
  <CapsSubjectTopic
    grade={10}
    title="Waves, Sound and Light"
    subtitle="Wave properties, the wave equation, and transverse and longitudinal waves"
    learnSteps={learnSteps}
    task="gr10-waves-sound-light-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default WavesSoundLight;
