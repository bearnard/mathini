import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import ClimateGraph from '@/components/subjects/ClimateGraph';


const learnSteps = [
  {
    title: "Why valleys have special climates",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"At night, valley slopes lose heat quickly by radiation. Cold dense air then drains downslope and collects on the valley floor, producing lower temperatures, frost pockets and radiation inversions."}</p>
        <p className="text-lg leading-8 text-slate-600">{"During the day, temperatures rise again and warm air can move upslope. Farmers pay close attention to these patterns because frost can damage orchards and vineyards planted in low-lying positions."}</p>
      </div>
    ),
  },
  {
    title: "Slope aspect and local wind systems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Aspect refers to the direction a slope faces. In the Southern Hemisphere, north-facing slopes receive more direct solar energy and are usually warmer and drier than south-facing slopes."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Mountain breezes blow downslope at night when air cools, while valley breezes blow upslope during the day as the heated air rises. These winds help explain daily temperature and moisture differences in mountainous landscapes."}</p>
      </div>
    ),
  },
  {
    title: "Urban climates and the heat island",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Cities often form urban heat islands because tar, concrete and buildings absorb and store more heat than vegetated rural areas. Waste heat from cars, industry and air conditioners adds to the warming effect."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Urban areas also have less evaporation because vegetation is reduced. As a result, night-time temperatures stay higher in the city than in nearby rural zones."}</p>
      </div>
    ),
  },
  {
    title: "Pollution and planning responses",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Temperature inversions can trap smoke and industrial pollutants close to the ground, especially in valley bottoms and large cities. This creates a pollution dome and lowers air quality."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Urban planners can reduce heat and pollution through green belts, more trees, reflective building materials, better public transport and zoning that separates heavy industry from dense residential areas."}</p>
      </div>
    ),
  },
  {
    title: 'Climate Data — Johannesburg Urban Heat Island',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">These two climatographs compare a built-up urban site with a nearby rural fringe. The rainfall pattern is similar, but the city stays warmer through the year because buildings and tar store heat.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <ClimateGraph
            station="Johannesburg CBD"
            data={[
                      { month: 'Jan', rainfall: 114, temp: 21 },
                      { month: 'Feb', rainfall: 109, temp: 22 },
                      { month: 'Mar', rainfall: 89, temp: 20 },
                      { month: 'Apr', rainfall: 38, temp: 17 },
                      { month: 'May', rainfall: 13, temp: 14 },
                      { month: 'Jun', rainfall: 8, temp: 11 },
                      { month: 'Jul', rainfall: 4, temp: 11 },
                      { month: 'Aug', rainfall: 6, temp: 13 },
                      { month: 'Sep', rainfall: 23, temp: 16 },
                      { month: 'Oct', rainfall: 60, temp: 18 },
                      { month: 'Nov', rainfall: 107, temp: 20 },
                      { month: 'Dec', rainfall: 125, temp: 21 },
                    ]}
          />

          <ClimateGraph
            station="Lanseria rural fringe"
            data={[
                      { month: 'Jan', rainfall: 114, temp: 19 },
                      { month: 'Feb', rainfall: 109, temp: 20 },
                      { month: 'Mar', rainfall: 89, temp: 18 },
                      { month: 'Apr', rainfall: 38, temp: 15 },
                      { month: 'May', rainfall: 13, temp: 12 },
                      { month: 'Jun', rainfall: 8, temp: 9 },
                      { month: 'Jul', rainfall: 4, temp: 9 },
                      { month: 'Aug', rainfall: 6, temp: 11 },
                      { month: 'Sep', rainfall: 23, temp: 14 },
                      { month: 'Oct', rainfall: 60, temp: 16 },
                      { month: 'Nov', rainfall: 107, temp: 18 },
                      { month: 'Dec', rainfall: 125, temp: 19 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">Urban heat islands are most noticeable at night when the city releases stored heat more slowly than the surrounding countryside.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why are valley floors often colder than the slopes at night?",
    options: [
      "They receive more sunshine",
      "Cold dense air drains downslope and collects there",
      "Wind friction makes them hotter",
      "Clouds always form first on the floor",
    ],
    answer: "Cold dense air drains downslope and collects there",
    explanation: "Cold air is dense, so it sinks and accumulates on the valley floor, creating a frost pocket.",
  },
  {
    prompt: "What is a frost pocket?",
    options: [
      "A warm shelf on a mountain slope",
      "A low-lying place where cold air collects",
      "The eye of a cyclone",
      "A wetland created by spring tides",
    ],
    answer: "A low-lying place where cold air collects",
    explanation: "Frost pockets form in low-lying valley bottoms where cold air settles at night.",
  },
  {
    prompt: "In the Southern Hemisphere, which slope aspect is usually warmer?",
    options: [
      "South-facing slope",
      "North-facing slope",
      "East-facing slope only",
      "West-facing slope only",
    ],
    answer: "North-facing slope",
    explanation: "North-facing slopes receive more direct solar radiation in the Southern Hemisphere.",
  },
  {
    prompt: "A valley breeze usually blows:",
    options: [
      "Down the slope during the day",
      "Up the slope during the day",
      "From the sea at night",
      "Only in winter",
    ],
    answer: "Up the slope during the day",
    explanation: "During the day, heated air rises and a valley breeze moves upslope.",
  },
  {
    prompt: "What is the main cause of the urban heat island effect?",
    options: [
      "Cities are closer to the Sun",
      "Urban surfaces absorb and store heat while vegetation is limited",
      "Cities always receive more rain",
      "Rural areas produce more greenhouse gases",
    ],
    answer: "Urban surfaces absorb and store heat while vegetation is limited",
    explanation: "Built surfaces and reduced vegetation make cities warmer, especially at night.",
  },
  {
    prompt: "What is a temperature inversion?",
    options: [
      "Air becomes colder with height",
      "A layer where warmer air lies above colder air near the surface",
      "A sudden drop in pressure before a front",
      "A permanent global warming trend",
    ],
    answer: "A layer where warmer air lies above colder air near the surface",
    explanation: "During an inversion, the normal decrease of temperature with height is reversed.",
  },
  {
    prompt: "Which urban planning action can help reduce heat island intensity?",
    options: [
      "Removing all parks",
      "Increasing tree cover and green spaces",
      "Building more tarred parking lots",
      "Concentrating all industry in the CBD",
    ],
    answer: "Increasing tree cover and green spaces",
    explanation: "Trees and green areas increase shade and evapotranspiration, which cool the city.",
  },
  {
    prompt: "Why is air pollution often worse during an inversion?",
    options: [
      "Pollutants are trapped close to the ground",
      "Winds become stronger than normal",
      "Rainfall washes particles upward",
      "The ozone layer disappears",
    ],
    answer: "Pollutants are trapped close to the ground",
    explanation: "The warm layer above acts like a lid, preventing polluted air from rising and dispersing.",
  },
];

const LocalClimatesT1 = () => (
  <CapsSubjectTopic
    title={"Local Climates"}
    subtitle={"Valley climates, slope aspect and urban heat islands"}
    learnSteps={learnSteps}
    task={"gr12-local-climates-t1"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default LocalClimatesT1;
