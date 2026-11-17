import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ConjugatePairs, PhScale, Titration } from '../../../../../components/diagrams/chemistry12/Chem12Rates';
import { hydroxideFromHydronium, pH, phStrongAcid, phStrongBase, unknownConcentration } from '../../../../../components/diagrams/chemistry12/rateHelpers';

// The numbers below come from rateHelpers.ts (tested in rateHelpers.test.ts, g12PsRates.test.ts).
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const f = (v: number) => String(Math.round(v * 1000) / 1000).replace('.', ',');
const p3 = pH(1e-3);
const pCa = phStrongBase(0.005, 2);
const pH2SO4 = phStrongAcid(0.005, 2);
const oh = hydroxideFromHydronium(1e-4);
const cB = unknownConcentration(0.1, 20, 25, 1);
const cB2 = unknownConcentration(0.5, 10, 25, 2);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Acids, bases and conjugate pairs',
    content: slide(
      <>
        <Rule>A Lowry-Brønsted acid donates a proton (H⁺); a base accepts a proton. When an acid loses a proton it becomes its conjugate base, and when a base gains one it becomes its conjugate acid.</Rule>
        <ConjugatePairs acid="HCl" base="H₂O" conjBase="Cl⁻" conjAcid="H₃O⁺" />
        <Worked
          steps={[
            <>HCl + H{sub(2)}O → Cl⁻ + H{sub(3)}O⁺: HCl is the acid, Cl⁻ its conjugate base; H{sub(2)}O is the base, H{sub(3)}O⁺ its conjugate acid.</>,
            <>NH{sub(3)} + H{sub(2)}O ⇌ NH{sub(4)}⁺ + OH⁻: here NH{sub(3)} is the base and water is the acid. Water can do either, so it is amphoteric.</>,
            <>A strong acid ionises completely in water; a weak acid ionises only a little, so its solution has fewer H{sub(3)}O⁺ ions at the same concentration.</>,
          ]}
        />
        <Mistake>Thinking strong means concentrated. Strength is how far an acid ionises; concentration is how much acid is dissolved.</Mistake>
      </>,
    ),
  },
  {
    title: 'pH and the ionisation of water',
    content: slide(
      <>
        <Rule>pH = −log[H₃O⁺]. In water at 25 °C, Kw = [H₃O⁺][OH⁻] = 1 × 10⁻¹⁴. A solution is acidic below pH 7, neutral at 7 and basic above 7.</Rule>
        <PhScale marks={[{ ph: 2, label: 'HCl 0,01', color: '#f87171' }, { ph: 7, label: 'water', color: '#4ade80' }, { ph: 12, label: 'NaOH 0,01', color: '#818cf8' }]} />
        <Worked
          steps={[
            <>[H{sub(3)}O⁺] = 1 × 10⁻³ mol·dm⁻³: pH = −log(10⁻³) = <strong>{f(p3)}</strong>.</>,
            <>pH 4 means [H{sub(3)}O⁺] = 10⁻⁴, so [OH⁻] = 10⁻¹⁴ ÷ 10⁻⁴ = <strong>10⁻¹⁰ mol·dm⁻³</strong> ({oh.toExponential(0).replace('e-', ' × 10⁻').replace('1 ×', '1 ×')}).</>,
            <>0,005 mol·dm⁻³ H{sub(2)}SO{sub(4)} gives 0,010 mol·dm⁻³ H{sub(3)}O⁺ (two per molecule): pH = <strong>{f(pH2SO4)}</strong>.</>,
            <>0,005 mol·dm⁻³ Ca(OH){sub(2)} gives 0,010 mol·dm⁻³ OH⁻: pOH = 2, so pH = 14 − 2 = <strong>{f(pCa)}</strong>.</>,
          ]}
        />
        <Mistake>Calculating the pH of a base as −log[OH⁻]. That gives the pOH; the pH is 14 − pOH.</Mistake>
      </>,
    ),
  },
  {
    title: 'Titrations and salt hydrolysis',
    content: slide(
      <>
        <Rule>In a titration a solution of known concentration is added from a burette until the indicator changes at the end point. The mole ratio from the balanced equation links the two solutions.</Rule>
        <Titration burette="HCl 0,10 mol·dm⁻³, 20 cm³ used" flask="25 cm³ NaOH" />
        <Worked
          steps={[
            <>HCl + NaOH → NaCl + H{sub(2)}O (ratio 1 : 1). n(HCl) = 0,10 × 20 ÷ 1 000 = 0,002 mol, so n(NaOH) = 0,002 mol.</>,
            <>c(NaOH) = 0,002 ÷ 0,025 dm³ = <strong>{f(cB)} mol·dm⁻³</strong>.</>,
            <>H{sub(2)}SO{sub(4)} + 2NaOH → Na{sub(2)}SO{sub(4)} + 2H{sub(2)}O: 10,0 cm³ of 0,50 mol·dm⁻³ acid neutralises 25,0 cm³ of base of concentration <strong>{f(cB2)} mol·dm⁻³</strong> (ratio 1 : 2).</>,
            <>Salt hydrolysis: NH{sub(4)}Cl (strong acid, weak base) gives an acidic solution; CH{sub(3)}COONa (weak acid, strong base) gives a basic solution; NaCl (strong acid, strong base) is neutral.</>,
          ]}
        />
        <Mistake>Assuming every salt solution is neutral. The ion from the weak acid or weak base reacts with water, so the solution is basic or acidic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the pH of a 0,0001 mol·dm⁻³ HCl solution?</>,
          <>Name the conjugate base of NH₄⁺.</>,
          <>20,0 cm³ of 0,20 mol·dm⁻³ NaOH neutralises 10,0 cm³ of HCl. What is the concentration of the HCl?</>,
        ]}
        answers={[
          <>[H{sub(3)}O⁺] = 10⁻⁴, so pH = <strong>{f(pH(1e-4))}</strong>.</>,
          <>NH{sub(3)} (ammonia): NH{sub(4)}⁺ → NH{sub(3)} + H⁺.</>,
          <>n(NaOH) = 0,20 × 20 ÷ 1 000 = 0,004 mol = n(HCl). c = 0,004 ÷ 0,010 = <strong>{f(unknownConcentration(0.2, 20, 10, 1))} mol·dm⁻³</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: CapsItem[] = [];
// BANK:END

const AcidsBases = () => (
  <CapsSubjectTopic
    title="Acids and Bases"
    subtitle="Lowry-Brønsted acids and bases, pH and Kw, titrations and salt hydrolysis"
    learnSteps={learnSteps}
    task="gr12-acids-bases-t2"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default AcidsBases;
