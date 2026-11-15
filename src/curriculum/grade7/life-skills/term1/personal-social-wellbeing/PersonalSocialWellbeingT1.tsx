import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Who am I? Self-concept and values',
    content: slide(
      <>
        <Rule>Your self-concept is how you see yourself: your strengths, interests, values and goals. Values are beliefs that guide your choices, such as honesty and respect.</Rule>
        <Hub centre="Me" spokes={['Strengths', 'Interests', 'Values', 'Goals']} aria="A circle labelled Me with four labels around it: strengths, interests, values and goals." />
        <Worked
          title="Describe yourself"
          steps={[
            <>Name a strength: “I am good at netball.”</>,
            <>Name an interest: “I love drawing.”</>,
            <>Name a value: “Honesty matters to me.”</>,
            <>Join them: “I am a creative, honest team player.”</>,
          ]}
        />
        <Mistake>Thinking one test mark or one match result is your whole self-concept. It is only one moment. Your self-concept keeps growing as you learn about yourself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Puberty: a normal stage of growth',
    content: slide(
      <>
        <Rule>Puberty is the normal stage when your body and your feelings change as you grow towards adulthood. It takes years, not one day, and it starts at different ages for different people.</Rule>
        <Worked
          title="A classmate says “puberty only changes your hair”"
          steps={[
            <>Ask: is this a fact or a rumour?</>,
            <>Check with a trusted adult, the school nurse or a health book.</>,
            <>Learn the fact: puberty changes both your body and your emotions.</>,
            <>Share the fact, not the rumour.</>,
          ]}
        />
        <Mistake>Believing that puberty happens to everyone at the same age, or that you stop having feelings. Starting earlier or later than your friends is normal, and your feelings may change quickly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Managing strong emotions',
    content: slide(
      <>
        <Rule>All feelings are normal. What matters is what you do with them. Calm yourself first, then act.</Rule>
        <StepFlow steps={['Pause. Do not react yet.', 'Breathe in slowly and out slowly.', 'Name the feeling.', 'Talk to a trusted adult.']} aria="Four steps for strong emotions in order: pause, breathe slowly, name the feeling, talk to a trusted adult." />
        <Worked
          title="Zanele is angry because a friend shared her secret"
          steps={[<>Pause: she does not shout.</>, <>She breathes slowly until she feels calmer.</>, <>She names it: “I feel hurt and angry.”</>, <>She talks to a trusted adult, then speaks to her friend calmly.</>]}
        />
        <Mistake>Shouting at friends or breaking things. That hurts others and solves nothing. Pretending you feel nothing, for ever, does not make a feeling go away either.</Mistake>
      </>,
    ),
  },
  {
    title: 'Making a responsible decision',
    content: slide(
      <>
        <Rule>Use four steps. 1: Define the problem. 2: List your choices. 3: Predict what could happen. 4: Choose, then reflect on the result.</Rule>
        <Branches
          problem="A friend asks to copy your homework"
          options={[
            { choice: 'Let them copy', outcome: 'Both of you can get in trouble. They learn nothing.' },
            { choice: 'Offer to explain it', outcome: 'They learn it. You stay honest.' },
          ]}
          aria="A decision tree. A friend asks to copy your homework. Choice one: let them copy, and both can get in trouble. Choice two: offer to explain it, and they learn while you stay honest."
        />
        <Worked
          title="Apply the steps"
          steps={[<>Define: my friend wants my answers.</>, <>Choices: let them copy, say no, or explain it.</>, <>Predict: copying risks trouble; explaining helps.</>, <>Choose to explain, then reflect: how did it go?</>]}
        />
        <Mistake>Choosing the quickest option, copying what others do, or acting only out of fear. Think about the consequences before you act.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Describe one strength, one interest and one value that could belong to your self-concept." answer="For example: strength = good at netball, interest = drawing, value = honesty. Your self-concept is how you see yourself, and it can grow." />
        <Check question="A rumour says puberty happens in one day. What is the fact, and what should you do?" answer="Puberty is a normal stage that takes years. Check the fact with a trusted adult or a reliable source and do not spread the rumour." />
        <Check question="You feel very angry. Give the first two things to do." answer="Pause and breathe slowly. Then name the feeling and talk to a trusted adult." />
        <Check question="What is the first step in making a decision, and what should you think about before you choose?" answer="Define the problem clearly. Before choosing, predict the consequences of each choice." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is self-concept?',
    options: [
      'How you understand and describe yourself',
      'A list of school subjects only',
      'A rule that controls traffic',
      'A score from one sports match',
    ],
    answer: 'How you understand and describe yourself',
    explanation: 'Self-concept includes your strengths, interests, and beliefs about yourself.',
  },
  {
    prompt: 'Which option best describes a personal value?',
    options: ['A belief that guides your behaviour', 'A random thought with no meaning', 'A type of school uniform', 'A mark out of ten'],
    answer: 'A belief that guides your behaviour',
    explanation: 'Values influence what choices you make in everyday situations.',
  },
  {
    prompt: 'Which statement about puberty is correct?',
    options: [
      'Puberty is a normal stage of growth',
      'Puberty only changes your hairstyle',
      'Puberty happens in one single day',
      'Puberty means you stop feeling emotions',
    ],
    answer: 'Puberty is a normal stage of growth',
    explanation: 'Puberty is a natural process with physical and emotional changes over time.',
  },
  {
    prompt: 'What is a healthy way to manage strong emotions?',
    options: ['Pause, breathe and talk to a trusted adult', 'Shout at your friends straight away', 'Ignore your feelings for ever and never talk', 'Break something to make yourself feel better'],
    answer: 'Pause, breathe and talk to a trusted adult',
    explanation: 'Calm strategies and support help you respond safely and respectfully.',
  },
  {
    prompt: 'What should you do first when making a difficult decision?',
    options: [
      'Define the problem clearly',
      'Choose the quickest option without thinking',
      'Copy whatever someone else does',
      'Avoid making any choice',
    ],
    answer: 'Define the problem clearly',
    explanation: 'Clear problem definition helps you evaluate options properly.',
  },
  {
    prompt: 'Which choice shows responsible decision-making?',
    options: [
      'Thinking about consequences before acting',
      'Doing risky actions to impress peers',
      'Ignoring all advice from trusted adults',
      'Choosing based on fear only',
    ],
    answer: 'Thinking about consequences before acting',
    explanation: 'Responsible choices consider safety, values, and long-term effects.',
  },
  {
    prompt: 'A classmate shares a puberty myth. What is the best response?',
    options: ['Check the facts with a trusted adult or source', 'Spread the myth on to more learners', 'Laugh at the classmate and tease them', 'Assume that every rumour must be true'],
    answer: 'Check the facts with a trusted adult or source',
    explanation: 'Fact-checking helps learners avoid confusion and stigma.',
  },
  {
    prompt: 'Which action reflects your values in a conflict?',
    options: ['Speaking honestly and respectfully', 'Posting insults online', 'Refusing to listen at all', 'Blaming others without evidence'],
    answer: 'Speaking honestly and respectfully',
    explanation: 'Values like respect and honesty guide positive behaviour in conflict.',
  },
];

const PersonalSocialWellbeingT1 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Self-concept, values, puberty, emotions, and responsible choices"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT1;
