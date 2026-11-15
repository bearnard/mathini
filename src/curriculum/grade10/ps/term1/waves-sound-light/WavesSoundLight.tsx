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
  {
    title: 'Sound Waves and the Doppler Effect',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Sound</strong> is a longitudinal mechanical wave requiring a medium. Speed of sound in air ≈ 340 m/s (depends on temperature).
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Properties of Sound</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Pitch:</strong> Related to frequency (high frequency = high pitch)</li>
            <li><strong>Loudness:</strong> Related to amplitude (large amplitude = loud sound)</li>
            <li><strong>Quality/Timbre:</strong> Waveform shape distinguishes different instruments</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Doppler Effect</h4>
          <p className="text-slate-700 mb-2">
            Observed frequency changes when source or observer moves relative to the medium:
          </p>
          <Formula block>{String.raw`f_{\text{obs}} = f_{\text{source}} \left( \frac{v \pm v_{\text{obs}}}{v \mp v_{\text{source}}} \right)`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>v</em> is the speed of sound. Use the upper signs when the observer or source moves toward the other, the lower signs when moving away (so a source moving toward the listener gives v − v<sub>source</sub> in the denominator).
          </p>
        </div>
        <p className="text-slate-700">
          <strong>Example:</strong> An ambulance siren sounds higher-pitched as it approaches, lower as it moves away.
        </p>
      </div>
    ),
  },
  {
    title: 'Light, Reflection and Refraction',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Light</strong> is an electromagnetic wave that travels at <em>c</em> = 3 × 10⁸ m/s in vacuum. It exhibits reflection, refraction, and dispersion.
        </p>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Law of Reflection</h4>
          <Formula block>{String.raw`\theta_i = \theta_r`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            Angle of incidence equals angle of reflection (both measured from the normal).
          </p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Snell's Law (Refraction)</h4>
          <Formula block>{String.raw`n_1 \sin \theta_1 = n_2 \sin \theta_2`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>n</em> is the refractive index. Light bends when moving between media with different refractive indices.
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Refractive Index</h4>
          <Formula block>{String.raw`n = \frac{c}{v}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>c</em> = speed of light in vacuum, <em>v</em> = speed of light in the medium. For water, n ≈ 1,33.
          </p>
        </div>
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
    prompt: 'Which phenomenon occurs when sound waves bend around obstacles?',
    options: ['Reflection', 'Diffraction', 'Refraction', 'Absorption'],
    answer: 'Diffraction',
    explanation: 'Diffraction is the bending of waves around obstacles.',
  },
  {
    prompt: 'Why does an ambulance siren sound higher as it approaches you?',
    options: ['Sound travels faster', 'Doppler effect increases frequency', 'Sound amplitude increases', 'Siren gets louder'],
    answer: 'Doppler effect increases frequency',
    explanation: 'The Doppler effect causes an increase in observed frequency when the source approaches.',
  },
  {
    prompt: 'If light travels from air (n = 1,0) into glass (n = 1,5), what happens?',
    options: ['It speeds up and bends away from normal', 'It slows down and bends toward normal', 'It maintains speed', 'It reflects completely'],
    answer: 'It slows down and bends toward normal',
    explanation: 'Light slows down in denser media and bends toward the normal according to Snell\'s law.',
  },
];

const WavesSoundLight = () => (
  <CapsSubjectTopic
    grade={10}
    title="Waves, Sound and Light"
    subtitle="Wave phenomena and optical principles"
    learnSteps={learnSteps}
    task="gr10-waves-sound-light-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default WavesSoundLight;
