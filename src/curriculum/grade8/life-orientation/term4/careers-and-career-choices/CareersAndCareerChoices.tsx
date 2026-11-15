import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { MatchColumns } from '../../../../../components/diagrams/lo/lo7Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is an occupation?',
    content: slide(
      <>
        <Rule>An occupation is a type of job or work role. Occupations include paid work and service work in your community.</Rule>
        <MatchColumns leftTitle="I like" rightTitle="Occupation" pairs={[{ left: 'Helping sick people', right: 'Nurse' }, { left: 'Fixing wiring', right: 'Electrician' }, { left: 'Growing food', right: 'Farmer' }]} aria="Three interests matched with an occupation: helping sick people with nurse, fixing wiring with electrician, growing food with farmer." />
        <Worked
          title="Match an interest to an occupation"
          steps={[<>Name what you enjoy: growing food.</>, <>Ask: which work role uses this? A farmer.</>, <>An occupation is the role, so “farmer” is the occupation.</>]}
        />
        <Mistake>Thinking an occupation is a school task, a sport or a timetable. It is a type of job or work role.</Mistake>
      </>,
    ),
  },
  {
    title: 'Match interests and abilities',
    content: slide(
      <>
        <Rule>Match your own interests and abilities to career fields. Friends' opinions, social media trends and popularity are not good reasons to choose.</Rule>
        <Hub centre="Career fit" spokes={['Interests', 'Abilities', 'Values']} aria="A circle labelled Career fit with three labels around it: interests, abilities and values." />
        <Worked
          title="Thandi likes helping others and science"
          steps={[<>Interest: helping others.</>, <>Ability: she does well in science.</>, <>Fields that use both: health and service-related work.</>, <>Next step: explore those fields.</>]}
        />
        <Mistake>Choosing a career only because your friends chose it, or ignoring your own strengths completely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Research before you decide',
    content: slide(
      <>
        <Rule>Informed decisions come from researching job roles and the skills they need. In Grade 8 you explore options. You do not have to choose one final career now.</Rule>
        <StepFlow steps={['Pick a field that interests you.', 'Find out what people in it do.', 'List the skills the work needs.', 'Ask someone who does it.']} aria="Four steps for researching a career in order: pick a field, find out what people do, list the skills needed, ask someone who does the work." />
        <Worked
          title="Researching nursing"
          steps={[<>Find out what nurses do each day.</>, <>List skills: caring, science, communication.</>, <>Ask a nurse or your teacher.</>, <>Compare the skills with your own abilities.</>]}
        />
        <Mistake>Choosing from stereotypes, such as “nursing is only for women”, or refusing to ask questions. Anyone with the skills and interest can explore any field.</Mistake>
      </>,
    ),
  },
  {
    title: 'Aspiration maps and community roles',
    content: slide(
      <>
        <Rule>A career aspiration map is a plan that links your goals, strengths and steps to options. Community roles show how skills solve real needs. People can adapt and grow by learning over time.</Rule>
        <StepFlow steps={['My goal.', 'My strengths.', 'Steps I can take now.', 'Options to explore.']} aria="Four parts of an aspiration map in order: my goal, my strengths, steps I can take now, options to explore." />
        <Worked
          title="Thandi's map"
          steps={[<>Goal: help people to be healthy.</>, <>Strengths: science and caring.</>, <>Steps now: work on science and join a school helping project.</>, <>Options: nurse or another health role.</>]}
        />
        <Mistake>Making a list of wishes with no plan, or believing a career can never change once it is chosen. A map turns ideas into steps, and you can update it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why is career exploration useful in Grade 8?" answer="It helps you make informed subject and pathway choices. You do not have to choose one final career now." />
        <Check question="What should you match to a possible career field?" answer="Your personal interests and abilities, not only friends' opinions or trends." />
        <Check question="A learner likes helping others and science. What is a good next step?" answer="Explore health and service-related career fields." />
        <Check question="What is a career aspiration map?" answer="A plan that links your goals, strengths and steps to options." />
      </>,
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
