import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    title: "The four main economic sectors",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The primary sector uses natural resources directly through activities such as farming, fishing, forestry and mining. The secondary sector processes raw materials into manufactured goods."}</p>
        <p className="text-lg leading-8 text-slate-600">{"The tertiary sector provides services such as transport, banking, retail and tourism, while the quaternary sector focuses on information, research, technology and high-level decision-making."}</p>
      </div>
    ),
  },
  {
    title: "How employment changes over time",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"As economies develop, a smaller share of workers is usually employed in primary activities and a larger share moves into services. In South Africa, the tertiary sector employs a large number of people, while mining remains important even though it employs fewer people than in the past."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Mechanisation and technological change can raise productivity, but they may also reduce labour demand in some sectors if workers are not retrained."}</p>
      </div>
    ),
  },
  {
    title: "Formal and informal employment",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The formal sector includes registered businesses and jobs that are regulated and taxed. The informal sector includes small unregistered activities such as street trading, informal transport and home-based services."}</p>
        <p className="text-lg leading-8 text-slate-600">{"The informal sector is important because it provides livelihoods where formal jobs are scarce, but it often has lower and less secure incomes and limited legal protection."}</p>
      </div>
    ),
  },
  {
    title: "Reading economic data",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Grade 12 learners must interpret graphs that compare sector contribution to GDP with sector contribution to employment. A sector may contribute strongly to GDP without employing the most people."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Always distinguish between output, employment and value added. This helps explain why a capital-intensive sector like mining can be valuable even when it is not the biggest employer."}</p>
      </div>
    ),
  },
  {
    title: 'Employment Data — South Africa by Economic Sector',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Employment patterns show the structure of an economy. South Africa now employs most people in the tertiary sector.</p>
        <DataChart
          data={[
                        { sector: 'Services', share: 71 },
                        { sector: 'Industry', share: 23 },
                        { sector: 'Agriculture', share: 6 },
                      ]}
          xKey="sector"
          series={[
                        { key: 'share', label: 'Employment share (%)', type: 'bar', color: '#0ea5e9' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Changes in sectoral employment affect income, migration, training needs, and regional development.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which activity belongs to the primary sector?",
    options: [
      "Banking",
      "Mining",
      "Software design",
      "Retail trade",
    ],
    answer: "Mining",
    explanation: "The primary sector extracts or uses natural resources directly, and mining is a key example.",
  },
  {
    prompt: "Manufacturing cars is part of the:",
    options: [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Quaternary sector",
    ],
    answer: "Secondary sector",
    explanation: "The secondary sector processes raw materials into finished or semi-finished products.",
  },
  {
    prompt: "Which sector includes banking and tourism?",
    options: [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quinary",
    ],
    answer: "Tertiary",
    explanation: "Banking and tourism provide services, so they belong to the tertiary sector.",
  },
  {
    prompt: "The quaternary sector is mainly associated with:",
    options: [
      "Subsistence farming",
      "Information and knowledge-based services",
      "Heavy extraction only",
      "Road construction only",
    ],
    answer: "Information and knowledge-based services",
    explanation: "Research, data, technology and high-level information work are part of the quaternary sector.",
  },
  {
    prompt: "What is a key feature of the informal sector?",
    options: [
      "All businesses are large corporations",
      "Many activities are unregistered and small-scale",
      "Workers always receive full benefits",
      "It contributes nothing to livelihoods",
    ],
    answer: "Many activities are unregistered and small-scale",
    explanation: "Informal-sector activities are often small, flexible and not fully regulated, but they still support many households.",
  },
  {
    prompt: "Why can a sector contribute strongly to GDP but employ relatively few people?",
    options: [
      "It may be capital intensive",
      "It has no value",
      "It is always informal",
      "It cannot use technology",
    ],
    answer: "It may be capital intensive",
    explanation: "Capital-intensive sectors use expensive equipment and high productivity rather than large labour forces.",
  },
  {
    prompt: "Which statement best describes economic development over time?",
    options: [
      "Employment always stays in the primary sector",
      "Service-sector employment often grows as economies develop",
      "The tertiary sector disappears",
      "All countries stop manufacturing",
    ],
    answer: "Service-sector employment often grows as economies develop",
    explanation: "Development usually brings a shift toward services and more specialised economic activity.",
  },
  {
    prompt: "A street vendor selling fruit outside a taxi rank is most likely working in the:",
    options: [
      "Formal quaternary sector",
      "Informal sector",
      "Primary export sector only",
      "Public sector only",
    ],
    answer: "Informal sector",
    explanation: "Street vending is a common example of small-scale informal economic activity.",
  },
];

const EconomicSectorsAndEmploymentT3 = () => (
  <CapsSubjectTopic
    title={"Economic Sectors and Employment"}
    subtitle={"How South Africa’s economy is organised and where people work"}
    learnSteps={learnSteps}
    task={"gr12-economic-sectors-and-employment-t3"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default EconomicSectorsAndEmploymentT3;
