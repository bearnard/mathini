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
            {"date": "Mar 1990", "title": "Seven Day War", "description": "Violence in the Pietermaritzburg area killed many people and highlighted the intensity of ANC-Inkatha conflict. It showed that the transition began in a deeply unstable environment."},
            {"date": "17 Jun 1992", "title": "Boipatong massacre", "description": "Residents of Boipatong were killed in a brutal attack linked to hostel-based violence and suspected security force complicity. The massacre led the ANC to suspend talks temporarily."},
            {"date": "7 Sep 1992", "title": "Bisho massacre", "description": "Ciskei soldiers opened fire on marchers demanding political change in Bisho. The killings exposed the danger posed by homeland rulers resisting democratic transition."},
            {"date": "10 Apr 1993", "title": "Chris Hani assassinated", "description": "The murder of Chris Hani brought South Africa close to a wider explosion of violence. Mandela's televised appeal for calm helped prevent the crisis from derailing the transition."},
            {"date": "27 Apr 1994", "title": "Election survives violence", "description": "Despite years of killings, intimidation, and extremist threats, South Africa held its democratic election. The vote became the political answer to instability and conflict."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Violence during the transition",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"South Africa's move toward democracy was never a simple peaceful story. While talks were happening, many communities experienced severe political violence, especially in KwaZulu-Natal and the townships around Johannesburg."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Clashes often involved ANC-aligned structures and Inkatha supporters."}</li>
          <li>{"Hostels and townships became flashpoints for organised attacks and retaliation."}</li>
          <li>{"Violence created fear and threatened confidence in the negotiation process."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The “third force” debate",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Many activists argued that hidden elements inside the security forces encouraged violence in order to weaken the democratic movement. This alleged covert involvement became known as the third force."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Evidence suggested some security structures armed or supported anti-ANC violence."}</li>
          <li>{"The state denied direct responsibility, but suspicion remained high."}</li>
          <li>{"The issue mattered because it showed how parts of the old order resisted transition from within."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Major crises: Boipatong, Bisho, Hani",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Several violent incidents nearly derailed the transition. The Boipatong massacre in 1992, the Bisho massacre in 1992, and the assassination of Chris Hani in 1993 all intensified anger and mistrust."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Boipatong led the ANC to withdraw from talks temporarily."}</li>
          <li>{"Bisho showed the danger of homeland resistance to democratic change."}</li>
          <li>{"Chris Hani's assassination pushed the country close to explosion, but also increased pressure to finalise the transition."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Containing the crisis",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The transition survived because many leaders and communities worked to prevent full-scale civil conflict. Negotiation, public appeals for calm, peace initiatives, and the political isolation of extremists helped keep the democratic process moving."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mandela and other leaders played an important role in calming the country after Hani's death."}</li>
          <li>{"Violence revealed how fragile the transition was."}</li>
          <li>{"The 1994 election became even more important as a democratic answer to instability."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "In which areas was political violence especially severe during the transition?",
    options: ["KwaZulu-Natal and Gauteng townships", "The Northern Cape mines only", "Namibia and Botswana", "Only in Parliament"],
    answer: "KwaZulu-Natal and Gauteng townships",
    explanation: "These regions saw intense conflict in the early 1990s.",
  },
  {
    prompt: "Which groups were often in violent conflict during the transition?",
    options: ["ANC-aligned supporters and Inkatha supporters", "British and Belgian troops", "Teachers and doctors", "The TRC and the IEC"],
    answer: "ANC-aligned supporters and Inkatha supporters",
    explanation: "Much of the violence involved conflict between ANC and Inkatha-aligned forces.",
  },
  {
    prompt: "What did the term “third force” suggest?",
    options: ["A new political party committed to peace", "Covert security involvement in stoking violence", "A foreign army invading South Africa", "A youth movement linked to schools"],
    answer: "Covert security involvement in stoking violence",
    explanation: "Many believed hidden elements in the state security apparatus encouraged violence to weaken negotiations.",
  },
  {
    prompt: "What happened at Boipatong in 1992?",
    options: ["A massacre intensified mistrust and disrupted negotiations", "The final constitution was signed", "The first democratic election was held", "Mandela was released from prison"],
    answer: "A massacre intensified mistrust and disrupted negotiations",
    explanation: "The Boipatong massacre was a major turning point that led the ANC to suspend talks temporarily.",
  },
  {
    prompt: "Why was the Bisho massacre historically significant?",
    options: ["It showed the danger of homeland resistance to democratic change", "It ended all homeland politics peacefully", "It took place during the 1976 uprising", "It established the TRC"],
    answer: "It showed the danger of homeland resistance to democratic change",
    explanation: "The killings at Bisho highlighted how homeland rulers and security forces could obstruct the transition.",
  },
  {
    prompt: "Who was assassinated in 1993, nearly pushing South Africa into crisis?",
    options: ["Steve Biko", "Chris Hani", "Oliver Tambo", "Bram Fischer"],
    answer: "Chris Hani",
    explanation: "Chris Hani's assassination shocked the country and increased pressure to complete the transition.",
  },
  {
    prompt: "How did leaders such as Mandela help after the Hani assassination?",
    options: ["They urged calm and kept attention on the democratic process", "They cancelled all negotiations permanently", "They supported right-wing violence", "They asked for foreign occupation"],
    answer: "They urged calm and kept attention on the democratic process",
    explanation: "Public appeals for restraint helped prevent wider collapse into civil conflict.",
  },
  {
    prompt: "What does the violence of the early 1990s show about the transition?",
    options: ["It was fragile and contested, not automatically peaceful", "It faced no serious opposition", "It was controlled entirely by one organisation", "It had nothing to do with negotiations"],
    answer: "It was fragile and contested, not automatically peaceful",
    explanation: "The transition involved real danger, instability, and struggles over power.",
  },
];

const PoliticalViolenceAndTransition = () => (
  <CapsSubjectTopic
    title="Political Violence and Transition"
    subtitle="Conflict, instability, and the struggle to keep negotiations alive"
    learnSteps={learnSteps}
    task="gr12-political-violence-and-transition-t3"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default PoliticalViolenceAndTransition;
