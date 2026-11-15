import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Diversity, culture and religion',
    content: slide(
      <>
        <Rule>
          Diversity means people have different backgrounds and identities. Show respect for another person’s culture or religion by listening politely and asking questions.
        </Rule>
        <Worked
          title="Respect a classmate’s tradition"
          steps={[
            <>A classmate celebrates a festival that you do not know.</>,
            <>Listen politely while they explain.</>,
            <>Ask questions about their customs and beliefs.</>,
            <>Treat their beliefs and customs with care and kindness: a shared respect that works with many viewpoints.</>,
          ]}
        />
        <Mistake>Making fun of customs you do not know. Differences should be respected, not mocked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stereotypes',
    content: slide(
      <>
        <Rule>
          Stereotypes are harmful because they unfairly judge people without knowing them. They are unfair labels that hurt feelings and can divide communities.
        </Rule>
        <Worked
          title="Challenge a stereotype"
          steps={[
            <>Someone says, “All people from that group are the same.” That is a stereotype.</>,
            <>It judges people without knowing them.</>,
            <>Challenge it: “I know people from that group and each one is different.”</>,
            <>Get to know each person as an individual.</>,
          ]}
        />
        <Mistake>Thinking a stereotype is harmless if it sounds like a joke. It is an unfair label that can hurt people.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rights and responsibilities',
    content: slide(
      <>
        <Rule>
          A right protects people and helps them live well. A responsibility is something you should do to help others and follow rules. Rights work best when people also act responsibly, and a respectful, responsible community becomes stronger when people feel safe, included and willing to cooperate.
        </Rule>
        <Worked
          title="Match a right to a responsibility"
          steps={[
            <>Right: the right to education.</>,
            <>Responsibility: attend school and do your best.</>,
            <>A right with a responsibility works best together.</>,
            <>When everyone does this, people feel safe, included and willing to cooperate, so the community grows stronger.</>,
          ]}
        />
        <Mistake>Claiming a right and ignoring the matching responsibility. Rights and responsibilities go together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Harmful substances and saying no',
    content: slide(
      <>
        <Rule>
          Substance abuse is dangerous: alcohol, tobacco and drugs can harm health, judgement and relationships. If someone pressures you, say no firmly and move away to a safe place. If you are worried, talk to a trusted adult.
        </Rule>
        <Worked
          title="Respond to pressure"
          steps={[
            <>Someone pressures you to try a harmful substance.</>,
            <>Say no firmly.</>,
            <>Move away to a safe place: refusing clearly and leaving protects your health and safety.</>,
            <>Talk to a trusted adult, such as a parent, teacher or counsellor, who can give support and help.</>,
          ]}
        />
        <Mistake>Staying in the group to avoid being laughed at. Say no and leave; your health and safety come first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Explain what diversity means in a community, and give one way to show respect for someone’s culture or religion.</li>
            <li>Why are stereotypes harmful?</li>
            <li>Give a right with a matching responsibility. What does a responsibility mean? What makes a community that shows respect and takes responsibility grow stronger?</li>
            <li>Why is substance abuse dangerous? What do you do if pressured, and who do you talk to if worried?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>People have different backgrounds and identities. Listening politely and asking questions.</li>
            <li>They unfairly judge people without knowing them.</li>
            <li>Right to education: attend school and do your best. Something you should do to help others and follow rules. People feel safe, included and willing to cooperate.</li>
            <li>It can harm health, judgement and relationships. Say no firmly and move away to a safe place. A trusted adult.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean in a community?',
    options: [
      'People have different backgrounds and identities',
      'Everyone must look and think the same',
      'Only one language may be used',
      'No one is allowed to share traditions',
    ],
    answer: 'People have different backgrounds and identities',
    explanation: 'Diversity means people are different in many ways, and those differences should be respected.',
  },
  {
    prompt: 'Which action shows respect for another person’s culture or religion?',
    options: ['Listening politely and asking questions', 'Laughing at a person’s tradition', 'Calling their beliefs silly', 'Forcing them to copy you'],
    answer: 'Listening politely and asking questions',
    explanation: 'Respect means treating other people’s beliefs and customs with care and kindness.',
  },
  {
    prompt: 'Why are stereotypes harmful?',
    options: [
      'They unfairly judge people without knowing them',
      'They help everyone feel included',
      'They always tell the full truth about a person',
      'They make communities more caring',
    ],
    answer: 'They unfairly judge people without knowing them',
    explanation: 'Stereotypes are unfair labels that can hurt people and divide communities.',
  },
  {
    prompt: 'Which pair matches a right with a responsibility?',
    options: [
      'Right to education — attend school and do your best',
      'Right to safety — break rules whenever you want',
      'Right to be heard — interrupt everyone else',
      'Right to respect — make fun of others',
    ],
    answer: 'Right to education — attend school and do your best',
    explanation: 'Rights work best when people also act responsibly.',
  },
  {
    prompt: 'Which sentence best describes a responsibility?',
    options: [
      'Something you should do to help others and follow rules',
      'Something you can ignore if it feels difficult',
      'Something only teachers and parents have',
      'Something that takes away every right',
    ],
    answer: 'Something you should do to help others and follow rules',
    explanation: 'Responsibilities are actions that support fairness, safety, and respect.',
  },
  {
    prompt: 'Why is substance abuse dangerous?',
    options: [
      'It can harm health, judgement, and relationships',
      'It always helps people make safe choices',
      'It makes schoolwork easier every time',
      'It has no effect on the body or mind',
    ],
    answer: 'It can harm health, judgement, and relationships',
    explanation: 'Alcohol, tobacco, and drugs can damage the body and lead to unsafe behaviour.',
  },
  {
    prompt: 'What is the safest response if someone pressures you to try a harmful substance?',
    options: [
      'Say no firmly and move away to a safe place',
      'Try it so they do not laugh at you',
      'Keep it a secret and do nothing',
      'Offer it to another learner instead',
    ],
    answer: 'Say no firmly and move away to a safe place',
    explanation: 'Refusing clearly and leaving the situation helps protect your health and safety.',
  },
  {
    prompt: 'Who is a good person to talk to if you are worried about substance abuse?',
    options: ['A trusted adult', 'A stranger online', 'Someone selling cigarettes', 'A person who dares you'],
    answer: 'A trusted adult',
    explanation: 'Trusted adults such as parents, teachers, or counsellors can give support and help.',
  },
  {
    prompt: 'How does a respectful, responsible community become stronger?',
    options: [
      'People feel safe, included, and willing to cooperate',
      'People stop caring about rules and fairness',
      'People only help friends who are similar to them',
      'People solve problems by insulting one another',
    ],
    answer: 'People feel safe, included, and willing to cooperate',
    explanation: 'Respect and responsibility help communities work together and support everyone.',
  },
];

const PersonalSocialWellbeingT3 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Respecting diversity, linking rights to responsibilities, and making healthy choices"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PersonalSocialWellbeingT3;
