import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "How does a line of dialogue start in a script?",
    options: ["With an opening quotation mark and a dash", "With a stage direction in brackets", "With the speaker's name and a colon", "With a number and a full stop"],
    answer: "With the speaker's name and a colon",
    explanation: "Each line begins with the speaker's name and a colon.",
  },
  {
    prompt: "Which line is set out correctly in a script?",
    options: ["Thabo: Where is my bag?", "\"Where is my bag?\" said Thabo.", "Thabo said, where is my bag", "Where is my bag, Thabo asked."],
    answer: "Thabo: Where is my bag?",
    explanation: "A script uses the name, a colon and the spoken words.",
  },
  {
    prompt: "What are stage directions?",
    options: ["The words that the actors say aloud on stage", "The title and the author of the play", "The names of the people in the audience", "Notes on how actors speak or move"],
    answer: "Notes on how actors speak or move",
    explanation: "Stage directions are not spoken aloud.",
  },
  {
    prompt: "How are stage directions usually written?",
    options: ["In quotation marks", "In brackets", "In capital letters at the start of the line", "After the final full stop of the scene"],
    answer: "In brackets",
    explanation: "Stage directions are written in brackets.",
  },
  {
    prompt: "Which line has a stage direction?",
    options: ["Lerato: It is behind the door, I promise you!", "\"It is behind the door!\" said Lerato.", "Lerato (laughing): It is behind the door!", "Lerato it is behind the door"],
    answer: "Lerato (laughing): It is behind the door!",
    explanation: "The word laughing in brackets is a stage direction.",
  },
  {
    prompt: "Why does a script not use quotation marks?",
    options: ["The actors speak the words themselves", "The words are not important to the play", "The words are in the past tense", "The words are in a poem"],
    answer: "The actors speak the words themselves",
    explanation: "A script is for performing, so the name and colon show who speaks.",
  },
  {
    prompt: "What does the setting at the top of a script tell you?",
    options: ["Who wrote the play and who directed it", "How long the play will take to perform", "What the audience thinks of the scene", "Where and when the scene is set"],
    answer: "Where and when the scene is set",
    explanation: "The setting describes the place and time of the scene.",
  },
  {
    prompt: "Which character is probably speaking: Um, I think, maybe I can help.",
    options: ["A confident character", "A shy character", "An angry character", "A bossy character"],
    answer: "A shy character",
    explanation: "Hesitant words suggest shyness.",
  },
  {
    prompt: "Why should the lines of dialogue be short?",
    options: ["Long lines are not allowed in any script", "Actors cannot remember long words at all", "People rarely speak in long paragraphs", "Short lines make the play funnier"],
    answer: "People rarely speak in long paragraphs",
    explanation: "Short lines sound more natural.",
  },
  {
    prompt: "What does point of view mean for a character?",
    options: ["How the character sees the situation", "Where the actor stands on the stage during the scene", "The name of the play", "The length of the scene"],
    answer: "How the character sees the situation",
    explanation: "Each character has their own view of what is happening.",
  },
  {
    prompt: "What should the dialogue do for the story?",
    options: ["Describe the weather in detail", "Repeat the earlier lines again", "Introduce a completely new play", "Move the story forward"],
    answer: "Move the story forward",
    explanation: "Good dialogue makes something happen.",
  },
  {
    prompt: "What is the best way to check that your dialogue sounds natural?",
    options: ["Count the words on the page", "Read it aloud with your group", "Copy it into a new book", "Check the colour of the paper"],
    answer: "Read it aloud with your group",
    explanation: "Reading aloud shows lines that sound strange.",
  },
  {
    prompt: "Which part of a script shows a pause or a tone, such as whispering?",
    options: ["The list of characters at the start", "The title of the play", "The stage direction", "The page number"],
    answer: "The stage direction",
    explanation: "A stage direction in brackets shows how to speak.",
  },
  {
    prompt: "What should a short scene have?",
    options: ["A clear beginning, middle and end", "A title, a cast list and a page number", "A set of props, costumes and prices", "A prologue, an epilogue and an index"],
    answer: "A clear beginning, middle and end",
    explanation: "A scene needs a clear structure.",
  },
];

const DramaDialogue = () => (
  <CapsSubjectTopic
    title={"Writing a Dialogue for Drama"}
    subtitle={"The format of a script, stage directions, character and style, and enacting and checking a scene"}
    learnSteps={learnSteps}
    task={"gr7-drama-dialogue-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DramaDialogue;
