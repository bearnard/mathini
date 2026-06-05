import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Probability',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Probability measures the likelihood of an event occurring. In South Africa, probability helps you understand weather forecasts, lottery odds, insurance risks, and medical test results.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Probability Scale</h4>
          <ul className="space-y-2 text-sm">
            <li>Probability is always between 0 and 1 (or 0% and 100%)</li>
            <li><strong>0 (0%):</strong> Impossible event</li>
            <li><strong>0.5 (50%):</strong> Equally likely to happen or not</li>
            <li><strong>1 (100%):</strong> Certain event</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Basic Probability Formula</h4>
          <Formula block>{String.raw`P(\text{event}) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}`}</Formula>
        </div>
        <div>
          <p className="font-medium mb-2">Example: What's the probability of drawing a red card from a standard deck of 52 cards?</p>
          <div className="space-y-1 text-sm">
            <p>Red cards (hearts + diamonds) = 26</p>
            <p>Total cards = 52</p>
            <Formula block>{String.raw`P(\text{red}) = \frac{26}{52} = \frac{1}{2} = 0.5 = 50\%`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Calculating Probabilities',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Different scenarios require different probability calculations. Understanding these helps you make informed decisions.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Complementary Events</h4>
          <p className="text-sm mb-2">The probability that an event does NOT happen:</p>
          <Formula block>{String.raw`P(\text{not A}) = 1 - P(A)`}</Formula>
          <p className="text-xs mt-2">Example: If probability of rain is 30%, probability of no rain = 1 - 0.3 = 0.7 = 70%</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: A bag contains 5 red, 3 blue, and 2 green balls. What's the probability of NOT drawing a blue ball?</p>
          <div className="space-y-1 text-sm">
            <p>Total balls = 5 + 3 + 2 = 10</p>
            <Formula block>{String.raw`P(\text{blue}) = \frac{3}{10}`}</Formula>
            <Formula block>{String.raw`P(\text{not blue}) = 1 - \frac{3}{10} = \frac{7}{10} = 0.7 = 70\%`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Probability in Real Life',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Probability appears in everyday South African contexts—from weather forecasts in Cape Town, to Lotto odds, to understanding medical test accuracy.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Lotto Example</h4>
          <p className="text-sm mb-2">The South African Lotto draws 6 numbers from 52. What's the probability of matching exactly 3 numbers?</p>
          <p className="text-xs italic">This uses complex combinations, but the published probability is about 1 in 57.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Weather Forecast Example</h4>
          <p className="text-sm mb-2">The SAWS (South African Weather Service) says there's a 70% chance of rain in Durban tomorrow.</p>
          <p className="text-sm">This means: If conditions like today's occurred 100 times, it would rain on about 70 of those days.</p>
        </div>
        <div>
          <p className="font-medium mb-2">Example: In a quality control test, 2 out of 50 items are defective. What's the probability a random item is NOT defective?</p>
          <Formula block>{String.raw`P(\text{not defective}) = \frac{48}{50} = \frac{24}{25} = 0.96 = 96\%`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Seeing Chance in Data',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Experimental probability can be displayed on a graph. As the number of trials increases, the observed results usually get closer to the theoretical probability.
        </p>
        <DataChart
          data={[
            { trials: '10 tosses', heads: 0.4 },
            { trials: '20 tosses', heads: 0.45 },
            { trials: '50 tosses', heads: 0.48 },
            { trials: '100 tosses', heads: 0.5 },
          ]}
          series={[{ key: 'heads', label: 'Relative frequency of heads', color: '#8b5cf6' }]}
          xKey="trials"
          type="line"
        />
        <p className="text-sm text-slate-600">
          The graph approaching 0.5 shows why larger samples usually give a more reliable estimate of the probability of heads on a fair coin.
        </p>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'If you roll a fair six-sided die, what is the probability of getting a number greater than 4?',
    options: ['1/6', '2/6', '3/6', '4/6'],
    answer: '2/6',
    explanation: 'Numbers greater than 4 are 5 and 6. Probability = 2/6',
  },
  {
    prompt: 'A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a red ball?',
    options: ['3/8', '5/8', '5/3', '8/5'],
    answer: '5/8',
    explanation: 'Total balls = 8. Red balls = 5. Probability = 5/8',
  },
  {
    prompt: 'If the probability of an event is 0.35, what is the probability that the event does NOT occur?',
    options: ['0.35', '0.65', '0.70', '1.35'],
    answer: '0.65',
    explanation: 'P(not event) = 1 - P(event) = 1 - 0.35 = 0.65',
  },
  {
    prompt: 'A spinner has 8 equal sections: 3 red, 3 blue, 2 green. What is the probability of landing on green?',
    options: ['1/4', '3/8', '2/8', '1/2'],
    answer: '2/8',
    explanation: 'P(green) = 2/8 (which simplifies to 1/4, but 2/8 is shown as an option)',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Chance and likelihood analysis"
    learnSteps={learnSteps}
    task="gr10-probability-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default Probability;
