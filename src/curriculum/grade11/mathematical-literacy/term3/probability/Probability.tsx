import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  { title: 'What is probability?', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Probability</strong> measures how likely an event is to happen. It is expressed as a value between 0 and 1, or as a percentage.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-indigo-800">Key formula:</p><Formula block>{String.raw`P(\text{event}) = \frac{\text{favourable outcomes}}{\text{total equally likely outcomes}}`}</Formula><p className="text-slate-700 mt-2">Scale: 0 = impossible, 0,5 = equally likely, 1 = certain.</p></div><div className="grid gap-3 md:grid-cols-3 text-left mt-2"><div className="rounded-xl bg-red-50 p-3"><strong className="text-red-700">Impossible</strong><p className="text-slate-600 text-sm">Use <Formula>{String.raw`P = 0`}</Formula>. Example: rolling a 7 on a standard die.</p></div><div className="rounded-xl bg-yellow-50 p-3"><strong className="text-yellow-700">Equally likely</strong><p className="text-slate-600 text-sm">Use <Formula>{String.raw`P = 0.5`}</Formula>. Example: getting heads on a fair coin.</p></div><div className="rounded-xl bg-green-50 p-3"><strong className="text-green-700">Certain</strong><p className="text-slate-600 text-sm">Use <Formula>{String.raw`P = 1`}</Formula>. Example: rolling a number less than 7 on a standard die.</p></div></div></div>) },
  { title: 'Sample spaces and events', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The <strong>sample space</strong> is the list of all possible outcomes. An <strong>event</strong> is a specific outcome or group of outcomes.</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-slate-800">Examples:</p><p className="text-slate-700">• Rolling a die: sample space = 1, 2, 3, 4, 5, 6 — 6 outcomes.</p><p className="text-slate-700">• Event “even number”: 2, 4, 6 — 3 favourable outcomes.</p><Formula block>{String.raw`P(\text{even}) = \frac{3}{6} = \frac{1}{2} = 0.5 = 50\%`}</Formula><p className="text-slate-700">• Flipping 2 coins: sample space = HH, HT, TH, TT — 4 outcomes.</p><Formula block>{String.raw`P(\text{both heads}) = \frac{1}{4} = 0.25 = 25\%`}</Formula></div></div>) },
  { title: 'Comparing likelihoods', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Probability helps us compare how likely different outcomes are and make informed decisions.</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-green-800">Language of likelihood:</p><p className="text-slate-700">• <strong>More likely</strong> → P closer to 1</p><p className="text-slate-700">• <strong>Less likely</strong> → P closer to 0</p><p className="text-slate-700">• <strong>Equally likely</strong> → P = 0,5</p><p className="text-slate-700 mt-2">Real-life context: A weather forecast says 30% chance of rain.</p><Formula block>{String.raw`P(\text{rain}) = 0.3`}</Formula><Formula block>{String.raw`P(\text{no rain}) = 1 - 0.3 = 0.7`}</Formula></div></div>) },
  { title: 'Theoretical vs experimental probability', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600"><strong>Theoretical probability</strong> is calculated using the sample space. <strong>Experimental probability</strong> is based on actual results from trials.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Theoretical</strong><Formula block>{String.raw`P(\text{heads}) = \frac{1}{2} = 0.5`}</Formula></div><div className="rounded-xl bg-orange-50 p-4 space-y-2"><strong className="text-orange-700">Experimental</strong><Formula block>{String.raw`P(\text{heads}) = \frac{48}{100} = 0.48`}</Formula></div></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">As the number of trials increases, the experimental results usually move closer to the theoretical values.</p><DataChart type="bar" xKey="outcome" data={[{ outcome: 'Heads', theoretical: 50, experimental: 48 },{ outcome: 'Tails', theoretical: 50, experimental: 52 }]} series={[{ key: 'theoretical', label: 'Theoretical out of 100', color: '#6366f1' },{ key: 'experimental', label: 'Experimental out of 100', color: '#f59e0b' }]} yLabel="Frequency" height={220} /></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A bag contains 3 red, 5 blue and 2 yellow marbles. What is the probability of picking a blue marble?',
    options: ['1/2', '5/8', '1/3', '5/10'],
    answer: '1/2',
    explanation: 'Total marbles = 10. P(blue) = 5/10 = 1/2.',
  },
  {
    prompt: 'A standard die is rolled. What is the probability of rolling a number greater than 4?',
    options: ['1/3', '1/2', '2/3', '1/6'],
    answer: '1/3',
    explanation: 'Numbers greater than 4: {5, 6} = 2 outcomes. P = 2/6 = 1/3.',
  },
  {
    prompt: 'A weather forecast predicts a 75% chance of rain. What is the probability it will NOT rain?',
    options: ['0,75', '0,25', '0,5', '0,35'],
    answer: '0,25',
    explanation: 'P(no rain) = 1 − P(rain) = 1 − 0,75 = 0,25 (25%).',
  },
  {
    prompt: 'Two coins are flipped. List the sample space.',
    options: ['H, T', 'HH, HT, TT', 'HH, HT, TH, TT', 'HH, TT'],
    answer: 'HH, HT, TH, TT',
    explanation: 'Each coin can land heads (H) or tails (T): HH, HT, TH, TT — 4 equally likely outcomes.',
  },
  {
    prompt: 'A spinner has 8 equal sections numbered 1 to 8. What is P(prime number)?',
    options: ['3/8', '4/8', '2/8', '5/8'],
    answer: '4/8',
    explanation: 'Prime numbers from 1–8: {2, 3, 5, 7} = 4. P = 4/8 = 1/2.',
  },
  {
    prompt: 'In 200 trials, an event occurred 60 times. What is the experimental probability?',
    options: ['0,3', '0,6', '60', '0,03'],
    answer: '0,3',
    explanation: 'Experimental P = 60 ÷ 200 = 0,3 (30%).',
  },
  {
    prompt: 'Which probability is IMPOSSIBLE?',
    options: ['P = 0', 'P = 0,5', 'P = 1', 'P = 1,2'],
    answer: 'P = 1,2',
    explanation: 'Probability must always be between 0 and 1 (inclusive). P = 1,2 is impossible.',
  },
  {
    prompt: 'A card is drawn at random from a standard 52-card deck. What is P(heart)?',
    options: ['1/4', '1/13', '1/52', '13/52'],
    answer: '1/4',
    explanation: 'There are 13 hearts in 52 cards. P(heart) = 13/52 = 1/4.',
  },
  {
    prompt: 'Event A has P = 0,2 and Event B has P = 0,7. Which event is MORE likely to occur?',
    options: ['Event A', 'Event B', 'They are equally likely', 'Neither can occur'],
    answer: 'Event B',
    explanation: 'A higher probability value means a more likely event. P(B) = 0,7 > P(A) = 0,2.',
  },
  {
    prompt: 'A class of 30 learners has 18 girls. A learner is chosen at random. What is P(girl) as a percentage?',
    options: ['18%', '60%', '40%', '50%'],
    answer: '60%',
    explanation: 'P(girl) = 18/30 = 0,6 = 60%.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Calculating likelihood, sample spaces and interpreting probability in context"
    learnSteps={learnSteps}
    task="gr11-ml-probability-t3"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default Probability;
