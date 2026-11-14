import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Types of Intermolecular Forces',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Intermolecular forces (IMFs)</strong> act between molecules (not within them). There are three main types, in order of increasing strength:
        </p>
        <Formula block>{String.raw`\text{London/dispersion} < \text{Dipole-dipole} < \text{Hydrogen bonding}`}</Formula>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">London/Dispersion Forces</strong>
            <p className="text-slate-600">Weakest. Present in ALL molecules. Caused by temporary (instantaneous) dipoles. Increase with molar mass and surface area.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Dipole-Dipole Forces</strong>
            <p className="text-slate-600">In polar molecules. Caused by permanent dipoles. Stronger than London forces for similar molecules.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Hydrogen Bonding</strong>
            <p className="text-slate-600">Strongest IMF. Only when H is bonded to F, O, or N. Causes anomalously high boiling points (e.g., water, ammonia, HF).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Molecular Polarity and Shape (VSEPR)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A molecule is <strong>polar</strong> if it has polar bonds and an asymmetric shape so that the bond dipoles do not cancel.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Common Shapes</strong>
            <p className="text-slate-600">Linear (CO₂, BeF₂), Bent/V-shaped (H₂O, SO₂), Trigonal planar (BF₃), Tetrahedral (CH₄), and Pyramidal (NH₃).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Polarity Rule</strong>
            <p className="text-slate-600">CO₂ is linear so the dipoles cancel. H₂O is bent so the dipoles do not cancel and the molecule is polar.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'IMFs and Physical Properties',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stronger IMFs require more energy to overcome, resulting in higher boiling and melting points, greater viscosity, and higher surface tension.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Boiling-point trend</p>
          <Formula block>{String.raw`\text{Hydrogen bonding} > \text{Dipole-dipole} > \text{London forces}`}</Formula>
          <p className="text-slate-600 mt-2">Example: H₂O has a much higher boiling point than H₂S because water forms hydrogen bonds.</p>
          <p className="text-slate-600 mt-2">Within a homologous series, boiling point increases as molar mass increases, for example <Formula>{String.raw`CH_4 < C_2H_6 < C_3H_8`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Solubility — "Like Dissolves Like"',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The principle <strong>“like dissolves like”</strong> means polar solvents dissolve polar or ionic solutes, and non-polar solvents dissolve non-polar solutes.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Polar in Polar</strong>
            <p className="text-slate-600">Water dissolves salt, sugar, and alcohols because its polar molecules interact strongly with ions or permanent dipoles.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Non-polar in Non-polar</strong>
            <p className="text-slate-600">Hexane dissolves grease and fats. Oil does not dissolve in water because the IMF types are incompatible.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'Which type of intermolecular force is present in ALL molecules?',
    options: ['Hydrogen bonding', 'Dipole-dipole forces', 'London/dispersion forces', 'Ionic bonding'],
    answer: 'London/dispersion forces',
    explanation: 'London (dispersion) forces arise from temporary/instantaneous dipoles and are present in every molecule, polar or non-polar.',
  },
  {
    prompt: 'Hydrogen bonding occurs between hydrogen and which elements?',
    options: ['C, N, O', 'F, O, N', 'Cl, Br, I', 'Na, K, Li'],
    answer: 'F, O, N',
    explanation: 'Hydrogen bonding forms only when H is directly bonded to the highly electronegative atoms F, O, or N, which creates a strong enough partial charge.',
  },
  {
    prompt: 'Water has an unusually high boiling point for its molar mass. Why?',
    options: ['Large molar mass', 'Ionic bonds within the molecule', 'Strong hydrogen bonding between molecules', 'Covalent bonds between water molecules'],
    answer: 'Strong hydrogen bonding between molecules',
    explanation: 'Water molecules form extensive hydrogen bonds (O–H⋯O), requiring significantly more energy to break, giving a boiling point of 100°C.',
  },
  {
    prompt: 'A molecule has polar bonds but is non-polar overall. This means:',
    options: ['It has no dipole-dipole forces', 'Its shape causes bond dipoles to cancel', 'Its bonds are actually non-polar', 'It is soluble in water'],
    answer: 'Its shape causes bond dipoles to cancel',
    explanation: 'In a symmetrical molecule (e.g., CO₂ — linear, CCl₄ — tetrahedral), individual bond dipoles point in opposite directions and cancel, making the molecule non-polar overall.',
  },
  {
    prompt: 'Which has the higher boiling point and why: ethanol (C₂H₅OH) or dimethyl ether (CH₃OCH₃)?',
    options: [
      'Dimethyl ether, because it has a larger molar mass',
      'Ethanol, because it forms hydrogen bonds via the –OH group',
      'Dimethyl ether, because it has dipole-dipole forces',
      'They have the same boiling point',
    ],
    answer: 'Ethanol, because it forms hydrogen bonds via the –OH group',
    explanation: 'Ethanol has an –OH group enabling H-bonding; dimethyl ether cannot donate H-bonds. Ethanol\'s stronger IMFs give it a higher boiling point (78°C vs −24°C).',
  },
  {
    prompt: 'What shape does a water molecule (H₂O) have?',
    options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent/V-shaped'],
    answer: 'Bent/V-shaped',
    explanation: 'H₂O has two bonding pairs and two lone pairs on oxygen. The lone pairs repel the bonds, creating a bent/V-shaped geometry.',
  },
  {
    prompt: 'Why does oil not dissolve in water?',
    options: ['Oil molecules are too large to fit between water molecules', 'Oil is non-polar and water is polar, so their forces do not match', 'Oil molecules are too light to sink into the water', 'Water has too high a boiling point to mix with oil'],
    answer: 'Oil is non-polar and water is polar, so their forces do not match',
    explanation: '"Like dissolves like." Oil (non-polar, London forces) and water (polar, H-bonding) cannot form compatible interactions, so oil does not dissolve.',
  },
  {
    prompt: 'Which of the following has the HIGHEST boiling point?',
    options: ['F₂', 'Cl₂', 'Br₂', 'I₂'],
    answer: 'I₂',
    explanation: 'All halogens are non-polar and only have London forces. Iodine (I₂) has the greatest molar mass, strongest London forces, and therefore the highest boiling point.',
  },
  {
    prompt: 'What term describes forces that act between molecules (not within them)?',
    options: ['Intramolecular forces', 'Covalent bonds', 'Intermolecular forces', 'Ionic bonds'],
    answer: 'Intermolecular forces',
    explanation: 'Intermolecular forces act BETWEEN separate molecules. Intramolecular forces (covalent/ionic bonds) act WITHIN a molecule.',
  },
];

const IntermolecularForces = () => (
  <CapsSubjectTopic
    title="Intermolecular Forces"
    subtitle="London forces, dipole-dipole, hydrogen bonding and physical property trends"
    learnSteps={learnSteps}
    task="gr11-intermolecular-forces-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default IntermolecularForces;
