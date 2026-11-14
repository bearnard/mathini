import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Protect people and the environment',
    image: {
      src: '/curriculum/grade8/lo/term2/social-and-environmental-responsibility/diagram.webp',
      alt: 'grade 8 learners cleaning a shared space and sorting waste for recycling',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Social and environmental responsibility includes reducing pollution, saving water, managing waste, and caring
          for shared community spaces.
        </p>
      </div>
    ),
  },
  {
    title: 'Take practical local action',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners can improve local environmental health through simple daily choices and cooperative school projects.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action helps reduce plastic pollution?',
    options: [
      'Reusing containers and recycling correctly',
      'Throwing plastic into storm drains',
      'Burning waste near homes',
      'Leaving litter after break time',
    ],
    answer: 'Reusing containers and recycling correctly',
    explanation: 'Reducing and recycling plastic lowers pollution in streets and waterways.',
  },
  {
    prompt: 'Why is water conservation important?',
    options: ['It protects limited water resources for everyone', 'It matters only on the day of the sports day', 'It is not needed in communities', 'It means that people avoid washing'],
    answer: 'It protects limited water resources for everyone',
    explanation: 'Saving water supports health, sanitation, and long-term sustainability.',
  },
  {
    prompt: 'What is environmental health?',
    options: ['How our surroundings affect human wellbeing', 'A list of the rules for an exam', 'A type of app for a smartphone', 'A forecast of the weather and nothing more'],
    answer: 'How our surroundings affect human wellbeing',
    explanation: 'Clean air, water, and spaces directly influence health outcomes.',
  },
  {
    prompt: 'A school wants less litter. What is the best first step?',
    options: [
      'Set up labelled bins and awareness routines',
      'Ignore litter until term end',
      'Close the playground permanently',
      'Remove all waste bins',
    ],
    answer: 'Set up labelled bins and awareness routines',
    explanation: 'Visible systems and habits encourage cleaner behaviour.',
  },
  {
    prompt: 'Which option is an example of conservation?',
    options: ['Protecting natural resources through responsible use', 'Using up resources as fast as possible', 'Cutting down trees for convenience', 'Wasting electricity on purpose'],
    answer: 'Protecting natural resources through responsible use',
    explanation: 'Conservation balances present needs with future needs.',
  },
  {
    prompt: 'How can learners contribute to cleaner shared spaces?',
    options: ['Join clean-up activities and avoid littering', 'Leave the rubbish for someone else to clear', 'Damage the public facilities', 'Stop others from reporting problems'],
    answer: 'Join clean-up activities and avoid littering',
    explanation: 'Participation and accountability improve community spaces.',
  },
  {
    prompt: 'Which statement about pollution is correct?',
    options: [
      'Pollution can harm people, animals, and ecosystems',
      'Pollution only affects distant countries',
      'Pollution has no link to health',
      'Pollution disappears on its own immediately',
    ],
    answer: 'Pollution can harm people, animals, and ecosystems',
    explanation: 'Pollution has physical, social, and environmental impacts.',
  },
  {
    prompt: 'What should learners do when they see illegal dumping?',
    options: ['Report it through the right school or community channel', 'Ignore it every time that you see it', 'Dump more waste close by', 'Confront the people in an aggressive way'],
    answer: 'Report it through the right school or community channel',
    explanation: 'Reporting helps authorities respond safely and effectively.',
  },
];

const SocialAndEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Environmental health, pollution, water, waste, conservation, and local action"
    learnSteps={learnSteps}
    task="gr8-social-and-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialAndEnvironmentalResponsibility;
