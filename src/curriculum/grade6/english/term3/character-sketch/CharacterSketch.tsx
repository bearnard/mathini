import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You write about your grandmother so that readers can picture her. What kind of writing is this?",
    options: ["A recipe in a program", "A character sketch", "A weather report on a device", "A news article in use"],
    answer: "A character sketch",
    explanation: "A character sketch describes a person.",
  },
  {
    prompt: "Which part of a sketch tells how a person looks?",
    options: ["The setting part of the story", "The plot part of the story", "The appearance part", "The problem part of the story"],
    answer: "The appearance part",
    explanation: "Appearance describes the face, height and clothes.",
  },
  {
    prompt: "Which sentence shows a trait?",
    options: ["She is a person who lives in a house", "She has hair", "She shares her food with neighbours", "She is tall"],
    answer: "She shares her food with neighbours",
    explanation: "An action that shows kindness proves the trait.",
  },
  {
    prompt: "You write that a boy looks at his shoes when people speak to him. Which trait does this show?",
    options: ["Shyness", "Anger", "Cleverness", "Laziness"],
    answer: "Shyness",
    explanation: "Looking down shows that he is shy.",
  },
  {
    prompt: "Which is better writing than saying she is nice?",
    options: ["She gave her lunch to a hungry friend", "She is a nice person at work in a lab", "She is very, very nice in a file on a system", "She is nice nice for a user at a school"],
    answer: "She gave her lunch to a hungry friend",
    explanation: "A clear example shows kindness.",
  },
  {
    prompt: "You describe a kind grandmother. Which adjective is the most exact?",
    options: ["Generous", "Nice enough", "Fine enough", "Pleasant enough"],
    answer: "Generous",
    explanation: "Exact adjectives paint a clearer picture.",
  },
  {
    prompt: "Which verb shows how an old woman walks?",
    options: ["Went along", "Moved along", "Shuffled", "Travelled along"],
    answer: "Shuffled",
    explanation: "Shuffled shows how she walks.",
  },
  {
    prompt: "What should the introduction of a sketch do?",
    options: ["Give the ending of the story now", "Give the recipe and the date together", "Give the weather for the week", "Name the person and give a first view"],
    answer: "Name the person and give a first view",
    explanation: "The introduction presents the person.",
  },
  {
    prompt: "Where do you put the examples of personality?",
    options: ["In the title only in a program at work", "In the by-line on a device in a file", "In the personality paragraph", "In the key in use for a user"],
    answer: "In the personality paragraph",
    explanation: "Each trait should have an example.",
  },
  {
    prompt: "Which person is used for a character sketch?",
    options: ["The first person", "The second person", "The third person", "A command"],
    answer: "The third person",
    explanation: "A sketch describes he, she or the name.",
  },
  {
    prompt: "You describe your grandmother who is alive. Which tense suits?",
    options: ["The present tense", "The past tense on a system", "The future tense at a school", "The command form for a task"],
    answer: "The present tense",
    explanation: "Present tense suits a person you know now.",
  },
  {
    prompt: "How many ideas should one paragraph have?",
    options: ["One main idea", "Five different ideas", "No clear idea", "As many as possible"],
    answer: "One main idea",
    explanation: "A paragraph stays on one idea.",
  },
  {
    prompt: "Your sketch repeats the word nice again and again. What is the best fix?",
    options: ["Add more nice on a system in a program", "Replace it with exact adjectives", "Delete the sketch at a school on a device", "Add a headline for a task in use"],
    answer: "Replace it with exact adjectives",
    explanation: "Exact adjectives are more interesting.",
  },
  {
    prompt: "Which closing sentence suits a sketch?",
    options: ["Then the whistle blew at work in a lab", "Add two cups of flour in a file on a system", "Turn left at the shop for a user at a school", "I love Gogo because she welcomes everyone"],
    answer: "I love Gogo because she welcomes everyone",
    explanation: "A good ending shows what the person means to you.",
  },
];

const CharacterSketch = () => (
  <CapsSubjectTopic
    title="Writing a Character Sketch"
    subtitle="Choosing a character, describing looks and personality, showing what a person does, and organising paragraphs"
    learnSteps={learnSteps}
    task="eng6-character-sketch"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CharacterSketch;
