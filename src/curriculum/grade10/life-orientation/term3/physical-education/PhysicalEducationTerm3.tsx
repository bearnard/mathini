import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { breathingSeconds } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The breathing time comes from gr10Helpers (tested in gr10Helpers.test.ts).
const breath = { inn: 4, out: 6, repeats: 5, total: breathingSeconds(4, 6, 5) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Recreation and relaxation',
    content: slide(
      <>
        <Rule>Recreation is any enjoyable activity that you choose in your free time. Relaxation is any activity that lowers tension and calms your body and mind. Some activities do both.</Rule>
        <Compare
          left={{ title: 'Recreation', items: ['Hiking with friends', 'A dance class', 'Cycling'] }}
          right={{ title: 'Relaxation', items: ['Slow breathing', 'Gentle stretching', 'Quiet music'] }}
          aria="Two columns. Recreation: hiking with friends, a dance class, cycling. Relaxation: slow breathing, gentle stretching, quiet music."
        />
        <Worked
          title="Recreation or relaxation?"
          steps={[
            <>A hike with friends: recreation.</>,
            <>Slow breathing and stretching after the hike: relaxation.</>,
            <>A dance class: recreation, and it can relax you too.</>,
            <>Both help you to recover from the stress of schoolwork.</>,
          ]}
        />
        <Mistake>Thinking that relaxing means staring at a screen for hours. Activity, fresh air and quiet time often refresh you more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relaxation techniques',
    content: slide(
      <>
        <Rule>Simple relaxation techniques are slow deep breathing, gentle stretching, tensing and then relaxing your muscles one group at a time, and picturing a calm place. You can use them before a test or after a hard day, to lower tension and think clearly.</Rule>
        <StepFlow
          steps={['Sit comfortably.', 'Breathe in slowly.', 'Breathe out slowly.', 'Repeat five times.']}
          aria="Four steps of slow breathing: sit comfortably, breathe in slowly, breathe out slowly and repeat five times."
        />
        <Worked
          title="Slow breathing before a test"
          steps={[
            <>Breathe in for {breath.inn} seconds.</>,
            <>Breathe out for {breath.out} seconds.</>,
            <>One breath takes {breath.inn} + {breath.out} = {breath.inn + breath.out} seconds.</>,
            <>Repeat {breath.repeats} times: {breath.repeats} × {breath.inn + breath.out} = {breath.total} seconds.</>,
          ]}
        />
        <Mistake>Pushing a stretch until it hurts. A stretch should feel like a gentle pull, never sharp pain.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choosing a recreation activity',
    content: slide(
      <>
        <Rule>Choose recreation that you enjoy and can keep up. Think about cost, safety, time, where you live and what you want from it, for example fitness, friends or calm.</Rule>
        <Worked
          title="Three options"
          steps={[
            <>Walking: free, safe in a group, and can be done almost anywhere.</>,
            <>Swimming: good exercise, but needs a pool and a lifeguard, and may cost money.</>,
            <>Cycling: needs a bike and safe roads or paths.</>,
            <>Sam has no money and lives near a park, so he chooses walking with a friend.</>,
          ]}
        />
        <Mistake>Choosing an activity only because friends do it. It must suit your interests, your money and your time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety in recreation and relaxation',
    content: slide(
      <>
        <Rule>Be safe: tell an adult where you are going, go with a group, check the weather, wear a hat, sunscreen and suitable shoes, drink water, stay on paths and look after the environment. Swim only where there is a lifeguard or an adult watching.</Rule>
        <Worked
          title="Planning a hike"
          steps={[
            <>Tell a parent or teacher where you will go and when you will be back.</>,
            <>Go with a group, and take water, a hat and sunscreen.</>,
            <>Stay on the path, and take your litter home.</>,
            <>Turn back if the weather changes.</>,
          ]}
        />
        <Mistake>Believing that a good swimmer is safe in a dam or a river. Currents, cold water and hidden dangers can drown even strong swimmers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between recreation and relaxation? Give one example of each.</>,
          <>Name two relaxation techniques.</>,
          <>You breathe in for 4 seconds and out for 6 seconds, 5 times. How many seconds is this?</>,
          <>Name two safety rules for a hike.</>,
        ]}
        answers={[
          <>Recreation is an enjoyable free-time activity, for example cycling. Relaxation lowers tension, for example slow breathing.</>,
          <>For example slow deep breathing, gentle stretching, or tensing and relaxing muscles.</>,
          <>(4 + 6) × 5 = {breath.total} seconds.</>,
          <>For example tell an adult where you are going and go with a group, or take water and sunscreen.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is recreation?',
    options: ['A job that a person does to earn a salary every month', 'An enjoyable activity that you choose in your free time', 'A test that a teacher sets to measure fitness levels', 'A rule that tells people how to behave at a sports event'],
    answer: 'An enjoyable activity that you choose in your free time',
    explanation: 'Recreation is any enjoyable activity that you choose to do in your free time.',
  },
  {
    prompt: 'What is relaxation?',
    options: ['An activity that lowers tension and calms body and mind', 'An activity that raises the heart rate as high as possible', 'An activity that is done to win a prize in a competition', 'An activity that a teacher makes you do in class'],
    answer: 'An activity that lowers tension and calms body and mind',
    explanation: 'Relaxation lowers tension and calms the body and mind.',
  },
  {
    prompt: 'Which of these is a recreation activity?',
    options: ['Writing a test in class', 'Doing the dishes at night', 'Sleeping for the night', 'Hiking with friends'],
    answer: 'Hiking with friends',
    explanation: 'Hiking, dancing, cycling and playing games are recreation activities.',
  },
  {
    prompt: 'Which of these is mainly a relaxation technique?',
    options: ['Sprinting up a hill', 'Lifting a heavy weight', 'Slow deep breathing', 'Playing a fast game of netball'],
    answer: 'Slow deep breathing',
    explanation: 'Slow breathing, gentle stretching and quiet music calm the body and mind.',
  },
  {
    prompt: 'What is progressive muscle relaxation?',
    options: ['Stretching a muscle until it feels sharp pain', 'Tensing and relaxing one group of muscles at a time', 'Lifting heavier weights each week to grow the muscle', 'Resting the muscles for a whole week after a game'],
    answer: 'Tensing and relaxing one group of muscles at a time',
    explanation: 'You tense a group of muscles and then let them go, one group at a time, to release tension.',
  },
  {
    prompt: 'How should a stretch feel when you relax?',
    options: ['Like a gentle pull', 'Like a sharp pain', 'Like a burning feeling', 'Like a sudden jolt'],
    answer: 'Like a gentle pull',
    explanation: 'A stretch should feel like a gentle pull. Sharp pain is a warning to stop.',
  },
  {
    prompt: 'You breathe in for 4 seconds and out for 6 seconds. How long is one breath?',
    options: ['2 seconds', '5 seconds', '24 seconds', '10 seconds'],
    answer: '10 seconds',
    explanation: '4 + 6 = 10 seconds.',
  },
  {
    prompt: 'You breathe in for 4 seconds and out for 6 seconds, and you repeat this 5 times. How long does it take?',
    options: ['10 seconds', '30 seconds', '50 seconds', '100 seconds'],
    answer: '50 seconds',
    explanation: '(4 + 6) × 5 = 50 seconds.',
  },
  {
    prompt: 'Which of these is a good reason to use a relaxation technique before a test?',
    options: ['It guarantees that you will pass the test', 'It can lower tension so you can think clearly', 'It replaces the need to study for the test', 'It makes the test easier for you than for others'],
    answer: 'It can lower tension so you can think clearly',
    explanation: 'Relaxation lowers tension and helps you to concentrate. It does not replace studying.',
  },
  {
    prompt: 'Sam has no money and lives near a park. Which recreation activity suits him?',
    options: ['Walking with a friend', 'Joining a swimming club with fees', 'Buying a bicycle and a helmet', 'Hiring a fitness trainer for the week'],
    answer: 'Walking with a friend',
    explanation: 'Walking is free, safe in a group and can be done almost anywhere.',
  },
  {
    prompt: 'Which of these should you think about when you choose a recreation activity?',
    options: ['The activity that your friends do the least often', 'The activity that is the most expensive to do', 'The activity that you have never heard of before', 'The cost, the safety and the time you have'],
    answer: 'The cost, the safety and the time you have',
    explanation: 'Cost, safety, time, where you live and what you want from the activity all matter.',
  },
  {
    prompt: 'What should you do before you go on a hike?',
    options: ['Go alone so that you can walk faster than a group', 'Leave your water behind to carry less on the way', 'Tell an adult where you will go', 'Choose a path that you do not know at all today'],
    answer: 'Tell an adult where you will go',
    explanation: 'Tell an adult your plan and go with a group. Take water, a hat and sunscreen.',
  },
  {
    prompt: 'Where is it safest to swim?',
    options: ['In a dam, if you are a strong swimmer', 'Where a lifeguard is watching', 'In a river, when the water looks calm', 'In a pool when there is no adult around'],
    answer: 'Where a lifeguard is watching',
    explanation: 'Currents, cold water and hidden dangers can drown even strong swimmers, so swim where someone is watching.',
  },
  {
    prompt: 'How can you look after the environment during outdoor recreation?',
    options: ['Stay on the paths and take your litter home', 'Leave your litter at the place where you ate', 'Pick all the plants that you like on the way', 'Make a fire wherever it is convenient'],
    answer: 'Stay on the paths and take your litter home',
    explanation: 'Stay on the paths and take your litter home to protect nature.',
  },
];

const PhysicalEducationTerm3 = () => (
  <CapsSubjectTopic
    title="Physical Education: Recreation and Relaxation"
    subtitle="Recreation, relaxation techniques, choosing an activity and staying safe"
    learnSteps={learnSteps}
    task="gr10-physical-education-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTerm3;
