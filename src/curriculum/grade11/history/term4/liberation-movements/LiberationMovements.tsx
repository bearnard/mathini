import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/his/term4/liberation-movements/diagram.webp", alt: "Liberation Movements" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1912", "title": "ANC founded", "description": "The South African Native National Congress, later the ANC, was founded to fight racial discrimination through petitions and constitutional protest. It became one of Africa's most important liberation movements."},
            {"date": "1952", "title": "Defiance Campaign begins", "description": "The ANC and its allies launched mass civil disobedience against apartheid laws. This showed how liberation movements used non-violent protest before turning to armed struggle."},
            {"date": "21 Mar 1960", "title": "Sharpeville massacre", "description": "Police killed protesters demonstrating against pass laws at Sharpeville. The massacre convinced many activists that peaceful resistance alone was being crushed by state violence."},
            {"date": "1961", "title": "MK is formed", "description": "Umkhonto we Sizwe was established with ANC support after liberation organisations were banned. It marked a shift toward sabotage against apartheid infrastructure."},
            {"date": "25 Jun 1975", "title": "Mozambique gains independence", "description": "FRELIMO ended Portuguese colonial rule and took power in independent Mozambique. The victory became a major symbol of successful African liberation."},
            {"date": "18 Apr 1980", "title": "Zimbabwe becomes independent", "description": "After a long liberation war, white minority rule in Rhodesia ended and Zimbabwe was born. ZANU was central to this struggle."},
            {"date": "21 Mar 1990", "title": "Namibia wins independence", "description": "Namibia became independent after a long struggle led by SWAPO against South African control. Independence then brought the challenge of nation-building and reconciliation."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Goals and strategies of liberation movements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Liberation movements</strong> aimed to end colonialism, minority rule, or apartheid and to achieve self-government. Their strategies varied — some began with petitions and non-violent protest, while others later turned to armed struggle when peaceful methods were blocked.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Political mobilisation</strong>
            <p className="text-slate-600">Mass meetings, trade unions, youth groups, and political education built support.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Non-violent protest</strong>
            <p className="text-slate-600">Boycotts, strikes, petitions, and civil disobedience challenged unjust systems.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Armed struggle</strong>
            <p className="text-slate-600">Some movements adopted sabotage or guerrilla war after repression closed peaceful options.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The ANC and Umkhonto we Sizwe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>ANC</strong> began with constitutional protest and later mass campaigns such as the Defiance Campaign. After the Sharpeville massacre and the banning of liberation organisations in 1960, many activists concluded that peaceful protest alone was no longer enough. In 1961 the ANC helped establish <strong>Umkhonto we Sizwe (MK)</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-2xl">
          <p className="font-bold text-slate-700">Why MK was formed:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>To move from protest alone to sabotage against apartheid infrastructure.</li>
            <li>To avoid passivity in the face of state violence.</li>
            <li>To show that liberation movements could adapt strategies over time.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Other African liberation movements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Liberation struggles took place across southern Africa. <strong>ZANU</strong> fought white minority rule in Zimbabwe, <strong>FRELIMO</strong> fought Portuguese colonial rule in Mozambique, and <strong>SWAPO</strong> led the Namibian struggle against South African control.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">ZANU</strong>
            <p className="text-slate-600">Part of the struggle that ended Rhodesian minority rule.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">FRELIMO</strong>
            <p className="text-slate-600">Led Mozambique to independence from Portugal in 1975.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">SWAPO</strong>
            <p className="text-slate-600">Became central to Namibia's long struggle for independence.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Independence, nation-building, and the meaning of liberation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Winning independence was not the end of the struggle. New states faced the challenges of <strong>nation-building</strong>: uniting divided populations, creating democratic institutions, promoting development, and dealing with the legacies of violence and inequality.
        </p>
        <div className="bg-red-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-red-700 mb-2">Key nation-building challenges:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Building a shared national identity after colonial or racial division</li>
            <li>Balancing justice, reconciliation, and stability</li>
            <li>Expanding education, housing, jobs, and social services</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was the main aim of liberation movements in Africa?',
    options: [
      'To end colonialism, minority rule, or apartheid and achieve self-government',
      'To restore European empire after World War II',
      'To defend racial segregation as permanent',
      'To avoid all political participation',
    ],
    answer: 'To end colonialism, minority rule, or apartheid and achieve self-government',
    explanation: 'Liberation movements were anti-colonial and anti-racist struggles for political freedom and dignity.',
  },
  {
    prompt: 'Which of the following was a common early strategy of liberation movements?',
    options: [
      'Petitions, boycotts, strikes, and civil disobedience',
      'Immediate control of colonial governments without support',
      'Industrialisation through Five-Year Plans',
      'The introduction of pass laws',
    ],
    answer: 'Petitions, boycotts, strikes, and civil disobedience',
    explanation: 'Many movements first tried constitutional and non-violent methods before some shifted strategy.',
  },
  {
    prompt: 'Why did the ANC change its strategy in the early 1960s?',
    options: [
      'Because state repression and bans convinced many activists that peaceful protest alone was not enough',
      'Because apartheid had already ended',
      'Because Britain asked the ANC to start a war in Europe',
      'Because the ANC rejected mass support',
    ],
    answer: 'Because state repression and bans convinced many activists that peaceful protest alone was not enough',
    explanation: 'Sharpeville and the banning of organisations pushed the liberation struggle into a new phase.',
  },
  {
    prompt: 'What was Umkhonto we Sizwe (MK)?',
    options: [
      'The armed wing associated with the ANC, formed in 1961',
      'A law that created apartheid schools',
      'The military branch of the National Party',
      'A United Nations peacekeeping force',
    ],
    answer: 'The armed wing associated with the ANC, formed in 1961',
    explanation: 'MK adopted sabotage as part of the struggle against apartheid after peaceful avenues narrowed.',
  },
  {
    prompt: 'Which movement was central to the liberation struggle in Mozambique?',
    options: ['FRELIMO', 'NAACP', 'Zionism', 'KKK'],
    answer: 'FRELIMO',
    explanation: 'FRELIMO fought Portuguese colonial rule and led Mozambique to independence.',
  },
  {
    prompt: 'What did SWAPO fight for?',
    options: [
      'Namibian independence from South African control',
      'The restoration of Nazi rule in Europe',
      'Segregation in the American South',
      'The continuation of Portuguese rule in Angola',
    ],
    answer: 'Namibian independence from South African control',
    explanation: 'SWAPO became the main liberation movement in Namibia.',
  },
  {
    prompt: 'What is nation-building?',
    options: [
      'The process of creating a stable, united, and functioning state after liberation or independence',
      'The creation of colonial borders by European powers',
      'A military plan for occupying neighbouring countries',
      'The denial of citizenship to most of the population',
    ],
    answer: 'The process of creating a stable, united, and functioning state after liberation or independence',
    explanation: 'Liberation must be followed by institutions, development, and social reconciliation.',
  },
  {
    prompt: 'Which of the following is a key nation-building challenge?',
    options: [
      'Promoting reconciliation and development after a history of division',
      'Restoring colonial control to guarantee stability',
      'Avoiding all participation by citizens',
      'Maintaining racial privilege as a founding principle',
    ],
    answer: 'Promoting reconciliation and development after a history of division',
    explanation: 'New states often faced the difficult task of uniting divided societies while tackling poverty and inequality.',
  },
];

const LiberationMovements = () => (
  <CapsSubjectTopic
    title="Liberation Movements"
    subtitle="From protest to armed struggle, and from independence to nation-building"
    learnSteps={learnSteps}
    task="gr11-liberation-movements-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default LiberationMovements;
