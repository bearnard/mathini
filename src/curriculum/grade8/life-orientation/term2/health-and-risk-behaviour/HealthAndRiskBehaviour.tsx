import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Risk behaviour and thinking ahead',
    content: slide(
      <>
        <Rule>A risk behaviour is an action that is likely to harm your health or safety. You lower everyday risk by thinking ahead about the consequences before you act.</Rule>
        <Branches
          problem="Friends dare you to run across a busy road"
          options={[
            { choice: 'Take the dare', outcome: 'You could be badly hurt.' },
            { choice: 'Say no and use the crossing', outcome: 'You stay safe.' },
          ]}
          aria="A decision tree. Friends dare you to run across a busy road. Choice one: take the dare, and you could be badly hurt. Choice two: say no and use the crossing, and you stay safe."
        />
        <Worked
          title="Think ahead"
          steps={[<>What am I being asked to do?</>, <>What could go wrong?</>, <>Who could be hurt?</>, <>Choose the safer option.</>]}
        />
        <Mistake>Believing a risk is harmless because friends are doing it or because it is “only once”. Check the consequences first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why substance abuse is harmful',
    content: slide(
      <>
        <Rule>Substance abuse is using alcohol, cigarettes or drugs in a harmful way. It can damage health, learning and relationships.</Rule>
        <Hub centre="Harm" spokes={['Health', 'Learning', 'Relationships']} aria="A circle labelled Harm with the three things substance abuse can damage around it: health, learning and relationships." />
        <Worked
          title="How one habit spreads harm"
          steps={[<>Health: the body can be damaged.</>, <>Learning: it is harder to concentrate and remember.</>, <>Relationships: family and friends lose trust.</>]}
        />
        <Mistake>Thinking substance abuse only affects the person using it. It also affects family, friends and schoolwork.</Mistake>
      </>,
    ),
  },
  {
    title: 'Refusal skills',
    content: slide(
      <>
        <Rule>To refuse well, say no clearly and leave the unsafe situation. Then contact a trusted person for support.</Rule>
        <StepFlow steps={['Say a firm no.', 'Give a short reason.', 'Leave the situation.', 'Contact a trusted person.']} aria="Four refusal steps in order: say a firm no, give a short reason, leave the situation, contact a trusted person." />
        <Worked
          title="A friend pressures you to do something unsafe"
          steps={[<>Say: “No, I am not doing that.”</>, <>Add: “It is not safe for me.”</>, <>Walk away to a safe place.</>, <>Tell a teacher or parent what happened.</>]}
        />
        <Mistake>Laughing it off, or staying “just to watch”. A weak answer invites more pressure. Say no and leave.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety plans, help and resilience',
    content: slide(
      <>
        <Rule>A personal safety plan is a set of steps for staying safe in risky situations. The most reliable help comes from a trusted adult, a teacher or a counsellor. Resilience means learning from setbacks and trying again.</Rule>
        <Worked
          title="A safety plan for walking home"
          steps={[<>Choose a safe route and, where you can, walk with others.</>, <>Know your trusted adult to call. Emergency numbers: police 10111, ambulance 10177.</>, <>Decide what you will do if someone pressures you.</>, <>Review the plan after a bad day and improve it.</>]}
        />
        <Mistake>Thinking resilient people never struggle or never need help. Resilience means asking for support, learning and trying again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a risk behaviour, and how can you lower everyday risk?" answer="An action likely to harm health or safety. Think ahead about the consequences before acting." />
        <Check question="Why is substance abuse harmful?" answer="It can damage health, learning and relationships." />
        <Check question="A friend pressures you to do something unsafe. What do you do?" answer="Say a firm no, leave the situation and contact a trusted person for support." />
        <Check question="What is a personal safety plan, and which source of help is most reliable?" answer="A set of steps for staying safe in risky situations. A trusted adult, teacher or counsellor." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a risk behaviour?',
    options: ['An action likely to harm health or safety', 'A homework routine that is planned well', 'A polite discussion in a classroom', 'A regular schedule of sleep each night'],
    answer: 'An action likely to harm health or safety',
    explanation: 'Risk behaviours increase chances of injury or long-term harm.',
  },
  {
    prompt: 'Which response best shows refusal skills?',
    options: [
      'Saying no clearly and leaving the unsafe situation',
      'Agreeing to fit in',
      'Keeping quiet while uncomfortable',
      'Joining risky behaviour to avoid teasing',
    ],
    answer: 'Saying no clearly and leaving the unsafe situation',
    explanation: 'Clear refusal and exit plans reduce pressure and danger.',
  },
  {
    prompt: 'Why is substance abuse harmful?',
    options: [
      'It can damage health, learning, and relationships',
      'It always improves judgement',
      'It has no effect on behaviour',
      'It guarantees better school performance',
    ],
    answer: 'It can damage health, learning, and relationships',
    explanation: 'Substance abuse affects body systems, choices, and social wellbeing.',
  },
  {
    prompt: 'A friend pressures you to do something unsafe. What should you do?',
    options: ['Say a firm no and contact a trusted person for support', 'Follow the group without thinking about it', 'Hide your worry and carry on with them', 'Take bigger risks so as to look brave'],
    answer: 'Say a firm no and contact a trusted person for support',
    explanation: 'Safe choices include boundaries plus immediate support.',
  },
  {
    prompt: 'Which behaviour builds resilience?',
    options: ['Learning from setbacks and trying again', 'Giving up after a single hard challenge', 'Avoiding all feedback from other people', 'Ignoring your own limits when you train'],
    answer: 'Learning from setbacks and trying again',
    explanation: 'Resilience means adapting positively during challenges.',
  },
  {
    prompt: 'What is a personal safety plan?',
    options: ['A set of steps for staying safe in risky situations', 'A list of the rumours that go round school', 'A plan for skipping your responsibilities', 'A schedule of the sports fixtures'],
    answer: 'A set of steps for staying safe in risky situations',
    explanation: 'Safety plans identify warning signs, actions, and support contacts.',
  },
  {
    prompt: 'Which source is most reliable when you need help?',
    options: [
      'A trusted adult, teacher, or counselor',
      'Anonymous online dares',
      'Friends who encourage danger',
      'Unverified social media claims',
    ],
    answer: 'A trusted adult, teacher, or counselor',
    explanation: 'Reliable support gives safe and informed guidance.',
  },
  {
    prompt: 'How can you lower everyday risk?',
    options: ['Think ahead about the consequences before acting', 'Act first and think about it afterwards', 'Ignore the warning signs around you', 'Choose to be popular rather than safe'],
    answer: 'Think ahead about the consequences before acting',
    explanation: 'Consequence thinking improves responsible decisions.',
  },
];

const HealthAndRiskBehaviour = () => (
  <CapsSubjectTopic
    title="Health and Risk Behaviour"
    subtitle="Substance abuse awareness, refusal skills, personal safety, and resilience"
    learnSteps={learnSteps}
    task="gr8-health-and-risk-behaviour-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default HealthAndRiskBehaviour;
