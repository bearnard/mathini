import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { DrainageBasin } from '@/components/diagrams/geography/Geo12Pictures';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps = [
  {
    title: "Parts of a drainage basin",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A drainage basin is the area drained by a main river and its tributaries. The edge of the basin is the watershed, and the point where two streams meet is called a confluence."}</p>
        <DrainageBasin />
        <p className="text-lg leading-8 text-slate-600">{"Other key ideas include source, mouth, tributary, distributary, catchment area and stream order. These features are often tested in mapwork and labelled diagrams."}</p>
      </div>
    ),
  },
  {
    title: "Erosion, transport and deposition",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rivers shape the landscape through erosion, transport and deposition. Hydraulic action, abrasion, attrition and solution remove and wear away material, especially in the youthful stage of the river."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Load is transported by traction, saltation, suspension and solution. When the river loses energy, it deposits material, often forming floodplains, meanders, levees and deltas."}</p>
      </div>
    ),
  },
  {
    title: "Drainage patterns and river profiles",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Drainage patterns such as dendritic, trellis, radial and rectangular reflect rock structure and slope. Learners must connect the pattern to the landscape shown on maps and satellite images."}</p>
        <p className="text-lg leading-8 text-slate-600">{"A river profile changes from steep upper course to gentle lower course. Vertical erosion dominates upstream, while lateral erosion and deposition become more important downstream."}</p>
      </div>
    ),
  },
  {
    title: "Managing the catchment",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Healthy catchments reduce flood risk and improve water quality. Good management includes controlling erosion, protecting wetlands, limiting pollution, maintaining vegetation cover and regulating development on floodplains."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In South Africa, catchment management is essential because rainfall is uneven and dams, farms, mines and towns all depend on reliable water supply. Exams often ask for human impacts and sustainable solutions."}</p>
      </div>
    ),
  },
  {
    title: 'River Data — Mean Monthly Flow in the Vaal Catchment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">River flow changes through the year as rainfall, evaporation, and dam releases vary. A simple hydrograph helps learners connect climate to discharge.</p>
        <DataChart
          data={[
                        { month: 'Jan', flow: 180 },
                        { month: 'Feb', flow: 210 },
                        { month: 'Mar', flow: 190 },
                        { month: 'Apr', flow: 140 },
                        { month: 'May', flow: 95 },
                        { month: 'Jun', flow: 70 },
                        { month: 'Jul', flow: 65 },
                        { month: 'Aug', flow: 72 },
                        { month: 'Sep', flow: 88 },
                        { month: 'Oct', flow: 120 },
                        { month: 'Nov', flow: 155 },
                        { month: 'Dec', flow: 175 },
                      ]}
          xKey="month"
          series={[
                        { key: 'flow', label: 'Mean flow (m³/s)', type: 'line', color: '#2563eb' },
                      ]}
          type="line"
          yLabel="m³/s"
          height={240}
        />

        <p className="text-sm text-slate-500">Catchment managers use flow data to plan water storage, flood control, irrigation, and environmental protection.</p>
      </div>
    ),
  },
  {
    title: "Living on a floodplain",
    content: (
      <div className="space-y-4">
        <GapRule>{"A floodplain is flat land beside a river that the river covers when it overflows. Homes built there risk being damaged and people being hurt whenever a big flood comes."}</GapRule>
        <GapWorked title={"Assess the risk"} steps={["A floodplain is flat land beside a river that floods naturally.", "Houses built there are covered when the river floods.", "People and property are damaged.", "Planning laws and flood lines limit building on floodplains."]} />
        <GapMistake>{"Thinking floodplains are safe because the land is flat and fertile."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is a watershed?",
    options: ['The lowest point in the valley of a river', 'The boundary between one drainage basin and another', 'A place where a river flows into the sea', 'A floodplain that lies next to a river'],
    answer: 'The boundary between one drainage basin and another',
    explanation: "A watershed is the high ground that marks the edge of a drainage basin.",
  },
  {
    prompt: "A smaller stream that joins a larger river is called a:",
    options: [
      "Levee",
      "Tributary",
      "Waterfall",
      "Estuary",
    ],
    answer: "Tributary",
    explanation: "Tributaries feed water into the main river channel.",
  },
  {
    prompt: "Which process describes a river carrying larger pebbles and boulders by rolling them along the bed?",
    options: [
      "Suspension",
      "Traction",
      "Condensation",
      "Evaporation",
    ],
    answer: "Traction",
    explanation: "Traction is the rolling of larger particles along the river bed by flowing water.",
  },
  {
    prompt: "Where is vertical erosion usually strongest?",
    options: [
      "Upper course of the river",
      "Lower course near the mouth",
      "Inside a delta",
      "On the floodplain only",
    ],
    answer: "Upper course of the river",
    explanation: "The steep gradient in the upper course gives the river energy to cut downwards.",
  },
  {
    prompt: "Which drainage pattern often develops on uniformly resistant rock?",
    options: [
      "Trellis",
      "Dendritic",
      "Radial",
      "Annular",
    ],
    answer: "Dendritic",
    explanation: "Dendritic drainage looks like tree branches and is common where rock resistance is fairly uniform.",
  },
  {
    prompt: "Why are wetlands important in a catchment?",
    options: ['They always increase the erosion of the land', 'They store water, filter pollutants and lower flood peaks', 'They stop all evaporation from the catchment', 'They make the rivers flow uphill'],
    answer: 'They store water, filter pollutants and lower flood peaks',
    explanation: "Wetlands slow runoff, trap sediment and help clean and store water.",
  },
  {
    prompt: "Building houses on a floodplain mainly increases the risk of:",
    options: [
      "Drought only",
      "Flood damage to people and property",
      "Mountain breezes",
      "Sea-level rise in all places",
    ],
    answer: "Flood damage to people and property",
    explanation: "Floodplains are naturally vulnerable to overflow, so development there raises hazard levels.",
  },
  {
    prompt: "At the confluence of two streams, you would find:",
    options: [
      "A watershed",
      "The meeting point of the channels",
      "The source of the river",
      "The highest point in the basin",
    ],
    answer: "The meeting point of the channels",
    explanation: "A confluence is where two rivers or streams join.",
  },
];

const FluvialProcessesCatchmentManagementT1 = () => (
  <CapsSubjectTopic
    title={"Fluvial Processes and Catchment Management"}
    subtitle={"Drainage basins, river processes and protecting water resources"}
    learnSteps={learnSteps}
    task={"gr12-fluvial-processes-catchment-management-t1"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default FluvialProcessesCatchmentManagementT1;
