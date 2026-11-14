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
    options: ['The number of hospitals that serve a community', 'The wellbeing of all the people in a community', 'The exercise that people in a community take', 'The health of one person at a time, but not groups'],
    answer: 'The wellbeing of all the people in a community',
    explanation: 'Community health includes access to clean water, healthcare, safety, and good living conditions.',
  },
  {
    prompt: 'What factors affect community wellbeing?',
    options: ['The government and its offices in the community only', 'Access to services, clean water, safety, education and jobs', 'The income of the richest families in the area only', 'The weather of the area and its yearly rainfall only'],
    answer: 'Access to services, clean water, safety, education and jobs',
    explanation: 'Multiple factors contribute to healthy communities.',
  },
  {
    prompt: 'How does social pressure affect people?',
    options: ['It affects nothing, since people choose alone', 'It can influence choices, for good or bad', 'It affects adults at work and not young people', 'It affects people at school and nowhere else'],
    answer: 'It can influence choices, for good or bad',
    explanation: 'Social pressure can be positive (encouraging good behaviour) or negative (pushing harmful choices).',
  },
  {
    prompt: 'Why is environmental care important?',
    options: ['It is not important, since resources never run out', 'To protect resources for future generations', 'It matters only for animals and plants that are rare', 'It is too hard for ordinary people to take part in'],
    answer: 'To protect resources for future generations',
    explanation: 'Environmental care ensures a healthy planet for current and future people.',
  },
  {
    prompt: 'What is the "reduce, reuse, recycle" principle?',
    options: ['A rule where only recycling matters and the rest does not', 'A way of cutting waste and saving resources', 'A plan that works only in rich countries with money', 'A slogan that is not practical in daily life'],
    answer: 'A way of cutting waste and saving resources',
    explanation: 'This approach minimizes environmental impact through reducing consumption, reusing items, and recycling.',
  },
  {
    prompt: 'How can individuals promote community health?',
    options: ['They cannot, as community health is for the state alone', 'By making healthy choices and helping others to do so', 'Only doctors and nurses can improve community health', 'Only the government can improve community health'],
    answer: 'By making healthy choices and helping others to do so',
    explanation: 'Individual choices and community participation strengthen overall health.',
  },
  {
    prompt: 'What is responsible action?',
    options: ['Doing nothing, so that you cannot cause harm', 'Making choices that help your community and nature', 'Taking action that only leaders are allowed to take', 'Avoiding problems so you do not make them worse'],
    answer: 'Making choices that help your community and nature',
    explanation: 'Responsible action involves considering impacts and contributing positively.',
  },
  {
    prompt: 'What are examples of environmental problems?',
    options: ['Crime, unemployment, poverty and hunger in towns', 'Pollution, deforestation, water shortage and climate change', 'Wars, strikes, riots and the loss of jobs', 'Traffic, noise, queues and crowded buses in cities'],
    answer: 'Pollution, deforestation, water shortage and climate change',
    explanation: 'Environmental challenges include pollution, resource depletion, and climate impacts.',
  },
  {
    prompt: 'How does education help community health?',
    options: ['It helps only the doctors who treat sick people', 'It helps people make informed choices about their health', 'It has no link, as health depends on luck alone', 'It matters for adults only and not for learners'],
    answer: 'It helps people make informed choices about their health',
    explanation: 'Education empowers people to understand and improve their health and communities.',
  },
  {
    prompt: 'What can you do as a learner to protect the environment?',
    options: ['Nothing, as only adults can change the environment', 'Save water, cut waste, teach others and volunteer', 'Leave the work to adults, who have more power than you', 'Do nothing, as one learner is too small to matter'],
    answer: 'Save water, cut waste, teach others and volunteer',
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
