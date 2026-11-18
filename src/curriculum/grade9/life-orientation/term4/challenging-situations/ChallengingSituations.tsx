import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Challenging situations and strong feelings',
    content: slide(
      <>
        <Rule>Everyone faces hard times: loss of a loved one, a family breakup, a move, failure, an accident or a frightening event. Strong feelings such as sadness, anger and fear are natural responses. Grief is the response to a loss, trauma is the response to a very frightening or shocking event, and a crisis is a time of great difficulty. You are not weak for having these feelings.</Rule>
        <FactCards
          cards={[
            { title: 'Loss and grief', line1: 'sadness after losing', line2: 'a person or a home' },
            { title: 'Trauma', line1: 'a reaction to a very', line2: 'frightening event' },
            { title: 'Crisis', line1: 'a time of great', line2: 'difficulty' },
            { title: 'Feelings', line1: 'sadness, anger and', line2: 'fear are natural' },
          ]}
          aria="Challenging situations. Loss and grief: sadness after losing a person or a home. Trauma: a reaction to a very frightening event. Crisis: a time of great difficulty. Feelings: sadness, anger and fear are natural."
        />
        <Worked
          title="Name the situation"
          steps={[
            'A learner loses a grandparent and feels empty and sad: grief.',
            'A learner who saw a bad accident cannot sleep and feels afraid: a reaction to trauma.',
            'A family loses its home in a fire: a crisis.',
          ]}
        />
        <Mistake>Telling yourself or others to &ldquo;just be strong&rdquo;. Feelings need to be acknowledged, and asking for support is a sign of strength.</Mistake>
      </>,
    ),
  },
  {
    title: 'Depression: when sadness stays',
    content: slide(
      <>
        <Rule>Everyone feels sad sometimes. Depression is when sadness or a low mood lasts for weeks, and it can bring a loss of interest in things you enjoy, tiredness, trouble sleeping or eating, feeling hopeless, and withdrawing from friends. Depression is a health problem, not a weakness, and it can be helped. If you recognise these signs in yourself or a friend, tell a trusted adult.</Rule>
        <FactCards
          cards={[
            { title: 'Sadness', line1: 'natural and usually', line2: 'passes with time' },
            { title: 'Depression', line1: 'low mood that', line2: 'lasts for weeks' },
            { title: 'Signs', line1: 'tiredness, no interest,', line2: 'sleep or eating changes' },
            { title: 'Help', line1: 'it is a health problem', line2: 'that can be treated' },
          ]}
          aria="Depression. Sadness: natural and usually passes with time. Depression: a low mood that lasts for weeks. Signs: tiredness, no interest, sleep or eating changes. Help: it is a health problem that can be treated."
        />
        <Worked
          title="Notice the signs"
          steps={[
            'A friend stops playing sport, sleeps badly and says that nothing matters.',
            'This has lasted for several weeks, which is longer than ordinary sadness.',
            'You tell the friend that you care and you help them to talk to a trusted adult or the school counsellor.',
          ]}
        />
        <Mistake>Believing that depression is laziness or attention-seeking. It is a real health problem, and help works.</Mistake>
      </>,
    ),
  },
  {
    title: 'Healthy and unhealthy ways of coping',
    content: slide(
      <>
        <Rule>Healthy ways of coping include talking to someone you trust, crying, exercise, rest, writing or drawing about your feelings, keeping routines and doing something kind for others. Using alcohol or drugs to cope is counterproductive: it does not solve the problem, it can make you feel worse, and it can lead to dependence, accidents and trouble at school.</Rule>
        <FactCards
          cards={[
            { title: 'Healthy', line1: 'talk, exercise, rest', line2: 'and routines' },
            { title: 'Creative', line1: 'write, draw or', line2: 'make music' },
            { title: 'Unhealthy', line1: 'alcohol and drugs', line2: 'make things worse' },
            { title: 'Support', line1: 'family, friends and', line2: 'a counsellor' },
          ]}
          aria="Ways of coping. Healthy: talk, exercise, rest and routines. Creative: write, draw or make music. Unhealthy: alcohol and drugs make things worse. Support: family, friends and a counsellor."
        />
        <Worked
          title="Choose how to cope"
          steps={[
            'After a loss you feel overwhelmed and a friend offers you alcohol to forget.',
            'You say no, because it will not solve the problem and it can make you feel worse.',
            'You talk to your aunt, go for a walk and write about how you feel instead.',
          ]}
        />
        <Mistake>Believing that alcohol or drugs make pain go away. The pain returns, and new problems are added.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solving problems and getting help',
    content: slide(
      <>
        <Rule>To work through a difficulty, name the problem, think of options, weigh up each option, choose one, try it and review how it went. You do not have to do it alone. Tell a trusted adult, a teacher, a school counsellor or the clinic. Children and teenagers can also call Childline on 116 to talk. If you feel that you cannot go on or that you might harm yourself, tell an adult right away.</Rule>
        <StepFlow steps={['Name the problem.', 'List your options.', 'Choose and try one.', 'Review and ask for help.']} aria="Four steps to solve a problem: name the problem, list your options, choose and try one, and review and ask for help." />
        <Worked
          title="Work through a problem"
          steps={[
            'Problem: you feel very sad since your parents separated and your marks are dropping.',
            'Options: talk to your teacher, speak to the school counsellor, or call Childline on 116.',
            'You choose to talk to the school counsellor, and later you review how you feel.',
          ]}
        />
        <Mistake>Waiting until things are unbearable before telling someone. Asking for help early is wise.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is grief?</>,
          <>How is depression different from ordinary sadness?</>,
          <>Name one healthy way of coping.</>,
          <>Which number can a child call to talk to Childline?</>,
        ]}
        answers={[
          <>The response to a loss.</>,
          <>The low mood lasts for weeks and affects daily life.</>,
          <>For example talking to someone, exercise or rest.</>,
          <>116.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is grief?",
    options: ["A kind of exam", "A type of sport", "The response to a loss", "A school uniform"],
    answer: "The response to a loss",
    explanation: "Grief follows the loss of a person, a home or something important.",
  },
  {
    prompt: "What is trauma?",
    options: ["A reaction to a shocking event", "A good mood after a big win", "A school subject about the mind", "A kind of food for the family"],
    answer: "A reaction to a shocking event",
    explanation: "Trauma can follow an accident or a frightening event.",
  },
  {
    prompt: "Are sadness, anger and fear natural responses to hard times?",
    options: ["No, never", "Only for adults", "Only for weak people", "Yes, they are"],
    answer: "Yes, they are",
    explanation: "Strong feelings are natural and need support.",
  },
  {
    prompt: "What sets depression apart from a few sad days?",
    options: ["It lasts only a few minutes", "The low mood lasts for weeks", "It only happens on the holidays", "It is always a happy mood"],
    answer: "The low mood lasts for weeks",
    explanation: "Depression is a health problem that can be treated.",
  },
  {
    prompt: "Which is a possible sign of depression?",
    options: ["Winning a prize at the school", "Losing interest in things you like", "Enjoying a brand new hobby", "Sleeping well every night"],
    answer: "Losing interest in things you like",
    explanation: "Signs include tiredness, hopelessness and withdrawing.",
  },
  {
    prompt: "Is depression a weakness?",
    options: ["Yes, it is a sign of weakness", "Yes, it is only laziness", "Yes, it is a free choice", "No, it is a health problem"],
    answer: "No, it is a health problem",
    explanation: "Help works, so tell a trusted adult.",
  },
  {
    prompt: "A friend shows signs of depression for weeks. What should you do?",
    options: ["Show you care and tell an adult", "Tell them to snap out of it", "Ignore it and hope it ends", "Laugh about it with others"],
    answer: "Show you care and tell an adult",
    explanation: "Support and a trusted adult can help.",
  },
  {
    prompt: "Which is a healthy way of coping with sadness?",
    options: ["Drinking alcohol", "Using drugs", "Talking to someone you trust", "Keeping everything a secret"],
    answer: "Talking to someone you trust",
    explanation: "Talking, exercise, rest and creative activities help.",
  },
  {
    prompt: "Which is a healthy way of coping with stress?",
    options: ["Using drugs", "Fighting", "Skipping meals", "Exercise and rest"],
    answer: "Exercise and rest",
    explanation: "Healthy habits support your mood.",
  },
  {
    prompt: "Why is using alcohol or drugs to cope counterproductive?",
    options: ["It solves every kind of problem", "It can make things worse", "It makes you much stronger", "It is a rule of every school"],
    answer: "It can make things worse",
    explanation: "New problems are added.",
  },
  {
    prompt: "What is the first step of solving a problem?",
    options: ["Name the problem", "Ignore it", "Blame someone", "Run away"],
    answer: "Name the problem",
    explanation: "Name it, list options, choose one, try it and review.",
  },
  {
    prompt: "Who can you tell when you are overwhelmed?",
    options: ["Nobody, because it is secret", "Only a stranger on the internet", "A trusted adult or counsellor", "Only a rumour group of friends"],
    answer: "A trusted adult or counsellor",
    explanation: "You do not have to cope alone.",
  },
  {
    prompt: "Which short number lets a teenager talk to Childline?",
    options: ["10111", "0800 428 428", "116", "12"],
    answer: "116",
    explanation: "Childline is a free helpline for children.",
  },
  {
    prompt: "When should you ask for help?",
    options: ["Early, when you feel overwhelmed", "Only when it is unbearable", "Never", "Only after a year"],
    answer: "Early, when you feel overwhelmed",
    explanation: "Asking early is wise.",
  },
];

const ChallengingSituations = () => (
  <CapsSubjectTopic
    title="Challenging Situations: Grief, Loss, Trauma and Depression"
    subtitle="Strong feelings after hard times, depression, ways of coping, problem-solving and where to get help"
    learnSteps={learnSteps}
    task="gr9-challenging-situations-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ChallengingSituations;
