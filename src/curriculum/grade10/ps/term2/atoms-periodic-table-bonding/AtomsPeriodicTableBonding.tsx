import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ps/term2/atoms-periodic-table-bonding/diagram.webp", alt: "Atoms, Periodic Table and Bonding" },
    title: 'Atomic Structure and Electron Configuration',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          Atoms consist of a dense <strong>nucleus</strong> (protons + neutrons) surrounded by <strong>electrons</strong> in energy levels (shells).
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Subatomic Particles</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Proton:</strong> Charge +1, mass ≈ 1 u (in nucleus)</li>
            <li><strong>Neutron:</strong> Charge 0, mass ≈ 1 u (in nucleus)</li>
            <li><strong>Electron:</strong> Charge −1, mass ≈ 1/1836 u (in shells)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Atomic Notation</h4>
          <Formula>{String.raw`^A_Z \text{X}`}</Formula>
          <p className="text-sm text-slate-600 mt-2">
            <em>A</em> = mass number (protons + neutrons), <em>Z</em> = atomic number (protons), X = element symbol.
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> <Formula>{String.raw`^{23}_{11}\text{Na}`}</Formula> has 11 protons, 12 neutrons, 11 electrons (neutral atom).
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Electron Configuration</h4>
          <p className="text-slate-700">
            Electrons fill shells: 1st shell (max 2), 2nd shell (max 8), 3rd shell (max 8 for first 20 elements).
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> Sodium (Na, Z=11): 2, 8, 1 (valence electron = 1).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'The Periodic Table and Trends',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          The <strong>periodic table</strong> organizes elements by atomic number. Elements in the same <strong>group</strong> (column) have similar properties.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Important Groups</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Group 1:</strong> Alkali metals (Li, Na, K) – highly reactive, 1 valence electron</li>
            <li><strong>Group 2:</strong> Alkaline earth metals (Mg, Ca) – 2 valence electrons</li>
            <li><strong>Group 17:</strong> Halogens (F, Cl, Br) – 7 valence electrons, reactive non-metals</li>
            <li><strong>Group 18:</strong> Noble gases (He, Ne, Ar) – full valence shell, unreactive</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Periodic Trends</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Atomic radius:</strong> Increases down a group, decreases across a period</li>
            <li><strong>Electronegativity:</strong> Decreases down a group, increases across a period</li>
            <li><strong>Ionization energy:</strong> Decreases down a group, increases across a period</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Chemical Bonding: Ionic, Covalent and Metallic',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          Atoms form <strong>bonds</strong> to achieve stable electron configurations (usually 8 valence electrons – octet rule).
        </p>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Ionic Bonding</h4>
          <p className="text-slate-700">
            <strong>Electron transfer</strong> between metal and non-metal. Forms cations (+) and anions (−).
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> NaCl – Na loses 1e⁻ → Na⁺, Cl gains 1e⁻ → Cl⁻. Electrostatic attraction holds ions together.
          </p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-2">Covalent Bonding</h4>
          <p className="text-slate-700">
            <strong>Electron sharing</strong> between non-metals. Forms molecules.
          </p>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> H₂O – oxygen shares electrons with two hydrogen atoms. O–H bonds are covalent.
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-2">Metallic Bonding</h4>
          <p className="text-slate-700">
            <strong>Delocalized electrons</strong> in a "sea" around metal cations. Explains conductivity, malleability, ductility.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Lewis Structures and Molecular Shapes',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
          <strong>Lewis structures</strong> represent valence electrons as dots and bonds as lines. They help predict molecular geometry.
        </p>
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <h4 className="font-semibold text-pink-900 mb-2">Drawing Lewis Structures</h4>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>Count total valence electrons</li>
            <li>Connect atoms with single bonds</li>
            <li>Complete octets (duets for H)</li>
            <li>Use multiple bonds if needed</li>
          </ol>
          <p className="text-slate-700 mt-2">
            <strong>Example:</strong> CO₂ has 4 + 2(6) = 16 valence electrons. Structure: O=C=O (two double bonds).
          </p>
        </div>
        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-2">VSEPR Theory</h4>
          <p className="text-slate-700">
            Valence Shell Electron Pair Repulsion theory: electron pairs arrange to minimize repulsion.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
            <li>2 pairs → linear (180°)</li>
            <li>3 pairs → trigonal planar (120°)</li>
            <li>4 pairs → tetrahedral (109.5°)</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: PhysicalSciencesItem[] = [
  {
    prompt: 'What are the three main subatomic particles?',
    options: ['Proton, Neutron, Electron', 'Proton, Atom, Ion', 'Electron, Photon, Neutron', 'Nucleus, Shell, Orbit'],
    answer: 'Proton, Neutron, Electron',
    explanation: 'Protons (+), neutrons (neutral), and electrons (-) are the main subatomic particles.',
  },
  {
    prompt: 'What type of bond forms between sodium and chlorine?',
    options: ['Covalent', 'Metallic', 'Ionic', 'Hydrogen'],
    answer: 'Ionic',
    explanation: 'Sodium and chlorine form an ionic bond through electron transfer.',
  },
  {
    prompt: 'How many valence electrons does an element in Group 17 have?',
    options: ['1', '7', '8', '17'],
    answer: '7',
    explanation: 'Group 17 elements (halogens) have 7 valence electrons.',
  },
  {
    prompt: 'Which element has the electron configuration 2, 8, 7?',
    options: ['Fluorine', 'Chlorine', 'Oxygen', 'Nitrogen'],
    answer: 'Chlorine',
    explanation: 'Chlorine (Cl, Z=17) has 2 + 8 + 7 = 17 electrons: 2, 8, 7.',
  },
];

const AtomsPeriodicTableBonding = () => (
  <CapsSubjectTopic
    grade={10}
    title="Atoms, Periodic Table and Bonding"
    subtitle="Atomic structure and chemical bonds"
    learnSteps={learnSteps}
    task="gr10-atoms-periodic-table-bonding-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default AtomsPeriodicTableBonding;
