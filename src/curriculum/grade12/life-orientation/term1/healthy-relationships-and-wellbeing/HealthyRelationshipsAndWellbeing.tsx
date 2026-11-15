import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Healthy Relationship Qualities',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Healthy relationships are built on respect, honesty, trust, communication and boundaries. Grade 12 learners should be able to identify behaviour that promotes dignity and emotional safety, and to challenge controlling, abusive or manipulative behaviour.</p>
      </div>
    ),
  },
  {
    title: 'Reproductive Health and Informed Choices',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Informed choices about sexual and reproductive health depend on factual knowledge, consent, responsibility and access to reliable services. Learners must understand that myths, pressure and misinformation can place wellbeing and future plans at risk.</p>
      </div>
    ),
  },
  {
    title: 'Stress, Conflict and Emotional Wellbeing',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Academic pressure, family expectations and changing relationships can increase stress in Grade 12. Healthy coping includes exercise, rest, time management, calm communication, problem-solving and seeking support instead of aggression, denial or substance use.</p>
      </div>
    ),
  },
  {
    title: 'Support Networks and Help-Seeking',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Support networks include trusted adults, peers, school staff, health professionals and community organisations. Reaching out early can prevent conflict, protect mental health and help learners make safer and more responsible decisions.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Which quality is essential in a healthy relationship?',
    options: [
      'Control over another person',
      'Respect for boundaries',
      'Keeping secrets through fear',
      'Constant monitoring',
    ],
    answer: 1,
    explanation: 'Healthy relationships respect each person’s boundaries and dignity.',
  },
  {
    prompt: 'Why are informed choices important in reproductive health?',
    options: ['They guarantee that no pregnancy or infection can occur', 'They rest on facts, consent and responsibility', 'They follow what most friends are doing', 'They are made by the older partner'],
    answer: 1,
    explanation: 'Responsible decisions require accurate information, consent and awareness of consequences.',
  },
  {
    prompt: 'Which source is most reliable for sexual health information?',
    options: ['A friend who once had a similar problem', 'A qualified health worker or clinic', 'Posts by influencers on social media', 'A partner who says it is safe'],
    answer: 1,
    explanation: 'Health professionals provide factual and safe information.',
  },
  {
    prompt: 'Which response is the healthiest way to manage ongoing stress?',
    options: ['Cutting back on sleep to fit in more study', 'Using alcohol on weekends to relax and forget', 'Planning work and speaking to a trusted adult', 'Avoiding friends and family until exams end'],
    answer: 2,
    explanation: 'Planning and support help reduce stress without creating new risks.',
  },
  {
    prompt: 'A disagreement becomes heated. What should happen first?',
    options: [
      'Shout louder to win',
      'Pause and communicate calmly',
      'Post about it online',
      'End the friendship immediately',
    ],
    answer: 1,
    explanation: 'Calm communication reduces conflict and makes respectful problem-solving possible.',
  },
  {
    prompt: 'What is a warning sign of an unhealthy relationship?',
    options: ['Respecting each other\'s different opinions', 'Making big decisions together', 'Controlling who someone may talk to', 'Sharing worries without fear of ridicule'],
    answer: 2,
    explanation: 'Controlling behaviour limits freedom and can become emotionally abusive.',
  },
  {
    prompt: 'Why are support networks important for wellbeing?',
    options: [
      'They replace personal responsibility',
      'They provide advice, safety and referral when needed',
      'They are only useful for academic problems',
      'They stop all conflict completely',
    ],
    answer: 1,
    explanation: 'Support networks help people cope, get information and access appropriate help.',
  },
  {
    prompt: 'Which statement about consent is correct?',
    options: [
      'Consent can be forced by pressure',
      'Consent is unnecessary in long-term relationships',
      'Consent must be freely given and respected',
      'Silence always means yes',
    ],
    answer: 2,
    explanation: 'Consent must be clear, voluntary and ongoing in every relationship.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const HealthyRelationshipsAndWellbeing = () => (
  <CapsSubjectTopic
    title='Healthy Relationships and Wellbeing'
    subtitle='Respectful relationships, reproductive health, informed choices, coping with stress and support networks.'
    learnSteps={learnSteps}
    task='gr12-healthy-relationships-and-wellbeing-t1'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default HealthyRelationshipsAndWellbeing;
