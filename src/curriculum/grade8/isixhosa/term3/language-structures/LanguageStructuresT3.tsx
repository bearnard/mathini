import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use clauses and word choices to improve sentence variety',
    image: {
      src: '/curriculum/grade8/xho/term3/language-structures/diagram.webp',
      alt: 'Grade 8 learners using adverbs, prepositions, and clause cards while editing sentences',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language work this term covers <strong>adverbs, prepositions, clauses, punctuation,</strong> editing, and
          vocabulary growth.
        </p>
        <p className="text-slate-600">Apply these tools in context to improve sentence flow and precision.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these linking and time words aloud to make sentence building smoother and more accurate.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Kwaye"} phonetic={"[kwa'jɛ]"} meaning={"And"} lang="xh" />
          <PronunciationPlayer word={"Kodwa"} phonetic={"[kɔ'dwa]"} meaning={"But"} lang="xh" />
          <PronunciationPlayer word={"Ngoko"} phonetic={"[ŋɔ'kɔ]"} meaning={"So / therefore"} lang="xh" />
          <PronunciationPlayer word={"Xa"} phonetic={"[ksa]"} meaning={"When / if"} lang="xh" />
          <PronunciationPlayer word={"Namhlanje"} phonetic={"[nam'ɬaɲɛ]"} meaning={"Today"} lang="xh" />
          <PronunciationPlayer word={"Izolo"} phonetic={"[i'zɔlɔ]"} meaning={"Yesterday"} lang="xh" />
          <PronunciationPlayer word={"Ngomso"} phonetic={"[ŋɔm'sɔ]"} meaning={"Tomorrow"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'An adverb usually describes...',
    options: ['how, when, or where an action happens', 'a person only', 'a concrete object only', 'a punctuation mark'],
    answer: 'how, when, or where an action happens',
    explanation: 'Adverbs add information about actions.',
  },
  {
    prompt: 'Choose the correct preposition phrase.',
    options: ['encwadini etafileni', 'encwadini ibaleka', 'encwadini ndibhala?', 'encwadini kakhulu'],
    answer: 'encwadini etafileni',
    explanation: 'It expresses location appropriately with prepositions.',
  },
  {
    prompt: 'A clause is best described as...',
    options: ['a group of words with a verb', 'a single letter', 'a punctuation symbol', 'a page heading'],
    answer: 'a group of words with a verb',
    explanation: 'Clauses contain verbal meaning and form sentence units.',
  },
  {
    prompt: 'Which sentence uses punctuation correctly?',
    options: ['Ndifunda, emva koko ndibhale umsebenzi.', 'Ndifunda emva koko ndibhale umsebenzi,,', 'Ndifunda emva koko ndibhale umsebenzi!', 'Ndifunda emva koko ndibhale umsebenzi?'],
    answer: 'Ndifunda, emva koko ndibhale umsebenzi.',
    explanation: 'The comma is correctly used to separate linked parts.',
  },
  {
    prompt: 'Editing a sentence first requires you to...',
    options: ['identify errors in meaning and form', 'rewrite in another subject', 'erase all verbs', 'remove all punctuation'],
    answer: 'identify errors in meaning and form',
    explanation: 'You must spot problems before correcting them.',
  },
  {
    prompt: 'Vocabulary development helps learners to...',
    options: ['express ideas more precisely', 'avoid reading', 'reduce understanding', 'remove adjectives only'],
    answer: 'express ideas more precisely',
    explanation: 'A wider vocabulary improves clarity and expression.',
  },
  {
    prompt: 'Choose the sentence with a useful adverb.',
    options: ['Ufunda kakuhle yonke imihla.', 'Ufunda yonke imihla?', 'Ufunda yonke imihla!', 'Ufunda yonke imihla,'],
    answer: 'Ufunda kakuhle yonke imihla.',
    explanation: 'Kakuhle adds useful detail about how the action happens.',
  },
  {
    prompt: 'Why combine clause practice with editing?',
    options: ['to improve sentence accuracy and variety', 'to shorten all writing to one line', 'to avoid punctuation completely', 'to replace comprehension tasks'],
    answer: 'to improve sentence accuracy and variety',
    explanation: 'Clause awareness supports stronger sentence construction.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Adverbs, prepositions, clauses, punctuation, editing, and vocabulary"
    learnSteps={learnSteps}
    task="gr8-language-structures-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT3;
