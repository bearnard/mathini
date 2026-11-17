import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { BeakerPair } from '../../../../../components/diagrams/matter10/Quant10';
import { formulaMass } from '../../../../../components/diagrams/matter10/matter10Helpers';
import { MOLAR_VOLUME, concentration, dm3FromCm3, gasVolume, massFrom, moles, molesFromConcentration, theoreticalYield } from '../../../../../components/diagrams/matter10/quant10Helpers';

// Every number comes from quant10Helpers.ts (tested in quant10Helpers.test.ts and g10PsW2T2b.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');
const nacl = moles(5.85, formulaMass('NaCl'));
const c = concentration(nacl, dm3FromCm3(500));

export const learnSteps: LearnStep[] = [
  {
    title: 'Concentration of a solution',
    content: slide(
      <>
        <Rule>The concentration of a solution is the amount of solute per unit volume of solution: c = n ÷ V, in mol·dm⁻³, with V in dm³. Change cm³ to dm³ by dividing by 1 000. And n = m ÷ M links the mass of the solute to its amount.</Rule>
        <BeakerPair left={{ n: 0.1, v: 0.5 }} right={{ n: 0.1, v: 0.25 }} />
        <Worked
          title="5,85 g of NaCl is dissolved to make 500 cm³ of solution"
          steps={[
            `M(NaCl) = 23 + 35,5 = ${n(formulaMass('NaCl'))} g·mol⁻¹, so n = 5,85 ÷ ${n(formulaMass('NaCl'))} = ${n(nacl)} mol.`,
            `V = 500 ÷ 1 000 = ${n(dm3FromCm3(500))} dm³.`,
            `c = n ÷ V = ${n(nacl)} ÷ ${n(dm3FromCm3(500))} = ${n(c)} mol·dm⁻³.`,
          ]}
        />
        <Mistake>Using the volume in cm³ in c = n ÷ V. The volume must be in dm³.</Mistake>
      </>,
    ),
  },
  {
    title: 'Preparing a solution',
    content: slide(
      <>
        <Rule>To find the mass of solute needed: n = c × V, then m = n × M. The solute is dissolved and then made up to the stated volume of solution, not added to that volume of water.</Rule>
        <FactCards
          cards={[
            { title: 'Step 1', line1: 'n = c × V', line2: 'V in dm³' },
            { title: 'Step 2', line1: 'm = n × M', line2: 'M in g·mol⁻¹' },
            { title: 'Step 3', line1: 'dissolve the solid, then fill', line2: 'with water to the mark' },
          ]}
          aria="Preparing a solution. Step 1: n equals c times V, with V in cubic decimetres. Step 2: m equals n times M, with M in grams per mole. Step 3: dissolve the solid, then fill with water to the mark."
        />
        <Worked
          title="What mass of NaOH makes 250 cm³ of a 0,5 mol·dm⁻³ solution?"
          steps={[
            `n = 0,5 × ${n(dm3FromCm3(250))} = ${n(molesFromConcentration(0.5, 0.25))} mol.`,
            `M(NaOH) = 23 + 16 + 1 = ${n(formulaMass('NaOH'))} g·mol⁻¹.`,
            `m = ${n(molesFromConcentration(0.5, 0.25))} × ${n(formulaMass('NaOH'))} = ${n(massFrom(molesFromConcentration(0.5, 0.25), formulaMass('NaOH')))} g.`,
          ]}
        />
        <Mistake>Adding the solute to 250 cm³ of water. The final volume of the solution must be 250 cm³.</Mistake>
      </>,
    ),
  },
  {
    title: 'Molar volume of a gas',
    content: slide(
      <>
        <Rule>One mole of any gas occupies 22,4 dm³ at 273 K and 101,3 kPa (0 °C and 1 atmosphere). So V = n × 22,4 dm³·mol⁻¹, and n = V ÷ 22,4.</Rule>
        <FactCards
          cards={[
            { title: `Molar volume ${n(MOLAR_VOLUME)} dm³`, line1: 'for one mole of any gas at', line2: '273 K and 101,3 kPa' },
            { title: 'Volume from moles', line1: 'V = n × 22,4', line2: `0,5 mol gives ${n(gasVolume(0.5))} dm³` },
            { title: 'Moles from volume', line1: 'n = V ÷ 22,4', line2: 'V in dm³' },
          ]}
          aria="Molar volume. One mole of any gas occupies 22,4 cubic decimetres at 273 kelvin and 101,3 kilopascal. Volume from moles: V equals n times 22,4, so 0,5 mole gives 11,2 cubic decimetres. Moles from volume: n equals V divided by 22,4, with V in cubic decimetres."
        />
        <Worked
          title="Volume of carbon dioxide from 10 g of CaCO₃ (CaCO₃ → CaO + CO₂)"
          steps={[
            `M(CaCO₃) = ${n(formulaMass('CaCO3'))} g·mol⁻¹, so n = 10 ÷ ${n(formulaMass('CaCO3'))} = ${n(moles(10, formulaMass('CaCO3')))} mol.`,
            'The ratio CaCO₃ : CO₂ is 1 : 1, so n(CO₂) = 0,1 mol.',
            `V = 0,1 × 22,4 = ${n(gasVolume(moles(10, formulaMass('CaCO3'))))} dm³ (at 273 K and 101,3 kPa).`,
          ]}
        />
        <Mistake>Using 22,4 dm³ for a gas at room temperature. The value is for 273 K and 101,3 kPa.</Mistake>
      </>,
    ),
  },
  {
    title: 'Theoretical yield',
    content: slide(
      <>
        <Rule>The theoretical yield is the mass of product that a balanced equation predicts from a known mass of reactant. Change the mass to moles, use the mole ratio, then change back to a mass.</Rule>
        <Worked
          title="2Mg + O₂ → 2MgO: 12 g of Mg burns completely (Mg = 24, MgO = 40)"
          steps={[
            `n(Mg) = 12 ÷ 24 = ${n(moles(12, 24))} mol.`,
            'The ratio Mg : MgO is 2 : 2 = 1 : 1, so n(MgO) = 0,5 mol.',
            `m(MgO) = 0,5 × ${n(formulaMass('MgO'))} = ${n(theoreticalYield(12, 24, formulaMass('MgO'), 1))} g.`,
          ]}
        />
        <FactCards
          cards={[
            { title: 'Plan', line1: 'mass → moles → mole ratio', line2: '→ moles of product → mass' },
            { title: 'Check', line1: 'compare with conservation', line2: 'of mass: the total mass is kept' },
          ]}
          aria="Plan for a yield calculation: mass to moles, then the mole ratio, then moles of product, then mass. Check the result against the conservation of mass."
        />
        <Mistake>Forgetting the coefficients of the equation. Use the mole ratio from the balanced equation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the concentration of a solution with 0,1 mol in 0,5 dm³?</>,
          <>What mass of NaOH is in 250 cm³ of 0,5 mol·dm⁻³ solution? (M = 40 g·mol⁻¹)</>,
          <>What volume does 0,5 mol of gas occupy at 273 K and 101,3 kPa?</>,
          <>What mass of MgO forms from 12 g of Mg?</>,
        ]}
        answers={[
          <>{n(concentration(0.1, 0.5))} mol·dm⁻³.</>,
          <>{n(massFrom(molesFromConcentration(0.5, 0.25), formulaMass('NaOH')))} g.</>,
          <>{n(gasVolume(0.5))} dm³.</>,
          <>{n(theoreticalYield(12, 24, formulaMass('MgO'), 1))} g.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the concentration of a solution?",
    options: ["The mass of the solvent used", "The volume of gas released", "The amount of solute per unit volume of solution", "The number of solutes that dissolve"],
    answer: "The amount of solute per unit volume of solution",
    explanation: "Concentration is c = n ÷ V.",
  },
  {
    prompt: "What is the concentration of a solution with 0,2 mol of solute in 0,5 dm³?",
    options: ["0,4 mol·dm⁻³", "0,1 mol·dm⁻³", "0,7 mol·dm⁻³", "2,5 mol·dm⁻³"],
    answer: "0,4 mol·dm⁻³",
    explanation: "c = n ÷ V = 0,2 ÷ 0,5 = 0,4 mol·dm⁻³.",
  },
  {
    prompt: "What is 250 cm³ in dm³?",
    options: ["2,5 dm³", "250 dm³", "0,025 dm³", "0,25 dm³"],
    answer: "0,25 dm³",
    explanation: "Divide cm³ by 1 000: 250 ÷ 1 000 = 0,25 dm³.",
  },
  {
    prompt: "2 mol of solute is dissolved to make 500 cm³ of solution. What is the concentration?",
    options: ["1 mol·dm⁻³", "4 mol·dm⁻³", "0,25 mol·dm⁻³", "1 000 mol·dm⁻³"],
    answer: "4 mol·dm⁻³",
    explanation: "V = 0,5 dm³, so c = 2 ÷ 0,5 = 4 mol·dm⁻³.",
  },
  {
    prompt: "How many moles of solute are in 200 cm³ of a 0,5 mol·dm⁻³ solution?",
    options: ["100 mol", "0,1 mol", "2,5 mol", "0,7 mol"],
    answer: "0,1 mol",
    explanation: "n = c × V = 0,5 × 0,2 = 0,1 mol.",
  },
  {
    prompt: "What mass of KOH is needed to make 500 cm³ of a 0,2 mol·dm⁻³ solution? Use K = 39, O = 16 and H = 1.",
    options: ["0,1 g", "56 g", "28 g", "5,6 g"],
    answer: "5,6 g",
    explanation: "n = 0,2 × 0,5 = 0,1 mol and M = 56 g·mol⁻¹, so m = 0,1 × 56 = 5,6 g.",
  },
  {
    prompt: "What is the volume of one mole of any gas at 273 K and 101,3 kPa?",
    options: ["22,4 dm³", "24,0 dm³", "1,0 dm³", "2,24 dm³"],
    answer: "22,4 dm³",
    explanation: "The molar volume is 22,4 dm³·mol⁻¹ at 273 K and 101,3 kPa.",
  },
  {
    prompt: "What volume does 0,25 mol of a gas occupy at 273 K and 101,3 kPa? Use 22,4 dm³·mol⁻¹.",
    options: ["89,6 dm³", "0,01 dm³", "5,6 dm³", "22,65 dm³"],
    answer: "5,6 dm³",
    explanation: "V = 0,25 × 22,4 = 5,6 dm³.",
  },
  {
    prompt: "How many moles of gas are in 4,48 dm³ at 273 K and 101,3 kPa? Use 22,4 dm³·mol⁻¹.",
    options: ["5 mol", "0,02 mol", "100,4 mol", "0,2 mol"],
    answer: "0,2 mol",
    explanation: "n = 4,48 ÷ 22,4 = 0,2 mol.",
  },
  {
    prompt: "Mg + 2HCl → MgCl₂ + H₂. What volume of H₂ forms at 273 K and 101,3 kPa from 0,5 mol of Mg? Use 22,4 dm³·mol⁻¹.",
    options: ["22,4 dm³", "11,2 dm³", "5,6 dm³", "44,8 dm³"],
    answer: "11,2 dm³",
    explanation: "The ratio Mg : H₂ is 1 : 1, so n(H₂) = 0,5 mol and V = 0,5 × 22,4 = 11,2 dm³.",
  },
  {
    prompt: "What is the first step in calculating the theoretical yield from a given mass of reactant?",
    options: ["Change the mass to moles", "Change the mass to volume", "Multiply by the molar volume", "Add the coefficients of the equation"],
    answer: "Change the mass to moles",
    explanation: "n = m ÷ M comes first, then the mole ratio is used.",
  },
  {
    prompt: "2H₂ + O₂ → 2H₂O. What mass of H₂O forms from 4 g of H₂? Use H = 1 and O = 16.",
    options: ["18 g", "72 g", "36 g", "4 g"],
    answer: "36 g",
    explanation: "n(H₂) = 4 ÷ 2 = 2 mol, the ratio H₂ : H₂O is 1 : 1, so m = 2 × 18 = 36 g.",
  },
  {
    prompt: "CaCO₃ → CaO + CO₂. What mass of CaO forms from 20 g of CaCO₃? Use Ca = 40, C = 12 and O = 16.",
    options: ["20 g", "56 g", "11,2 g", "5,6 g"],
    answer: "11,2 g",
    explanation: "n(CaCO₃) = 20 ÷ 100 = 0,2 mol, the ratio is 1 : 1, so m(CaO) = 0,2 × 56 = 11,2 g.",
  },
  {
    prompt: "Why is a solution made up to the mark in a volumetric flask instead of adding the solute to a fixed volume of water?",
    options: ["The solution volume must equal the stated volume", "The solute takes up no space", "Water volumes cannot be measured", "The solute would react with the flask"],
    answer: "The solution volume must equal the stated volume",
    explanation: "Concentration depends on the volume of the final solution.",
  },
];

const ConcentrationGasYield = () => (
  <CapsSubjectTopic
    title="Concentration, Gas Volume and Yield"
    subtitle="Concentration of solutions, molar volume of gases and theoretical yield"
    learnSteps={learnSteps}
    task="gr10-concentration-gas-yield-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ConcentrationGasYield;
