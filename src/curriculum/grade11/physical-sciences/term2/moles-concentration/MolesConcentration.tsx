import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, MoleMap } from '../../../../../components/diagrams/gas11/Gas11';
import { MASS, concentration, empirical, formulaString, gasVolumeFromMoles, massFromMoles, molarMassOf, molecular, molesFromGasVolume, molesFromMass } from '../../../../../components/diagrams/gas11/gas11Helpers';
import { isBalanced } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// Every number below comes from gas11Helpers.ts (tested in gas11Helpers.test.ts and g11PsGases.test.ts).
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const pretty = (s: string) => s.replace(/([A-Za-z])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const h2oN = molesFromMass(36, 'H2O');
const co2M = massFromMoles(0.25, 'CO2');
const eq = '2H2 + O2 → 2H2O';
const naohN = molesFromMass(4.0, 'NaOH');
const naohC = concentration(naohN, 500);
const nacl = concentration(0, 1) + 0;
void nacl;
const nNaCl = (0.5 * 250) / 1000;
const mNaCl = massFromMoles(nNaCl, 'NaCl');
const empA = empirical({ C: 85.7, H: 14.3 });
const molA = molecular(empA, 56);
const empB = empirical({ C: 40, H: 6.7, O: 53.3 });
const molB = molecular(empB, 180);

export const learnSteps: LearnStep[] = [
  {
    title: 'The mole and molar mass',
    content: slide(
      <>
        <Rule>The mole is the amount of substance that contains 6,02 × 10²³ particles. The molar mass M is the mass of one mole, in g·mol⁻¹, and equals the relative formula mass. The amount in moles is n = m/M.</Rule>
        <MoleMap />
        <Worked
          title="Water, H₂O: M = 2(1) + 16 = 18 g·mol⁻¹"
          steps={[
            `36 g of water: n = m/M = 36 / ${molarMassOf('H2O')} = ${dc(h2oN, 1)} mol.`,
            `The mass of 0,25 mol of CO₂ (M = ${molarMassOf('CO2')} g·mol⁻¹): m = nM = 0,25 × ${molarMassOf('CO2')} = ${dc(co2M, 0)} g.`,
            'Use the atomic masses from the periodic table on the data sheet (Cl = 35,5).',
          ]}
        />
        <Mistake>Using the number of atoms in the formula as the molar mass. M is the sum of the atomic masses: 2 × 1 + 16 = 18 for H₂O.</Mistake>
      </>,
    ),
  },
  {
    title: 'Molar volume and gas volumes',
    content: slide(
      <>
        <Rule>At standard temperature and pressure (0 °C or 273 K, and 101,3 kPa) one mole of any gas occupies 22,4 dm³. For gases at the same temperature and pressure the volumes are in the same ratio as the coefficients in the balanced equation. n = V/22,4.</Rule>
        <FactCards
          cards={[
            { title: 'Molar volume', line1: '22,4 dm³·mol⁻¹ at 273 K', line2: 'and 101,3 kPa' },
            { title: 'Amount of gas', line1: 'n = V / 22,4', line2: 'with V in dm³' },
            { title: 'Volume ratio', line1: 'same T and P: V ∝ n,', line2: 'so use the coefficients' },
          ]}
          aria="Molar volume. At 273 kelvin and 101,3 kilopascals one mole of any gas occupies 22,4 cubic decimetres. The amount of gas is n equals V over 22,4. For gases at the same temperature and pressure the volumes are in the ratio of the coefficients in the balanced equation."
        />
        <Worked
          title="Gas volumes at STP"
          steps={[
            `5,6 dm³ of gas: n = 5,6 / 22,4 = ${dc(molesFromGasVolume(5.6))} mol. 0,50 mol of gas: V = 0,50 × 22,4 = ${dc(gasVolumeFromMoles(0.5), 1)} dm³.`,
            `${pretty(eq)}: the equation is ${isBalanced(eq) ? 'balanced' : 'not balanced'}, so 2 volumes of H₂ react with 1 volume of O₂.`,
            '10 dm³ of H₂ therefore reacts with 5,0 dm³ of O₂ at the same temperature and pressure.',
          ]}
        />
        <Mistake>Using 22,4 dm³·mol⁻¹ when the gas is not at STP. At other temperatures and pressures use PV = nRT.</Mistake>
      </>,
    ),
  },
  {
    title: 'Concentration of a solution',
    content: slide(
      <>
        <Rule>The concentration of a solution is the amount of solute in one dm³ of solution: c = n/V, in mol·dm⁻³. Change the volume from cm³ to dm³ by dividing by 1 000.</Rule>
        <FactCards
          cards={[
            { title: 'c = n / V', line1: 'mol·dm⁻³ = mol per', line2: 'dm³ of solution' },
            { title: 'n = m / M', line1: 'find the moles from', line2: 'the mass first' },
            { title: 'V in dm³', line1: 'cm³ ÷ 1 000 = dm³', line2: '(500 cm³ = 0,500 dm³)' },
          ]}
          aria="Concentration. c equals n over V in moles per cubic decimetre of solution. First find the moles from the mass using n equals m over M. Change the volume from cubic centimetres to cubic decimetres by dividing by 1 000, so 500 cubic centimetres is 0,500 cubic decimetres."
        />
        <Worked
          title="Make a standard solution of NaOH (M = 40 g·mol⁻¹)"
          steps={[
            `4,0 g of NaOH: n = 4,0 / 40 = ${dc(naohN)} mol.`,
            `Dissolved in 500 cm³ of solution: c = n/V = ${dc(naohN)} / 0,500 = ${dc(naohC)} mol·dm⁻³.`,
            `What mass of NaCl (M = 58,5 g·mol⁻¹) is in 250 cm³ of 0,50 mol·dm⁻³ solution? n = cV = 0,50 × 0,250 = ${dc(nNaCl, 3)} mol, so m = nM = ${dc(mNaCl, 1)} g.`,
          ]}
        />
        <Mistake>Using the volume of the water instead of the volume of the solution. The volume in c = n/V is the final volume of the solution.</Mistake>
      </>,
    ),
  },
  {
    title: 'Empirical and molecular formulae',
    content: slide(
      <>
        <Rule>The empirical formula is the simplest whole-number ratio of the atoms in a compound. Divide the percentage of each element by its atomic mass, then divide all the answers by the smallest. The molecular formula is a whole-number multiple of the empirical formula: use the molar mass.</Rule>
        <FactCards
          cards={[
            { title: 'Step 1', line1: '% ÷ atomic mass gives', line2: 'the moles in 100 g' },
            { title: 'Step 2', line1: 'divide by the smallest', line2: 'to get the ratio' },
            { title: 'Step 3', line1: 'molar mass ÷ empirical', line2: 'mass gives the multiple' },
          ]}
          aria="Finding formulae. Step 1: divide each percentage by the atomic mass to get the moles in 100 grams. Step 2: divide by the smallest number to get the simplest ratio. Step 3: divide the molar mass by the mass of the empirical formula to get the multiple for the molecular formula."
        />
        <Worked
          title="A hydrocarbon is 85,7% C and 14,3% H, and its molar mass is 56 g·mol⁻¹"
          steps={[
            `C: 85,7 / ${MASS.C} = ${dc(85.7 / MASS.C)}. H: 14,3 / ${MASS.H} = ${dc(14.3 / MASS.H)}. Divide by ${dc(85.7 / MASS.C)}: C 1 and H 2, so the empirical formula is ${formulaString(empA)}.`,
            `The mass of ${formulaString(empA)} is 14, and 56 / 14 = 4, so the molecular formula is ${formulaString(molA)}.`,
            `Glucose is 40,0% C, 6,7% H and 53,3% O, with M = 180 g·mol⁻¹: the empirical formula is ${formulaString(empB)} and the molecular formula is ${formulaString(molB)}.`,
          ]}
        />
        <Mistake>Using the percentages as the numbers of atoms. Divide each percentage by its atomic mass first to get moles.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the amount in moles of 22 g of CO₂ (M = 44 g·mol⁻¹)?</>,
          <>What volume do 0,25 mol of a gas occupy at STP?</>,
          <>What is the concentration when 0,10 mol of solute is dissolved to make 250 cm³ of solution?</>,
          <>A compound has the empirical formula CH₂O and M = 60 g·mol⁻¹. What is its molecular formula?</>,
        ]}
        answers={[
          <>n = m/M = 22 / 44 = {dc(molesFromMass(22, 'CO2'))} mol.</>,
          <>V = 0,25 × 22,4 = {dc(gasVolumeFromMoles(0.25), 1)} dm³.</>,
          <>c = 0,10 / 0,250 = {dc(concentration(0.1, 250))} mol·dm⁻³.</>,
          <>M of CH₂O = 30, and 60/30 = 2, so the formula is C₂H₄O₂.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many particles does one mole of a substance contain?",
    options: ["6,02 × 10⁻²³", "22,4", "6,02 × 10²³", "1,00 × 10²³"],
    answer: "6,02 × 10²³",
    explanation: "One mole contains 6,02 × 10²³ particles (Avogadro's number).",
  },
  {
    prompt: "What is the molar mass of water (H₂O)? Use H = 1 and O = 16.",
    options: ["18 g·mol⁻¹", "17 g·mol⁻¹", "16 g·mol⁻¹", "34 g·mol⁻¹"],
    answer: "18 g·mol⁻¹",
    explanation: "M = 2(1) + 16 = 18 g·mol⁻¹.",
  },
  {
    prompt: "How many moles are in 36 g of water (M = 18 g·mol⁻¹)?",
    options: ["0,5 mol", "648 mol", "18,0 mol", "2,0 mol"],
    answer: "2,0 mol",
    explanation: "n = m/M = 36/18 = 2,0 mol.",
  },
  {
    prompt: "What is the mass of 0,25 mol of CO₂ (M = 44 g·mol⁻¹)?",
    options: ["176 g", "11 g", "22 g", "0,25 g"],
    answer: "11 g",
    explanation: "m = nM = 0,25 × 44 = 11 g.",
  },
  {
    prompt: "What volume do 0,50 mol of any gas occupy at STP?",
    options: ["44,8 dm³", "11,2 dm³", "12,0 dm³", "0,5 dm³"],
    answer: "11,2 dm³",
    explanation: "V = nVm = 0,50 × 22,4 = 11,2 dm³.",
  },
  {
    prompt: "How many moles of gas are in 5,6 dm³ at STP?",
    options: ["125 mol", "4,0 mol", "5,6 mol", "0,25 mol"],
    answer: "0,25 mol",
    explanation: "n = V/22,4 = 5,6/22,4 = 0,25 mol.",
  },
  {
    prompt: "2H₂ + O₂ → 2H₂O. What volume of O₂ reacts with 10 dm³ of H₂, at the same temperature and pressure?",
    options: ["5,0 dm³", "10,0 dm³", "20,0 dm³", "2,5 dm³"],
    answer: "5,0 dm³",
    explanation: "The volumes are in the ratio of the coefficients: 2 : 1, so 10 dm³ of H₂ reacts with 5,0 dm³ of O₂.",
  },
  {
    prompt: "What is the concentration of a solution that contains 0,10 mol of NaOH in 500 cm³ of solution?",
    options: ["0,05 mol·dm⁻³", "50 mol·dm⁻³", "0,20 mol·dm⁻³", "0,0002 mol·dm⁻³"],
    answer: "0,20 mol·dm⁻³",
    explanation: "c = n/V = 0,10/0,500 = 0,20 mol·dm⁻³.",
  },
  {
    prompt: "What mass of NaOH (M = 40 g·mol⁻¹) is needed to make 250 cm³ of solution with a concentration of 0,40 mol·dm⁻³?",
    options: ["4000 g", "400 g", "16,0 g", "4,0 g"],
    answer: "4,0 g",
    explanation: "n = cV = 0,40 × 0,250 = 0,10 mol, so m = nM = 0,10 × 40 = 4,0 g.",
  },
  {
    prompt: "How many moles of NaCl are in 250 cm³ of a 0,50 mol·dm⁻³ solution?",
    options: ["125 mol", "0,125 mol", "2,0 mol", "0,50 mol"],
    answer: "0,125 mol",
    explanation: "n = cV = 0,50 × 0,250 = 0,125 mol.",
  },
  {
    prompt: "A hydrocarbon contains 85,7% C and 14,3% H by mass. What is its empirical formula? (C = 12, H = 1)",
    options: ["CH₂", "CH", "C₂H₅", "C₄H₈"],
    answer: "CH₂",
    explanation: "C: 85,7/12 = 7,14; H: 14,3/1 = 14,3. Dividing by 7,14 gives C 1 : H 2.",
  },
  {
    prompt: "A hydrocarbon has the empirical formula CH₂ and a molar mass of 56 g·mol⁻¹. What is its molecular formula?",
    options: ["C₂H₄", "CH₂", "C₄H₈", "C₅H₁₀"],
    answer: "C₄H₈",
    explanation: "The mass of CH₂ is 14, and 56/14 = 4, so the formula is C₄H₈.",
  },
  {
    prompt: "What is the percentage by mass of oxygen in water (H₂O)? Use H = 1 and O = 16.",
    options: ["11,1%", "47,1%", "88,9%", "50,0%"],
    answer: "88,9%",
    explanation: "% O = 16/18 × 100 = 88,9%.",
  },
  {
    prompt: "Which is the volume to use for c = n/V?",
    options: ["The final volume of the solution, in dm³", "The volume of the water added, in cm³", "The volume of the solute only, in dm³", "The volume of the flask in cm³"],
    answer: "The final volume of the solution, in dm³",
    explanation: "c is the amount of solute per dm³ of solution, so use the final volume of the solution in dm³.",
  },
];

const MolesConcentration = () => (
  <CapsSubjectTopic
    title="Moles, Gas Volumes and Concentration"
    subtitle="Molar mass, molar volume, concentration and empirical and molecular formulae"
    learnSteps={learnSteps}
    task="gr11-moles-concentration-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default MolesConcentration;
