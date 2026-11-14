import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Puberty and Sexual Health',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Puberty</strong> is a time of physical and emotional changes as your body develops.
          <strong> Sexual health</strong> is understanding your body and making responsible choices.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Puberty is a normal part of growing up and everyone experiences it differently.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'HIV, AIDS, and Disease Prevention',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>HIV</strong> is a virus that weakens the immune system.
          <strong> AIDS</strong> is the most serious stage of HIV. Prevention involves safe practices.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Prevention</strong>
            <p className="text-slate-600">Abstinence, testing, safe practices.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Support</strong>
            <p className="text-slate-600">Treatment and care are available.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Consent, Respect, and Responsibility',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Consent</strong> means freely agreeing to something.
          Healthy relationships are built on respect, communication, and shared responsibility.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Responsible choices include:</p>
          <p className="text-slate-600">Waiting until you are ready, open communication, protection, and respecting your own and others' boundaries.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is puberty?',
    options: ['An illness that children catch from other children', 'A time of physical and emotional change in adolescence', 'A stage that only boys go through, and not girls', 'A stage that lasts a few weeks and then stops'],
    answer: 'A time of physical and emotional change in adolescence',
    explanation: 'Puberty is a normal biological process that prepares the body for adulthood.',
  },
  {
    prompt: 'Why do different people experience puberty differently?',
    options: ['They do not, as all people change at the same age', 'Genes, food and health affect the timing and pace', 'Everyone develops in exactly the same way and speed', 'It is random and depends on luck alone'],
    answer: 'Genes, food and health affect the timing and pace',
    explanation: 'Puberty varies between individuals based on biological and environmental factors.',
  },
  {
    prompt: 'What is HIV?',
    options: ['A skin rash that spreads by touch from one person to another', 'A virus that weakens the immune system', 'A disease that affects only certain groups of people', 'A disease that always kills a person at once'],
    answer: 'A virus that weakens the immune system',
    explanation: 'HIV damages immune cells, leaving the body vulnerable to infections.',
  },
  {
    prompt: 'How is HIV transmitted?',
    options: ['Through hugging or touching a person who has HIV', 'Through blood, sexual contact or breastfeeding', 'Through sharing food, plates or cups with that person', 'Through coughing, sneezing or breathing near that person'],
    answer: 'Through blood, sexual contact or breastfeeding',
    explanation: 'HIV requires direct contact with infected blood or body fluids.',
  },
  {
    prompt: 'What does consent mean?',
    options: ['Doing what other people want so that they stay happy', 'Freely agreeing to something without any pressure', 'A rule that is never needed in friendships', 'A rule that applies to adults but not to teenagers'],
    answer: 'Freely agreeing to something without any pressure',
    explanation: 'Consent requires free choice, understanding, and no coercion.',
  },
  {
    prompt: 'What increases risk of teenage pregnancy?',
    options: ['Nothing, as teenage pregnancy rarely takes place', 'Poor education, no protection and pressure from others', 'Only a few people are at risk and they cannot be known', 'It is hopeless, since nothing can be done to prevent it'],
    answer: 'Poor education, no protection and pressure from others',
    explanation: 'Knowledge and preparation reduce the risk of unintended pregnancy.',
  },
  {
    prompt: 'What are benefits of delaying sexual activity?',
    options: ['There are none, since the age does not matter', 'Emotional readiness, finishing school and stable relationships', 'It wastes time, as young people should enjoy life now', 'It makes no difference to future plans or relationships'],
    answer: 'Emotional readiness, finishing school and stable relationships',
    explanation: 'Waiting allows for maturity, education, and stable relationships.',
  },
  {
    prompt: 'What is healthy sexual health?',
    options: ['Having many partners to learn what you prefer', 'Knowing your body, choosing wisely and talking to partners', 'Not thinking about it, so you avoid any worries', 'Doing what your friends say is normal to do'],
    answer: 'Knowing your body, choosing wisely and talking to partners',
    explanation: 'Good sexual health involves knowledge, responsibility, and communication.',
  },
  {
    prompt: 'How can you protect yourself from STIs?',
    options: ['It is not possible, since infections spread by chance', 'Abstinence, protection, testing and communication', 'Only one way works and all others make no difference', 'Prevention is not possible, so treatment is the only step'],
    answer: 'Abstinence, protection, testing and communication',
    explanation: 'Multiple strategies reduce STI transmission.',
  },
  {
    prompt: 'What should you do if you have questions about sexual health?',
    options: ['Ignore them, as the questions will go away in time', 'Talk to a trusted adult, a clinic or a reliable source', 'Ask anyone you meet, since all answers are the same', 'Keep the questions secret and use rumours to guess'],
    answer: 'Talk to a trusted adult, a clinic or a reliable source',
    explanation: 'Professional guidance and reliable information are important for sexual health.',
  },
];

const SexualityHealth = () => (
  <CapsSubjectTopic
    title="Sexuality and Health"
    subtitle="Understanding puberty, disease prevention, and consent"
    learnSteps={learnSteps}
    task="gr9-sexuality-health-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SexualityHealth;
