import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term1/soweto-uprising/diagram.webp", alt: "Soweto Uprising" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1953", "title": "Bantu Education entrenched", "description": "The Bantu Education Act formalised an unequal school system for black learners. It aimed to prepare them for subordinate roles under apartheid."},
            {"date": "1974", "title": "Afrikaans decree imposed", "description": "The state ordered that Afrikaans be used as a medium of instruction in key subjects in black schools. Many students saw this as another form of oppression."},
            {"date": "16 Jun 1976", "title": "Students march in Soweto", "description": "Thousands of students marched peacefully against Afrikaans instruction. The protest was organised largely through student networks including the South African Students' Movement."},
            {"date": "16 Jun 1976", "title": "Police open fire", "description": "Police used tear gas and then live ammunition against the marching students. The killing of children turned the protest into a national and international crisis."},
            {"date": "16 Jun 1976", "title": "Hector Pieterson remembered", "description": "Photographs of Hector Pieterson after the shootings became iconic worldwide. They captured the brutality of apartheid and the courage of student resistance."},
            {"date": "1976–1977", "title": "Uprising spreads nationwide", "description": "Resistance spread from Soweto to other townships and towns across South Africa. The state replied with more shootings, arrests, and repression."},
            {"date": "Late 1970s", "title": "Youth join liberation struggle", "description": "Many young activists went into exile after the uprising. Some joined the ANC or PAC and strengthened the wider anti-apartheid struggle."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Why students protested",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Black school pupils were already angry about overcrowded classrooms, poor facilities, underqualified teachers, and a curriculum designed to prepare them for low-paid labour. Tension rose sharply when the state tried to force Afrikaans as a medium of instruction in key subjects."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Bantu Education kept black learners in an unequal and controlled school system."}</li>
          <li>{"Many students experienced Afrikaans as the language of the oppressor."}</li>
          <li>{"The protest began as a school issue but quickly became a political challenge to apartheid itself."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "16 June 1976",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"On 16 June 1976, thousands of Soweto students marched peacefully to protest against Afrikaans instruction. Police blocked the march, used tear gas, and then fired live ammunition into the crowd."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The South African Students' Movement helped organise the protest."}</li>
          <li>{"Hector Pieterson became a symbol of the uprising after photographs captured the horror of the shootings."}</li>
          <li>{"The day marked a turning point because school children openly confronted the apartheid state."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Spread and repression",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The uprising did not remain in Soweto. It spread to other townships and towns across the country as students, teachers, and communities joined the resistance. The government responded with arrests, shootings, and wider repression."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Hundreds of young people were killed or wounded in the months that followed."}</li>
          <li>{"Many activists went into exile and later joined the ANC or PAC outside South Africa."}</li>
          <li>{"The uprising showed that apartheid could not rely on passive acceptance from the younger generation."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Historical significance",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The Soweto Uprising revived internal resistance after a period of heavy repression in the 1960s. It also drew global attention to apartheid and strengthened solidarity campaigns abroad."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"It boosted the prestige of liberation movements and increased international condemnation of the regime."}</li>
          <li>{"Youth politics became a major force in the anti-apartheid struggle."}</li>
          <li>{"16 June is remembered in democratic South Africa as Youth Day."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What immediate issue triggered the Soweto Uprising in 1976?",
    options: ["The introduction of compulsory military service", "The enforcement of Afrikaans as a medium of instruction", "The closure of all churches in Soweto", "The arrest of Nelson Mandela"],
    answer: "The enforcement of Afrikaans as a medium of instruction",
    explanation: "Students protested against being forced to learn key subjects in Afrikaans.",
  },
  {
    prompt: "On what date did the Soweto Uprising begin?",
    options: ["21 March 1960", "16 June 1976", "11 February 1990", "27 April 1994"],
    answer: "16 June 1976",
    explanation: "The first major student protest and police shootings took place on 16 June 1976.",
  },
  {
    prompt: "What was Bantu Education designed to do under apartheid?",
    options: ["Provide equal opportunities for all learners", "Prepare black South Africans for subordinate roles in society", "Promote multilingual freedom in schools", "Give university access to all students"],
    answer: "Prepare black South Africans for subordinate roles in society",
    explanation: "Bantu Education was deliberately unequal and aimed at limiting black advancement.",
  },
  {
    prompt: "Why did many learners reject Afrikaans in schools?",
    options: ["It was only spoken in Europe", "They saw it as the language of the apartheid oppressor", "It could not be used in mathematics or science", "It had been banned by the ANC"],
    answer: "They saw it as the language of the apartheid oppressor",
    explanation: "For many pupils, Afrikaans symbolised state control and racial domination.",
  },
  {
    prompt: "Who became an international symbol of the Soweto Uprising?",
    options: ["Steve Biko", "Hector Pieterson", "Chris Hani", "Walter Sisulu"],
    answer: "Hector Pieterson",
    explanation: "The famous photograph of Hector Pieterson after police opened fire became one of the best-known images of apartheid.",
  },
  {
    prompt: "How did the apartheid state respond to the Soweto protests?",
    options: ["It immediately ended apartheid", "It used police force, arrests, and wider repression", "It invited students into parliament", "It made English the only school language nationwide"],
    answer: "It used police force, arrests, and wider repression",
    explanation: "The state reacted violently, and repression spread as the revolt grew.",
  },
  {
    prompt: "What was one major consequence of the Soweto Uprising?",
    options: ["Large numbers of activists went into exile and joined liberation movements", "The homeland system was expanded successfully", "The tricameral parliament was accepted by students", "Apartheid was declared legal by the United Nations"],
    answer: "Large numbers of activists went into exile and joined liberation movements",
    explanation: "The uprising pushed many young activists into exile, where some joined the ANC or PAC.",
  },
  {
    prompt: "Why is the Soweto Uprising historically important?",
    options: ["It revived internal resistance and intensified international opposition to apartheid", "It marked the start of the Anglo-Boer War", "It ended all student protests in South Africa", "It created the Union of South Africa"],
    answer: "It revived internal resistance and intensified international opposition to apartheid",
    explanation: "Soweto showed that youth resistance could challenge apartheid and shift world opinion.",
  },
];

const SowetoUprising = () => (
  <CapsSubjectTopic
    title="Soweto Uprising"
    subtitle="Bantu Education, Afrikaans, and the student revolt of 16 June 1976"
    learnSteps={learnSteps}
    task="gr12-soweto-uprising-t1"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default SowetoUprising;
