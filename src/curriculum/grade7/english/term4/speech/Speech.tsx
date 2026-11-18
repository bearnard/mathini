import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "A speech is divided into three parts. Which list names them in order?",
    options: ["Title, caption and the index page", "Setting, plot and theme", "Opening, body and closing", "Heading, list and number"],
    answer: "Opening, body and closing",
    explanation: "A speech opens, makes its points and closes.",
  },
  {
    prompt: "What should the opening of a speech do?",
    options: ["Greet the audience and catch attention", "Give the audience a very long list of facts", "Say goodbye", "List the names of the writers"],
    answer: "Greet the audience and catch attention",
    explanation: "A good opening makes people want to listen.",
  },
  {
    prompt: "What does the body of a speech contain?",
    options: ["A greeting and a farewell to everyone", "A thank you to the audience", "A list of marks and names", "The main points with examples"],
    answer: "The main points with examples",
    explanation: "Each point needs an example or a fact.",
  },
  {
    prompt: "What does the closing of a speech usually do?",
    options: ["Starts a completely new topic for debate", "Sums up and leaves a final thought", "Repeats the greeting", "Gives a list of rules"],
    answer: "Sums up and leaves a final thought",
    explanation: "The closing ends the speech with a strong final thought.",
  },
  {
    prompt: "Why should you think about your audience before you write a speech?",
    options: ["To make the speech much longer than needed", "To avoid practising", "To choose suitable words and tone", "To use more slang"],
    answer: "To choose suitable words and tone",
    explanation: "The words must suit the listeners.",
  },
  {
    prompt: "Which is a purpose of a speech?",
    options: ["To persuade", "To list ingredients", "To show a timetable", "To record the weather"],
    answer: "To persuade",
    explanation: "A speech can inform, persuade or entertain.",
  },
  {
    prompt: "Which sentence is a rhetorical question?",
    options: ["What time is the assembly?", "Where is the hall?", "How many learners are in Grade 7?", "Who does not want a clean school?"],
    answer: "Who does not want a clean school?",
    explanation: "It is asked for effect and needs no answer.",
  },
  {
    prompt: "Which example uses repetition?",
    options: ["We are in the hall.", "We can. We must. We will.", "Our school is large.", "The bell rang at eight o'clock sharp."],
    answer: "We can. We must. We will.",
    explanation: "The same pattern is repeated to stress an idea.",
  },
  {
    prompt: "Which technique groups ideas in threes for effect?",
    options: ["A rhetorical question", "Repetition", "The rule of three", "A personal story"],
    answer: "The rule of three",
    explanation: "The rule of three groups ideas in threes, such as clean, safe and happy.",
  },
  {
    prompt: "Which delivery habit helps a speaker?",
    options: ["Looking at the audience", "Reading the whole page without looking up", "Speaking as fast as possible", "Whispering throughout"],
    answer: "Looking at the audience",
    explanation: "Eye contact keeps the audience interested.",
  },
  {
    prompt: "What should you write on cue cards?",
    options: ["Your whole speech written out word for word", "The names of the audience", "Your marks", "Key words that remind you of your points"],
    answer: "Key words that remind you of your points",
    explanation: "Cue cards help you speak without reading everything.",
  },
  {
    prompt: "Which register suits a speech to the whole school?",
    options: ["Rude and loud", "Formal and friendly", "Secret and silent", "Slang and shouting at the audience"],
    answer: "Formal and friendly",
    explanation: "The register must suit the audience.",
  },
  {
    prompt: "What should you do after you write your first draft of a speech?",
    options: ["Hand it in at once without reading it", "Throw the title away", "Revise it and practise it aloud", "Make it as long as possible"],
    answer: "Revise it and practise it aloud",
    explanation: "Revising and practising improve a speech.",
  },
  {
    prompt: "Which sentence is the best ending for a speech about keeping the school clean?",
    options: ["Let us all do our part, starting tomorrow.", "That is all I have to say about the topic today.", "I forgot what else to say.", "The end."],
    answer: "Let us all do our part, starting tomorrow.",
    explanation: "A call to action leaves the audience with a final thought.",
  },
];

const Speech = () => (
  <CapsSubjectTopic
    title={"Writing and Giving a Speech"}
    subtitle={"The structure of a speech, audience and purpose, speech techniques and delivery"}
    learnSteps={learnSteps}
    task={"gr7-speech-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Speech;
