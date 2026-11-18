import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which statement is a stereotype?",
    options: ["The match starts at three.", "Thandi plays in the team.", "Girls are bad at soccer.", "The field is next to the hall."],
    answer: "Girls are bad at soccer.",
    explanation: "It treats a whole group of people as the same.",
  },
  {
    prompt: "Which sentence uses emotive language?",
    options: ["The heartless owner left the helpless puppy.", "The owner gave the puppy to a neighbour.", "The owner took the puppy for its yearly check.", "The puppy is a year old and plays outside."],
    answer: "The heartless owner left the helpless puppy.",
    explanation: "Heartless and helpless are emotive words.",
  },
  {
    prompt: "What is bias in a text?",
    options: ["A fact that anyone can check easily", "A rule of grammar for writers", "A question with no answer", "A one-sided view of an issue"],
    answer: "A one-sided view of an issue",
    explanation: "A biased text favours one side.",
  },
  {
    prompt: "Which sentence shows bias?",
    options: ["Our team won the match by two goals at home.", "Our team is brilliant and the other team cheats.", "The match started at three o'clock this afternoon.", "The score was two to nil at half time."],
    answer: "Our team is brilliant and the other team cheats.",
    explanation: "It praises one team and blames the other without proof.",
  },
  {
    prompt: "What is prejudice?",
    options: ["A proven scientific fact about the world", "A polite way of speaking to elders", "An unfair opinion formed without facts", "A rule of spelling for new words"],
    answer: "An unfair opinion formed without facts",
    explanation: "Prejudice is an unfair judgement made without knowing the facts.",
  },
  {
    prompt: "Which question is a rhetorical question?",
    options: ["Who would not want to save money?", "What time does the bus leave for town?", "Where is the library in this building?", "How many learners are here?"],
    answer: "Who would not want to save money?",
    explanation: "It is asked for effect and expects no answer.",
  },
  {
    prompt: "Which word is the most emotive way to describe a lost match?",
    options: ["scoreline", "final result", "match outcome", "catastrophe"],
    answer: "catastrophe",
    explanation: "Catastrophe is a strong, emotional word.",
  },
  {
    prompt: "A writer wants readers to feel angry. Which word helps?",
    options: ["ordinary", "outrageous", "unremarkable", "normal"],
    answer: "outrageous",
    explanation: "Outrageous is an emotive word that suggests anger.",
  },
  {
    prompt: "Which sentence is neutral and factual?",
    options: ["The greedy shop closed early.", "The shop shamefully shut its doors.", "The shop closed at five o'clock.", "The shop heartlessly turned us away."],
    answer: "The shop closed at five o'clock.",
    explanation: "It states a fact without emotive words.",
  },
  {
    prompt: "Why do advertisers use emotive language?",
    options: ["To make you feel something so that you buy", "To give you a clear and complete list of facts", "To test your spelling and your grammar", "To teach you new rules about language"],
    answer: "To make you feel something so that you buy",
    explanation: "Emotive words influence how readers feel.",
  },
  {
    prompt: "How can you check a text for bias?",
    options: ["Count how many words are on each page", "Check the size of the font on the cover", "Look at which page the text appears on", "Ask who wrote it and what is left out"],
    answer: "Ask who wrote it and what is left out",
    explanation: "Bias is found by asking about the writer and the missing side.",
  },
  {
    prompt: "Which statement treats every teenager as the same?",
    options: ["Teenagers sit exams in Grade 12.", "Teenagers are lazy.", "Teenagers are between thirteen and nineteen.", "Many teenagers play sport."],
    answer: "Teenagers are lazy.",
    explanation: "It treats every teenager as the same.",
  },
  {
    prompt: "What is a stereotype?",
    options: ["A proven fact about one single person", "A word with two meanings in a text", "A fixed idea about a group of people", "A question asked just for effect"],
    answer: "A fixed idea about a group of people",
    explanation: "A stereotype oversimplifies a whole group.",
  },
  {
    prompt: "Which sentence uses manipulative language?",
    options: ["Only a fool would miss this sale!", "The sale starts on Monday.", "The shop sells shoes and school bags.", "The sale ends on Friday."],
    answer: "Only a fool would miss this sale!",
    explanation: "It pushes the reader to buy by insulting those who do not.",
  },
];

const BiasEmotiveLanguage = () => (
  <CapsSubjectTopic
    title={"Bias, Stereotypes and Emotive Language"}
    subtitle={"Bias and prejudice, stereotypes, emotive and manipulative language and rhetorical questions"}
    learnSteps={learnSteps}
    task={"gr7-bias-emotive-language-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default BiasEmotiveLanguage;
