import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which part of a news article names the writer?",
    options: ["The headline", "The lead", "The by-line", "The caption"],
    answer: "The by-line",
    explanation: "The by-line shows who wrote the article.",
  },
  {
    prompt: "Which paragraph of a news article gives the most important facts?",
    options: ["The lead", "The last paragraph", "The headline", "The by-line"],
    answer: "The lead",
    explanation: "The lead answers who, what, where, when and why.",
  },
  {
    prompt: "What is the inverted pyramid?",
    options: ["The least important facts come first, then the rest", "The headline comes last, after the body", "The writer's opinion comes first, then the facts", "The key facts come first, the details last"],
    answer: "The key facts come first, the details last",
    explanation: "The facts are ordered from most to least important.",
  },
  {
    prompt: "Which question does the lead usually not answer?",
    options: ["Who was involved in the event?", "What does the writer think?", "What happened?", "When did it happen?"],
    answer: "What does the writer think?",
    explanation: "A news report gives facts, not the writer's opinion.",
  },
  {
    prompt: "Which tense is the body of a news article written in?",
    options: ["The future tense", "The imperative", "The past tense", "The present perfect continuous"],
    answer: "The past tense",
    explanation: "A news article reports what has already happened.",
  },
  {
    prompt: "Which person is used in a news report?",
    options: ["The third person", "The first person", "The second person", "No person"],
    answer: "The third person",
    explanation: "A news report uses he, she, they and names.",
  },
  {
    prompt: "Which headline is best?",
    options: ["A Wonderful Day for Everyone at the School", "Trees", "What do you think about trees and school today", "Learners Plant Trees"],
    answer: "Learners Plant Trees",
    explanation: "A good headline is short and names the story.",
  },
  {
    prompt: "Which sentence gives a fact?",
    options: ["The trees were the most beautiful ever planted.", "Learners planted twenty trees on Friday.", "Everyone loved the lovely day.", "It was a wonderful idea."],
    answer: "Learners planted twenty trees on Friday.",
    explanation: "A fact can be checked.",
  },
  {
    prompt: "Which sentence is a direct quotation?",
    options: ["The principal said that they wanted a green school.", "The principal wanted a green school.", "The principal said, \"We want a green school.\"", "A green school is wanted."],
    answer: "The principal said, \"We want a green school.\"",
    explanation: "A direct quotation gives the exact words in quotation marks.",
  },
  {
    prompt: "Why do reporters name the speaker of a quotation?",
    options: ["So that readers know who said it", "So that the article is longer", "So that the headline is shorter", "So that the by-line can be left out"],
    answer: "So that readers know who said it",
    explanation: "Attribution tells the reader who said the words.",
  },
  {
    prompt: "Which opening paragraph tells the reader the key facts of the event?",
    options: ["Some trees were planted at a school, and everyone had a good time.", "Trees are good for the world, and we should plant more.", "It was a sunny Friday.", "Learners of Ward 12 Primary planted twenty trees on Friday."],
    answer: "Learners of Ward 12 Primary planted twenty trees on Friday.",
    explanation: "It answers who, what, where, when and why.",
  },
  {
    prompt: "What should you check before you hand in a news article?",
    options: ["The colour of the page", "Names, dates and numbers", "The size of the margin", "The number of pages in the newspaper"],
    answer: "Names, dates and numbers",
    explanation: "Facts must be accurate.",
  },
  {
    prompt: "Which words are usually left out of a headline?",
    options: ["The names of the people involved", "The main verb", "Small words such as the and a", "The place"],
    answer: "Small words such as the and a",
    explanation: "Headlines are short, so small words are dropped.",
  },
  {
    prompt: "Which is a loaded word that does not belong in a news report?",
    options: ["disgraceful", "planted", "Wednesday afternoon", "twenty"],
    answer: "disgraceful",
    explanation: "A news report uses neutral language.",
  },
];

const NewspaperArticle = () => (
  <CapsSubjectTopic
    title={"Writing a Newspaper Article"}
    subtitle={"The parts of a news article, the lead and the five Ws, quotations and headlines"}
    learnSteps={learnSteps}
    task={"gr7-newspaper-article-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default NewspaperArticle;
