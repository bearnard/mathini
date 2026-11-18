import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the plural of the noun box?",
    options: ["boxs", "boxies", "boxes", "boxen"],
    answer: "boxes",
    explanation: "Nouns that end in x add es.",
  },
  {
    prompt: "What is the plural of the noun story?",
    options: ["stories", "storys", "storyes", "storeys"],
    answer: "stories",
    explanation: "Change y to i and add es after a consonant.",
  },
  {
    prompt: "What is the plural of the noun knife?",
    options: ["knifes", "knifs", "knifies", "knives"],
    answer: "knives",
    explanation: "Many nouns that end in fe change to ves.",
  },
  {
    prompt: "What is the plural of the noun child?",
    options: ["childs", "children", "childes", "childrens"],
    answer: "children",
    explanation: "Child is an irregular noun.",
  },
  {
    prompt: "Which word is spelt correctly after adding ing to make?",
    options: ["makeing", "makking", "making", "makin"],
    answer: "making",
    explanation: "Drop the silent e before ing.",
  },
  {
    prompt: "Which word is spelt correctly after adding ed to stop?",
    options: ["stopped", "stoped", "stopt", "stopping"],
    answer: "stopped",
    explanation: "Double the consonant after a short vowel.",
  },
  {
    prompt: "Which word is spelt correctly after adding ed to carry?",
    options: ["carryed", "carred", "carrid", "carried"],
    answer: "carried",
    explanation: "Change y to i before ed.",
  },
  {
    prompt: "Which word is spelt in the South African way?",
    options: ["color", "colour", "colur", "coulor"],
    answer: "colour",
    explanation: "South African English uses the British spelling colour.",
  },
  {
    prompt: "Which spelling is correct in South African English?",
    options: ["favorite", "favurite", "favourite", "favourrite"],
    answer: "favourite",
    explanation: "South African English uses favourite.",
  },
  {
    prompt: "Which word completes the sentence: You must ___ your reading every day?",
    options: ["practise", "practice", "practis", "practize"],
    answer: "practise",
    explanation: "Practise is the verb.",
  },
  {
    prompt: "Which word completes the sentence: Soccer ___ starts at four?",
    options: ["practise", "practis", "practize", "practice"],
    answer: "practice",
    explanation: "Practice is the noun.",
  },
  {
    prompt: "Which word has a silent letter at the beginning?",
    options: ["table", "knife", "window", "garden"],
    answer: "knife",
    explanation: "The k in knife is silent.",
  },
  {
    prompt: "What does n. mean in a dictionary entry?",
    options: ["name", "number", "noun", "new"],
    answer: "noun",
    explanation: "N. stands for noun.",
  },
  {
    prompt: "What do guide words at the top of a dictionary page show?",
    options: ["The first and last word on that page", "The meaning of each word on that page", "The page number of each entry", "The name of the dictionary writer"],
    answer: "The first and last word on that page",
    explanation: "Guide words help you to find the page of a word.",
  },
];

const SpellingDictionary = () => (
  <CapsSubjectTopic
    title={"Spelling Patterns, Rules and Dictionary Use"}
    subtitle={"Plurals, adding endings, silent letters, South African spelling and using a dictionary"}
    learnSteps={learnSteps}
    task={"gr7-spelling-dictionary-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SpellingDictionary;
