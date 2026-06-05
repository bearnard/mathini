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
    options: ['Using any medicine', 'Harmful use of alcohol, drugs, or other substances', 'Only illegal drugs', 'Only tobacco'],
    answer: 'Harmful use of alcohol, drugs, or other substances',
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
    options: ['Normal teenage behaviour', 'Neglecting school, mood swings, risky behaviour', 'Only missing school', 'Just having friends'],
    answer: 'Neglecting school, mood swings, risky behaviour',
    explanation: 'Multiple changes in behaviour and priorities often signal substance abuse.',
  },
  {
    prompt: 'What is dependence?',
    options: ['Having friends', 'When your body or mind relies on a substance', 'Normal use', 'Just habit'],
    answer: 'When your body or mind relies on a substance',
    explanation: 'Dependence means the body or mind needs the substance to function normally.',
  },
  {
    prompt: 'How can substance abuse affect your future?',
    options: ['It cannot', 'It impacts education, health, relationships, and career prospects', 'Only a little', 'Easily fixed'],
    answer: 'It impacts education, health, relationships, and career prospects',
    explanation: 'Substance abuse has serious long-term consequences across all life areas.',
  },
  {
    prompt: 'What are healthy coping strategies?',
    options: ['Using substances', 'Exercise, talking, hobbies, and creative activities', 'Only sleeping', 'Staying alone'],
    answer: 'Exercise, talking, hobbies, and creative activities',
    explanation: 'Healthy coping builds resilience and manages stress without harm.',
  },
  {
    prompt: 'Where can you get help for substance abuse?',
    options: ['Nowhere', 'Counsellors, doctors, support groups, hotlines, and trusted adults', 'Only from friends', 'It is private only'],
    answer: 'Counsellors, doctors, support groups, hotlines, and trusted adults',
    explanation: 'Many professional and community resources offer confidential help.',
  },
  {
    prompt: 'How does social pressure contribute to substance abuse?',
    options: ['It does not', 'Peers may encourage use, making it hard to say no', 'All friends do this', 'Only at parties'],
    answer: 'Peers may encourage use, making it hard to say no',
    explanation: 'Social pressure is a major factor in youth substance abuse.',
  },
  {
    prompt: 'What role does stress play in substance abuse?',
    options: ['None', 'Stress may lead people to use substances to escape or cope', 'Stress helps prevent abuse', 'Only for adults'],
    answer: 'Stress may lead people to use substances to escape or cope',
    explanation: 'Unmanaged stress is often linked to substance abuse, especially in young people.',
  },
  {
    prompt: 'What should you do if a friend shows signs of substance abuse?',
    options: ['Do nothing', 'Talk to them with care and encourage them to seek help', 'Tell everyone', 'Ignore them'],
    answer: 'Talk to them with care and encourage them to seek help',
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
