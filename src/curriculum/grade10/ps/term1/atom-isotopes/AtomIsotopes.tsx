import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { AbundanceBars, NuclideTable } from '../../../../../components/diagrams/atom10/Atom10';
import { ISOTOPES, NUCLIDES, averageMass, electrons, neutrons, oneDp, protons } from '../../../../../components/diagrams/atom10/atom10Helpers';

// Every number comes from atom10Helpers.ts (tested in atom10Helpers.test.ts and g10PsW2T1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const cl = oneDp(averageMass(ISOTOPES.chlorine));
const mg = oneDp(averageMass(ISOTOPES.magnesium));

export const learnSteps: LearnStep[] = [
  {
    title: 'Models of the atom',
    content: slide(
      <>
        <Rule>Scientists have changed the model of the atom as new evidence appeared. A model is a picture or idea that explains what we observe. When evidence does not fit, the model is improved.</Rule>
        <FactCards
          cards={[
            { title: 'Dalton', line1: 'atoms are tiny, solid', line2: 'spheres that cannot be divided' },
            { title: 'Thomson', line1: 'a positive sphere with', line2: 'electrons spread through it' },
            { title: 'Rutherford', line1: 'a tiny, dense, positive nucleus', line2: 'with electrons around it' },
            { title: 'Bohr', line1: 'electrons in energy levels', line2: 'around the nucleus' },
          ]}
          aria="Models of the atom in order. Dalton: atoms are tiny solid spheres that cannot be divided. Thomson: a positive sphere with electrons spread through it. Rutherford: a tiny dense positive nucleus with electrons around it. Bohr: electrons in energy levels around the nucleus."
        />
        <Worked
          title="Why was the nucleus model needed?"
          steps={[
            'In the gold foil experiment most alpha particles passed straight through the foil.',
            'A few were deflected through large angles, and a very few bounced back.',
            'So most of the atom is empty space, and the positive charge and most of the mass are in a tiny nucleus.',
          ]}
        />
        <Mistake>Thinking that an old model was a mistake that had no use. Each model explained the evidence of its time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mass number, atomic number and particles',
    content: slide(
      <>
        <Rule>The atomic number Z is the number of protons. The mass number A is the number of protons plus neutrons. So the number of neutrons is A − Z. A neutral atom has as many electrons as protons.</Rule>
        <NuclideTable
          rows={[
            { nuclide: NUCLIDES.cl35 },
            { nuclide: NUCLIDES.c14 },
            { nuclide: NUCLIDES.na23, charge: 1 },
            { nuclide: NUCLIDES.ca40, charge: 2 },
          ]}
        />
        <Worked
          title="Particles in ³⁵₁₇Cl"
          steps={[
            `Protons: Z = ${protons(NUCLIDES.cl35)}.`,
            `Neutrons: A − Z = ${NUCLIDES.cl35.A} − ${NUCLIDES.cl35.Z} = ${neutrons(NUCLIDES.cl35)}.`,
            `Electrons in the neutral atom: ${electrons(NUCLIDES.cl35)}. In an ion the charge changes this: Na⁺ has ${electrons(NUCLIDES.na23, 1)} electrons.`,
          ]}
        />
        <Mistake>Using the mass number as the number of protons. Only the atomic number gives the protons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Isotopes and relative atomic mass',
    content: slide(
      <>
        <Rule>Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, so they have different mass numbers. The relative atomic mass of an element is the average mass of its isotopes, weighted by how much of each there is.</Rule>
        <AbundanceBars element="Cl" shares={ISOTOPES.chlorine} ar={cl} />
        <Worked
          title="Relative atomic mass of chlorine"
          steps={[
            `Chlorine is about ${ISOTOPES.chlorine[0].percent}% Cl-${ISOTOPES.chlorine[0].mass} and ${ISOTOPES.chlorine[1].percent}% Cl-${ISOTOPES.chlorine[1].mass}.`,
            `Average = (${ISOTOPES.chlorine[0].mass} × ${ISOTOPES.chlorine[0].percent} + ${ISOTOPES.chlorine[1].mass} × ${ISOTOPES.chlorine[1].percent}) ÷ 100 = ${cl}.`,
            'This is why the periodic table gives 35,5 for chlorine, not a whole number.',
          ]}
        />
        <Mistake>Taking a simple average of the two masses. Each mass must be weighted by its abundance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many neutrons are in an atom with Z = 6 and A = 14?</>,
          <>What is the same in two isotopes of an element?</>,
          <>An element has two isotopes of mass 10 (20%) and 11 (80%). What is its relative atomic mass?</>,
          <>How many electrons does a Ca²⁺ ion of ⁴⁰₂₀Ca have?</>,
        ]}
        answers={[
          <>{neutrons(NUCLIDES.c14)}.</>,
          <>The number of protons (the atomic number).</>,
          <>{oneDp(averageMass(ISOTOPES.boron))}.</>,
          <>{electrons(NUCLIDES.ca40, 2)}. The magnesium example gives {mg}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why was the nucleus model of the atom proposed?",
    options: ["All of the alpha particles bounced back from the foil", "Electrons were seen leaving the thin gold foil", "A few alpha particles were deflected by gold foil", "Every alpha particle passed through the foil unchanged"],
    answer: "A few alpha particles were deflected by gold foil",
    explanation: "The deflection of a few alpha particles showed a tiny, dense, positive centre.",
  },
  {
    prompt: "According to the Rutherford model, where is most of the mass of an atom?",
    options: ["In a small nucleus", "Spread evenly through the atom", "In the outer electrons", "In the empty space"],
    answer: "In a small nucleus",
    explanation: "The nucleus is small and dense and holds nearly all of the mass.",
  },
  {
    prompt: "Which model describes electrons in energy levels around the nucleus?",
    options: ["The Dalton model", "The Thomson model", "The Rutherford model", "The Bohr model"],
    answer: "The Bohr model",
    explanation: "Bohr placed electrons in energy levels.",
  },
  {
    prompt: "What does the atomic number tell us?",
    options: ["The number of neutrons", "The number of protons", "The number of protons and neutrons", "The number of energy levels"],
    answer: "The number of protons",
    explanation: "The atomic number Z is the number of protons.",
  },
  {
    prompt: "An atom has Z = 11 and A = 23. How many neutrons does it have?",
    options: ["11", "12", "23", "34"],
    answer: "12",
    explanation: "Neutrons = A − Z = 23 − 11 = 12.",
  },
  {
    prompt: "How many protons are in a ³⁷₁₇Cl atom?",
    options: ["20", "37", "54", "17"],
    answer: "17",
    explanation: "The number of protons is the atomic number, 17.",
  },
  {
    prompt: "How many neutrons are in a ³⁷₁₇Cl atom?",
    options: ["20", "17", "37", "54"],
    answer: "20",
    explanation: "Neutrons = 37 − 17 = 20.",
  },
  {
    prompt: "How many electrons are in a neutral atom of ¹⁴₆C?",
    options: ["8", "14", "6", "20"],
    answer: "6",
    explanation: "A neutral atom has as many electrons as protons, and Z = 6.",
  },
  {
    prompt: "How many electrons are in a Na⁺ ion of ²³₁₁Na?",
    options: ["11", "12", "23", "10"],
    answer: "10",
    explanation: "Na has 11 electrons and loses one to form Na⁺, leaving 10.",
  },
  {
    prompt: "What is true of two isotopes of the same element?",
    options: ["They have different numbers of protons", "They have different numbers of neutrons", "They have different numbers of electrons in the neutral atom", "They are different elements"],
    answer: "They have different numbers of neutrons",
    explanation: "Isotopes share the atomic number and differ in mass number.",
  },
  {
    prompt: "What is the relative atomic mass of an element?",
    options: ["The weighted average mass of its isotopes", "The mass of its most common isotope", "The number of its protons", "The sum of the masses of all its isotopes"],
    answer: "The weighted average mass of its isotopes",
    explanation: "It is the average of the isotope masses, weighted by abundance.",
  },
  {
    prompt: "Chlorine is about 75% Cl-35 and 25% Cl-37. What is its relative atomic mass to one decimal place?",
    options: ["36,0", "35,0", "35,5", "36,5"],
    answer: "35,5",
    explanation: "(35 × 75 + 37 × 25) ÷ 100 = 35,5.",
  },
  {
    prompt: "Boron is about 20% B-10 and 80% B-11. What is its relative atomic mass to one decimal place?",
    options: ["10,5", "10,2", "10,8", "11,0"],
    answer: "10,8",
    explanation: "(10 × 20 + 11 × 80) ÷ 100 = 10,8.",
  },
  {
    prompt: "Magnesium is about 79% Mg-24, 10% Mg-25 and 11% Mg-26. What is its relative atomic mass to one decimal place?",
    options: ["24,3", "25,0", "24,0", "24,8"],
    answer: "24,3",
    explanation: "(24 × 79 + 25 × 10 + 26 × 11) ÷ 100 = 24,32, which is 24,3 to one decimal place.",
  },
];

const AtomIsotopes = () => (
  <CapsSubjectTopic
    title="The Atom and Isotopes"
    subtitle="Models of the atom, mass and atomic number, isotopes and relative atomic mass"
    learnSteps={learnSteps}
    task="gr10-atom-isotopes-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default AtomIsotopes;
