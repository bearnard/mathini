import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ParticlePictures } from '../../../../../components/diagrams/matter10/Matter10';
import { SUBSTANCES, atomCount, elementCount } from '../../../../../components/diagrams/matter10/matter10Helpers';

// Every number comes from matter10Helpers.ts (tested in matter10Helpers.test.ts and g10PsW2T2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Atoms, molecules and formulae',
    content: slide(
      <>
        <Rule>Atoms join to make the particles of a substance. A molecule is a group of atoms joined by covalent bonds. A chemical formula shows the elements in a substance and the number of atoms of each: the small number after a symbol applies to that symbol only.</Rule>
        <FactCards
          cards={[
            { title: 'H₂O', line1: `${atomCount('H2O')} atoms: 2 hydrogen and`, line2: '1 oxygen in each molecule' },
            { title: 'H₂SO₄', line1: `${atomCount('H2SO4')} atoms of ${elementCount('H2SO4')} different elements`, line2: 'in each molecule' },
            { title: 'C₆H₁₂O₆', line1: `${atomCount('C6H12O6')} atoms of ${elementCount('C6H12O6')} elements:`, line2: 'a glucose molecule' },
          ]}
          aria="Reading formulae. H2O has 3 atoms: 2 hydrogen and 1 oxygen in each molecule. H2SO4 has 7 atoms of 3 different elements in each molecule. C6H12O6 has 24 atoms of 3 elements: a glucose molecule."
        />
        <Worked
          title="Count the atoms in Ca(OH)₂"
          steps={[
            'The bracket (OH) is multiplied by 2, so there are 2 O and 2 H.',
            `Add the calcium: 1 + 2 + 2 = ${atomCount('Ca(OH)2')} atoms in one formula unit.`,
            'It contains 3 different elements: calcium, oxygen and hydrogen.',
          ]}
        />
        <Mistake>Forgetting that a number after a bracket multiplies everything inside the bracket.</Mistake>
      </>,
    ),
  },
  {
    title: 'Molecular, ionic and metallic substances',
    content: slide(
      <>
        <Rule>Substances are made of molecules (molecular substances), of positive and negative ions (ionic substances) or of positive ions in a sea of free electrons (metals). The kind of particle and the forces between them decide the properties.</Rule>
        <ParticlePictures />
        <Worked
          title="Match the substance to its kind"
          steps={[
            `Water, ${SUBSTANCES[0].example.split(', ')[1]}, is molecular: separate molecules.`,
            `Sodium chloride, NaCl, is ionic: a lattice of Na⁺ and Cl⁻ ions.`,
            'Copper is metallic: positive ions in a sea of free electrons.',
          ]}
        />
        <Mistake>Calling the particles of sodium chloride molecules. It is a lattice of ions, so we write it as a formula unit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Structure and properties',
    content: slide(
      <>
        <Rule>Molecular substances have low melting points because the forces between molecules are weak, and they do not conduct. Ionic solids have high melting points and conduct only when molten or dissolved, because then the ions can move. Metals conduct as solids because their electrons are free to move, and they can be hammered into shape.</Rule>
        <FactCards
          cards={[
            { title: 'Molecular', line1: 'low melting point,', line2: 'does not conduct electricity' },
            { title: 'Ionic', line1: 'high melting point, brittle, conducts', line2: 'only when molten or dissolved' },
            { title: 'Metallic', line1: 'conducts as a solid, shiny,', line2: 'can be hammered into shape' },
          ]}
          aria="Properties by kind of substance. Molecular: low melting point and does not conduct electricity. Ionic: high melting point, brittle, and conducts only when molten or dissolved. Metallic: conducts as a solid, shiny and can be hammered into shape."
        />
        <Worked
          title="Explain a property"
          steps={[
            'Solid salt does not conduct because its ions are fixed in the lattice.',
            'Dissolved salt does conduct because the ions are free to move.',
            'Copper wire conducts as a solid because its free electrons carry the current.',
          ]}
        />
        <Mistake>Saying that molecular substances melt easily because the bonds inside the molecules are weak. Those bonds are strong; the forces between molecules are weak.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many atoms are in one molecule of H₂SO₄?</>,
          <>What particles make up sodium chloride?</>,
          <>Why does solid copper conduct electricity?</>,
          <>Why does molten sodium chloride conduct?</>,
        ]}
        answers={[
          <>{atomCount('H2SO4')} atoms.</>,
          <>Na⁺ and Cl⁻ ions in a lattice.</>,
          <>Its electrons are free to move.</>,
          <>Its ions are free to move.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many atoms are in one molecule of H₂SO₄?",
    options: ["3", "4", "7", "6"],
    answer: "7",
    explanation: "2 hydrogen + 1 sulfur + 4 oxygen = 7 atoms.",
  },
  {
    prompt: "How many atoms are in one molecule of glucose, C₆H₁₂O₆?",
    options: ["24", "6", "12", "18"],
    answer: "24",
    explanation: "6 + 12 + 6 = 24 atoms.",
  },
  {
    prompt: "How many atoms are in one formula unit of Ca(OH)₂?",
    options: ["3", "4", "6", "5"],
    answer: "5",
    explanation: "1 calcium + 2 oxygen + 2 hydrogen = 5 atoms.",
  },
  {
    prompt: "How many different elements are in the compound C₆H₁₂O₆?",
    options: ["6", "3", "12", "24"],
    answer: "3",
    explanation: "The elements are carbon, hydrogen and oxygen.",
  },
  {
    prompt: "What is a molecule?",
    options: ["A positive ion in a sea of electrons", "A group of atoms joined by covalent bonds", "A single atom of a gas", "A lattice of alternating ions"],
    answer: "A group of atoms joined by covalent bonds",
    explanation: "A molecule is a group of atoms held together by covalent bonds.",
  },
  {
    prompt: "Which of these is a molecular substance?",
    options: ["Sodium chloride", "Copper", "Magnesium oxide", "Water"],
    answer: "Water",
    explanation: "Water is made of separate H₂O molecules.",
  },
  {
    prompt: "Which of these is an ionic substance?",
    options: ["Sodium chloride", "Water", "Copper", "Carbon dioxide"],
    answer: "Sodium chloride",
    explanation: "Sodium chloride is a lattice of Na⁺ and Cl⁻ ions.",
  },
  {
    prompt: "Which of these is a metallic substance?",
    options: ["Water", "Sodium chloride", "Copper", "Carbon dioxide"],
    answer: "Copper",
    explanation: "A metal has positive ions in a sea of free electrons.",
  },
  {
    prompt: "Why does solid copper conduct electricity?",
    options: ["It has free ions that can move", "Its molecules can move", "It has no particles that can move", "It has free electrons that can move"],
    answer: "It has free electrons that can move",
    explanation: "The free electrons in the metal carry the current.",
  },
  {
    prompt: "Why does solid sodium chloride not conduct electricity?",
    options: ["It has no ions at all", "Its ions are fixed in the lattice", "Its electrons are free but small", "It is made of molecules"],
    answer: "Its ions are fixed in the lattice",
    explanation: "The ions cannot move while the crystal is solid.",
  },
  {
    prompt: "Why does molten sodium chloride conduct electricity?",
    options: ["Its ions are free to move", "Its molecules are free to move", "Its electrons are free to move", "It has become a metal"],
    answer: "Its ions are free to move",
    explanation: "When molten, the ions can move and carry charge.",
  },
  {
    prompt: "Why do molecular substances usually have low melting points?",
    options: ["The bonds inside the molecules are weak", "They contain free electrons", "The forces between the molecules are weak", "They are made of ions"],
    answer: "The forces between the molecules are weak",
    explanation: "Little energy is needed to separate the molecules from each other.",
  },
  {
    prompt: "Which property is typical of an ionic solid?",
    options: ["Low melting point and soft", "Conducts well as a solid", "High melting point and brittle", "Can be hammered into thin sheets"],
    answer: "High melting point and brittle",
    explanation: "Strong attractions between ions give a high melting point, and the crystal breaks if layers shift.",
  },
  {
    prompt: "Which property is typical of a metal?",
    options: ["Can be hammered into shape", "Brittle when hit", "Does not conduct as a solid", "Low melting point"],
    answer: "Can be hammered into shape",
    explanation: "The layers of positive ions can slide over each other in the sea of electrons.",
  },
];

const ParticlesSubstances = () => (
  <CapsSubjectTopic
    title="Particles Substances Are Made Of"
    subtitle="Atoms, molecules, ionic and metallic substances and how structure decides properties"
    learnSteps={learnSteps}
    task="gr10-particles-substances-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ParticlesSubstances;
