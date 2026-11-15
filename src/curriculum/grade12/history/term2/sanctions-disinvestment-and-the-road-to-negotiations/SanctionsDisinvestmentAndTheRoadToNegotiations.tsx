import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "4 Nov 1977", "title": "UN arms embargo", "description": "The UN Security Council made the arms embargo against South Africa mandatory. It marked a major step in the country's international isolation."},
            {"date": "Aug 1985", "title": "Debt crisis deepens", "description": "Foreign banks became unwilling to roll over South African loans, helping trigger a financial crisis and a sharp fall in the rand. The economic costs of apartheid became harder to ignore."},
            {"date": "2 Oct 1986", "title": "US sanctions enacted", "description": "The United States overrode President Reagan's veto and passed the Comprehensive Anti-Apartheid Act. It became one of the most important international sanctions measures of the decade."},
            {"date": "Jul 1987", "title": "Dakar talks held", "description": "Afrikaner intellectuals met ANC representatives in Dakar, Senegal. The talks showed that some white South Africans were beginning to consider negotiation seriously."},
            {"date": "2 Feb 1990", "title": "Negotiations become possible", "description": "F.W. de Klerk unbanned the ANC, PAC, and SACP and signalled a turn toward settlement. International pressure and internal resistance had helped create the conditions for this shift."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "The global anti-apartheid movement",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Apartheid was challenged not only inside South Africa but also across the world. Activists, churches, students, workers, and exiled liberation movements campaigned to isolate the regime diplomatically, economically, culturally, and morally."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Solidarity groups organised protests, petitions, and campus campaigns."}</li>
          <li>{"Sports boycotts denied South Africa the prestige of normal international participation."}</li>
          <li>{"Cultural boycotts signalled that apartheid was unacceptable in public life."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Sanctions and disinvestment",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Sanctions are official penalties imposed by governments, while disinvestment happens when companies or institutions withdraw money from a country. In the 1980s, both measures increasingly targeted apartheid South Africa."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Banks became less willing to lend to South Africa."}</li>
          <li>{"Foreign companies faced public pressure to leave or reduce involvement."}</li>
          <li>{"Measures such as the US Comprehensive Anti-Apartheid Act increased pressure on the regime."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Economic and political impact",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"International pressure did not work alone, but it added to South Africa's internal unrest and economic difficulties. Falling investment, debt problems, and damage to the country's image increased the cost of continuing apartheid."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Business leaders began to worry that permanent conflict threatened profits and stability."}</li>
          <li>{"The government could not easily present South Africa as a normal modern state."}</li>
          <li>{"Sanctions worked best when combined with internal strikes, boycotts, and political mobilisation."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Moving toward negotiation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"By the late 1980s, many leaders inside and outside the government recognised that apartheid could not be defended forever. Secret contacts and public debate about political settlement grew as repression failed and pressure mounted."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"International isolation weakened hard-line confidence."}</li>
          <li>{"Internal resistance made the country increasingly difficult to govern."}</li>
          <li>{"Together, these forces helped create the conditions for negotiations in the early 1990s."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "What outside pressure was meant to do",
    content: (
      <div className="space-y-4">
        <GapRule>{"Boycotts and sanctions were meant to cut apartheid South Africa off from the world, so that pressure for real democratic reform would grow."}</GapRule>
        <GapWorked title={"Tools of pressure"} steps={["Sanctions and boycotts cut trade and sport links.", "Disinvestment: companies and banks withdrew investment.", "Isolation raised the cost of apartheid and increased the push for democracy."]} />
        <GapMistake>{"Thinking sanctions were only about the economy."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is an economic sanction?",
    options: ["A reward given to a friendly government", "A penalty or restriction imposed to pressure a state", "A cultural festival organised by the UN", "A secret military alliance"],
    answer: "A penalty or restriction imposed to pressure a state",
    explanation: "Sanctions are intended to push governments to change their policies.",
  },
  {
    prompt: "What does “disinvestment” mean in the apartheid context?",
    options: ['Firms and institutions pulling their money out of South Africa', 'The government raising its military spending', 'Workers refusing to join the trade unions', 'The ANC moving its offices to other countries'],
    answer: 'Firms and institutions pulling their money out of South Africa',
    explanation: "Disinvestment campaigns pressured firms and investors to stop supporting the apartheid economy.",
  },
  {
    prompt: "Why were sports boycotts important?",
    options: ['They made apartheid appear normal to the world', 'They isolated South Africa and harmed its image abroad', 'They gave South Africa more chances to trade', 'They ended the system of migrant labour directly'],
    answer: 'They isolated South Africa and harmed its image abroad',
    explanation: "Exclusion from international sport made apartheid visible and costly in symbolic terms.",
  },
  {
    prompt: "How did sanctions affect the apartheid government?",
    options: ['They removed all internal resistance', 'They raised the economic and political cost of apartheid', 'They created the system of homelands', 'They guaranteed immediate peace in the townships'],
    answer: 'They raised the economic and political cost of apartheid',
    explanation: "Sanctions added pressure by harming confidence, lending, trade, and legitimacy.",
  },
  {
    prompt: "Which country passed the Comprehensive Anti-Apartheid Act in 1986?",
    options: ["South Africa", "The United States", "Soviet Union", "Mozambique"],
    answer: "The United States",
    explanation: "The US Comprehensive Anti-Apartheid Act became an important symbol of international pressure.",
  },
  {
    prompt: "Why did some South African business leaders begin supporting political change?",
    options: ['They believed endless conflict threatened the economy', 'They wanted stricter racial segregation', 'They had no interest in making any profits', 'They hoped to bring back the pass laws'],
    answer: 'They believed endless conflict threatened the economy',
    explanation: "Economic crisis and instability made apartheid look increasingly unsustainable to parts of business.",
  },
  {
    prompt: "Which statement best explains why negotiations became more likely by the late 1980s?",
    options: ["Internal resistance weakened while the state grew stronger", "Internal struggle and international pressure combined to weaken apartheid", "The African majority accepted exclusion from politics", "The United Nations took over South Africa directly"],
    answer: "Internal struggle and international pressure combined to weaken apartheid",
    explanation: "Neither internal nor external pressure acted alone; together they made apartheid increasingly untenable.",
  },
  {
    prompt: "What was the main aim of the international anti-apartheid movement?",
    options: ['To defend minority rule in South Africa', 'To isolate the regime and support democratic change', 'To promote sport for whites only', 'To strengthen the governments of the homelands'],
    answer: 'To isolate the regime and support democratic change',
    explanation: "The movement used many forms of pressure to force change and support majority rule.",
  },
];

const SanctionsDisinvestmentAndTheRoadToNegotiations = () => (
  <CapsSubjectTopic
    title="Sanctions, Disinvestment, and the Road to Negotiations"
    subtitle="International pressure, economic crisis, and the weakening of apartheid"
    learnSteps={learnSteps}
    task="gr12-sanctions-disinvestment-and-the-road-to-negotiations-t2"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default SanctionsDisinvestmentAndTheRoadToNegotiations;
