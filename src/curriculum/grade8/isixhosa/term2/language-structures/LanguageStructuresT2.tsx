import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Link ideas accurately with correct grammar forms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language Structures in Term 2 covers <strong>pronouns, direct and indirect speech, question forms,</strong>{' '}
          conjunctions, and concord.
        </p>
        <p className="text-slate-600">Use these structures to report information and connect ideas clearly.</p>
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
    prompt: 'Which word is a pronoun?',
    options: ['bona', 'isikolo', 'baleka', 'namhlanje'],
    answer: 'bona',
    explanation: 'Bona replaces a noun and functions as a pronoun.',
  },
  {
    prompt: 'Direct speech keeps...',
    options: ["the speaker's exact words, in quotation marks", 'only a summary of what the speaker said', 'no punctuation at all in the sentence', 'a changed topic that suits the writer'],
    answer: "the speaker's exact words, in quotation marks",
    explanation: 'Direct speech reports words exactly as spoken.',
  },
  {
    prompt: 'Which sentence is in question form?',
    options: ['Uyafunda namhlanje?', 'Uyafunda namhlanje.', 'Uyafunda namhlanje!', 'Uyafunda namhlanje,'],
    answer: 'Uyafunda namhlanje?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: 'Choose the correct conjunction pair.',
    options: ['ndifunda kuba ndifuna impumelelo', 'ndifunda kodwa kuba impumelelo', 'ndifunda impumelelo ngoba kodwa', 'ndifunda okanye kuba kodwa'],
    answer: 'ndifunda kuba ndifuna impumelelo',
    explanation: 'Kuba links reason clearly in the sentence.',
  },
  {
    prompt: 'Which sentence shows correct concord?',
    options: ['Abafundi bayabhala uvavanyo.', 'Abafundi uyabhala uvavanyo.', 'Abafundi ndibhala uvavanyo.', 'Abafundi siyabhala uvavanyo.'],
    answer: 'Abafundi bayabhala uvavanyo.',
    explanation: 'Plural abafundi correctly matches baya-.',
  },
  {
    prompt: 'Indirect speech usually...',
    options: ['reports what someone said', 'quotes exactly with quotation marks', 'removes all verbs', 'uses no subject'],
    answer: 'reports what someone said',
    explanation: 'Indirect speech paraphrases spoken information.',
  },
  {
    prompt: 'Conjunctions are useful because they...',
    options: ['connect ideas in sentences', 'replace all nouns', 'remove verbs', 'end every paragraph'],
    answer: 'connect ideas in sentences',
    explanation: 'Conjunctions improve flow between related ideas.',
  },
  {
    prompt: 'When editing speech conversion tasks, check...',
    options: ['pronouns and tense consistency', 'only handwriting style', 'paper size only', 'desk arrangement only'],
    answer: 'pronouns and tense consistency',
    explanation: 'Speech conversion often requires pronoun and tense changes.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Pronouns, direct and indirect speech, question forms, conjunctions, and concord"
    learnSteps={learnSteps}
    task="gr8-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
