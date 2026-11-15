import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './GrammarLiteratureConsolidationSlides';

const bank: CapsItem[] = [
  {
    prompt: 'How does punctuation affect the meaning of a literary passage?',
    options: ['it creates rhythm and emphasis and makes the meaning clear', 'it has no effect on the meaning of a passage', 'it is only there to make the page look neat', 'it always distracts the reader from the passage'],
    answer: 'it creates rhythm and emphasis and makes the meaning clear',
    explanation: 'Careful punctuation shapes how readers experience a text emotionally and intellectually.',
  },
  {
    prompt: 'A character\'s dialogue often reveals...',
    options: ['personality, level of education and emotional state', 'nothing about the character, only the plot', 'only what the narrator wants us to think', 'the spelling mistakes that the author made'],
    answer: 'personality, level of education and emotional state',
    explanation: 'Word choices and speech patterns characterize individuals in literature.',
  },
  {
    prompt: 'What is a recurring theme in literature?',
    options: ['a central idea explored in one text or across several', 'a plot event that takes place a single time', 'the title of a book or of a chapter', 'a minor detail in the background of a scene'],
    answer: 'a central idea explored in one text or across several',
    explanation: 'Recognizing themes helps you understand deeper meaning.',
  },
  {
    prompt: 'When a writer uses active voice in a literary passage, the effect is usually...',
    options: ["direct and powerful, stressing the character's action", 'indirect and passive, hiding who acted', 'confusing and hard for the reader to follow', 'dull, with no variety in the sentences'],
    answer: "direct and powerful, stressing the character's action",
    explanation: 'Voice choice shapes how readers perceive character agency and event impact.',
  },
  {
    prompt: 'What does context-based vocabulary mean?',
    options: ["working out a word's meaning from the text around it", 'memorising the dictionary meanings of the words', 'ignoring the way that words are used in a text', 'looking up each word in a dictionary as you read'],
    answer: "working out a word's meaning from the text around it",
    explanation: 'Context clues help you infer meaning from surrounding words and ideas.',
  },
  {
    prompt: 'A grammatical error in dialogue might indicate...',
    options: ['the character\'s background or education level', 'poor writing by the author only', 'a mistake that ruins the entire text', 'nothing meaningful'],
    answer: 'the character\'s background or education level',
    explanation: 'Dialogue errors are often intentional, revealing character through speech patterns.',
  },
  {
    prompt: 'When answering an integrated MCQ, you should...',
    options: ['name the language feature and explain its effect in the text', 'pick the answer that sounds the most like a literary one', 'ignore the literary context and answer from grammar', 'name the grammar term and say nothing about its effect'],
    answer: 'name the language feature and explain its effect in the text',
    explanation: 'Integration requires connecting both language knowledge and literary analysis.',
  },
  {
    prompt: 'Which answer best demonstrates consolidation of language and literature?',
    options: ["Short sentences create urgency and match the character's panic.", 'Short sentences are used in this part of the passage.', 'Sentences are an important part of all good writing.', 'The passage has many sentences of varying length.'],
    answer: "Short sentences create urgency and match the character's panic.",
    explanation: 'Strong consolidation connects technique, effect, and textual purpose.',
  },
];

const GrammarLiteratureConsolidation = () => (
  <CapsSubjectTopic
    title="Grammar and Literature Consolidation"
    subtitle="Integrated language revision, literary themes, vocabulary and contextual questions"
    learnSteps={learnSteps}
    task="gr9-grammar-literature-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default GrammarLiteratureConsolidation;
