import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is bullying?',
    content: slide(
      <>
        <Rule>Bullying is when a person or a group hurts or frightens someone again and again, on purpose, and the other person finds it hard to stop it. One unkind remark is not bullying, but doing it again and again is.</Rule>
        <StepFlow steps={['Hurts', 'Again', 'On purpose']} notes={['Body or feelings', 'Not once only', 'Meant to hurt']} aria="Three signs of bullying: it hurts the body or the feelings, it happens again and again, and it is done on purpose." />
        <Worked
          title="Four kinds of bullying"
          steps={[
            <><strong>Physical:</strong> hitting, kicking or taking someone&rsquo;s things.</>,
            <><strong>Words:</strong> name-calling, teasing and threats.</>,
            <><strong>Leaving out:</strong> making sure someone is always left out or spreading rumours.</>,
            <><strong>Online:</strong> hurtful messages or pictures sent on a phone or the internet.</>,
          ]}
        />
        <Mistake>Calling bullying &ldquo;just a joke&rdquo;. If it hurts the other person and goes on, it is bullying.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reasons for bullying',
    content: slide(
      <>
        <Rule>Children bully for different reasons. Knowing the reasons helps us to deal with bullying, but a reason is never an excuse for hurting someone.</Rule>
        <Worked
          title="Some reasons"
          steps={[
            <>They want to feel strong or important.</>,
            <>They copy what they see other people do, at home or at school.</>,
            <>They have been bullied themselves and now hurt others.</>,
            <>They want attention or to be liked by a group.</>,
            <>They do not stop to think how the other person feels.</>,
          ]}
        />
        <Mistake>Thinking that it is the fault of the child who is bullied. The child who is bullied is never to blame.</Mistake>
      </>,
    ),
  },
  {
    title: 'If you are bullied: where to find help',
    content: slide(
      <>
        <Rule>Do not keep it a secret. Tell a trusted adult as soon as you can. Telling is not &ldquo;telling tales&rdquo;. It is how you get help and stay safe.</Rule>
        <StepFlow steps={['Stay calm', 'Tell an adult', 'Get help']} notes={['Do not fight back', 'Teacher or parent', 'Counsellor or 116']} aria="Three steps if you are bullied: stay calm and do not fight back, tell a trusted adult such as a teacher or parent, and get help from a school counsellor or by phoning Childline on 116." />
        <Worked
          title="Who can help?"
          steps={[
            <>A teacher or the school principal.</>,
            <>A parent, caregiver or another adult you trust.</>,
            <>A school counsellor or social worker.</>,
            <>Childline: phone 116 (the call is free) and talk to someone who will listen.</>,
          ]}
        />
        <Mistake>Hitting back. It can get you hurt or into trouble. Walk away, stay with friends and tell an adult.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting out of the bullying habit',
    content: slide(
      <>
        <Rule>A child who bullies can change. The first step is to see that what you are doing hurts, and to decide to stop. It is also important to ask for help to change.</Rule>
        <Worked
          title="Steps to change"
          steps={[
            <>Stop and think about how the other child feels.</>,
            <>Say sorry and mean it, and do not do it again.</>,
            <>Ask a teacher, parent or counsellor to help you find kinder ways to feel strong.</>,
            <>Choose friends who do not hurt others, and do not join in when others bully.</>,
          ]}
        />
        <Mistake>Believing that once a bully, always a bully. People can learn to treat others with respect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two signs that something is bullying and not a single unkind remark.</>,
          <>Name one reason why some children bully.</>,
          <>Who can you tell if you are being bullied, and which free number can you phone?</>,
          <>What is the first step for a child who wants to stop bullying?</>,
        ]}
        answers={[
          <>It happens again and again, and it is done on purpose to hurt.</>,
          <>Any one of: they want to feel powerful, they copy others, they were bullied, or they want attention.</>,
          <>A teacher, a parent or another trusted adult, or a counsellor. Childline: 116.</>,
          <>To see that it hurts and to decide to stop, and to ask for help.</>,
        ]}
      />,
    ),
  },
];
