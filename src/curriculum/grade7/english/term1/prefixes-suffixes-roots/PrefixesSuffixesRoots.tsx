import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does the root port mean in the words transport and export?",
    options: ["write", "hear", "carry", "say"],
    answer: "carry",
    explanation: "The root port means carry.",
  },
  {
    prompt: "What does the root dict mean in the word predict?",
    options: ["say", "carry", "hear", "write"],
    answer: "say",
    explanation: "The root dict means say.",
  },
  {
    prompt: "What does the root aud mean in the word audience?",
    options: ["carry", "write", "say", "hear"],
    answer: "hear",
    explanation: "The root aud means hear.",
  },
  {
    prompt: "What does the root scrib mean in the word describe?",
    options: ["carry", "write", "hear", "say"],
    answer: "write",
    explanation: "Scrib or script means write.",
  },
  {
    prompt: "What does the prefix re mean in the word rebuild?",
    options: ["not", "before", "again", "under"],
    answer: "again",
    explanation: "Re means again.",
  },
  {
    prompt: "Which prefix means before?",
    options: ["pre", "sub", "inter", "anti"],
    answer: "pre",
    explanation: "Pre means before.",
  },
  {
    prompt: "Which prefix means between?",
    options: ["trans", "extra", "super", "inter"],
    answer: "inter",
    explanation: "Inter means between, as in international.",
  },
  {
    prompt: "Which prefix means against?",
    options: ["pre", "anti", "sub", "inter"],
    answer: "anti",
    explanation: "Anti means against.",
  },
  {
    prompt: "Which prefix makes the word possible mean the opposite?",
    options: ["in", "non", "im", "dis"],
    answer: "im",
    explanation: "Before p, in becomes im: impossible.",
  },
  {
    prompt: "What does the suffix less mean in the word careless?",
    options: ["without", "full of", "again", "before"],
    answer: "without",
    explanation: "Less means without.",
  },
  {
    prompt: "Which suffix means full of?",
    options: ["less", "ment", "tion", "ous"],
    answer: "ous",
    explanation: "Ous means full of, as in dangerous.",
  },
  {
    prompt: "Which word has the correct spelling after adding ing to hope?",
    options: ["hopeing", "hoping", "hopping", "hopeng"],
    answer: "hoping",
    explanation: "Drop the silent e before a suffix that starts with a vowel.",
  },
  {
    prompt: "Which suffix makes the noun in the word enjoyment?",
    options: ["ness", "ous", "ment", "able"],
    answer: "ment",
    explanation: "Ment turns a verb into a noun.",
  },
  {
    prompt: "What is the root of the word unhappiness?",
    options: ["happy", "unhappi", "ness", "un"],
    answer: "happy",
    explanation: "The root is happy; the prefix is un and the suffix is ness.",
  },
];

const PrefixesSuffixesRoots = () => (
  <CapsSubjectTopic
    title={"Prefixes, Suffixes and Roots"}
    subtitle={"Roots, common prefixes and suffixes, and four Latin and Greek roots"}
    learnSteps={learnSteps}
    task={"gr7-prefixes-suffixes-roots-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PrefixesSuffixesRoots;
