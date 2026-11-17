import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Who receives a letter to the press?",
    options: ["A friend in a program at work", "A shop owner on a device in a file", "A class teacher in use for a user", "The editor of a newspaper"],
    answer: "The editor of a newspaper",
    explanation: "It is written to the editor. The model text in the lesson shows this.",
  },
  {
    prompt: "What is the purpose of a letter to the press?",
    options: ["To order goods in a program at work", "To invite a friend on a device in a file", "To give a view on a published matter", "To tell a story in use for a user"],
    answer: "To give a view on a published matter",
    explanation: "Readers react to articles. The model text in the lesson shows this.",
  },
  {
    prompt: "Which greeting suits a letter to the press?",
    options: ["Dear mate,", "Hi there,", "Dear Editor,", "Hello friend,"],
    answer: "Dear Editor,",
    explanation: "It is formal. The model text in the lesson shows this.",
  },
  {
    prompt: "Which closing suits Dear Editor?",
    options: ["Your friend, on a system", "Love,", "Cheers,", "Yours faithfully,"],
    answer: "Yours faithfully,",
    explanation: "Dear Editor takes Yours faithfully. The model text in the lesson shows this.",
  },
  {
    prompt: "What should the heading refer to?",
    options: ["The weather at a school", "The price for a task in use", "The article or topic", "The writer's age in a program"],
    answer: "The article or topic",
    explanation: "It tells the editor what you react to. The model text in the lesson shows this.",
  },
  {
    prompt: "What should the first paragraph include?",
    options: ["Your whole life story for a user", "The article and your view", "A list of prices in a lab for a task", "A joke"],
    answer: "The article and your view",
    explanation: "Name the article. The model text in the lesson shows this.",
  },
  {
    prompt: "How long should the letter be?",
    options: ["Several pages for a user at a school", "One word in a lab for a task", "A whole book on a system in a program", "Short and to the point"],
    answer: "Short and to the point",
    explanation: "Editors print short letters. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is a good linking word for reasons?",
    options: ["Banana", "Blue", "Whenever", "Firstly"],
    answer: "Firstly",
    explanation: "It organises the reasons. The model text in the lesson shows this.",
  },
  {
    prompt: "Which sentence is polite?",
    options: ["This is stupid! in a program at work", "I would like to express my concern.", "You are all fools. on a device in a file", "Rubbish! in use for a user"],
    answer: "I would like to express my concern.",
    explanation: "Use polite language. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is stronger as support?",
    options: ["I just feel angry about it", "Everyone knows it is bad", "A fact about library use", "It is bad and that is all"],
    answer: "A fact about library use",
    explanation: "Facts persuade. The model text in the lesson shows this.",
  },
  {
    prompt: "What should a persuasive letter end with?",
    options: ["A joke", "An insult on a system", "A secret at a school", "A clear request"],
    answer: "A clear request",
    explanation: "Say what should happen. The model text in the lesson shows this.",
  },
  {
    prompt: "Which should be avoided in a letter to the press?",
    options: ["Reasons", "Facts", "Polite words in a lab", "Insults and slang"],
    answer: "Insults and slang",
    explanation: "They weaken the argument. The model text in the lesson shows this.",
  },
  {
    prompt: "What is wrong with typing the whole letter in capitals?",
    options: ["It is polite in a program", "It is clear on a device in a file", "It is short in use for a user", "It looks like shouting"],
    answer: "It looks like shouting",
    explanation: "Capitals seem rude. The model text in the lesson shows this.",
  },
  {
    prompt: "Why name the article's date?",
    options: ["The editor can find the article", "It is a rule of maths at work in a lab", "It is decoration in a file on a system", "It is the signature for a user at a school"],
    answer: "The editor can find the article",
    explanation: "It helps to identify it. The model text in the lesson shows this.",
  },
];

const LetterToThePress = () => (
  <CapsSubjectTopic
    title="Writing a Letter to the Press"
    subtitle="Reacting to a newspaper article, the layout of a letter to the editor, giving a clear view with reasons, and a polite persuasive tone"
    learnSteps={learnSteps}
    task="gr8-letter-to-the-press-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default LetterToThePress;
