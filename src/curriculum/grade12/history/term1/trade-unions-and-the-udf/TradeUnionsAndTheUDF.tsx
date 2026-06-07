import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term1/trade-unions-and-the-udf/diagram.webp", alt: "Trade Unions and the UDF" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1973", "title": "Durban strikes erupt", "description": "Thousands of mainly black workers in Durban struck for better wages and conditions. The strikes showed that labour action could challenge apartheid capitalism."},
            {"date": "1979", "title": "FOSATU is launched", "description": "The Federation of South African Trade Unions was formed to strengthen independent worker organisation. It helped build shop-floor structures and trained shop stewards."},
            {"date": "20 Aug 1983", "title": "UDF is formed", "description": "The United Democratic Front united churches, civics, students, women, and unions against apartheid reforms. It quickly became the main umbrella for internal mass resistance."},
            {"date": "1983", "title": "Tricameral system opposed", "description": "The UDF campaigned against the new apartheid constitution and tricameral parliament. It rejected reforms that still excluded the African majority."},
            {"date": "1984–1986", "title": "Civic boycotts spread", "description": "Rent boycotts, consumer boycotts, school protests, and stayaways spread through townships. These campaigns linked local grievances to the national anti-apartheid struggle."},
            {"date": "1 Dec 1985", "title": "COSATU is launched", "description": "The Congress of South African Trade Unions was formed as a major national labour federation. It became one of the strongest organised forces against apartheid."},
            {"date": "Mid-1980s", "title": "Mass resistance deepens", "description": "Trade unions and UDF-aligned civics rooted resistance in everyday life at work and in townships. Their broad participation made apartheid increasingly difficult to govern."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "The Durban strikes and new worker politics",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In 1973, thousands of mainly black workers in Durban went on strike for higher wages and better conditions. These strikes were important because they showed that labour action could challenge apartheid capitalism even when political organisations were banned."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Workers used stayaways and factory stoppages to put pressure on employers."}</li>
          <li>{"The strikes encouraged the growth of independent unions outside state control."}</li>
          <li>{"Labour resistance became a crucial part of the anti-apartheid struggle."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Building trade union power",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Through the late 1970s and early 1980s, unions organised workers in factories, mines, transport, and public services. They trained shop stewards, negotiated with employers, and linked workplace demands to broader democratic politics."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"FOSATU helped establish a stronger tradition of worker organisation."}</li>
          <li>{"COSATU was launched in 1985 and became the largest union federation in the country."}</li>
          <li>{"Organised labour could hurt the apartheid economy through strikes and stayaways."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The UDF as a broad front",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The United Democratic Front was formed in 1983 to unite churches, civics, student groups, women's organisations, and unions against the new apartheid constitution. It did not replace older movements, but it became the main umbrella for internal mass resistance."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The UDF opposed the tricameral parliament because Africans remained excluded."}</li>
          <li>{"It promoted township campaigns such as rent boycotts, consumer boycotts, and school protests."}</li>
          <li>{"Many UDF activists embraced the Freedom Charter and identified with the banned ANC tradition."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why unions and civics mattered",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Trade unions and the UDF made resistance more difficult for the state to suppress because they rooted protest in daily life. Workers, students, parents, and residents could all participate in making apartheid increasingly unworkable."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mass participation gave the struggle legitimacy and staying power."}</li>
          <li>{"Civic structures connected political protest to rent, transport, schooling, and local government issues."}</li>
          <li>{"By the mid-1980s, internal mass mobilisation had become a central force in the crisis of apartheid."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why were the Durban strikes of 1973 historically important?",
    options: ["They showed that organised workers could challenge apartheid employers and the state", "They created the first democratic parliament", "They ended all racial laws immediately", "They brought independence to Namibia"],
    answer: "They showed that organised workers could challenge apartheid employers and the state",
    explanation: "The strikes revealed the political importance of worker action in apartheid South Africa.",
  },
  {
    prompt: "What is a trade union?",
    options: ["A business owned by the government", "An organisation that represents workers' interests", "A court that judges labour disputes", "A group of school principals"],
    answer: "An organisation that represents workers' interests",
    explanation: "Trade unions organise workers to fight for wages, conditions, and rights.",
  },
  {
    prompt: "Which union federation was formed in 1985 and became a major anti-apartheid force?",
    options: ["SASO", "COSATU", "SACP", "IFP"],
    answer: "COSATU",
    explanation: "COSATU, the Congress of South African Trade Unions, was launched in 1985.",
  },
  {
    prompt: "Why was worker organisation powerful under apartheid?",
    options: ["Workers controlled the police", "Strikes and stayaways could disrupt production and profits", "Union leaders sat in the cabinet", "Employers automatically supported democracy"],
    answer: "Strikes and stayaways could disrupt production and profits",
    explanation: "Economic disruption gave workers bargaining power against employers and the state.",
  },
  {
    prompt: "What does UDF stand for?",
    options: ["Union for Democratic Freedom", "United Democratic Front", "Universal Development Forum", "United Defence Force"],
    answer: "United Democratic Front",
    explanation: "The UDF was launched in 1983 as an umbrella organisation for internal anti-apartheid groups.",
  },
  {
    prompt: "Why did the UDF oppose the tricameral parliament?",
    options: ["It gave power to workers only", "It still excluded the African majority from national political power", "It abolished local government", "It made South Africa a republic"],
    answer: "It still excluded the African majority from national political power",
    explanation: "The tricameral system created separate chambers for whites, Coloureds, and Indians, but Africans were left out entirely.",
  },
  {
    prompt: "Which of the following was a common UDF or civic campaign method?",
    options: ["Rent and consumer boycotts", "Voting in homeland elections only", "Supporting detentions without trial", "Promoting the Group Areas Act"],
    answer: "Rent and consumer boycotts",
    explanation: "Civics used boycotts and other local campaigns to make apartheid difficult to govern.",
  },
  {
    prompt: "What linked trade unions and the UDF in the 1980s?",
    options: ["Both helped build broad internal mass resistance to apartheid", "Both supported the security police", "Both wanted the African majority excluded from politics", "Both rejected all forms of organisation"],
    answer: "Both helped build broad internal mass resistance to apartheid",
    explanation: "Worker, civic, church, and youth organisations became part of the wider mass democratic movement.",
  },
];

const TradeUnionsAndTheUDF = () => (
  <CapsSubjectTopic
    title="Trade Unions and the UDF"
    subtitle="Worker organisation, civic protest, and the growth of internal mass resistance"
    learnSteps={learnSteps}
    task="gr12-trade-unions-and-the-udf-t1"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default TradeUnionsAndTheUDF;
