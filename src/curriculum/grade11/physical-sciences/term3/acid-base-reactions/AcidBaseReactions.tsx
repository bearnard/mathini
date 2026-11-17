import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/em11/Em11';
import { ConjugatePairs, Titration } from '../../../../../components/diagrams/chemistry12/Chem12Rates';
import { isBalanced } from '../../../../../components/diagrams/chemistry12/chemHelpers';
import { REACTIONS } from '../../../../../components/diagrams/em11/em11Helpers';

// Every equation below is balanced (checked by an atom-count test in em11Helpers.test.ts and g11PsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const pretty = (s: string) => s.replace(/([A-Za-z])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const ok = (eq: string) => (isBalanced(eq) ? 'balanced' : 'NOT balanced');

export const learnSteps: LearnStep[] = [
  {
    title: 'Acids and bases: two theories',
    content: slide(
      <>
        <Rule>Arrhenius: an acid is a substance that ionises in water to form H⁺ (H₃O⁺) ions, and a base forms OH⁻ ions in water. Brønsted-Lowry: an acid is a proton (H⁺) donor and a base is a proton (H⁺) acceptor. The Brønsted-Lowry theory is wider because it includes bases such as NH₃.</Rule>
        <ConjugatePairs acid="HCl" base="H₂O" conjBase="Cl⁻" conjAcid="H₃O⁺" />
        <Worked
          title="Use the Brønsted-Lowry definitions"
          steps={[
            'HCl + H₂O → H₃O⁺ + Cl⁻: HCl donates a proton, so it is the acid. H₂O accepts it, so it is the base.',
            'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: NH₃ accepts a proton, so NH₃ is a base, even though it has no OH⁻ in its formula.',
            'So a proton donor is an acid and a proton acceptor is a base, whatever the formula.',
          ]}
        />
        <Mistake>Saying that a base must contain OH⁻. By the Brønsted-Lowry theory any proton acceptor is a base, for example NH₃.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conjugate pairs and ampholytes',
    content: slide(
      <>
        <Rule>A conjugate acid-base pair differs by one proton: the acid has the proton and its conjugate base does not. An ampholyte is a substance that can act as an acid or as a base, for example H₂O and HCO₃⁻.</Rule>
        <ConjugatePairs acid="H₂O" base="NH₃" conjBase="OH⁻" conjAcid="NH₄⁺" />
        <Worked
          title="Identify the pairs in H₂O + NH₃ ⇌ OH⁻ + NH₄⁺"
          steps={[
            'H₂O gives away a proton, so H₂O is the acid and OH⁻ is its conjugate base: the pair H₂O / OH⁻.',
            'NH₃ takes the proton, so NH₃ is the base and NH₄⁺ is its conjugate acid: the pair NH₃ / NH₄⁺.',
            'Water is an ampholyte: it acts as a base in HCl + H₂O and as an acid in H₂O + NH₃.',
          ]}
        />
        <Mistake>Pairing the acid with the other substance on the same side. A conjugate pair is on opposite sides of the arrow and differs by one H⁺.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acid reactions that make salts',
    content: slide(
      <>
        <Rule>An acid reacts with a metal hydroxide, a metal oxide or a metal carbonate to form a salt. Acid + metal hydroxide gives salt + water. Acid + metal oxide gives salt + water. Acid + metal carbonate gives salt + water + carbon dioxide.</Rule>
        <FactCards
          cards={[
            { title: 'Acid + hydroxide', line1: 'salt + water: HCl + NaOH', line2: 'gives NaCl + H₂O' },
            { title: 'Acid + oxide', line1: 'salt + water: CuO + H₂SO₄', line2: 'gives CuSO₄ + H₂O' },
            { title: 'Acid + carbonate', line1: 'salt + water + CO₂ gas,', line2: 'seen as bubbles' },
          ]}
          aria="Three acid reactions that make salts. Acid plus metal hydroxide gives a salt and water, for example HCl plus NaOH gives NaCl and water. Acid plus metal oxide gives a salt and water, for example CuO plus H2SO4 gives CuSO4 and water. Acid plus metal carbonate gives a salt, water and carbon dioxide gas, which is seen as bubbles."
        />
        <Worked
          title="Write and check the equations"
          steps={[
            `${pretty(REACTIONS.hydroxide)} (${ok(REACTIONS.hydroxide)}). The salt is sodium chloride.`,
            `${pretty(REACTIONS.hydroxide2)} (${ok(REACTIONS.hydroxide2)}). Two NaOH are needed for each H₂SO₄.`,
            `${pretty(REACTIONS.oxide)} (${ok(REACTIONS.oxide)}). Black copper(II) oxide dissolves to give a blue solution.`,
            `${pretty(REACTIONS.carbonate)} (${ok(REACTIONS.carbonate)}). Bubbles of CO₂ show that the reaction takes place.`,
          ]}
        />
        <Mistake>Forgetting the water or the carbon dioxide. A carbonate gives a salt, water and CO₂. Always check that the atoms balance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Indicators and a simple titration',
    content: slide(
      <>
        <Rule>An indicator is a substance that changes colour when the solution changes from acidic to basic. In a titration a solution from a burette is added to a flask until the indicator changes colour: this is the end point, when the acid and base have just reacted. At the microscopic level H⁺ + OH⁻ → H₂O.</Rule>
        <Titration burette="the acid" flask="the base with an indicator" />
        <Worked
          title="A qualitative titration"
          steps={[
            'Add a few drops of indicator, such as phenolphthalein or a natural indicator like red cabbage juice, to the base in the flask.',
            'Add the acid slowly from the burette while swirling the flask.',
            'Stop when the colour just changes: the end point. The quantity of acid that was added shows when the base has been neutralised.',
            'Evaporating the water from the neutralised solution leaves the salt, for example sodium chloride.',
          ]}
        />
        <Mistake>Adding the acid quickly and passing the end point. Add it drop by drop near the end, so that you can see the first permanent colour change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In HCl + H₂O → H₃O⁺ + Cl⁻, which substance is the Brønsted-Lowry acid?</>,
          <>What is the conjugate base of H₂O in H₂O + NH₃ ⇌ OH⁻ + NH₄⁺?</>,
          <>Name the products when hydrochloric acid reacts with calcium carbonate.</>,
          <>What is the end point of a titration?</>,
        ]}
        answers={[
          <>HCl, because it donates a proton.</>,
          <>OH⁻.</>,
          <>Calcium chloride, water and carbon dioxide.</>,
          <>The point at which the indicator just changes colour.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an acid according to Arrhenius?",
    options: ["A substance that forms OH⁻ ions in water", "A substance that accepts protons", "A substance that forms H⁺ ions in water", "A substance that donates electrons"],
    answer: "A substance that forms H⁺ ions in water",
    explanation: "Arrhenius defined an acid as a substance that ionises in water to give H⁺ (H₃O⁺) ions.",
  },
  {
    prompt: "What is a base according to the Brønsted-Lowry theory?",
    options: ["A proton (H⁺) acceptor", "A proton (H⁺) donor", "A substance that forms H⁺ ions in water", "An electron donor"],
    answer: "A proton (H⁺) acceptor",
    explanation: "A Brønsted-Lowry base accepts a proton.",
  },
  {
    prompt: "What is an acid according to the Brønsted-Lowry theory?",
    options: ["A proton (H⁺) acceptor", "A substance that forms OH⁻ ions", "An electron acceptor", "A proton (H⁺) donor"],
    answer: "A proton (H⁺) donor",
    explanation: "A Brønsted-Lowry acid donates a proton.",
  },
  {
    prompt: "In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, why is NH₃ a base?",
    options: ["It contains OH⁻ in its formula", "It accepts a proton from water", "It donates a proton to water", "It is a salt"],
    answer: "It accepts a proton from water",
    explanation: "NH₃ accepts H⁺ to form NH₄⁺, so it is a Brønsted-Lowry base.",
  },
  {
    prompt: "In HCl + H₂O → H₃O⁺ + Cl⁻, which substance is the acid?",
    options: ["H₂O", "HCl", "H₃O⁺", "Cl⁻"],
    answer: "HCl",
    explanation: "HCl donates a proton to H₂O, so HCl is the acid.",
  },
  {
    prompt: "What is the conjugate base of HCl in HCl + H₂O → H₃O⁺ + Cl⁻?",
    options: ["H₂O", "H₃O⁺", "Cl₂", "Cl⁻"],
    answer: "Cl⁻",
    explanation: "The conjugate base is what is left when the acid loses its proton: Cl⁻.",
  },
  {
    prompt: "In H₂O + NH₃ ⇌ OH⁻ + NH₄⁺, what is the conjugate acid of NH₃?",
    options: ["NH₄⁺", "OH⁻", "H₂O", "NH₂⁻"],
    answer: "NH₄⁺",
    explanation: "NH₃ gains a proton to form NH₄⁺, its conjugate acid.",
  },
  {
    prompt: "What is an ampholyte?",
    options: ["A substance that is always an acid", "A substance that is always a base", "A substance that can act as an acid or as a base", "A substance that has no effect on an indicator"],
    answer: "A substance that can act as an acid or as a base",
    explanation: "Water is an ampholyte: it donates a proton in one reaction and accepts one in another.",
  },
  {
    prompt: "Which of these is an ampholyte?",
    options: ["HCl", "NaOH", "NaCl", "H₂O"],
    answer: "H₂O",
    explanation: "Water can both donate and accept a proton.",
  },
  {
    prompt: "What are the products when hydrochloric acid reacts with sodium hydroxide?",
    options: ["Sodium chloride and carbon dioxide", "Sodium chloride and water", "Sodium oxide and hydrogen", "Chlorine and sodium hydroxide"],
    answer: "Sodium chloride and water",
    explanation: "HCl + NaOH → NaCl + H₂O: a salt and water.",
  },
  {
    prompt: "What are the products when sulfuric acid reacts with copper(II) oxide?",
    options: ["Copper(II) sulfate and water", "Copper(II) sulfate and carbon dioxide", "Copper and sulfur dioxide", "Copper(II) hydroxide and hydrogen"],
    answer: "Copper(II) sulfate and water",
    explanation: "CuO + H₂SO₄ → CuSO₄ + H₂O. The black oxide dissolves to give a blue solution.",
  },
  {
    prompt: "What gas is given off when an acid reacts with a metal carbonate?",
    options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
    answer: "Carbon dioxide",
    explanation: "Acid + metal carbonate → salt + water + carbon dioxide, which is seen as bubbles.",
  },
  {
    prompt: "How many moles of NaOH react with one mole of H₂SO₄ in the balanced equation?",
    options: ["1", "3", "2", "4"],
    answer: "2",
    explanation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O: two NaOH for each H₂SO₄.",
  },
  {
    prompt: "What is the end point of a titration?",
    options: ["The point at which the indicator just changes colour", "The point at which the burette is empty", "The point at which the flask is full", "The point at which the temperature stops changing"],
    answer: "The point at which the indicator just changes colour",
    explanation: "At the end point the acid and base have just reacted and the indicator changes colour.",
  },
];

const AcidBaseReactions = () => (
  <CapsSubjectTopic
    title="Acid-Base Reactions"
    subtitle="Acid-base theories, conjugate pairs, ampholytes, salt-forming reactions and a simple titration"
    learnSteps={learnSteps}
    task="gr11-acid-base-reactions-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default AcidBaseReactions;
