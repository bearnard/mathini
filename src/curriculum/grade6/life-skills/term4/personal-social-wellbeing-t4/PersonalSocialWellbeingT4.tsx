import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Puberty and strong emotions',
    content: slide(
      <>
        <Rule>
          Puberty is a stage when a child grows into an adolescent: the body and emotions begin to change. To manage a strong emotion in a healthy way, pause, breathe, and talk to a trusted adult.
        </Rule>
        <Worked
          title="Handle a strong feeling"
          steps={[
            <>You feel very angry or upset. Name the feeling.</>,
            <>Pause and breathe.</>,
            <>Talk it through with a trusted adult.</>,
            <>Calming down and asking for support helps you handle emotions safely during the changes of puberty.</>,
          ]}
        />
        <Mistake>Thinking changing feelings mean something is wrong with you. New feelings are a normal part of growing up; ask a trusted adult for support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Privacy and respect',
    content: slide(
      <>
        <Rule>
          Respecting privacy during puberty means giving people personal space and treating them with dignity, for example knocking before entering a private space.
        </Rule>
        <Worked
          title="Respect privacy"
          steps={[
            <>The bathroom or bedroom door is closed.</>,
            <>Knock before entering a private space.</>,
            <>Wait to be invited in. Be considerate of other people’s space.</>,
            <>This shows people dignity.</>,
          ]}
        />
        <Mistake>Walking into a private space because you are in a hurry. Knock first and respect the person’s space.</Mistake>
      </>,
    ),
  },
  {
    title: 'HIV awareness and stigma',
    content: slide(
      <>
        <Rule>
          HIV is not spread by everyday casual contact: you cannot get HIV from hugging or sharing a desk. Stigma is treating someone unfairly because of an illness. People should be treated kindly and fairly.
        </Rule>
        <Worked
          title="Respond with facts and kindness"
          steps={[
            <>A classmate says, “Do not sit near her, you will get HIV.”</>,
            <>Check the facts: you cannot get HIV from hugging or sharing a desk.</>,
            <>That teasing is stigma: it treats someone unfairly because of an illness.</>,
            <>Include others, speak kindly, and ask a trusted adult or teacher for correct facts.</>,
          ]}
        />
        <Mistake>Believing rumours about illness and excluding people. Learn the facts; stigma hurts people.</Mistake>
      </>,
    ),
  },
  {
    title: 'Community service and careers',
    content: slide(
      <>
        <Rule>
          Community service means giving time and effort to improve life for others, such as helping clean a park with other volunteers. Career awareness is learning about jobs and how they match your interests. Reflecting on your strengths and interests helps you set goals and think about suitable careers.
        </Rule>
        <Worked
          title="Link a strength to a career"
          steps={[
            <>Think about what you enjoy and do well: “I like caring for people.”</>,
            <>Find a community role that matches: a nurse.</>,
            <>Take a learner who wants to be a nurse because she likes caring for people: she is matching a strength to a career she may choose.</>,
            <>Reflecting like this helps you set goals, such as helping with community service now.</>,
          ]}
        />
        <Mistake>Choosing a career only because of the pay or because a friend chose it. Start with your strengths and interests.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does puberty mean? How can you handle a very strong feeling in a healthy way?</li>
            <li>Which behaviour shows respect for privacy?</li>
            <li>Can you get HIV from hugging or sharing a desk? What is stigma?</li>
            <li>What is community service and career awareness? Why reflect on your strengths and interests?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A stage when a child grows into an adolescent. Pause, breathe, and talk to a trusted adult.</li>
            <li>Knocking before entering a private space.</li>
            <li>No: you cannot get HIV from hugging or sharing a desk. Treating someone unfairly because of an illness.</li>
            <li>Helping clean a park with other volunteers. Learning about jobs and how they match your interests. It helps you set goals and think about suitable careers.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does puberty mean?',
    options: ['A stage when a child grows into an adolescent', 'A way to measure the weather', 'A team game that is played with a ball', 'A type of building for the community'],
    answer: 'A stage when a child grows into an adolescent',
    explanation: 'Puberty is a stage of growing up when the body and emotions begin to change.',
  },
  {
    prompt: 'Which action is a healthy way to manage a strong emotion?',
    options: [
      'Pause, breathe, and talk to a trusted adult',
      'Shout at everyone nearby',
      'Break classroom furniture',
      'Keep every worry completely secret forever',
    ],
    answer: 'Pause, breathe, and talk to a trusted adult',
    explanation: 'Calming down and asking for support helps learners handle emotions safely.',
  },
  {
    prompt: 'Which behaviour shows respect for privacy during puberty?',
    options: [
      'Knocking before entering a private space',
      'Reading someone else\'s diary',
      'Sharing a friend\'s secret loudly',
      'Laughing at body changes',
    ],
    answer: 'Knocking before entering a private space',
    explanation: 'Respecting privacy means giving people personal space and treating them with dignity.',
  },
  {
    prompt: 'Which statement shows correct HIV awareness?',
    options: [
      'You cannot get HIV from hugging or sharing a desk',
      'HIV spreads when classmates talk to each other',
      'HIV spreads by sitting in the same room',
      'HIV spreads through every casual touch',
    ],
    answer: 'You cannot get HIV from hugging or sharing a desk',
    explanation: 'HIV is not spread by everyday casual contact such as hugs or sharing classroom space.',
  },
  {
    prompt: 'What is stigma?',
    options: ['Treating someone unfairly because of an illness', 'A warm-up activity before a sport', 'A career plan written in a notebook', 'A type of healthy breakfast'],
    answer: 'Treating someone unfairly because of an illness',
    explanation: 'Stigma happens when people are judged, excluded, or teased instead of treated kindly and fairly.',
  },
  {
    prompt: 'Which activity is an example of community service?',
    options: [
      'Helping clean a park with other volunteers',
      'Ignoring litter on the playground',
      'Keeping all donated books for yourself',
      'Refusing to help anyone at all',
    ],
    answer: 'Helping clean a park with other volunteers',
    explanation: 'Community service means giving time and effort to improve life for others.',
  },
  {
    prompt: 'What is career awareness?',
    options: ['Learning about jobs and how they match your interests', 'Choosing a game captain for one lesson only', 'Memorising every road sign in town', 'Skipping school subjects that you find hard'],
    answer: 'Learning about jobs and how they match your interests',
    explanation: 'Career awareness helps learners notice different jobs and think about future possibilities.',
  },
  {
    prompt: 'Which learner is linking a strength to a possible future career?',
    options: ['A learner who likes caring for people and wants to be a nurse', 'A learner who refuses to learn any new skill', 'A learner who never thinks about helping others', 'A learner who dislikes all of the school subjects'],
    answer: 'A learner who likes caring for people and wants to be a nurse',
    explanation: 'Career planning begins when learners connect what they enjoy and do well with community roles.',
  },
  {
    prompt: 'Why is it useful to reflect on your strengths and interests?',
    options: [
      'It helps you set goals and think about suitable careers',
      'It stops you from learning new things',
      'It means you never need help from others',
      'It makes community service unnecessary',
    ],
    answer: 'It helps you set goals and think about suitable careers',
    explanation: 'Knowing your strengths can guide choices, goals, and future aspirations.',
  },
];

const PersonalSocialWellbeingT4 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Growing with respect, showing care, and planning for the future"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PersonalSocialWellbeingT4;
