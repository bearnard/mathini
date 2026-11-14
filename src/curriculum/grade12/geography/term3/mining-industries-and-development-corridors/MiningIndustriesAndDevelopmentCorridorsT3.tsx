import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    title: "Why mining matters",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Mining has long shaped South Africa’s economy through gold, platinum, coal, iron ore, manganese and other minerals. It provides export income, links to transport infrastructure and supports related industries such as engineering and chemicals."}</p>
        <p className="text-lg leading-8 text-slate-600">{"However, mining also creates environmental challenges including land degradation, air and water pollution, acid mine drainage and high water demand. These costs must be managed carefully."}</p>
      </div>
    ),
  },
  {
    title: "Factors that influence industrial location",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Industries choose locations based on access to raw materials, labour, markets, transport, energy, water, land and government support. Some industries cluster near ports, while others locate close to mineral or agricultural inputs."}</p>
        <p className="text-lg leading-8 text-slate-600">{"For example, heavy industries often prefer sites with space, power supply and good freight links. Lighter and high-value industries may prioritise market access, skilled labour and logistics efficiency."}</p>
      </div>
    ),
  },
  {
    title: "IDZs, SDIs and corridors",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Industrial Development Zones and Special Economic Zones are areas where infrastructure and incentives aim to attract export-oriented industry. Spatial Development Initiatives and corridors focus investment along routes with strong development potential."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Examples include corridor development linked to major ports and highways, where industry, logistics and trade can reinforce each other. These strategies aim to stimulate regional growth and job creation."}</p>
      </div>
    ),
  },
  {
    title: "Evaluating success and sustainability",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Development corridors can improve connectivity and attract investment, but success depends on skills, governance, reliable electricity, water and transport efficiency. Without these, benefits may be uneven or short-lived."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In exams, learners should weigh both positives and negatives: economic growth and jobs on one side, and pollution, inequality or weak local linkages on the other."}</p>
      </div>
    ),
  },
  {
    title: 'Mining Data — Export Value by Mineral',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Mining remains important to South African development corridors because different minerals generate large export earnings and move through specific transport routes.</p>
        <DataChart
          data={[
                        { mineral: 'PGMs', value: 260 },
                        { mineral: 'Coal', value: 190 },
                        { mineral: 'Iron ore', value: 150 },
                        { mineral: 'Gold', value: 130 },
                        { mineral: 'Manganese', value: 95 },
                      ]}
          xKey="mineral"
          series={[
                        { key: 'value', label: 'Export value (R billions)', type: 'bar', color: '#475569' },
                      ]}
          yLabel="R billions"
          height={240}
        />

        <p className="text-sm text-slate-500">Road, rail, and port corridors develop strongly where mining exports are concentrated.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which mineral activity has historically been central to South Africa’s economy?",
    options: [
      "Rice farming",
      "Mining",
      "Deep-sea fishing only",
      "Forestry only",
    ],
    answer: "Mining",
    explanation: "Mining of minerals such as gold, platinum and coal has been a major driver of South Africa’s economy.",
  },
  {
    prompt: "A major environmental problem linked to mining is:",
    options: [
      "Acid mine drainage",
      "Lower sea level",
      "Reduced urbanisation everywhere",
      "Permanent frost pockets",
    ],
    answer: "Acid mine drainage",
    explanation: "Acid mine drainage pollutes water and is one of the major environmental impacts of mining.",
  },
  {
    prompt: "Why do many industries locate near transport routes?",
    options: ['To make their costs higher', 'To move inputs and goods efficiently', 'To avoid the need for any labour', 'To create new watersheds'],
    answer: 'To move inputs and goods efficiently',
    explanation: "Good transport links reduce costs and improve access to markets and suppliers.",
  },
  {
    prompt: "Which factor is important when locating a steel plant?",
    options: ['Access to energy and raw materials', 'Distance away from all of the roads', 'A site with no supply of water', 'Cool local climates and nothing else'],
    answer: 'Access to energy and raw materials',
    explanation: "Heavy industry needs reliable power, bulk raw materials and strong transport connections.",
  },
  {
    prompt: "What is the purpose of an Industrial Development Zone or Special Economic Zone?",
    options: [
      "To prevent all trade",
      "To attract investment and encourage industry",
      "To relocate every rural settlement",
      "To manage tropical cyclones",
    ],
    answer: "To attract investment and encourage industry",
    explanation: "IDZs and SEZs use infrastructure and incentives to stimulate industrial growth.",
  },
  {
    prompt: "A development corridor mainly focuses investment along a:",
    options: ['A single mountain summit', 'A strategic route with growth potential', 'A meander in a river bend', 'A remote frost pocket in the hills'],
    answer: 'A strategic route with growth potential',
    explanation: "Corridors connect important nodes such as ports, roads and industrial areas to drive growth.",
  },
  {
    prompt: "Which combination best supports successful industrial growth?",
    options: [
      "Unreliable electricity and poor roads",
      "Good infrastructure, skills and market access",
      "Frequent flooding and no governance",
      "Isolation from transport",
    ],
    answer: "Good infrastructure, skills and market access",
    explanation: "Industry grows best where infrastructure, labour, governance and market connections are strong.",
  },
  {
    prompt: "One possible negative effect of corridor development is:",
    options: [
      "No environmental impact",
      "Uneven benefits and local pollution",
      "The end of all transport needs",
      "A guaranteed fall in unemployment everywhere",
    ],
    answer: "Uneven benefits and local pollution",
    explanation: "Development can create growth, but not every community benefits equally and environmental pressures can increase.",
  },
];

const MiningIndustriesAndDevelopmentCorridorsT3 = () => (
  <CapsSubjectTopic
    title={"Mining, Industries and Development Corridors"}
    subtitle={"Resources, manufacturing and strategic growth zones"}
    learnSteps={learnSteps}
    task={"gr12-mining-industries-and-development-corridors-t3"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default MiningIndustriesAndDevelopmentCorridorsT3;
