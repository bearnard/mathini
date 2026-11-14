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
            {"date": "30 Jun 1960", "title": "Congo becomes independent", "description": "The Belgian Congo gained independence as the Republic of the Congo. Almost immediately, secession, army mutiny, and outside intervention plunged the country into crisis."},
            {"date": "17 Jan 1961", "title": "Lumumba is killed", "description": "Patrice Lumumba, Congo's first prime minister, was assassinated after being overthrown. His death became a symbol of Cold War interference in post-colonial Africa."},
            {"date": "26 Apr 1964", "title": "Tanzania is formed", "description": "Tanganyika and Zanzibar united to form Tanzania under Julius Nyerere's leadership. The new state became associated with nation-building and African socialism."},
            {"date": "5 Feb 1967", "title": "Arusha Declaration issued", "description": "Nyerere's Arusha Declaration set out the principles of ujamaa and self-reliance. It became central to Tanzania's post-colonial development strategy."},
            {"date": "9 Nov 1989", "title": "Berlin Wall falls", "description": "The collapse of the Berlin Wall symbolised the end of the Cold War order. It weakened apartheid South Africa's anti-communist justification for repression."},
            {"date": "2 Feb 1990", "title": "Negotiations are opened", "description": "De Klerk's speech unbanning liberation movements signalled a new political direction in South Africa. The global context had shifted, but internal resistance remained crucial."},
            {"date": "27 Apr 1994", "title": "Democracy is legitimised", "description": "South Africa's first democratic election gave legal and political authority to the new state. It marked the success of a negotiated transition despite severe instability."},
            {"date": "Jul 1995", "title": "TRC law passed", "description": "The new democratic government created the Truth and Reconciliation Commission. It showed how post-Cold War South Africa tried to balance truth, justice, and reconciliation."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Africa in the Cold War world",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Revision should connect South African change to wider African and global history. Congo shows how Cold War rivalry and resource politics could destabilise independence, while Tanzania shows a contrasting effort at unity and post-colonial development."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The Congo Crisis involved secession, foreign intervention, and Lumumba's removal."}</li>
          <li>{"Tanzania under Nyerere stressed nation-building and ujamaa."}</li>
          <li>{"Both cases reveal the challenges facing newly independent states."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why the end of the Cold War mattered",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The collapse of the Cold War altered South Africa's political environment. It reduced the usefulness of anti-communist fear as a defence of apartheid and made a negotiated settlement more acceptable to ruling elites and Western governments."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The National Party could no longer rely as easily on Cold War rhetoric."}</li>
          <li>{"Negotiations became a more realistic way to preserve stability."}</li>
          <li>{"Internal struggle remained essential, but the global context had shifted."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "From negotiation to election",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Revision should follow the chain from de Klerk's 1990 reforms to CODESA, deadlock, renewed talks, violence, and the 1994 election. The transition succeeded because compromise held despite severe instability."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mandela's release and the unbanning of parties opened the process."}</li>
          <li>{"Violence threatened the transition but did not stop it."}</li>
          <li>{"The 1994 election gave democratic legitimacy to the new state."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Truth, reconciliation, and historical judgement",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The TRC is useful for revision because it raises larger questions about how societies deal with painful pasts. Learners should be able to explain both the achievements and limits of truth-telling and conditional amnesty."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The TRC aimed to uncover abuses and encourage reconciliation."}</li>
          <li>{"Some praised it for preventing revenge and exposing hidden violence."}</li>
          <li>{"Others criticised it because justice and reparations often felt incomplete."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why is the Congo often used as a Cold War case study in African history?",
    options: ['Foreign intervention deepened its post-independence crisis', 'It avoided all outside influence during that time', 'It had no mineral wealth of any kind in the country', 'It never became an independent state'],
    answer: 'Foreign intervention deepened its post-independence crisis',
    explanation: "The Congo Crisis became deeply entangled with Cold War rivalry and outside interests.",
  },
  {
    prompt: "Which leader is most associated with Tanzania's policy of ujamaa?",
    options: ["Patrice Lumumba", "Julius Nyerere", "F.W. de Klerk", "Desmond Tutu"],
    answer: "Julius Nyerere",
    explanation: "Nyerere promoted ujamaa as a form of African socialism and rural development.",
  },
  {
    prompt: "How did the end of the Cold War affect apartheid South Africa?",
    options: ['It weakened the anti-communist excuse and encouraged talks', 'It strengthened the case for permanent white rule', 'It created the system of Bantu Education', 'It stopped all internal resistance'],
    answer: 'It weakened the anti-communist excuse and encouraged talks',
    explanation: "Global change made apartheid harder to defend and political settlement more likely.",
  },
  {
    prompt: "Which event publicly opened the road to negotiations in 1990?",
    options: ['The 2 February 1990 speech unbanning liberation movements', 'The Sharpeville massacre of the year 1960', 'The formation of SASO at the university in 1968', 'The Bisho massacre of the year 1992'],
    answer: 'The 2 February 1990 speech unbanning liberation movements',
    explanation: "De Klerk's speech and the unbanning announcements made formal negotiations possible.",
  },
  {
    prompt: "Why are CODESA and later negotiations important in revision?",
    options: ["They show how compromise produced a democratic transition", "They restored the tricameral parliament", "They ended the need for any constitution", "They proved violence had no effect on politics"],
    answer: "They show how compromise produced a democratic transition",
    explanation: "Negotiations transformed conflict into a constitutional settlement, even though the process was difficult.",
  },
  {
    prompt: "What gave the new South African order democratic legitimacy in 1994?",
    options: ['A universal election in which all races could vote', 'The continuation of rule in the homelands', 'A referendum for whites only', 'A takeover of the country by the UN military'],
    answer: 'A universal election in which all races could vote',
    explanation: "The 1994 election established the authority of a democratic government based on universal suffrage.",
  },
  {
    prompt: "What was one key aim of the TRC?",
    options: ['To investigate abuses of rights and promote reconciliation', 'To return South Africa to the system of apartheid', 'To organise the school protests of 1976', 'To defend the system of the homelands'],
    answer: 'To investigate abuses of rights and promote reconciliation',
    explanation: "The TRC sought truth about the past while supporting a peaceful democratic future.",
  },
  {
    prompt: "What should a strong revision answer about the transition always do?",
    options: ['Link South African events to wider African and world contexts', 'Ignore all chronology in the answer that you give', 'Treat every event as separate and unrelated', 'Avoid giving any kind of judgement at all'],
    answer: 'Link South African events to wider African and world contexts',
    explanation: "Grade 12 History expects learners to connect local transitions to wider Cold War and African developments.",
  },
];

const DemocracyAndColdWarRevision = () => (
  <CapsSubjectTopic
    title="Democracy and Cold War Revision"
    subtitle="Synoptic review of African independence, negotiations, democracy, and the new world order"
    learnSteps={learnSteps}
    task="gr12-democracy-and-cold-war-revision-t4"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default DemocracyAndColdWarRevision;
