import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Community Health',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Community health</strong> is the wellbeing of all people in a community.
          Healthy communities have clean water, healthcare, and safe environments.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Everyone has a role in creating a healthy community.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Social Pressure and Environmental Care',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Social pressure</strong> is when friends or peers try to make you do something.
          <strong> Environmental care</strong> is protecting nature and resources for the future.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Social pressure</strong>
            <p className="text-slate-600">Resisting negative pressure matters.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Environmental care</strong>
            <p className="text-slate-600">Reduce, reuse, recycle, protect nature.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Responsible Action',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Responsible action</strong> means making choices that help your community and environment.
          Small actions by many people create big changes.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">You can take action by:</p>
          <p className="text-slate-600">Educating others, volunteering, reducing waste, and supporting community initiatives.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is community health?',
    options: ['Only about hospitals', 'The wellbeing of all people in a community', 'Just exercise', 'Individual health only'],
    answer: 'The wellbeing of all people in a community',
    explanation: 'Community health includes access to clean water, healthcare, safety, and good living conditions.',
  },
  {
    prompt: 'What factors affect community wellbeing?',
    options: ['Only government', 'Access to services, clean water, safety, education, and employment', 'Just income', 'Only weather'],
    answer: 'Access to services, clean water, safety, education, and employment',
    explanation: 'Multiple factors contribute to healthy communities.',
  },
  {
    prompt: 'How does social pressure affect people?',
    options: ['It never affects anything', 'It can influence choices, both positive and negative', 'Only affects adults', 'Only at school'],
    answer: 'It can influence choices, both positive and negative',
    explanation: 'Social pressure can be positive (encouraging good behaviour) or negative (pushing harmful choices).',
  },
  {
    prompt: 'Why is environmental care important?',
    options: ['It is not important', 'To protect resources for future generations', 'Only for animals', 'Too difficult'],
    answer: 'To protect resources for future generations',
    explanation: 'Environmental care ensures a healthy planet for current and future people.',
  },
  {
    prompt: 'What is the "reduce, reuse, recycle" principle?',
    options: ['Only recycling matters', 'A strategy to reduce waste and conserve resources', 'Only for rich countries', 'Not practical'],
    answer: 'A strategy to reduce waste and conserve resources',
    explanation: 'This approach minimizes environmental impact through reducing consumption, reusing items, and recycling.',
  },
  {
    prompt: 'How can individuals promote community health?',
    options: ['They cannot', 'By making healthy choices and helping others do the same', 'Only doctors can', 'Only government'],
    answer: 'By making healthy choices and helping others do the same',
    explanation: 'Individual choices and community participation strengthen overall health.',
  },
  {
    prompt: 'What is responsible action?',
    options: ['Not doing anything', 'Making choices that help your community and environment', 'Only for leaders', 'Avoiding problems'],
    answer: 'Making choices that help your community and environment',
    explanation: 'Responsible action involves considering impacts and contributing positively.',
  },
  {
    prompt: 'What are examples of environmental problems?',
    options: ['None exist', 'Pollution, deforestation, water shortage, climate change', 'Only in other countries', 'Not our concern'],
    answer: 'Pollution, deforestation, water shortage, climate change',
    explanation: 'Environmental challenges include pollution, resource depletion, and climate impacts.',
  },
  {
    prompt: 'How does education help community health?',
    options: ['It does not', 'It helps people make informed decisions about health and wellbeing', 'Only for doctors', 'Not relevant'],
    answer: 'It helps people make informed decisions about health and wellbeing',
    explanation: 'Education empowers people to understand and improve their health and communities.',
  },
  {
    prompt: 'What can you do as a learner to protect the environment?',
    options: ['Nothing', 'Conserve water, reduce waste, educate others, volunteer', 'Only adults can help', 'Too small to matter'],
    answer: 'Conserve water, reduce waste, educate others, volunteer',
    explanation: 'Young people can contribute meaningfully to environmental protection.',
  },
];

const SocialEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Community health and sustainable action"
    learnSteps={learnSteps}
    task="gr9-social-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialEnvironmentalResponsibility;
