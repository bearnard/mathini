import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What is a human rights violation?',
    content: slide(
      <>
        <Rule>Human rights are the basic rights that every person has, and in South Africa they are written in the Bill of Rights in the Constitution. A human rights violation happens when a person, a group or the state denies, ignores or abuses these rights. Everyone, including the state, must respect the rights of others.</Rule>
        <FactCards
          cards={[
            { title: 'Rights', line1: 'basic rights of every', line2: 'person in the Bill of Rights' },
            { title: 'Violation', line1: 'a right is denied,', line2: 'ignored or abused' },
            { title: 'Who', line1: 'a person, a group', line2: 'or the state' },
            { title: 'Duty', line1: 'everyone must respect', line2: 'the rights of others' },
          ]}
          aria="What a human rights violation is. Rights: the basic rights of every person in the Bill of Rights. Violation: a right is denied, ignored or abused. Who: a person, a group or the state. Duty: everyone must respect the rights of others."
        />
        <Worked
          title="Spot the violation"
          steps={[
            'A child is kept out of school because of her disability: her right to education is violated.',
            'A boy is beaten by a group because of his nationality: his right to dignity and safety is violated.',
            'A learner is told off for disagreeing politely in class: this may be rude, but it is not necessarily a violation.',
          ]}
        />
        <Mistake>Thinking that only governments can violate rights. Individuals and groups can violate rights too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Types of violations',
    content: slide(
      <>
        <Rule>Violations take many forms. Discrimination treats people unfairly because of race, gender, disability, religion or origin. Xenophobia is hatred or fear of foreigners. Violence and abuse violate the right to safety, and child labour and the denial of education violate the rights of children. Denying people access to health care, clean water or housing also violates their rights.</Rule>
        <FactCards
          cards={[
            { title: 'Discrimination', line1: 'unfair treatment based', line2: 'on who someone is' },
            { title: 'Xenophobia', line1: 'hatred or fear', line2: 'of foreigners' },
            { title: 'Violence', line1: 'abuse that violates', line2: 'safety and dignity' },
            { title: 'Children', line1: 'child labour or being', line2: 'kept from school' },
          ]}
          aria="Types of violations. Discrimination: unfair treatment based on who someone is. Xenophobia: hatred or fear of foreigners. Violence: abuse that violates safety and dignity. Children: child labour or being kept from school."
        />
        <Worked
          title="Name the right that is violated"
          steps={[
            'A shop refuses to serve people from another country: equality and dignity.',
            'A child is made to work on a farm instead of attending school: education and protection from exploitation.',
            'A learner is bullied and threatened: safety and dignity.',
          ]}
        />
        <Mistake>Treating insults and violence as normal. They violate a person&rsquo;s rights, whatever the reason given.</Mistake>
      </>,
    ),
  },
  {
    title: 'Counter-strategies: what can be done?',
    content: slide(
      <>
        <Rule>People can respond to violations in lawful and peaceful ways. You can speak out, report the violation to a teacher, the police or an organisation, and ask for help from bodies such as the South African Human Rights Commission, which deals with human rights complaints, or the courts. People can also organise a peaceful protest, sign petitions and teach others about their rights.</Rule>
        <StepFlow steps={['Say it is wrong.', 'Report it to a trusted person or body.', 'Use the courts or the Human Rights Commission.', 'Teach others their rights.']} aria="Four counter-strategies to rights violations: say it is wrong, report it to a trusted person or body, use the courts or the Human Rights Commission, and teach others their rights." />
        <Worked
          title="Respond to a violation"
          steps={[
            'A group of learners is excluded from a team because of their religion.',
            'You say that it is unfair and report it to the teacher in charge.',
            'If the school does not act, a parent can approach the Human Rights Commission for advice.',
          ]}
        />
        <Mistake>Answering a violation with violence. Peaceful, lawful action protects your own rights as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a human rights violation?</>,
          <>Give one example of a type of violation.</>,
          <>Name one body that deals with human rights complaints.</>,
          <>Why should you respond peacefully?</>,
        ]}
        answers={[
          <>A person, group or the state denies, ignores or abuses someone&rsquo;s rights.</>,
          <>For example discrimination, xenophobia or child labour.</>,
          <>The South African Human Rights Commission.</>,
          <>Peaceful, lawful action is safe and protects everyone&rsquo;s rights.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In which part of the Constitution are everyone's basic rights set out?",
    options: ["In a school timetable of lessons", "In a sports rulebook for players", "In the Bill of Rights", "In a newspaper that comes out daily"],
    answer: "In the Bill of Rights",
    explanation: "The Bill of Rights is part of the Constitution.",
  },
  {
    prompt: "Which situation is a violation of human rights?",
    options: ["When a right is denied, ignored or abused", "When a right is used with care", "When a person votes", "When a person studies hard"],
    answer: "When a right is denied, ignored or abused",
    explanation: "Violations can be done by people, groups or the state.",
  },
  {
    prompt: "Who can violate human rights?",
    options: ["Only the national government", "Only the police on the road", "Only strangers in the street", "A person, a group or the state"],
    answer: "A person, a group or the state",
    explanation: "Everyone must respect the rights of others.",
  },
  {
    prompt: "What is discrimination?",
    options: ["Fair treatment of all people equally", "Unfair treatment of people for who they are", "A kind of team sport for schools", "A subject that is taught at school"],
    answer: "Unfair treatment of people for who they are",
    explanation: "For example because of race, gender, disability or religion.",
  },
  {
    prompt: "What is xenophobia?",
    options: ["A great love of overseas travel", "Hatred or fear of foreigners", "A fear of heights in tall buildings", "A kind of school for older pupils"],
    answer: "Hatred or fear of foreigners",
    explanation: "Xenophobia violates the rights of people who come from other countries.",
  },
  {
    prompt: "A child is kept out of school because of a disability. Which right is violated?",
    options: ["The right to vote", "The right to a driving licence", "The right to a bank loan", "The right to education"],
    answer: "The right to education",
    explanation: "Every child has a right to education.",
  },
  {
    prompt: "A shop refuses to serve people from another country. Which rights are violated?",
    options: ["Equality and dignity", "The right to a holiday", "The right to a pet", "The right to a car"],
    answer: "Equality and dignity",
    explanation: "People must be treated equally and with dignity.",
  },
  {
    prompt: "A child is made to work on a farm instead of going to school. What is this?",
    options: ["A fair rule of the school", "A holiday programme for children", "A violation of a child's rights", "A sport played on the farm"],
    answer: "A violation of a child's rights",
    explanation: "Child labour violates the right to education and protection.",
  },
  {
    prompt: "You are bullied and threatened at school. Which rights are violated?",
    options: ["Property and travel", "Sport and music", "Fashion and art", "Safety and dignity"],
    answer: "Safety and dignity",
    explanation: "Everyone has a right to be safe and treated with dignity.",
  },
  {
    prompt: "Which is a peaceful and lawful response to a violation?",
    options: ["Answer it with more violence", "Report it to a teacher or police", "Ignore it for the rest of your life", "Spread a rumour about the people"],
    answer: "Report it to a teacher or police",
    explanation: "Peaceful action protects everyone's rights.",
  },
  {
    prompt: "Which body deals with human rights complaints in South Africa?",
    options: ["The Human Rights Commission", "The Bus Commission of the province", "The Fashion Council of the country", "The Weather Service of the nation"],
    answer: "The Human Rights Commission",
    explanation: "It helps people with complaints about rights.",
  },
  {
    prompt: "What can people do to show that they disagree peacefully?",
    options: ["Break the windows of a shop", "Hurt other people in the street", "Hold a peaceful protest", "Burn down a building near by"],
    answer: "Hold a peaceful protest",
    explanation: "Lawful protest is a right when it is peaceful.",
  },
  {
    prompt: "Why is it important to teach others about their rights?",
    options: ["It keeps all of the rights secret", "It makes the rights disappear later", "Knowing them helps people to protect them", "It is a punishment for other people"],
    answer: "Knowing them helps people to protect them",
    explanation: "Knowing your rights helps you to speak out.",
  },
  {
    prompt: "A group is left out of a team because of their religion. What should you do?",
    options: ["Say it is unfair and report it", "Join in with the exclusion of them", "Laugh about it with your friends", "Pretend that it did not happen"],
    answer: "Say it is unfair and report it",
    explanation: "Speaking out and reporting is a counter-strategy.",
  },
];

const HumanRightsViolations = () => (
  <CapsSubjectTopic
    title="Human Rights Violations and Counter-Strategies"
    subtitle="Types of human rights violations and peaceful, lawful ways to respond"
    learnSteps={learnSteps}
    task="gr8-human-rights-violations-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default HumanRightsViolations;
