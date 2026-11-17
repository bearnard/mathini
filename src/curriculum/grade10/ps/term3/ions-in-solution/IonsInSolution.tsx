import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, HydratedIons, IonBars } from '../../../../../components/diagrams/aq10/Aq10';
import { SALTS, conductsBetter, dissolutionEquation, ionConcentration, ionsPerFormula, totalCharge } from '../../../../../components/diagrams/aq10/aq10Helpers';

// Every equation and number below comes from aq10Helpers.ts (tested in aq10Helpers.test.ts and g10PsT3.test.ts).
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const salt = (f: string) => SALTS.find((s) => s.formula === f)!;
const nacl = salt('NaCl'), cacl2 = salt('CaCl2'), alcl3 = salt('AlCl3'), na2so4 = salt('Na2SO4');

export const learnSteps: LearnStep[] = [
  {
    title: 'How water dissolves an ionic compound',
    content: slide(
      <>
        <Rule>A water molecule is polar: the oxygen end is slightly negative (δ−) and the hydrogen ends are slightly positive (δ+). When an ionic crystal is put in water, the polar water molecules pull the ions out of the crystal. This is dissolving. Each ion becomes surrounded by water molecules: it is hydrated.</Rule>
        <HydratedIons />
        <Worked
          title="Why do the water molecules face the ions that way?"
          steps={[
            'The positive Na⁺ ion attracts the negative (δ−) oxygen end of the water molecules.',
            'The negative Cl⁻ ion attracts the positive (δ+) hydrogen ends.',
            'These attractions are strong enough to pull the ions away from the crystal and keep them apart in the solution.',
          ]}
        />
        <Mistake>Saying that water molecules break the ionic bonds by heating the crystal. The polar water molecules attract the ions and pull them out of the crystal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dissolution equations with state symbols',
    content: slide(
      <>
        <Rule>We show dissolving with an equation. The solid is written (s) and the ions in solution are written (aq), which means that they are surrounded by water. The equation must balance in atoms and in charge.</Rule>
        <FactCards
          cards={[nacl, cacl2, na2so4, alcl3].map((s) => ({ title: s.formula.replace(/(\d)/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]), line1: dissolutionEquation(s), line2: '' }))}
          aria={`Four dissolution equations. ${[nacl, cacl2, na2so4, alcl3].map((s) => `${s.formula} dissolves to give ${s.nCation} cation and ${s.nAnion} anion units`).join('; ')}. In every equation the total charge of the ions is zero, the same as the charge on the solid.`}
        />
        <Worked
          title="Write and check the equations"
          steps={[
            `${dissolutionEquation(nacl)}: charge +1 + (−1) = ${totalCharge(nacl)}.`,
            `${dissolutionEquation(cacl2)}: charge +2 + 2(−1) = ${totalCharge(cacl2)}. One CaCl₂ gives three ions.`,
            `${dissolutionEquation(na2so4)}: charge 2(+1) + (−2) = ${totalCharge(na2so4)}.`,
          ]}
        />
        <Mistake>Forgetting the coefficient when a compound has two or more of the same ion. CaCl₂ gives 2Cl⁻, not Cl⁻.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ions, conductivity and concentration',
    content: slide(
      <>
        <Rule>A solution conducts electricity if it contains free (mobile) ions. The more ions in the solution, the better it conducts. A compound that dissolves into molecules, such as sugar, makes no ions, so its solution does not conduct. Conductivity is therefore not always a measure of solubility.</Rule>
        <IonBars
          title="Ions in 0,10 mol·dm⁻³ solutions"
          unit="mol·dm⁻³"
          items={[{ label: 'sugar', value: 0 }, { label: 'NaCl', value: ionConcentration(nacl, 0.1) }, { label: 'CaCl₂', value: ionConcentration(cacl2, 0.1) }, { label: 'AlCl₃', value: ionConcentration(alcl3, 0.1) }]}
        />
        <Worked
          title="Compare the solutions (each salt 0,10 mol·dm⁻³)"
          steps={[
            `NaCl gives ${ionsPerFormula(nacl)} ions per formula, so the ion concentration is ${dc(ionConcentration(nacl, 0.1))} mol·dm⁻³.`,
            `CaCl₂ gives ${ionsPerFormula(cacl2)} ions, so ${dc(ionConcentration(cacl2, 0.1))} mol·dm⁻³. AlCl₃ gives ${ionsPerFormula(alcl3)} ions, so ${dc(ionConcentration(alcl3, 0.1))} mol·dm⁻³.`,
            `${conductsBetter(nacl, cacl2).formula === 'CaCl2' ? 'CaCl₂' : 'NaCl'} conducts better than NaCl because it makes more ions.`,
            'Sugar dissolves but makes no ions, so the circuit stays open and the bulb does not light.',
          ]}
        />
        <Mistake>Thinking that anything that dissolves in water makes the solution conduct. Sugar dissolves well but forms no ions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why can water dissolve ionic compounds?</>,
          <>Write the equation for dissolving KNO₃ in water.</>,
          <>How many ions do you get from one formula unit of CaCl₂?</>,
          <>Why does a sugar solution not conduct electricity?</>,
        ]}
        answers={[
          <>Water molecules are polar and attract the ions out of the crystal.</>,
          <>{dissolutionEquation(salt('KNO3'))}</>,
          <>{ionsPerFormula(cacl2)}: one Ca²⁺ and two Cl⁻.</>,
          <>It has no free ions.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why can water dissolve ionic compounds?",
    options: ["Water molecules are non-polar and attract the ions", "Water molecules melt the crystal by heating it", "Water molecules are polar and attract the ions", "Water molecules are ionic themselves"],
    answer: "Water molecules are polar and attract the ions",
    explanation: "The δ− oxygen and δ+ hydrogens of water attract the ions and pull them out of the crystal.",
  },
  {
    prompt: "A Na⁺ ion is dissolved in water. Which part of a water molecule is turned towards the Na⁺ ion?",
    options: ["The oxygen atom, which is slightly negative", "The oxygen atom, which is slightly positive", "A hydrogen atom, which is slightly negative", "A hydrogen atom, which is slightly positive"],
    answer: "The oxygen atom, which is slightly negative",
    explanation: "Opposite charges attract, so the δ− oxygen faces the positive ion.",
  },
  {
    prompt: "Which part of a water molecule is turned towards a Cl⁻ ion?",
    options: ["The oxygen atom, which is slightly negative", "A hydrogen atom, which is slightly negative", "The oxygen atom, which is slightly positive", "A hydrogen atom, which is slightly positive"],
    answer: "A hydrogen atom, which is slightly positive",
    explanation: "The δ+ hydrogens face the negative ion.",
  },
  {
    prompt: "What does hydration mean?",
    options: ["Ions are changed into atoms", "Ions become surrounded by water molecules", "Water molecules are broken into ions", "Ions are joined into a crystal"],
    answer: "Ions become surrounded by water molecules",
    explanation: "A hydrated ion is surrounded by water molecules.",
  },
  {
    prompt: "What does the symbol (aq) mean in an equation?",
    options: ["The substance is a solid", "The substance is dissolved in water", "The substance is a gas", "The substance is pure water"],
    answer: "The substance is dissolved in water",
    explanation: "(aq) shows that the ions are surrounded by water molecules in solution.",
  },
  {
    prompt: "Which equation shows sodium chloride dissolving in water?",
    options: ["NaCl(s) → Na(aq) + Cl(aq)", "NaCl(aq) → Na⁺(s) + Cl⁻(s)", "NaCl(s) → Na₂(aq) + Cl₂(aq)", "NaCl(s) → Na⁺(aq) + Cl⁻(aq)"],
    answer: "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
    explanation: "The solid splits into one Na⁺ and one Cl⁻, both written (aq).",
  },
  {
    prompt: "Which equation shows calcium chloride dissolving in water?",
    options: ["CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq)", "CaCl₂(s) → Ca²⁺(aq) + Cl⁻(aq)", "CaCl₂(s) → Ca⁺(aq) + 2Cl⁻(aq)", "CaCl₂(s) → 2Ca²⁺(aq) + Cl⁻(aq)"],
    answer: "CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq)",
    explanation: "One Ca²⁺ (+2) balances the charge of two Cl⁻ (−2).",
  },
  {
    prompt: "How many ions in total are formed when one formula unit of CaCl₂ dissolves?",
    options: ["2", "1", "3", "6"],
    answer: "3",
    explanation: "One Ca²⁺ and two Cl⁻ give three ions.",
  },
  {
    prompt: "How many ions in total are formed when one formula unit of Na₂SO₄ dissolves?",
    options: ["2", "4", "1", "3"],
    answer: "3",
    explanation: "Two Na⁺ and one SO₄²⁻ give three ions.",
  },
  {
    prompt: "NaCl is dissolved to make a 0,10 mol·dm⁻³ solution. Find the total concentration of all the ions.",
    options: ["0,10 mol·dm⁻³", "0,20 mol·dm⁻³", "0,05 mol·dm⁻³", "0,30 mol·dm⁻³"],
    answer: "0,20 mol·dm⁻³",
    explanation: "Each NaCl gives two ions, so 2 × 0,10 = 0,20 mol·dm⁻³.",
  },
  {
    prompt: "A 0,10 mol·dm⁻³ solution of CaCl₂ is made. How much ion is in one dm³ of it, in total?",
    options: ["0,30 mol·dm⁻³", "0,10 mol·dm⁻³", "0,20 mol·dm⁻³", "0,03 mol·dm⁻³"],
    answer: "0,30 mol·dm⁻³",
    explanation: "Each CaCl₂ gives three ions, so 3 × 0,10 = 0,30 mol·dm⁻³.",
  },
  {
    prompt: "Which of these solutions of equal concentration conducts electricity the best?",
    options: ["NaCl solution", "Sugar solution", "CaCl₂ solution", "Pure water"],
    answer: "CaCl₂ solution",
    explanation: "CaCl₂ gives three ions per formula unit, the most of the choices. Sugar and pure water have almost no ions.",
  },
  {
    prompt: "Why does a sugar solution not conduct electricity?",
    options: ["Sugar does not dissolve in water at all", "Sugar forms only negative ions in water", "Sugar dissolves but forms no ions", "Sugar solutions have far too many ions"],
    answer: "Sugar dissolves but forms no ions",
    explanation: "Conduction needs free ions.",
  },
  {
    prompt: "In the dissolution of CaCl₂, what is the total charge of all the ions formed from one formula unit?",
    options: ["Zero, because the charges cancel", "Plus 2, because of the calcium ion", "Minus 2, because of the chloride ions", "Plus 1, because there is one positive ion"],
    answer: "Zero, because the charges cancel",
    explanation: "Ca²⁺ gives +2 and two Cl⁻ give −2, so the solution stays neutral.",
  },
];

const IonsInSolution = () => (
  <CapsSubjectTopic
    title="Ions in Aqueous Solution"
    subtitle="How water dissolves ionic compounds, dissolution equations and conductivity"
    learnSteps={learnSteps}
    task="gr10-ions-in-solution-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default IonsInSolution;
