import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { MoleRatioBars } from '../../../../../components/diagrams/matter10/Quant10';
import { AR, formulaMass } from '../../../../../components/diagrams/matter10/matter10Helpers';
import { moles, mole_ratio, percentOf, waterOfCrystallisation } from '../../../../../components/diagrams/matter10/quant10Helpers';

// Every number comes from quant10Helpers.ts (tested in quant10Helpers.test.ts and g10PsW2T2b.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');
const glucose = [{ el: 'C', percent: 40 }, { el: 'H', percent: 6.7 }, { el: 'O', percent: 53.3 }];
const gRatio = mole_ratio(glucose);

export const learnSteps: LearnStep[] = [
  {
    title: 'Percentage composition',
    content: slide(
      <>
        <Rule>The percentage composition of a compound is the percentage by mass of each element in it. For an element: percentage = (number of atoms × Ar ÷ molar mass of the compound) × 100.</Rule>
        <FactCards
          cards={[
            { title: 'Mass of one mole', line1: 'M = sum of the atomic masses,', line2: 'in g·mol⁻¹' },
            { title: 'Moles', line1: 'n = m ÷ M', line2: 'm in grams, M in g·mol⁻¹' },
            { title: 'Percentage of an element', line1: 'atoms × Ar ÷ M × 100', line2: 'the percentages add to 100%' },
          ]}
          aria="Composition quantities. The mass of one mole, M, is the sum of the atomic masses, in grams per mole. Moles: n equals m divided by M. The percentage of an element is the number of atoms times Ar divided by M, times 100, and the percentages add to 100 percent."
        />
        <Worked
          title="Percentage of magnesium in MgO"
          steps={[
            `Molar mass of MgO = ${AR.Mg} + ${AR.O} = ${formulaMass('MgO')} g·mol⁻¹.`,
            `Mg: ${AR.Mg} ÷ ${formulaMass('MgO')} × 100 = ${n(percentOf('Mg', 'MgO'))}%.`,
            `So O is ${n(percentOf('O', 'MgO'))}%, and 60 + 40 = 100.`,
          ]}
        />
        <Mistake>Forgetting to multiply by the number of atoms in the formula, for example the 2 in Fe₂O₃.</Mistake>
      </>,
    ),
  },
  {
    title: 'Empirical formula',
    content: slide(
      <>
        <Rule>The empirical formula is the simplest whole-number ratio of the atoms in a compound. Divide each percentage (or mass) by the atomic mass to get moles, divide all by the smallest, and if needed multiply to get whole numbers.</Rule>
        <MoleRatioBars rows={glucose.map((g) => ({ ...g, moles: g.percent / AR[g.el] }))} ratio={gRatio} />
        <Worked
          title="A compound with 40% C, 6,7% H and 53,3% O"
          steps={[
            'Moles: C = 40 ÷ 12 = 3,33; H = 6,7 ÷ 1 = 6,7; O = 53,3 ÷ 16 = 3,33.',
            `Divide by the smallest (3,33): C : H : O = ${gRatio.join(' : ')}.`,
            'The empirical formula is CH₂O. A compound of 70% Fe and 30% O gives a ratio of 1 : 1,5, which is multiplied by 2 to give Fe₂O₃.',
          ]}
        />
        <Mistake>Using the percentages directly as the ratio. Always change to moles first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Water of crystallisation',
    content: slide(
      <>
        <Rule>Some salts hold water in their crystals, called water of crystallisation, as in CuSO₄·nH₂O. Heating drives the water off and leaves the anhydrous salt. Compare the moles of water lost with the moles of anhydrous salt to find n.</Rule>
        <FactCards
          cards={[
            { title: 'Mass of water', line1: 'hydrated mass minus', line2: 'anhydrous mass' },
            { title: 'Moles of water', line1: 'n(H₂O) = mass ÷ 18', line2: 'M of water is 18 g·mol⁻¹' },
            { title: 'Moles of salt', line1: 'n = anhydrous mass', line2: '÷ molar mass of the salt' },
            { title: 'Whole number n', line1: 'n = moles of water', line2: '÷ moles of salt' },
          ]}
          aria="Finding the water of crystallisation. The mass of water is the hydrated mass minus the anhydrous mass. The moles of water are that mass divided by 18. The moles of salt are the anhydrous mass divided by the molar mass of the salt. The whole number n is the moles of water divided by the moles of salt."
        />
        <Worked
          title="24,95 g of hydrated copper sulfate gives 15,95 g of anhydrous salt"
          steps={[
            `Mass of water = 24,95 − 15,95 = 9,00 g, so n(H₂O) = 9,00 ÷ 18 = ${n(moles(9, 18))} mol.`,
            `Molar mass of CuSO₄ = ${n(formulaMass('CuSO4'))} g·mol⁻¹, so n(CuSO₄) = 15,95 ÷ ${n(formulaMass('CuSO4'))} = ${n(moles(15.95, formulaMass('CuSO4')))} mol.`,
            `n = 0,5 ÷ 0,1 = ${waterOfCrystallisation(24.95, 15.95, formulaMass('CuSO4'))}, so the salt is CuSO₄·5H₂O.`,
          ]}
        />
        <Mistake>Dividing the masses instead of the moles. The ratio must be a ratio of moles.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the percentage of Mg in MgO? (Mg = 24, O = 16)</>,
          <>What is the empirical formula of a compound that is 60% Mg and 40% O?</>,
          <>How many moles of water are in 9,00 g of water? (M = 18 g·mol⁻¹)</>,
          <>What is the value of n in CuSO₄·nH₂O in the worked example?</>,
        ]}
        answers={[
          <>{n(percentOf('Mg', 'MgO'))}%.</>,
          <>MgO (the ratio is 1 : 1).</>,
          <>{n(moles(9, 18))} mol.</>,
          <>{waterOfCrystallisation(24.95, 15.95, formulaMass('CuSO4'))}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the percentage composition of a compound tell us?",
    options: ["The number of atoms of each element", "The percentage of the compound that dissolves", "The percentage by mass of each element in it", "The percentage of its volume that is gas"],
    answer: "The percentage by mass of each element in it",
    explanation: "Percentage composition gives the mass percent of each element.",
  },
  {
    prompt: "What is the molar mass of CaCO₃? Use Ca = 40, C = 12 and O = 16.",
    options: ["100 g·mol⁻¹", "68 g·mol⁻¹", "84 g·mol⁻¹", "132 g·mol⁻¹"],
    answer: "100 g·mol⁻¹",
    explanation: "40 + 12 + 3 × 16 = 100 g·mol⁻¹.",
  },
  {
    prompt: "How many moles are in 22 g of CO₂? Use C = 12 and O = 16.",
    options: ["2 mol", "0,05 mol", "5 mol", "0,5 mol"],
    answer: "0,5 mol",
    explanation: "M = 44 g·mol⁻¹, so n = 22 ÷ 44 = 0,5 mol.",
  },
  {
    prompt: "What is the percentage of magnesium in MgO? Use Mg = 24 and O = 16.",
    options: ["40%", "60%", "24%", "75%"],
    answer: "60%",
    explanation: "24 ÷ 40 × 100 = 60%.",
  },
  {
    prompt: "What is the percentage of iron in Fe₂O₃? Use Fe = 56 and O = 16.",
    options: ["30%", "70%", "35%", "77,8%"],
    answer: "70%",
    explanation: "2 × 56 = 112 and M = 160, so 112 ÷ 160 × 100 = 70%.",
  },
  {
    prompt: "What is the percentage of oxygen in H₂O to one decimal place? Use H = 1 and O = 16.",
    options: ["11,1%", "94,1%", "80,0%", "88,9%"],
    answer: "88,9%",
    explanation: "16 ÷ 18 × 100 = 88,9%.",
  },
  {
    prompt: "What is the empirical formula of a compound?",
    options: ["The simplest whole-number ratio of its atoms", "The total number of atoms in a molecule", "The formula showing how atoms are joined", "The formula with the largest coefficients"],
    answer: "The simplest whole-number ratio of its atoms",
    explanation: "The empirical formula gives the simplest ratio of atoms.",
  },
  {
    prompt: "A compound is 60% Mg and 40% O. What is its empirical formula? Use Mg = 24 and O = 16.",
    options: ["Mg₂O", "MgO₂", "MgO", "Mg₂O₃"],
    answer: "MgO",
    explanation: "Mg: 60 ÷ 24 = 2,5 mol; O: 40 ÷ 16 = 2,5 mol; the ratio is 1 : 1.",
  },
  {
    prompt: "A compound is 70% Fe and 30% O. What is its empirical formula? Use Fe = 56 and O = 16.",
    options: ["FeO", "Fe₃O₂", "Fe₂O", "Fe₂O₃"],
    answer: "Fe₂O₃",
    explanation: "Fe: 70 ÷ 56 = 1,25 mol; O: 30 ÷ 16 = 1,875 mol; the ratio 1 : 1,5 becomes 2 : 3.",
  },
  {
    prompt: "A compound is 40% C, 6,7% H and 53,3% O. What is the simplest ratio C : H : O? Use C = 12, H = 1 and O = 16.",
    options: ["1 : 1 : 1", "1 : 2 : 1", "2 : 1 : 1", "3 : 6 : 4"],
    answer: "1 : 2 : 1",
    explanation: "Moles are 3,33; 6,7; 3,33. Dividing by 3,33 gives 1 : 2 : 1.",
  },
  {
    prompt: "A compound contains 27 g of Al and 24 g of O. What is its empirical formula? Use Al = 27 and O = 16.",
    options: ["Al₂O₃", "AlO", "Al₂O", "AlO₃"],
    answer: "Al₂O₃",
    explanation: "Al: 27 ÷ 27 = 1 mol; O: 24 ÷ 16 = 1,5 mol; the ratio 1 : 1,5 becomes 2 : 3.",
  },
  {
    prompt: "What is water of crystallisation?",
    options: ["Water that is on the outside of a crystal", "Water that makes a salt dissolve", "Water that is part of the structure of a crystal", "Water that forms when a salt is burned"],
    answer: "Water that is part of the structure of a crystal",
    explanation: "Hydrated salts hold water molecules in their crystals.",
  },
  {
    prompt: "14,7 g of CaCl₂·nH₂O is heated and leaves 11,1 g of anhydrous CaCl₂. What mass of water was driven off?",
    options: ["11,1 g", "25,8 g", "3,6 g", "7,4 g"],
    answer: "3,6 g",
    explanation: "14,7 − 11,1 = 3,6 g.",
  },
  {
    prompt: "14,7 g of CaCl₂·nH₂O gives 11,1 g of CaCl₂ (M = 111 g·mol⁻¹) and 3,6 g of water (M = 18 g·mol⁻¹). What is n?",
    options: ["2", "1", "6", "0,5"],
    answer: "2",
    explanation: "Water: 3,6 ÷ 18 = 0,2 mol; CaCl₂: 11,1 ÷ 111 = 0,1 mol; n = 0,2 ÷ 0,1 = 2.",
  },
];

const CompositionEmpiricalFormula = () => (
  <CapsSubjectTopic
    title="Composition and Empirical Formulae"
    subtitle="Percentage composition, empirical formulae and water of crystallisation"
    learnSteps={learnSteps}
    task="gr10-composition-empirical-formula-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default CompositionEmpiricalFormula;
