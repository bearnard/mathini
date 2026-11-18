import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ProcessFlow, RECYCLING_CODES } from '../../../../../components/diagrams/chemistry12/Chem12';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { massPercent, molarMass } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// Numbers come from chemHelpers.ts and are recomputed independently in g12PsGaps.test.ts. Formulas are written in text, as in the CAPS.
const f = (v: number) => String(Math.round(v * 100) / 100).replace('.', ',');
const f1 = (v: number) => String(Math.round(v * 10) / 10).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const urea = molarMass('CO(NH2)2');
const nh3 = molarMass('NH3');
const ureaKg = 600;
const nh3Kg = ((ureaKg / urea) * 2) * nh3;
const superP = molarMass('Ca(H2PO4)2');
const rock = molarMass('Ca3(PO4)2');

export const learnSteps: LearnStep[] = [
  {
    title: 'Raw materials for nitrogen fertilisers',
    content: slide(
      <>
        <Rule>Nitrogen fertilisers start with ammonia, and ammonia needs nitrogen and hydrogen. Nitrogen is separated from the air by the fractional distillation of liquid air: nitrogen boils at a lower temperature than oxygen, so it distils off first. Hydrogen is made from coal and steam, as at Sasol: C + H₂O → CO + H₂, followed by CO + H₂O ⇌ CO₂ + H₂. The two gases then meet in the Haber process to give ammonia.</Rule>
        <ProcessFlow
          aria="Raw materials: liquid air is separated by fractional distillation to give nitrogen; coal and steam give hydrogen; nitrogen and hydrogen react in the Haber process to give ammonia."
          steps={[
            { label: 'liquid air', note: 'fractional distillation', color: '#fbbf24' },
            { label: 'N₂', note: 'boils at −196 °C' },
            { label: '+ H₂', note: 'from coal and steam' },
            { label: 'NH₃', note: 'Haber process', color: '#34d399' },
          ]}
        />
        <Worked
          title="Why does nitrogen distil off first?"
          steps={[
            'Liquid air is warmed slowly in a tall column.',
            'Nitrogen boils at −196 °C and oxygen at −183 °C, so nitrogen turns to gas first and is collected at the top.',
            'The hydrogen comes from a different source, coal and steam, and both gases are fed to the ammonia plant.',
          ]}
        />
        <Mistake>Saying that nitrogen is made from ammonia. Nitrogen comes from the air, and the ammonia is made from nitrogen and hydrogen.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fertilisers made from ammonia',
    content: slide(
      <>
        <Rule>Ammonia is used to make most nitrogen fertilisers. Ammonium nitrate forms when ammonia neutralises nitric acid: NH₃ + HNO₃ → NH₄NO₃. Ammonium sulfate forms with sulfuric acid: 2NH₃ + H₂SO₄ → (NH₄)₂SO₄. Urea forms when ammonia reacts with carbon dioxide: 2NH₃ + CO₂ → CO(NH₂)₂ + H₂O.</Rule>
        <ProcessFlow
          aria="Fertilisers from ammonia: ammonia with nitric acid gives ammonium nitrate, with sulfuric acid gives ammonium sulfate, and with carbon dioxide gives urea."
          steps={[
            { label: 'NH₃ + HNO₃', note: 'NH₄NO₃', color: '#fbbf24' },
            { label: 'NH₃ + H₂SO₄', note: '(NH₄)₂SO₄' },
            { label: 'NH₃ + CO₂', note: 'urea', color: '#34d399' },
          ]}
        />
        <Worked
          title="How much ammonia for 600 kg of urea?"
          steps={[
            <>Urea, CO(NH₂)₂, has M = {f(urea)} g·mol⁻¹, so {ureaKg} kg is {f(ureaKg / urea)} kmol.</>,
            <>The equation 2NH₃ + CO₂ → CO(NH₂)₂ + H₂O needs 2 mol of NH₃ for 1 mol of urea: {f((ureaKg / urea) * 2)} kmol.</>,
            <>Mass of NH₃ = {f((ureaKg / urea) * 2)} × {f(nh3)} = <strong>{f(nh3Kg)} kg</strong>.</>,
          ]}
        />
        <Mistake>Forgetting the mole ratio in the equation. Two moles of ammonia go into every mole of urea, so the mass of ammonia is not the mass of urea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Phosphate and potassium fertilisers',
    content: slide(
      <>
        <Rule>Phosphate rock, Ca₃(PO₄)₂, is insoluble, so plants cannot use it. Treating it with sulfuric acid makes superphosphate, which dissolves: Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄. Potassium fertilisers come from potash salts such as KCl, and from compounds such as KNO₃ and K₂SO₄; much of the potash used in South Africa is imported.</Rule>
        <FactCards
          cards={[
            { title: 'Phosphate rock', line1: 'Ca₃(PO₄)₂', line2: 'insoluble in water' },
            { title: 'Superphosphate', line1: 'Ca(H₂PO₄)₂', line2: 'soluble, plants use it' },
            { title: 'Potash', line1: 'KCl, mined and', line2: 'imported' },
            { title: 'Other K salts', line1: 'KNO₃ and', line2: 'K₂SO₄' },
          ]}
          aria="Phosphate and potassium fertilisers. Phosphate rock Ca3(PO4)2 is insoluble in water. Superphosphate Ca(H2PO4)2 is soluble and plants can use it. Potash KCl is mined and imported. Other potassium salts are KNO3 and K2SO4."
        />
        <Worked
          title="Compare the percentages"
          steps={[
            <>Superphosphate, M = {f(superP)}: phosphorus is 2 × 31 ÷ {f(superP)} × 100 = <strong>{f1(massPercent('P', 'Ca(H2PO4)2'))}%</strong> by mass.</>,
            <>Potassium: KCl has {f1(massPercent('K', 'KCl'))}% K, K₂SO₄ has {f1(massPercent('K', 'K2SO4'))}% and KNO₃ has {f1(massPercent('K', 'KNO3'))}%.</>,
            <>One mole of rock ({f(rock)} g) gives one mole of superphosphate ({f(superP)} g), because the equation has a 1 : 1 ratio.</>,
          ]}
        />
        <Mistake>Using ground phosphate rock as it is. It is insoluble, and it only becomes available to plants after treatment with acid.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sasol, ammonium nitrate and the use of fertilisers',
    content: slide(
      <>
        <Rule>At Sasol, hydrogen from coal is used to make ammonia, and ammonia is used to make ammonium nitrate, which is both a fertiliser and an ingredient of explosives used in mining. Inorganic fertilisers raise yields and have a known nutrient content, but when too much is used it runs off into rivers and dams, and it can cause eutrophication. Alternatives used by many communities include compost, manure, planting legumes that add nitrogen, and crop rotation. The public can help by using the correct amount and by not applying fertiliser before heavy rain.</Rule>
        <FactCards
          cards={[
            { title: 'Advantages', line1: 'higher yields and a', line2: 'known nutrient content' },
            { title: 'Harm', line1: 'run-off, eutrophication,', line2: 'cost and energy use' },
            { title: 'Alternatives', line1: 'compost, manure, legumes', line2: 'and crop rotation' },
            { title: 'Public', line1: 'right amount, not before', line2: 'rain, no dumping' },
          ]}
          aria="Using fertilisers. Advantages: higher yields and a known nutrient content. Harm: run-off, eutrophication, cost and energy use. Alternatives: compost, manure, legumes and crop rotation. Public: use the right amount, not before rain, and no dumping."
        />
        <Worked
          title="Weigh up the choice"
          steps={[
            'A farmer who uses only inorganic fertiliser gets high yields, but some of the nitrate runs off into the river after rain.',
            'A farmer who adds compost and grows beans in rotation uses less fertiliser and keeps nutrients in the soil, but may get lower yields.',
            'A balanced answer states the advantages and the harm of each choice.',
          ]}
        />
        <Mistake>Saying that inorganic fertilisers are always bad or always good. They have clear advantages when used correctly, and they cause harm when too much is used.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How is nitrogen separated from the air?</>,
          <>Write the equation for making ammonium sulfate from ammonia.</>,
          <>Why is phosphate rock treated with sulfuric acid?</>,
          <>Give one alternative to inorganic fertilisers.</>,
        ]}
        answers={[
          <>By the fractional distillation of liquid air.</>,
          <>2NH₃ + H₂SO₄ → (NH₄)₂SO₄.</>,
          <>To make soluble superphosphate that plants can take up.</>,
          <>Compost, manure, legumes or crop rotation.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How is nitrogen separated from the air in industry?",
    options: ["By burning it in oxygen", "By dissolving it in water", "By the fractional distillation of liquid air", "By filtering the air through sand"],
    answer: "By the fractional distillation of liquid air",
    explanation: "The components of liquid air have different boiling points.",
  },
  {
    prompt: "Why does nitrogen distil off before oxygen from liquid air?",
    options: ["It has the lower boiling point", "It is heavier than oxygen", "It is a metal", "It is more reactive"],
    answer: "It has the lower boiling point",
    explanation: "Nitrogen boils at -196 degrees Celsius and oxygen at -183 degrees Celsius.",
  },
  {
    prompt: "From what is the hydrogen for ammonia made at Sasol?",
    options: ["Air and sand", "Salt and water", "Limestone and oil", "Coal and steam"],
    answer: "Coal and steam",
    explanation: "Hydrogen is made by reacting coal with steam.",
  },
  {
    prompt: "Which is the balanced equation for coal and steam forming carbon monoxide and hydrogen?",
    options: ["C + H2O -> CO2 + H2", "C + H2O -> CO + H2", "2C + H2O -> 2CO + H2", "C + 2H2O -> CO + H2"],
    answer: "C + H2O -> CO + H2",
    explanation: "One C, one H2O: one CO and one H2 balance.",
  },
  {
    prompt: "Which equation correctly shows the formation of ammonium sulfate?",
    options: ["NH3 + H2SO4 -> NH4SO4", "2NH3 + H2SO4 -> (NH4)2SO4", "NH3 + H2SO4 -> (NH4)2SO4", "2NH3 + 2H2SO4 -> (NH4)2SO4"],
    answer: "2NH3 + H2SO4 -> (NH4)2SO4",
    explanation: "Two NH3 are needed for each H2SO4, so that both H+ ions are used.",
  },
  {
    prompt: "Which reaction produces urea?",
    options: ["NH3 + HNO3 -> NH4NO3", "N2 + 3H2 -> 2NH3", "2NH3 + H2SO4 -> (NH4)2SO4", "2NH3 + CO2 -> CO(NH2)2 + H2O"],
    answer: "2NH3 + CO2 -> CO(NH2)2 + H2O",
    explanation: "Ammonia reacts with carbon dioxide to give urea and water.",
  },
  {
    prompt: "How many kilomoles of urea, CO(NH2)2, are in 600 kg? (M = 60 kg/kmol)",
    options: ["10 kmol", "6 kmol", "36 kmol", "100 kmol"],
    answer: "10 kmol",
    explanation: "600 / 60 = 10 kmol.",
  },
  {
    prompt: "What mass of ammonia is needed to make 600 kg of urea by 2NH3 + CO2 -> CO(NH2)2 + H2O? (N = 14, H = 1)",
    options: ["170 kg", "600 kg", "340 kg", "1 020 kg"],
    answer: "340 kg",
    explanation: "10 kmol of urea needs 20 kmol of NH3, and 20 x 17 = 340 kg.",
  },
  {
    prompt: "Why is phosphate rock treated with sulfuric acid to make fertiliser?",
    options: ["To make it burn better", "To turn it into a gas", "To turn it into a metal", "To make it soluble for plants"],
    answer: "To make it soluble for plants",
    explanation: "Ca3(PO4)2 is insoluble; Ca(H2PO4)2 dissolves in water.",
  },
  {
    prompt: "What is the formula of superphosphate?",
    options: ["Ca3(PO4)2", "Ca(H2PO4)2", "CaSO4", "Ca(NO3)2"],
    answer: "Ca(H2PO4)2",
    explanation: "Superphosphate is calcium dihydrogenphosphate.",
  },
  {
    prompt: "What is the percentage of phosphorus in Ca(H2PO4)2? (Ca = 40, P = 31, O = 16, H = 1)",
    options: ["26,5%", "13,2%", "31%", "53%"],
    answer: "26,5%",
    explanation: "2 x 31 / 234 x 100 = 26,5%.",
  },
  {
    prompt: "Which potassium compound has the highest percentage of potassium by mass? (K = 39, Cl = 35,5, N = 14, S = 32, O = 16)",
    options: ["K2SO4", "KNO3", "KCl", "They are the same"],
    answer: "KCl",
    explanation: "KCl has 52,3% K, K2SO4 44,8% and KNO3 38,6%.",
  },
  {
    prompt: "Why is ammonium nitrate linked to Sasol in fertiliser production?",
    options: ["Made only from coal tar and used as paint", "Made only as a fuel for cars and trucks", "Made from ammonia, a fertiliser and explosive", "Made only as a kind of household paint"],
    answer: "Made from ammonia, a fertiliser and explosive",
    explanation: "Ammonia from coal-derived hydrogen is turned into ammonium nitrate.",
  },
  {
    prompt: "Which is an alternative to inorganic fertilisers used by some farmers?",
    options: ["Compost and manure", "Plastic mulch only", "Weed killer", "Petrol"],
    answer: "Compost and manure",
    explanation: "Compost, manure, legumes and crop rotation return nutrients to the soil.",
  },
];

const FertiliserManufacture = () => (
  <CapsSubjectTopic
    title="Making Fertilisers in Industry: Raw Materials, Sasol and Alternatives"
    subtitle="Raw materials, ammonia-based, phosphate and potassium fertilisers, Sasol, advantages and alternatives"
    learnSteps={learnSteps}
    task="gr12-fertiliser-manufacture-t3"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default FertiliserManufacture;
