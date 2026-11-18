import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is written in direct speech?",
    options: ["Thabo said that he liked soccer.", "Thabo likes soccer very much.", "Thabo said, \"I like soccer.\"", "Thabo and I like soccer."],
    answer: "Thabo said, \"I like soccer.\"",
    explanation: "Direct speech gives the exact words inside quotation marks.",
  },
  {
    prompt: "Which sentence is in indirect speech?",
    options: ["Mpho said that he was hungry, so he left.", "Mpho said, \"I am hungry so I will leave now.\"", "Mpho shouted, \"Come here and sit down!\"", "\"I am hungry so I will leave,\" said Mpho."],
    answer: "Mpho said that he was hungry, so he left.",
    explanation: "Indirect speech reports the words without quotation marks.",
  },
  {
    prompt: "Which marks surround the words that a speaker says in direct speech?",
    options: ["Pairs of brackets", "Colons", "Hyphens", "Quotation marks"],
    answer: "Quotation marks",
    explanation: "Quotation marks, also called inverted commas, show the exact words.",
  },
  {
    prompt: "Use the rule that the verb moves back one tense. Lerato said, \"I am hungry.\" becomes Lerato said that she ___ hungry.",
    options: ["is", "was", "will be", "has been"],
    answer: "was",
    explanation: "Am moves back one tense to was.",
  },
  {
    prompt: "In indirect speech, the time word tomorrow changes to what?",
    options: ["the day before", "yesterday", "the next day", "this morning"],
    answer: "the next day",
    explanation: "After a past reporting verb, tomorrow becomes the next day.",
  },
  {
    prompt: "Sipho said, \"I am late.\" Complete the indirect speech: Sipho said that ___ was late.",
    options: ["he", "I", "she", "they"],
    answer: "he",
    explanation: "The pronoun I becomes he when a boy is reporting about himself.",
  },
  {
    prompt: "Which sentence is punctuated correctly?",
    options: ["Lerato said \"I am ready\".", "Lerato said, I am ready.", "Lerato said: \"i am ready\".", "Lerato said, \"I am ready.\""],
    answer: "Lerato said, \"I am ready.\"",
    explanation: "Use a comma after said, quotation marks, a capital letter and a full stop inside the marks.",
  },
  {
    prompt: "Another name for quotation marks is...",
    options: ["full stops", "inverted commas", "capital letters", "reporting verbs"],
    answer: "inverted commas",
    explanation: "Quotation marks are also called inverted commas.",
  },
  {
    prompt: "With what kind of letter does the first spoken word in direct speech begin?",
    options: ["A small lower-case letter", "A bold letter", "A capital letter", "A number"],
    answer: "A capital letter",
    explanation: "The spoken words begin with a capital letter.",
  },
  {
    prompt: "Which of these is not used in indirect speech?",
    options: ["Quotation marks", "A reporting verb", "A changed pronoun", "A changed tense"],
    answer: "Quotation marks",
    explanation: "Indirect speech has no quotation marks.",
  },
  {
    prompt: "Use the rules: the verb moves back, the pronoun changes and tomorrow becomes the next day. Which sentence reports She said, \"We will win tomorrow\"?",
    options: ["She said that they will win tomorrow afternoon.", "She said that we would win tomorrow.", "She said that they won the next day.", "She said that they would win the next day."],
    answer: "She said that they would win the next day.",
    explanation: "We becomes they, will becomes would and tomorrow becomes the next day.",
  },
  {
    prompt: "Where does the full stop go at the end of the spoken words in direct speech?",
    options: ["Outside the closing quotation marks", "Inside the closing quotation marks", "Before the opening quotation marks", "After the speaker's name only"],
    answer: "Inside the closing quotation marks",
    explanation: "The final punctuation of the spoken words goes inside the marks.",
  },
  {
    prompt: "Which sentence shows a question in direct speech with the correct punctuation?",
    options: ["\"Are you ready.\" asked Lerato.", "\"Are you ready?\", asked Lerato.", "\"Are you ready?\" asked Lerato.", "Are you ready? asked Lerato."],
    answer: "\"Are you ready?\" asked Lerato.",
    explanation: "A question mark ends the spoken question inside the quotation marks.",
  },
  {
    prompt: "A reporter changes the place word here when reporting speech. What does it become?",
    options: ["there", "now", "then", "today"],
    answer: "there",
    explanation: "After a past reporting verb, here becomes there.",
  },
];

const DirectIndirectSpeech = () => (
  <CapsSubjectTopic
    title="Direct and Indirect Speech"
    subtitle="Direct speech with quotation marks, indirect speech and the changes it needs"
    learnSteps={learnSteps}
    task="eng6-direct-indirect-speech"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default DirectIndirectSpeech;
