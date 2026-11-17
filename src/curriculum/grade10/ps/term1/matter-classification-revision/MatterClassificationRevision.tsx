import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/waves10/Waves10';
import { IONS, ionicFormula, ionicSubscripts } from '../../../../../components/diagrams/waves10/waves10Helpers';

// Every formula below comes from waves10Helpers.ts (tested in waves10Helpers.test.ts and g10PsT1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const ion = (name: string) => `${IONS[name].symbol}${IONS[name].cation ? '⁺' : '⁻'}`;
const sup = (n: number) => (n === 1 ? '' : String(n).replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]));
const charged = (name: string) => `${IONS[name].symbol}${sup(IONS[name].charge)}${IONS[name].cation ? '⁺' : '⁻'}`;
void ion;
const al = ionicSubscripts(IONS.aluminium.charge, IONS.oxide.charge);

export const learnSteps: LearnStep[] = [
  {
    title: 'Classifying matter',
    content: slide(
      <>
        <Rule>Matter is either a pure substance or a mixture. A pure substance is an element or a compound. A mixture is homogeneous if it looks the same all through (a solution) and heterogeneous if you can see its parts.</Rule>
        <FactCards
          cards={[
            { title: 'Element', line1: 'one kind of atom:', line2: 'iron, oxygen, gold' },
            { title: 'Compound', line1: 'two or more elements joined', line2: 'chemically: water, NaCl' },
            { title: 'Mixture', line1: 'not joined: air (homogeneous),', line2: 'sand and water (not)' },
          ]}
          aria="Kinds of matter. An element has one kind of atom, such as iron, oxygen or gold. A compound has two or more elements joined chemically, such as water or sodium chloride. A mixture is not joined chemically, such as air, which is homogeneous, or sand and water, which is heterogeneous."
        />
        <Worked
          title="Classify these"
          steps={[
            'Iron: an element, because it has only iron atoms.',
            'Water, H₂O: a compound, because hydrogen and oxygen are joined chemically.',
            'Air: a homogeneous mixture of gases. Sand in water: a heterogeneous mixture, because you can see the sand.',
            'Brass is a mixture of copper and zinc that looks the same all through, so it is a homogeneous mixture.',
          ]}
        />
        <Mistake>Calling a mixture a compound. The parts of a mixture are not joined chemically and can be separated by physical means.</Mistake>
      </>,
    ),
  },
  {
    title: 'Names and formulae of ionic compounds',
    content: slide(
      <>
        <Rule>An ionic compound is made of positive and negative ions. The charges must add up to zero, so the formula is found by balancing the charges. The name gives the metal first, then the non-metal with the ending -ide.</Rule>
        <FactCards
          cards={[
            { title: `${charged('sodium')} and ${charged('chloride')}`, line1: `${ionicFormula('sodium', 'chloride')}:`, line2: 'sodium chloride' },
            { title: `${charged('magnesium')} and ${charged('oxide')}`, line1: `${ionicFormula('magnesium', 'oxide')}:`, line2: 'magnesium oxide' },
            { title: `${charged('calcium')} and ${charged('chloride')}`, line1: `${ionicFormula('calcium', 'chloride')}:`, line2: 'calcium chloride' },
            { title: `${charged('aluminium')} and ${charged('oxide')}`, line1: `${ionicFormula('aluminium', 'oxide')}:`, line2: 'aluminium oxide' },
          ]}
          aria={`Formulae of four ionic compounds. Sodium and chloride ions give ${ionicFormula('sodium', 'chloride')}, sodium chloride. Magnesium and oxide ions give ${ionicFormula('magnesium', 'oxide')}, magnesium oxide. Calcium and chloride ions give ${ionicFormula('calcium', 'chloride')}, calcium chloride. Aluminium and oxide ions give ${ionicFormula('aluminium', 'oxide')}, aluminium oxide.`}
        />
        <Worked
          title="Find the formula of aluminium oxide"
          steps={[
            `The ions are ${charged('aluminium')} and ${charged('oxide')}.`,
            `The lowest common multiple of 3 and 2 is 6: ${al[0]} Al³⁺ give +6 and ${al[1]} O²⁻ give −6.`,
            `The formula is ${ionicFormula('aluminium', 'oxide')}.`,
            `Calcium chloride: ${charged('calcium')} needs two ${charged('chloride')}, so the formula is ${ionicFormula('calcium', 'chloride')}.`,
          ]}
        />
        <Mistake>Changing the charge on an ion to make the formula work. Charges are fixed; change the number of ions instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Properties of materials',
    content: slide(
      <>
        <Rule>Metals are usually shiny, malleable and good conductors of heat and electricity. Non-metals are usually dull, brittle and poor conductors, which makes them insulators. A magnetic material is attracted to a magnet: iron, cobalt and nickel are magnetic.</Rule>
        <FactCards
          cards={[
            { title: 'Conductors', line1: 'metals such as copper:', line2: 'heat and electricity' },
            { title: 'Insulators', line1: 'plastic, rubber and wood:', line2: 'poor conductors' },
            { title: 'Magnetic', line1: 'iron, cobalt and nickel;', line2: 'copper is not magnetic' },
          ]}
          aria="Properties of materials. Conductors are metals such as copper, which conduct heat and electricity. Insulators such as plastic, rubber and wood are poor conductors. Magnetic materials are iron, cobalt and nickel. Copper is a good conductor but it is not magnetic."
        />
        <Worked
          title="Choose a material for the job"
          steps={[
            'A pot is made of metal because metals conduct heat. Its handle is plastic because plastic is a poor conductor of heat.',
            'Electric cables are copper wire, because copper conducts electricity, covered in plastic, because plastic is an insulator.',
            'A magnet will pick up steel paper clips, because steel contains iron, but not copper wire.',
          ]}
        />
        <Mistake>Saying that every metal is magnetic. Only iron, cobalt and nickel (and some alloys of them) are attracted to a magnet.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is air a pure substance or a mixture? Which kind?</>,
          <>Write the formula of magnesium oxide (Mg²⁺ and O²⁻).</>,
          <>Write the formula of aluminium oxide (Al³⁺ and O²⁻).</>,
          <>Name two magnetic materials.</>,
        ]}
        answers={[
          <>A homogeneous mixture of gases.</>,
          <>{ionicFormula('magnesium', 'oxide')}.</>,
          <>{ionicFormula('aluminium', 'oxide')}.</>,
          <>Any two of iron, cobalt and nickel.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a pure substance?",
    options: ["Air", "Sea water", "Distilled water", "Brass"],
    answer: "Distilled water",
    explanation: "Distilled water contains only H₂O, so it is a pure substance.",
  },
  {
    prompt: "What is an element?",
    options: ["A pure substance with only one kind of atom", "A mixture of two or more kinds of atom", "A substance made of two kinds of atoms joined together", "Any substance that can be seen"],
    answer: "A pure substance with only one kind of atom",
    explanation: "An element, such as iron or oxygen, has only one kind of atom.",
  },
  {
    prompt: "What is a compound?",
    options: ["Two or more substances mixed together", "One kind of atom only", "A solution of salt in water", "Two or more elements joined chemically"],
    answer: "Two or more elements joined chemically",
    explanation: "A compound, such as water, has a fixed ratio of elements joined by chemical bonds.",
  },
  {
    prompt: "Which of these is an element?",
    options: ["Water", "Gold", "Salt", "Brass"],
    answer: "Gold",
    explanation: "Gold is made of only gold atoms.",
  },
  {
    prompt: "Which of these is a homogeneous mixture?",
    options: ["Sand and water", "Air", "Oil and water", "A fruit salad"],
    answer: "Air",
    explanation: "Air looks the same all through, so it is a homogeneous mixture.",
  },
  {
    prompt: "Which of these is a heterogeneous mixture?",
    options: ["Sugar dissolved in water", "Air", "Salt dissolved in water", "Sand and water"],
    answer: "Sand and water",
    explanation: "You can see the sand, so the parts of this mixture are not mixed evenly.",
  },
  {
    prompt: "What is the formula of sodium chloride? Use Na⁺ and Cl⁻.",
    options: ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
    answer: "NaCl",
    explanation: "One Na⁺ (+1) balances one Cl⁻ (−1).",
  },
  {
    prompt: "What is the formula of magnesium oxide? Use Mg²⁺ and O²⁻.",
    options: ["Mg₂O", "MgO₂", "MgO", "Mg₂O₂"],
    answer: "MgO",
    explanation: "+2 and −2 balance, so one of each is needed.",
  },
  {
    prompt: "What is the formula of calcium chloride? Use Ca²⁺ and Cl⁻.",
    options: ["Ca₂Cl", "CaCl", "Ca₂Cl₂", "CaCl₂"],
    answer: "CaCl₂",
    explanation: "One Ca²⁺ (+2) needs two Cl⁻ (−2).",
  },
  {
    prompt: "What is the formula of aluminium oxide? Use Al³⁺ and O²⁻.",
    options: ["Al₃O₂", "Al₂O₃", "AlO", "Al₂O₂"],
    answer: "Al₂O₃",
    explanation: "Two Al³⁺ give +6 and three O²⁻ give −6.",
  },
  {
    prompt: "What is the name of the compound Na₂S?",
    options: ["Sodium sulfide", "Sodium sulfate", "Disodium sulfur", "Sodium sulfite"],
    answer: "Sodium sulfide",
    explanation: "The non-metal ending changes to -ide: sodium sulfide.",
  },
  {
    prompt: "Which material is a good conductor of electricity?",
    options: ["Rubber", "Plastic", "Copper", "Wood"],
    answer: "Copper",
    explanation: "Metals such as copper conduct electricity well. Rubber, plastic and wood are insulators.",
  },
  {
    prompt: "Why is the handle of a cooking pot made of plastic?",
    options: ["Plastic is a good conductor of heat", "Plastic is magnetic", "Plastic is a poor conductor of heat", "Plastic is heavier than metal"],
    answer: "Plastic is a poor conductor of heat",
    explanation: "A heat insulator keeps the handle cool enough to hold.",
  },
  {
    prompt: "Which of these metals is attracted to a magnet?",
    options: ["Iron", "Copper", "Aluminium", "Gold"],
    answer: "Iron",
    explanation: "Iron, cobalt and nickel are magnetic. Copper, aluminium and gold are not.",
  },
];

const MatterClassificationRevision = () => (
  <CapsSubjectTopic
    title="Revision of Matter and Classification"
    subtitle="Pure substances and mixtures, names and formulae, and the properties of materials"
    learnSteps={learnSteps}
    task="gr10-matter-classification-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default MatterClassificationRevision;
