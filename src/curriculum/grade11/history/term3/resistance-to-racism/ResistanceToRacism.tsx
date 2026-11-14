import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "12 Feb 1909", "title": "NAACP is founded", "description": "The NAACP was created in the United States to fight segregation and racist violence. It became a major force in legal and public campaigns for equality."},
            {"date": "1920s", "title": "Harlem Renaissance flourishes", "description": "Black writers, artists, and musicians transformed cultural life in Harlem and beyond. Their work challenged racist stereotypes and affirmed Black identity."},
            {"date": "26 Jun 1952", "title": "Defiance Campaign begins", "description": "The ANC and its allies launched a mass civil disobedience campaign against apartheid laws. It showed the power of organised, non-violent resistance in South Africa."},
            {"date": "5 Dec 1955", "title": "Montgomery boycott starts", "description": "Black residents of Montgomery began a bus boycott after Rosa Parks's arrest. The campaign became a defining victory of the US Civil Rights Movement."},
            {"date": "2 Jul 1964", "title": "Civil Rights Act passed", "description": "The United States outlawed segregation in public places and banned employment discrimination. It was one of the movement's most important legal victories."},
            {"date": "1968", "title": "BCM takes shape", "description": "The Black Consciousness Movement emerged strongly through student activism in South Africa. It stressed Black pride, self-reliance, and psychological liberation."},
            {"date": "16 Jun 1976", "title": "Student revolt in Soweto", "description": "School students protested against Afrikaans as a medium of instruction. The uprising became a turning point in resistance to apartheid."},
            {"date": "1986", "title": "Sanctions hit apartheid", "description": "International pressure intensified through sanctions, boycotts, and divestment campaigns. Global solidarity raised the cost of maintaining apartheid."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'African American resistance in the USA',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Racist systems were challenged by organised resistance. In the USA, groups such as the <strong>NAACP</strong> used the courts and public campaigns to fight segregation, while the <strong>Harlem Renaissance</strong> celebrated Black identity, creativity, and pride.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">NAACP</strong>
            <p className="text-slate-600">Used legal challenges, lobbying, and protest to attack segregation and racist violence.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Harlem Renaissance</strong>
            <p className="text-slate-600">Writers, musicians, and artists challenged racist stereotypes through culture and intellectual life.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mass protest and civil rights victories',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Montgomery Bus Boycott</strong> of 1955–56 showed the power of disciplined mass action. Led by local activists and associated with Martin Luther King Jr., it helped energise the wider Civil Rights Movement that won major legal changes such as the <strong>Civil Rights Act of 1964</strong>.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-green-700">Why the boycott mattered:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>It attacked segregation in everyday life.</li>
            <li>It relied on collective sacrifice and organisation.</li>
            <li>It proved that non-violent protest could win national attention.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Anti-apartheid resistance in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In South Africa, the <strong>ANC</strong>, <strong>PAC</strong>, and later the <strong>Black Consciousness Movement</strong> all resisted apartheid in different ways. Major moments included the <strong>Defiance Campaign</strong> of the 1950s and the <strong>Soweto Uprising of 1976</strong>, when learners protested against Afrikaans as a medium of instruction.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">ANC</strong>
            <p className="text-slate-600">Used protest, mobilisation, and later armed struggle to oppose apartheid.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">PAC</strong>
            <p className="text-slate-600">Split from the ANC in 1959 and emphasised Africanist politics.</p>
          </div>
          <div className="rounded-xl bg-black/5 p-4">
            <strong className="text-slate-700">BCM</strong>
            <p className="text-slate-600">Inspired pride, self-reliance, and resistance to psychological oppression.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'International opposition and the decline of racist systems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Resistance was strengthened by global solidarity. Churches, students, trade unions, musicians, governments, and the United Nations condemned apartheid and racism. International <strong>sanctions</strong>, sports boycotts, and divestment campaigns increased pressure for change.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-indigo-700 mb-2">CAPS evaluation point:</p>
          <p className="text-slate-600">
            No single strategy ended racism on its own. Legal action, culture, grassroots protest, international solidarity, and political organisation worked together over time.
          </p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was the main role of the NAACP in the USA?',
    options: ['To challenge segregation and racist violence by law and protest', 'To support the Jim Crow laws in the courts', 'To set up the system of apartheid in South Africa', 'To campaign for the ideas of the Nazis in Europe'],
    answer: 'To challenge segregation and racist violence by law and protest',
    explanation: 'The NAACP became one of the most important long-term organisations fighting racial discrimination in the USA.',
  },
  {
    prompt: 'Why is the Harlem Renaissance important in a history of resistance?',
    options: ['It used literature, music and art to challenge racist stereotypes', 'It brought segregation into the cities of the north', 'It ended slavery throughout the United States', 'It created the Civil Rights Act of 1964 directly'],
    answer: 'It used literature, music and art to challenge racist stereotypes',
    explanation: 'Resistance was cultural as well as political, and the Harlem Renaissance helped reshape how Black life was represented.',
  },
  {
    prompt: 'What made the Montgomery Bus Boycott significant?',
    options: ['It showed that organised, non-violent mass protest could challenge segregation', 'It was the first violent revolt against the federal state', 'It made segregation on public transport legal', 'It took place in South Africa under apartheid'],
    answer: 'It showed that organised, non-violent mass protest could challenge segregation',
    explanation: 'The boycott demonstrated the power of collective action and became a key moment in the Civil Rights Movement.',
  },
  {
    prompt: 'What did the Civil Rights Act of 1964 do?',
    options: ['It outlawed segregation in public places and job discrimination', 'It brought in pass laws across the USA', 'It created the Jim Crow system of segregation', 'It granted independence to the colonies in Africa'],
    answer: 'It outlawed segregation in public places and job discrimination',
    explanation: 'This was one of the most important legal victories of the US Civil Rights Movement.',
  },
  {
    prompt: 'What was the Defiance Campaign?',
    options: ['A mass campaign of civil disobedience against unjust apartheid laws', 'A Nazi youth campaign that was run in Germany', 'A British military operation that was run in Kenya', 'A programme of education run by the apartheid state'],
    answer: 'A mass campaign of civil disobedience against unjust apartheid laws',
    explanation: 'The Defiance Campaign mobilised large numbers of people to break apartheid laws openly and non-violently.',
  },
  {
    prompt: 'What issue triggered the Soweto Uprising of 1976?',
    options: ['The forced use of Afrikaans as a language of instruction', 'The banning of jazz music in Johannesburg', 'The founding of the ANC in the year 1912', 'A rise in bus fares in the city of Cape Town only'],
    answer: 'The forced use of Afrikaans as a language of instruction',
    explanation: 'Students protested against a language policy that symbolised the wider oppression of Bantu Education.',
  },
  {
    prompt: 'What did the Black Consciousness Movement emphasise?',
    options: [
      'Black pride, psychological liberation, and self-reliance',
      'Support for apartheid institutions',
      'Immediate armed struggle only, with no community work',
      'A return to colonial rule',
    ],
    answer: 'Black pride, psychological liberation, and self-reliance',
    explanation: 'BCM argued that mental liberation was essential to defeating apartheid domination.',
  },
  {
    prompt: 'How did international pressure contribute to the defeat of apartheid?',
    options: [
      'Sanctions, boycotts, and global solidarity increased the cost of maintaining apartheid',
      'International states mostly expanded apartheid trade and support',
      'It had no effect because apartheid was only a domestic issue',
      'It replaced all internal resistance movements',
    ],
    answer: 'Sanctions, boycotts, and global solidarity increased the cost of maintaining apartheid',
    explanation: 'International opposition strengthened local resistance and isolated the apartheid state economically and morally.',
  },
];

const ResistanceToRacism = () => (
  <CapsSubjectTopic
    title="Resistance to Racism"
    subtitle="Civil rights, anti-apartheid struggle, and the many ways racist systems were challenged"
    learnSteps={learnSteps}
    task="gr11-resistance-to-racism-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ResistanceToRacism;
