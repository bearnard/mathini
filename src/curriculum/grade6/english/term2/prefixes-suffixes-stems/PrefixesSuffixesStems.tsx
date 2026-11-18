import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which prefix means not in the word unlucky?",
    options: ["lucky", "ky", "un", "luck"],
    answer: "un",
    explanation: "The prefix un means not.",
  },
  {
    prompt: "What is the stem of the word kindly?",
    options: ["kind", "kindly", "ly", "kin"],
    answer: "kind",
    explanation: "The stem is the main part of the word, and ly is the suffix.",
  },
  {
    prompt: "Which suffix means without?",
    options: ["ful", "ness", "ly", "less"],
    answer: "less",
    explanation: "Less means without, as in careless.",
  },
  {
    prompt: "What does the prefix re mean in rebuild?",
    options: ["not", "again", "wrongly", "before"],
    answer: "again",
    explanation: "Re means again.",
  },
  {
    prompt: "Which word has a prefix?",
    options: ["teacher", "helpful", "misspell", "happiness"],
    answer: "misspell",
    explanation: "Mis is the prefix. The other words have suffixes.",
  },
  {
    prompt: "Which word has a suffix that means full of?",
    options: ["helpful", "helpless", "helper", "helping"],
    answer: "helpful",
    explanation: "Ful means full of.",
  },
  {
    prompt: "Which prefix makes the word agree mean the opposite?",
    options: ["un", "re", "pre", "dis"],
    answer: "dis",
    explanation: "The word disagree is the opposite of agree.",
  },
  {
    prompt: "Which word is spelt correctly after adding ly to quick?",
    options: ["quicky", "quickly", "quickely", "quickley"],
    answer: "quickly",
    explanation: "You add ly to the stem quick without changing the stem.",
  },
  {
    prompt: "Which list is in alphabetical order?",
    options: ["banana, apple, cherry, date", "cherry, apple, banana, date", "apple, banana, cherry, date", "date, cherry, banana, apple"],
    answer: "apple, banana, cherry, date",
    explanation: "Alphabetical order goes from a to z.",
  },
  {
    prompt: "Where may a word be divided at the end of a line?",
    options: ["Between syllables, with a hyphen", "After the very first letter of the word", "Before the last letter", "In the middle of any syllable"],
    answer: "Between syllables, with a hyphen",
    explanation: "Divide a word between syllables and write a hyphen, as in beau-ti-ful.",
  },
  {
    prompt: "At the top of a dictionary page you see two words in heavy print. What are they called?",
    options: ["Stem words", "Prefix words", "Syllable markers", "Guide words"],
    answer: "Guide words",
    explanation: "Guide words show the first and the last word on the page.",
  },
  {
    prompt: "Which word means to write again?",
    options: ["unwrite", "rewrite", "diswrite", "writeless"],
    answer: "rewrite",
    explanation: "Re means again.",
  },
  {
    prompt: "Which suffix changes teach into a word for a person who teaches?",
    options: ["ful", "less", "er", "ness"],
    answer: "er",
    explanation: "Teacher is a person who teaches.",
  },
  {
    prompt: "What is a prefix?",
    options: ["Letters added to the start of a word", "Letters added to the end of a word to change it", "The main part of a word, its root", "A word that means the same thing"],
    answer: "Letters added to the start of a word",
    explanation: "A prefix is added at the beginning of a word.",
  },
];

const PrefixesSuffixesStems = () => (
  <CapsSubjectTopic
    title="Prefixes, Suffixes and Stems"
    subtitle="Stems, prefixes, suffixes, word division and dictionary use"
    learnSteps={learnSteps}
    task="eng6-prefixes-suffixes-stems"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PrefixesSuffixesStems;
