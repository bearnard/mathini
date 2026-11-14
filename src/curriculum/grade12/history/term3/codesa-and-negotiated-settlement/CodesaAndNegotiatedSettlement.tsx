import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term3/codesa-and-negotiated-settlement/diagram.webp", alt: "CODESA and the Negotiated Settlement" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "4 May 1990", "title": "Groote Schuur Minute", "description": "The ANC and government reached an early agreement on political prisoners, exiles, and further talks. It helped build a framework for formal negotiations."},
            {"date": "14 Sep 1991", "title": "Peace Accord signed", "description": "The National Peace Accord created structures to reduce political violence and support talks. It recognised that negotiations needed a less violent environment to survive."},
            {"date": "20–21 Dec 1991", "title": "CODESA I opens", "description": "The Convention for a Democratic South Africa brought many political organisations together for formal negotiations. Delegates adopted a declaration of intent toward a non-racial democracy."},
            {"date": "15–16 May 1992", "title": "CODESA II deadlocks", "description": "Talks broke down over majority rule, veto powers, and constitutional arrangements. The ANC and National Party remained divided on how power would be shared during transition."},
            {"date": "26 Sep 1992", "title": "Record of Understanding", "description": "The ANC and government agreed on steps that helped restart the negotiation process after crisis. It showed that compromise remained preferable to prolonged conflict."},
            {"date": "18 Nov 1993", "title": "Interim constitution adopted", "description": "Negotiators produced the interim constitutional framework for South Africa's democratic transition. It secured one person, one vote and paved the way for the 1994 election."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Starting negotiations",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"After the unbanning of liberation movements, formal talks were needed to design a new political order. CODESA, the Convention for a Democratic South Africa, brought together many political organisations to discuss South Africa's future."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"CODESA I met in December 1991 and adopted a declaration of intent."}</li>
          <li>{"Talks focused on how to move from apartheid to non-racial democracy."}</li>
          <li>{"Negotiations had to balance majority rule with fears about security and minority protection."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Deadlock and disagreement",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Negotiations were difficult because the ANC and National Party disagreed over how much power should remain in minority hands during the transition. Violence in the country also made trust harder to build."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The ANC pushed for majority rule and a sovereign constitutional assembly."}</li>
          <li>{"The National Party wanted strong power-sharing arrangements and veto protections."}</li>
          <li>{"CODESA II failed when these differences could not be resolved."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Compromise after crisis",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Despite breakdowns, talks resumed because no side could impose a lasting military victory. The Record of Understanding in 1992 and later negotiations helped move the process forward again."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Both sides accepted the need for compromise to avoid civil war and economic collapse."}</li>
          <li>{"The Multi-Party Negotiating Forum replaced CODESA and continued the constitutional process."}</li>
          <li>{"Agreement grew around an interim constitution and an elected body to write the final constitution."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "What the settlement achieved",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The negotiated settlement did not satisfy every demand fully, but it created a framework for democratic elections and a constitutional state. It showed that transitions often depend on compromise under pressure."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"An interim constitution provided the rules for the 1994 election."}</li>
          <li>{"The principle of one person, one vote was secured."}</li>
          <li>{"Negotiations replaced apartheid law with a path toward democratic legitimacy."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does CODESA stand for?",
    options: ["Congress of Democratic South Africans", "Convention for a Democratic South Africa", "Council on Development in South Africa", "Committee of Democratic State Affairs"],
    answer: "Convention for a Democratic South Africa",
    explanation: "CODESA was the formal negotiation forum used in the early 1990s transition.",
  },
  {
    prompt: "What was a central dispute during CODESA?",
    options: ['Whether South Africa should return to colonial rule', 'How to balance majority rule with power-sharing and protections', 'Whether all elections should be abolished for ever', 'How to split South Africa into foreign colonies'],
    answer: 'How to balance majority rule with power-sharing and protections',
    explanation: "The ANC and National Party disagreed sharply over constitutional power during the transition.",
  },
  {
    prompt: "What happened to CODESA II?",
    options: ["It immediately created the final constitution", "It reached deadlock and failed to produce full agreement", "It elected Nelson Mandela president", "It merged with the TRC"],
    answer: "It reached deadlock and failed to produce full agreement",
    explanation: "CODESA II broke down because major differences over constitutional arrangements remained unresolved.",
  },
  {
    prompt: "Why did negotiations resume after breakdowns?",
    options: ['All of the violence had come to an end', 'Compromise was still better than long conflict', 'Apartheid had become popular once again', 'The UN forced a constitution on South Africa'],
    answer: 'Compromise was still better than long conflict',
    explanation: "Neither side could secure a stable future without a negotiated settlement.",
  },
  {
    prompt: "What was the Record of Understanding?",
    options: ["A secret police document from the 1970s", "An agreement that helped revive negotiations in 1992", "The final Constitution of 1996", "A list of homeland leaders"],
    answer: "An agreement that helped revive negotiations in 1992",
    explanation: "The Record of Understanding helped move the ANC and government back toward settlement after crisis.",
  },
  {
    prompt: "Which body continued the negotiation process after CODESA?",
    options: ["The Multi-Party Negotiating Forum", "The Broederbond Council", "The Sharpeville Commission", "The Freedom Charter Committee"],
    answer: "The Multi-Party Negotiating Forum",
    explanation: "Later talks in the Multi-Party Negotiating Forum produced the interim constitutional framework.",
  },
  {
    prompt: "What did the interim constitution make possible?",
    options: ["A return to white minority rule", "The 1994 democratic election", "The banning of all parties", "The cancellation of voting rights"],
    answer: "The 1994 democratic election",
    explanation: "The interim constitution created the rules for the transition election and a democratic state.",
  },
  {
    prompt: "Which principle was secured through the negotiated settlement?",
    options: ["One person, one vote in a democratic system", "Permanent racial chambers in parliament", "No constitution at all", "Voting rights for whites only"],
    answer: "One person, one vote in a democratic system",
    explanation: "The settlement ended apartheid's exclusionary political system and established democratic citizenship.",
  },
];

const CodesaAndNegotiatedSettlement = () => (
  <CapsSubjectTopic
    title="CODESA and the Negotiated Settlement"
    subtitle="From deadlock to compromise in South Africa’s transition"
    learnSteps={learnSteps}
    task="gr12-codesa-and-negotiated-settlement-t3"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default CodesaAndNegotiatedSettlement;
