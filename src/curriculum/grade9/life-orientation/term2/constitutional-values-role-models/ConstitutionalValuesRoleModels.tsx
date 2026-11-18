import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Values in the Constitution',
    content: slide(
      <>
        <Rule>The Constitution is the highest law of South Africa. It is built on values: human dignity, equality, the advancement of human rights and freedoms, non-racialism and non-sexism, the rule of law, and a government that is accountable and open. These values guide how laws are made and how people should treat each other.</Rule>
        <FactCards
          cards={[
            { title: 'Dignity', line1: 'every person has', line2: 'worth and is respected' },
            { title: 'Equality', line1: 'all people are equal', line2: 'before the law' },
            { title: 'Non-racial, non-sexist', line1: 'no unfair treatment', line2: 'by race or gender' },
            { title: 'Rule of law', line1: 'everyone, including', line2: 'leaders, obeys the law' },
          ]}
          aria="Values in the Constitution. Dignity: every person has worth and is respected. Equality: all people are equal before the law. Non-racial and non-sexist: no unfair treatment by race or gender. Rule of law: everyone, including leaders, obeys the law."
        />
        <Worked
          title="Match the value"
          steps={[
            'A shop refuses to serve a customer because of her race: this breaks the value of equality and non-racialism.',
            'A teacher shouts at a learner in front of the class and laughs at them: this ignores human dignity.',
            'A minister who breaks the law is still charged in court: this is the rule of law.',
          ]}
        />
        <Mistake>Thinking that the values are only for lawyers and politicians. Every person can live them every day at school, at home and online.</Mistake>
      </>,
    ),
  },
  {
    title: 'Positive and negative role models',
    content: slide(
      <>
        <Rule>A role model is a person whose behaviour other people copy. A positive role model shows values such as honesty, courage, respect and service, for example Nelson Mandela, who worked for reconciliation, or Charlotte Maxeke, who worked for education and women&rsquo;s rights. A negative role model shows behaviour that harms others, such as bullying, corruption or violence, and you can choose not to copy it.</Rule>
        <FactCards
          cards={[
            { title: 'Positive', line1: 'honest, brave and', line2: 'respectful of others' },
            { title: 'Examples', line1: 'Mandela, Maxeke and', line2: 'people in your community' },
            { title: 'Negative', line1: 'bullying, corruption', line2: 'or violence' },
            { title: 'Your choice', line1: 'you decide whom', line2: 'to copy' },
          ]}
          aria="Role models. Positive: honest, brave and respectful of others. Examples: Mandela, Maxeke and people in your community. Negative: bullying, corruption or violence. Your choice: you decide whom to copy."
        />
        <Worked
          title="Judge a role model"
          steps={[
            'A sports star gives time to coach children in a poor area: a positive role model.',
            'A popular influencer mocks and humiliates others online for views: a negative example of behaviour.',
            'Ask: which values does this person show, and would I be proud to copy them?',
          ]}
        />
        <Mistake>Admiring a person for fame or money only. Judge a role model by the values that the person shows, not by how famous or rich they are.</Mistake>
      </>,
    ),
  },
  {
    title: 'Applying values in daily life',
    content: slide(
      <>
        <Rule>You apply constitutional values when you act on them: respect a classmate who is different from you, include others, tell the truth, stand up against unfair treatment, and take responsibility for your actions. Small daily choices build a caring school and community.</Rule>
        <StepFlow steps={['Notice the situation.', 'Ask which value applies.', 'Choose a respectful action.', 'Reflect on the result.']} aria="Four steps to apply a value: notice the situation, ask which value applies, choose a respectful action, and reflect on the result." />
        <Worked
          title="Apply a value at school"
          steps={[
            'A new learner who speaks a different language sits alone.',
            'The value of equality and dignity applies: everyone belongs.',
            'You invite them to join your group, and you reflect on how it went afterwards.',
          ]}
        />
        <Mistake>Waiting for a big moment to show your values. They are shown in ordinary choices every day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two values of the Constitution.</>,
          <>What is a role model?</>,
          <>Give one sign of a positive role model.</>,
          <>How can you apply the value of respect at school?</>,
        ]}
        answers={[
          <>For example dignity and equality.</>,
          <>A person whose behaviour other people copy.</>,
          <>Honesty, courage, respect or service.</>,
          <>Include others and treat everyone with dignity.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which is a value on which the Constitution is built?",
    options: ["Racial separation of people", "Rule by one powerful leader", "Human dignity", "Secret decisions by officials"],
    answer: "Human dignity",
    explanation: "Dignity, equality and freedom are founding values.",
  },
  {
    prompt: "A shop refuses to serve a customer because of her race. Which value is broken?",
    options: ["Equality and non-racialism", "The value of free trade only", "The value of rule by a king", "The value of silence in shops"],
    answer: "Equality and non-racialism",
    explanation: "The Constitution says that all people are equal and rejects racism.",
  },
  {
    prompt: "A minister who breaks the law is charged in court. Which value is shown?",
    options: ["The rule of the minister", "The rule of the strongest", "The rule of silence", "The rule of law"],
    answer: "The rule of law",
    explanation: "Everyone, including leaders, must obey the law.",
  },
  {
    prompt: "Why is the Constitution called the highest law of the country?",
    options: ["It was written by a school", "All other laws must agree with it", "It is older than any country", "It has no effect on anyone"],
    answer: "All other laws must agree with it",
    explanation: "A law that contradicts the Constitution can be set aside.",
  },
  {
    prompt: "What is a role model?",
    options: ["A person who models clothes only", "A person whose behaviour others copy", "A person who is paid to teach", "A person who never makes mistakes"],
    answer: "A person whose behaviour others copy",
    explanation: "People look to role models for how to behave.",
  },
  {
    prompt: "Which behaviour marks someone out as a good role model?",
    options: ["Bullying people who are weaker", "Taking money that is not theirs", "Using violence to get their way", "Honesty and respect for others"],
    answer: "Honesty and respect for others",
    explanation: "Positive role models show values such as honesty, courage and service.",
  },
  {
    prompt: "Which behaviour shows a negative role model?",
    options: ["Humiliating others online", "Coaching children for free", "Telling the truth when it is hard", "Helping a neighbour in need"],
    answer: "Humiliating others online",
    explanation: "Bullying and humiliation harm other people.",
  },
  {
    prompt: "Which person is often named as a positive role model for reconciliation?",
    options: ["A person who destroys property", "A gang leader of a street", "Nelson Mandela", "A corrupt official in a story"],
    answer: "Nelson Mandela",
    explanation: "Mandela worked for reconciliation and a democratic South Africa.",
  },
  {
    prompt: "How should you judge a role model?",
    options: ["By how rich the person is", "By how famous the person is", "By how loud the person is", "By the values the person shows"],
    answer: "By the values the person shows",
    explanation: "Values matter more than fame or money.",
  },
  {
    prompt: "A new classmate who speaks another language sits alone. Which value should guide you?",
    options: ["Competition between groups", "Equality and dignity", "Silence at all times", "Secrecy about others"],
    answer: "Equality and dignity",
    explanation: "Including the learner shows that everyone belongs.",
  },
  {
    prompt: "Which action applies the value of respect at school?",
    options: ["Listening when a classmate speaks", "Laughing at a classmate's accent", "Copying a classmate's test", "Taking a classmate's lunch"],
    answer: "Listening when a classmate speaks",
    explanation: "Respect means listening and treating others with dignity.",
  },
  {
    prompt: "What is the first step in applying a value to a situation?",
    options: ["Ignore what is happening", "Wait for someone else", "Notice the situation", "Complain to everyone"],
    answer: "Notice the situation",
    explanation: "First notice what is happening, then ask which value applies.",
  },
  {
    prompt: "Why are small daily choices important for values?",
    options: ["They have no effect at all on anyone", "They matter only during the holidays", "They build a caring community", "They matter only to the adults at home"],
    answer: "They build a caring community",
    explanation: "Ordinary choices show your values every day.",
  },
  {
    prompt: "Who can live the values of the Constitution?",
    options: ["Every person, every day", "Only judges in court", "Only the president", "Only lawyers"],
    answer: "Every person, every day",
    explanation: "The values are for everyone, in daily life.",
  },
];

const ConstitutionalValuesRoleModels = () => (
  <CapsSubjectTopic
    title="Constitutional Values and Role Models"
    subtitle="Values of the Constitution, positive and negative role models and applying values in daily life"
    learnSteps={learnSteps}
    task="gr9-constitutional-values-role-models-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ConstitutionalValuesRoleModels;
