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
            {"date": "20 Jul 1985", "title": "Partial emergency declared", "description": "The apartheid state imposed a state of emergency in selected magisterial districts after rising township unrest. It gave security forces wider powers of detention, raids, and censorship."},
            {"date": "12 Jun 1986", "title": "National emergency imposed", "description": "A broader nationwide state of emergency followed in 1986. The government could now arrest without trial, restrict movement, and intensify military-style control in townships."},
            {"date": "Jun 1986", "title": "Censorship tightens sharply", "description": "Emergency regulations restricted journalists and limited reporting on unrest and police violence. The state tried to hide the scale of repression from both South Africans and the world."},
            {"date": "24 Feb 1988", "title": "Groups face restrictions", "description": "The government severely restricted many anti-apartheid organisations, including UDF affiliates, under emergency regulations. Mass detentions and bans showed how far the regime relied on coercion."},
            {"date": "13 Sep 1989", "title": "Cape Town march defies bans", "description": "A large anti-apartheid march led by religious leaders challenged the climate of fear created by emergency rule. It showed that repression had not restored the regime's legitimacy or control."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Escalating state violence",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"As protests grew in the mid-1980s, the apartheid government relied increasingly on force. Police, soldiers, and intelligence agencies were deployed into townships to intimidate communities and break organised opposition."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Security forces used teargas, rubber bullets, live ammunition, raids, and mass arrests."}</li>
          <li>{"Activists were often detained without trial under security legislation."}</li>
          <li>{"The state also banned meetings and restricted organisations and publications."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "The states of emergency",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A partial state of emergency was declared in 1985, followed by a wider national state of emergency in 1986. These measures gave the government sweeping powers to search, arrest, censor, and control movement."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Normal legal protections were weakened or bypassed."}</li>
          <li>{"Townships were heavily patrolled and many young activists disappeared into detention."}</li>
          <li>{"Emergency powers revealed that the regime could rule only through coercion."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Censorship and fear",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The government tried to control what South Africans and the world could see. Journalists faced restrictions, funerals were monitored, and images of police violence were censored, but information still spread through churches, foreign media, and underground networks."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Repression created fear but also fuelled anger and solidarity."}</li>
          <li>{"Families and communities organised around detainee support campaigns."}</li>
          <li>{"International audiences increasingly saw apartheid as a violent police state."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why repression failed",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Emergency rule weakened many organisations, but it did not solve the political crisis. Resistance adapted, international pressure intensified, and even parts of business and the ruling elite began to see that apartheid had no secure future."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Mass support for democracy could not be eliminated by arrests alone."}</li>
          <li>{"Repression damaged the regime's legitimacy at home and abroad."}</li>
          <li>{"The crisis pushed South Africa closer to negotiations rather than back to stable minority rule."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Held without trial",
    content: (
      <div className="space-y-4">
        <GapRule>{"Emergency laws let police arrest a person and keep them locked up without bringing them before a court. Families often did not know where the detainee was."}</GapRule>
        <GapWorked title={"What it meant"} steps={["Police could detain a person without charging them.", "The person did not appear in court.", "Families often did not know where the person was.", "The states of emergency of 1985 and 1986 widened these powers."]} />
        <GapMistake>{"Thinking detainees had the right to a quick trial."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why did the apartheid state declare states of emergency in the 1980s?",
    options: ["To expand democratic rights for all citizens", "To give itself wider powers to suppress resistance", "To prepare for the 1994 election", "To legalise the ANC"],
    answer: "To give itself wider powers to suppress resistance",
    explanation: "Emergency regulations allowed the state to detain, censor, and repress more aggressively.",
  },
  {
    prompt: "What happened under detention without trial?",
    options: ['People could be held without the normal court process', 'Only judges were allowed to protest', 'All political prisoners were set free', 'Trade unions ran the courts of the country'],
    answer: 'People could be held without the normal court process',
    explanation: "Detention without trial gave the government a powerful tool to silence activists.",
  },
  {
    prompt: "Which years are most associated with the major states of emergency in apartheid South Africa?",
    options: ["1960 and 1961", "1976 and 1977", "1985 and 1986", "1993 and 1994"],
    answer: "1985 and 1986",
    explanation: "A partial emergency was declared in 1985 and a broader national emergency followed in 1986.",
  },
  {
    prompt: "What was one effect of emergency rule in townships?",
    options: ["Heavy police and military presence", "Free local elections for all residents", "The abolition of censorship", "The closure of all factories"],
    answer: "Heavy police and military presence",
    explanation: "Townships were heavily patrolled and controlled by security forces.",
  },
  {
    prompt: "Why did the government censor media coverage during the emergency?",
    options: ['To hide the extent of the violence and repression', 'To promote open debate in the country', 'To teach history more accurately', 'To help the UDF to recruit more members'],
    answer: 'To hide the extent of the violence and repression',
    explanation: "The state hoped censorship would control public opinion inside and outside South Africa.",
  },
  {
    prompt: "What was one international consequence of emergency repression?",
    options: ['Greater sympathy for apartheid abroad', 'More condemnation of South Africa as a police state', 'The end of all of the sanctions at once', 'Recognition of the homelands by the United Nations'],
    answer: 'More condemnation of South Africa as a police state',
    explanation: "Images and reports of repression intensified global opposition to apartheid.",
  },
  {
    prompt: "Why did repression fail to solve the apartheid crisis?",
    options: ["Resistance and pressure continued despite arrests and censorship", "There was no resistance to suppress", "The state refused to use security laws", "Emergency powers transferred power to the majority"],
    answer: "Resistance and pressure continued despite arrests and censorship",
    explanation: "The state could injure organisations, but it could not restore long-term legitimacy or stability.",
  },
  {
    prompt: "Which statement best sums up emergency rule in the 1980s?",
    options: ['It showed that apartheid relied more and more on force', 'It solved the problem of racial inequality', 'It made the constitution fully democratic', 'It took the military out of politics'],
    answer: 'It showed that apartheid relied more and more on force',
    explanation: "Emergency rule revealed the regime's dependence on force rather than consent.",
  },
];

const RepressionAndStatesOfEmergency = () => (
  <CapsSubjectTopic
    title="Repression and States of Emergency"
    subtitle="Security crackdowns, detention without trial, and the limits of force"
    learnSteps={learnSteps}
    task="gr12-repression-and-states-of-emergency-t2"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default RepressionAndStatesOfEmergency;
