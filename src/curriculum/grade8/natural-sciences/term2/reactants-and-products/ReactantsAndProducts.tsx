import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ReactionAtoms } from '../../../../../components/diagrams/ns8/Ns8';
import { REACTIONS, atomTotals, split } from '../../../../../components/diagrams/ns8/ns8Helpers';

// Every number comes from ns8Helpers.ts (tested in ns8Helpers.test.ts and g8NsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const sub = (t: string) => t.replace(/(\d)/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const c = atomTotals(REACTIONS.carbon);
const w = split(REACTIONS.water);

export const learnSteps: LearnStep[] = [
  {
    title: 'Reactants and products',
    content: slide(
      <>
        <Rule>In a chemical reaction, substances react with each other to form products with different chemical properties. The substances that react are called the reactants and the substances that are produced are called the products. We show a reaction as an equation: reactants → products.</Rule>
        <FactCards
          cards={[
            { title: 'Reactants', line1: 'the substances that react,', line2: 'on the left of the arrow' },
            { title: 'Products', line1: 'the substances that form,', line2: 'on the right of the arrow' },
            { title: 'Word equation', line1: 'carbon + oxygen → carbon', line2: 'dioxide' },
          ]}
          aria="Reactants and products. Reactants are the substances that react, on the left of the arrow. Products are the substances that form, on the right of the arrow. A word equation is carbon plus oxygen gives carbon dioxide."
        />
        <Worked
          title={`Name the parts of C + O₂ → CO₂`}
          steps={[
            `The reactants are ${sub(split(REACTIONS.carbon).reactants.join(' and '))} (carbon and oxygen).`,
            `The product is ${sub(split(REACTIONS.carbon).products.join(''))} (carbon dioxide).`,
            `Hydrogen burns in oxygen to make water: the reactants are ${sub(w.reactants.join(' and '))} and the product is ${sub(w.products.join(''))}.`,
          ]}
        />
        <Mistake>Mixing up the sides. The reactants are before the arrow and the products are after it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Atoms are rearranged',
    content: slide(
      <>
        <Rule>In a chemical reaction the atoms are rearranged to form different products. The chemical bonds of the reactants break and new bonds form to make the products. The atoms themselves are not created or destroyed, so the number of each kind of atom is the same before and after.</Rule>
        <ReactionAtoms equation={REACTIONS.water} />
        <Worked
          title="Count the atoms in C + O₂ → CO₂"
          steps={[
            `Before: 1 C and 2 O make ${c.before} atoms.`,
            `After: 1 C and 2 O in CO₂ make ${c.after} atoms.`,
            'The bonds in O₂ break, and new bonds form between C and O, but the atoms are the same.',
          ]}
        />
        <Mistake>Saying that atoms disappear when a substance burns. They are rearranged into the products.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reactions around us',
    content: slide(
      <>
        <Rule>When a whole egg is put in white vinegar, the vinegar and the egg shell (calcium carbonate) react to form carbon dioxide gas and a solution of calcium acetate. When you blow through a straw into clear limewater, the carbon dioxide reacts with calcium hydroxide to make a white cloudy suspension of calcium carbonate and water. Fermentation in brewing is a useful reaction used in indigenous knowledge: it gives carbon dioxide and ethanol.</Rule>
        <FactCards
          cards={[
            { title: 'Egg in vinegar', line1: 'reactants: vinegar and', line2: 'egg shell; bubbles of CO₂' },
            { title: 'Limewater test', line1: 'CO₂ turns clear limewater', line2: 'cloudy: calcium carbonate' },
            { title: 'Fermentation', line1: 'makes carbon dioxide and', line2: 'ethanol (alcohol)' },
          ]}
          aria="Reactions around us. Egg in vinegar: the reactants are vinegar and the egg shell, and bubbles of carbon dioxide form. Limewater test: carbon dioxide turns clear limewater cloudy because calcium carbonate forms. Fermentation makes carbon dioxide and ethanol."
        />
        <Worked
          title="Identify the evidence of a reaction"
          steps={[
            'Bubbles of gas on the egg shell show that a new substance, carbon dioxide, has formed.',
            'The limewater turning cloudy shows that a new solid, calcium carbonate, has formed.',
            'In each case the products have different properties from the reactants.',
          ]}
        />
        <Mistake>Thinking that the bubbles are air coming out of the egg. They are carbon dioxide gas, a product.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do we call the substances that react together?</>,
          <>Name the product when hydrogen reacts with oxygen.</>,
          <>What happens to the old bonds in a reaction?</>,
          <>What gas turns limewater cloudy?</>,
        ]}
        answers={[
          <>The reactants.</>,
          <>Water.</>,
          <>They break, and new bonds form.</>,
          <>Carbon dioxide.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What are reactants?",
    options: ["The substances that are produced", "The substances that do not change", "The substances that react with one another", "The gases formed in the reaction"],
    answer: "The substances that react with one another",
    explanation: "Reactants are the starting substances in a chemical reaction.",
  },
  {
    prompt: "What are products?",
    options: ["The substances that are formed in a reaction", "The substances that react", "The substances that stay the same", "The energy released"],
    answer: "The substances that are formed in a reaction",
    explanation: "Products are the substances produced by the reaction.",
  },
  {
    prompt: "In C + O₂ → CO₂, which are the reactants?",
    options: ["Carbon dioxide only", "Oxygen and carbon dioxide", "Carbon dioxide and carbon", "Carbon and oxygen"],
    answer: "Carbon and oxygen",
    explanation: "Reactants are written before the arrow.",
  },
  {
    prompt: "In C + O₂ → CO₂, what is the product?",
    options: ["Carbon", "Carbon dioxide", "Oxygen", "Carbon and oxygen"],
    answer: "Carbon dioxide",
    explanation: "The product is written after the arrow.",
  },
  {
    prompt: "In the equation 2H₂ + O₂ → 2H₂O, which substance is the product?",
    options: ["Hydrogen", "Water", "Oxygen", "Hydrogen and oxygen"],
    answer: "Water",
    explanation: "H₂O is on the right of the arrow, so it is the product.",
  },
  {
    prompt: "In 2H₂O → 2H₂ + O₂, which are the products?",
    options: ["Water", "Water and hydrogen", "Oxygen only", "Hydrogen and oxygen"],
    answer: "Hydrogen and oxygen",
    explanation: "The substances after the arrow are the products.",
  },
  {
    prompt: "What happens to the atoms in a chemical reaction?",
    options: ["They are rearranged to form new substances", "They are destroyed", "They are created from energy", "They are changed into other elements"],
    answer: "They are rearranged to form new substances",
    explanation: "Atoms are not created or destroyed, only rearranged.",
  },
  {
    prompt: "During a reaction, what happens to the bonds that held the reactants together?",
    options: ["They stay the same", "They are only formed", "They break and new bonds form", "They disappear for good"],
    answer: "They break and new bonds form",
    explanation: "Old bonds break and new bonds form to make the products.",
  },
  {
    prompt: "In the reaction 2Mg + O₂ → 2MgO there are 4 atoms before the reaction. How many atoms are there after?",
    options: ["2", "3", "8", "4"],
    answer: "4",
    explanation: "Atoms are rearranged, so the total stays the same: 2 Mg + 2 O = 4 atoms.",
  },
  {
    prompt: "A whole egg is put in white vinegar and bubbles form on the shell. What gas is produced?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    answer: "Carbon dioxide",
    explanation: "Vinegar reacts with the calcium carbonate of the shell to form carbon dioxide.",
  },
  {
    prompt: "What are the reactants when an egg is placed in white vinegar?",
    options: ["Vinegar and the egg shell", "Carbon dioxide and a solution", "Water and oxygen gas", "The egg white and yolk only"],
    answer: "Vinegar and the egg shell",
    explanation: "The vinegar reacts with the calcium carbonate of the egg shell.",
  },
  {
    prompt: "Which gas turns clear limewater cloudy?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide",
    explanation: "Carbon dioxide reacts with limewater to form white calcium carbonate.",
  },
  {
    prompt: "Why does limewater turn cloudy when you blow into it through a straw?",
    options: ["The water starts to boil", "The limewater is diluted", "A white solid forms", "Oxygen dissolves in it"],
    answer: "A white solid forms",
    explanation: "A new substance forms, which is evidence of a reaction.",
  },
  {
    prompt: "Which process in traditional brewing produces ethanol?",
    options: ["Fermentation", "Melting wax", "Dissolving salt", "Evaporating water"],
    answer: "Fermentation",
    explanation: "Fermentation is a chemical reaction used in brewing.",
  },
];

const ReactantsAndProducts = () => (
  <CapsSubjectTopic
    title="Chemical Reactions: Reactants and Products"
    subtitle="Reactants, products, rearranged atoms and everyday reactions"
    learnSteps={learnSteps}
    task="gr8-reactants-and-products-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ReactantsAndProducts;
