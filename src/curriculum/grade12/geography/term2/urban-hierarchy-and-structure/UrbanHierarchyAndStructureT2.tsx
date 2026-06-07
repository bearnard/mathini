import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    image: { src: "/curriculum/grade12/geo/term2/urban-hierarchy-and-structure/diagram.webp", alt: "Urban Hierarchy and Structure" },
    title: "The settlement hierarchy",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Settlements are arranged in a hierarchy from small hamlets and villages to towns, cities and metropolitan areas. Higher-order settlements offer more specialised services and serve a much larger surrounding area than lower-order settlements."}</p>
        <p className="text-lg leading-8 text-slate-600">{"A large city may contain universities, specialist hospitals and major financial services, while a small town mainly offers basic goods such as groceries, fuel and primary schooling."}</p>
      </div>
    ),
  },
  {
    title: "Threshold and range",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Threshold population is the minimum number of people needed to support a service. Range is the maximum distance consumers are willing to travel to obtain that service."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Low-order goods such as bread have a small range and low threshold, while high-order services such as specialised surgery require a larger threshold and people will travel farther to access them."}</p>
      </div>
    ),
  },
  {
    title: "Internal urban structure",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Most cities contain a central business district with high accessibility and high land values. Around it may be a zone of transition, established residential areas, industrial zones and newer suburban growth on the edge."}</p>
        <p className="text-lg leading-8 text-slate-600">{"South African cities also show the legacy of apartheid planning, with many townships and low-income areas located far from major employment centres and services."}</p>
      </div>
    ),
  },
  {
    title: "How to analyse urban patterns",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When working with maps or photographs, identify the CBD by dense road networks, commercial land use and tall buildings. Industrial areas often follow rail lines, highways or flat land on the edge of the built-up area."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Good answers explain why a function is located there: accessibility, land value, space requirements, transport routes and historical planning all help to shape the urban pattern."}</p>
      </div>
    ),
  },
  {
    title: 'Urban Data — Major South African Metro Populations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Urban hierarchy can be illustrated by comparing city populations. Larger metropolitan areas usually offer a wider range of high-order functions and services.</p>
        <DataChart
          data={[
                        { city: 'Johannesburg', population: 6.0 },
                        { city: 'Cape Town', population: 4.9 },
                        { city: 'Ekurhuleni', population: 4.1 },
                        { city: 'eThekwini', population: 3.9 },
                        { city: 'Tshwane', population: 3.4 },
                      ]}
          xKey="city"
          series={[
                        { key: 'population', label: 'Metro population (millions)', type: 'bar', color: '#2563eb' },
                      ]}
          yLabel="Millions"
          height={240}
        />

        <p className="text-sm text-slate-500">Population size is one useful clue when ranking cities in an urban hierarchy.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which settlement in the hierarchy usually offers the most specialised services?",
    options: [
      "Hamlet",
      "Village",
      "Large city or metropolitan area",
      "Scattered farmstead",
    ],
    answer: "Large city or metropolitan area",
    explanation: "Higher-order settlements have a bigger population base and support more specialised functions.",
  },
  {
    prompt: "What is threshold population?",
    options: [
      "The number of roads in a city",
      "The minimum population needed to support a service",
      "The tallest building height in the CBD",
      "The distance people travel to work",
    ],
    answer: "The minimum population needed to support a service",
    explanation: "A business or service needs enough customers to remain viable.",
  },
  {
    prompt: "Range in central place theory means:",
    options: [
      "The number of buildings in the CBD",
      "The maximum distance consumers will travel for a service",
      "The temperature difference in the city",
      "The total rainfall of the settlement",
    ],
    answer: "The maximum distance consumers will travel for a service",
    explanation: "People travel farther for high-order services than for daily low-order goods.",
  },
  {
    prompt: "Which service is most likely to be a high-order service?",
    options: [
      "Corner shop",
      "Specialist heart hospital",
      "Local spaza shop",
      "Primary school",
    ],
    answer: "Specialist heart hospital",
    explanation: "Specialist hospitals need a large threshold population and serve a wide area.",
  },
  {
    prompt: "What is the main function of the CBD?",
    options: [
      "Commercial and business activities",
      "Subsistence farming",
      "Mining only",
      "River transport only",
    ],
    answer: "Commercial and business activities",
    explanation: "The CBD concentrates offices, shops, services and high land-value commercial activity.",
  },
  {
    prompt: "Why do land values tend to be highest in the CBD?",
    options: [
      "It has the lowest accessibility",
      "It is usually the most accessible part of the city",
      "It always has the coolest climate",
      "All houses are larger there",
    ],
    answer: "It is usually the most accessible part of the city",
    explanation: "High accessibility creates intense competition for land in the CBD, raising land values.",
  },
  {
    prompt: "Which factor strongly shaped South African urban form?",
    options: [
      "Ocean currents only",
      "Apartheid spatial planning",
      "Polar easterlies",
      "Volcanic eruptions",
    ],
    answer: "Apartheid spatial planning",
    explanation: "Apartheid planning separated people by race and often placed townships far from jobs and services.",
  },
  {
    prompt: "An industrial zone is often located near:",
    options: [
      "Steep mountain summits",
      "Major transport routes and flat land",
      "The middle of a wetland",
      "The top of a watershed only",
    ],
    answer: "Major transport routes and flat land",
    explanation: "Industry needs space and good transport connections for raw materials and finished goods.",
  },
];

const UrbanHierarchyAndStructureT2 = () => (
  <CapsSubjectTopic
    title={"Urban Hierarchy and Structure"}
    subtitle={"From small towns to metros and internal land-use zones"}
    learnSteps={learnSteps}
    task={"gr12-urban-hierarchy-and-structure-t2"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default UrbanHierarchyAndStructureT2;
