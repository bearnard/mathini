import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, HaveNeed, YieldBars } from '../../../../../components/diagrams/gas11/Gas11';
import { limiting, massFromMoles, molarMassOf, molesFromMass, percentPurity, percentYield, productMoles, type Reagent } from '../../../../../components/diagrams/gas11/gas11Helpers';
import { isBalanced } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// Every number below comes from gas11Helpers.ts (tested in gas11Helpers.test.ts and g11PsGases.test.ts).
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const pretty = (s: string) => s.replace(/([A-Za-z])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const eq1 = '2Mg + O2 → 2MgO';
const nMg = molesFromMass(6.0, 'Mg');
const mMgO = massFromMoles(nMg, 'MgO');
const eq2 = '2H2 + O2 → 2H2O';
const rs: Reagent[] = [{ formula: 'H2', coef: 2, moles: molesFromMass(4.0, 'H2') }, { formula: 'O2', coef: 1, moles: molesFromMass(8.0, 'O2') }];
const lim = limiting(rs);
const nWater = productMoles(rs, 2);
const mWater = massFromMoles(nWater, 'H2O');
const excessH2 = rs[0].moles - nWater;
const eq3 = 'CaCO3 → CaO + CO2';
const nCO2 = molesFromMass(3.52, 'CO2');
const mCaCO3 = massFromMoles(nCO2, 'CaCO3');

export const learnSteps: LearnStep[] = [
  {
    title: 'Mass and mole ratios',
    content: slide(
      <>
        <Rule>A balanced equation gives the mole ratio of the reactants and products. To find a mass: change the given mass to moles (n = m/M), use the ratio from the equation, then change moles back to mass (m = nM).</Rule>
        <FactCards
          cards={[
            { title: '1. To moles', line1: 'n = m / M for', line2: 'the given substance' },
            { title: '2. The ratio', line1: 'use the coefficients of', line2: 'the balanced equation' },
            { title: '3. To mass', line1: 'm = n × M for the', line2: 'substance you want' },
          ]}
          aria="The three steps of a stoichiometry calculation. Step 1, change the given mass to moles using n equals m over M. Step 2, use the mole ratio from the coefficients of the balanced equation. Step 3, change the moles of the wanted substance to a mass using m equals n times M."
        />
        <Worked
          title={`${pretty(eq1)}: what mass of MgO forms from 6,0 g of Mg?`}
          steps={[
            `The equation is ${isBalanced(eq1) ? 'balanced' : 'not balanced'} (check the atoms).`,
            `n(Mg) = 6,0 / ${molarMassOf('Mg')} = ${dc(nMg)} mol.`,
            `The ratio Mg : MgO = 2 : 2 = 1 : 1, so n(MgO) = ${dc(nMg)} mol.`,
            `m(MgO) = nM = ${dc(nMg)} × ${molarMassOf('MgO')} = ${dc(mMgO, 1)} g.`,
          ]}
        />
        <Mistake>Using the masses in the ratio. The coefficients give the ratio of moles, not of grams.</Mistake>
      </>,
    ),
  },
  {
    title: 'The limiting reagent',
    content: slide(
      <>
        <Rule>The limiting reagent is the reactant that is used up first. It decides how much product forms. The other reactant is in excess. Compare the moles you have with the moles the equation needs.</Rule>
        <HaveNeed
          items={[
            { label: 'H₂', have: rs[0].moles, need: rs[1].moles * 2 },
            { label: 'O₂', have: rs[1].moles, need: rs[0].moles / 2 },
          ]}
          unit="mol"
          aria={`4,0 g of H2 is ${dc(rs[0].moles, 1)} mol and 8,0 g of O2 is ${dc(rs[1].moles)} mol. To react with all the H2 you would need ${dc(rs[0].moles / 2, 1)} mol of O2, but you only have ${dc(rs[1].moles)} mol, so O2 is the limiting reagent. To use up all the O2 you need only ${dc(rs[1].moles * 2)} mol of H2.`}
        />
        <Worked
          title={`${pretty(eq2)}: 4,0 g of H₂ react with 8,0 g of O₂`}
          steps={[
            `n(H₂) = 4,0 / ${molarMassOf('H2')} = ${dc(rs[0].moles, 1)} mol and n(O₂) = 8,0 / ${molarMassOf('O2')} = ${dc(rs[1].moles)} mol.`,
            `Compare moles ÷ coefficient: H₂ ${dc(rs[0].moles / 2, 1)}, O₂ ${dc(rs[1].moles / 1)}. The smaller is ${lim.formula.replace('2', '₂')}, so ${lim.formula.replace('2', '₂')} is the limiting reagent.`,
            `n(H₂O) = ${dc(nWater)} mol, so m(H₂O) = ${dc(nWater)} × ${molarMassOf('H2O')} = ${dc(mWater, 1)} g.`,
            `H₂ used = ${dc(nWater)} mol, so ${dc(excessH2)} mol = ${dc(massFromMoles(excessH2, 'H2'), 1)} g of H₂ is left over.`,
          ]}
        />
        <Mistake>Choosing the limiting reagent by the smaller mass. Compare the moles divided by the coefficients.</Mistake>
      </>,
    ),
  },
  {
    title: 'Percent yield',
    content: slide(
      <>
        <Rule>The theoretical yield is the mass of product calculated from the equation. The actual yield is the mass obtained in the experiment. Percent yield = actual yield / theoretical yield × 100.</Rule>
        <YieldBars theoretical={mWater} actual={7.2} unit="g" />
        <Worked
          title="The reaction above gave 7,2 g of water in an experiment"
          steps={[
            `The theoretical yield is ${dc(mWater, 1)} g (from the limiting reagent).`,
            `Percent yield = 7,2 / ${dc(mWater, 1)} × 100 = ${dc(percentYield(7.2, mWater), 0)}%.`,
            'The yield is below 100% because some product is lost, or the reaction does not go to completion.',
          ]}
        />
        <Mistake>Working out the percent yield from the mass of the reactant. Compare the actual yield with the theoretical yield of the same product.</Mistake>
      </>,
    ),
  },
  {
    title: 'Percent purity of a sample',
    content: slide(
      <>
        <Rule>An impure sample contains other substances. Percent purity = mass of the pure substance / mass of the sample × 100. Use a balanced equation to find the mass of the pure substance from the product that forms.</Rule>
        <FactCards
          cards={[
            { title: 'Sample', line1: 'sea shells: CaCO₃ with', line2: 'other substances' },
            { title: 'Reaction', line1: 'heating gives CaO and', line2: 'CO₂ gas: the mass lost' },
            { title: 'Purity', line1: 'pure CaCO₃ ÷ sample', line2: 'mass × 100' },
          ]}
          aria="Finding the purity of sea shells. The sample is mostly calcium carbonate with other substances. Heating gives calcium oxide and carbon dioxide gas, and the mass lost is the carbon dioxide. Purity is the mass of pure calcium carbonate divided by the mass of the sample, times 100."
        />
        <Worked
          title={`${pretty(eq3)}: a 10,0 g sample loses 3,52 g of CO₂ when heated`}
          steps={[
            `n(CO₂) = 3,52 / ${molarMassOf('CO2')} = ${dc(nCO2)} mol.`,
            `The ratio CaCO₃ : CO₂ = 1 : 1, so n(CaCO₃) = ${dc(nCO2)} mol and m(CaCO₃) = ${dc(nCO2)} × ${molarMassOf('CaCO3')} = ${dc(mCaCO3, 1)} g.`,
            `Percent purity = ${dc(mCaCO3, 1)} / 10,0 × 100 = ${dc(percentPurity(mCaCO3, 10.0), 0)}%.`,
          ]}
        />
        <Mistake>Using the mass of the sample as the mass of pure CaCO₃. Only the mass calculated from the product is pure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In N₂ + 3H₂ → 2NH₃, how many moles of H₂ react with 2,0 mol of N₂?</>,
          <>Mg 0,20 mol and O₂ 0,20 mol react as 2Mg + O₂ → 2MgO. Which is the limiting reagent?</>,
          <>The theoretical yield is 10 g and the actual yield is 8,0 g. What is the percent yield?</>,
          <>A 5,0 g sample contains 4,0 g of pure substance. What is the percent purity?</>,
        ]}
        answers={[
          <>3 × 2,0 = 6,0 mol of H₂.</>,
          <>Mg: 0,20 / 2 = 0,10 and O₂: 0,20 / 1 = 0,20, so Mg is the limiting reagent.</>,
          <>8,0 / 10 × 100 = {dc(percentYield(8, 10), 0)}%.</>,
          <>4,0 / 5,0 × 100 = {dc(percentPurity(4, 5), 0)}%.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In the equation 2Mg + O₂ → 2MgO, what is the mole ratio of Mg to MgO?",
    options: ["2 : 1", "1 : 2", "1 : 1", "2 : 3"],
    answer: "1 : 1",
    explanation: "The coefficients are both 2, so the ratio is 2 : 2 = 1 : 1.",
  },
  {
    prompt: "2Mg + O₂ → 2MgO. What mass of MgO forms from 6,0 g of Mg? (Mg = 24, O = 16)",
    options: ["10,0 g", "6,0 g", "5,0 g", "20,0 g"],
    answer: "10,0 g",
    explanation: "n(Mg) = 6,0/24 = 0,25 mol, so n(MgO) = 0,25 mol and m = 0,25 × 40 = 10,0 g.",
  },
  {
    prompt: "N₂ + 3H₂ → 2NH₃. How many moles of H₂ react with 2,0 mol of N₂?",
    options: ["2,0 mol", "0,7 mol", "4,0 mol", "6,0 mol"],
    answer: "6,0 mol",
    explanation: "The ratio N₂ : H₂ = 1 : 3, so 2,0 mol of N₂ reacts with 3 × 2,0 = 6,0 mol of H₂.",
  },
  {
    prompt: "N₂ + 3H₂ → 2NH₃. How many moles of NH₃ form from 6,0 mol of H₂?",
    options: ["6,0 mol", "4,0 mol", "9,0 mol", "2,0 mol"],
    answer: "4,0 mol",
    explanation: "The ratio H₂ : NH₃ = 3 : 2, so 6,0 mol of H₂ gives 6,0 × 2/3 = 4,0 mol of NH₃.",
  },
  {
    prompt: "What is the limiting reagent?",
    options: ["The reactant with the smaller mass", "The reactant that is used up first", "The reactant with the larger coefficient", "The product that forms first"],
    answer: "The reactant that is used up first",
    explanation: "The limiting reagent is used up first and so decides how much product can form.",
  },
  {
    prompt: "2Mg + O₂ → 2MgO. 0,20 mol of Mg reacts with 0,20 mol of O₂. Which is the limiting reagent?",
    options: ["O₂", "MgO", "Neither of them", "Mg"],
    answer: "Mg",
    explanation: "Mg: 0,20/2 = 0,10. O₂: 0,20/1 = 0,20. The smaller number is Mg, so Mg is limiting.",
  },
  {
    prompt: "2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. Which reactant is limiting? (H = 1, O = 16)",
    options: ["O₂", "H₂", "H₂O", "Neither of them"],
    answer: "O₂",
    explanation: "n(H₂) = 4,0/2 = 2,0 mol and n(O₂) = 8,0/32 = 0,25 mol. H₂: 2,0/2 = 1,0 and O₂: 0,25/1 = 0,25, so O₂ is limiting.",
  },
  {
    prompt: "2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of water forms?",
    options: ["12,0 g", "36,0 g", "9,0 g", "4,5 g"],
    answer: "9,0 g",
    explanation: "O₂ is limiting: n(O₂) = 0,25 mol, so n(H₂O) = 0,50 mol and m = 0,50 × 18 = 9,0 g.",
  },
  {
    prompt: "2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of H₂ is left over?",
    options: ["1,0 g", "2,0 g", "4,0 g", "3,0 g"],
    answer: "3,0 g",
    explanation: "H₂ used = 0,50 mol, so 2,0 − 0,50 = 1,5 mol is left, which is 1,5 × 2 = 3,0 g.",
  },
  {
    prompt: "The theoretical yield of a product is 9,0 g and 7,2 g is obtained. What is the percent yield?",
    options: ["125%", "80%", "72%", "20%"],
    answer: "80%",
    explanation: "Percent yield = 7,2/9,0 × 100 = 80%.",
  },
  {
    prompt: "Why can a percent yield be less than 100%?",
    options: ["Some product is lost or the reaction is incomplete", "The reactants are never used up in a reaction", "More atoms are made than were present at first", "The balanced equation is always wrong in practice"],
    answer: "Some product is lost or the reaction is incomplete",
    explanation: "Product can be lost during the experiment, and a reaction may not go to completion.",
  },
  {
    prompt: "CaCO₃ → CaO + CO₂. Heating a sample of shells gives 0,08 mol of CO₂. What mass of CaCO₃ was in the sample? (Ca = 40, C = 12, O = 16)",
    options: ["3,52 g", "0,08 g", "8,0 g", "16,0 g"],
    answer: "8,0 g",
    explanation: "The ratio CaCO₃ : CO₂ = 1 : 1, so n(CaCO₃) = 0,08 mol and m = 0,08 × 100 = 8,0 g.",
  },
  {
    prompt: "A 10,0 g sample of sea shells contains 8,0 g of pure CaCO₃. What is the percent purity?",
    options: ["125%", "20%", "80%", "8%"],
    answer: "80%",
    explanation: "Percent purity = 8,0/10,0 × 100 = 80%.",
  },
  {
    prompt: "What is the percent purity of a 5,0 g sample that contains 4,0 g of pure substance?",
    options: ["80%", "125%", "20%", "45%"],
    answer: "80%",
    explanation: "Percent purity = 4,0/5,0 × 100 = 80%.",
  },
];

const Stoichiometry = () => (
  <CapsSubjectTopic
    title="Stoichiometry"
    subtitle="Mass and mole ratios, limiting reagent, percent yield and percent purity"
    learnSteps={learnSteps}
    task="gr11-stoichiometry-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Stoichiometry;
