import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/lo/term2/community-and-social-action/diagram.webp", alt: "Community and Social Action" },
    title: 'Volunteerism and Service',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Volunteerism is giving time and effort to improve the lives of others without expecting personal reward. It builds empathy, responsibility and social cohesion while helping communities respond to real needs.</p>
      </div>
    ),
  },
  {
    title: 'Advocacy and Speaking Up',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Advocacy means speaking or acting in support of a cause, group or issue. Learners should understand how petitions, awareness campaigns, dialogue and evidence-based messaging can influence public attention and decision-making.</p>
      </div>
    ),
  },
  {
    title: 'Leadership and Accountability',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Effective community leadership involves listening, planning, collaboration and ethical conduct. Accountability ensures that actions are honest, realistic and focused on the actual needs of the people being served.</p>
      </div>
    ),
  },
  {
    title: 'Using Support Services Well',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Communities rely on schools, clinics, NGOs, faith groups, social workers and local organisations for support. Knowing where to refer people and how to collaborate with services makes social action more effective and sustainable.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What is the main purpose of volunteerism?',
    options: [
      'To gain power over others',
      'To contribute time and effort to help meet community needs',
      'To avoid personal responsibility',
      'To replace all government services',
    ],
    answer: 1,
    explanation: 'Volunteerism is about service and meaningful contribution to others.',
  },
  {
    prompt: 'Which action is an example of advocacy?',
    options: [
      'Spreading rumours about an issue',
      'Organising a fact-based awareness campaign',
      'Ignoring community concerns',
      'Refusing to work with anyone else',
    ],
    answer: 1,
    explanation: 'Advocacy uses informed communication to support change.',
  },
  {
    prompt: 'Why is accountability important in community projects?',
    options: [
      'It slows progress unnecessarily',
      'It keeps actions honest and responsible',
      'It makes planning impossible',
      'It means one person does everything',
    ],
    answer: 1,
    explanation: 'Accountability helps projects stay ethical, transparent and focused.',
  },
  {
    prompt: 'Which quality is most important in a community leader?',
    options: [
      'Manipulation',
      'Listening and responsibility',
      'Popularity only',
      'Aggression',
    ],
    answer: 1,
    explanation: 'Community leadership requires listening, planning and ethical responsibility.',
  },
  {
    prompt: 'Why should learners know about support services?',
    options: [
      'So they can avoid community involvement',
      'So they can refer people to appropriate help',
      'So they can replace professionals',
      'So they can work alone',
    ],
    answer: 1,
    explanation: 'Knowing support services helps learners connect needs to the right resources.',
  },
  {
    prompt: 'What makes a social action plan realistic?',
    options: [
      'It has clear steps, roles and achievable goals',
      'It depends only on luck',
      'It ignores the views of those affected',
      'It promises instant success',
    ],
    answer: 0,
    explanation: 'Realistic plans explain what will be done, by whom and with what resources.',
  },
  {
    prompt: 'Which response best promotes social cohesion?',
    options: [
      'Helping only people who agree with you',
      'Working respectfully across differences',
      'Using conflict to gain attention',
      'Ignoring minority voices',
    ],
    answer: 1,
    explanation: 'Social cohesion grows when people collaborate respectfully despite differences.',
  },
  {
    prompt: 'What should come first when planning a community action project?',
    options: [
      'Buying materials immediately',
      'Identifying the real need and who is affected',
      'Advertising the project before planning',
      'Choosing a slogan only',
    ],
    answer: 1,
    explanation: 'Planning starts with understanding the problem and the people involved.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CommunityAndSocialAction = () => (
  <CapsSubjectTopic
    title='Community and Social Action'
    subtitle='Volunteerism, advocacy, leadership, support services and accountable participation in community change.'
    learnSteps={learnSteps}
    task='gr12-community-and-social-action-t2'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default CommunityAndSocialAction;
