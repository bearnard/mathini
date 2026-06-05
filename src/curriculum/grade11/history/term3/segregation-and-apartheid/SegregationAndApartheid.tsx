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
            {"date": "1877", "title": "Reconstruction ends", "description": "Federal troops withdrew from the US South, and white southern elites regained control. This opened the way for Jim Crow segregation and Black disenfranchisement."},
            {"date": "1896", "title": "Separate but equal approved", "description": "In Plessy v. Ferguson, the US Supreme Court upheld segregation. The ruling gave legal cover to a deeply unequal racial order."},
            {"date": "1948", "title": "Apartheid wins power", "description": "South Africa's National Party won the election and formalised apartheid. Racial separation became a central national system of rule."},
            {"date": "1950", "title": "Population classified by race", "description": "The Population Registration Act assigned South Africans to racial categories. This classification became the basis for many apartheid controls."},
            {"date": "1950", "title": "Forced removals legalized", "description": "The Group Areas Act enforced racial residential separation. It uprooted communities and reserved valuable areas mainly for whites."},
            {"date": "1952", "title": "Pass laws intensified", "description": "Apartheid authorities tightened pass controls over Black movement and labour. These laws made everyday mobility dependent on state permission."},
            {"date": "1953", "title": "Bantu Education imposed", "description": "The Bantu Education Act created an inferior school system for Black South Africans. It was designed to keep racial hierarchy in place."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Jim Crow segregation in the USA',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Reconstruction, southern US states built a system of racial segregation known as <strong>Jim Crow</strong>. Black Americans were separated from whites in schools, transport, housing, and public facilities, while voting rights were suppressed through intimidation and discriminatory laws.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Plessy v. Ferguson, 1896</strong>
            <p className="text-slate-600">The US Supreme Court upheld segregation under the false idea of <strong>"separate but equal"</strong>.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Reality</strong>
            <p className="text-slate-600">Separate facilities were almost never equal and segregation reinforced white supremacy.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Apartheid after 1948 in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In 1948 the <strong>National Party</strong> won the election and formalised racial segregation as <strong>apartheid</strong>. The state classified every person by race and used law to control where people could live, work, learn, and move.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-2xl">
          <p className="font-bold text-slate-700">Key apartheid laws:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li><strong>Population Registration Act (1950):</strong> classified South Africans by race.</li>
            <li><strong>Group Areas Act (1950):</strong> forced racial residential separation and removals.</li>
            <li><strong>Pass Laws:</strong> restricted Black South Africans' movement and labour.</li>
            <li><strong>Bantu Education Act (1953):</strong> designed an inferior education for Black learners.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'How these systems controlled everyday life',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Segregation and apartheid were not only about separate spaces. They shaped access to jobs, land, political rights, and dignity. Both systems relied on the power of the state, the police, and the courts to enforce racial inequality.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Housing</strong>
            <p className="text-slate-600">Communities were divided and people were forced into under-resourced areas.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Education</strong>
            <p className="text-slate-600">Schooling was unequal and designed to keep white privilege in place.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Citizenship</strong>
            <p className="text-slate-600">Black people were denied equal political rights and treated as second-class citizens.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing segregation and apartheid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          CAPS History expects you to compare systems. Jim Crow and apartheid were created in different countries, but both were designed to preserve white supremacy through law, violence, and unequal access to power.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-indigo-700 mb-2">Useful comparison points:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Similarities: racial classification, separation, political exclusion, and violence.</li>
            <li>Differences: apartheid was a more centralised national system with broader legal control over movement and residence.</li>
            <li>In both cases, law gave a false appearance of order to an unjust system.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was Jim Crow?',
    options: [
      'A system of racial segregation and disenfranchisement in the USA, especially in the South',
      'A campaign to end segregation in South Africa',
      'A legal code that guaranteed equal education for all',
      'A political party in the United States',
    ],
    answer: 'A system of racial segregation and disenfranchisement in the USA, especially in the South',
    explanation: 'Jim Crow laws enforced white supremacy by separating Black and white Americans and limiting Black voting rights.',
  },
  {
    prompt: 'What did Plessy v. Ferguson (1896) decide?',
    options: [
      'That segregation was legal under the doctrine of "separate but equal"',
      'That segregation in schools was unconstitutional',
      'That apartheid should be introduced in the USA',
      'That Black Americans must receive voting rights immediately',
    ],
    answer: 'That segregation was legal under the doctrine of "separate but equal"',
    explanation: 'The ruling gave legal support to segregation even though facilities were unequal in practice.',
  },
  {
    prompt: 'Why was the National Party victory in 1948 important in South Africa?',
    options: [
      'It marked the formal introduction of apartheid as state policy',
      'It ended racial discrimination by law',
      'It gave all South Africans equal voting rights',
      'It abolished pass laws',
    ],
    answer: 'It marked the formal introduction of apartheid as state policy',
    explanation: 'After 1948, segregation was tightened into a systematic national programme of racial control.',
  },
  {
    prompt: 'What did the Population Registration Act do?',
    options: [
      'It classified South Africans by race',
      'It gave land equally to all racial groups',
      'It established the ANC',
      'It banned forced removals',
    ],
    answer: 'It classified South Africans by race',
    explanation: 'Racial classification was the basis for many apartheid laws and restrictions.',
  },
  {
    prompt: 'What was the purpose of the Group Areas Act?',
    options: [
      'To enforce racial residential separation and removals',
      'To create equal housing in mixed areas',
      'To improve transport only for rural workers',
      'To end segregation in public spaces',
    ],
    answer: 'To enforce racial residential separation and removals',
    explanation: 'The Group Areas Act uprooted communities and reserved valuable urban spaces mainly for whites.',
  },
  {
    prompt: 'Why is the Bantu Education Act significant?',
    options: [
      'It provided an inferior education designed to keep Black South Africans in subordinate roles',
      'It created university scholarships for all racial groups',
      'It ended racial discrimination in schools',
      'It introduced free and equal education across South Africa',
    ],
    answer: 'It provided an inferior education designed to keep Black South Africans in subordinate roles',
    explanation: 'Apartheid education aimed to limit opportunity and maintain racial hierarchy.',
  },
  {
    prompt: 'What is one major similarity between Jim Crow and apartheid?',
    options: [
      'Both used law to preserve white supremacy and deny equal rights',
      'Both gave Black citizens full political participation',
      'Both were mainly economic systems with no legal basis',
      'Both ended before the mid-20th century',
    ],
    answer: 'Both used law to preserve white supremacy and deny equal rights',
    explanation: 'Each system used legislation, courts, and policing to enforce racial inequality.',
  },
  {
    prompt: 'What is one important difference between the two systems?',
    options: [
      'Apartheid was a more centralised national system with stronger control over movement and residence',
      'Jim Crow relied on no legal enforcement at all',
      'Apartheid did not classify people by race',
      'Jim Crow was based on equality under the law',
    ],
    answer: 'Apartheid was a more centralised national system with stronger control over movement and residence',
    explanation: 'Although both were oppressive, apartheid developed a particularly detailed and nationwide legal structure.',
  },
];

const SegregationAndApartheid = () => (
  <CapsSubjectTopic
    title="Segregation and Apartheid"
    subtitle="Jim Crow in the USA, apartheid in South Africa, and comparing two racist systems"
    learnSteps={learnSteps}
    task="gr11-segregation-and-apartheid-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default SegregationAndApartheid;
