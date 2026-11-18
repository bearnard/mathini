import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You write a story and need a place and a time for it. What are you choosing?",
    options: ["The setting", "The by-line", "The headline", "The key"],
    answer: "The setting",
    explanation: "The setting tells where and when the story happens.",
  },
  {
    prompt: "Which part of a story is the order of events?",
    options: ["The title", "The plot", "The picture", "The key"],
    answer: "The plot",
    explanation: "The plot is the sequence of events.",
  },
  {
    prompt: "Lerato loses her bag. What part of the story is this?",
    options: ["The ending", "The problem", "The setting", "The title"],
    answer: "The problem",
    explanation: "The problem is what goes wrong for the character.",
  },
  {
    prompt: "You plan a story in boxes joined by arrows. What is this planning tool?",
    options: ["A flow chart", "A weather chart", "A recipe", "A by-line"],
    answer: "A flow chart",
    explanation: "A flow chart helps you to plan events in order.",
  },
  {
    prompt: "Where do you put the problem on a flow chart?",
    options: ["In the second box, after the beginning", "In the last box in a program at work", "Before the title on a device in a file", "In the by-line in use for a user"],
    answer: "In the second box, after the beginning",
    explanation: "The beginning comes first, and then the problem.",
  },
  {
    prompt: "Which tense is best for telling a story?",
    options: ["The future tense", "The command form", "The past tense", "The question form"],
    answer: "The past tense",
    explanation: "Most stories tell what happened.",
  },
  {
    prompt: "Which words link paragraphs in a story?",
    options: ["Then, soon and later", "Chop, mix and bake in a file", "Dear friend for a user at a school", "By our reporter in a lab"],
    answer: "Then, soon and later",
    explanation: "Linking words show how events follow each other.",
  },
  {
    prompt: "How do you show the words that a character speaks?",
    options: ["With a heading for a user", "With inverted commas", "With a bullet in a lab for a task", "With a number on a system"],
    answer: "With inverted commas",
    explanation: "Inverted commas mark direct speech.",
  },
  {
    prompt: "A character speaks. Where do you begin the next speaker’s words?",
    options: ["In the same line", "In the title", "In brackets", "On a new line"],
    answer: "On a new line",
    explanation: "A new line shows that a new person speaks.",
  },
  {
    prompt: "Which sentence shows a feeling without saying the word?",
    options: ["Her heart raced", "She was scared", "He felt sad", "They were happy"],
    answer: "Her heart raced",
    explanation: "Showing a feeling with action makes writing lively.",
  },
  {
    prompt: "Where does the ending of a story belong?",
    options: ["In the last box and paragraph", "Before the problem for a user at a school", "In the title in a lab for a task", "In the by-line on a system in a program"],
    answer: "In the last box and paragraph",
    explanation: "The ending solves the problem.",
  },
  {
    prompt: "You find that the problem is solved too quickly. What can you do?",
    options: ["Remove the ending in a program at work", "Delete the title on a device in a file", "Add another try or a surprise", "Change to a recipe in use for a user"],
    answer: "Add another try or a surprise",
    explanation: "More events make the plot more interesting.",
  },
  {
    prompt: "What should you do after writing the first draft?",
    options: ["Hand it in at once", "Hide the title", "Revise and edit it", "Delete the dialogue"],
    answer: "Revise and edit it",
    explanation: "Revising and editing improve the story.",
  },
  {
    prompt: "Which title suits a story about a lost blue bag?",
    options: ["The Lost Blue Bag", "A Weather Report", "How to Make Pancakes", "Dear Diary"],
    answer: "The Lost Blue Bag",
    explanation: "A title names the main event or character.",
  },
];

const StoryWritingPlot = () => (
  <CapsSubjectTopic
    title="Writing a Story with a Plot"
    subtitle="Characters, setting, the plot on a flow chart, a problem and an ending, and writing in paragraphs"
    learnSteps={learnSteps}
    task="eng6-story-writing-plot"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default StoryWritingPlot;
