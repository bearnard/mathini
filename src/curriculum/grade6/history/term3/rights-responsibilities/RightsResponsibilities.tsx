import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import ScaleTimeline from '@/components/diagrams/ScaleTimeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <ScaleTimeline
          events={[
            {"date": "1948", "title": "Apartheid limits citizenship", "description": "Apartheid laws denied full rights to most South Africans. This showed how badly a country can function when rights are not protected equally."},
            {"date": "1994", "title": "Equal national vote", "description": "For the first time, all adult citizens could vote in a national election. Democratic citizenship now carried both rights and responsibilities for everyone."},
            {"date": "1996", "title": "Constitution defines government spheres", "description": "The 1996 Constitution set out national, provincial, and local spheres of government. It also linked democratic rights with responsible citizenship."},
            {"date": "2000", "title": "New municipalities begin", "description": "South Africa's new municipal system started in 2000 with local elections under the democratic order. This strengthened local government's role in serving communities."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Citizens have rights and responsibilities',
    image: {
      src: '/curriculum/grade6/his/term3/rights-responsibilities/diagram.svg',
      alt: 'rights responsibilities and three levels of government diagram',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a democracy, citizens have <strong>rights</strong> that protect them and
          <strong> responsibilities</strong> that help communities work well.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Rights</strong><br />things people are allowed to have or do</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Responsibilities</strong><br />duties to act fairly and safely</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Responsibilities protect rights',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          If you have the right to education, you also have the responsibility to respect
          teachers and classmates. If you have freedom, you must respect other people's freedom too.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>my rights</span>
          <span className="text-slate-400">+</span>
          <span>your rights</span>
          <span className="text-slate-400">=</span>
          <span className="text-sky-700">respect</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Three levels of government',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa has <strong>three levels of government</strong>: <strong>national</strong>,
          <strong> provincial</strong>, and <strong>local (municipal)</strong>. Each level helps serve citizens.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong>National</strong><br />country-wide matters</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Provincial</strong><br />province matters</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Local</strong><br />municipal services</div>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What do citizens have in a democracy?', options: ['Rights and responsibilities', 'Only responsibilities and no rights', 'Only rights and no duties', 'No say in government'], answer: 'Rights and responsibilities', explanation: 'Citizens have rights, and responsibilities to respect others and the law.' },
  { prompt: 'Which is an example of a right?', options: ['The right to education', 'The duty to litter', 'The job of ignoring laws', 'The power to bully others'], answer: 'The right to education', explanation: 'Education is one of the rights protected in South Africa.' },
  { prompt: 'Which is an example of a responsibility?', options: ['Respecting other people’s rights', 'Stopping others from speaking', 'Damaging public property', 'Refusing all school rules'], answer: 'Respecting other people’s rights', explanation: 'Responsibilities include treating others fairly and respecting their rights.' },
  { prompt: 'Why do responsibilities matter?', options: ['They help protect everyone’s rights', 'They remove the Constitution', 'They make elections unfair', 'They stop local services'], answer: 'They help protect everyone’s rights', explanation: 'When people act responsibly, communities are safer and rights are respected.' },
  { prompt: 'What are the three levels of government in South Africa?', options: ['National, provincial and local (municipal)', 'School, sport and home', 'Mountain, river and sea', 'Past, present and future'], answer: 'National, provincial and local (municipal)', explanation: 'South Africa has national, provincial and local or municipal government.' },
  { prompt: 'Which level of government works for the whole country?', options: ['National government', 'Local government only', 'A classroom committee', 'A sports club'], answer: 'National government', explanation: 'National government deals with matters for South Africa as a whole.' },
  { prompt: 'Which level of government works in a province?', options: ['Provincial government', 'International government', 'Only family government', 'No government at all'], answer: 'Provincial government', explanation: 'Provincial government serves one of South Africa’s provinces.' },
  { prompt: 'What is another name for local government?', options: ['Municipal government', 'National Parliament', 'The Bill of Rights', 'Freedom Day'], answer: 'Municipal government', explanation: 'Local government is also called municipal government.' },
  { prompt: 'If people have freedom, what responsibility goes with it?', options: ['Respecting other people’s freedom', 'Forcing everyone to agree', 'Ignoring safety rules', 'Taking away elections'], answer: 'Respecting other people’s freedom', explanation: 'Your freedom must be balanced with respect for other people’s rights.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about citizenship and government in South Africa in order, earliest first.', options: ['Apartheid limits citizenship', 'Equal national vote', 'Constitution defines government spheres', 'New municipalities begin'], answer: 'Apartheid limits citizenship|Equal national vote|Constitution defines government spheres|New municipalities begin', explanation: 'The dates are 1948, 1994, 1996 and 2000.' },
];

const RightsResponsibilities = () => (
  <HisTopic
    title="Rights, Responsibilities & Government"
    subtitle="How citizens and government help democracy work"
    learnSteps={learnSteps}
    task="rights-responsibilities"
    bank={bank}
  />
);

export default RightsResponsibilities;
