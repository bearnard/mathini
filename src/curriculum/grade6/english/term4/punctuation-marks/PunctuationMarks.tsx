import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence uses commas correctly in a list?",
    options: ["We bought, apples pears plums and, grapes.", "We bought apples pears, plums, and grapes,.", "We bought apples, pears, plums and grapes.", "We, bought apples, pears plums and grapes."],
    answer: "We bought apples, pears, plums and grapes.",
    explanation: "A comma separates the items of a list, and and joins the last two.",
  },
  {
    prompt: "Which mark is used to introduce a list?",
    options: ["colon", "comma", "apostrophe", "question mark"],
    answer: "colon",
    explanation: "A colon introduces a list.",
  },
  {
    prompt: "Which mark joins two closely related main clauses?",
    options: ["apostrophe", "question mark", "exclamation mark", "semi-colon"],
    answer: "semi-colon",
    explanation: "A semi-colon joins two main clauses that are closely related.",
  },
  {
    prompt: "You write I do not know. Which version uses a contraction correctly?",
    options: ["I dont know.", "I don't know.", "I do'nt know.", "I d'ont know."],
    answer: "I don't know.",
    explanation: "The apostrophe goes where the o is left out.",
  },
  {
    prompt: "What does it's mean in It's raining?",
    options: ["it has", "it was", "it is", "its"],
    answer: "it is",
    explanation: "It's is the contraction of it is.",
  },
  {
    prompt: "Which sentence uses its correctly to show that something belongs to the dog?",
    options: ["The dog wagged its tail.", "The dog wagged it's tail.", "The dog wagged its' tail.", "The dog wagged it tail."],
    answer: "The dog wagged its tail.",
    explanation: "Its without an apostrophe shows belonging.",
  },
  {
    prompt: "Which marks hold extra information in a sentence?",
    options: ["colons", "hyphens", "question marks", "brackets"],
    answer: "brackets",
    explanation: "Brackets, also called parentheses, hold extra information.",
  },
  {
    prompt: "A sentence introduces a list of three things. Which version places the colon correctly?",
    options: ["You will: need three things a pen, a ruler and a rubber.", "You will need three things: a pen, a ruler and a rubber.", "You will need three: things a pen, a ruler and a rubber.", "You will need: three things a pen a, ruler and a rubber."],
    answer: "You will need three things: a pen, a ruler and a rubber.",
    explanation: "A colon comes after the words that introduce the list.",
  },
  {
    prompt: "Which sentence joins two related clauses with a semi-colon correctly?",
    options: ["The bus; was late we walked home.", "The bus was late we; walked home.", "The bus was late; we walked home.", "The bus was; late we walked home."],
    answer: "The bus was late; we walked home.",
    explanation: "Each part on either side of the semi-colon is a complete clause.",
  },
  {
    prompt: "Which sentence uses brackets correctly?",
    options: ["My cousin (who lives in Durban) is visiting.", "My (cousin who lives in) Durban is visiting.", "My cousin who lives (in Durban is) visiting.", "(My cousin) who lives in Durban (is visiting)."],
    answer: "My cousin (who lives in Durban) is visiting.",
    explanation: "The words in brackets are extra and could be left out.",
  },
  {
    prompt: "Which sentence has the comma in the correct place after the introductory word?",
    options: ["However we, won the match.", "However we won, the match.", "However we won the, match.", "However, we won the match."],
    answer: "However, we won the match.",
    explanation: "A comma follows an introductory word such as however.",
  },
  {
    prompt: "What is the contraction of she will?",
    options: ["shell", "she'll", "she'l", "sh'ell"],
    answer: "she'll",
    explanation: "The apostrophe shows that the letters wi are left out.",
  },
  {
    prompt: "You write We cannot swim here. Which version uses a contraction correctly?",
    options: ["We cant swim here.", "We ca'nt swim here.", "We can't swim here.", "We cann't swim here."],
    answer: "We can't swim here.",
    explanation: "The apostrophe shows that the letters no are left out.",
  },
  {
    prompt: "Which mark ends a question?",
    options: ["question mark", "full stop", "colon", "exclamation mark"],
    answer: "question mark",
    explanation: "A question mark ends a question.",
  },
];

const PunctuationMarks = () => (
  <CapsSubjectTopic
    title="Punctuation: Commas, Colons, Semi-colons, Contractions and Brackets"
    subtitle="Commas, colons, semi-colons, apostrophes in contractions and brackets"
    learnSteps={learnSteps}
    task="eng6-punctuation-marks"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PunctuationMarks;
