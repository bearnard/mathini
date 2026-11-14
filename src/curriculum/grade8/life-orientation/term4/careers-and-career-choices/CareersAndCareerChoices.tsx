import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Connect interests to opportunities',
    image: {
      src: '/curriculum/grade8/lo/term4/careers-and-career-choices/diagram.webp',
      alt: 'grade 8 learner exploring career options linked to interests and abilities',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Careers and career choices helps learners link interests, abilities, and values to occupations and community
          work roles.
        </p>
      </div>
    ),
  },
  {
    title: 'Plan early with realistic steps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Career awareness in Grade 8 focuses on exploration, informed choices, and understanding pathways rather than
          fixed final decisions.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is career exploration useful in Grade 8?',
    options: ['It helps learners make informed subject and pathway choices', 'It forces them to choose one final career now', 'It has no link to how they do at school', 'It takes the place of all their learning goals'],
    answer: 'It helps learners make informed subject and pathway choices',
    explanation: 'Early exploration supports smarter long-term planning.',
  },
  {
    prompt: 'Which factor should be matched to a possible career field?',
    options: ['Personal interests and abilities', 'Only friend opinions', 'Random social media trends', 'Popularity at school'],
    answer: 'Personal interests and abilities',
    explanation: 'Career fit improves when strengths and interests align with demands.',
  },
  {
    prompt: 'What is an occupation?',
    options: ['A type of job or work role', 'A school detention task', 'A sports tournament only', 'A study timetable'],
    answer: 'A type of job or work role',
    explanation: 'Occupations describe forms of paid or service work.',
  },
  {
    prompt: 'Which action supports informed career decisions?',
    options: [
      'Researching job roles and required skills',
      'Choosing based on stereotypes',
      'Ignoring your strengths completely',
      'Refusing to ask questions',
    ],
    answer: 'Researching job roles and required skills',
    explanation: 'Research builds realistic understanding of career pathways.',
  },
  {
    prompt: 'What is a career aspiration map?',
    options: ['A plan linking goals, strengths and steps to options', 'A map of the school buildings and nothing else', 'A list of wishes with no plan behind them', 'A record of exam marks and nothing else'],
    answer: 'A plan linking goals, strengths and steps to options',
    explanation: 'Aspiration mapping turns ideas into practical planning.',
  },
  {
    prompt: 'How can community roles help career awareness?',
    options: [
      'They show how skills are used to solve real needs',
      'They make school subjects unnecessary',
      'They remove the need for effort',
      'They only apply to adults with degrees',
    ],
    answer: 'They show how skills are used to solve real needs',
    explanation: 'Community examples connect learning to meaningful work.',
  },
  {
    prompt: 'Which statement about careers is accurate?',
    options: ['People can adapt and grow by learning over time', 'Careers never change once they are chosen', 'Only one pathway leads to success', 'Interests never develop in a person'],
    answer: 'People can adapt and grow by learning over time',
    explanation: 'Career development is a lifelong process.',
  },
  {
    prompt: 'A learner likes helping others and science. Which step is best?',
    options: ['Explore health and service-related career fields', 'Ignore both interests and do nothing', 'Choose only what your friends choose', 'Avoid any planning for the future'],
    answer: 'Explore health and service-related career fields',
    explanation: 'Combining interests and strengths guides relevant options.',
  },
];

const CareersAndCareerChoices = () => (
  <CapsSubjectTopic
    title="Careers and Career Choices"
    subtitle="Interests, abilities, occupations, and aspiration mapping"
    learnSteps={learnSteps}
    task="gr8-careers-and-career-choices-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CareersAndCareerChoices;
