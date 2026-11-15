import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import ClimateGraph from '@/components/subjects/ClimateGraph';


import { MidLatitudeCyclone } from '@/components/diagrams/geography/Geo12Pictures';

const learnSteps = [
  {
    title: "Where mid-latitude cyclones form",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Mid-latitude cyclones develop along the polar front where cold polar air meets warmer subtropical air in the belt of westerlies. They usually move from west to east and are an important source of winter rainfall for the south-western parts of South Africa."}</p>
        <p className="text-lg leading-8 text-slate-600">{"On a synoptic chart, the cyclone is linked to a low-pressure cell with fronts attached. The warm front usually moves ahead of the low, while the cold front catches up more quickly from behind."}</p>
        <MidLatitudeCyclone />
      </div>
    ),
  },
  {
    title: "The life cycle of the cyclone",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The cyclone begins as a wave disturbance on the polar front. As pressure drops, warm air is forced to rise over colder air, clouds develop and the system intensifies into a mature cyclone with a clear warm and cold front."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Later, the faster cold front catches the warm front and forms an occluded front. At this stage the warm sector is lifted off the ground, the temperature contrast weakens and the cyclone starts to decay."}</p>
      </div>
    ),
  },
  {
    title: "Weather changes as fronts pass",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Ahead of the warm front, high cloud increases gradually, pressure falls and light steady rain may begin. The warm sector is often milder and more humid."}</p>
        <p className="text-lg leading-8 text-slate-600">{"When the cold front arrives, cumulonimbus clouds, heavier showers, a sudden drop in temperature and a strong wind shift are common. After the front passes, pressure rises and the air becomes colder and clearer."}</p>
      </div>
    ),
  },
  {
    title: "Why this matters in South Africa",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Mid-latitude cyclones are critical for water supply in the Western Cape because they bring frontal rainfall during winter. Their tracks also affect rough seas, frost risk after a front and daily weather forecasts."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In exams, learners must read isobars, identify the front nearest to a place, and explain how cloud, rainfall, wind direction and temperature change before and after frontal passage."}</p>
      </div>
    ),
  },
  {
    title: 'Climate Data — Cape Town Winter Rainfall Pattern',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Cape Town is a good South African example of a mid-latitude winter-rainfall climate. Rain peaks in winter, while summer is warmer and much drier.</p>
        <div className="mx-auto max-w-3xl">
          <ClimateGraph
            station="Cape Town"
            data={[
                      { month: 'Jan', rainfall: 15, temp: 21 },
                      { month: 'Feb', rainfall: 17, temp: 21 },
                      { month: 'Mar', rainfall: 20, temp: 20 },
                      { month: 'Apr', rainfall: 41, temp: 17 },
                      { month: 'May', rainfall: 69, temp: 15 },
                      { month: 'Jun', rainfall: 93, temp: 13 },
                      { month: 'Jul', rainfall: 82, temp: 12 },
                      { month: 'Aug', rainfall: 77, temp: 13 },
                      { month: 'Sep', rainfall: 40, temp: 14 },
                      { month: 'Oct', rainfall: 30, temp: 16 },
                      { month: 'Nov', rainfall: 14, temp: 18 },
                      { month: 'Dec', rainfall: 17, temp: 20 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">This pattern links closely to the seasonal movement of the westerlies and passing cold fronts.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "In which global wind belt do mid-latitude cyclones generally travel?",
    options: [
      "Trade winds",
      "Westerlies",
      "Polar easterlies",
      "Monsoon winds",
    ],
    answer: "Westerlies",
    explanation: "These cyclones develop and move in the belt of westerly winds, so they usually travel from west to east.",
  },
  {
    prompt: "Which front usually moves faster in a mid-latitude cyclone?",
    options: [
      "Warm front",
      "Cold front",
      "Stationary front",
      "Occluded front",
    ],
    answer: "Cold front",
    explanation: "The cold front moves faster and eventually catches up with the warm front to form an occluded front.",
  },
  {
    prompt: "What happens to air along the warm front of a mid-latitude cyclone?",
    options: [
      "Warm air sinks below cold air",
      "Warm air rises gently over cold air",
      "Cold air rises over warm air",
      "Air remains completely stable",
    ],
    answer: "Warm air rises gently over cold air",
    explanation: "Warm, less dense air is forced to rise gradually over the colder air mass along the warm front.",
  },
  {
    prompt: "Which South African region relies strongly on winter rainfall from mid-latitude cyclones?",
    options: [
      "Lowveld of Mpumalanga",
      "Western Cape",
      "Kalahari",
      "Limpopo Valley",
    ],
    answer: "Western Cape",
    explanation: "The south-western Cape has a Mediterranean climate and receives most of its winter rain from frontal systems.",
  },
  {
    prompt: "Which weather change is most likely when a cold front passes?",
    options: [
      "Pressure rises and temperature drops",
      "Pressure rises and temperature rises sharply",
      "Pressure stays constant and skies clear immediately",
      "Humidity disappears before any cloud forms",
    ],
    answer: "Pressure rises and temperature drops",
    explanation: "After the cold front passes, colder air enters the area and pressure starts to rise.",
  },
  {
    prompt: "What is an occluded front?",
    options: [
      "A front with no cloud",
      "The stage when the cold front overtakes the warm front",
      "A boundary between land and sea breezes",
      "A front that forms only in summer",
    ],
    answer: "The stage when the cold front overtakes the warm front",
    explanation: "Occlusion happens when the faster cold front catches the warm front and lifts the warm sector off the surface.",
  },
  {
    prompt: "Why does rainfall often increase near the cold front?",
    options: [
      "Warm air is forced to rise steeply",
      "The air becomes very dry",
      "The front removes all clouds",
      "Pressure becomes permanently high",
    ],
    answer: "Warm air is forced to rise steeply",
    explanation: "The steep uplift along the cold front causes stronger condensation, tall clouds and heavier rain or showers.",
  },
  {
    prompt: "On a synoptic chart, a mid-latitude cyclone is centred on a:",
    options: [
      "High-pressure cell",
      "Low-pressure cell",
      "Heat island",
      "Rain shadow",
    ],
    answer: "Low-pressure cell",
    explanation: "Cyclones are low-pressure systems with converging surface winds and rising air.",
  },
];

const MidLatitudeCyclonesT1 = () => (
  <CapsSubjectTopic
    title={"Mid-Latitude Cyclones"}
    subtitle={"Fronts, life cycle and South African winter weather"}
    learnSteps={learnSteps}
    task={"gr12-mid-latitude-cyclones-t1"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default MidLatitudeCyclonesT1;
