import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NpkBag, ProcessFlow } from '../../../../../components/diagrams/chemistry12/Chem12';
import { massPercent, molarMass, npkMasses } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// The numbers below come from chemHelpers.ts (tested in chemHelpers.test.ts, g12PsIndustry.test.ts).
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const f = (v: number) => String(Math.round(v * 100) / 100).replace('.', ',');
const f1 = (v: number) => String(Math.round(v * 10) / 10).replace('.', ',');

const bag = npkMasses([2, 3, 4], 30, 50);
const nNH3 = massPercent('N', 'NH3');
const nNitrate = massPercent('N', 'NH4NO3');
const nSulfate = massPercent('N', '(NH4)2SO4');
const nUrea = massPercent('N', 'CO(NH2)2');
const c1 = npkMasses([3, 2, 1], 25, 20);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plants need nitrogen, phosphorus and potassium',
    content: slide(
      <>
        <Rule>Fertilisers put back the nutrients crops take from the soil. The three main ones are nitrogen (N), phosphorus (P) and potassium (K). A label such as 2:3:4 (30) gives their ratio by mass, and the percentage of the bag that is nutrient.</Rule>
        <NpkBag label="2:3:4 (30)" bagKg={50} filler={bag.filler} n={bag.n} p={bag.p} k={bag.k} />
        <Worked
          title="A 50 kg bag labelled 2:3:4 (30)"
          steps={[
            <>The bag is 30% nutrients: 50 × 0,30 = <strong>{f(bag.nutrients)} kg</strong>. The other {f(bag.filler)} kg is filler.</>,
            <>The ratio 2 : 3 : 4 has 2 + 3 + 4 = 9 parts, so one part is {f(bag.nutrients)} ÷ 9 = {f(bag.nutrients / 9)} kg.</>,
            <>Nitrogen: 2 parts = <strong>{f(bag.n)} kg</strong>. Phosphorus: 3 parts = <strong>{f(bag.p)} kg</strong>. Potassium: 4 parts = <strong>{f(bag.k)} kg</strong>.</>,
          ]}
        />
        <Mistake>Reading the 30 as one more part of the ratio. It is a percentage: 30% of the whole bag is N + P + K together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nitrogen from the air: the Haber process',
    content: slide(
      <>
        <Rule>The Haber process makes ammonia from nitrogen of the air and hydrogen: N₂ + 3H₂ ⇌ 2NH₃ (exothermic). It runs at about 450 °C, at high pressure, over an iron catalyst.</Rule>
        <ProcessFlow
          aria="The Haber process: nitrogen from the air and hydrogen enter a reactor with an iron catalyst at about 450 degrees Celsius and high pressure; the mixture is cooled so that ammonia liquefies, and unreacted gases are recycled."
          steps={[
            { label: 'N₂ + H₂', note: 'air + natural gas', color: '#fbbf24' },
            { label: 'reactor', note: 'Fe, 450 °C' },
            { label: 'cool', note: 'NH₃ liquid' },
            { label: 'NH₃', note: '82,4% N', color: '#34d399' },
          ]}
        />
        <Worked
          steps={[
            <>Balanced: N{sub(2)} + 3H{sub(2)} ⇌ 2NH{sub(3)} (4 mol of gas become 2 mol).</>,
            <>High pressure favours the side with fewer gas molecules, so it raises the yield of NH{sub(3)}.</>,
            <>The reaction is exothermic, so a low temperature raises the yield, but it makes the rate too slow. About 450 °C with a catalyst is the compromise.</>,
            <>Nitrogen in ammonia: 14 ÷ {molarMass('NH3')} × 100 = <strong>{f1(nNH3)}%</strong>.</>,
          ]}
        />
        <Mistake>Saying a high temperature gives a high yield of ammonia. For an exothermic reaction it does the opposite; the high temperature is only used to get a useful rate.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nitric and sulfuric acid: Ostwald and contact processes',
    content: slide(
      <>
        <Rule>Ammonia is turned into nitric acid by the Ostwald process. Sulfur is turned into sulfuric acid by the contact process. Both acids are used to make fertilisers.</Rule>
        <ProcessFlow
          aria="The Ostwald process: ammonia and oxygen over a platinum catalyst give nitrogen monoxide, which reacts with oxygen to give nitrogen dioxide, which dissolves in water to give nitric acid."
          steps={[
            { label: 'NH₃ + O₂', note: 'Pt catalyst', color: '#fbbf24' },
            { label: 'NO', note: '+ O₂' },
            { label: 'NO₂', note: '+ H₂O' },
            { label: 'HNO₃', note: 'nitric acid', color: '#34d399' },
          ]}
        />
        <Worked
          steps={[
            <>Ostwald: 4NH{sub(3)} + 5O{sub(2)} → 4NO + 6H{sub(2)}O (platinum catalyst); 2NO + O{sub(2)} → 2NO{sub(2)}; 3NO{sub(2)} + H{sub(2)}O → 2HNO{sub(3)} + NO.</>,
            <>Contact: S + O{sub(2)} → SO{sub(2)}; 2SO{sub(2)} + O{sub(2)} ⇌ 2SO{sub(3)} (vanadium(V) oxide catalyst).</>,
            <>SO{sub(3)} is absorbed in concentrated H{sub(2)}SO{sub(4)}: SO{sub(3)} + H{sub(2)}SO{sub(4)} → H{sub(2)}S{sub(2)}O{sub(7)}; then H{sub(2)}S{sub(2)}O{sub(7)} + H{sub(2)}O → 2H{sub(2)}SO{sub(4)}.</>,
            <>Fertilisers: NH{sub(3)} + HNO{sub(3)} → NH{sub(4)}NO{sub(3)} and 2NH{sub(3)} + H{sub(2)}SO{sub(4)} → (NH{sub(4)}){sub(2)}SO{sub(4)}.</>,
          ]}
        />
        <Mistake>Adding SO{sub(3)} straight to water. The reaction is so violent that it forms a mist of acid, so it is absorbed in concentrated sulfuric acid first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fertiliser products and the environment',
    content: slide(
      <>
        <Rule>Different fertilisers carry different amounts of nitrogen. Too much fertiliser that runs off into water causes eutrophication.</Rule>
        <ProcessFlow
          aria="Eutrophication in five steps: fertiliser runs off into a dam, algae grow quickly, the algae block light, the dead algae are decomposed using up oxygen, and fish die."
          steps={[
            { label: 'run-off', note: 'N and P', color: '#fbbf24' },
            { label: 'algal bloom' },
            { label: 'no light' },
            { label: 'decay', note: 'O₂ used' },
            { label: 'fish die', color: '#fb7185' },
          ]}
        />
        <Worked
          steps={[
            <>Percentage nitrogen: urea CO(NH{sub(2)}){sub(2)} <strong>{f1(nUrea)}%</strong>, ammonium nitrate <strong>{f1(nNitrate)}%</strong>, ammonium sulfate <strong>{f1(nSulfate)}%</strong>.</>,
            <>Urea gives the most nitrogen per kilogram, so less has to be transported and spread.</>,
            <>Eutrophication: run-off of nitrates and phosphates feeds algae, which block light. When the algae die, bacteria that decompose them use up the oxygen, and fish die.</>,
          ]}
        />
        <Mistake>Thinking fertilisers are harmless because plants need them. In water they feed algae, not crops, and the oxygen runs out.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A 20 kg bag is labelled 3:2:1 (25). How many kilograms of nitrogen does it contain?</>,
          <>Write the balanced equation for the Haber process.</>,
          <>What is the catalyst in the contact process?</>,
          <>Why is a lower temperature not used in the Haber process?</>,
        ]}
        answers={[
          <>Nutrients: 20 × 0,25 = {f(c1.nutrients)} kg; nitrogen is 3 of 6 parts: <strong>{f(c1.n)} kg</strong>.</>,
          <>N{sub(2)} + 3H{sub(2)} ⇌ 2NH{sub(3)}.</>,
          <>Vanadium(V) oxide, V{sub(2)}O{sub(5)}.</>,
          <>It would raise the yield but the reaction would be far too slow, so about 450 °C is used with a catalyst.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: CapsItem[] = [
  {
    prompt: "What do the letters N, P and K on a fertiliser label stand for?",
    options: ["nickel, phosphate and krypton", "nitrogen, phosphorus and potassium", "nitrate, platinum and calcium", "nitrogen, potassium and phosphate rock"],
    answer: "nitrogen, phosphorus and potassium",
    explanation: "The three main plant nutrients are nitrogen (N), phosphorus (P) and potassium (K).",
  },
  {
    prompt: "A 50 kg bag is labelled 2:3:4 (30). What is the mass of plant nutrients (N, P and K together) in the bag?",
    options: ["15 kg", "30 kg", "35 kg", "50 kg"],
    answer: "15 kg",
    explanation: "The 30 is the percentage of the bag that is nutrient: 30% of 50 kg = 15 kg. (35 kg is the filler.)",
  },
  {
    prompt: "A 50 kg bag is labelled 2:3:4 (30). What is the mass of phosphorus in the bag?",
    options: ["3 kg", "15 kg", "1,67 kg", "5 kg"],
    answer: "5 kg",
    explanation: "There are 15 kg of nutrients in 2 + 3 + 4 = 9 parts, so one part is 15/9 kg. Phosphorus is 3 parts = 5 kg.",
  },
  {
    prompt: "Which equation is the balanced equation for the Haber process?",
    options: ["N2 + H2 ⇌ NH3", "N2 + 3H2 ⇌ NH3", "N2 + 3H2 ⇌ 2NH3", "2N2 + 3H2 ⇌ 2NH3"],
    answer: "N2 + 3H2 ⇌ 2NH3",
    explanation: "Two N atoms and six H atoms on the left give 2NH3 on the right: N2 + 3H2 ⇌ 2NH3.",
  },
  {
    prompt: "Which catalyst is used in the Haber process?",
    options: ["platinum", "iron", "vanadium(V) oxide", "nickel"],
    answer: "iron",
    explanation: "The Haber process uses an iron catalyst. Platinum is used in the Ostwald process and V2O5 in the contact process.",
  },
  {
    prompt: "The Haber reaction is exothermic. Why is a temperature of about 450 °C used rather than a much lower one?",
    options: ["A lower temperature gives a higher yield but the rate is too slow", "A higher temperature gives a much higher yield of ammonia", "The catalyst stops working at temperatures below 450 °C", "Ammonia would turn into a solid at any lower temperature"],
    answer: "A lower temperature gives a higher yield but the rate is too slow",
    explanation: "Le Chatelier: a lower temperature favours the exothermic forward reaction, but the rate would be too slow, so 450 °C and a catalyst are a compromise.",
  },
  {
    prompt: "Which industrial process changes ammonia into nitric acid?",
    options: ["The Haber process", "The contact process", "The Frasch process", "The Ostwald process"],
    answer: "The Ostwald process",
    explanation: "In the Ostwald process ammonia is oxidised to NO, then NO2, and the NO2 is dissolved in water to give HNO3.",
  },
  {
    prompt: "Which catalyst is used in the first step of the Ostwald process?",
    options: ["iron", "vanadium(V) oxide", "platinum", "copper"],
    answer: "platinum",
    explanation: "Ammonia and oxygen react over a platinum catalyst: 4NH3 + 5O2 → 4NO + 6H2O.",
  },
  {
    prompt: "Which product is made in the contact process?",
    options: ["ammonia", "sulfuric acid", "nitric acid", "ammonium nitrate"],
    answer: "sulfuric acid",
    explanation: "The contact process makes H2SO4 from sulfur, via SO2 and SO3.",
  },
  {
    prompt: "Which catalyst is used when SO2 is converted to SO3 in the contact process?",
    options: ["vanadium(V) oxide", "iron", "platinum", "manganese(IV) oxide"],
    answer: "vanadium(V) oxide",
    explanation: "2SO2 + O2 ⇌ 2SO3 is catalysed by vanadium(V) oxide, V2O5.",
  },
  {
    prompt: "What is the percentage by mass of nitrogen in ammonium nitrate, NH4NO3? (N = 14, H = 1, O = 16)",
    options: ["17,5%", "46,7%", "21,2%", "35%"],
    answer: "35%",
    explanation: "M(NH4NO3) = 14 + 4 + 14 + 48 = 80 g·mol⁻¹. Two N atoms: 28/80 × 100 = 35%.",
  },
  {
    prompt: "Which fertiliser contains the highest percentage of nitrogen by mass?",
    options: ["ammonium nitrate, NH4NO3", "ammonium sulfate, (NH4)2SO4", "urea, CO(NH2)2", "potassium nitrate, KNO3"],
    answer: "urea, CO(NH2)2",
    explanation: "Nitrogen: urea 46,7%, ammonium nitrate 35%, ammonium sulfate 21,2%, potassium nitrate 13,9%.",
  },
  {
    prompt: "What is eutrophication?",
    options: ["Water becomes acidic because sulfur dioxide dissolves in the rain", "Excess nutrients cause algae to bloom, and their decay uses up the oxygen", "Fish eat too much algae and are poisoned by the toxins in it", "Fertiliser salts make the soil too hard for roots to push through"],
    answer: "Excess nutrients cause algae to bloom, and their decay uses up the oxygen",
    explanation: "Nitrate and phosphate run-off feed algal blooms; decomposers then use up the dissolved oxygen, so fish and other organisms die.",
  },
  {
    prompt: "Which equation correctly shows the first step of the Ostwald process?",
    options: ["4NH3 + 5O2 → 4NO + 6H2O", "2NH3 + O2 → 2NO + 3H2O", "NH3 + O2 → NO + H2O", "4NH3 + 3O2 → 4NO + 6H2O"],
    answer: "4NH3 + 5O2 → 4NO + 6H2O",
    explanation: "Balance N: 4. Balance H: 12 H gives 6H2O. Then O: 4 + 6 = 10, so 5O2.",
  },
];
// BANK:END

const FertiliserIndustry = () => (
  <CapsSubjectTopic
    title="The Fertiliser Industry"
    subtitle="N, P and K, the Haber, Ostwald and contact processes, eutrophication"
    learnSteps={learnSteps}
    task="gr12-fertiliser-industry-t3"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default FertiliserIndustry;
