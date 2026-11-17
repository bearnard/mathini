import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, WaterShares } from '../../../../../components/diagrams/aq10/Aq10';
import { WATER, dailyDemandM3, daysOfSupply, freshShare } from '../../../../../components/diagrams/aq10/aq10Helpers';

// All figures come from aq10Helpers.ts (tested in aq10Helpers.test.ts and g10PsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const DEMAND = dailyDemandM3(200, 5000);
const DAYS = daysOfSupply(150000, DEMAND);
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'The hydrosphere',
    content: slide(
      <>
        <Rule>The hydrosphere is all the water on Earth. It exists as a liquid (oceans, rivers, dams, groundwater), as a solid (ice caps and glaciers) and as a gas (water vapour in the air).</Rule>
        <WaterShares items={WATER.map((w) => ({ name: w.name, percent: w.percent }))} />
        <Worked
          title="How much of Earth's water is fresh?"
          steps={[
            `About ${WATER[0].percent}% is salt water in the oceans.`,
            `Fresh water is ${WATER[1].percent}% ice and ${WATER[2].percent}% liquid, so ${freshShare()}% in all.`,
            `Only about ${WATER[2].percent}% is liquid fresh water that we can easily use. Water is a limited resource.`,
          ]}
        />
        <Mistake>Thinking most fresh water is in rivers and dams. Most of it is frozen as ice.</Mistake>
      </>,
    ),
  },
  {
    title: 'The water cycle and the spheres',
    content: slide(
      <>
        <Rule>Water moves between the hydrosphere, atmosphere, lithosphere and biosphere. The sun drives evaporation. Water vapour condenses into clouds and falls as rain, then flows over land or soaks into the ground.</Rule>
        <FactCards
          cards={[
            { title: 'Atmosphere', line1: 'evaporation and', line2: 'condensation, clouds, rain' },
            { title: 'Lithosphere', line1: 'water dissolves minerals from', line2: 'rock and deposits them again' },
            { title: 'Biosphere', line1: 'plants take up water; all living', line2: 'things need water' },
            { title: 'Hydrosphere', line1: 'rivers, oceans and', line2: 'groundwater store the water' },
          ]}
          aria="How the hydrosphere interacts with other spheres. The atmosphere: evaporation and condensation, clouds and rain. The lithosphere: water dissolves minerals from rock and deposits them again. The biosphere: plants take up water and all living things need water. The hydrosphere: rivers, oceans and groundwater store the water."
        />
        <Worked
          title="Follow a drop of water"
          steps={[
            'Sunshine evaporates water from the ocean.',
            'The vapour cools and condenses to form a cloud.',
            'Rain falls on land, dissolves some minerals from the rock and runs to a river.',
          ]}
        />
        <Mistake>Saying that the water cycle uses up water. The water is moved and changed in state, but it is not lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dams, ecology and water quality',
    content: slide(
      <>
        <Rule>A dam stores water for people, farms and industry. A dam also changes the river ecosystem downstream. Water quality can be tested for pH, dissolved salts, clarity and the presence of germs.</Rule>
        <FactCards
          cards={[
            { title: 'Benefits of a dam', line1: 'a store of water for dry', line2: 'seasons, power and irrigation' },
            { title: 'Costs of a dam', line1: 'flooded land, changed river', line2: 'flow and habitats downstream' },
            { title: 'Water quality tests', line1: 'pH, clarity, dissolved salts', line2: 'and germs' },
          ]}
          aria="Dams and water quality. Benefits of a dam: a store of water for dry seasons, power and irrigation. Costs of a dam: flooded land, changed river flow and changed habitats downstream. Water quality can be tested for pH, clarity, dissolved salts and germs."
        />
        <Worked
          title="How long does a dam last?"
          steps={[
            `A town of 5 000 people uses 200 L each per day, which is ${n(DEMAND)} m³ per day (1 000 L = 1 m³).`,
            `A dam holds 150 000 m³ and receives no rain, so it supplies the town for ${n(DAYS)} days.`,
          ]}
        />
        <Mistake>Forgetting to change litres to cubic metres. Divide by 1 000 because 1 m³ is 1 000 L.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What percentage of Earth's water is salt water?</>,
          <>Name the process that turns water vapour into liquid droplets in clouds.</>,
          <>Which part of the water in the hydrosphere is mostly frozen?</>,
          <>A town uses {n(DEMAND)} m³ of water a day. How many days does a 150 000 m³ dam supply it?</>,
        ]}
        answers={[
          <>About {WATER[0].percent}%.</>,
          <>Condensation.</>,
          <>Most fresh water: the ice caps and glaciers.</>,
          <>{n(DAYS)} days.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the hydrosphere include?",
    options: ["Only the water in oceans", "Only the water in rivers and dams", "All the water on Earth, in every state", "The gases of the air only"],
    answer: "All the water on Earth, in every state",
    explanation: "The hydrosphere is all the water on Earth, as liquid, solid and gas.",
  },
  {
    prompt: "About what percentage of Earth's water is in the oceans?",
    options: ["97%", "50%", "75%", "10%"],
    answer: "97%",
    explanation: "About 97% of Earth's water is salt water in the oceans.",
  },
  {
    prompt: "About what percentage of Earth's water is liquid fresh water?",
    options: ["30%", "10%", "50%", "1%"],
    answer: "1%",
    explanation: "Oceans are about 97% and ice about 2%, leaving about 1% liquid fresh water.",
  },
  {
    prompt: "Where is most of Earth's fresh water stored?",
    options: ["In rivers and lakes", "In the ice caps", "In dams and tanks", "In clouds as vapour"],
    answer: "In the ice caps",
    explanation: "About 2% of the water is ice, which is more than the 1% that is liquid fresh water.",
  },
  {
    prompt: "Which process changes liquid water to water vapour?",
    options: ["Condensation", "Evaporation", "Precipitation", "Freezing"],
    answer: "Evaporation",
    explanation: "Heat from the sun evaporates liquid water into vapour.",
  },
  {
    prompt: "Which process forms the droplets in a cloud?",
    options: ["Evaporation", "Melting", "Sublimation", "Condensation"],
    answer: "Condensation",
    explanation: "Water vapour cools and condenses into liquid droplets.",
  },
  {
    prompt: "Rain water dissolves minerals from rocks. Which two spheres interact here?",
    options: ["Hydrosphere and lithosphere", "Atmosphere and biosphere only", "Biosphere and lithosphere only", "Hydrosphere and ozone layer"],
    answer: "Hydrosphere and lithosphere",
    explanation: "Water from the hydrosphere dissolves minerals from the rock of the lithosphere.",
  },
  {
    prompt: "A plant takes up water through its roots. Which sphere is the plant part of?",
    options: ["The atmosphere", "The lithosphere", "The biosphere", "The hydrosphere"],
    answer: "The biosphere",
    explanation: "Living things belong to the biosphere.",
  },
  {
    prompt: "Which is a benefit of building a dam?",
    options: ["It keeps river habitats unchanged", "It adds new fresh water to the Earth", "It makes the river flow faster downstream", "It stores water for dry seasons"],
    answer: "It stores water for dry seasons",
    explanation: "A dam stores water so that supply continues in dry seasons.",
  },
  {
    prompt: "Which is an ecological cost of a dam?",
    options: ["The river water becomes seawater", "Habitats downstream are changed", "The rainfall is increased everywhere", "The dam removes all dissolved salts"],
    answer: "Habitats downstream are changed",
    explanation: "A dam changes the river flow and the habitats downstream.",
  },
  {
    prompt: "Which of these can be measured to test the quality of water?",
    options: ["Its pH", "Its shape", "Its age in years", "Its colour of the container"],
    answer: "Its pH",
    explanation: "Water quality tests include pH, clarity, dissolved salts and germs.",
  },
  {
    prompt: "1 000 L equals how many cubic metres?",
    options: ["10 m³", "100 m³", "1 m³", "0,1 m³"],
    answer: "1 m³",
    explanation: "1 m³ is 1 000 L, so divide litres by 1 000.",
  },
  {
    prompt: "A town of 5 000 people uses 200 L of water per person per day. What is the daily demand in m³?",
    options: ["100 m³", "10 000 m³", "1 000 m³", "200 m³"],
    answer: "1 000 m³",
    explanation: "5 000 × 200 L = 1 000 000 L, which is 1 000 m³.",
  },
  {
    prompt: "A dam holds 150 000 m³ and the town uses 1 000 m³ per day. For how many days does the water last if no rain falls?",
    options: ["150 days", "15 days", "1 500 days", "15 000 days"],
    answer: "150 days",
    explanation: "150 000 m³ ÷ 1 000 m³ per day = 150 days.",
  },
];

const Hydrosphere = () => (
  <CapsSubjectTopic
    title="The Hydrosphere"
    subtitle="Water on Earth, the water cycle, dams and water quality"
    learnSteps={learnSteps}
    task="gr10-hydrosphere-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Hydrosphere;
