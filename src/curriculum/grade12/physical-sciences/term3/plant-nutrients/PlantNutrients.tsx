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

import { NpkBag } from '../../../../../components/diagrams/chemistry12/Chem12';
import { npkMasses } from '../../../../../components/diagrams/chemistry12/chemHelpers';

const bag = npkMasses([5, 1, 4], 30, 50);
const crop = npkMasses([3, 2, 1], 36, 25);
const nShare = (3 / 6) * 36; // % N in a 3:2:1 (36) fertiliser
const needN = 90; // kg of N per hectare
const fertKg = needN / (nShare / 100);

export const learnSteps: LearnStep[] = [
  {
    title: 'Non-mineral and mineral nutrients',
    content: slide(
      <>
        <Rule>Plants need nutrients to grow. Three of them, carbon (C), hydrogen (H) and oxygen (O), are not obtained from the soil: carbon comes from carbon dioxide in the air, and hydrogen and oxygen come from water (rain). Three primary nutrients, nitrogen (N), phosphorus (P) and potassium (K), are mineral nutrients: they dissolve in water in the soil and are absorbed by the roots. Fertilisers are needed because the soil often does not contain enough of them for healthy growth.</Rule>
        <ProcessFlow
          aria="Where plants get nutrients: carbon dioxide from the air and water from rain supply C, H and O; nitrogen, phosphorus and potassium dissolve in soil water and enter through the roots."
          steps={[
            { label: 'CO₂ + H₂O', note: 'air and rain', color: '#fbbf24' },
            { label: 'C, H, O', note: 'non-mineral' },
            { label: 'N, P, K', note: 'dissolved in soil water', color: '#34d399' },
            { label: 'roots', note: 'absorb them' },
          ]}
        />
        <Worked
          title="Sort the nutrients"
          steps={[
            'Carbon: from CO₂ in the atmosphere, so a non-mineral nutrient.',
            'Hydrogen and oxygen: from water, so also non-mineral.',
            'Nitrogen, phosphorus and potassium: from the soil, as dissolved mineral salts, so fertilisers can add them.',
          ]}
        />
        <Mistake>Believing that a fertiliser supplies carbon to the plant. Plants take their carbon from the air; a fertiliser supplies the mineral nutrients that the soil lacks.</Mistake>
      </>,
    ),
  },
  {
    title: 'What nitrogen, phosphorus and potassium do',
    content: slide(
      <>
        <Rule>Nitrogen is needed for leaf and stem growth and for making proteins and chlorophyll, so a plant that lacks it has pale, yellow leaves. Phosphorus helps roots to develop and flowers and seeds to form, and it is used in energy transfer in the cells. Potassium helps the plant to use water, to resist disease and to produce good fruit.</Rule>
        <FactCards
          cards={[
            { title: 'N: leaves', line1: 'growth, protein and', line2: 'green chlorophyll' },
            { title: 'P: roots', line1: 'roots, flowers, seeds', line2: 'and cell energy' },
            { title: 'K: health', line1: 'water use, disease', line2: 'resistance, fruit' },
            { title: 'Lack of one', line1: 'poor growth even if', line2: 'the others are present' },
          ]}
          aria="Functions of N, P and K. N: leaf growth, protein and green chlorophyll. P: roots, flowers, seeds and cell energy. K: water use, disease resistance and fruit. A lack of one nutrient means poor growth even if the others are present."
        />
        <Worked
          title="Match the symptom to the nutrient"
          steps={[
            'Pale yellow leaves and slow growth: a lack of nitrogen.',
            'Weak roots and few flowers: a lack of phosphorus.',
            'Scorched leaf edges and poor fruit: a lack of potassium.',
          ]}
        />
        <Mistake>Giving extra nitrogen when the real shortage is phosphorus or potassium. Each nutrient has its own job, and one cannot take the place of another.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where the nutrients came from: guano, bone meal and potash',
    content: slide(
      <>
        <Rule>Farmers used natural sources long before industry made fertilisers. Guano, the dried droppings of seabirds and bats, was a source of nitrogen. Bone meal, crushed bones, was a source of phosphorus. Potassium came mainly from potash mined in Germany. When supplies of the natural sources were limited, and during the First World War, the need for industrial ways of making nitrogen compounds grew, and the Haber process was developed into large factories.</Rule>
        <FactCards
          cards={[
            { title: 'Nitrogen', line1: 'guano, bird and', line2: 'bat droppings' },
            { title: 'Phosphorus', line1: 'bone meal from', line2: 'crushed bones' },
            { title: 'Potassium', line1: 'potash from', line2: 'German mines' },
            { title: 'Later', line1: 'industry makes', line2: 'fertilisers on a large scale' },
          ]}
          aria="Early sources of nutrients. Nitrogen: guano, bird and bat droppings. Phosphorus: bone meal from crushed bones. Potassium: potash from German mines. Later, industry made fertilisers on a large scale."
        />
        <Worked
          title="Why industry took over"
          steps={[
            'Guano and mined potash are limited and sit in a few places.',
            'A growing population needs far more food, so far more nutrients.',
            'The Haber process makes ammonia from nitrogen in the air, which is almost unlimited, so it can supply nitrogen on a large scale.',
          ]}
        />
        <Mistake>Thinking that fertilisers only began with factories. Natural fertilisers such as manure, guano and bone meal were used for centuries.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading the N:P:K ratio and finding how much to use',
    content: slide(
      <>
        <Rule>A label such as 5:1:4 (30) gives the ratio of N : P : K and, in brackets, the percentage of the bag that is nutrient. The mass of one nutrient is its share of the ratio multiplied by the total mass of nutrients. To find how much fertiliser to apply, divide the mass of nutrient needed by the percentage of that nutrient in the fertiliser.</Rule>
        <NpkBag label="5:1:4 (30)" bagKg={50} filler={bag.filler} n={bag.n} p={bag.p} k={bag.k} />
        <Worked
          title="Two calculations"
          steps={[
            <>A 50 kg bag of 5:1:4 (30) has 50 × 0,30 = {f(bag.nutrients)} kg of nutrients in 5 + 1 + 4 = 10 parts, so N = {f(bag.n)} kg, P = {f(bag.p)} kg and K = {f(bag.k)} kg.</>,
            <>For a 3:2:1 (36) fertiliser, N is 3 of 6 parts of the 36%: {f(nShare)}% nitrogen. A 25 kg bag has {f(crop.n)} kg of N.</>,
            <>A crop needs {needN} kg of N per hectare. Fertiliser needed = {needN} ÷ {f(nShare / 100)} = <strong>{f(fertKg)} kg</strong> per hectare.</>,
          ]}
        />
        <Mistake>Dividing by the number in brackets. The 36 is the percentage of all nutrients; the share of nitrogen is only its part of the ratio.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which nutrients do plants get from the air and from rain?</>,
          <>What does phosphorus do for a plant?</>,
          <>What was guano used for?</>,
          <>A 50 kg bag is labelled 5:1:4 (30). How much potassium does it hold?</>,
        ]}
        answers={[
          <>Carbon, hydrogen and oxygen, from carbon dioxide and water.</>,
          <>It helps roots, flowers and seeds to form, and it is used in the cell&rsquo;s energy transfer.</>,
          <>It was a natural source of nitrogen.</>,
          <>{f(bag.k)} kg.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which three nutrients does a plant not obtain from the soil?",
    options: ["Nitrogen, phosphorus and potassium", "Calcium, iron and sulfur", "Carbon, hydrogen and oxygen", "Sodium, chlorine and copper"],
    answer: "Carbon, hydrogen and oxygen",
    explanation: "They come from carbon dioxide in the air and from water.",
  },
  {
    prompt: "From which source does a plant obtain its carbon?",
    options: ["Carbon dioxide in the air", "Nitrates in the soil", "Phosphates in the soil", "Potassium salts in water"],
    answer: "Carbon dioxide in the air",
    explanation: "Plants take in CO2 from the atmosphere.",
  },
  {
    prompt: "Why are N, P and K called mineral nutrients?",
    options: ["The leaves make them from sunlight", "They come from the air", "They are made from the rain", "Roots absorb them from soil water"],
    answer: "Roots absorb them from soil water",
    explanation: "They dissolve in soil water and enter by the roots.",
  },
  {
    prompt: "Which symptom points to a lack of nitrogen?",
    options: ["Scorched leaf edges and poor fruit", "Pale yellow leaves and slow growth", "Weak roots and few flowers", "Leaves that are too dark green"],
    answer: "Pale yellow leaves and slow growth",
    explanation: "Nitrogen is needed for chlorophyll and proteins.",
  },
  {
    prompt: "What is a main use of phosphorus in a plant?",
    options: ["Making the leaves green", "Root growth, flowers and seeds", "Making the stem taller only", "Absorbing carbon dioxide"],
    answer: "Root growth, flowers and seeds",
    explanation: "Phosphorus is also used in energy transfer in the cells.",
  },
  {
    prompt: "What is a main use of potassium in a plant?",
    options: ["Building roots only", "Making chlorophyll alone", "Producing carbon dioxide", "Using water and resisting disease"],
    answer: "Using water and resisting disease",
    explanation: "Potassium also helps to give good fruit.",
  },
  {
    prompt: "Why can extra nitrogen not cure a phosphorus shortage?",
    options: ["Each nutrient has its own job", "Nitrogen is poisonous", "Phosphorus is a gas", "Nitrogen is insoluble"],
    answer: "Each nutrient has its own job",
    explanation: "One nutrient cannot take the place of another.",
  },
  {
    prompt: "Which natural fertiliser was an early source of nitrogen?",
    options: ["Bone meal", "Potash", "Guano", "Limestone"],
    answer: "Guano",
    explanation: "Guano is the dried droppings of seabirds and bats.",
  },
  {
    prompt: "Which natural fertiliser was an early source of phosphorus?",
    options: ["Guano", "Potash", "Sand", "Bone meal"],
    answer: "Bone meal",
    explanation: "Crushed bones contain phosphates.",
  },
  {
    prompt: "Before industrial fertilisers, where did most potassium come from?",
    options: ["Seabird droppings", "Potash mined in Germany", "Crushed bones", "Rain water"],
    answer: "Potash mined in Germany",
    explanation: "Potassium salts were mined as potash.",
  },
  {
    prompt: "Bag A holds 50 kg of fertiliser labelled 5:1:4 (30). How much nitrogen does it contain?",
    options: ["7,5 kg", "15 kg", "5 kg", "1,5 kg"],
    answer: "7,5 kg",
    explanation: "Nutrients = 15 kg in 10 parts; N is 5 parts = 7,5 kg.",
  },
  {
    prompt: "The same 5:1:4 (30) bag of 50 kg contains how much phosphorus?",
    options: ["7,5 kg", "6 kg", "1,5 kg", "15 kg"],
    answer: "1,5 kg",
    explanation: "One part is 1,5 kg and P has 1 part.",
  },
  {
    prompt: "A fertiliser is labelled 3:2:1 (36). What percentage of it is nitrogen?",
    options: ["36%", "50%", "18%", "6%"],
    answer: "18%",
    explanation: "N is 3 of the 6 parts: 3/6 x 36 = 18%.",
  },
  {
    prompt: "A crop needs 90 kg of nitrogen per hectare. How much 3:2:1 (36) fertiliser supplies this?",
    options: ["500 kg", "250 kg", "90 kg", "324 kg"],
    answer: "500 kg",
    explanation: "90 / 0,18 = 500 kg.",
  },
];

const PlantNutrients = () => (
  <CapsSubjectTopic
    title="Plant Nutrients: Sources, Functions and History"
    subtitle="Non-mineral and mineral nutrients, the jobs of N, P and K, early fertilisers and reading the N:P:K ratio"
    learnSteps={learnSteps}
    task="gr12-plant-nutrients-t3"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default PlantNutrients;
