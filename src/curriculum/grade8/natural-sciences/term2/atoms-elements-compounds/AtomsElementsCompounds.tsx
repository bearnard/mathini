import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { AtomDiagram } from '../../../../../components/diagrams/ns8/Ns8';
import { ELEMENTS, atomsInFormula, byName, electronsOf, shells, waterRatio } from '../../../../../components/diagrams/ns8/ns8Helpers';

// Every number comes from ns8Helpers.ts (tested in ns8Helpers.test.ts and g8NsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const na = byName('sodium');
const [h, o] = waterRatio();

export const learnSteps: LearnStep[] = [
  {
    title: 'Atoms and elements',
    content: slide(
      <>
        <Rule>All matter is made of tiny particles called atoms. An element is a substance made of only one kind of atom, and it cannot be broken down into simpler substances by chemical means. The atoms of one element differ from the atoms of every other element, and all the known elements are listed on the Periodic Table.</Rule>
        <FactCards
          cards={[
            { title: 'Hydrogen H, oxygen O', line1: 'elements: each is made of', line2: 'one kind of atom' },
            { title: 'Carbon C, sodium Na', line1: 'elements: listed on the', line2: 'Periodic Table' },
            { title: 'Copper', line1: 'all the atoms of copper are', line2: 'identical to each other' },
          ]}
          aria="Atoms and elements. Hydrogen and oxygen are elements, each made of one kind of atom. Carbon and sodium are elements listed on the Periodic Table. All the atoms of copper are identical to each other."
        />
        <Worked
          title="Elements on the Periodic Table"
          steps={[
            `The first ${ELEMENTS.length} elements start with hydrogen (H) and helium (He) and end with calcium (Ca).`,
            'Each element has its own symbol: carbon is C, oxygen is O, sodium is Na and chlorine is Cl.',
            'There are only a limited number of elements, but they join to make millions of compounds.',
          ]}
        />
        <Mistake>Calling water an element. Water is made of hydrogen and oxygen atoms, so it is a compound.</Mistake>
      </>,
    ),
  },
  {
    title: 'The structure of an atom',
    content: slide(
      <>
        <Rule>An atom is made of smaller sub-atomic particles: protons, neutrons and electrons. The central region is the nucleus. It holds the positively charged protons and the neutral neutrons. The negatively charged electrons move around the nucleus. An atom is neutral because it has as many electrons as protons.</Rule>
        <AtomDiagram symbol="Na" />
        <Worked
          title={`An atom of sodium (Na) has ${na.Z} protons`}
          steps={[
            `The nucleus has ${na.Z} protons (+), so the atom needs ${electronsOf(na.Z)} electrons (−) to be neutral.`,
            `The electrons are arranged around the nucleus as ${shells(na.Z).join(', ')}.`,
            'The charges cancel, so the atom as a whole has no charge.',
          ]}
        />
        <Mistake>Thinking that the electrons are inside the nucleus. They move in the space around it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Elements, molecules and compounds',
    content: slide(
      <>
        <Rule>Elements and compounds are pure substances. Some elements form molecules of two atoms of the same kind: hydrogen H₂, nitrogen N₂, oxygen O₂ and chlorine Cl₂. A compound is made of atoms of two or more different elements chemically bonded together in a fixed ratio, such as water H₂O, carbon dioxide CO₂ and salt NaCl. A chemical bond is the force that holds atoms together.</Rule>
        <FactCards
          cards={[
            { title: 'Molecule of an element', line1: 'O₂ has 2 atoms of one kind;', line2: 'H₂, N₂ and Cl₂ are similar' },
            { title: 'Compound: water H₂O', line1: `always ${h} hydrogen atoms to`, line2: `${o} oxygen atom (${atomsInFormula('H2O')} atoms)` },
            { title: 'Compound: CO₂ and NaCl', line1: 'atoms of different elements', line2: 'bonded in a fixed ratio' },
          ]}
          aria="Molecules and compounds. A molecule of an element such as oxygen, O2, has two atoms of one kind. Water, H2O, always has 2 hydrogen atoms to 1 oxygen atom, 3 atoms in all. Carbon dioxide and salt are compounds made of atoms of different elements bonded in a fixed ratio."
        />
        <Worked
          title="Break down a compound"
          steps={[
            'Passing electricity through water (electrolysis) breaks it into hydrogen and oxygen.',
            'Heating potassium permanganate breaks it down to give oxygen gas, which relights a glowing splint.',
            'A compound can be broken down by a chemical change, such as heating or electrolysis, but an element cannot.',
          ]}
        />
        <Mistake>Thinking that a molecule must be a compound. O₂ is a molecule of an element.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixtures',
    content: slide(
      <>
        <Rule>Elements and compounds are often found mixed together, as in air, sea water, rocks and living things. A mixture is separated by physical means, but a compound can only be separated by chemical means. The substances in a mixture are not bonded together in a fixed ratio.</Rule>
        <FactCards
          cards={[
            { title: 'Mixture', line1: 'air, sea water, rocks:', line2: 'separated by physical means' },
            { title: 'Compound', line1: 'water, salt, CO₂: separated', line2: 'only by chemical means' },
            { title: 'Difference', line1: 'a compound has a fixed ratio', line2: 'and new properties' },
          ]}
          aria="Mixtures and compounds. A mixture such as air, sea water or rocks can be separated by physical means. A compound such as water, salt or carbon dioxide can only be separated by chemical means. A compound has a fixed ratio of atoms and new properties."
        />
        <Worked
          title="Mixture or compound?"
          steps={[
            'Sea water is salt dissolved in water. Evaporating the water leaves the salt: a mixture.',
            'Water (H₂O) cannot be separated by filtering or evaporating: it is a compound.',
            'Air contains nitrogen, oxygen and other gases mixed together: a mixture.',
          ]}
        />
        <Mistake>Saying that a mixture and a compound are the same thing. Only a compound has its atoms chemically bonded in a fixed ratio.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the particles found inside an atom.</>,
          <>Why is an atom neutral?</>,
          <>How many hydrogen atoms are in one molecule of water?</>,
          <>Is air an element, a compound or a mixture?</>,
        ]}
        answers={[
          <>Protons, neutrons and electrons.</>,
          <>It has as many electrons as protons.</>,
          <>{h}.</>,
          <>A mixture.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which statement correctly describes an element?",
    options: ["It is made of two kinds of atoms bonded", "It is a mixture of several substances", "It is made of one kind of atom only", "It can be broken down by chemical means"],
    answer: "It is made of one kind of atom only",
    explanation: "An element contains atoms of only one kind and cannot be broken down by chemical means.",
  },
  {
    prompt: "Which of these is an element?",
    options: ["Oxygen", "Water", "Salt", "Carbon dioxide"],
    answer: "Oxygen",
    explanation: "Oxygen is made of one kind of atom.",
  },
  {
    prompt: "Which three kinds of particles make up an atom?",
    options: ["Atoms, molecules and ions", "Nuclei, shells and bonds", "Protons, nuclei and elements", "Protons, neutrons and electrons"],
    answer: "Protons, neutrons and electrons",
    explanation: "Atoms are made of protons, neutrons and electrons.",
  },
  {
    prompt: "Which particles are found in the nucleus of an atom?",
    options: ["Protons and electrons", "Protons and neutrons", "Neutrons and electrons", "Only electrons"],
    answer: "Protons and neutrons",
    explanation: "The nucleus holds the protons and neutrons.",
  },
  {
    prompt: "Which kind of charge does an electron carry?",
    options: ["A positive charge", "A negative charge", "No charge at all", "A charge set by the element"],
    answer: "A negative charge",
    explanation: "Electrons are negatively charged; protons are positive and neutrons are neutral.",
  },
  {
    prompt: "Why is an atom neutral?",
    options: ["It has no protons", "It has more neutrons than electrons", "Its electrons are inside the nucleus", "It has as many electrons as protons"],
    answer: "It has as many electrons as protons",
    explanation: "The positive and negative charges are equal and cancel.",
  },
  {
    prompt: "An atom of sodium has 11 protons. How many electrons does it have?",
    options: ["11", "1", "12", "22"],
    answer: "11",
    explanation: "A neutral atom has as many electrons as protons.",
  },
  {
    prompt: "Which statement correctly describes a compound?",
    options: ["A mixture of gases that can be filtered", "A substance made of one kind of atom", "Different atoms bonded in a fixed ratio", "Any substance that will dissolve in water"],
    answer: "Different atoms bonded in a fixed ratio",
    explanation: "Compounds have atoms of different elements bonded in a fixed ratio.",
  },
  {
    prompt: "Which of these is a compound?",
    options: ["Oxygen", "Hydrogen", "Chlorine", "Carbon dioxide"],
    answer: "Carbon dioxide",
    explanation: "Carbon dioxide (CO₂) is made of carbon and oxygen atoms bonded together.",
  },
  {
    prompt: "A water molecule, H₂O, contains how many atoms altogether?",
    options: ["2", "3", "1", "18"],
    answer: "3",
    explanation: "2 hydrogen atoms and 1 oxygen atom make 3 atoms.",
  },
  {
    prompt: "What is the ratio of hydrogen atoms to oxygen atoms in water?",
    options: ["2 to 1", "1 to 2", "1 to 1", "2 to 2"],
    answer: "2 to 1",
    explanation: "Water is always two hydrogen atoms to one oxygen atom.",
  },
  {
    prompt: "Which of these is made of molecules of a single element?",
    options: ["H₂O", "CO₂", "O₂", "NaCl"],
    answer: "O₂",
    explanation: "O₂ has two atoms of the same kind, so it is a molecule of an element.",
  },
  {
    prompt: "What is a chemical bond?",
    options: ["A mixture of two elements", "A particle inside the nucleus", "The force that holds atoms together", "The empty space between atoms"],
    answer: "The force that holds atoms together",
    explanation: "A chemical bond holds atoms together in molecules and compounds.",
  },
  {
    prompt: "How can a mixture such as sea water be separated?",
    options: ["By a physical method", "Only by a chemical method", "It cannot be separated at all", "By changing its atoms"],
    answer: "By a physical method",
    explanation: "Mixtures are separated by physical means; compounds need chemical means.",
  },
];

const AtomsElementsCompounds = () => (
  <CapsSubjectTopic
    title="Atoms, Elements, Compounds and Mixtures"
    subtitle="Atoms and their particles, elements, molecules, compounds and mixtures"
    learnSteps={learnSteps}
    task="gr8-atoms-elements-compounds-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default AtomsElementsCompounds;
