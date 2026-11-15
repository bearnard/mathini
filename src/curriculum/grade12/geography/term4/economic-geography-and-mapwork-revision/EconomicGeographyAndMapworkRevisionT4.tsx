import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    title: "Revise sector classification",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Start by making sure you can classify activities into primary, secondary, tertiary and quaternary sectors quickly. This is the foundation for interpreting diagrams about employment, GDP and value chains."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Also revise the difference between the formal and informal sector because exam questions often ask learners to compare job security, regulation and economic contribution."}</p>
      </div>
    ),
  },
  {
    title: "Revise agriculture, mining and industry together",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Economic geography works best when connected. Agriculture depends on climate, soils, water and markets; mining depends on geology and transport; manufacturing depends on inputs, energy, labour and access to markets."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Revision should therefore focus on the factors that explain location as well as the environmental and social impacts of each activity."}</p>
      </div>
    ),
  },
  {
    title: "Revise corridors, GIS and data interpretation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"IDZs, SEZs and development corridors are best revised together with transport routes, ports and logistics. GIS helps reveal where industry clusters, where service gaps exist and how land use changes over time."}</p>
        <p className="text-lg leading-8 text-slate-600">{"When reading a graph or map, identify the dominant pattern first, then explain it using relevant geographic concepts instead of simply repeating the data."}</p>
      </div>
    ),
  },
  {
    title: "Prepare for exam application",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In final revision, practise short structured answers and paragraph responses. Use South African examples such as the Western Cape fruit belt, the platinum belt, Durban port logistics or the informal sector in urban nodes."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Strong final answers combine terminology, evidence and judgement. They explain not only what is happening, but also why it matters for development and sustainability."}</p>
      </div>
    ),
  },
  {
    title: 'Revision Data — Contribution of Economic Sectors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A simple sector chart helps learners revise how different parts of the economy contribute to national output and mapwork patterns.</p>
        <DataChart
          data={[
                        { sector: 'Services', share: 62 },
                        { sector: 'Manufacturing', share: 13 },
                        { sector: 'Mining', share: 6 },
                        { sector: 'Agriculture', share: 2 },
                        { sector: 'Other', share: 17 },
                      ]}
          xKey="sector"
          series={[
                        { key: 'share', label: 'Share of GDP (%)', type: 'bar', color: '#3b82f6' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Economic data supports mapwork because it helps explain where jobs, transport routes, and industrial activities are concentrated.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which sector includes transport and retail services?",
    options: [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quaternary",
    ],
    answer: "Tertiary",
    explanation: "Transport and retail are service activities, so they belong to the tertiary sector.",
  },
  {
    prompt: "Food security depends on more than food production because households also need:",
    options: [
      "Access and affordability",
      "Only colder weather",
      "Fewer roads",
      "Less market information",
    ],
    answer: "Access and affordability",
    explanation: "People must be able to obtain and afford food, not only have it produced somewhere in the country.",
  },
  {
    prompt: "Which factor most directly explains where mining occurs?",
    options: [
      "Access to mineral deposits",
      "Presence of a CBD",
      "A high threshold population",
      "A polar climate",
    ],
    answer: "Access to mineral deposits",
    explanation: "Mining location is strongly controlled by geology and the presence of extractable mineral resources.",
  },
  {
    prompt: "Why are ports important in development corridors?",
    options: ['They lower all of the rainfall in a region', 'They link production areas to world trade routes', 'They take the place of all of the highways', 'They create anticyclones over the coastline'],
    answer: 'They link production areas to world trade routes',
    explanation: "Ports are major gateways for exports and imports, making them key nodes in corridor development.",
  },
  {
    prompt: "A GIS layer showing clinics, roads and population density would help planners to:",
    options: [
      "Choose where services are lacking",
      "Predict river erosion only",
      "Measure only altitude",
      "Classify cold fronts",
    ],
    answer: "Choose where services are lacking",
    explanation: "Combining layers helps identify underserved areas and support planning decisions.",
  },
  {
    prompt: "Which statement about the informal sector is correct?",
    options: [
      "It plays no role in employment",
      "It provides livelihoods for many people",
      "It is always high-tech research work",
      "It is identical to the quaternary sector",
    ],
    answer: "It provides livelihoods for many people",
    explanation: "The informal sector is an important source of income and employment, especially where formal jobs are limited.",
  },
  {
    prompt: "What should you do first when answering a graph interpretation question?",
    options: ['Ignore the title and the axes', 'Identify the main pattern shown by the data', 'Write a long definition and nothing else', 'Guess the answer from memory'],
    answer: 'Identify the main pattern shown by the data',
    explanation: "Start by reading the graph carefully and describing the dominant trend before explaining it.",
  },
  {
    prompt: "Which response best links economic growth to sustainability?",
    options: [
      "Ignore pollution if jobs are created",
      "Balance development with environmental management",
      "Stop all transport development",
      "Avoid all planning",
    ],
    answer: "Balance development with environmental management",
    explanation: "Sustainable development aims to grow the economy while protecting people and the environment.",
  },
];

const EconomicGeographyAndMapworkRevisionT4 = () => (
  <CapsSubjectTopic
    title={"Economic Geography and Mapwork Revision"}
    subtitle={"Consolidating sectors, resources, corridors, GIS and exam technique"}
    learnSteps={learnSteps}
    task={"gr12-economic-geography-and-mapwork-revision-t4"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default EconomicGeographyAndMapworkRevisionT4;
