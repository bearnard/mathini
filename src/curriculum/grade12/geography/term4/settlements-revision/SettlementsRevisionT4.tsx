import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    image: { src: "/curriculum/grade12/geo/term4/settlements-revision/diagram.webp", alt: "Settlements Revision" },
    title: "Revise rural settlement basics",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Make sure you can define site, situation and the main rural settlement patterns clearly. Then practise explaining why each pattern develops in relation to relief, farming method, water and access routes."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Do not just name the pattern: support the answer with evidence such as clustered buildings, a road alignment or isolated farmsteads."}</p>
      </div>
    ),
  },
  {
    title: "Revise rural challenges and migration",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rural depopulation questions usually involve push factors such as unemployment, drought and weak services, followed by consequences such as ageing populations and declining local services."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Good revision includes linking migration to both the place left behind and the place receiving migrants, because settlement geography often tests these connected impacts."}</p>
      </div>
    ),
  },
  {
    title: "Revise urban structure and hierarchy",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Review the hierarchy from village to metropolitan area, and remember how threshold and range explain why higher-order functions cluster in larger places. Within a city, know the CBD, transition zone, industrial areas and residential zones."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Be able to explain why services or land uses appear in certain places by referring to accessibility, land value, planning history and transport routes."}</p>
      </div>
    ),
  },
  {
    title: "Revise planning and data interpretation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Urban revision should include informal settlements, congestion, pollution, service backlogs and solutions such as public transport, housing upgrades and compact development."}</p>
        <p className="text-lg leading-8 text-slate-600">{"When faced with graphs, maps or GIS outputs, describe what the pattern shows first and then explain the likely causes and planning implications."}</p>
      </div>
    ),
  },
  {
    title: 'Revision Data — South African Urbanisation Trend',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Settlement revision often returns to one key pattern: more people living in towns and cities over time.</p>
        <DataChart
          data={[
                        { year: 1996, urbanRate: 52 },
                        { year: 2005, urbanRate: 59 },
                        { year: 2015, urbanRate: 65 },
                        { year: 2023, urbanRate: 68 },
                      ]}
          xKey="year"
          series={[
                        { key: 'urbanRate', label: 'Urban population (%)', type: 'line', color: '#06b6d4' },
                      ]}
          type="line"
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">This trend helps explain why settlement geography focuses so strongly on urban structure, services, and planning.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which term describes the exact ground on which a settlement is built?",
    options: [
      "Situation",
      "Site",
      "Range",
      "Threshold",
    ],
    answer: "Site",
    explanation: "Site refers to the physical characteristics of the land occupied by the settlement.",
  },
  {
    prompt: "A clustered rural settlement pattern is called:",
    options: [
      "Dispersed",
      "Nucleated",
      "Linear",
      "Radial",
    ],
    answer: "Nucleated",
    explanation: "Nucleated settlements have buildings grouped close together.",
  },
  {
    prompt: "What usually happens to the rural age structure when many young adults migrate out?",
    options: [
      "It becomes younger",
      "It becomes older",
      "It stays exactly the same",
      "It becomes completely urban",
    ],
    answer: "It becomes older",
    explanation: "Out-migration of youth often leaves behind an ageing rural population.",
  },
  {
    prompt: "Which settlement is usually highest in the hierarchy?",
    options: [
      "Village",
      "Hamlet",
      "Metropolitan area",
      "Farmstead",
    ],
    answer: "Metropolitan area",
    explanation: "Metropolitan areas are high-order settlements with large populations and specialised functions.",
  },
  {
    prompt: "Threshold population is needed to:",
    options: [
      "Support a service economically",
      "Measure slope aspect",
      "Identify a watershed",
      "Locate a cold front",
    ],
    answer: "Support a service economically",
    explanation: "A service needs enough customers to remain viable, which is its threshold population.",
  },
  {
    prompt: "Which urban problem is closely linked to inadequate housing supply?",
    options: [
      "Informal settlement growth",
      "Lower accessibility in the CBD",
      "Formation of a delta",
      "Development of a trellis drainage pattern",
    ],
    answer: "Informal settlement growth",
    explanation: "When formal housing is insufficient, informal settlements often expand rapidly.",
  },
  {
    prompt: "Which planning strategy can reduce congestion and improve access to work?",
    options: [
      "Improved public transport",
      "Removing all roads",
      "Moving all jobs to rural areas",
      "Banning mapping",
    ],
    answer: "Improved public transport",
    explanation: "Efficient public transport links people to jobs while reducing traffic pressure.",
  },
  {
    prompt: "In a mapwork answer, the best support for explaining settlement pattern is:",
    options: [
      "Guessing from memory",
      "Evidence from roads, rivers and land use on the map",
      "Ignoring the scale",
      "Only using definitions",
    ],
    answer: "Evidence from roads, rivers and land use on the map",
    explanation: "Settlement questions are strongest when linked directly to visible map evidence.",
  },
];

const SettlementsRevisionT4 = () => (
  <CapsSubjectTopic
    title={"Settlements Revision"}
    subtitle={"Rural and urban concepts for exam consolidation"}
    learnSteps={learnSteps}
    task={"gr12-settlements-revision-t4"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default SettlementsRevisionT4;
