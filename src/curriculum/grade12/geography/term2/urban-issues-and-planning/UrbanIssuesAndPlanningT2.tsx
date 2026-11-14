import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    title: "Rapid urbanisation and its causes",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Urbanisation is the increasing proportion of people living in towns and cities. It is driven by natural increase in cities as well as migration from rural areas and smaller towns."}</p>
        <p className="text-lg leading-8 text-slate-600">{"People move to urban areas because they expect better jobs, education, healthcare and services. However, city growth is often faster than the delivery of housing and infrastructure."}</p>
      </div>
    ),
  },
  {
    title: "Informal settlements and service pressure",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When affordable formal housing is limited, many new arrivals settle in informal settlements on vacant land, floodplains or steep slopes. These settlements may lack durable housing, sanitation, electricity, refuse removal and safe road access."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Rapid growth places pressure on water supply, schools, clinics, transport systems and employment markets. This can deepen poverty and increase vulnerability to fire, disease and flood hazards."}</p>
      </div>
    ),
  },
  {
    title: "Planning for more sustainable cities",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Urban planning aims to guide land use, improve transport, protect green spaces and make services more efficient. Upgrading informal settlements, building affordable housing closer to jobs and improving public transport are key strategies."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Compact mixed-use development can reduce travel times and costs. Environmental planning also addresses air pollution, solid waste, heat islands and the protection of rivers and wetlands within the city."}</p>
      </div>
    ),
  },
  {
    title: "How GIS supports urban decisions",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"GIS allows planners to map land use, population density, service backlogs, flood-prone land and traffic patterns. Remote sensing can detect how built-up areas expand over time."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In exams, learners may need to explain how GIS helps choose safe housing sites, identify where new clinics are needed or compare spatial inequality across an urban area."}</p>
      </div>
    ),
  },
  {
    title: 'Housing Data — Main Urban Housing Types',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Urban planning has to respond to different housing conditions. This simple chart compares the share of households in major housing categories.</p>
        <DataChart
          data={[
                        { housingType: 'Formal housing', share: 79 },
                        { housingType: 'Informal settlements', share: 14 },
                        { housingType: 'Backyard dwellings', share: 7 },
                      ]}
          xKey="housingType"
          series={[
                        { key: 'share', label: 'Share of households (%)', type: 'bar', color: '#f97316' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Planning for housing, sanitation, roads, and public transport is especially important where informal housing is growing quickly.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Urbanisation means:",
    options: ['Cities that are shrinking in size', 'A growing share of people living in urban areas', 'The growth of villages and nothing else', 'The movement of factories out to farms'],
    answer: 'A growing share of people living in urban areas',
    explanation: "Urbanisation refers to the rising share of the population that lives in towns and cities.",
  },
  {
    prompt: "Why do informal settlements often develop?",
    options: ['There is always a surplus of formal housing', 'Affordable formal housing is scarce for many newcomers', 'All migrants prefer to live on farmland', 'The CBD has too much open space'],
    answer: 'Affordable formal housing is scarce for many newcomers',
    explanation: "When city growth is faster than housing delivery, people may occupy land informally.",
  },
  {
    prompt: "Which hazard is common in informal settlements built on floodplains?",
    options: [
      "Blizzards",
      "Flooding",
      "Tsunamis in inland cities",
      "Volcanic eruptions",
    ],
    answer: "Flooding",
    explanation: "Floodplains are naturally at risk when rivers overflow, especially where drainage is poor.",
  },
  {
    prompt: "Which issue is a direct result of rapid urban growth?",
    options: [
      "Less pressure on schools and clinics",
      "Higher demand for services and infrastructure",
      "Automatic job creation for all residents",
      "Lower levels of waste production",
    ],
    answer: "Higher demand for services and infrastructure",
    explanation: "More people in the city increase demand for housing, water, transport, schools and healthcare.",
  },
  {
    prompt: "What is one benefit of improving public transport in cities?",
    options: ['Longer travel times for commuters', 'Less congestion and better access to jobs', 'More urban sprawl, automatically', 'Less need for planning in the city'],
    answer: 'Less congestion and better access to jobs',
    explanation: "Good public transport can connect residents to opportunities while reducing traffic pressure.",
  },
  {
    prompt: "A compact city model aims to:",
    options: [
      "Spread people as far apart as possible",
      "Reduce travel distances and use land more efficiently",
      "Remove all mixed land use",
      "Move all jobs out of the city",
    ],
    answer: "Reduce travel distances and use land more efficiently",
    explanation: "Compact development supports shorter trips, lower costs and more efficient service delivery.",
  },
  {
    prompt: "How can GIS help urban planners?",
    options: [
      "By replacing all fieldwork permanently",
      "By mapping land use and identifying service backlogs",
      "By causing rural depopulation",
      "By changing the climate",
    ],
    answer: "By mapping land use and identifying service backlogs",
    explanation: "GIS helps planners analyse where people live, what services exist and where risks are concentrated.",
  },
  {
    prompt: "Why is upgrading informal settlements often preferred to forced removal?",
    options: ['It improves living conditions and keeps social networks', 'It guarantees that no one will move in again', 'It removes the need for a supply of water', 'It prevents all unemployment in the city'],
    answer: 'It improves living conditions and keeps social networks',
    explanation: "Upgrading can add services and safety while allowing residents to remain connected to jobs and community support.",
  },
];

const UrbanIssuesAndPlanningT2 = () => (
  <CapsSubjectTopic
    title={"Urban Issues and Planning"}
    subtitle={"Urbanisation, informal settlements and sustainable city management"}
    learnSteps={learnSteps}
    task={"gr12-urban-issues-and-planning-t2"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default UrbanIssuesAndPlanningT2;
