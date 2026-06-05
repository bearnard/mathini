import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Common Risks Facing Young People',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Risks such as violence, poverty, substance abuse and unstable home conditions can affect safety, concentration, health and future choices. Life Orientation asks learners to recognise these risks clearly instead of normalising them.</p>
      </div>
    ),
  },
  {
    title: 'Trauma, Stress and Their Effects',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Trauma can affect emotions, memory, relationships and behaviour long after a harmful event. Learners need to understand that trauma responses are real and that healing often requires safety, support and time.</p>
      </div>
    ),
  },
  {
    title: 'Protective Factors and Healthy Coping',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Protective factors reduce harm and increase resilience. These include positive role models, safe routines, school belonging, healthy coping strategies, problem-solving skills and access to trustworthy support.</p>
      </div>
    ),
  },
  {
    title: 'Referral and Responsible Intervention',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Learners are not expected to solve every serious problem alone. Responsible intervention means staying safe, reporting serious risk to trusted adults or services, and connecting people to counsellors, clinics, social workers or emergency support when needed.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Which situation is a clear social risk factor for a learner?',
    options: [
      'Stable support at home',
      'Exposure to substance abuse and violence',
      'Regular exercise',
      'Reliable school attendance',
    ],
    answer: 1,
    explanation: 'Violence and substance abuse increase risk to safety, health and learning.',
  },
  {
    prompt: 'What is trauma?',
    options: [
      'A minor problem that always passes quickly',
      'A physical injury only',
      'A serious emotional response to harmful events',
      'A sign of weak character',
    ],
    answer: 2,
    explanation: 'Trauma is a serious response to distressing experiences and should be taken seriously.',
  },
  {
    prompt: 'Which is a healthy coping strategy?',
    options: [
      'Using drugs to forget problems',
      'Talking to a trusted adult and making a plan',
      'Fighting to release anger',
      'Keeping all stress secret forever',
    ],
    answer: 1,
    explanation: 'Support and planning are constructive ways to respond to difficulty.',
  },
  {
    prompt: 'Why are protective factors important?',
    options: [
      'They remove every challenge',
      'They reduce harm and strengthen resilience',
      'They matter only to younger children',
      'They replace all support services',
    ],
    answer: 1,
    explanation: 'Protective factors help people cope better and lower the impact of risk.',
  },
  {
    prompt: 'If a learner feels unsafe because of violence at home, what is the best response?',
    options: [
      'Keep it secret no matter what',
      'Tell a trusted adult or support service',
      'Skip school without telling anyone',
      'Handle it alone',
    ],
    answer: 1,
    explanation: 'Serious safety concerns should be reported to trusted adults or services.',
  },
  {
    prompt: 'How can poverty affect learners?',
    options: [
      'It has no effect on school life',
      'It can increase stress and limit opportunities',
      'It guarantees resilience',
      'It only affects adults',
    ],
    answer: 1,
    explanation: 'Poverty can place pressure on wellbeing, nutrition, transport and study opportunities.',
  },
  {
    prompt: 'What is responsible intervention?',
    options: [
      'Taking dangerous action alone',
      'Responding safely and referring to proper support',
      'Posting the story online',
      'Ignoring the warning signs',
    ],
    answer: 1,
    explanation: 'Responsible intervention prioritises safety and appropriate referral.',
  },
  {
    prompt: 'Which person is part of a formal support network?',
    options: [
      'A stranger giving unsafe advice',
      'A social worker or counsellor',
      'Someone spreading gossip',
      'An online troll',
    ],
    answer: 1,
    explanation: 'Formal support services include trained professionals who can assist appropriately.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const RiskManagementAndSupport = () => (
  <CapsSubjectTopic
    title='Risk Management and Support'
    subtitle='Violence, poverty, substance abuse, trauma, coping strategies and referral to support systems.'
    learnSteps={learnSteps}
    task='gr12-risk-management-and-support-t2'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default RiskManagementAndSupport;
