import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps = [
  {
    title: "How tropical cyclones form",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Tropical cyclones form over very warm oceans, usually where sea-surface temperatures are above about 26.5 degrees Celsius. Warm moist air rises rapidly, pressure falls and latent heat released during condensation strengthens the storm."}</p>
        <p className="text-lg leading-8 text-slate-600">{"They do not form right on the Equator because the Coriolis force is too weak there to create the necessary spin. In the south-west Indian Ocean, these storms can threaten Mozambique, Madagascar and the north-eastern coast of southern Africa."}</p>
      </div>
    ),
  },
  {
    title: "Structure and hazards of the storm",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A mature tropical cyclone has a calm eye in the centre, surrounded by an eyewall of towering cumulonimbus clouds and the strongest winds. Spiral rain bands extend outward and bring intense rainfall over a wide area."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Main hazards include destructive winds, storm surge along the coast, flooding, landslides and damage to crops, roads, power lines and settlements. Because the storm is fuelled by warm ocean water, it weakens once it moves over land."}</p>
      </div>
    ),
  },
  {
    title: "What anticyclones do",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Anticyclones are high-pressure systems with descending air. The subsiding air warms adiabatically, which reduces relative humidity and limits cloud formation, so anticyclones are linked to stable, clear and dry weather."}</p>
        <p className="text-lg leading-8 text-slate-600">{"South Africa is strongly influenced by the South Atlantic High, the South Indian High and the Kalahari High in winter. These anticyclones steer weather systems and can block or redirect fronts."}</p>
      </div>
    ),
  },
  {
    title: "Comparing cyclone and anticyclone weather",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Tropical cyclones have rising air, very low central pressure and destructive weather. Anticyclones have sinking air, relatively high pressure and more settled conditions."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Examination questions often ask learners to compare wind direction, cloud cover, rainfall and pressure trends in these systems, or to explain why one system causes flooding while the other causes stable dry conditions."}</p>
      </div>
    ),
  },
  {
    title: 'Storm Data — South-West Indian Ocean Cyclone Count',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Tropical cyclone activity varies from season to season. A simple time series helps learners track how often named systems form in this region.</p>
        <DataChart
          data={[
                        { season: '2019', cyclones: 12 },
                        { season: '2020', cyclones: 10 },
                        { season: '2021', cyclones: 9 },
                        { season: '2022', cyclones: 13 },
                        { season: '2023', cyclones: 14 },
                      ]}
          xKey="season"
          series={[
                        { key: 'cyclones', label: 'Named cyclones', type: 'line', color: '#06b6d4' },
                      ]}
          type="line"
          yLabel="Count"
          height={220}
        />

        <p className="text-sm text-slate-500">Warm ocean water, low wind shear, and moist air all help tropical cyclones to form and intensify.</p>
      </div>
    ),
  },
  {
    title: "Tropical cyclones after landfall",
    content: (
      <div className="space-y-4">
        <GapRule>{"After landfall a tropical cyclone weakens because it loses its warm ocean energy source."}</GapRule>
        <GapWorked title={"Follow the cyclone"} steps={["A cyclone draws energy from warm ocean water.", "It crosses the coast and moves over land.", "Without warm water it loses its energy source and weakens.", "Heavy rain and flooding can still occur."]} />
        <GapMistake>{"Thinking a cyclone gets stronger over land."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which ocean condition is needed for a tropical cyclone to develop?",
    options: [
      "Cold water below 20 degrees Celsius",
      "Warm water above about 26.5 degrees Celsius",
      "Sea ice near the coast",
      "Very shallow rivers",
    ],
    answer: "Warm water above about 26.5 degrees Celsius",
    explanation: "Very warm ocean water provides the moisture and energy that feed the storm.",
  },
  {
    prompt: "Why do tropical cyclones not usually form directly over the Equator?",
    options: [
      "Pressure is always too high",
      "There is no moisture",
      "The Coriolis force is too weak",
      "The winds are always westerly",
    ],
    answer: "The Coriolis force is too weak",
    explanation: "The storm needs enough Coriolis force to begin rotating, and that force is weakest at the Equator.",
  },
  {
    prompt: "What is the eye of a tropical cyclone?",
    options: [
      "The wettest part of the storm",
      "A zone of calm weather at the centre",
      "The cold front of the storm",
      "The outermost spiral band",
    ],
    answer: "A zone of calm weather at the centre",
    explanation: "The eye is relatively calm and often clearer than the violent eyewall around it.",
  },
  {
    prompt: "Which hazard is caused by seawater being pushed onto the coast by a tropical cyclone?",
    options: [
      "Thermal inversion",
      "Storm surge",
      "Rain shadow",
      "Urban heat island",
    ],
    answer: "Storm surge",
    explanation: "Storm surge is the abnormal rise of sea level driven by strong winds and low pressure.",
  },
  {
    prompt: "Air movement in an anticyclone is mainly:",
    options: [
      "Rapidly rising",
      "Descending",
      "Only horizontal",
      "Cyclonic and converging upward",
    ],
    answer: "Descending",
    explanation: "High-pressure systems are dominated by sinking air, which suppresses cloud formation.",
  },
  {
    prompt: "Which weather is most typical of an anticyclone over South Africa?",
    options: [
      "Unstable air with widespread thunderstorms",
      "Clear and stable conditions",
      "Continuous frontal rain",
      "Permanent storm surge",
    ],
    answer: "Clear and stable conditions",
    explanation: "Subsiding air in an anticyclone leads to drier and more stable weather.",
  },
  {
    prompt: "What usually happens to a tropical cyclone after landfall?",
    options: [
      "It becomes stronger because friction decreases",
      "It weakens because it loses its warm ocean energy source",
      "It turns into an anticyclone immediately",
      "It stops rotating completely within minutes",
    ],
    answer: "It weakens because it loses its warm ocean energy source",
    explanation: "Without warm moist ocean air, the storm cannot maintain its intensity.",
  },
  {
    prompt: "Which pair correctly matches pressure system and vertical air movement?",
    options: [
      "Cyclone - sinking air",
      "Cyclone - rising air",
      "Anticyclone - rising air",
      "Anticyclone - no air movement",
    ],
    answer: "Cyclone - rising air",
    explanation: "Cyclones are associated with converging surface winds and rising air, while anticyclones have sinking air.",
  },
];

const TropicalCyclonesAnticyclonesT1 = () => (
  <CapsSubjectTopic
    title={"Tropical Cyclones and Anticyclones"}
    subtitle={"Warm-core storms, subtropical highs and weather stability"}
    learnSteps={learnSteps}
    task={"gr12-tropical-cyclones-anticyclones-t1"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default TropicalCyclonesAnticyclonesT1;
