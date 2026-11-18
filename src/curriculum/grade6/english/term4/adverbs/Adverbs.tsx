import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In The tortoise crawled slowly, which word is an adverb?",
    options: ["tortoise", "crawled", "slowly", "The"],
    answer: "slowly",
    explanation: "Slowly tells how the tortoise crawled.",
  },
  {
    prompt: "Which adverb tells how often something happens?",
    options: ["always", "quickly", "yesterday", "outside"],
    answer: "always",
    explanation: "Always is an adverb of frequency.",
  },
  {
    prompt: "Which adverb of place completes: The children are playing ___.",
    options: ["carefully", "never", "very", "outside"],
    answer: "outside",
    explanation: "Outside tells where the children are playing.",
  },
  {
    prompt: "In The soup is very hot, which word is an adverb of degree?",
    options: ["soup", "very", "is", "hot"],
    answer: "very",
    explanation: "Very tells how hot the soup is.",
  },
  {
    prompt: "In The learners will leave tomorrow, what kind of adverb is tomorrow?",
    options: ["Adverb of place", "Adverb of manner", "Adverb of time", "Adverb of degree"],
    answer: "Adverb of time",
    explanation: "Tomorrow tells when the learners will leave.",
  },
  {
    prompt: "Which sentence contains an adverb of manner?",
    options: ["She sang beautifully.", "She sang yesterday.", "She sang here.", "She sang for an hour."],
    answer: "She sang beautifully.",
    explanation: "Beautifully tells how she sang.",
  },
  {
    prompt: "Which phrase is an adverb of duration?",
    options: ["every day", "in the garden", "very quickly", "for two hours"],
    answer: "for two hours",
    explanation: "For two hours tells how long.",
  },
  {
    prompt: "What does an adverb do?",
    options: ["Names a person or a thing in the sentence", "Tells more about a verb or an adjective", "Takes the place of a noun", "Joins two sentences together"],
    answer: "Tells more about a verb or an adjective",
    explanation: "An adverb adds meaning to a verb, an adjective or another adverb.",
  },
  {
    prompt: "Which adverb of manner can be made from the adjective careful?",
    options: ["carefuly", "carefullly", "carefully", "careful"],
    answer: "carefully",
    explanation: "Add ly to careful to make carefully.",
  },
  {
    prompt: "Which adverb of frequency means not at any time?",
    options: ["never", "always", "often", "sometimes"],
    answer: "never",
    explanation: "Never means not at any time.",
  },
  {
    prompt: "Which sentence uses an adverb of degree correctly?",
    options: ["The test too was difficult for her.", "The test difficult was too for her.", "The test was difficultly for her.", "The test was too difficult for her."],
    answer: "The test was too difficult for her.",
    explanation: "Too tells how difficult the test was.",
  },
  {
    prompt: "Which adverb answers the question where?",
    options: ["slowly", "there", "daily", "quite"],
    answer: "there",
    explanation: "There tells where.",
  },
  {
    prompt: "Which adverb answers the question when?",
    options: ["here", "softly", "yesterday", "downstairs"],
    answer: "yesterday",
    explanation: "Yesterday tells when.",
  },
  {
    prompt: "In He ran quite slowly, which word modifies the adverb slowly?",
    options: ["quite", "He", "ran", "slowly"],
    answer: "quite",
    explanation: "Quite tells how slowly he ran.",
  },
];

const Adverbs = () => (
  <CapsSubjectTopic
    title="Adverbs"
    subtitle="Adverbs of manner, time, place, degree, duration and frequency"
    learnSteps={learnSteps}
    task="eng6-adverbs"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Adverbs;
