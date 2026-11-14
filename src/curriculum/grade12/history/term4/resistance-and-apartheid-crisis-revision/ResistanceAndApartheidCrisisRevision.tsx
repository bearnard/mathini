import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term4/resistance-and-apartheid-crisis-revision/diagram.webp", alt: "Resistance and Apartheid Crisis Revision" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "Jul 1969", "title": "SASO is formed", "description": "The South African Students' Organisation became a key vehicle for Black Consciousness ideas. It promoted dignity, self-reliance, and psychological liberation."},
            {"date": "Jan 1973", "title": "Durban strikes erupt", "description": "A wave of strikes by black workers in Durban challenged low wages and harsh labour conditions. These actions helped revive trade union organisation inside South Africa."},
            {"date": "16 Jun 1976", "title": "Soweto uprising begins", "description": "Students protested against Afrikaans as a medium of instruction and were met with police gunfire. The uprising revived mass resistance and drew global attention to apartheid."},
            {"date": "20 Aug 1983", "title": "UDF is launched", "description": "The United Democratic Front united many organisations against the tricameral parliament and apartheid rule. It broadened resistance beyond students to churches, civics, and communities."},
            {"date": "1 Dec 1985", "title": "COSATU is founded", "description": "COSATU brought major unions together in a national federation. Worker action became a central force in making apartheid increasingly unworkable."},
            {"date": "12 Jun 1986", "title": "Emergency rule expands", "description": "The nationwide state of emergency showed how much the apartheid state relied on repression. Even so, resistance and international pressure continued to deepen the crisis."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Internal resistance across two decades",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Revision should connect the 1970s and 1980s instead of treating them as isolated chapters. Black Consciousness helped revive confidence and youth politics, while unions, civics, and the UDF later turned resistance into a broad mass movement."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Black Consciousness stressed dignity and self-reliance."}</li>
          <li>{"Soweto showed that youth resistance could become a national revolt."}</li>
          <li>{"Trade unions and community organisations widened the social base of struggle."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why apartheid entered crisis",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The crisis of apartheid developed because resistance challenged the state in schools, factories, streets, and international forums. Botha's limited reforms failed because they did not end white minority rule or answer democratic demands."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The tricameral parliament excluded the African majority."}</li>
          <li>{"Emergency repression showed the state's dependence on force."}</li>
          <li>{"Sanctions and disinvestment raised the cost of continuing the system."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Useful comparisons for revision",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Strong revision compares methods, leadership, and outcomes. For example, you can compare student protest with worker protest, or compare internal mass action with international pressure."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Youth protest often carried symbolic power and attracted world attention."}</li>
          <li>{"Worker action threatened the economy directly through strikes and stayaways."}</li>
          <li>{"External pressure was most effective when linked to strong internal resistance."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Exam-ready key patterns",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When preparing essays and source answers, focus on turning points and patterns. Identify continuity and change, the relationship between cause and consequence, and the reasons historians see the 1980s as a decisive crisis."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Use key dates such as 1976, 1983, 1985, and 1986 accurately."}</li>
          <li>{"Always connect detail to a broader judgement."}</li>
          <li>{"Revision works best when you can explain why events mattered, not just what happened."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which movement emphasised psychological liberation and black pride in the 1970s?",
    options: ["Black Consciousness", "The tricameral parliament", "The National Party", "The Broederbond"],
    answer: "Black Consciousness",
    explanation: "Black Consciousness stressed mental liberation, dignity, and black self-reliance.",
  },
  {
    prompt: "Why is the Soweto Uprising often seen as a turning point?",
    options: ['It revived resistance and drew global attention', 'It brought all of the sanctions to an end', 'It set up the homelands in the country', 'It created the Constitution of the year 1996'],
    answer: 'It revived resistance and drew global attention',
    explanation: "Soweto re-energised the struggle and became an international symbol of apartheid brutality.",
  },
  {
    prompt: "How did trade unions contribute to the anti-apartheid struggle?",
    options: ['By using strikes and stayaways to disrupt the economy', 'By defending the pass laws', 'By creating the tricameral parliament', 'By bringing all civic protest to an end'],
    answer: 'By using strikes and stayaways to disrupt the economy',
    explanation: "Worker action put pressure on employers and the state through economic disruption.",
  },
  {
    prompt: "What was the main reason the UDF opposed the tricameral parliament?",
    options: ['It shut the African majority out of real national power', 'It created too much democracy', 'It gave power to the liberation movements', 'It united all of the races on equal terms'],
    answer: 'It shut the African majority out of real national power',
    explanation: "The UDF rejected reforms that tried to save apartheid without majority rule.",
  },
  {
    prompt: "Why are the states of emergency important in revision of the 1980s?",
    options: ['They show that the state relied heavily on repression', 'They ended all opposition for good', 'They were part of the Russian Revolution of 1917', 'They made the ANC legal in 1985'],
    answer: 'They show that the state relied heavily on repression',
    explanation: "Emergency rule highlighted the coercive character of the regime during its crisis.",
  },
  {
    prompt: "How did sanctions and disinvestment matter in the 1980s?",
    options: ["They increased the economic and political cost of apartheid", "They strengthened apartheid's international reputation", "They replaced all internal resistance", "They made the homelands independent"],
    answer: "They increased the economic and political cost of apartheid",
    explanation: "International pressure added to internal unrest and weakened the regime further.",
  },
  {
    prompt: "Which comparison is most useful in a revision essay?",
    options: ["Student protest versus worker protest as different forms of internal resistance", "Ancient Egypt versus the TRC with no link to the question", "A list of random dates only", "Only memorising one textbook heading"],
    answer: "Student protest versus worker protest as different forms of internal resistance",
    explanation: "Comparison helps show how different sectors challenged apartheid in different but connected ways.",
  },
  {
    prompt: "What best explains the crisis of apartheid?",
    options: ['Internal resistance and outside pressure made it unsustainable', 'The state met all demands through reform', 'A single event caused the whole crisis', 'The African majority accepted exclusion from politics'],
    answer: 'Internal resistance and outside pressure made it unsustainable',
    explanation: "The crisis deepened because pressure came from many fronts at once.",
  },
];

const ResistanceAndApartheidCrisisRevision = () => (
  <CapsSubjectTopic
    title="Resistance and Apartheid Crisis Revision"
    subtitle="Synoptic review of Black Consciousness, Soweto, unions, UDF, reform, and sanctions"
    learnSteps={learnSteps}
    task="gr12-resistance-and-apartheid-crisis-revision-t4"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default ResistanceAndApartheidCrisisRevision;
