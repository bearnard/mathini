import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { Spinner, TallyTable } from '../../../../components/diagrams/maths/Grade6Maths';
import * as p from '../../../../components/diagrams/maths/grade6Probability';

// Every number in the slides below comes from the tested helpers in grade6Probability.ts (grade6Probability.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6: list the possible outcomes of a coin, die or spinner, record with tally marks, count and compare frequencies, up to 50 trials.
const spin = ['red', 'blue', 'green', 'yellow'];
const coinRows = [{ label: 'heads', n: 13 }, { label: 'tails', n: 7 }];
const coin = { total: p.totalTrials(coinRows.map((r) => r.n)), more: p.moreThan(13, 7) };
const dieCounts = [4, 6, 3, 5, 2, 5];
const dieRows = dieCounts.map((n, i) => ({ label: String(i + 1), n }));
const dieTotal = p.totalTrials(dieCounts);
const most = p.mostOften(dieCounts) + 1;
const least = p.leastOften(dieCounts) + 1;
const groups = [{ g: 'Group A', n: 10 }, { g: 'Group B', n: 10 }, { g: 'Group C', n: 10 }];
const together = p.totalTrials(groups.map((x) => x.n));
const c = { tails: 24 - 15, total: p.totalTrials([6, 4, 7, 3]), most: ['red', 'blue', 'green', 'yellow'][p.mostOften([6, 4, 7, 3])] };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Possible outcomes',
    content: slide(
      <>
        <Rule>An outcome is one result of an experiment. Before you start, list all the possible outcomes. A coin has {p.COIN.length} outcomes, a die has {p.DIE.length}, and a spinner has one outcome for each different colour or number on it.</Rule>
        <Spinner sections={spin} />
        <Worked
          title="Listing the outcomes"
          steps={[
            <>Toss a coin: the outcomes are <strong>heads</strong> and <strong>tails</strong>, so {p.COIN.length} outcomes.</>,
            <>Roll a die: the outcomes are <strong>1, 2, 3, 4, 5 and 6</strong>, so {p.DIE.length} outcomes.</>,
            <>This spinner has {spin.length} equal sections: <strong>{spin.join(', ')}</strong>. It has {p.spinnerOutcomes(spin).length} outcomes.</>,
            <>A spinner with sections red, blue, red and green has only {p.spinnerOutcomes(['red', 'blue', 'red', 'green']).length} different outcomes.</>,
          ]}
        />
        <Mistake>Counting the sections instead of the different outcomes. Two red sections are still the one outcome, red.</Mistake>
      </>,
    ),
  },
  {
    title: 'Recording with tally marks',
    content: slide(
      <>
        <Rule>Do the experiment many times, and make one tally stroke for each trial. Every fifth stroke is drawn across the four before it, to make a group of five. Count the groups in fives and then add the single strokes.</Rule>
        <TallyTable rows={coinRows} />
        <Worked
          title="Toss a coin 20 times"
          steps={[
            <>Heads: {p.tallyWords(13)}. {p.tallyGroups(13).fives} × 5 = {p.tallyGroups(13).fives * 5}, and {p.tallyGroups(13).fives * 5} + {p.tallyGroups(13).rest} = <strong>13</strong>.</>,
            <>Tails: {p.tallyWords(7)}. 5 + 2 = <strong>7</strong>.</>,
            <>Total trials: 13 + 7 = <strong>{coin.total}</strong>. The total must match the number of tosses.</>,
            <>Heads came up {coin.more} more times than tails: 13 − 7 = <strong>{coin.more}</strong>.</>,
          ]}
        />
        <Mistake>Making the fifth stroke a plain stroke. It must cross the other four, so that you can count in fives quickly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Counting and comparing frequencies',
    content: slide(
      <>
        <Rule>The frequency of an outcome is the number of times it happened. Compare frequencies to find which outcome happened most often and which happened least often. The frequencies add up to the number of trials.</Rule>
        <TallyTable rows={dieRows} />
        <Worked
          title={`Roll a die ${dieTotal} times`}
          steps={[
            <>The frequencies are {dieCounts.join(', ')}. Add them: <strong>{dieTotal}</strong> rolls.</>,
            <>The biggest frequency is {Math.max(...dieCounts)}, so the number <strong>{most}</strong> came up most often.</>,
            <>The smallest frequency is {Math.min(...dieCounts)}, so the number <strong>{least}</strong> came up least often.</>,
            <>The number 2 came up {dieCounts[1]} times and the number 5 came up {dieCounts[4]} times: {dieCounts[1] - dieCounts[4]} more times.</>,
          ]}
        />
        <Mistake>Saying the number 6 came up most often because it is the biggest number. Look at the frequency, not at the number on the die.</Mistake>
      </>,
    ),
  },
  {
    title: 'More trials and putting results together',
    content: slide(
      <>
        <Rule>Groups can do the same experiment and put their results together. This is called collating. Add the number of trials and add the frequencies of each outcome. With more trials, the results are less surprising: the frequencies of a coin move closer to each other.</Rule>
        <TallyTable rows={[{ label: 'A: heads', n: 7 }, { label: 'B: heads', n: 5 }, { label: 'C: heads', n: 6 }]} />
        <Worked
          title="Three groups toss a coin 10 times each"
          steps={[
            <>{groups.map((x) => `${x.g} did ${x.n} tosses`).join(', ')}. Together: 10 + 10 + 10 = <strong>{together}</strong> tosses.</>,
            <>The groups got 7, 5 and 6 heads. Together: 7 + 5 + 6 = <strong>{7 + 5 + 6}</strong> heads.</>,
            <>Tails: {together} − {7 + 5 + 6} = <strong>{together - (7 + 5 + 6)}</strong>.</>,
            <>After {together} tosses the heads and tails are close to each other. A group that tossed only 10 times could not be sure.</>,
          ]}
        />
        <Mistake>Trusting a few trials too much. A coin can land heads 7 times in 10 tosses, but over many tosses heads and tails come out nearly equal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A coin is tossed 24 times and lands heads 15 times. How many tails?</>,
            <>A spinner has 4 colours. It is spun 20 times and the results are red 6, blue 4, green 7 and yellow 3. How many spins is that?</>,
            <>Which colour came up most often?</>,
            <>How many outcomes does a die have?</>,
          ]}
          answers={[
            <>24 − 15 = <strong>{c.tails}</strong> tails.</>,
            <>6 + 4 + 7 + 3 = <strong>{c.total}</strong> spins.</>,
            <>Green has the biggest frequency, 7, so the answer is <strong>{c.most}</strong>.</>,
            <><strong>{p.DIE.length}</strong> outcomes: 1, 2, 3, 4, 5 and 6.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "What are the possible outcomes when you toss a coin?",
    options: ["1, 2, 3, 4, 5 or 6", "Heads or tails", "Heads only", "Heads, tails or a draw"],
    answer: "Heads or tails",
    explanation: "A coin lands with one of two faces up: heads or tails.",
  },
  {
    prompt: "How many possible outcomes are there when you roll a die?",
    options: ["6", "5", "12", "36"],
    answer: "6",
    explanation: "A die has the numbers 1, 2, 3, 4, 5 and 6, so there are 6 possible outcomes.",
  },
  {
    prompt: "A spinner has 6 equal sections coloured red, blue, red, green, blue and red. How many different outcomes can it show?",
    options: ["6", "2", "4", "3"],
    answer: "3",
    explanation: "The different colours are red, blue and green, so there are 3 different outcomes.",
  },
  {
    prompt: "A spinner has 8 equal sections numbered 1 to 8. How many possible outcomes does it have?",
    options: ["1", "16", "8", "4"],
    answer: "8",
    explanation: "Each numbered section is a different outcome: 1, 2, 3, 4, 5, 6, 7 and 8.",
  },
  {
    prompt: "In a tally table, a row has 2 groups of five and 3 single strokes. How many is that?",
    options: ["10", "13", "23", "5"],
    answer: "13",
    explanation: "Each group of five counts 5: 2 × 5 = 10. Add the 3 single strokes: 13.",
  },
  {
    prompt: "A coin is tossed 20 times. It lands heads 12 times. How many times does it land tails?",
    options: ["8", "12", "32", "10"],
    answer: "8",
    explanation: "The heads and tails add up to the 20 tosses, so tails = 20 − 12 = 8.",
  },
  {
    prompt: "A coin is tossed 30 times and lands heads 18 times. How many more heads than tails are there?",
    options: ["12", "18", "3", "6"],
    answer: "6",
    explanation: "Tails = 30 − 18 = 12. Heads − tails = 18 − 12 = 6.",
  },
  {
    prompt: "Rolling a die 50 times gave these frequencies for the numbers 1 to 6: 7, 9, 5, 8, 11 and 10. Which number has the biggest frequency?",
    options: ["11", "6", "5", "1"],
    answer: "5",
    explanation: "The biggest frequency is 11, and it belongs to the number 5.",
  },
  {
    prompt: "In an experiment a die is rolled 50 times and the numbers 1 to 6 come up 7, 9, 5, 8, 11 and 10 times. Which number came up the fewest times?",
    options: ["5", "3", "1", "2"],
    answer: "3",
    explanation: "The smallest frequency is 5, and it belongs to the number 3.",
  },
  {
    prompt: "A die is rolled 50 times. The numbers 1, 2, 4, 5 and 6 came up 7, 9, 8, 11 and 10 times. How many times did 3 come up?",
    options: ["5", "3", "45", "15"],
    answer: "5",
    explanation: "The frequencies must add up to 50. 7 + 9 + 8 + 11 + 10 = 45, and 50 − 45 = 5.",
  },
  {
    prompt: "A spinner is spun 40 times. It lands on red 15 times, blue 12 times and yellow 6 times, and the rest is green. How many times is it green?",
    options: ["33", "13", "27", "7"],
    answer: "7",
    explanation: "Red, blue and yellow add up to 15 + 12 + 6 = 33. Green is the rest: 40 − 33 = 7.",
  },
  {
    prompt: "A coin experiment has 17 heads and 10 tails. How many times was the coin tossed?",
    options: ["7", "170", "27", "37"],
    answer: "27",
    explanation: "The total number of trials is all the outcomes added together: 17 + 10 = 27.",
  },
  {
    prompt: "Three groups toss a coin and write down how many tosses they did: 20, 20 and 10. They put their results together. How many tosses are there altogether?",
    options: ["40", "50", "30", "500"],
    answer: "50",
    explanation: "Collating means adding the results: 20 + 20 + 10 = 50 tosses.",
  },
  {
    prompt: "A die is rolled 20 times and the number 4 comes up 6 times. How many times does it not come up as a 4?",
    options: ["14", "6", "26", "4"],
    answer: "14",
    explanation: "The other outcomes make up the rest of the 20 rolls: 20 − 6 = 14.",
  },
];
// BANK:END

const Probability = () => (
  <CapsSubjectTopic
    title="Probability Experiments"
    subtitle="Listing outcomes, tally marks and comparing how often things happen"
    learnSteps={learnSteps}
    task="gr6-probability-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Probability;
