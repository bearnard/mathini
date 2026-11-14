import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Connectors, passive voice, pronouns, question tags, and concord',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Language Structures focuses on <strong>connectors, passive voice, pronouns,</strong>{' '}
          question tags, and concord.
        </p>
        <p className="text-slate-600">
          Learners improve coherence and accuracy across longer written responses.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these advanced language words when working with reported speech, passive forms, and editing tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Wathi"} phonetic={"[wa'ti]"} meaning={"He / she said"} lang="xh" />
          <PronunciationPlayer word={"Ukuba"} phonetic={"[u'kuba]"} meaning={"That"} lang="xh" />
          <PronunciationPlayer word={"Kuthiwa"} phonetic={"[ku'tiwa]"} meaning={"It is said"} lang="xh" />
          <PronunciationPlayer word={"Kwenziwa"} phonetic={"[kwɛn'ziwa]"} meaning={"It is done / made"} lang="xh" />
          <PronunciationPlayer word={"Isihlanganisi"} phonetic={"[isi.hlaŋga'niːsi]"} meaning={"Connector / conjunction"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing / arranging"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Connectors or linking words help to...',
    options: ['join ideas and show how sentences relate', 'confuse readers about the order of ideas', 'make sentences shorter and more abrupt', 'take the place of nouns in a sentence'],
    answer: 'join ideas and show how sentences relate',
    explanation: 'Connectors create flow and clarify how ideas relate logically.',
  },
  {
    prompt: 'Which word is a connector that shows contrast?',
    options: ['kodwa', 'kanti', 'waya', 'kuba'],
    answer: 'kodwa',
    explanation: 'Kodwa means "but" and introduces contrasting ideas.',
  },
  {
    prompt: 'The passive voice is used when...',
    options: ['the action is more important than who does it', 'you want to emphasize the subject', 'action is not mentioned', 'you are always angry'],
    answer: 'the action is more important than who does it',
    explanation: 'Passive voice shifts focus from the doer to the action or receiver.',
  },
  {
    prompt: 'Pronouns replace...',
    options: ['nouns, to avoid repeating them', 'verbs, to avoid repeating them', 'adjectives, to avoid repeating them', 'adverbs, to avoid repeating them'],
    answer: 'nouns, to avoid repeating them',
    explanation: 'Pronouns like he, she, it, and they make writing less repetitive.',
  },
  {
    prompt: 'A question tag is...',
    options: ['a short question added to the end of a statement', 'a label that is stuck onto a product', 'a mark of punctuation that ends a question', 'a noun that names a thing in a sentence'],
    answer: 'a short question added to the end of a statement',
    explanation: 'Question tags invite confirmation or agreement in conversation.',
  },
  {
    prompt: 'In isiXhosa, subject-verb concord means...',
    options: ['the subject and the verb must agree in form and class', 'words can be placed in any order in a sentence', 'verbs take no notice of their subjects', 'the rules of grammar do not apply to speech'],
    answer: 'the subject and the verb must agree in form and class',
    explanation: 'Concord ensures grammatical agreement and clarity in sentences.',
  },
  {
    prompt: 'Which connector indicates reason or cause?',
    options: ['kuba', 'kwaye', 'kodwa', 'kanti'],
    answer: 'kuba',
    explanation: 'Kuba means "because" and introduces reasons or causes.',
  },
  {
    prompt: 'Pronoun agreement means...',
    options: ['pronouns refer clearly and correctly to their nouns', 'pronouns are chosen by chance in a sentence', 'pronouns do not matter in writing', 'any pronoun can be used in any place'],
    answer: 'pronouns refer clearly and correctly to their nouns',
    explanation: 'Clear pronoun reference prevents confusion and improves readability.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Connectors, passive voice, pronouns, question tags, and concord"
    learnSteps={learnSteps}
    task="gr9-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
