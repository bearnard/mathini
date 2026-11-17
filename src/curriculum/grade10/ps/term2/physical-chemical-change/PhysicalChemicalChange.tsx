import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { EnergyLevels, MassBalance } from '../../../../../components/diagrams/matter10/Matter10';
import { EQUATIONS, balanced, equationMasses, formulaMass } from '../../../../../components/diagrams/matter10/matter10Helpers';

// Every number comes from matter10Helpers.ts (tested in matter10Helpers.test.ts and g10PsW2T2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const mg = equationMasses(EQUATIONS.magnesium);

export const learnSteps: LearnStep[] = [
  {
    title: 'Physical and chemical change',
    content: slide(
      <>
        <Rule>In a physical change no new substance forms: the particles stay the same and only their arrangement or energy changes, as in melting, freezing, boiling and dissolving. In a chemical change a new substance forms with different properties, because bonds break and new bonds form.</Rule>
        <FactCards
          cards={[
            { title: 'Physical change', line1: 'melting, boiling, dissolving:', line2: 'no new substance, often reversible' },
            { title: 'Chemical change', line1: 'burning, rusting, cooking:', line2: 'a new substance is made' },
            { title: 'Evidence', line1: 'gas, colour change, precipitate,', line2: 'heat, light or sound' },
          ]}
          aria="Physical and chemical change. Physical change: melting, boiling and dissolving, with no new substance and often reversible. Chemical change: burning, rusting and cooking, where a new substance is made. Evidence of chemical change: a gas, a colour change, a precipitate, heat, light or sound."
        />
        <Worked
          title="Classify the change"
          steps={[
            'Ice melts to water: the water molecules are unchanged, so it is a physical change.',
            'Magnesium burns in air to give white magnesium oxide: a new substance forms, so it is a chemical change.',
            'Salt dissolves in water: it can be recovered by evaporation, so it is a physical change.',
          ]}
        />
        <Mistake>Using a colour change or a temperature change alone as proof of a chemical change. Check whether a new substance has formed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conservation of mass and atoms',
    content: slide(
      <>
        <Rule>In a chemical reaction atoms are not created or destroyed, only rearranged. So the total mass of the products equals the total mass of the reactants. This is the law of conservation of mass, and it is why equations must be balanced.</Rule>
        <MassBalance label="2Mg + O₂ → 2MgO (masses in grams per equation)" left={mg.reactants} right={mg.products} />
        <Worked
          title="Check magnesium burning"
          steps={[
            `${EQUATIONS.magnesium.replace('O2', 'O₂')} is ${balanced(EQUATIONS.magnesium) ? 'balanced' : 'not balanced'}.`,
            `Reactants: 2 × 24 + 32 = ${mg.reactants}. Products: 2 × ${formulaMass('MgO')} = ${mg.products}.`,
            'The masses are equal, so mass is conserved. The magnesium oxide is heavier than the magnesium only because it has gained the oxygen from the air.',
          ]}
        />
        <Mistake>Saying that mass is lost when something burns. The products, including gases such as CO₂, carry the mass away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Energy change in reactions',
    content: slide(
      <>
        <Rule>Breaking bonds takes in energy and forming bonds gives out energy. In an exothermic reaction energy is released and the surroundings get warmer. In an endothermic reaction energy is absorbed and the surroundings get cooler.</Rule>
        <EnergyLevels reactants={10} products={4} />
        <Worked
          title="Exothermic or endothermic?"
          steps={[
            'Burning methane makes a flame and heats the surroundings: exothermic.',
            'A cold pack feels cold when it is activated: endothermic.',
            'If the products have less energy than the reactants, energy is released.',
          ]}
        />
        <Mistake>Thinking that endothermic reactions need no energy. They absorb energy from the surroundings.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is dissolving sugar in tea a physical or a chemical change?</>,
          <>A candle burns and the mass of the wax goes down. Is mass destroyed?</>,
          <>What is the total mass of the reactants in 2Mg + O₂ → 2MgO?</>,
          <>Is a reaction that makes the test tube hot exothermic or endothermic?</>,
        ]}
        answers={[
          <>Physical: no new substance forms.</>,
          <>No. The mass is in the gases that are made.</>,
          <>{mg.reactants}.</>,
          <>Exothermic.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a physical change?",
    options: ["A change in which a new substance forms", "A change that cannot be reversed", "A change in which no new substance forms", "A change that always gives off heat"],
    answer: "A change in which no new substance forms",
    explanation: "In a physical change the particles stay the same.",
  },
  {
    prompt: "Which of these is a chemical change?",
    options: ["Iron rusting", "Ice melting", "Sugar dissolving in tea", "Water boiling"],
    answer: "Iron rusting",
    explanation: "Rust is a new substance, iron oxide.",
  },
  {
    prompt: "Which of these is a physical change?",
    options: ["A candle burning", "Wood burning", "Milk turning sour", "Wax melting"],
    answer: "Wax melting",
    explanation: "Melting changes only the state of the wax.",
  },
  {
    prompt: "Which observation suggests that a chemical change has taken place?",
    options: ["A solid changes in its size", "A gas is given off", "A liquid changes its shape", "A metal becomes a bit warm"],
    answer: "A gas is given off",
    explanation: "Gas formation, a precipitate or a colour change can be signs of a new substance.",
  },
  {
    prompt: "Salt is dissolved in water. How can the salt be recovered?",
    options: ["By burning the water", "By evaporating the water", "By filtering the solution", "By freezing the salt"],
    answer: "By evaporating the water",
    explanation: "Dissolving is a physical change, so the salt can be recovered by evaporation.",
  },
  {
    prompt: "What does the law of conservation of mass say?",
    options: ["Mass is lost whenever a gas forms", "Mass is gained in every reaction", "Only the atoms of metals are conserved", "Mass is neither lost nor gained"],
    answer: "Mass is neither lost nor gained",
    explanation: "Atoms are only rearranged, so the mass stays the same.",
  },
  {
    prompt: "Why must a chemical equation be balanced?",
    options: ["Atoms are not created or destroyed in a reaction", "It makes the reaction go faster", "It makes the equation shorter", "Energy is conserved only in balanced equations"],
    answer: "Atoms are not created or destroyed in a reaction",
    explanation: "The same number of each kind of atom must be on both sides.",
  },
  {
    prompt: "In 2Mg + O₂ → 2MgO, what is the total mass of the reactants? Use Mg = 24 and O = 16.",
    options: ["56", "40", "80", "72"],
    answer: "80",
    explanation: "2 × 24 + 2 × 16 = 80.",
  },
  {
    prompt: "48 g of magnesium burns completely with 32 g of oxygen. What mass of magnesium oxide forms?",
    options: ["48 g", "32 g", "40 g", "80 g"],
    answer: "80 g",
    explanation: "Mass is conserved: 48 + 32 = 80 g.",
  },
  {
    prompt: "In CaCO₃ → CaO + CO₂, what is the mass of one formula unit of CaCO₃? Use Ca = 40, C = 12 and O = 16.",
    options: ["68", "100", "84", "116"],
    answer: "100",
    explanation: "40 + 12 + 3 × 16 = 100, which equals 56 + 44 for CaO and CO₂.",
  },
  {
    prompt: "A piece of magnesium ribbon is burned in air and the white ash has a greater mass than the ribbon. Why?",
    options: ["Magnesium joined with oxygen", "Mass was created in the flame", "The ash is another element", "Some of the oxygen was destroyed"],
    answer: "Magnesium joined with oxygen",
    explanation: "The oxide includes the mass of the oxygen that joined the magnesium.",
  },
  {
    prompt: "In an exothermic reaction, what happens to the energy?",
    options: ["Energy is absorbed from the surroundings", "Energy is destroyed", "Energy is released to the surroundings", "No energy change takes place"],
    answer: "Energy is released to the surroundings",
    explanation: "The products have less energy than the reactants.",
  },
  {
    prompt: "A cold pack becomes cold when it is activated. What type of reaction is this?",
    options: ["Exothermic", "Physical", "Endothermic", "A precipitation reaction"],
    answer: "Endothermic",
    explanation: "The reaction absorbs energy from its surroundings, so they get cooler.",
  },
  {
    prompt: "Burning methane warms the surroundings. What type of reaction is it?",
    options: ["Exothermic", "Endothermic", "Neutral", "A change of state"],
    answer: "Exothermic",
    explanation: "Energy is released to the surroundings.",
  },
];

const PhysicalChemicalChange = () => (
  <CapsSubjectTopic
    title="Physical and Chemical Change"
    subtitle="Physical and chemical change, conservation of mass and energy change in reactions"
    learnSteps={learnSteps}
    task="gr10-physical-chemical-change-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default PhysicalChemicalChange;
