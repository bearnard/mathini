import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    image: { src: "/curriculum/grade12/geo/term2/site-situation-settlement-patterns/diagram.webp", alt: "Site, Situation and Settlement Patterns" },
    title: "Understanding site and situation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Site refers to the actual ground on which a settlement stands, including slope, water supply, soil, drainage and building conditions. Situation refers to the settlement’s relative position to routes, markets, resources and other settlements."}</p>
        <p className="text-lg leading-8 text-slate-600">{"A good site may offer flat well-drained land and reliable water, while a good situation may provide access to roads, harbours or mining areas. Both factors help explain settlement growth."}</p>
      </div>
    ),
  },
  {
    title: "Rural settlement patterns",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rural settlements may be nucleated, dispersed or linear. A nucleated settlement has buildings clustered together, a dispersed settlement has homesteads spread apart, and a linear settlement develops along a road, river or valley floor."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Patterns are shaped by land ownership, relief, security, farming method, water availability and transport routes. Learners should be able to identify the pattern from an aerial photo or map."}</p>
      </div>
    ),
  },
  {
    title: "Physical and human influences",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"People prefer sites with water, fertile soil, moderate climate, gentle gradient and low hazard risk. Human factors such as employment, services, accessibility and historical decisions also strongly influence settlement location."}</p>
        <p className="text-lg leading-8 text-slate-600">{"For example, some South African towns began as mission stations, mining camps or transport nodes and later expanded because their situation connected them to wider regional economies."}</p>
      </div>
    ),
  },
  {
    title: "Applying these ideas in mapwork",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In examination questions, learners may be asked to explain why a settlement developed near a river terrace rather than on a floodplain, or why a town expanded along a major route."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Always link the pattern to evidence on the map: contour spacing, roads, rivers, railway lines, land use and the location of services all help justify the answer."}</p>
      </div>
    ),
  },
  {
    title: 'Settlement Data — Important Site Factors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Site and situation can be summarised with a simple index. Reliable water, flat land, and route access are usually among the most important settlement factors.</p>
        <DataChart
          data={[
                        { factor: 'Water supply', score: 95 },
                        { factor: 'Flat land', score: 90 },
                        { factor: 'Route access', score: 88 },
                        { factor: 'Fertile soils', score: 76 },
                        { factor: 'Defensive height', score: 55 },
                      ]}
          xKey="factor"
          series={[
                        { key: 'score', label: 'Importance score', type: 'bar', color: '#8b5cf6' },
                      ]}
          yLabel="Index"
          height={240}
        />

        <p className="text-sm text-slate-500">These factors help explain why some places attract clustered settlements while others remain sparsely settled.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does site mean in settlement geography?",
    options: [
      "The exact piece of land on which a settlement is built",
      "The region a settlement trades with",
      "The number of services in a town",
      "The migration path into a city",
    ],
    answer: "The exact piece of land on which a settlement is built",
    explanation: "Site focuses on the physical characteristics of the land occupied by the settlement.",
  },
  {
    prompt: "Situation refers to a settlement’s:",
    options: [
      "Soil colour only",
      "Relative location in relation to routes, markets and other places",
      "House style",
      "Average annual rainfall only",
    ],
    answer: "Relative location in relation to routes, markets and other places",
    explanation: "Situation describes the settlement’s position relative to surrounding features and connections.",
  },
  {
    prompt: "Which rural settlement pattern has buildings clustered together?",
    options: [
      "Dispersed",
      "Nucleated",
      "Linear",
      "Radial",
    ],
    answer: "Nucleated",
    explanation: "In a nucleated settlement, homes and services are grouped closely together.",
  },
  {
    prompt: "A settlement stretched along a river valley is best described as:",
    options: [
      "Linear",
      "Dispersed",
      "Circular",
      "Hierarchical",
    ],
    answer: "Linear",
    explanation: "Linear settlements develop in a line along a transport route, river or valley.",
  },
  {
    prompt: "Which physical factor most strongly supports farming settlement?",
    options: [
      "Infertile soil",
      "Reliable water supply",
      "Steep unstable slopes",
      "Distance from all roads",
    ],
    answer: "Reliable water supply",
    explanation: "Water is essential for people, livestock and crops, so it strongly influences settlement location.",
  },
  {
    prompt: "Which statement about dispersed settlements is correct?",
    options: [
      "Homesteads are spread far apart",
      "They always occur in CBDs",
      "They need a harbour to survive",
      "They are only found in deserts",
    ],
    answer: "Homesteads are spread far apart",
    explanation: "Dispersed settlements consist of isolated farms or homes separated by relatively large distances.",
  },
  {
    prompt: "Why might a town develop at a transport junction?",
    options: [
      "Because the site is always mountainous",
      "Because its situation improves trade and accessibility",
      "Because no people can move away",
      "Because it avoids all pollution",
    ],
    answer: "Because its situation improves trade and accessibility",
    explanation: "A good transport situation connects people, goods and services efficiently.",
  },
  {
    prompt: "Which area is usually a poor site for permanent settlement?",
    options: [
      "Flat well-drained terrace",
      "Floodplain with frequent flooding",
      "Gentle slope near a road",
      "Area near a reliable spring",
    ],
    answer: "Floodplain with frequent flooding",
    explanation: "Flood-prone areas create danger and damage risk for permanent settlement.",
  },
];

const SiteSituationSettlementPatternsT2 = () => (
  <CapsSubjectTopic
    title={"Site, Situation and Settlement Patterns"}
    subtitle={"Why settlements develop where they do"}
    learnSteps={learnSteps}
    task={"gr12-site-situation-settlement-patterns-t2"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default SiteSituationSettlementPatternsT2;
