import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Other people have needs and views',
    content: slide(
      <>
        <Rule>Every person has needs, such as food, a safe place to live, friends and love. Every person also has views: their own ideas and opinions. Caring for people begins with noticing what they need and listening to what they think.</Rule>
        <StepFlow steps={['Notice', 'Listen', 'Care']} notes={['What they need', 'To their views', 'Help kindly']} aria="Three steps in caring for people: notice what they need, listen to their views, and care by helping kindly." />
        <Worked
          steps={[
            <>A new classmate sits alone. Notice that the classmate may need a friend.</>,
            <>A friend thinks differently from you. Listen first, even if you do not agree.</>,
            <>Different views are normal. We can disagree and still respect each other.</>,
          ]}
        />
        <Mistake>Thinking that your view is the only one that matters. Other people&rsquo;s views and needs count too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saying what you need without hurting others',
    content: slide(
      <>
        <Rule>You also have needs and views, and you may share them. Say them calmly and kindly. A good way to start is: &ldquo;I feel&hellip; when&hellip;, and I need&hellip;&rdquo;</Rule>
        <Worked
          title="Hurtful and kind"
          steps={[
            <><strong>Hurtful:</strong> &ldquo;You are so selfish! You never share!&rdquo; This blames and attacks the other person.</>,
            <><strong>Kind:</strong> &ldquo;I feel sad when my pencil is taken without asking, and I need you to ask first.&rdquo;</>,
            <>Use a calm voice, look at the person, and listen to the answer.</>,
          ]}
        />
        <Mistake>Shouting or using names to make your point. This makes the other person angry instead of listening.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acts of kindness',
    content: slide(
      <>
        <Rule>An act of kindness is a caring thing that you do for someone else without being asked and without expecting a reward. Small acts of kindness make a big difference.</Rule>
        <Worked
          title="Examples"
          steps={[
            <>Sharing your lunch with a friend who has none.</>,
            <>Helping an older neighbour to carry shopping.</>,
            <>Including a lonely child in your game.</>,
            <>Saying thank you, and saying sorry when you are wrong.</>,
          ]}
        />
        <Mistake>Thinking that kindness must be big or must cost money. A kind word or a helping hand is enough.</Mistake>
      </>,
    ),
  },
  {
    title: 'Kindness in our communities',
    content: slide(
      <>
        <Rule>When many people are kind, the whole community becomes a better place. Reading about acts of kindness shows us how we can help.</Rule>
        <Worked
          steps={[
            <>Neighbours who look after the children of a working parent.</>,
            <>A school that collects blankets for people who are cold in winter.</>,
            <>Learners who help a classmate who is struggling with reading.</>,
            <>On Mandela Day, people give 67 minutes to help others.</>,
          ]}
        />
        <Mistake>Waiting for someone else to help. Each of us can start with something small.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one need and one view that a person may have.</>,
          <>Write a kind way to say that you are upset that someone took your pencil.</>,
          <>Give two acts of kindness that you can do at school.</>,
          <>Why should we listen to a view that differs from ours?</>,
        ]}
        answers={[
          <>A need: food, a friend or a safe home. A view: an idea or an opinion.</>,
          <>&ldquo;I feel sad when my pencil is taken without asking. I need you to ask first.&rdquo;</>,
          <>Any two of: sharing, helping a classmate, including a lonely child, saying thank you.</>,
          <>Because everyone has the right to their own view, and listening shows respect.</>,
        ]}
      />,
    ),
  },
];
