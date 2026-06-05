import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import ProbabilitySimulator from '@/components/subjects/ProbabilitySimulator';

const learnSteps: LearnStep[] = [
  {
    title: 'Probability Simulator',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Run repeated experiments and compare theoretical probability with experimental results to see how relative
          frequency changes as more trials are added.
        </p>
        <ProbabilitySimulator defaultMode="coin" />
      </div>
    ),
  },
  {
    title: 'Calculate and compare simple probabilities',
    image: {
      src: '/curriculum/grade8/math/term4/probability/diagram.webp',
      alt: 'Grade 8 learners listing outcomes and calculating simple probabilities',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Probability describes chance using sample spaces and fractions. Learners compare equally likely outcomes and
          relate theoretical probability to experimental results.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the probability of heads on a fair coin?',
    options: ['1/2', '1/3', '1/4', '2/3'],
    answer: '1/2',
    explanation: 'There are 2 equally likely outcomes and 1 favourable one.',
  },
  {
    prompt: 'What is the probability of rolling a 6 on a fair die?',
    options: ['1/6', '1/3', '1/2', '1/12'],
    answer: '1/6',
    explanation: 'One favourable outcome out of six total outcomes.',
  },
  {
    prompt: 'An impossible event has probability...',
    options: ['0', '1', '1/2', '2'],
    answer: '0',
    explanation: 'Impossible means it cannot occur.',
  },
  {
    prompt: 'A certain event has probability...',
    options: ['1', '0', '1/4', '1/2'],
    answer: '1',
    explanation: 'Certain means it must happen.',
  },
  {
    prompt: 'A bag has 3 red and 1 blue marble. P(blue) = ?',
    options: ['1/4', '3/4', '1/3', '1/2'],
    answer: '1/4',
    explanation: '1 favourable blue out of 4 total marbles.',
  },
  {
    prompt: 'How many outcomes are in the sample space for two coin tosses?',
    options: ['4', '2', '3', '8'],
    answer: '4',
    explanation: 'HH, HT, TH, TT.',
  },
  {
    prompt: '0.75 as a probability fraction is...',
    options: ['3/4', '1/4', '3/5', '7/10'],
    answer: '3/4',
    explanation: '0.75 = 75/100 = 3/4.',
  },
  {
    prompt: 'If a bag has 8 green and 2 yellow counters, which is more likely?',
    options: ['picking a green counter', 'picking a yellow counter', 'both equally likely', 'neither possible'],
    answer: 'picking a green counter',
    explanation: 'Green outcomes are more numerous.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Sample space, equally likely outcomes, and relative frequency"
    learnSteps={learnSteps}
    task="gr8-probability-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
