import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which word completes the sentence correctly: The learners packed ___ bags.",
    options: ["there", "they're", "their", "thier"],
    answer: "their",
    explanation: "Their shows that the bags belong to the learners.",
  },
  {
    prompt: "Which word completes the sentence correctly: Put the books over ___.",
    options: ["there", "their", "they're", "thare"],
    answer: "there",
    explanation: "There shows a place.",
  },
  {
    prompt: "Which word completes the sentence correctly: She has ___ brothers.",
    options: ["to", "too", "tow", "two"],
    answer: "two",
    explanation: "Two is the number 2.",
  },
  {
    prompt: "Which word completes the sentence correctly: He is ___ tired to play.",
    options: ["to", "too", "two", "tow"],
    answer: "too",
    explanation: "Too means very or more than needed.",
  },
  {
    prompt: "Which word means the opposite of left?",
    options: ["write", "rite", "right", "wright"],
    answer: "right",
    explanation: "Right is the word that means the opposite of left.",
  },
  {
    prompt: "Which word means to put words on paper?",
    options: ["write", "right", "rite", "wright"],
    answer: "write",
    explanation: "Write means to put words on paper.",
  },
  {
    prompt: "What are words called that sound the same but are spelt differently?",
    options: ["homonyms", "synonyms", "palindromes", "homophones"],
    answer: "homophones",
    explanation: "Homophones sound the same and are spelt differently.",
  },
  {
    prompt: "What are words called that have the same spelling and sound but different meanings?",
    options: ["homophones", "homonyms", "synonyms", "antonyms"],
    answer: "homonyms",
    explanation: "Homonyms are spelt and sound the same, with different meanings.",
  },
  {
    prompt: "In He sat on the bank of the river, what does bank mean?",
    options: ["a place that keeps your money safe", "a flying animal", "the side of a river", "a game"],
    answer: "the side of a river",
    explanation: "The sentence tells you that the meaning is the side of a river.",
  },
  {
    prompt: "In The bat flew out of the cave, what does bat mean?",
    options: ["a flying animal", "wood for hitting a ball", "a river side", "a place for money"],
    answer: "a flying animal",
    explanation: "A flying animal can fly out of a cave.",
  },
  {
    prompt: "In which sentence is the word cold used literally?",
    options: ["She has a cold heart.", "He is a cold fish.", "She gave him a very cold unfriendly stare.", "She drank a cold glass of water."],
    answer: "She drank a cold glass of water.",
    explanation: "Cold describes the temperature in the first sentence.",
  },
  {
    prompt: "The exam was a walk in the park. What does this mean?",
    options: ["The exam was outside.", "The exam was easy.", "The exam was very long.", "The exam was cancelled."],
    answer: "The exam was easy.",
    explanation: "A walk in the park is a figurative phrase meaning easy.",
  },
  {
    prompt: "In the riddle What has a mouth but never eats?, which word has two meanings?",
    options: ["has", "never", "mouth", "eats"],
    answer: "mouth",
    explanation: "Mouth can be part of the face or the end of a river.",
  },
  {
    prompt: "Which pair are homophones?",
    options: ["sea and see", "cat and dog", "big and small", "hot and cold"],
    answer: "sea and see",
    explanation: "Sea and see sound the same and are spelt differently.",
  },
];

const MultipleMeanings = () => (
  <CapsSubjectTopic
    title={"Words with More Than One Meaning"}
    subtitle={"Homophones, homonyms, polysemy, literal and figurative meaning, and riddles"}
    learnSteps={learnSteps}
    task={"gr7-multiple-meanings-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MultipleMeanings;
