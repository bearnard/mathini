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
const bank: CapsItem[] = [];
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
