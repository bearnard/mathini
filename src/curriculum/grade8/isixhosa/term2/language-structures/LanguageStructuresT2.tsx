import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Link ideas accurately with correct grammar forms',
    image: {
      src: '/curriculum/grade8/xho/term2/language-structures/diagram.webp',
      alt: 'Grade 8 learners practising pronouns, conjunctions, and direct-indirect speech conversion',
    },
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
    options: ['the speaker’s exact words', 'only a summary', 'no punctuation', 'a changed topic'],
    answer: 'the speaker’s exact words',
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
