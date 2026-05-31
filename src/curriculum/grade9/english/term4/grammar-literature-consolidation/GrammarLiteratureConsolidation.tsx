import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Integrate language and literature knowledge',
    image: {
      src: '/curriculum/grade9/english/term4/grammar-literature-consolidation/image1.jpg',
      alt: 'learner linking grammar concepts with literary analysis in a passage',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final consolidation brings together grammar skills (punctuation, tense, voice) and literary analysis 
          (theme, device, characterisation). Integrated items on MCQs and contextual questions test your ability to 
          connect language choices to literary meaning.
        </p>
      </div>
    ),
  },
  {
    title: 'Revise vocabulary in context and literary themes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understanding words in context, not just definitions, strengthens comprehension. Recognizing recurring themes 
          across texts (love, conflict, justice, growth) helps you analyse new texts and connect evidence to broader 
          literary patterns.
        </p>
      </div>
    ),
  },
  {
    title: 'Answer integrated questions with confidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Integrated MCQ hooks test one skill at a time while connecting language and literature. Short contextual 
          questions require you to identify grammar, explain literary effects, and justify interpretations using the 
          same evidence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'How does punctuation affect the meaning of a literary passage?',
    options: ['punctuation creates rhythm, emphasis, and clarifies meaning', 'it has no effect on meaning', 'it is only decorative', 'it always distracts from literature'],
    answer: 'punctuation creates rhythm, emphasis, and clarifies meaning',
    explanation: 'Careful punctuation shapes how readers experience a text emotionally and intellectually.',
  },
  {
    prompt: 'A character\'s dialogue often reveals...',
    options: ['personality, education level, and emotional state', 'nothing about the character', 'only what the narrator says', 'the author\'s spelling mistakes'],
    answer: 'personality, education level, and emotional state',
    explanation: 'Word choices and speech patterns characterize individuals in literature.',
  },
  {
    prompt: 'What is a recurring theme in literature?',
    options: ['a central idea explored across multiple texts or within a single text', 'a plot element that only happens once', 'the title of a book', 'minor background detail'],
    answer: 'a central idea explored across multiple texts or within a single text',
    explanation: 'Recognizing themes helps you understand deeper meaning.',
  },
  {
    prompt: 'When a writer uses active voice in a literary passage, the effect is usually...',
    options: ['direct, powerful, and places emphasis on the character\'s action', 'always passive and indirect', 'confusing and unclear', 'boring without variation'],
    answer: 'direct, powerful, and places emphasis on the character\'s action',
    explanation: 'Voice choice shapes how readers perceive character agency and event impact.',
  },
  {
    prompt: 'What does context-based vocabulary mean?',
    options: ['understanding a word\'s meaning from the surrounding text', 'memorizing dictionary definitions only', 'ignoring how words are used', 'guessing wildly'],
    answer: 'understanding a word\'s meaning from the surrounding text',
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
    options: ['identify the language feature and explain its literary effect', 'choose randomly', 'ignore the literary context', 'only name the grammar term'],
    answer: 'identify the language feature and explain its literary effect',
    explanation: 'Integration requires connecting both language knowledge and literary analysis.',
  },
  {
    prompt: 'Which answer best demonstrates consolidation of language and literature?',
    options: ['The writer uses short sentences to create urgency and match the character\'s panic.', 'Short sentences are used here.', 'Sentences are important in writing.', 'The passage has many sentences.'],
    answer: 'The writer uses short sentences to create urgency and match the character\'s panic.',
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
