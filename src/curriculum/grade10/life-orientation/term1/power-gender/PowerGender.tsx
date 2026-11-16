import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Power and power relations',
    content: slide(
      <>
        <Rule>Power is the ability to influence people, decisions or resources. Power relations describe how power is shared, or not shared equally, between people or groups. Power can be used fairly or it can be abused.</Rule>
        <Compare
          left={{ title: 'Power used well', items: ['Listens before deciding', 'Protects and helps others', 'Is fair and accountable'] }}
          right={{ title: 'Power abused', items: ['Bullies or threatens', 'Forces others to obey', 'Takes what is not theirs'] }}
          aria="Two columns. Power used well: listens before deciding, protects and helps others, is fair and accountable. Power abused: bullies or threatens, forces others to obey, takes what is not theirs."
        />
        <Worked
          title="A class prefect has power"
          steps={[
            <>The school gives the prefect the power to keep the library quiet.</>,
            <>Used well: she asks everyone to be quiet and treats every learner the same way.</>,
            <>Abused: she demands lunch money from the younger learners.</>,
            <>The power is the same. What matters is how it is used.</>,
          ]}
        />
        <Mistake>Thinking that power always means force. People also have power through their position, knowledge, money, age or popularity. The problem begins when power is abused.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sex, gender, masculinity and femininity',
    content: slide(
      <>
        <Rule>Sex refers to the biological differences between men and women, such as reproduction. Gender refers to the roles and expectations a society attaches to being a man or a woman. Masculinity and femininity are the qualities a society links with men and with women.</Rule>
        <Compare
          left={{ title: 'Biological (sex)', items: ['Only women menstruate', 'Only women can be pregnant', 'Only men produce sperm'] }}
          right={{ title: 'Social (gender roles)', items: ['Who cooks at home', 'Who earns the money', 'Who may show emotion'] }}
          aria="Two columns. Biological differences between men and women: only women menstruate, only women can be pregnant, only men produce sperm. Social gender roles: who cooks at home, who earns the money, and who may show emotion."
        />
        <Worked
          title="Biology or gender role?"
          steps={[
            <>&quot;Giving birth&quot;: biological. Only women can do it.</>,
            <>&quot;Cooking supper&quot;: a gender role. A man or a woman can do it.</>,
            <>&quot;Boys must not cry&quot;: a gender expectation, and a stereotype.</>,
            <>Roles differ between cultures and change over time. Biology does not.</>,
          ]}
        />
        <Mistake>Thinking that sex and gender mean the same thing, or that roles such as housework or leadership are biological. Most gender roles are learned from society and can change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stereotypes and gender roles, also in sport',
    content: slide(
      <>
        <Rule>A gender stereotype is a fixed idea about how all men or all women should behave. Stereotypes limit what people may do, including in sport. Differences in who takes part often come from stereotypes, access and safety, not only from ability.</Rule>
        <StepFlow
          steps={['Stereotype: soccer is for boys.', 'Barrier: few girls try out.', 'Challenge: judge skill, not gender.', 'Result: fairer participation.']}
          aria="Four steps. The stereotype that soccer is for boys leads to a barrier, because few girls try out. Challenge it by judging skill and not gender. The result is fairer participation."
        />
        <Worked
          title="Nomsa wants to join the school soccer team"
          steps={[
            <>Some learners say, &quot;Soccer is for boys.&quot;</>,
            <>That is a stereotype: it describes a whole group, not Nomsa.</>,
            <>The coach judges her skill and fitness, not her gender.</>,
            <>The school gives the girls&apos; team a field and a coach, so that participation is fair.</>,
          ]}
        />
        <Mistake>Believing that a stereotype is true for every person in the group. Each person has their own skills, interests and strengths.</Mistake>
      </>,
    ),
  },
  {
    title: 'How gender inequality affects wellbeing',
    content: slide(
      <>
        <Rule>Gender inequality means that men and women do not have equal power and opportunities. It harms relationships and wellbeing. It can lead to sexual abuse, violence, teenage pregnancy and STIs, including HIV and AIDS, because the less powerful partner may find it hard to say no or to negotiate.</Rule>
        <Worked
          title="Pressure in a relationship"
          steps={[
            <>Sibusiso says to his girlfriend, &quot;If you loved me, you would do it.&quot;</>,
            <>This is pressure and control. It uses unequal power.</>,
            <>She has the right to say no, and a partner who respects her accepts it.</>,
            <>If she is in danger or afraid, she can tell a trusted adult, a school counsellor or a clinic, or phone Childline on 116.</>,
          ]}
        />
        <Mistake>Thinking that violence or abuse in a relationship is a private matter, or the fault of the person who is hurt. Abuse is always the responsibility of the person who abuses, and help is available.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between power and the abuse of power? Give one example of each.</>,
          <>Is &quot;boys must not cry&quot; a biological difference or a gender role? Explain.</>,
          <>A girl is told that soccer is for boys. Name the stereotype and one way to challenge it.</>,
          <>Give two ways in which gender inequality can harm a person&apos;s wellbeing.</>,
        ]}
        answers={[
          <>Power is the ability to influence people or decisions. Abuse is using it unfairly, for example a prefect who demands lunch money, compared with a prefect who keeps the library quiet fairly.</>,
          <>A gender role, because it is an expectation society puts on boys. It is not a biological difference, and it is a stereotype.</>,
          <>The stereotype is that soccer is only for boys. Challenge it by judging a player on skill and fitness, not on gender.</>,
          <>For example it can make it hard to say no to sex, which can lead to teenage pregnancy or STIs, and it can lead to violence or sexual abuse.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is power?',
    options: ['The physical strength to defeat another person in a fight', 'The ability to influence people, decisions or resources', 'The right to break the rules that apply to other people', 'The money that a family has saved over many years'],
    answer: 'The ability to influence people, decisions or resources',
    explanation: 'Power is the ability to influence what people do, what is decided or how resources are used.',
  },
  {
    prompt: 'What are power relations?',
    options: ['How power is shared between people or groups', 'The family members that a person is related to by birth', 'The way in which electricity is shared between households', 'The agreements that two friends make about spending time together'],
    answer: 'How power is shared between people or groups',
    explanation: 'Power relations describe who has more or less power in a relationship or in a group.',
  },
  {
    prompt: 'A class prefect demands lunch money from younger learners. This is:',
    options: ['A responsible use of power', 'A normal part of being a good leader', 'A form of respect for the learners', 'An abuse of power'],
    answer: 'An abuse of power',
    explanation: 'Using a position to take what is not yours, or to force others, is an abuse of power.',
  },
  {
    prompt: 'Which of these is a fair use of power?',
    options: ['A prefect lets only her friends use the library computers', 'A prefect threatens learners who do not obey her', 'A prefect asks every learner to be quiet in the library', 'A prefect keeps the money that learners give for a school trip'],
    answer: 'A prefect asks every learner to be quiet in the library',
    explanation: 'Applying a rule in the same way to everyone is a fair and accountable use of power.',
  },
  {
    prompt: 'What does the word gender refer to?',
    options: ['The biological differences in how men and women reproduce', 'The roles society expects of a man or a woman', 'The age at which a person is considered to be an adult', 'The place where a person was born and grew up as a child'],
    answer: 'The roles society expects of a man or a woman',
    explanation: 'Gender is about social roles and expectations. Sex is about biological differences.',
  },
  {
    prompt: 'Which of these is a biological difference between men and women?',
    options: ['Only women can be pregnant and give birth', 'Only men can become leaders in a community or a country', 'Only women can look after small children really well', 'Only men can earn the money for the family to live on'],
    answer: 'Only women can be pregnant and give birth',
    explanation: 'Pregnancy and birth are biological. Leadership, caring and earning are not limited by sex.',
  },
  {
    prompt: 'Which of these is a gender role and NOT a biological difference?',
    options: ['Women menstruate each month during their fertile years', 'Women can breastfeed a baby after birth', 'Men produce sperm in their bodies', 'Expecting women to do most of the housework'],
    answer: 'Expecting women to do most of the housework',
    explanation: 'Who does the housework is decided by society and families, so it is a gender role.',
  },
  {
    prompt: 'What does masculinity refer to?',
    options: ['The physical strength that each man is born with at birth', 'The legal rights that men have in a country, and women do not', 'The qualities a society links with being a man', 'The ability to produce sperm and become a father one day'],
    answer: 'The qualities a society links with being a man',
    explanation: 'Masculinity, like femininity, is about the qualities that a society expects of men or women.',
  },
  {
    prompt: 'Which statement is a gender stereotype?',
    options: ['Girls and boys can each learn to play soccer', 'Boys must not cry because that is for girls', 'People of any gender can be good leaders', 'Some boys enjoy cooking and some girls enjoy building'],
    answer: 'Boys must not cry because that is for girls',
    explanation: 'A stereotype is a fixed idea about how all boys or all girls should behave.',
  },
  {
    prompt: 'A school says that soccer is for boys, so girls may not try out. Which response challenges the stereotype?',
    options: ['Judge each person by skill and fitness, not by gender', 'Make a rule that boys must always get the best field', 'Tell the girls to choose a different sport to avoid trouble', 'Accept the rule because it has existed for many years'],
    answer: 'Judge each person by skill and fitness, not by gender',
    explanation: 'Judging people on skill, and not on gender, challenges the stereotype and makes participation fair.',
  },
  {
    prompt: 'Why do fewer girls than boys take part in some sports?',
    options: ['Girls are born without the ability to play sport well', 'The Constitution does not allow girls to play sport', 'Girls do not need regular exercise to stay healthy', 'Stereotypes, access and safety'],
    answer: 'Stereotypes, access and safety',
    explanation: 'Differences in participation often come from stereotypes, access and safety, and not only from ability.',
  },
  {
    prompt: 'What is gender inequality?',
    options: ['Men and women have different bodies when they are born', 'Men and women are treated the same in every situation', 'Men and women do not have equal power', 'Boys and girls go to different schools in the same town'],
    answer: 'Men and women do not have equal power',
    explanation: 'Gender inequality is an unequal sharing of power and opportunities between men and women.',
  },
  {
    prompt: 'How can gender inequality affect a relationship?',
    options: ['Both partners find it easy to make decisions together as a couple', 'The partner with less power may find it hard to say no', 'The partner with more power must protect the other partner', 'It has no effect on the health of the people who are involved'],
    answer: 'The partner with less power may find it hard to say no',
    explanation: 'Unequal power can lead to pressure, abuse, teenage pregnancy and STIs, including HIV and AIDS.',
  },
  {
    prompt: 'A boyfriend says, "If you loved me, you would do it." What is this?',
    options: ['Pressure that uses unequal power', 'A sign of real love that she should accept without question', 'A fair way of making decisions as a couple in a relationship', 'A joke that does not need a reply from her at all'],
    answer: 'Pressure that uses unequal power',
    explanation: 'Pressure and emotional control are not love. She has the right to say no, and a respectful partner accepts it.',
  },
];

const PowerGender = () => (
  <CapsSubjectTopic
    title="Power, Power Relations and Gender"
    subtitle="Power, gender roles, stereotypes and how gender inequality affects wellbeing"
    learnSteps={learnSteps}
    task="gr10-power-gender-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PowerGender;
