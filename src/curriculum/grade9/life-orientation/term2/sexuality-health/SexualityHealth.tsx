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
    options: ['An illness', 'A time of physical and emotional changes during adolescence', 'Only happens to boys', 'Lasts only weeks'],
    answer: 'A time of physical and emotional changes during adolescence',
    explanation: 'Puberty is a normal biological process that prepares the body for adulthood.',
  },
  {
    prompt: 'Why do different people experience puberty differently?',
    options: ['They do not', 'Genetics, nutrition, and health affect the timing and pace', 'Everyone is exactly the same', 'It is random'],
    answer: 'Genetics, nutrition, and health affect the timing and pace',
    explanation: 'Puberty varies between individuals based on biological and environmental factors.',
  },
  {
    prompt: 'What is HIV?',
    options: ['A rash', 'A virus that weakens the immune system', 'Only affects certain people', 'Always immediately fatal'],
    answer: 'A virus that weakens the immune system',
    explanation: 'HIV damages immune cells, leaving the body vulnerable to infections.',
  },
  {
    prompt: 'How is HIV transmitted?',
    options: ['Through hugging', 'Through blood, sexual contact, or breastfeeding', 'Through sharing food', 'Through coughing'],
    answer: 'Through blood, sexual contact, or breastfeeding',
    explanation: 'HIV requires direct contact with infected blood or body fluids.',
  },
  {
    prompt: 'What does consent mean?',
    options: ['Doing what others want', 'Freely agreeing to something without pressure', 'Never needed', 'Only for adults'],
    answer: 'Freely agreeing to something without pressure',
    explanation: 'Consent requires free choice, understanding, and no coercion.',
  },
  {
    prompt: 'What increases risk of teenage pregnancy?',
    options: ['It never happens', 'Lack of education, no protection, pressure from others', 'Only to some people', 'Impossible to prevent'],
    answer: 'Lack of education, no protection, pressure from others',
    explanation: 'Knowledge and preparation reduce the risk of unintended pregnancy.',
  },
  {
    prompt: 'What are benefits of delaying sexual activity?',
    options: ['None', 'Emotional readiness, education completion, relationship stability', 'It is a waste of time', 'No difference'],
    answer: 'Emotional readiness, education completion, relationship stability',
    explanation: 'Waiting allows for maturity, education, and stable relationships.',
  },
  {
    prompt: 'What is healthy sexual health?',
    options: ['Having many partners', 'Understanding your body, making informed choices, communicating with partners', 'Not thinking about it', 'Following others'],
    answer: 'Understanding your body, making informed choices, communicating with partners',
    explanation: 'Good sexual health involves knowledge, responsibility, and communication.',
  },
  {
    prompt: 'How can you protect yourself from STIs?',
    options: ['You cannot', 'Through abstinence, protection, testing, and communication', 'Only one way works', 'Prevention is impossible'],
    answer: 'Through abstinence, protection, testing, and communication',
    explanation: 'Multiple strategies reduce STI transmission.',
  },
  {
    prompt: 'What should you do if you have questions about sexual health?',
    options: ['Ignore them', 'Talk to a trusted adult, healthcare provider, or access reliable resources', 'Ask anyone', 'Keep it secret'],
    answer: 'Talk to a trusted adult, healthcare provider, or access reliable resources',
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
