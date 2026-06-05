import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Relationships',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Relationships are connections with other people—family, friends, and peers.
          Good relationships are built on <strong>trust, respect, and communication</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Healthy relationships support your wellbeing and growth.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Managing Emotions and Change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Growing up brings changes in your body, emotions, and relationships.
          <strong> Emotions</strong> are natural feelings that help you understand yourself and others.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Emotions</strong>
            <p className="text-slate-600">Joy, sadness, anger, fear are all normal.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Change</strong>
            <p className="text-slate-600">Growing up is a natural process of change.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Healthy Boundaries and Communication',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Boundaries</strong> are limits you set to protect your wellbeing.
          <strong> Communication</strong> is sharing your feelings and needs clearly and respectfully.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Healthy boundaries mean:</p>
          <p className="text-slate-600">Saying "no" to things that hurt you, talking about your feelings, and respecting others.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a healthy relationship?',
    options: ['One where someone controls you', 'One based on trust, respect, and communication', 'One where you do what others want', 'Friendship only'],
    answer: 'One based on trust, respect, and communication',
    explanation: 'Healthy relationships are built on mutual trust, respect, and honest communication.',
  },
  {
    prompt: 'Why are emotions important?',
    options: ['They are not important', 'They are signs of weakness', 'They help you understand yourself and connect with others', 'Only sadness matters'],
    answer: 'They help you understand yourself and connect with others',
    explanation: 'Emotions are natural and help you communicate and understand yourself.',
  },
  {
    prompt: 'What is a boundary?',
    options: ['A wall to keep people away', 'A limit you set to protect your wellbeing', 'Something you cannot change', 'A sign of being unfriendly'],
    answer: 'A limit you set to protect your wellbeing',
    explanation: 'Boundaries are necessary to protect your physical, emotional, and mental wellbeing.',
  },
  {
    prompt: 'What changes happen during adolescence?',
    options: ['Only physical changes', 'Physical, emotional, and social changes', 'No real changes', 'Only social changes'],
    answer: 'Physical, emotional, and social changes',
    explanation: 'Adolescence involves changes in your body, emotions, and relationships.',
  },
  {
    prompt: 'What does good communication involve?',
    options: ['Always agreeing with others', 'Listening and being honest about your feelings', 'Keeping everything inside', 'Only talking about good things'],
    answer: 'Listening and being honest about your feelings',
    explanation: 'Good communication means both speaking honestly and listening to others.',
  },
  {
    prompt: 'How can you handle peer pressure?',
    options: ['Always do what peers want', 'Understand your values and say no if something feels wrong', 'Avoid all friends', 'Never speak up'],
    answer: 'Understand your values and say no if something feels wrong',
    explanation: 'Knowing your values helps you make good choices, even under peer pressure.',
  },
  {
    prompt: 'What is self-respect?',
    options: ['Being proud and selfish', 'Valuing yourself and your wellbeing', 'Thinking you are better than others', 'Never asking for help'],
    answer: 'Valuing yourself and your wellbeing',
    explanation: 'Self-respect means treating yourself with care and dignity.',
  },
  {
    prompt: 'How can family relationships change during adolescence?',
    options: ['They stay exactly the same', 'You may want more independence while still needing support', 'They never matter', 'You should avoid your family'],
    answer: 'You may want more independence while still needing support',
    explanation: 'During adolescence, you develop independence while family remains important.',
  },
  {
    prompt: 'What should you do if a relationship feels unsafe?',
    options: ['Say nothing', 'Tell a trusted adult', 'Stay quiet', 'Handle it alone'],
    answer: 'Tell a trusted adult',
    explanation: 'If a relationship feels unsafe, it is important to reach out to a trusted adult.',
  },
  {
    prompt: 'What is conflict resolution?',
    options: ['Always giving in', 'Working together to solve disagreements respectfully', 'Avoiding all conflict', 'Getting someone in trouble'],
    answer: 'Working together to solve disagreements respectfully',
    explanation: 'Conflict resolution involves finding solutions that respect both people.',
  },
];

const RelationshipsLifeChanges = () => (
  <CapsSubjectTopic
    title="Relationships and Life Changes"
    subtitle="Managing emotions, boundaries, and healthy communication"
    learnSteps={learnSteps}
    task="gr9-relationships-life-changes-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsLifeChanges;
