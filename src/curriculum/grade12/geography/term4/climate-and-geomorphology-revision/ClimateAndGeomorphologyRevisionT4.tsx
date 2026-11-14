import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import ClimateGraph from '@/components/subjects/ClimateGraph';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    image: { src: "/curriculum/grade12/geo/term4/climate-and-geomorphology-revision/diagram.webp", alt: "Climate and Geomorphology Revision" },
    title: "Revise the major weather systems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"For synoptic geography, remember how mid-latitude cyclones, tropical cyclones and anticyclones differ in pressure, air movement, cloud and rainfall. Match each system to the correct South African weather conditions and season."}</p>
        <p className="text-lg leading-8 text-slate-600">{"A strong exam answer names the system, explains why air rises or sinks, and then links that process to actual weather such as frontal rain, clear skies, flooding or frost risk."}</p>
      </div>
    ),
  },
  {
    title: "Revise local climates",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Local climate questions often focus on slope aspect, mountain and valley breezes, temperature inversion, frost pockets and urban heat islands. The key is to explain how slope, surface cover and time of day affect heating and cooling."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Use precise terms such as radiation cooling, cold-air drainage, pollution dome and adiabatic warming when answering extended responses."}</p>
      </div>
    ),
  },
  {
    title: "Revise fluvial systems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Know the parts of a drainage basin, types of erosion, methods of transport, drainage patterns and how river characteristics change from upper to lower course. Always connect process to landform."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In mapwork, identify meanders, floodplains, watersheds and confluences accurately. In data questions, explain how slope, discharge and load influence river behaviour."}</p>
      </div>
    ),
  },
  {
    title: "Build exam technique",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Revision is not only about facts. Practice reading command words, quoting evidence from maps and diagrams, and organising answers in a clear cause-and-effect sequence."}</p>
        <p className="text-lg leading-8 text-slate-600">{"If a question asks for management, include sustainable actions such as wetland protection, controlled development on floodplains, urban greening and disaster preparedness."}</p>
      </div>
    ),
  },
  {
    title: 'Revision Data — Climate and Geomorphic Agents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">These summary visuals bring together a winter-rainfall climate example and a comparison of major geomorphic agents that shape the landscape.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">Cape Town climatograph</p>
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

          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">Geomorphic agents summary</p>
            <DataChart
              data={[
                            { agent: 'Rivers', index: 85 },
                            { agent: 'Waves', index: 70 },
                            { agent: 'Wind', index: 45 },
                            { agent: 'Ice', index: 35 },
                          ]}
              xKey="agent"
              series={[
                            { key: 'index', label: 'Relative landscape-shaping index', type: 'bar', color: '#8b5cf6' },
                          ]}
              yLabel="Index"
              height={220}
            />
          </div>
        </div>

        <p className="text-sm text-slate-500">Revision is easier when learners can connect climate patterns with the processes that weather, erode, and reshape the land.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which pressure system is associated with descending air and stable weather?",
    options: [
      "Tropical cyclone",
      "Anticyclone",
      "Mid-latitude cyclone only",
      "Cold front",
    ],
    answer: "Anticyclone",
    explanation: "Anticyclones are high-pressure systems with sinking air and generally stable conditions.",
  },
  {
    prompt: "Why is a north-facing slope in the Southern Hemisphere usually warmer?",
    options: [
      "It receives more direct solar radiation",
      "It is always at lower altitude",
      "It has more rivers",
      "It is closer to the Equator in every case",
    ],
    answer: "It receives more direct solar radiation",
    explanation: "North-facing slopes receive the sun’s rays more directly in the Southern Hemisphere.",
  },
  {
    prompt: "What is the main boundary of a drainage basin called?",
    options: [
      "Confluence",
      "Watershed",
      "Floodplain",
      "Delta",
    ],
    answer: "Watershed",
    explanation: "The watershed is the high boundary that separates one drainage basin from another.",
  },
  {
    prompt: "Which river process wears transported material into smaller, rounder pieces?",
    options: [
      "Attrition",
      "Condensation",
      "Deflation",
      "Transpiration",
    ],
    answer: "Attrition",
    explanation: "Attrition happens when rock fragments collide and break into smaller, smoother pieces.",
  },
  {
    prompt: "What is a key revision strategy for mapwork questions?",
    options: ['Ignore the map evidence in the answers', 'Use map evidence to justify each answer', 'Memorise definitions and nothing else', 'Avoid the use of direction terms'],
    answer: 'Use map evidence to justify each answer',
    explanation: "Mapwork answers are stronger when they refer directly to what is visible on the map or diagram.",
  },
  {
    prompt: "Which system is most likely to bring heavy rain and storm surge to a coastline?",
    options: [
      "Anticyclone",
      "Tropical cyclone",
      "Kalahari High",
      "Temperature inversion",
    ],
    answer: "Tropical cyclone",
    explanation: "Tropical cyclones can produce destructive winds, intense rain and storm surge along the coast.",
  },
  {
    prompt: "Cold air collecting in a valley bottom at night creates a:",
    options: [
      "Heat island",
      "Frost pocket",
      "Warm front",
      "Delta",
    ],
    answer: "Frost pocket",
    explanation: "Cold dense air drains downslope and settles in the valley bottom, creating a frost pocket.",
  },
  {
    prompt: "Which action is part of good catchment management?",
    options: [
      "Building on floodplains without controls",
      "Protecting wetlands and reducing erosion",
      "Removing all vegetation from slopes",
      "Allowing pollution into rivers",
    ],
    answer: "Protecting wetlands and reducing erosion",
    explanation: "Wetland protection and erosion control help improve water quality and reduce flood risk.",
  },
];

const ClimateAndGeomorphologyRevisionT4 = () => (
  <CapsSubjectTopic
    title={"Climate and Geomorphology Revision"}
    subtitle={"Key synoptic, local climate and river-system ideas for exams"}
    learnSteps={learnSteps}
    task={"gr12-climate-and-geomorphology-revision-t4"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default ClimateAndGeomorphologyRevisionT4;
