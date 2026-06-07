import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ml/term3/probability-trial-preparation/diagram.webp", alt: "Probability and Trial Preparation" },
    title: 'Describe probability on a scale from 0 to 1',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Probability measures how likely an event is. An impossible event has probability 0, a certain event has probability 1 and all other events lie between these values.</p>
        <Formula block>{String.raw`P(A) = \\frac{n(A)}{n(S)}`}</Formula>
        <Formula block>{String.raw`P(A') = 1 - P(A)`}</Formula>
      </div>
    ),
  },
  {
    title: 'Build sample spaces systematically',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A sample space lists all possible outcomes. Tables, lists and tree diagrams help when more than one event happens, such as two coin tosses or choosing items without replacement.</p>
        <p className="text-lg leading-8 text-slate-600">Once the sample space is complete, count favourable outcomes carefully before substituting into the formula.</p>
      </div>
    ),
  },
  {
    title: 'Use theoretical and experimental probability',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Theoretical probability is based on known possible outcomes, while experimental probability uses actual results from trials or observations. Both appear in CAPS questions and must be interpreted in context.</p>
        <Formula block>{String.raw`P(A \\cup B) = P(A) + P(B) - P(A \\cap B)`}</Formula>
        <Formula block>{String.raw`\\text{Experimental probability} = \\frac{\\text{number of successful trials}{\\text{total number of trials}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Prepare for integrated trial questions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Trial preparation means reading carefully, extracting the relevant data and showing enough working for each step. Probability questions may be combined with tables, data handling or measurement in one scenario.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>List or sketch the possible outcomes first.</li>
          <li>Decide whether events overlap before using the union formula.</li>
          <li>End with a sentence that interprets the probability.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "probability-trial-preparation-1",
    "question": "What is the probability of rolling an odd number on a fair six-sided die?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "answer": 2,
    "explanation": "Odd numbers are 1, 3 and 5, so 3 out of 6 outcomes are favourable."
  },
  {
    "id": "probability-trial-preparation-2",
    "question": "A spinner has 3 red sections, 2 blue sections and 1 green section of equal size. What is the probability of landing on blue?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "answer": 1,
    "explanation": "There are 2 blue sections out of 6 total sections, so the probability is 2/6 = 1/3."
  },
  {
    "id": "probability-trial-preparation-3",
    "question": "A bag contains 4 black marbles and 6 white marbles. What is the probability of NOT choosing a black marble?",
    "options": [
      "2/5",
      "3/5",
      "4/5",
      "6/10 is impossible"
    ],
    "answer": 1,
    "explanation": "Not black means white, so 6 out of 10 marbles: 6/10 = 3/5."
  },
  {
    "id": "probability-trial-preparation-4",
    "question": "How many outcomes are in the sample space for two coin tosses?",
    "options": [
      "2",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "The outcomes are HH, HT, TH and TT."
  },
  {
    "id": "probability-trial-preparation-5",
    "question": "Rain was recorded on 9 out of 30 days. What is the experimental probability of rain?",
    "options": [
      "3/10",
      "9/10",
      "21/30",
      "1/30"
    ],
    "answer": 0,
    "explanation": "Experimental probability = number of rainy days ÷ total days = 9/30 = 3/10."
  },
  {
    "id": "probability-trial-preparation-6",
    "question": "Which event is more likely from a bag containing 7 red counters and 3 blue counters?",
    "options": [
      "Drawing a blue counter",
      "Drawing a red counter",
      "Both are equally likely",
      "Neither can happen"
    ],
    "answer": 1,
    "explanation": "7/10 is greater than 3/10, so red is more likely."
  },
  {
    "id": "probability-trial-preparation-7",
    "question": "A bag contains 3 red and 2 blue beads. What is the probability of drawing a red bead and then a blue bead without replacement?",
    "options": [
      "1/5",
      "3/10",
      "2/5",
      "3/5"
    ],
    "answer": 1,
    "explanation": "P(red then blue) = 3/5 × 2/4 = 6/20 = 3/10."
  },
  {
    "id": "probability-trial-preparation-8",
    "question": "Which number represents the probability of a certain event?",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "A certain event always happens, so its probability is 1."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const ProbabilityTrialPreparation = () => (
  <CapsSubjectTopic
    title="Probability and Trial Preparation"
    subtitle="Probability, sample spaces and integrated trial-style practice"
    learnSteps={topicLearnSteps}
    task="gr12-probability-trial-preparation-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default ProbabilityTrialPreparation;
