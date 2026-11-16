import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { LinkedPairs } from '../../../../../components/diagrams/lo/Lo10Pictures';
import { MatchColumns } from '../../../../../components/diagrams/lo/lo7Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Living in a multi-religious society',
    content: slide(
      <>
        <Rule>South Africa has many religions. The major religions include Judaism, Christianity, Islam, Hinduism, Buddhism, the Baha&apos;i Faith and African religion. The Bill of Rights protects freedom of religion and belief, so we live together with respect and understanding.</Rule>
        <MatchColumns
          leftTitle="Religion"
          rightTitle="Holy book"
          pairs={[
            { left: 'Christianity', right: 'The Bible' },
            { left: 'Islam', right: 'The Qur\'an' },
            { left: 'Judaism', right: 'The Torah' },
            { left: 'Hinduism', right: 'The Vedas' },
          ]}
          aria="Four religions matched with a holy book. Christianity: the Bible. Islam: the Qur'an. Judaism: the Torah. Hinduism: the Vedas."
        />
        <Worked
          title="A classmate is fasting"
          steps={[
            <>A Muslim classmate fasts during Ramadan, from dawn to sunset.</>,
            <>You do not tease him or pressure him to eat.</>,
            <>You ask him politely about it, because you want to understand.</>,
            <>Result: he feels respected, and you learn about his religion.</>,
          ]}
        />
        <Mistake>Assuming that every follower of a religion thinks and acts in the same way, or ranking religions as better or worse. Respect means learning before you judge.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ethical traditions and indigenous belief systems',
    content: slide(
      <>
        <Rule>Religions teach ethical traditions about right and wrong, such as honesty, kindness, caring for the poor and respect for life. Many say that you should treat others as you would like to be treated. Indigenous belief systems, such as African religion, are handed down by oral tradition, and many honour a Supreme Being and the ancestors.</Rule>
        <LinkedPairs
          heads={['Tradition', 'Caring for others']}
          pairs={[
            ['Islam', 'Zakat: giving to the poor'],
            ['Judaism', 'Tzedakah: charity and justice'],
            ['Hinduism', 'Seva: selfless service'],
            ['African traditions', 'Ubuntu: we belong together'],
          ]}
          aria="Four traditions and a teaching about caring for others. Islam: zakat, giving to the poor. Judaism: tzedakah, charity and justice. Hinduism: seva, selfless service. African traditions: ubuntu, we belong together."
        />
        <Worked
          title="What different traditions share"
          steps={[
            <>A food drive at school collects food for families in need.</>,
            <>Learners of different faiths join in, each from their own teaching.</>,
            <>Shared value: caring for others.</>,
            <>Result: a multi-religious school works together.</>,
          ]}
        />
        <Mistake>Calling the practices of another religion strange or wrong only because they differ from yours. Different practices can share the same values.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bias in sport and how to redress it',
    content: slide(
      <>
        <Rule>Bias in sport is unfair treatment because of gender, race or stereotypes. Examples are unequal funding, facilities and media coverage for women&apos;s sport, and the exclusion of people because of race in the past. To redress bias, fund and cover sport fairly, select on merit, develop talent and challenge stereotypes.</Rule>
        <Compare
          left={{ title: 'Bias', items: ['Girls get the old field', 'Little coverage for women', 'Stereotypes decide who plays'] }}
          right={{ title: 'Redress', items: ['Share fields and coaches', 'Equal coverage and funding', 'Select on skill and effort'] }}
          aria="Two columns. Bias: girls get the old field, little coverage for women, stereotypes decide who plays. Redress: share fields and coaches, equal coverage and funding, select on skill and effort."
        />
        <Worked
          title="A school fixes an unfair situation"
          steps={[
            <>The boys&apos; soccer team has a coach and the girls&apos; team has none.</>,
            <>The school sees this as gender bias.</>,
            <>It gives the girls&apos; team a coach and shares the field times fairly.</>,
            <>Result: both teams get a fair chance to develop.</>,
          ]}
        />
        <Mistake>Believing that bias in sport disappeared by itself. Fairness needs steady effort, and people must speak up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Unfair practices and critical evaluation',
    content: slide(
      <>
        <Rule>Unfair practices in sport include drug-taking (doping), match-fixing, subjective umpiring and maladministration. Evaluate a report critically: check the source and the facts, ask who benefits, and judge whether it is fair.</Rule>
        <StepFlow
          steps={['Read the report.', 'Check the facts and source.', 'Ask who benefits.', 'Judge if it is fair.']}
          aria="Four steps of critical evaluation: read the report, check the facts and the source, ask who benefits, and judge whether it is fair."
        />
        <Worked
          title="Naming the practice"
          steps={[
            <>An athlete uses a banned substance to perform better: drug-taking, or doping.</>,
            <>Players secretly agree to lose a match for money: match-fixing.</>,
            <>An umpire favours one team because of personal feelings: subjective umpiring.</>,
            <>Officials misuse the money of a sports body: maladministration.</>,
          ]}
        />
        <Mistake>Believing that doping only hurts the person who cheats. It is unfair to honest athletes and it can damage health.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name four of the major religions in South Africa and one holy book.</>,
          <>Give one value that different religions share, and say how to show respect to a classmate of another faith.</>,
          <>Name two kinds of bias in sport and one way to redress them.</>,
          <>Name the four unfair practices in sport that you must know.</>,
        ]}
        answers={[
          <>For example Christianity, Islam, Judaism and Hinduism. Holy books: the Bible, the Qur&apos;an, the Torah and the Vedas.</>,
          <>For example caring for others. Show respect by listening and learning before you judge, and not teasing.</>,
          <>For example gender bias and racial bias. Redress by sharing funding, fields and coverage fairly and by selecting on skill.</>,
          <>Drug-taking (doping), match-fixing, subjective umpiring and maladministration.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does a multi-religious society mean?',
    options: ['One religion is the official religion of the country', 'Many religions live together in one society', 'Religion is not allowed in public life', 'People may not change from one religion to another'],
    answer: 'Many religions live together in one society',
    explanation: 'South Africa has many religions, and the Bill of Rights protects freedom of religion and belief.',
  },
  {
    prompt: 'Which of these is one of the major religions in South Africa listed in the curriculum?',
    options: ['Judaism', 'Greek mythology', 'A school code of conduct', 'A political party'],
    answer: 'Judaism',
    explanation: 'Judaism, Christianity, Islam, Hinduism, Buddhism, the Baha\'i Faith and African religion are the major religions in the curriculum.',
  },
  {
    prompt: 'What is the holy book of Islam?',
    options: ['The Bible', 'The Vedas', 'The Dhammapada', 'The Qur\'an'],
    answer: 'The Qur\'an',
    explanation: 'The Qur\'an is the holy book of Islam.',
  },
  {
    prompt: 'What is the holy book of Judaism?',
    options: ['The Qur\'an', 'The Bible', 'The Torah', 'The Vedas'],
    answer: 'The Torah',
    explanation: 'The Torah is central to Judaism.',
  },
  {
    prompt: 'What is the holy book of Christianity?',
    options: ['The Torah', 'The Bible', 'The Qur\'an', 'The Vedas'],
    answer: 'The Bible',
    explanation: 'The Bible is the holy book of Christianity.',
  },
  {
    prompt: 'A Muslim classmate is fasting during Ramadan. How can you show respect?',
    options: ['Do not tease him, and ask politely', 'Pressure him to eat so that he fits in', 'Tell him that his religion is wrong', 'Ignore him until the fasting month is over'],
    answer: 'Do not tease him, and ask politely',
    explanation: 'Respect means not teasing or pressuring, and learning with polite questions.',
  },
  {
    prompt: 'What is an ethical tradition in a religion?',
    options: ['A building that is used for worship', 'A holiday on which people do not work', 'A list of the members of the religion', 'Teaching about right and wrong'],
    answer: 'Teaching about right and wrong',
    explanation: 'Ethical traditions teach about honesty, kindness, caring for the poor and respect for life.',
  },
  {
    prompt: 'Which value is shared by many religions?',
    options: ['Ranking people by religion', 'Hiding your beliefs from others', 'Caring for other people', 'Winning an argument with others'],
    answer: 'Caring for other people',
    explanation: 'Many religions teach caring for others, for example zakat in Islam, tzedakah in Judaism, seva in Hinduism and ubuntu in African traditions.',
  },
  {
    prompt: 'How are indigenous belief systems usually handed down?',
    options: ['By newspapers and online blogs', 'By oral tradition', 'By exams set at school', 'By laws made in Parliament'],
    answer: 'By oral tradition',
    explanation: 'Indigenous belief systems are usually passed on by oral tradition, with stories, rituals and ceremonies.',
  },
  {
    prompt: 'Which of these is an example of bias in sport?',
    options: ['Girls get no coach and an old field', 'Players are chosen for the team by their skill', 'Both teams share the school field fairly', 'A referee applies the rules to both teams equally'],
    answer: 'Girls get no coach and an old field',
    explanation: 'Unequal treatment because of gender is bias, and it must be redressed.',
  },
  {
    prompt: 'Which action helps to redress bias in sport?',
    options: ['Give the best field to the team that won last year', 'Choose players by their gender and not their skill', 'Give media coverage to one kind of sport only', 'Share funding, coaches and fields fairly'],
    answer: 'Share funding, coaches and fields fairly',
    explanation: 'Fair funding, coverage and selection on merit redress bias and give everyone a chance.',
  },
  {
    prompt: 'What is doping in sport?',
    options: ['Training at a high level for many hours', 'Eating a healthy meal before a match', 'Using banned substances', 'Wearing the correct kit for the sport'],
    answer: 'Using banned substances',
    explanation: 'Drug-taking, or doping, is unfair to honest athletes and can damage health.',
  },
  {
    prompt: 'What is match-fixing?',
    options: ['Choosing the best players for a match', 'Players secretly agree to lose for money', 'Planning the training sessions for a team', 'Setting up the field before the match'],
    answer: 'Players secretly agree to lose for money',
    explanation: 'Match-fixing means players or officials secretly arranging the result, usually for money.',
  },
  {
    prompt: 'What is subjective umpiring?',
    options: ['An umpire favours one team', 'Decisions that are based on the written rules', 'Decisions that are made with video evidence', 'Decisions that are explained to both teams'],
    answer: 'An umpire favours one team',
    explanation: 'A subjective umpire lets feelings or favour affect decisions, instead of applying the rules fairly.',
  },
];

const ReligionsSportBias = () => (
  <CapsSubjectTopic
    title="Religions, Belief Systems and Fairness in Sport"
    subtitle="Living with different faiths, indigenous belief systems, and bias and unfair practices in sport"
    learnSteps={learnSteps}
    task="gr10-religions-sport-bias-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ReligionsSportBias;
