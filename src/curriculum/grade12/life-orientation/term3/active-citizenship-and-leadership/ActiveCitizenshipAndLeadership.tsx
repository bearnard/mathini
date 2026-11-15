import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './ActiveCitizenshipAndLeadershipLesson';

const items = [
  {
    prompt: 'What is active citizenship?',
    options: ['Waiting for leaders to solve problems', 'Informed involvement in community life', 'Voting once every five years, then stopping', 'Following the views of popular people'],
    answer: 1,
    explanation: 'Active citizenship involves ongoing, informed participation and responsibility.',
  },
  {
    prompt: 'Which quality best reflects ethical leadership?',
    options: [
      'Seeking control at any cost',
      'Serving others fairly and responsibly',
      'Ignoring different viewpoints',
      'Using fear to influence people',
    ],
    answer: 1,
    explanation: 'Ethical leaders focus on fairness, service and responsibility.',
  },
  {
    prompt: 'Why is diversity important in a democracy?',
    options: [
      'It weakens national identity',
      'It brings different experiences and strengthens inclusion',
      'It should be hidden to avoid disagreement',
      'It only matters in cities',
    ],
    answer: 1,
    explanation: 'Respecting diversity supports equality, participation and richer problem-solving.',
  },
  {
    prompt: 'What is social cohesion?',
    options: ['Everyone sharing identical views', 'Belonging and cooperation in society', 'A period without political disagreement', 'Equal income across households'],
    answer: 1,
    explanation: 'Social cohesion means people can live and work together despite differences.',
  },
  {
    prompt: 'Which action best shows active citizenship at school?',
    options: ['Ignoring unfair treatment of others', 'Helping run an anti-bullying campaign', 'Posting rumours about the bully online', 'Waiting for the principal to act first'],
    answer: 1,
    explanation: 'Organising respectful, informed action is a practical form of citizenship.',
  },
  {
    prompt: 'Why must civic action be ethical?',
    options: [
      'To avoid thinking about consequences',
      'To protect rights and ensure fairness',
      'Because only adults need ethics',
      'To make action more dramatic',
    ],
    answer: 1,
    explanation: 'Ethical action respects people’s rights and keeps participation lawful and fair.',
  },
  {
    prompt: 'What should leaders do before launching a campaign?',
    options: [
      'Assume they know every answer',
      'Consult others and plan realistically',
      'Exclude people who disagree',
      'Ignore available evidence',
    ],
    answer: 1,
    explanation: 'Consultation and planning make civic action more effective and inclusive.',
  },
  {
    prompt: 'Which statement best supports social justice?',
    options: ['Opportunities should go to the largest groups', 'Everyone deserves fair treatment and rights', 'Rights should depend on wealth and status', 'Fairness matters less than tradition'],
    answer: 1,
    explanation: 'Social justice focuses on fairness, inclusion and equal respect.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ActiveCitizenshipAndLeadership = () => (
  <CapsSubjectTopic
    title='Active Citizenship and Leadership'
    subtitle='Civic participation, social justice, diversity, ethical leadership and social cohesion.'
    learnSteps={learnSteps}
    task='gr12-active-citizenship-and-leadership-t3'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default ActiveCitizenshipAndLeadership;
