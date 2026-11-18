import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You paint a picture of a market with words. What kind of paragraph is this?",
    options: ["A recipe in a program at work", "A descriptive paragraph", "A news article on a device", "A diary entry in use for a user"],
    answer: "A descriptive paragraph",
    explanation: "A descriptive paragraph helps the reader to picture a scene.",
  },
  {
    prompt: "Which sentence is a topic sentence for a paragraph about a market?",
    options: ["Mix the flour and the milk in a bowl", "The market is full of colour and noise", "Learners planted twenty trees on Friday", "Dear Diary, today was a long day"],
    answer: "The market is full of colour and noise",
    explanation: "A topic sentence names what you describe.",
  },
  {
    prompt: "Which sentence uses the sense of smell?",
    options: ["Red tomatoes are stacked in tall piles", "Sellers shout their prices at you", "The cloth on the roof is rough", "The smell of warm bread fills the air"],
    answer: "The smell of warm bread fills the air",
    explanation: "Smell details describe what you can smell.",
  },
  {
    prompt: "Which sentence uses the sense of hearing?",
    options: ["The oranges are round in a lab for a task", "Sellers shout their prices above the crowd", "The bread is warm on a system in a program", "The roof is rough at a school on a device"],
    answer: "Sellers shout their prices above the crowd",
    explanation: "Hearing details describe sounds.",
  },
  {
    prompt: "Which of these is a simile?",
    options: ["The oranges are fruit in use for a user", "The oranges are big at work in a lab", "The oranges glowed like small lanterns", "The oranges are on sale in a file on a system"],
    answer: "The oranges glowed like small lanterns",
    explanation: "A simile compares two things with like or as.",
  },
  {
    prompt: "You describe a crisp apple. Which adjective is the most exact?",
    options: ["Nice enough", "Fine enough", "Juicy", "Pleasant enough"],
    answer: "Juicy",
    explanation: "Juicy tells the reader more.",
  },
  {
    prompt: "Which verb shows how a seller speaks across a market?",
    options: ["Shouted", "Spoken to", "Went to", "Got to"],
    answer: "Shouted",
    explanation: "Shouted shows how the words were spoken.",
  },
  {
    prompt: "Why use more than one sense?",
    options: ["It makes the paragraph short at work", "It makes the description rich", "It hides the topic in a file on a system", "It removes details for a user at a school"],
    answer: "It makes the description rich",
    explanation: "Different senses give different details.",
  },
  {
    prompt: "Which sentence does not belong in a paragraph about the market?",
    options: ["The fruit is stacked high at a school on a device", "The bread smells warm for a task in use", "The crowd is noisy in a program at work", "My sister likes to swim at the beach"],
    answer: "My sister likes to swim at the beach",
    explanation: "Every sentence should be about the topic.",
  },
  {
    prompt: "Which tense suits a place that exists now?",
    options: ["The present tense", "The past tense on a system", "The future tense at a school", "The command form for a task"],
    answer: "The present tense",
    explanation: "Describing a current place uses the present tense.",
  },
  {
    prompt: "How many similes are enough in one paragraph?",
    options: ["Fifteen", "One or two", "None, ever", "Twenty"],
    answer: "One or two",
    explanation: "A few similes are fresh, and too many become tiring.",
  },
  {
    prompt: "What does the closing sentence do?",
    options: ["Starts a recipe for a task in use", "Gives the by-line in a program", "Rounds off the description", "Adds the date on a device in a file"],
    answer: "Rounds off the description",
    explanation: "It ends the paragraph neatly.",
  },
  {
    prompt: "Which order helps a description of a scene?",
    options: ["From a random place to another", "From the title to the by-line", "From far to near", "From the end to the date"],
    answer: "From far to near",
    explanation: "A clear order helps the reader to picture the scene.",
  },
  {
    prompt: "Every adjective in your paragraph is nice or good. How can you improve it?",
    options: ["Choose exact adjectives for each noun", "Add more nice words for a task in use", "Delete the paragraph in a program at work", "Add a headline on a device in a file"],
    answer: "Choose exact adjectives for each noun",
    explanation: "Exact words paint a better picture.",
  },
];

const DescriptiveParagraph = () => (
  <CapsSubjectTopic
    title="Writing a Descriptive Paragraph"
    subtitle="Choosing a topic, using the five senses, exact adjectives and similes, and organising your description"
    learnSteps={learnSteps}
    task="eng6-descriptive-paragraph"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default DescriptiveParagraph;
