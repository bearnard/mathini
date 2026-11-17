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
const bank: CapsItem[] = [
  {
    prompt: "In the reaction HCl + H₂O → Cl⁻ + H₃O⁺, which species is the conjugate base of HCl?",
    options: ["H₂O", "Cl⁻", "H₃O⁺", "H⁺"],
    answer: "Cl⁻",
    explanation: "HCl loses a proton (H⁺) and becomes Cl⁻, its conjugate base.",
  },
  {
    prompt: "What is the conjugate acid of NH₃?",
    options: ["NH₄⁺", "NH₂⁻", "OH⁻", "H₃O⁺"],
    answer: "NH₄⁺",
    explanation: "NH₃ accepts a proton, so its conjugate acid is NH₄⁺.",
  },
  {
    prompt: "Which statement defines a Lowry-Brønsted acid?",
    options: ["A substance that accepts a proton", "A substance that produces OH⁻ in water", "A substance with a pH greater than 7", "A substance that donates a proton"],
    answer: "A substance that donates a proton",
    explanation: "A Lowry-Brønsted acid is a proton donor; a base is a proton acceptor.",
  },
  {
    prompt: "What is the pH of a solution with [H₃O⁺] = 1 × 10⁻³ mol·dm⁻³?",
    options: ["−3", "11", "3", "0,001"],
    answer: "3",
    explanation: "pH = −log(10⁻³) = 3.",
  },
  {
    prompt: "What is the pH of 0,010 mol·dm⁻³ HCl (a strong acid)?",
    options: ["0,01", "2", "12", "1,0"],
    answer: "2",
    explanation: "HCl ionises completely, so [H₃O⁺] = 0,010 = 10⁻² mol·dm⁻³ and pH = 2.",
  },
  {
    prompt: "What is the [OH⁻] in a solution of pH 4? (Kw = 1 × 10⁻¹⁴)",
    options: ["1 × 10⁻¹⁰ mol·dm⁻³", "1 × 10⁻⁴ mol·dm⁻³", "1 × 10⁻⁷ mol·dm⁻³", "1 × 10¹⁰ mol·dm⁻³"],
    answer: "1 × 10⁻¹⁰ mol·dm⁻³",
    explanation: "[H₃O⁺] = 10⁻⁴, so [OH⁻] = 10⁻¹⁴ ÷ 10⁻⁴ = 10⁻¹⁰ mol·dm⁻³.",
  },
  {
    prompt: "What is the pH of 0,010 mol·dm⁻³ NaOH?",
    options: ["2", "10", "1,2", "12"],
    answer: "12",
    explanation: "[OH⁻] = 10⁻², so pOH = 2 and pH = 14 − 2 = 12.",
  },
  {
    prompt: "What is the pH of 0,005 mol·dm⁻³ H₂SO₄, if it ionises completely to give two H₃O⁺ per molecule?",
    options: ["2,3", "3", "2", "1"],
    answer: "2",
    explanation: "[H₃O⁺] = 2 × 0,005 = 0,010 mol·dm⁻³, so pH = 2.",
  },
  {
    prompt: "20,0 cm³ of HCl of concentration 0,10 mol·dm⁻³ neutralises 25,0 cm³ of NaOH. What is c(NaOH)?",
    options: ["0,125 mol·dm⁻³", "0,080 mol·dm⁻³", "0,10 mol·dm⁻³", "0,050 mol·dm⁻³"],
    answer: "0,080 mol·dm⁻³",
    explanation: "n(HCl) = 0,10 × 0,020 = 0,0020 mol = n(NaOH). c = 0,0020 ÷ 0,025 = 0,080 mol·dm⁻³.",
  },
  {
    prompt: "10,0 cm³ of H₂SO₄ of concentration 0,50 mol·dm⁻³ neutralises 25,0 cm³ of NaOH (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O). What is c(NaOH)?",
    options: ["0,40 mol·dm⁻³", "0,20 mol·dm⁻³", "0,25 mol·dm⁻³", "0,80 mol·dm⁻³"],
    answer: "0,40 mol·dm⁻³",
    explanation: "n(H₂SO₄) = 0,50 × 0,0100 = 0,0050 mol, so n(NaOH) = 0,010 mol. c = 0,010 ÷ 0,025 = 0,40 mol·dm⁻³.",
  },
  {
    prompt: "Which salt dissolves in water to give a basic solution?",
    options: ["ammonium chloride, NH₄Cl", "sodium chloride, NaCl", "potassium nitrate, KNO₃", "sodium ethanoate, CH₃COONa"],
    answer: "sodium ethanoate, CH₃COONa",
    explanation: "The ethanoate ion (conjugate base of a weak acid) accepts protons from water, forming OH⁻.",
  },
  {
    prompt: "Which salt dissolves in water to give an acidic solution?",
    options: ["sodium ethanoate, CH₃COONa", "sodium chloride, NaCl", "ammonium chloride, NH₄Cl", "sodium nitrate, NaNO₃"],
    answer: "ammonium chloride, NH₄Cl",
    explanation: "The ammonium ion (conjugate acid of a weak base) donates protons to water, forming H₃O⁺.",
  },
  {
    prompt: "What is meant by a strong acid?",
    options: ["An acid with a high concentration", "An acid that ionises completely in water", "An acid that has a pH of exactly 1", "An acid that cannot be neutralised"],
    answer: "An acid that ionises completely in water",
    explanation: "Strength is how far an acid ionises; concentration is how much of it is dissolved.",
  },
  {
    prompt: "Which description of water is correct in the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻?",
    options: ["Water acts as an acid", "Water acts as a base", "Water acts as a catalyst", "Water does not take part"],
    answer: "Water acts as an acid",
    explanation: "Water donates a proton to NH₃, so it behaves as an acid here (and as a base when an acid donates a proton to it).",
  },
];
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
