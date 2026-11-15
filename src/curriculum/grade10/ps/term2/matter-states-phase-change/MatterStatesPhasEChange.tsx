import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'States of Matter and Kinetic Molecular Theory',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          Matter exists in three main states: <strong>solid</strong>, <strong>liquid</strong>, and <strong>gas</strong>. The <strong>kinetic molecular theory</strong> explains their properties.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">Solids</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Fixed shape and volume</li>
              <li>Particles vibrate in fixed positions</li>
              <li>Strong intermolecular forces</li>
              <li>High density</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Liquids</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Fixed volume, variable shape</li>
              <li>Particles move past each other</li>
              <li>Moderate intermolecular forces</li>
              <li>Incompressible</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-2">Gases</h5>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>No fixed shape or volume</li>
              <li>Particles move freely</li>
              <li>Weak intermolecular forces</li>
              <li>Highly compressible</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Kinetic Molecular Theory</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>All matter consists of particles in constant motion</li>
            <li>Temperature is proportional to average kinetic energy</li>
            <li>Higher temperature → faster particle motion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Phase Changes and Energy',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Phase changes</strong> occur when energy is added or removed, changing the state of matter without changing temperature during the transition.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Six Phase Changes</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <p className="font-semibold text-slate-800">Energy Added:</p>
              <ul className="list-disc list-inside text-sm text-slate-700">
                <li><strong>Melting:</strong> Solid → Liquid (0°C for ice)</li>
                <li><strong>Vaporization:</strong> Liquid → Gas (100°C for water)</li>
                <li><strong>Sublimation:</strong> Solid → Gas (dry ice)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Energy Removed:</p>
              <ul className="list-disc list-inside text-sm text-slate-700">
                <li><strong>Freezing:</strong> Liquid → Solid (0°C for water)</li>
                <li><strong>Condensation:</strong> Gas → Liquid</li>
                <li><strong>Deposition:</strong> Gas → Solid (frost)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Latent Heat</h4>
          <p className="text-slate-700 mb-2">
            Energy required for phase change at constant temperature:
          </p>
          <Formula>{String.raw`Q = mL`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>Q</em> = energy (J), <em>m</em> = mass (kg), <em>L</em> = latent heat (J/kg).
          </p>
          <p className="text-slate-700 mt-2">
            For water: L<sub>fusion</sub> = 3.34 × 10⁵ J/kg, L<sub>vaporization</sub> = 2.26 × 10⁶ J/kg.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Heating Curves and Temperature Change',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          A <strong>heating curve</strong> shows temperature vs. energy added. Flat sections represent phase changes (temperature constant during phase change).
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Specific Heat Capacity</h4>
          <p className="text-slate-700 mb-2">
            Energy needed to raise temperature of 1 kg by 1°C:
          </p>
          <Formula>{String.raw`Q = mc\Delta T`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>Q</em> = energy (J), <em>m</em> = mass (kg), <em>c</em> = specific heat (J/kg·°C), ΔT = temperature change (°C).
          </p>
          <p className="text-slate-700 mt-2">
            For water: c = 4180 J/kg·°C (water has high specific heat).
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Example Calculation</h4>
          <p className="text-slate-700">
            Heat 2 kg of water from 20°C to 80°C:
          </p>
          <p className="text-slate-700 mt-2">
            Q = mcΔT = 2 × 4180 × (80 − 20) = 2 × 4180 × 60 = 501 600 J = 501,6 kJ
          </p>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What is the defining characteristic of the solid state?',
    options: ['Particles are far apart', 'Particles are fixed in position', 'Particles move freely', 'Particles have no mass'],
    answer: 'Particles are fixed in position',
    explanation: 'Solids have particles held in fixed positions by strong forces.',
  },
  {
    prompt: 'At what temperature does water melt?',
    options: ['0°C', '50°C', '100°C', '273°C'],
    answer: '0°C',
    explanation: 'Water melts (solid to liquid) at 0°C at standard pressure.',
  },
  {
    prompt: 'How much energy is needed to heat 1 kg of water by 10°C? (c = 4180 J/kg·°C)',
    options: ['418 J', '4,180 J', '41,800 J', '418,000 J'],
    answer: '41,800 J',
    explanation: 'Q = mcΔT = 1 × 4180 × 10 = 41,800 J',
  },
  {
    prompt: 'Which phase change requires the most energy for water?',
    options: ['Melting', 'Vaporization', 'Freezing', 'Condensation'],
    answer: 'Vaporization',
    explanation: 'Vaporization (L = 2.26 × 10⁶ J/kg) requires more energy than melting (L = 3.34 × 10⁵ J/kg).',
  },
];

const MatterStatesPhasEChange = () => (
  <CapsSubjectTopic
    grade={10}
    title="Matter, States and Phase Change"
    subtitle="Properties and transformations of matter"
    learnSteps={learnSteps}
    task="gr10-matter-states-phase-change-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default MatterStatesPhasEChange;
