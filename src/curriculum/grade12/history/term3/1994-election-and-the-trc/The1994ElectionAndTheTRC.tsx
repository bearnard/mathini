import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term3/1994-election-and-the-trc/diagram.webp", alt: "1994 Election and the TRC" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "27 Apr 1994", "title": "Democratic election held", "description": "South Africans of all races voted in the first democratic national election. The vote ended formal apartheid rule and gave legitimacy to the new political order."},
            {"date": "10 May 1994", "title": "Mandela inaugurated president", "description": "Nelson Mandela became South Africa's first democratically elected president. A Government of National Unity was formed to stabilise the transition."},
            {"date": "Jul 1995", "title": "TRC is established", "description": "Parliament created the Truth and Reconciliation Commission through the Promotion of National Unity and Reconciliation Act. The TRC was tasked with investigating gross human rights violations."},
            {"date": "15 Apr 1996", "title": "TRC hearings begin", "description": "The first public human rights violation hearings opened in East London. Victims testified publicly and the country confronted hidden crimes of the apartheid era."},
            {"date": "29 Oct 1998", "title": "Final report released", "description": "The TRC handed over its main report, setting out findings on abuses and responsibility. It deepened debate over truth, amnesty, justice, and reconciliation."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "The first democratic election",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"On 27 April 1994, South Africans of all races voted in the country's first democratic national election. Long queues, logistical problems, and intense emotion marked the event, but it succeeded in giving political legitimacy to the new order."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The Independent Electoral Commission helped organise and oversee the vote."}</li>
          <li>{"Millions of people voted for the first time in their lives."}</li>
          <li>{"The election ended formal apartheid rule and launched democratic government."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Mandela and the Government of National Unity",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Nelson Mandela became South Africa's first democratically elected president. A Government of National Unity was formed to help manage the transition and reduce the risk of renewed conflict."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The new government tried to symbolise inclusion and reconciliation."}</li>
          <li>{"Democratic institutions had to be built while expectations for rapid change were very high."}</li>
          <li>{"The transition combined celebration with the difficult reality of inherited inequality."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The Truth and Reconciliation Commission",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The TRC was established to investigate gross human rights violations committed during the apartheid era. Chaired by Archbishop Desmond Tutu, it aimed to uncover truth, acknowledge suffering, and promote national reconciliation."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Victims could tell their stories publicly."}</li>
          <li>{"Perpetrators could apply for amnesty if they made full disclosure and showed political motive."}</li>
          <li>{"The TRC tried to balance truth-telling with the political need for a peaceful transition."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Debates about justice and memory",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The TRC remains one of the most debated parts of South Africa's transition. Some people praise it for exposing hidden crimes and preventing revenge, while others argue that it allowed too many perpetrators to avoid full punishment."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Reconciliation was important, but many survivors also wanted material justice and accountability."}</li>
          <li>{"The TRC showed that transitions often involve difficult moral compromises."}</li>
          <li>{"Its legacy still shapes public memory and debate in democratic South Africa."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "On what date was South Africa's first democratic election held?",
    options: ["16 June 1976", "11 February 1990", "27 April 1994", "10 May 1996"],
    answer: "27 April 1994",
    explanation: "South Africans of all races voted in the first democratic election on 27 April 1994.",
  },
  {
    prompt: "Why was the 1994 election historically significant?",
    options: ["It gave voting rights to whites only", "It created a democratic government based on universal suffrage", "It restored the tricameral parliament", "It ended all political debate in South Africa"],
    answer: "It created a democratic government based on universal suffrage",
    explanation: "The 1994 election marked the end of apartheid's exclusionary political system.",
  },
  {
    prompt: "Which body organised and oversaw the 1994 election?",
    options: ["TRC", "IEC", "SADF", "UDF"],
    answer: "IEC",
    explanation: "The Independent Electoral Commission managed the election process.",
  },
  {
    prompt: "Who became South Africa's first democratically elected president?",
    options: ["F.W. de Klerk", "Nelson Mandela", "Oliver Tambo", "Cyril Ramaphosa"],
    answer: "Nelson Mandela",
    explanation: "Mandela became president after the ANC won the 1994 election.",
  },
  {
    prompt: "What was the purpose of the Government of National Unity?",
    options: ["To help manage the transition and encourage political inclusion", "To restore homeland independence", "To return South Africa to one-party rule", "To abolish the Constitution"],
    answer: "To help manage the transition and encourage political inclusion",
    explanation: "The GNU aimed to stabilise the country during the early democratic period.",
  },
  {
    prompt: "Who chaired the Truth and Reconciliation Commission?",
    options: ["Desmond Tutu", "Steve Biko", "Thabo Mbeki", "Albertina Sisulu"],
    answer: "Desmond Tutu",
    explanation: "Archbishop Desmond Tutu chaired the TRC and became closely associated with its moral message.",
  },
  {
    prompt: "Under what condition could perpetrators receive amnesty from the TRC?",
    options: ["If they denied all wrongdoing", "If they made full disclosure of politically motivated acts", "If they were members of the ruling party only", "If victims were absent from hearings"],
    answer: "If they made full disclosure of politically motivated acts",
    explanation: "Amnesty depended on truth-telling and showing that the act had a political motive.",
  },
  {
    prompt: "Why is the TRC still debated today?",
    options: ["Because some people believe it promoted truth and reconciliation, while others think justice was incomplete", "Because it rewrote all South African languages", "Because it organised the 1976 student march", "Because it created the tricameral parliament"],
    answer: "Because some people believe it promoted truth and reconciliation, while others think justice was incomplete",
    explanation: "The TRC helped reveal abuses, but many people still debate whether accountability went far enough.",
  },
];

const The1994ElectionAndTheTRC = () => (
  <CapsSubjectTopic
    title="1994 Election and the TRC"
    subtitle="Democratic breakthrough, national unity, and debates about justice"
    learnSteps={learnSteps}
    task="gr12-1994-election-and-the-trc-t3"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default The1994ElectionAndTheTRC;
