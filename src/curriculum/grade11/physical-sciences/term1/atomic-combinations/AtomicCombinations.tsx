import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EnPair, FactCards, ShapeRow } from '../../../../../components/diagrams/ps11/Ps11';
import { EN, MOLECULES, bondKind, deltaEN, isPolarMolecule, lonePairsIn, netDipole, shapeOfMolecule } from '../../../../../components/diagrams/ps11/ps11Helpers';

// Every number and shape below comes from ps11Helpers.ts (tested in ps11Helpers.test.ts and g11PsT1.test.ts).
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const mol = (f: string) => MOLECULES.find((m) => m.formula === f)!;
const water = mol('H₂O');
const ammonia = mol('NH₃');
const methane = mol('CH₄');
const co2 = mol('CO₂');

export const learnSteps: LearnStep[] = [
  {
    title: 'Covalent bonds and Lewis structures',
    content: slide(
      <>
        <Rule>A covalent bond is a shared pair of electrons between two atoms. A Lewis structure shows the valence electrons of the atoms as dots or crosses: shared pairs are bonding pairs and the pairs that are not shared are lone pairs.</Rule>
        <ShapeRow />
        <Worked
          title="Count the pairs on the central atom of water and ammonia"
          steps={[
            `Oxygen has ${water.valence} valence electrons and makes ${water.terminals} single bonds, so ${water.valence} − ${water.terminals} = ${water.valence - water.terminals} electrons are left: ${lonePairsIn(water)} lone pairs.`,
            `Nitrogen has ${ammonia.valence} valence electrons and makes ${ammonia.terminals} single bonds, so ${ammonia.valence} − ${ammonia.terminals} = ${ammonia.valence - ammonia.terminals} electrons are left: ${lonePairsIn(ammonia)} lone pair.`,
            'A double bond, as in CO₂, is two shared pairs between the same two atoms.',
          ]}
        />
        <Mistake>Counting a lone pair as a bond. A lone pair belongs to one atom only and is not shared.</Mistake>
      </>,
    ),
  },
  {
    title: 'Electronegativity and bond polarity',
    content: slide(
      <>
        <Rule>Electronegativity is the tendency of an atom to attract the shared electrons in a bond. The bigger the difference in electronegativity (ΔEN), the more unequally the electrons are shared. In this lesson: ΔEN up to 0,4 is non-polar covalent, above 0,4 up to 1,7 is polar covalent, and above 1,7 is ionic.</Rule>
        <EnPair a="H" b="Cl" ena={EN.H} enb={EN.Cl} kind={bondKind('H', 'Cl')} />
        <Worked
          title="Classify some bonds with the data-sheet values"
          steps={[
            `H–Cl: ΔEN = ${dc(EN.Cl)} − ${dc(EN.H)} = ${dc(deltaEN('H', 'Cl'))}, so the bond is ${bondKind('H', 'Cl')}.`,
            `Cl–Cl: ΔEN = ${dc(deltaEN('Cl', 'Cl'))}, so the bond is ${bondKind('Cl', 'Cl')}.`,
            `Na–Cl: ΔEN = ${dc(EN.Cl)} − ${dc(EN.Na)} = ${dc(deltaEN('Na', 'Cl'))}, so the bond is ${bondKind('Na', 'Cl')}.`,
            `O–H: ΔEN = ${dc(deltaEN('O', 'H'))}, so the bond is ${bondKind('O', 'H')}, and the oxygen end is partially negative.`,
          ]}
        />
        <Mistake>Thinking that every bond between different atoms is polar. A very small ΔEN, as in C–H (0,4), is counted as non-polar here.</Mistake>
      </>,
    ),
  },
  {
    title: 'Molecular shape: VSEPR',
    content: slide(
      <>
        <Rule>VSEPR theory says that electron pairs around a central atom repel each other and spread out as far apart as possible. The shape of the molecule is set by the number of bonding pairs and lone pairs.</Rule>
        <ShapeRow />
        <Worked
          title="Name the shape"
          steps={[
            `${co2.formula}: ${co2.regions} bonding regions and no lone pairs: ${shapeOfMolecule(co2).name}, ${shapeOfMolecule(co2).angle}°.`,
            `${methane.formula}: 4 bonding pairs and no lone pairs: ${shapeOfMolecule(methane).name}, ${dc(shapeOfMolecule(methane).angle)}°.`,
            `${ammonia.formula}: 3 bonding pairs and 1 lone pair: ${shapeOfMolecule(ammonia).name}, ${dc(shapeOfMolecule(ammonia).angle, 0)}°.`,
            `${water.formula}: 2 bonding pairs and 2 lone pairs: ${shapeOfMolecule(water).name}, ${dc(shapeOfMolecule(water).angle)}°.`,
          ]}
        />
        <Mistake>Ignoring the lone pairs. Water has four pairs around the oxygen like methane, but two of them are lone pairs, so its shape is bent and not tetrahedral.</Mistake>
      </>,
    ),
  },
  {
    title: 'Is the molecule polar?',
    content: slide(
      <>
        <Rule>A molecule is polar if its bond dipoles do not cancel. Polar bonds in a symmetrical shape cancel and give a non-polar molecule, but polar bonds in an unsymmetrical shape give a polar molecule.</Rule>
        <FactCards
          cards={[
            { title: 'CO₂ and CH₄', line1: 'symmetrical: dipoles', line2: 'cancel, non-polar' },
            { title: 'H₂O and NH₃', line1: 'bent or pyramidal:', line2: 'dipoles add, polar' },
            { title: 'Test', line1: 'draw the shape, add', line2: 'the dipoles as arrows' },
          ]}
          aria="Deciding whether a molecule is polar. CO2 and CH4 are symmetrical, so their bond dipoles cancel and they are non-polar. H2O and NH3 are bent or pyramidal, so the dipoles add and they are polar. To test, draw the shape and add the dipoles as arrows."
        />
        <Worked
          title="Add the bond dipoles"
          steps={[
            `${co2.formula} is linear: the two C=O dipoles point in opposite directions, so the net dipole is ${dc(netDipole(co2))} and the molecule is ${isPolarMolecule(co2) ? 'polar' : 'non-polar'}.`,
            `${methane.formula} is tetrahedral: the four dipoles cancel, so it is ${isPolarMolecule(methane) ? 'polar' : 'non-polar'}.`,
            `${water.formula} is bent: the two O–H dipoles do not cancel, so it is ${isPolarMolecule(water) ? 'polar' : 'non-polar'}.`,
            `${ammonia.formula} is trigonal pyramidal, so it is ${isPolarMolecule(ammonia) ? 'polar' : 'non-polar'}.`,
          ]}
        />
        <Mistake>Saying that CO₂ is polar because its C=O bonds are polar. The shape is linear, so the dipoles cancel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bond length and bond energy',
    content: slide(
      <>
        <Rule>Bond length is the distance between the nuclei of two bonded atoms. Bond energy is the energy needed to break a bond. Between the same two atoms a double bond is shorter and stronger than a single bond, and a triple bond is shorter and stronger still.</Rule>
        <FactCards
          cards={[
            { title: 'Single bond', line1: 'longest and weakest', line2: 'of the three' },
            { title: 'Double bond', line1: 'shorter and stronger', line2: 'than a single bond' },
            { title: 'Triple bond', line1: 'shortest and', line2: 'strongest' },
          ]}
          aria="Bond length and energy. A single bond is the longest and weakest. A double bond is shorter and stronger than a single bond. A triple bond is the shortest and strongest."
        />
        <Worked
          title="Compare two bonds"
          steps={[
            'A C=C bond is a double bond and a C–C bond is a single bond between the same atoms.',
            'The C=C bond is shorter, and more energy is needed to break it.',
            'The more shared pairs between two atoms, the stronger the pull and the closer the nuclei.',
          ]}
        />
        <Mistake>Saying that a stronger bond is longer. The stronger bond is the shorter one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many lone pairs are on the oxygen atom in water?</>,
          <>H–Cl has ΔEN = 0,9. What kind of bond is it?</>,
          <>What shape is CH₄?</>,
          <>Why is CO₂ a non-polar molecule although it has polar bonds?</>,
        ]}
        answers={[
          <>{lonePairsIn(water)} lone pairs.</>,
          <>A polar covalent bond.</>,
          <>Tetrahedral.</>,
          <>It is linear, so the two bond dipoles cancel.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many valence electrons does a nitrogen atom have?",
    options: ["3", "4", "5", "7"],
    answer: "5",
    explanation: "Nitrogen is in group 15, so it has 5 valence electrons.",
  },
  {
    prompt: "How many lone pairs are on the central atom in a molecule of water?",
    options: ["2", "0", "1", "4"],
    answer: "2",
    explanation: "Oxygen has 6 valence electrons and uses 2 in bonds, so 4 electrons are left: 2 lone pairs.",
  },
  {
    prompt: "How many lone pairs are on the central atom in a molecule of ammonia (NH₃)?",
    options: ["0", "2", "3", "1"],
    answer: "1",
    explanation: "Nitrogen has 5 valence electrons and uses 3 in bonds, so 2 electrons are left: 1 lone pair.",
  },
  {
    prompt: "What is the molecular shape of methane (CH₄)?",
    options: ["Square planar", "Tetrahedral", "Trigonal pyramidal", "Linear"],
    answer: "Tetrahedral",
    explanation: "Four bonding pairs and no lone pairs give a tetrahedral shape with bond angles of 109,5°.",
  },
  {
    prompt: "What is the molecular shape of ammonia (NH₃)?",
    options: ["Tetrahedral", "Trigonal pyramidal", "Trigonal planar", "Bent"],
    answer: "Trigonal pyramidal",
    explanation: "Three bonding pairs and one lone pair give a trigonal pyramidal shape.",
  },
  {
    prompt: "What is the bond angle in a molecule of water?",
    options: ["109,5°", "120°", "180°", "104,5°"],
    answer: "104,5°",
    explanation: "Two bonding pairs and two lone pairs give a bent shape. The lone pairs push the bonds closer than 109,5°.",
  },
  {
    prompt: "What is the molecular shape of carbon dioxide (CO₂)?",
    options: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
    answer: "Linear",
    explanation: "Two bonding regions and no lone pairs give a linear shape with a bond angle of 180°.",
  },
  {
    prompt: "The electronegativity of H is 2,1 and of Cl is 3,0. What kind of bond is H–Cl, using the rule in this lesson?",
    options: ["Non-polar covalent", "Ionic", "Polar covalent", "Metallic"],
    answer: "Polar covalent",
    explanation: "ΔEN = 3,0 − 2,1 = 0,9, which is above 0,4 and not above 1,7, so the bond is polar covalent.",
  },
  {
    prompt: "The electronegativity of Na is 0,9 and of Cl is 3,0. What kind of bond is Na–Cl, using the rule in this lesson?",
    options: ["Polar covalent", "Non-polar covalent", "Metallic", "Ionic"],
    answer: "Ionic",
    explanation: "ΔEN = 3,0 − 0,9 = 2,1, which is above 1,7, so the bond is ionic.",
  },
  {
    prompt: "What kind of bond is Cl–Cl, using the rule in this lesson?",
    options: ["Polar covalent", "Non-polar covalent", "Ionic", "Hydrogen"],
    answer: "Non-polar covalent",
    explanation: "Both atoms have the same electronegativity, so ΔEN = 0 and the electrons are shared equally.",
  },
  {
    prompt: "Which of these bonds is the most polar? (EN: H 2,1; C 2,5; N 3,0; O 3,5)",
    options: ["O–H", "C–H", "N–H", "C–C"],
    answer: "O–H",
    explanation: "ΔEN for O–H is 1,4, for N–H it is 0,9, for C–H it is 0,4 and for C–C it is 0.",
  },
  {
    prompt: "Why is carbon dioxide a non-polar molecule although it has polar bonds?",
    options: ["Its bonds are non-polar", "It has lone pairs on the carbon atom", "It is linear, so the two bond dipoles cancel", "It has only one bond"],
    answer: "It is linear, so the two bond dipoles cancel",
    explanation: "The two C=O dipoles are equal and point in opposite directions, so they cancel.",
  },
  {
    prompt: "Which of these molecules is polar?",
    options: ["CO₂", "CH₄", "H₂O", "BF₃"],
    answer: "H₂O",
    explanation: "Water is bent, so its two O–H dipoles do not cancel. CO₂, CH₄ and BF₃ are symmetrical.",
  },
  {
    prompt: "Between the same two atoms, which bond is the shortest and the strongest?",
    options: ["A triple bond", "A single bond", "A double bond", "A hydrogen bond"],
    answer: "A triple bond",
    explanation: "The more shared pairs between two atoms, the shorter and stronger the bond.",
  },
];

const AtomicCombinations = () => (
  <CapsSubjectTopic
    title="Atomic Combinations"
    subtitle="Lewis structures, electronegativity, VSEPR shapes and molecular polarity"
    learnSteps={learnSteps}
    task="gr11-atomic-combinations-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default AtomicCombinations;
