import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You draw a row of boxes that tell a story. What is each box called?",
    options: ["A headline", "A by-line", "A key", "A panel"],
    answer: "A panel",
    explanation: "Each box in a comic strip is a panel.",
  },
  {
    prompt: "Which part of a comic shows what a character says?",
    options: ["A speech bubble", "A caption for a user", "A by-line in a lab", "A title"],
    answer: "A speech bubble",
    explanation: "Speech bubbles hold the words that characters say.",
  },
  {
    prompt: "A bubble with small circles shows what a character thinks. What is it called?",
    options: ["A thought bubble", "A caption in use for a user", "A panel", "A title"],
    answer: "A thought bubble",
    explanation: "A thought bubble shows thoughts, not speech.",
  },
  {
    prompt: "A box says Monday morning. What is it?",
    options: ["A caption", "A speech bubble", "A sound word", "A speaker"],
    answer: "A caption",
    explanation: "A caption tells where or when.",
  },
  {
    prompt: "You write BANG next to a door. What is this?",
    options: ["A headline for a task", "A recipe in a program", "A sound word", "A key"],
    answer: "A sound word",
    explanation: "Sound words show noises.",
  },
  {
    prompt: "How many panels are enough for a short comic?",
    options: ["Four to six", "One hundred", "None", "Fifty"],
    answer: "Four to six",
    explanation: "A short comic needs only a few panels.",
  },
  {
    prompt: "Which panel usually shows the problem?",
    options: ["The second panel", "The final panel at work", "A blank panel in a file", "The title panel for a user"],
    answer: "The second panel",
    explanation: "The problem appears after the characters are introduced.",
  },
  {
    prompt: "In a script, what do you write after the panel number?",
    options: ["The date for a task in use", "The weather in a program at work", "The by-line on a device in a file", "A description of the picture"],
    answer: "A description of the picture",
    explanation: "The description tells the artist what to draw.",
  },
  {
    prompt: "In which tense do you describe a picture in a script?",
    options: ["The present tense", "The past tense at a school", "The future tense for a task", "The command form in a program"],
    answer: "The present tense",
    explanation: "A script describes what the picture shows now.",
  },
  {
    prompt: "Which sentence is a good speech bubble?",
    options: ["I am writing to inform you that I will be late for school today.", "The boy, who was walking to school, saw that his shoe had come off and said that he would be late.", "Late late late late late late", "Oh no, I will be late!"],
    answer: "Oh no, I will be late!",
    explanation: "Speech bubbles are short and natural.",
  },
  {
    prompt: "Why keep words short in a comic?",
    options: ["Comics cannot use words on a system in a program", "Words are not allowed at a school on a device", "The pictures help to tell the story", "The reader cannot read for a task in use"],
    answer: "The pictures help to tell the story",
    explanation: "Pictures carry much of the story.",
  },
  {
    prompt: "Why write the speaker’s name before the words in a script?",
    options: ["So the title is longer", "So it is clear who speaks", "So the picture is removed", "So the panel is blank"],
    answer: "So it is clear who speaks",
    explanation: "The name shows who says the words.",
  },
  {
    prompt: "What should the last panel do?",
    options: ["Solve the problem or give a surprise", "Start a new problem for a user at a school", "Repeat the title in a lab for a task", "Stay empty on a system in a program"],
    answer: "Solve the problem or give a surprise",
    explanation: "The last panel gives the ending.",
  },
  {
    prompt: "Which mark shows strong feeling or noise?",
    options: ["A full stop in a lab for a task", "An exclamation mark", "A comma", "A dash"],
    answer: "An exclamation mark",
    explanation: "Exclamation marks show strong feeling.",
  },
];

const ComicStripScript = () => (
  <CapsSubjectTopic
    title="Comic Strips and Writing a Comic Script"
    subtitle="Panels, speech bubbles, captions, sound words, and a script that tells a short story in pictures and words"
    learnSteps={learnSteps}
    task="eng6-comic-strip-script"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ComicStripScript;
