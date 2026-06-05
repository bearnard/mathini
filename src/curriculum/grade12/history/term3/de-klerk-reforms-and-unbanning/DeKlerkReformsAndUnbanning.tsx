import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "20 Sep 1989", "title": "De Klerk takes office", "description": "F.W. de Klerk became State President as apartheid was facing deep internal and external pressure. His leadership marked a shift away from Botha's harder line."},
            {"date": "2 Feb 1990", "title": "Unbanning is announced", "description": "In parliament, de Klerk unbanned the ANC, PAC, and SACP and promised major political change. The speech publicly opened the road to negotiations."},
            {"date": "11 Feb 1990", "title": "Mandela is released", "description": "Nelson Mandela walked free after 27 years in prison. His release transformed the political climate and raised hopes for a negotiated settlement."},
            {"date": "4 May 1990", "title": "Groote Schuur agreement", "description": "The ANC and government agreed on confidence-building measures, including discussion of political prisoners and exiles. It showed that dialogue was replacing outright confrontation."},
            {"date": "6 Aug 1990", "title": "Pretoria Minute signed", "description": "The ANC agreed to suspend the armed struggle after talks with the government. This was an important step in building momentum for formal negotiations."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "A changing political context",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When F.W. de Klerk became state president in 1989, South Africa was in deep crisis. Internal resistance, sanctions, economic strain, and the failure of emergency rule had weakened apartheid, while the Cold War was coming to an end internationally."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Anti-communist arguments used to defend apartheid were becoming less persuasive."}</li>
          <li>{"The National Party needed a new strategy because repression had not restored stability."}</li>
          <li>{"Negotiation increasingly appeared safer than permanent conflict."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The 2 February 1990 speech",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In parliament on 2 February 1990, de Klerk announced a dramatic shift. He unbanned major liberation organisations and signalled that formal political talks were now possible."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The ANC, PAC, and SACP were legalised again."}</li>
          <li>{"Restrictions on many political activities were lifted."}</li>
          <li>{"The speech marked a public break with the old idea that apartheid could be defended indefinitely."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Mandela's release and public expectations",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Nelson Mandela was released on 11 February 1990 after 27 years in prison. His release became a global event and raised hopes for peace, democracy, and the possibility of negotiated change."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mandela called for continued struggle together with disciplined negotiation."}</li>
          <li>{"The ANC returned openly to South African politics after decades of banning."}</li>
          <li>{"Excitement was mixed with uncertainty because violence and mistrust remained strong."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why reform happened",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Historians explain de Klerk's reforms through a combination of factors rather than one cause. The regime acted because apartheid had become too costly, too unstable, and too isolated to continue in its existing form."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Internal mass resistance made the country difficult to govern."}</li>
          <li>{"International sanctions and loss of confidence hurt the economy."}</li>
          <li>{"The end of the Cold War made negotiation more acceptable to the ruling elite and to Western allies."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Who became South African state president in 1989 and initiated the 1990 reforms?",
    options: ["P.W. Botha", "F.W. de Klerk", "Nelson Mandela", "Cyril Ramaphosa"],
    answer: "F.W. de Klerk",
    explanation: "F.W. de Klerk succeeded P.W. Botha and announced major changes in 1990.",
  },
  {
    prompt: "Why did the end of the Cold War matter for South Africa?",
    options: ["It strengthened the argument for permanent apartheid", "It weakened the regime's anti-communist justification for repression", "It ended all violence immediately", "It made the UDF illegal"],
    answer: "It weakened the regime's anti-communist justification for repression",
    explanation: "With the Cold War fading, apartheid could no longer be defended as a necessary anti-communist barrier so easily.",
  },
  {
    prompt: "What happened on 2 February 1990?",
    options: ["The first democratic election was held", "De Klerk announced the unbanning of liberation movements", "The TRC began hearings", "The Sharpeville massacre took place"],
    answer: "De Klerk announced the unbanning of liberation movements",
    explanation: "His parliamentary speech opened the way to formal negotiation.",
  },
  {
    prompt: "Which organisations were unbanned in 1990?",
    options: ["ANC, PAC, and SACP", "Broederbond, AWB, and SADF", "COSATU, IMF, and UN", "Only the National Party"],
    answer: "ANC, PAC, and SACP",
    explanation: "The unbanning of these organisations was a major turning point in the transition.",
  },
  {
    prompt: "On what date was Nelson Mandela released from prison?",
    options: ["11 February 1990", "16 June 1976", "27 April 1994", "21 March 1960"],
    answer: "11 February 1990",
    explanation: "Mandela was released nine days after de Klerk's parliamentary speech.",
  },
  {
    prompt: "Why did the National Party move toward negotiation?",
    options: ["Apartheid had become too unstable and costly to continue unchanged", "It had won the support of all anti-apartheid groups", "The African majority had given up demands for the vote", "International pressure had ended completely"],
    answer: "Apartheid had become too unstable and costly to continue unchanged",
    explanation: "Internal resistance, sanctions, and political crisis made negotiation increasingly necessary.",
  },
  {
    prompt: "What did Mandela emphasise after his release?",
    options: ["That democracy was impossible", "That struggle and negotiation had to be pursued with discipline", "That only white voters should decide the future", "That South Africa should return to homeland rule"],
    answer: "That struggle and negotiation had to be pursued with discipline",
    explanation: "Mandela called for continued pressure for democracy while pursuing a negotiated settlement.",
  },
  {
    prompt: "Why is 1990 seen as a turning point in South African history?",
    options: ["Because it marked the public start of the negotiated transition to democracy", "Because apartheid ended in one day", "Because the TRC completed all hearings", "Because the homelands became fully independent countries"],
    answer: "Because it marked the public start of the negotiated transition to democracy",
    explanation: "The unbanning of organisations and Mandela's release made an open political settlement possible.",
  },
];

const DeKlerkReformsAndUnbanning = () => (
  <CapsSubjectTopic
    title="De Klerk Reforms and Unbanning"
    subtitle="The 1990 turning point in South Africa’s democratic transition"
    learnSteps={learnSteps}
    task="gr12-de-klerk-reforms-and-unbanning-t3"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default DeKlerkReformsAndUnbanning;
