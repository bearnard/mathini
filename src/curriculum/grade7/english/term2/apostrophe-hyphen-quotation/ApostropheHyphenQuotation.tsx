import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "How do you write the bag that belongs to one girl?",
    options: ["the girls bag", "the girls' bag", "the girl's bag", "the girl bag's"],
    answer: "the girl's bag",
    explanation: "For one owner, add apostrophe s.",
  },
  {
    prompt: "How do you write the bags that belong to two girls?",
    options: ["the girls' bags", "the girl's bags", "the girls's bags", "the girls bags'"],
    answer: "the girls' bags",
    explanation: "For a plural noun that ends in s, add only an apostrophe.",
  },
  {
    prompt: "How do you write the toys that belong to the children?",
    options: ["the childrens toys", "the childrens' toys", "the children toys'", "the children's toys"],
    answer: "the children's toys",
    explanation: "Children is a plural that does not end in s, so add apostrophe s.",
  },
  {
    prompt: "Which sentence uses its correctly?",
    options: ["The dog hurt it's paw.", "The dog hurt its paw.", "The dog hurt its' paw.", "The dog hurt it paw."],
    answer: "The dog hurt its paw.",
    explanation: "Its without an apostrophe shows belonging.",
  },
  {
    prompt: "Which sentence uses it's correctly?",
    options: ["Its a sunny day.", "It's' a sunny day.", "It's a sunny day.", "Its' a sunny day."],
    answer: "It's a sunny day.",
    explanation: "It's is the contraction of it is.",
  },
  {
    prompt: "How do you write the number 21 in words?",
    options: ["twenty-one", "twentyone", "twenty one.", "twenty-one-"],
    answer: "twenty-one",
    explanation: "Numbers from twenty-one to ninety-nine have a hyphen.",
  },
  {
    prompt: "Which phrase uses a hyphen correctly?",
    options: ["a well known-singer", "a-well known singer", "a well-known-singer", "a well-known singer"],
    answer: "a well-known singer",
    explanation: "A compound adjective before a noun takes a hyphen.",
  },
  {
    prompt: "Which sentence uses quotation marks correctly for spoken words?",
    options: ["Mpho said, \"I am ready\".", "Mpho said, \"I am ready.\"", "Mpho said \"I am ready.\"", "Mpho said, I am ready."],
    answer: "Mpho said, \"I am ready.\"",
    explanation: "The full stop goes inside the closing marks.",
  },
  {
    prompt: "Where do the comma and the full stop go at the end of spoken words?",
    options: ["outside the closing quotation marks", "before the opening quotation marks", "inside the closing quotation marks", "after the speaker's name"],
    answer: "inside the closing quotation marks",
    explanation: "End punctuation of the spoken words goes inside the marks.",
  },
  {
    prompt: "How do you write the boots of the soccer players, when there are many players?",
    options: ["the soccer players' boots", "the soccer player's boots", "the soccer players boots", "the soccer players's boots"],
    answer: "the soccer players' boots",
    explanation: "A plural noun that ends in s takes only an apostrophe.",
  },
  {
    prompt: "Which sentence uses an apostrophe incorrectly?",
    options: ["The cat's tail is long.", "It's cold today.", "The children's books are here.", "Tomato's are cheap today."],
    answer: "Tomato's are cheap today.",
    explanation: "A plural does not take an apostrophe: tomatoes.",
  },
  {
    prompt: "Where may a word be divided at the end of a line?",
    options: ["After the very first letter of the word", "Between syllables with a hyphen", "In the middle of a syllable", "Before the last letter"],
    answer: "Between syllables with a hyphen",
    explanation: "Divide a word between syllables and add a hyphen.",
  },
  {
    prompt: "What is the contraction of he is?",
    options: ["hes", "h'es", "he's", "he'is"],
    answer: "he's",
    explanation: "The apostrophe takes the place of the letter i.",
  },
  {
    prompt: "Which marks surround the exact words that someone speaks?",
    options: ["quotation marks", "square brackets", "hyphens", "colons"],
    answer: "quotation marks",
    explanation: "Quotation marks show the exact words.",
  },
];

const ApostropheHyphenQuotation = () => (
  <CapsSubjectTopic
    title={"Apostrophe, Hyphen and Quotation Marks"}
    subtitle={"The apostrophe of possession, contractions, the hyphen and quotation marks"}
    learnSteps={learnSteps}
    task={"gr7-apostrophe-hyphen-quotation-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ApostropheHyphenQuotation;
