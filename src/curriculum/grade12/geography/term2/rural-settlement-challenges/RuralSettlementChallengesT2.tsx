import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps = [
  {
    title: "Why rural depopulation happens",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rural depopulation is the decline in the number of people living in rural areas as many move to towns and cities. Push factors include limited jobs, poor services, drought, low farm incomes and lack of educational opportunities."}</p>
        <p className="text-lg leading-8 text-slate-600">{"This movement often affects younger adults most strongly, because they leave in search of work and training. Migration can therefore reduce the economically active population left behind."}</p>
      </div>
    ),
  },
  {
    title: "Effects on rural communities",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When out-migration continues, schools, clinics and shops may close because they are no longer viable. Remaining residents are often older, poorer and more dependent on social grants or remittances."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Loss of labour can weaken agricultural production, while abandoned land may become underused or degraded. Families may also be separated for long periods when workers migrate temporarily."}</p>
      </div>
    ),
  },
  {
    title: "Environmental and economic pressures",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rural areas may struggle with overgrazing, soil erosion, unreliable water supply and weak infrastructure. These pressures make farming and business development harder, especially where roads and digital connectivity are poor."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Yet rural spaces also offer opportunities in agriculture, tourism, conservation, renewable energy and agro-processing if investment, skills and transport links are improved."}</p>
      </div>
    ),
  },
  {
    title: "Ways to support rural development",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Rural development strategies include better roads, clinics and schools, support for emerging farmers, land-care programmes, irrigation, local enterprise development and access to broadband services."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Examination answers should show both the social and economic sides of rural change: why people leave, what happens to the settlement, and how sustainable interventions can improve quality of life."}</p>
      </div>
    ),
  },
  {
    title: 'Settlement Data — Rural Access to Services',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Rural settlement challenges are easier to see when service access is compared with urban areas. Rural households often have lower access to key services.</p>
        <DataChart
          data={[
                        { service: 'Piped water', rural: 74, urban: 96 },
                        { service: 'Electricity', rural: 83, urban: 97 },
                        { service: 'Internet', rural: 45, urban: 79 },
                        { service: 'Refuse removal', rural: 32, urban: 88 },
                      ]}
          xKey="service"
          series={[
                        { key: 'rural', label: 'Rural households (%)', type: 'bar', color: '#f59e0b' },
                        { key: 'urban', label: 'Urban households (%)', type: 'bar', color: '#0ea5e9' },
                      ]}
          yLabel="Percent"
          height={240}
        />

        <p className="text-sm text-slate-500">Lower access to services can increase out-migration from rural areas and deepen inequality.</p>
      </div>
    ),
  },
  {
    title: "Money from migrant workers",
    content: (
      <div className="space-y-4">
        <GapRule>{"A city worker's earnings transferred to relatives in the village count as remittances. They often pay for food, school fees and clothes at home."}</GapRule>
        <GapWorked title={"Follow the money"} steps={["A man works in Johannesburg.", "He sends part of his wages to his family in a rural village.", "The family buys food and school items with the money.", "These payments are an important income for many rural households."]} />
        <GapMistake>{"Confusing these transfers with government grants."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is rural depopulation?",
    options: [
      "Rapid growth of cities",
      "A decline in the population of rural areas",
      "The spread of mining to the countryside",
      "A rise in rural rainfall",
    ],
    answer: "A decline in the population of rural areas",
    explanation: "Rural depopulation happens when more people leave the countryside than remain or move in.",
  },
  {
    prompt: "Which factor is a common push factor from rural areas?",
    options: [
      "More universities and jobs",
      "Limited employment opportunities",
      "Better specialist hospitals",
      "Higher service concentration",
    ],
    answer: "Limited employment opportunities",
    explanation: "Lack of jobs is one of the strongest reasons people move from rural areas to towns and cities.",
  },
  {
    prompt: "A likely result of youth out-migration from rural settlements is:",
    options: [
      "A younger population remains",
      "An ageing population remains",
      "All farms disappear immediately",
      "Population density doubles",
    ],
    answer: "An ageing population remains",
    explanation: "Young adults often leave first, so the remaining rural population tends to be older.",
  },
  {
    prompt: "Why might a rural school close?",
    options: [
      "The area becomes too wealthy",
      "There are too few learners to keep it viable",
      "Roads improve too much",
      "The climate becomes Mediterranean",
    ],
    answer: "There are too few learners to keep it viable",
    explanation: "When families leave, learner numbers fall and services such as schools may shut down.",
  },
  {
    prompt: "Which economic activity can support rural renewal?",
    options: [
      "Only CBD retail",
      "Agro-processing and tourism",
      "Removing all transport links",
      "Closing all clinics",
    ],
    answer: "Agro-processing and tourism",
    explanation: "Rural economies can diversify through farming-related industries, tourism and conservation.",
  },
  {
    prompt: "Remittances are:",
    options: [
      "Flood control walls",
      "Money sent home by migrants",
      "Subsidies for imported goods",
      "A type of rainfall",
    ],
    answer: "Money sent home by migrants",
    explanation: "Migrants often send part of their earnings back to support households in rural areas.",
  },
  {
    prompt: "Which infrastructure improvement would most directly help a remote rural settlement?",
    options: ['More congestion charges for drivers', 'Reliable roads and internet connectivity', 'Less access to a supply of water', 'A smaller clinic for the settlement'],
    answer: 'Reliable roads and internet connectivity',
    explanation: "Transport and digital access improve service delivery, market access and economic opportunity.",
  },
  {
    prompt: "Land degradation in rural areas can be reduced by:",
    options: ['Overgrazing more intensely than before', 'Land-care and soil conservation practices', 'Removing all of the vegetation', 'Allowing erosion gullies to expand'],
    answer: 'Land-care and soil conservation practices',
    explanation: "Conservation methods protect soil, improve productivity and support long-term rural livelihoods.",
  },
];

const RuralSettlementChallengesT2 = () => (
  <CapsSubjectTopic
    title={"Rural Settlement Challenges"}
    subtitle={"Depopulation, service delivery and rural development"}
    learnSteps={learnSteps}
    task={"gr12-rural-settlement-challenges-t2"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default RuralSettlementChallengesT2;
