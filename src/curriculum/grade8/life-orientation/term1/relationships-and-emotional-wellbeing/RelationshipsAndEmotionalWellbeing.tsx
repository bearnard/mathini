import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, Zones } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Peer pressure',
    content: slide(
      <>
        <Rule>Peer pressure is influence from others to act in a certain way. It can be positive or negative. To resist negative pressure, use refusal skills and choose safe friends.</Rule>
        <StepFlow steps={['Say no clearly.', 'Give a short reason.', 'Suggest something else.', 'Walk away if needed.']} aria="Four refusal skills in order: say no clearly, give a short reason, suggest something else, walk away if needed." />
        <Worked
          title="Classmates dare you to skip class"
          steps={[<>Say no clearly: “I am not skipping.”</>, <>Give a short reason: “I want to pass this test.”</>, <>Suggest something else: “Let us meet after school.”</>, <>Walk away and join your class.</>]}
        />
        <Mistake>Following every decision of the crowd, taking risks to be popular, or ignoring your own values. Real friends respect your no.</Mistake>
      </>,
    ),
  },
  {
    title: 'Assertive communication',
    content: slide(
      <>
        <Rule>Assertive communication means calmly saying no and explaining your boundary. It is different from giving in and different from attacking.</Rule>
        <Zones zones={[{ title: 'Passive', line: 'Stays silent or gives in' }, { title: 'Assertive', line: 'Calm, clear and respectful' }, { title: 'Aggressive', line: 'Shouts or insults' }]} aria="Three styles side by side: passive stays silent or gives in, assertive is calm, clear and respectful, aggressive shouts or insults." />
        <Worked
          title="A friend keeps asking to copy your test answers"
          steps={[<>Stay calm and look at your friend.</>, <>Say: “I will not share my answers.”</>, <>Explain your boundary: “It is not fair and we could both get in trouble.”</>, <>Repeat it calmly if they ask again.</>]}
        />
        <Mistake>Shouting or insulting the person, or staying silent and giving in. An assertive answer is respectful and firm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bullying and abuse: warning signs',
    content: slide(
      <>
        <Rule>Bullying is repeated harmful behaviour toward someone. Abuse is when a person repeatedly threatens and controls another. One disagreement is not bullying.</Rule>
        <Zones zones={[{ title: 'Argument', line: 'A single disagreement' }, { title: 'Bullying', line: 'Repeated harm' }, { title: 'Abuse', line: 'Threats and control' }]} aria="Three situations side by side: an argument is a single disagreement, bullying is repeated harm, abuse is threats and control." />
        <Worked
          title="A classmate mocks Naledi's lunch every day and takes her pens"
          steps={[<>Is it harmful? Yes.</>, <>Is it repeated? Yes, every day.</>, <>So it is bullying, not a joke.</>, <>Naledi should tell a trusted adult.</>]}
        />
        <Mistake>Treating helpful feedback, a coach explaining safety rules or a friend asking for homework help as bullying or abuse. Look for harm that repeats, with threats or control.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting help and protecting wellbeing',
    content: slide(
      <>
        <Rule>If you feel unsafe, tell a trusted adult as soon as possible. Protect your wellbeing with healthy coping skills and support networks. In an emergency, call the police on 10111 or an ambulance on 10177.</Rule>
        <StepFlow steps={['Listen without judgement.', 'Tell them it is okay to get help.', 'Help them find support.', 'Tell a trusted adult if they are unsafe.']} aria="Four steps to support a friend in order: listen without judgement, tell them it is okay to get help, help them find support, tell a trusted adult if they are unsafe." />
        <Worked
          title="A friend tells you someone keeps threatening them"
          steps={[<>Listen and do not judge.</>, <>Say it is brave to talk about it.</>, <>Help them choose a trusted adult to tell.</>, <>If anyone is in danger right now, call 10111 or 10177.</>]}
        />
        <Mistake>Keeping it secret or laughing it off. Telling a trusted adult is not “telling tales”. It keeps people safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is peer pressure, and how can you resist negative peer pressure?" answer="Influence from others to act in a certain way. Use refusal skills and choose safe friends." />
        <Check question="Write one assertive way to say no and explain your boundary." answer="For example: “I will not share my answers. It is not fair and we could both get in trouble.”" />
        <Check question="What makes behaviour bullying, and how is abuse different?" answer="Bullying is repeated harmful behaviour. Abuse is when someone repeatedly threatens and controls another." />
        <Check question="You feel unsafe. What should you do first?" answer="Tell a trusted adult as soon as possible." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action shows assertive communication?',
    options: [
      'Calmly saying no and explaining your boundary',
      'Agreeing because you are scared',
      'Insulting someone loudly',
      'Ignoring the issue and staying silent',
    ],
    answer: 'Calmly saying no and explaining your boundary',
    explanation: 'Assertive communication is clear, respectful, and firm.',
  },
  {
    prompt: 'What is peer pressure?',
    options: ['Influence from others to act in a certain way', 'A formal timetable that the school sets', 'A kind of weather pattern over a region', 'A report on the scores of a test'],
    answer: 'Influence from others to act in a certain way',
    explanation: 'Peer pressure can be positive or negative depending on the behaviour encouraged.',
  },
  {
    prompt: 'Which is a warning sign of bullying?',
    options: [
      'Repeated harmful behaviour toward someone',
      'One respectful disagreement',
      'A teacher giving class instructions',
      'A learner asking for help politely',
    ],
    answer: 'Repeated harmful behaviour toward someone',
    explanation: 'Bullying usually involves repeated harm and power imbalance.',
  },
  {
    prompt: 'If a learner feels unsafe, what should happen first?',
    options: [
      'Tell a trusted adult as soon as possible',
      'Keep the problem secret forever',
      'Post details online publicly',
      'Handle the danger alone',
    ],
    answer: 'Tell a trusted adult as soon as possible',
    explanation: 'Early help-seeking improves safety and support.',
  },
  {
    prompt: 'Which response best protects emotional wellbeing?',
    options: [
      'Using healthy coping skills and support networks',
      'Bottling up feelings for months',
      'Taking anger out on friends',
      'Pretending harmful behaviour is normal',
    ],
    answer: 'Using healthy coping skills and support networks',
    explanation: 'Healthy coping includes communication, reflection, and asking for help.',
  },
  {
    prompt: 'What is a respectful way to support a friend under pressure?',
    options: [
      'Listen without judgement and help them find support',
      'Laugh at their concern',
      'Force them to copy your choice',
      'Share their private story with everyone',
    ],
    answer: 'Listen without judgement and help them find support',
    explanation: 'Supportive listening and confidentiality build trust.',
  },
  {
    prompt: 'Which scenario is most likely abuse?',
    options: ['A person repeatedly threatens and controls another', 'A friend asks you for help with homework', 'A coach explains the safety rules of a sport', 'A classmate gives you helpful feedback on your work'],
    answer: 'A person repeatedly threatens and controls another',
    explanation: 'Control, threats, and fear are key abuse warning signs.',
  },
  {
    prompt: 'How can learners resist negative peer pressure?',
    options: ['Use refusal skills and pick safe friends', 'Follow every decision that the crowd makes', 'Take risks in order to be popular', 'Ignore your own values and beliefs'],
    answer: 'Use refusal skills and pick safe friends',
    explanation: 'Strong values and refusal phrases help learners make safer choices.',
  },
];

const RelationshipsAndEmotionalWellbeing = () => (
  <CapsSubjectTopic
    title="Relationships and Emotional Wellbeing"
    subtitle="Peer pressure, bullying, communication, assertiveness, and help-seeking"
    learnSteps={learnSteps}
    task="gr8-relationships-and-emotional-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsAndEmotionalWellbeing;
