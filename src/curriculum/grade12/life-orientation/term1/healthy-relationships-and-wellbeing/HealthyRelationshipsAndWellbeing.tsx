import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/lo/term1/healthy-relationships-and-wellbeing/diagram.webp", alt: "Healthy Relationships and Wellbeing" },
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
    options: [
      'They remove all consequences',
      'They are based on facts, consent and responsibility',
      'They depend only on peer approval',
      'They matter only after school',
    ],
    answer: 1,
    explanation: 'Responsible decisions require accurate information, consent and awareness of consequences.',
  },
  {
    prompt: 'Which source is most reliable for sexual health information?',
    options: [
      'Rumours on social media',
      'A qualified health worker or clinic',
      'Pressure from a partner',
      'Jokes from friends',
    ],
    answer: 1,
    explanation: 'Health professionals provide factual and safe information.',
  },
  {
    prompt: 'Which response is the healthiest way to manage ongoing stress?',
    options: [
      'Skipping sleep to study more',
      'Using alcohol to relax',
      'Planning work and talking to a trusted adult',
      'Ignoring the problem completely',
    ],
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
    options: [
      'Mutual trust',
      'Shared decision-making',
      'Controlling who someone may talk to',
      'Respecting personal space',
    ],
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
