import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term2/mass-democratic-movement-and-cosatu/diagram.webp", alt: "Mass Democratic Movement and COSATU" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "20 Aug 1983", "title": "UDF is launched", "description": "The United Democratic Front was formed to oppose the new constitution and link churches, civics, students, and community groups. It became the main umbrella for internal mass resistance in the 1980s."},
            {"date": "Sep 1984", "title": "Township revolt spreads", "description": "Protests in the Vaal Triangle against rent increases and local councils quickly widened into a national township uprising. Local grievances became part of a broader anti-apartheid struggle."},
            {"date": "1 Dec 1985", "title": "COSATU is formed", "description": "The Congress of South African Trade Unions united many unions into one powerful federation. It linked workplace struggles over wages and conditions to the fight for democracy."},
            {"date": "May–Jun 1986", "title": "National stayaways escalate", "description": "Large stayaways and strikes showed organised worker power and disrupted production. They helped connect factories, unions, and township politics inside the Mass Democratic Movement."},
            {"date": "Aug–Sep 1989", "title": "Defiance campaign grows", "description": "Mass protests, marches, and civil disobedience revived open resistance near the end of apartheid. The campaign showed that internal mobilisation remained strong despite years of repression."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "What the Mass Democratic Movement was",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The Mass Democratic Movement (MDM) was not a single party. It described the broad alliance of internal organisations that challenged apartheid in the 1980s, especially after the formation of the UDF and COSATU."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"It included students, residents' associations, church groups, women's organisations, and workers."}</li>
          <li>{"These groups often coordinated around shared democratic demands."}</li>
          <li>{"The movement gave internal resistance national reach despite bans on liberation movements."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "COSATU and worker power",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"COSATU, formed in 1985, united many trade unions into a powerful federation. It linked workplace struggles over wages and conditions to wider opposition to apartheid and to demands for democracy."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Strikes and stayaways could damage profits and expose the weakness of the apartheid economy."}</li>
          <li>{"Union structures trained disciplined organisers and local leaders."}</li>
          <li>{"Worker action connected factories and townships to the same political struggle."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Popular protest in townships",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Civics and youth groups organised campaigns around daily life: rent, transport, schooling, and local councils. These local issues became political because apartheid shaped every part of township life."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Consumer boycotts pressured businesses that benefited from apartheid."}</li>
          <li>{"School boycotts and funerals often became mass political events."}</li>
          <li>{"Street committees helped communities organise from below."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Goals and significance",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The MDM aimed to make apartheid increasingly unworkable while keeping pressure on the state for majority rule. Internal mobilisation also strengthened the bargaining position of the ANC and other exiled leaders when negotiations eventually began."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mass action showed that apartheid had lost legitimacy inside South Africa."}</li>
          <li>{"The movement kept democratic ideas alive despite censorship and repression."}</li>
          <li>{"It turned resistance into a national social force rather than a small underground current."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does “Mass Democratic Movement” refer to in South African history?",
    options: ["A broad alliance of internal anti-apartheid organisations", "A new homeland government", "The National Party's election campaign", "A military alliance with the USA"],
    answer: "A broad alliance of internal anti-apartheid organisations",
    explanation: "The MDM described the network of unions, civics, churches, youth groups, and other organisations resisting apartheid.",
  },
  {
    prompt: "Which union federation launched in 1985 became central to the MDM?",
    options: ["COSATU", "SASO", "AWB", "TRC"],
    answer: "COSATU",
    explanation: "COSATU united many unions and gave organised labour national political weight.",
  },
  {
    prompt: "Why were stayaways effective as a protest method?",
    options: ["They disrupted work and demonstrated organised worker power", "They increased police authority", "They guaranteed instant constitutional reform", "They transferred power to homeland leaders"],
    answer: "They disrupted work and demonstrated organised worker power",
    explanation: "Stayaways could halt production and make the economic cost of apartheid visible.",
  },
  {
    prompt: "Which of the following was a typical township protest tactic in the 1980s?",
    options: ["Consumer boycotts", "Voting in white-only elections", "Defending the tricameral parliament", "Promoting influx control"],
    answer: "Consumer boycotts",
    explanation: "Consumer boycotts were used to pressure businesses and show community discipline.",
  },
  {
    prompt: "Why did local issues such as rent become political under apartheid?",
    options: ["Township life and local government were shaped by apartheid policies", "Rent had nothing to do with apartheid", "Only farmers cared about rent", "The United Nations set township rents directly"],
    answer: "Township life and local government were shaped by apartheid policies",
    explanation: "Daily problems in transport, housing, and schools were tied directly to apartheid rule.",
  },
  {
    prompt: "What did activists mean by making apartheid “ungovernable”?",
    options: ["Ending all forms of organisation", "Using mass action to make the system difficult to run", "Supporting every state institution", "Replacing elections with military rule"],
    answer: "Using mass action to make the system difficult to run",
    explanation: "Boycotts, stayaways, and local organisation were meant to undermine the state's ability to govern normally.",
  },
  {
    prompt: "How did the MDM strengthen the broader liberation struggle?",
    options: ["It showed strong internal resistance and increased pressure for negotiations", "It accepted permanent minority rule", "It cut ties with all democratic ideas", "It banned worker organisation"],
    answer: "It showed strong internal resistance and increased pressure for negotiations",
    explanation: "Mass internal action made it clear that apartheid could not regain long-term stability.",
  },
  {
    prompt: "Which statement best describes the MDM?",
    options: ["It was only a student movement", "It connected workers, civics, youth, churches, and communities in common struggle", "It existed only outside South Africa", "It was led by the apartheid cabinet"],
    answer: "It connected workers, civics, youth, churches, and communities in common struggle",
    explanation: "Its strength came from linking many sectors of society in a shared democratic movement.",
  },
];

const MassDemocraticMovementAndCosatu = () => (
  <CapsSubjectTopic
    title="Mass Democratic Movement and COSATU"
    subtitle="UDF networks, worker unity, and making apartheid ungovernable"
    learnSteps={learnSteps}
    task="gr12-mass-democratic-movement-and-cosatu-t2"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default MassDemocraticMovementAndCosatu;
