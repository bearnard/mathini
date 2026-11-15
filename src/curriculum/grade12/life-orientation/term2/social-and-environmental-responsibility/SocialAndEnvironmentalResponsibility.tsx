import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Social and Environmental Issues',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Life Orientation expects learners to examine issues such as pollution, unsafe waste disposal, poverty, inequality and poor service delivery. These problems affect health, dignity and opportunity, so they require informed and ethical responses.</p>
      </div>
    ),
  },
  {
    title: 'Ethics, Rights and Responsibility',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Social and environmental responsibility involves acting in ways that protect people and the natural environment. Learners should connect personal conduct, community behaviour and institutional accountability to constitutional values such as dignity, equality and care.</p>
      </div>
    ),
  },
  {
    title: 'Legislation and Public Protection',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Laws and policies help regulate health, safety and environmental practices. While learners are not expected to memorise every act, they should understand that legislation exists to protect communities, guide behaviour and support justice when harm occurs.</p>
      </div>
    ),
  },
  {
    title: 'Designing Realistic Interventions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Effective interventions are practical, specific and appropriate to the problem. Examples include awareness campaigns, recycling systems, reporting unsafe practices, community partnerships and advocacy for better local support and services.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Why are environmental issues also social issues?',
    options: ['They affect wildlife but not communities', 'They can harm health, safety and well-being', 'They matter in rural areas but not towns', 'They are unrelated to constitutional rights'],
    answer: 1,
    explanation: 'Environmental harm affects communities directly through health, living conditions and access to resources.',
  },
  {
    prompt: 'What does ethical responsibility require?',
    options: [
      'Ignoring problems that do not affect you personally',
      'Acting in ways that protect people and the environment',
      'Waiting for others to solve every issue',
      'Choosing the cheapest option every time',
    ],
    answer: 1,
    explanation: 'Ethical responsibility means considering consequences for others and responding with care.',
  },
  {
    prompt: 'Why is legislation important in environmental health?',
    options: ['It makes citizen action unnecessary', 'It sets rules that protect communities', 'It mainly serves the interests of businesses', 'It replaces the role of citizens'],
    answer: 1,
    explanation: 'Legislation sets standards and creates accountability when health or safety is threatened.',
  },
  {
    prompt: 'Which response is the most realistic community intervention?',
    options: [
      'Complaining without evidence',
      'Creating a school recycling plan with clear roles',
      'Ignoring the issue because it is difficult',
      'Blaming one person for a complex problem',
    ],
    answer: 1,
    explanation: 'A realistic intervention has practical steps and shared responsibility.',
  },
  {
    prompt: 'How does pollution affect wellbeing?',
    options: [
      'It always has immediate visible effects only',
      'It can damage health and reduce environmental quality',
      'It improves public health',
      'It affects only industries',
    ],
    answer: 1,
    explanation: 'Pollution can harm air, water and soil, which directly affects human wellbeing.',
  },
  {
    prompt: 'What is accountability in a social issue context?',
    options: ['Blaming others for the harm that occurred', 'Answering for actions and fixing harm', 'Keeping reports of harm from the public', 'Assuming national laws do not apply locally'],
    answer: 1,
    explanation: 'Accountability means people and institutions must explain and improve their actions.',
  },
  {
    prompt: 'Which value is most directly supported by protecting community health?',
    options: [
      'Greed',
      'Human dignity',
      'Isolation',
      'Status',
    ],
    answer: 1,
    explanation: 'Protecting health recognises the dignity and worth of every person.',
  },
  {
    prompt: 'What should learners do before proposing an intervention?',
    options: ['Copy a solution used somewhere else', 'Study the issue and who it affects', 'Choose the idea that is cheapest', 'Wait for authorities to propose something'],
    answer: 1,
    explanation: 'Good interventions begin with informed analysis of the actual problem.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SocialAndEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title='Social and Environmental Responsibility'
    subtitle='Current social and environmental issues, ethics, legislation awareness and realistic interventions.'
    learnSteps={learnSteps}
    task='gr12-social-and-environmental-responsibility-t2'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default SocialAndEnvironmentalResponsibility;
