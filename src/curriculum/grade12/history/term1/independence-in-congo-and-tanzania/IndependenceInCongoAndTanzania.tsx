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
            {"date": "30 Jun 1960", "title": "Congo becomes independent", "description": "The Congo gained independence from Belgium with Patrice Lumumba as prime minister and Joseph Kasavubu as president. Independence came without strong preparation for self-government."},
            {"date": "Jul 1960", "title": "Army mutiny begins", "description": "The Force Publique mutinied soon after independence, revealing how fragile the new Congolese state was. Disorder opened the way for deeper internal and foreign intervention."},
            {"date": "11 Jul 1960", "title": "Katanga secedes", "description": "Katanga, the mineral-rich province, declared secession under Moise Tshombe with outside backing. This intensified the Congo Crisis and drew in the UN and Cold War powers."},
            {"date": "17 Jan 1961", "title": "Lumumba is killed", "description": "Patrice Lumumba was murdered after being removed from power. His death became one of the most notorious episodes of Cold War interference in Africa."},
            {"date": "9 Dec 1961", "title": "Tanganyika gains independence", "description": "Tanganyika became independent from Britain under Julius Nyerere. It followed a more stable path than the Congo in its early years."},
            {"date": "26 Apr 1964", "title": "Tanzania is formed", "description": "Tanganyika united with Zanzibar to create Tanzania. The new state aimed to build national unity across ethnic and regional differences."},
            {"date": "24 Nov 1965", "title": "Mobutu seizes power", "description": "Joseph Mobutu took control in a coup and later built a long dictatorship. His rule showed how the Congo Crisis ended in authoritarian stability rather than democratic nation-building."},
            {"date": "1967", "title": "Arusha Declaration announced", "description": "Nyerere set out the policy of ujamaa, or African socialism, in the Arusha Declaration. It promoted villagisation, rural development, and self-reliance."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "The Congo after Belgian rule",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Belgian colonial rule in the Congo extracted mineral wealth but invested very little in preparing Congolese people for self-government. When independence arrived in June 1960, the new state faced serious problems almost immediately."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Patrice Lumumba became prime minister and Joseph Kasavubu became president."}</li>
          <li>{"The army mutinied soon after independence, showing how fragile the new state was."}</li>
          <li>{"The mineral-rich Katanga province tried to break away with outside backing."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The Congo Crisis and the Cold War",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The Congo Crisis became an international issue because the United Nations, Belgium, the United States, and the Soviet Union all became involved. Cold War tensions intensified local conflict instead of allowing the country a stable transition."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Lumumba asked for help to defeat secession and restore order."}</li>
          <li>{"He was removed from power and later killed in 1961."}</li>
          <li>{"Mobutu eventually took control and established a long dictatorship."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Tanganyika, Zanzibar, and Tanzania",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Tanganyika gained independence from Britain in 1961 under Julius Nyerere. In 1964 it united with Zanzibar to form Tanzania, which followed a more stable path than the Congo."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Nyerere emphasised national unity and tried to reduce ethnic division."}</li>
          <li>{"His policy of ujamaa promoted African socialism, villagisation, and rural development."}</li>
          <li>{"Tanzania became an important supporter of liberation movements in Southern Africa."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Post-colonial challenges",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Both countries show that independence did not end struggle. New African states often inherited weak economies, artificial borders, few skilled administrators, and heavy pressure from global powers."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The Congo illustrates how resources and Cold War interference could destabilise a new state."}</li>
          <li>{"Tanzania shows that stability and nation-building were possible, even if development remained difficult."}</li>
          <li>{"Historians compare these cases to debate the weight of colonial legacies, leadership, and external pressure."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "In which year did the Congo gain independence from Belgium?",
    options: ["1948", "1960", "1964", "1976"],
    answer: "1960",
    explanation: "The Congo became independent on 30 June 1960.",
  },
  {
    prompt: "Who became prime minister of the Congo at independence?",
    options: ["Patrice Lumumba", "Mobutu Sese Seko", "Julius Nyerere", "Kenneth Kaunda"],
    answer: "Patrice Lumumba",
    explanation: "Patrice Lumumba was the Congo's first prime minister after independence.",
  },
  {
    prompt: "Why was Katanga important in the Congo Crisis?",
    options: ["It was the capital city of the Congo", "It was a mineral-rich province that tried to secede", "It united the Congo with Tanzania", "It was the main centre of Portuguese rule"],
    answer: "It was a mineral-rich province that tried to secede",
    explanation: "Katanga's attempted secession deepened the Congo Crisis and attracted foreign involvement.",
  },
  {
    prompt: "Which international organisation sent a peacekeeping mission to the Congo?",
    options: ["NATO", "The United Nations", "The African Union", "The Commonwealth"],
    answer: "The United Nations",
    explanation: "The UN became heavily involved in trying to stabilise the Congo after independence.",
  },
  {
    prompt: "Who led Tanganyika to independence and later became the key leader of Tanzania?",
    options: ["Julius Nyerere", "Patrice Lumumba", "Robert Mugabe", "Samora Machel"],
    answer: "Julius Nyerere",
    explanation: "Julius Nyerere was the central leader in Tanganyika and then Tanzania.",
  },
  {
    prompt: "What was ujamaa in Tanzania?",
    options: ["A policy of African socialism and villagisation", "A military pact with Belgium", "A programme to restore colonial rule", "A plan to divide Tanzania into ethnic states"],
    answer: "A policy of African socialism and villagisation",
    explanation: "Nyerere used ujamaa to promote collective rural development and national unity.",
  },
  {
    prompt: "In what year did Tanganyika and Zanzibar unite to form Tanzania?",
    options: ["1961", "1964", "1977", "1989"],
    answer: "1964",
    explanation: "The union of Tanganyika and Zanzibar created Tanzania in 1964.",
  },
  {
    prompt: "Which challenge was common to many newly independent African states?",
    options: ["Inherited weak economies and external interference", "Too many trained administrators from colonial rule", "Immediate freedom from all foreign influence", "No political conflict at all after independence"],
    answer: "Inherited weak economies and external interference",
    explanation: "Many new states faced colonial legacies, underdevelopment, and pressure from Cold War powers.",
  },
];

const IndependenceInCongoAndTanzania = () => (
  <CapsSubjectTopic
    title="Independence in Congo and Tanzania"
    subtitle="Decolonisation, Cold War pressures, and post-colonial challenges in Africa"
    learnSteps={learnSteps}
    task="gr12-independence-in-congo-and-tanzania-t1"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default IndependenceInCongoAndTanzania;
