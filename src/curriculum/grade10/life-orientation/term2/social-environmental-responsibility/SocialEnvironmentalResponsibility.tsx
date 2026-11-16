import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { LinkedPairs } from '../../../../../components/diagrams/lo/Lo10Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Social and environmental justice',
    content: slide(
      <>
        <Rule>Social justice means fair treatment and a fair share of opportunities, resources and rights for everyone. Environmental justice means everyone has the right to a safe and healthy environment, and no community should carry an unfair share of pollution or go without environmental services.</Rule>
        <Compare
          left={{ title: 'Social justice', items: ['Fair access to services', 'Equal rights and chances', 'Dignity for everyone'] }}
          right={{ title: 'Environmental justice', items: ['Clean air and water', 'Safe waste removal', 'A fair share of risk'] }}
          aria="Two columns. Social justice: fair access to services, equal rights and chances, dignity for everyone. Environmental justice: clean air and water, safe waste removal, and a fair share of environmental risk."
        />
        <Worked
          title="A community without refuse removal"
          steps={[
            <>Rubbish is not collected in one neighbourhood, and it piles up in the street.</>,
            <>Harm: smells, rats and a greater risk of disease.</>,
            <>Unfair: other neighbourhoods get the service. This is environmental injustice.</>,
            <>Action: residents write to the ward councillor and the municipality.</>,
          ]}
        />
        <Mistake>Believing that environmental problems are only about plants and animals. They affect people&apos;s health, and they are often linked to social justice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social issues and their effects on health',
    content: slide(
      <>
        <Rule>Contemporary social issues harm local and global communities. Food security means having enough safe and healthy food. The issues include crime, poverty, food security and food production, violence, HIV and AIDS, safety and security, unequal access to basic resources and a lack of basic services such as water and health services. They harm personal and community health.</Rule>
        <LinkedPairs
          heads={['Issue', 'Harm to health']}
          pairs={[
            ['Poverty and hunger', 'Malnutrition and illness'],
            ['No clean water', 'Water-borne diseases'],
            ['Violence and crime', 'Injury, fear and trauma'],
            ['No health services', 'Illness is not treated'],
          ]}
          aria="Four social issues and the harm each one does to health. Poverty and hunger lead to malnutrition and illness. No clean water leads to water-borne diseases. Violence and crime lead to injury, fear and trauma. No health services mean that illness is not treated."
        />
        <Worked
          title="One issue, many effects"
          steps={[
            <>A village has no clean water.</>,
            <>People drink unsafe water and get sick (physical health).</>,
            <>Children miss school and parents miss work (the community suffers).</>,
            <>Worry and stress grow in the families (emotional health).</>,
          ]}
        />
        <Mistake>Thinking that a social issue only affects the people who live with it every day. Crime, disease and hunger weaken a whole community.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skills for taking part in civic life',
    content: slide(
      <>
        <Rule>Social responsibility is your duty to help solve problems in your community. It needs social skills, constructive thinking (looking for solutions) and critical thinking (checking facts). Use them to make informed decisions and to take appropriate action.</Rule>
        <Hub
          centre="Civic skills"
          spokes={['Cooperate', 'Communicate', 'Think critically', 'Find solutions', 'Act responsibly']}
          aria="A hub with Civic skills in the centre and five spokes: cooperate, communicate, think critically, find solutions and act responsibly."
        />
        <Worked
          title="A rumour about the clinic"
          steps={[
            <>A post says that the local clinic will close.</>,
            <>Critical thinking: she checks with the clinic and the municipality before she shares it.</>,
            <>She finds that the post is false and tells her friends the facts.</>,
            <>Informed decision, appropriate action: she did not spread a rumour.</>,
          ]}
        />
        <Mistake>Believing that sharing a post is the same as taking action. Check the facts first, then do something that really helps.</Mistake>
      </>,
    ),
  },
  {
    title: 'Youth service and group projects',
    content: slide(
      <>
        <Rule>Youth and civic organisations, community services and volunteerism let young people contribute. In a group project you pick a social issue, plan together, take action and then evaluate your own contribution, your strengths and what to improve.</Rule>
        <StepFlow
          steps={['Choose an issue.', 'Research it.', 'Plan roles.', 'Take action.', 'Evaluate.']}
          aria="Five steps of a group project: choose an issue, research it, plan roles, take action and evaluate."
        />
        <Worked
          title="A group addresses food security"
          steps={[
            <>Issue: some learners come to school hungry.</>,
            <>Plan: the group starts a vegetable garden, and each member has a role.</>,
            <>Action: they plant, water and share the harvest with the school kitchen.</>,
            <>Evaluate: the group looks at what worked and what to improve.</>,
          ]}
        />
        <Mistake>One member doing all the work while the others watch. In a good project everyone has a role, and each person&apos;s contribution is assessed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between social justice and environmental justice?</>,
          <>Name two social issues and one way each can harm health.</>,
          <>Why should you check the facts before you share a post about a community problem?</>,
          <>Name the steps of a group project that addresses a social issue.</>,
        ]}
        answers={[
          <>Social justice is a fair share of opportunities, services and rights. Environmental justice is the right to a safe and healthy environment, without an unfair share of pollution.</>,
          <>For example poverty can cause malnutrition, and a lack of clean water can cause disease.</>,
          <>A rumour can be false and can cause harm. Critical thinking helps you to make an informed decision and to act appropriately.</>,
          <>Choose an issue, research it, plan roles, take action and evaluate.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is social justice?',
    options: ['The right of a person to keep the money that he earns', 'Fair treatment and a fair share of opportunities', 'The idea that people should help their own families first', 'The rule that people have to obey the same laws as others'],
    answer: 'Fair treatment and a fair share of opportunities',
    explanation: 'Social justice means fair treatment and a fair share of opportunities, resources and rights for everyone.',
  },
  {
    prompt: 'What is environmental justice?',
    options: ['Everyone has the right to a safe and healthy environment', 'Only wealthy areas should have clean water and parks', 'Plants and animals matter more than the needs of people', 'Pollution is acceptable if it takes place far from towns'],
    answer: 'Everyone has the right to a safe and healthy environment',
    explanation: 'Environmental justice means that no community carries an unfair share of pollution or goes without environmental services.',
  },
  {
    prompt: 'Rubbish is collected in some neighbourhoods but not in another. This is an example of:',
    options: ['Environmental responsibility', 'Volunteerism', 'Food security', 'Environmental injustice'],
    answer: 'Environmental injustice',
    explanation: 'One neighbourhood is denied a service that others receive, and this harms its health. It is environmental injustice.',
  },
  {
    prompt: 'Which of these is a contemporary social issue that harms communities?',
    options: ['A school sports day', 'A community garden', 'Crime and violence', 'A library book club'],
    answer: 'Crime and violence',
    explanation: 'Crime, poverty, violence, food insecurity, HIV and AIDS and a lack of basic services are social issues.',
  },
  {
    prompt: 'What does food security mean?',
    options: ['People can buy food in a shop on every street', 'People can get enough safe and healthy food', 'People may keep food in a fridge for a long time', 'People are able to grow flowers in a garden at home'],
    answer: 'People can get enough safe and healthy food',
    explanation: 'Food security means that people have access to enough safe and healthy food. A lack of it causes hunger and illness.',
  },
  {
    prompt: 'How can a lack of clean water harm a community?',
    options: ['People can get water-borne diseases', 'People can sleep better at night', 'People can save money on their bills', 'People can run faster in a sports event'],
    answer: 'People can get water-borne diseases',
    explanation: 'Unsafe water spreads diseases, so a lack of clean water harms physical health.',
  },
  {
    prompt: 'Which health harm is most closely linked to hunger caused by poverty?',
    options: ['Injury from a car accident', 'A sprained ankle from sport', 'Sunburn from a day in the sun', 'Malnutrition and illness'],
    answer: 'Malnutrition and illness',
    explanation: 'Without enough food people become malnourished and fall ill more easily.',
  },
  {
    prompt: 'Why is the effect of a social issue said to reach the whole community?',
    options: ['The people who are directly affected feel the effects alone', 'Social issues do not have an effect on a community', 'Crime, disease and hunger weaken the whole community', 'The effects take place in other countries and not here'],
    answer: 'Crime, disease and hunger weaken the whole community',
    explanation: 'Social issues such as crime and disease harm the health and safety of a whole community, and not only of the people who are directly involved.',
  },
  {
    prompt: 'What is social responsibility?',
    options: ['A right to demand services from other people', 'A duty to help to solve problems in your community', 'A rule that says you may only think about yourself', 'A job that you get when you finish school'],
    answer: 'A duty to help to solve problems in your community',
    explanation: 'Social responsibility is the duty to take part in solving problems in your community.',
  },
  {
    prompt: 'What does critical thinking mean when you read a post about a community problem?',
    options: ['Checking the facts before you act', 'Sharing the post quickly so that people hear about it', 'Believing the post because many people have shared it', 'Finding fault with each person who wrote the post'],
    answer: 'Checking the facts before you act',
    explanation: 'Critical thinking means checking facts and evidence, so that you make informed decisions and take appropriate action.',
  },
  {
    prompt: 'A learner reads that the local clinic will close. What should she do first?',
    options: ['Share the post with her friends straight away', 'Ignore the post and say nothing about it', 'Write an angry post that blames the clinic staff for it', 'Check the facts with the clinic or the municipality'],
    answer: 'Check the facts with the clinic or the municipality',
    explanation: 'Check the facts before you act. A rumour may be false and sharing it can cause harm.',
  },
  {
    prompt: 'Which of these is an example of youth service?',
    options: ['Playing a video game with friends on the weekend', 'Watching a film at the cinema with the family', 'Volunteering in a community food garden', 'Sleeping late on a Saturday morning at home'],
    answer: 'Volunteering in a community food garden',
    explanation: 'Volunteering in a community project is a service that contributes to the community.',
  },
  {
    prompt: 'What is the last step of a group project on a social issue?',
    options: ['Choose the issue that the group will work on', 'Evaluate what worked and what to improve', 'Research the issue in the library or online', 'Plan the roles of the members in the group'],
    answer: 'Evaluate what worked and what to improve',
    explanation: 'After you take action you evaluate your contribution, your strengths and what to improve.',
  },
  {
    prompt: 'In a group project on food security, what should each member have?',
    options: ['A role, and their own contribution is assessed', 'The same job as the other members in the group', 'A choice to leave the work to one person', 'A mark that depends on the result of the group alone'],
    answer: 'A role, and their own contribution is assessed',
    explanation: 'In a good group project each member has a role, and each person\'s contribution can be seen and assessed.',
  },
];

const SocialEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Social and environmental justice, social issues and your part in your community"
    learnSteps={learnSteps}
    task="gr10-social-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialEnvironmentalResponsibility;
