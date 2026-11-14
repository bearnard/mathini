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
            {"date": "20 Aug 1983", "title": "UDF opposes reforms", "description": "The United Democratic Front was launched to campaign against Botha's constitutional changes. It argued that the reforms were designed to save apartheid, not end it."},
            {"date": "2 Nov 1983", "title": "Whites approve constitution", "description": "White voters approved the new constitution in a whites-only referendum. The plan created a tricameral parliament but still excluded the African majority."},
            {"date": "Aug 1984", "title": "Tricameral elections boycotted", "description": "Elections for the Coloured and Indian chambers were widely boycotted. Many people saw the new system as a divide-and-rule tactic that preserved white domination."},
            {"date": "14 Sep 1984", "title": "Botha gains presidency", "description": "The tricameral parliament came into operation and P.W. Botha became executive State President. Power became more centralised even as the regime claimed to be reforming."},
            {"date": "Sep 1984", "title": "Vaal uprising erupts", "description": "Township protests in the Vaal Triangle helped expose the failure of Botha's reform strategy. Resistance grew because the reforms left the core injustice of apartheid intact."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Why Botha introduced reforms",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"By the late 1970s and early 1980s, apartheid faced pressure from economic slowdown, labour unrest, township anger, and international criticism. P.W. Botha tried to modernise the system without giving up white control."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"He believed apartheid needed adaptation to survive."}</li>
          <li>{"Reform was meant to divide opposition and co-opt some groups."}</li>
          <li>{"At the same time, security structures were strengthened to crush resistance."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The tricameral parliament",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The 1983 constitution created three separate parliamentary chambers: one for whites, one for Coloureds, and one for Indians. Africans, who formed the majority of the population, were excluded from national political power and pushed into the homeland system."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Whites still held the most power in the new system."}</li>
          <li>{"The office of executive state president gave Botha more central authority."}</li>
          <li>{"The system tried to make apartheid look more flexible without ending racial inequality."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Total strategy: reform and repression together",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Botha called his approach a total strategy. It mixed limited concessions with harsh security measures, aiming to defeat resistance while creating the image of change."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Some apartheid laws were adjusted, but core white minority rule remained intact."}</li>
          <li>{"Black local authorities and homeland policies still denied real democratic citizenship."}</li>
          <li>{"The military, police, and intelligence services gained even greater influence in politics."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why the reforms failed",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Most anti-apartheid organisations rejected the tricameral system because it left the central injustice untouched. Instead of stabilising South Africa, Botha's reforms helped trigger even broader mass resistance."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The UDF mobilised against the constitution and election structures."}</li>
          <li>{"Africans rejected exclusion from real decision-making."}</li>
          <li>{"The reforms deepened the crisis because people saw them as an attempt to save apartheid, not end it."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What did the 1983 tricameral parliament create?",
    options: ['A single non-racial parliament for all adults', 'Separate chambers for whites, Coloureds and Indians', "A workers' republic led by trade unions", 'An elected government with an African majority'],
    answer: 'Separate chambers for whites, Coloureds and Indians',
    explanation: "The tricameral system created separate racial chambers and still excluded Africans.",
  },
  {
    prompt: "Which group remained excluded from national political power under the tricameral system?",
    options: ["Whites", "Africans", "Indians", "Coloureds"],
    answer: "Africans",
    explanation: "The African majority was left outside the new parliament and tied to homeland politics.",
  },
  {
    prompt: "Why did P.W. Botha introduce reforms in the 1980s?",
    options: ['Because apartheid had no opposition at all', 'To adapt apartheid under pressure from inside and abroad', 'To create majority rule at once', 'To take the security forces out of politics'],
    answer: 'To adapt apartheid under pressure from inside and abroad',
    explanation: "Botha hoped limited reform would preserve white control while reducing opposition.",
  },
  {
    prompt: "What did Botha mean by “total strategy”?",
    options: ["Ending all laws and allowing free elections", "Combining limited reform with stronger repression", "Giving independence to every township", "Replacing parliament with trade unions"],
    answer: "Combining limited reform with stronger repression",
    explanation: "Total strategy mixed selective change with intensified military and police power.",
  },
  {
    prompt: "Why did many South Africans reject the tricameral parliament?",
    options: ["It abolished racial classification immediately", "It preserved white domination and excluded the African majority", "It handed power to the ANC", "It made South Africa a socialist state"],
    answer: "It preserved white domination and excluded the African majority",
    explanation: "The core injustice of apartheid remained in place, so the reforms lacked legitimacy.",
  },
  {
    prompt: "Which anti-apartheid umbrella organisation campaigned strongly against the tricameral parliament?",
    options: ["UDF", "Broederbond", "SADF", "NP Youth League"],
    answer: "UDF",
    explanation: "The UDF was formed in 1983 largely to oppose Botha's constitutional reforms.",
  },
  {
    prompt: "What happened to state power under the new constitution?",
    options: ["It was decentralised to democratic local councils", "It became more centralised under an executive state president", "It passed entirely to the United Nations", "It was abolished in favour of direct rule by judges"],
    answer: "It became more centralised under an executive state president",
    explanation: "Botha gained stronger executive powers under the 1983 constitutional changes.",
  },
  {
    prompt: "What was one result of Botha's reforms?",
    options: ["They stabilised apartheid permanently", "They helped trigger broader internal resistance", "They ended sanctions at once", "They removed the homeland system"],
    answer: "They helped trigger broader internal resistance",
    explanation: "Instead of solving the crisis, the reforms convinced many people to mobilise more strongly against apartheid.",
  },
];

const TricameralParliamentAndPWBothaReforms = () => (
  <CapsSubjectTopic
    title="Tricameral Parliament and P.W. Botha Reforms"
    subtitle="Limited reform, continued exclusion, and the apartheid state’s total strategy"
    learnSteps={learnSteps}
    task="gr12-tricameral-parliament-and-pw-botha-reforms-t2"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default TricameralParliamentAndPWBothaReforms;
