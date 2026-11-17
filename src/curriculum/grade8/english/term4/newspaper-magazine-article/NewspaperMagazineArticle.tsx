import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a headline do?",
    options: ["Catches attention in few words", "Gives the whole story for a task in use", "Names the writer in a program at work", "Gives the date on a device in a file"],
    answer: "Catches attention in few words",
    explanation: "It is short. The model text in the lesson shows this.",
  },
  {
    prompt: "What is a by-line?",
    options: ["The headline at work", "The writer's name", "The lead in a file on a system", "The ending for a user"],
    answer: "The writer's name",
    explanation: "It credits the writer. The model text in the lesson shows this.",
  },
  {
    prompt: "What is the lead of an article?",
    options: ["The last paragraph of the text", "The headline above the text", "The opening with main facts", "A picture beside the text"],
    answer: "The opening with main facts",
    explanation: "It answers who, what, where, when, why. The model text in the lesson shows this.",
  },
  {
    prompt: "Which facts does a lead give?",
    options: ["The five Ws", "The whole story in detail", "The headline's words again", "The writer's name and date"],
    answer: "The five Ws",
    explanation: "A lead answers who, what, where, when and why. The model text in the lesson shows this.",
  },
  {
    prompt: "In what order is the body written?",
    options: ["From least to most important", "Random order", "From most to least important", "Alphabetical order"],
    answer: "From most to least important",
    explanation: "Important facts come first. The model text in the lesson shows this.",
  },
  {
    prompt: "What do quotation marks show?",
    options: ["A person's exact words", "The headline in a file on a system", "The by-line for a user at a school", "The date in a lab for a task"],
    answer: "A person's exact words",
    explanation: "They hold a quotation. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is a fact?",
    options: ["The school looks nicer on a device in a file", "It was a great day in use for a user", "Everyone loved it at work in a lab", "Learners planted 200 trees on Saturday"],
    answer: "Learners planted 200 trees on Saturday",
    explanation: "A fact can be checked. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is an opinion?",
    options: ["200 trees were planted for a user at a school", "It happened on Saturday in a lab for a task", "The school looks much nicer now", "The club has a chairperson on a system"],
    answer: "The school looks much nicer now",
    explanation: "It is what someone thinks. The model text in the lesson shows this.",
  },
  {
    prompt: "How should an opinion be given in a news article?",
    options: ["As a fact in a file on a system", "As a headline for a user", "As someone's words", "Not at all in a lab for a task"],
    answer: "As someone's words",
    explanation: "The principal said. The model text in the lesson shows this.",
  },
  {
    prompt: "Which tense do news articles mainly use?",
    options: ["The future tense", "Commands", "The past tense", "Questions"],
    answer: "The past tense",
    explanation: "They report what happened. The model text in the lesson shows this.",
  },
  {
    prompt: "Which sentence suits a news article?",
    options: ["I think trees are lovely! on a device in a file", "Wow, what a day! in use for a user", "Trees rock! at work in a lab", "Learners planted 200 trees on Saturday."],
    answer: "Learners planted 200 trees on Saturday.",
    explanation: "It states a fact. The model text in the lesson shows this.",
  },
  {
    prompt: "How does a magazine article differ?",
    options: ["It may be longer and more personal", "It has no words in a program at work", "It has no headline on a device in a file", "It is a poem in use for a user"],
    answer: "It may be longer and more personal",
    explanation: "It can add description. The model text in the lesson shows this.",
  },
  {
    prompt: "Where should the main fact be?",
    options: ["In the lead", "At the very end", "In the by-line", "Nowhere"],
    answer: "In the lead",
    explanation: "Readers see it first. The model text in the lesson shows this.",
  },
  {
    prompt: "Why use short sentences?",
    options: ["They are secret for a task", "They are rude in a program", "They are easy to read", "They hide facts on a device"],
    answer: "They are easy to read",
    explanation: "Clear writing suits news. The model text in the lesson shows this.",
  },
];

const NewspaperMagazineArticle = () => (
  <CapsSubjectTopic
    title="Writing a Newspaper or Magazine Article"
    subtitle="The headline and by-line, the lead that answers who, what, where, when and why, the body, quotations, and fact and opinion"
    learnSteps={learnSteps}
    task="gr8-newspaper-magazine-article-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default NewspaperMagazineArticle;
