import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ConcTimeGraph, EqBars, ShiftRows } from '../../../../../components/diagrams/chemistry12/Chem12Rates';
import { atEquilibrium, kc } from '../../../../../components/diagrams/chemistry12/rateHelpers';

// The numbers below come from rateHelpers.ts (tested in rateHelpers.test.ts, g12PsRates.test.ts).
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const f = (v: number) => String(v).replace('.', ',');
const k1 = kc([[1.0, 2]], [[0.5, 1], [1.5, 3]]);
const hi = atEquilibrium(0, 2, 0.78);
const h2 = atEquilibrium(1, -1, 0.78);
const k2 = kc([[hi, 2]], [[h2, 1], [h2, 1]]);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Dynamic equilibrium',
    content: slide(
      <>
        <Rule>In a closed system a reversible reaction reaches equilibrium when the rate of the forward reaction equals the rate of the reverse reaction. The concentrations then stay constant, but both reactions carry on.</Rule>
        <ConcTimeGraph mode="equilibrium" c0={1} ceq={0.3} />
        <Worked
          steps={[
            <>At the start only reactants are present, so the forward rate is high and the reverse rate is zero.</>,
            <>As product builds up the reverse rate rises and the forward rate falls, until they are equal.</>,
            <>From that moment the concentrations stay constant: the lines go flat. The reactions have not stopped, so the equilibrium is called dynamic.</>,
          ]}
        />
        <Mistake>Believing the concentrations of reactants and products are equal at equilibrium. They are constant, not equal.</Mistake>
      </>,
    ),
  },
  {
    title: 'The equilibrium constant Kc',
    content: slide(
      <>
        <Rule>For aA + bB ⇌ cC + dD at a given temperature, Kc = [C]ᶜ[D]ᵈ ÷ ([A]ᵃ[B]ᵇ), using the equilibrium concentrations in mol·dm⁻³. Pure solids and liquids are left out.</Rule>
        <EqBars species={[{ name: 'N₂', conc: 0.5 }, { name: 'H₂', conc: 1.5 }, { name: 'NH₃', conc: 1.0 }]} />
        <Worked
          title="N₂ + 3H₂ ⇌ 2NH₃"
          steps={[
            <>Kc = [NH{sub(3)}]² ÷ ([N{sub(2)}][H{sub(2)}]³).</>,
            <>With [N{sub(2)}] = 0,5, [H{sub(2)}] = 1,5 and [NH{sub(3)}] = 1,0 mol·dm⁻³: Kc = 1,0² ÷ (0,5 × 1,5³) = 1 ÷ 1,6875 = <strong>{f(Math.round(k1 * 100) / 100)}</strong>.</>,
            <>H{sub(2)} + I{sub(2)} ⇌ 2HI: start with 1,00 mol of each in 1 dm³ and let 0,78 mol of each react. Equilibrium: H{sub(2)} = I{sub(2)} = {f(Math.round(h2 * 100) / 100)}, HI = {f(hi)}.</>,
            <>Kc = {f(hi)}² ÷ ({f(Math.round(h2 * 100) / 100)} × {f(Math.round(h2 * 100) / 100)}) = <strong>{f(Math.round(k2 * 10) / 10)}</strong>.</>,
          ]}
        />
        <Mistake>Forgetting the coefficients as powers. In the ammonia equation the hydrogen is cubed and the ammonia squared.</Mistake>
      </>,
    ),
  },
  {
    title: "Le Chatelier's principle",
    content: slide(
      <>
        <Rule>When a change is made to a system at equilibrium, the system shifts to oppose the change. Only a change in temperature changes the value of Kc.</Rule>
        <ShiftRows
          rows={[
            ['add reactant', 'right (uses some of it)'],
            ['remove product', 'right (makes more)'],
            ['raise the pressure', 'side with fewer gas moles'],
            ['raise the temperature', 'the endothermic direction'],
            ['add a catalyst', 'no shift, same Kc'],
          ]}
        />
        <Worked
          steps={[
            <>N{sub(2)} + 3H{sub(2)} ⇌ 2NH{sub(3)} has 4 mol of gas on the left and 2 on the right, so a higher pressure shifts it to the right.</>,
            <>The forward reaction is exothermic, so a higher temperature shifts it to the left and Kc becomes smaller.</>,
            <>A catalyst speeds up both reactions equally: equilibrium is reached sooner but nothing shifts.</>,
          ]}
        />
        <Mistake>Saying a catalyst shifts the equilibrium to the right. It does not change the position or Kc.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Write the Kc expression for 2SO₂ + O₂ ⇌ 2SO₃.</>,
          <>Why is a catalyst used for a reversible reaction if it does not change the yield?</>,
          <>An exothermic equilibrium is heated. What happens to the position and to Kc?</>,
        ]}
        answers={[
          <>Kc = [SO{sub(3)}]² ÷ ([SO{sub(2)}]²[O{sub(2)}]).</>,
          <>It makes equilibrium be reached faster, which saves time and money.</>,
          <>It shifts to the left (the endothermic direction) and Kc decreases.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: CapsItem[] = [
  {
    prompt: "Which expression is Kc for N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
    options: ["Kc = [N₂][H₂]³ ÷ [NH₃]²", "Kc = [NH₃]² ÷ ([N₂][H₂]³)", "Kc = [NH₃] ÷ ([N₂][H₂])", "Kc = 2[NH₃] ÷ (3[H₂] + [N₂])"],
    answer: "Kc = [NH₃]² ÷ ([N₂][H₂]³)",
    explanation: "Products on top, reactants below, each concentration raised to the power of its coefficient.",
  },
  {
    prompt: "What is true at dynamic equilibrium in a closed system?",
    options: ["The rates of the forward and reverse reactions are equal", "The concentrations of reactants and products are equal", "Both reactions have stopped", "Only the forward reaction is still taking place"],
    answer: "The rates of the forward and reverse reactions are equal",
    explanation: "Equilibrium is dynamic: both reactions continue at the same rate, so the concentrations stay constant.",
  },
  {
    prompt: "At equilibrium [N₂] = 0,5, [H₂] = 1,5 and [NH₃] = 1,0 mol·dm⁻³ for N₂ + 3H₂ ⇌ 2NH₃. What is Kc (two decimal places)?",
    options: ["0,33", "1,69", "0,67", "0,59"],
    answer: "0,59",
    explanation: "Kc = 1,0² ÷ (0,5 × 1,5³) = 1 ÷ 1,6875 = 0,59.",
  },
  {
    prompt: "In H₂ + I₂ ⇌ 2HI the equilibrium concentrations are [H₂] = [I₂] = 0,22 and [HI] = 1,56 mol·dm⁻³. What is Kc (one decimal place)?",
    options: ["7,1", "2,4", "50,3", "11,0"],
    answer: "50,3",
    explanation: "Kc = [HI]² ÷ ([H₂][I₂]) = 1,56² ÷ (0,22 × 0,22) = 2,4336 ÷ 0,0484 = 50,3.",
  },
  {
    prompt: "What is the effect of a catalyst on a system at equilibrium?",
    options: ["It shifts the equilibrium to the right so that more product forms", "It makes equilibrium be reached faster, with no change in Kc", "It increases the value of Kc so that more product forms", "It lowers the yield of the products at equilibrium"],
    answer: "It makes equilibrium be reached faster, with no change in Kc",
    explanation: "A catalyst speeds up the forward and reverse reactions equally.",
  },
  {
    prompt: "N₂ + 3H₂ ⇌ 2NH₃ (exothermic). The temperature is increased. What happens to the equilibrium?",
    options: ["It shifts to the left and Kc decreases", "It shifts to the right and Kc increases", "It shifts to the right and Kc stays the same", "It does not shift"],
    answer: "It shifts to the left and Kc decreases",
    explanation: "A higher temperature favours the endothermic (reverse) reaction. Kc depends on temperature, so it becomes smaller.",
  },
  {
    prompt: "N₂ + 3H₂ ⇌ 2NH₃. The pressure is increased by decreasing the volume. What happens?",
    options: ["The equilibrium shifts to the left", "The equilibrium does not shift", "The value of Kc increases", "The equilibrium shifts to the right"],
    answer: "The equilibrium shifts to the right",
    explanation: "There are fewer gas molecules on the right (2 mol) than on the left (4 mol), so a higher pressure favours the right. Kc is unchanged.",
  },
  {
    prompt: "Some product is removed from a system at equilibrium. How does the system respond?",
    options: ["It shifts to make more reactant", "It does not respond", "It shifts to make more product", "Kc becomes larger"],
    answer: "It shifts to make more product",
    explanation: "The system opposes the change by producing more of what was removed.",
  },
  {
    prompt: "What is the only factor that changes the value of Kc?",
    options: ["Pressure", "Temperature", "Concentration", "A catalyst"],
    answer: "Temperature",
    explanation: "Changes in concentration or pressure shift the position, but Kc keeps its value at a constant temperature.",
  },
  {
    prompt: "A reaction has a very large Kc. What does this tell you?",
    options: ["Mostly products are present at equilibrium", "The reaction is very fast", "Mostly reactants are present at equilibrium", "The reaction is endothermic"],
    answer: "Mostly products are present at equilibrium",
    explanation: "A large Kc means [products] is much greater than [reactants] at equilibrium. It says nothing about the rate.",
  },
  {
    prompt: "Which expression is Kc for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?",
    options: ["Kc = [CaO][CO₂] ÷ [CaCO₃]", "Kc = [CaO] ÷ [CaCO₃]", "Kc = [CO₂] ÷ [CaCO₃]", "Kc = [CO₂]"],
    answer: "Kc = [CO₂]",
    explanation: "Pure solids are left out of the Kc expression, so only the gas remains.",
  },
  {
    prompt: "For H₂(g) + I₂(g) ⇌ 2HI(g) the pressure is increased. What happens to the equilibrium?",
    options: ["It shifts to the right", "It shifts to the left", "It does not shift", "Kc increases"],
    answer: "It does not shift",
    explanation: "There are 2 mol of gas on each side, so a change in pressure favours neither side.",
  },
  {
    prompt: "Why is the yield of a reversible reaction less than 100%?",
    options: ["The catalyst uses up some of the product while it works", "The reverse reaction converts some product back to reactants", "The forward reaction has stopped once equilibrium is reached", "Kc is always equal to 1 for a reversible reaction"],
    answer: "The reverse reaction converts some product back to reactants",
    explanation: "At equilibrium both reactions continue, so reactants remain in the mixture.",
  },
  {
    prompt: "2SO₂ + O₂ ⇌ 2SO₃. Which expression is Kc?",
    options: ["Kc = [SO₃]² ÷ ([SO₂]²[O₂])", "Kc = [SO₂]²[O₂] ÷ [SO₃]²", "Kc = [SO₃] ÷ ([SO₂][O₂])", "Kc = [SO₃]² ÷ ([SO₂][O₂])"],
    answer: "Kc = [SO₃]² ÷ ([SO₂]²[O₂])",
    explanation: "The coefficients 2, 2 and 1 become the powers of the concentrations.",
  },
];
// BANK:END

const ChemicalEquilibrium = () => (
  <CapsSubjectTopic
    title="Chemical Equilibrium"
    subtitle="Dynamic equilibrium, Kc and calculations, Le Chatelier"
    learnSteps={learnSteps}
    task="gr12-chemical-equilibrium-t2"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default ChemicalEquilibrium;
