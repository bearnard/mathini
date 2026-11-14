import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Substance Abuse',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Substance abuse</strong> is harmful use of alcohol, drugs, or other substances.
          Substances can damage your health, relationships, and future.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Addiction is real and can develop quickly, especially in young people.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Recognizing Harmful Behaviour',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Warning signs of substance abuse include: neglecting school or friends, mood changes, and risky behaviour.
          <strong> Dependence</strong> means your body or mind relies on a substance to function.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Physical signs</strong>
            <p className="text-slate-600">Changes in appearance, health problems.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Behaviour changes</strong>
            <p className="text-slate-600">Withdrawal from activities, new friends.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Coping Skills and Getting Support',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Coping skills</strong> help you manage stress without substance abuse.
          Many support services and resources are available to help.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Healthy coping includes:</p>
          <p className="text-slate-600">Exercise, talking to friends or counsellors, creative activities, and reaching out for help.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is substance abuse?',
    options: ['Taking any medicine, even one prescribed by a doctor', 'The harmful use of alcohol, drugs or other substances', 'The use of illegal drugs and nothing else', 'The use of tobacco and nothing else'],
    answer: 'The harmful use of alcohol, drugs or other substances',
    explanation: 'Substance abuse is misuse of any substance that causes harm to health or wellbeing.',
  },
  {
    prompt: 'Why are young people more vulnerable to addiction?',
    options: ['They are not', 'Their brains are still developing', 'Age does not matter', 'Only adults become addicted'],
    answer: 'Their brains are still developing',
    explanation: 'Adolescent brains are more susceptible to addiction, and early use increases long-term risk.',
  },
  {
    prompt: 'What is a warning sign of substance abuse?',
    options: ['Normal teenage behaviour that is not a concern', 'Neglecting school, mood swings and risky behaviour', 'Missing a day of school because of a cold', 'Spending time with a large group of friends'],
    answer: 'Neglecting school, mood swings and risky behaviour',
    explanation: 'Multiple changes in behaviour and priorities often signal substance abuse.',
  },
  {
    prompt: 'What is dependence?',
    options: ['Having close friends that you rely on for support', 'When your body or mind relies on a substance', 'Using a substance now and then in a normal way', 'A habit that you can stop by choosing to do so'],
    answer: 'When your body or mind relies on a substance',
    explanation: 'Dependence means the body or mind needs the substance to function normally.',
  },
  {
    prompt: 'How can substance abuse affect your future?',
    options: ['It cannot affect the future of a young person', 'It harms education, health, relationships and careers', 'It has only a small effect that fades quickly', 'It is easily fixed once a person decides to stop'],
    answer: 'It harms education, health, relationships and careers',
    explanation: 'Substance abuse has serious long-term consequences across all life areas.',
  },
  {
    prompt: 'What are healthy coping strategies?',
    options: ['Using alcohol or drugs to feel calm for a while', 'Exercise, talking, hobbies and creative activities', 'Sleeping for long hours to avoid the problem', 'Staying alone in your room until the stress ends'],
    answer: 'Exercise, talking, hobbies and creative activities',
    explanation: 'Healthy coping builds resilience and manages stress without harm.',
  },
  {
    prompt: 'Where can you get help for substance abuse?',
    options: ['Nowhere, as nobody helps people with this problem', 'Counsellors, doctors, support groups, helplines and trusted adults', 'Only from friends, who understand it best', 'Nowhere, because the help is private and not for teens'],
    answer: 'Counsellors, doctors, support groups, helplines and trusted adults',
    explanation: 'Many professional and community resources offer confidential help.',
  },
  {
    prompt: 'How does social pressure contribute to substance abuse?',
    options: ['It does not, since each person chooses alone', 'Peers may encourage use, which makes saying no hard', 'All of your friends use substances, so it is normal', 'It happens only at parties and not in other places'],
    answer: 'Peers may encourage use, which makes saying no hard',
    explanation: 'Social pressure is a major factor in youth substance abuse.',
  },
  {
    prompt: 'What role does stress play in substance abuse?',
    options: ['It has no part, since stress and substances are unrelated', 'Stress may lead people to use substances to cope', 'Stress helps to prevent substance abuse', 'Stress leads to abuse in adults but not in teenagers'],
    answer: 'Stress may lead people to use substances to cope',
    explanation: 'Unmanaged stress is often linked to substance abuse, especially in young people.',
  },
  {
    prompt: 'What should you do if a friend shows signs of substance abuse?',
    options: ['Do nothing, as it is their own business', 'Speak to them with care and urge them to get help', 'Tell everyone at school about the problem', 'Ignore them and hope that the problem fades'],
    answer: 'Speak to them with care and urge them to get help',
    explanation: 'Supporting a friend means expressing concern and encouraging professional help.',
  },
];

const SubstanceAbuseEmotionalSafety = () => (
  <CapsSubjectTopic
    title="Substance Abuse and Emotional Safety"
    subtitle="Recognizing harmful behaviour and finding support"
    learnSteps={learnSteps}
    task="gr9-substance-abuse-emotional-safety-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SubstanceAbuseEmotionalSafety;
