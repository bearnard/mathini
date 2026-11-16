import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Your life roles',
    content: slide(
      <>
        <Rule>A life role is a part you play in life, with its own responsibilities. You have many roles at the same time: for example child, student, friend and leader. Later you may be a partner, a mother or father, a breadwinner, an employee or an employer, and a grandparent.</Rule>
        <Hub
          centre="Me"
          spokes={['Child', 'Student', 'Partner', 'Parent', 'Employee', 'Leader']}
          aria="A hub with Me in the centre and six life roles around it: child, student, partner, parent, employee and leader. One person plays many roles."
        />
        <Worked
          title="Thando&apos;s roles in one day"
          steps={[
            <>Child: she helps her grandmother with supper.</>,
            <>Student: she completes her homework.</>,
            <>Leader: she is the captain of the netball team.</>,
            <>Follower: in the school choir she follows the conductor.</>,
          ]}
        />
        <Mistake>Thinking that you only have one role at a time. You play several roles together, and each one has its own responsibilities.</Mistake>
      </>,
    ),
  },
  {
    title: 'Roles and responsibilities change over a lifetime',
    content: slide(
      <>
        <Rule>Roles are not fixed. They evolve as you grow older, and each new role brings new responsibilities. A breadwinner earns money to support a family, an employer gives people work and pays them, and an employee follows the rules and does the job well.</Rule>
        <StepFlow
          steps={['Child.', 'Student.', 'Employee or employer.', 'Partner and parent.', 'Grandparent.']}
          aria="Five life roles in a possible order over a lifetime: child, student, employee or employer, partner and parent, and then grandparent."
        />
        <Worked
          title="A new role means new responsibilities"
          steps={[
            <>As a student, Sipho is responsible for attending school and doing his work.</>,
            <>When he gets his first job he becomes an employee.</>,
            <>New responsibilities: he must arrive on time and follow the workplace rules.</>,
            <>Later, as a father, he also has a responsibility for his child&apos;s care.</>,
          ]}
        />
        <Mistake>Believing that the responsibilities of a role stay the same for ever. They change as the role and the people around you change.</Mistake>
      </>,
    ),
  },
  {
    title: 'How roles change relationships',
    content: slide(
      <>
        <Rule>When your roles change, your relationships change too. Several roles can also pull in different directions. Handle them by communicating, setting priorities and asking for help when you need it.</Rule>
        <Worked
          title="Two roles that clash"
          steps={[
            <>Lindiwe is a student, and she also looks after her little brother after school.</>,
            <>On the day before a test she has no time to study.</>,
            <>She talks to her mother and they share the care of the little brother.</>,
            <>Result: both roles are handled, and the relationship is stronger.</>,
          ]}
        />
        <Mistake>Trying to handle every role alone and in silence. Talking to the people around you and asking for help is part of handling your roles well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Society, culture and your roles',
    content: slide(
      <>
        <Rule>Society and culture shape what people expect of each role, for example who is the breadwinner or who looks after children. These expectations can change over time. Respect your culture, and question expectations that limit people unfairly.</Rule>
        <Worked
          title="An unfair expectation at home"
          steps={[
            <>Mpho&apos;s family expects her to do all the housework, and not her brother.</>,
            <>This expectation comes from a gender stereotype about roles.</>,
            <>She speaks respectfully to her parents and suggests that the work be shared.</>,
            <>Result: roles are shared more fairly, and she still respects her family.</>,
          ]}
        />
        <Mistake>Thinking that you must either accept every expectation or reject your culture. You can respect your culture and still ask whether an expectation is fair.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name four life roles that a person can have.</>,
          <>Why do the responsibilities of a role change over a lifetime? Give an example.</>,
          <>Two of your roles clash on the day before a test. Give one way to handle this.</>,
          <>How can society and culture influence a role? Give one example.</>,
        ]}
        answers={[
          <>For example child, student, partner, parent, employee, employer, leader or grandparent.</>,
          <>Because roles evolve as you grow. A student must attend school. An employee must also arrive on time and follow workplace rules.</>,
          <>Talk to the people around you, set priorities and ask for help, for example share the care of a sibling.</>,
          <>For example a culture may expect a woman to do all the housework. Such expectations can be questioned if they are unfair.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a life role?',
    options: ['A rule that a school makes for the learners in it', 'A part you play, with its own responsibilities', 'A job that a person gets when they finish school', 'A time of the day when a person is at work'],
    answer: 'A part you play, with its own responsibilities',
    explanation: 'A life role is a part you play, such as child, student or parent. Each role has its own responsibilities.',
  },
  {
    prompt: 'Which of these is a life role?',
    options: ['Student', 'Weekend', 'Holiday', 'Timetable'],
    answer: 'Student',
    explanation: 'Child, student, partner, parent, breadwinner, employee, employer, leader, follower and grandparent are life roles.',
  },
  {
    prompt: 'Thando helps her grandmother with supper, does her homework and captains the netball team. What does this show?',
    options: ['A person can have just one role at a time', 'A person should choose the roles that are easiest to do', 'A person must give up one role to take another', 'A person plays several roles at the same time'],
    answer: 'A person plays several roles at the same time',
    explanation: 'One person plays many roles together: here child, student and leader.',
  },
  {
    prompt: 'What is a breadwinner?',
    options: ['A person who bakes bread for a living', 'A person who looks after the children at home', 'A person who earns money to support a family', 'A person who teaches other people how to cook'],
    answer: 'A person who earns money to support a family',
    explanation: 'A breadwinner earns the money that supports a family.',
  },
  {
    prompt: 'What does an employer do?',
    options: ['Does a job for someone else and receives a salary', 'Gives people work and pays them for it', 'Teaches people how to find a job in a new place', 'Looks for a job in a company in another town'],
    answer: 'Gives people work and pays them for it',
    explanation: 'An employer provides work and pays employees. An employee works for an employer.',
  },
  {
    prompt: 'What is the main responsibility of the role of a student?',
    options: ['Attending school and doing the work', 'Earning the money that a family needs', 'Giving jobs to other people in the community', 'Looking after the grandchildren of the family'],
    answer: 'Attending school and doing the work',
    explanation: 'A student\'s responsibility is to attend school and do the schoolwork.',
  },
  {
    prompt: 'What do we mean when we say that roles evolve?',
    options: ['Roles stay the same from the day you are born until old age', 'Roles only change when a person moves house', 'Roles are decided by the law and cannot change', 'Roles and responsibilities change as people grow'],
    answer: 'Roles and responsibilities change as people grow',
    explanation: 'As you grow, new roles come and old ones change. Each role brings new responsibilities.',
  },
  {
    prompt: 'Sipho gets his first job. Which new responsibility does he have?',
    options: ['To attend school every day and write the examinations', 'To look after his grandchildren after work', 'To arrive on time and follow the rules at work', 'To give other people a job in his business'],
    answer: 'To arrive on time and follow the rules at work',
    explanation: 'As an employee he must arrive on time, follow the rules and do the job well.',
  },
  {
    prompt: 'What is a way to handle two roles that clash?',
    options: ['Give up one of the roles without telling anyone', 'Talk to others, set priorities and ask for help', 'Handle both roles alone and in silence', 'Ignore one of the roles until it goes away'],
    answer: 'Talk to others, set priorities and ask for help',
    explanation: 'Communication, priorities and asking for help are ways to handle roles that clash.',
  },
  {
    prompt: 'Lindiwe looks after her little brother and also has a test tomorrow. What should she do?',
    options: ['Talk to her mother so that they can share the care', 'Study late at night and tell no one why she is tired', 'Stop going to school until the test is over', 'Leave her brother alone while she studies'],
    answer: 'Talk to her mother so that they can share the care',
    explanation: 'Talking to a family member and sharing the responsibility is a good way to handle both roles.',
  },
  {
    prompt: 'How do changing roles affect relationships?',
    options: ['Relationships stay exactly the same, whatever the role', 'Relationships end each time that a new role begins', 'Only the relationship with your parents is affected', 'New roles can change how you relate to others'],
    answer: 'New roles can change how you relate to others',
    explanation: 'When you take on a new role, such as a first job or being a parent, your relationships change too.',
  },
  {
    prompt: 'How can culture and society influence a role?',
    options: ['They decide which subjects a learner passes', 'They decide how much money a person earns', 'They shape what people expect of each role', 'They make sure that every role is shared equally'],
    answer: 'They shape what people expect of each role',
    explanation: 'Society and culture shape expectations, for example about who is the breadwinner or who cares for children.',
  },
  {
    prompt: 'A family expects the daughter to do all the housework and not her brother. This expectation comes from:',
    options: ['A law about housework in the Constitution', 'A gender stereotype about roles', 'A rule of the school that the girl attends', 'A decision by the girl herself'],
    answer: 'A gender stereotype about roles',
    explanation: 'Expecting one gender to do the housework is a stereotype about roles. It can be questioned respectfully.',
  },
  {
    prompt: 'What is the best response to an unfair expectation in your culture or family?',
    options: ['Speak respectfully and suggest a fair way', 'Accept the expectation without any question', 'Reject your culture and your family completely', 'Argue loudly until the family agrees with you'],
    answer: 'Speak respectfully and suggest a fair way',
    explanation: 'You can respect your culture and still ask whether an expectation is fair.',
  },
];

const LifeRoles = () => (
  <CapsSubjectTopic
    title="Life Roles and Their Responsibilities"
    subtitle="Child, student, adult, partner, parent, worker and leader: how roles change"
    learnSteps={learnSteps}
    task="gr10-life-roles-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default LifeRoles;
