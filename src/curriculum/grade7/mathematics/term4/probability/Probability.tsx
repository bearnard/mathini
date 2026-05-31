import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use sample space and probability language',
    image: {
      src: '/curriculum/grade7/math/term4/probability/diagram.webp',
      alt: 'Grade 7 learners listing outcomes and comparing theoretical and experimental probability',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Probability describes chance from impossible to certain. Learners list outcomes, calculate simple
          probabilities, and compare experimental and theoretical results.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the probability of getting heads on a fair coin?',
    options: ['1/2', '1/3', '1/4', '2/3'],
    answer: '1/2',
    explanation: 'There are 2 equally likely outcomes and 1 favourable one.',
  },
  {
    prompt: 'What is the probability of rolling an even number on a fair die?',
    options: ['1/2', '1/6', '2/3', '1/3'],
    answer: '1/2',
    explanation: 'Even outcomes are 2, 4, 6, so 3 out of 6 = 1/2.',
  },
  {
    prompt: 'An impossible event has probability...',
    options: ['0', '1', '1/2', '2'],
    answer: '0',
    explanation: 'Impossible means it cannot happen.',
  },
  {
    prompt: 'A certain event has probability...',
    options: ['1', '0', '1/4', '1/2'],
    answer: '1',
    explanation: 'Certain means it must happen.',
  },
  {
    prompt: 'A bag has 3 red marbles and 2 blue marbles. Probability of picking blue?',
    options: ['2/5', '3/5', '1/5', '1/2'],
    answer: '2/5',
    explanation: '2 favourable blue outcomes out of 5 total marbles.',
  },
  {
    prompt: 'Theoretical probability is based on...',
    options: ['all possible equally likely outcomes', 'what happened in one trial only', 'personal guess only', 'the largest number in data'],
    answer: 'all possible equally likely outcomes',
    explanation: 'Theoretical probability uses the sample space before testing.',
  },
  {
    prompt: 'How many outcomes are in the sample space for tossing two coins?',
    options: ['4', '2', '3', '8'],
    answer: '4',
    explanation: 'Outcomes: HH, HT, TH, TT.',
  },
  {
    prompt: 'A bag has 8 green and 2 yellow counters. Which event is more likely?',
    options: ['picking a green counter', 'picking a yellow counter', 'both are equally likely', 'neither is possible'],
    answer: 'picking a green counter',
    explanation: 'There are more green counters, so green is more likely.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Outcomes, sample space, and simple chance calculations"
    learnSteps={learnSteps}
    task="gr7-probability-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
