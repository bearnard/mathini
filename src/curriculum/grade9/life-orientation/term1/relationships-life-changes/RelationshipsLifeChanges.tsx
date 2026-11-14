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
    options: ['They show weakness, so they should be hidden', 'They matter little, as thoughts are more important', 'They help you understand yourself and connect with others', 'They matter only when they are sad ones'],
    answer: 'They help you understand yourself and connect with others',
    explanation: 'Emotions are natural and help you communicate and understand yourself.',
  },
  {
    prompt: 'What is a boundary?',
    options: ['A wall that is built to keep other people away', 'A limit you set to protect your wellbeing', 'A rule that other people set and that cannot be changed', 'A sign that a person is unfriendly and does not like company'],
    answer: 'A limit you set to protect your wellbeing',
    explanation: 'Boundaries are necessary to protect your physical, emotional, and mental wellbeing.',
  },
  {
    prompt: 'What changes happen during adolescence?',
    options: ['Physical changes only, such as growth in height', 'Physical, emotional and social changes', 'Emotional changes only, such as mood swings', 'Social changes only, such as new friends and interests'],
    answer: 'Physical, emotional and social changes',
    explanation: 'Adolescence involves changes in your body, emotions, and relationships.',
  },
  {
    prompt: 'What does good communication involve?',
    options: ['Always agreeing with others so there are no arguments', 'Listening and being honest about how you feel', 'Keeping all your feelings inside to avoid conflict', 'Talking only about the good things that happen to you'],
    answer: 'Listening and being honest about how you feel',
    explanation: 'Good communication means both speaking honestly and listening to others.',
  },
  {
    prompt: 'How can you handle peer pressure?',
    options: ['Do whatever your friends want so that they like you', 'Know your values and say no when something feels wrong', 'Avoid all of your friends so that you stay out of trouble', 'Stay quiet and go along, even if you are unhappy'],
    answer: 'Know your values and say no when something feels wrong',
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
    options: ['They stay exactly the same as they were in childhood', 'You may want more freedom but still need support', 'They stop mattering as friends become more important', 'You should keep away from your family completely'],
    answer: 'You may want more freedom but still need support',
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
    options: ['Always giving in so that the other person is happy', 'Working together to settle disagreements with respect', 'Avoiding all conflict so that no one is upset', 'Getting the other person into trouble with an adult'],
    answer: 'Working together to settle disagreements with respect',
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
