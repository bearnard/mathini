import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You write an article about a school sports day. What goes in the headline?",
    options: ["A long list of the winners for a task", "Your opinion of the day in a program", "The names of the teachers on a device", "A short, clear name for the story"],
    answer: "A short, clear name for the story",
    explanation: "A headline names the story in a few clear words.",
  },
  {
    prompt: "You write By Thandi Nkosi under a headline. What is this?",
    options: ["A lead", "A caption", "A by-line", "A quotation"],
    answer: "A by-line",
    explanation: "A by-line shows who wrote the article.",
  },
  {
    prompt: "Which paragraph gives the main facts of the story?",
    options: ["The last paragraph", "The headline", "The lead paragraph", "The by-line"],
    answer: "The lead paragraph",
    explanation: "The lead answers who, what, where, when and why.",
  },
  {
    prompt: "Your lead says who, what, where and when. Which question is still missing?",
    options: ["How old", "Why", "How tall", "Whose book"],
    answer: "Why",
    explanation: "The five Ws include why, which tells the reason.",
  },
  {
    prompt: "Which sentence is a fact?",
    options: ["The trees are the best in the world", "Everyone loved the trees", "Trees are always beautiful", "Twenty trees were planted on Friday"],
    answer: "Twenty trees were planted on Friday",
    explanation: "A fact can be checked, such as a number and a day.",
  },
  {
    prompt: "Which sentence is an opinion that a reporter should avoid?",
    options: ["The event started at nine at work", "It was a wonderful morning", "Twenty trees were planted in a file", "The principal spoke first for a user"],
    answer: "It was a wonderful morning",
    explanation: "Wonderful is a judgement and not a checked fact.",
  },
  {
    prompt: "You want to show what the principal said. What do you use?",
    options: ["A quotation in inverted commas", "A new headline at work in a lab", "A by-line in a file on a system", "A question mark for a user at a school"],
    answer: "A quotation in inverted commas",
    explanation: "A quotation gives the exact words of the speaker.",
  },
  {
    prompt: "Which tense do you use to report an event that already happened?",
    options: ["The future tense", "The present tense", "The past tense", "A command"],
    answer: "The past tense",
    explanation: "News reports tell what happened, so they use the past tense.",
  },
  {
    prompt: "Which person do you use when you write a news article?",
    options: ["The first person", "The second person", "The third person", "A mix of all"],
    answer: "The third person",
    explanation: "Reporters write he, she, they and the names of people.",
  },
  {
    prompt: "Where do you put the most important facts?",
    options: ["At the very end on a system in a program", "In the by-line at a school on a device", "At the start, in the lead", "After the quotation for a task"],
    answer: "At the start, in the lead",
    explanation: "The lead gives the main facts first, and details follow.",
  },
  {
    prompt: "You have a long, unimportant detail. Where does it belong?",
    options: ["Near the end of the body", "In the headline at work in a lab", "In the lead in a file on a system", "In the by-line for a user at a school"],
    answer: "Near the end of the body",
    explanation: "Details go after the main facts, in order of importance.",
  },
  {
    prompt: "What is the first step before you write an article?",
    options: ["Write the by-line", "Check the spelling", "Plan the five Ws", "Choose a picture"],
    answer: "Plan the five Ws",
    explanation: "Planning gives you the facts to start with.",
  },
  {
    prompt: "You finish writing. What should you do next?",
    options: ["Check names, numbers and tense", "Add more of your opinions for a task", "Hide the by-line again in a program", "Change the date of the event on a device"],
    answer: "Check names, numbers and tense",
    explanation: "Checking makes the article reliable.",
  },
  {
    prompt: "Which headline is best for a news article?",
    options: ["Learners Plant Trees at School", "Trees", "The Most Wonderful Tree Day Ever Seen by Anyone", "What do you think about trees and school"],
    answer: "Learners Plant Trees at School",
    explanation: "A good headline is short and tells the story.",
  },
];

const NewspaperArticle = () => (
  <CapsSubjectTopic
    title="Writing a Newspaper Article"
    subtitle="Headline, by-line, the lead paragraph, the five Ws and writing in the third person"
    learnSteps={learnSteps}
    task="eng6-newspaper-article"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default NewspaperArticle;
